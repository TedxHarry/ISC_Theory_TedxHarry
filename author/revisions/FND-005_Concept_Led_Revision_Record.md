# FND-005: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Current [learner source](../../lessons/FND-005_Sources_Access_Applications_Catalogs_and_Sign_In.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current editable diagrams: [business grouping and directory source](../../assets/FND-005_business_grouping_and_directory_source.txt), [request/change and separate sign-in](../../assets/FND-005_request_change_and_separate_sign_in.txt).
- Historical [application/source map](../../assets/FND-005_application_source_map.txt) and [request/sign-in paths](../../assets/FND-005_request_and_sign_in_paths.txt) remain unchanged.
- Only FND-005 is revised in this task; all 91 learner files remain. Earlier local revisions, assets and records are preserved.
- Local only: no staging, commit, push, Pages deployment or tenant action. Published FND-005 remains revision 1.0.
- Next existing lesson: FND-006. New authoring remains paused at reserved ROL-007.

The concept determines the sequence: actual software and separate accounts; directory-backed permission design; business-facing access configuration and catalog choice; selected request/change; separate sign-in/use; changed visibility, scope and removal conditions. Completing the main flow before segmentation avoids interrupting the basic mechanism with dense audience rules.

The named employee, 25005, derivative usernames and unnecessary ExpenseHub brand are removed. Neutral account purpose and source identify the one intended account. Retain Expenses, Corporate-Directory, Submit expenses/Approve expenses and EXP_SUBMIT/EXP_APPROVE because their different roles are the subject. KB_READ/Knowledge illustrate source reuse. A reporting-platform native integration supplies a changed-context comparison without a new biography.

## Baseline coverage reconciliation

| Baseline purpose | Revision 2.0 treatment |
|---|---|
| 1. Ambiguous application-access complaint requires locating the failed boundary | Opening report and changed possible causes |
| 2. Existing directory and expense accounts are separate records | The business application section |
| 3. Enterprise application meaning | Actual expense software and its own requirements |
| 4. Account, identity, source and connector meanings | Initial account/source context |
| 5. Aggregation and correlation meanings, correct established association | Initial account/source context |
| 6. Only directory source configured; expense account already exists | Explicit main assumptions |
| 7. Submit own claims differs from approving others | Initial requirement and group/profile meanings |
| 8. Directory group chosen as control input, not universal app design | Why would expense access change a directory account |
| 9. Entitlement meaning and EXP_SUBMIT/EXP_APPROVE meanings | Permission table and explanation |
| 10. Fictional names/effects, not SailPoint defaults | Permission table qualification |
| 11. Application consumes trusted group information and other account requirements | Group explanation and separate sign-in trace |
| 12. Access profile is single-source bundle, including valid one-item example | Two access profiles |
| 13. Choose Submit, not approval package | Profiles and request trace |
| 14. Delivery targets directory, not automatic native account creation/direct native write | Profile delivery explanation |
| 15. Profile does not create same-named directory group | Profile delivery explanation |
| 16. Other organization can use native application connector | Design variation and reporting transfer |
| 17. Access application organizes profiles and configured password management | Access-application purpose |
| 18. Account-source meaning identifies relevant account/access dataset | Access-application configuration |
| 19. Source choice does not install another connector | Map explanation |
| 20. Grouping versus actual software versus source | Current relationship diagram and narration |
| 21. Branches are grouping, not network/write flow | Diagram explanation |
| 22. Same or different names do not merge objects or prove errors | Naming discussion |
| 23. One source supports multiple access applications | Knowledge/KB_READ variation |
| 24. Catalog means discoverable offerings, not complete held-access inventory | Catalog section |
| 25. Requester versus recipient | Catalog section, same person in main path |
| 26. Request meaning and requestability distinct from approval/delivery | Catalog section |
| 27. Selecting grouping still requires selected profile | Catalog section |
| 28. One profile selection does not select all grouped profiles | Catalog and request trace |
| 29. Profiles can be independently offered; applicable roles/entitlements too | Alternate catalog routes |
| 30. Role meaning includes profiles and entitlements | Supporting role explanation |
| 31. Same underlying profile offered through different presentation routes | Catalog explanation |
| 32. Experience/configuration affects presentation; no universal UI walkthrough | Catalog qualification |
| 33. Application enabled/request visible, profiles linked and applicable request settings | Visibility investigation |
| 34. Grouping visibility differs from profile definition/request review configuration | Visibility investigation |
| 35. Empty grouping is not a configured access package | Visibility investigation |
| 36. Identity attribute and segment meanings | Audience explanation |
| 37. Requester visibility differs from administrator's broader view | Audience explanation |
| 38. Requester can request visible items for authorized other recipients | Segment behavior and third case |
| 39. Recipient outside segment is not automatically barred by that segment | Audience example and case |
| 40. Actual recipient eligibility/review still required | Approve expenses recipient comparison |
| 41. Unsegmented items can remain broadly requestable under other settings | Audience boundary |
| 42. Check actual requester, settings and held-access restrictions before broad changes | Missing-offering investigation |
| 43. Main own-request has visible offering, configured process and one account without EXP_SUBMIT | Main conditions before request trace |
| 44. Request item/recipient resolves to source entitlement and intended operation | Follow Submit expenses |
| 45. Approval meaning and no universal reviewer/sequence | Review explanation |
| 46. ISC request approval differs from claim approval | Review versus EXP_APPROVE operation |
| 47. Provisioning meaning and directory as target receiving change | Provisioning trace |
| 48. Successful membership delivery is supplied, not proof of sign-in/use | Successful continuation |
| 49. Directory rejection cannot be overridden by catalog or approval | Rejected continuation |
| 50. Request/activity/results/current directory/later collection have different evidence roles | Request trace and evidence table |
| 51. Authentication, IdP and SSO meanings | Signing in uses a different relationship |
| 52. SSO can avoid a new prompt without granting every permission | SSO explanation |
| 53. Employee opens external application or organization sign-in portal, not request grouping | Sign-in starting point |
| 54. Trust and local account matching are separately configured | Sign-in trace |
| 55. Current membership available and relevant group information accepted are explicit conditions | Sign-in trace |
| 56. Authorization requires operation-specific information and enabled intended account | Submission explanation |
| 57. Connected request/change and sign-in/operation paths, not one private ISC workflow | Current process map |
| 58. Approval does not sign user in; access application does not configure SSO | Process-map narration |
| 59. ISC correlation differs from external sign-in account matching | Process-map narration and fourth case |
| 60. Successful sign-in can coexist with denied submit operation | Denial section |
| 61. Check current memberships, supplied information, selected account/status and requirements | Denial investigation |
| 62. Session meaning and no immediate refresh guarantee | Session explanation |
| 63. Password prompt is not entitlement delivery evidence | Denial section |
| 64. Front-end symptoms versus different back-end processes | Front/back explanation |
| 65. Directory data does not expose native expense accounts/local administrator privileges | Source-scope section |
| 66. Govern native access through appropriate supported data/management arrangement | Scope gap explanation |
| 67. Missing native account needs its actual creation mechanism | Changed account-existence condition |
| 68. Password management follows configured source account/policy | Password section |
| 69. Password policy meaning | Password section |
| 70. Business name does not establish native app password or membership grant | Password section |
| 71. Account source is not every separately configured authentication authority | Password section |
| 72. Hiding affects presentation, not proven revocation or external block | Removal section |
| 73. Independent profile requestability can remain after hiding grouping | Removal section |
| 74. Deleting access application retains assigned profiles, not external service deletion | Removal section and fifth case |
| 75. Grouping removal, revocation, source-account change and session end are distinct | Removal section |
| 76. Five original case purposes and worked answers | Work through these changes |
| 77. Open business-application transfer and changed condition | Final exercise, augmented with worked native reporting-platform variation |

All five original case intents and supplied conditions remain with worked reasoning. The source, account, request, approval and authentication/authorization distinctions are preserved, not shortened into a glossary. Historical diagrams remain recoverable; both new diagrams fit a narrow text source and explain their actors/arrows in adjacent prose.

The open transfer exercise is retained. Its supplied reporting-platform case changes the integration from directory-backed access to native application data/changes. The question tests whether a different source choice is necessarily wrong and which separate account mapping actually failed.

## Primary verification

Checked October 25, 2026. References remain outside the learner body.

| Primary source | Claim / applicability checked |
|---|---|
| [Access applications](https://documentation.sailpoint.com/saas/help/access/app-config.html) | Logical grouping, source context, multiple groupings, request enablement and deletion retaining profiles. Directory-backed expenses is an explicit documented pattern; fictional group/operation meanings are separately supplied. |
| [Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | External application, source and connector differences; access grouping does not supply uncollected native data. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Related single-source bundles and independent request context. Main request has one intended existing directory account. |
| [Role/profile requests](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Selected profile, configured review and separate supported delivery. No universal manager review assumed. |
| [User request help](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html) | Requester/recipient and selecting profile within application context. Page labels its Request Center instructions legacy; no click sequence or universal current tab layout copied. |
| [Request segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) | Requester visibility, authorized on-behalf recipients, unsegmented items and broader org-admin visibility. Do not infer recipient eligibility or exact effect timing. |
| [Password applications](https://documentation.sailpoint.com/saas/help/pwd/add_access_app.html) | Source-account/password-policy context distinct from native business-app password and group grant. No password change or sync-group behavior executed. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported configured changes independent of approval. No automatic native-account creation asserted. |
| [Monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Request/account/source results and reported errors; current target inspection is separate. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Supporting meaning: access grouping may contain profiles and entitlements, with applicable services/configuration. Main path is not a role request. |
| [Authentication/authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization) | Different sign-in and permission purposes, IdP/SSO context. Microsoft not required by example. |
| [SSO protocol](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-on-saml-protocol) | Separate IdP/application trust and sign-in exchange; no SAML requirement, fields or fresh-prompt assumption taught. |
| [Session revocation](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) | Application-owned continuing context and reevaluation boundary. No Microsoft lifetime or universal immediate-revocation policy transferred to hypothetical software. |
| [Correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Source-account-to-identity association differs from external local-account matching. Correct directory correlation is supplied. |

Current SailPoint documentation uses Identity Services / Human Fabric branding; retain requested ISC title. Recheck actual enabled services, request experience, connector features and tenant configuration for operational use or publication.

The reference pages for general identity mechanisms are primary Microsoft guidance, not SailPoint claims about a private backend or proof of the hypothetical application's implementation. Application acceptance, mapping, group consumption and operation requirements are explicit example conditions. No production/lab observation is asserted.

## Conditions and limits

- Existing directory account is correctly collected/correlated; one intended account receives EXP_SUBMIT. Existing expense account is separate. No expense-system source is assumed.
- Submit and Approve profiles contain different directory entitlements. Main request is self-request, visible, configured, approved and successfully fulfilled in the chosen continuation.
- Group meanings are hypothetical application contracts. Source write support/permission and correct recipient/account remain required. Approval of ISC access is not claim approval.
- Current membership reaches the IdP, relevant information reaches the application, valid trust/mapping selects the intended enabled account, and remaining submit requirements are met in the successful path.
- No exact data propagation latency, existing-session refresh, automatic post-write full aggregation or universal prompt behavior is promised.
- Account correlation in ISC cannot stand in for separate application sign-in mapping. The changed wrong-account case alters the latter, not the already correct directory link.
- Request segmentation is requester-based under the documented behavior. Authorized on-behalf requests still need recipient eligibility and review design. No direct segmentation-to-runtime-authorization equivalence assumed.
- Catalog offerings and access-application source choice do not establish native-account/permission inventory. The local-admin variation deliberately lies outside the directory dataset.
- Password policy/source context does not establish a native expense password, membership grant or identity-provider trust. Hiding/deleting a grouping is not revocation or session termination.
- The organization's sign-in portal is part of its separate IdP arrangement, not an assumption that ISC Launchpad is a generic SSO application launcher. Legacy SSO application settings are not taught.
- Main access is ordinary provisioned access; no activation-dependent stage introduced. Full request, password, segmentation and protocol configuration remain in their primary lessons.
- No tenant setting, source, profile, request, password, membership or account was changed. Diagrams show relationships or conditional work, not private services or universal order.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Directory-backed Expenses | Validate business control, intended source account and application consumption. Names alone neither prove error nor complete native visibility. Starting at design or current membership evidence is acceptable. | Business app requires same-named native source. |
| One selected profile | Submit means EXP_SUBMIT, not EXP_APPROVE. Verify recipient/account/delivery separately. | Grouping approval grants all its packages. |
| Requester/recipient differ | Visibility concerns requester; authorized on-behalf recipient is not automatically excluded by that segment. Design recipient checks/review. | Request visibility automatically enforces recipient eligibility. |
| Wrong expense account | Correct ISC association is not the failed mapping. Authorized sign-in/application owners correct and verify intended local account/use. | Repeating ISC correlation fixes all account relationships. |
| Deleted grouping | Continued assigned profile is documented behavior. Actual removal requires separate supported revocation, target and session consideration. | Catalog deletion revokes permissions and ends sessions. |
| Native reporting transfer | Different source design can be valid. Supplied grant reached intended native account; wrong sign-in mapping is separate. | Directory-backed example is mandatory architecture. |
| Chosen application | Identify real software/accounts, sources/data/change scope, selected offering/recipient, account operation, sign-in and runtime evidence. Name missing evidence when needed. | App name identifies complete technical path. |

Source anchors: app/source/profile/user-request docs for model and choices; segments for audience; provisioning/monitoring for delivery; correlation and primary identity guidance for separate sign-in mapping; app deletion/password docs for maintenance boundaries.

## Explanation review

The opening establishes the report and possible boundaries without a greeting or learning promise. Accounts, source and integration meanings precede processes using them. Entitlement/profile meaning is tied to the submit-versus-approve decision. Access-application grouping is motivated by the user's business vocabulary rather than introduced as a definition to memorize.

Request, requester/recipient, approval and provisioning are explained with the selected item's path. Authentication, IdP, SSO, authorization and session meanings appear before dependent reasoning. Visibility/segmentation follows the completed basic mechanism. Source visibility and password/removal questions retain their qualifications.

The humanizer/read-aloud pass checks connected mentor narration, first use, causal transitions, no unnecessary employee/app biography, no fixed quota, no learner citations/revision tags, no em dash and no teaching-method announcements. The diagrams' captions communicate the relationships in prose as well as text.

Author review is documentation-based. Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

## Executed verification

- All four existing navigation/disclosure tests passed, zero failures. These tests do not establish beginner understanding.
- Local Markdown targets in specification, course register, README, author references, example register and current record: 675 checked, none missing.
- Saved learner text and register matched reviewed drafts. No learner source/course link or URL, revision metadata, named employee/25005/ExpenseHub, em dash, placeholder or teaching-method announcement was found.
- Current diagram assets match both inline blocks exactly. Maximum widths are 39 and 41 columns, within the 42-column limit. Graphical publication review remains pending.
- Baseline reconciliation records 77 purposes. All five earlier case intents, supplied facts and worked reasoning remain. The open application-tracing exercise gains a worked native-source transfer. These are coverage checks, not measured learner outcomes.
- Explanation review kept the normal request/change and separate sign-in/use mechanisms complete before audience-control variations. Necessary terms, actors, conditions and causal transitions were checked against the supplied data. No fixed lesson layout or content quota was imposed.
- Preservation: 326 starting files became 329. Four existing files changed (FND-005, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 322 remain byte-identical. Earlier lessons/revisions, records/assets, README, specification, historical diagrams, site code and remaining lessons are unchanged.
- Whitespace checks passed. Separate checks of all three new files produced no diagnostics; no-index exit 1 denotes their difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1 and staging remains empty. No commit, push, Pages deployment or tenant operation occurred.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending. Published FND-005 remains revision 1.0. Next local revision: FND-006.
