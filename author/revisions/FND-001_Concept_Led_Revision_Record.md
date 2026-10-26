# FND-001: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope

- Revised learner file: [Identity and account](../../lessons/FND-001_Identity_and_Account.md), in ISC_Theory_TedxHarry only.
- Baseline revision 1.3 is recoverable at commit 895c6b5b295c926d5397239db521abc1c8b639d1 and the retained earlier course history.
- Current [identity/account association map](../../assets/FND-001_identity_and_associated_accounts.txt) is embedded verbatim. No older asset is overwritten.
- The user confirmed keeping all 91 existing lessons while revising them one at a time. This task revises only FND-001. The six revised Module 1 lessons and the 84 other learner files remain unchanged.
- Local revision only. No staging, commit, push, deployment or tenant activity is part of this task. The published site continues to show FND-001 revision 1.3 until a further publication is requested.
- Next revision: FND-002 in its existing file. ROL-007 remains the paused next-new-lesson reservation.

A named employee narrative is replaced with minimal records. The employee number 10482 is retained because an explicit matching value and its distinction from an ISC technical ID teach the relationship. staff-a and finance-b show why different usernames do not decide ownership. Field names employeeNumber, employeeId and workerNumber describe this illustration, not mandatory connector fields or universal ISC defaults.

The flow starts with the objects and their external/ISC representations, then explains population creation and association before variations. The diagram shows relationships rather than a private processing engine. There is no fixed diagram, table, case or word quota.

## Baseline coverage reconciliation

| Baseline purpose | Revision 2.0 treatment |
|---|---|
| 1. Discover accounts across systems despite different usernames | Opening; selected record table |
| 2. HR record, directory account and finance account already exist | Starting conditions |
| 3. Account meaning within a system/source context | Account section |
| 4. Source meaning and configured representation | Account section |
| 5. Connector meaning and operation support | Account section |
| 6. HR worker account need not be an interactive/password login | Account section |
| 7. Attributes and account-schema meaning | Identity/account attribute explanation |
| 8. External account versus ISC representation | Account section |
| 9. Current target versus earlier observation | Account and changed-value sections |
| 10. Employee identity as person-level record, not another source account | Identity section |
| 11. Identity attributes connect accounts and access context | Identity section |
| 12. Same department name on different records can hold different values | Identity and changed-value sections |
| 13. Aggregation meaning | HR-first trace |
| 14. Prepared configuration and required identity information | Explicit main-path assumptions |
| 15. Authoritative population and identity-profile meaning | HR-first trace |
| 16. Mapping purpose and selected inputs | HR-first trace |
| 17. HR supplies number/department in this example, not universally every value | HR trace and email alternative |
| 18. Employee number differs from system-generated identity ID | Record-table explanation |
| 19. Existing external accounts are not created by identity establishment | HR trace |
| 20. Directory comparison pairs employeeId with identity employee number | Association trace |
| 21. Finance comparison pairs workerNumber with identity employee number | Association trace |
| 22. Account-correlation meaning | Before comparing and assigning directory account |
| 23. Reliable unique intended match, not username equality alone | Main assumptions and association trace |
| 24. One identity, three accounts, records remain separate | Diagram, adjacent prose and first case |
| 25. Association does not rename external accounts | No-write main conditions and map explanation |
| 26. Association does not establish appropriate access | Map explanation |
| 27. First-time empty account-side identifier comparison | Changed-comparison section |
| 28. One failed comparison versus full configured/default outcome | Changed-comparison section |
| 29. Supplied no-other-match boundary before claiming uncorrelated | Explicit variation assumptions |
| 30. Investigate source of missing value and actual matching configuration | Changed-comparison section |
| 31. Identity existence does not prove a new application's account exists | Account-creation section |
| 32. Provisioning purpose, required values, configuration and delivery | Account-creation section |
| 33. Configured lifecycle-driven automation can initiate changes | Lifecycle-state meaning in creation section |
| 34. Initiation/result/current account evidence remain separate | Creation section and fourth case |
| 35. Several accounts on the same source can relate to one identity | Multiple-account section |
| 36. Distinct account access and precise account selection | Multiple-account section |
| 37. Missing account: absent externally, uncollected, out of scope or association issue | Missing-link section |
| 38. Source-account versus identity-view evidence | Missing-link and evidence sections |
| 39. Do not create duplicate accounts to repair an unexplained missing link | Missing-link section and transfer |
| 40. Changed HR value, relevant collection and identity processing | Changed-value section |
| 41. Updated identity department does not prove changed finance account | Changed-value section |
| 42. Attribute synchronization is separate configured provisioning for existing correlated accounts | Synchronization explanation |
| 43. Inspect mappings, observation, expected sync, events/activity and current target | Four-question evidence table |
| 44. Four original checkpoint purposes retain supplied facts and worked answers | Relationship cases |
| 45. Independent teach-back separates population, relationship, creation and updates | Contractor transfer and closing prompt |

Added clarifications support rather than replace those purposes: source-record schema does not populate an identity by itself; equal-looking identifiers need reliable meaning; wrong association differs from missing association; the map does not assert universal loading order; and a contractor transfer supplies unfamiliar-context reasoning before the open teach-back.

## Current primary-source review

Checked October 25, 2026. References are author-only.

| Primary reference | Claim or boundary checked |
|---|---|
| [Identities overview](https://documentation.sailpoint.com/saas/help/identities/index.html) | Person-level representation and account/access context. This lesson focuses on human workers; not all supported identities are necessarily people. |
| [Source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account attributes and their schema; no schema-edit instructions or invented field constraints. |
| [Configuring sources](https://documentation.sailpoint.com/saas/help/sources/config_sources.html) | Source/connector/data and operation distinction; representing the system does not replace it. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collection supplies information within scope; no live-view or timing guarantee. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Population establishment, required information and per-attribute mapping from selected sources. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured association, applicable default behavior and first-time comparison boundary. No full fallback/manual-persistence algorithm is taught here. |
| [Managing source accounts](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source view, multiple accounts on a source and uncorrelated relationships. Current docs mention shadow representations; no blanket claim that an uncorrelated account means no identity-shaped representation exists is made. |
| [Identity control panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Identity attributes and access evidence from the person-level view. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported account/access changes, configured lifecycle-driven initiation and fulfillment arrangements. |
| [Processing identity data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Applied identity information and distinct downstream delivery; no universal immediate write completion claim. |
| [Attribute synchronization](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured writes to existing correlated accounts, eligibility and activity evidence. No implication that correlation enables sync or sync creates missing accounts. |
| [Account details](https://developer.sailpoint.com/docs/api/get-account-v-1/) | Separate account ID, source and identity references; cited for object distinction only, not an endpoint walkthrough. |
| [Identity details](https://developer.sailpoint.com/docs/api/get-identity-v-1/) | System-generated identity ID differs from organization-managed business attributes; no API call performed. |

Current official pages use Identity Services / Human Fabric branding. The requested ISC title is retained. Tenant services, connector representation and actual configuration still require environment-specific checking.

Main records, values and successful associations are hypothetical, with prepared configuration and no target writes in the walkthrough. The HR-first sequence explains these facts, not a universal workflow. Missing-value variation concerns a never-associated account and explicitly excludes other applicable successful matching. Existing or manually maintained associations need separate investigation.

The identity/account distinction does not promise that correlation can never lead to separately configured downstream activity. It establishes that the relationship is not itself evidence of creating or renaming another target account.

No aggregation, source/profile/schema edit, association correction, lifecycle action, provisioning, attribute sync or application test was executed.

## Assessment mapping

| Prompt / supplied facts | Expected reasoning and acceptable alternative | Misconception |
|---|---|---|
| One employee identity, three successfully associated records | One identity, three distinct source records; separate account details remain. Explanatory wording may differ. | Count accounts to count people, or association merges accounts |
| Account confirmed externally and collected, expected link absent | Collection established; investigate current association, matching values, identity input and complete behavior. Missing cause is a valid conclusion. | Missing identity link proves missing external account |
| Identity Operations, collected finance account Finance | Separate records, value origins, observation time, intended sync and actual update evidence. Different values may be correct or stale. | Different values prove failed identity processing |
| Identity exists, new account absent, associate directory account proposed | Relationship is not target creation; inspect supported provisioning, fulfillment and actual resulting account. | Correlation creates accounts in another application |
| Contractor warehouse account exists/collected but person link unresolved | Investigate accurate identity relationship before duplicate creation; verify authorized correction and assess access separately. | A second account fixes an association, or correct link proves rights |
| Application-of-choice teach-back | Explain population, object roles, selected information, association, creation, update and evidence. No exact script required. | Memorized names establish causal understanding |

## Explanation review

Meaning precedes dependent processing. The small record table supplies the value being compared; the trace names why the association follows. A separate relationship diagram follows the successful explanation, so the learner has already met its objects. Creation, multiple accounts, missing links and changed attributes each build on the distinction rather than introduce a continuing biography.

The author's read-through checked plain language, patient transitions, first-use meanings, redundant cautions, causal completeness and a personal mentor tone. No greeting, invented company, named employee, em dash, source link or learning-method announcement belongs in the learner body.

Real beginner read-through/teach-back, graphical publication inspection and formal approval remain pending. Author comparison and structural checks cannot establish comprehension.

## Executed verification

- `npm test`: four navigation/disclosure tests passed, zero failures. Navigation testing is not comprehension testing.
- Local Markdown targets in teaching specification, course register, README, author references, example register and this record: 646 checked, none missing.
- Saved learner source matched the reviewed draft. No source/course URLs or links, revision metadata, named employee narrative, old usernames, em dash, placeholder or teaching-method announcement was found.
- Current association diagram matches the editable asset exactly; maximum width is 38 columns against the 42-column limit.
- Coverage comparison contains 45 baseline purposes, with the four original checkpoint intents, a contractor transfer and independent teach-back preserved. These are author checks, not evidence of learner confidence.
- Preservation: 316 starting files became 318. Five existing files changed (FND-001, course register, README, author references and example register), two were added (this record and diagram), none were removed, and 311 remained byte-identical. All 90 other learner lessons, earlier records, pilots, site templates/CSS/manifest, historical assets, specification and design remain unchanged.
- A separate comparison against the preserved original ISC_Theory working-folder snapshot found no changed, added or removed files there.
- `git diff --check` passed. No-index whitespace checks for both added files emitted no diagnostics; exit 1 reflects their difference from NUL, not a whitespace fault.
- Learner lesson count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1 and staging is empty. No commit, push, deployment or tenant action occurred; published FND-001 remains revision 1.3.
- Beginner read-through/teach-back, graphical publication inspection and formal approval remain pending. Next revision is FND-002 in this new local repository.
