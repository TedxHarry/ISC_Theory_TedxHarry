# AGG-006 beginner explanation revision record

Revision 3.0. Module 5.6. Teaching specification 3.2. October 29, 2026.

[Current learner](../../lessons/AGG-006_Schedules_Scope_Dependencies_and_Data_Freshness.md).
[Historical revision 2.0 record](AGG-006_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).
[Published beginner batch 2](../PUBLICATION_2026-10-28_BEGINNER_BATCH_2.md).

## Scope and baseline

This is the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. AGG-006 is thirty-fifth of 91 existing lessons; 56 remain. All six Module 1, seven Module 2, eight Module 3 and eight Module 4 lessons remain individually revised; the first six Module 5 lessons are now revised. AGG-007 is next and is not revised here.

The first 28 through SRC-007 are published at 3.0. SRC-008 and AGG-001 through AGG-006 3.0 remain local. All 91 existing learners remain available. ROL-007 remains reserved without a stub; 116 core and six optional foundation lessons await new authoring.

A fresh local git-object comparison confirmed that published main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 contains the same normalized revision 2.0 learner as the starting local file; its author record declares 2.0. Older local-only/published-1.0 statements describe authoring history. No live verification or publication is claimed.

The permanent title, ID, route, manifest, course order, shared UI and specification remain unchanged. Four historical AGG-006 assets and its revision 2.0 author record remain preserved. All earlier learner and diagram files remain unchanged. Coverage-table checks caught missing column separators in the local AGG-003, AGG-004 and AGG-005 beginner author records; those three tables are repaired without changing their purpose, location or evidence wording. This formatting repair is additional author-record work, not a new learner revision or publication.

No staging, commit, push, deployment, tenant/source/schedule/time-zone/runtime/migration/permission/account/identity/API/aggregation/provisioning or target operation is included.

## Explanation and saved author read-through

The opening separates HR's business-screen change from data released for collection. Schedule, queue, due/submitted/start/read/handled stages establish what timing configuration controls and which evidence belongs to a particular execution.

The main setup explains the published batch interface, WH/DIST meanings, HR worker account versus login, workerKey worker-a versus employeeNumber W-66, correct existing association and correct identity department mapping. Cloud-run SaaS and tenant UTC make the main clock explicit.

The two-run timeline establishes the first WH read before DIST publication and the later DIST account/identity confirmation. Confirmation is not exact persistence time, and the run is not an instantaneous all-account snapshot or a gate that forces every identity to wait for task completion.

The freshness table uses a positive explanation of what each age measures, followed by what it cannot establish. Publication cutoff, later business changes and the 86-minute decomposition remain explicit. The confirmation gap is not called identity-processing duration.

Daily 14:00/eight-hour recurrence resets at midnight; opportunity and waiting gaps are derived before weekly/monthly/support limits. VA fixed standard-time offsets, SaaS tenant-zone behavior, browser/report clocks, dates and migration scheduling effects retain separate contexts.

Scope, actor, query, endpoint, full/delta and optimization explain why faster collection cannot repair excluded records or skipped re-evaluation. Account memberships and entitlement definitions have independent controls, object types and observation times. Flat-file/import automation has explicit supported boundaries.

Dependencies connect required inputs and results. Identity processing, its own trigger types, conditional access decisions and provisioning are separate from collection calendars. The second diagram is a conditional model, not a success guarantee or global serial chain.

Outcome-first freshness commitments define start, stop and evidence across producer, collection, processing and target stages. Capacity, load, recovery, variation and escalation are part of the design, without invented overlap/merge/retry behavior or product timing guarantees.

All saved learner prose was read in three contiguous portions. The wording pass explained the producer interface and queue more directly, separated identity-attribute/mapping/profile meanings, added the possibility of later HR changes, replaced premature processing-duration terminology, expanded GMT, explained VA through where work runs and clarified identity-processing triggers. Edited passages were read again during closing checks.

This is simulated beginner author review, not observed independent learner validation. Actual learner validation and graphical publication review remain separately pending. Structure, length, tables, diagrams and cases follow the topic without quotas.

## Coverage reconciliation

All 86 prior purposes map to the saved revision 3.0 explanation.

| Preserved purpose | Current location | Retained reasoning and evidence |
|---|---|---|
| 1. Old value after success | Opening; Follow one department through two reads | 03:00 change, 03:22 successful run, WH still 03:30 doesn't prove missed available input. |
| 2. Producer versus consumer | Opening; Follow one department through two reads | Business screen and published interface can update at different times. |
| 3. Aggregation/source/connector | What does a schedule start? | Collect/represent supported data, configured source and integration operations. |
| 4. Schedule meaning | What does a schedule start? | Due/submission, not proof of start/completion/latest input. |
| 5. Direct-connect controls | What does a schedule start? | Supported read rather than manual upload, available frequency/start settings. |
| 6. Queue behavior | What does a schedule start? | Other queued/running work can delay actual start, no private queue model. |
| 7. Execution sequence | What does a schedule start? | Due, submitted, starts, reads, handles, outcome inspected. |
| 8. Configuration versus run evidence | What does a schedule start? | Saved intention and actual execution are different records. |
| 9. SaaS runtime | Follow one department through two reads | Cloud-run software-as-a-service variant versus customer appliance. |
| 10. Producer publication contract | Follow one department through two reads | Complete batches, DIST unavailable until 03:40. |
| 11. Department values | Follow one department through two reads | WH/Warehouse Planning to DIST/Distribution Planning, no biography needed. |
| 12. HR account meaning | Follow one department through two reads | Source worker record not necessarily a login. |
| 13. Identification | Follow one department through two reads | workerKey worker-a differs from employeeNumber text W-66. |
| 14. Identity association | Follow one department through two reads | Existing correct owner supplied, not inferred from key/name. |
| 15. Mapping/profile | Follow one department through two reads | Input-to-value relationship and identity-population/attribute configuration. |
| 16. Main scope/mapping conditions | Follow one department through two reads | Record included, department read correct, full configured population. |
| 17. Main daily schedule/clock | Follow one department through two reads | 00:10 hourly daily window, tenant UTC, common reference. |
| 18. Supplied evidence | Follow one department through two reads | Fictional values/times/results, no measured duration/product guarantee. |
| 19. First due/start | Follow one department through two reads | 03:10 queued, 03:15 actual start. |
| 20. First read/end/result | Follow one department through two reads | 03:17 WH read, 03:22 success/WH represented. |
| 21. Publication | Follow one department through two reads | 03:40 DIST now available to this integration. |
| 22. Second due/start | Follow one department through two reads | 04:10 queued, 04:15 start. |
| 23. Second read/end/account check | Follow one department through two reads | 04:18 DIST, 04:24 task complete/account confirmed. |
| 24. Identity check | Follow one department through two reads | 04:26 separately confirmed DIST. |
| 25. Confirmation meaning | Follow one department through two reads | Not original business event or exact persistence/processing completion. |
| 26. Chronological diagram | First timeline diagram and its explanation | Producer change/publication, connector reads, ISC representations and human checks. |
| 27. No atomic/global read order | First timeline diagram and its explanation | Not instantaneous snapshot/all records at task start/identity waits for task end. |
| 28. Freshness meaning | When someone says “updated recently,” ask which event they mean | Subject and reference time needed, not one universal “updated” age. |
| 29. Four ages | When someone says “updated recently,” ask which event they mean | At 04:30: business90/publication50/read12/confirmation4 minutes. |
| 30. Publication versus cutoff | When someone says “updated recently,” ask which event they mean | Newly published/generated batch can contain older business information. |
| 31. Elapsed 86 minutes | When someone says “updated recently,” ask which event they mean | 40 publication +30 next opportunity +5 queue +9 execution +2 confirmation. |
| 32. Timing-model qualification | When someone says “updated recently,” ask which event they mean | Human-check gap isn't measured processing duration; stages can overlap elsewhere. |
| 33. 60-minute requirement | When someone says “updated recently,” ask which event they mean | Main 86-minute trace misses defined change-to-confirmation commitment. |
| 34. Daily recurrence | Why “every eight hours” can hide a longer gap | Start and Reoccurs Every, midnight reset. |
| 35. 14:00/eight-hour example | Why “every eight hours” can hide a longer gap | 14:00,22:00 then next-day14:00, not06:00. |
| 36. Overnight gap/wait | Why “every eight hours” can hide a longer gap | 16-hour opportunity gap, 15h59 from22:01 before queue/processing. |
| 37. Weekly/monthly | Why “every eight hours” can hide a longer gap | Day/time and monthly1-28 date/time are submission opportunities. |
| 38. Control/frequency limits | Why “every eight hours” can hide a longer gap | Source/admin context, unsupported frequency requires design resolution. |
| 39. Actual-setting review | Why “every eight hours” can hide a longer gap | Calculate longest gaps, not operating-label assumptions. |
| 40. Zone/fixed offset meaning | Which clock controls the opportunity? | Local reference relationship and named-zone daylight changes. |
| 41. VA/cluster | Which clock controls the opportunity? | Customer runtime/grouped appliances with fixed standard-time GMT offset. |
| 42. SaaS tenant clock | Which clock controls the opportunity? | Applicable tenant-zone daylight changes differ from VA rule. |
| 43. Offset arithmetic | Which clock controls the opportunity? | GMT-06 02:00 =UTC08:00 =business GMT-05 03:00. |
| 44. Display versus schedule clocks | Which clock controls the opportunity? | Browser/activity/report clocks not automatically source time basis. |
| 45. Date/reference conversion | Which clock controls the opportunity? | Preserve original date/zone, conversions can cross midnight. |
| 46. Migration clock review | Which clock controls the opportunity? | Same02:00 label may change real due time between VA/SaaS. |
| 47. Collection scope/filter | A faster schedule cannot collect a record that is excluded | Population/fields configured and permitted, exclusion repeated by faster schedule. |
| 48. Actor/query/endpoint | A faster schedule cannot collect a record that is excluded | External read identity, selected information/interface address affect coverage. |
| 49. Full mode | A faster schedule cannot collect a record that is excluded | Configured population, not universal override of filters/permissions. |
| 50. Delta mode | A faster schedule cannot collect a record that is excluded | Supported changes, no proof unchanged reread/capture-gap recovery. |
| 51. Optimization | A faster schedule cannot collect a record that is excluded | Full read may skip unchanged processing, not prove new correlation applied. |
| 52. Correct follow-up | A faster schedule cannot collect a record that is excluded | Appropriate reevaluation when needed, not frequency-only repair. |
| 53. Specific freshness evidence | A faster schedule cannot collect a record that is excluded | Account/value/mapping/observation time, not success alone. |
| 54. Scope/deletion consequences | A faster schedule cannot collect a record that is excluded | Changing returned population can affect representation under settings. |
| 55. Account versus entitlement observations | Related records can be current as of different times | Held access relationships versus group/object descriptions. |
| 56. Entitlement controls/types | Related records can be current as of different times | Separate manual/recurring controls and all/selected type coverage. |
| 57. Membership timing | Related records can be current as of different times |09:00 account,09:20 G-66 added,09:30 group description doesn't refresh membership. |
| 58. Unused group converse | Related records can be current as of different times | Fresh held values don't prove new unheld object inventory. |
| 59. Identifier/context/time | Related records can be current as of different times | Source/type/identifier and independent times, not one screen=snapshot. |
| 60. File limits | Related records can be current as of different times | Native flat-file entitlement manual/no recurrence/multiple types; account import/latest file. |
| 61. Export/import automation | Related records can be current as of different times | Export isn't ISC schedule, no automatic folder discovery; verify designed ingestion and cutoff. |
| 62. Dependency meaning | A later time on the calendar does not verify the handoff | Required prior result, not just calendar ordering. |
| 63. Producer handoff | A later time on the calendar does not verify the handoff |03:10 cannot enforce03:40 publication. |
| 64. Identity processing | A later time on the calendar does not verify the handoff | Identity-change event and separate scheduled/time-based/manual, not source schedule. |
| 65. Provisioning | A later time on the calendar does not verify the handoff | Supported target changes, identity evaluation doesn't prove delivery. |
| 66. Conditional dependency diagram | A later time on the calendar does not verify the handoff | Published input, read, identity value, access decision, conditional write/success/later observation. |
| 67. Actor/arrow conditions | A later time on the calendar does not verify the handoff | Producer/ISC/target responsibilities, not every-read grants or automatic success. |
| 68. Read before target change | A later time on the calendar does not verify the handoff | Can correctly return old state; cannot read future result. |
| 69. Independent reads | A later time on the calendar does not verify the handoff | No forced global serial chain; fixed gap margin isn't verified success. |
| 70. Outcome-first commitment | Define “current enough” before choosing a frequency | Payroll/current disable need different requirements, not all hourly. |
| 71. Start/stop definitions | Define “current enough” before choosing a frequency | Approval/effective/publication versus account/identity/target disable/access removal. |
| 72. Representative measurement | Define “current enough” before choosing a frequency | Producer/schedule/queue/execution/processing/target histories including busy periods. |
| 73. Variability/escalation | Define “current enough” before choosing a frequency | Measured max isn't future product guarantee; owner/response for missed target. |
| 74. Increased load/overlap | Define “current enough” before choosing a frequency | Source/system demand, inspect executions, no universal overlap/skip/merge/retry. |
| 75. Delta/narrow scope | Define “current enough” before choosing a frequency | Supported complete tracking or required population still needed; don't exclude departing workers for speed. |
| 76. Least frequent valid schedule | Define “current enough” before choosing a frequency | Verified requirement, capacity/recovery; fix publication instead of repeated unavailable reads. |
| 77. History evidence | Verify the value or access change that matters | Start/stop/status/count/optimization/errors separate states. |
| 78. 90/100 population | Verify the value or access change that matters | Success on90 doesn't establish requirement for100 when excluded. |
| 79. Trace evidence | Verify the value or access change that matters | Producer cutoff,response,account,identity,target results and separate object IDs. |
| 80. Search meaning/freshness | Verify the value or access change that matters | Indexed data, object/sync check, no live read or exact completion promise. |
| 81. Missed-target diagnosis | Verify the value or access change that matters | Identify delayed stage/owner, not blanket slow aggregation. |
| 82. All original cases | Work through the timing and evidence, cases 1–8 | Publication, daily window, clock, scope, object/membership, early target read, Search and export retained. |
| 83. Contractor transfer assumptions | Review a promise to disable accounts within 30 minutes | Hourly independent publication/collection, just-effective events, no preload/timed action, variable work/no target confirmation. |
| 84. Transfer bound failure | Review a promise to disable accounts within 30 minutes | Publication wait alone can exceed30minutes, then further collection waits. |
| 85. Transfer acceptable design/evidence | Review a promise to disable accounts within 30 minutes | Effective handling/timely input/supported collection or event path/authority/target confirmation/capacity/exceptions/escalation; redesign or negotiate if infeasible. |
| 86. Beginner narration | Whole lesson | Connected causal explanation, neutral record, local meanings, no methodological preface or quotas. |

## Current primary-source checks

Fresh official checks on October 29, 2026. All eight primary pages were inspected for their applicable sections. The feature-specific Time Zone Settings table qualifies the broad VA-offset notes in the account/entitlement scheduling pages: VA-based connections use cluster time; SaaS connectors use tenant time. No universal schedule clock is inferred.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Scheduled due time queues work; other work can delay start. Daily recurrences end at midnight; documented 14:00/eight-hour example yields 14:00/22:00, with weekly day/time and monthly 1-28 date. Execution/history/status/scanned/optimization evidence, collection modes, flat-file inputs and Search timing remain distinct. No universal overlap, merge, skip, retry or fixed duration is inferred. |
| [Time Zone Settings](https://documentation.sailpoint.com/saas/help/common/time-zones.html) | Feature-specific runtime distinction: VA-based aggregation uses cluster fixed standard-time GMT offset, without daylight-saving changes; SaaS uses tenant zone. Browser/activity and report clocks can differ. Tenant-zone tasks follow applicable zone daylight-saving changes. This specific distinction qualifies broad VA notes in aggregation pages rather than assigning one clock to every source. |
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Supported direct-connect entitlement collection has separate manual/recurring controls, all/selected types and queued execution. Native flat-file mechanism has manual imports without recurring schedule or multiple types. Account memberships and object details can have independent observations. No unsupported file-discovery scheduler is invented. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity changes from aggregation/provisioning can initiate event processing; scheduled/time-based/manual processing are distinct from collection schedules. Identity output/decisions don't prove successful external writes. Supplied confirmation time isn't exact persistence time or guaranteed processing duration. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Source/attribute mappings supply identity values. Existing correct HR association/profile department mapping are explicit main conditions. Late producer publication doesn't establish faulty consumer configuration; account and identity results need their own evidence. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented fields and selected identification: workerKey worker-a differs from employeeNumber text W-66. HR account representation needn't be a login; it differs from identity and downstream accounts. |
| [Connector documentation overview](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) | Supported runtime families and collection responsibilities. VA versus SaaS path matters to time basis. HR-Production/published-batch interface are supplied design assumptions, not a claim that this named connector exists. |
| [Migrating VA-based sources](https://documentation.sailpoint.com/saas/help/sources/migrate_sources.html) | Migration warning identifies scheduling impacts if VA-cluster and SaaS time zones differ. Retaining a clock label doesn't establish the same real-world due time. Review only; no migration or irreversible action performed. |

The loading guide explicitly queues work at the defined time, documents possible delay, midnight-ended daily recurrences, the 14:00/eight-hour example and monthly dates 1–28. Specific source/admin scheduling limits are acknowledged without a universal unsupported frequency.

The time-zone page distinguishes browser activity, reports, VA cluster standard-time offsets and SaaS tenant scheduling. The migration page explicitly identifies scheduling effects when time bases differ. No migration or time-zone edit is performed.

The entitlement guide documents independent all/selected type scheduling and native flat-file manual/no-recurring/no-multiple-type boundaries. The identity-processing guide separates event, scheduled, time-based and manual processing and does not validate successful provisioning delivery merely by initiating it.

References, dates and verification metadata stay outside the learner.

## Example assumptions and reasoning limits

HR-Production is a neutral supported cloud-run SaaS design, not a claim that a connector with that name exists. Complete published batches, source inclusion, valid identification, correct worker-a association and correct profile department input are supplied. workerKey worker-a and text employeeNumber W-66 have different purposes.

The daily main schedule begins 00:10 and recurs hourly within the UTC day. HR changes WH to DIST at 03:00 but releases the relevant batch at 03:40. First due/start/read/end are 03:10/03:15/03:17/03:22, with WH returned and represented. Second due/start/read/end are 04:10/04:15/04:18/04:24, with DIST returned and account confirmed. Identity DIST is separately confirmed at 04:26.

At 04:30, ages are 90/50/12/4 minutes. Change-to-confirmation is 86 minutes: 40 publication + 30 next opportunity + 5 queue + 9 execution + 2 confirmation gap. These are supplied timing/model values, not observed performance, an exact persistence timestamp or a universal serial formula.

Independent variations use daily 14:00/eight-hour opportunities, 22:01 publication, GMT-06 cluster/business GMT-05 clocks, 100 intended/90 returned scope, G-66 membership 09:00/09:20/09:30, 05:05 application read/05:12 target change, old Search and an 18:00 export/20:00 business change/next-day 08:00 import.

No universal overlap, skip, merge, retry, queue algorithm, duration, instantaneous snapshot, every-read access change, exact Search completion time or automatic file-discovery mechanism is asserted. Wider/narrower scope and runtime changes require their supported context; no safeguard bypass or irreversible action is performed.

## Assessments and transfer

All eight original worked cases remain: pre-publication WH success; daily window crossing midnight; fixed VA offset versus business daylight clock; excluded worker despite frequent success; group description versus membership time; target read before successful provisioning; current account with old Search; recent import of old export.

The contractor-disable transfer retains hourly independent publication/collection, decisions arriving at effective time, no universal preloading/timed action, variable execution and no target confirmation. Publication wait alone can exceed the 30-minute commitment. The answer establishes effective-time handling, timely input, supported collection/event design, authority, target confirmation, capacity, exceptions, escalation and redesign or explicit renegotiation if infeasible.

## Editable diagrams

[Two reads around publication](../../assets/AGG-006_beginner_publication_reads_and_confirmation.txt).
[Conditional dependency and target observation](../../assets/AGG-006_beginner_dependency_and_target_observation.txt).

Both match inline text exactly, with maximum widths 30 and 37 characters. Four historical diagram assets remain unchanged.

## Verification status

Executed October 29, 2026 against the saved local files:

- Full saved learner read-through in three contiguous portions, followed by a wording pass and a fresh read of the edited passages. Final learner: 4,171 words. This is simulated author review, not observed independent beginner testing.
- All 86 prior purpose rows reconciled; eight worked cases and the 30-minute contractor-disablement transfer retained. Eight primary-reference rows cover eight freshly inspected official pages. No JSON was added because this lesson's reasoning is temporal rather than payload-driven.
- Both editable diagrams exactly match inline blocks, maximum widths 30 and 37 characters. Two tables explain the 11-event main trace and four freshness ages. The conditional dependency diagram explicitly retains both required-change and successful-target predicates.
- Timing checks parse the main table's 11 ordered events. The 03:17 read precedes 03:40 publication; 04:18 follows publication. At 04:30, ages are 90/50/12/4 minutes. Parsed elapsed intervals 40/30/5/9/2 sum to 86 minutes. Daily 14:00/eight-hour opportunities are 14:00 and 22:00; next-day14:00 produces a 960-minute gap and 959-minute wait from22:01. Offset arithmetic confirms cluster02:00 GMT-06 = UTC08:00 = business03:00 GMT-05. These are teaching-model checks, not runtime measurements.
- The initial table-column check caught a missing purpose/location separator in this coverage table and the three earlier local AGG-003/004/005 beginner author tables. All four were repaired and the check rerun successfully. For the three earlier records, reversing only those added separators reproduces each exact start-of-turn SHA-256 hash, confirming no wording or other content changed. Their 80/85/80 rows remain intact. This is an author-format correction, not a learner rewrite.
- No learner URLs, Markdown links, fictional employee names, em dash, TODO or revision footer. All 1,310 relative Markdown links across eight changed documents resolve. All 91 learner files remain; 35 beginner-explanation records exist; ROL-007 has no stub. Registers agree on 35/91, 56 remaining, AGG-007 next and published AGG-006 still 2.0.
- npm test: all four navigation/disclosure tests pass.
- Local publication verifier against main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 with seven expected changed learners passes: 91 available lessons, 91 revised-record associations, fourteen diagrams, fifteen tables, 1,401 local content units and 418 assets. Live verification is false. The seven local learners are SRC-008 and AGG-001 through AGG-006.
- git diff --check passes. The AGG-006 reference suffix starting with the historical revision 1.0 verification is exactly preserved.
- SHA-256 audit: 679 starting files become 682. Seven existing files change: AGG-006 learner, three registers and the three earlier author coverage-table repairs. Three files are added: this record and two current diagram assets. No files are removed; 672 earlier files remain byte-identical. The other 90 learners, all earlier diagrams, historical AGG-006 record/assets and shared UI are unchanged.
- HEAD remains 4ba5a300978aa741d0178fe33f1b9d14d9a5c532; staging is empty. No commit, push, Pages deployment, tenant/source/schedule/time-zone/runtime/migration/read/account/identity/provisioning or target operation occurred. Actual independent learner validation and graphical publication review remain separately pending.
