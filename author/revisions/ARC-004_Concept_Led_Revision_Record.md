# ARC-004: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-004_Where_IQService_Fits.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [ISC/VA/IQService/directory work](../../assets/ARC-004_isc_va_iqservice_and_directory.txt) and [connection/admission/target checks](../../assets/ARC-004_connection_admission_and_target_checks.txt).
- Historical [operation path](../../assets/ARC-004_operation_path.txt) and [security boundaries](../../assets/ARC-004_security_boundaries.txt) remain unchanged.
- Only ARC-004 learner content is revised. All 91 learner files, earlier local ARC-002/003, published lesson revisions, individual records/assets, shared site code and original repository are preserved.
- Published revised snapshot remains through ARC-001 at da1e1da7c94421e03e8437e94eb49e3fe56fd3ec. ARC-002, ARC-003 and this revision remain local.
- No staging, commit, push, Pages deployment, tenant/API/infrastructure operation, security or credential change, script execution or support message.
- Next existing revision: ARC-005; its learner body was not opened. New authoring stays paused at reserved ROL-007.

The explanation begins with Windows-side work and IQService's purpose, then identifies operation-specific requirements and separate component roles. It establishes the account/group requirement and four credential roles before completing one successful assignment. Protected communication, the changed certificate condition, evidence, customization and shared maintenance follow that understandable path. Structure follows the concept, not a template.

Devi, employee number 34004 and coordinator biography are removed. Neutral docs-reader is the existing recipient; Engineering Directory, ENG-Docs-Readers, eng-prod, va-01/va-02 and iqservice.corp.example identify the needed source/group/cluster/endpoint relationships. CORP\svc-ad, CORP\svc-iq-client and CORP\svc-iq-run retain separate target, client-admission and process roles. These are hypothetical labels, not real account data or commands. The group's document-reading effect remains conditional on the document system's own permissions/checks.

## Coverage reconciliation

101 purposes and necessary clarifications are traced below. Counts record preservation, not observed learner understanding or a required lesson size.

| Purpose | Current location |
|---|---|
| 1. IQService/Integration Service meaning and Windows-side purpose | Opening |
| 2. Windows-service and API meanings before dependent explanation | Opening |
| 3. Component is not hosted ISC installed on Windows | Opening |
| 4. Connector/source meanings and operation-specific dependencies | Required operation |
| 5. Provisioning and aggregation meanings before read/write comparison | Required operation |
| 6. AD IQService requirement for all provisioning | Required operation |
| 7. Selected reads such as Terminal Services have IQService dependency | Required operation |
| 8. Terminal Services remote-session purpose without obsolete feature catalog | Required operation |
| 9. Special-read feature not prerequisite for ordinary group provisioning dependence | Required operation |
| 10. Read label alone doesn't exclude IQService; fields/features/account arrangements matter | Required operation |
| 11. Other supported connector paths differ; no universal Windows requirement | Required operation |
| 12. ISC tenant/service configuration/represented information/activity role | Component roles |
| 13. VA/Linux VM/cluster meanings and source association | Component roles |
| 14. IQService supported Windows host and target connectivity | Component roles |
| 15. Target-system/AD/domain/domain-controller meanings | Component roles |
| 16. IQService not VA-on-Windows, VA replacement or automatically domain controller | Component roles |
| 17. Components execute work rather than decide business entitlement | Component roles |
| 18. Existing docs-reader needs document-reading membership | Group-change conditions |
| 19. Group object/membership and represented entitlement meanings | Group-change conditions |
| 20. ENG-Docs-Readers meaning supplied under document system checks, not name proof | Group-change conditions |
| 21. Identity/external account/representation and correct association | Group-change conditions |
| 22. Correlation meaning differs from granting membership | Group-change conditions |
| 23. Engineering Directory source/eng-prod cluster/two members | Group-change conditions |
| 24. Configured IQService hostname and listening port; listener/port meanings | Group-change conditions |
| 25. Fictional hostname, not actual endpoint or fixed port instruction | Group-change conditions |
| 26. Access request/profile meanings and single-source group bundle | Group-change conditions |
| 27. Permitted review, existing selected account, supported automatic change, no creation/script/extra dependency | Normal-path conditions |
| 28. Precise target: account added to intended group in production | Normal-path conditions |
| 29. Service-account/credential/authentication/authorization meanings | Account roles |
| 30. Recipient/source target account/registered client/service logon four roles | Account-role table |
| 31. CORP domain label and role names not credentials/commands | Account-role narration |
| 32. Registration configures accepted Windows identities, not account creation/target privilege | Client registration |
| 33. Windows authentication and account usability remain separate from registration | Client registration |
| 34. Service logon local resources and operation permissions | Service process context |
| 35. Source service account supplies documented supported target-operation context | Target credential context |
| 36. Client change doesn't expand source target authority | Account-role distinction |
| 37. Roles can share usernames without removing distinct checks | Account-role distinction |
| 38. ISC prepares supported source/account/group work | Complete successful path |
| 39. VA connector sends applicable request to configured IQService endpoint | Complete successful path |
| 40. Required protected connection and admitted client before IQService processing | Complete successful path |
| 41. IQService supported Windows work/applicable target credentials; AD evaluates/applies | Complete successful path |
| 42. Returned result tracked in ISC | Complete successful path |
| 43. Path map scoped to stated group provisioning, not every read/packet | First diagram |
| 44. VA initiates cloud communication, no unsolicited internet connection implied | First-map narration |
| 45. VA-to-IQService and IQService-to-target are separate dependencies | First-map narration |
| 46. Approval/admission/target effect are different events | Normal-path outcome |
| 47. TLS meaning and intended-server trust | Protected connection |
| 48. Certificate/public key/private key meanings and server proof | Certificate explanation |
| 49. Matching associated private key and service-account access needed | Certificate explanation |
| 50. Private key stays server-side, VA needs chain trust configuration | Certificate explanation |
| 51. CA/trust chain/validity/endpoint-name requirements | Certificate explanation |
| 52. Organization ownership of different host doesn't fix certificate identity | Certificate-name example |
| 53. TLS channel/server trust differs from client admission and target authority | Security distinction |
| 54. Registered client credentials carried, registration then Windows authentication | Client admission mechanism |
| 55. Prerequisite map distinguishes reach/trust/client/capability/target authority | Second diagram |
| 56. Engineer verification is separate, not automatic readback after every write | Second-map narration |
| 57. Current AD TLS mandatory, client authentication required in stated secured arrangement | Security requirement |
| 58. Do not bypass required protection to repair connection | Security requirement |
| 59. IQService-to-target security not configured automatically by first-leg TLS | Separate protected legs |
| 60. Certificate incident retains both cloud-connected VAs, successful basic read, expired-cert rejection, no admitted target execution, absent membership | Failed-run evidence |
| 61. Expired-cert failure at VA-to-service trust, not recipient/password/approval | Failure reasoning |
| 62. Supplied basic read uses non-IQService path/fields and returns data through VA | Read-path comparison |
| 63. No universal claim every directory read bypasses IQService | Read-path scope |
| 64. Certificate correction needs endpoint identity/dates/trust/key access/settings | Failure correction |
| 65. Corrected trust differs from recovery and verified directory result | Failure recovery |
| 66. Before-execution supplied rejection not inference for every connection error/timeout | Failure scope |
| 67. Saved configuration not successful execution | UI evidence |
| 68. VA Connected not IQService/client/handler/target test | UI evidence |
| 69. Windows Running not listener/endpoint/capability success | UI evidence |
| 70. Connection-test scope not every object/script/password operation | UI evidence |
| 71. Six evidence scopes with unresolved boundaries | Evidence table |
| 72. Timestamp/target context; earlier/laptop test not current VA-path evidence | Evidence narration |
| 73. Protect credentials/private keys and sensitive account/operational traces | Evidence handling |
| 74. Native before/after script meaning and connector sends configured script to IQService | Script mechanism |
| 75. Before preparation/after follow-up; applicable request/result can change | Script mechanism |
| 76. Connector request means operation instructions, not original user approval request | Script clarification |
| 77. Handler means operation capability; process health doesn't enable every capability | Script capability |
| 78. Current ScriptExecutor disabled default; TLS and explicit enablement | Script capability |
| 79. Main assignment no script; configured script/files/context/authority required if used | Script conditions |
| 80. PowerShell meaning and supported service-logon context when source context unused | Script execution context |
| 81. After execution can follow failed provisioning; message not primary success | Script outcome |
| 82. Primary/script/target effects checked separately; no universal rollback | Script outcome |
| 83. Customer Windows hosting/accounts/network/cert/control responsibilities | Maintenance |
| 84. Vendor software and configured companion UpdateService, not universal unattended update | Maintenance |
| 85. VA downloads package/passes through IQService/UpdateService; no separate host internet download required for that path | Update mechanism |
| 86. Supported deployment/version/readiness/credentials/trust/backups/validation still needed | Update conditions |
| 87. Shared-dependency meaning and one instance can serve multiple sources | Shared service |
| 88. Two VAs using one stopped endpoint don't create Windows-side redundancy | Shared service |
| 89. Supported independent availability design needed for Windows continuity | Shared service |
| 90. Error-led endpoint/trust/client/target investigations, not random test order | Fault isolation |
| 91. Least privilege meaning preserves required local/connector authority | Fault isolation |
| 92. Broad directory privilege doesn't repair certificate; recipient password doesn't repair client lockout | Fault isolation |
| 93. Restart/reinstall can disrupt/change/lose evidence; diagnose scope first | Fault isolation |
| 94. All six original cases with worked reasoning and explicit decision prompts | Separate cases |
| 95. Unregistered-client case Windows exists but no admission; target privilege increase irrelevant | Third case |
| 96. Target-denial audit identifies CORP source target account, not logon/client user | Fourth case |
| 97. After-script message with failed primary and absent target not success | Fifth case |
| 98. Maintenance case two healthy VAs/two source owners/one stopped endpoint | Sixth case |
| 99. Transfer retains different-connector required read, Running process, disabled handler/no completed result | Read transfer |
| 100. Transfer checks fields/features/handler/security/admission/actual read; enable only approved capability | Read transfer reasoning |
| 101. Teach-back connects VA work, Windows-side service and target authority/outcome | Final prompt |

All six original cases and worked reasoning remain, with explicit decision prompts. The transfer still supplies a different connector's required IQService read, a Running process, a disabled required handler and no completed read, then requires operation-specific evidence rather than an assumption based on the read label.

The complete successful assignment, before-execution certificate rejection, unregistered client, admitted-but-denied target operation, after-script message and planned Windows maintenance are separate cases. Their facts are not silently combined.

## Primary verification

Checked October 26, 2026. Twenty-two primary references support the scope. IQService and Active Directory pages were freshly checked. Supporting VA/monitoring/correlation/profile references retain current checks from this revision sequence on the same date. No actual diagnostic or connector operation was run.

| Primary reference | Claim / applicability |
|---|---|
| [IQService introduction](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/intro.html) | Windows API purpose, supported host/target connectivity, shared instance/source dependencies. No hosted ISC installation, version pin or VA replacement inferred. |
| [Supported sources](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/sources_supporting.html) | Operation-specific provisioning and selected/test/aggregation reads; no low-use full catalog or universal write-only rule. |
| [AD IQService settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/iqservice_settings.html) | All AD provisioning and selected attributes including Terminal Services; endpoint/client/TLS configuration and supported update dependency. |
| [AD IQService prerequisite](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/iqservice_as_a_prerequisite.html) | Current mandatory TLS/default protected arrangement. Optional-looking form labels and legacy troubleshooting do not justify removing required security. |
| [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html) | VA cluster/source account and operation/feature/account-specific requirements. Basic-read path is supplied; no every-read-bypasses-IQService claim. |
| [AD forest settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/forest_settings.html) | Target-management credential context and distinct directory security/settings; alternative account arrangements can add IQService dependencies. No forest/Kerberos/gMSA recipe. |
| [AD features](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/supported_features.html) | Account/group operation support and applicable activation prerequisites. Existing group update/no creation/customization is an explicit example condition. |
| [IQService requirements](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/system_requirements.html) | Source service account, registered client, Windows service logon and applicable PowerShell contexts. Roles need not use four distinct usernames. |
| [VA/IQService secure communication](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/secure_communication.html) | TLS/client authentication; registered user checked then Windows credentials authenticated before processing. Admission differs from target privilege. |
| [IQService security](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/security.html) | Protected channels and client admission; update channel has its own arrangement. No security bypass as diagnosis. |
| [TLS/client-authentication configuration](https://documentation.sailpoint.com/connectors/iqservice/help/common/topics/configuring_tls_and_client_authentication_for_iqservice.html) | Host certificate/name/chain/private key, service access, VA trust, client registration and separate target protection. No ports/commands/key export recipe copied. |
| [IQService permissions](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/min_permission_config.html) | Local resources, certificate/private-key access and operation-specific permissions. No blanket Domain Admin recommendation or universal normal-user permission claim. |
| [Native before/after scripts](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/before_after_scripts.html) | Connector-sent native scripts, supported request/result modification and scripting context. Connector request is not original business approval. |
| [Enabled/disabled services](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/option_to_disable.html) | Handler versus running process; current ScriptExecutor disabled default, TLS plus explicit enablement. Unrelated sensitive handlers are not catalogued/enabled. |
| [IQService troubleshooting](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/troubleshooting.html) | After-provisioning execution even on failed primary result, plus boundary-specific diagnostics. Current TLS requirements take precedence over legacy downgrade workarounds on troubleshooting pages. |
| [IQService updates](https://documentation.sailpoint.com/connectors/iqservice/help/integrating_iqservice_admin/iqservice_update.html) | Configured companion UpdateService and VA package path, readiness/backups/maintenance. No universal auto-update: documented 32-bit exception remains outside the normal supported arrangement. |
| [VA overview](https://documentation.sailpoint.com/saas/help/va/index.html) | Supporting Linux VM, cloud communication and integration role; not IQService or whole tenant. |
| [VA deployment](https://documentation.sailpoint.com/saas/help/va/deploy_va.html) | Source-cluster membership and different eligible workers; two members need the same downstream endpoint in this example. |
| [VA management](https://documentation.sailpoint.com/saas/help/va/manage_va.html) | Connected-state and operation scope; available appliance isn't IQService/target completion proof. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Tracked source/recipient/action/progress/result/errors versus target state and script effects. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured person/account association; correct existing account is assumed, not granted access through correlation. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source group bundle; selected account, approved request and configured supported provisioning are supplied conditions. |

Official documentation uses ISC and Identity Services / Human Fabric branding. The learner file uses ISC consistently; naming or download availability is not a feature/license grant.

The fresh after-script check located the explicit statement that IQService executes the After Provisioning rule irrespective of the primary provisioning result. Initial search for the synonym “regardless” returned no match; the “after”/“irrespective” search located the actual supporting passage. The lesson conservatively says a configured after script can execute after primary failure, without promising execution when prerequisites fail.

Current AD IQService prerequisite/security pages mandate TLS and client authentication in the stated arrangement. Some troubleshooting sections still contain older non-TLS suggestions. Those suggestions are not copied over the current requirements.

IQService requirements explicitly separate the configured source account, registered IQService client and Windows service logon, with a qualified PowerShell context. The lesson distinguishes these roles without inventing four globally mandatory usernames, a broad-admin requirement or a complete Windows privilege model.

The historical revision-1.0 references and assessments remain in [reference records](../REFERENCE_RECORDS.md).

## Conditions and limits

- Engineering Directory uses the ISC Active Directory connector and eng-prod with va-01 and va-02. The source points to one configured IQService host/listener, iqservice.corp.example, using its actual required secure port, not a memorized universal port.
- One existing docs-reader account is correctly associated with its intended identity. Read engineering documents contains only the relevant ENG-Docs-Readers group entitlement. Review, account selection and automatic supported provisioning are stated conditions.
- No account creation, custom script or extra access dependency is needed for the main change. Reading permission remains subject to the document application's own checks; group naming alone does not define those rights.
- IQService is an operation-specific Windows component, not ISC on Windows, a VA replacement, the directory server itself or a universal write-only service.
- CORP is the example Windows domain label. The target-operation user, client-admission user, process logon and recipient have different purposes. Shared usernames can occupy multiple roles without removing their separate authorization checks.
- Source target credentials govern the stated supported directory operation; applicable local service resources and certificate/private-key permissions govern process work. Supported scripts can introduce another context.
- Registration configures accepted Windows client identities. It doesn't create that account, establish its usable credential state or grant directory permissions.
- Host/port reachability, TLS identity/validity/chain/private-key configuration, client registration/Windows authentication, handler availability, target authority and actual outcome are separate requirements.
- The normal flow is successfully applied under its conditions. The separate certificate incident supplies an expiry rejection before admission, successful non-IQService basic read and absent target membership; it doesn't generalize that read path to every field/feature/account arrangement.
- The private key remains server-side; the VA needs appropriate certificate-chain trust. The protected VA/IQService connection doesn't automatically configure IQService/target security.
- Security diagram arrows show prerequisites. The engineer's final result/membership checks are separate verification, not promised automatic readback or a complete packet/handshake algorithm.
- Current ScriptExecutor default is checked as of this review. Native scripts require enabled supported capability and security. No handler-enablement command, script payload, key export, install procedure or security bypass is taught.
- Connector request means operation instructions, not a rewrite of the original access-request review. Primary result, script output/effects and target membership need separate evaluation; no universal rollback is promised.
- Supported automatic updates require UpdateService/readiness. The VA-delivered package path doesn't require a separate Windows-host internet download connection. Platform/deployment exceptions remain qualified rather than teaching universal automatic updating.
- One IQService instance can serve multiple sources and be a shared failure/maintenance point. Two healthy VAs don't create a second endpoint or guarantee Windows-service continuity.
- Restart/reinstall and availability changes require scope and evidence; none was performed. No full load-balancing, gMSA, forest-trust, PowerShell or OS administration procedure is provided.
- Beginner teach-back, graphical publication review and formal approval remain pending.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| Successful basic read | Inspect read fields/path and failed provisioning endpoint separately; IQService remains required for the relevant work. | Account visibility validates every operation or removes IQService. |
| Expired certificate | Correct intended identity/validity/trust/key arrangement retaining required protection, then recover/verify target work. | Recipient password, broader AD rights or TLS bypass repairs the reported rejection. |
| Unregistered client | Verify approved client registration/source credentials and Windows condition before target work. | Windows existence automatically registers IQService or target privilege fixes admission. |
| Target group denied | Audit identifies source target account CORP\svc-ad; validate required group authority and credential context. | Client or process user is universally the target actor. |
| After-script message | Compare primary failure, script effects and absent target membership; message doesn't prove delivery or rollback. | After implies primary success or one output establishes all effects. |
| Shared stopped service | Two VAs still share one downstream dependency; recover affected sources/work and separately validate required Windows availability. | VA redundancy automatically provides IQService redundancy. |
| Different-connector read | Follow documented fields/operation and enabled capability; Running alone isn't security/admission/read completion. | IQService is write-only or service process health proves the required read. |
| Teach-back | Explain component roles, connection/admission/target authority and independent result evidence. | One healthy status or account grants all authority across the path. |

Source anchors: IQService/AD operation references for dependencies; service-account requirements for roles; security/TLS/minimum permissions for admission/trust; scripts/handlers/troubleshooting for customization; update/introduction/VA for maintenance/shared dependencies; monitoring/correlation/profiles for governed work and evidence.

## Explanation review

The opening defines ISC and IQService through an approved change needing execution. Windows service/API, connector/source, provisioning/aggregation and relevant AD read dependencies appear before the component map. VA/VM/cluster, target/AD/domain/controller and existing identity/account/group/entitlement are introduced before the concrete operation.

Account roles, authentication and registration precede the full successful assignment. The basic flow uses protected-connection meaning before deeper certificate/key/CA/trust mechanics. That detail explains each trust/admission/target distinction without requiring installation commands.

The certificate example keeps the successful basic-read path separate from provisioning. Statuses and evidence describe the actual scope tested. Native script and connector-request meaning precede script-result reasoning; handler, PowerShell and UpdateService meanings are placed where their dependencies matter.

The mentor/humanizer pass checks connected causal paragraphs, minimal neutral data, distinct actors and explicit conditions. No biography, greeting, source link, revision metadata, learning-method announcement or fixed section/visual/case quota is needed. Preserved exercises and documentation checks don't establish actual beginner comprehension.

## Executed verification

- All four existing navigation/disclosure tests passed with zero failures. These are site checks, not beginner-comprehension results.
- Local Markdown targets in the specification, course register, README, author references, example register, this revision record and both publishing documents: 730 checked, none missing.
- Saved learner text, course register, ARC-004 reference section and example row match the reviewed drafts. Historical reference details remain preserved.
- Both current diagram files exactly match their inline blocks. Maximum width is 40 columns for each, within the 42-column source limit. Graphical publication review remains pending.
- No learner source/course link or URL, revision metadata, original biography/34004/old account-host labels, em dash, placeholder or course-independence announcement was found.
- All 101 purposes were reconciled, including six original cases and the different-connector read transfer. Four account roles and their domain prefixes are consistent across explanation, table, cases and records. Author-record backslash escaping was normalized before final checks.
- First-use/pacing review establishes Windows-side purpose and component meanings, then the concrete account/group change and credential roles before the full successful flow. Deeper TLS/certificate/CA/trust detail follows that flow; certificate-chain meaning precedes its VA trust requirement. Script request means connector operation instructions, not the user's approval request.
- The certificate incident retains cloud-working appliances, basic read through its stated path, expiry rejection before admission and absent target membership. It isn't combined with separate unregistered-client, target-denial, after-script or maintenance cases. No failure is generalized beyond supplied evidence.
- Current primary checks confirm mandatory AD TLS, client registration/Windows authentication, source versus process credential contexts, ScriptExecutor disabled default and after-script execution despite primary failure. Legacy downgrade text isn't copied into the current protected arrangement.
- Preservation: 345 starting files became 348. Four existing files changed (ARC-004, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 341 remain byte-identical. Earlier lessons, local ARC-002/003 and their records/assets, historical diagrams, README, publication records, specification and site code are unchanged.
- Whitespace checks passed. Separate new-file comparisons produced no diagnostics; no-index exit 1 indicates difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains da1e1da7c94421e03e8437e94eb49e3fe56fd3ec; staging is empty. No commit, push, Pages deployment, credential/security change, script execution or tenant/infrastructure operation occurred.
- Seventeen of 91 existing lessons are individually revised; 74 await revision. Published revised snapshot remains through ARC-001, while ARC-002 through ARC-004 revision 2.0 remain local. ARC-005 is next and its learner body was not opened; new authoring stays paused at ROL-007.
- Beginner read-through/teach-back, graphical publication review and formal approval remain pending.

Published ARC-004 remains revision 1.0. Revision 2.0 is local only.
