# TRN-004 concept-led revision record

Revision 2.0. Module 8.4. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [A fallback returned a value. Is it the right value?](../../lessons/TRN-004_Handling_Missing_Values_with_Fallbacks.md).

## Scope and status

One existing learner revised locally. Baseline revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Original diagram files and historical reference subsection remain. Other learner files, pilots, teaching specification, tracing guide, README, publication records and site code are outside this task.

Documentation-based author content/first-use/narration/source review completed. Beginner teach-back and unfamiliar-case validation, full graphical publication review and formal approval remain pending. TRN-005 is next; its learner body is not opened. New authoring remains paused at ROL-007. No commit, push or deployment.

## What changed and why

The lesson starts with the approved name fallback, establishes only needed record/field context, explains firstValid's selection and complete configuration, and completes normal Preview/application/current-field reasoning before developing ambiguous blanks, business suitability and actual errors.

Removed the fictional employee, number, account/identity IDs and source brand. HR-Primary is a neutral reference required by the configuration; Ana/Anu are field strings, not a biography. Meaning, conditions, causal dependencies and every assessment purpose remain. Two complete definitions, value and human-evidence diagrams, and two purposeful comparison tables remain; the error table compares explicit false/true directly. No word/visual/question quota is applied.

Error policy is always explicit. Null selection, field usability and failed evaluation are separate mechanisms. No unimplemented suitability rule is silently attributed to firstValid. Output ambiguity when both candidate strings match is explained without inventing candidate logs.

## Preserved coverage

| Original purpose or useful condition | Revision location | Preserved reasoning |
|---|---|---|
| Recognizable fallback purpose | Opening | Preferred name absent, given Ana exists; use approved alternative rather than arbitrary value. |
| Fallback definition and condition | Opening | Alternative applies under defined condition; absence not anything going wrong. |
| Identity/account/attribute meanings | Context | Managed entity representation, connected record and named field before mapping. |
| Source/profile/authority | Context | HR-Primary collection, shared Employees mappings and authoritative identity origin. |
| Collected correctly correlated input | Context | One associated account, correct existing identity; aggregation and correlation distinguished. |
| No collection repair | Normal continuation | Choosing alternate value does not repair failed collection or rewrite HR. |
| Custom field meaning | Context | Organization-defined Display Given Name/displayGivenName, no implied built-in convention. |
| Approved priority and no invention | Context | preferredName then givenName, null-for-absence contract and usable recorded string, no invented name. |
| Error agreement | Context; definition | Failed retrieval investigated, explicit ignoreErrors false. |
| Required attributes and limited use | Context | Other required fields valid; custom label not status/access/ownership driver. |
| String versus null | Context | Text and no value explained before firstValid. |
| Transform/input/output meaning | First non-null | Configurable retrieval/manipulation with returned result. |
| firstValid selection test | First non-null | Ordered first non-null result, not a business validator. |
| Option order | First non-null; question 2 | Approved preferred Anu before given Ana; no combining/voting/newest/longest selection. |
| Successful null path | First diagram; definition; question 1 | Null without error allows next Ana despite ignoreErrors false. |
| Diagram value boundaries | First diagram | Identity context, collected data, decisions/results; no private services or guaranteed candidate logs. |
| Explicit retrieval instructions | Definition | accountAttribute reads associated source field per evaluated identity. |
| JSON and ordered array | Definition | Braces/settings, values list and nested instruction results. |
| Explicit boolean settings | Definition | Unquoted false/true; no dependence on omitted defaults. |
| Complete main definition | Main JSON | Root firstValid; false policy; ordered explicit HR-Primary preferredName/givenName reads. |
| accountReturnFirstLink ownership | Definition | True belongs to retrieval, returns first selected account value even null, not error suppression. |
| Two selection layers | Definition | Account selection within candidate differs from firstValid option priority. |
| Single-account condition | Definition | No competing-account choice; null-return intention explicit. |
| Mapping destination | Definition | Profile chooses displayGivenName; transform name does not. |
| Successful Preview/application | Normal continuation | Reviewed population/uses, saved actual config, tested policy, Preview Ana, authorized processing, current Ana. |
| Shared processing scope | Normal continuation | Applying profile change processes associated population, not only Preview identity. |
| Unchanged input and external boundaries | Normal continuation | HR preferred remains null/given Ana; no target/access/status/relationship outcome supplied. |
| Consumer/provisioning meaning | Normal continuation | Using configuration/system and supported account/access writes explained before result limits. |
| Empty and whitespace strings | Blank states | Zero characters versus three present spacing characters, both non-null. |
| Literal null text | Blank states | Four-letter string null is not null value. |
| Absent field | Blank states | Missing from response does not determine retrieval null/error outcome. |
| Business-invalid value | Blank states | UNKNOWN violates agreement but is successfully returned text. |
| Evaluation error | Blank states | Failed normal evaluation distinct from successful null. |
| Blank screen evidence | Blank table | Observation alone cannot distinguish states; inspect collected/evaluation evidence. |
| Complete fixed empty illustration | Second JSON | firstValid false, values empty then Ana; returns empty. |
| Fixed versus dynamic input | Empty section | Literals illustrate selection, not per-identity retrieval replacement. |
| ignoreErrors does not validate text | Empty/error sections | True doesn't skip empty/spaces/UNKNOWN just for meaning. |
| Trim-to-empty boundary | Empty; question 4 | Three ordinary spaces trim to empty, not null, still selected. |
| Suitability definition and implementation | Empty section | Business decision needs supported implemented preparation/selection or producer enforcement. |
| Unavailable candidate representation | Empty section | Approved rejection must become null for firstValid or explicit alternative route; empty alone insufficient. |
| Changed input contract | Empty section | HR now sends empty versus null: review contract or implement approved suitability; main doesn't already handle. |
| Error false/true cases | Error section; question 6 | False stops past failed option; true considers supplied successful Ana. |
| Error scope and residual defect | Error section | Not whole tenant stop; true doesn't repair/validate failure or catch all outside errors. |
| Policy comparison | Three-column table | Successful null/empty/UNKNOWN unaffected by flag; failed option differs. |
| All candidates null | No names section; question 7 | No non-null usable name; actual evaluation/use-context evidence needed. |
| All-null state limits | No names section | No automatic clearing/retention/blank target inference or invented exact runtime message. |
| Approved final constant | No names section | Marker may be display label, not true name; scope/correction and late position required. |
| Literal-first trap | No names section | Non-null Not supplied first preempts dynamic candidates. |
| Unsafe constants and authority | No names; transfer | Employee-number uniqueness/linkage and Finance access facts need approved meanings. |
| Alternative authoritative field | No names; transfer | Not necessarily constant; meaning, authority, scope and priority verified. |
| Preserve cause and responsibility | Evidence section | Selected input, available outcomes, permitted reason and correction owner. |
| Ambiguous output value | Evidence section | Same text in both candidates cannot identify selected source from output alone. |
| No automatic branch monitoring | Evidence section | Review source/collection/error/config evidence; monitoring designed/verified, not guaranteed logs. |
| Human investigation diagram | Second diagram | Null versus excluded text versus error; text branch requires separate actual suitability rule. |
| Later preferred input | Later section; question 8 | Collected Anu can regain priority; fallback not locked; Preview differs from applied/current/target evidence. |
| Eight original assessment purposes | Prompts and separate answers | All original changed-condition purposes and reasoning retained. |
| Department transfer | Final exercise | Unapproved null->Finance fabricates fact; UNKNOWN remains selected; missing/error/authority/freshness/person checks separate. |

## Hypothetical evidence and exact assumptions

Employees governs an existing identity; HR-Primary is authoritative. Aggregation already collected one correctly correlated account. Owner's contract supplies null for an unrecorded preferredName, otherwise a usable name; givenName returns Ana. Other required fields valid. Custom Display Given Name/displayGivenName is organization-defined, not an access/status/ownership driver.

Main root firstValid has ignoreErrors false, ordered explicit HR-Primary preferredName then givenName accountAttribute reads, each with accountReturnFirstLink true. The first read succeeds with null; the second returns Ana, so selected result Ana. True belongs to each retrieval and allows a selected null, not error suppression. One account means no competing-account choice. The mapping chooses destination.

Supplied normal continuation includes shared population/consumer review, intended saved definition/mapping, checked null/error policy, Preview Ana, authorized relevant completed processing and current displayGivenName Ana. HR remains preferred null/given Ana. No external write, account matching, status or access result is supplied.

Independent results: preferred Anu before Ana wins; literal empty before Ana wins; three spaces/UNKNOWN/literal null text are non-null; trim three ordinary spaces yields empty, not null. Suitability exclusion requires actual approved preparation or supported explicit selection. Changed producer null-to-empty is a changed contract.

Supplied failed first option with false does not continue; with true it can consider successful next Ana. No universal failure catch, private stage, exact error text or tenant-wide stop is claimed. Both successful nulls supply no usable non-null name; no exact runtime/state/retention/clearing/target result is inferred.

A final approved display marker communicates absence rather than a real name; literal-first preempts dynamic options. Number/default-department risks and alternative authority are explicit. If both fields could supply Ana, the result string alone does not identify provenance. Required branch monitoring is not created by the definition.

Later Anu is collected and Preview returns it; no later application/target evidence is supplied. Department transfer retains null versus UNKNOWN and unapproved Finance, access-sensitive consumer review and alternative meaning/person/account/freshness/priority checks.

All facts and results are hypothetical; local JSON/value checks are not ISC engine execution.

## Primary-source verification

| Primary source | Claims checked October 27, 2026 | Application and limits |
|---|---|---|
| [First Valid](https://developer.sailpoint.com/docs/extensibility/transforms/operations/first-valid/) | Ordered first non-null selection, literal/nested values, empty selectable, explicit ignoreErrors continuation | Main/empty/error cases; non-null not business validity; no omitted-default reliance or exact all-null error/state claim. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated source/field reads and accountReturnFirstLink true returning first selected value even null | Two retrievals and account-versus-option selection; one main account; absent field/read failure not universally null. |
| [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Surrounding whitespace removal | Three ordinary spaces -> empty text, not null; no universal Unicode/null handling. |
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Root type/settings, nested returned values, explicit input provenance | Definition/use and actual-source distinction; no private service or per-candidate log model. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Custom fields, mappings, selected Preview, save versus application | Custom displayGivenName and selected/current evidence; field name implies no built-in policy. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Reevaluation, profile Apply Changes associated population, separate outcome verification | Normal continuation and later Anu; no universal schedule or guaranteed external write. |
| [Managing Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Identity attributes can drive assignment changes during processing | Supports department-transfer risk/context, not a supplied actual role assignment or grant. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.txt) | Null/booleans distinct from strings; ordered arrays; string boundaries | Explicit flags, empty/null text and values order; not ISC runtime validation. |

Claim-bearing bodies were reviewed, including firstValid's ordered non-null test, boolean ignoreErrors policy and selectable-empty example; accountReturnFirstLink true null result; trim; explicit/nested definitions; custom fields/Preview/application; processing population; identity-driven role assignment; JSON types.

The historical reference subsection retains the dated community report about firstValid's omitted ignoreErrors default. That report is not freshly revalidated and is not current runtime authority. The current operation reference lists false, but every new definition and error case explicitly supplies a boolean, so this lesson requires no resolution of omitted-default behavior. No tenant check or historical discrepancy resolution is claimed.

Cloud pages use Identity Security / Identity Services / Human Fabric naming in places; course ISC naming remains. No IdentityIQ behavior imported. Main null-for-absence, name authority, field scope and error policy are example agreements, not universal product defaults.

## Assessment mapping

| Purpose retained | Facts supplied | Expected reasoning and alternatives | Misconception exposed | Source mapping |
|---|---|---|---|---|
| 1. Null is not error | Successful null, second Ana, explicit false | Continue to Ana; false handles failure, not null | False disables null fallback | First Valid; Account Attribute |
| 2. Priority | Approved Anu first, Ana second | Anu first non-null; reversing options changes priority | Longest/newest/vote/composition determines result | First Valid; approved agreement |
| 3. Empty versus error | Empty first, Ana next, true flag | Select empty; true does not implement blank validity | True skips any undesirable result | First Valid; JSON types |
| 4. Trimmed spaces | Three spaces become empty candidate, then Ana | Still non-null; implement approved rejection/selection, not assumed trim-to-null | Trim returns null or empty means absent | Trim; First Valid |
| 5. Placeholder | UNKNOWN returned successfully, agreement rejects it | Bare firstValid selects it; producer/suitability rule must enforce meaning | Business-invalid text automatically errors | First Valid; supplied requirement |
| 6. Failure policy | First option error; second Ana if considered | False stops there; true continues to Ana; failure still needs visible correction | Error suppression repairs or validates input | First Valid |
| 7. No candidate | Both successful null; no constant/no-name policy | No usable non-null result; inspect evaluation/use context; correct/approve response, no clearing/retention/delivery inference | Option count guarantees useful result | First Valid; Profiles; Processing |
| 8. Later preference | Applied Ana; newly collected Anu; Preview Anu only | Higher-priority evaluation established; processing/current identity and target evidence separate | Fallback locks lower option or Preview applies it | First Valid; Profiles; Processing |
| Transfer: department | Null/UNKNOWN departments, no Finance default approved, access-sensitive use | Finance fabricates fact for null; UNKNOWN remains non-null; approve authority/missing/placeholder/error response and consumers; equivalent alternative needs person/account/freshness/priority checks | Populated output closes data-quality/access problem | First Valid; Roles; approved field agreement |

## Diagrams and definitions

- [Null result and ordered alternative](../../assets/TRN-004_null_result_and_ordered_alternative.txt): identity context, successful null, next Ana and selected result. Maximum 36 columns; arrows express selection, not private services or candidate logs.
- [Fallback reason and unresolved defect](../../assets/TRN-004_fallback_reason_and_unresolved_defect.txt): human investigation of null/implemented text exclusion/error policy, authority and current uses. Maximum 41 columns. Excluded text requires a separate implemented suitability rule.
- Editable sources exactly match inline blocks; nearby prose gives the same reasoning. Human checks do not define backend execution stages or make downstream decisions wait.
- Historical [null selection/priority](../../assets/TRN-004_null_selection_and_priority.txt) and [cause/evidence checks](../../assets/TRN-004_fallback_cause_and_evidence_checks.txt) remain unchanged, including the historical second diagram's 48-column width.
- Both complete JSON examples must parse locally: root firstValid false/two explicit accountAttribute reads/true return-first flags, and fixed empty then Ana example. Shape/value checks are illustrations, not tenant uploads or runtime validation.

## Executed verification

- Checked all 57 preserved coverage purposes, eight question prompts with separate worked reasoning, and the department-default transfer. Approved priority/authority, complete successful continuation and error/data/evidence boundaries remain.
- Both saved JSON blocks parse locally. Main firstValid has explicit boolean false, two ordered explicit HR-Primary accountAttribute reads (preferredName then givenName), true accountReturnFirstLink on each and root-only name. Fixed firstValid has explicit false and values empty string then Ana.
- Illustrative value checks confirm first non-null selections for null/Ana, Anu/Ana, empty/Ana, spaces/Ana, literal null text/Ana, UNKNOWN/Ana and literal-first Not supplied/Ana. Three ordinary spaces trim to empty text, which is not null; the literal null string has four characters; two null candidates contain no non-null name.
- These value/JSON checks illustrate documented conditions and example consistency. They are not ISC engine tests, error injection, omitted-default validation, observed branch logging or proof of an all-null runtime/state result. Explicit false/true error branches were checked against the operation reference.
- Current editable diagrams exactly match learner blocks, maximum widths 36 and 41 columns. Historical diagram sources stay unchanged, including the old second diagram's 48-column width.
- Local Markdown target checking found 1,115 targets and zero missing targets. Learner text contains no source/course links, biography, fictional company, employee/object IDs or em dashes.
- All four existing site navigation/disclosure tests passed. They test site behavior, not transform execution or learner comprehension. Tracked whitespace and the three new-file checks produced no diagnostics; new-file comparison exit status 1 indicates a present difference.
- Inventory increased from 473 to 476 files: four existing files changed, three files added, 469 unchanged and none removed. All 91 learner files remain; TRN-004 is the only changed learner.
- Reference text outside the owned TRN-004 section retains baseline lengths and hashes. Other learners, historical pilots and original diagrams, specification, tracing guide, README, publication records, manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging is empty. No commit, push or deployment occurred.
- Final save-time checks after this record confirm saved learner/diagram/record contents, reference boundaries, intended file scope, whitespace, HEAD and empty staging.

## Limits

No actual tenant, API, source, profile, custom field, account relationship, mapping, transform, aggregation, Preview, processing, access, provisioning or target operation is executed or changed. No fallback, suitability rule, missing-data policy, monitor or rollout is implemented in a tenant. Beginner validation, full graphical review and formal approval remain pending. Existing navigation tests are not transform or comprehension tests. No commit, push or deployment occurs.
