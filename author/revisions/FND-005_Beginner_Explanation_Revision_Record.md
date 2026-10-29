# FND-005 beginner explanation revision record

Revision 3.0. Module 2.5. Teaching specification 3.2. October 28, 2026.

[Current learner](../../lessons/FND-005_Sources_Access_Applications_Catalogs_and_Sign_In.md).
[Historical revision 2.0 record](FND-005_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).

## Scope and baseline

This continues the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. FND-005 is eleventh of 91 existing lessons, leaving 80; FND-006 is next and is not revised here.

The six Module 1 revisions and FND-001 through FND-004 revision 3.0 are preserved. SYS-001 through SYS-003 remain published; later completed beginner revisions remain local. No new learner is counted. ROL-007 remains reserved without a stub, with 116 core and six optional foundation lessons awaiting new authoring.

Baseline FND-005 revision 2.0 is recoverable at main 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4, the author-only follow-up to published content 63ca4364628ade00fafc1450534aaf60e0b0a9ea. Its earlier record and four historical diagram assets remain unchanged.

Permanent lesson title, ID, Markdown/HTML route, order, manifest, shared UI and teaching specification remain unchanged. No staging, commit, push, deployment, request or ISC/native operation is part of this task.

## Explanation and full author read-through

The opening locates real business software and its two account records before introducing the technical integration. Directory group control is explained as the example's chosen application design, so the directory update has a reason rather than being an unexplained requirement.

Source, connector, collection, correlation, entitlements and profile meanings are placed beside the jobs they explain. The account's destination is supplied before the selected profile is followed into provisioning.

The access application gives the business access a recognizable grouping. Its source setting and first diagram do not invent another connector, directory or expense-account collection. Catalog offerings and existing-access inventory remain different kinds of information.

The request trace identifies one profile, self recipient, one directory account initially lacking EXP_SUBMIT, completed required review and accepted target update. Claim approval remains a separate business permission.

Sign-in starts separately at the actual expense service. Authentication, IdP, trust, SSO and authorization are explained before being used in the success trace. The two account relationships are explicit: directory account to ISC person, and sign-in to native expense account. Current group data and the selected enabled account are supplied conditions.

The saved learner was read in three contiguous portions as a simulated beginner, including both diagrams, discovery/segment distinctions, password/deletion boundaries, all five worked cases and reporting transfer. Targeted refinements expanded ISC at its first use, defined native as application-held data, avoided using source before its meaning, added permission meaning and explained SSO without an unexplained credential term.

The password paragraph now expressly conditions its operation on supported configured password management. The later reporting transfer provides a different valid native-source design without silently making the directory-backed example universal.

Two diagrams and two tables serve the topic. Counts, headings and length follow the explanation rather than a template. Simulated author read-through, source reconciliation and structural checks do not establish actual independent beginner comprehension. Learner validation remains pending separately from continuation of the authorized sequence.

## Preserved coverage

All 77 essential purposes from the preceding reconciliation are retained.

| Previous essential purpose | Current explanation |
|---|---|
| 1. Ambiguous application-access complaint requires locating the failed boundary | Opening separates discovery, approval, account delivery and actual business operation before a repair. |
| 2. Existing directory and expense accounts are separate records | Opening establishes existing directory and expense-system accounts as different records for one person. |
| 3. Enterprise application meaning | Real software used for claims defines enterprise application. |
| 4. Account, identity, source and connector meanings | Account/person/source/connector meanings are introduced where each job becomes relevant. |
| 5. Aggregation and correlation meanings, correct established association | Collection and person association are decoded; main directory account is already correctly linked. |
| 6. Only directory source configured; expense account already exists | Corporate-Directory is the only source; expense account already exists outside that collection. |
| 7. Submit own claims differs from approving others | Submit-own and approve-others are separate operations and permissions. |
| 8. Directory group chosen as control input, not universal app design | Directory memberships are an explicit chosen control arrangement, not the only valid design. |
| 9. Entitlement meaning and EXP_SUBMIT/EXP_APPROVE meanings | Entitlements represent EXP_SUBMIT and EXP_APPROVE with their distinct supplied meanings. |
| 10. Fictional names/effects, not SailPoint defaults | Group names/effects are illustrative rather than standard SailPoint defaults. |
| 11. Application consumes trusted group information and other account requirements | Current group information, intended expense account and other requirements remain required. |
| 12. Access profile is single-source bundle, including valid one-item example | Submit/Approve profiles bundle directory entitlements; one-item and single-source constraints remain. |
| 13. Choose Submit, not approval package | Employee chooses Submit expenses without receiving claim-approval authority. |
| 14. Delivery targets directory, not automatic native account creation/direct native write | Membership change targets directory, with no invented native expense write or account creation. |
| 15. Profile does not create same-named directory group | Submit expenses profile references EXP_SUBMIT without creating a same-named directory group. |
| 16. Other organization can use native application connector | Native application integration is a valid alternative design, developed in reporting transfer. |
| 17. Access application organizes profiles and configured password management | Access application organizes source profiles for requests and supports configured password management. |
| 18. Account-source meaning identifies relevant account/access dataset | Account source identifies the dataset/account context of this configuration. |
| 19. Source choice does not install another connector | Account-source selection does not install another connector. |
| 20. Grouping versus actual software versus source | Expense software, Expenses grouping and Corporate-Directory source have distinct jobs. |
| 21. Branches are grouping, not network/write flow | First diagram branches group choices rather than describing grants or network links. |
| 22. Same or different names do not merge objects or prove errors | Matching/different names neither merge objects nor determine correct source design. |
| 23. One source supports multiple access applications | Knowledge/Read knowledge/KB_READ illustrates a second grouping using the same directory source. |
| 24. Catalog means discoverable offerings, not complete held-access inventory | Catalog is discoverable offerings rather than a complete account-permission inventory. |
| 25. Requester versus recipient | Requester initiates; recipient is intended identity; main path is self-request. |
| 26. Request meaning and requestability distinct from approval/delivery | Access request and requestable meanings precede selected-item and delivery reasoning. |
| 27. Selecting grouping still requires selected profile | Expenses leads to profile choices; a particular profile still must be selected. |
| 28. One profile selection does not select all grouped profiles | Selecting Submit does not request every grouped profile. |
| 29. Profiles can be independently offered; applicable roles/entitlements too | Independent profiles and applicable entitlement/role offerings remain possible. |
| 30. Role meaning includes profiles and entitlements | Supporting role definition includes profiles and entitlements. |
| 31. Same underlying profile offered through different presentation routes | Different discovery routes can lead to the same configured profile/access item. |
| 32. Experience/configuration affects presentation; no universal UI walkthrough | Presentation depends on request experience/settings; no universal click sequence is prescribed. |
| 33. Application enabled/request visible, profiles linked and applicable request settings | Visibility/enabling, associated profiles and applicable item request settings are explicit. |
| 34. Grouping visibility differs from profile definition/request review configuration | Grouping visibility, package contents and request/review configuration perform different jobs. |
| 35. Empty grouping is not a configured access package | Empty grouping does not replace a configured access profile. |
| 36. Identity attribute and segment meanings | Identity attribute and request segment are explained through department and targeted requesters. |
| 37. Requester visibility differs from administrator's broader view | Broader organization-admin view does not establish ordinary requester visibility. |
| 38. Requester can request visible items for authorized other recipients | Visible item can be requested for an authorized other recipient under documented segmentation. |
| 39. Recipient outside segment is not automatically barred by that segment | Recipient outside requester's segment is not automatically excluded by that segment. |
| 40. Actual recipient eligibility/review still required | Recipient qualifications/review remain necessary, illustrated by Finance approval authority. |
| 41. Unsegmented items can remain broadly requestable under other settings | Unsegmented items can remain broadly requestable under their other settings. |
| 42. Check actual requester, settings and held-access restrictions before broad changes | Missing-offering investigation compares actual requester, settings, audience and already-held restrictions. |
| 43. Main own-request has visible offering, configured process and one account without EXP_SUBMIT | Main request supplies visibility/configuration, self recipient and account initially without EXP_SUBMIT. |
| 44. Request item/recipient resolves to source entitlement and intended operation | Selected profile identifies the exact source entitlement, account and intended membership work. |
| 45. Approval meaning and no universal reviewer/sequence | Approval permits requested access under configured review, with no universal approver/sequence. |
| 46. ISC request approval differs from claim approval | ISC access approval differs from approving a business expense claim. |
| 47. Provisioning meaning and directory as target receiving change | Provisioning is defined and directory is the receiving target despite expense business purpose. |
| 48. Successful membership delivery is supplied, not proof of sign-in/use | Accepted membership update is a supplied result; sign-in and use are still unestablished. |
| 49. Directory rejection cannot be overridden by catalog or approval | Directory rejection requires operation/error investigation rather than catalog renaming or approval repetition. |
| 50. Request/activity/results/current directory/later collection have different evidence roles | Request, activity/result, current directory and later aggregation answer distinct evidence questions. |
| 51. Authentication, IdP and SSO meanings | Authentication, IdP, trust and SSO have local plain-language meanings before the sign-in trace. |
| 52. SSO can avoid a new prompt without granting every permission | Shared IdP sign-in can avoid another password prompt without granting all permissions. |
| 53. Employee opens external application or organization sign-in portal, not request grouping | Employee opens actual expense software/address or organizational sign-in portal separately from request selection. |
| 54. Trust and local account matching are separately configured | IdP/application trust and local-account matching are separately supplied configuration. |
| 55. Current membership available and relevant group information accepted are explicit conditions | Current membership is available to IdP, needed group data reaches application and sign-in data is accepted. |
| 56. Authorization requires operation-specific information and enabled intended account | Authorization checks operation-specific information, enabled intended expense account and other rules. |
| 57. Connected request/change and sign-in/operation paths, not one private ISC workflow | Second diagram separates request/directory update from sign-in/account selection/operation. |
| 58. Approval does not sign user in; access application does not configure SSO | Approval is not sign-in and access grouping does not establish external SSO trust. |
| 59. ISC correlation differs from external sign-in account matching | Directory-to-ISC identity correlation differs from sign-in-to-expense-account mapping. |
| 60. Successful sign-in can coexist with denied submit operation | Successful authentication can leave submission denied when authorization/account conditions differ. |
| 61. Check current memberships, supplied information, selected account/status and requirements | Investigation checks membership, delivered information, selected account/status and operation requirements. |
| 62. Session meaning and no immediate refresh guarantee | Session meaning and possible pre-change information prevent instant-refresh assumptions. |
| 63. Password prompt is not entitlement delivery evidence | Password prompt or absence is not membership-delivery evidence. |
| 64. Front-end symptoms versus different back-end processes | Front-end card/page/button are tied to different back-end jobs in their responsible systems. |
| 65. Directory data does not expose native expense accounts/local administrator privileges | Directory collection does not expose the native expense-account database or unrelated local admin privilege. |
| 66. Govern native access through appropriate supported data/management arrangement | Governing that extra native data/access requires an appropriate supported arrangement. |
| 67. Missing native account needs its actual creation mechanism | Missing expense account requires its actual account-creation mechanism, not just a group update. |
| 68. Password management follows configured source account/policy | Password-management section follows supported configured directory account and its policy. |
| 69. Password policy meaning | Password policy defines acceptable-password requirements. |
| 70. Business name does not establish native app password or membership grant | Business label does not prove native expense-password management or grant EXP_SUBMIT. |
| 71. Account source is not every separately configured authentication authority | Account-source dataset is distinct from the expense system's configured sign-in authority. |
| 72. Hiding affects presentation, not proven revocation or external block | Hiding grouping changes presentation without establishing membership removal or external denial. |
| 73. Independent profile requestability can remain after hiding grouping | Independent profile request route can remain despite hiding an application grouping. |
| 74. Deleting access application retains assigned profiles, not external service deletion | Access-application deletion retains previously assigned profiles and does not delete external service/accounts. |
| 75. Grouping removal, revocation, source-account change and session end are distinct | Grouping, revocation, source-account change and session termination remain distinct requirements/actions. |
| 76. Five original case purposes and worked answers | All five original case purposes and worked evidence-based answers remain. |
| 77. Open business-application transfer and changed condition | Reporting native-source transfer plus chosen-application/changed-condition teach-back preserve boundary reasoning. |

## Current primary verification

Relevant sections checked October 28, 2026. References and author metadata stay outside the learner body.

| Primary source | Claim checked and boundary |
|---|---|
| [Access applications](https://documentation.sailpoint.com/saas/help/access/app-config.html) | Business groupings, directory-backed expense pattern, account-source setting, shared source, independent profiles, request configuration, hiding and retained profiles on deletion. The concrete group names/permissions are hypothetical. |
| [Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector versus actual enterprise system; grouping cannot expose native data not collected through an integration. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source entitlement bundle and applicable independent request context. Main account already exists and is uniquely intended. |
| [Role/profile requests](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Configured request review and delivery are separate; no universal reviewer or ordering asserted. |
| [User request help](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html) | Item/recipient selection and selecting a profile within an application. The page explicitly labels its Request Center click instructions legacy; the learner does not copy a tab layout or prescribe a current navigation path. |
| [Request segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) | Requester-targeted visibility, authorized on-behalf recipients, broader org-admin view and unsegmented offerings. Segment membership does not replace recipient eligibility design. |
| [Password applications](https://documentation.sailpoint.com/saas/help/pwd/add_access_app.html) | Supported source-account/password-policy context differs from a native expense password or entitlement grant. No password/sync-group operation is executed or taught as universal behavior. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported configured access changes are distinct from business approval. No native expense-account creation is inferred. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Item/account/source operation details, reported results and errors. Current directory observation and later ISC collection remain separate. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Supporting role grouping may contain profiles and entitlements. Main path is a profile request, not a new role-assignment procedure. |
| [Authentication and authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization) | General distinction between sign-in verification and allowed operations, with identity-provider context. Example does not require Microsoft technology. |
| [SSO protocol](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-on-saml-protocol) | IdP/application exchange is a separate relationship. No SAML requirement, exact protocol fields or unconditional fresh-password prompt is introduced. |
| [Sessions and revocation](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) | Application-held continuing sessions and reevaluation boundaries. No Microsoft token lifetime or immediate universal session-refresh/removal rule is transferred to the hypothetical application. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Source account-to-identity matching is distinct from the external application's account selection. Directory association is supplied as already correct. |

SailPoint documentation currently uses Identity Services / Human Fabric branding; retain the requested ISC course title. Actual services, request experience, privileges, connector features and tenant settings require their own operational verification.

Microsoft references support general identity concepts, not SailPoint-private backend claims or a verified implementation of the hypothetical expense service. Group delivery, account mapping, acceptance and operation requirements are supplied example conditions, not observed lab/production results.

## Example conditions and outcome controls

The employee, business access, group names and outcomes are hypothetical. No company story, named person, account numbers or invented software brand is required. Both the directory and expense account already exist and remain distinct.

Corporate-Directory is the only ISC source. It has collected/correlated the one intended directory account, supports the shown membership operation and supplies represented EXP_SUBMIT/EXP_APPROVE. There is no native expense source. The expense software's separate account already exists with working sign-in arrangement.

Submit expenses contains EXP_SUBMIT; Approve expenses contains EXP_APPROVE. The main request is visible/configured, for the employee's own identity, with a completed required review and accepted update to the intended directory account. It grants neither claim approval nor proof of application use.

The successful sign-in supplies valid IdP/application trust, current group data available to IdP and accepted by expense software, intended local-account mapping, enabled expense account and remaining operation requirements. These facts permit the final submit result; membership delivery alone would not.

The denied-sign-in-operation variation needs membership, information delivery, selected account/status, session and operation evidence. The old-account variation changes the application's mapping, not the correct ISC directory correlation. No propagation time, prompt, post-write full aggregation or session refresh is guaranteed.

Knowledge/Read knowledge/KB_READ illustrates reuse of one directory source by a different access application. Reports/View reports deliberately uses a native reporting source; its accepted grant and wrong sign-in account remain separate facts.

Segments concern requester visibility under the documented behavior. Authorized on-behalf access still needs recipient eligibility/review. No audience-setting-to-runtime-authorization equivalence is assumed. Native local administrator privilege lies outside the supplied directory dataset and needs its own reliable governance arrangement.

Password management is conditional on actual support/configuration and concerns the selected source account/policy. Hiding/deleting the grouping does not perform revocation, native service/account deletion or session termination.

The organizational sign-in portal belongs to the separately configured IdP arrangement. The learner does not turn ISC Launchpad or legacy SSO application settings into a generic external application launcher.

Main access is ordinary delivered access with no separate activation-dependent stage introduced. Full request, segmentation, password and SSO protocol configurations remain in their primary lessons. No actual request, account, source, password, group, session or application was changed.

## Assessment and transfer intent

Learner questions and worked answers stay in the learner.

| Case | Expected reasoning / acceptable alternatives | Misconception exposed |
|---|---|---|
| Directory-backed Expenses | Validate the directory group control, intended account, update and application consumption. Matching names are not required and native visibility is not established. Starting with design or membership evidence is acceptable. | Business application must have a same-named native source. |
| One selected profile | EXP_SUBMIT differs from EXP_APPROVE. Inspect selected recipient/account and actual delivery; access approval is not claim approval. | Grouped choices are all granted together. |
| Requester/recipient differ | Segment limits requester discovery; supplied authorized on-behalf recipient is not automatically excluded. Recipient requirements/review still apply. | Visible to requester equals eligible for every recipient. |
| Wrong expense account | Correct ISC directory association is not the failed application mapping. Authorized responsible owners correct and verify local account and operation. | ISC correlation controls every account relationship. |
| Deleted grouping | Retained profile is documented behavior. Actual revocation, target update and session outcome need separate operations/evidence. | Catalog deletion revokes access and ends sessions. |
| Native reporting transfer | Different integration can be valid. Supplied native grant succeeded; wrong sign-in selection needs its own investigation. | Directory-backed Expenses is the mandatory architecture. |
| Chosen application variation | Identify real software/accounts, source scope, offering/recipient, account update and separate sign-in/operation evidence. Name missing evidence for changed conditions. | Application name identifies the entire technical path. |

## Diagram sources

- [Business choice and account source](../../assets/FND-005_business_choice_and_account_source.txt): actual expense service versus grouping of directory-backed choices; branches mean groups.
- [Membership delivery and application use](../../assets/FND-005_membership_delivery_and_application_use.txt): approved membership change versus separate authentication, account selection and authorization. Arrows show conditional work, not one ISC workflow or timing promise.

## Executed verification

Checks executed October 28, 2026:

- Full saved lesson read in three contiguous portions, with targeted first-use and password-support refinements reviewed. Both diagrams, five worked cases and reporting transfer were included. This is simulated author review, not an observed beginner result.
- All 77 previous essential purposes have individual reconciliation rows. Directory-to-ISC association and sign-in-to-native-account mapping remain separately explained and assessed.
- Saved learner: 3,729 whitespace-separated words, two text diagrams (40 and 48 columns) and two tables. These are observed counts, not quotas.
- Both new diagram assets exactly match their inline blocks after newline normalization, all fences close and the intended group/profile/source/transfer values remain present. Arrow meanings and supplied conditions were manually traced against the prose.
- No learner source/course links, named fictional character, em dash or unfinished placeholder was found. Requester, recipient, account, membership, sign-in and operation facts were checked for consistency.
- All 1,213 relative file links across the revised learner, new record/diagrams and current course/reference/example metadata resolve. File targets were checked, not live web anchors.
- The four existing navigation/disclosure tests passed through npm test.
- Local publication verification against baseline 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 passed for eight unpublished changed lessons: eleven matched diagrams, seventeen tables, 1,744 normalized content units and 368 text assets overall. Live mode was not used.
- The directory and manifest still contain 91 authored learners. Current state is eleven individually revised, 80 remaining and FND-006 next. ROL-007 remains without a stub.
- Start-of-task hash comparison covered 604 tracked/untracked files. Exactly four existing files changed (this learner and course/reference/example metadata), and three were added (this record and two diagrams). None were removed. The other 600 files, including all other 90 learners, earlier local revisions, historical records/assets, manifest, shared UI, tests and specification, were byte-identical.
- Tracked-file whitespace checks passed; focused checks found no trailing whitespace in the seven affected files.
- HEAD remains 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 and staging is empty. No commit, push, deployment, ISC request, password/membership change or external account/session operation occurred.

Coverage and local structural verification do not establish actual independent beginner comprehension, rendered publication appearance or tenant execution. Learner validation remains pending separately from continued authoring.
