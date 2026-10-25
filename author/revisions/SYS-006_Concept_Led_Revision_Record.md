# SYS-006: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

## Scope and preservation

- Current learner file: [Follow the access problem across the systems](../../lessons/SYS-006_Following_an_Access_Problem_Across_the_Enterprise.md).
- Revision 1.1 remains recoverable at commit 90b9f298860b0bc26d26259f084e129ac59331e0.
- Current editable diagram: [records, decisions and delivery](../../assets/SYS-006_records_decisions_and_delivery.txt), embedded verbatim in revision 2.0. The separate three-line criteria block is a logic illustration, not a second diagram asset.
- Historical [enterprise access map](../../assets/SYS-006_enterprise_access_map.txt) remains unchanged. Earlier lessons, pilots, revision records, specification and site code are outside this task.
- Local revision only. No staging, commit, push, Pages deployment or tenant action is authorized.
- Next revision target is FND-001 in its existing path on a subsequent task. ROL-007 remains the paused next-new-lesson reservation.

The learner explanation uses a neutral report-viewing problem rather than a named employee story. FIN/OPS, ACTIVE, observation times and WH1/WH2 remain because they carry the comparison, record-selection and evidence reasoning. Invented employee numbers, account keys and a technical permission constant were removed because they did not change this mechanism. Actual investigations still require real record identifiers and source context.

The teaching sequence follows the problem: locate the person/account, distinguish collection and association, explain input selection, evaluate the consuming condition, then follow delivery and use. Later sections change the evidence and show how that changes the investigation. No diagram, table, word or question quota determined the structure.

## Baseline coverage reconciliation

| Original teaching purpose | Revision 2.0 location or treatment |
|---|---|
| 1. HR completion, enabled account and connection success can coexist with missing access | Opening and specific denied operation |
| 2. Approved active-Finance viewing requirement excludes edit/export | Opening; corrected-path checks; policy-shortcut case |
| 3. Existing suitable account, successful sign-in, missing right, no alternate grant | Opening and main-path conditions |
| 4. Account versus identity | Same-person records section |
| 5. Different problems hidden by "reporting doesn't work" | Precise operation in opening; changed-evidence and sign-in sections |
| 6. HR, directory, application and ISC records are separate | Records section |
| 7. Directory meaning and independently held department | Records section |
| 8. Source representation versus application; connector integration | Collection section |
| 9. Aggregation reads data and does not establish universal inclusion/freshness | Collection section and stale-input variation |
| 10. Account correlation associates records with the identity | Collection section; main verified relationships |
| 11. Business/person identifier versus source/account identifier; display-name ambiguity | Records section and real investigation notes |
| 12. Attribute means named information on a particular record | Mapping section |
| 13. Same attribute label is not one shared value | Mapping section; first case |
| 14. Authoritative population versus per-attribute authority | Identity profile explanation and approved HR design |
| 15. Mapping meaning, selected input or calculation | Mapping section |
| 16. HR population does not require every attribute from HR | Identity profile explanation |
| 17. FIN/OPS and ACTIVE meanings and employment/account/processing distinction | Observation-table explanation |
| 18. Transfer and collection times are fictional evidence, not latency guarantees | 08:00 / 08:10 / 08:15 context |
| 19. Current external records differ from collected observations | Table and collection explanation |
| 20. Actual department selection is directory, status selection is HR | Table, reasoning and current diagram |
| 21. Available HR FIN does not override selected directory OPS | Mapping trace |
| 22. Repeating unchanged HR collection does not redirect selection | Mapping trace and collection-repeat case |
| 23. Directory follow-up differs from correcting agreed mapping authority | Mapping trace |
| 24. Role meaning and automatic qualification | Role section |
| 25. Assignment criteria meaning; both conditions combined with AND | Three-line criteria and explicit true/false reasoning |
| 26. Identity criteria versus account/entitlement input types | Role section, after entitlement meaning |
| 27. Entitlement, single-source profile and chosen role contents | Role section |
| 28. Who qualifies versus what is required versus native meaning | Role section |
| 29. Identity processing applies mappings and evaluates access | Processing explanation |
| 30. Provisioning and target meanings; one existing recipient account | Delivery explanation |
| 31. Required services, enabled role, correct contents and supported write are supplied conditions | Main-path boundaries |
| 32. False condition yields no new assignment/grant through this path | Explicit OPS/FIN and ACTIVE/ACTIVE comparison |
| 33. No new grant is not a failed attempted provisioning operation | Criteria-result explanation and changed-role case |
| 34. Reasoned comparison is not a promised per-criterion log | Explicit evidence boundary |
| 35. Data/decision map distinguishes selected inputs, branches, delivery and observation | New diagram and adjacent prose |
| 36. Map is not topology, automatic diagnosis or instant round trip | Diagram explanation |
| 37. Investigate backward from application or forward from HR | Investigation section |
| 38. Connected evidence supports cause; empty activity alone does not | Investigation section and forward causal explanation |
| 39. Wrong corrections: HR corruption, password reset, repeated collection | Correction section |
| 40. Shared mapping impact can change other people's eligibility in the opposite direction | Counterexample with directory FIN and HR OPS |
| 41. Dependency meaning, consumers and population assessment | Correction section |
| 42. Preview is not target operation verification | Correction and corrected-path sections |
| 43. Temporary grant needs separate authorization, scope, tracking and removal | Correction section |
| 44. Saved mapping, applied identity, qualification, role, required access and delivery | Corrected continuation |
| 45. Reported write, current permission, usable operation and excluded rights | Corrected continuation evidence table |
| 46. Safe test data, preserve original evidence, no automatic post-write collection promise | Correction and continuation |
| 47. Corrected identity does not itself update directory; separate attribute synchronization | Continuation and synchronization explanation |
| 48. Authentication versus authorization; front end versus trusted enforcement | Sign-in section |
| 49. Identity provider, sign-in account relationship, ISC correlation and session | Sign-in section |
| 50. Wrong session account and retained permission information require their own evidence | Sign-in variations, explicitly conditional |
| 51. Collection, assignment, delivery and enforcement variations | Four changed-evidence subsections |
| 52. Technical integration account differs from recipient privileges | Rejected-delivery variation |
| 53. UI records and Search answer different questions; scope, time and freshness | Screen section |
| 54. Investigation notes need identifiers, observation time and claim meaning | Screen section |
| 55. Mark unknown, avoid downstream blame, allow coexisting faults and reverify | Evidence trail and changed-evidence conclusion |
| 56. Four original case purposes and worked answers retained | Changed-record cases |
| 57. Contractor WH2/WH1 transfer retains configured facts and remaining checks | Independent transfer exercise |
| 58. Connected teach-back identifies producer, selector, consumer, change and evidence | Closing prompt |

The original evidence-comparison table is now a short causal evidence trail. This changes presentation, not the questions it answered. The baseline broad ASCII map is preserved historically and replaced by a narrower current source to meet the current width constraint.

## Current primary-source verification

Checked October 25, 2026. Sources remain in author records, not the learner body.

| Reference | Claim checked and scope |
|---|---|
| [Configuring sources](https://documentation.sailpoint.com/saas/help/sources/config_sources.html) | Source/connector and external-system distinction; readable does not mean all writes are supported/enabled. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Account collection, scope and observation; no fixed refresh schedule prescribed. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Correlation purpose; main case assumes verified associations and does not teach a full matching algorithm. |
| [Creating identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Population, source-selectable mappings and preview; saved selection differs from applied result. |
| [Automating role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html) | Configured criteria input types, AND meaning and processing application. Hypothetical criteria use identity attributes only. |
| [Managing roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Role grouping, required access and enabled configuration. This lesson uses a standard role; it does not teach dynamic dimensions. |
| [Managing access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | One-source entitlement bundle. Chosen profile path is not a requirement that all role entitlements pass through profiles. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Mapping/role evaluation and explicit lack of downstream provisioning-success validation; no fixed schedule/engine internals inferred. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Account/access changes through supported delivery; existing-account scope avoids account-creation assumptions. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Activity records for attempts, errors and results; empty results are not conclusive alone. |
| [Synchronizing attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Separate configured write from identity to eligible correlated source accounts. No implication that collection/mapping automatically enables synchronization. |
| [Viewing identity control panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Identity attributes/profile/access evidence; no screen is treated as an independent proof of application authorization. |
| [Search FAQs and sample data models](https://documentation.sailpoint.com/saas/help/search/search_guide.html) | Search freshness and history scope; no exact delay/retention promise reproduced. |
| [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) | Authentication/authorization and trusted-side enforcement rather than hidden interface controls. |
| [Microsoft Entra access revocation guidance](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) | Application-owned session context can be separate from sign-in authority. Microsoft-specific expiry values are not generalized. |

Current official docs use Identity Services / Human Fabric naming. The requested ISC course title is retained. Tenant services, connector capabilities and applicable release availability need separate validation before operational use or publication.

The supplied values, configuration, timing, application permission rule, rejected-write variation and successful continuation are hypothetical. No source aggregation, mapping edit, processing, role assignment, provisioning, synchronization, application test or tenant change occurred.

Criteria mismatch explains the absence of a new grant from this supplied path only. It does not reconstruct every historical assignment or exclude independent grant paths without evidence. Source selection is wrong because it conflicts with the supplied approved design, not because HR is universally required for department.

The map is an author-developed dependency aid and causal explanation. It is not a representation of private ISC architecture, a guaranteed execution trace or an automatic troubleshooting feature.

## Assessment review

| Learner prompt and supplied facts | Intended reasoning and acceptable alternative | Misconception tested |
|---|---|---|
| HR FIN, identity OPS/ACTIVE, identity-attribute FIN criterion, no other qualifying path | Read the configured record type; inspect selection and processing. A different real input type would require a different investigation, not silently changing these supplied facts. | Any record containing FIN satisfies any department comparison |
| HR FIN collected, directory OPS still selected; repeat collection proposed | Same input cannot redirect selection; assess/correct the shared design. New independent changes can have effects but are not evidence that repetition repairs this defect. | Aggregation universally repairs downstream access |
| Role present, addition rejected, native permission absent | Required access is not fulfilled; follow actual operation evidence and authorized delivery recovery. Verify permission and use. | Assignment proves delivery |
| Replace Finance-and-active condition with active alone | Broader population violates requirement; correct input or obtain a new authorized policy. | Making one person qualify makes a shared rule correct |
| Contractor register WH2 collected, selected directory WH1, identity WH1, enabled WH2 role, correlated existing account, processing run | Explain false comparison, assess shared correction, then verify identity/role/write/permission/use and unintended effects. Different investigation starting points are acceptable. | Upstream correction proves every later outcome |
| Connected teach-back | Explain producer, selector, consumer, required change, observations and remaining uncertainty. Exact wording is not required. | A list of components explains their causal relationship |

The changed-evidence subsections are demonstrations, not an additional fixed case quota. They show how a stale collected input, unassigned role, rejected write or denial despite a permission changes the next useful evidence.

## Explanation and narration review

- Concrete operation and supplied starting conditions precede a systems map.
- Account, identity, directory, source, connector, collection and association are explained before input-selection reasoning relies on them.
- Mapping is explained as a selected value path, not just a definition. Role eligibility then consumes that path's result.
- Entitlement meaning precedes its use in the alternative criteria-input explanation.
- Criteria, assignment, attempted delivery, reported success, current rights and actual use are distinguished without claiming a private execution order or per-comparison log.
- Necessary conditions remain beside the mechanisms they qualify. Later variations do not overwhelm the basic input-to-decision explanation.
- Neutral values carry the reasoning; no biography, invented account keys, greetings, teaching-method promises or source citations appear in the learner body.
- Prose/read-aloud review checked causal bridges, plain language, unnecessary repetition, sentence rhythm, no em dashes and no claims of demonstrated learner confidence.

Real beginner interpretation/teach-back, graphical publication rendering and formal approval remain pending. Author review and file checks cannot establish them.

## Executed verification

- `npm test`: four existing navigation/disclosure tests passed, zero failures. These do not test comprehension or graphical publication quality.
- Local Markdown targets in the specification, course register, author references, example register and this record: 539 checked, none missing.
- Saved learner source matched the reviewed draft. No source/course links, URLs, revision metadata, named fictional employee, historical invented identifiers, em dash, placeholder or teaching-method announcement was found.
- Current diagram and text asset match exactly; maximum width 42 columns. The separate criteria block retains FIN AND ACTIVE and is not confused with the editable map.
- Purpose-level comparison reconciles 58 baseline coverage items. Four changed-record cases, four changed-evidence demonstrations, the contractor transfer and connected teach-back remain present. Counts do not prove learner understanding.
- First-use review moved the alternative entitlement-input discussion after the entitlement explanation, expanded ISC at its opening mention, and replaced premature source-identifier wording with ordinary system context. This preserves the mechanism while reducing unnecessary terminology jumps.
- Preservation check: 313 starting files became 315. Four existing files changed (SYS-006, course register, author references and example register); two files were added (this record and the current diagram); none were removed; 309 remained byte-identical. Earlier learner lessons, pilots, historical assets, earlier revision records, specification, design, README and site code remain unchanged.
- `git diff --check` passed. Separate no-index whitespace checks for both added files produced no diagnostics; exit 1 means the new file differs from NUL, not a whitespace error.
- Learner file count remains 91. HEAD remains 90b9f298860b0bc26d26259f084e129ac59331e0 and staging remains empty. Nothing was committed, pushed, deployed or changed in a tenant.
- Actual beginner read-through/teach-back, graphical publication inspection and formal approval remain pending. FND-001 is the next revision, not an additional file drafted in this task.
