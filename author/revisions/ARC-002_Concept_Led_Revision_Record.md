# ARC-002: concept-led revision record

Updated: October 26, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch 2. See the [current publication record](../PUBLICATION_2026-10-26_BATCH_2.md) for deployment verification. Local-only and earlier published-version statements below describe the original authoring/review stage.

## Scope and preservation

- Current [learner source](../../lessons/ARC-002_Virtual_Appliances_and_Clusters.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 remains recoverable at publication-verification commit da1e1da7c94421e03e8437e94eb49e3fe56fd3ec.
- Current editable diagrams: [sources/cluster/members](../../assets/ARC-002_sources_cluster_and_running_members.txt) and [connection initiation/work](../../assets/ARC-002_connection_initiation_and_work.txt).
- Historical [source/cluster map](../../assets/ARC-002_sources_cluster_members.txt) and [outbound/work exchange](../../assets/ARC-002_outbound_and_work_exchange.txt) remain unchanged.
- Only ARC-002 is revised after the authorized publication. All 91 learner files, earlier revised lessons, their assets/records, shared site code and original repository remain preserved.
- The user-authorized publication through ARC-001 is complete. Content ff290f28d43d9ee69f847d09388c3bcb18e3b81d and subsequent documentation-only da1e1da7c94421e03e8437e94eb49e3fe56fd3ec both received successful exact-commit Pages builds. See [publication record](../PUBLICATION_2026-10-26.md).
- This ARC-002 revision remains local. No staging/commit/push/Pages deployment of ARC-002 or ISC tenant/infrastructure action occurs.
- Next existing revision: ARC-003; its learner body was not opened. New authoring remains paused at ROL-007.

The revision establishes the actual component, source/cluster relationship and communication direction, then completes a supported normal operation. Deployment/dependencies/health/HA are explained before the failed-member DNS variation. DR, maintenance and interrupted-response boundaries build on those meanings. The sequence follows this topic, not a standard lesson layout.

Devi, 32002 and the invented AssetDesk brand are removed. Neutral Assets-Production and Operations-Directory share assets-prod with va-01/va-02. Recipient asset-reader, integration svc-assets and asset.read retain the actor/permission distinction; viewing excludes administration. The hypothetical endpoint remains HTTPS/443 solely to ground dependency reasoning. Payroll retains its different hosts, failed shared target route, continuing cloud connectivity and older collected observation.

## Coverage reconciliation

90 coverage purposes and needed clarifications are traced below. Counts support preservation and do not measure learner understanding or prescribe length.

| Purpose | Current location |
|---|---|
| 1. Read/change needs actual external communication, not saved instructions alone | Opening |
| 2. VA meaning and customer-deployed integration purpose before dependent use | Opening and running component |
| 3. Linux VM meaning, hosting resources and connectivity | Running component |
| 4. Tenant, source and connector meanings | Running component |
| 5. Hosted source configuration differs from local connector work/full ISC installation | Running component |
| 6. Identity/external account/collected representation meanings; VAs do not multiply people/accounts | Running component |
| 7. Connection reachability is not business access decision | Running component |
| 8. SaaS meaning and no-VA connector distinction; cloud-hosted app doesn't determine mode | Running component |
| 9. Cluster groups appliances; source-to-cluster versus member relationship | Cluster section |
| 10. Two sources share assets-prod with va-01/va-02 | First map |
| 11. Production meaning and hypothetical labels | Cluster conditions |
| 12. Map shows configured associations, not routes or duplicated operations | First-map narration |
| 13. Queue and polling meanings before execution description | Cluster section |
| 14. Source operations go to associated cluster; running members poll requests | Cluster work |
| 15. Connection test, collection and change differ in scope | Cluster work |
| 16. Either running member can handle work; no first-created fixed primary/idle standby | Cluster work |
| 17. Every eligible member needs source dependencies; actual worker can vary | Cluster work |
| 18. Shared cluster creates wider source impact; separate source credentials/settings still matter | Shared-cluster scope |
| 19. ISC work origin differs from VA-initiated outbound cloud communication | Connection initiation |
| 20. Outbound initiation permits response data; no new unsolicited inbound service per request | Connection initiation |
| 21. Endpoint meaning and separate cloud/target paths | Connection initiation |
| 22. Work-exchange map identifies collection/response roles without private timing/ack/retry assumptions | Second map |
| 23. Laptop/other-member success doesn't validate actual VA path | Connection narration and dependency section |
| 24. Entitlement before aggregation, aggregation and provisioning meanings | Complete operation |
| 25. Read path: find/reach/authenticate/read, then represent data in ISC | Complete operation |
| 26. Write needs permitted target operation in addition to communication | Complete operation |
| 27. Existing correctly associated asset-reader; asset.read excludes administration | Complete-operation conditions |
| 28. Request and single-source Read assets profile meanings | Complete operation |
| 29. Permitted request, configured review, supported existing-account update | Complete-operation conditions |
| 30. ISC cluster request, member work, target apply and returned response | Complete successful operation |
| 31. Integration svc-assets differs from recipient asset-reader | Connecting actor |
| 32. Credential/authentication/authorization meanings and read/write authority distinction | Connecting actor |
| 33. Working VA/approval/credential doesn't prove delivery; operation plus target evidence | Normal-path evidence |
| 34. Account correlation meaning and network lookup is not person matching | After normal path |
| 35. Actual machine and saved record are different deployment sides | Deployment section |
| 36. Pairing meaning; saved unpaired record is not operational | Deployment section |
| 37. Setup/communication must complete beyond saved appliance name | Deployment section |
| 38. Cluster passphrase consistency; not OS login/integration/recipient secret | Deployment section |
| 39. Protect setup secrets and use approved process | Deployment section |
| 40. CCG meaning/default applicable component; not whole service | Deployment section |
| 41. Licensed additional components/resources; standalone other component doesn't establish connector readiness | Deployment section |
| 42. DNS name-to-address and why password change cannot fix resolution | Dependency section |
| 43. Firewall and routing meanings, member/location-specific reachability | Dependency section |
| 44. TLS and certificate/trust meanings; reachable server not necessarily trusted | Dependency section |
| 45. HTTP/HTTPS meanings | Dependency section |
| 46. Proxy meaning and HTTP/HTTPS source routing; inspect actual bypass exceptions | Dependency section |
| 47. Port meaning and fictional HTTPS/443 target, not all connectors | Dependency section |
| 48. Six dependency checks: VM/cloud/target/trust/authority/work-result | Dependency table |
| 49. Outbound 443 alone incomplete; destinations, DNS, clock, mode and target ports | Dependency narration |
| 50. Time synchronization meaning and current resource/network references | Dependency narration |
| 51. Connected means appliance operating as expected, not every source-operation success | Health section |
| 52. Cluster/member/component/source-operation health scopes differ | Health section |
| 53. Cloud-connected member can fail target DNS | Health section |
| 54. Busy means process unavailable for new work/updates, not whole-tenant outage | Health section |
| 55. Warning/error timestamps and inactive-member loss of redundancy | Health section |
| 56. HA meaning and capacity/redundancy purpose | HA section |
| 57. Standard core production/sandbox at least two members per cluster, not IIQ exception | HA requirements |
| 58. Remaining member can handle work; rolling updates one member at a time | HA mechanism |
| 59. Shared hosts/routes defeat mere appliance-count redundancy | HA dependencies |
| 60. Remaining member needs capacity and verified target dependencies | HA dependencies |
| 61. No twice-speed or exact in-flight resume promise | HA scope |
| 62. Main failed run retains host failure, surviving Connected/polling, actual worker, DNS failure and missing target access | Failure-evidence table |
| 63. DNS failure explicitly before target authentication and update | Failure-evidence table |
| 64. Second worker doesn't supply missing DNS; compare source endpoint and both member paths | Failure reasoning |
| 65. No recipient/integration password reset or reapproval inferred from DNS failure | Failure reasoning |
| 66. Authorized network correction differs from supported work recovery and target verification | Failure recovery |
| 67. DR meaning and source association matters across recovery | DR section |
| 68. All-running members across locations share cluster and can handle work; remaining members continue | DR all-running strategy |
| 69. Latency meaning and recovery-location target requirements | DR all-running strategy |
| 70. Separate running primary/DR clusters not same automatic worker pool | Switch-clusters strategy |
| 71. Switch requires source reassociation and credential reentry/preparation | Switch-clusters strategy |
| 72. Runbook meaning, affected sources/targets/configuration/secrets/outcome checks | DR runbook |
| 73. Standard-image vendor updates coexist with customer hosting/connectivity/monitoring | Maintenance section |
| 74. Long jobs can be interrupted; Busy doesn't defer updates indefinitely | Maintenance section |
| 75. Unconnected member can block cluster updates under standard guidance | Maintenance section |
| 76. OS meaning; customer-provided option adds patch/reboot/maintenance duties while accepting managed software updates | Maintenance section |
| 77. Customer-provided OS availability is conditional, not universal | Maintenance section |
| 78. Documented replacement uses new VAs rather than moving/migrating old ones | Replacement section |
| 79. No delete/rebuild first; inventory dependencies and preserve evidence | Replacement section |
| 80. Cluster restart, source association and VM replacement scopes differ | Replacement section |
| 81. Separate lost-response case can have applied target change and inconclusive record | Interrupted-response section |
| 82. No timeout-equals-no-effect, universal rollback or harmless retry promise | Interrupted-response section and sixth case |
| 83. Use target/audit/operation evidence and supported reconciliation/recovery | Interrupted-response section |
| 84. Restored health doesn't complete every interrupted operation | Interrupted-response section |
| 85. Old collected data can remain visible; failed read doesn't establish departure/source-wide deletion | Interrupted-response section |
| 86. Six original diagnostic cases and worked reasoning retained | Connection decisions |
| 87. Payroll transfer: separate hosts but shared failed target route; cloud works and data predates failure | Payroll transfer |
| 88. Transfer investigates cluster/target/both member paths/network event/affected reads-writes | Payroll reasoning |
| 89. Authorized route repair plus supported recovery and capability-scoped verification; preserve unrelated rights | Payroll reasoning |
| 90. Teach-back connects association, polling/execution and selected member's authorized target path | Final prompt |

All six original cases and worked reasoning remain. The Payroll transfer still distinguishes redundancy from shared target dependency, stale observation from current test, and route restoration from supported recovery and appropriate read/write verification.

The main failed-run table preserves every supplied condition: first host fails, second member is Connected/polling, actual operation uses that member, target-name resolution fails before authentication, and intended target permission remains absent. The separate applied-change/lost-response case is not combined with it.

## Primary verification

Checked October 26, 2026. Fourteen primary references support the scope. Core VA deployment/configuration/OS requirements were freshly checked; supporting source/access/request/correlation/monitoring documents were checked earlier in this same publication/revision task. No live tenant diagnostics were run.

| Primary reference | Claim / applicability checked |
|---|---|
| [VA overview](https://documentation.sailpoint.com/saas/help/va/index.html) | Linux VM, customer hosting/health dependencies, managed software and VA-initiated outbound cloud communication/polling. |
| [VA deployment](https://documentation.sailpoint.com/saas/help/va/deploy_va.html) | Source-specific cluster/queue, running-member polling, pairing, passphrase consistency, default applicable CCG, all-running and switch-clusters strategies with credential reentry. No private worker-selection or exact-once algorithm inferred. |
| [VA management](https://documentation.sailpoint.com/saas/help/va/manage_va.html) | Connected/Busy scopes, member health, rolling/interrupted work, unconnected-member update condition, and documented new-VA replacement rather than migration. |
| [System/network requirements](https://documentation.sailpoint.com/saas/help/va/requirements_va.html) | Standard core production and sandbox clusters with at least two VAs per cluster; resources, DNS/time/cloud/target requirements. IIQ connectivity exception not transferred into ISC. |
| [VA configuration](https://documentation.sailpoint.com/saas/help/va/config_va.html) | Standard/proxy paths and applicable trust; HTTP/HTTPS source traffic can use proxy, with configured bypass exceptions. No new inbound exposure or trust bypass recommended. |
| [Customer-provided OS](https://documentation.sailpoint.com/saas/help/va/cpos_va.html) | Limited availability to selected customers on request, additional OS patching/support/reboots and acceptance of applicable SailPoint software updates. No OS/version list or installation recipe reproduced. |
| [Sources and connector definitions](https://documentation.sailpoint.com/saas/help/sources/index.html) | VA-based/SaaS meanings; target cloud hosting does not determine execution mode; operation-specific integration support. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Reported work/account/source and errors differ from current target evidence and recovery of interrupted work. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source bundle and normal-profile context. Example has one existing account, not account creation or multi-account selection. |
| [Request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Permitted request and configured review are example conditions, not universal approval/fulfillment timing. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Source account/person association via configured comparisons; not a network lookup. |
| [DNS concepts, RFC 1034](https://www.rfc-editor.org/rfc/rfc1034.html) | Supporting name-to-address resolution meaning only; no DNS configuration command or resolver topology taught. |
| [TLS, RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html) | Supporting secure-communication and certificate-based peer authentication context. No universal handshake, cipher or VA TLS-version claim. |
| [HTTP semantics, RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) | HTTP/HTTPS distinction and protected HTTP communication. Fictional target's HTTPS/443 does not generalize to every connector. |

Current documentation uses Identity Services / Human Fabric branding; ISC remains the course title. Current resource/destination lists, supported modes and capability availability must be checked for a real deployment rather than treating example labels or requirements as runnable configuration.

The current requirements explicitly call for at least one production and one sandbox cluster, with at least two VAs per cluster for standard core ISC connectivity. The same page contains an IdentityIQ-specific exception; that exception is not taught as ISC guidance.

The current customer-provided OS page marks availability as limited and describes extra customer maintenance. That condition is now explicit. The proxy page includes bypass exceptions; the lesson directs inspection of actual mode/exceptions rather than asserting all traffic always follows one path.

The source/cluster queue and polling model is documented, but no packet acknowledgement, exactly-once delivery, queue retention, scheduling fairness, fixed member selection or in-flight recovery behavior is invented. Protocol references support necessary meanings, not a separate protocol tutorial.

The historical revision-1.0 evidence and assessments remain in [reference records](../REFERENCE_RECORDS.md). Shared reference preambles also identify the eight previously local lessons now included in the verified publication through ARC-001; their earlier review-stage statements remain preserved.

## Conditions and limits

- Assets-Production and Operations-Directory are separately configured sources associated with one production cluster, assets-prod, containing va-01 and va-02. Descriptive labels are hypothetical, not actual IDs, endpoints or commands.
- The normal supported request uses Read assets containing asset.read only. One existing recipient account is correctly associated with its intended identity; required review, request permission, target support and integration authority are stated conditions.
- Integration actor svc-assets and recipient asset-reader are separate. VA pairing/passphrase, local login and external/recipient credentials are not interchangeable.
- The diagram shows source associations and members, not duplicated execution or network routes. The communication map separates VA-initiated connection direction from logical work and response data.
- Each member eligible for cluster work needs the relevant source dependencies; cluster membership or cloud communication does not certify target DNS, route, trust or operation authority.
- The main DNS failure is a separate hypothetical run. The actual worker is supplied evidence, not a claim about a fixed worker-selection rule. No password reset, reapproval or permission change is inferred from a failure before target authentication.
- Standard core HA requirements do not imply two-member speedup, immunity to shared hosts/routes or guaranteed in-flight resumption.
- All-running members across locations share a cluster; switch-clusters DR uses different associations and requires credential preparation/reentry. No automatic tenant-wide pool or undocumented failover guarantee is asserted.
- Standard-image managed software updates coexist with customer hosting/connectivity/monitoring. CPOS has its documented availability and extra OS duties. No improvised patching, install recipe or OS/distribution inventory is taught.
- Replacement, restart and reassociation have different affected scopes. No real repair, restart, deletion, migration, credential change or diagnostic command was performed.
- Target-applied change with interrupted response is distinct from an unreachable target. Current account/audit/operation evidence and supported reconciliation matter before retry; no universal rollback or harmless repeat is promised.
- Previously collected data can remain visible while a connection fails; it does not establish a current target test or source-wide account deletion.
- Payroll source capability determines the relevant recovery read/write checks. Unrelated approved access must be preserved.
- Exact installation, diagnostics, detailed SaaS execution, IQService and broader source/protocol design stay in their primary topics. Necessary terms and reasoning remain in this file.
- No beginner read-through, graphical publication review or formal approval was performed.

## Assessment metadata

| Case | Expected reasoning / acceptable alternatives | Misconception |
|---|---|---|
| First-created member | Follow source/cluster association and polling; either running member can handle work under documented arrangement; inspect actual member evidence. | First-created VA permanently owns source operations. |
| Inbound proposal | Work origin differs from VA-initiated outbound communication and response traffic; use supported network design. | Every cloud request needs a fresh inbound session to the VA. |
| Connected with DNS failure | Actual member cannot resolve target before authentication; check endpoint and DNS/path, then recover/verify work. | Connected tests every source, or passwords repair name resolution. |
| Separate DR cluster | Switch-clusters arrangement needs source reassociation, required credentials and target-path verification. | Every powered-on cluster automatically handles every source. |
| Rolling update | Individual long work can be interrupted; inspect operation result and supported recovery. | Cluster availability guarantees every job completes uninterrupted. |
| Applied permission/lost response | Compare current target, audit and attempted operation; reconcile before repeat. | Timeout guarantees no change, rollback or harmless retry. |
| Payroll transfer | Two hosts still share failed route; inspect both member paths and older observation, then authorized route repair and capability-scoped work recovery. | Appliance count removes common dependencies or old records are live target evidence. |
| Teach-back | Connect source association, polling/work execution and chosen member's authorized target path. | A VA record or broad healthy status proves end-to-end delivery. |

Source anchors: VA overview/deployment for execution/initiation; requirements/configuration/protocol references for dependencies; management/CPOS for health/maintenance; source/access/request/correlation/monitoring for account work and outcome boundaries.

## Explanation review

Meaning and first-use review introduces VA before the component discussion, VM before resource reasoning, source/connector before cluster work, and cluster/queue/polling before the first execution explanation. Entitlement precedes aggregation; request/profile, integration credentials and authentication/authorization precede the complete supported change. DNS/TLS/HTTP/proxy/port meanings precede the dependency table; HA/DR/latency/runbook/OS are taught where needed.

The normal operation completes before the evidence table changes the conditions. The surviving worker's cloud communication and target DNS are separate dependencies, so the failed outcome follows without assuming an inexplicable failure of redundancy.

The mentor/humanizer pass checks connected causal paragraphs, neutral data, explicit conditions and useful questions rather than definition lists or a fictional biography. No greeting, course-independence claim, learner citations, revision metadata or fixed visual/case quota is needed.

Source/width matching does not establish graphical rendering or beginner understanding. Those checks and formal publication approval remain pending.

## Executed verification

- The authorized publication completed first: content commit ff290f28d43d9ee69f847d09388c3bcb18e3b81d and documentation-only da1e1da7c94421e03e8437e94eb49e3fe56fd3ec both have successful exact-commit Pages builds. Live checks covered all 91 routes, complete content of the eight updated lessons and 28 exact assets; see the publication record.
- All four existing navigation/disclosure tests passed with zero failures after the ARC-002 revision. These are not beginner-comprehension results.
- Local Markdown targets in specification, course register, README, author references, example register, current revision record and both publishing documents: 717 checked, none missing.
- Saved learner text, register, current ARC-002 reference section and example row match the reviewed drafts. The historical reference record remains preserved.
- Current diagram files exactly match their inline blocks. Maximum widths are 39 and 40 columns, within the 42-column limit. Graphical publication review remains pending.
- No learner source/course link or URL, revision metadata, original employee/32002/AssetDesk labels, em dash, placeholder or course-independence announcement was found.
- All 90 coverage purposes were reconciled. The six original diagnostic cases, five-condition DNS failure, distinct applied-change/lost-response case and complete Payroll transfer remain. Counts establish author traceability, not measured learning.
- First-use/pacing review establishes VA/VM and source/cluster/queue/polling before execution reasoning; entitlement before collection; complete supported normal operation before failure; DNS/trust/protocol meanings before dependency comparison; HA/DR and maintenance terms where used. SaaS comparison avoids depending on cluster terminology before it is introduced.
- Preservation after publication: 339 starting files became 342. Four existing files changed (ARC-002, course register, author references and example register); three were added (this record and two current diagrams); none were removed; 335 remain byte-identical. Earlier learner revisions and their individual records/assets, historical diagrams, publication record, README, specification, remaining lessons and site code are unchanged. Shared reference preambles additionally clarify the already-published status of the eight preceding revisions.
- Whitespace checks passed. New-file comparisons returned no diagnostics; no-index exit 1 indicates difference from NUL, not a whitespace defect.
- Learner-file count remains 91. Local HEAD and remote main remain da1e1da7c94421e03e8437e94eb49e3fe56fd3ec; staging is empty. ARC-002 revision 2.0 was not committed or deployed. Original ISC_Theory_Learning remote main remains 90b9f298860b0bc26d26259f084e129ac59331e0.
- Fourteen revised lessons are published through ARC-001. Fifteen of 91 are now individually revised locally; 76 await revision. ARC-003 is next and its learner body was not opened; new authoring remains paused at ROL-007.
- Beginner read-through/teach-back, complete graphical review and formal publication approval remain pending. No ISC tenant/infrastructure operation was performed.

Published ARC-002 remains revision 1.0. Revision 2.0 is local only.
