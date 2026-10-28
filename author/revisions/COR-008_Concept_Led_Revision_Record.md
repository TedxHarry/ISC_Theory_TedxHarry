# COR-008 concept-led revision record

Revision 2.0, Module 7.8. Saved October 27, 2026 under teaching specification 3.1.

## Scope and baseline

Revised [COR-008 learner lesson](../../lessons/COR-008_Manager_Correlation_and_Dependencies_of_Manager_Based_Processes.md) locally, with current author tracking and two new editable diagrams. Starting HEAD: 7123d85038c688f1ccecffa6a8504d22e3986b79; 458 inventoried files; 91 learner lessons; empty staging area. Original revision 1.0 is recoverable at that commit and remains published unchanged.

Progress becomes 54 of 91 individual revisions, with 37 awaiting. Published revised snapshot remains 23 through SRC-002. COR-009 is next; its learner body was not opened. ROL-007 new authoring remains paused. No commit, push, deployment, site-code or original-repository change.

## Teaching decisions and explanation review

The opening distinguishes an HR reference from the identity relationship it should establish. Account ownership and employee-to-manager relationships receive separate meanings before the normal trace. Minimal P-108/P-208/P-209 references expose which person's field belongs on each side. No fictional company, named employee, invented ISC identity ID or remembered story is required.

The Manager Name mapping and source comparison are explained as cooperating instructions: one selects manager input; the other identifies the candidate identity field. Both identities already exist and applied values are prepared. Current data, relevant evaluation and the supplied unique intended result are established before source-priority and failure variations.

First-non-null source selection is separated from first-successful-match logic. The profile-priority example uses neutral HR-Primary/HR-Secondary labels and Employees/Contractors configuration names. One governing profile remains distinct from manager-source selection across mapped profiles.

The changed-input table explicitly supplies an existing P-208 manager, selected/collected/evaluated input, no competing replacement source and standard matching. Null clears; changed non-null no-match retains the previous manager. Missing candidates, no previous manager, duplicates, self-reference and cycles keep their distinct evidence limits. A reporting cycle receives a plain-language meaning.

Supporting access-model, request, approval, campaign, provisioning and sync terms are explained where their processes need them. Request recipient and submitter, current relationship and campaign snapshot, built-in Manager and target-specific manager-account representation remain separate. Existing records and external effects don't acquire automatic repair claims.

All eight original assessment purposes remain as unanswered-first prompts followed by separate reasoning. The 120-employee transfer preserves counts and cause groups and makes primary-group versus secondary-issue boundaries explicit. Two tables and two diagrams fit this subject without a common count requirement.

Author read-through checks first-use meaning, causal transitions, scope and current values. Actual beginner comprehension and transfer, full graphical review and formal approval remain separate and pending.

## Original-to-revision coverage

| Required understanding | Current location and retained reasoning |
|---|---|
| Identity/account/source/attribute meanings | Opening teaching section establishes the records and fields before tracing relationships. |
| Two relationship purposes | Account correlation identifies account owner; manager correlation connects employee identity to manager identity without moving the HR account. |
| Input versus relationship | P-208 text on HR record is distinct from actual employee-to-manager identity association. |
| Comparison direction | Employee's managerRef matches manager's own identificationNumber, not employee's P-108 or manager's manager reference. |
| Existing population and candidate | Employee P-108 and manager P-208 already exist, applied prepared current values; candidate manager definition and unique approved reporting line. |
| Profile, authority and mapping | Contextual definitions connect source account population, identity configuration and selected manager input. |
| Two required configurations | Manager Name mapped in each profile plus source Manager Correlation; mapping selects input, source config identifies manager field. |
| Manager Name label | Not a requirement for friendly names; duplicated/changed names and reference meaning/uniqueness/representation explained. |
| Normal supplied mechanism | Employees Manager Name selects HR-Primary.managerRef P-208, source compares identificationNumber on intended manager; relevant collection/processing and verified relationship supplied. |
| Standard-case conditions | No competing mapped manager source, duplicates or custom extension; both identities ready; no request/campaign/target execution supplied. |
| UI versus purpose | Manager section shares account-correlation area but configures a different relationship; wrong owner pairing risks moving account to manager. |
| Logical diagram limits | Ownership remains employee's; input selection, comparison and identity relationship are dependencies, not private mandatory jobs. |
| Profile priority meaning | Lower number means higher priority; Manager Name mappings considered in that order. |
| First non-null source | Source selection stops at first non-null manager attribute, not first successful match. |
| Competing-source example | Employees 10/HR-Primary P-99999 selected despite Contractors 20/HR-Secondary P-209 matching; both inputs available. |
| Higher-priority null variation | Null primary permits lower non-null secondary P-209; actual selected source matters. |
| Governing profile boundary | One governing identity profile coexists with manager-source selection across mapped profiles; no dual governance implied. |
| Shared priority consequences | Changing priority or authority can affect wider population; establish selected input before force-fitting result. |
| Collection and processing | Defines aggregation and identity processing; actual published/collected input, candidate current field, evaluation and relationship require distinct evidence. |
| Preview versus actual manager | Selected-identity mapping preview doesn't establish applied manager relationship. |
| Optimized skip/unoptimized reevaluation | Unchanged account can skip account/manager correlation; unoptimized addresses evaluation, not candidate creation/input repair/source selection. |
| Custom searchable field | Defined custom identity attribute must be searchable for manager matching, populated/prepared; Search queryability differs. |
| Changed-input assumptions | Each outcome starts with current P-208 manager and actual selected/collected/evaluated input, no alternate source/custom behavior. |
| Approved replacement P-209 | Available unique intended candidate can resolve new relationship; verify actual manager. |
| Selected null clears | Qualified selected null/no competing source/evaluation clears relationship; blank-looking representation isn't automatically null. |
| Changed non-null no-match retains | P-99999 cannot resolve new manager, so documented existing P-208 manager remains; presence doesn't prove new match or correctness. |
| Absent intended manager | Reference doesn't create identity; existing identity and selected populated field needed. |
| No previous manager boundary | Retained-manager example doesn't establish a new correct manager for someone with no earlier relationship. |
| Duplicate candidates | No hidden first-candidate winner; approved reporting-line and representation investigation required. |
| Cross-profile candidates | Manager identity can be established through another profile; lookup isn't limited to same-name HR account. |
| Hierarchy defects | Self-reference and reporting cycles require business-data investigation; cycle is defined and no automatic repair claimed. |
| Programmatic rule extension | Manager correlation rule supports more complex matching, separate from supplied standard behavior; inspect actual supported logic if present. |
| Access request/approval meanings | Defines asking for access item and configured review decision before explaining routing. |
| Access model context | Entitlement, access profile and role meanings support why item-specific reviewer configuration matters. |
| Recipient versus submitter | Standard role/access-profile Manager reviewer means manager of access recipient, not colleague submitter. |
| No universal manager review | Actual requested-item/approval configuration determines reviewers; not every request needs a manager. |
| Missing-reviewer handling | Standard request reassignment via escalation/fallback/owner belongs to review process; fallback approver defined; no manager synthesized or automatic approval inferred from missing manager alone. |
| Existing approval independence | Correct current manager isn't proof every already-created task's reviewer/state changed. |
| Certification/campaign meanings | Existing-access review and grouping of reviewers establish Manager Campaign context. |
| Manager Campaign exclusion | Standard Manager Campaign excludes identities without manager; report helps identify them before generation. |
| Snapshot and correction | Later manager addition doesn't demonstrate inclusion/assignment in existing generated campaign; inspect actual campaign and supported correction. |
| Other campaign modes | Missing-manager rule isn't generalized to every certification mode. |
| Presence versus correctness | Retained wrong manager can avoid no-manager report while business hierarchy is wrong. |
| External manager independence | ISC relationship and directory manager value require separate state evidence. |
| Provisioning and sync definitions | Supported external change attempt versus configured identity-to-existing-account write path. |
| Built-in Manager restriction | Can be used in Create Account definition, which is defined; cannot directly be used for attribute sync. |
| Custom managerToSync design | Name alone isn't integration; mapped/calculated value, target representation and eligible configured write required. |
| Target manager account representation | Directory can require manager's directory account reference rather than HR reference; connector requirements and selected manager account matter. |
| Delivery verification | Correct ISC relationship can coexist with absent/failed directory update; correct directory field doesn't prove ISC manager. |
| Consumer diagram limits | Request task, campaign snapshot and external write are separate processes, not mandatory triggers/order or automatic reversal. |
| Investigation evidence | Exact employee/source/ref/mappings/priorities/candidate field, activity, manager identity and approved reporting line; timestamps and history limits. |
| No destructive or wrong-layer repair | No identity deletion, correct-reference rewrite or account-owner change merely to populate manager display. |
| Eight assessment purposes | All retained as unanswered-first prompts with separate worked reasoning. |
| 120-employee transfer | 70 prepared/20 wrong non-null/10 missing input/10 missing legitimate manager identity/5 source conflict/5 duplicate or invalid hierarchy; primary groups with secondary issues visible. |
| Transfer completion | Cause-specific data/readiness/selection/evaluation and manager presence/correctness before campaign generation; existing requests/campaigns/targets separately verified. |

## Supplied facts and boundaries

Employee collected HR account contains own reference P-108 and managerRef P-208; its existing identity holds identificationNumber P-108 and retains account ownership. Intended existing manager holds prepared current identificationNumber P-208; a different existing manager holds P-209. Approved worker records establish the reporting line and distinct references.

Employees Manager Name maps HR-Primary.managerRef. Source manager configuration compares that employee account field with identificationNumber on candidate manager identities. Standard unique matching, no competing source/custom rule and relevant collection/processing precede the supplied employee-to-P-208 manager relationship. P values identify people in the design, not actual ISC object IDs. No request, campaign or external manager write occurs in the main example.

Separate priority case supplies both available source inputs: Employees 10/HR-Primary P-99999 and Contractors 20/HR-Secondary P-209. The higher-priority non-null value selects the source despite no candidate. Higher-priority null permits the lower non-null source. These are manager-source conditions, not two simultaneous governing identity profiles.

Each changed-input case starts with P-208 manager and explicit selection/evaluation conditions. Selected null clears without competing replacement source; changed unmatched P-99999 retains P-208; approved unique P-209 can resolve another manager. No earlier manager, unavailable intended identity, duplicate field and invalid hierarchy aren't collapsed into a guessed correct result or hidden tie-breaker.

Consumer illustrations are independent: new role request submitted by colleague for employee; existing generated standard Manager Campaign when employee lacked a manager; custom managerToSync design instead of built-in Manager direct synchronization. None supplies a main-case consumer execution or proves all old tasks change.

The 120 primary groups are 70 prepared, 20 wrong non-null references, 10 missing input, 10 missing legitimate manager identity, 5 source conflicts and 5 duplicate/invalid hierarchy cases. Additional issues can coexist. No real employee inventory or observed learning outcome is claimed.

## Primary-source verification

| Primary source | Claims rechecked October 27, 2026 | Limits |
|---|---|---|
| [Configuring Manager Correlation](https://documentation.sailpoint.com/saas/help/sources/manager_correlation.html) | Both setups; employee account reference to manager's own identity field; all-identity search; priority/first-non-null source; custom searchable field; aggregation/processing; null clearing versus changed no-match retention; programmatic extension | Standard unique main match and qualified selected-input variations; no duplicate winner, cycle repair or private pipeline. |
| [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) | Profiles/authority/mappings, one governing profile, priority and Preview versus applied state | Manager-source selection isn't simultaneous governance by multiple profiles. |
| [Processing Identity Data](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) | Manager determination during identity evaluation; mapping/requirement processing and independent provisioning result | Relevant evaluation supplied; no invented universal schedule or mandatory separate jobs. |
| [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) | Optimized unchanged-record account/manager skip; unoptimized reevaluation; operation/history context | Evaluation doesn't repair missing inputs/candidates or change selected source. |
| [Managing Requests for Roles and Access Profiles](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) | Manager reviewer is recipient's manager; configured review context; missing-reviewer reassignment | Standard role/access-profile behavior only; no universal approval engine, automatic approval from missing data or all-old-task reassignment. |
| [Starting a Manager or Source Owner Campaign](https://documentation.sailpoint.com/saas/help/certs/starting_campaign.html) | Standard Manager Campaign excludes managerless identities; Identities Without Managers report; generated snapshot and later-added manager limit | Other certification modes and explicit campaign corrections need their own evidence. |
| [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) | Configured existing-correlated-account writes; built-in Manager usable in Create Account but ineligible for direct sync; custom managerToSync approach | Custom field name alone doesn't establish correct representation, configuration or delivery. |
| [Viewing Identity Control Panels](https://documentation.sailpoint.com/saas/help/identities/control_panel.html) | Current profile/attributes and available successful/failed events | No complete candidate-by-candidate history or current value as proof of old execution. |
| [Active Directory Default Provisioning Attributes](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/provisioning_reference.html) | Manager provisioning uses target-specific manager representation; documented default Get Manager LDAP DN generator | Supporting connector example only; no AD payload, implementation or universal directory behavior. |

The manager-correlation source was read for its complete claim-bearing explanation, including first-non-null priority, dual setup and retained-manager behavior. The role/access-profile source's current missing-reviewer sequence was checked: missing reviewer's manager, next new escalation identity, fallback approver, requested object's owner, then eligible org admin excluding default support admin; already-assigned approvers are skipped. This detail is retained as author verification, while the learner receives the relevant boundary rather than a full approval-engine lesson.

Official pages use Identity Services / Human Fabric naming in places; the requested ISC course name remains. Source links and verification dates stay outside learner text. No universal licensing, private architecture, duplicate winner, automatic cycle correction, schedule or connector payload is invented.

## Assessment and transfer reasoning

| Purpose retained | Supplied evidence and accepted reasoning | Misconception exposed | Primary-source mapping |
|---|---|---|---|
| Reference direction | Employee own P-108, managerRef P-208, manager own identity P-208: connect last two values and correct records. | Employee number or manager's manager reference answers same question. | Manager correlation |
| Dual setup | Correct Manager Name mapping without selected source configuration is incomplete; verify both selected fields and evaluated relationship. | Populated mapping label alone establishes manager. | Manager correlation; Identity profiles; Identity processing |
| Missing candidate | Approved reference but no intended manager identity/value: reconcile legitimate identity establishment and current selected field. | Manager reference text creates manager identity. | Manager correlation; Identity profiles |
| Null versus no-match | Existing P-208 manager; selected evaluated null versus P-99999, no alternate source: null clears, unmatched changed non-null retains. | Both are equivalent missing-manager outcomes, or visible old manager proves new match. | Manager correlation |
| First non-null selection | Priority 10 non-null P-99999 is selected despite priority 20 valid P-209; trace input and retained result. | Source selection is first successful match or always only employee's governing profile. | Manager correlation; Identity profiles |
| Recipient versus submitter | Colleague submits recipient's role request with Manager review: recipient's manager is relevant; verify actual task/configuration. | Reviewer must be submitter's manager or correct routing proves delivery. | Requests for roles/access profiles |
| Current manager versus snapshot | Campaign generated when manager absent; later correction doesn't prove existing campaign inclusion; inspect actual population/assignments. | Every campaign is a live lookup and automatically repairs after identity change. | Manager/source-owner campaigns |
| Manager versus target sync | Correct ISC manager doesn't enable direct built-in Manager sync; require custom mapping/representation/configuration and actual target evidence. | Same manager field can be directly synced, or field name alone implements delivery. | Attribute sync; AD provisioning reference |
| Reporting-line transfer | Reconcile 120 primary groups, repair specific causes and verify relationships before generation; handle existing tasks/campaigns/targets separately. Equivalent supported approved plans acceptable. | Aggregation success alone establishes campaign readiness, source fallback, identity creation or valid hierarchy. | All nine primary sources above |

## Diagram review

- [Account owner and manager lookup](../../assets/COR-008_account_owner_and_manager_lookup.txt): unchanged employee account ownership, employee managerRef input, Manager Name/source comparison, candidate manager's own P-208 and identity relationship. Maximum 42 columns.
- [Current manager and separate outcomes](../../assets/COR-008_current_manager_and_separate_outcomes.txt): request task, campaign snapshot and separate external mapping/write are independent evidence tracks. Maximum 41 columns.
- Sources exactly match learner blocks; prose explains the same connections, assumptions and arrow limits. They aren't private services, universal schedules or mandatory consumer invocations.
- Original [manager reference/identity relationship](../../assets/COR-008_manager_reference_and_identity_relationship.txt) and [manager relationship/consumers](../../assets/COR-008_manager_relationship_and_consumers.txt) remain unchanged. Source synchronization isn't graphical publication-format verification.

## Executed verification

Save-time checks on October 27, 2026 confirmed:

- Saved learner text and current author metadata match their intended drafts. Original-to-new reconciliation covers 55 purposes, all eight changed-evidence question purposes and the reporting-line transfer. These are documentation-based author checks, not observed learner validation.
- Both inline diagrams exactly match their editable sources, with maximum widths 42 and 41 columns. One preserves account ownership while tracing the manager lookup; the other separates request tasks, campaign snapshots and external writes. Source consistency isn't graphical publication-format review.
- The eight unanswered-first prompts retain separate worked reasoning and author assessment mappings for supplied evidence, accepted reasoning, misconceptions and primary sources.
- The transfer's 70 + 20 + 10 + 10 + 5 + 5 primary groups total 120, with additional issues explicitly allowed. Main P-108/P-208 reference direction, priority-10 non-null selection over priority-20 match, and qualified selected-null versus changed no-match outcomes agree across teaching, questions and author records.
- All 1,075 local Markdown targets checked across the teaching specification, course register, README, reference records, example register, current revision record, batch 2 publication record and publishing guide resolve. Learner text contains no external/source/course links, named fictional employee/company biography, baseline story identifiers or em dashes.
- All four existing navigation/disclosure tests passed with zero failures. Subsequent learner-prose edits introduce null before the selection logic and remove an explanation of example design; application code remains unchanged. Site checks don't verify ISC behavior or learner comprehension.
- Tracked changes and all three new files pass whitespace checks. New-file no-index checks return exit 1 for present diffs with empty diagnostic output; this isn't a whitespace failure.
- Inventory changed from 458 to 461 files: four existing files changed, three added, 454 unchanged and none removed. Changed files are the learner, course register, example register and owned COR-008 reference section. Two current diagram assets and this record were added. All 91 learner files remain.
- Reference text outside the owned COR-008 section retains original prefix/tail lengths and SHA-256 hashes. Other lessons, historical assets, pilots, teaching specification, tracing guide, README, publishing/publication records, manifest and site code remain unchanged.
- HEAD remains 7123d85038c688f1ccecffa6a8504d22e3986b79 and staging remains empty. No commit, push or deployment occurred.

## Limits

No actual tenant, API, source, profile, priority, mapping, identity, account, correlation rule, aggregation, processing, approval, campaign, synchronization, provisioning or target operation occurred. No manager or account-owner change, identity deletion or destructive repair was performed. No observed learner outcome is claimed. Beginner validation, full graphical publication review and formal approval remain pending. Site navigation tests aren't ISC matching or comprehension tests. Nothing is committed, pushed or deployed in this task.
