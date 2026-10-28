# The identity changed. Which results should change with it?

The collected worker record now has department Engineering, a new manager reference and a new employment-stage code. You open the person's identity in ISC and see Engineering.

Does that also establish the new manager relationship, the right lifecycle access, removal of the old department role and delivery of the new group memberships?

The department field answers the department question. To explain the whole change, we need the inputs and configuration behind each result.

## Start with the records that supply the decisions

In SailPoint Identity Security Cloud, or ISC, an **identity** is the record representing a person across their accounts. An **account** is the person's record in a particular system. An **attribute** is a named field on either record.

The person already has a valid identity and a correctly associated account on HR-Primary. A **source** is ISC's configured representation of a system's account data. HR-Primary is **authoritative** for this employee population: its worker records participate in establishing and maintaining their identities.

The Employees **identity profile** supplies shared configuration, including instructions for identity fields. A **mapping** specifies where an identity field gets its value. A **transform** calculates or prepares that value when direct copying isn't enough.

These are the relevant collected account values:

| Field | Before the change | After collection of the update |
|---|---|---|
| department | Support | Engineering |
| workerCategory | Employee | Employee |
| managerReference | M-OLD | M-NEW |
| workerStage | PRE | EMP |

workerCategory is a business classification. In this example, it remains Employee through prehire and regular employment. workerStage records that separate business stage. These are approved example values, not universal ISC codes.

Department and workerCategory map directly to corresponding identity fields. The unchanged category gives us a useful check: processing should preserve Employee rather than change every value merely because another field changed.

**Account aggregation** collects account data into ISC. The update in the table is already available there. Identity processing can't supply an uncollected HR edit by itself.

For this supplied example, the aggregation has modified the identity and initiated relevant **identity processing**: evaluation of identity information and applicable access requirements against the configuration.

That gives us a reason for reevaluation, not evidence that every expected result has finished.

The records, configurations and observations below are hypothetical. No actual tenant results or external changes are claimed.

## A manager reference needs to resolve to a person

The department mapping has a direct input: Engineering. Its expected result is Engineering.

A manager relationship needs another step. The account's M-NEW value is a reference identifying someone else; it isn't itself a link to that person's ISC identity.

**Manager correlation** resolves the reference to the manager identity. It is different from account correlation, which associates the worker's own account with the worker's identity.

Here, the profile's **Manager Name** mapping reads managerReference from HR-Primary. The source's manager-correlation configuration compares that account field with identificationNumber on candidate manager identities.

The previous manager already has identificationNumber M-OLD. The intended new manager already has M-NEW. Each reference matches exactly one intended existing identity, and those candidate values are already applied in ISC.

Only this profile/source supplies the worker's manager in this example.

Before the update, the worker is linked to the M-OLD manager. With M-NEW selected and the unique candidate available, the intended result is a link to the M-NEW manager identity.

Keep two checks separate:

- Did the mapping select the intended account reference?
- Did correlation resolve the intended manager identity?

A **Preview** evaluates mappings for a selected identity. Seeing M-NEW in an input or Preview doesn't establish the applied manager relationship. The label Manager Name also doesn't mean ISC must compare display names. The configured account and identity fields determine the comparison.

A corrected current manager doesn't, by itself, establish that an approval already created for the previous manager was rerouted. That approval has its own recorded recipient and handling.

## The lifecycle value selects a set of requirements

A **lifecycle state** represents a business stage and connects it to configured access or account actions. Its technical name is the value used to select the state.

Our Lifecycle State mapping uses a transform that independently reads the account's workerStage and applies these business-approved translations:

- PRE returns the technical value `prehire`.
- EMP returns the technical value `active`.

The mapping doesn't infer employment stage from department. Engineering and EMP are separate source facts.

Both lifecycle states are enabled. Both assign ISC **identity state** Active, the participation setting for features and processing. A lifecycle state named prehire therefore doesn't imply an Inactive identity in this configuration.

The enabled prehire state grants Worker Portal. The enabled active state grants Worker Portal and Employee Base.

An **access profile** bundles entitlements from one source. An **entitlement** is ISC's governed representation of a source-specific permission, such as membership in a directory group.

Worker Portal contains ordinary membership `PORTAL`. Employee Base contains ordinary membership `STAFF-BASE`. The ISC access object represents that permission; actual membership exists on the external account.

Before the change, the assigned lifecycle is prehire. Translating EMP to active introduces the Employee Base requirement, so STAFF-BASE becomes required.

PORTAL stays required because the same Worker Portal profile belongs to both states. A changed lifecycle label doesn't require removing and readding access that continues through the new state.

No lifecycle account actions or **Remove all access** setting are configured here. Moving to active isn't an instruction to enable every account or erase every access item not listed by that state.

The assigned state and its enabled configuration explain what should be required. They aren't a receipt proving that a directory operation succeeded.

## Roles evaluate another set of conditions

A **role** groups access requirements. Automatic role assignment uses configured membership criteria to determine which identities should receive it.

Three enabled roles apply to this example:

- Company Core tests identity workerCategory equal to Employee. Its enabled Company Common profile requires `COMMON`.
- Support Tools tests identity department equal to Support. Its enabled Support Bundle requires `SUPPORT-BASE` and `COMMON`.
- Engineering Tools tests identity department equal to Engineering. Its enabled Engineering Bundle requires `ENG-BASE`.

The assignments in this example come from these automatic criteria. All profiles use the person's one existing, correctly associated Directory-Primary account. The memberships are ordinary ongoing access, with no separate activation step.

**Provisioning** delivers required account or access changes through supported automatic or manual paths. Directory-Primary supports the needed additions and removals, with provisioning enabled. Each operation still needs the appropriate execution permission.

Before the update, Company Core and Support Tools are assigned. The account has PORTAL, COMMON and SUPPORT-BASE. It lacks STAFF-BASE and ENG-BASE.

Now apply the new identity facts to the conditions. Engineering stops matching Support Tools and matches Engineering Tools instead. Employee still matches Company Core.

What happens to COMMON when Support Tools is removed?

Company Core still requires it. The Support-only requirement can end while the shared requirement continues. Don't count two entitlements in the old role and conclude that two memberships must be removed.

SUPPORT-BASE has no continuing requirement in this supplied example, so its removal is expected. COMMON remains required through the retained role.

This is a change in automatic assignment caused by identity data. It isn't deletion or disabling of a role, or editing the access inside its definition; those are different operations with their own behavior.

Losing the Support role also doesn't mean deleting the directory account. It must remain to hold the continuing and newly required memberships.

## Combine the results before checking delivery

The configuration gives us these expected results:

| Responsibility | Intended result |
|---|---|
| Identity mappings | Department Engineering; workerCategory remains Employee; workerStage EMP translates to lifecycle technical value active. |
| Manager relationship | The selected M-NEW reference resolves to the intended existing manager identity. |
| Lifecycle-driven access | active requires Worker Portal and Employee Base: PORTAL continues, STAFF-BASE becomes required. |
| Automatic role assignment | Company Core remains; Support Tools ends; Engineering Tools applies. COMMON continues, SUPPORT-BASE loses its requirement, ENG-BASE becomes required. |

A **dependency** means a result relies on particular information or configuration. The table explains dependencies. It doesn't promise that every field and relationship finishes together in a fixed sequence before all access work begins.

```text
Collected HR account
department: Engineering
workerCategory: Employee
managerReference: M-NEW
workerStage: EMP
                |
Employees mappings and configuration
                |
check each applicable result:
  mapped identity values
  resolved manager identity
  assigned lifecycle and access
  automatic role assignments
                |
required external membership changes
                |
provisioning results + target checks

These are dependencies and checks,
not a fixed sequence of private jobs.
```

A role can legitimately use the identity department in its criteria. That doesn't mean another identity-field calculation can safely read a freshly calculated peer department because its row appears earlier on the mapping screen.

The `identityAttribute` transform reads an identity field, but it isn't intended inside another identity-profile attribute calculation. Identity-field calculations can overlap; they don't guarantee that a peer field is current or even available.

Our lifecycle calculation reads workerStage from the account independently. The manager candidates are already established. We aren't depending on a newly calculated peer field to become ready first.

Use supported independent inputs and suitable composed calculations where needed. A correct Preview once, or repeatedly processing until a result looks right, doesn't establish that an unsupported field-order assumption is safe.

## Required memberships still need actual changes

The target work concerns memberships on the existing account. No account creation, deletion, enable/disable action or ongoing copying of identity fields to the directory is configured here.

Combining the continuing and new requirements gives us:

```text
Initial observed memberships
PORTAL + COMMON + SUPPORT-BASE

Intended memberships after the change
PORTAL + COMMON + STAFF-BASE + ENG-BASE

Retain: PORTAL and COMMON
Remove requirement: SUPPORT-BASE
Add requirements: STAFF-BASE, ENG-BASE

Supplied delivery and fresh target check
STAFF-BASE add: confirmed present
SUPPORT-BASE remove: confirmed absent
ENG-BASE add: failed, absent at 14:07
PORTAL and COMMON: confirmed retained
```

The first part compares initial observed and intended memberships. The final part supplies delivery results. Neither is an instruction that ISC must issue those operations in the displayed order.

Here is the supplied evidence on October 23, 2026. UTC means Coordinated Universal Time.

At 14:00, the updated HR account values are collected and the relevant identity modification initiates processing.

At 14:04, current department Engineering, workerCategory Employee, the resolved M-NEW manager, assigned lifecycle active and the expected role assignments are verified.

At 14:06, provisioning activity reports STAFF-BASE addition and SUPPORT-BASE removal complete. ENG-BASE addition fails because the connection lacks permission for that group.

At 14:07, a fresh directory check finds PORTAL, COMMON and STAFF-BASE present. SUPPORT-BASE and ENG-BASE are absent.

The identity-side results agree with the intended decisions. Delivery remains incomplete because ENG-BASE is still missing at that check.

Identity processing doesn't validate successful access provisioning after it starts that work. One successful addition or a green job status can't establish the other operations' outcomes.

These intervals are supplied observations, not measured processing times or guarantees.

Some failures have supported retry handling. That doesn't mean every error will fix itself, or another identity-processing run retries every failed item. Inspect the particular error and supported recovery behavior, correct the approved permission problem and verify the actual membership outcome.

## Read each view as evidence of its own record

The identity's department field establishes applied person-level information. It doesn't establish the manager, lifecycle or roles merely because they concern the same person.

For the resolved manager, check the intended identity rather than a plausible display name.

Lifecycle configuration shows instructions; the assigned lifecycle shows the current selected stage. Neither alone proves all target actions.

Role assignment records a requirement. Provisioning activity describes work to deliver or remove access. Collected account data describes what ISC read; a fresh target observation establishes external state at that observation time.

For example, the ENG-BASE error establishes failure of that attempt. The 14:07 target check establishes absence at 14:07. Neither proves permanent absence or the outcome of a later recovery.

If an expected activity isn't visible where you first look, confirm identity, source, account, requested change, time range and the view's coverage. Missing evidence isn't immediate proof that the operation failed.

Don't change the approved department back to Support because Engineering access failed. The business fact is correct; the group operation has a separate permission problem.

## What changes when the input is missing or only one fact changes?

The following questions are independent variations on the initial setup. Each changes only the stated facts.

For the manager variations, **null** means no value. With this one supplying source/profile and no competing manager input, a change to null clears the manager relationship.

A changed non-null reference with no matching manager has different documented behavior: the existing manager relationship is retained. Seeing the old manager therefore doesn't prove processing never occurred.

Inspect the selected reference and candidate identity data. An unmatched reference can mean an incorrect code or missing manager data; don't fabricate a manager identity to make a guessed match succeed.

### Questions

1. Only department changes to Engineering. workerStage remains PRE and managerReference remains M-OLD. Which results should change, and which should remain?
2. The account's managerReference becomes non-null M-MISSING. No candidate has that identificationNumber; the existing resolved manager is M-OLD. Does M-MISSING become the new manager, or is the relationship cleared?
3. In a separate variation, the selected managerReference changes to null. What differs from question 2?
4. The person was already in active with both lifecycle-granted profiles before a later department-only update. Must a new lifecycle transition or duplicate membership write occur?
5. Support Tools loses its assignment, but Company Core still requires COMMON. Should both entitlements from Support Tools be removed?
6. Current Engineering and Engineering Tools are verified. The 14:07 target check finds no ENG-BASE, and the add reports insufficient permission. Which responsibility remains unresolved?
7. An enabled lifecycle state has display label Active Employee and technical name active. A proposed mapping returns `Active Employee`. Is the familiar display text sufficient?
8. A designer proposes calculating department first, then reading that newly calculated identity field inside Lifecycle State's mapping. No supported ordering contract is supplied. Is one successful Preview enough to justify it?

### Work through the reasoning

**1. Follow each independent input.** Department can make Engineering Tools apply and Support Tools stop applying. PRE still selects prehire, so Employee Base isn't introduced through active in this variation. M-OLD remains the intended manager match. Verify actual application and delivery separately.

**2. The unmatched non-null reference retains the existing relationship.** It doesn't create a resolved M-MISSING manager or clear M-OLD. Check whether the reference is wrong or the intended candidate's identity data is missing.

**3. A selected null clears the relationship under these supplied conditions.** It isn't the unmatched non-null case. Check the exact selected account value and current manager, rather than grouping every symptom as "missing manager."

**4. Correct lifecycle requirements can continue.** No new prehire-to-active transition is supplied. Existing active access stays relevant, while department-driven role results can change. A duplicate write isn't a required sign of reevaluation.

**5. Keep the continuing requirement.** COMMON remains required through Company Core. SUPPORT-BASE has no continuing requirement here. Role-assignment removal isn't blanket deletion of every mentioned entitlement or the source account.

**6. Delivery remains unresolved.** The evidence identifies the group operation's permission failure, not a bad department condition. Verify source, account and group, correct the authorized cause and confirm recovery. Don't rewrite a correct business fact to hide the failure.

**7. Use the approved technical selection value.** The mapping needs `active` for this state. Verify actual assignment and its access outcomes; don't invent fallback behavior for the unrecognized display text.

**8. The peer-field dependency is unsupported by that evidence.** Use suitable independent underlying inputs and a supported calculation. One correct Preview doesn't provide an execution-order guarantee for other identities or runs.

## Try the reasoning with a location change

A worker moves from Leeds to Bristol. The identity's location mapping has the correct collected input. The unchanged manager reference still resolves uniquely.

The assigned enabled active lifecycle grants Staff Portal. An enabled Bristol Tools role requires both identity location Bristol **and** lifecycle technical value active. Its profile requires ordinary BR-TOOLS membership on an existing correctly associated account. Staff Portal uses a different group.

Preview returns Bristol, but the current applied location is still Leeds. No current Bristol Tools assignment or BR-TOOLS delivery result is supplied.

Would you report the move complete? Which facts are established, and what should be checked next?

Preview establishes a selected result, not applied Bristol. The continuing manager and lifecycle don't fill that gap.

Verify relevant identity processing and current location, then actual role assignment against both conditions. If lifecycle isn't actually active, investigate that second condition rather than reducing the role to location alone.

Follow the required provisioning activity and fresh target membership evidence. Preserve the continuing Staff Portal requirement.

Once applied location becomes Bristol, an absent BR-TOOLS membership would be a different boundary to investigate. Completion needs evidence for the applied value, the qualifying role and the actual membership.
