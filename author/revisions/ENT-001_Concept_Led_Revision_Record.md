# ENT-001 concept-led revision record

Revision 2.0. Module 10.1. Revised and documentation-checked October 27, 2026 under [teaching specification 3.1](../../TEACHING_SPECIFICATION.md).

Learner: [A group appears in ISC. What access does it actually represent?](../../lessons/ENT-001_Translating_Source_Permissions_and_Groups_into_Entitlements.md).

## Scope and review status

One existing learner revised locally. Revision 1.0 is recoverable at `7123d85038c688f1ccecffa6a8504d22e3986b79`. The historical reference section and both original diagram files remain. Other learners, pilots, specifications, reference aids, README, publication records and site manifest/templates/styles/navigation/code are outside this change.

Documentation-based author review covers accuracy, coverage, first-use meanings, explanation, causal connections and assessment reasoning. Observed beginner read-through, teach-back and unfamiliar-case validation, full graphical publication review and formal approval remain pending.

Progress after this revision: 73 of 91 existing lessons individually revised, 18 awaiting revision. All lessons in Modules 1 through 9 and this first Module 10 lesson are revised. This is a revision count, not a claim that all planned course material is authored. Existing ENT-002 in Module 10.2 is next; its learner body was not opened. ROL-007 remains paused new authoring. No commit, push or deployment.

## Teaching decisions

Begin with the reading-versus-approval question, then establish the actual permission and regional boundary before introducing representation. Group existence, account membership and correct identity association receive connected explanations before schema detail.

The basic collection mechanism precedes configuration: account aggregation supplies holder values and can create a simple catalog representation; separate entitlement aggregation enriches object details and can include unheld objects under supported scope. It is not described as a universally mandatory first step.

The schema explanation connects each designation to its purpose, then traces the same native reference across account and group records. The example uses the account attribute and native type both named groups and explicitly sets Type to groups. It therefore satisfies both the account-schema page's same-name condition and the entitlement-type page's explicit Type linkage. No general claim about differently named fields is made.

Devi's employee number, fictional application brand and arbitrary account/group IDs are removed. Invoice Production identifies the necessary environment. invoice-readers is a supplied native reference whose equality is necessary to the explanation, not an invented ISC object ID. project-reviewer serves the same matching purpose in the transfer. Named groups retain meaningful access boundaries without biography.

Two diagrams are retained because the record relationship and application decision boundary answer different questions. Two tables support permission comparison and evidence interpretation. Eight original assessment purposes and the different-system transfer remain. Counts describe this lesson's needs, not a template.

JIT is a short qualification after the standing example, not a second activation procedure. Access profiles, ISC roles, requests, governance, certification and provisioning receive enough contextual meaning to connect them without turning the lesson into detailed configuration for those subjects.

## Preserved coverage

| Original purpose or condition | Revision location | Retained reasoning |
|---|---|---|
| Support question about recorded Readers access | Opening | A reading record need not promise approval. |
| Meaning of account | First section | External system record used by a person or another entity. |
| Permission action and resource | First section | Action alone does not establish which invoices are covered. |
| Group and membership purpose | First section | Shared membership can participate in application permission rules. |
| Mailing-list boundary | First section | A group does not automatically grant application permissions. |
| Readers policy | Policy table | Read within business unit; no edit or approval. |
| Approvers policy | Policy table | Approve within business unit; no payment-release promise. |
| Valid initial conditions | First section | West, Readers only, enabled, sign-in succeeds, no other invoice grants. |
| Expected initial results | First section | West reading allowed; East reading and approval denied. |
| Supplied hypothetical evidence | First section | Supported integration and observations, no tenant test implied. |
| Standing membership | First section and authorization | Continuous membership rather than unactivated access. |
| Name versus confirmed meaning | First section | Regional restriction cannot be inferred from Readers. |
| Source meaning | Representation section | Configured system or account-data representation. |
| Connector meaning | Representation section | Supported reading and conditional changes. |
| Direct production representation | Representation section | Invoice Production represents the application directly. |
| Entitlement meaning | Representation section | Access right on a source represented in ISC. |
| Supported object variants | Representation section | Group, native role, license or another supported object, integration-dependent. |
| Granularity | Representation section | One object may permit several actions; no automatic atomic-action catalog. |
| Object versus relationship | Representation section | Shared group can exist before or after a particular membership. |
| One definition, many holders | Representation section and Q6 | Twenty memberships do not require twenty group definitions. |
| Identity meaning | Representation section | ISC representation of the person. |
| Account correlation | Representation section | Association lets account access be connected to the right identity. |
| Correct initial association | Representation section | Explicitly checked, except Q7 changes it. |
| Aggregation meaning | Collection section | External data read into ISC. |
| Account aggregation | Collection section | Accounts, attributes and represented membership values. |
| Attribute meaning | Collection section | Named piece of record information. |
| Simple entitlement creation | Collection section | Account collection can create a simple catalog representation. |
| Catalog meaning | Collection section | Represented access objects, not holder proof. |
| Separate entitlement aggregation | Collection section | Object details and supported unheld access collection. |
| Integration support and scope | Collection section | No universal complete-object discovery claim. |
| Optional separate enrichment | Collection section | Not mandatory for every simple entitlement representation. |
| Read versus write | Collection section | Reading neither adds membership nor creates a source group. |
| Schema meaning and purpose | Schema section | Describes record attributes and designated uses. |
| Entitlement flag | Schema section | Interprets collected groups values as access. |
| Multi-valued flag | Schema section | List of group references rather than one value. |
| Native entitlement type | Schema section | groups is supplied native type, not arbitrary friendly name. |
| Type connection | Schema section | Account groups attribute explicitly connects to groups type. |
| ID versus displayed name | Schema section | id identifies object; displayName supplies friendly label. |
| Matching reference and context | Schema and first diagram | invoice-readers connects membership and details within source/type. |
| Selected records, not API payload | Schema section | Field names and values are hypothetical, not a connector contract for all systems. |
| Non-entitlement authorization input | Schema section | businessUnit restricts use without automatically being an entitlement. |
| Diagram order/freshness | First diagram prose | Relationships do not impose a collection schedule or identical freshness. |
| Schema interpretation versus application change | Schema section | Designations do not modify native policy or membership. |
| Authentication versus authorization | Application section | Successful sign-in does not authorize every action. |
| Application decision inputs | Application section | Membership, business unit, action and invoice region. |
| Permission scope | Application section | West restricts the resources the reading permission covers. |
| Runtime enforcement boundary | Second diagram | Application enforces ordinary invoice actions in this integration. |
| Effective access | Application section | Actual permitted behavior under evaluated conditions. |
| Other restrictions or grants | Application section | Recorded membership alone may not capture every condition. |
| JIT qualification | Application section | Ahead-of-time authorization versus activated provisioning. |
| Precise failed action | Application section | Account/action/resource/time distinguish denial from delivery problem. |
| Front-end and integration connection | Evidence section | Screen presents represented records, application enforces policy. |
| Evidence limits | Evidence table | Object, membership, correlation, intended policy and current check prove different things. |
| Metadata and ownership | Evidence section | Description/responsibility does not imply membership. |
| Useful description | Evidence section | Regional read meaning and explicit exclusions support decisions. |
| Local description versus native permission | Evidence section and Q3 | Display/description edits are not sent to source or permission repair. |
| Native grant before connection | Request section | ISC can represent access it did not grant. |
| Request and approval meanings | Request section | Request asks for recipient's access; approval depends on configuration. |
| Governance and certification | Request section | Appropriateness and selected review differ from holding access. |
| Requestability | Request section | Configuration, not discovery, makes an item available to request. |
| Access profile | Access-model section | Related same-source entitlement bundle. |
| ISC role | Access-model section | Business grouping with profiles/direct entitlements, potentially across sources. |
| Native role distinction | Access-model and transfer | External role can be an entitlement without being an ISC role. |
| Bundle versus permission | Access-model section | Grouping does not rewrite native permission rules. |
| Provisioning and delivery | Access-model section | Authorized requirement versus actual selected-account change. |
| Direct versus manual fulfillment | Access-model section | Operation support/configuration/permissions/result all matter. |
| Remove membership versus shared group | Access-model section | Different objects and impact. |
| Fresh verification | Access-model section | Approval or old collection cannot substitute for outcome evidence. |
| Remaining independent access | Access-model and Q8 | Successful selected removal need not eliminate all reading. |
| Eight original question purposes | Questions 1 through 8 | Each original alternative preserved with supplied facts and causal answer. |
| Different-system transfer | Final section | Native role, matching reference, scoped reading, expected denial and non-requestability. |
| Explain to another person | Closing | Connect external object, holder, recorded access and application behavior. |

## Official verification and claim mapping

Fresh claim-bearing official bodies reviewed October 27, 2026; page availability alone was not used as verification. Current cloud documentation sometimes uses Identity Services or Human Fabric naming. The course retains ISC; no IdentityIQ behavior is imported. Source links remain in author material.

| Source | Claim-bearing body reviewed | Application and limits |
|---|---|---|
| [Managing entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) | Access rights, source/type/owner/requestable representation; supported types and permissions; standing/JIT; display/description edits not sent to source | Representation, metadata and permission boundaries. No claim every entitlement is one atomic permission, every connector supports every type, or wording changes native policy. |
| [Loading entitlement data](https://documentation.sailpoint.com/saas/help/loading_entitlements/index.html) | Account membership creates simple representation; separate object enrichment and full supported catalog independent of holdings | Collection explanation and Q1/Q6. No mandatory separate entitlement run or assumed universal read order. |
| [Creating and managing entitlement types](https://documentation.sailpoint.com/saas/help/loading_entitlements/entitlement_types.html) | Native type name, schema ID/name selection and account attribute Type linkage | Explicit groups/groups relationship and matching native reference, not arbitrary connector capability. |
| [Managing source account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Entitlement/Multi-Valued attributes; same-name type and identical ID-value linkage | Supplied account attribute groups, type groups and identical invoice-readers value. No schema-edit operation executed. |
| [Assigning source accounts to identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Matching and associating accounts with identities | Initial checked relationship and Q7, not native membership alteration or approval evidence. |
| [Authentication versus authorization](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization) | Identity verification versus permitted actions/resources | Supporting general distinction only. Invoice application policy is supplied, not attributed to Microsoft. |
| [Configuring entitlement access requests](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) | Enabling requests, marking items requestable, applicable approval settings | Discovery is not requestability or request evidence. No universal approval requirement or complete approval hierarchy taught. |
| [Managing access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) | Same-source bundles; JIT authorized ahead and provisioned on activation | Short connections only. No automatic detection/removal algorithm or request account-selection rule claimed. |
| [Managing roles](https://documentation.sailpoint.com/saas/help/access/roles.html) | Single/multiple-source business access groups, profiles/direct entitlements, configured criteria or requests | ISC role versus native application role. Dynamic-role details remain outside scope. |
| [Provisioning overview](https://documentation.sailpoint.com/saas/help/provisioning/index.html) | Access change, configuration-driven delivery and direct/manual fulfillment | Authorized need versus supported operation and verified outcome. No read-to-write inference or generic retry. |
| [Certifications overview](https://documentation.sailpoint.com/saas/help/certs/index.html) | Designated reviewers decide selected access appropriateness/retention/revocation | Brief governance connection; no assertion all access is certifiable or review decision proves completed removal. |

Source verification covers documented mechanisms. Native invoice policy, record values and application outcomes are explicitly hypothetical. No observed lab or production behavior is invented.

## Assessment map

Prompts precede worked reasoning. All original purposes remain; no assessment quota is imposed.

| Item / understanding | Supplied facts | Expected reasoning and acceptable alternatives | Misconception exposed / source |
|---|---|---|---|
| Q1 object versus holder | Collected Readers object, fresh empty groups, no other read grant | No recorded membership. Identify the missing relationship; distinguish collected representation from a broader current system claim. | Catalog existence grants access. Loading entitlement data, schemas. |
| Q2 provenance versus appropriateness | Fresh membership, direct native change record, no ISC request | Membership is real; policy/authorization evidence needed to judge the grant. Asking for that evidence is valid. | No ISC request means unreal or necessarily inappropriate. Entitlements, requests. |
| Q3 permission versus name | Owner confirms accidental editing; current edit succeeds | Approved native permission correction, affected scope review; description may be improved separately. Escalation to responsible application owner is valid. | Label edits remove editing. Entitlements and supplied policy. |
| Q4 source context | Test catalog name, production membership absent | Identify production account/reference/type/source; test name proves no production membership. | Equal display names identify equal access across environments. Schemas, types. |
| Q5 expected denial | Readers only, West read succeeds, approval denied, policy confirmed | No repeated Readers provisioning; first establish legitimate approval requirement and correct item/process. | Denial always means failed delivery. Supplied policy, provisioning. |
| Q6 shared definition | Twenty current account references, one matching object | One object with twenty memberships; investigate a specific missing relationship if supplied. | One object definition per holder. Loading entitlement data. |
| Q7 account association | Confirmed native ownership/membership, wrong ISC identity | Approved correlation investigation/correction, separate from native membership and description. | Rename group to fix identity access view. Correlation. |
| Q8 selected removal versus capability | Fresh Readers removal, second group independently permits West read, read succeeds | Selected removal succeeded; broader no-reading goal unmet. Review remaining grant and legitimate purpose before further change. | Any remaining reading proves removal failed or authorizes blanket removal. Provisioning and supplied policy. |
| Transfer | Native Project Reviewer, supported entitlement, matching project-reviewer within correct source/type, correct owner, assigned-project read only, no requestability | Native role is external object; matching reference supports holder; correlation supports owner; deny edit follows policy; request configuration separate. An explanation organized in a different order is acceptable if all connections are correct. | All roles are ISC roles, catalog means requestable, or any denial proves delivery failure. Types/schemas, correlation, roles, requests. |

## Diagram and consistency checks

- New [native reference and account membership](../../assets/ENT-001_native_reference_and_account_membership.txt) and [permission scope and application decision](../../assets/ENT-001_permission_scope_and_application_decision.txt) are editable ASCII sources matching the learner's two text blocks.
- Relationship arrows are not processing stages or private backend services. The decision diagram belongs to the hypothetical application policy, not ISC runtime enforcement.
- All terms used in the diagrams are introduced in nearby prose. Identity association, source/type, native reference, West business unit and policy outcomes agree.
- Original [account membership and entitlement](../../assets/ENT-001_account_membership_and_entitlement.txt) and [application authorization boundary](../../assets/ENT-001_application_authorization_boundary.txt) remain unchanged.
- Simple supplied-value comparisons can check reference equality, unique catalog definition versus holders and expected policy outcomes. Such checks are illustrative reasoning, not an ISC evaluator or live authorization test.

## Executed verification

- Compared all 72 preserved-purpose entries, eight original question purposes and the different-system transfer against revision 1.0. Reviewed first-use meanings, the complete basic representation/collection mechanism, schema-to-reference connections and evidence-based answers.
- Reviewed eleven current official claim-bearing bodies, including the two complementary schema-linkage descriptions. Kept groups as both the supplied account attribute and native type, explicit Type linkage, and matching native ID values. Application policy and outcomes remain hypothetical.
- Both new editable ASCII diagrams exactly match their learner blocks, with maximum widths 36 and 39 columns. Native reference equality and the one-definition/twenty-membership relationship reconcile as supplied-value comparisons; policy outcomes and transfer conditions were reviewed against the supplied rules, not executed in a runtime.
- Checked 1,196 local Markdown/HTML targets across nine learner/review documents: zero missing. The learner contains no source/course links, fictional biography, arbitrary account/object IDs, revision dates or teaching-method announcements.
- All four existing navigation/disclosure tests passed, zero failures. This checks the reading site's navigation, not observed learning or tenant behavior.
- Tracked and all three new-file whitespace checks passed. Saved learner, diagrams, author record, owned reference/register sections and example row match intended content. Progress, current lesson, next target, changelog and revision-record link were checked.
- Inventory increased from 515 to 518 files: four existing files changed, three added, 511 unchanged and zero removed. All 91 learner files remain. Original diagrams, both reference aids, other learners, publication/site files and other out-of-scope files retain baseline hashes.
- Reference content outside ENT-001 retains its original prefix and tail hashes. HEAD remains `7123d85038c688f1ccecffa6a8504d22e3986b79`; staging index empty.
- Final record-save, whitespace and scope/state checks confirm only this record changed after the verified snapshot, 73 individual revision records and no unfinished QA markers. Author review is separate from pending observed beginner validation, full graphical publication review and formal approval. No commit, push or deployment.

## Historical reservation clarification

The preserved revision 1.0 reference refers to the then-current 72 prior lessons and planned ENT-002 authoring. All 91 learner files now exist; ENT-002 is next for individual revision, not new authoring. Historical references to deployed article checking do not certify this local revision's rendering or approval.

## Limits

No tenant/API/source/schema/account/aggregation/correlation/request/approval/certification/profile/role/provisioning/native permission/sign-in or target operation performed. No actual grant, revoke, account association correction or application permission repair executed.

Author review, local consistency checks and site tests do not establish observed beginner comprehension, real runtime behavior, full graphical publication review or approval. No commit, push or deployment.
