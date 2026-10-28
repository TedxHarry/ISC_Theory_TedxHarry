# AGG-002: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/AGG-002_Account_and_Entitlement_Aggregation.md) revised in place.
- Baseline revision 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [held values and object details](../../assets/AGG-002_held_values_and_object_details.txt) and [membership change and later object read](../../assets/AGG-002_membership_change_and_later_object_read.txt).
- Historical [two collection responsibilities](../../assets/AGG-002_two_collection_responsibilities.txt) and [separate observation times](../../assets/AGG-002_separate_observation_times.txt) stay unchanged. Current diagrams meet the 42-column rule.
- Only AGG-002 learner content and its course/author metadata change. Earlier local SRC-003 through SRC-008 and AGG-001 content/assets/records, all 91 learner files and site code/layout/style/navigation/manifest are preserved.
- Learner title changes to The group is in ISC. Does the account hold it? The navigation manifest already has a neutral topic title and is unchanged.
- Published revised snapshot remains 23 lessons through SRC-002; see [batch 2 verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003 through SRC-008 and AGG-001/002 revisions 2.0 remain local; published versions remain 1.0.
- No staging, commit, push or Pages deployment. Original ISC_Theory_Learning unchanged.
- Progress after revision: 31 of 91 individually revised, 60 awaiting revision. Next existing lesson: AGG-003, whose learner body wasn't opened. New authoring stays paused at reserved ROL-007.
- This task owns the AGG-002 reference section, replacing its legacy +## header with the current proper heading. Earlier author sections and the downstream tail starting at legacy AGG-003 are preserved.

## Explanation design and supplied conditions

The lesson establishes account, group, membership, entitlement and source meanings before the account and object reads. The normal result connects two held references with richer object details and adds inventory-only G-599, without granting it. Count, type, scope, timing and metadata variations then explain different evidence.

Invoice-Production and existing invoice-user replace the brand/employee story. The intended identity association is supplied and verified. The original employeeRef in the selected account sample is removed with narrative overhead: it isn't necessary to the held-ID/object comparison, and account-correlation meaning/evidence remains explicit.

Invoice-user holds G-520/G-521, account-b holds G-520 and account-c holds G-521. These are all accounts in the stated selected population. Three accounts therefore supply four membership occurrences and two distinct held identifiers. Object collection returns G-520 Invoice Reviewers, G-521 Archive Readers and G-599 Exception Reviewers, with no supplied member for G-599.

The account's groups attribute is entitlement-marked, multi-valued and connected to supported groups. GroupKey supplies Entitlement ID, label supplies Entitlement Name. The normal complete reads, actor visibility, correct mapping/linking and absence of protected-description blocking are supplied conditions. Two account-origin representations gain details; G-599 becomes known through object read. These aren't three new grants or necessarily three new ISC records.

The independent timeline observes invoice-user at 09:00 UTC with two memberships, supplies external G-520 membership removal at 09:20 and observes the still-existing group at 09:30. A later object read doesn't refresh the earlier account observation. T-22/T-90 project files are another independent transfer.

Current diagrams represent information relationships and a separate observation/change timeline. They don't assert private storage, automatic external change, simultaneous reads, universal order or an atomic snapshot. Maximum widths are 36 and 38 characters.

## Coverage reconciliation

81 purposes and clarifications are reconciled below. Counts check preservation, not required visual/case/word quotas or measured learning.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening inventory versus holding | Opening | G-520/G-521 held; group-read G-599 isn't a third membership. |
| 2. Account/identity/source/connector | Records | Local meanings and Invoice-Production context before process. |
| 3. Existing intended association | Records | invoice-user already linked to intended identity, not inferred from account name. |
| 4. Group/membership/entitlement | Records | Object, account-object relationship and ISC access representation differ. |
| 5. Group IDs/names | Records | G-520 InvoiceReviewers, G-521 ArchiveReaders, G-599 ExceptionReviewers; names aren't membership. |
| 6. Attribute/schema/type | Records | Named information, represented definitions and supported object category locally defined. |
| 7. Supplied direct memberships | Records | Normal account/group support/configuration and direct-access scope, hypothetical outcomes. |
| 8. Aggregation and account aggregation | Account read | Collects account attributes and supported associated access values. |
| 9. API/JSON | Account read | Interface and selected object/array/text structure, not full ISC API payload. |
| 10. Selected account data | Account read | invoice-user and two group IDs; narrative employee reference unnecessary to supplied owner association. |
| 11. Account correlation | Account read | Configured owner matching separate from group inventory; correct association supplied. |
| 12. Entitlement/multi-value flags | Account read | groups type and access meaning versus collection structure; phone-list counterexample. |
| 13. Account-origin entitlement records | Account read | Held identifiers can originate ISC entitlement representations before richer object details. |
| 14. External object existence | Account read | Creating representation doesn't create target group. |
| 15. Provisioning | Account read | Supported external changes, not rediscovery/regrant of existing membership. |
| 16. Entitlement aggregation | Object read | Object data under supported types/schema, including unheld objects. |
| 17. Three selected group objects | Object read JSON | IDs/labels/descriptions for G-520/G-521/G-599 preserved. |
| 18. Entitlement ID/Name | Object read | groupKey selects identification, label naming, field versus value. |
| 19. Description purpose | Object read | Object detail isn't list of account assignments. |
| 20. Entitlement catalog | Object read | Recorded inventory, not membership proof. |
| 21. Main enrich/new outcome | Object read | Two existing records gain details, G-599 newly known; no manual-description block supplied. |
| 22. Count distinctions | Object read | Returned/created/assignment totals differ; three definitions aren't three new records/grants. |
| 23. Linking conditions | Link | Entitlement-marked groups attribute, matching type name/connection, equal selected group IDs, same source. |
| 24. Automatic linking | Link | Documented conditions link held values with separately collected details, not grants. |
| 25. Relationship diagram | First diagram | Separate information branches meet, not simultaneous jobs/private storage model/write. |
| 26. Mapping meaning | Link | Which input supplies represented attribute locally defined. |
| 27. Label-for-ID failure | Link; case4 | InvoiceReviewers value doesn't equal groupKey G-520; re-read unchanged object doesn't fix account mapping. |
| 28. Schema designation risk | Link | Post-aggregation ID/Name changes can duplicate records/affect references; reviewed design not shortcut. |
| 29. Complete three-account table | Counts | invoice-user two, account-b G-520, account-c G-521. |
| 30. Membership occurrences | Counts | Four account-to-group relationships, distinct from three account rows. |
| 31. Distinct held objects | Counts | Only G-520/G-521, repeated relationship doesn't create another group. |
| 32. Known object inventory | Counts | Three definitions including G-599 with no held value in supplied complete population. |
| 33. Many-to-many/zero-member logic | Counts | Account can hold many, group many or none, totals needn't equal. |
| 34. Run summary versus catalog | Counts | Catalog includes earlier account/object collections; run reports own discovered population. |
| 35. Scope limits of absence | Counts | No holder within complete selected population isn't nobody anywhere under incomplete/filtered evidence. |
| 36. Identifier context | Types | Test versus production and group versus application-role code need source/type/value. |
| 37. Application versus ISC role | Types | External access object differs from business-assignment grouping. |
| 38. Multiple types | Types; case8 | Each supported type needs schema and read coverage. |
| 39. Indirect access | Types | Supported object relationships aren't extra direct membership on account. |
| 40. Permission/effective access | Types | Allowed operation and actual grants/restrictions locally defined; no complete calculation from two values. |
| 41. Direct connection/triggers | Read scope | Supported manual/scheduled entitlement runs separate from account control. |
| 42. Schedule evidence | Read scope | Recurring request isn't completed account/object collection proof. |
| 43. Selected types | Read scope | Groups-only success doesn't complete application-role inventory. |
| 44. Integration actor/authority | Read scope; case5 | Account readability doesn't prove group/detail permissions. |
| 45. Scope/filter | Read scope | Intended records/information and supported selection per operation. |
| 46. Extraction/mapping/input | Read scope | Correct schema can't supply absent/unselected description. |
| 47. Pagination | Read scope | First response isn't all selected objects. |
| 48. Endpoint | Read scope | Interface address/name isn't completed ISC responsibility. |
| 49. Multiple calls per account job | Read scope | Connector can assemble attributes using group-related calls without completing separate entitlement aggregation. |
| 50. Web Services SaaS example | Read scope | Hosted-service meaning; distinct documented account/group/change operations, not universal sequence. |
| 51. No universal read order | Order | Account-origin access first or object inventory first possible, depends needed outcome. |
| 52. Outcome-driven planning | Order | Review requires account relationship/details; unassigned inventory requires broader object coverage. |
| 53. Main supplied sequence | Order | Account then group with verified link, not connector-wide mandate or immediate refresh. |
| 54. Separate observations | Order/time | Two reads aren't a frozen target snapshot. |
| 55. UTC chronology | Timeline | 09:00 account twoIDs,09:20 external membership removal,09:30 G-520 object still exists. |
| 56. Who changed target | Timeline | Target removal separate from later read; deleting membership doesn't delete group. |
| 57. Old membership/new object | Timeline; case6 | Later object read doesn't refresh09:00 membership or reverse09:20 removal. |
| 58. Freshness | Timeline | Fact observation time, not one recent timestamp for all data. |
| 59. Files at different times | Timeline | New group file doesn't refresh older account export. |
| 60. Flat-file distinction | Files | Accounts supply held references; object file describes definitions, not assignment. |
| 61. CSV/template | Files | Rows/columns/source-specific headings and required ID match account entitlement values. |
| 62. Manual/single-type limitation | Files; transfer | Documented native flat-file entitlement mechanism has no recurrence/multiple types; supported design needed. |
| 63. Account-only boundary | Files | Schema creation doesn't implement unsupported object read. |
| 64. UI data/configuration | Evidence | Account records versus inventory versus Types/Schemas settings. |
| 65. History/start/completion | Evidence | Operation/types/status/count/errors and scoped result, not request-as-finish. |
| 66. Five evidence questions | Evidence table | Object existence/account holdings/owner/description/target change need different records. |
| 67. Search freshness | Evidence | Compare identified records/execution/view freshness, not one stale result. |
| 68. Metadata meaning | Metadata | Descriptive/governance information, distinct from target access. |
| 69. No name/description writeback | Metadata | Ordinary ISC edits aren't sent to source. |
| 70. Manual preservation | Metadata; case7 | Fresh object description can coexist with protected manual wording; inspect responsibility/state. |
| 71. No destructive descriptive shortcut | Metadata | Don't clear protected value/change schema merely to force display match. |
| 72. Access request/certification | Metadata | Configured request/review locally defined; readable details don't approve/make universally requestable/retain rights. |
| 73. Missing membership versus object | Deletion | Other holders or zero holders possible, account aggregation doesn't delete entitlement records. |
| 74. Missing object investigation | Deletion | Actual absence versus permissions/filter/pages/stale input needs evidence. |
| 75. Partial-read consequences | Deletion | Review completeness/existing records before cleanup or broader reruns. |
| 76. Observation and downstream writes | Deletion | Separate authorized fulfillment/target evidence, though collected data can feed configured provisioning. |
| 77. Original cases1–4 | Cases1–4 | Counts, inventory-only object, sparse details and label-ID mismatch retained. |
| 78. Original cases5–8 | Cases5–8 | Denied group read, independent timestamps, manual metadata and selected-type scope retained. |
| 79. Project-file transfer | Final exercise | T-22 held, T-90 inventory-only; source/schema/template/owner/time/import evidence and unsupported hourly native schedule. |
| 80. Transfer target change | Final exercise | Any new membership needs separately authorized supported operation/result; don't change access to fix inventory evidence. |
| 81. Mentor structure/title | Whole lesson | Direct account-focused title, complete two-read mechanism before variants, neutral records, necessary terms, preserved assessments, no quota/source links. |

## Primary references and applicability

Fresh official-document checks were made on October 26, 2026. Account-derived entitlements, object details, automatic linking, cumulative catalog totals, scoped types, manual metadata and operation-specific authority remain distinct. The Web Services examples support multi-call account collection rather than a universal external call layout.

| Official reference | Claim / section and applicability |
|---|---|
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Direct-connect manual/scheduled and all/specific-type collection; account-only connector boundary; flat-file manual-only/single-type mechanism and source-specific template ID matching. A run's discovered count can differ from total catalog records created by multiple collection runs. No run-time guarantee or unsupported schedule is invented. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account attributes, supported collection triggers, execution/history evidence and independent Search freshness. Account result coverage and object-type coverage are separate questions; no new fixed duration, mode equivalence or full-population inference is made. |
| [Managing source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account entitlement marking, multi-valued shape and linking conditions: in this example groups attribute/type names agree and account G-520 matches designated groupKey G-520. Matching readable labels alone isn't the stated link. |
| [Creating and managing entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Supported type/schema representation, selected ID/Name and connected account attributes. Changing ID/Name designations after aggregation can create duplicate entitlements. Supported object relationships can describe indirect access; no complete effective-access calculation is promised from two direct memberships. |
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Recorded inventory/details and account-created entitlement representations; account aggregations don't delete entitlement records. Display Name/Description edits aren't sent to the source, and manual values can be preserved against aggregation. Request configuration and review decisions aren't automatic consequences of descriptive collection. |
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector/direct-connect/file distinctions and source account views. The correct source, account and association matter; a schema definition isn't evidence of delivered records or target membership changes. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account ownership uses configured comparisons rather than equal-looking account-name digits. The account's existing correct association is an explicit supplied condition; group inventory alone doesn't establish it. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | External account/access changes are separate supported operations. Observed membership isn't a newly issued grant. Collected data can feed subsequent configured change decisions, so complete workflows aren't declared universally consequence-free. |
| [Web Services SaaS HTTP operations](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/http_operations.html) and [aggregation examples](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/json_aggregation.html) | Account aggregation, group aggregation and entitlement-add/remove are distinct supported operations. Account collection can use multiple external calls. Endpoint names alone don't establish the completed ISC responsibility. These are connector-specific supporting examples, not a complete invoice-application configuration or a claim every connector uses the same calls. |

The native flat-file entitlement mechanism's manual/single-type limitation is not generalized to all possible external ingestion designs. The independent timing example does not establish new source freshness or actual target execution.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Three accounts/four memberships | Count 3 accounts, 4 relationships, 2 held IDs and 3 definitions separately. | Different object/relationship totals must equal. |
| G-599 discovered | No supplied account-membership change or provisioning. | Object discovery assigns it. |
| Membership before description | Establish object read/input/scope/mapping; sparse details don't negate membership. | Missing rich metadata means invalid access. |
| Label versus G-520 | Fix supported account-side identifier relationship; reread doesn't change bad mapping. | Matching label/object rerun repairs ID mismatch. |
| Accounts allowed/groups denied | Inspect group-read authority through responsible owner; no membership change needed. | One read permission proves every operation or access should change to fix inventory. |
| Later group read | G-520 object exists, but account observation remains older and removal isn't reversed. | Latest job refreshes every related fact. |
| Manual description retained | Inspect manual-update preservation/ownership, not unrelated account rerun. | Old visible wording always means read failure. |
| Groups-only run | Verify separately configured/read application-role coverage. | One selected type proves all types. |
| T-22/T-90 files | Preserve membership/inventory distinction, verify owner/template/scope/time/actual imports, choose supported ingestion and separate authorized change if needed. | Object import assigns all rows and supplies native hourly flat-file recurrence. |

All eight numbered cases and worked reasoning remain, with the project-file transfer. The title and examples remove the fictional employee without omitting ownership verification or any assessment purpose.

## Conditions and limits

- No actual tenant, source, schema/type, account/identity, actor credential/permission, aggregation/schedule/import, manual metadata, membership or provisioning operation.
- Selected JSON account/group fragments aren't complete API responses or configuration. Existing correct association and supported complete reads are supplied.
- Main account memberships are direct. Indirect grants and effective access require actual supported relationship and target-rule evidence.
- Source/type/identifier, field designation/value, account-held reference and object detail aren't interchangeable. No universal global ID or readable-label equivalence is inferred.
- Catalog/discovered/created/relationship counts have distinct scope. G-599 is unheld within the supplied complete selected population, not a claim about every account under unknown scope.
- Sequence and timestamps are supplied, not real observations, required connector order or automatic membership refresh.
- Manual metadata preservation can explain retained text; ordinary name/description edits don't provision to source. Schema ID/Name changes require duplicate/reference impact review.
- Account-only and native flat-file limitations require supported design, not invented capabilities or native schedulers.
- Account aggregation doesn't delete entitlement records. Partial/missing data isn't proof of target object deletion or account revocation.
- Read output can feed later configured provisioning; discovery itself isn't a grant or universally consequence-free workflow.
- Source URLs, dates and revision metadata stay author-only. No learner biography, source/course links, em dashes, learning-method announcement or fixed quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and navigation tests don't establish observed comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks aren't observed learner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate whitespace checks cover both current diagram assets and this new record.
- Checked 876 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision, including its neutral account-focused title. Both current diagrams match their inline blocks exactly; maximum widths are 36 and 38 characters, below the 42-column limit.
- Parsed both JSON samples. Invoice-user holds G-520/G-521. Three unique group objects have the expected labels and nonempty descriptions. Every held ID has a definition; G-599 is the only inventory-only ID in the supplied population.
- Parsed the account table: three accounts, four membership occurrences, two distinct held IDs and three object definitions. Per-row counts and the main account's JSON memberships agree.
- Checked independent timeline order at 09:00, 09:20 and 09:30 UTC. A teaching-set removal leaves G-520 absent from the changed account while the group definition still exists; the original 09:00 observation remains unchanged. These are model/data checks, not actual target or connector execution.
- All eight numbered original cases and worked answers remain, with the project-file transfer and worked answer. The coverage table reconciles 81 purposes; nine primary-reference rows map ten official pages.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company/numbered-account identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 31 of 91 individually revised, 60 awaiting revision. SRC-003 through SRC-008 and AGG-001/002 revisions 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. AGG-003 is next; its learner body wasn't opened.
- Reference-register earlier prefix remains exactly 319918 characters with the same SHA256 hash; the downstream tail beginning at legacy AGG-003 remains 671054 characters with the same hash. Only the owned AGG-002 section is replaced, including its corrected heading.
- SHA256 comparison with the start-of-AGG-002 snapshot: 390 files became 393. Only AGG-002 learner content and the three course/author metadata files changed. Two current diagrams and this record are new. All 386 other existing files are unchanged; zero files removed. Earlier local SRC-003 through SRC-008 and AGG-001 content/assets/records remain preserved. Navigation manifest is unchanged.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
