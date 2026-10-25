# COR-004 concept-led pilot: author review and comparison

Prepared October 24, 2026. Pilot revision 1.0.

## Scope and status

- Learner text: [COR-004 concept-led pilot](COR-004_Concept_Led_Pilot.md).
- Baseline: [published-source COR-004](../../lessons/COR-004_Following_Configured_Correlation_Conditions_Through_Records.md), revision 1.0, at commit 90b9f298860b0bc26d26259f084e129ac59331e0.
- Purpose: test the concept-led approach on a process-heavy lesson after the user preferred the [SYS-005 pilot](SYS-005_Concept_Led_Pilot.md). This second pilot is not a course-wide migration or replacement of either published lesson.
- Markdown remains the course's authoring format. No Word/PDF conversion, commit, push, deployment, teaching-specification change, register change, or site modification is part of this task.
- Documentation-based author review, not tenant execution, an actual incident, or a measured learner-comprehension test. Beginner validation and formal publication approval remain pending.
- Author/pilots is inside the existing author exclusion from GitHub Pages. The separate original lesson and its two assets remain unchanged.

## What changed, and why

The opening introduces the actual relationship problem: an application account is present, but one unsuccessful comparison need not be the final matching outcome. No fictional employer, application brand, named employee, employee biography, account key, or invented ISC object ID is required.

Minimal hypothetical values remain because this lesson tests selected fields, equality, case behavior, and default naming. E-204 versus OLD-E-204 makes the failed equality visible. USER@learn.example versus user@learn.example makes case handling visible. app.user versus worker204 and the WORKER204 variation make the schema-selected default path visible. These are teaching inputs, not actual ISC output or lab observations. Their purposes are local; no continuing story or cross-lesson identity is implied.

The pilot has one selected-value comparison table and one decision-flow diagram. Neither count is a target for other lessons. The table supports side-by-side comparison; the diagram supports branching after the explicitly supplied first no-match. The separate reevaluation diagram and outcome-summary table are replaced by connected prose, not by removing their concepts.

The original eight checkpoint purposes are retained in the worked trace, changed-input explanations, four unanswered-first checkpoint prompts with worked reasoning, and contractor transfer. The new count is not an exercise quota. Most initial matching mechanics are taught and exercised in the central trace instead of repeating all eight as separate end sections.

The user requested a patient, direct mentor voice, no teaching-method announcements, and no learner-body source links. Those choices override the generic writing skills' greeting/slang, visible-source-section, and Word/PDF defaults. No invented product versions, timings, confidence scores, private services, or tenant observations are adopted from illustrative skill examples.

## Coverage comparison

| Original coverage | Pilot location and retained understanding |
|---|---|
| Identity, source account, correlation purpose | Opening distinguishes the person representation, application record, and relationship being established. |
| Source, aggregation, collection versus relationship | What is ISC actually comparing? explains source representation and collection without equating a present record with resolved ownership. |
| Existing application identity versus authoritative creation | Early scope paragraph distinguishes this matching flow from authoritative identity establishment. |
| Attribute, criterion, selected fields and candidate | First two teaching sections explain the paired fields and candidate identity before tracing values. |
| Identity profile, authoritative source, applied mapping values | Mapping explanation and main assumptions distinguish the identity's current value from arbitrary raw HR data and proposed calculation. |
| Full saved order and actual settings | Main trace supplies the complete two-row configuration, eligibility, applied values, case setting, evaluation, candidate uniqueness and absence of a manual override. |
| Failed first employee-reference comparison | OLD-E-204 matches no candidate; that comparison's result is separate from overall matching. |
| Equals, prefix and transform boundary | Equals does not invent prefix removal; transform or data correction is a separate deliberate operation. |
| Successful second email comparison | USER@learn.example uniquely matches user@learn.example under the supplied case-insensitive setting and approved ownership evidence. |
| Successful association does not repair data | The employee reference remains wrong; association and field correction are separate outcomes. |
| Ordered alternatives, not AND | Why doesn't every row have to agree? explains AND/OR, a first-match/later-no-match variation, and the risk of adding weaker alternatives. |
| Combined company/identifier design and no scoring | Separate rows do not silently mean a compound requirement, and standard matching is not weighted majority voting. |
| Actual saved order, conflicting evidence | The ordering explanation and ownership section preserve order as evidence, not an independent guarantee of legitimate ownership. |
| Default Account Name to identity name | The default section explains its trigger, case-insensitive/non-configurable behavior and the distinct schema-selected values. |
| Account ID, Account Name, friendly label | The schema explanation separates the record key, selected naming field and unrelated friendly display value. |
| Default success, default failure, uncorrelated outcome | app.user has no name match; WORKER204 uniquely matches worker204 in an independent variation; no applicable match leaves the supplied account uncorrelated but present. |
| Schema change risk | The variation changes values, not designations; changing Account ID/Name after aggregation is not offered as a repair. |
| Configured case behavior versus default | The settings section and first checkpoint distinguish configurable ignoreCase behavior from the separate default path. |
| Whitespace, zeros, null, empty, unavailable input and errors | The settings section preserves their distinctions and refuses undocumented cleanup or universal fall-through assumptions. |
| Duplicate candidates and absent tie-breaker evidence | Matching data still needs trustworthy ownership and the duplicate-email checkpoint retain uncertainty and the need for actual result/owner evidence. |
| Conflicting fields and incomplete order-only repair | Ownership section and contradictory-fields checkpoint address wrong-person matches and remaining effects on other accounts. |
| Changed configuration versus actual reevaluation | Did this account actually use the configuration you're inspecting? separates saved settings, operation mode, changed account data and historical evidence. |
| Optimized unchanged-account skipping | Same section explains why read success need not establish evaluation under new criteria. |
| Supported unoptimized reevaluation | Same section explains the documented purpose without prescribing a mass correction or promising every old link moves. |
| Manual persistence and ISC-created treatment | Same section defines persistent manual links, manuallyCorrelated=true and the independent limit of rereading. |
| Safe correction scope | No reset, identity deletion, account removal, tenant action or operational correction is performed or prescribed merely to force a match. |
| Frontend evidence and presets | Use the screens as evidence for particular questions explains actual saved pairings, preset versus default, current account values and represented relationships. |
| Preview versus applied identity state | Same section distinguishes selected-identity mapping preview from applied identity data and historical account evaluation. |
| Custom-field searchable eligibility and preparation | Same section preserves manual processing for all identities before aggregation after relevant searchable preparation and separates this from Search querying. |
| Correlation Test sampling | Same section explains estimated sample matching versus all-account evaluation and independently legitimate ownership. |
| Operation history and lack of a full criterion log | Exact record/configuration/execution evidence is retained; no nonexistent product trace or private architecture is invented. |
| Provisioning, attribute synchronization and dependency risk | What does establishing the relationship change? separates relationship from supported external writes and requires review of consumers before correction. |
| Contractor transfer | Final exercise retains wrong-person sponsor, future unavailable email, independent contractor reference not yet available on both sides, ordered-alternative semantics, preparation/default/manual/evaluation checks and ownership verification. |

## Official references checked October 24, 2026

These references verify the existing lesson's product claims for the rewriting task. They are author-only. Their presence is not evidence of a live tenant test or a measured improvement in comprehension.

| Primary source | Claims checked and limits |
|---|---|
| [Assigning Source Accounts to Identities](https://documentation.sailpoint.com/saas/help/accounts/correlation.html) | Fixed Equals, one pairing at a time in saved order, a criterion establishing association, case/ignoreCase, custom-field searchable preparation, Test sampling, presets, separate default naming path, manual persistence and ISC-created treatment. Standard simple unique-match cases only; no unverified ambiguous-candidate or error continuation algorithm. |
| [Managing Source Account Schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html) | Represented account fields, designated Account ID/Name and change risks. Default matching does not use any arbitrary friendly name. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Collection, optimized unchanged-record skipping, unoptimized correlation reevaluation, and available aggregation history scope/mode/status. No universal reassignment promise or destructive procedure. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Authoritative identity establishment, identity mappings, custom fields, Preview versus Apply Changes. The main trace explicitly supplies applied eligible identity values. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Identity mapping/requirement evaluation, manual processing and the separate boundary of provisioning completion. No invented private execution stages or universal scheduling timeline. |
| [Managing Accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html) | Account attributes, current relationship context, uncorrelated authoritative-identity definition and correction context. No unsupported assumption that an uncorrelated external account is deleted or disabled. |
| [Viewing Identity Control Panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Current identity attributes/accounts and available events. A current link does not independently establish business ownership or a full historical matching trace. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured writes to existing correlated accounts and potential effects of a changed relationship. No synchronization operation is supplied in this pilot's main trace. |

The current official pages use Identity Services / Human Fabric naming in places. The requested ISC course name remains; the pilot does not assert universal availability or licensing. Connector-specific, multi-host, IdentityIQ, similarity-scoring, and community conjecture are not used to define standard configured matching.

An additional API-page lookup was not accessible through the browsing tool. No new API procedure, version promise, or payload is included; the needed behavior is supported by the admin guide references above.

## Assessment mapping

| Baseline assessment purpose | Where the pilot tests or works through it | Accepted reasoning and misconception boundary |
|---|---|---|
| First criterion no-match versus overall result | Opening question and central two-row trace | The unique intended second match can establish the relationship; a single no-match is not the whole result. |
| One match and another no-match | Why doesn't every row have to agree? | A later row is not an automatic AND confirmation or veto. No majority/confidence score. |
| Configured no-match with default match | Default section and changed-case checkpoint | Designated Account Name matches identity name under the supplied default conditions, not friendly display name. |
| Changed case setting | Settings section and changed-case checkpoint | A configured case-sensitive email no-match can coexist with a case-insensitive default match. Distinguish criterion and overall outcome. |
| Duplicate matching identities | Ownership section and duplicate-email checkpoint | The information is insufficient for a unique candidate or known execution result; inspect duplicates, actual relationship and owner evidence. Do not invent a first-display winner. |
| Contradictory fields | Ownership section and contradictory-fields checkpoint | Preferred order doesn't repair an incorrect field or eliminate that alternative's effects on other records. Repair the proven cause and verify scope. |
| Manual relationship persists | History section and changed-configuration checkpoint | Unoptimized aggregation isn't automatic removal of a manual link; inspect history and supported correction before declaring a defect. |
| New configuration and unchanged account | History section and changed-configuration checkpoint | Optimized read success need not establish evaluation under the new configuration; scope/mode/history matter. |
| Contractor proposal / transfer | Final independent exercise and worked reasoning | Sponsor identifies the wrong subject, future email isn't present, rows aren't AND, and the independent reference needs implementation/preparation plus default/history/evaluation/ownership checks. |

The checkpoint prompts precede their answers, allowing an attempt without immediately reading the explanation. This is a text presentation choice, not an implemented reveal interaction or assessment engine. There is no claim that author reasoning proves an actual learner can transfer the concepts.

## Diagram source and review boundaries

The [editable decision flow](assets/COR-004_configured_and_default_flow.txt) matches the inline text block. It begins with supplied account evaluation, no manual override and the first configured no-match. It branches on a unique intended second match versus no second match, and then on the default path where applicable. The missing first-row success branch is deliberate: this figure traces the stated first-row-no-match case, not every possible configured list.

Surrounding prose explains arrows, the separate owner check, excluded ambiguous/error handling, and the absence of private service-stage claims. The text remains readable without the figure. Source synchronization and line-width checks are distinct from graphical publication-format QA.

Before any adoption, the user should compare the central trace with the original: can they explain why the second row works, why rows aren't AND, where default matching fits, and why current values or a successful read may not explain an old link? Actual beginner testing remains a separate review step.

## Save-time validation

Local checks on October 24, 2026 confirmed:

- The pilot has 3,445 whitespace-delimited words; the baseline has 3,377 by the same counting method. These are descriptive measurements, not writing targets or evidence of quality.
- The single inline diagram matches its editable asset exactly, with a maximum width of 42 columns. The single table and four checkpoint prompts match the authored structure; neither count is a course requirement.
- All 29 checked concept markers and all 33 mapped coverage items are present. This structural check supports, but does not replace, the separate content review above.
- The four local author links resolve, and all eight official reference pages returned HTTP 200. Availability checks are separate from reviewing their claim-bearing content.
- Learner text has no named fictional person/company, baseline example identifiers, external source links, teaching-method promises, em dashes, or placeholders. Headings and diagram fences are structurally consistent. All three new files pass whitespace checks.
- The baseline file matches HEAD, all tracked and staged files are unchanged, the existing author-folder site exclusion remains in place, HEAD remains 90b9f29, and the course still has 91 lesson files. The earlier SYS-005 pilot files remain alongside this pilot.

No graphical publication-format check, live ISC operation, beginner validation, commit, push, or deployment was performed for this local pilot.
