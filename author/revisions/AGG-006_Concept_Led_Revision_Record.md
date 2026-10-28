# AGG-006: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-006_Schedules_Scope_Dependencies_and_Data_Freshness.md) revised in place.
- Original revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current diagrams: [publication and observation times](../../assets/AGG-006_publication_and_observation_times.txt) and [required handoffs and outcomes](../../assets/AGG-006_required_handoffs_and_outcomes.txt).
- Historical [publication and two reads](../../assets/AGG-006_publication_and_two_reads.txt) and [conditional data-to-target dependencies](../../assets/AGG-006_conditional_data_to_target_dependencies.txt) remain unchanged.
- Only AGG-006 learner content and current course/author metadata change. Earlier local SRC-003 through SRC-008 and AGG-001 through AGG-005 lessons/assets/records, all 91 routes, historical assets and site code remain preserved.
- Individually revised: 35 of 91, with 56 awaiting revision. Published revised snapshot remains 23 through SRC-002. SRC-003 through SRC-008 and AGG-001 through AGG-006 revisions 2.0 remain local.
- AGG-007 is next; its learner body wasn't opened. New authoring remains paused at reserved ROL-007, without a stub.

## Teaching decisions

The opening starts with an old department after a successful run. The schedule's actual responsibility is established before the two-read trace: due time submits work, execution obtains available input and results need their own verification. That gives the learner a concrete reason to distinguish producer publication from read completion.

Neutral worker-a/HR-Production replaces the employee biography while preserving source identification and valid account-to-identity/profile conditions. The eleven-event table retains every supplied stage; the age table then explains why four recent-looking timestamps answer different questions. Daily windows and runtime clocks follow this normal mechanism, before scope and downstream variants.

Word/diagram/table counts aren't targets. Both diagrams remain because the trace and conditional handoffs benefit from visual separation. All original assessment and transfer purposes remain. Author review/source metadata stay outside the learner body.

The 60-minute comparison uses the supplied 03:00 business-change time as its starting point. It doesn't infer an unprovided HR approval timestamp. This preserves the end-to-end requirement test while making its measured start explicit.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Preserved reasoning / condition |
|---|---|---|
| 1. Old value after success | Opening | 03:00 change, 03:22 successful run, WH still 03:30 doesn't prove missed available input. |
| 2. Producer versus consumer | Opening/main trace | Business screen and published interface can update at different times. |
| 3. Aggregation/source/connector | Schedule section | Collect/represent supported data, configured source and integration operations. |
| 4. Schedule meaning | Schedule section | Due/submission, not proof of start/completion/latest input. |
| 5. Direct-connect controls | Schedule section | Supported read rather than manual upload, available frequency/start settings. |
| 6. Queue behavior | Schedule section | Other queued/running work can delay actual start, no private queue model. |
| 7. Execution sequence | Schedule section | Due, submitted, starts, reads, handles, outcome inspected. |
| 8. Configuration versus run evidence | Schedule section | Saved intention and actual execution are different records. |
| 9. SaaS runtime | Main setup | Cloud-run software-as-a-service variant versus customer appliance. |
| 10. Producer publication contract | Main setup | Complete batches, DIST unavailable until 03:40. |
| 11. Department values | Main setup | WH/Warehouse Planning to DIST/Distribution Planning, no biography needed. |
| 12. HR account meaning | Main setup | Source worker record not necessarily a login. |
| 13. Identification | Main setup | workerKey worker-a differs from employeeNumber text W-66. |
| 14. Identity association | Main setup | Existing correct owner supplied, not inferred from key/name. |
| 15. Mapping/profile | Main setup | Input-to-value relationship and identity-population/attribute configuration. |
| 16. Main scope/mapping conditions | Main setup | Record included, department read correct, full configured population. |
| 17. Main daily schedule/clock | Main setup | 00:10 hourly daily window, tenant UTC, common reference. |
| 18. Supplied evidence | Main setup | Fictional values/times/results, no measured duration/product guarantee. |
| 19. First due/start | Timeline | 03:10 queued, 03:15 actual start. |
| 20. First read/end/result | Timeline | 03:17 WH read, 03:22 success/WH represented. |
| 21. Publication | Timeline | 03:40 DIST now available to this integration. |
| 22. Second due/start | Timeline | 04:10 queued, 04:15 start. |
| 23. Second read/end/account check | Timeline | 04:18 DIST, 04:24 task complete/account confirmed. |
| 24. Identity check | Timeline | 04:26 separately confirmed DIST. |
| 25. Confirmation meaning | Timeline explanation | Not original business event or exact persistence/processing completion. |
| 26. Chronological diagram | First diagram | Producer change/publication, connector reads, ISC representations and human checks. |
| 27. No atomic/global read order | Diagram explanation | Not instantaneous snapshot/all records at task start/identity waits for task end. |
| 28. Freshness meaning | Age section | Subject and reference time needed, not one universal “updated” age. |
| 29. Four ages | Age table | At 04:30: business90/publication50/read12/confirmation4 minutes. |
| 30. Publication versus cutoff | Age section | Newly published/generated batch can contain older business information. |
| 31. Elapsed 86 minutes | Age section | 40 publication +30 next opportunity +5 queue +9 execution +2 confirmation. |
| 32. Timing-model qualification | Age section | Human-check gap isn't measured processing duration; stages can overlap elsewhere. |
| 33. 60-minute requirement | Age section | Main 86-minute trace misses defined change-to-confirmation commitment. |
| 34. Daily recurrence | Window section | Start and Reoccurs Every, midnight reset. |
| 35. 14:00/eight-hour example | Window section | 14:00,22:00 then next-day14:00, not06:00. |
| 36. Overnight gap/wait | Window/case 2 | 16-hour opportunity gap, 15h59 from22:01 before queue/processing. |
| 37. Weekly/monthly | Window section | Day/time and monthly1-28 date/time are submission opportunities. |
| 38. Control/frequency limits | Window section | Source/admin context, unsupported frequency requires design resolution. |
| 39. Actual-setting review | Window section | Calculate longest gaps, not operating-label assumptions. |
| 40. Zone/fixed offset meaning | Clock section | Local reference relationship and named-zone daylight changes. |
| 41. VA/cluster | Clock section | Customer runtime/grouped appliances with fixed standard-time GMT offset. |
| 42. SaaS tenant clock | Clock section | Applicable tenant-zone daylight changes differ from VA rule. |
| 43. Offset arithmetic | Clock/case 3 | GMT-06 02:00 =UTC08:00 =business GMT-05 03:00. |
| 44. Display versus schedule clocks | Clock section | Browser/activity/report clocks not automatically source time basis. |
| 45. Date/reference conversion | Clock section | Preserve original date/zone, conversions can cross midnight. |
| 46. Migration clock review | Clock section | Same02:00 label may change real due time between VA/SaaS. |
| 47. Collection scope/filter | Scope section | Population/fields configured and permitted, exclusion repeated by faster schedule. |
| 48. Actor/query/endpoint | Scope section | External read identity, selected information/interface address affect coverage. |
| 49. Full mode | Scope section | Configured population, not universal override of filters/permissions. |
| 50. Delta mode | Scope section | Supported changes, no proof unchanged reread/capture-gap recovery. |
| 51. Optimization | Scope section | Full read may skip unchanged processing, not prove new correlation applied. |
| 52. Correct follow-up | Scope section | Appropriate reevaluation when needed, not frequency-only repair. |
| 53. Specific freshness evidence | Scope section | Account/value/mapping/observation time, not success alone. |
| 54. Scope/deletion consequences | Scope section | Changing returned population can affect representation under settings. |
| 55. Account versus entitlement observations | Related-record section | Held access relationships versus group/object descriptions. |
| 56. Entitlement controls/types | Related-record section | Separate manual/recurring controls and all/selected type coverage. |
| 57. Membership timing | Related-record/case 5 |09:00 account,09:20 G-66 added,09:30 group description doesn't refresh membership. |
| 58. Unused group converse | Related-record section | Fresh held values don't prove new unheld object inventory. |
| 59. Identifier/context/time | Related-record section | Source/type/identifier and independent times, not one screen=snapshot. |
| 60. File limits | Related-record section | Native flat-file entitlement manual/no recurrence/multiple types; account import/latest file. |
| 61. Export/import automation | Related-record section | Export isn't ISC schedule, no automatic folder discovery; verify designed ingestion and cutoff. |
| 62. Dependency meaning | Handoff section | Required prior result, not just calendar ordering. |
| 63. Producer handoff | Handoff section |03:10 cannot enforce03:40 publication. |
| 64. Identity processing | Handoff section | Identity-change event and separate scheduled/time-based/manual, not source schedule. |
| 65. Provisioning | Handoff section | Supported target changes, identity evaluation doesn't prove delivery. |
| 66. Conditional dependency diagram | Second diagram | Published input, read, identity value, access decision, conditional write/success/later observation. |
| 67. Actor/arrow conditions | Diagram explanation | Producer/ISC/target responsibilities, not every-read grants or automatic success. |
| 68. Read before target change | Handoff/case 6 | Can correctly return old state; cannot read future result. |
| 69. Independent reads | Handoff section | No forced global serial chain; fixed gap margin isn't verified success. |
| 70. Outcome-first commitment | Frequency section | Payroll/current disable need different requirements, not all hourly. |
| 71. Start/stop definitions | Frequency section | Approval/effective/publication versus account/identity/target disable/access removal. |
| 72. Representative measurement | Frequency section | Producer/schedule/queue/execution/processing/target histories including busy periods. |
| 73. Variability/escalation | Frequency section | Measured max isn't future product guarantee; owner/response for missed target. |
| 74. Increased load/overlap | Frequency section | Source/system demand, inspect executions, no universal overlap/skip/merge/retry. |
| 75. Delta/narrow scope | Frequency section | Supported complete tracking or required population still needed; don't exclude departing workers for speed. |
| 76. Least frequent valid schedule | Frequency section | Verified requirement, capacity/recovery; fix publication instead of repeated unavailable reads. |
| 77. History evidence | Verification section | Start/stop/status/count/optimization/errors separate states. |
| 78. 90/100 population | Verification/case 4 | Success on90 doesn't establish requirement for100 when excluded. |
| 79. Trace evidence | Verification section | Producer cutoff,response,account,identity,target results and separate object IDs. |
| 80. Search meaning/freshness | Verification/case 7 | Indexed data, object/sync check, no live read or exact completion promise. |
| 81. Missed-target diagnosis | Verification section | Identify delayed stage/owner, not blanket slow aggregation. |
| 82. All original cases | Exercises | Publication, daily window, clock, scope, object/membership, early target read, Search and export retained. |
| 83. Contractor transfer assumptions | Final exercise | Hourly independent publication/collection, just-effective events, no preload/timed action, variable work/no target confirmation. |
| 84. Transfer bound failure | Final exercise | Publication wait alone can exceed30minutes, then further collection waits. |
| 85. Transfer acceptable design/evidence | Final exercise | Effective handling/timely input/supported collection or event path/authority/target confirmation/capacity/exceptions/escalation; redesign or negotiate if infeasible. |
| 86. Beginner narration | Whole lesson | Connected causal explanation, neutral record, local meanings, no methodological preface or quotas. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Feature-specific time-zone guidance qualifies broader VA notes in the account and entitlement scheduling pages. No all-connectors-share-one-clock assumption is made. Main producer behavior and completed outcomes remain supplied conditions.

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

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning / evidence | Misconception exposed |
|---|---|---|
| Success before batch | Supplied WH input, publication and later read checked before mapping changes. | Green run/old output proves mapping defect. |
| Daily eight-hour window | Next14:00,15h59 from22:01, additional work afterwards. | Interval continues uninterrupted across midnight. |
| Fixed VA/daylight clock |08:00UTC/business03:00; verify runtime/time basis. | Browser/business daylight change shifts every source schedule. |
|90of100 population | Approved scope/filter/actor correction and deletion effects, verify missing records. | Higher frequency expands excluded population. |
| New group details/older membership | Separate object and relationship evidence/times. | New object description proves current membership. |
|05:05 read/05:12 target change | Read precedes change; verify configured handoffs and later target evidence. | Five-minute calendar gap guarantees delivery. |
| Account current/Search old | Check displayed object, identity mapping and sync, no exact completion promise. | Old indexed view automatically means failed collection. |
| Old export/new import | Content/cutoff determine evidence age; obtain fresh supported input if required. | Recent import means live check. |
|30-minute disable transfer | Defined start/stop, timely publication/collection, identity decision, authorized target action, confirmed disablement, representative capacity/recovery and escalation. | Hourly source schedule/accepted disable or identity state proves target deadline. |

All eight numbered original cases and worked answers remain, plus the independent contractor-access transfer. Equivalent supported designs are accepted only when the required timing, handoffs and target outcome are evidenced.

## Conditions and limits

- No actual tenant/API/schedule/time-zone/VA/migration/source/credential/account/identity/provisioning/target operation.
- Main HR published-interface/SaaS support, complete scope, existing correct association/profile mapping and tenant UTC are supplied.
- All times are from one hypothetical day, except explicitly next-day window/export examples. Read/confirmation times aren't global snapshot or exact private persistence times.
- Main publication/returned-value/result chronology is fixed. Confirmation doesn't imply identity processing always waits for complete aggregation.
- 86 minutes and 90/50/12/4 ages are example arithmetic, not universal serial delay or maximum formulas.
- Publication isn't automatically business cutoff/per-field modification time. File/import/load/Search times don't prove fresh live input.
- Daily window, fixed-offset VA and tenant-zone SaaS clocks remain distinct; conversions preserve date/reference.
- Account/object observations and independent sources aren't one synchronized snapshot or forced serial chain.
- No universal concurrency/skip/merge/retry/load/performance rule. Increased frequency doesn't fix excluded scope, capture gaps or unpublished input.
- Broader/narrower scope and full recovery need deletion/safeguard review. Frequency improvements must retain required workers/data.
- Conditional identity/access/provisioning flow doesn't mean every read grants access or proves target success.
- Contractor transfer doesn't preload all effective events; hourly producer wait alone can invalidate30minute target. Accepted request/identity state isn't target disablement.
- Source URLs/dates/revision metadata stay author-only. Actual beginner validation, full graphical review and formal approval remain pending.

## Executed verification

- Fresh `npm test` completed: all four navigation/disclosure tests passed, zero failures. Site checks aren't observed beginner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate new-file whitespace checks cover both current diagrams and this record.
- Checked 903 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source, course register, current reference section and example row match intended revisions. Both diagram assets match inline blocks exactly; maximum widths are 30 and 37 characters, within the 42-column rule.
- Parsed all eleven main timeline rows. They retain the exact chronological sequence 03:00/03:10/03:15/03:17/03:22/03:40/04:10/04:15/04:18/04:24/04:26. First read precedes publication and sees WH; later read sees DIST. Confirmation is separate evidence, not exact persistence time.
- Independently calculated intervals 40+30+5+9+2=86 minutes and 03:00-to04:26=86 minutes. Parsed freshness ages 90/50/12/4 agree with 04:30 minus business/publication/read/confirmation times.
- Calculated daily 14:00/eight-hour recurrence as 14:00/22:00 before midnight, next-day 14:00; overnight opportunity gap 16 hours and 22:01-to-next14:00 wait 959 minutes (15h59). Fixed GMT-06 02:00 converts to 08:00UTC and 03:00 at GMT-05. These are teaching arithmetic checks, not actual schedules/time-zone changes.
- Checked independent 09:00/09:20/09:30 membership/object ordering, 05:05 read before 05:12 target change, 18:00 export before 20:00 change before next 08:00 import, and 100-minus90=10 excluded records. A possible 59-minute producer wait alone exceeds the 30-minute target; no actual performance bound is tested or guaranteed.
- All eight numbered original cases and worked answers remain, with the contractor-disable transfer and worked reasoning. Coverage reconciliation maps 86 purposes; eight primary-reference rows map eight official pages.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/numbered-worker identifiers, em dashes, revision metadata, teaching-method announcement or verification placeholder.
- Current status is 35 of 91 individually revised, 56 awaiting revision. SRC-003 through SRC-008 and AGG-001 through AGG-006 revisions 2.0 remain local; published revised snapshot remains 23 through SRC-002. AGG-007 is next; its learner body wasn't opened.
- Reference-register prefix remains exactly 382350 characters with the same SHA256 hash. Downstream tail beginning at AGG-007 remains exactly 630843 characters with the same hash. Only the owned AGG-006 section changes; revision 1.0 verification detail remains nested as history.
- SHA256 comparison with start-of-AGG-006 snapshot: 402 files became 405. Four existing files changed: AGG-006 learner source, course register, reference register and example register. Two current diagram assets and this record are new. All 398 other existing files remain unchanged; zero removed. Earlier local lesson/assets/records, historical assets and site/navigation code are preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79` and staging is empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual tenant/API/schedule/time-zone/VA/migration/source/identity/provisioning/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
