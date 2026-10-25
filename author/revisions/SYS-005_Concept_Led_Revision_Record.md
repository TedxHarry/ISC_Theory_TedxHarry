# SYS-005: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and comparison

- Current lesson: [Building access management is only the beginning](../../lessons/SYS-005_Implementation_Administration_Support_and_Governance.md).
- Revised in place, locally only. No new learner lesson, tenant action, staging, commit, push, or deployment is part of this task.
- Baseline revision 1.1 remains recoverable at commit 90b9f298860b0bc26d26259f084e129ac59331e0.
- The [earlier concept-led pilot](../pilots/SYS-005_Concept_Led_Pilot.md), [pilot review notes](../pilots/SYS-005_Concept_Led_Review_Notes.md), and their diagram remain unchanged historical comparison artifacts. Their old pending-adoption status describes that earlier review, not today's user-approved revision pass.
- The original [service-work diagram](../../assets/SYS-005_service_work_handoffs.txt) remains unchanged. Current [work and evidence handoffs](../../assets/SYS-005_work_and_evidence_handoffs.txt) is embedded verbatim in revision 2.0.
- Earlier revised lessons and their records are outside this task.

The pilot supplies the concept-led organization without a named employee narrative. Revision 2.0 adds the current beginner-pacing checks: a concrete connection/request problem before category definitions; explanation of account, source, collection, association, access representation, decision and delivery before their operational consequences; and explicit causes for the next action. Structure follows this topic, not a quota of diagrams, tables, terms or cases.

The neutral permission example is necessary to distinguish usable access from excessive access. It has no named company, employee biography, invented employee number, or account identifier. The incident, permissions, application behavior and outcomes are hypothetical supplied facts, not tenant observations.

## Baseline and pilot coverage reconciliation

Locations refer to learner headings or their subheadings. Preserving coverage means preserving the useful teaching purpose, not every original sentence or fictional value.

| Coverage item from baseline / pilot | Revision 2.0 treatment |
|---|---|
| 1. A successful connection is not a complete service | Opening; acceptance checks |
| 2. Appropriate access versus broad administrator shortcut | Start with the work |
| 3. Population, actions, resources, decision authority and end conditions | Start with the work |
| 4. Governance, implementation, administration and support meanings | Introduced against concrete responsibilities |
| 5. Overlapping responsibilities, not mandatory teams or fixed stages | Start with the work; handoff diagram explanation |
| 6. Existing enabled account; two review rights; payment exclusion | Agreement-to-ISC section |
| 7. Account versus identity and application account absence | Account explanation; no-account case |
| 8. Source versus connector versus actual application | Agreement-to-ISC section |
| 9. Aggregation reads information rather than performing the missing grant | Collection explanation; runbook reasoning |
| 10. Correlation associates accounts and identities | Correlation explanation |
| 11. Matching attribute purpose and population reliability | Attribute/employee-identifier explanation; no arbitrary numeric value required |
| 12. Entitlement meaning and native action boundaries | Entitlement explanation; permission example |
| 13. Single-source access-profile bundle and misleading names | Profile explanation |
| 14. Role concept and assignment origins | Continuing governance section |
| 15. Request recipient, configured manager decision and authorization | Request explanation; not universal routing |
| 16. Provisioning versus fulfillment and automated/manual execution | Delivery explanation; manual variation |
| 17. Technical account versus recipient account | Integration-authority explanation; incident |
| 18. Connector support versus configuration, privileges and available services | Integration explanation; capability gaps |
| 19. Existing-account boundary and account-creation exception | Acceptance and no-account case; strengthened enforcement caveat |
| 20. Approval followed by attempted delivery, target acceptance/rejection and usable result | Delivery explanation; incident and recovery |
| 21. Acceptance criteria definition | Readiness section |
| 22. Correct account, permitted actions, excluded payment and resource boundary | Acceptance checks |
| 23. Rejected request, visible failure, removal, retained access and exception checks | Acceptance checks |
| 24. No competing assignment assumed for simple removal illustration | Acceptance and review sections; no universal overlap rule |
| 25. Safe accounts/data and test versus production | Readiness section |
| 26. Connection-check scope and untested capability gaps | Readiness, incident and transfer |
| 27. Go-live begins operation, not the end of the responsibilities | Handover section |
| 28. Runbook purpose, conditions, authorized action, result and escalation | Handover section |
| 29. Why "aggregate whenever access is missing" is unsafe guidance | Three cause-dependent runbook paths |
| 30. Ownership/backup, schedules, evidence, limits and operation privileges | Handover and administration |
| 31. Credential meaning without secrets in instructions | Handover section |
| 32. Collection population/freshness, owners, failed and manual work | Administration section |
| 33. Manual task assignment is not target execution | Administration and manual variation |
| 34. No complaints and available reports are not a response process | Administration section |
| 35. Credential rotation differs from technical-account replacement | Separate maintenance explanations |
| 36. Incident symptom differs from diagnosis | Support section |
| 37. Request, decision, recipient account, operation and current native evidence | Support investigation |
| 38. Supplied both-write rejection and read-only replacement privileges | Incident evidence list; no universal check behavior |
| 39. Recent change alone does not prove cause; wrong fixes do not address cause | Support reasoning |
| 40. Partial and uncertain failures need operation-level investigation | Support boundary; recovery checks |
| 41. Scoped privilege correction, not unrestricted administrator access | Recovery section |
| 42. Current, manual, partial, pending/retry state before re-execution | Recovery and no-account cases |
| 43. Supported recovery, verified allowed/excluded actions | Recovery section |
| 44. Impact across accounts, operations and affected time; removals included | Recovery and 12-operation case |
| 45. Service restoration versus problem investigation and recurrence prevention | Recovery follow-up |
| 46. Unsupported operation needs redesign or an accepted manual arrangement | Recovery and manual variation |
| 47. Changed duties can end rights while account remains justified | Continuing governance section |
| 48. Campaign versus assigned certification; informed reviewer context | Continuing governance section |
| 49. Saved decision, required finalization/sign-off, execution and verification | Remediation explanation; changed-reviewer case |
| 50. Governing role assignment and accurate employee data must not be bypassed | Continuing governance section |
| 51. Access model meaning, repeated excess and description defects | Governance feedback |
| 52. Urgent withdrawal need not wait for periodic review | Continuing governance section |
| 53. Work/evidence handoffs and support return-to-operation/design feedback | Current diagram and explanation |
| 54. Request/activity/task/review views represent different work | Screen section |
| 55. Identity processing may lead to writes; completion is not target proof | Screen section |
| 56. Old observation versus later application state | Screen and runbook sections |
| 57. Rollback of configuration versus effects; deletion is not deprovisioning | Screen section and faulty-profile case |
| 58. Read-only/manual service still needs capability, ownership, timing, target evidence and refreshed observation | Manual variation |
| 59. Unmet withdrawal deadline requires design/risk decision | Manual variation and warehouse transfer |
| 60. Four changed-condition cases with worked reasoning | No account; other failures; changed reviewer; faulty profile |
| 61. Warehouse reader/supervisor, uncertain writes, pilot pressure and operating handover | Transfer exercise |
| 62. Teach-back connecting justified need through operation to withdrawal | Closing prompt |

No table quota was carried forward. The original functional handover comparison is explained in prose, with conditional reasoning, rather than removed. The historical unique account/employee values had no technical teaching role and were intentionally omitted.

## Current documentation review

Checked October 25, 2026 against official SailPoint documentation. These citations are author-only; the learner body contains no source links. No tenant operation was performed.

| Primary source | Claim checked and boundary |
|---|---|
| [Configuring sources](https://documentation.sailpoint.com/saas/help/sources/config_sources.html) | Source/connector connection and read-only capability distinctions. New-source/onboarding availability does not imply writable operation. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account data collection and scheduled observations; no universal schedule or latency promise. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching/association purpose; simple identifier illustration is not a complete correlation algorithm. |
| [Access overview](https://documentation.sailpoint.com/saas/help/access/index.html) | Entitlement and role concepts and their relationship to access grouping. |
| [Managing access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | One-source bundle; deletion dependencies and ordinary entitlement retention after definition deletion. No Just-In-Time activation behavior is generalized. |
| [Access request overview](https://documentation.sailpoint.com/saas/help/requests/index.html) | Requestability, recipient and configured approval; no universal manager route or assumed latest UI. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Access changes, supported manual arrangements and possible account creation. Existing-account policy is not itself an ISC creation-prevention setting. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Activity records and assigned manual tasks; evidence must be read at its actual scope. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Applying configuration starts recalculation; downstream delivery must be assessed separately. The last point is operational inference from separate evaluation and delivery, not a quoted universal status definition. |
| [Understanding certifications](https://documentation.sailpoint.com/saas/help/certs/understanding_certifications.html) | Assignment-origin constraints and finalized review versus remediation. Page carries phased-availability notice; no universal new UI/engine migration assumed. |

Current docs use Identity Services / Human Fabric naming. The user-requested ISC course title is retained. Validate applicable services, connector documentation, release availability and actual tenant behavior before publication or operational use.

The four responsibilities, acceptance criteria, runbook design, incident/problem distinction, impact assessment, recovery coordination and change-control reasoning are author-developed operating guidance. They are not four product execution phases or a mandatory organizational framework.

The incident's connection test, replacement-account privileges and pre-application rejection are supplied hypothetical facts. They demonstrate a causal investigation, not documented behavior of every connector. No universal retry, cancellation, rollback or automatic manual-task creation is promised.

## Assessment and explanation review

- Four short cases ask the learner to decide before reading the worked reasoning. They test design boundary, impact scope, authorized reversal and delivered-effect correction, not memorization of category names.
- The transfer changes the application and work populations, retains uncertain write support and adds timing pressure. It requires requirements, capability evidence, safe acceptance, handover and ongoing coordination.
- Definitions are introduced where their purpose becomes necessary. Connecting sentences explain why the next decision/action depends on the preceding information.
- Prose review checked neutral examples, no named narrative, simple cause/effect, conditional rather than universal product claims, first-use explanation, and no fixed visual/assessment quotas.
- A read-through by the author is not observed beginner understanding. Real learner interpretation, teach-back, graphical rendering and formal publication approval remain pending.

## Executed verification

- `npm test`: all four existing navigation/disclosure tests passed; zero failures. This tests navigation behavior, not comprehension or publication rendering.
- Local Markdown link check across teaching specification, course register, author references, example register and this record: 536 checked, none missing.
- Learner source matched the reviewed draft. No learner URLs, source/course links, revision metadata, named fictional employee, historical account/employee ID, em dash, placeholder or teaching-method announcement was found.
- Current diagram matches the inline block and editable text asset, with a maximum width of 39 columns against the 42-column limit.
- Coverage reconciliation contains 62 purpose-level items; all four changed-condition cases and the independent warehouse transfer retain worked reasoning. This is an author comparison, not measured learner performance.
- Explanation polish replaced unexplained early "assignment" references with rules/access packages, explained role qualification rules, replaced unnecessary "target" wording with "application", and unpacked configuration dependencies. No new coverage was removed.
- Preservation check: 311 starting files became 313; four existing files changed (SYS-005, course register, author references and example register), two files added (current diagram and this record), zero removed, 307 byte-identical. Earlier revised lessons, six pilot artifacts, earlier revision records, historical assets, specification, design, README and site code remain unchanged.
- `git diff --check` passed. Separate no-index whitespace checks for the two untracked new files returned no diagnostics; exit 1 denotes their difference from NUL, not a whitespace fault.
- Learner file count remains 91. HEAD remains 90b9f298860b0bc26d26259f084e129ac59331e0; staged area remains empty. No commit, push, deployment or tenant action was performed.
- Real beginner read-through/teach-back, graphical publication review and formal approval remain pending. Next revision target is SYS-006 in a subsequent task, locally only.
