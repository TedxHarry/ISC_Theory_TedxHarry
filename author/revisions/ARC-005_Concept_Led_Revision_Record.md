# ARC-005: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-005_Connection_Dependencies_and_Operation_Support.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [runtime operation paths](../../assets/ARC-005_runtime_operation_paths.txt) and [evidence/scoped action/recovery](../../assets/ARC-005_evidence_scoped_action_and_recovery.txt).
- Historical [runtime paths](../../assets/ARC-005_runtime_paths.txt) and [evidence/recovery](../../assets/ARC-005_evidence_and_recovery.txt) remain unchanged.
- Only ARC-005 learner content is revised. All 91 learner files, earlier local ARC-002/003/004, published revisions, individual records/assets, site code and original repository are preserved.
- Published revised snapshot remains through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002 through ARC-005 revisions 2.0 remain local.
- No staging, commit, push, Pages deployment, ISC tenant/API/connector execution, network/security/credential change or support message.
- Next existing revision: ARC-006; its learner body was not opened. New authoring stays paused at reserved ROL-007.

The revision begins with test scope, a precise required account change and its actual runtime, then completes a supported successful update before developing dependencies. Destination, path, trust, caller, operation authority, connector support and valid input become explanations of what that update needs, rather than a glossary or a claimed private execution sequence. Error-origin reasoning, the evidence-backed denial, human investigation, interrupted outcomes and design transfer then connect those concepts.

Devi, employee number 35005, OrderDesk and ResearchArchive brands are removed. Neutral Orders-Production is the ISC label and Orders-Prod the external workspace. Existing recipient orders-reader, caller svc-orders and orders.export retain their separate purposes. Cluster orders-prod has va-01/va-02; actual va-02/direct path is supplied evidence. Existing viewing and new export are distinct rights. The research-application transfer remains read-only SaaS versus an unsupported proposed disable design.

## Coverage reconciliation

108 purposes and necessary clarifications are traced below. Counts support preservation, not measured learning or a required lesson size.

| Purpose | Current location |
|---|---|
| 1. Successful browser/test/read can coexist with failed change; observations have different scopes | Opening |
| 2. Connector/source/target meanings; source label is configuration not whole application | Define work |
| 3. Connection test means implemented checks/configuration/time, not all future operations | Define work |
| 4. Dependency means condition or component required for work | Define work |
| 5. Existing orders-reader can view but needs separate orders.export | Required change |
| 6. Entitlement/person identity/external account/collected representation meanings | Required change |
| 7. Correct correlation means person association, not grant | Required change |
| 8. Orders-Production source label and Orders-Prod external workspace differ | Required change |
| 9. Workspace meaning; exact destination/account/permission requirement | Required change |
| 10. Request/profile meanings and single-source Export order summaries contents | Required change |
| 11. Permitted review, selected existing account, supported automatic delivery, no creation/script | Normal-path conditions |
| 12. Provisioning meaning and exact intended target effect | Normal-path conditions |
| 13. Runtime meaning and browser not automatically connector execution | Locate caller |
| 14. VA/VM/cluster meanings and actual-member context | Locate caller |
| 15. SaaS hosted runtime/no customer VA and application hosting not selection evidence | Locate caller |
| 16. IQService/Windows-service meaning and separate VA/service/target legs | Locate caller |
| 17. API meaning and human website differs from management interface | Locate caller |
| 18. Three conceptual paths; work/results not packet routes or all connector interfaces | First diagram |
| 19. VA-initiated cloud communication; no unsolicited inbound exposure implied | First-map narration |
| 20. Tenant meaning and only actual operation components belong in investigation | Locate caller |
| 21. orders-prod contains va-01/va-02; actual va-02 and direct path are supplied | Main runtime conditions |
| 22. Main orders example has no IQService; alternate cases explicitly different | Main runtime conditions |
| 23. Integration actor/API token/credential/authentication/authorization meanings | Normal operation |
| 24. svc-orders differs from recipient and ISC administrator | Normal operation |
| 25. Prepare supported work, actual VA calls protected production API, accepted/permitted valid request, target applies, result returns | Complete normal operation |
| 26. Business approval doesn't supply external write privilege | Normal-operation reasoning |
| 27. Reported result versus intended target effect; test/token/approval alone not delivery | Normal-operation evidence |
| 28. Dependencies are not a fixed ISC backend sequence | Transition and condition table |
| 29. Endpoint meaning plus workspace/region/path/resource selection | Destination |
| 30. Renaming source doesn't select destination or transform credentials | Destination |
| 31. Account identifier source context; equal test string not production proof | Destination |
| 32. DNS/name-resolution meanings and member-specific resolver/path | Name resolution |
| 33. Password doesn't fix missing lookup; successful resolution not intended/reachable/authorized service proof | Name-resolution reasoning |
| 34. Actual runtime evidence, not laptop substitution | Name-resolution reasoning |
| 35. Network reachability, port/listener, route/firewall meanings | Reachability |
| 36. Allowlist meaning and per-member/network-origin differences | Reachability |
| 37. Proxy/gateway meanings and actual supported route/bypass exceptions | Intermediaries |
| 38. Direct test not configured proxy-path evidence | Intermediaries |
| 39. HTTPS/443 example not every target/connector port; target versus cloud destination | Reachability scope |
| 40. Timeout meaning at connection setup, no unique cause; refused differs from DNS failure | Reachability evidence |
| 41. Established connection not correct service/authentication; don't open everything | Reachability evidence |
| 42. TLS/HTTP/HTTPS meanings and protected channel not operation privilege | Protected connection |
| 43. Certificate/public-private key/CA/trust chain meanings | Protected connection |
| 44. Endpoint identity, validity, actual client trust and clock context | Trust evidence |
| 45. Browser trust may differ from VA; not recipient password defect | Trust evidence |
| 46. Inspection proxy can change seen certificate chain; supported trust not validation bypass | Trust evidence |
| 47. IQService protected legs remain separate | Trust scope |
| 48. Rejected credentials can be expired/revoked/incorrect/locked-account/wrong-destination; evidence distinguishes | Credential context |
| 49. External secret replacement doesn't update old configured source value | Credential lifecycle |
| 50. ISC API token/admin authority distinct from target authority | Credential context |
| 51. OAuth/access-token/scopes meanings and conditional effective permissions | Credential context |
| 52. External roles mean target permission grouping; consent/user/resource limits matter beyond write scope text | Credential context |
| 53. IQService registered user/process logon/source target context; registration and Windows authentication precede target authority | IQService credential comparison |
| 54. Aggregation meaning and scoped successful read is not all writes | Read versus change |
| 55. Read/write/object/workspace authority differences for actual caller | Operation authorization |
| 56. Business approval doesn't alter integration privileges; least-privilege meaning | Operation authorization |
| 57. Target API/credentials cannot implement missing connector operation | Capability |
| 58. Read-only versus write-capable configuration and exact-operation support | Capability |
| 59. Salesforce SaaS enable/disable excludes portal/partner account types | Concrete support example |
| 60. Source settings/operation/account type/feature activation/service licensing checks | Capability |
| 61. Payload meaning and operation-specific required fields/values | Input |
| 62. Mapping meaning and represented value supplies required target key | Input |
| 63. Account-schema/identifier versus readable display label | Input |
| 64. Source/account/entitlement references and required values; no privilege fix for wrong/missing key | Input |
| 65. Target account state/resources/licence/service availability are dependencies | Target conditions |
| 66. One correction can reveal another failure without invalidating first | Layered failures |
| 67. Six-condition readiness comparison with evidence | Condition table |
| 68. Connector may reject locally; target may validate after receiving; no fixed order | Condition-table scope |
| 69. Passing one condition doesn't cancel the others | Condition-table reasoning |
| 70. HTTP status code meaning and component/detail context | Error origin |
| 71. 400/401/403/407/429 meanings without unique-root-cause inferences | Status table |
| 72. Gateway refusal possible; locate responder before prescribing target role change | Error origin |
| 73. Rate-limit/throttling meanings; connector-specific handling, no universal delay/count | Error origin |
| 74. Non-HTTP interfaces keep own error semantics | Error origin |
| 75. Source/account/operation/environment/actual runtime/timestamp/time-zone evidence context | Evidence correlation |
| 76. Request reference meaning where systems provide it | Evidence correlation |
| 77. Missing log alone not no-call proof; logging/retention/component scope | Evidence limits |
| 78. Main denial retains va-02/production path, successful DNS/protection, caller/workspace/account audit, explicit missing assignment privilege and absent target right | Main failed attempt |
| 79. Narrow correction from supplied audit, not recipient password/DNS/unsupported operation | Main failed-attempt reasoning |
| 80. Successful portions scoped to that attempt, not all members/future operations | Main failed-attempt scope |
| 81. Authorized privilege correction, supported recovery and current target verification | Main failed-attempt recovery |
| 82. Without detailed evidence, green test/read can't select same cause | Main diagnosis limit |
| 83. Reconciliation meaning before human decision map | Investigation decisions |
| 84. No branch gathers evidence/returns; yes validates scoped action, recovers/reconciles, verifies | Second diagram |
| 85. Map is human investigation not private execution or authorization from missing evidence | Second-map scope |
| 86. Scoped correction preserves unrelated security/business decisions | Investigation decisions |
| 87. Repaired route followed by token rejection illustrates accumulating established facts | Layered-failure reasoning |
| 88. Lost response can follow applied effect; broader operation can be partially completed | Outcome reasoning |
| 89. Separate create-success/access-failure example, no universal rollback | Outcome reasoning |
| 90. Compare target and operation details before repeating | Outcome reasoning |
| 91. Idempotent meaning: repeated equivalent requests same intended effect; operation-specific | Repeat effects |
| 92. Hypothetical ensure-disabled versus create-new-record example clarifies effect | Repeat effects |
| 93. Idempotence not identical responses/no logs/no side effects; supported recovery required | Repeat-effect scope |
| 94. Restored communication/reconciled work/verified target distinct outcomes | Repair versus recovery |
| 95. Collected-state meaning and old ISC view not live target test | Represented evidence |
| 96. Specific operational handoff versus firewall guess; established/unknown context | Handoff |
| 97. Application-owner versus DNS-team evidence; organization ownership not blame from labels | Handoff |
| 98. No passwords/tokens/private keys/unrestricted sensitive trace disclosure | Handoff |
| 99. Five original investigations and worked reasoning retained | Investigations |
| 100. Member-specific DNS case before target session and no target-password fix | First case |
| 101. IQService TLS-corrected then unregistered-client refusal, no admitted target work | Second case |
| 102. 400 exact missing workspace message, permitted supported call and no applied change | Third case |
| 103. Proxy 407 with known origin/no-forwarding, distinguish proxy versus target creds | Fourth case |
| 104. Timeout target audit/current state confirm actual assignment while ISC view old; don't blindly repeat/new request | Fifth case |
| 105. Read-only SaaS research application transfer retains target API disable but no supported write path/authority | Design transfer |
| 106. Transfer requires operation/account-type/destination/path/config/authority/input/outcome and activation/licensing evidence | Design transfer reasoning |
| 107. Administrator creds and test/read success don't create capability; no broad privilege shortcut | Design transfer reasoning |
| 108. Teach-back connects reachability/authentication/authorization/support/input and verified result | Final prompt |

All five original investigations and worked reasoning remain, alongside the complete main denied-export trace. The design transfer still establishes successful reads only and requires exact-operation support before approving disable; neither broad credentials nor an implemented API on its own supplies connector capability.

The normal successful mechanism, explicit missing-privilege denial, member-specific DNS failure, corrected TLS then unregistered client, missing workspace input, proxy admission and target-applied/lost-response cases stay separate. No case's conclusion is inferred from a generic status or substituted into another.

## Primary verification

Checked October 26, 2026. Eighteen primary references support the scope. Network/proxy requirements, HTTP semantics/rate-limit definitions and Google/Salesforce examples were freshly checked. Supporting runtime/IQService/source/schema/provisioning/access references retain current checks from this same revision sequence on this date.

| Primary reference | Claim and applicability |
|---|---|
| [VA system/network requirements](https://documentation.sailpoint.com/saas/help/va/requirements_va.html) | Actual runtime's DNS, clock, cloud/target communication, target-specific ports and private-CA/inspection trust. No fixed regional address or broad firewall change prescribed. |
| [VA configuration](https://documentation.sailpoint.com/saas/help/va/config_va.html) | Configured web-proxy path and supported bypass exceptions; proxy admission differs from target admission. No proxy bootstrap/credential recipe. |
| [VA deployment](https://documentation.sailpoint.com/saas/help/va/deploy_va.html) | Source/cluster/member context. Actual worker va-02 is supplied evidence, not a worker-selection algorithm. |
| [VA management](https://documentation.sailpoint.com/saas/help/va/manage_va.html) | Appliance/member health versus specific target-operation scope; another machine's success doesn't validate this caller path. |
| [Source definitions](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector and VA/SaaS/read-only/deeper capability distinctions. Label or accepted read doesn't create a write operation. |
| [SaaS runtime](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) | Hosted runtime/no VA for supported path and separate target API reachability. No direct hosted-runtime diagnostic access or private topology assumed. |
| [IQService introduction](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/intro.html) | Operation-specific Windows component. Not used in main orders path; alternate case explicitly uses it. |
| [IQService requirements](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/system_requirements.html) | Registered client, process logon and source target-management contexts are distinct; no universal shared identity or permissions inference. |
| [IQService TLS/client authentication](https://documentation.sailpoint.com/connectors/iqservice/help/common/topics/configuring_tls_and_client_authentication_for_iqservice.html) | Separate server trust, client registration/Windows authentication and target authority. TLS-repaired/unregistered-client sequence is supplied case evidence, not a universal check order. |
| [Google Workspace SaaS prerequisites](https://documentation.sailpoint.com/connectors/saas/googleworkspace/help/saas_connectivity/google_workspace/prerequisites.html) | Concrete example of external roles, consent and applicable user context influencing authority beyond scope text. No Google-specific role/licensing recipe generalized. |
| [Salesforce SaaS features](https://documentation.sailpoint.com/connectors/saas/salesforce/help/saas_connectivity/salesforce/supported_features.html) | Enable/disable support excludes portal/partner users; operation/account-type and activation conditions need actual verification. |
| [Account schema](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented fields and account identifier; human label isn't automatically target key. No schema designation change or executable payload taught. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Tracked source/recipient/action/progress/result/error evidence differs from current target assignment and old collected view. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Supported configured changes versus reads. Recovery/refresh/retry/rollback are not universally promised. |
| [HTTP semantics, RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) | Intermediaries, 400/401/403/407 and idempotent intended-effect meaning; protocol properties aren't connector-specific recovery instructions. |
| [Additional HTTP codes, RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html) | 429 means request-rate limiting; no universal caller-count scheme, mandatory code use or immediate-repeat guarantee. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Correct person/account association is a normal-path condition, not access grant or runtime connectivity. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source entitlement bundle; valid permitted request, account choice and supported provisioning are assumed explicitly. |

Official documentation currently uses Identity Services / Human Fabric branding; the learner file retains ISC. Actual endpoint lists, permitted origin rules, feature activation, support by account type and target permission models require checking for a real implementation.

RFC 9110's 400/401/403/407 passages and section 9.2.2 were directly checked. They classify response conditions and intended repeated-request effects, not unique root causes or universal connector retry behaviour. RFC 6585 makes 429 a rate-limit response without prescribing universal counts/delays. No response header, raw payload or runnable API call is copied into the lesson.

The certificate/clock/inspection discussion is grounded in the VA requirements and supported trust model. The proxy page includes source web traffic and bypass exceptions. Neither fact authorizes removing network controls or inventing hosted-runtime origin addresses.

The historical revision-1.0 references and assessments remain in [reference records](../REFERENCE_RECORDS.md).

## Conditions and limits

- The main requirement is orders.export on existing orders-reader in Orders-Prod. The person association, permitted reviewed request, correct account choice and automatic supported operation are explicit conditions.
- Export order summaries contains only that entitlement from Orders-Production. Viewing does not already imply export, and neither label is a real named connector offering or a SailPoint-defined permission.
- Main source uses a hypothetical VA-based API path with orders-prod/va-01/va-02. Supplied operation evidence identifies va-02 and direct target communication. Proxy and IQService cases are separate paths, not hidden dependencies in the main example.
- Caller svc-orders uses a configured API token. It differs from recipient, ISC administrator and caller of ISC's API. No actual token, password, private key, endpoint or command is provided.
- The full normal update succeeds under its stated valid/permitted conditions. The separate failed attempt explicitly establishes production destination, working resolution/protection, correct caller/resource and denied assignment privilege with absent target entitlement.
- The narrow missing-privilege conclusion requires that supplied audit evidence. Green connection/read results alone don't establish it, and success of part of one attempt doesn't certify future calls or other members.
- Destination, support/configuration, actual path/trust, caller acceptance, resource-specific authority and valid input/target state are related prerequisites. Their comparison is not a fixed backend order; local rejection and target-side validation are possible at different stages.
- The DNS case explicitly fails before target session, proxy case explicitly identifies origin/no forwarding, and 400 case explicitly reports the missing workspace field with no applied change. No generic status code independently supplies those facts.
- Authentication/scope/role/consent and resource conditions depend on the target. External roles mean its permission groupings, not inferred ISC role assignments. IQService client registration/Windows authentication differs from process and target contexts.
- Protection and origin restrictions stay enabled as required. No guessed allowlist, blanket firewall opening, certificate bypass, credential disclosure or unrestricted administrator shortcut is taught.
- A timeout can follow a target effect. The separate creation-success/access-failure example doesn't establish global rollback. The hypothetical ensure-disabled example defines repeated intended effect and doesn't assert any actual connector's idempotence.
- Reconciliation establishes actual outcome and aligns tracked work through supported handling. It is not another word for restoring connectivity, automatically retrying all work or proving a current target result.
- Current target assignment, recorded operation and older collected state have different observation scopes. Missing logs alone don't establish no call; retention, filtering and inspected component matter.
- The design transfer's existing read-only source and target API disable do not establish a write-capable connector design. Required type/support, settings, authority, input and outcome evidence remain missing.
- Human handoff/ownership depends on the organization. No real investigation, test connection, target inspection, repair or operation was performed.
- Detailed connector setup, network/protocol implementation, authentication grants and recovery runbooks remain in their primary topics. Necessary meaning and reasoning stay in this lesson.
- Beginner read-through, graphical publication review and formal approval remain pending.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Main denied-export trace | Supplied production caller/resource audit establishes missing assignment authority; authorize scoped correction, recover and verify. | Test/read success proves write privilege, or generic errors identify the cause. |
| Actual-member DNS | Inspect va-02's hostname/resolver path; other callers' success doesn't fix its pre-contact failure. | Another VA/laptop test proves this member, or password rotation supplies DNS. |
| Corrected TLS/new registration error | Retain established TLS success and investigate IQService registration/source client credential; no target privilege expansion inferred. | Later failure invalidates every earlier correction. |
| Missing workspace/400 | Explicit validation detail identifies input/mapping requirement; don't infer exact cause from code alone. | Valid credentials supply missing data or every 400 is password rejection. |
| Proxy 407 | Identify proxy admission and supported configuration; no target-token fix or no-effect inference without given origin/path evidence. | Every authentication error belongs to target or status alone proves all effects. |
| Target-applied/lost response | Target audit/current account establish assignment; reconcile work/view before any repeat/new request. | Timeout/old ISC view means no effect or universal rollback. |
| Disable design | Successful read-only path established; require supported exact disable/type path, settings, external authority, valid input and outcome evidence. | Administrator credentials or target API capability implements missing connector behaviour. |
| Teach-back | Explain path, accepted caller, permitted action/resource, support/input and independent result. | One green check certifies the whole access-management operation. |

Source anchors follow the primary table: runtime/network/proxy for execution and path; IQService for alternate admission; concrete connector examples for authority/capability; schema for valid input; HTTP standards for response meanings/repeat effect; provisioning/monitoring for recovery and target evidence; correlation/profile for existing governed access context.

## Explanation review

The normal target effect is established through a familiar existing account needing export. Runtime/API and actual member identify where the call originates. Integration identity, credential and authentication/authorization are introduced before the full supported update, so the later dependency sections explain that mechanism rather than replacing it with definitions.

Endpoint/DNS, reachability controls, trust and caller contexts have locally explained meanings. Valid input and connector support are distinguished from target privilege. The condition table is explicitly a dependency comparison and doesn't invent a fixed ISC pipeline.

Reconciliation is defined before the human decision diagram uses it. Idempotence is tied to intended effect with an explicitly hypothetical state-setting contrast, then limited by possible different responses/logs/side effects. Five case answers identify the evidence supporting their conclusions.

The mentor/humanizer pass checks simple connected paragraphs, minimal neutral values, explicit assumptions and useful questions. No biography, greeting, source citation, learning-method announcement, revision metadata or fixed section/visual/case quota is needed. Source checks and author review aren't observed beginner understanding.

## Executed verification

- Fresh `npm test`: four navigation/disclosure tests passed; zero failures. These checks cover site behaviour, not learner comprehension.
- Fresh `git diff --check`: passed. Separate whitespace checks for all three new files produced no diagnostics.
- Checked 738 local Markdown targets across the teaching specification, course register, README, reference register, example register, this record, publication record and publishing guide: zero missing files.
- Saved learner source matches the reviewed revision. Both editable diagrams match their inline blocks exactly; maximum widths are 38 and 39 characters, below the 42-column limit.
- Five original numbered investigations and their worked reasoning remain, together with the denied-export trace and read-only SaaS design transfer. The coverage map contains 108 purposes and the primary-reference table contains 18 entries.
- Learner-body scan found no external/course links, source citations, removed fictional employee/company identifiers, em dashes, revision metadata or verification placeholder.
- Saved course-register, current reference-section and example-row content matches the intended updates. Current progress is 18 of 91 individually revised lessons, with 73 awaiting revision; ARC-006 is next and its learner body was not opened.
- SHA256 comparison against the start-of-task snapshot: 348 existing files became 351; only ARC-005 learner content and the three author/course metadata files changed, with two new ARC-005 diagrams and this new record. All 344 other existing files are unchanged; zero files were removed. Earlier local ARC-002/003/004 changes are preserved.
- HEAD remains `da1e1da7c94421e03e8437e94eb49e3fe56fd3ec`; staging is empty. No commit, push or Pages deployment was performed. The 14 published revised lessons end at ARC-001; ARC-002 through ARC-005 revisions remain local.
- Actual beginner validation, full graphical publication review and formal approval remain pending. No ISC tenant, connector, API or target-system operation was performed.

Published ARC-005 remains revision 1.0. Revision 2.0 is local only.
