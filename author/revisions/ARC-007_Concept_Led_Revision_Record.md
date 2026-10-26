# ARC-007: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-007_Signing_Into_ISC_Identity_Providers_and_Source_Passwords.md) revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [browser, IdP and ISC session](../../assets/ARC-007_browser_idp_and_isc_session.txt), [directory credential check and session](../../assets/ARC-007_directory_credential_check_and_session.txt), and [password operation and target result](../../assets/ARC-007_password_operation_and_target_result.txt).
- Historical [federated sign-in](../../assets/ARC-007_federated_sign_in.txt), [directory sign-in](../../assets/ARC-007_directory_sign_in.txt), and [source password change](../../assets/ARC-007_source_password_change.txt) remain unchanged.
- Only ARC-007 learner content is revised this task. All 91 existing lessons, earlier local ARC-002 through ARC-006 revisions, historical assets/records and site code are preserved.
- Published revised snapshot remains the 14 lessons through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002 through ARC-007 revisions 2.0 are local.
- No staging, commit, push, Pages deployment, ISC tenant/API/connector/sign-in/credential operation, recovery email or support message.
- Next existing revision: ARC-008; its learner body was not opened. New authoring stays paused at reserved ROL-007.

The lesson begins with a working ISC sign-in and forgotten independent application password. It establishes the account relationships, then traces normal SAML sign-in before trust/mapping defects. A separate supported PTA route explains credential checking and its dependencies. Recovery ownership leads into a complete supported source-password change, followed by shared-source/group effects and evidence/session reasoning.

Devi, employee number 37007, AccessGate and CaseDesk brands and numbered account labels are removed. Minimal neutral values distinguish support-user, directory-user, source Support-Production and integration actor svc-support. Reserved email values person@corp.example and person@old.example establish the supplied mapping comparison. The support application has its own password and is outside shared-password/sync arrangements. HR/person establishment, IdP sign-in and external password-operation responsibilities remain distinct.

## Coverage reconciliation

103 purposes and necessary clarifications are reconciled below. This is preservation evidence, not measured comprehension or a lesson-size target.

| Purpose | Current location |
|---|---|
| 1. Forgotten standalone application password versus working ISC SSO; identify service and credential first | Opening |
| 2. Identity, account and ISC representation meanings | Separate accounts |
| 3. Source, connector and target meanings | Separate accounts |
| 4. HR/directory/IdP/ISC/application records have distinct purposes | Record comparison |
| 5. Existing correctly associated accounts supplied; correlation isn't password sharing | Separate accounts |
| 6. Aggregation and entitlement meaning before use; collection doesn't expose readable current passwords | Separate accounts |
| 7. Matching usernames don't configure shared credential stores | Separate accounts |
| 8. Credential and authentication meanings | Authentication and permission |
| 9. Authorization distinct from accepted authentication | Authentication and permission |
| 10. Session meaning and continued browser interaction | Authentication and permission |
| 11. ISC user level versus application permissions; login doesn't grant administration | Authentication and permission; case 3 |
| 12. Evidence of login, allowed page and business action differs | Authentication and permission |
| 13. SSO, IdP, SP and federation meanings with ISC as service being entered | SSO route |
| 14. SAML and assertion meanings; statement isn't user's password | SSO route |
| 15. Configured trusted IdP, permitted user, matching existing identity, JIT off assumptions | SSO route |
| 16. Browser starts at ISC then follows configured IdP route | SSO route |
| 17. IdP authenticates or reuses applicable IdP session | SSO route |
| 18. Response returns via browser; ISC acceptance and user mapping precede successful session outcome | SSO route |
| 19. Diagram is conditional logical exchange, not complete network/private validation sequence | SSO route |
| 20. Frontend, backend and IdP work connected with distinct evidence scopes | SSO route |
| 21. IdP page reached versus provider authentication versus ISC session | SSO route |
| 22. SAML sign-in doesn't copy IdP password or configure every application's SSO | SSO route; transfer |
| 23. Trust acceptance versus matching intended ISC user | Trust and mapping |
| 24. Entity ID, login destination and service-provider information purposes | Trust and mapping |
| 25. Signing certificate, public/private key and configured signature check meanings | Trust and mapping |
| 26. Altered signed content fails applicable check; password reset doesn't repair signing trust | Trust and mapping |
| 27. Identity attribute and identity mapping attribute meanings | Trust and mapping |
| 28. Matching person@corp.example supplied successful value | Trust and mapping |
| 29. person@old.example plus explicit match error establishes separate data/mapping defect | Trust and mapping; case 1 |
| 30. Tenant meaning and intended environment in investigation | Trust and mapping |
| 31. SSO user mapping differs from account-owner correlation | Trust and mapping |
| 32. Separate JIT ISC account/identity creation, not SSO default, all business accounts or temporary access activation | Trust and mapping |
| 33. Missing existing identity not automatically created when JIT off; avoid masking mismatch with duplicate | Trust and mapping; case 1 |
| 34. Identity profile and authoritative-source purpose | Directory alternative |
| 35. Authentication source meaning and distinction from authoritative source | Directory alternative |
| 36. Site credentials, Directory Connection and external SSO table | Directory alternative |
| 37. Sign-in arrangements are alternatives, not three required consecutive checks | Directory alternative |
| 38. Normal SSO precedence; direct route has separate requirements | Directory alternative |
| 39. Directory Connection/PTA meanings and source-account credential | Directory alternative |
| 40. Supported configured source, prior aggregation, association and selected profile assumptions | Directory alternative |
| 41. One existing directory-user supplied for alternate PTA trace | Directory alternative |
| 42. Configured integration check/result plus remaining ISC checks before session | PTA diagram and explanation |
| 43. No universal PTA protocol or runtime invented | PTA explanation |
| 44. VA meaning and conditionally required actual integration path, not inserted into all SAML work | PTA explanation |
| 45. Unreachable source gives incomplete credential decision; correct password doesn't restore path | PTA explanation; case 2 |
| 46. Reachable source doesn't prove accepted password or permitted account state | PTA explanation |
| 47. Provisioning defined before account-change comparison | PTA explanation |
| 48. Documented first-encountered PTA account; not display preference or provisioning selector | PTA explanation |
| 49. Production authentication-source change risk and supported testing/support guidance | PTA explanation |
| 50. MFA factor-category meaning and separate IdP/ISC/recovery ownership | Verification |
| 51. TOTP meaning, registered secret/time and registration versus target password change | Verification |
| 52. Elevated user meaning before relying on elevated conditions | Verification |
| 53. Elevated IdP sign-in registration versus later normal IdP and direct-route TOTP challenge | Verification |
| 54. SSO doesn't remove registration responsibility; locate actual challenge | Verification |
| 55. Lost device recovery at correct system; MFA reset versus identity deregistration | Verification |
| 56. Identity reset doesn't clear ISC MFA; dedicated MFA reset separate | Verification |
| 57. Password Management versus user-facing Password Manager meanings | Application password |
| 58. Access application configuration distinct from target and SSO trust | Application password |
| 59. Supported direct password connection and visible intended access application supplied | Application password |
| 60. Eligible support-user, independent password, no IdP/shared source/sync group assumptions | Application password |
| 61. Password policy versus profile-provided reset methods/enforcement | Application password |
| 62. Recovery must have usable registered email/phone/authenticator information | Application password |
| 63. ISC and target policy compatibility; validation at one doesn't override other | Application password |
| 64. Complete selected-account verification/connector/target successful password path | Application password |
| 65. svc-support integration authority distinct from recipient, IdP user and ISC admin | Application password |
| 66. Password diagram scoped to successful responsibilities, not fixed engine order or guaranteed outcome | Password diagram |
| 67. Final verification is human investigation, not automatic fresh target login | Password diagram |
| 68. Recovery verification doesn't grant target password-operation authority | Application password; case 6 |
| 69. Connection/read success doesn't establish password write capability/authority | Application password |
| 70. Standalone result doesn't change IdP/directory password, ISC user level or target permission | Application password; case 4 |
| 71. Access request meaning; password reset doesn't create account or entitlement | Application password |
| 72. Flat-file meaning and incompatibility with Password Management | Imported account |
| 73. Account visibility not live password capability or readable secret inventory | Imported account |
| 74. Shared-source applications can operate on one underlying password | Shared password relationships |
| 75. Sync group meaning and distinct per-source operations | Shared password relationships |
| 76. SSO trust versus synchronization versus matching username | Shared password relationships |
| 77. Compatible group/target policies and source dependencies | Shared password relationships |
| 78. Documented PTA source failure gating versus non-PTA partial outcomes | Shared password relationships; case 5 |
| 79. No all-or-nothing transaction or inferred rollback/group success | Shared password relationships |
| 80. Source-supported password-history check doesn't expose readable history via aggregation | Shared password relationships |
| 81. ISC-initiated change not universal reverse propagation from target website | Shared password relationships |
| 82. PTA source-password change affects sign-in credential without claiming two independent stores | Shared password relationships |
| 83. Reset email begins interaction, not user completion/verification/target result | Result evidence |
| 84. Actual reset scope can include PTA/group relationships | Result evidence |
| 85. Record operation time, source/account/result/error and per-source audit evidence without secrets | Result evidence |
| 86. Collected view not current password or proof of later update | Result evidence |
| 87. Approved fresh authentication stronger than existing-session page for password acceptance | Result evidence; case 7 |
| 88. Lockout meaning, applicable ISC/target rules and PTA primary-account interaction | Result evidence |
| 89. Disabled versus locked account and documented disabled-account reset restriction | Result evidence |
| 90. Reset/unlock/reenable/MFA reset distinct even when recovery connects them | Result evidence |
| 91. IdP/ISC/target sessions separate; resume doesn't prove fresh password entry | Session scope |
| 92. Maximum versus idle session meanings and browser retention | Session scope |
| 93. Closing window and changing settings don't establish termination of all active sessions | Session scope |
| 94. SAML SLO meaning and ISC lack of support; redirect isn't universal logout | Session scope |
| 95. Password change doesn't prove session or integration-token revocation; token meaning | Session scope |
| 96. Recovery not proof of compromise containment; supported system-specific controls | Session scope |
| 97. Emergency-access meaning and eligible controlled direct sign-in conditions | Session scope |
| 98. Emergency arrangement prepared before outage; not universal employee bypass | Session scope |
| 99. Seven original cases retained with explicit facts and evidence-qualified answers | Cases 1–7 |
| 100. Purchasing proposal transfer covers authentication, ownership, supported reset configuration and target authority | Purchasing transfer |
| 101. Purchasing SSO needs its own trust/allowed users; business permission needs separate access design | Purchasing transfer |
| 102. Coordinated password changes require actual shared source/sync design | Purchasing transfer |
| 103. Final teach-back connects entered service, proof checker, ISC matching, changed account and result evidence | Final explanation |

## Primary-reference verification

Checked October 26, 2026. Current official identity-profile/PTA/SAML/JIT/MFA, password/application/policy/recovery/group, session/lockout/user-level and emergency-access material was reviewed. Supporting source/correlation/collection/provisioning references were reopened. OASIS, W3C and RFC sources support stable protocol/key/TOTP meanings; they don't substitute for current ISC behaviour.

| Primary reference | Checked claim and applicability |
|---|---|
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Identity establishment/profile responsibilities and supported sign-in/recovery options; HR authority doesn't imply credential authority. |
| [Pass-through authentication](https://documentation.sailpoint.com/saas/help/common/pta.html) | Configured supported authentication source, prior aggregation, first-encountered account, production-source change guidance and source credential relationship. |
| [ISC service-provider configuration](https://documentation.sailpoint.com/saas/help/common/config_isc_service_provider.html) | SAML IdP/SP trust, matching user, signing/participant/mapping settings, no password sharing, no SAML SLO and conditional elevated direct sign-in. |
| [JIT account creation](https://documentation.sailpoint.com/saas/help/common/jit-accounts.html) | Separate configured ISC account and identity creation at sign-in; not default SSO, all-app creation or temporary access activation. |
| [Multifactor authentication](https://documentation.sailpoint.com/saas/help/common/strong_auth.html) | ISC authenticator settings, elevated registration/direct-route challenge distinction, MFA reset distinct from identity reset/deregistration. |
| [Password Management overview](https://documentation.sailpoint.com/saas/help/pwd/index.html) | Configured supported source password operations and access applications; not readable password inventory. |
| [Password Manager user help](https://documentation.sailpoint.com/saas/user-help/password_manager.html) | User-facing applications/password groups, required verification and separate account-password help. |
| [Access applications for passwords](https://documentation.sailpoint.com/saas/help/pwd/add_access_app.html) | Source/application/policy/user visibility, per-source password and multi-application shared-source relationship. |
| [Password policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) | Compatible target requirements, enforcement of profile-provided verification, applicable direct sources and flat-file incompatibility. |
| [Password-reset authentication](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) | Profile-enabled recovery methods need usable information; policy enforcement and disabled-account reset restriction. No recovery-method sequence or bypass recipe. |
| [Admin reset initiation](https://documentation.sailpoint.com/saas/help/common/users/reset_pwd_auth.html) | Email initiates user recovery, PTA/group interactions; no email or real reset performed. |
| [Password sync groups](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html) | SSO precedence, supported source grouping/history, PTA failure gate and non-PTA partial changes. No universal atomicity, reverse sync or retry schedule. |
| [Session settings](https://documentation.sailpoint.com/saas/help/common/session_lengths.html) | Maximum/idle concepts, settings not applied to active sessions, browser cookie-retention caveat. No fixed lifetime/defaults frozen. |
| [Lockout settings](https://documentation.sailpoint.com/saas/help/setup/lockout.html) | Sign-in/reset failure restrictions and PTA primary-account interaction; no thresholds or repeated guessing prescribed. |
| [User levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html) | ISC permission boundaries distinct from authentication and external application permission. |
| [Emergency-access administrators](https://documentation.sailpoint.com/saas/help/setup/ea_admin.html) | Controlled emergency/break-glass arrangement. No file import, invitation, account creation or access grant performed. |
| [Sources overview](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector/target distinction and supported connection capability. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Represented account-to-identity association, not SSO matching or shared credential stores. |
| [Loading accounts](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collection scope and represented account data, not readable current password or live target result. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Account/operation/stage/error evidence; successful submission or verification doesn't prove intended external change. |
| [OASIS SAML technical overview](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html) | Conceptual federation/assertion/browser response and separate sessions. Historical technical overview used for stable concepts, not its old TLS recommendations or ISC implementation details. |
| [W3C XML Signature 1.1](https://www.w3.org/TR/xmldsig-core1/) | Public/private signing roles and signature verification/integrity of signed content; no algorithm selection or complete SAML security runbook. |
| [RFC 6238](https://www.rfc-editor.org/rfc/rfc6238.html) | TOTP based on registered secret material and time. No code, seed, fixed lifetime or authenticator configuration supplied. |

Specific checks include PTA's documented first-encountered account, SSO precedence over normal Directory Connection, existing-user matching unless JIT is configured, elevated-user TOTP registration versus normal IdP sign-in, identity reset not clearing MFA, flat-file Password Management incompatibility, source-based password grouping/history, PTA failure gating versus non-PTA partial outcomes, disabled-account reset restriction, no ISC SAML SLO, and browser session-retention limits.

## Conditions and limits

- All accounts, configuration, events, failures and outcomes are hypothetical. No tenant, IdP, directory, source, policy, password, token, authenticator, signing configuration, account status or session was changed or tested.
- Necessary external accounts exist and are correctly associated. Main normal ISC sign-in uses configured trusted SAML, permitted user and matching existing identity. JIT creation is off; no universal automatic user creation is claimed.
- HR establishes the person; directory authentication is an alternate role. There is no fictional employee biography or requirement to remember another lesson.
- person@corp.example is a reserved example mapping value; person@old.example is a separate supplied mismatch with explicit ISC matching failure. No real email, password, assertion, key, certificate, seed or recovery code is supplied.
- SAML diagram is a conditional logical exchange through the browser, not a complete cryptographic validation algorithm, network topology or fixed private check order. Signed-content integrity doesn't replace user mapping or other acceptance checks.
- Entity IDs, destinations, expected signing information and identity mapping have separate purposes. The lesson doesn't prescribe trust bypass, weak algorithms, deployment commands or legacy TLS recommendations from the historical OASIS overview.
- JIT account creation receives its necessary boundary explanation only. Full JIT setup and activation of temporary access remain separate topics.
- PTA is a separate setup with one eligible pre-aggregated associated directory-user account and supported configured authentication source. A conditional VA dependency isn't inserted into every SAML/hosted sign-in.
- Multiple-account PTA uses the documented first-encountered account. No display-order, preferred-account or provisioning-selector rule is substituted. No multiple-account tenant test was performed.
- MFA at the IdP, ISC sign-in and password-update/recovery verification remain distinct. Elevated-user registration and direct-route challenge conditions aren't generalized into an extra ISC challenge on every normal IdP sign-in.
- Support-Production supplies the required password-capable direct connection, configured/visible access application, compatible policy, usable recovery and eligible existing support-user. It uses its own password and no company IdP or sync/shared-source relationship for the example.
- svc-support is the external integration actor, not the recipient/IdP user/ISC admin. Required verification, operation capability, actor authority, valid password and target result are different conditions.
- Password diagram shows the successful conceptual requirements, not every internal validation order. Final result verification is the engineer's check, not promised automatic fresh authentication.
- Aggregation and account visibility don't provide readable secrets or a password-management write. Flat-file incompatibility is about Password Management, not every possible use of flat-file sources such as emergency identity records.
- Shared-source application tiles and multi-source sync groups represent different mechanisms. The documented PTA failure gate doesn't become a universal all-or-nothing group transaction; the non-PTA case explicitly supplies one success and one rejection.
- No automatic reverse propagation from every external website, universal rollback, retry schedule or readable password-history store is claimed.
- A recovery email, challenge completion, collected account view and old application session don't independently prove a completed target password change.
- Reset/unlock/reenable/MFA reset are separate operations even where recovery connects them. The documented disabled-account restriction isn't a reason to reenable without approval.
- Session settings are service-specific; browser retention, active sessions and IdP/target sessions remain distinct. Password change isn't a universal token/session revocation or incident-containment guarantee.
- Emergency direct sign-in is eligible controlled elevated access with prepared required authentication, not an employee-wide bypass. No emergency administrator file or account was edited.
- Source references and verification metadata stay outside learner content. Actual beginner validation, full graphical publication review and formal approval remain pending.

## Assessment metadata

| Preserved assessment | Accepted reasoning | Misconception exposed |
|---|---|---|
| IdP success/email mismatch | Explicit mapping error after accepted IdP authentication points to data/configuration; preserve intended identity | Every login failure means wrong password or requires another identity |
| PTA source unreachable | Credential decision incomplete; inspect actual authentication path/source | Correct password repairs connectivity; failed check proves wrong password |
| Missing administration | Supplied signed-in user has limited platform authorization; justify intended level | Signing certificate or login success confers admin rights |
| Standalone application reset | Confirmed support-user change has no configured IdP/shared-source/group effect | Correlation or labels synchronize all passwords |
| Non-PTA group mixed results | Per-source success/rejection means partial outcome; reconcile and recover supported work | Every group is atomic or first success proves all changed |
| Verification passed/target denied | Required user challenge passed; target actor lacks operation authority | Resetting MFA grants connector target privilege |
| Existing session after reset | Separate confirmed credential result from unanswered session state | Open tab proves failed reset or reset proves containment |
| Purchasing transfer | Establish authentication trust, ownership, supported password path/settings/verification/policy/authority and separate permission design | Collection exposes passwords, ISC SSO federates every app, and every associated account can be reset |
| Teach-back | Follow entered service, proof checker, ISC mapping, password-operation account and result evidence | Person identity means one universal login/password/session |

## Explanation review

The account comparison removes biography while preserving every relationship needed for reasoning. Authentication and session meaning appear before the full SSO path. Trust/mapping defects then explain why IdP success alone isn't ISC success.

The PTA route is explicitly separate and completes its normal mechanism before connection, credential and multiple-account variations. Provisioning meaning precedes its account-selection comparison. Elevated-user and TOTP meanings explain the concrete registration/challenge distinction.

The password flow establishes supported connection, account, recovery, policy and integration actor before success. Shared-source versus sync-group reasoning develops from where the actual password operation lands. Evidence and session sections retain useful boundaries without inventing guarantees.

All seven original investigations and the purchasing transfer remain. The mentor/humanizer pass checks first-use terms, simple connected causal paragraphs, complete normal flows, neutral values and evidence-qualified answers. No greeting, method announcement, source/course link, revision metadata, em dash or fixed section/visual quota belongs in learner content.

Author review and local checks aren't observed learner understanding.

## Executed verification

- Fresh `npm test`: all four navigation/disclosure tests passed, zero failures. Site behaviour checks don't establish beginner comprehension.
- Fresh `git diff --check` passed. Separate whitespace checks for the three new diagram files and this record produced no diagnostics.
- Checked 757 local Markdown file targets across the teaching specification, course register, README, reference register, example register, this record, publication record and publishing guide: zero missing targets.
- Saved learner source matches the reviewed revision. All three current editable diagrams match their inline blocks exactly; maximum widths are 38, 38 and 39 characters, below the 42-column limit.
- All seven numbered original investigations and worked answers remain, with the purchasing-application design transfer. The coverage map contains 103 purposes and the primary-reference table contains 23 entries.
- Learner-body checks found no source/course URLs or Markdown links, removed employee/company identifiers, em dashes, revision metadata or verification placeholder. The named-person check uses a word boundary so ordinary words such as device aren't false matches.
- Saved course register, current reference section and example row match intended updates. Progress is 20 of 91 individually revised lessons, with 71 awaiting revision. ARC-008 is next; its learner body was not opened.
- SHA256 comparison against the start-of-task snapshot: 354 files became 358. Only ARC-007 learner content and the three course/author metadata files changed; three current diagram files and this record are new. All 350 other existing files are unchanged; zero files removed. Earlier local ARC-002 through ARC-006 work is preserved.
- HEAD remains `da1e1da7c94421e03e8437e94eb49e3fe56fd3ec`; staging is empty. No commit, push or Pages deployment. Published revised lessons remain the 14 through ARC-001; ARC-002 through ARC-007 revisions are local.
- No tenant, IdP/directory sign-in, authentication/recovery, credential/MFA/password, policy/session, connector or target operation occurred. Actual beginner validation, full graphical publication review and formal approval remain pending.

Published ARC-007 remains revision 1.0. Revision 2.0 is local only.
