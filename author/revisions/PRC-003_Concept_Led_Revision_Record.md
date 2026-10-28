# PRC-003 concept-led revision record

Revision 2.0. Module 9.3. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [The date arrived. When will ISC process the identity?](../../lessons/PRC-003_Scheduled_and_Time_Based_Identity_Processing.md).

## Scope and review status

One existing learner revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. Historical reference content and original diagrams remain. Other learners/pilots, specification, both reference guides, README, publication records and site manifest/templates/styles/navigation/code stay outside scope.

Documentation-based author content, first-use, source, causal-flow and narration review complete. Observed beginner teach-back/unfamiliar-case validation, full graphical publication review and formal approval pending. Existing PRC-004 is next in Module 9.4; its learner body was not opened. ROL-007 remains paused new authoring. No commit, push or deployment.

## Changes and teaching decisions

The lesson opens with the stale stored label and establishes the business rule before the processing plan. Identity/account/field/source/profile/mapping and transform meanings precede their use. The recurring design is explained through selection, periodic meaning and a complete applied outcome before the separate per-identity alternative.

The fictional person/employee/account/identity labels and source brand are removed. HR-Primary identifies the one necessary associated account input. Exact review date and UTC observations remain because they determine comparison, eligibility, lead and evidence. The label is informational, with no account, access, employment or notification action.

The two histories remain separate: recurring initial13:00,Preview/current16:01,queue20:00/start20:04/current20:06; alternative appliednextProcessing16:00 after13:30update/current16:02. Too-close15:30 and earlierHR09:00 preserve update-time reasoning. No hypothetical observation is presented as measured runtime.

A conditional earlier16:00 evaluation of postponed18:00 input returnsBefore correctly; this does not assert a stale job must run or promise an automatic cancellation/reschedule behavior. Future milestones/clearing need actual configuration and current data.

Two diagrams explain value versus application and recurring versus additional per-identity responsibilities. Tables support population and recurring evidence, without a fixed lesson quota. Eight prompts precede separate answers. The local09:00 transfer accepts a justified supported alternative design and separates optional email delivery.

Existing [processing comparison guide](../../assets/PROCESSING_COMPARISON_GUIDE.txt) and [attribute tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remain local revision 2.0/published1.0, unchanged this task. No learner source/course links or interaction code added.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| Stored label versus moving clock | Opening | An earlier answer is not a continuously running calculation or automatic rewrite. |
| Independent neutral records | Context | Existing valid identity/one correctly associated HR-Primary account, no employee biography or IDs. |
| Identity/account/attribute/source | Context | Person record, particular-system account, named field and configured data representation. |
| Profile and mapping | Context | Employees shared configuration and instructions for identity fields. |
| Collected input | Context | reviewAt already available, not a live HR lookup or new-identity problem. |
| Exact review moment | Context | 2026-10-23T16:00:00.000Z, UTC/Z and exact instant versus date-only. |
| Transform meaning | Context | Calculation prepares custom assignmentReviewStatus value. |
| Approved comparison | Context | Before returns Before review; equality/after Review due. |
| Before/at/after evaluations | Context | 15:59 before,16:00 equality,16:01 after, same unchanged reviewAt. |
| Directed dateCompare | Context | Evaluation now on left, reviewAt right, greater-or-equal includes equality. |
| Now meaning | Context | Moment expression evaluates, not continuously changing stored field. |
| Review-only scope | Context/cutoff | No employment, disable, removal, email or notification action. |
| Rule/evaluation/application boundary | First diagram/normal mechanism | Correct answer, execution and current applied label separate. |
| Initial application | Normal mechanism | Current Before at13:00 correctly established by initial configuration application, not morning job. |
| Identity processing meaning | Normal mechanism | Available data/configuration reevaluate information and applicable requirements. |
| Aggregation versus time dependency | Normal mechanism | Collection does not require a new reviewAt edit to address moving evaluation time. |
| Scheduled meaning | Normal mechanism | Recurring processing for eligible identities. |
| Time-based meaning | Normal mechanism/alternative | Configured next time for an individual identity, distinct from recurrence. |
| Tenant schedule zone | Recurring section | Organization environment/configured schedule clock, not admin browser time. |
| Documented recurring times | Recurring section | 08:00 and20:00 in tenant configured zone. |
| Queued/start/completion | Recurring section/trace | Jobs queued at scheduled time; other work can delay start, due is not finished. |
| Identity-state meaning | Recurring section | Feature/processing participation, different from custom label. |
| Lifecycle-state meaning | Recurring section | Business stage can drive access and assign identity state; neither state changed here. |
| Role/sync supporting meanings | Recurring section | Configured access responsibility versus selected identity/account field alignment. |
| Morning population | Selection table | Active/Inactive(short-term) with account on sync-configured source. |
| Evening with roles | Selection table | Active/Inactive(short-term) when roles implemented in tenant. |
| Evening without roles | Selection table | Active/Inactive(short-term) whose profile has periodic-refresh attribute. |
| Tenant roles versus membership | Recurring section | Person need not belong to particular role for roles-present population rule. |
| Long-term boundary | Recurring section | Do not extend table to Inactive(long-term) or invent universal eligibility for other paths. |
| Main eligibility assumptions | Recurring section | Explicit UTC,Active,no roles,no sync-account,periodic true,no nextProcessing. |
| Main selection reasoning | Recurring section | Morning condition absent, evening no-role profile condition present. |
| Periodic flag meaning | Periodic section | requiresPeriodicRefresh boolean true marks periodic reevaluation need. |
| Flag not personal timer | Periodic section | No every-minute or per-reviewAt scheduling, no state override. |
| Current versus Preview | Normal trace | 16:01 selected Due and separately current Before, stronger than historical screenshot. |
| Preview meaning | Normal trace | Selected mapping evaluation not application or whole-population result. |
| Complete recurring outcome | Normal trace | 20:00 queue/20:04 start/20:06 relevant processing/currentDue, no latency SLA. |
| Business timing fit | Normal trace | Evening label can fit accepted delay; not a16:00 plan or comparator repair. |
| Unchanged result can be correct | Normal trace/investigation | Selection/evaluation do not require every field/access to change. |
| Record real periodic dependency | Normal trace | Roles eligibility today not reason to omit documented time need after config changes. |
| Schedule default versus actual | Clock section | CST/CDT documented default; example explicitUTC, check actual rather than admin/default assumption. |
| Offset equivalence | Clock section | 11:00-05:00 same instant16:00Z, not extra five-hour delay. |
| Date-only contract | Clock section | Need approved time/zone, silently adding midnight changes requirement. |
| Named-zone rules | Clock section | Date-specific DST rules not permanent fixed offset for future events. |
| Normalize/preserve observations | Clock section | Common time reference plus retained original timestamps/zones. |
| Alternative histories | Alternative section | Additional design is separate from recurring-only observed run. |
| Next Processing Date meaning | Alternative section | nextProcessing identity attribute configured per profile. |
| Business versus processing date | Alternative section | reviewAt boundary and nextProcessing planned evaluation can coincide but differ in responsibility. |
| Independent account inputs | Alternative section | Available approved timestamp/conversion; review calculation independently reads accountreviewAt. |
| No peer-field ordering assumption | Alternative section | Concurrent identity calculations, mapping display order not current-data readiness. |
| Future and ISO requirements | Alternative section | Future ISO8601 date/time, sample fullUTC representation not all syntax guarantee. |
| At-least-one-hour lead | Alternative section | Measured from nextProcessing identity attribute update in ISC. |
| Valid lead example | Alternative section | Applied16:00 after13:30update =2h30. |
| Too-close example | Alternative section | 15:30update for16:00 =30min, correct format insufficient. |
| HR approval boundary | Alternative section | 09:00HR approval not replacement for15:30ISC update. |
| Unsupported rescue assumption | Alternative section | Past/current/too-soon value not supported exact-time recovery; authorized path/result required. |
| Applied nextProcessing | Alternative section | Saved mapping/selectedPreview not current applied identity evidence. |
| Complete per-identity result | Alternative section | Applied16:00/13:30update and relevant processing/currentDue16:02 supplied, not two-minute guarantee. |
| Additional versus replacement | Alternative section/diagram | Per-identity time coexists with scheduled jobs; no same-private-queue inference. |
| One next time versus recurrence | Milestones | Single timestamp not daily schedule/list of every future milestone. |
| Future milestone planning | Milestones | Select relevant start/review/end future point, review later value and lead. |
| No automatic reset/clearing claim | Milestones | Do not invent advancing timestamp or universal past-value clearing/retention. |
| Postponed boundary variation | Milestones | Corrected18:00 input at conditional16:00 evaluation returnsBefore, need revised applied plan. |
| Cancellation/extension/correction | Milestones | Review approved input/plan, do not infer all previously planned work changed/completed. |
| Provisioning and cutoff | Cutoff section | Supported auto/manual account/access delivery; configured actions/capability/authorization/result. |
| Processing delivery limit | Cutoff section | Identity completion does not validate target provisioning. |
| Explicit target requirement | Cutoff section | Specify disable/removal/application effect, approved timing/margin and target evidence. |
| Human/error variation | Cutoff section | Disconnected tasks and failed writes separate from current stage/effective access. |
| No exact-second security promise | Cutoff section | now/date/nextProcessing not proof access disappeared at instant. |
| Cause-based investigation | Investigation | Approved boundary/equality/input/profile, path eligibility/current values/actual execution before consumers. |
| Old input despite timely run | Investigation | Old end date can produce business-wrong result without scheduler defect. |
| Evidence and preservation | Investigation | Current versus proposed, Search/email/field/access separate; preserve original incident observations. |
| No manufactured recovery event | Investigation | No dummy worker edit or past nextProcessing; supported recovery/actual outcome. |
| Eight question purposes | Questions/reasoning | All original purposes retained, prompts before separate causal worked answers. |
| Local09:00 transfer | Transfer | Date-only plus periodic flag insufficient; per-person local instant/zone and accepted timing design. |
| Transfer plan/application/next milestones | Transfer | Valid per-identity lead/current application and revised future plan or approved supported alternative. |
| Transfer calculation test and notification | Transfer | Before/at/after expectations,current label after processing, email needs mechanism/result. |
| Hypothetical/implementation limits | Whole lesson | No tenant measurements/private topology/exact deadlines or unsupported dateparser behavior. |

## Official verification and claim mapping

Fresh official claim-bearing bodies reviewed October 27, 2026. Current cloud references govern ISC behavior; Human Fabric/Identity Services naming appears in places. No IdentityIQ behavior imported.

| Official source | Verified behavior | Application and limits |
|---|---|---|
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Recurring08:00/20:00 tenant-zone selection, defaultCST/CDT/queued start; per-profile futureISO nextProcessing and hour lead; additional processing; application/delivery limit | Two separate timing designs and evidence. No universal eligibility, exact finish promise or private per-identity queue inferred. |
| [Date Compare](https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-compare/) | now at evaluation, ISO date comparison, directed greater-or-equal, periodic-refresh boolean | Before/at/after review rule; periodic true is not a personal deadline timer. No JSON placement recipe/runtime asserted. |
| [Account Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Associated source-account field input | One correctly associated HR account supplies reviewAt, not live producer/peer-identity data. |
| [Identity Attribute](https://developer.sailpoint.com/docs/extensibility/transforms/operations/identity-attribute/) | Peer identity-field calculation concurrency/current-data limitation | Independent available inputs; UI list order does not guarantee new peer data. No unsafe dependency prescribed. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Shared mappings, selected Preview and separate application | Current versus proposed review/nextProcessing, initial application and profile-wide scope. |
| [Setting up lifecycle states](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html) | Lifecycle business actions and identity-state participation distinctions | Active/short-term/long-term supporting explanation and separate target-cutoff case; not universal time-based selection rule. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Configured account/access provisioning through direct/manual paths, roles and field sync | First-use supporting terms and target-outcome boundary; review-only label has no actions. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Specific-operation stage/results/errors and manual tasks | Failed target disable/actual state separate from identity completion; no actual error text claimed. |
| [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) | UTC Z, offset correspondence and date-time representations, local-time limitations | 11:00-05:00/16:00Z and date-only contract. Not proof every RFC3339 syntax accepted by every transform. |
| [IANA time-zone database theory](https://data.iana.org/time-zones/tzdb/theory.html) | Named civil-zone rulesets and changing DST/offset rules across dates | Per-location09:00 transfer uses rules applicable to relevant date, not fixed offset carried indefinitely. No named-zone library execution claimed. |

Processing's recurring populations/queue caveat and nextProcessing future-format/hour/update/additional-path conditions were read in full. DateCompare now/inclusive direction/periodic boolean, account-associated input, peer-field concurrency warning, selected Preview/application, lifecycle identity states and specific target-operation evidence were read. RFC offset arithmetic and IANA rule-set material support timezone reasoning, not an ISC parser test.

## Assessment mapping

| Purpose | Supplied facts | Expected reasoning / acceptable alternatives | Misconception exposed | Official mapping |
|---|---|---|---|---|
| 1. Rule versus recurring timing | UTC,Active,no roles/no sync-account,periodic profile;16:01PreviewDue/currentBefore | Evening20:00 selected; comparison not proved wrong. Check actual execution and business accepted delay. | Correct logic continuously rewrites label or scheduled job already ran at reviewAt. | Processing; DateCompare; Profiles; Lifecycle |
| 2. No-role eligibility | No roles;Active;profile no periodic field | Evening population inclusion not established. Identify timing need/appropriate supported configuration. | Every Active identity included regardless of profile condition. | Processing; DateCompare; Lifecycle |
| 3. Format versus lead | First ISC nextProcessing update15:30 with validISO16:00 | 30min < requiredhour. Supported future/recovery plan needed; formatting not override. | Well-formed date makes schedule valid. | Processing; RFC3339 |
| 4. Producer versus identity update | HR09:00approval;ISC15:30update for16:00 | Lead from identity nextProcessing update; trace collection/mapping/application delay. | HR approval time establishes ISC readiness. | Processing; Profiles |
| 5. Offset equivalence | Same-date16:00Z and11:00-05:00 | Same instant; normalize, do not freeze offset for all named-zone dates. | Display difference is processing delay. | RFC3339; IANA; DateCompare |
| 6. Queue/start/application | Eligible job20:00queued,20:04start,20:06currentDue | Consistent with later correct evaluation, not proven arithmetic failure; timing acceptability separately reviewed. | Due timestamp means complete. | Processing; DateCompare |
| 7. Postponement | CorrectedreviewAt18:00 collected; observed16:00run returnsBefore | Correct result, not skipped calculation; verify revised applied plan for later evaluation. | Old schedule changes business boundary or unchanged label proves skipped work. | DateCompare; Processing; Profiles |
| 8. Separate cutoff | Current lifecycle afterprocessing;required targetdisable error | Resolve authorized delivery and verify target; do not close from identity stage/date alone. | Processing success proves account disabled. | Processing; Lifecycle; Provisioning; Monitoring |
| Transfer: local09:00 | Date-only input/periodicflag proposal,per-person local09:00,optionalemail | Approve zones/instants and delay/design; valid appliednextProcessing withlead/revisedmilestones or justified supportedalternative; testbefore/at/after/current and notification evidence. | Tenant recurrence supplies every person local timer or label equals sentemail. | Processing; DateCompare; Profiles; RFC3339; IANA; Provisioning; Monitoring |

All eight original question purposes and the per-location reminder transfer remain. Missing execution/application/target evidence is a valid answer where not supplied. Author assessment metadata stays here.

## Diagrams and illustrative arithmetic

- [Business boundary, evaluation and applied label](../../assets/PRC-003_business_boundary_evaluation_and_applied_label.txt): maximum 37 columns; unchanged source date, inclusive rule and need for execution/application.
- [Recurring selection and additional identity time](../../assets/PRC-003_recurring_selection_and_additional_identity_time.txt): maximum 40 columns; recurring documented queue versus additional per-identity requirement/result, no assumed private queue equality.
- New editable sources exactly match learner blocks. Historical [clock rule](../../assets/PRC-003_clock_rule_and_applied_value.txt) and [recurring/time-based paths](../../assets/PRC-003_recurring_and_time_based_processing_paths.txt) remain unchanged.
- Save-time checks compare UTC equivalence, lead durations, before/at/after inclusive outcomes and postponed-boundary reasoning. These are ordinary date arithmetic, not ISC scheduler/engine execution.
- No JSON definition or simulated platform implementation needed. Source synchronization does not establish full graphical publication review.

## Executed verification

- Compared all 77 preserved-purpose entries, eight original checkpoint purposes and the local09:00 reminder transfer with the baseline. Reviewed first-use terms, complete recurring outcome before the separate alternative, conditional postponement and evidence boundaries.
- Both new editable diagrams exactly match learner blocks, maximum widths37/40. Original diagram sources and both existing local revision2.0 reference guides retain their baseline hashes.
- Illustrative arithmetic verified before/at/after labels, 150-minute versus30-minute lead, exact60-minute boundary, equivalent11:00-05:00/16:00Z instants and Before at16:00 against postponed18:00. These are ordinary date comparisons, not ISC execution or scheduler tests.
- Checked 1,168 local Markdown/HTML targets across nine learner/review documents: zero missing. No learner source/course links, fictional biography or teaching-method announcement remains in the revised prose.
- All four existing navigation/disclosure tests passed, zero failures. Existing site checks do not establish comprehension or platform runtime behavior.
- Tracked and three new-file whitespace checks passed. Saved learner, two diagram sources, revision record, owned reference/register sections and example row matched intended text. Register progress/next-target and record-link checks passed.
- Inventory increased from497 to500files: four existing files changed, three added,493unchanged, zero removed. All91learner routes remain present.
- Reference content outside owned PRC-003 retains original prefix/tail hashes. Other learners, original diagrams, guides and all out-of-scope files retain baseline hashes. HEAD unchanged; staging index empty.
- Final record-save, whitespace and scope/state checks are repeated after this record is saved. No tenant/engine/scheduler/target operation, observed beginner validation, full graphical publication review, commit, push or deployment claimed.

## Historical reservation clarification

Original revision1.0 notes retain PRC-004's then-current authoring reservation and guides' then-current1.0 versions. PRC-004 exists among91learner routes and is the next individual revision target. Both guides now local2.0 and stay unchanged here.

## Limits

No actual tenant/API/source/account/profile/mapping/transform/aggregation/Preview/processing/provisioning/notification/scheduler or target operation performed. No state, periodic flag, time-zone setting, nextProcessing, cutoff, recurrence, permission or recovery action changed.

Author review and navigation checks do not establish beginner understanding or actual runtime/delivery. No commit, push or deployment.
