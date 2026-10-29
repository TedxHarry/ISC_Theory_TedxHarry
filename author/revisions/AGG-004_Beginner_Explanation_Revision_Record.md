# AGG-004 beginner explanation revision record

Revision 3.0. Module 5.4. Teaching specification 3.2. October 29, 2026.

[Current learner](../../lessons/AGG-004_Delta_Aggregation_and_Connector_Limitations.md).
[Historical revision 2.0 record](AGG-004_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).
[Published beginner batch 2](../PUBLICATION_2026-10-28_BEGINNER_BATCH_2.md).

## Scope and baseline

This is the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. AGG-004 is thirty-third of 91 existing lessons; 58 remain. All six Module 1, seven Module 2, eight Module 3 and eight Module 4 lessons remain individually revised; the first four Module 5 lessons are now revised. AGG-005 is next and is not revised here.

The first 28 through SRC-007 are published at 3.0. SRC-008 and AGG-001 through AGG-004 3.0 remain local. All 91 existing lessons remain available. ROL-007 remains reserved without a stub; 116 core and six optional foundation lessons await new authoring.

A fresh git-object comparison confirmed that published main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 contains the same normalized revision 2.0 learner as the starting local file; its author record declares 2.0. Historical local-only/published-1.0 statements describe earlier authoring stages. No live verification or publication is claimed here.

The permanent title, ID, route, manifest, course order, shared UI and teaching specification remain unchanged. Four historical AGG-004 diagram assets and its revision 2.0 author record are preserved. Earlier local SRC-008 and AGG-001 through AGG-003 work remains unchanged.

No staging, commit, push, deployment, database/SQL/API operation, permission change, tracking-state edit, actual capture/read, account/identity modification, provisioning or target operation is included.

## Explanation and saved author read-through

The opening gives the purpose of collecting reported changes and distinguishes omitted unchanged accounts from deletion. Account, identity, source, connector, aggregation, attribute, full/delta, scope and filter meanings establish what ISC updates.

Baseline and change starting reference have separate jobs. The initial full/capture handoff and complete main setup remain explicit; arbitrary dates are not substituted for supported initialization.

The JDBC SaaS example introduces tables, keys and worker references before the Update/Insert/Delete entries. Trigger capture, account selection, query values, schema/mapping and selected JSON are connected individually. The main existing acct-a association and supported deletion result remain assumptions rather than conclusions from a successful connection.

The complete normal trace produces acct-a/b/d, with acct-a FIN and unchanged acct-b retained. Equal totals are derived from three plus one minus one. The responsibility diagram separates database, connector, ISC and human verification; the inventory diagram shows changed contents despite equal totals.

Only after that flow does the explanation vary capture, permissions and membership-table coverage. JDBC tracking cleanup is distinguished from unrestricted business-data authority and improvised unread-entry deletion.

Active Directory DirSync/reference/permissions/OU behavior, JDBC group-delta limits and Okta users/logs/account-only/retention behavior stay scoped to their connectors. Pagination, across-run progress, interrupted-read uncertainty and documented recovery are explained without a universal checkpoint or private commit/replay model.

Last-modified versus business effective date, boundary meaning, widened filters and ISC-only configuration lead to the delivery/reprocessing distinction. Identity values, identity processing and separate external writes have local meanings and distinct evidence.

All saved learner prose was read in three contiguous portions. The wording pass expanded ISC, removed the premature JDBC acronym, replaced an author execution announcement with example conditions, introduced API at its first actual use, simplified the cleanup explanation, replaced an unexplained token term, and placed provisioning's meaning before it was used in identity processing. Edited passages were read again during closing checks.

This is simulated beginner author review, not observed independent learner validation. Actual learner validation and graphical publication review remain separately pending. Lesson structure, length, diagrams, tables and cases follow the subject without fixed quotas.

## Coverage reconciliation

All 85 prior purposes map to the saved revision 3.0 explanation.

| Preserved purpose | Current location | Retained reasoning and evidence |
|---|---|---|
| 1. Changed account collection need | Opening; Why does acct-b remain when it was not returned? | Account department OPS to FIN must reach represented source account. |
| 2. Delta omission question | Opening; Why does acct-b remain when it was not returned? | Omitted unchanged account isn't deleted by absence. |
| 3. Account/identity meaning | What is ISC updating? | External account versus ISC representation; ownership connection. |
| 4. Source/connector meaning | What is ISC updating? | Configured representation and supported integration. |
| 5. Account aggregation/attribute | What is ISC updating? | Collect records/named information, including department. |
| 6. Full/delta meaning | What is ISC updating? | Configured population versus supported changes since established start. |
| 7. Delta isn't fewer columns/active filter | What is ISC updating? | Difference mechanism independent of activity/status and field projection. |
| 8. Scope/filter | What is ISC updating? | Both full and delta have intended coverage and supported selections. |
| 9. Benefit and limits | What is ISC updating? | Reduced repeated collection/load, not fixed runtime or universal coverage. |
| 10. Trigger/schedule | What is ISC updating? | Change availability isn't an immediate event-triggered ISC read guarantee. |
| 11. Baseline | First establish what ISC already knows | Established acct-a/b/c representation from complete initial collection. |
| 12. Empty-list gap | First establish what ISC already knows | Changes-only collection doesn't automatically establish old unchanged accounts. |
| 13. Reference mechanism | First establish what ISC already knows | Sequence position/time/table differ; no universal lastAggregation field. |
| 14. Arbitrary-date boundary | First establish what ISC already knows | Administrator-selected date isn't supported initialization by assumption. |
| 15. Connector initialization examples | First establish what ISC already knows | AD full reference and JDBC full/capture setup remain qualified. |
| 16. Handoff gap | First establish what ISC already knows | Baseline/capture transition must cover changes, not inferred from two successes. |
| 17. JDBC/SaaS meaning | How does a database record a change? | Standard database connectivity and cloud-based connector variant. |
| 18. Database/table meaning | How does a database record a change? | Rows/columns; SERVICE_ACCOUNTS is illustrative main table. |
| 19. Account key versus employee reference | How does a database record a change? | acct-a selected identifier, W-44 worker reference, stable valid identification supplied. |
| 20. Change table meaning | How does a database record a change? | SERVICE_CHANGES carries affected account key/action. |
| 21. Update/Insert/Delete table | How does a database record a change? | Three distinct actions for acct-a/d/c; acct-b unchanged. |
| 22. Deleted identifying reference | How does a database record a change? | Removed current row can still be identified through retained change information. |
| 23. Not executable/default configuration | How does a database record a change? | Names/rows illustrative, no SQL or universal column assumptions. |
| 24. Database trigger | How does a database record a change? | Approved event capture produces identifying changes. |
| 25. Checkbox insufficiency | How does a database record a change? | Capture/key/table/read/permissions must agree. |
| 26. Main conditions | How does a database record a change? | Complete baseline, continuous correct capture, valid identification and supplied outcomes. |
| 27. Query meaning | Finding the account and obtaining its values are different jobs | Key selects account; query supplies needed updated data. |
| 28. Schema/mapping meaning | Finding the account and obtaining its values are different jobs | Represented fields/use and input supplying value. |
| 29. JSON/API meaning | Finding the account and obtaining its values are different jobs | Selected valid acct-a/W-44/FIN fragment, not full response or runnable query. |
| 30. Key to value to represented output | Finding the account and obtaining its values are different jobs | Update selects acct-a, read supplies FIN, mapping represents FIN. |
| 31. Response shape boundary | Finding the account and obtaining its values are different jobs | Key/action isn't full account; no universal omitted-means-clear behavior. |
| 32. Correlation | Finding the account and obtaining its values are different jobs | Applicable matching/assignment; existing correct association supplied. |
| 33. Newly created external account | What happens to the new and deleted accounts? | acct-d already external; discovery isn't another external creation. |
| 34. Explicit supported deletion | What happens to the new and deleted accounts? | acct-c removal result supplied under reviewed supported handling, not empty-read inference. |
| 35. Identity/deletion scope | What happens to the new and deleted accounts? | One account deletion isn't employee-identity/all-systems deletion. |
| 36. Disable versus delete | What happens to the new and deleted accounts? | Status change can retain account; no inferred employment status. |
| 37. Responsibility diagram | What happens to the new and deleted accounts? | Database capture to connector collection to ISC handling; human verification separated. |
| 38. Diagram limitations | What happens to the new and deleted accounts? | Logical dependencies, not private transaction stages/order/success guarantee. |
| 39. Before/actions/after diagram | Why does acct-b remain when it was not returned? | Baseline a/b/c; Update a, Insert d, Delete c; result a/b/d. |
| 40. Unchanged account retained | Why does acct-b remain when it was not returned? | acct-b remains because omission from changes isn't deletion evidence. |
| 41. Count arithmetic | Why does acct-b remain when it was not returned? | 3 + 1 - 1 = 3, changed set and FIN despite equal totals. |
| 42. Change count versus objects/population | Why does acct-b remain when it was not returned? | Three entries aren't three new/live accounts or full current list. |
| 43. Failed capture variation | What if the query works but no update reaches ISC? | Correct/reachable query doesn't select account missing from change table. |
| 44. Empty-success evidence limit | What if the query works but no update reaches ISC? | No entries returned doesn't prove no application changes/current ISC data. |
| 45. Capture diagnostics | What if the query works but no update reaches ISC? | Relevant table/event/logic/key and actual row/query inspected. |
| 46. Integration actor | What if the query works but no update reaches ISC? | Operation-specific authority, not ordinary read implies tracking access. |
| 47. Tracking permissions | What if the query works but no update reaches ISC? | Documented read/write/cleanup scope, not unlimited business-data write. |
| 48. Re-initialization | What if the query works but no update reaches ISC? | Documented bookkeeping, no invented cleanup timing or unread-entry deletion. |
| 49. Authorized database owner | What if the query works but no update reaches ISC? | Specific approved supported requirements; no unrestricted-access shortcut. |
| 50. Membership/group/permission | Could a membership change bypass the account trigger? | Relationship/access object/allowed operation locally explained. |
| 51. Separate membership table | Could a membership change bypass the account trigger? | Changed relationship may not modify watched account row. |
| 52. Query versus selection | Could a membership change bypass the account trigger? | Query can return membership if asked, but capture must select affected account. |
| 53. Entitlement aggregation | Could a membership change bypass the account trigger? | Access-right/object information differs from account membership updates. |
| 54. DirSync | The connector determines how changes are found | AD directory-change mechanism, not database tracking recipe. |
| 55. AD delta permissions | The connector determines how changes are found | Replicating Directory Changes and Deleted Objects read, ordinary connection insufficient. |
| 56. JDBC group-delta boundary | The connector determines how changes are found | Account table mechanism doesn't support group-object delta. |
| 57. Okta profile/log split | The connector determines how changes are found | Users API for profiles, logs API for entitlements/deleted users, accounts-only delta. |
| 58. OU moves | The connector determines how changes are found | Directory container move requires documented full aggregation handling, not ordinary department edit. |
| 59. Okta retention | The connector determines how changes are found | 90-day log boundary; full account recovery current state, not historical event reconstruction. |
| 60. Connector qualification | The connector determines how changes are found | No universal token lifetime/permissions/deletion/account/group capability. |
| 61. Pagination versus change start | Two progress references can answer different questions | Page continuation and across-run change reference serve different purposes. |
| 62. Checkpoint | Two progress references can answer different questions | Generic recorded progress meaning, no universal property/private commit claim. |
| 63. Interrupted-read uncertainty | Two progress references can answer different questions | No inferred global rollback/full application/exactly-once replay. |
| 64. Recovery evidence | Two progress references can answer different questions | Actual records and execution, retained changes and supported recovery; start time not safe boundary. |
| 65. No guessed progress edits | Two progress references can answer different questions | Don't invent timestamp/clear reference/replay table without supported path. |
| 66. Full recovery scope/safeguards | Two progress references can answer different questions | Review existing-record/deletion effects; no bypass due to larger read. |
| 67. Last-modified versus effective date | What does “since the last run” actually measure? | Recorded today/effective next month aren't equivalent detection fields. |
| 68. Format/time/boundary qualification | What does “since the last run” actually measure? | Documented field/zone/inclusive-exclusive behavior, no guessing from phrase. |
| 69. Tracking completeness versus schedule | What does “since the last run” actually measure? | Recent schedule doesn't establish all relevant changes captured. |
| 70. Widened filter | What does “since the last run” actually measure? | Newly included unchanged population not necessarily in delta; supported refresh needed. |
| 71. ISC mapping/configuration only | What does “since the last run” actually measure? | Saving ISC config doesn't create external change events. |
| 72. Optimization versus delta | Would turning off optimization make the missing account arrive? | Full optimized skip and unoptimized comparison handling differ from record delivery. |
| 73. Single-account distinction | Would turning off optimization make the missing account arrive? | Specified account read versus change-information selection. |
| 74. Population refresh/reevaluation | Would turning off optimization make the missing account arrive? | Choose supported operations for config change, not universal scheduled-delta repair. |
| 75. Identity attributes | Where can the account change lead next? | Account department only supplies identity department through configured mapping. |
| 76. Identity processing/provisioning | Where can the account change lead next? | Modified identity event and access evaluation versus separate supported target writes. |
| 77. Main outcome scope | Where can the account change lead next? | FIN/correct owner/new/deleted reps, not every identity/output changed. |
| 78. Downstream consequences | Where can the account change lead next? | Collection can feed later access changes; separate outcomes checked. |
| 79. Configuration/history/accounts evidence | Check what the screen is evidence of | Intended config, actual execution and identified represented state differ. |
| 80. Five evidence questions | Check what the screen is evidence of | Availability, selection, account update, deletion and external delivery need different evidence. |
| 81. Search freshness | Check what the screen is evidence of | Actual record/execution/view timing before repeating collection. |
| 82. Original eight cases | Work through some changed conditions, cases 1–8 | Omission, missed trigger, arithmetic, partial page, filter, membership capture, retention, ISC-only comparison preserved. |
| 83. Independent STAFF/STAFF_GROUPS transfer | Review a new database proposal | Incomplete insert/update-only capture, unobserved deletes/memberships and insufficient connection proof. |
| 84. Transfer recovery/authority | Review a new database proposal | Key/query/maps/baseline/capture/permissions, preserve unread evidence, no absence-based deletion or fake historic recovery. |
| 85. Beginner narration | Whole lesson | Neutral values, causal bridges, full normal mechanism before variants, no biography, fixed quota or teaching-method preface. |

## Current primary-source checks

Fresh official checks on October 29, 2026. All ten cited pages were inspected for their relevant claims. Connector-specific setup and limits are not generalized across sources. General account-loading guidance and named connector behavior have different scopes: the main deletion is a supplied outcome under reviewed supported handling, not an unconditional conclusion from a Delete label.

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

The JDBC guide describes post-aggregation tracking re-initialization but does not establish private cleanup transaction timing or failed-run replay guarantees. Its sample names and trigger syntax are not copied as executable learner configuration. The Active Directory permission page names both Replicating Directory Changes and Deleted Objects read access. The loading guide supplies the OU-move full-aggregation guidance and Search timing. Okta's users/logs split and 90-day boundary remain specifically attributed to that connector.

Primary references, verification dates and author metadata stay outside the learner.

## Example assumptions and reasoning limits

Service-Production, SERVICE_ACCOUNTS/SERVICE_CHANGES, acct-a/b/c/d and W-44 are neutral teaching records, not observed operations. Account key acct-a is distinct from text worker reference W-44. Selected JSON is not a complete response, executable query or API request.

The completed full baseline contains acct-a/b/c. Account identification is valid, the starting reference and continuous capture are correct, relevant reads and source representation work, acct-a has an existing correct owner, and supported deletion handling has been reviewed.

External changes precede collection: acct-a OPS-to-FIN, externally created acct-d, already-deleted acct-c, unchanged acct-b. Change entries identify Update a, Insert d and Delete c. Completed supported handling yields acct-a/b/d and FIN. Omission of acct-b is not deletion evidence; deleting an application account is not an automatic employment/identity/all-system removal.

A missing trigger entry, separate membership-table change, partial paged read, wider filter, expired logs and ISC-only comparison change are independent variations. Query correctness does not establish selection. A delta count is not a complete live population or number of new accounts.

No universal source setting, progress-reference lifetime, transaction ordering, rollback, exactly-once replay, time boundary, cleanup timing, fixed schedule or duration is asserted. Correct supported recovery, scope and safeguards must be established. Current-state recovery does not reconstruct unavailable historical events.

Tracking bookkeeping authority is distinct from unrestricted business-data writes. No manual unread-entry deletion, guessed progress advancement or safeguard bypass is recommended. Account results, identity calculations and external delivery need distinct evidence.

## Assessments and transfer

All eight prior worked cases remain: unchanged acct-b omission; empty result after failed capture; 3 + 1 - 1 population arithmetic; partial page and unsafe timestamp advancement; expanded filter; uncaptured membership change; expired Okta logs; ISC-only ownership comparison and separate delivery/re-evaluation.

The independent STAFF/STAFF_GROUPS proposal exposes missing delete/membership capture, insufficient connection-test evidence, unsafe tracking cleanup and deletion by absence. Its answer develops account key/query/mappings/baseline, complete supported capture, authorized permissions, retained unread evidence, documented recovery, current-state verification and any separate target result.

## Editable diagrams

[Capture and account results](../../assets/AGG-004_beginner_capture_and_account_results.txt).
[Baseline, changes and result](../../assets/AGG-004_beginner_baseline_changes_and_result.txt).

Both match their inline text exactly. Maximum widths are 39 and 34 characters. All four historical assets remain unchanged.

## Verification status

Executed October 29, 2026 against the saved local files:

- Full saved learner read-through in three contiguous portions, followed by the wording pass and a fresh read of the edited passages. Final learner: 4,608 words. This is simulated author review, not observed independent beginner testing.
- All 85 prior purpose rows reconciled; eight worked cases and the STAFF/STAFF_GROUPS transfer retained. Ten reference rows cover ten freshly inspected official pages. Selected JSON parses with accountKey acct-a, text employeeRef W-44 and department FIN.
- Both editable diagrams match inline blocks exactly, maximum widths 39 and 34 characters. Three tables serve the change entries, connector comparison and five evidence questions. No visual quota was applied.
- Model/data check parses the initial acct-a/b/c collection and actual Update a/Insert d/Delete c entries. Applying the supplied successful handling yields acct-a/b/d, with acct-a FIN and unchanged acct-b retained. Three plus one minus one remains three. This check is not database, connector, deletion or tenant execution.
- No learner URLs, Markdown links, fictional employee names, em dash, TODO or revision footer. All 1,280 relative Markdown links across the learner, this record and three updated registers resolve. All 91 learner files remain; 33 beginner-explanation records exist; ROL-007 has no stub. Current registers agree on 33/91, 58 remaining, AGG-005 next and published AGG-004 still 2.0.
- npm test: all four navigation/disclosure tests pass.
- Local publication verifier against main 4ba5a300978aa741d0178fe33f1b9d14d9a5c532 with five expected changed learners passes: 91 available lessons, 91 revised-record associations, ten diagrams, eleven tables, 1,006 local content units and 414 assets. Live verification is false. The five local learners are SRC-008 and AGG-001 through AGG-004.
- git diff --check passes. The AGG-004 reference suffix starting with the historical revision 1.0 verification is exactly preserved.
- SHA-256 audit: 673 starting files become 676. Exactly four existing files change: AGG-004 learner and COURSE_REGISTER, EXAMPLE_REGISTER and REFERENCE_RECORDS. Exactly three files are added: this record and the two current diagram assets. No files are removed; 669 earlier files remain byte-identical, including the other 90 learners, earlier local work, historical AGG-004 record/assets and shared UI.
- HEAD remains 4ba5a300978aa741d0178fe33f1b9d14d9a5c532; staging is empty. No commit, push, Pages deployment, database/SQL/API/permission/tracking/capture/read/account/identity/provisioning or target operation occurred. Actual independent learner validation and graphical publication review remain separately pending.
