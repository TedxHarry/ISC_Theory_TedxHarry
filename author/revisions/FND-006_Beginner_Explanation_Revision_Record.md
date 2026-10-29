# FND-006 beginner explanation revision record

Revision 3.0. Module 2.6. Teaching specification 3.2. October 28, 2026.

[Current learner](../../lessons/FND-006_Object_IDs_Account_Identifiers_and_References.md).
[Historical revision 2.0 record](FND-006_Concept_Led_Revision_Record.md).
[Current standard](../../TEACHING_SPECIFICATION.md).

## Scope and baseline

This continues the authorized local, one-complete-lesson-at-a-time beginner-explanation pass. FND-006 is twelfth of 91 existing lessons, leaving 79; FND-007 is next and is not revised here.

The six Module 1 revisions and FND-001 through FND-005 revision 3.0 are preserved. SYS-001 through SYS-003 remain published; later completed beginner revisions remain local. No new learner is counted. ROL-007 remains reserved without a stub, with 116 core and six optional foundation lessons awaiting new authoring.

Baseline FND-006 revision 2.0 is recoverable at main 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4, the author-only follow-up to published content 63ca4364628ade00fafc1450534aaf60e0b0a9ea. Its earlier record and four historical diagram assets remain unchanged.

Permanent title, ID, Markdown/HTML route, order, manifest, shared UI and teaching specification remain unchanged. No staging, commit, push, deployment or ISC/native operation is part of this task.

## Explanation and full author read-through

Person, external account and ISC account record are separated before naming their IDs. Each short value is introduced in prose before the six-value comparison. The business number and login then have distinct reasons to coexist with technical IDs.

Source and identity references are followed separately. Native identity is explained before it appears in a diagram, and the correlation comparison explains how business data can establish a technical relationship without renaming or merging records.

The same record-versus-native-value reasoning is reused for E-PROD and g-41. Schema designation and collected membership matching are explained before the role/profile map uses those links. A valid reference and a business-correct production reference remain different checks.

Account API field meanings are taught against familiar records. Directory distinguished names, schema-determined uuid and nested Search accountId prevent an immutable-key or universal-ID assumption. Search's aiqAccountName fallback is explicitly scoped to that interface.

The author read the saved lesson in three contiguous portions, including later rename/key/schema/recreation cases, operation evidence, all five worked checks and warehouse transfer. First-use refinements moved attribute meaning before the account-reference diagram, avoided early undefined source/tenant examples and explicitly supplied the existing collected correct account association.

Label, external-key and schema-designation changes remain separate causal mechanisms. Snowflake provides a documented counterexample to assuming every readable name is merely decorative. The new-key and recreated-object examples supply evidence limits without inventing universal tracking, cleanup or reference-retarget behavior.

Two diagrams and four tables serve the identity comparison, source/environment distinction, interface fields and transfer. Counts and length follow the topic, not a quota. Source checks, coverage reconciliation and simulated author read-through remain separate from actual beginner comprehension, which is pending without blocking continuation.

## Preserved coverage

All 78 essential purposes from the preceding reconciliation are retained.

| Previous essential purpose | Current explanation |
|---|---|
| 1. Same readable access name can select production or test | Opening compares same-name finance production/test results before choosing access. |
| 2. Production invoice reading excludes payment release | Production requirement and supplied group meaning explicitly exclude payment release. |
| 3. Object and object-ID meanings | Record meaning precedes object ID and the use of references. |
| 4. Identity, external account and collected account are distinct records | Person-level identity, external account and collected ISC account representation are separated. |
| 5. Business employee number is not automatically identity ID | 10482 is an organizational business number rather than an automatic ISC identity ID. |
| 6. Source and connector meanings | Source and connector meanings explain S-PROD and the supported integration. |
| 7. Explicit non-runnable technical-ID stand-ins | Short technical labels are explicitly not real ISC IDs or values to submit. |
| 8. Identity/source/account/native/login/business contexts distinguished | Values are introduced separately before the comparison table combines six contexts. |
| 9. Readable person name is a label, not interchangeable identifier | Readable person name is a recognition label, not either employment or identity identifier. |
| 10. Receiving field requires correct object type/system | Receiving-field example distinguishes identity ID from account object/native/business values. |
| 11. External key may differ from login, with supplied stability condition | finance.user differs from u-778, with key persistence explicitly supplied for this example. |
| 12. ISC account record ID differs from external account key | A-1 identifies the separate ISC representation, not its source account. |
| 13. Reference connects particular records | Reference is defined before following source/identity links. |
| 14. Account source reference and correlated identity reference | A-1 refers to S-PROD and I-1 with those destinations explained. |
| 15. Correlation compares configured attributes and associates account | Correlation compares configured account and identity employee-number fields. |
| 16. Matching business value does not rename account/object or merge person/account | Matched 10482 supplies comparison information without renaming objects or merging records. |
| 17. Employee-number accuracy, uniqueness and reuse need governance | Reuse, inaccuracy and non-unique business numbers require data/matching-design checks. |
| 18. Reference arrows do not create/copy all attributes/authenticate | First diagram arrows refer to records without creating, copying all attributes or signing in. |
| 19. External account context is not a live query | External-account line identifies represented finance production/u-778 rather than a live read. |
| 20. Correct native key differs from correct person association | Correct native key can coexist with the wrong ISC person association. |
| 21. Correct association does not establish target change success | Correct association does not establish a successful attempted update. |
| 22. Owner/manager references concern identities, not receiving target access | Owner and manager identity references differ from account/access receipt. |
| 23. Entitlement meaning and hypothetical native group/key | Source group g-41 and entitlement meaning are introduced with supplied invoice-only permission. |
| 24. ISC entitlement ID versus source value | E-PROD is the ISC entitlement record; g-41 identifies its source group. |
| 25. Entitlement type meaning and source context | Entitlement type group and source S-PROD are part of the identifying context. |
| 26. Account membership carries native value, not required ISC entitlement-record ID | Native account membership uses g-41, not necessarily E-PROD. |
| 27. Schema meaning and designated source Entitlement ID | Schema describes represented fields; Entitlement ID designates the source identifying value. |
| 28. Account Entitlement setting, name/type link and matching designated values | Account Entitlement flag, matching group field/type name, Type link and matching g-41 remain explicit. |
| 29. Friendly label cannot repair mismatched membership source ID | Readable Invoice reader cannot satisfy the designated g-41 linking comparison. |
| 30. Inspect raw values, schemas, type and entitlement record | Link investigation covers raw/collected values, connector/export mapping, both schemas, type and record. |
| 31. Access profile is single-source bundle with source/entitlement references | Single-source profile P-1 references source S-PROD and entitlement E-PROD. |
| 32. Role groups responsibility access, includes profile in example but not always profiles only | Role R-1 includes P-1; roles can also directly include entitlements. |
| 33. Definitions differ from assignment and delivered/held access | Definition can exist without assignment or completed delivery. |
| 34. Membership observation differs from configuration inclusion | Second diagram separates configured inclusion from separately collected membership. |
| 35. Arrows are not per-sign-in execution order | Arrows describe references, not per-sign-in execution. |
| 36. Resolve reference to actual source/type/value | Following E-PROD resolves the source/type/value to compare with the requirement. |
| 37. A valid reference may still be business-wrong | A real reference can point to test despite a production business requirement. |
| 38. Equal labels and copied source keys remain separate source objects | Production/test comparison keeps equal labels and source keys separate under different sources. |
| 39. Environment and ISC tenant meanings | Environment and hosted organizational ISC tenant are explicitly defined. |
| 40. Type matters within source, even for matching text | Group versus permission types do not become interchangeable from equal text. |
| 41. Native account key needs source/system context | u-778 needs the source/system/environment owning it. |
| 42. Cross-tenant move requires destination object mapping, not just names/IDs | Cross-tenant design movement requires resolving and mapping destination objects. |
| 43. API and endpoint meanings | API and endpoint meanings precede account field interpretation. |
| 44. Account id/sourceId/optional identityId/nativeIdentity meanings | Account field table distinguishes id, sourceId, optional identityId and nativeIdentity. |
| 45. Native identity can be username, DN or other source key | Native identity can be a username, DN or other system-specific identifier. |
| 46. Distinguished-name meaning and possible identifier change | Distinguished name locates a directory object and may change with name/location. |
| 47. Schema-determined uuid is a separate account field, not a universal alias | uuid retains its schema-determined meaning and is not promised as a universal alias. |
| 48. Account ID/Name schema designations differ from ISC record ID | Account ID/Name schema roles are not instructions to put A-1 into the external key. |
| 49. Inspect connector/schema/returned data for actual identifier mapping | Actual mappings need connector, schema and returned-account evidence. |
| 50. Search nested accountId uses aiqAccountName or display-name fallback | Search nested accountId retains aiqAccountName or display-name fallback. |
| 51. Search/API fields have interface-specific definitions | Nested Search representation and account API define fields differently. |
| 52. ISC entitlement display name can change without ID/source/type/value change | Display-name-only Finance invoice reading preserves E-PROD/source/type/value. |
| 53. Display-name/description edit is not sent to external source or a membership change | ISC entitlement display-name/description changes are not source writes or membership changes. |
| 54. View/Search refresh differences do not establish a different object | Current record versus stale Search/open page is checked before inferring a different object. |
| 55. External rename differs from ISC label edit | External rename is separated from an ISC label edit. |
| 56. Persistent source key versus name-as-identifier | Persistent-key design differs from using the name as identifying value. |
| 57. Aggregation meaning and Snowflake name identifier warning | Aggregation is defined locally and Snowflake's real name-identifier warning is retained. |
| 58. No universal rename handling inferred from a name field | Connector-specific Snowflake example is not generalized to every rename. |
| 59. Schema designation change differs from external value change | Schema-designation changes and external identifier-value changes are separately defined. |
| 60. Account identification changes after aggregation risk duplicates/broken references | Post-aggregation account ID/Name changes retain duplicate/broken-reference risk. |
| 61. Entitlement ID/Name redesign can duplicate records | Entitlement designated ID/Name changes retain duplicate-entitlement risk. |
| 62. Warnings do not predict one universal symptom | Documented risks do not predict an identical symptom in every integration. |
| 63. u-778 to u-991 requires data/connector/association/pending-operation evidence | u-778-to-u-991 case asks for before/after data, schema, records, association and pending-work evidence. |
| 64. No guaranteed automatic tracking, duplicate or deletion outcome | No automatic tracking, duplicate or deletion result is asserted from a new key alone. |
| 65. Delete/recreate with different current ID is a different supplied object | Supplied E-TEST-NEW with different ISC ID is a different object despite matching label. |
| 66. Inspect stale dependencies; do not assume name-based retargeting | Stale references to E-TEST are investigated without assumed name-based retargeting. |
| 67. Feature-specific missing-reference/cleanup behavior | Actual feature determines missing-reference rejection/cleanup behavior. |
| 68. ID does not promise record survival after delete/reset/migration | Record survival through deletion, reset or migration is not promised by an ID. |
| 69. Read-only investigation before deleting/recreating source | Read-only investigation precedes source deletion/recreation as a repair. |
| 70. Front-end readable labels versus documented back-end relationships | Front end may show readable names while processing uses referenced records. |
| 71. No private database layout asserted | Documented relationships do not assert a private database schema. |
| 72. Trace tenant/type/current record/references/schema/operation evidence | Investigation follows tenant/environment, record/type, resolved references and attempted work. |
| 73. Provisioning meaning and correct references do not prove support/authority/success | Provisioning meaning separates correct addressing from supported/authorized/successful delivery. |
| 74. Operation result, collected membership and usable application access differ | Operation result, collected membership and actual intended-account use remain distinct evidence. |
| 75. Handoff includes typed context, operation/time/result and missing evidence | Handoff includes source/profile/entitlement/account context plus operation, time, result and missing evidence. |
| 76. IDs are not passwords/authority; still protect identity/account data | Object IDs are not passwords or permission grants; omit credentials and handle person/account details appropriately. |
| 77. Five original case intents and worked reasoning | All five original identifier-choice cases retain worked reasons and evidence limits. |
| 78. Warehouse transfer with production/test/native/person/label changes and teach-back | Warehouse table/answers retain production-test, person/account/native key, label-only and evidence distinctions, ending with teach-back. |

## Current primary verification

Relevant official sections checked October 28, 2026. Links and author metadata stay outside learner content.

| Official source | Claim checked and boundary |
|---|---|
| [Account model, TypeScript](https://developer.sailpoint.com/docs/tools/sdk/typescript/accounts/models/account/) | Directly readable camelCase definitions for generated id, sourceId, optional identityId, nativeIdentity and schema-determined uuid. This corroborates field spellings as well as meanings. |
| [Account model, Python](https://developer.sailpoint.com/docs/tools/sdk/python/accounts/models/account/) | Same record/reference distinctions with SDK snake_case. SDK property spelling is not substituted for JSON/camelCase spelling. |
| [Account details API](https://developer.sailpoint.com/docs/api/get-account-v-1/) | Account-ID lookup and account response context. Direct rendered text omits detailed response properties; indexed official schema and both readable models corroborate the field table. No endpoint was called. |
| [Searchable fields](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html) | Nested identity-account accountId uses aiqAccountName when available, otherwise account display name. The account API object's id must not be inferred from that Search name. |
| [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Account ID/Name designations and post-aggregation change risks, plus entitlement field/type-name and designated source-ID linking conditions. No universal nativeIdentity/uuid/designation equivalence inferred. |
| [Entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Designated ID/Name, Type linkage and duplicate risk after established identifier redesign. |
| [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Configured account/identity comparisons establish association. Example's unique employee number is supplied rather than an assumed universal business-number policy. |
| [Entitlement model](https://developer.sailpoint.com/docs/tools/sdk/python/entitlements/models/entitlement/) | ISC record ID, source/type context and represented source value have distinct roles. No default/sample syntax copied as an operational payload. |
| [Access profile model](https://developer.sailpoint.com/docs/tools/sdk/python/access-profiles/models/access-profile/) | Separate profile ID/name, source and entitlement references. P-1/E-PROD are illustrative IDs rather than literal serialization. |
| [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Single-source grouping and represented access versus original-grant history. |
| [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Roles can include profiles or entitlements directly. The example map is not a universal hierarchy or proof of assignment. |
| [Entitlement editing](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Display-name/description edits are not sent to source, with differing Search/view update behavior. No fixed refresh deadline introduced. |
| [Snowflake identifiers](https://documentation.sailpoint.com/connectors/snowflake/help/integrating_snowflake/identity_attributes.html) | Real user/role name values identify accounts/entitlements, with a specific post-aggregation change warning. No universal rename behavior inferred. |
| [Workflow examples](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) | Separate account id/name/nativeIdentity/uuid examples include directory distinguished names. No event order, workflow implementation or copied input contract introduced. |
| [Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Correct addressing differs from supported, authorized execution. No account/access change was performed. |
| [Provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html) | Operation results/errors remain distinct from collected membership and current intended-account behavior. |

The direct account API page's rendered response omitted property details. Its official indexed schema was inspected, while the TypeScript model independently exposed the exact camelCase fields and descriptions; Python supplied a second model view. This improves corroboration without claiming an executed API request or tenant response.

SailPoint documentation uses Identity Services / Human Fabric branding; retain the requested ISC title. API availability, field meaning, connector identification and supported change procedures must be checked against the actual context before operational use.

## Example conditions and outcome controls

All short technical labels are non-runnable stand-ins. There are no real IDs, credentials, tenant data, named employee or company story. Employee number 10482 is a minimal business/matching value, not biographical detail.

One existing finance production account u-778 is represented by A-1 and correctly associated with I-1 under S-PROD. The configured comparison uses employee number 10482 uniquely in the supplied data. Business-number equality is not declared universally reliable.

Finance login finance.user differs from source key u-778. The login-only invoice.reader variation explicitly retains that key. u-778-to-u-991 is a separate external-identifier variation with no guaranteed tracking, duplication or deletion outcome.

E-PROD represents S-PROD/group/g-41, with invoice-reading rather than payment-release behavior supplied by the hypothetical application. Its account group field is entitlement-marked, matches type group and is linked through Type; the membership matches the designated source ID g-41, not E-PROD or the friendly label.

P-1 references S-PROD/E-PROD; R-1 includes P-1. These are configurations. Separate collected account membership is not proof of original grant history, current target state or successful execution.

S-TEST/E-TEST deliberately have copied names and group keys under a different source. E-TEST-NEW is a supplied different current record after removal; feature-specific dependency handling remains unestablished.

Display-name-only Finance invoice reading preserves E-PROD/source/type/value. Source renames, external key changes and schema designation edits have different mechanisms. No identifier is promised to survive delete/reset/migration.

Warehouse transfer uses W-PROD/W-TEST, account W-ACCOUNT with native w-305/login stock.operator/person W-IDENTITY, and W-READ/W-READ-TEST with permission stock.read. Source context remains different despite copied label/type/value; actual supported connector determines operation format.

Correct IDs do not establish business justification, operation authority, source support, accepted delivery or usable access. Full schemas, APIs, correlation and provisioning remain in their primary lessons; supporting meanings are supplied locally.

No tenant lookup, aggregation, correlation, rename, source reset, deletion, migration, provisioning or permission operation was performed. Documented models and diagram references are not claims about private database layout.

## Assessment and transfer intent

Questions and worked answers stay in the learner.

| Case | Expected reasoning / acceptable alternatives | Misconception exposed |
|---|---|---|
| Recipient identity ID | Resolve intended tenant's real identity ID represented by I-1. Employee number, ISC account ID and native key answer different questions. | Any employee/account ID fits a recipient identity field. |
| Test profile for production | Resolve profile/source/entitlement and identify business mismatch before any retry. Actual attempted operation/result still needs inspection. | Same readable name establishes production access. |
| Label-only edit | Same E-PROD/S-PROD/group/g-41; no external group creation/rename or membership operation follows. | New display label is a new permission. |
| Friendly membership text | Compare raw/collected values with designated source ID and inspect schema/export/connector mapping. Do not redesign established IDs to hide one mismatch. | Labels replace membership identifiers. |
| Two rename designs | Retained native key differs from changed identifying value. Inspect supported handling, returned records, association and pending/actual operations. | Every rename preserves or breaks references identically. |
| Warehouse transfer | Follow W-PROFILE/W-PROD/W-READ and distinguish W-ACCOUNT/native w-305/W-IDENTITY. W-READ-TEST is not interchangeable; label change proves no grant/removal. | Equal names and keys erase environment boundaries. |
| Teach-back | Trace a complete package, entitlement, source value and account relationship, with tenant/environment and execution evidence separate. | Recognizing a label establishes both addressing and successful delivery. |

## Diagram sources

- [Account record and person reference](../../assets/FND-006_account_record_and_person_reference.txt): ISC account/native key, source and associated person; arrows refer rather than execute.
- [Profile, entitlement and membership links](../../assets/FND-006_profile_entitlement_and_membership_links.txt): configured references and separately collected matching membership; neither is a completed grant.

## Executed verification

Checks executed October 28, 2026:

- Full saved learner read in three contiguous portions, with targeted first-use and existing-association refinements reviewed. All five worked cases and warehouse transfer were included. This is simulated author review, not an independent learner study.
- All 78 prior essential purposes have individual reconciliation rows. Actual interface field descriptions were checked separately from the example's supplied identifiers and relationships.
- Saved learner: 3,704 whitespace-separated words, two diagrams (39 and 41 columns) and four tables. These are observed counts, not quotas.
- Both new diagram assets exactly match their inline blocks after newline normalization. All fences close, the required example/transfer values remain and diagram arrows were traced against the surrounding explanations.
- No learner source/course links, named fictional character, em dash or unfinished placeholder was found. Identity/account/native/source/entitlement contexts and changed-condition answers were manually reconciled.
- All 1,217 relative file links across the learner, new record/diagrams and current course/reference/example metadata resolve. File targets were checked, not live web anchors.
- All four existing navigation/disclosure tests passed through npm test.
- Local publication verification against baseline 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 passed for nine unpublished changed lessons: thirteen matched diagrams, twenty-one tables, 1,959 normalized content units and 370 text assets overall. Live mode was not used.
- There are still 91 authored learner files and manifest entries. Course state is twelve individually revised, 79 remaining and FND-007 next. ROL-007 has no stub.
- Start-of-task hash comparison covered 607 tracked/untracked files: exactly four existing files changed (this learner and course/reference/example metadata), and three were added (this record and two diagrams). None were removed. The other 603 files, including all other 90 learners, prior local revisions, historical records/assets, manifest, shared UI, tests and teaching specification, were byte-identical.
- Tracked-file whitespace checks passed; focused checks found no trailing whitespace in the seven affected files.
- HEAD remains 0b1a003ca94a8c4fc0665f5a1d4222665f4acba4 and staging is empty. Nothing was committed, pushed or deployed. No API lookup, tenant operation, rename, deletion or permission change was performed.

Coverage and local structural verification do not establish actual beginner comprehension, rendered publication appearance or tenant execution. Independent learner validation remains pending separately from continued authoring.
