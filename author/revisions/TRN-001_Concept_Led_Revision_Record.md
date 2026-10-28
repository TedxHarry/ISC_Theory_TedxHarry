# TRN-001 concept-led revision record

Revision 2.0, Module 8.1. Saved October 27, 2026 under teaching specification 3.1.

## Scope and baseline

Revised [TRN-001 learner lesson](../../lessons/TRN-001_Choosing_Between_Direct_Mapping_and_Calculated_Values.md) locally, with current author tracking and two new editable diagrams. Starting HEAD: 7123d85038c688f1ccecffa6a8504d22e3986b79; 464 inventoried files; 91 learner lessons; empty staging area. Original revision 1.0 is recoverable at that commit and remains published unchanged.

Progress becomes 56 of 91 individual revisions, with 35 awaiting. Module 8's first lesson is individually revised; all nine Module 7 revisions remain complete. Published revised snapshot remains 23 through SRC-002. TRN-002 is next; its learner body was not opened. ROL-007 new authoring remains paused. No commit, push, deployment, site-code or original-repository change.

## Teaching decisions and explanation review

The lesson begins with two approved field requirements rather than a fictional employee biography. One selected value already meets its exact requirement; another needs a precise representation change. Direct mapping and transforms are explained as design choices with verified meanings and inputs, not competing slogans.

Employees/HR-Primary are functional configuration labels. One correctly associated collected HR account supplies single text `0042` and Finance. There is no invented ISC identity ID or account key needed to make this decision. Source data, expected mapping output and current identity state remain distinct.

The normal path completes selection, proposed outputs, selected-identity Preview, shared-change scope and approved processing before input and data-quality variants. The current identity's `0042`/`finance` continuation and unchanged HR values `0042` and `Finance` are supplied; no target result is inferred. Direct mappings also need evaluation/application, not just calculated outputs.

Implicit/explicit selection and accountAttribute sorting/filtering receive their causal meanings before troubleshooting. Normalization, translation, trim, missing policy and data shape solve different problems. Consumer, role, provisioning and synchronization meanings connect identity output to separate decisions and write outcomes without claiming universal case behavior.

All eight original assessment purposes remain as unanswered-first prompts followed by worked reasoning. The 100 proposed mappings remain 40/25/15/10/10, explicitly not failed-identity counts. Approved producer correction or another suitable authoritative field remains an acceptable alternative.

The two new diagrams fit 42/38 columns. Original second diagram was 45 columns; that historical asset remains unchanged rather than being silently edited. Both current diagrams meet the current 42-column limit. The counts of tables, diagrams, prompts and words aren't course quotas.

Author read-through checks first-use meaning, normal mechanism, changed conditions and scope. Actual beginner comprehension and transfer, full graphical publication review and formal approval remain separate and pending.

## Original-to-revision coverage

| Required understanding | Current location and retained reasoning |
|---|---|
| Field requirement before tool choice | Opening contrasts preserving code 0042 with approved Finance-to-finance representation; no universal transform rule. |
| Identity/account/attribute/source meanings | Early context distinguishes connected record, represented person and named fields. |
| Profile/authority/mapping meanings | Employees/HR-Primary context explains population, selected source data and identity field instructions. |
| Existing collection and association | Exactly one collected correctly linked HR account; account aggregation and correlation defined; main isn't a collection/owner repair. |
| String and leading-zero semantics | 0042 is text with meaningful zeros, not an arithmetic quantity; code conversion to 42 violates requirement. |
| Explicit main requirements | Single costCentreCode `0042` to costCenter unchanged; single departmentLabel `Finance` to department `finance`; other required identity data valid. |
| Organization-specific representation | Lowercase label isn't a universal ISC department requirement; field name alone doesn't choose meaning. |
| Direct mapping mechanism | Selected source account field supplies identity value without added value-changing calculation; evaluation/collection still matter. |
| No unnecessary remove/recreate | Zero removal/restoration adds dependency without new information; preserve agreed type and code. |
| Direct mapping doesn't validate business truth | Wrong source0043 can be carried faithfully; authority/meaning/type/selection remain necessary. |
| Transform meaning | Configurable retrieval/manipulation object with input, operation and output, not only arithmetic. |
| Lower and ToLower | Main implicit selected Finance becomes finance through documented lower operation/simple UI choice. |
| Meaning preserved / representation changed | Approved label is expressed differently, not a new department decision or HR write. |
| Output needn't differ visibly | Already lowercase finance returns finance; operation still evaluated. |
| Retrieval transform | accountAttribute retrieves a field on an account associated with identity; no visible letter change required. |
| Two value paths | Proposed direct `0042` and lower `finance` outputs are distinct; both need relevant application. |
| Save/definition/mapping boundaries | Saved instructions and attaching a calculation aren't current identity-value evidence. |
| Preview meaning and scope | Selected identity evaluation returns expected values, not population application. |
| Processing and Apply Changes | Identity evaluation follows relevant changes or manual initiation; profile action affects associated identities, not just previewed person. |
| Consumer and role definitions | Configurations/systems use values; role assignment conditions can depend on identity attributes; inspect actual comparison behavior without universal case claim. |
| Approved continuation | Affected population/consumers reviewed, relevant processing complete, current identity costCenter `0042` text and department `finance`. |
| Unchanged source and no target inference | Collected HR values `0042` and `Finance` remain; no external write/use test or sign-in result supplied. |
| Correct operation / wrong input | Legal to legal can be operationally correct but wrong business result; investigate provenance. |
| Implicit and explicit input | Mapped field supplies implicit value; transform-defined explicit input takes precedence. |
| Directory override example | Associated Directory-Primary `Legal` explicitly read despite HR selector; changing visible selector doesn't redirect it. |
| No hard-coded person patch | Restore approved dependency rather than force finance and hide future department changes. |
| Multiple-account selection | Source alone doesn't select correct account; accountAttribute has sorting/filtering controls. |
| Default retrieval scope | accountAttribute oldest-created-first and first non-null unless overridden; oldest `Legal`/newer `Finance` both non-null yields Legal. |
| Selection isn't formatting | Another lowercase leaves legal; active-worker selection needs approved account evidence and retrieval design. |
| No universal direct selection claim | accountAttribute defaults aren't imposed on every direct mapping; main one-account assumption is local. |
| Normalization meaning and limits | Consistent expression of agreed equivalent values doesn't invent business equivalence. |
| Lower versus lookup | FIN becomes fin; full finance needs approved key/value translation or another suitable approved field. |
| Lookup and unknown-code policy | Configured translation requires meaning/ownership and unknown-key handling; no invented table/default. |
| Lower versus trim | Finance plus trailing space yields finance plus space; trim is separate beginning/end whitespace operation. |
| Missing representations | Null defined before retrieval behavior; empty string and whitespace differ, neither automatically acceptable. |
| Fallback policy | Alternative condition/meaning requires agreement; unapproved finance default invents an access-relevant business fact. |
| Error versus believable wrong value | Operation/input error differs from business wrong output; inspect authority/selection/requirement, no universal lower-null result. |
| Information loss | Case, zeros and omitted list members identify what an instruction discards. |
| Multi-valued mapping boundary | Defined list input; documented mapping-transform first-value/single-result behavior, not automatic equivalent list conversion. |
| Changed data shape | Single-string main assumption matters; multiple departments need design review. |
| Provisioning/sync meanings | Supported external changes versus separately configured mapped writes to eligible existing correlated accounts; identity calculation doesn't configure/prove delivery. |
| Account creation context | Transforms on account-create configuration are separate uses from identity mappings. |
| Human evidence diagram | Meaning/input, Preview, approved scope/processing, current values, actual decision and conditional target verification; not private execution schedule. |
| Reported write versus target state | Operation success report and intended current target outcome differ; neither proves all other targets. |
| No universal direct/transform choice | Approved precise difference determines design; dates/components can need calculations; broken input shouldn't be hidden. |
| Changed-condition review | Already lowercase, other department, unexpected code, absent input and multi-account cases; show unacceptable input to responsible owner. |
| Eight assessment purposes | All retained as unanswered-first prompts and separate worked reasoning. |
| 100-mapping transfer | 40 exact/25 lowercase/15 translation/10 missing policy/10 selection; mapping counts, not failed identity counts. |
| Accepted alternatives and completion | Approved producer correction/other authoritative field can remove calculation need; requirements, input, Preview/applied identity and dependent outcomes retained. |

## Supplied facts and boundaries

Existing identity is governed by Employees with HR-Primary authoritative. Exactly one collected account on that source is correctly associated. Main account costCentreCode is the single string `0042`; departmentLabel is single string `Finance`. Other required fields are valid, no alternative input or explicit override applies, and source ownership/requirements are approved.

Direct mapping preserves text `0042` in costCenter. ToLower uses the mapped HR departmentLabel implicitly and returns `finance` for department. The approved continuation includes shared-population/consumer review, relevant completed processing and verified current identity values `0042` and `finance`. HR still holds0042/Finance. No role assignment, external write or sign-in/use test is supplied.

Separate associated Directory-Primary `Legal` input explicitly overrides the HR selector and returns `legal`. Independent FIN returns `fin` until an approved translation exists. Finance with one trailing space returns `finance` with the same space under lower only. Null has no approved finance default; no lower-null result is predicted. The accountAttribute case supplies two associated accounts, oldest `Legal`/newer `Finance`, both non-null, default retrieval and an active-worker requirement not met by that default.

Multi-value behavior is scoped to identity-profile mapping transforms taking the first input value into a single result. No universal direct-mapping selection rule, list-preservation promise, type conversion, always-clean input or automatic target path is claimed.

The 100 proposed mappings are 40 exact, 25 lowercase, 15 translation, 10 missing policy and 10 selection. These are design categories, not counts of failed people. All values/results are hypothetical teaching evidence, not tenant observations.

## Primary-source verification

| Primary source | Claims rechecked October 27, 2026 | Limits |
|---|---|---|
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Configurable input/output operations; implicit versus explicit input precedence; separately configured account-create usage | No JSON/API procedure, private services or claim every transform visibly changes text. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Source mappings, ToLower, Preview versus Apply Changes; multi-value mapping-transform first-value/single-result behavior | Single strings in main case; source-field selection and application remain distinct. |
| [Lower](https://developer.sailpoint.com/docs/extensibility/transforms/operations/lower/) | Lowercase operation and optional explicit input versus mapped source/field input | ASCII examples only; no universal null/error behavior or added trimming/translation. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated-account retrieval; oldest-created sorting, first-non-null default and configured sorting/filtering | Both example values non-null; defaults scoped to this operation, not every direct mapping or unattached-account lookup. |
| [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Separate removal of beginning/end whitespace | No combined transform implemented or automatic producer-data repair claimed. |
| [Lookup](https://developer.sailpoint.com/docs/extensibility/transforms/operations/lookup/) | Key/value translation and optional default for unknown keys | Business translation/unknown-code policy must be approved; no actual table supplied. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Mapping evaluation, relevant event/manual initiation, profile Apply Changes population and separate delivery evidence | No universal schedule/instant change; main processing and current values are supplied assumptions. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Separately configured mapped identity-to-eligible-existing-correlated-account writes | Main has no target write; transform doesn't itself enable a path or prove its success. |
| [Managing Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Identity-attribute changes can affect assignment during processing; access-bundle/consumer context | No concrete role assignment, universal comparison setting or delivered grant supplied. |

Developer claim-bearing content was read, including input precedence, operation definitions and accountAttribute sorting/first-non-null controls. Admin mappings/ToLower/multi-value/Preview/application, processing scope, role context and sync conditions were reviewed. Current pages use Identity Security / Identity Services / Human Fabric naming in places; the requested ISC title remains.

No JSON or executable payload is necessary for this introductory decision lesson. Primary sources and check dates stay outside learner text. Illustrative string reasoning isn't an ISC engine test.

## Assessment and transfer reasoning

| Purpose retained | Supplied evidence and accepted reasoning | Misconception exposed | Primary-source mapping |
|---|---|---|---|
| Valid code | Single text `0042`, exact target/consumer requirement and verified owner/account: direct mapping preserves zeros/type without unnecessary remove/recreate. | Every field needs a transform or arithmetic equivalence preserves identifier meaning. | Identity profiles; approved example requirement |
| Approved case conversion | FINANCE, no spaces, implicit ToLower input: finance is expected result, not proof of application or consumer outcome. | Calculation result proves current identity or target state. | Lower; Identity profiles; Processing |
| Translation | FIN to full finance without approved agreement: lower gives fin; establish meaning/unknown-code policy or another approved field. | Case conversion expands abbreviations or creates business translation. | Lower; Lookup |
| Explicit input | HR `Finance` but explicit associated directory `Legal`: legal follows chosen input; inspect retrieval/authority and restore correct dependency. | Visible mapping selector always overrides transform input. | Transforms; Lower; Account Attribute |
| Trailing space | Finance with one space and only lower: finance retains space; producer correction or approved trim are valid paths. | Lower implicitly trims or every cleanup is already authorized. | Lower; Trim |
| Unauthorized fallback | Null department, access implications and no approved finance default: agree missing-data handling and responsibility; reject invented fact. | Any nonempty output is acceptable or a universal lower-null claim is needed. | Approved requirements; Identity profiles; Processing; Roles |
| Preview versus target | Preview `finance` only, processing/sync unknown, directory `Finance`: provisioning failure unproven; check identity application then configured decision/write and actual target. | Preview is delivery or every identity calculation provisions automatically. | Identity profiles; Processing; Attribute sync |
| Multiple accounts | Default accountAttribute, oldest `Legal`/newer `Finance`, both non-null; default selects Legal despite active-worker requirement: fix selection, another lower won't help. | Formatting selects correct account or arbitrary visible name wins. | Account Attribute; Lower |
| Proposed mappings / transfer | Segment 40/25/15/10/10, preserve authority/type/selection/policy, representative Preview/current identity and independent consumer evidence. Approved producer correction/another authoritative field acceptable if requirement met. | One generic transform/fallback fixes all; 100 mappings are 100 failed identities; blind shared application. | All nine primary sources above |

## Diagram review

- [Preserved code and lowercase label](../../assets/TRN-001_preserved_code_and_lowercase_label.txt): one collected associated account, selected source fields, direct `0042` and lower `finance` expected results; both need application and no source/target write shown. Maximum 42 columns.
- [Calculation, application and delivery evidence](../../assets/TRN-001_calculation_application_and_delivery_evidence.txt): human input/Preview/scope/current-state checks, separate dependent decision and conditional configured write. Maximum 38 columns.
- Current sources exactly match learner blocks. Arrow meaning, supplied conditions and human-versus-system execution boundaries are explained. The evidence sequence doesn't imply that consumer decisions wait for human observation.
- Original [direct/calculated paths](../../assets/TRN-001_direct_and_calculated_value_paths.txt) and [application/consumer checks](../../assets/TRN-001_calculation_application_and_consumer_checks.txt) remain unchanged. Source synchronization isn't graphical publication-format verification.

## Executed verification

- Compared the saved learner text with the intended revision and checked all 49 retained coverage purposes, all eight question prompts and their separate answers, and the transfer exercise's 40 + 25 + 15 + 10 + 10 = 100 proposed mappings.
- Both current editable diagrams match the learner blocks exactly, with maximum widths of 42 and 38 columns. Historical diagram files remain unchanged.
- Illustrative string checks confirm preserved text `0042`; Finance/FINANCE to finance; FIN to fin; Legal to legal; retained trailing space after lower; and unchanged repeated lowercase output. These are checks of the teaching examples, not execution or validation of the ISC transform engine.
- The local Markdown scan checked 1,093 targets across the current course and author records, with no missing targets.
- All four existing navigation/disclosure tests passed. They verify site behavior, not transform calculations or learner comprehension.
- Tracked-file whitespace checking and individual checks of the three new files produced no diagnostics. The new-file comparison exit status of 1 indicates a present difference, not a whitespace failure.
- The working inventory increased from 464 to 467 files: four existing files changed, three files added, 460 files unchanged and no files removed. All 91 learner files remain present. The only changed learner is TRN-001.
- Reference-record content outside the owned TRN-001 section retains its baseline length and hash. Other lessons, pilots, teaching specification, tracing guide, README, publication records, site manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; the staging area remains empty. No commit, push or deployment occurred.
- Final save-time verification repeats the file-scope, saved-text, diagram, reference-boundary, whitespace, HEAD and staging checks after completing this record.

## Limits

No actual tenant, API, source, profile, mapping, transform definition, account association, aggregation, processing, role, sync, provisioning or target operation occurred. No source correction, fallback, lookup table, selection filter or shared rollout was implemented in a tenant. No observed learner outcome is claimed. Beginner validation, full graphical publication review and formal approval remain pending. Existing site navigation tests aren't transform-engine or comprehension tests. Nothing is committed, pushed or deployed in this task.
