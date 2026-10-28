# PRC-002 concept-led revision record

Revision 2.0. Module 9.2. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [What change actually starts identity processing?](../../lessons/PRC-002_Event_Based_Identity_Processing_and_Its_Triggers.md).

## Scope and review status

One existing learner revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference content and original diagrams remain. Other learners/pilots, specification, both reference guides, README, publication records and site manifest/templates/styles/navigation/code remain outside scope.

Documentation-based author content, first-use, causal-flow, source and narration review complete. Observed beginner teach-back/unfamiliar-case validation, full graphical publication review and formal approval pending. Existing PRC-003 is next in Module 9.3; its learner body was not opened. New authoring remains paused at ROL-007. No commit, push or deployment.

## Changes and teaching decisions

The opening asks what actually changed before naming an event. Identity/account/attribute, source/profile/authority, direct mapping and correlation establish the required records. The normal aggregation-to-identity-to-role-to-delivery mechanism and complete supplied evidence trace precede provisioning initiation, unchanged outcomes, collection modes, narrower actions, clock/configuration and workflow variations.

The fictional employee/number/account/identity labels and company/application brands are removed. HR-Primary and Directory-Primary identify the necessary input/target boundaries. The original six UTC observations and explicit supplied initiating identity modification remain; no hidden trace record, separate background-job sequence or real runtime is invented.

The two diagrams have different purposes: evidence progression and the documented aggregation/provisioning initiation condition. Two comparison tables support the actual distinctions; their number does not establish a course template. Eight question prompts precede separate worked reasoning, and the workPhone transfer preserves approved alternate update designs.

Existing [processing comparison guide](../../assets/PROCESSING_COMPARISON_GUIDE.txt) and [attribute tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remain local revision 2.0, unchanged in this task. Their historical published versions remain 1.0. No new learner links or interaction code added.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| External change versus initiation | Opening/input section | HR save, collected data and relevant identity modification are separate observations. |
| Identity/account/attribute | Opening context | Person record, particular-system account and named location field introduced before use. |
| Independent neutral context | Context | Valid existing identity, one correctly associated HR account; no creation or ownership correction. |
| Source/authority/profile | Context | HR-Primary worker-account origin and Employees shared configuration. |
| Direct location mapping | Context | Associated HR location, no calculation/translation/substitute. |
| Correlation meaning | Context | Matching and association, not automatic field copying. |
| Account versus identity location | Context | Separate records linked by mapping instructions. |
| Collected versus live HR | Input section | Austin available despite producer Dallas, no new input inferred from HR edit. |
| Aggregation/connector meaning | Input section | Supported integration reads external account data. |
| Direct/file path | Input section | Actual returned data/imported file and scope, stale file cannot supply new value. |
| Documented event condition | Input section | Aggregation or provisioning modifies an identity; not every external save. |
| Why reevaluate | Input/mechanism | Other applicable identity information and access requirements need evaluation after modification. |
| Platform behavior | Input/workflow sections | No required custom workflow, subscription or webhook for this path. |
| Per-record run evidence | Input section | Source/account/field/relevant identity change, not summary alone. |
| Processing meaning | Mechanism | Evaluation of data and applicable requirements against configuration. |
| Manager/lifecycle support | Mechanism | Manager reference resolution and business-stage access explained; unchanged here. |
| Role/profile/entitlement | Mechanism | Business assignment, source-specific bundle, represented group permission. |
| Enabled configured model | Mechanism | Enabled Dallas role and Dallas Tools profile, location equals Dallas. |
| Location condition reasoning | Mechanism | Austin fails, Dallas matches, role requires access. |
| Existing directory account | Mechanism | Correctly associated Directory-Primary account, DL-TOOLS initially absent. |
| Provisioning meaning | Input/mechanism | Required account/access changes introduced before event condition; supported automatic/manual delivery developed for group. |
| Capabilities and permission | Mechanism | Group add supported/provisioning enabled, execution permission/result still required. |
| Ordinary standing access | Mechanism | No separate activation step. |
| Main exclusions | Mechanism | No account creation, Austin assignment removal, manager/stage change or location-field sync. |
| Requirement versus target | Mechanism | Current identity/role and external membership are distinct evidence. |
| Processing completion limit | Mechanism | Initiation of provisioning does not validate successful delivery. |
| Six original observations | Evidence table | Oct23 UTC11:00/03/05/06/07/12 producer/old input/initiation/current requirement/pending/verified membership. |
| Time boundaries | Evidence section | Supplied observations not measurements, expected durations or delivery SLA. |
| Supplied identity modification | Evidence/diagram | Explicit hypothetical fact, not inferred hidden screen or universal separate job. |
| Old input does not prove failure | Evidence discussion | At11:03 account Austin identifies availability issue; processing failure not established. |
| Pending not completed/failed | Evidence discussion | At11:07 no confirmed delivery; inspect stage/result/error, do not replace correct mapping. |
| Verified membership scope | Evidence discussion | At11:12 intended account requirement verified, not every field/application. |
| Automatic versus success | Evidence discussion | Initiation method does not establish prerequisites or delivery. |
| Provisioning second path | Provisioning section | Identity modification during provisioning included; no HR collection required in supplied case. |
| Submitted/accepted/successful distinction | Provisioning section | Attempt/connector acceptance/target success alone do not identify identity modification. |
| Authority remains explicit | Provisioning section | Directory write does not replace Employees HR location input. |
| No private topology | Diagrams/prose | No event bus, per-change job count, fixed order or required subscription invented. |
| Cost-centre changed-input variation | Variation | Mapped text0088 ->0090, identity modification/current0090 verified, leading zeros retained. |
| Unchanged access can be correct | Variation | Dallas condition unchanged and group present, no duplicate add needed as proof. |
| Unchanged display not execution history | Variation | Same result after evaluation and missing evaluation remain possible without evidence. |
| Optimized aggregation | Run section | Retrieved existing unchanged account can be skipped, no fresh per-record modification proved. |
| Unoptimized aggregation | Run section | Reexamines unchanged records including correlation, not guarantee every field/access changes. |
| No global skip conclusion | Run section | One skip does not exclude processing through another reason/path. |
| Narrow UI account reload | Action section | Account/status only, no identity-attribute synchronization/provisioning effect; not all aggregation paths equated. |
| Entitlement aggregation | Action section | Collecting group object not membership or location-based identity change. |
| Failed request boundary | Action section | Failure before relevant identity modification does not establish initiating condition. |
| Configuration versus data | Other reasons | Saved role/mapping requires supported application/scope/current verification even with unchanged data. |
| Transform and clock dependency | Other reasons | Calculation/current-date/start-date result can change without new stored-data edit. |
| Scheduled/time-based distinction | Other reasons | Design/execution must address clock dependency; no automatic midnight guarantee. |
| No fabricated event tactic | Other reasons | Use supported path, not temporary worker-field/access edits with real consequences. |
| Workflow meaning/trigger | Workflow section | Configured automation, Identity Attributes Changed matching/filter scope explained. |
| Workflow versus platform | Workflow section | No main workflow, absence does not disable platform path; notification not processing/delivery proof. |
| Notification evidence | Workflow/Q7 | Message lacks group result; inspect operation and target membership. |
| Object/configuration investigation | Investigation | Identify identity/source/account/profile/mapping/input, then actual operation/processing/delivery. |
| Available evidence limitations | Investigation | No universal unique-stage trace, missing evidence is not proven failure or success. |
| Preview boundary | Investigation | Selected mapping evaluation not application, original event or delivered access. |
| Modified timestamp boundary | Investigation | Generic record date not every field cause/decision/delivery. |
| Visibility/time | Investigation | Search/current/target observations differ; compare time/platform visibility rather than assume identical state. |
| Eight assessment purposes | Questions/reasoning | Original cases retained, prompts separated from worked answers and causal evidence. |
| Phone transfer | Transfer | Proven collected/identity modification/current workPhone versus old target, do not manufacture HR edit. |
| Ongoing update design/delivery | Transfer | Missing mechanism versus existing-but-unsuccessful path; inspect eligibility/attempt/result, alternatives accepted. |
| Sync supporting meaning | Transfer | Selected identity-to-account field alignment through provisioning, supported eligible existing correlated accounts. |
| Hypothetical limits | Context/evidence | No tenant execution, hidden runtime claim, exact timing/job recipe or broad mover-completion guarantee. |

## Official verification and claim mapping

Fresh official claim-bearing bodies reviewed October 27, 2026. Current cloud references govern ISC claims, including Human Fabric/Identity Services naming where present. No IdentityIQ behavior imported.

| Official source | Verified behavior | Application and limits |
|---|---|---|
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity modification in aggregation/provisioning initiates evaluation; mappings, manager/lifecycle/roles and delivery limit; separate configuration/time/manual reasons | Main normal mechanism, two initiation branches and clock/configuration variations. No mandatory job order/count, timing SLA or omitted eligibility recipe. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Configured collection/file input, optimized/unoptimized account handling and exact UI Aggregate Account boundary; Search visibility | Producer/collected distinction, unchanged/skipped records and narrow reload. Not all single-account APIs treated like UI action; skip does not exclude other processing. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Shared mapped identity fields, selected Preview and separate saved-configuration application | Employees direct location/costCenter, sample/current/population separation. No transform/identity-creation correction performed. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External account/access changes, direct/manual paths and configuration | Provisioning can be outcome and identity-modifying initiator. Request/acceptance/target result does not by itself establish an identity modification. |
| [Automating role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html) | Enabled automatic attribute conditions and bundled entitlement delivery | Dallas role depends on location, unchanged location can leave correct membership unchanged; no removal or retry policy generalized. |
| [Managing access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Source-specific bundles and standing versus activation-dependent delivery | Enabled Dallas Tools contains ordinary DL-TOOLS membership; activation excluded explicitly. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Individual operations, stages/status/results/errors and task/account context | Pending versus verified group result; no fixed pending delay or every-stage trace asserted. |
| [Workflow triggers](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) | Identity Attributes Changed configurable trigger with basic attribute or advanced filtering | Workflow automation versus platform processing and notification boundary. Main example has no workflow; none created. |
| [Synchronizing attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured identity-to-account field alignment through provisioning and eligible existing correlated accounts | Phone-transfer support only; current workPhone alone proves neither sync configuration nor delivery. |
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Access-object collection rather than membership changes | Entitlement aggregation is not granting DL-TOOLS or proof of location change. |

The processing body's explicit initiating condition and evaluation/delivery limit, account-loading optimization and single-account subsection, selected Preview/application, enabled role/profile model, operation stages/errors, workflow Identity Attributes Changed body and sync eligibility support were read. Source availability alone is not treated as verification of behavior. No tenant execution or actual notification/connector timing observed.

## Assessment mapping

| Purpose | Supplied facts | Expected reasoning / acceptable alternatives | Misconception exposed | Official mapping |
|---|---|---|---|---|
| 1. Producer/input | HR Dallas, collected associated HR Austin | New collected input and relevant modification not established; investigate correct record/field, not declare processing failure. | External save equals qualifying event. | Processing; Loading; Profiles |
| 2. Skipped unchanged record | Successful optimized run skips unchanged HR account; no other evidence | No fresh event-based evaluation proved; another processing reason also not excluded. | Run success means one event for every identity or skip means no possible processing. | Processing; Loading |
| 3. Changed data/same access | Supplied costCenter modification/current0090, Dallas/role unchanged, group already present | No duplicate add required just to demonstrate processing; appropriate unchanged access is acceptable. | Every handled event requires a new access write. | Processing; Profiles; Roles; Access profiles |
| 4. Provisioning initiation | Approved provisioning confirmed to modify identity; no HR collection | Documented second path applies under supplied condition; does not imply every attempted/failed write or changed authority. | Aggregation is the only initiator or every request qualifies. | Processing; Provisioning |
| 5. Narrow reload | UI Aggregate Account loaded Dallas, completion only | No identity synchronization/provisioning from action itself; check actual current identity and appropriate supported path, then target. | All aggregation-named actions have identical downstream scope. | Loading; Processing |
| 6. Saved configuration | Edited/saved role; unchanged account data; no application result | Review scope/apply through supported processing, verify assignment and delivery; reject dummy data/access changes. | Saving definition applies every identity instantly. | Processing; Profiles; Roles |
| 7. Workflow notification | Configured Identity Attributes Changed location message, no group result | Notification is separate automation observation; group operation and fresh membership evidence required. | Message proves finished access or custom workflow is prerequisite to platform processing. | Workflow triggers; Monitoring; Provisioning |
| 8. Clock boundary | Unchanged start date, date-dependent result changes after midnight, no supplied identity modification | Does not establish event-based condition; scheduled/time-based design and actual execution needed, no midnight SLA. | Clock crossing is itself a source/provisioning modification. | Processing; Profiles |
| Transfer: phone | Collected correct associated HR phone; identity modification and processed currentworkPhone supplied; old external number | Inspect approved ongoing mechanism, missing design versus delivery fault, eligibility/attempt/result/target. Sync or justified alternative accepted; no producer edit or assumed cause. | Old target phone proves event failed despite verified identity result. | Processing; Loading; Profiles; Provisioning; Monitoring; Attribute sync |

All eight original question purposes and the phone transfer remain. Author metadata belongs here, not as repeated labels in learner answers. Missing evidence is an acceptable conclusion when the supplied facts do not establish the condition.

## Diagrams and consistency

- [Location-change initiation and delivery evidence](../../assets/PRC-002_location_change_initiation_and_delivery_evidence.txt): maximum 36 columns, supplied data/requirement/delivery observations, not required separate jobs.
- [Identity modification from aggregation or provisioning](../../assets/PRC-002_identity_modification_from_aggregation_or_provisioning.txt): maximum 34 columns, shared documented initiating condition, not every attempted read/write.
- New editable sources exactly match learner blocks and surrounding values. Historical [initiation paths](../../assets/PRC-002_documented_event_based_initiation_paths.txt) and [location-change evidence](../../assets/PRC-002_location_change_evidence_progression.txt) remain unchanged.
- Main values Austin/Dallas and DL-TOOLS, six October23 UTC observations and separate mapped text costCenter0088/0090 align across learner, diagrams and author records.
- No JSON configuration or simulated engine implementation is needed for this conceptual lesson. Local saved-text checks do not execute ISC.
- Source synchronization remains separate from full graphical publication review.

## Executed verification

- Compared all 63 preserved-purpose entries, eight original checkpoint purposes and the phone transfer with the baseline; reviewed first-use meanings, the complete normal mechanism, changed conditions and the limits of each evidence claim.
- New editable diagrams exactly match both learner blocks at maximum widths of 36 and 34 columns. The historical two diagrams and both existing revision 2.0 reference guides retain their baseline hashes.
- Verified Austin/Dallas, DL-TOOLS, the six October23 UTC observations and the separate text costCenter0088/0090 variation across learner, diagrams and author metadata. Initiating modification remains a supplied hypothetical fact, not a fabricated diagnostic trace.
- Checked 1,163 local Markdown/HTML targets across nine learner/review documents: zero missing. No external source/course links, fictional biography or revision commentary were added to the learner body.
- All four existing navigation/disclosure tests passed, zero failures. These checks do not execute ISC or test comprehension.
- Tracked and three new-file whitespace checks passed. Saved learner, diagrams, author record, owned reference/register sections and example row matched intended text; register progress/next-target rows and revision-record link were verified.
- Inventory increased from 494 to 497 files: four existing files changed, three added, 490 unchanged and zero removed. All 91 learner routes remain present.
- Reference content outside the owned PRC-002 section retains its original prefix/tail hashes. Original diagrams, guides, other learners and all other out-of-scope files retain baseline hashes. HEAD is unchanged; staging index remains empty.
- Final record-save, whitespace and scope/state checks are repeated after saving this verification record. No actual tenant/runtime/engine/workflow operation, observed beginner validation, full graphical publication review, commit, push or deployment is claimed.

## Historical reservation clarification

The original reference retains PRC-003's then-current authoring reservation and the guides' then-current revision 1.0. PRC-003 now exists among 91 learner routes and is the next individual revision target. Both guides are now local revision 2.0 and stay unchanged during this task.

## Limits

No actual tenant/API/source/account/profile/mapping/correlation/aggregation/Preview/processing/provisioning/workflow/sync or target operation performed. No artificial worker-data/access event, notification, permission change, retry or recovery executed. Supplied observations are hypothetical, not measurements or claims of an exposed intermediate trace.

Author review and existing navigation checks do not establish beginner understanding or runtime behavior. No commit, push or deployment.
