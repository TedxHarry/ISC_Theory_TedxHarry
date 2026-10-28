import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { parseHTML } from "linkedom";
import { parse } from "yaml";
const root = new URL("../", import.meta.url);
const read = p => readFile(new URL(p, root), "utf8");
const baseline = process.argv.find(x => x.startsWith("--baseline="))?.split("=")[1];
assert.match(baseline || "", /^[0-9a-f]{40}$/);
const live = process.argv.includes("--live");
const changed = execFileSync("git", ["diff", "--name-only", baseline], {cwd:root,encoding:"utf8"}).trim().split(/\r?\n/).filter(p=>p.startsWith("lessons/"));
const expectedChanged = Number(process.argv.find(x => x.startsWith("--expected-lessons="))?.split("=")[1] ?? 63);
assert.ok(Number.isInteger(expectedChanged) && expectedChanged > 0);
assert.equal(changed.length,expectedChanged);
const course = parse(await read("_data/course.yml"));
const config = parse(await read("_config.yml"));
assert.equal(course.lessons.length,91);
const norm = s => s.replace(/\r\n/g,"\n").trimEnd();
const prose = s => s.normalize("NFKC").replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[–—]/g,"-").replace(/…/g,"...").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();
const inline = s => prose(s.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/\*\*|__|\x60|(?<!\w)\*(?!\s)|(?<!\s)\*(?!\w)/g,"").replace(/\\([|*_])/g,"$1"));
function units(md) {
 const body=md.replace(/^`{3}[^\n]*\n[\s\S]*?^`{3}\s*$/gm,"");
 const out=[];
 for (const block of body.split(/\n\s*\n/)) {
  const lines=block.trim().split("\n").map(x=>x.replace(/^\s*>\s?/,""));
  if(!block.trim())continue;
  if(lines.every(x=>/^\s*\|/.test(x))) {
   for(const line of lines) {
    if(/^\s*\|[\s:|-]+\|\s*$/.test(line))continue;
    for(const cell of line.trim().replace(/^\||\|$/g,"").split(/(?<!\\)\|/))if(inline(cell))out.push(inline(cell));
   }
  } else if(lines.some(x=>/^\s*(?:[-*+] |\d+[.)] |#{1,6} )/.test(x))) {
   for(const line of lines)if(inline(line))out.push(inline(line.replace(/^\s*(?:[-*+] |\d+[.)] |#{1,6} )/,"")));
  } else out.push(inline(lines.join(" ")));
 }
 return out.filter(Boolean);
}
const tableCount = md => (md.replace(/^`{3}[^\n]*\n[\s\S]*?^`{3}\s*$/gm,"").match(/^\|[-|: ]+\|[ \t]*$/gm)||[]).length;
const assets=(await readdir(new URL("assets/",root))).filter(p=>p.endsWith(".txt"));
const assetText=new Map(await Promise.all(assets.map(async p=>[p,norm(await read("assets/"+p))])));
let diagrams=0,tables=0,localUnits=0;
const source=new Map();
for(const path of changed) {
 const md=await read(path); source.set(path,md);
 const id=path.split("/")[1].slice(0,7);
 const record=await read("author/revisions/"+id+"_Concept_Led_Revision_Record.md");
 assert.ok(/revision\s*:?\s*2\.0/i.test(record),id+" revision record");
 assert.ok(!record.includes("Pending final save-time checks."));
 for(const m of md.matchAll(/^`{3}text\n([\s\S]*?)\n^`{3}/gm)) {
  const block=norm(m[1]);
  if([...assetText.values()].includes(block)) {
   diagrams++;
   assert.ok(Math.max(...block.split("\n").map(x=>x.length))<=42,id+" diagram width");
  }
 }
 tables+=tableCount(md);
 localUnits+=units(md).length;
}
const revisedRecords=(await readdir(new URL("author/revisions/",root))).filter(p=>p.endsWith("_Concept_Led_Revision_Record.md")).length;
const report={changedLessons:changed.length,availableLessons:course.lessons.length,revisedRecords,diagrams,tables,localContentUnits:localUnits,assets:assets.length,live};
if(live) {
 const origin=config.url+config.baseurl;
 let pages=0,compared=0;
 const errors=[];
 const queue=[...course.lessons];
 async function fetchText(path) {
  const r=await fetch(origin+path+"?publication="+process.env.ISC_PUBLICATION_SHA,{signal:AbortSignal.timeout(45000)});
  assert.equal(r.status,200,path+" HTTP");
  return r.text();
 }
 async function worker() {
  while(queue.length) {
   const lesson=queue.shift();
   try {
    const doc=parseHTML(await fetchText(lesson.url)).document;
    const panel=doc.querySelector("details.course-navigation");
    assert.ok(panel);
    const links=[...panel.querySelectorAll("nav a")].map(a=>a.getAttribute("href"));
    assert.deepEqual(links,course.lessons.map(x=>config.baseurl+x.url),lesson.source+" navigation");
    assert.equal(doc.querySelectorAll("details.nav-module").length,12);
    const current=doc.querySelectorAll('[aria-current="page"]');
    assert.equal(current.length,1);
    assert.equal(current[0].getAttribute("href"),config.baseurl+lesson.url);
    const open=[...doc.querySelectorAll("details.nav-module[open]")];
    assert.equal(open.length,1);
    assert.equal(open[0].querySelector("summary").id,"nav-"+lesson.module);
    const article=doc.querySelector("article.lesson-content"); assert.ok(article);
    if(source.has(lesson.source)) {
     const md=source.get(lesson.source),text=prose(article.textContent);
     for(const unit of units(md)) {assert.ok(text.includes(unit),lesson.source+" missing: "+unit.slice(0,150));compared++;}
     const blocks=[...md.matchAll(/^`{3}[^\n]*\n([\s\S]*?)\n^`{3}/gm)].map(x=>norm(x[1]));
     const rendered=[...article.querySelectorAll("pre")].map(x=>norm(x.textContent));
     assert.deepEqual(rendered,blocks,lesson.source+" code blocks");
     assert.ok([...article.querySelectorAll("pre")].every(x=>x.getAttribute("tabindex")==="0"));
     assert.equal(article.querySelectorAll("table").length,tableCount(md));
     assert.ok([...article.querySelectorAll("table")].every(x=>x.parentElement.classList.contains("table-scroll")));
    }
    pages++;
   }catch(e){errors.push({path:lesson.source,error:e.message});}
  }
 }
 await Promise.all(Array.from({length:5},worker));
 const assetQueue=[...assets];let assetCount=0;
 async function assetWorker(){while(assetQueue.length){const p=assetQueue.shift();try{assert.equal(norm(await fetchText("/assets/"+p)),assetText.get(p),p+" content");assetCount++;}catch(e){errors.push({path:p,error:e.message});}}}
 await Promise.all(Array.from({length:5},assetWorker));
 report.livePages=pages;report.comparedContentUnits=compared;report.liveAssets=assetCount;report.errors=errors;
}
console.log(JSON.stringify(report));
if(report.errors?.length)process.exitCode=1;
