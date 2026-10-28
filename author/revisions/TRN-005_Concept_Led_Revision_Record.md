# TRN-005 concept-led revision record

Revision 2.0. Module 8.5. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [Are we translating a code or choosing an outcome?](../../lessons/TRN-005_Lookups_and_Conditional_Decisions.md).

## Scope and status

One existing learner revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference subsection and original diagrams remain unchanged. Other learners, pilots, teaching specification, tracing guide, README, publication records, manifest/templates/styles/navigation and site behavior are outside scope.

Documentation-based author content/first-use/source/narration review completed. Beginner teach-back, unfamiliar-case learner validation, full graphical publication review and formal approval remain pending. Next target TRN-006; its learner body is not opened. New authoring remains paused at ROL-007. No commit, push or deployment.

## Changes and resolved explanation issue

The lesson starts with two input fields and their different questions. It explains actual key/value translation and operand/branch selection, reads both complete definitions, then completes the normal Preview/application/current-value path before developing unknown codes, wrong known inputs, representation changes and missing-data boundaries.

The fictional employee/number/identity ID/account ID/source brand are removed. Neutral HR-Primary is required to show source references; exact original department/worker inputs and outcomes remain. No technical condition, causal step or assessment purpose is removed. Two useful tables, two full JSON examples and two logical branch diagrams remain because the topic benefits from comparisons, not a layout quota.

A wording gap is corrected: original top-level scope promised Manual review for other non-null strings while later warning that blank/empty evaluation required separate handling. Current agreement describes usable populated worker-type values (supplied Contractor/Intern examples), explicitly separating absent/blank inputs and avoiding an every-non-null successful-branch promise. The intended review treatment is preserved without inventing an unverified runtime rule.

Null/string meanings and JSON booleans are introduced before dependent table/configuration use. Wrong-known-input logic is taught in the body before assessment. Eight prompts precede separate worked answers, retaining the facilities transfer and acceptable alternatives. No learner citations, revision notes or teaching-method announcements.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| Two distinct questions | Opening | Code meaning needs translation; comparison chooses configured treatment. |
| Identity/account/attribute/source | Meaning section | Managed entity, connected record, named field and configured collection before use. |
| Profile and authority | Meaning section | Employees shared mappings, HR-Primary authoritative worker records. |
| Collected/correlated account | Meaning section | One correct associated collected account, not a live HR fetch. |
| Single string inputs and null | Meaning section | FIN/Employee text, null is no value, other required fields valid. |
| Custom review fields | Meaning table | departmentReviewLabel/workerReviewLabel organization-defined, no built-in conventions. |
| Approved owners | Meaning section | HR code authority and review-process owner, not inference from labels. |
| Review-only marker scope | Meaning section | UNMAPPED not department; Manual review not task; no access/status/ownership driver. |
| Lookup purpose and output | Lookup section | Incoming string matched to configured key; paired string returned. |
| Key/value/table definitions | Lookup section | FIN/Finance, ENG/Engineering, OPS/Operations configured pairs. |
| Default semantics | Lookup section | Unmatched non-null string -> approved UNMAPPED; not generic error catch. |
| Configuration versus reference database | Lookup section | Table in definition, not employee search, account correlation or live HR reference query. |
| Mapping destination | Lookup section; question 1 | departmentReviewLabel chosen by mapping, not root name. |
| Minimal JSON meanings | Lookup section | Braces/properties/string boundaries and booleans before use. |
| Main lookup definition | First JSON | Root lookup, nested explicit HR-Primary departmentCode and table/default. |
| Root and nested settings ownership | Lookup section | Name identifies, attributes configures lookup, retrieval source/field separate from translation entries. |
| accountReturnFirstLink | Lookup section | True on retrieval returns first selected value even null; one account; not error suppression. |
| Successful lookup result | Lookup trace | FIN -> Finance, not key/table/matched boolean. |
| Lookup diagram | First diagram | Known-key/default/no-default branches, starts after non-null string retrieval; no private validation order. |
| Unknown without default | Lookup section; question 3 | Unmatched string errors; no guessed passthrough/empty/Finance. |
| Non-ordinary misses | Lookup section | Null input, failed read, malformed settings not universally default path. |
| Condition and branch | Conditional section | True/false statement selects output. |
| Operands and eq | Conditional section | Retrieved workerType and literal Employee; eq-only supported comparison. |
| Positive/negative meaning | Conditional section | True/false output names, not inherent access approval/denial. |
| Complete conditional definition | Second JSON | Dynamic workerType accountAttribute, expression and Standard/Manual branch strings. |
| Variable versus field | Conditional section | Chosen name refers to evaluated value; account attributeName identifies record field; not persisted intermediate identity field. |
| Boolean decision versus string output | Conditional section | Employee comparison true -> configured Standard review string. |
| Independent mappings | Conditional section | No lookup-first order or feeding conditional inferred. |
| Complete normal application | Normal path | Preview, representative cases, shared review, intended saved config, relevant processing and current fields. |
| Processing scope | Normal path | Profile-associated population, not only selected Preview identity. |
| Unchanged HR and separate consumers | Normal path | FIN/Employee remain; consumer/provisioning meanings introduced; no external/task result. |
| Unknown marker and cause | Unknown-code section | ZZZ -> UNMAPPED doesn't identify new code versus wrong field/data; keep original code evidence. |
| New code maintenance | Unknown section; question 2 | RND approved as Research but absent table -> UNMAPPED; approval not configuration update. |
| Existing output change | Unknown section | Finance -> Financial Services may affect exact-output consumers with unchanged HR code. |
| Known wrong input | Unknown section; question 4 | Independent correct Finance, incorrect selected ENG -> successful Engineering; repair responsible input/selection, not valid table entry. |
| Representation agreement | Representation section | Inspect spaced FIN, no automatic cleanup/case folding assumed. |
| Explicit approved normalization | Representation section | Trim ordinary surrounding spaces -> FIN before lookup when approved; does not give ZZZ a meaning. |
| False doesn't prove another type | Not Employee section; question 5 | Contractor/Intern each differ; Manual review is treatment, not Contractor classification. |
| Case-sensitive comparison | Not Employee; question 6 | employee differs from Employee -> Manual review; equivalence requires approved implemented normalization. |
| Non-null operand requirement | Missing-data section | Null conditional operand errors, not ordinary negativeCondition result. |
| Evaluation error meaning | Missing-data section | Unable normal evaluation distinct from unequal supplied values. |
| Conditional diagram | Second diagram | Logical null/equal/unequal boundary, not private validation order. |
| Empty versus null versus blank screen | Missing-data; question 7 | Inspect actual retrieval/evaluation; no deterministic blank or every-non-null branch promise. |
| Missing-data owner policy | Meaning/missing sections | Usable populated examples separate from absent/empty/whitespace handling. |
| False branch not general catch | Missing section | Failed retrieval/configuration not ordinary false; supported preparation or producer correction needed. |
| Supported expression scope | Missing section | eq-only; no invented gt/compound program support. |
| Date-aware comparison boundary | Missing section | String equality doesn't establish expiry; use documented operation for actual requirement. |
| Outcome comparison table | Missing section | FIN, ZZZ/default/no-default, Employee, Intern and null exact branch meanings. |
| Human investigation path | Work backward | Identity/profile/mapping/actual definition/account/field/config/evaluation context/current evidence. |
| Explicit source versus visible selector | Work backward | Lookup input and conditional variable retrieval choose source; inspect both definition and mapping. |
| No guaranteed branch-history logs | Work backward | Human checks do not assume exposed per-key/branch history. |
| Future changed data | Work backward; question 8 | Collected Contractor can reevaluate; no continuous live HR watcher. |
| Preview versus current/display evidence | Work backward; question 8 | New Preview versus historical Standard cannot prove newly applied result or processing failure. |
| Eight assessment purposes | Prompts and separate reasoning | Original eight purposes and accepted alternatives preserved. |
| Facilities transfer | Final exercise | NYC/LON known, SGP unapproved; majority default/binary otherwise invent location. |
| Transfer acceptable alternatives | Final exercise | Approved review marker with scope/correction, or explicit error/correction; missing/retrieval failure separate. |
| Explainable engineering design | Closing | Output meaning, actual input, rule, unknown/error paths and post-application evidence. |

## Exact hypothetical assumptions and values

An existing identity is governed by Employees with authoritative HR-Primary. One correctly correlated collected account supplies single departmentCode FIN and workerType Employee strings; other required attributes valid. Two custom identity attributes serve the organization's hypothetical review display only: departmentReviewLabel and workerReviewLabel. They do not drive access/status/ownership, and no built-in review screen/task behavior is asserted.

HR approves FIN/Finance, ENG/Engineering, OPS/Operations. An unmatched non-null string returns review marker UNMAPPED, not a true department. The review owner approves exact Employee -> Standard review and other usable worker-type values such as Contractor/Intern -> Manual review. Missing/blank inputs require an approved separate response.

Lookup root explicitly retrieves HR-Primary departmentCode with accountReturnFirstLink true and uses the stated table/default. Conditional independently retrieves workerType into a same-named variable, expression `$workerType eq Employee`, Standard review/Manual review outputs, retrieval true flag. Variable name isn't an automatic identity field. Only root transforms are named. One account removes competing-account choice; flags don't suppress errors.

Main results Finance and Standard review have supplied shared review, saved intended definitions/mappings, representative Preview, authorized relevant processing and current identity evidence. HR remains FIN/Employee. No external write, task, status, access or relationship result is supplied; independent mapping definitions imply no run order.

Variants: ZZZ/default -> UNMAPPED; ZZZ/no default -> error; HR-approved RND/Research absent table -> UNMAPPED until actual change; correct Finance independently established but collected ENG -> successful wrong Engineering; renamed Finance output can affect consumers. Approved trim of ordinary-space FIN yields FIN before lookup; no implicit cleaning/case-folding claimed.

Conditional supplied Contractor/Intern -> Manual review without Contractor inference; lowercase employee -> Manual review because comparison is case-sensitive. Null operand errors; visual blank alone is insufficient evidence of null/empty/spaces/retrieval failure. No deterministic empty-expression or lookup-null/default behavior claimed. eq-only, not gt/imagined compound/date comparison.

Later collected Contractor plus Preview Manual review with only historical current Standard supplies no new current/display evidence and no proof of failure. Facilities transfer preserves NYC/New York, LON/London and SGP without approved meaning; majority default/false classification both fabricate facts. Approved scoped marker or explicit failure/correction acceptable.

All inputs/configurations/results are hypothetical, not tenant observations.

## Primary-source verification

| Primary source | Claims rechecked October 27, 2026 | Application and limits |
|---|---|---|
| [Lookup](https://developer.sailpoint.com/docs/extensibility/transforms/operations/lookup/) | String key/value matching, paired output, unmatched default/no-default error, explicit input | Non-null string branches only; no null/error-to-default or undocumented case-folding claim. |
| [Conditional](https://developer.sailpoint.com/docs/extensibility/transforms/operations/conditional/) | eq-only, case-sensitive strings, non-null operands, dynamic variables, positive/negative output strings | Employee/Contractor/Intern/employee examples; null evaluation error, no universal empty-input result or exact UI error. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated-account source/field retrieval; accountReturnFirstLink true can return selected null | One main account and explicit provenance; no generic error suppression. |
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | JSON/root name/type/settings, nested values, explicit input precedence | Definition/use distinction and actual input; no private service order or stored intermediate attribute. |
| [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Beginning/end whitespace removal | Approved ordinary-space FIN cleanup before lookup; no automatic lookup cleaning or universal Unicode/null treatment. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Custom identity fields/mapping destinations, selected Preview, save/application | Two custom review labels and calculation/current-value distinction. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Relevant reevaluation, profile application scope, separate downstream outcome evidence | Main continuation and changed Contractor data; no guaranteed schedule/target/task outcome. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.txt) | Object properties, strings, boolean/null distinctions and member uniqueness | Two definition shapes and true retrieval flags; syntax not live execution validation. |

Claim-bearing bodies reviewed include lookup matching/default/no-default and explicit input; conditional eq-only/case sensitivity/non-null operands/dynamic variables/output strings; selected-null retrieval flag; root/nested/explicit syntax; trim; custom attributes/Preview/application; processing scope; JSON types.

The lookup page's confusing duplicate-key/output example is not used. Tables here have distinct keys and outputs. Historical author notes retain a dated firsthand empty/null conditional report; it is not freshly revalidated or treated as a universal empty-string rule. Current official operation documentation governs the stated null constraint. No exact UI/error presentation or community-based runtime promise is introduced.

Cloud pages use Identity Security / Identity Services / Human Fabric naming in places; ISC naming remains. No IdentityIQ behavior is imported. Field authority, labels, permitted marker uses and review agreements are example contracts, not product defaults.

## Assessment mapping

| Purpose retained | Facts supplied | Expected reasoning / alternatives | Misconception exposed | Source mapping |
|---|---|---|---|---|
| 1. Matched translation | FIN/table/mapping departmentReviewLabel | Finance returned; mapping chooses destination; HR unchanged; application/write still need evidence | Label writes back or root name sets destination | Lookup; Account Attribute; Profiles; Processing |
| 2. New approved code | RND/Research approved, table unchanged with UNMAPPED | UNMAPPED; controlled table update and evidence. Producer correction only if owner establishes wrong input, not inferred here | Approval automatically changes configuration | Lookup; Profiles; Processing; supplied authority |
| 3. No default | Successful ZZZ string; no key/default | Error; approved marker or error/correction policy future design only | Miss passes through/empties/defaults to real department | Lookup |
| 4. Correct operation, wrong input | Independent Finance evidence; collected ENG; correct ENG/Engineering table | Engineering via successful lookup; investigate data/selection/mapping/collection. Alternatives need evidence, not corrupt table | Successful translation proves true department | Lookup; Account Attribute; Transforms |
| 5. False-branch meaning | Intern versus Employee; Manual review negative | Unequal -> configured label; neither Contractor classification nor task creation | Otherwise proves another real category or runs task | Conditional; approved field scope |
| 6. Case | employee versus Employee, no normalization | Manual review; equality case-sensitive, equivalence needs approval/config | Equality silently ignores case | Conditional |
| 7. Null and visual blank | One null confirmed; another only visually blank; right operand Employee | Null errors; other needs exact input/evaluation. Correct producer or implement approved missing rule, no catch-all false branch | All blank or non-null inputs successfully take negative branch | Conditional; Account Attribute; JSON types |
| 8. Preview/current/display | Collected Contractor; Preview Manual; only earlier observed Standard | Verify relevant application/current field/display; no new success or failure established by old observation | Preview applies result or stale observation proves failure | Profiles; Processing |
| Transfer: site codes | NYC/New York, LON/London, SGP unknown; majority default or NYC/otherwise London proposed | Neither justified; obtain meaning; scoped approved unknown marker or explicit failure/correction acceptable; missing/error separate | Default/false branch creates authoritative fact | Lookup; Conditional; supplied facilities agreement |

## Diagrams and definitions

- [Lookup key/value and unknown path](../../assets/TRN-005_lookup_key_value_and_unknown_path.txt): already retrieved non-null string, known pair versus default/error branches, FIN/ZZZ examples. Maximum 38 columns.
- [Equality result and null boundary](../../assets/TRN-005_equality_result_and_null_boundary.txt): null error versus non-null equality branches, Employee/Intern/null examples. Maximum 42 columns.
- Both editable sources exactly match learner blocks and prose. Arrows are logical value/branch dependencies, not private service boundaries or guaranteed validation order.
- Historical [lookup match/default/error](../../assets/TRN-005_lookup_match_default_and_error.txt) and [conditional true/false/null](../../assets/TRN-005_conditional_true_false_and_null.txt) remain, including the old second diagram's 43-column width.
- Both complete JSON blocks are locally parsed and checked for root types, explicit source/field/true flags, table/default, variable/expression and string outputs. Value checks illustrate only the supplied ordinary string cases, not ISC execution, null engine behavior, error class or unsupported expression parsing.
- Source synchronization is distinct from full graphical publication review.

## Executed verification

- Reviewed all 57 preserved coverage purposes, eight prompts with separate worked reasoning, and the NYC/LON/unknown SGP transfer. The populated-input versus blank-handling scope clarification is recorded; no essential original purpose or acceptable alternative was removed.
- Both saved JSON definitions parse locally. Lookup shape includes explicit HR-Primary departmentCode retrieval, true accountReturnFirstLink and exact FIN/ENG/OPS/default table. Conditional shape includes explicit workerType variable retrieval, true flag, `$workerType eq Employee` and exact Standard review/Manual review strings. Only root definitions are named.
- Illustrative ordinary-value checks confirm FIN/Finance, ENG/Engineering, OPS/Operations, ZZZ/UNMAPPED and still-unconfigured RND/UNMAPPED; Employee equality versus Contractor/Intern/employee inequality with the stated output strings. Approved ordinary-space trim of FIN preserves the key.
- These local JSON/value checks verify syntax, example shape and internal consistency, not ISC execution, arbitrary expression evaluation, null/error handling or a universal blank-input result. Documented no-default lookup error and conditional null/eq constraints were reviewed against primary sources rather than simulated as runtime tests.
- Current editable diagrams exactly match inline blocks, maximum widths 38 and 42 columns. Historical assets stay unchanged, including the old second diagram's 43-column width.
- Local Markdown target checking found 1,122 targets and zero missing targets. Learner text has no source/course links, fictional company/person biography, employee/object IDs or em dashes. Null is introduced before dependent non-null rules.
- All four existing site navigation/disclosure tests passed. They verify site behavior, not transform execution or comprehension. Tracked whitespace and all three new-file checks produced no diagnostics; new-file comparison exit status 1 signifies a present difference.
- Inventory increased from 476 to 479 files: four existing files changed, three files added, 472 unchanged and none removed. All 91 learner files remain; TRN-005 is the only changed learner.
- Reference content outside the owned TRN-005 section retains baseline lengths and hashes. Other learners, pilots/original diagrams, specification, tracing guide, README, publication records, manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging is empty. No commit, push or deployment occurred.
- Final save-time checks after this record confirm saved learner/diagram/record content, unchanged reference boundaries, intended file scope, whitespace, HEAD and empty staging.

## Limits

No actual tenant, API, source, profile, identity/account relationship, custom field, mapping, transform, aggregation, Preview, processing, task, access, provisioning or target operation is executed or changed. No normalization/table/branch/blank policy or rollout is implemented in a tenant. No learner outcome observed. Beginner validation and formal publication review remain pending. Existing navigation tests do not test transform execution or comprehension. No commit, push or deployment occurs.
