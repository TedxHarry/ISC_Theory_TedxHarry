# TRN-003 concept-led revision record

Revision 2.0. Module 8.3. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [Which characters should this calculation keep?](../../lessons/TRN-003_Normalizing_and_Combining_Strings.md).

## Scope and status

One existing learner lesson revised locally. Revision 1.0 remains recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Original diagram files and the historical reference subsection remain. Other learners, pilots, teaching specification, tracing guide, README, publication records, manifest, templates, styles and navigation code are outside this task.

Documentation-based author content, first-use, narration and consistency review completed. Beginner teach-back, unfamiliar-example learner validation, full graphical publication review and formal approval remain pending. Next revision target is TRN-004; its learner body is not opened. New authoring stays reserved at ROL-007. No commit, push or deployment.

## Changes and teaching reasoning

The opening compares exact strings and explains why three interior spaces survive final-only trim. It introduces only the record context required by the calculation, traces component values, then reads the complete dynamic definition and completes Preview/application/current-value reasoning before developing alternate operations and failures.

The fictional employee, number, identity ID, account ID and source brand are removed. Ana/Rao remain only as neutral field values needed to show string boundaries. HR-Primary identifies the source referenced by the definition. All permitted-change conditions, data ownership, meaningful characters, missing-policy, identifier and delivery boundaries are retained.

Structure follows the topic. One operation-comparison table replaces the old requirements table's layout with connected context prose; no requirement is removed. Both JSON illustrations and two useful diagrams remain because they explain dynamic construction, separator configuration, operation placement and evidence. No visual/word/case quota is applied. Eight prompts precede separate worked reasoning; the original family-first transfer purpose remains.

## Preserved coverage

| Original purpose or condition | Revision location | Preserved meaning and reasoning |
|---|---|---|
| Raw components and approved result | Opening; record context | Single strings Ana/Rao with one ordinary space at each end, approved Ana Rao. |
| String characters and boundaries | Characters section | Text includes spaces/digits/punctuation; quotes delimit strings. |
| Meaning before cleanup | Characters section | Normalization is approved representation; agreement with data owner and consumers. |
| Permitted versus preserved characters | Characters section | Trim per-component boundaries; keep supplied spelling/case/interior spaces/punctuation. |
| Population-specific naming convention | Characters section; transfer | Family-first/preferred/single-name/different separator require explicit agreement. |
| Identity, account, attribute | Record context | Person representation, connected record and named field distinguished before flow. |
| Source/profile/authority | Record context | HR-Primary collection, Employees mappings, authoritative worker-account origin. |
| Existing input relationship | Record context | Aggregation collected one correctly correlated account; both fields usable, required attributes valid. |
| Mapping destination and scope | Record context; definition | displayName chosen by mapping; no username/email/employee-number/ownership change. |
| Transform/input/output/operation meanings | Trim and assemble | Configurable retrieval/manipulation and returned values before instructions. |
| Trim boundary | Trim and assemble | Beginning/end only; ordinary spaces counted without universal Unicode handling. |
| Concat meaning and order | Trim and assemble | Configured string assembly, not inferred naming or arithmetic. |
| Literal separator | Trim and assemble | Space character supplied explicitly; is part of result, not visual decoration. |
| Successful component path | Trim and assemble; definition | Raw components -> Ana/Rao -> Ana Rao with one inserted space. |
| Raw-first alternative | Opening; comparative trace | One trailing component space plus inserted space plus leading component space yields three. |
| Final-only trim defect | Comparative trace; question 1 | Outside trim leaves three now-interior spaces; operation placement explains defect. |
| Editable comparison diagram | First diagram | Both value paths, exact characters, plus notation not executable syntax. |
| Retrieval meaning | Definition | accountAttribute obtains source field from evaluated identity's associated account. |
| Nested transform dependencies | Definition | Each field explicitly retrieved then trimmed; returned strings feed concat. |
| JSON minimal explanation | Definition | Braces/properties/colon/commas and array brackets supplied before full object. |
| Ordered values array | Definition | Nested given trim, literal space, nested family trim in order. |
| Complete dynamic definition | Main JSON | Root concat; HR-Primary/givenName and familyName explicit reads; root-only name. |
| Root type/settings/name | Definition | Operation concat and attributes.values; name identifies, mapping chooses destination. |
| Intermediate values | Definition | Ana/Rao passed to concat, not persisted as extra fields. |
| Explicit source references | Definition | Mapping selector does not replace internally named source/fields. |
| Per-identity data and ownership | Definition | Same instructions read selected identity data; formatting cannot prove correct association. |
| Successful application path | Follow result | Preview, shared scope review, intended saved config, authorized processing, current displayName. |
| Unchanged source data | Follow result | Calculation does not repair or write raw HR fields. |
| Consumer/provisioning meanings | Follow result | Configuration/system uses result; supported account/access writes separate. |
| No external outcome inferred | Follow result; question 8 | No supplied target/login/mailbox/ownership result. |
| Missing separator and reversed order | Concat versus join | AnaRao without space; Rao Ana when values reverse. |
| Join structure and contrast | Join section | values list plus separate separator; can accept nested outputs. |
| Fixed illustrative join | Second JSON | Literal Ana/Rao demonstrate separator only; not dynamic per-identity replacement. |
| Join default | Join; question 5 | Omitted separator returns comma-delimited Ana,Rao. |
| Configured array versus field list | Join section | Instructions array not automatic iteration of a multi-valued account attribute. |
| Mapping-transform list boundary | Join section | Documented first-value/single-result scoped; main fields each one string. |
| Lower/upper operation boundaries | Case section | Case conversion neither trims nor inserts separators. |
| Preserved-case display and bad source case | Case section | No lower/upper in approved display; supplied ana remains ana, not inferred Ana. |
| Independent department/region agreements | Case section | Trim/lower Finance -> finance; trim/upper us -> US; no code translation/validity proof. |
| Operations comparison table | Case section | Trim/lower/upper/interior spaces/apostrophe/code zeros each retain exact boundary. |
| Meaningful interior spaces | Table; question 3 | De la Cruz retains word boundaries; final Ana De la Cruz. |
| Punctuation, accent and hyphen | Case section | O'Neil preserved; target restrictions need separate approved adaptation. |
| Text code preservation | Table | PLANT- + 0073 -> PLANT-0073, no conversion to 73. |
| Information loss and collision | Case section | A-B and AB collapse under punctuation removal; distinction can be lost. |
| Empty/null/whitespace distinctions | Blank component | No characters, no value and present spacing characters differ. |
| Whitespace-only family path | Blank; question 6 | Three spaces trim to empty; concatenation returns Ana with trailing separator. |
| Final trim versus missing-data meaning | Blank component | Polishing to Ana does not distinguish legitimate single name from data defect. |
| Fallback policy | Blank component | Alternative requires approved condition/response; no invented family value. |
| Missing/error boundaries | Blank component | No universal null-to-empty, skip or fixed error assertion. |
| Display versus unique identifier | Display/login | Duplicate names can be valid display but require distinct identities/accounts. |
| Target identifier requirements | Display/login | Character/length rules, uniqueness, name changes and already-used candidate handling separate. |
| Email-shaped output boundary | Display/login | Mailbox existence/email assignment/account creation/correlation not established. |
| Investigate exact defect | Disagreement section | Spaces, separator and order explain different corrections; record intermediate strings. |
| Human evidence diagram | Second diagram | Input/results, Preview, approved processing/current field, conditional external check; not backend stages. |
| Eight assessment purposes | Prompts and separate reasoning | All original case purposes retained with sufficient changed facts. |
| Family-first transfer | Final exercise | Ana/O'Neil -> O'Neil, Ana; keep apostrophe and comma-space; test missing/space-containing names and application. |

## Exact hypothetical assumptions and values

Employees governs an existing identity; HR-Primary is authoritative. Aggregation has collected one correctly correlated HR account; no second account competes. `givenName = " Ana "` and `familyName = " Rao "` are single strings with one ordinary ASCII space at each end. Other required attributes are valid and both components usable. Approved displayName is Ana Rao, preserving supplied spelling/case/meaningful punctuation/interior spaces.

Root concat values contain trim(explicit HR-Primary/givenName accountAttribute), literal one-space string, trim(explicit HR-Primary/familyName accountAttribute). Root alone has a name. Trim outputs Ana/Rao and concat returns Ana Rao. The mapping, not the name, chooses destination displayName. Raw concatenation returns `" Ana   Rao "`; final-only trim leaves `"Ana   Rao"` with three interior spaces. Component trim leaves one inserted separator.

Supplied successful continuation includes reviewed shared population/consumers, intended saved definition/mapping, expected Preview, authorized relevant completed processing and current displayName Ana Rao. HR raw fields are unchanged. No external target, login, mailbox or ownership result is supplied. Human checks are not mandatory backend stages or gates delaying consumer decisions.

Fixed join illustration has values Ana/Rao and explicit space; output Ana Rao. It is not a dynamic replacement. Omitted separator yields Ana,Rao; missing concat separator yields AnaRao; reversed order yields Rao Ana. Configured arrays are distinct from multi-valued account fields; documented profile mapping-transform first-value/single-result boundary is scoped.

Independent variations preserve Finance/finance, us/US, De la Cruz interior spaces, O'Neil punctuation, PLANT-0073 code zeros, A-B/AB information loss, supplied ana case and whitespace-only family. Family spaces trim to empty; same composition returns Ana with a trailing separator. Final trim cannot approve a single-name format. No universal null-to-empty, skip or exact error is invented.

Two distinct people with identical name components require distinct identities/accounts despite valid same display text. Unique-login rules and email/mailbox ownership are separate. Transfer retains Ana/O'Neil and requires O'Neil, Ana, preserving the apostrophe and comma-space. Alternative conventions require an explicitly changed agreement.

All examples and supplied results are hypothetical. Local parsing and string checks cannot validate the ISC engine.

## Primary-source claim verification

| Primary source | Claims rechecked October 27, 2026 | Application and limits |
|---|---|---|
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Configurable objects, root/name/type/settings, nested returned-value composition and explicit-input precedence | Main definition and actual-input reasoning; no private execution services or intermediate persisted fields. |
| [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Beginning/end whitespace removal and explicit input | Component versus finished-string traces; only ordinary ASCII spaces counted; no universal invisible-character treatment. |
| [Lower](https://developer.sailpoint.com/docs/extensibility/transforms/operations/lower/) | Lowercase conversion, optional explicit or mapped input | Independent department example and wrong lowercase-display proposal; no automatic trim/translation. |
| [Upper](https://developer.sailpoint.com/docs/extensibility/transforms/operations/upper/) | Uppercase conversion | us -> US representation; does not validate business meaning. |
| [Concatenation](https://developer.sailpoint.com/docs/extensibility/transforms/operations/concatenation/) | concat values array of literal strings or nested results | Exact order/separator/component results and complete dynamic JSON; no inferred naming policy. |
| [Join](https://developer.sailpoint.com/docs/extensibility/transforms/operations/join/) | join values, nested results, separator setting and default comma | Complete fixed illustration and no-separator case; not arbitrary account-list iteration. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated-account source/field retrieval and selection controls | Two explicit reads; main supplies one correct associated account; no generic ownership proof. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | displayName/mapping, selected Preview, saved/applied changes, first-value/single-result mapping-transform boundary | Current field and multi-value qualification; no identity display uniqueness or mailbox claim. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Relevant identity updates, profile Apply Changes associated population and separate external-result verification | Normal approved continuation plus investigation; no universal schedule/instant delivery. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.txt) | Sections 1/2/4/5/7: properties, ordered arrays, string character boundaries and separators | Minimum JSON reading; parsing does not validate ISC execution or business meaning. |

Claim-bearing bodies were reviewed: concat/join values and default separator; trim/lower/upper operation boundaries; associated-account retrieval; nested definitions and explicit inputs; profile multi-value/Preview/application; processing scope; JSON arrays/string boundaries. Cloud pages use Identity Security / Identity Services / Human Fabric naming in places; ISC naming remains in the course. No IdentityIQ mechanism is imported. Hypothetical naming policies, target restrictions, input cardinality and permitted changes are not product defaults.

## Assessment mapping

| Purpose retained | Evidence supplied | Expected reasoning / alternatives | Misconception exposed | Source mapping |
|---|---|---|---|---|
| 1. Trim placement | Raw Ana/Rao each with surrounding spaces, inserted one-space literal, only outer trim | Raw result has three interior spaces; outer trim cannot remove them; trim components | Outside trim cleans interior spacing | Trim; Concat |
| 2. Explicit separator | Trimmed Ana/Rao values, no separator | AnaRao; literal space in concat or explicit-space join accepted with same inputs | Concat infers name separator | Concat; Join |
| 3. Interior spaces | Ana plus De la Cruz with surrounding spaces; main requirement | Ana De la Cruz; preserve interior spaces | Trim removes all spaces | Trim; agreed format |
| 4. Correct operation, wrong requirement | Lower around Ana Rao; preserve supplied case | ana rao is expected operation result but violates requirement | Successful evaluation means correct design | Lower; agreed format |
| 5. Join default | Two fixed values; separator omitted | Ana,Rao, because comma is documented default | Default chosen from field meaning | Join |
| 6. Blank component | Given Ana, family three ordinary spaces, trim each, literal separator, no fallback approved | Empty family yields Ana with trailing space; final trim fixes appearance only; approve meaning/response | Whitespace/null/errors all equivalent or cleaner output solves missing facts | Trim; Concat; explicit agreement |
| 7. Identifier uniqueness | Two distinct people, same name components; target distinct-logins rule | Same display valid; login design/collision response separate, people/account relationships remain distinct | Display construction makes a unique login | Concat; Profile context; target's stipulated rule |
| 8. Identity versus target | Current displayName Ana Rao after processing; old target text, no write path/evidence | Identity result established, required configured consumer/operation/target still need evidence | Repeating transform creates delivery | Profiles; Processing |
| Transfer: family-first | Ana/O'Neil surrounded by spaces, family-first comma-space, punctuation/case preserved | O'Neil, Ana; inspect input/order/separator, missing/legitimate spaced-name policy, applied identity and required external use; alternative format only if requirement changes | Generic cleanup can discard meaning or substitute a different format | Trim; Concat; Join; Profiles; Processing; explicit agreement |

## Diagram and JSON review

- [Component boundaries and combination](../../assets/TRN-003_component_boundaries_and_combination.txt): compares raw-first/outside-trim with trim-per-component and explicit separator; arrows carry values, plus signs are explanatory assembly notation. Maximum 37 columns.
- [Display value and target checks](../../assets/TRN-003_display_value_and_target_checks.txt): human evidence questions, correct applied identity and conditional external-path verification. Maximum 42 columns.
- Editable sources exactly match learner blocks. Prose supplies equivalent explanations. These are logical/evidence diagrams, not a private backend architecture, timestamp sequence or guaranteed external operation.
- Historical [component trim/separator comparison](../../assets/TRN-003_component_trim_and_separator_comparison.txt) and [string/consumer evidence](../../assets/TRN-003_string_result_and_consumer_evidence.txt) stay unchanged, including the historical second diagram's 43-column width.
- Main JSON is complete concat configuration with two nested explicit accountAttribute/trim branches around a literal space. Fixed join JSON has two strings and explicit separator. Local parsing checks syntax/shape only; exact character checks are ordinary-string illustrations, not ISC evaluation.
- Exact source checks do not replace full graphical publication-format review.

## Executed verification

- Reviewed all 56 mapped coverage purposes, eight question prompts with separate worked reasoning, and the family-first transfer. Exact successful-path conditions, permitted character changes and missing-policy/identifier/delivery qualifications remain.
- Both saved JSON blocks parse locally. Main shape is concat with trimmed explicit HR-Primary/givenName and familyName retrievals around one literal space; only root is named. Fixed join contains Ana/Rao with explicit space. These checks establish local syntax/shape, not supported execution in a tenant.
- Illustrative ordinary-string checks confirm raw `" Ana   Rao "`, final-only trim `"Ana   Rao"` with exactly three interior spaces, component-trim `"Ana Rao"`, absent separator AnaRao, reversed order Rao Ana, explicit-space join Ana Rao and comma join Ana,Rao.
- Further string checks confirm Ana De la Cruz, lowercase-display ana rao, preserved Ana O'Neil apostrophe, PLANT-0073 zeros, blank-family composition `"Ana "` and family-first `"O'Neil, Ana"`. These illustrate the supplied characters; they do not execute or validate the ISC engine or establish a missing-data policy.
- Both editable diagrams exactly match learner blocks, maximum widths 37 and 42 columns. Historical assets remain unchanged, including the old second diagram's 43-column width.
- Local Markdown checking found 1,108 targets with zero missing targets. Learner text contains no documentation links, biography, fictional company, employee/object IDs or em dashes.
- All four existing navigation/disclosure tests passed. They test site behavior, not calculation results or comprehension. Tracked whitespace checking and all three new-file checks produced no diagnostics; new-file comparison exit status 1 signifies a present difference.
- Inventory increased from 470 to 473 files: four existing files changed, three files added, 466 unchanged and none removed. All 91 learner files remain, and TRN-003 is the only changed learner in this task.
- Reference-record text outside the owned TRN-003 section retains baseline lengths and hashes. Other learner files, pilots, original diagrams, teaching specification, tracing guide, README, publication records, manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging is empty. No commit, push or deployment occurred.
- Final checks after completing this record confirm exact saved learner/diagram/record content, unchanged reference boundaries, intended file scope, whitespace, HEAD and empty staging.

## Limits

No actual tenant, API, source, profile, mapping, transform, account relationship, aggregation, Preview, identity processing, access, provisioning or target operation is changed or executed. No naming policy, source correction, fallback, identifier-generation rule or rollout is implemented in a tenant. No learner outcome is observed. Beginner validation, full graphical review and formal approval remain pending. Existing navigation tests do not test transform calculations or comprehension. No commit, push or deployment occurs.
