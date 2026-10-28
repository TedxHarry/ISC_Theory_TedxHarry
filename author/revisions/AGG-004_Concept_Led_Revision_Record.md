# AGG-004: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-004_Delta_Aggregation_and_Connector_Limitations.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [captured changes to records](../../assets/AGG-004_captured_changes_to_records.txt) and [delta keeps unchanged accounts](../../assets/AGG-004_delta_keeps_unchanged_accounts.txt).
- Historical [change information to account results](../../assets/AGG-004_change_information_to_account_results.txt) and [baseline, changes and result](../../assets/AGG-004_baseline_changes_and_result.txt) remain unchanged.
- Only AGG-004 learner content and current course/author metadata change. Prior local SRC-003 through SRC-008 and AGG-001 through AGG-003 lesson/assets/records, all 91 learner routes and site code remain preserved.
- Current revision count: 33 of 91, with 58 awaiting revision. Published revised snapshot remains 23 through SRC-002. SRC-003 through SRC-008 and AGG-001 through AGG-004 revisions 2.0 remain local.
- Next revision: AGG-005; its learner body wasn't opened. New-lesson authoring remains paused at reserved ROL-007, without a stub.

## Teaching decisions

The opening starts with why a changes-only collection can reduce repeated work, then establishes what its omissions mean. The learner follows a baseline, change capture, account-key selection, returned values and represented results before encountering connector variants. Selection and query correctness are explained separately because a correct query can't retrieve an account the capture mechanism never selects.

The fictional employee/company are removed. Neutral account/table names retain only the detail needed for comparison and inventory reasoning. Update, Insert and Delete occur externally before collection; the supplied completed ISC results don't repeat those external operations. Failure cases remain independent of the successful main trace.

The structure follows the topic. Original assessments and transfer reasoning remain, without a fixed visual, word or case quota. Supporting concepts are explained locally, with no source links or teaching-method announcements in the learner body.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Preserved reasoning / condition |
|---|---|---|
| 1. Changed account collection need | Opening and main trace | Account department OPS to FIN must reach represented source account. |
| 2. Delta omission question | Opening and inventory | Omitted unchanged account isn't deleted by absence. |
| 3. Account/identity meaning | Collection section | External account versus ISC representation; ownership connection. |
| 4. Source/connector meaning | Collection section | Configured representation and supported integration. |
| 5. Account aggregation/attribute | Collection section | Collect records/named information, including department. |
| 6. Full/delta meaning | Collection section | Configured population versus supported changes since established start. |
| 7. Delta isn't fewer columns/active filter | Collection section | Difference mechanism independent of activity/status and field projection. |
| 8. Scope/filter | Collection section | Both full and delta have intended coverage and supported selections. |
| 9. Benefit and limits | Opening/collection | Reduced repeated collection/load, not fixed runtime or universal coverage. |
| 10. Trigger/schedule | Collection section | Change availability isn't an immediate event-triggered ISC read guarantee. |
| 11. Baseline | Starting point | Established acct-a/b/c representation from complete initial collection. |
| 12. Empty-list gap | Starting point | Changes-only collection doesn't automatically establish old unchanged accounts. |
| 13. Reference mechanism | Starting point | Sequence position/time/table differ; no universal lastAggregation field. |
| 14. Arbitrary-date boundary | Starting point | Administrator-selected date isn't supported initialization by assumption. |
| 15. Connector initialization examples | Starting point | AD full reference and JDBC full/capture setup remain qualified. |
| 16. Handoff gap | Starting point | Baseline/capture transition must cover changes, not inferred from two successes. |
| 17. JDBC/SaaS meaning | Database section | Standard database connectivity and cloud-based connector variant. |
| 18. Database/table meaning | Database section | Rows/columns; SERVICE_ACCOUNTS is illustrative main table. |
| 19. Account key versus employee reference | Database section/JSON | acct-a selected identifier, W-44 worker reference, stable valid identification supplied. |
| 20. Change table meaning | Database section | SERVICE_CHANGES carries affected account key/action. |
| 21. Update/Insert/Delete table | Change table | Three distinct actions for acct-a/d/c; acct-b unchanged. |
| 22. Deleted identifying reference | Change table | Removed current row can still be identified through retained change information. |
| 23. Not executable/default configuration | Change table | Names/rows illustrative, no SQL or universal column assumptions. |
| 24. Database trigger | Database section | Approved event capture produces identifying changes. |
| 25. Checkbox insufficiency | Database section | Capture/key/table/read/permissions must agree. |
| 26. Main conditions | Database section | Complete baseline, continuous correct capture, valid identification and supplied outcomes. |
| 27. Query meaning | Account-result section | Key selects account; query supplies needed updated data. |
| 28. Schema/mapping meaning | Account-result section | Represented fields/use and input supplying value. |
| 29. JSON/API meaning | Account-result section | Selected valid acct-a/W-44/FIN fragment, not full response or runnable query. |
| 30. Key to value to represented output | Account-result section | Update selects acct-a, read supplies FIN, mapping represents FIN. |
| 31. Response shape boundary | Account-result section | Key/action isn't full account; no universal omitted-means-clear behavior. |
| 32. Correlation | Account-result section | Applicable matching/assignment; existing correct association supplied. |
| 33. Newly created external account | Account-result section | acct-d already external; discovery isn't another external creation. |
| 34. Explicit supported deletion | Account-result section | acct-c removal result supplied under reviewed supported handling, not empty-read inference. |
| 35. Identity/deletion scope | Account-result section | One account deletion isn't employee-identity/all-systems deletion. |
| 36. Disable versus delete | Account-result section | Status change can retain account; no inferred employment status. |
| 37. Responsibility diagram | First diagram | Database capture to connector collection to ISC handling; human verification separated. |
| 38. Diagram limitations | Diagram explanation | Logical dependencies, not private transaction stages/order/success guarantee. |
| 39. Before/actions/after diagram | Inventory | Baseline a/b/c; Update a, Insert d, Delete c; result a/b/d. |
| 40. Unchanged account retained | Inventory; case 1 | acct-b remains because omission from changes isn't deletion evidence. |
| 41. Count arithmetic | Inventory; case 3 | 3 + 1 - 1 = 3, changed set and FIN despite equal totals. |
| 42. Change count versus objects/population | Inventory | Three entries aren't three new/live accounts or full current list. |
| 43. Failed capture variation | Capture failure; case 2 | Correct/reachable query doesn't select account missing from change table. |
| 44. Empty-success evidence limit | Capture failure | No entries returned doesn't prove no application changes/current ISC data. |
| 45. Capture diagnostics | Capture failure | Relevant table/event/logic/key and actual row/query inspected. |
| 46. Integration actor | Capture failure | Operation-specific authority, not ordinary read implies tracking access. |
| 47. Tracking permissions | Capture failure | Documented read/write/cleanup scope, not unlimited business-data write. |
| 48. Re-initialization | Capture failure | Documented bookkeeping, no invented cleanup timing or unread-entry deletion. |
| 49. Authorized database owner | Capture failure | Specific approved supported requirements; no unrestricted-access shortcut. |
| 50. Membership/group/permission | Membership section | Relationship/access object/allowed operation locally explained. |
| 51. Separate membership table | Membership; case 6 | Changed relationship may not modify watched account row. |
| 52. Query versus selection | Membership | Query can return membership if asked, but capture must select affected account. |
| 53. Entitlement aggregation | Membership | Access-right/object information differs from account membership updates. |
| 54. DirSync | Connector section | AD directory-change mechanism, not database tracking recipe. |
| 55. AD delta permissions | Connector table/prose | Replicating Directory Changes and Deleted Objects read, ordinary connection insufficient. |
| 56. JDBC group-delta boundary | Connector table | Account table mechanism doesn't support group-object delta. |
| 57. Okta profile/log split | Connector section/table | Users API for profiles, logs API for entitlements/deleted users, accounts-only delta. |
| 58. OU moves | Connector section | Directory container move requires documented full aggregation handling, not ordinary department edit. |
| 59. Okta retention | Connector section; case 7 | 90-day log boundary; full account recovery current state, not historical event reconstruction. |
| 60. Connector qualification | Connector section | No universal token lifetime/permissions/deletion/account/group capability. |
| 61. Pagination versus change start | Progress section | Page continuation and across-run change reference serve different purposes. |
| 62. Checkpoint | Progress section | Generic recorded progress meaning, no universal property/private commit claim. |
| 63. Interrupted-read uncertainty | Progress; case 4 | No inferred global rollback/full application/exactly-once replay. |
| 64. Recovery evidence | Progress | Actual records and execution, retained changes and supported recovery; start time not safe boundary. |
| 65. No guessed progress edits | Progress | Don't invent timestamp/clear reference/replay table without supported path. |
| 66. Full recovery scope/safeguards | Progress | Review existing-record/deletion effects; no bypass due to larger read. |
| 67. Last-modified versus effective date | Time section | Recorded today/effective next month aren't equivalent detection fields. |
| 68. Format/time/boundary qualification | Time section | Documented field/zone/inclusive-exclusive behavior, no guessing from phrase. |
| 69. Tracking completeness versus schedule | Time section | Recent schedule doesn't establish all relevant changes captured. |
| 70. Widened filter | Time section; case 5 | Newly included unchanged population not necessarily in delta; supported refresh needed. |
| 71. ISC mapping/configuration only | Time/reprocessing | Saving ISC config doesn't create external change events. |
| 72. Optimization versus delta | Reprocessing; case 8 | Full optimized skip and unoptimized comparison handling differ from record delivery. |
| 73. Single-account distinction | Reprocessing | Specified account read versus change-information selection. |
| 74. Population refresh/reevaluation | Reprocessing | Choose supported operations for config change, not universal scheduled-delta repair. |
| 75. Identity attributes | Downstream | Account department only supplies identity department through configured mapping. |
| 76. Identity processing/provisioning | Downstream | Modified identity event and access evaluation versus separate supported target writes. |
| 77. Main outcome scope | Downstream | FIN/correct owner/new/deleted reps, not every identity/output changed. |
| 78. Downstream consequences | Downstream | Collection can feed later access changes; separate outcomes checked. |
| 79. Configuration/history/accounts evidence | Evidence | Intended config, actual execution and identified represented state differ. |
| 80. Five evidence questions | Evidence table | Availability, selection, account update, deletion and external delivery need different evidence. |
| 81. Search freshness | Evidence | Actual record/execution/view timing before repeating collection. |
| 82. Original eight cases | Exercises | Omission, missed trigger, arithmetic, partial page, filter, membership capture, retention, ISC-only comparison preserved. |
| 83. Independent STAFF/STAFF_GROUPS transfer | Final exercise | Incomplete insert/update-only capture, unobserved deletes/memberships and insufficient connection proof. |
| 84. Transfer recovery/authority | Final exercise | Key/query/maps/baseline/capture/permissions, preserve unread evidence, no absence-based deletion or fake historic recovery. |
| 85. Beginner narration | Whole lesson | Neutral values, causal bridges, full normal mechanism before variants, no biography, fixed quota or teaching-method preface. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Connector examples are scoped to their named mechanisms rather than imported IdentityIQ behavior. The main deletion outcome is a supplied result under reviewed supported handling, not a promise inferred solely from a Delete row or a generic delta flag.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Delta selection differs from full population reading and optimized/unoptimized processing. Supported source selection, history, Search timing and OU-move full-read guidance remain qualified. Processing choices don't prove delivery of a record absent from delta. No universal schedule, checkpoint reset or retry result is inferred. |
| [JDBC SaaS delta tables](https://documentation.sailpoint.com/connectors/saas/jdbc/help/saas_connectivity/jdbc/delta_agg.html) | Full initial collection; account and tracking tables; identifying value and Insert/Update/Delete action; capture triggers and tracking read/write/cleanup requirements. Documented tracking re-initialization isn't a private atomic cleanup guarantee or license for manual unread-entry deletion. Group delta is unsupported by this mechanism. Service table/column names and completed account-removal result are supplied teaching conditions. |
| [Active Directory delta aggregation](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/delta_aggregation.html) | Default DirSync mode, initial full-reference establishment and account added/changed/deleted coverage. Not generalized into one starting-reference mechanism for every connector. |
| [Active Directory delta permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/delta_aggregation_permissions.html) | Additional Replicating Directory Changes and Deleted Objects container read authority. Connection success or ordinary read doesn't establish both. No permission commands or actual security changes supplied. |
| [Okta SaaS delta aggregation](https://documentation.sailpoint.com/connectors/saas/okta/help/saas_connectivity/okta/delta_aggregation.html) | Accounts-only delta; profile updates through users API and entitlement/deleted-user changes through logs API. Documented 90-day retained-log limit and full account-aggregation recovery for current state; expired events aren't recreated. No universal token lifetime inferred. |
| [Managing account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented attributes/identification differ from change-entry formats. Account key acct-a is distinct from employeeRef W-44; valid identification is supplied. Omitted response fields aren't given universal clear-value semantics. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector responsibilities and identified Accounts records/associations. Saved configuration, connection test and person-name Search aren't proof of delivered population or applied changes. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Ownership uses applicable comparisons; existing correct acct-a association is explicit, not inferred from account-key characters or delta success. Changed ISC-only comparisons need appropriate coverage and reevaluation. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Aggregation/provisioning modifications of identities initiate identity processing. Account value, identity mapping, access decisions and successful external delivery are distinct. No every-row/every-calculation guarantee. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External account/access changes use supported write operations. Change entries observe existing external changes, not commands to repeat creates/deletes. Collection bookkeeping isn't unrestricted business-data authority; downstream outcomes need separate evidence. |

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning / evidence | Misconception exposed |
|---|---|---|
| Unchanged omitted account | acct-b stays; changes-only absence differs from supported deletion evidence. | Missing from delta means deleted. |
| Empty run with missed trigger | Inspect capture and actual row/query, supported recovery and resulting record. | Successful empty read proves no changes/current state. |
| Three change entries | Retain a/b, add external d representation, remove c representation, total three with changed contents/value. | Change count equals new/live population count. |
| Partial page and timestamp | Preserve evidence, inspect results and follow documented recovery. | Arbitrary advance safe, global rollback or exactly-once replay guaranteed. |
| Expanded filter | Supported population refresh/re-initialization and scope effects. | Saved wider scope delivers unchanged newly included accounts. |
| Separate membership table | Query and capture must cover affected account; object inventory alone insufficient. | Correct query or group read proves complete selection/membership capture. |
| Expired Okta logs | Documented full account recovery for current state, not expired historical events. | Another delta recreates unavailable history. |
| ISC-only comparison | Supported delivery plus appropriate re-evaluation, separately established. | Disabling optimization makes omitted account arrive. |
| STAFF design transfer | Keys/query/access mappings/baseline/capture/authority/recovery reviewed; no absent-means-delete or manual unread cleanup; verify current state and separate target outcomes. | Passing connection establishes coverage, unrestricted writes/clearing tracking fixes failures. |

All eight original numbered cases and worked answers remain, together with the independent database-design transfer and its worked reasoning.

## Conditions and limits

- No actual tenant, database, SQL, API, credentials, permissions, source settings, schema, change capture, tracking table/reference, account, identity, aggregation or target operation.
- Main baseline and continuous correct capture are supplied. Initial full read, account identification, correct existing acct-a association and supported deletion handling are established conditions, not inferred from a connection test.
- Neutral names/rows/JSON are teaching fragments, not complete source configuration or executable SQL/API instructions. Account key acct-a differs from employeeRef W-44.
- External account update/create/delete happen before collection. Tracking entries report them, not repeat them as provisioning instructions.
- Main final set is acct-a/b/d with acct-a FIN. acct-b omission isn't deletion; deleting one application account doesn't establish employment/identity/all-system removal.
- Capture gaps, membership-table omissions, partial pages, widened filters, expired logs and ISC-only configuration changes are independent variations.
- Supported tracking cleanup may require write/delete authority, but isn't unrestricted business provisioning or permission to remove unread change information.
- No universal token/checkpoint/property, private transaction/commit/order model, global rollback, exactly-once replay, time boundary or fixed schedule/duration.
- AD and JDBC initial-full setups are named examples, not a universal recipe. JDBC group-delta limitation and Okta account-only/interface/retention conditions remain specific.
- Current-state recovery doesn't reconstruct lost historical events. Full-read recovery needs supported scope and safeguards.
- Query correctness, record selection, represented account values, identity processing and target delivery are separate dependencies/outcomes.
- Source links, dates and author metadata stay outside learner body. Actual beginner validation, full graphical review and formal approval remain pending.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site checks aren't observed learner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate whitespace checks cover the two new diagram assets and this record.
- Checked 889 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source, course register, current reference section and current example row match intended revisions. Both new diagrams match inline blocks exactly; maximum widths 38 and 34 characters meet the 42-column rule.
- Parsed selected JSON: accountKey acct-a, text employeeRef W-44, department FIN. It is selected teaching data, not a runnable query/full API object.
- Parsed baseline from the inventory diagram and the Update/Insert/Delete table. Applied the teaching changes to acct-a/b/c: update acct-a to FIN, represent acct-d and remove acct-c. Result acct-a/b/d matches the diagram; unchanged acct-b has no change row and remains. Three starting representations plus one minus one equals three, with changed contents. These are model/data checks, not actual database/connector/deletion execution.
- All eight numbered cases and worked answers remain, plus the independent STAFF/STAFF_GROUPS transfer and worked reasoning. Coverage reconciliation records 85 purposes; ten primary-reference rows map ten official pages.
- Learner-body checks found no source/course URLs or Markdown links, removed fictional employee/company/numbered-account identifiers, em dashes, revision metadata or verification placeholder. Connector-specific retention and supported handling remain explicit.
- Current status is 33 of 91 individually revised, 58 awaiting revision. SRC-003 through SRC-008 and AGG-001 through AGG-004 revisions 2.0 remain local. Published revised snapshot remains 23 through SRC-002. AGG-005 is next; its learner body wasn't opened.
- Reference-register prefix remains exactly 349223 characters with the same SHA256 hash. Tail beginning at AGG-005 remains exactly 651203 characters with the same hash. Only the owned AGG-004 section changes; its revision 1.0 verification detail remains nested as history.
- SHA256 comparison with start-of-AGG-004 snapshot: 396 files became 399. Four existing files changed: AGG-004 learner source, course register, reference register and example register. Two current diagram assets and this record are new. All 392 other existing files are unchanged; zero removed. Prior local lesson/assets/records, historical diagram assets and site/navigation code remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`, staging empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual tenant, SQL/API, database, permission, tracking-state, aggregation, account/identity, provisioning or target operation executed. Actual beginner validation, full graphical review and formal approval remain pending.
