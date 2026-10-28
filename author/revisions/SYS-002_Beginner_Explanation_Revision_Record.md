# SYS-002 beginner explanation revision record

Revision 3.0. Module 1.2. Teaching specification 3.2. October 28, 2026.

[Current learner](../../lessons/SYS-002_Authentication_Authorization_and_ISC.md).
[Previous revision 2.2 record](SYS-002_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).

## Scope and baseline

The user requested continuing the authorized local, one-lesson-at-a-time beginner-explanation pass. SYS-002 is the second revised learner: 2 of 91; SYS-003 is next. SYS-001 revision 3.0 and the separate TRN-004 pilot are preserved.

Baseline revision 2.2 is recoverable at main 95581c4d213d1a5d3d7b9f0302461bb917f30261, the author-only follow-up to published content f5b287c6822c21e156fd7490a3adbc1d6d0274b7. Its earlier record remains historical.

Permanent ID, title, source/HTML paths, course order and navigation are unchanged. The other 89 lessons are not newly revised. No new lesson is counted, and ROL-007 remains reserved with no stub. No staging, commit, push, deployment or real account/tenant operation is performed.

## Teaching choices and complete read-through

The concrete sign-in/invoice-denial opening and useful local session explanation are retained. The normal action check is complete before ISC configuration or federation details appear.

The revised middle connects the person, collected account, entitlement and integration actor to the particular account change. Submission/approval, actual delivery and current use remain distinct without beginning with a long glossary.

A concise three-path diagram shows change, use and observation. The SAML trace remains explained in prose, while a small account table makes the actual NameID comparison visible. A later table separates requested assignment, current permission and session state for removal reasoning. These visuals were selected for their jobs, not a quota.

Full normal-path and changed-condition read-through retained the password/evidence, MFA, session/cookie, frontend/backend and application-enforcement links. Later sections develop provider trust, response validation, account selection, earlier access snapshots, complete native rules and removal scope. No sign-in mechanism is attributed to ISC merely because ISC delivered a permission.

Author review also checked the five questions and export transfer against their stated account, rule and timing conditions. Unknown facts stay unknown; the export contradiction is not repaired by inventing another business rule.

This is a simulated beginner author read-through, not an independent reader study or measured comprehension result. Actual learner validation remains pending.

## Preserved coverage

All 52 purposes listed in the preceding revision record are mapped below. Requested-entitlement assignment enforcement is additionally recorded explicitly afterward because the earlier learner taught it even though it was not a separate row in that table.

| Previous essential purpose | Current explanation |
|---|---|
| Successful sign-in, approval and denied action can coexist | Opening and delivery explain accepted sign-in, a business decision and an absent permission as different results. |
| Authentication verifies a claim, not just a username | Local sign-in explains username as a claim and password as required evidence, not identity proof from a name alone. |
| MFA needs different factor categories | Local sign-in compares knowledge and possession and explains why repeating the same factor is not MFA. |
| Authentication doesn't grant all actions | Opening and first invoice check distinguish application entry from allowed actions. |
| Authorization, resource, action and permission | Opening identifies account, action, invoice resource and permission before relying on authorization. |
| Decisions need not be separate products/screens | Frontend/backend section explains that different decisions can be performed by one application without separate screens. |
| Authenticated but not assigned to an application | Central-provider section supplies an authenticated user rejected by application-entry policy or assignment. |
| ISC governance and provisioning responsibilities | ISC's role is developed through business justification and delivering an account permission. |
| Business authorization versus runtime authorization | Manager's approved business need is contrasted with the later application operation check. |
| Access request, recipient and requestability | Request, recipient and requestability are explained before the configured self-request trace. |
| Approval conditions and fulfillment | Delivery supplies correct configured manager, enabled visible request item, immediate use and fulfillment meaning. |
| Denied request versus existing access | Request-denial paragraph retains existing access/history as a separate question. |
| System-specific accounts versus person-level identity | ISC account-target section separates person-level identity, provider account and invoice account. |
| Source and connector versus target | Same section connects source representation, supported connector and application as receiving target on a write. |
| Correlation versus authenticating/sign-in mapping | Correlation is account ownership inside ISC; NameID mapping later selects the account used by sign-in. |
| Entitlement and group meanings | Entitlement represents source rights; group membership has its effect through actual application rules. |
| Existing-account delivery preconditions | Successful trace supplies existing enabled single correlated account, supported add, enabled provisioning, connectivity and integration authority. |
| Precise native requirement and excluded operation | Permission-only example preserves allowed invoice reading and denied payment release, without password change, account creation or sign-in through provisioning. |
| Submission, manager decision, attempted write and applied target state | Delivery traces the configured decision into the supported operation and accepted account update. |
| Target rejection under valid approval | Rejected-write variation and first checkpoint identify missing integration authority despite a valid manager decision. |
| Reported operation versus current target record | Evidence section separates a reported operation from a current account observation and possible later changes. |
| Aggregation is readback, not grant or sign-in | Evidence section and observation diagram separate collection, granting and sign-in; no immediate post-write aggregation is assumed. |
| Manual task completion versus independently verified result | Manual subsection separates assigned work, task completion and current application-account checks. |
| IdP and provider entry policies | Provider section explains IdP verification and independent application-entry policy. |
| Federation, SSO and further prompts | Same section introduces configured federation trust, SSO and possible policy-driven prompts. |
| SAML, assertion and service provider | SAML section defines the standard, structured assertion and receiving service provider before tracing the exchange. |
| Provider and application sessions are separate | Successful SAML explanation distinguishes existing provider session from the application's own later session. |
| Conceptual successful sign-in sequence | Seven-step conceptual SAML trace preserves browser redirection, verification/entry policy, response, validation, account choice, app session and invoice check. |
| Trust validation rather than browser-supplied authority | Response validation explains origin, integrity, intended application and time validity, with no exhaustive validation claim. |
| Correct denial of payment release | First rule and federated outcome retain denied payment release while reading is allowed. |
| Local authentication as an alternative | Complete local example precedes the federated alternative; action enforcement remains connected to the account in both. |
| Change/use connection and no universal live ISC call | Three-path map connects change and use through the application account; no live ISC per-click decision is assumed in this architecture. |
| Observation direction and human verification | Observation runs from application to ISC; resulting writes and human investigation remain separate responsibilities. |
| Front end versus trusted backend enforcement | Frontend/backend explanation requires trusted enforcement of protected requests rather than only hiding a button. |
| Screen result versus rechecking an old approval | Evidence section explains invoice response as application processing, not repeating manager approval. |
| ISC request/activity/account views and freshness | Evidence table separates request decisions, activity outcomes, collected snapshots and current application account/action. |
| Provider succeeded, application rejected response | Failure discussion separates IdP authentication from the receiving application's response validation. |
| Delivered permission, wrong signed-in account | NameID/account table and second checkpoint compare recipient account with actual session account before changing mappings or adding access. |
| Tokens/session snapshots and no universal wait | Snapshot/token section explains earlier access information, integration-dependent meaning/lifetime and lack of a universal wait. |
| Controlled new-session test isn't a universal fix | Same section scopes a controlled new-session diagnostic; it neither proves every session ended nor guarantees repair. |
| Permission plus business-unit condition | Separate rule requires Read invoices AND correct invoice business unit; wrong unit predicts denial. |
| Network/service availability versus authorization | Failure discussion distinguishes a request unable to reach a service from a running service rejecting an operation. |
| Permission removal versus disable/sign-in prevention/session termination | Removal section distinguishes one permission, enabled account, new entry and session termination. |
| Current-check versus snapshot after removal | Removal compares current-permission enforcement with a separate earlier-snapshot design. |
| Revocation and emergency scope | Revocation definition and three-record table develop assignment, permission, session and urgent central/direct entry scope. |
| ISC itself as an externally authenticated service provider | ISC entry section makes ISC the service provider when external authentication is configured. |
| ISC user levels and two meanings of access | Same section distinguishes platform user levels from external access that ISC manages or records. |
| Supported governance of SSO provider assignments/groups | Conditional SSO-provider governance affects app entry/assignments, not all native operations; support/configuration/licensing remain conditions. |
| Four checkpoint purposes with worked causal reasoning | Five supplied situations retain all original purposes plus the later session/removal check, with grouped worked causal answers. |
| Document export with incomplete evidence | Document export supplies an enabled/current-permission-only rule, reported account-x add and missing current/session evidence. |
| All supplied conditions hold but observed denial conflicts | Transfer answer treats verified denial under all supplied success conditions as a reason to verify actual operation/deployed rule, not invent another condition. |
| Repeating approval doesn't fix mapping | Transfer answer explains that repeating approval does not change sign-in account selection. |

### Continuing requested-entitlement assignment

The current lesson preserves the distinction between an ongoing ISC assignment and a permission directly removed from the application. For the documented requested-entitlement case, the next aggregation leads to reprovisioning while assignment remains. The read supplies observed state; the separate resulting write still needs target acceptance.

Supported requested-entitlement revocation is the lasting-withdrawal route described. The behavior is not generalized to every entitlement, role, origin, session or account-removal mechanism.

## Example conditions and consistency

The local application uses an enabled account, a server-side session record and browser cookie. Its selected main rule checks current Read invoices for invoice actions; Release payments is separate. The cookie links requests to a session/account, not blanket permission.

The successful ISC path has one existing enabled correctly correlated account, a visible requestable entitlement, enabled entitlement requests, self-request and correct configured manager. There is no future start or extra activation. Supported enabled provisioning, connectivity and sufficient integration authority are supplied. Adding Read invoices changes neither password nor account existence and does not sign the person in.

The failure variation supplies a target privilege rejection with no successful addition. The manual variation supplies supported assigned work and separate result verification.

The selected SAML path has configured IdP trust, permitted application entry, validated response, matching enabled existing account and the same current-permission/browser-session rule. Provider and application sessions are separate. No complete protocol implementation, XML recipe or universal sign-out behavior is claimed.

In the independent mapping example, externalLogin is an illustrative application field: account-a holds subject-a and account-b holds subject-b. Validated matching NameID values choose the corresponding account; subject-c matches neither under an existing-account-only requirement. These are needed comparison values, not a fictional employee or company.

The business-unit rule is a separate explicit variation requiring permission and matching unit. The session-snapshot design is also separate from the main current-permission rule.

The 10:00 collection / 10:20 direct removal / 10:25 denial question supplies order only, with no later collection or refresh. The requested assignment's status must be established before predicting lasting withdrawal. The session-removal question supplies assignment revoked, correct account lacking permission and no other grant; the actual deployed check remains to be established.

The document transfer uses account-x and Export documents, with enabled/current-permission-only enforcement and no other export conditions. A connector report is supplied; current target/session-account evidence is missing. If all stated successful conditions are later verified, denial conflicts with the stated rule and requires verification of actual deployed behavior.

## Source verification, October 28, 2026

References stay author-only. General security/protocol mechanisms are supported by primary guidance and standards; ISC behavior is supported by SailPoint documentation. Shared source/identity/collection meanings were also checked in the same-day [SYS-001 revision record](SYS-001_Beginner_Explanation_Revision_Record.md); those source definitions do not imply a live call on every application request.

| Primary reference | Current checked scope |
|---|---|
| [OWASP MFA](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) | Distinct evidence factors; repeated instances of one factor do not become MFA |
| [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) | Selected server-side session/account context and browser session identifier |
| [OWASP Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) | Protected request enforcement and resource/action permission checks; UI visibility alone is insufficient |
| [NIST SP 800-63C](https://pages.nist.gov/800-63-4/sp800-63c.html) | Federation/assertion purpose, issuer, audience, validity and account resolution; no claim to teach the full standard |
| [Microsoft SAML sign-on protocol](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-on-saml-protocol) | Selected request/response, integrity, intended application and validity concepts |
| [Microsoft SAML claims](https://learn.microsoft.com/en-us/entra/identity-platform/reference-saml-tokens) | Subject/NameID meaning; example externalLogin mapping is supplied application behavior |
| [Microsoft SSO explanation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) | Shared/provider sign-in and federation-based SSO; application/policy conditions remain explicit |
| [Microsoft emergency revocation](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) | Distinct provider/application session control; no vendor-specific token duration or command generalized |
| [Entitlement request configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) | Request/reviewer setup and specifically requested-entitlement reprovisioning after direct source removal at next aggregation |
| [ISC as a service provider](https://documentation.sailpoint.com/saas/help/common/config_isc_service_provider.html) | Configured external-IdP sign-in and receiving service-provider role; no SAML Single Logout support is assumed |
| [ISC user-level permissions](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html) | Platform permissions after authentication, separate from external managed access |
| [SSO-provider governance](https://documentation.sailpoint.com/saas/help/access/govern_sso.html) | Conditional provider group/assignment governance and integration/licensing scope |

The general federation trace is not a Microsoft-only engine description. No live protocol, credential, account, tenant, log, session, timing or removal test was performed. Current SailPoint pages use Identity Services/Human Fabric names in places; the requested ISC course naming is retained. No IdentityIQ behavior is introduced.

## Assessment review

The first case separates a correct approval and successful authentication from a rejected recipient update. The second separates delivered-to account from session account. The third compares collection and removal times while keeping ongoing assignment unknown. The fourth compares current checks with possible snapshots without assuming the cause. The fifth identifies appropriate access as a governance question even when MFA and the configured permission rule worked.

The export transfer requires identifying missing current account and session evidence. It permits a contradiction finding when all supplied success conditions actually hold. Neither another approval nor more broad access is presented as a repair for a sign-in mapping problem.

## Diagram and checks

[Current editable three-path diagram](../../assets/SYS-002_change_use_and_observation.txt) matches the selected successful request/current-permission architecture. Existing historical diagrams remain untouched.

Saved-file checks passed:

- All 91 learner files remain. Relative to the published HEAD, only SYS-001 and SYS-002 differ; the other 89 learner sources retain their earlier content. SYS-001 was not edited in this task.
- The current editable diagram matches the learner block after line-ending normalization; its maximum line width is 45 characters. Historical assets remain unchanged.
- All 1,186 local file targets found in the changed course/reference/example records and this revision record resolve. This is a file-target check, not an external availability or heading-anchor check.
- Learner source has no course/source links and its fences are closed. Tracked whitespace and both new-file checks passed.
- All four existing navigation/disclosure regression tests passed. Manifest, layouts, includes, site configuration and package file remain unchanged.
- HEAD remains 95581c4d213d1a5d3d7b9f0302461bb917f30261 and staging is empty. No commit, push or deployment occurred. ROL-007 still has no file/stub.

These results are separate from the full simulated-beginner author read-through and coverage/source review. They do not validate SAML execution, authentication, sessions, provisioning, reprovisioning, revocation or comprehension in a real system or learner. Actual learner validation and graphical publication-format review remain pending. SYS-003 is the next local revision.
