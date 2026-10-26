# FND-002: concept-led revision record

Updated: October 25, 2026.
Current learner revision: 2.0. Teaching specification: 3.1.

Publication update: revision 2.0 is included in the user-authorized October 26 batch. See the [publication record](../PUBLICATION_2026-10-26.md) for current deployment verification. Local-only and earlier published-version statements below describe the original review stage.

## Scope and preservation

- Learner source: [Sources, connectors, and the systems they connect to](../../lessons/FND-002_Sources_Connectors_and_Connected_Systems.md), revised in place in ISC_Theory_TedxHarry.
- Baseline revision 1.0 is recoverable at commit 895c6b5b295c926d5397239db521abc1c8b639d1.
- Current [collection and authorized-change map](../../assets/FND-002_collection_and_authorized_changes.txt) is embedded verbatim. The historical [read/write boundary map](../../assets/FND-002_read_and_write_boundaries.txt) remains unchanged.
- All 91 lessons remain available. Only FND-002 is revised in this task. Previously revised lessons, including the uncommitted FND-001 revision, remain unchanged.
- Local authoring only: no staging, commit, push, deployment or tenant action. Published FND-002 remains revision 1.0 until the user requests another publication.
- Next revision: FND-003 in its existing path. ROL-007 remains the paused next-new-lesson reservation.

The opening asks what a connection establishes. A concrete external account then makes source and connector meanings useful before collection and write paths are introduced. The layout follows these concepts; it does not reuse a diagram/table/question quota.

Named employee biography and invented employee/account numbers are removed. Finance-Production, Finance-Test and finance-user remain to teach why the same connector type/account key is not the same environment or record. InvoiceRead and InvoiceExport retain preexisting-versus-new-permission reasoning. Supplier-Portal-File and 09:00/11:00/12:00 retain file-direction and observation-age reasoning.

## Baseline coverage reconciliation

| Baseline teaching purpose | Revision 2.0 treatment |
|---|---|
| 1. "Connected" is not proof of all operations or the intended environment | Opening |
| 2. Existing finance account, invoice reading, intended visibility and approved changes | Concrete starting account and later change |
| 3. External application stores/enforces the real account | First object explanation |
| 4. Account meaning and its own identifier/data/access | First object explanation |
| 5. Source meaning and integration/record context | First object explanation |
| 6. Connector meaning and configured behavior | First object explanation |
| 7. Creating a source does not install/move the application or prove account creation | First object explanation |
| 8. Actual account versus ISC representation | First section and UI evidence |
| 9. Current observation versus previously collected information | First section, write and file examples |
| 10. Connector type versus configured use | Connector-reuse section |
| 11. Real Web Services SaaS example with supported account/access operations | Connector-reuse section, no exhaustive feature inventory |
| 12. API and endpoint meanings | Connector-reuse section |
| 13. Connector support differs from application API availability/configuration | Connector-reuse section |
| 14. Credentials authenticate connection; allowed operations are separately constrained | Test/production and rejected-write explanations |
| 15. Same connector, separate production/test destinations and credentials | Connector-reuse section |
| 16. Same account identifier in test/production is not one account | finance-user in two explicit contexts |
| 17. One source can represent many accounts and access items | Connector-reuse section |
| 18. Deliberate source boundaries versus accidental duplicate production configuration | Connector-reuse section |
| 19. Destination/address must match requirement, not just source label | Configuration boundaries |
| 20. Tenant/organization/region/filter population scope | Configuration boundaries; tenant defined |
| 21. Expected exclusion is not a collection failure | Configuration boundaries |
| 22. Attributes/schema, ID/Name designations and multiple-value representation | Configuration boundaries |
| 23. Schema does not create external fields or read authority | Configuration boundaries |
| 24. Saving settings differs from on-demand/scheduled collection | Configuration boundaries |
| 25. Direct connection differs from exported-file input | Configuration boundaries and file section |
| 26. Direct does not imply one hosting path; VA/cluster and SaaS distinction | Hosting section after the basic read/change mechanism |
| 27. Cloud application location alone does not identify connector execution | Hosting section |
| 28. Prepared scope/API/read authority and included existing account | Successful read conditions |
| 29. Aggregation meaning and data direction | Read trace |
| 30. Entitlement meaning and explicitly configured access representation | Read trace |
| 31. Reading preexisting InvoiceRead does not grant it or establish its history | Read trace |
| 32. Existing identity, HR authoritative population and profile | Read trace |
| 33. Mapping purpose and worker identifier supplied from HR | Read trace, without unnecessary numeric value |
| 34. Authoritative is not unrestricted write authority or every attribute's source | Read trace |
| 35. Finance source is not another authoritative employee population in this setup | Read trace |
| 36. Correlation meaning, selected account/identity inputs and unique intended match | Read trace |
| 37. Read success does not prove correct association; uncollected and unlinked need different checks | Read trace and missing-link case |
| 38. Access request/recipient, requestability, completed decision and exact account | Authorized-change section |
| 39. Provisioning/fulfillment and required support/configuration | Authorized-change section |
| 40. Same finance system supplies data and receives changes | Target-system explanation |
| 41. Supported operation, correct account/access and external authority are separate conditions | Authorized-change section |
| 42. Successful addition versus supplied credential-rejected addition | Two outcome variations |
| 43. Read and business approval do not override rejected write | Outcome reasoning and fourth case |
| 44. Operation/activity/current target evidence; controlled recovery and limited privilege | Change investigation and fourth case |
| 45. No guaranteed post-write aggregation/immediate refresh or complete application-use success | Write section |
| 46. Read/write map is separate work, not topology, timing or universal correlation-triggered write | Current diagram and prose |
| 47. CSV/flat-file input meaning; existing portal account | File section |
| 48. Export/change/import times on one day/time zone; age differs from import success | 09:00/11:00/12:00 trace |
| 49. Editing read-only input is not a portal write and can affect downstream processing | File section and old-file case |
| 50. Conditional supported manual path; task means assigned work | Manual-delivery section |
| 51. Entitlement owner, source-owner fallback and ownership not native admin permission | Manual-delivery section |
| 52. Task completion, actual change and fresh export/import are separate | Manual-delivery section |
| 53. Read-only can meet visibility/review requirement without automated writes; feature/configuration limits | Operation-fit section |
| 54. Specific support differs from "account management"; disable versus delete | Operation-fit section and fifth case |
| 55. Source/identity/activity views, front/back-end meaning, evidence table and connection-test scope | Screen section |
| 56. All five original case purposes retain facts and worked reasoning | Changed-condition cases |
| 57. Open unfamiliar-system transfer preserves producer/source/population/matching/write/evidence gaps | Training-platform transfer plus application-of-choice prompt |

The original object-comparison table and small account-value table are explained in prose rather than retained as mandatory tables. Their distinctions and assumptions remain. The five-row question/evidence comparison remains as a table because it benefits from side-by-side inspection.

## Current official verification

Checked October 25, 2026. Source references remain outside the learner body.

| Primary source | Claim checked and limits |
|---|---|
| [Managing sources](https://documentation.sailpoint.com/saas/help/sources/index.html) | Source/connector distinction, connection types, source records and deployment categories. The conceptual arrows are not private topology. |
| [Configuring sources](https://documentation.sailpoint.com/saas/help/sources/config_sources.html) | Instance settings, file/direct selection, supported provisioning and account collection. No universal write-enabled default assumed. |
| [Web Services SaaS features](https://documentation.sailpoint.com/connectors/saas/web_services/help/saas_connectivity/web_services/supported_features.html) | Real connector example for account reads and specified access changes. Does not prove the hypothetical finance API implements them. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account attributes, ID/Name designations and multiple values. Schema is not external field creation or permission. |
| [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Direct/file collection, schedules and observations. No universal refresh/post-write timing or deletion claim. |
| [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative population and source-selectable attribute mappings. Main identity already exists with required data. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Association and applicable default matching; empty input blocks one comparison, not every possible path. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Separate changes and conditional manual fulfillment; entitlement-owner routing with source fallback. Not every read-only source/action automatically offers every process. |
| [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Attempts, results, errors and manual-task information. No universal field layout or retry promised. |
| [Identity control panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Person-level context distinct from source account and independent target evidence. |
| [Attribute synchronization](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Supporting evidence that imported values can feed configured downstream writes. No blanket assertion that every imported edit triggers changes. |
| [Virtual Appliances](https://documentation.sailpoint.com/saas/help/va/index.html) | VA meaning and customer-infrastructure placement. Full deployment/network details remain elsewhere. |
| [Access request overview](https://documentation.sailpoint.com/saas/help/requests/index.html) | Requests, configured requestability and decision/delivery distinction. Current page has limited-availability UI notice; no new UI assumed. |

Current docs use Identity Services / Human Fabric names. Retain the requested ISC course title; verify applicable tenant services, connector version and features before operational use or publication.

The finance/API/credential outcomes, account names, permissions and event times are supplied hypothetical conditions. No tenant connection test, aggregation, provisioning, manual task, source/profile/schema change, permission correction or target operation was performed.

Main read assumes the account is included and access values are correctly represented. Main matching assumes the intended reliable unique match. Write variations assume one intended existing account. The deletion limitation is a separate hypothetical connector condition, not a claim that the named Web Services SaaS connector lacks deletion.

Acceptance, recovery checks, authority separation and evidence reasoning are author-developed operational guidance consistent with the documented mechanisms, not automatic product stages.

## Assessment metadata

| Case / supplied information | Expected reasoning and acceptable alternative | Misconception |
|---|---|---|
| Same finance-user and connector type in test, production operation denied | Test observation is only test evidence; identify production context, change result and current rights. Starting with account or delivery evidence is acceptable. | Same labels imply same external record |
| Expected account collected, identity link absent, employee-number field empty | Collection succeeded; inspect relationship, applicable matching and inputs. Empty comparison does not establish total matching failure. | Missing person view means failed connector |
| 09:00 export, 11:00 actual removal, 12:00 unchanged import | Old observation remains old; edit is not write. Obtain current portal evidence and refreshed input/import; an outstanding actual change needs supported fulfillment. | Import time is observation time or input edits write back |
| Successful read, approved addition rejected for insufficient integration privilege | Neither another read nor approval supplies authority. Verify operation/configuration/allowed actions, authorize limited correction, inspect current/pending work and verify recovery. | Read success proves write authority |
| Deletion required, hypothetical connector supports disable only | Gap remains; agree supported deletion or explicitly approve a changed requirement, with evidence. | Broad capability label covers every operation |
| Training-platform file collection with unverified membership writes; then application-of-choice | Establish data scope/age, association and supported add/remove fulfillment or acceptable manual path; identifying missing evidence is valid. | "Connected" proves complete service readiness |

## Explanation review

The draft introduces source/connector roles against a concrete account, not a glossary. A real connector name is initially described using ordinary read/change language; aggregation and entitlement are introduced with their purpose before the trace relies on them. SaaS, API, VA and CSV are expanded contextually.

The basic read and separately authorized change are completed before developing the file/manual variation. The map's actors and directions have already been explained. Prose identifies what was obtained, what remains unchanged, which separate work is needed, and how new evidence moves the investigation.

The hosting comparison follows the completed read/change mechanism, so VA/SaaS deployment detail does not interrupt the initial explanation of what information and operations pass between ISC and the application.

The humanizer/read-aloud pass checked patient mentor tone, causal bridges, precise conditional claims, term consistency, no named biography, no fixed content quotas, no em dash, no source links and no teaching-method announcements.

Beginner read-through/teach-back, graphical publication review and formal approval remain pending. Structural checks and author review do not demonstrate learner understanding.

## Executed verification

- `npm test`: all four navigation/disclosure tests passed, with zero failures. These tests do not establish beginner comprehension.
- Local Markdown targets in the specification, course register, README, author references, example register and this record: 652 checked, none missing.
- Saved learner source matched the reviewed draft. No learner source/course links, URLs, revision metadata, named employee, old employee/account number, em dash, placeholder or teaching-method announcement was found.
- Current read/change diagram matches its editable text asset exactly; maximum width 39 columns against the 42-column limit.
- Coverage reconciliation contains 57 baseline purposes. All five original case intents, their supplied facts and worked reasoning, plus unfamiliar-system transfer remain. Coverage counts are not learner-performance measurements.
- First-use and pacing review replaced premature aggregation/entitlement labels in the connector example with ordinary read/change language, expanded CSV, and placed VA/SaaS hosting detail after the basic read/change mechanism. The unsupported-deletion case explicitly concerns a different project, not the named real connector's feature list.
- Preservation: 318 starting files became 320. Four existing files changed (FND-002, course register, author references and example register); two files were added (this record and current diagram); none were removed; 314 remained byte-identical. FND-001's local revision/record/diagram, all other learner lessons, README, specification, course design, previous records/pilots, historical assets and site code remain unchanged.
- `git diff --check` passed. Separate no-index whitespace checks for both new files produced no diagnostics; exit 1 denotes their difference from NUL, not a whitespace defect.
- Learner-file count remains 91. HEAD remains 895c6b5b295c926d5397239db521abc1c8b639d1 and staging remains empty. No commit, push, Pages deployment or tenant operation occurred.
- Beginner teach-back, graphical publication review and formal approval remain pending. Published FND-002 remains revision 1.0. Next local revision is FND-003.
