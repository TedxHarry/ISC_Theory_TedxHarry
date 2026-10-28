# TRN-008 concept-led revision record

Revision 2.0. Module 8.8. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [What has to change before this value is calculated again?](../../lessons/TRN-008_Calculation_Context_Dependencies_and_Reevaluation.md).

## Scope and review status

One existing learner revised locally. Revision 1.0 remains recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference content and original diagrams remain. Other learners, pilots, specification, tracing guide, README, publication records and site manifest/templates/styles/navigation/code are outside scope.

Documentation-based author content/first-use/source/narration review complete. Beginner teach-back/unfamiliar-case validation, full graphical publication review and formal approval pending. TRN-009 is next; its learner body is not opened. New authoring paused at ROL-007. No commit, push or deployment.

## Changes and teaching decisions

The revision starts with the location of a changed value, establishes account/identity record distinctions, evaluates one simple mapping in two contexts and completes the collection/Preview/application evidence before deeper dependency and consumption cases.

Employee names/numbers, fake identity/account IDs and source/target brands are removed. HR-Primary and Directory-Primary identify relevant configured sources without a biography. First/second identity labels only distinguish the two necessary evaluation contexts.

The timeline is explicitly a sequence of observations: a historical 08:50 value is not asserted current at 09:06, collection may already have initiated processing, and 09:10 verification is not a mandatory manual step or five-minute SLA. Peer-field concurrency is a documented use restriction rather than a reproduced race. Create-field reading is separated from identity mapping and existing-account updates.

Three full definitions, one evidence table and two useful diagrams remain because they expose different contexts and state observations; no layout or word quota applied. Eight prompts precede separate worked reasoning; circular login/email transfer and accepted initial-input/redesign options retained. No learner citations, revision notes or teaching-method announcements.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| Changed value needs location | Opening | HR update, available ISC account and applied identity field are distinct evidence. |
| Identity/account/attribute/source | Context | Managed representation, connected record and collected account data. |
| Profile/authority/correlation | Context | Employees shared mappings, authoritative HR-Primary and intended account link. |
| One correctly associated account | Context | Existing main identity, single account, required fields valid. |
| Same field name, different record | Context | Account costCenter versus applied identity costCenter. |
| Approved normalization and type | Context; definition | Trim ordinary surrounding spaces, preserve text and leading zeros, not numeric 42. |
| Limited field use | Context | Metadata/proposed new-account data, not access/status condition. |
| Transform/input/output/context | Instructions section | Which identity/use/mapping/data/time used, not instructions alone. |
| Dependency definition | Instructions section | Data/relationship/configuration needed for correct result. |
| Full trim definition | First JSON | Root trim with explicit HR-Primary costCenter accountAttribute true flag. |
| JSON/boolean/root explanation | Instructions section | Named object settings, unquoted true and mapped destination. |
| Selected null versus error | Instructions section | Return-first true can return no value, doesn't replace input or suppress error. |
| Per-identity result | Two-context example; question 1 | Same logic trims 0042/0088 from each associated account, not first-person capture. |
| Independent-context diagram | First diagram | Each own input/output, no cached person value/private schedule or application inference. |
| Unavailable/multiple account qualification | Instructions section | Investigate actual retrieval/selection rather than reuse one-account assumption. |
| Aggregation availability | Update flow | Reads into ISC; accountAttribute not fresh live producer query. |
| Publication/collection/evaluation distinct | Update flow | HR change alone doesn't make input available. |
| Preview meaning | Before timeline | Selected mappings/data evaluation, not new collection or population application. |
| Identity processing meaning | Before timeline | Reevaluates identity data/decisions, can update mapped fields. |
| Full supplied evidence table | Update flow | 08:50 applied 0042, 09:00 publish 0090, 09:02 old account/Preview, 09:05 new account, 09:06 Preview, 09:10 current verified. |
| Old input correct calculation | Update flow; question 2 | Trim 0042 expected from available old data; not repair by corrupting calculation. |
| Historical versus current evidence | Update flow; question 3 | 09:06 last applied check 08:50 isn't proof current value still 0042. |
| Aggregation can initiate processing | Update flow | Event-based application may already have occurred, not obligatory manual gap. |
| No timing SLA/invented wait | Update flow | 09:10 verification not five-minute promise or proof processing waited. |
| Timeline diagram | Second diagram | Observations connect evidence, not separate mandatory backend jobs. |
| Data/config/time dependency meanings | Dependency section | Account relation/value, instructions/reference/table and clock input differ. |
| Implicit versus explicit input | Dependency section | Mapping context versus internal chosen source. |
| Visible selector/sourceName limits | Dependency section | Nested retrieval remains; display-name dependency review after rename. |
| Reference/caller meaning | Dependency section | Existing named logic and calculations using it. |
| Shared/copy scope | Dependency section; question 8 | Shared change may affect callers/populations; copies separate, save not applied proof. |
| Consumer definition/impact | Dependency section | Using system/config; display correction versus access condition effects. |
| identityAttribute operation | Peer field section | Named identity read, not peer-order guarantee. |
| Concurrent identity calculations | Peer field; question 4 | Overlap, list position no newly available/current/existing peer guarantee; documented not intended use. |
| Independent-input alternative | Peer field section | Read available authoritative source/shared prep, not supposedly completed peer field. |
| Circular dependency meaning | Peer field section | A needs B and B needs A without independent start; repeats/default don't fix. |
| Across-system circularity | Peer field section; transfer | Identity email needed before target that supplies login, approved initial input/redesign required. |
| Provisioning/create-profile meaning | Creation section | New-account field configuration separately from identity mappings, actual supported changes. |
| Complete identityAttribute field definition | Second JSON | Proposed directory create field reads identity costCenter; not full policy/event. |
| Two name properties | Creation section | Root transform name versus attributes.name identity field. |
| Available value consumption/readiness | Creation section; question 5 | Reads available 0042 or 0090, not collect/apply HR first. |
| Create event/acceptance evidence | Creation section | Identity Preview not account-create execution or target acceptance test. |
| Identity-attribute context variables | Creation section | identity, attributeDefinition and oldValue meanings; not freshness proof. |
| Account-profile context variables | Creation section | identity, field, application, current meanings and limits, not fresh target query. |
| Context portability limits | Creation section | Moving templates doesn't preserve every variable/value/meaning. |
| Existing account versus create calculation | Existing account; question 6 | Verified identity 0090, directory 0042, no ongoing update/new event; not transform failure. |
| Attribute synchronization meaning | Existing account section | Separate eligible existing-correlated update configuration, other approved triggers possible, none supplied. |
| Main target outcome boundary | Existing account section | Identity0090 and retained account0042 only, no actual target write/create. |
| Independent clock-driven field | Time section | Review-only assignmentBoundaryReview/reviewAt, not cost-centre clock input/access action. |
| ISO/UTC date inputs | Time section | Supplied supported timestamp 2026-10-23T17:00:00.000Z, Z UTC. |
| Full dateCompare example | Third JSON | now left, gte explicit reviewAt right, true retrieval flag, positive/negative strings. |
| Changing now not source | Time section; question 7 | 16:59 Before, 17:01 reached, same reviewAt; run one field not proof all outcomes. |
| Stored label not live expression | Time section | Crossed cutoff doesn't establish evaluation or application. |
| Scheduled eligibility/periodic option | Time section | requiresPeriodicRefresh periodic need, not exact/second timer; example no schedule. |
| nextProcessing constraints | Time section | Per-profile future processing value, ISO and >=1 hour after update, separate configuration. |
| Queued time evidence | Time section | Intended timing versus actual execution/completion, delays possible. |
| Reevaluation/application/delivery meanings | Choose reevaluation | Run actual context, updated mapped value, separate consumer result. |
| Choose processing for dependency | Choose reevaluation | Collect producer update; apply config change; time reevaluation; create-profile event evidence differ. |
| Same result after rerun | Choose reevaluation | Unchanged output doesn't prove processing skipped. |
| Coverage and modified timestamp limits | Choose reevaluation | One Preview not population; current identity not target; generic modified time not full field history. |
| Incident evidence set | Choose reevaluation | Identity/account/use/mapping/definition/data/references/clock/change/process/current/consumer. |
| Eight question purposes | Prompts/separate answers | All original context/availability/history/order/create/update/time/shared purposes retained. |
| Circular login/email transfer | Final exercise | Initial data ownership, permitted temporary/independent input, separate contexts and acceptance evidence. |
| Transfer accepted redesign | Final exercise | Supported authoritative initial input or approved temporary semantics/uses/correction; no screen-order/two-run shortcut. |

## Exact hypothetical evidence

Employees governs an existing main identity; HR-Primary authoritative, one correctly correlated collected account. Account costCenter initially `" 0042 "`; identity costCenter is a separate field. Owner approves surrounding ordinary-space removal and code-character/zero preservation. Other required fields valid; metadata/proposed new-account data, not access/status criterion.

Main root Trim HR cost center explicitly retrieves HR-Primary costCenter with true accountReturnFirstLink and returns 0042. Second identity has its own one associated account containing `" 0088 "`, so same instructions return 0088. No person capture/cache or live producer query inferred.

All supplied main observations are October 23 2026 UTC: 08:50 current identity 0042; 09:00 HR publishes spaced 0090; 09:02 available account spaced 0042 and Preview 0042; 09:05 account verified spaced 0090; 09:06 Preview 0090, latest checked applied observation still 08:50; 09:10 relevant processing/current 0090 verified. No assertion of stale current 0042 at 09:06, first processing at 09:10 or fixed latency.

Proposed custom costCenterReviewText exposes unsafe identityAttribute peer-read/list-order assumption, not a recommended implemented definition. Identity field calculations can overlap; independently available authoritative source/shared logic is the supported design direction.

Second JSON is a proposed Initial directory cost center identityAttribute field transform with attributes.name costCenter, not full create profile/event. It consumes available identity 0042 or0090, not collect/apply first. Existing Directory-Primary account retains 0042 while identity 0090 is confirmed; no ongoing update is configured or executed. Attribute sync is explanatory only, no eligibility/configuration/target traffic assumed.

Documented identity context includes identity/attributeDefinition/oldValue; account-profile context includes identity/field/application/current. Meanings and availability/freshness limits are explained without moving a template as if every variable were equivalent.

Third JSON independently supplies review-only assignmentBoundaryReview: now gte explicit HR-Primary reviewAt 2026-10-23T17:00:00.000Z, true retrieval flag, Before review point/Review point reached. Fixed 16:59/17:01 evaluations differ due to now; no schedule/application/target result inferred. Periodic and nextProcessing context retain eligibility/queued execution and future ISO/one-hour lead requirements; example has no schedule.

Transfer supplies mutually unavailable login/email across identity/account creation and screen-order/two-run workaround. Approved independent initial input or redesign, with temporary-value semantics/uses/correction if allowed, is needed before separate acceptance evidence.

All values/observations/results are hypothetical; no tenant operations.

## Primary-source verification

| Primary source | Claims reviewed October 27, 2026 | Application and limits |
|---|---|---|
| [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) | Root/nested instructions, explicit/implicit inputs, identity versus account-profile template variables and separate create usage | Context/definition portability; no promised fresh peer values/private scheduler. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated-source account reads, sourceName display dependency and true return-first/null | Main per-identity inputs/selection; no fresh connector read/error suppression. |
| [Trim](https://developer.sailpoint.com/docs/extensibility/transforms/operations/trim/) | Boundary whitespace removal and explicit input | 0042/0088/0090 code strings preserve zeros; not numeric or generic validation. |
| [Identity Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/identity-attribute/) | Named identity-field read, account-profile use, explicit concurrency/no-current-or-existing-peer warning in identity calculations | Peer anti-pattern and proposed creation-field definition; no race reproduction or forced refresh. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Shared mappings/custom fields, selected Preview and application | Governing profile and selected-versus-current/population evidence. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Event-triggered mapped updates, shared config application, schedule eligibility/queues, future ISO per-profile nextProcessing/>=1 hour lead, separate delivery validation | Normal timeline/time context; no fixed latency, mandatory manual gap or inferred stale present. |
| [Date Compare](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-compare/) | now at evaluation, ISO dates, gte direction/strings and periodic-refresh option | Independent time field; no automatic schedule or exact cutoff promise. |
| [Reference](https://developer.sailpoint.com/docs/extensibility/transforms/operations/reference/) | Shared existing named logic/current evaluated result | Caller scope and copies-versus-references, not population application on save. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Separately configured identity-account writes for eligible existing correlated accounts/compatible create mappings | Explains update responsibility only; no sync eligibility/config/traffic assumed for proposed field. |
| [Configuring Source Account Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html) | Source-specific new-account attributes and creation values | Create profile context and separate actual provisioning/acceptance; no direct connector capability invented. |
| [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.txt) | Object/string/boolean/null distinctions | Three full illustrative definitions, codes remain text; syntax not tenant execution. |

Claim-bearing bodies reviewed include concurrent/no-guarantee identityAttribute warning and named read; identity/account context variables; explicit account retrieval and selected-null flag; trim; shared references; custom mappings/Preview/application; event-based processing; dateCompare clock/operators/periodic option; creation configuration and separate existing-account synchronization. Future ISO and one-hour nextProcessing constraints were also checked in the current processing documentation reviewed during this revision sequence.

Current official cloud references govern ISC claims; no IdentityIQ behavior imported. Pages use Identity Security / Identity Services / Human Fabric naming in places; ISC naming remains. No exact scheduler/race/circular-error or generic missing-output/retention/clearing behavior is invented.

## Assessment mapping

| Purpose retained | Facts supplied | Expected reasoning / alternatives | Misconception exposed | Source mapping |
|---|---|---|---|---|
| 1. Per-identity context | One account each, spaced 0042/0088, same definition | Respective 0042/0088, full identity/account trace accepted | Shared logic captures first person's result | Transforms; Account Attribute; Trim |
| 2. Available data | HR 0090 at 09:00, ISC account 0042/Preview 0042 at 09:02 | Trim correct for available input; investigate collection/selection, not corrupt logic | Producer publication makes every read fresh | Transforms; Account Attribute; Trim; Processing |
| 3. Historical applied observation | Preview 0090 at 09:06, only 08:50 applied 0042 | Recheck current value/process; no evidence is not proof application failed | Earlier observed value guaranteed still current | Profiles; Processing |
| 4. Peer-field order | identityAttribute inside costCenterReviewText while costCenter calculated, screen order only | Unsupported readiness assurance; independent authoritative input/shared logic alternative | Mapping-list position imposes finish-first semantics | Identity Attribute; Transforms; Reference |
| 5. Create-field consumption | Available identity 0042, HR approved 0090, proposed read | Read not collect/apply instruction; establish readiness before event, no actual create proved | Consumer automatically refreshes upstream | Identity Attribute; Transforms; Profiles; create profile |
| 6. Existing target | Current identity 0090, directory 0042, no ongoing update,only proposed create calculation | Identity result verified; separate approved/configured supported update/acceptance needed | Create-field rule updates existing account automatically | Identity Attribute; create profile; Processing; Attribute Sync |
| 7. Time dependency | Same 17:00 reviewAt, eval 16:59/17:01, now gte | Before/reached because now changed; scheduling/application separate | Source change required for every changed output or now schedules itself | Date Compare; Processing |
| 8. Shared edit scope | Saved shared transform, one Preview, no other callers/results checked | Compatibility/representative coverage/application/delivery remain unproved | Save shared settings completes all uses | Reference; Profiles; Processing; Attribute Sync |
| Transfer: circular email/login | Both initial inputs unavailable, screen order/two-run proposal | Identify owner/available initial input or supported redesign, distinguish identity/create contexts; temporary input requires approved meaning/uses/correction, separate collection/calculation/application/create evidence | Repeated runs or screen order make missing inputs exist | Transforms; Identity Attribute; Processing; create profile |

## Diagrams and definitions

- [Same instructions, separate identity inputs](../../assets/TRN-008_same_instructions_separate_identity_inputs.txt): two one-account contexts, spaced 0042/0088 -> respective trimmed results; no cached value/application proof. Maximum 39 columns.
- [Published, collected, previewed and applied](../../assets/TRN-008_published_collected_previewed_and_applied.txt): supplied 09:00 to 09:10 observations, unknown current state at 09:06, no fixed delay/backend job pipeline. Maximum 41 columns.
- Editable sources exactly match inline blocks and prose. Historical [same definition/different contexts](../../assets/TRN-008_same_definition_different_contexts.txt) and [data/Preview/application evidence](../../assets/TRN-008_data_preview_and_application_evidence.txt) remain unchanged.
- Three complete JSON blocks are parsed/shape checked: identity-mapped explicit trim, proposed create-field identityAttribute and independent dateCompare now/gte/reviewAt strings. Local string/instant checks illustrate examples, not ISC evaluation, race reproduction, provisioning, sync eligibility or clock injection.
- Source synchronization is distinct from full graphical publication review.

## Executed verification

- Reviewed all 63 preserved coverage purposes, eight prompts with separate worked reasoning, and the circular login/email transfer. Context, data availability, documented peer-read restriction, creation/update boundaries and timing evidence retain their original conditions.
- Three saved JSON blocks parse locally. Identity-mapped trim explicitly reads HR-Primary costCenter with true return-first flag. Proposed create-field identityAttribute reads the named identity field without a collection/apply instruction. Independent dateCompare has now/gte, explicit HR reviewAt/true flag and exact review strings.
- Illustrative ordinary-string checks confirm separate 0042/0088 contexts, old available 0042, updated 0090 and a repeated evaluation returning the same 0090, all preserving zeros. Fixed ISO-instant comparisons at 16:59/17:01 against 17:00 produce Before review point/Review point reached.
- Local JSON/value/time checks do not execute ISC, reproduce a concurrency race, read a tenant, inject its clock, provision accounts or validate sync eligibility. Historical 08:50 evidence is explicitly not claimed current at 09:06; earlier event-based application remains possible.
- Both current diagrams exactly match inline blocks, maximum widths 39 and 41 columns. Historical sources remain unchanged.
- Local Markdown checks found 1,143 targets and zero missing targets. Learner text contains no source/course links, biography/fictional company, employee/object IDs or em dashes.
- All four existing navigation/disclosure tests passed. They verify site behavior, not ISC context/calculation/runtime or comprehension. Tracked whitespace and all three new-file checks produced no diagnostics; new-file comparison exit 1 signifies a present difference.
- Inventory increased from 485 to 488 files: four existing files changed, three added, 481 unchanged and none removed. All 91 learner files remain; TRN-008 is the only changed learner.
- Reference content outside the owned TRN-008 section retains baseline lengths and hashes. Other learners, historical pilots/original diagrams, specification, tracing guide, README, publication records, manifest, templates, styles and navigation code remain unchanged.
- HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging remains empty. No commit, push or deployment occurred.
- Final save-time checks after this record confirm saved learner/diagram/record text, unchanged reference boundaries, intended file scope, whitespace, HEAD and empty staging.

## Limits

No actual tenant/API/source/profile/account relationship/custom field/mapping/transform/aggregation/Preview/processing/schedule/nextProcessing/create-profile/access/sync/provisioning or target operation is executed or changed. No input bootstrap, fallback, circular definition or rollout implemented in a tenant. No observed learner validation. Existing navigation tests are not context/race/runtime or comprehension tests. No commit, push or deployment occurs.
