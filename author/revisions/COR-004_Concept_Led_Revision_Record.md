# COR-004 concept-led revision record

Revision 2.0, Module 7.4. Saved October 26, 2026 under teaching specification 3.1.

## Scope and baseline

Revised [COR-004 learner lesson](../../lessons/COR-004_Following_Configured_Correlation_Conditions_Through_Records.md) only, with its current author tracking and one new editable diagram. Starting HEAD: 7123d85038c688f1ccecffa6a8504d22e3986b79; 447 inventoried files; 91 learner lessons; empty staging area. The baseline learner is revision 1.0. Its published version remains unchanged.

The accepted [concept-led pilot](../pilots/COR-004_Concept_Led_Pilot.md), [pilot review notes](../pilots/COR-004_Concept_Led_Review_Notes.md) and [pilot diagram](../pilots/assets/COR-004_configured_and_default_flow.txt) were read and reconciled with the original. They remain historical, unchanged files. This integrates and rechecks the accepted approach; the earlier pilot isn't being relabeled as fresh learner validation.

Current course progress becomes 50 of 91 individually revised, with 41 awaiting revision. The published revised snapshot remains 23 through SRC-002. COR-005 is next; its learner body was not opened. ROL-007 new authoring remains paused. No commit, push, deployment or site code change.

## Teaching decisions and explanation review

The pilot's direct relationship problem replaces the fictional employee/company setup. Minimal field values remain because they expose equality, case handling and default naming. No biography, invented ISC object ID or continuing story is needed.

The explanation now connects worker-account input to the identity mapping's current output, then application-account comparison. It introduces the record and purpose before depending on the term. The central trace explicitly takes each selected account value, compares it with the selected identity field, explains the no-match, and shows why a second pairing remains available. The resulting association and unchanged employee-reference defect are separate outputs.

The first-success variation explains why a later row isn't a confirmation or veto. The new diagram includes this first-row-success branch, which the historical pilot deliberately omitted while tracing a first no-match. Its downward path covers ordinary no-match cases only. Duplicate candidates and errors aren't forced into that path. The human ownership check is separate.

Normal matching is completed before case variations, conflicting ownership, reevaluation and evidence limits. Manual relationships and optimization are explained as independent boundaries. Provisioning and attribute synchronization receive contextual meanings and a causal explanation of wrong-person data risk. Four unanswered-first pilot questions remain with separate worked answers, alongside the central worked cases and contractor transfer. The single selected-value table and single diagram fit this topic; counts aren't course requirements.

A documentation-based author read-through checked first-use meanings and transitions. This isn't an observed beginner teach-back, full graphical review or formal publication approval.

## Original and pilot coverage reconciliation

| Required understanding | Revision 2.0 location and retained reasoning |
|---|---|
| Identity, account and correlation | Opening explains the collected application record, existing person representation and relationship being established. |
| Source and aggregation | What is ISC actually comparing? explains the represented collection and reading data into ISC; collection is distinct from owner association. |
| Existing identity versus authoritative establishment | Opening states the identity already exists; mapping explanation introduces its profile and authoritative origin without inventing another identity on a no-match. |
| Attribute, selected field and criterion | Early explanation defines each and pairs employeeRef with identificationNumber; names need not be identical. |
| Identity input origin and current value | Mapping/profile paragraphs connect worker input to identity output before application correlation; no arbitrary live HR lookup. |
| Equals and deliberate transformation | OLD-E-204 does not equal E-204; removing the prefix is a separate calculation or feed correction. |
| Complete saved configuration | The two pairings are the complete saved list, employeeRef first and mail second, both using Equals. |
| Evaluation assumptions | Eligible current identity fields, actual evaluation, no existing manual precedence, case-insensitive comparison, unique intended candidate and approved ownership are stated. |
| First no-match | No identity contains OLD-E-204; absence of a result for this pairing leaves a later comparison available. |
| Second intended match | USER@learn.example equals user@learn.example under the supplied case behavior; one intended candidate establishes the relationship. |
| Output and remaining data defect | Association changes the represented relationship; it does not repair OLD-E-204 or prove an external write. |
| One comparison versus overall result | Worked trace distinguishes a no-match from unresolved configured matching and from the final uncorrelated state; these aren't invented UI statuses. |
| Alternatives and AND/OR | Why doesn't every row have to agree? explains conjunction versus alternatives in plain language. |
| First success and later no-match | Changed example uniquely matches E-204; later outdated email is not a required confirmation or veto. |
| Saved order and early successful association | Order determines which pairing has the first opportunity; no weighted votes or majority requirement. |
| Weak additional alternative | Adding email widens matching routes; a company row does not silently form a company-plus-worker compound key. |
| Default trigger | Default is considered when configured matching cannot establish association, not as an additional confirmation or replacement after success. |
| Schema Account ID and Account Name | Default section distinguishes account identification, selected naming value and arbitrary friendly display. |
| Default failure and unique success | app.user has no name match; independent WORKER204 uniquely matches worker204 case-insensitively. |
| Schema designation risk | The variation changes an account value, not designation; post-aggregation designation changes are strongly discouraged. |
| Uncorrelated but present | No configured/default match with no other supplied behavior leaves the account unassociated; collection can still be successful. |
| Configured case setting | Case-sensitive configured email no longer supplies the earlier equality; ignoreCase is configuration-specific. |
| Default case behavior | Separate default remains case-insensitive and non-configurable. |
| Representation boundaries | Whitespace, prefixes, numeric conversion and meaningful leading zeros are not automatically normalized. |
| Missing and abnormal inputs | Null, empty, unavailable and error conditions remain distinct; no universal abnormal-condition fall-through is asserted. |
| Duplicates | Two email candidates require investigation and observed results; screen position is no winner rule. |
| Contradictory fields | Employee reference and email can indicate different people; saved order doesn't establish legitimate ownership. |
| Incomplete ordering repair | Moving the preferred row doesn't correct wrong input or prevent the weaker alternative affecting other records. |
| Excluded hidden winner mechanisms | No profile priority, recency, collection order or confidence score is invented. |
| Configuration versus execution | Saved criteria now don't prove which configuration an older association used. |
| Optimized unchanged record | Source read can succeed while unchanged-record correlation evaluation is skipped. |
| Unoptimized reevaluation | Explains why it addresses unchanged-record eligibility after correlation edits without guaranteeing every old link moves. |
| Manual history | Explicit persistent manual association is not cleared by changed fields or an unoptimized read. |
| ISC-created manual treatment | manuallyCorrelated=true prevents equating absence of a file import with absence of manual treatment. |
| Correction scope | No reset, source/account removal or identity deletion merely to force a demonstration. |
| Frontend and presets | Account Correlation, collected account, identity values and relationships answer different questions; preset is initial pairing configuration, distinct from default logic. |
| Preview and applied state | Selected-identity calculation preview isn't proof that every identity already holds a value or correlation executed. |
| Custom searchable preparation | Custom field meaning, correlation-searchable eligibility, manual processing for all identities before aggregation, and separation from Search filters. |
| Sample Test | Estimated sample matches aren't evidence that every account was evaluated or that every owner is correct. |
| Evidence and historical limits | Source/key/identity/values/order/case/scope/mode/time/link; state missing execution evidence honestly. |
| Provisioning and sync | Defines external account/access attempts and configured identity-to-existing-account writes; wrong links can propagate wrong-person values. |
| Contractor transfer | Sponsor identifies another subject, future email unavailable, rows not AND; independent reference needs both inputs, meaning, uniqueness, preparation and result/owner checks. |
| Historical pilot integration | All pilot purposes retained; early mapping explanation slowed down, comparison transitions expanded, success termination visible in a new diagram. |
| Assessment preservation | All eight baseline checkpoint purposes plus contractor transfer are taught or tested; four pilot unanswered-first prompts and worked answers remain. No numeric assessment quota. |

## Supplied data and reasoning boundaries

The application account and intended human identity already exist. Approved application ownership evidence identifies the intended owner independently of equality. Complete configured order is employeeRef Equals identificationNumber, then mail Equals email. Both fields are correlation-eligible, identity values are applied, evaluation occurs, no persistent manual association takes precedence, and comparisons are case-insensitive in the main case.

Main values are OLD-E-204 versus E-204, with no identity holding OLD-E-204; USER@learn.example versus user@learn.example, with only the intended identity matching. The resulting relationship is supplied hypothetical reasoning, not observed tenant output. The old reference remains uncorrected. No sync write or access request is supplied.

The same loginName designation supplies app.user versus identity name worker204 for a default no-match, and independent account value WORKER204 for a unique default match after no configured match. No schema designation changes. No configured/default match with no other matching behavior leaves an uncorrelated collected account. Case-sensitive, duplicate, contradictory, unchanged-record and manual-link cases change only their stated conditions.

Null and empty strings aren't approved identifiers. No hidden trimming, prefix removal, numeric conversion, arbitrary tie-breaker or universal error continuation. Saved current configuration and reproducible current equality aren't proof of historical execution. Every numerical/string result is teaching evidence, not a live account operation.

## Fresh primary-source claim review

| Primary source | Claims rechecked October 26, 2026 | Limits retained |
|---|---|---|
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Selected attributes; fixed Equals; saved order and one pairing at a time; criterion establishing association; case and ignoreCase; preset versus default Account Name/name; Test sampling; searchable preparation; manual persistence and ISC-created treatment | Straightforward unique intended matches and explicit no-matches; no invented ambiguous-candidate winner, error continuation, confidence score or per-criterion UI log. |
| [Managing Source Account Schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented fields; selected Account ID and Account Name; risks of changing designations after aggregation | Independent account value variation, not schema alteration; friendly display value is not default naming evidence. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collection; optimized unchanged-record skipping; unoptimized correlation reevaluation; activity/history context | Read completion, record evaluation and persistent association treatment remain distinct; no rerun or actual tenant operation. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative identity origin; profiles and identity mappings; Preview versus Apply Changes | Current applied identity values are supplied; no proposed preview is treated as population state. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Evaluation of identity mappings/requirements; manual processing | Supporting concept only; no private processing pipeline or universal schedule; processing isn't target delivery proof. |
| [Managing Accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html) | Collected accounts, fields and correlation context; uncorrelated accounts; wrong-link correction context | An unresolved identity relationship is not external disablement or deletion; no account removal or reassignment performed. |
| [Viewing Identity Control Panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Current identity attributes and available events | Current represented state and available history cannot manufacture missing criterion-by-criterion execution evidence. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured identity-to-existing-correlated-account writes; relationship changes as relevant input | Review dependent writes separately; none is supplied as completed in this lesson. |

The official pages currently use Identity Services / Human Fabric naming in places; the requested ISC course name remains. No universal licensing, API procedure, private backend or connector-specific behavior is inferred. Sources stay in author records, outside the learner body.

## Assessment reasoning

| Purpose retained | Learner location | Accepted reasoning |
|---|---|---|
| First no-match isn't overall failure | Central worked trace | Next configured pairing uniquely matches the approved owner under supplied conditions. |
| One success and a later no-match | AND/OR explanation and changed E-204 example | Later email isn't a mandatory veto or confirmation. |
| No configured match, default success | Default variation and changed-case checkpoint | Selected Account Name WORKER204 matches identity name worker204; friendly label is irrelevant. |
| Changed configured case | Settings section and first checkpoint | Email no-match and case-insensitive default success can coexist. |
| Duplicate candidates | Ownership section and second checkpoint | No unique supported result; get owner and execution evidence; no first-display winner. |
| Conflicting fields | Ownership explanation and fourth checkpoint | Repair proven wrong data; order doesn't fix it or its effects on other records. |
| Persistent manual link | History section and third checkpoint | An unoptimized read doesn't erase persistent manual correlation. |
| New criteria, unchanged account | History section and third checkpoint | Optimized read success doesn't demonstrate reevaluation under new criteria. |
| Contractor proposal | Transfer question followed by reasoning | Sponsor isn't contractor; future email isn't available; independent contractor reference must be implemented and verified on both sides. |

## Diagram and retained assets

[Ordered pairings and default path](../../assets/COR-004_ordered_pairings_and_default_path.txt) is the new current editable source, matching the learner block. Maximum line width: 39 columns. It covers straightforward unique intended matches and ordinary no-matches, with human verification separately. It isn't a private service map or actual execution log.

Original [configured comparisons](../../assets/COR-004_configured_comparisons_and_default.txt), [configuration and reevaluation](../../assets/COR-004_configuration_and_reevaluation.txt), and all historical pilot files remain unchanged. Reevaluation is fully explained in prose; the old second diagram's concepts were preserved without adopting a diagram quota.

## Executed verification

Save-time checks on October 26, 2026 confirmed:

- The saved learner text, current diagram and author metadata match their intended drafts. The original and pilot reconciliation above preserves all eight baseline assessment purposes and the contractor transfer. Four unanswered-first pilot prompts and their worked answers remain; these are author coverage checks, not learner test results.
- The single inline text diagram matches its editable source exactly and is at most 39 columns wide. It includes first-row success, second-row success, default success and ordinary no-match outcomes under the stated assumptions; owner verification is separate. No graphical rendering or accessibility usability test is claimed.
- All 1,041 local Markdown link targets checked across the teaching specification, course register, README, reference records, example register, current revision record, batch 2 publication record and publishing guide resolve. Learner text contains no external/source/course links, fictional biography, old story identifiers or em dashes.
- The four existing navigation/disclosure tests passed with zero failures. These verify existing site behavior, not ISC execution or learner comprehension. Subsequent edits only clarified learner prose and this verification record; no application code changed.
- Tracked changes and both new files pass whitespace checks. New-file no-index checks return exit 1 for a present diff with empty diagnostic output; this isn't a whitespace failure.
- Inventory changed from 447 to 449 files: four existing files changed, two added, 443 unchanged and none removed. The four changed files are the learner, course register, example register and COR-004 reference section. New files are the current diagram and this record. All 91 learner files remain.
- Reference text outside the owned COR-004 section retains its original prefix/tail lengths and SHA-256 hashes. Other lessons, historical diagram assets, all pilot files, teaching specification, tracing guide, README, publishing/publication records, manifest and site code remain unchanged.
- HEAD remains 7123d85038c688f1ccecffa6a8504d22e3986b79 and staging remains empty. No commit, push or deployment occurred.

## Limits

No real tenant, API, source, schema, identity profile, mapping, credential, account, correlation, aggregation, processing, provisioning, synchronization or access change was performed. No actual incident or observed learner outcome is claimed. Beginner comprehension and transfer testing, full graphical publication review and formal approval remain pending. The four existing site tests validate navigation behavior, not lesson comprehension or ISC matching. Nothing is committed, pushed or published in this task.
