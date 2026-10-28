# COR-001: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- [Learner source](../../lessons/COR-001_Why_Importing_an_Account_Leaves_a_Relationship_to_Establish.md) revised in place. Original revision 1.0 recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [collected account and missing match](../../assets/COR-001_collected_account_and_missing_match.txt) and [correct reference and verify relationship](../../assets/COR-001_correct_reference_verify_relationship.txt).
- Historical [collection and relationship](../../assets/COR-001_collection_and_relationship.txt) and [verified relationship correction](../../assets/COR-001_verified_relationship_correction.txt) remain unchanged. Their 45/47-column widths are historical, not current validation.
- Existing [tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remains local 2.0/published 1.0, unchanged.
- Current learner and course/author metadata revised, with two new diagrams and this record. Prior lessons, all 91 routes, site code and publication files preserved. No new navigation module is added.
- Individually revised: 47 of 91; 44 await. This begins Module 7's individual revision pass. Published revised snapshot remains 23 through SRC-002; later revisions through COR-001 stay local.
- Next COR-002 learner body not opened. New authoring remains paused at reserved ROL-007, no stub. No commit, push or deployment.

## Teaching decisions

The opening separates a collected record from a person relationship. Account/schema designations are explained before comparisons. Configured employeeRef and designated-name default paths are both checked before accepting the uncorrelated result.

The approved reference correction completes the normal data-to-relationship mechanism before expanding to external state, views, changed configuration, manual persistence and wrong matches. Neutral source/field/account examples replace biography and pseudo identity IDs without removing any matching conditions.

Ownership correctness is separate from match success, and person-linked governance is separate from source inventory. The text does not claim uncorrelated accounts vanish or lose external access, nor that all possible inventory/review is unavailable. Human investigation stays separate from automatic relationship evaluation.

All original conditions, eight cases and transfer purposes remain. Counts arise from this topic rather than quotas. No forced personal correlation, destructive reset, licensing promise, private pipeline or guaranteed target outcome is introduced.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Retained reasoning / condition |
|---|---|---|
| 1. Opening responsibility | Opening | Account imported and identity present do not establish the relationship between them. |
| 2. Identity/account distinction | Recognition section | One identity can own HR/directory/payroll accounts with different identifiers. |
| 3. Source/connector/aggregation | Recognition section | Configured representation, integration behavior and read responsibility explained. |
| 4. Attribute/profile/authority | Recognition section | Account versus identity fields; shared profile and authoritative identity establishment. |
| 5. Main population boundary | Recognition section | HR-Production/Employees/hr-record already establishes intended identity; Payroll is not authoritative. |
| 6. Account recognition | Recognition section | Account ID accountKey=pay-account supports finding the same record on later reads. |
| 7. Schema-designated Account Name | Recognition section | loginName=pay.user is selected Account Name; displayName Worker A is another field. |
| 8. Schema meaning | Recognition section | Represented fields and identifier/name designations are configuration, not every visible label. |
| 9. Correlation definition | Recognition section | Match and associate account with identity, rather than copy a field or recognize the same source account. |
| 10. Null scope | Matching section | Missing employee reference doesn't imply missing account record. |
| 11. Identity evidence | First table | Employees, text identificationNumber W-107, identity name worker-w107, friendly Worker A. |
| 12. Account evidence | First table | Correct established HR account versus collected payroll key/login/display/reference. |
| 13. Configured path | First table | One employeeRef/identificationNumber pairing and no alternative configured match. |
| 14. Default exclusion | First table | No identity name pay.user; friendly labels don't supply a default comparison. |
| 15. Recorded initial result | First table | Uncorrelated source record and absent association on intended employee identity. |
| 16. Field meaning and distinct identifiers | Matching explanation | Employee reference is a person reference; payroll key/login needn't equal it. |
| 17. Missing configured input | Matching explanation | Null supplies no intended reference match; do not universalize the result without other paths. |
| 18. Preset correlation | Matching explanation | Source-type initial attribute pairings must be inspected with actual edits. |
| 19. Default correlation | Matching explanation | Designated Account Name to identity name, case-insensitive, not arbitrary full-name comparison. |
| 20. Main default outcome | Matching explanation | pay.user differs from worker-w107 and matches no other name. |
| 21. Logical evidence diagram | First diagram | Separate records and configured/default results; human owner check separated. |
| 22. Same run possible | Diagram explanation | Collection and correlation responsibilities needn't be separate jobs; no private pipeline claim. |
| 23. Approved owner evidence | Correction section | Exact payroll account confirmed for W-107 by responsible owner. |
| 24. Cause-based data repair | Correction section | Publish employeeRef without renaming login, changing valid reference or authority. |
| 25. Input must reach ISC | Correction section | External edit needs supported collection and correlation evaluation. |
| 26. Correction assumptions | Correction section/second diagram | Unique approved target, verified ownership and reevaluation supplied. |
| 27. Same records preserved | Correction outcome | Same account and identity, key/login retained, no new employee identity or permission grant. |
| 28. Specific verification | Correction outcome | Exact source/account visible on intended identity plus approved owner evidence, not just count. |
| 29. Diagram timing limits | Correction explanation | Dependencies and supplied result don't guarantee instant screen changes. |
| 30. Uncorrelated meaning | Relationship section | Collected account lacks authoritative identity link, not necessarily a known business owner. |
| 31. Orphan distinction | Relationship section | Organization-agreed risk meaning, not universal ISC synonym. |
| 32. External state separate | Relationship section | Uncorrelated doesn't imply disabled/deleted/permissions removed. |
| 33. Provisioning/target meanings | Relationship section | Supported external change versus recipient; initial read/match includes no removal. |
| 34. Reverse state distinction | Relationship section | Correctly linked account can still be disabled; ownership differs from usable access. |
| 35. Source inventory evidence | Views section | Accounts/attributes and uncorrelated views/reports locate records outside the person's view. |
| 36. Person view scope | Views section | Identity view contains associated records; source inventory investigation still needed. |
| 37. Entitlement meaning | Views section | Represented permission/membership can exist on an uncorrelated account without attribution to intended person. |
| 38. Person-based governance | Views section | Correct relationship matters for person-linked access decisions; source inventory isn't ownership proof. |
| 39. Request/certification meanings | Views section | Configured access request versus review; dependable relationships support personal governance. |
| 40. Source Owner distinction | Views section | Operational fulfillment/review assignment doesn't make every account personal. |
| 41. Responsible administrator versus user | Views section | Business owner/service accountability/human user are separate relationships. |
| 42. Evidence precision | Views section | Exact source/key/current association/matching fields/time over totals and labels. |
| 43. Data versus configuration defect | Other correction section | Right reference can't fix a wrongly selected pairing; inspect configured/preset/default logic. |
| 44. Optimization meaning | Other correction section | Unchanged account correlation can be skipped despite successful read. |
| 45. Changed configuration reexamination | Other correction section/case6 | Documented unoptimized aggregation for unchanged accounts; supported appropriate scope. |
| 46. Manual persistence | Other correction section/case7 | Explicit link remains after field changes; unoptimized read doesn't erase it. |
| 47. ISC-created accounts | Other correction section | Can carry manual treatment, so inspect how the relationship was established. |
| 48. Appropriate manual exception | Other correction section | Verified exceptional correction differs from bypassing widespread feed/configuration defects. |
| 49. No destructive count cleanup | Other correction section | Avoid reset/removal/identity deletion as cosmetic repair; wrong link needs evidence and effects review. |
| 50. Wrong data can match | Quality section/case4 | Another employee reference can produce correlated but incorrect ownership. |
| 51. Percentage not legitimacy | Quality section | 100% correlated proves associations, not all owners. |
| 52. Default can conceal input defect | Quality section | Unintended name match may hide missing preferred reference. |
| 53. Friendly-name risk | Quality section | Shared/changed/inconsistent names insufficient as general owner evidence. |
| 54. Shared/service classification | Quality section | Actual use and supported accountability design, not forced personal link to administrator. |
| 55. Identity processing effects | Consequences section | Associated account data can become input to configured mapped values and decisions. |
| 56. Mapping versus authority | Consequences section | App data can supply identity value without becoming population-establishment source. |
| 57. Role/LCS meanings | Consequences section | Configured access criteria and business-stage actions need actual dependency evidence. |
| 58. Attribute sync | Consequences section | Existing correlated account writer can act on new/changed relationship when configured. |
| 59. Separate delivery proof | Consequences section | Correct relationship doesn't prove every write, role change or successful provisioning. |
| 60. Main no write/no access change | Consequences section | Supplied outcome is ownership relationship only; real dependent operations reviewed separately. |
| 61. Five observation boundaries | Second table | Target existence, ISC existence, uncorrelated, correlated and person-view access each prove limited facts. |
| 62. Cause-specific symptom diagnosis | Observation explanation | Absent inventory, missing link, wrong identity and missing permission require different investigations. |
| 63. Eight retained cases | Cases1–8 | Import, labels, default, wrong owner, missing identity, optimization, manual link and enabled target preserved. |
| 64. Scale transfer | Transfer | 2,000 imported/120 uncorrelated; reject assigning all to source administrator on responsibility alone. |
| 65. Transfer cause groups | Transfer | Missing identities/references, wrong pairings, shared/service and unnecessary accounts; default/manual paths. |
| 66. Transfer sample and proof | Transfer | Exact account/owner/candidate/comparison, same-name different person and differing login; verify relationships and downstream effects. |

## Fresh primary-source verification

Eight official pages checked October 26, 2026:

| Source | Sections or claims checked | Lesson boundary |
|---|---|---|
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account/identity comparisons, prerequisites, preset and default logic, default Account Name to identity name case-insensitive comparison, uncorrelated reports, unchanged account reexamination, manual correlation permanence and ISC-created account treatment | Missing configured reference alone is not universal proof of uncorrelated status. Main case explicitly excludes a default match. Display name differs from schema-designated Account Name and identity name. No destructive reset/removal or automatic manual-link reassignment recipe is taught. |
| [Managing Accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html) | Human/machine/uncorrelated classifications, account status/attributes, source account correlation management and governance requirement | Uncorrelated means missing authoritative identity relationship, not external deletion or absence of business ownership. Shared/machine accountability must use appropriate classification; no license entitlement or personal correlation for every service account is implied. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative source/profile identity establishment, identity attributes and cross-source mappings | Existing employee identity is already established. Making LedgerPay authoritative would change population establishment rather than prove ownership. Correlation, profile selection and identity field mappings are distinct responsibilities. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account reads/representation, aggregation evidence and optimization context, view freshness | Account existence in the target, source representation and owner association are separate observations. Logical teaching stages are not separate mandatory jobs. Correcting feed data must reach ISC and be evaluated; success of one read is not full outcome proof. |
| [Viewing Identity Control Panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Identity profile/details and access/account relationships, represented access evidence | Person-level view describes associated data; source inventory and current matching evidence are needed when account is absent from that person's view. Matching UI names or a correlation flag do not establish business ownership. |
| [Managing Sources: Assigning a Source Owner](https://documentation.sailpoint.com/saas/help/sources/index.html#assigning-a-source-owner) | Source Owner manual fulfillment and certification responsibilities | Operational owner of a source is not automatically the personal owner/user of all its accounts. The 120-account bulk-assignment proposal is rejected on that distinction, not a blanket prohibition of supported manual correlation. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity evaluation and role/lifecycle/manager/access requirements; provisioning delivery limit | Correct association can affect data available to configured consumers, but does not prove every role/lifecycle change or successful external delivery. Main example supplies no access-changing work. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Existing correlated accounts and association changes as possible triggers for configured sync | Moving/correlating an account can matter beyond a display label when sync exists. Main correction explicitly has no sync write; no universal automatic field update or access grant is inferred. |

Review included current correlation configured/preset/default behavior and case-insensitive designated Account Name/identity name comparison; persistent manual and ISC-created-account treatment; account classification/status/source versus person views; identity establishment; optimized collection; Source Owner fulfillment/review; processing and configured synchronization on relationship changes.

Current accounts/index.html was used. Historical failed-path discovery in the older reference section is not a current task event. Human Fabric/Identity Services branding does not introduce IdentityIQ behavior or assert licensing availability.

The comparison examples are supplied facts, not a claim that a particular null/duplicate/tie scenario was tested in ISC. Main case excludes every other configured/default match, supplies unique approved correction and relevant reevaluation. No unspecified ambiguous-candidate tie-breaker is invented.

## Assessment reasoning map

| Entry | Supplied facts | Expected reasoning / acceptable evidence | Misconception |
|---|---|---|---|
| 1 | Collected employeeRef null; no configured/default match | Verify ownership and actual input; read success doesn't identify person. | Import success establishes identity relationship. |
| 2 | Friendly labels Worker A match; pay.user versus worker-w107 do not | Inspect designated fields and real paths, not arbitrary full names. | Default uses every displayed name. |
| 3 | Configured path fails, designated Account Name matches identity name, no manual override | Default can correlate; verify owner and recorded result. | Only preferred configured pairing matters. |
| 4 | Approved owner differs from employeeRef-derived attached identity | Correct actual data/association with dependency review. | Correlated means correct. |
| 5 | Intended authoritative identity absent, no legitimate other match | Investigate approved intake rather than changing app authority to clear count. | Every app account should create an employee identity. |
| 6 | Criteria corrected, unchanged data next read optimized | Verify documented unoptimized reexamination and affected records. | Read success means all new criteria evaluated. |
| 7 | Persistent manual association, then changed employee reference | Inspect history and supported correction; unoptimized read doesn't clear link. | Automatic field change overrides manual link. |
| 8 | Uncorrelated account remains enabled with permissions externally | Relationship and target state can coexist; investigate legitimacy and approved action. | Uncorrelated automatically disables/removes access. |
| Project transfer | 2,000 accounts, 120 uncorrelated; proposal assigns all to administrator | Split causes/account types, verify exact owners/candidates/paths and effects. | Source responsibility means personal ownership of every account. |

Support: configured/default correlation for1/2/3/4, profile establishment for5, correlation/aggregation optimization for6, manual correlation for7, account states/target distinction for8, and Source Owner/account types/processing/sync for transfer. Missing evidence or a needed approved classification decision are valid conclusions. No beginner teach-back or uncoached transfer test occurred.

## Example and diagram consistency

HR-Production authoritative Employees/hr-record already establishes the intended employee identity with required values. identificationNumber is text W-107, identity name worker-w107 and friendly display Worker A. Payroll-Production accountKey/Account ID is pay-account, loginName/Account Name pay.user, friendly displayName Worker A, initial employeeRef null.

One configured pairing uses employeeRef against identificationNumber; no other configured match and no identity name pay.user. Friendly label equality therefore supplies neither configured nor default match. The initial uncorrelated record is supplied.

Owner-approved feed correction supplies unique W-107, publication/collection/reevaluation are supplied and the same account becomes attached to the same identity. Key/login remain unchanged; no new employee identity, authority switch, sync write or requested access change is supplied.

Independent cases preserve default match, wrong person, absent intended identity, changed criteria/optimized skip, persistent manual link and externally enabled account. Transfer keeps 2,000 imported/120 uncorrelated, cause groups and rejected administrator-ownership shortcut.

Both current diagrams match inline text and measure 39/41 columns within the 42-column limit. The first shows distinct records and no-match evidence; the second selected data correction/reevaluation/association. Both separate human verification and avoid private job sequencing or immediate view promises. Original assets and guide 2.0 remain unchanged.

## Executed verification

- Fresh `npm test`: all four native navigation/disclosure checks passed, exit 0. These verify site behavior, not comprehension.
- `git diff --check`: clean. Separate new-file whitespace checks for both diagrams and this record produced no diagnostics; exit 1 is expected for the new-file difference.
- 1,008 local Markdown targets across teaching specification, course register, README, reference/example registers, this record and current publication/publishing records resolved; zero missing.
- Saved learner, course/example metadata, owned reference section and record matched intended drafts after line-ending normalization.
- Both inline diagrams matched editable assets exactly, maximum widths 39 and 41 within the 42-column limit. Historical assets remained unchanged.
- All eight original case purposes and nine worked answers including the 2,000-account/120-uncorrelated transfer remained.
- Supplied string examples confirmed pay.user differs from worker-w107 case-insensitively, a matching name can compare without letter-case differences, and corrected W-107 is the intended reference. This checks teaching values, not ISC runtime correlation.
- Main initial conditions explicitly exclude every configured/default match; correction requires approved unique ownership and reevaluation. Same account key/login/identity and no newly supplied access grant remain clear.
- Learner source contained no source/course URLs, employee biography residue, pseudo identity ID, author verification metadata or unwritten-content placeholders.
- Start/final inventory: 438 to 441 files, four existing files changed, three new, zero removed. All 434 other files retained identical SHA-256 hashes, including tracing guide 2.0, prior revisions, historical assets, site code and publication files. All 91 learner files remained.
- REFERENCE_RECORDS prefix and suffix outside owned COR-001 retained exact original lengths and SHA-256 hashes. Next COR-002 learner body was not opened.
- HEAD remained 7123d85038c688f1ccecffa6a8504d22e3986b79; staging remained empty. No commit, push, deployment or tenant operation occurred.

## Limits and next action

Documentation-based author review and site checks cannot establish observed beginner comprehension, full graphical quality or formal approval. Those remain pending.

No actual tenant/API/source/profile/account/identity/correlation/manual-link/reset/deletion/credential/security/aggregation/processing/provisioning/sync/target operation occurred. Preserve this local revision for read-through, then continue with COR-002 when instructed.
