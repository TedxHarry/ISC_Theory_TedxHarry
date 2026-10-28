# SRC-007: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current [learner source](../../lessons/SRC-007_Filters_and_Collection_Scope.md) revised in place.
- Baseline revision 1.0 is recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [required population and active filter](../../assets/SRC-007_required_population_and_active_filter.txt) and [read scope to view evidence](../../assets/SRC-007_read_scope_to_view_evidence.txt).
- Historical [active-only scope comparison](../../assets/SRC-007_active_only_scope_comparison.txt) and [collection evidence boundaries](../../assets/SRC-007_collection_evidence_boundaries.txt) remain unchanged.
- Only SRC-007 learner content and its course/author records are revised. Earlier local SRC-003 through SRC-006 content/assets/records and all 91 learner files stay preserved. No shared site code/layout/style/navigation/manifest changes.
- Published revised snapshot remains 23 lessons through SRC-002; see [batch 2 verification](../PUBLICATION_2026-10-26_BATCH_2.md). SRC-003 through SRC-007 revisions 2.0 remain local; their published versions remain 1.0.
- No staging, commit, push or deployment. Original ISC_Theory_Learning remains unchanged.
- Progress after revision: 28 of 91 individually revised, 63 awaiting revision. Next existing lesson: SRC-008; its learner body was not opened. New authoring stays paused at reserved ROL-007.

## Explanation design and supplied conditions

The required population and concrete account classifications are established before filter terminology. Correct WEST/HUMAN inclusion is evaluated on all four records before the extra ACTIVE condition is introduced. Filter direction, authority/location, syntax, access scope, completeness, modes and existing-record effects then explain different causes and consequences of absence.

The neutral source is Service-Production. Four sample keys are west-disabled, west-active, east-active and west-service. Their actual region/kind/status fields determine classification; names aren't inferred as reliable source attributes. The employee biography/number, ServiceDeskFlow brand and numbered accounts are removed.

The supplied comparable inventory is 500 accounts overall, with 120 WEST/HUMAN accounts and 380 outside the agreement. Of the 120, 110 are ACTIVE and ten DISABLED. These are account counts, not counts of unique people. All ten disabled accounts still exist and retain their target memberships.

For the main first-collection example, no prior ISC record for west-disabled is assumed. The integration actor can read all 120 intended records, the supported native inclusion query adds ACTIVE, and paging/extraction correctly consumes all 110 selected accounts. This identifies the supplied filter defect without inventing a permission, parser or page-continuation cause.

Owners approve dropping ACTIVE while keeping WEST/HUMAN. The supplied appropriate collection represents all 120 intended accounts, with identifiers and categories checked. The target stays unchanged; west-disabled remains disabled with memberships, while EAST/SERVICE exclusions remain. No real read/configuration/target operation was performed.

A distinct existing-record variation explains applicable full-aggregation deletion settings and authoritative consequences. A separate pagination case returns 100 with a cursor. The independent payroll transfer needs ACTIVE/FUTURE/TERMINATED populations but supplies only ACTIVE changed today.

The condition diagram compares choices, not two actual jobs or all 500 accounts. The evidence diagram guides human comparisons, not private backend stages or universally available filter controls. Maximum widths are 31 and 39 characters.

## Coverage reconciliation

86 purposes and clarifications are reconciled below. Counts document preservation, not a required lesson format or actual learning result.

| Purpose | Current location | Preserved reasoning |
|---|---|---|
| 1. Opening successful wrong population | Opening | 110 selected active versus120 intended including10 disabled; target records still exist. |
| 2. Account/identity/source/connector/aggregation | Population | Local meaning before relying on ISC context. |
| 3. Entitlement/membership | Population | Rights and their account references need collection coverage too. |
| 4. Agreed population | Population | All WEST HUMAN accounts, including disabled, Service-Production context. |
| 5. Outside scope responsibility | Population | EAST/SERVICE excluded here, not declared safe or governed elsewhere. |
| 6. Service account classification | Population | Software/service use; supplied kind classification, not username-prefix inference. |
| 7. Attribute and sample records | Population table | Region/kind/status and four neutral distinct keys. |
| 8. Representative decision table | Population table | west-disabled/west-active included; east-active/west-service excluded. |
| 9. Comparable supplied reads | Population | Same intended environment/source state; no tenant observation. |
| 10. Filter/predicate | Selection | Condition evaluated against record, direction matters. |
| 11. Inclusion versus exclusion | Selection | Matching can keep or discard depending mechanism; no universal filterString direction. |
| 12. Normal intended decision | Selection | WEST AND HUMAN, explained per sample record before bad variation. |
| 13. AND | Selection | Every predicate required; status irrelevant to correct main scope. |
| 14. ACTIVE defect | Selection | Disabled record fails extra condition although it belongs to population. |
| 15. Population arithmetic | Selection | 500overall=120intended+380outside;120=110active+10disabled. |
| 16. Account versus people counts | Selection | Several accounts can belong to one person. |
| 17. Conditional comparison diagram | First diagram | No ACTIVE still retains WEST/HUMAN, not all500 or two jobs. |
| 18. Conceptual versus executable expression | Selection | No invented syntax/actual property for hypothetical source. |
| 19. OR | Logic | WEST OR ACTIVE admits activeEAST and service accounts without HUMAN boundary. |
| 20. Parentheses | Logic | WEST AND(ACTIVE OR DISABLED) differs from(WEST AND ACTIVE)OR DISABLED with separate HUMAN condition. |
| 21. NOT and unknown input | Logic | Reverses Boolean result; missing-field semantics require mechanism-specific evidence. |
| 22. Representative validation | Logic | Boundary/disabled/unusual allowed accounts plus exclusions evaluated before syntax. |
| 23. Read actor/authorization | Visibility | Integration account/application identity and read permissions differ from admin view. |
| 24. Destination/environment | Visibility | Test success isn't production coverage proof. |
| 25. Filter versus permission | Visibility | Choosing less doesn't prove actor can't read outside selection. |
| 26. Main actor assumption | Visibility | All120 accessible; filter diagnosis requires supplied actualquery/paging evidence. |
| 27. Native filter | Location | Target-side query can narrow returned records. |
| 28. Resource-object filter | Location | Represented objects evaluated in supported integration after retrieval. |
| 29. Post-retrieval impact | Location | Already-read data/network/target work isn't reduced automatically by later discard. |
| 30. SDK | Location | Toolset for integrations includes filtering, not universal standard-connector grammar/property. |
| 31. Extraction/mapping | Location | Select returned records/values versus supply represented fields; failures differ from intentional filtering. |
| 32. Human evidence trace | Second diagram | Destination/actor/native request/paging/filter/extraction/records/view/freshness, not private pipeline. |
| 33. Evidence boundary comparison | Boundary table | Concrete artifacts distinguish environment/authority/upstream exclusion/interpretation/view absence. |
| 34. API/read query filters | Viewing | Read result selection doesn't mutate aggregation configuration. |
| 35. UI/report viewing selection | Viewing | Already collected disabled record can be hidden; clearing view isn't collection repair. |
| 36. Account correlation | Viewing | Configured owner association differs from never collected account; inspect source record first. |
| 37. Actual syntax conditions | Mechanism | Field/operator/quoting/case/null rules belong to the specific filter. |
| 38. Okta SaaS example | Mechanism | Documented status eq ACTIVE inclusion; hosted-service meaning; not transferable syntax. |
| 39. Types/Boolean/text false | Mechanism | Kind and actual values matter; missing isn't Boolean false or quoted false. |
| 40. Null versus omitted | Mechanism | Explicit marker differs structurally; NOT WEST cannot silently classify unknowns universally. |
| 41. Unknown classification | Mechanism | Agreed investigation/handling, not silent safe exclusion. |
| 42. Main known fields | Mechanism | Exact present attributes let supplied logic be reasoned without parser invention. |
| 43. Account versus access scope | Access coverage | Included account doesn't prove full membership/object detail coverage. |
| 44. Entitlement aggregation/type | Access coverage | Access-object inventory and per-account membership differ. |
| 45. Membership filtering | Access coverage; case8 | Reduced representation isn't target revocation. |
| 46. Filter interaction | Access coverage | Restricted group catalog doesn't prove account membership same restriction. |
| 47. Entra ID example | Access coverage | Separate user/group/group-membership settings and account-over-group precedence are connector-specific. |
| 48. Reference versus details | Access coverage | Membership reference can lack descriptive object, object can lack account holder. |
| 49. Coverage evidence | Access coverage | Expected account IDs/memberships/access-object IDs/scopes, not only total. |
| 50. Pagination/page size | Completeness | One page size doesn't define whole population. |
| 51. Cursor and alternatives | Completeness | Supported continuation uses cursor/offset/link as actual interface dictates. |
| 52. HTTP/status | Completeness | 200 individual request success doesn't prove all pages consumed. |
| 53. Completeness diagnostics | Completeness | Continuation/terminal evidence/duplicates/extraction/errors separate from business filter. |
| 54. Equal counts wrong records | Completeness; case1 | One omission plus unintended inclusion can preserve120. |
| 55. Boundary categories | Completeness | Disabled/missing classification/region/category-change examples checked. |
| 56. Main complete selected pages | Completeness | Ten disabled never selected, not lost in paging; supplied evidence not live test. |
| 57. Full aggregation | Modes | Full within configured scope, not permissions/filter/environment bypass. |
| 58. Delta | Modes; case5 | Supported changes since point; unchanged absence isn't source deletion. |
| 59. Scope widening/backfill | Modes | Next delta doesn't prove newly included unchanged records backfilled; supported plan needed. |
| 60. Optimization | Modes | Unchanged processing skip differs from population filter/change feed. |
| 61. Single-account operation | Modes | One account read/lookup doesn't establish listing selection; operation-specific support. |
| 62. Trigger choice | Modes | Manual/scheduled doesn't change scope. |
| 63. Snapshot | Modes | Complete state for scope/time differs from changes-only input. |
| 64. Flat-file upstream scope | Modes; transfer | Export selection/status/date/columns/time bound even perfectly consumed file. |
| 65. Before risky new full read | Modes | Review current records/mode/deletion/support before production validation. |
| 66. First versus existing record | Deletion | Main first collection has no prior west-disabled ISC record; later-filter variation separate. |
| 67. Enable Account Deletion | Deletion | Applicable full-aggregation missing-account removal in ISC, not target delete command. |
| 68. Deletion percentage/threshold | Deletion | Safeguard limit/cancel-warning role, not legitimacy or completeness proof; no rounding recipe. |
| 69. Safeguard correction | Deletion; case7 | Disabling doesn't fix scope loss or validate smaller response. |
| 70. Single-account not-found rule | Deletion | Documented action leaves account unchanged; deletion processing during full source aggregation. |
| 71. Authoritative/profile effects | Deletion | Locally defined origin/profile mapping; applicable removal analysis may reassign/delete, no universal person/other-account deletion. |
| 72. Provisioning and dependencies | Deletion | Filter itself doesn't revoke/disable; later access logic must be assessed separately. |
| 73. Disabled membership retention | Deletion | Disabled can retain target rights relevant to re-enable/governance. |
| 74. Approved scope correction | Correction | RemoveACTIVE, keepWEST/HUMAN; appropriate collection returns120 includingdisabled. |
| 75. Unchanged target | Correction | Still disabled/memberships retained; excludedEAST/SERVICE remain excluded; visibility not grant. |
| 76. Verification by identifiers | Correction | New120 total insufficient without membership of intended account set. |
| 77. Frontend evidence | Correction | Planned config/safeguards, history execution/count/time and individual account record distinct. |
| 78. Search freshness | Correction | Account change can precede searchable view; compare data/view/execution before rerun. |
| 79. Coverage gap | Correction | Agreed governance population versus information available; job success doesn't close gap. |
| 80. Original cases1–2 | Cases1–2 | Equal counts and WEST OR ACTIVE boundary mistakes retained. |
| 81. Original cases3–4 | Cases3–4 | Actor visibility versus badbusinessdata; firstpage success versus complete result. |
| 82. Original cases5–6 | Cases5–6 | Unchanged delta absence isn't deletion; view filter isn't collection defect. |
| 83. Original cases7–8 | Cases7–8 | Existing-source safeguard consequences and membership filtering-not-revocation retained. |
| 84. Payroll transfer | Final exercise | RequiredACTIVE/FUTURE/TERMINATED versus ACTIVE changed-today partialfile. |
| 85. Transfer evidence/consequences | Final exercise | Status/effective-time/full-change contract/IDs/completeness/unknowns/existing authoritative effects; no inferred termination/removal. |
| 86. Mentor pacing and preservation | Whole lesson | Neutral records, normal selection before variants, first-use terms, all eight cases/transfer; no source links/biography/quotas. |

## Primary references and applicability

Official documentation was freshly checked on October 26, 2026. Source filtering facilities, actual connector examples, API result selection and aggregation settings are kept distinct. Supporting account-correlation documentation was also checked rather than treating a person-view absence as proof of collection failure.

| Official reference | Claim / section and applicability |
|---|---|
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Full/optimized versus supported delta reads, single-account operation boundaries, account deletion during full source reads, Enable Account Deletion and Percentage of Deleted Accounts Allowed safeguards, authoritative-account consequences, execution history and Search freshness. A full read remains bounded by configured source selection and visibility. The lesson does not prescribe threshold values, replay/delta tokens, private retry algorithms or production experiments. Full/partial and record/target changes remain distinct. |
| [Filtering using the connector SDK](https://developer.sailpoint.com/docs/tools/sdk/typescript/filter/) | Native source filtering and resource-object-side filtering are distinct facilities; SDK evaluator/property types, comparisons and composite logic have a particular supported language. The lesson explains match direction as something to establish for the actual mechanism, not as a universal filterString inclusion/exclusion rule. No SDK recipe is asserted to work on every standard connector, and post-retrieval filtering is not claimed to reduce target read exposure. |
| [Okta SaaS supported aggregation filters](https://documentation.sailpoint.com/connectors/saas/okta/help/saas_connectivity/okta/supported_agg_filters.html) | Concrete inclusion example status eq "ACTIVE" and combined AND/OR expressions. Its syntax and matching behavior belong to that supported setting. The service example's conditions are explicitly conceptual, not copied Okta defaults or a runnable ISC expression; case/null/invalid-input behavior requires the real mechanism's evidence. |
| [Microsoft Entra ID aggregation, filter and partitioning settings](https://documentation.sailpoint.com/connectors/microsoft/entra_id/help/integrating_entra_id/aggregation_settings.html) | Separate user, group and group-membership filters, and documented account-filter priority over group filters, including groups related to included accounts. This is a scoped connector example, not universal independence or precedence. No advanced-query flags, partitioning values, feature changes or syntax recipe is provided. Membership exclusion reduces read visibility rather than proving target revocation. |
| [Aggregating entitlements](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html) | Access-object collection and type-specific scope differ from account and membership reads. Access-object inventory is not per-account assignment. The lesson does not promise all entitlement types or permissions from a completed account count. |
| [Web Services SaaS response mapping](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/response_mapping.html) | Root and response paths select represented input. Incorrect extraction/mapping must be separated from intentional population filtering. The lesson does not invent a universal skip/reject behavior or claim a schema definition supplies absent response data. |
| [Web Services SaaS aggregation](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/json_aggregation.html) | Concrete supported response/paging configuration and cursor-based GraphQL pagination illustrate that completeness depends on the read's supported continuation. The 100-account/cursor scenario is fictional and not this connector's default page size. HTTP request success is not a completeness proof. |
| [Standard API collection parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/) | API result filtering and pagination select the results of a read query, not the source aggregation configuration. The lesson does not copy endpoint defaults, maximums or query syntax into target/connector collection, or assume every API uses offset pagination. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching/associating an already collected account with an ISC identity is separate from collecting the record. A person-view absence can require ownership evidence rather than population-filter changes; no matching-order or rerun procedure is added. |


Entra ID's prioritization of account filters over group filters is confirmed on its aggregation settings page; the lesson doesn't prescribe those settings for other sources. Okta's supported status selection isn't presented as hypothetical service-source syntax. SDK resource filtering isn't presented as every standard connector's filterString contract.

Single-account not-found behaviour is scoped to the documented aggregation action. No general promise that every connector lookup shares population-query filters, or that deleting/excluding one account immediately deletes every related identity or external account, is made.

## Assessment preservation and accepted reasoning

| Original assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| Matching120 total, wrong members | Compare identifiers/categories, not only counts. | Equal totals prove coverage. |
| WEST OR ACTIVE | Active EAST service account passes; required HUMAN/WEST conditions need correct logic. | OR preserves the original boundary. |
| Integration actor sees less | Compare destination/operation/authority before editing business data. | Administrator visibility proves integration visibility or incorrect region. |
| Successful first page | Check continuation/terminal-page/extraction/error evidence. | HTTP200 proves complete selected population. |
| Delta omits unchanged account | Check mode/change state and account existence independently. | Missing change entry proves deletion. |
| View hides disabled record | Clear view can reveal existing account without changing collection. | Display absence proves collection defect. |
| Filter halves existing population | Review intended exclusion/mode/records/completeness/deletion safely; disabling guardrail isn't diagnosis. | Removing safeguard validates scope or repairs missing data. |
| Membership omitted | Read visibility differs from target membership; inspect access scope and external result. | Account inclusion proves full access visibility or membership filter revokes rights. |
| Payroll export | Establish full/change and required statuses/time/IDs/completeness/unknown handling, review authoritative effects. | Successful partial import is complete replacement inventory. |

All eight numbered cases and worked answers remain, together with the payroll-export transfer. Account/person references are neutralized while preserving each original reasoning purpose.

## Conditions and limits

- No actual tenant, source, account, identity, actor credential/permission, filter, read, deletion setting, schema/mapping, Search query, correlation, provisioning or target operation.
- Main counts and complete query consumption are supplied teaching evidence, not a verified real inventory or connector run.
- Conditions are conceptual except the explicitly scoped documented Okta example. No universal filter direction/grammar/case/null/unknown evaluation or SDK setting on every connector is invented.
- Filtering after retrieval doesn't retroactively prevent target data exposure or guarantee smaller network/query work.
- Account selection, membership selection, access-object inventory and view filters are distinct. Their actual interactions require connector evidence.
- Full reads remain scoped. Changes-only output and selected files aren't replacement snapshots; widening scope doesn't guarantee next-delta backfill.
- Existing-record deletion settings require applicable full-run and safeguard review. No percentage recommendation, rounding algorithm, atomic rollback, guardrail bypass or production experiment is prescribed.
- Account deletion in ISC and authoritative identity analysis don't establish external account deletion, membership removal or completed termination.
- A single-account lookup and a population iteration can have different documented selection. No unsupported bypass or universal single-account deletion handling is asserted.
- Configuration, execution history, represented record, ownership and searchable view have different evidence/freshness.
- Source URLs, dates and revision metadata remain author-only. No learner biography, source/course links, em dashes, learning-method announcement or fixed quota.
- Actual beginner validation, full graphical review and formal approval remain pending. Author checks and site tests aren't measured learner comprehension.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks don't establish observed beginner comprehension.
- Fresh `git diff --check` passed without diagnostics. Separate whitespace checks cover the two current diagram assets and this new record.
- Checked 846 local Markdown targets across eight documents: teaching specification, course register, README, reference register, example register, this record, batch 2 publication record and publishing guide. Zero missing targets.
- Saved learner source matches the reviewed revision. Both current diagram assets match their inline blocks exactly; maximum widths are 31 and 39 characters, below the 42-column limit.
- Checked all four supplied table records against WEST AND HUMAN: the stated decisions agree. Adding ACTIVE excludes the required disabled example while retaining the allowed active one; EAST/SERVICE examples remain outside the intended rule.
- Checked the supplied arithmetic: 500 = 120 + 380 and 120 = 110 + 10. Independently evaluated the active EAST service-account OR counterexample and the disabled EAST human-account grouping counterexample. These validate the teaching logic, not actual connector syntax, a real 500-account inventory or a tenant read.
- All eight original numbered cases and worked answers remain, with the payroll-export transfer and its worked answer. The coverage table reconciles 86 purposes; the primary-reference table contains nine entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company identifiers, em dashes, revision metadata or verification placeholder.
- Saved course register section/current status rows, current reference section and example row match intended updates. Progress is 28 of 91 individually revised, 63 awaiting revision. SRC-003 through SRC-007 revisions 2.0 remain local; published revised snapshot remains 23 lessons through SRC-002. SRC-008 is next; its learner body was not opened in this task.
- SHA256 comparison with the start-of-SRC-007 snapshot: 381 files became 384. Only SRC-007 learner content and the three course/author metadata files changed. Two current diagrams and this record are new. All 377 other existing files are unchanged; zero files removed. Earlier local SRC-003 through SRC-006 content/assets/records remain preserved.
- All 91 learner files remain. HEAD stays `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging stays empty. No commit, push or Pages deployment; original ISC_Theory_Learning unchanged.
- No actual ISC/connector/target operation. Actual beginner validation, full graphical review and formal approval remain pending.
