# TRN-006 concept-led revision record

Revision 2.0. Module 8.6. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [Which moment does this date actually mean?](../../lessons/TRN-006_Formatting_and_Comparing_Dates_and_Time_Zones.md).

## Scope and review status

One existing learner lesson revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference content is preserved and original diagram files remain unchanged. Other learners, pilots, specification, tracing guide, README, publication records, manifest/templates/styles/navigation and site code are outside this task.

Documentation-based author content/first-use/source/narration review complete. Beginner teach-back/unfamiliar-example validation, full graphical publication review and formal approval remain pending. TRN-007 is next; its learner body is not opened. New authoring remains paused at ROL-007. No commit, push or deployment.

## Changes and teaching decisions

The revision starts with the exact approved moment and equality decision, establishes minimal source context, traces parsing/formatting and the complete comparison, then completes evaluation/application/current-field reasoning before deeper representation, zone, numeric-time, arithmetic, missing-data and scheduling variations.

Removed the fictional employee, number, identity/account labels and source brand. HR-Primary is a neutral reference needed by the definitions. Main dates, patterns, offsets, result labels, arithmetic, eight question purposes and local inclusive-day transfer remain. The supplied 17:03 fact is explicitly an evaluation during processing, not merely a completion timestamp being used to infer when now was sampled.

Supporting concepts are explained beside their actual use: timestamp/instant/offset, pattern letters, nesting, input/output contracts, a stored value versus live clock, and conditional external effects. Fallback warning describes a supported substitute at comparison level rather than implying dateFormat accepts a now keyword. No extra frontend behavior or local-time conversion setting is invented.

Three full JSON examples, two useful tables and two diagrams remain for their specific purposes. No quota or word-count target applies. Eight prompts precede separate worked reasoning; scope and technical qualifications stay in prose without learner citations or teaching-method commentary.

## Preserved coverage

| Original purpose or condition | Revision location | Retained causal explanation |
|---|---|---|
| Approved boundary and equality | Opening | October 23 2026 17:00 UTC, source text, before versus reached at equality; not end-of-day policy. |
| Date-only meaning | Date/moment section | Calendar day lacks time and zone; cannot silently identify an instant. |
| Timestamp and instant | Date/moment section | Date/time representation versus one exact point on time line. |
| UTC/T/Z notation | Date/moment section | T separates date/time, Z means UTC reference. |
| Offset meaning and equivalence | Date/moment section; question 4 | 22:30 +05:30 equals 17:00Z; different clock reading not necessarily elapsed delay. |
| Unqualified local clock | Date/moment section | No offset requires approved zone context, not browser/reader location. |
| Identity/account/attribute/source | Field context | Managed entity, external record, named field and HR-Primary representation. |
| Profile and authority | Field context | Employees shared mapping and authoritative worker-account identity origin. |
| Collected and correctly associated input | Field context | Aggregation/correlation already done; one account, single assignmentEnd, valid other required fields. |
| Correct provenance | Field context | Accurate date from wrong account still wrong deadline. |
| Custom field and scope | Field context | assignmentBoundaryReview review-only; no access/status/account action or employment termination. |
| Mapping purpose | Field context | Instructions populate identity field; root name not destination. |
| Transform/input/output meanings | Formatting section | Configurable retrieval/manipulation returning result. |
| Parsing versus formatting | Formatting section | Interpret components then represent same instant; not deliberate arithmetic. |
| Actual input pattern | Pattern table | MM/dd/yyyy HH:mm:ss Z matches supplied text/zero offset. |
| Pattern components | Pattern table | MM/dd/yyyy/HH/mm/ss/SSS/Z explained with actual values and precision. |
| SimpleDateFormat notation | Formatting section | Java pattern meaning only; capitalization significant. |
| Year/day case pitfalls | Formatting section | YYYY week-based versus yyyy calendar; DD day-year versus dd day-month. |
| Named ISO contract | Formatting section | Supported ISO8601 includes date/time/milliseconds/offset; not every ISO-like string interchangeable. |
| Minimal JSON and boolean | Formatting section | Objects/settings/quoted strings/unquoted true before definitions. |
| Retrieval and nesting | Formatting section | Associated-account field retrieval, inner returned value supplies outer operation. |
| First full dateFormat | First JSON | Explicit HR-Primary/assignmentEnd/true flag, actual input pattern to named ISO output. |
| Root/settings/name | Formatting section | dateFormat behavior, attributes ownership and mapping use. |
| Return-first flag and null | Formatting section | Selected null possible, not date repair/error suppression; one usable main account. |
| Equivalent returned representation | Formatting section | 17:00 UTC equivalent .000Z, actual offset/spelling must be checked, no exact serialization promise. |
| No stored intermediate requirement | Formatting/comparison | Second definition embeds step; standalone need not exist separately or create identity field. |
| DateCompare meaning and input | Comparison section | Supported ISO values or now, configured true/false strings. |
| Now at evaluation | Comparison section; normal path | Not collection/save/current browser time; changing input despite unchanged deadline. |
| Operand direction | Comparison section; question 3 | firstDate left, secondDate right, complete statement matters. |
| Four operators | Comparison section | lt/lte/gt/gte relationships; equality tied to policy. |
| Main inclusive comparison | Second JSON | Now gte interpreted end; Boundary reached/Before boundary strings. |
| Logical dependency diagram | First diagram | Account text -> parse/ISO -> compare -> mapped label, not private execution services. |
| Boundary table | Comparison section | 16:59 false, 17:00 inclusive true, 17:01 true. |
| Strict gt and swapped dates | Comparison section; questions 2-3 | Equality false under gt; end gte now reverses meaning. |
| Preview versus applied result | Normal path | Selected evaluation varies with now; stored field is applied result, not live expression. |
| Complete successful continuation | Normal path | Reviewed shared use, saved checked config, supplied evaluation during processing at 17:03 and current reached field. |
| Clock/evidence diagram | Second diagram | 16:59 evaluation, 17:00 boundary, 17:03 supplied processing evaluation; no exact cutoff run/delivery promise. |
| Source unchanged and separate consumers | Normal path | No HR deadline move, employment/account change; consumer/provisioning explained. |
| Date-only precision loss | Shorter text; question 5 | yyyy-MM-dd drops time/offset; explicit midnight reconstruction shifts deadline 17 hours. |
| Ambiguous parsing | Shorter text; question 1 | 03/04 month/day March 4 versus approved day/month April3, can parse successfully but wrong. |
| Offset pattern spelling | Shorter text | Z for +0000, XXX supports colon offset; actual input representation matters. |
| Literal Z versus conversion | Shorter text | Quoted Z is literal; adding it to local clock doesn't convert moment. |
| Zone versus offset | Time-zone section | Named zone has date-dependent rules, fixed offset is displacement only. |
| DST gaps and overlaps | Time-zone section | Skipped or repeated local readings need agreed interpretation; no ISC strategy invented. |
| Local date cutoff questions | Time-zone section | Start/end/working hour, named zone and equality must be established. |
| String sorting boundary | Time-zone section | Month-first/year order and different offsets make arbitrary lexical comparisons unsafe. |
| Offset ordering example | Time-zone section | 17:00+02 is 15:00Z, earlier than 16:00Z. |
| Epoch meaning | Numeric dates | Count from origin, unit essential. |
| Named epoch formats | Numeric dates | Java milliseconds from 1970; Win32 100ns from 1601, not arbitrary numeric interchange. |
| Never-expires producer values | Numeric dates | Reserved sentinel meanings need producer documentation; not ordinary date by appearance. |
| DateMath purpose and units | Arithmetic section | Add/subtract/round; -24h, M month/m minute, months variable length. |
| Third fixed JSON/static | Third JSON | Static UTC literal illustrates -24h, not per-person retrieval/reminder schedule. |
| Arithmetic expected point | Arithmetic section | October 22 17:00 UTC from October 23 17:00 UTC. |
| DateMath contracts | Arithmetic section; question 6 | UTC supported ISO input, documented yyyy-MM-dd'T'HH:mm output lacks seconds/offset. |
| Composition adaptation | Arithmetic section | dateFormat actual pattern -> supported ISO before dateCompare; verify UTC interpretation/precision, no cosmetic Z fix. |
| Rounding meaning | Arithmetic section | now/d explicit roundUp false truncates operation-context day, not worker local end-of-day. |
| Precision loss by rounding | Arithmetic section | Dropping hours changes exact 17:00 comparison. |
| DateMath now precedence | Arithmetic section | Expression now overrides input; not secret arithmetic from HR deadline. |
| DateFormat now unsupported | Arithmetic section | Operations have different keyword contracts. |
| Missing and malformed states | Missing-date section | Null/empty/whitespace/malformed/business-invalid differ; neither proves comparison true or false. |
| False branch not error handling | Missing-date section | Negative handles successful false, not failed read/parse/config. |
| Calendar validation/leniency | Missing-date section | Pattern doesn't prove strict rejection of Feb30; no exact ISC parser behavior/setLenient API recipe invented. |
| Fallback authority and representation | Missing-date section | Substituted evaluation instant yields reached, far-future hides absence; supported representation and approval required. |
| Absence meaning | Missing-date section | No scheduled end/not yet recorded/failed retrieval differ. |
| Reevaluation design | Reevaluation section | Clock passage/now/arithmetic not schedule; appropriate eligible processing required. |
| Periodic refresh limits | Reevaluation section | Documented option requests periodic reevaluation, not exact/second timer; definitions omit scheduling. |
| Queue and tenant conditions | Reevaluation section | Eligibility/configuration/queued execution may delay runs. |
| nextProcessing supporting concept | Reevaluation section | Future time-based processing field, separately mapped per profile, ISO and >=1 hour after attribute update. |
| No automatic scheduling/delivery | Reevaluation section | Computing date alone doesn't configure/apply nextProcessing or prove target action. |
| Investigation evidence | Reevaluation section | Identity/mapping/account/text/format/offset/policy/evaluation/processing/current field and separate target. |
| Eight assessment purposes | Prompts/separate reasoning | All original changed-condition purposes and valid alternatives retained. |
| Local inclusive-date transfer | Final exercise | ThroughoutNov1 -> first excluded start November 2 in actual named zone/rules, not UTC startNov1. |
| Elapsed versus calendar lead | Final exercise | 24 elapsed hours versus same local clock prior day can differ across clock changes. |
| Transfer evidence/alternatives | Final exercise | Obtain missing zone/authority, supported conversion/arithmetic, reevaluation/application/separate delivery; no invented numeric offset. |

## Exact hypothetical evidence

Employees governs an existing identity, authoritative HR-Primary has one correctly correlated collected account, single assignmentEnd text `10/23/2026 17:00:00 +0000`. Approved project boundary is October 23 2026 17:00 UTC, inclusive reached side; not employment termination. Other required attributes valid. Custom assignmentBoundaryReview is review-only, not access/status/account-action configuration.

First definition is standalone illustrative dateFormat, input MM/dd/yyyy HH:mm:ss Z, output ISO8601, explicit HR-Primary/assignmentEnd accountAttribute true return-first flag. Equivalent represented instant `2026-10-23T17:00:00.000Z` is shown, not an exact tenant serialization promise. Second definition embeds that complete step as dateCompare secondDate, firstDate now, operator gte and Boundary reached/Before boundary outputs. Only roots named; no intermediate field or separately invoked standalone object required.

Supplied evaluations on October 23 at 16:59/17:00/17:01 produce Before/reached/reached. Shared review and checked saved intended configuration precede supplied authorized evaluation during processing at 17:03; current field then confirmed reached. This is not a guarantee of exact 17:00 execution or inference of evaluation time from job completion. HR text unchanged; no employment/access/account/target outcome.

Third definition independently uses static UTC `2026-10-23T17:00:00.000Z` under dateMath -24h. Arithmetic point October 22 17:00 UTC; documented short output `2026-10-22T17:00` needs supported adaptation and verified UTC/precision before dateCompare. No dynamic retrieval, reminder schedule or guessed zone attribute.

Other checks: 22:30+05:30 equals17Z;17+02 equals15Z earlier than16Z; date-only explicitly reconstructed as00:00UTC shifts cutoff17h earlier; 03/04 under dd/MM is April 3 versus MM/dd March 4. Same patterns are not treated as interchangeable. YYYY/DD and M/m meanings are explicit; no exact parser leniency/locale/month-edge outcome claimed.

DateMath rounding uses explicit roundUp false in the prose example; no omitted default assumed. Now precedence is scoped to dateMath; dateFormat now unsupported. Scheduled/periodic/nextProcessing concepts include eligibility/queue/per-profile/future ISO/>=1 hour constraints without exact arbitrary delivery. Main definitions configure none of these schedules.

Local-end transfer preserves 2026-11-01 throughout unspecified partner named zone; first excluded start November 2 requires actual rules. No guessed local zone/offset/DST date is supplied. Warning means elapsed 24 hours versus previous local calendar day only after agreement.

All dates/evaluations/results are hypothetical teaching evidence; no actual tenant observation.

## Primary-source verification

| Primary source | Claims reviewed October 27, 2026 | Application and limits |
|---|---|---|
| [Date Format](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-format/) | Input/output patterns, SimpleDateFormat syntax, ISO8601/epoch named formats, explicit input, unsupported now input | First/nested definitions; no unverified default zone, arbitrary zone setting or exact output spelling. |
| [Date Compare](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-compare/) | ISO or now dates, left/right direction, lt/lte/gt/gte, configured positive/negative strings | Main comparison/equality/operand cases; no invented missing/error outcome. |
| [Date Math](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-math/) | UTC ISO input, -24h/component units, rounding, now precedence, short output and adaptation, periodic-refresh option | Fixed third definition and contract discussion; no exact scheduling, arbitrary timezone or calendar-edge runtime assumption. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated source/field retrieval and true accountReturnFirstLink returning selected null | Actual provenance/one main account; not error suppression. |
| [Static](https://developer.sailpoint.com/docs/extensibility/transforms/operations/static/) | Fixed string output | Literal UTC dateMath illustration only; no Velocity or per-person retrieval recipe. |
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | JSON/root name/type/settings, nested value dependencies, explicit input | Definition interpretation; no stored intermediate or private service sequence inferred. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Custom attributes/mappings, selected Preview, saved/shared application | Review-only destination, complete normal continuation and evidence distinctions. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Relevant/manual processing, scheduled eligibility/queue, future nextProcessing per-profile/ISO/>=1 hour lead, separate provisioning verification | Reevaluation design/current field; no hardcoded tenant times, instantaneous update or exact target delivery. |
| [Java SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) | y/Y, M/m, d/D, H, s/S, numeric/colon offsets and quoted literal notation | Actual pattern table and representation pitfalls; Java notation not proof of all ISC runtime settings. |
| [Java DateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DateFormat.html) | Parsing/formatting and configurable parser leniency | Strict-validation qualification; no exact ISC Feb30 output or exposed setLenient setting assumed. |
| [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.txt) | UTC/offset instants, local-time ambiguity and constrained string ordering | Offset-equivalence/order examples; not every ISO8601 form or ISC accepted-input guarantee. |
| [Java ZonedDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html) | Named zone rules and local-time gap/overlap concepts | General DST/local-boundary reasoning only; no claim ISC uses class or gap-resolution strategy. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.txt) | Objects, string boundaries, booleans/null | Three parseable definitions; syntax checks not tenant execution. |

Claim-bearing sections were read: named formats/patterns/now limitation; comparison direction/operators; dateMath UTC input/short output/units/rounding/now and periodic-refresh option; retrieval flag/static values; custom mappings/Preview/application; processing eligibility/queued runs/nextProcessing lead; SimpleDateFormat pattern notation; DateFormat leniency; UTC/offset and zone gap/overlap concepts; JSON types.

Official cloud references govern ISC behavior. Java/standards references establish notation and time concepts, not private ISC classes or default parser/zone behavior. Current pages use Identity Security / Identity Services / Human Fabric naming in places; course ISC naming remains. No IdentityIQ behavior imported.

## Assessment mapping

| Purpose retained | Facts supplied | Expected reasoning / alternatives | Misconception exposed | Source mapping |
|---|---|---|---|---|
| 1. Wrong date order | Approved dd/MM 03/04/2026, proposed MM/dd | Approved April3 versus interpreted March 4; correct pattern/producer agreement and verify, no parsing error required | Parse success proves correct business date | Date Format; SimpleDateFormat; RFC3339 |
| 2. Inclusive boundary | Equal 17:00 instants, policy inclusive, proposed gt | gt false/Before; main gte true/reached; reversed lte with correct operands also acceptable | Strict/inclusive interchangeable | Date Compare; approved policy |
| 3. Swapped operands | End 17:00 left, now 16:59 right, gte positive reached | True prematurely; correct complete statement/operator/output, not label alone | Operator name alone sets meaning | Date Compare |
| 4. Offset equivalence | 17Z and22:30+05:30 | Same instant via subtraction, no named-zone lookup required for supplied offsets | Clock difference equals elapsed difference | RFC3339 |
| 5. Date-only loss | 17:00 cutoff, reduced date later explicitly interpreted midnight UTC | 17 hours early; preserve full instant for comparison, separate date display valid | Short display preserves every consumer requirement | Date Format; SimpleDateFormat; RFC3339 |
| 6. Arithmetic/output contract | Fixed -24h -> short Oct22T17:00, direct dateCompare proposed | Point correct, supported formatting/verified UTC/precision needed; alternative composition valid if contracts met | Arithmetic success proves composition compatibility; append Z fixes all | Date Math; Date Format; Date Compare; Static |
| 7. Blank/fallback | Visual blank only, null/empty/spaces/error unknown, distant future proposed | Establish actual input/evaluation and approved absence response; decline classification until known | Future default repairs missing deadline | Date ops; Account Attribute; JSON types; supplied policy |
| 8. Stale label | Applied Before at 16:59, same observed17:01, no later checked processing | Reevaluation/eligibility/time/result/current evidence needed, not proof comparator failed | Crossed boundary continuously updates stored field | Date Compare; Profiles; Processing |
| Transfer: inclusive local day | Nov1 throughout named partner zone, proposed UTCmidnight/-24h, actual zone missing | First excluded start November 2 under actual rules; request named zone/rules, distinguish elapsed 24 hours from calendar day, verify conversion/evaluation/application/delivery | Date implies universal UTCmidnight or fixed offset/calendar-hour equivalence | Date ops; Processing; time standards and agreed local policy |

## Diagrams and definitions

- [Date representation and boundary result](../../assets/TRN-006_date_representation_and_boundary_result.txt): collected input -> interpreted ISO instant -> now gte end -> mapped string. Maximum 38 columns.
- [Clock passage and verified evaluation](../../assets/TRN-006_clock_passage_and_verified_evaluation.txt): supplied 16:59 result, 17:00 passage and 17:03 processing evaluation/current verification. Maximum 39 columns; no exact-cutoff or target-write guarantee.
- Editable sources exactly match inline blocks. Prose gives equivalent explanation; arrows are value/evidence dependencies, not backend services or fixed internal order.
- Historical [date input/format/comparison](../../assets/TRN-006_date_input_format_and_comparison.txt) and [boundary/reevaluation evidence](../../assets/TRN-006_boundary_reevaluation_and_applied_evidence.txt) remain unchanged, including the old second diagram's 44-column width.
- Three complete JSON blocks are parsed locally and checked for root types, explicit input/true flags, patterns, now/gte, configured labels and fixed static/-24h example. Local instant arithmetic checks are not ISC date parsing/formatting, clock injection, runtime timezone verification or execution of refresh options.
- Full graphical publication review is separate from source synchronization.

## Executed verification

- Reviewed all 74 preserved coverage purposes, eight prompts with separate worked reasoning, and the inclusive local-end transfer. Date/pattern/zone/precision, normal application, arithmetic and reevaluation conditions remain.
- Three saved JSON blocks parse locally. Shapes match standalone explicit dateFormat, complete nested dateCompare now/gte/label outputs, and independent static UTC/-24h dateMath. Source/field/true flags, actual patterns, root-only names and ISO contracts were checked.
- Illustrative fixed-instant checks confirm Before at 16:59, reached at 17:00/17:01/17:03; strict gt false at equality; reversed end gte 16:59 true; offset equivalence 22:30+05:30 = 17Z; 17+02 = 15Z before 16Z; and the 17-hour midnight shift. March 4 and April 3 are distinct supplied calendar interpretations.
- Elapsed 24-hour subtraction yields `2026-10-22T17:00:00.000Z`, with short illustration `2026-10-22T17:00`. These ordinary ISO/instant checks do not execute ISC, parse the producer pattern with ISC, validate actual dateMath serialization, inject a tenant clock, resolve its default zone/leniency or run scheduling options.
- Editable diagrams exactly match learner blocks, maximum widths 38 and 39 columns. Historical sources remain unchanged, including the old second diagram's 44-column width.
- Local Markdown checks found 1,129 targets and zero missing targets. Learner text contains no source/course links, employee biography, fictional company, employee/object IDs or em dashes.
- All four existing site navigation/disclosure tests passed. They test site behavior, not date-engine calculations or comprehension. Tracked whitespace and all three new-file checks produced no diagnostics; new-file comparison exit 1 indicates a present difference.
- Inventory increased from 479 to 482 files: four existing files changed, three added, 475 unchanged and none removed. All 91 learner files remain; TRN-006 is the only changed learner.
- Reference content outside the owned TRN-006 section retains baseline lengths and hashes. Other learners, original diagrams/pilots, specification, tracing guide, README, publication records, manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging remains empty. No commit, push or deployment occurred.
- Final save-time checks after completion of this record confirm saved learner/diagram/record text, reference boundaries, intended file scope, whitespace, HEAD and empty staging.

## Limits

No actual tenant/API/source/profile/account relationship/custom field/mapping/transform/aggregation/Preview/processing/schedule/nextProcessing/access/provisioning or target operation is executed or changed. No parser settings, zone conversion, fallback, reminder or rollout implemented in a tenant. No observed learner validation. Author checks do not establish competence or exact-time delivery. No commit, push or deployment occurs.
