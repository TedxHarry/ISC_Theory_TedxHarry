# FND-004: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Current [learner source](../../lessons/FND-004_Entitlements_Access_Profiles_and_Roles.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 is recoverable at publication commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current editable diagrams: [role/profile/entitlement map](../../assets/FND-004_role_profile_entitlement_map.txt) and [identity assignment and account changes](../../assets/FND-004_identity_assignment_and_account_changes.txt).
- Historical [relationship tree](../../assets/FND-004_access_object_relationships.txt), [assignment conditions](../../assets/FND-004_assignment_conditions.txt) and [assignment/delivery map](../../assets/FND-004_assignment_and_delivery.txt) remain unchanged.
- FND-004 alone is revised in this task; all 91 lessons remain available. Earlier local lesson revisions and their records/assets are preserved.
- Local only: no staging, commit, push, Pages deployment or tenant operation. Published FND-004 remains revision 1.0.
- Next existing lesson is FND-005. ROL-007 remains the paused new-lesson reservation.

The topic determines the structure: external permissions, useful single-source package, wider role, recipient logic, account operations, alternative origins, evidence and removal. The formula's AND logic is taught in adjacent prose rather than requiring a third diagram. Two current diagrams serve the distinct containment and processing purposes. No visual, table, word or question quota is applied.

The employee biography, employee number 24004 and derivative account names are removed. The main example has one existing relevant account per source, so source plus account purpose identifies it without arbitrary technical IDs. InvoiceRead/SupplierRead/FinanceWorkspace, Invoice-System/Corporate-Directory, Invoice reading/Accounts payable reader and Finance/AP_READER/AP_MANAGER are retained because their relationships and comparisons drive the explanation.

## Baseline coverage reconciliation

| Baseline purpose | Current treatment |
|---|---|
| 1. Concrete work requires invoice reading, supplier lookup and a separate workspace | Opening and permission table |
| 2. Identity and account meanings, existing correct associations | Start with the permissions |
| 3. Sources preserve separate systems/account contexts | Source explanation and table |
| 4. Connector, aggregation and account-correlation meanings | Supporting explanations before the entitlement table |
| 5. Main example has one relevant account per source and supported integrations | Explicit initial conditions |
| 6. Entitlement as represented source permission or membership | Entitlement explanation |
| 7. External system determines access effect, not ISC label | SupplierRead naming variation |
| 8. Identical names on different sources are distinct items | Source-context comparison |
| 9. Why related invoice/supplier permissions form a package | Why give the finance permissions a shared name |
| 10. Access profile is a related single-source bundle | Profile definition and Invoice reading |
| 11. At least one entitlement, single-source boundary | Profile explanation |
| 12. Broad name cannot include directory access in finance profile | Source-boundary variation |
| 13. Profile is ISC grouping, not a newly created native group | Profile delivery distinction |
| 14. Identity profile differs from access profile | Population/data configuration comparison |
| 15. Role groups access for responsibility or population | A role brings the wider requirement together |
| 16. Role can include profiles, direct entitlements or both | Role definition and relationship tree |
| 17. Role can span sources or remain single-source | Role explanation |
| 18. Direct role content does not bypass delivery controls | Direct entitlement explanation |
| 19. Finance profile plus direct directory membership | Current relationship tree |
| 20. One-item profile is optional if it has useful reusable meaning | Alternative directory package |
| 21. Definition tree is containment, not chronology or completed grants | Tree labels and adjacent narration |
| 22. Entitlements retain original sources | Relationship map explanation |
| 23. Shared profile references, not per-person copies | Shared definition paragraph |
| 24. Assess affected references/identities before changing shared definition | Shared definition paragraph |
| 25. Native application role can be source entitlement where supported | Application role comparison |
| 26. ISC role does not create identically named native roles | Application role comparison |
| 27. Ownership is not receiving access | Ownership paragraph |
| 28. Contents versus recipient/assignment | The contents do not choose the recipient |
| 29. Identity attribute meaning and Finance/AP_READER inputs | Criteria introduction |
| 30. AND requires both; Finance alone is insufficient | Criteria and AP_MANAGER counterexample |
| 31. Role name/job-title resemblance is not matching logic | Criteria narration and title case |
| 32. Required Provisioning service, enabled role and prepared configuration | Main applicability conditions |
| 33. Simplified criteria are not a universal complete eligibility policy | Explicit condition alongside criteria |
| 34. Identity processing evaluates access and is separate from saving configuration | Assignment explanation |
| 35. Matching criteria produce the selected automatic assignment | Successful decision trace |
| 36. Provisioning delivers supported underlying account/access changes | Follow the assignment |
| 37. Ordinary provisioned access with no separate activation step | Main path scope |
| 38. Main path excludes preexisting items and alternate assignments | Main starting conditions |
| 39. Two existing accounts require source-specific operations | Delivery explanation and map |
| 40. Multiple systems are not a shared application/account | Delivery explanation |
| 41. Multiple accounts require applicable account selection | Which account receives the access |
| 42. Automatic-profile selection is not every request/direct-entitlement selection | Account-selection qualification |
| 43. No guaranteed parallel/source order/atomic transaction | Delivery diagram explanation |
| 44. Successful target acceptance is supplied, not implied by assignment | Successful continuation |
| 45. Assignment, attempt, result and current evidence are distinct | Delivery/evidence sections |
| 46. Processing completion does not validate provisioning | Delivery explanation |
| 47. No immediate full aggregation or synchronized-view guarantee | Later observation paragraph |
| 48. Identity list is another role-assignment configuration | Automatic criteria are not the only route |
| 49. Access request and requestable meanings | Request route explanation |
| 50. Configured review/approval differs from successful delivery | Request route explanation |
| 51. Request role may serve approved recipient outside automatic criteria | AP_MANAGER variation |
| 52. Access profile can be managed without a role | Narrower finance package example |
| 53. Partial success: workspace/read present, supplier rejected | One successful branch section |
| 54. Credential meaning versus allowed operation | Partial-outcome explanation |
| 55. Partial outcome is hypothetical, not universal connector transaction behavior | Explicit changed conditions |
| 56. Focus missing item, account/source, contents/assignment/account/result | Partial-outcome investigation |
| 57. Business approval/reprocessing do not repair external authority | Cause and correction explanation |
| 58. Authorized controlled recovery and verification, not infinite retry assumption | Recovery explanation |
| 59. Preexisting bundle may be detected without a new grant | A profile can describe access already there |
| 60. Detection does not prove request approval/original delivery | Detection explanation and case |
| 61. Profile detection does not create workspace or prove broader role | Detection-to-role boundary |
| 62. Even all underlying access does not establish historical assignment path | Detection closing |
| 63. Access-model, identity-access and activity screens answer different questions | Front/back explanation and evidence table |
| 64. Back-end evaluation, change derivation and integration/results | Front/back explanation |
| 65. No complete history guaranteed in one screen | Evidence section |
| 66. Criteria loss, sole assignment path, applicable revocation and verification | Removal section |
| 67. Deprovisioning meaning | Removal explanation |
| 68. Another assigned role can retain overlapping entitlement | Overlap example |
| 69. No universal rule inferred for every grant origin | Overlap qualification |
| 70. Profile deletion does not deprovision and requires clearing provisioning references | Definition deletion explanation |
| 71. Role disablement/deletion is not deprovisioning of previously granted access | Definition deletion explanation |
| 72. Revocation differs from model maintenance | Requirement-focused removal guidance |
| 73. Entitlement removal does not delete accounts, even originally role-created | Removal closing |
| 74. Six original assessment purposes and worked reasoning | Changed-conditions exercises |
| 75. Two-system design and changed-context transfer | Worked support-analyst case plus open design exercise |

The original role-content table is explained through prose and the containment diagram; the original assignment-condition diagram is now an explicit expression with both matching and failing comparisons. No mechanism is omitted by changing presentation. The six original case purposes and answers remain, with source/account-specific evidence. The open transfer exercise gains a fully supplied ticketing/knowledge-base example and worked reasoning.

Additional useful clarity: identify the target as the receiver of a change; establish outstanding/current work before recovery; distinguish role-content removal propagation from recipient-assignment removal. The latter is a short verified boundary, not a premature full treatment of future role-change mechanics.

## Primary verification

Checked October 25, 2026. Links remain author-only.

| Official source | Claim and limits checked |
|---|---|
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Source access representation and use in bundles/roles. Actual effects are hypothetical target behavior, not inferred from labels. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single source, minimum one item, detection, applicable automatic-account selection and non-deprovisioning deletion. Exact account-selection criteria are not generalized to every path. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Direct entitlements/profile contents, service requirement, shared access, overlap, deletion/disablement and separately configured content-removal propagation. Standard provisioned access assumed here. |
| [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html) | Criteria, AND, identity list, enabled configuration, assignment loss and account retention. Example expression is not a complete production eligibility policy. |
| [Role/profile requests](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Configured request route, review and approved needs outside automatic criteria. No universal manager approval asserted. |
| [Entitlement requests](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) | Applicable individual requestability requires configuration. Not every item/tenant is assumed eligible. |
| [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Applicable evaluation and application of changes; processing does not validate target provisioning. No schedule or hidden execution trace invented. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported changes use separate source fulfillment. Existing accounts assumed; no universal account creation/retry/rollback policy taught. |
| [Monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Source/account activity and reported errors. Current target evidence remains a separate check. |
| [Identity access](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Roles, profiles, entitlements and assignment/account context in identity views. No claim of a live target query or complete original-grant history. |
| [Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Integration and account context; supporting source/connector meanings. |
| [Correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Account association distinct from collection. Correct links are supplied conditions, not tenant test results. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Population and per-attribute configuration differs from an access bundle. Full mapping mechanics remain elsewhere. |

The docs use Identity Services / Human Fabric branding. Keep the requested ISC course title. Actual operational use or publication requires checking the available services, connector support, tenant features and relevant configuration.

All example records, permissions, labels and outcomes are hypothetical. Existing finance and directory accounts are correctly associated, one relevant account per source. Main path has no prior listed permissions, alternate assignments, activation-dependent access or competing grants. Role is enabled with prepared access/assignment configuration and required Provisioning service. The relevant processing is supplied, not inferred from saving a definition.

Both systems accept the main continuation. The changed partial outcome explicitly supplies successful workspace/read operations and rejected supplier permission for insufficient integration authority. Detection and overlap change the main starting conditions; they are not combined into an unsupported universal grant/removal rule. Native application roles are represented only where the actual connector/configuration supports them.

The diagrams describe containment or logical work, not private services, universal parallelism/source ordering, atomic cross-system success, guaranteed post-write aggregation or simultaneous UI refresh. No tenant activity, permission change, role/profile edit, retry or revocation was performed.

## Assessment metadata

Learner questions, supplied facts and worked reasoning stay in the lesson.

| Exercise | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Two-source profile | One profile cannot contain both sources; role can combine useful single-source profiles and/or direct entitlement. Both alternative directory designs are acceptable. | Broad name removes profile's source restriction. |
| Similar title | AP_MANAGER fails stated AP_READER comparison. Other access/assignment paths remain unestablished. | Name similarity is automatic membership logic. |
| Detected profile | Existing contents can be recognized. Investigate collection/processing separately from original grant/approval history. | Represented profile proves new ISC grant. |
| Rejected supplier item | Trace exact account/source/content/assignment/operation. Authorized authority correction, controlled recovery and current target verification. Starting with known error or target evidence is acceptable. | Role or approval proves all target items delivered. |
| Overlap | Inspect other assigned role and target state; supplied continued requirement can preserve InvoiceRead. | Removing one role must remove every shared entitlement. |
| Deleted definition | Definition maintenance does not itself perform prior-access deprovisioning. Establish actual revocation and affected accounts/results; no account deletion inferred. | Delete/disable equals revoke. |
| Support-analyst transfer | Ticketing bundle is single-source; role combines knowledge item. Preexisting View tickets is not new delivery evidence; rejected knowledge grant leaves that requirement unfulfilled. | Grouping or neighboring success establishes complete access. |
| Chosen responsibility | Explain source access, meaningful grouping, eligibility, accounts, fulfillment and changed condition with evidence. Useful direct-entitlement designs are valid. | Memorized three-layer hierarchy explains operations. |

Verification anchors follow the primary-source table: profiles/roles for composition/detection/deletion; assignment/requests for recipients; provisioning/monitoring for delivery; roles for overlap and content changes.

## Explanation review

The opening uses a recognizable access requirement and then establishes identity, account, source and integration context. Necessary terms receive meanings before dependent decisions or operations. The normal model and automatic delivery mechanism are completed before request and detection variations.

The profile is motivated by missing supplier context, not merely defined as a bundle. Role is motivated by the source boundary and wider responsibility. The AND expression explains matching and failure. Delivery narration says which content requires which source operation and why a role assignment is insufficient target evidence.

The humanizer/read-aloud pass removes the employee story and teaching-method preamble while retaining concrete conditions, patient transitions and source/account distinctions. No greeting, forced slang, filler conclusion, learner citation or revision tag is required. Repetition was checked for purpose, not flattened into terse technical prose.

Author review is documentation-based. Beginner read-through, changed-context teach-back, graphical publication review and formal approval remain pending.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. They do not establish beginner comprehension.
- Local Markdown targets in specification, course register, README, author references, example register and current revision record: 669 checked, none missing.
- Saved learner source and register matched the reviewed drafts. No learner source/course link or URL, revision tag, named employee/24004, em dash, placeholder or teaching-method announcement was found.
- The two current diagrams match their inline blocks exactly. Both maximum widths are 41 columns, within the 42-column limit. Graphical publication review remains pending.
- The 75-purpose reconciliation preserves the six original case intents and worked reasoning. The account-selection and original-grant evidence qualifications remain; a supplied support-analyst transfer supplements the open design exercise. Counts are author coverage aids, not learning-performance evidence.
- First-use/pacing review removed the preliminary definition recap so source and entitlement meanings are introduced in their concrete context. Target is defined before target evidence is used. Read-through checked the model, matching, delivery and changed outcomes without imposing a common template.
- Preservation: 323 starting files became 326. Four existing files changed (FND-004, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 319 remain byte-identical. Earlier revised lessons and their records/assets, README, specification, historical diagrams, site code and remaining lessons are unchanged.
- Whitespace checks passed. Separate checks of all three new files produced no diagnostics; no-index exit 1 denotes their difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1 and staging remains empty. No commit, push, Pages deployment or tenant operation occurred.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending. Published FND-004 remains revision 1.0. Next local revision: FND-005.
