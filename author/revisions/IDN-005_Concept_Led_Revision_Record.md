# IDN-005: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- [Learner source](../../lessons/IDN-005_Multiple_Identity_Profiles_Populations_and_Priority.md) revised in place. Original 1.0 remains recoverable at start-of-task commit 7123d85038c688f1ccecffa6a8504d22e3986b79.
- Current editable diagrams: [attached accounts and governing profile](../../assets/IDN-005_attached_accounts_and_governing_profile.txt) and [same identity profile transition](../../assets/IDN-005_same_identity_profile_transition.txt).
- Historical [eligibility and priority](../../assets/IDN-005_profile_eligibility_and_priority.txt) and [contractor-to-employee transition](../../assets/IDN-005_contractor_to_employee_transition.txt) remain unchanged. Historical 43/39 widths are not claimed current-compliant.
- Existing [tracing guide](../../assets/ATTRIBUTE_TRACING_GUIDE.txt) remains local 2.0/published 1.0, unchanged this task.
- Scope: current learner and course/author metadata, two new diagrams and this record. Earlier revisions, all 91 learner routes, site code and publication records preserved.
- Individually revised: 43 of 91; 48 await. Published revised snapshot remains 23 through SRC-002. Later revisions through IDN-005 remain local; no commit, push or deployment.
- Next IDN-006 learner body was not opened. New authoring stays paused at reserved ROL-007 without a stub.

## Teaching decisions

Account ownership and one-identity context are established before profile ranking. The complete normal mechanism follows: attached authoritative accounts establish applicable profiles, lower numerical priority selects Employees, its mappings supply observed ENG/EMPLOYEE/directory email, and the same identity retains both worker accounts.

The contractor-to-employee trace completes that successful flow before variations in account lookup, creation defaults, shared priority changes, lifecycle/security impact and reverse conversion. Supplied successful processing is not actual tenant execution. Input lookup, profile choice, merging and target delivery retain distinct evidence.

Neutral hr-record/contract-record and necessary person-reference values replace biography. Person P-105 remains distinct from employee W-105 and source account identifiers, preserving original continuity reasoning without invented ISC IDs. Custom workerType definition is shared while mappings differ. Email is illustrative, not mailbox evidence.

First-use meanings, causal transitions, normal processing and all original cases/transfer were reviewed without fixed heading, visual, word or question quotas. Human verification is separated from the teaching diagrams' dependency/decision flow.

## Original-to-revised coverage reconciliation

| Original purpose | Revised location | Retained reasoning / condition |
|---|---|---|
| 1. Opening conversion | Opening | One identity with two retained worker records and differing settings; shared priority, not last read. |
| 2. Identity/account | First section | ISC representation versus connected-system record; personnel record need not be a login. |
| 3. Source/connector/aggregation | First section | Configured collection, supported integration and account read defined. |
| 4. Authoritative/profile | First section | Accounts establish identity through shared mappings/security/business-stage access configuration. |
| 5. Attribute/mapping | First section | Source/identity records differ; mapping selects/calculates identity value. |
| 6. Correlation before priority | First section | Whose account versus which profile governs a particular identity. |
| 7. One governing profile | First section | Multiple authoritative accounts, only one profile at a time; governing not another object type. |
| 8. Separate identities | First section/case4 | Account lists cannot be combined across identities to predict one winner. |
| 9. Population meaning | Eligibility section | Intended managed set, not automatic job-title/name rule. |
| 10. Three profile/source rows | First table | Employees10/HR, Contractors20/Contractor, Subsidiary Staff5/SubsidiaryHR. |
| 11. Priority numeric direction | Eligibility section | Lower number higher precedence;10beats20. |
| 12. Eligibility before rank | Eligibility section | Only profiles with authoritative accounts attached to this identity participate. |
| 13. Main correct account set | Eligibility section | hr-record and contract-record correctly attached; no subsidiary account. |
| 14. Eligible shorthand | Eligibility section | Account-presence condition, not extra configuration field. |
| 15. Absent highest rank | Eligibility section/case1 | Subsidiary Staff5 does not compete; existence not universal authority. |
| 16. Main winner | Eligibility section | Employees10 highest eligible overContractors20. |
| 17. Decision diagram | First diagram | Attached accounts→applicable profiles→rank; absent source separated. |
| 18. Diagram meaning | First explanation | Relationship/selection, not internal timing or account moving source. |
| 19. Lower profile account retained | Eligibility explanation | contract-record is not discarded when Employees governs. |
| 20. Stable person reference | Eligibility explanation | P-105 matches identity Identification Number under supplied configuration. |
| 21. Different identifier roles | Eligibility explanation | Person P-105 distinct from employee W-105 and sourceaccountIDs. |
| 22. Matching assumptions | Eligibility explanation | No universal display-name/equal-account-ID deduplication or actual ISC ID claimed. |
| 23. Custom attribute scope | Mappings section | Tenant-wide definition, per-profile mappings; not a private profile field. |
| 24. Department row | Second table | EmployeesHR departmentCodeENG versus contractor assignmentDepartmentOPS. |
| 25. Worker Type row | Second table | CustomworkerType, EMPLOYEE versusCONTRACTOR. |
| 26. Email row | Second table | Both profiles use attached Directory directory-user mail, illustrative invalid-domain address. |
| 27. UID row | Second table | Both produce same stable uniqueperson-w105; required inputs available. |
| 28. Applied output | Mappings explanation | Successful inputs/calculations/application supplied; observed ENG/EMPLOYEE/directory email. |
| 29. Non-authoritative value supplier | Mappings explanation | Directory email doesn't make directory origin of employees. |
| 30. Cross-authority field | Mappings explanation | Employees can deliberately read an approved contractor-source field. |
| 31. No implicit lower-profile field fallback | Mappings explanation | Winning input failure doesn't try next profile's mapping; explicit alternate logic required. |
| 32. Winning priority can't fix mapping | Mappings explanation/case3 | Already-winning Employees10→5 leaves wrong field choice untouched. |
| 33. Before conversion | Transition section | Only contractor account attached; Contractors governs despite higher Employees rank. |
| 34. New HR account | Transition section | Collection plus correct same-identity association, not arrival alone. |
| 35. Processing meaning/trigger | Transition section | Identity information/access requirements; changed aggregation event and manual config path. |
| 36. Supplied transition diagram | Second diagram | Same identity contractor-only→new HR→Employees→successful mappings. |
| 37. Continuity preserved | Transition explanation | No identity replacement or contractor account overwrite. |
| 38. Timing and verification boundaries | Transition explanation | No fixed/atomic/private order; separated human checks. |
| 39. Preview versus application | Transition explanation | Selected proposed outputs not completed population changes. |
| 40. Apply Changes scope | Transition explanation | Profile-associated population; affected overlaps can currently belong elsewhere. |
| 41. Shared processing proof | Transition explanation | Affected identities/scope/observed associations; update response not all transitions complete. |
| 42. Separate directory selection | Account lookup section | Ordinary/admin choice independent of governing profile. |
| 43. Transform/accountAttribute | Account lookup section | Configured calculation/lookup of identity/source account attribute. |
| 44. Filter/sort | Account lookup section | Narrow eligible accounts versus order candidates. |
| 45. Scoped default sort | Account lookup section | Accountcreated ascending, not HRhiredate/business primary meaning. |
| 46. Scoped null default | Account lookup section | First null may continue to eligible non-null; truefirstlinkevennull/defaultfalsefirstnonnull. |
| 47. Three decision questions | Account lookup section | Ownership, profile selection and per-field input distinct. |
| 48. Filter boundary | Account lookup section | Lookup filter doesn't remove account/relationship/change connector scope/rank profile. |
| 49. Creation-order default | Defaults section | Earlier profile higher;initial10then20 not proof of approved policy. |
| 50. Independent reverse ordering | Defaults section/case5 | Contractors10/Employees20 bothattached→Contractors despite newer employee. |
| 51. Supported API change | Defaults section | Authorized shared priority update via current spec; no per-person command or executed request. |
| 52. Ties excluded | Defaults section | Distinct intended ranks; no invented tie/list-position selection. |
| 53. Shared priority limit | Defaults section | Employees20→5 affects all equivalent overlaps; can't encode contradictory per-person outcomes alone. |
| 54. Population impact/prior configuration | Defaults section/case5 | Identify overlaps/old-new settings/mappings/preserve previous config/verify scope. |
| 55. Lifecycle/role meanings | Conversion impact | Business stage/account-access behavior versus access grouping/membership criteria. |
| 56. Same Active label | Conversion impact | Technical names/enabled/actions/requirements compared; labels don't prove equivalent behavior. |
| 57. Consumer review | Conversion impact | Required mappings/stable IDs/manager/lifecycle/security/actual dependencies. |
| 58. Entitlement/provisioning/target | Conversion impact | Represented right/membership, supported write attempt, external recipient. |
| 59. Removal evidence | Conversion impact/case8 | Assignment basis/removal requirement/config/process/operation/target; profile alone not proof. |
| 60. Processing not delivery validation | Conversion impact | Starting writes doesn't certify success. |
| 61. Username/email boundary | Conversion impact | No automatic external rename/mailbox/session invalidation. |
| 62. Reverse conversion status | Reverse section/case6 | CONTRACTOR/inactive/disabled/LCS versus relationship/removal; ordering unchanged alone. |
| 63. Confirmed deletion path | Reverse section/case7 | Only governing-source account actually removed by approved aggregation deletion path; remaining contractor/successful mappings. |
| 64. Conditional reassignment | Reverse section | Remaining lower authoritative profile and attribute recalculation, not merging. |
| 65. Missing export versus deletion | Reverse section | Mode/settings/safeguards/recorded outcome; not rowabsence/inactive/filter. |
| 66. Multiple accounts on governing source | Reverse section | Removing one doesn't prove every qualifying account relationship gone. |
| 67. No remaining authority | Reverse section | Deletion or blocked hidden outcome, not simple transfer. |
| 68. Hidden meaning | Reverse section | Retained due blocked deletion/dependencies, no profile/ordinary Identity page. |
| 69. No destructive shortcut | Reverse section | Approved owner transition/continuity/evidence; not delete identity/profile to fix Department. |
| 70. Different UI object facts | Investigation | Profile shared priorities/source/population/status, identity association, account source data. |
| 71. Six human evidence checks | Investigation | Exact identity→authoritative accounts→profile refs/ranks→ownership/order→mapping→processing/access. |
| 72. Duplicate names/UID | Investigation | Separate A/B cannot merge by priority/name; global uid uniqueness and required uid/email/lastname. |
| 73. Identity exception | Investigation | Missing values/duplicateusername reports; not merge instruction/general priority fix. |
| 74. Eight cases | Changed evidence | All original conditions/questions/worked purposes retained; no count quota. |
| 75. Acquisition transfer | Transfer | Same-identity/stable refs/overlap/current versus future migrations/profileconsumers/processing/separate evidence. |
| 76. Future date and teach-back | Transfer | Priority doesn't automatically postpone by acquisition date; explain accounts/rank/mappings instead of HRwins. |

## Fresh primary-source verification

Six official documentation pages and two vendor specification files checked October 26, 2026:

| Source | Sections or claims checked | Limit applied in the lesson |
|---|---|---|
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Prioritizing Authoritative Sources, mappings, global custom attributes, required values, Preview, viewing profile priority/status, resolving identity exceptions | Exactly one associated profile; highest-priority profile where the identity has an authoritative account. Earlier-created defaults 10 then 20. Per-profile mappings can read other sources; lower profile is not an implicit field fallback. Duplicate uid generates an exception, not a merge instruction. |
| [Official Identity Profile schema](https://github.com/sailpoint-oss/api-specs/blob/main/idn/apis/identity-profiles/schemas/identityprofile.yaml) | priority numeric field, authoritativeSource reference, identityAttributeConfig, identityCount and identityRefreshRequired | Configuration object roles corroborated directly from maintained vendor API specification; no runnable request, historical endpoint guarantee or automatic reassignment timing asserted. |
| [Official Update Identity Profile operation](https://github.com/sailpoint-oss/api-specs/blob/main/idn/apis/identity-profiles/paths/identity-profiles-v1-by-identity-profile-id.yaml) | PATCH update operation, JSON Patch body, authorization and updated-profile response | Maintained vendor operation freshly retrieved read-only; learner body does not hard-code an endpoint version/path, execute a request or infer immediate completed reassignment from an update response. |
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching account attributes with related identity attributes; configured criteria; uncorrelated accounts and corrective investigation | Supplied correct account relationships are prerequisites to profile reasoning; no invented name matching, authoritative deduplication algorithm, forced merge or destructive correction recipe. |
| [Account Attribute transform](https://developer.sailpoint.com/docs/extensibility/transforms/operations/account-attribute/) | Identity/source-scoped lookup, filters, created ascending default, first-non-null default and optional overrides | Defaults belong to accountAttribute, not all mappings/operations. Lookup filtering does not itself remove an authoritative-account relationship, change connector scope or rank profiles. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Event-based identity processing, profile mappings/access reevaluation, manual processing and profile Apply Changes scope | Saved configuration, sample preview, initiated processing and completed identity results are distinct. No fixed delay or claim that one profile's current membership covers every priority-change impact. Processing does not validate successful provisioning delivery. |
| [Setting Up Lifecycle States](https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html) | Per-profile state configuration, technical name, enabled setting, access/account actions and processing | Same displayed Active label is not proof of equivalent configuration or access. No assertion that a priority change removes every old permission or changes every session/login. |
| [Loading Account Data: Deleting Authoritative Accounts and Identities](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html#deleting-authoritative-accounts-and-identities) | Confirmed governing authoritative-account removal, lower-priority reassignment and attribute recalculation, no alternative authoritative account, blocked deletion/hidden identity | Deletion conditions are explicit. Missing row, inactive status, transform filter and actual removal remain different. Documented behavior is not a recommendation to delete records to force conversion. |

The two raw specification URLs returned web-reader cache misses; direct read-only HTTP requests returned 200 and their content was inspected. The schema includes integer priority/authoritativeSource/identityAttributeConfig; the maintained operation confirms authorized PATCH/JSON Patch capability and updated-profile response. No endpoint version is hard-coded in the learner source and no ISC tenant request was executed.

Documentation review covered account-presence priority/creation defaults/custom attribute and profile mappings/required fields/Preview; configured correlation; scoped accountAttribute ordering/filter/null options; processing triggers/manual scope/no delivery validation; per-profile lifecycle configuration; confirmed authoritative-account deletion/reassignment and no-alternative blocked/hidden outcomes.

This is ISC material despite current Human Fabric/Identity Services branding. No IdentityIQ behavior, tie-breaker, automatic same-name merge, private job topology, immediate universal reassignment or guaranteed access removal is taught.

## Assessment reasoning map

| Entry | Supplied facts | Expected reasoning / acceptable evidence | Misconception |
|---|---|---|---|
| 1 | Only contractor account; Employees10/Contractors20/Subsidiary5 | Contractors alone eligible; exclude absent profiles before rank. | Global lowest rank governs all. |
| 2 | Both accounts same identity; contractor readlast; successfulprocessing | Employees10over20; inspect winner mappings for values. | Last aggregation wins. |
| 3 | Employees governs; wrong directoryOPS input, approvedHRENG | Correct approved mapping/preview/application/output; targetwrites separate. | Higher winning priority repairs input. |
| 4 | Aownscontractor/BownsHR, same displayname | Verify references/history/correlation/approved continuity; no forced deletion/UID reuse. | Priority or name merges identities. |
| 5 | Creation defaults contradict employee-first policy | Approved supported shared update, alloverlaps, old/newconfig, settings/mappings, processing/reassignment/output proof. | Creation order equals policy/one sample proves all. |
| 6 | InactiveHR remains attached with contractor | No relationship/order removal evidence; inspect profile/LCS logic. | Inactive always transfers profile. |
| 7 | Only HR account confirmedremoved, contractorremains/maps succeed | Documented reassignment/recalculation; not merger or targetsuccess proof. | Missing row equals deletion. |
| 8 | Employees/ENG observed, targetcontractor group remains | Assignment/removal/configuration/processing/operation/target evidence. | Remaining group locates profile-selection failure. |
| Acquisition | Overlap with Headquarters10/Acquired20, migration not all effective | Sameidentity/stablerefs/intended overlap/effective timing/settings/mappings/processing/separate outputs. | HR label or acquisition date automatically selects profile/access. |

Source support: profile rules/mappings for1/2/3/5/acquisition, correlation for4/acquisition, account-presence/lifecycle distinction for6, loading/deletion for7, and lifecycle/processing/provisioning evidence boundary for8. API specification supports the authorized shared change capability in5. Missing evidence and unresolved approved policy are valid answers.

## Example and diagram consistency

Main configured profiles: Employees10/HR-Production, Contractors20/Contractor-Production, Subsidiary Staff5/SubsidiaryHR-Production. One identity correctly owns hr-record and contract-record; no subsidiary account. Stable person reference P-105 matches identity Identification Number under supplied configured correlation; separate employee number W-105 and source identifiers are not matching assumptions.

Selected fields: HR departmentCodeENG/workerCategoryEMPLOYEE; contractor assignmentDepartmentOPS/workerCategoryCONTRACTOR; directory-user mail person-w105@example.invalid; both uid mappings person-w105 unique. Required mapped inputs are assumed available and successful. Applied Employees outputENG/EMPLOYEE/directory email is supplied teaching evidence.

Before conversion only contractor account belongs to the identity. Adding correctly associated HR account changes profile precedence, then successful processing/output are supplied. Both accounts remain on the same identity. Independent reverse-order scenario uses Contractors10/Employees20 and approved proposal Employees5; main defaults are not silently changed.

Deletion case explicitly removes the only HR-source account through the approved aggregation path, retains the contractor account and assumes successful required mappings. Missing row/status/filter are distinct; no actual deletion or recommended destructive conversion. Acquisition transfer and A/Bduplicate scenario are separate.

Current editable diagrams match inline blocks and have widths 40/38 under 42 columns. First separates absent subsidiary from eligible ranking; second preserves same-identity transition, supplied processing and separated human verification. Historical sources and tracing guide 2.0 remain unchanged.

## Executed verification

- Fresh `npm test`: all four native navigation/disclosure checks passed; these verify site behavior, not comprehension.
- `git diff --check`: clean. Separate new-file whitespace checks for both diagrams and this record produced no diagnostics; exit 1 is expected for the new-file difference.
- 968 local Markdown targets across teaching specification, course register, README, reference/example registers, this record and current publication/publishing records resolved; zero missing.
- Saved learner, course/example metadata, owned reference section and record matched intended drafts after line-ending normalization.
- Both inline diagrams matched editable assets exactly, maximum widths 40 and 38 under the 42-column limit. All eight original case purposes and nine worked answers including the acquisition transfer remained; four selected mapping comparisons stayed aligned.
- Supplied priority examples were checked: contractor-only selects Contractors, both main accounts select Employees despite absent Subsidiary 5, and reversed independent 10/20 configuration selects Contractors. This verifies the example reasoning, not ISC runtime behavior.
- Confirmed-removal scenario retained approved aggregation deletion, the only HR-source account removed, remaining contractor association and successful required mappings. Status flags, missing rows, lookup filters and actual relationship removal stayed distinct.
- Learner source contained no source/course URLs, biography residue, author verification metadata or placeholders. Neutral identifiers and illustrative email did not claim real tenant or mailbox evidence.
- Start/final inventory: 426 to 429 files; four existing files changed, three new, zero removed. All 422 other files retained identical SHA-256 hashes, including guide 2.0, prior revisions, historical assets, site code and publication files. All 91 learner files remained.
- REFERENCE_RECORDS prefix and suffix outside the owned IDN-005 section retained exact original lengths and SHA-256 hashes. Next IDN-006 learner body was not opened.
- HEAD remained 7123d85038c688f1ccecffa6a8504d22e3986b79 and staging remained empty. No commit, push, deployment or tenant operation occurred.

## Limits and next action

Documentation-based author review and site checks do not establish observed beginner comprehension, full graphical quality or formal approval. Those remain pending. No real tenant/source/account/profile/priority/API/identity/correlation/transform/deletion/credential/security/aggregation/processing/provisioning/lifecycle/target or access operation occurred.

Preserve this local revision for read-through, then continue with IDN-006 when instructed.
