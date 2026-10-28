# The mapping is correct. What else will change?

Suppose an identity's Department currently contains Engineering, read from a directory account. Human Resources (HR) supplies ENG for the same employment department, and the team wants SailPoint Identity Security Cloud (ISC) to use that approved code instead.

**Preview** calculates proposed mapping results for selected identity data. Here it shows ENG, the intended new value.

But a role still expects Engineering, and the directory is configured to receive Department updates from ISC. The new value has readers and a writer beyond the field you just changed.

The person's job hasn't changed. The representation has, and the processes using it need to understand that representation.

## Establish the input, identity and receiving account

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **attribute** is a named piece of information. Account department and identity Department belong to different objects.

An **identity profile** supplies shared configuration, including mappings, for its identities. An **authoritative source** provides accounts used to establish identities through that profile.

An **identity attribute mapping** selects or calculates an identity value. Editing it changes how ISC derives that value; it doesn't directly edit HR.

In this hypothetical example, HR-Production is authoritative for Employees. HR account hr-record and Directory-Production account directory-user are correctly attached to the same identity.

**Account correlation** is the matching and association of accounts with their intended identities. That relationship and the governing profile are already correct here.

The main identity has the required information, and there is only the intended ordinary directory account in the main case. Additional accounts are a later variation.

| Item | Supplied current state or proposal |
|---|---|
| HR account hr-record | departmentCode ENG, the approved employment code. |
| Directory account directory-user | department Engineering, the existing descriptive label. |
| Current Employees mapping | Reads directory department; applied identity Department is Engineering. |
| Proposed mapping | Reads HR departmentCode; proposed identity output is ENG. |
| Enabled Engineering Worker role | Automatic membership requires identity Department equal to Engineering; no other condition provides a match in the risk example. |
| Directory attribute synchronization | Enabled for department, directly mapped from identity Department in its Create Account definition; provisioning and the update operation are supported. |

ENG and Engineering represent the same department under the example agreement. They aren't the same text.

Approval of the HR code doesn't establish that every existing comparison, report or receiving system can use it. Agree the new representation with the owners of those consumers too.

## Follow each use of Department

A **consumer** is a process or system using a value. A **dependency** means its result relies on that value or the configuration producing it.

A **role** groups access requirements and can assign them through membership criteria. An **access profile** bundles **entitlements**, represented permissions or memberships, on one source. A role can contain access profiles and direct entitlements.

When an automatically assigned role no longer meets its criteria, ISC reevaluates the assignment and associated access. That doesn't establish that every corresponding target permission has already changed.

**Provisioning** performs supported account or access changes. The **target system** is the external recipient of an attempted change.

**Attribute synchronization** is a configured identity-to-account write path. It keeps selected account fields aligned with mapped identity values. It isn't automatically enabled because fields have similar names.

A **Create Account definition** specifies how source account fields are populated during creation. Attribute sync uses eligible direct identity mappings in that definition for ongoing updates to existing correlated accounts.

That direct Department mapping and existing account are supplied conditions in our example. They explain why changing identity Department can cause a directory write.

Now consider the risk of applying ENG while leaving the old role criterion unchanged:

```text
[Proposed identity Department: ENG]
     |
     +--> [Role expects Engineering]
     |    [Condition no longer matches]
     |    [Reevaluate role / access]
     |
     +--> [Configured directory sync]
          [Attempt to write ENG]
          [Verify target result]

[Engineer checks each required outcome]
```

The role branch compares ENG with Engineering. The strings differ, so that condition no longer matches even though the person's employment department is unchanged.

The sync branch attempts to deliver the new identity value to the directory. Whether that operation succeeds is another result to inspect.

These are separate consumers, not a fixed sequence between role evaluation and synchronization. One outcome can succeed while another fails. The final engineer line is human verification, not an automated backend stage.

This diagram describes an uncoordinated risk. It isn't the completed change we intend to approve.

## Coordinate the value and its consumers

For the main proposal, suppose the owners approve code ENG for both identity Department and the receiving directory field. They also approve changing Engineering Worker's condition from Engineering to ENG.

The business requirement is to preserve the intended engineering membership while changing the representation. It isn't permission to replace directory labels with codes in every project.

A **transform** is a configured calculation or lookup. No conversion is needed in this main mapping because HR already provides the approved code. Other mappings may need approved translation logic.

A **manager relationship** connects an employee identity to its manager's identity. A **lifecycle state (LCS)** is a business stage, such as active employment or termination, with configured access and account actions.

**Identity processing** evaluates identity information and configured access requirements. It can update mapped fields, evaluate manager relationships, lifecycle requirements and role membership.

After coordinated approved configuration and appropriate processing, the expected identity output is ENG and the revised role condition matches ENG. A supported directory write can then deliver ENG, subject to its own execution result.

Here is the supplied outcome for this example:

- Current identity Department is ENG.
- Engineering Worker's revised ENG condition is applied, and the role assignment remains correct.
- The manager relationship and active lifecycle result remain unchanged.
- A directory write of department ENG was attempted and denied by the target.
- Direct target evidence still shows Engineering on directory-user.

The identity and role observations establish successful identity-side results. The directory operation failed at a different boundary.

Investigate the operation's permissions and target response. Reapplying the same mapping doesn't grant the connector permission to update the directory.

Don't change correct HR data to Engineering merely to hide the receiving mismatch. Repair the approved write path, use supported recovery for the affected work and verify the target result.

No universal retry or harmless broad reprocessing is assumed. The failed operation needs its own evidence and appropriate recovery.

## Establish the full scope before saving shared logic

Employees' mapping is shared configuration. Any governed identity whose evaluated output changes can be affected, not only the identity selected for preview.

Inspect the actual governing profile, attached accounts and selected input when identifying that population.

Reused calculations can extend scope further. A **Reference transform** reuses an existing transform's logic inside another transform. If Employees and Contractors reference the same calculation, changing that calculation can affect both.

Inspect saved definitions and actual references. Similar display names don't prove shared executable logic, and an independent copy doesn't automatically change with the original.

Editing a mapping, removing a mapping and deleting a field definition are also different actions. A **custom identity attribute** is an additional field defined for the tenant, meaning the organization's ISC environment. Its definition is shared across profiles.

Deleting that definition isn't a local way to stop one profile using it. Review every dependent use before such a separate change.

Follow the relevant inputs and outputs:

- Which identities and source accounts supply the input?
- Which mapping or referenced calculation changes?
- Which other identity calculations read its output?
- Which access rules, manager relationships or business-stage calculations depend on it?
- Which reports, integrations, notifications and external writers interpret it?

This is a review of actual dependencies. Don't invent a role dependency where none exists, or overlook a writer simply because the profile screen doesn't display it.

## Check manager and lifecycle outcomes as relationships and decisions

**Manager correlation** links an employee identity to its manager's identity. It needs the profile's Manager Name mapping and source manager-correlation configuration.

A previewed manager identifier or name isn't proof that the correct relationship was established. Compare the source reference with the identity attribute used to identify the manager. Employee number and directory account identifier aren't interchangeable.

Manager correlation has its own documented profile/source resolution. Inspect the configuration actually used rather than assuming every manager lookup is just another field from the governing profile.

**Null** means no value is present. A changed non-null manager account value that cannot correlate can leave the previous manager relationship in place. A value changing to null has a different documented outcome: the manager correlation changes to null.

A retained old manager therefore doesn't prove that no new input was evaluated or that the new reference matched successfully. Inspect the actual relationship.

For lifecycle assignment, the mapped value must match the state's technical name, and the state must be enabled.

Changing a start-date, end-date or lifecycle input can change those decisions. A date-format mistake matters when it feeds an account action, even if the date looks like a minor display field.

The main example supplies an unchanged manager and active lifecycle result. Department doesn't automatically change them. Check expected unchanged outcomes as well as intended changes.

## Use Preview to test the assumptions

**Preview** evaluates proposed mappings for selected identity data. It shows whether this input produces ENG. It doesn't establish that all people have suitable inputs, the role remains correct or the directory accepted a write.

Check input freshness too. If HR hasn't published a transfer, or ISC hasn't collected it, a successful calculation can use old information.

For multiple-account cases, inspect account selection and null handling. Don't assume the newest or most familiar account supplies the value.

An empty string or literal unknown differs from null. A preview showing text doesn't approve its business meaning.

Useful cases for this change include:

| Sample condition | What needs to be established |
|---|---|
| Engineering employee with HR code ENG | Proposed ENG and retained intended engineering access under coordinated consumer logic. |
| Operations employee with code OPS | No unintended Engineering membership under the revised condition. |
| Missing or future-dated department | Approved current value and missing-value policy; future publication isn't current effectivity. |
| Multiple relevant supplying accounts | The intended account actually provides the code. |
| Identity governed by another profile | Whether its own mapping or referenced logic is affected, and its required processing scope. |
| Ordinary and administrative directory accounts | Every correlated account that attribute sync can update, not only the account visible in one preview. |

This table designs representative checks. It doesn't claim tenant testing or describe a built-in ISC test mode.

Preserve the exact previous mapping and consumer definitions, affected population, expected outputs and relevant current target state. A screenshot of a field name isn't enough to reconstruct its complete calculation or references.

User Name (uid), Work Email (email) and Last Name (lastname) still need mapped non-null values. UID must remain unique across identities. Presence alone doesn't establish all business validity.

## A limited processing request doesn't isolate the saved mapping

Choose an approved validation environment or supported controlled rollout scope.

A **canary** is a deliberately limited real rollout used to observe effects before extending a change. Previewing one identity isn't such a rollout.

Processing selected identities can limit that processing request. It doesn't make a shared mapping private to them, suspend other processing or prevent unrelated activity using the saved configuration.

Plan the transition between old and new representations. A role updated to ENG can fail to match identities still holding Engineering until their values change.

Temporarily accepting both representations is an option only with approved population meaning and testing. Leaving both accepted indefinitely can conceal defects.

Don't assume several saved edits become effective together as one indivisible change. Arrange mapping, consumer updates, processing and verification as a coordinated design, including the period when only part has taken effect.

Repeatedly processing a half-finished configuration doesn't make that transition safer.

## Distinguish saved configuration, execution and observed state

Saving persists configuration. It doesn't prove every affected identity now holds ENG.

**Apply Changes** on an identity profile initiates processing for associated identities. The role list's Apply Changes has a different documented scope: Active and Inactive (short-term) identities.

An **identity state** affects participation in ISC services and processing. It differs from lifecycle business meaning and from an external account's enabled flag. The main example supplies an Active identity state with its unchanged active lifecycle result.

Choose processing scope from the changed configuration and affected identities. Processing only Employees doesn't validate Contractors when both use referenced logic or a shared role.

Aggregation reads source data; processing evaluates information and configuration already available in ISC. Processing an old account value doesn't fetch a corrected HR export.

Identity changes during aggregation and scheduled processing can also cause evaluation. Not pressing Apply Changes yet isn't proof that saved configuration is isolated from all other activity.

In the interface, Preview represents proposed selected-data calculation. Current Identity Details shows represented identity values. Active Jobs and processing audit records help establish execution.

Provisioning Activity and account activity details show attempted external changes, results and errors. Inspect the relevant operation rather than relying on a green overall indicator.

Direct target and application evidence establishes what changed externally. Compare exact identity, account, execution and observation times when Search or reports show a different state.

A single successful status doesn't establish every one of these boundaries.

## Attribute sync has its own account and null behavior

Attribute sync applies to existing correlated accounts. It doesn't create missing accounts or update uncorrelated records through a relationship that doesn't exist.

If an identity has multiple correlated accounts on the synchronized source, attribute sync updates all of them. An ordinary-account preview isn't evidence that its administrative account is excluded.

Don't borrow another feature's account-selection behavior as protection. Review whether this writer's scope meets the actual account-class requirement.

If a mapped identity attribute becomes null, configured attribute sync propagates that null to its account attribute. Target acceptance and operation completion still need verification.

An optional identity field isn't therefore automatically safe to clear. Distinguish a mapping returning null from an omitted input or removed mapping; don't assume they behave identically.

Also check data direction. Reading a receiving account into the identity and synchronizing it back can conceal the approved origin behind two matching copies.

## Restoring the old mapping can read a changed input

Consider a separate variation. Here the new directory write succeeded, and its updated account value was collected.

Before the change, the old mapping read Engineering from the directory. After successful synchronization and collection, that same selected field contains ENG.

Restoring the old mapping now reads ENG.

```text
Before:
[Directory Engineering -> old mapping]
[Identity Department Engineering]

Separate successful-write variation:
[HR ENG -> identity ENG -> directory ENG]
[Changed directory value collected]

Old mapping restored:
[Directory now ENG -> old mapping]
[Identity Department ENG]

[Recovery needs more than old config]
```

The mapping definition is old; its input isn't. That is why the old identity label doesn't return.

This variation is separate from the main denied-write outcome. It requires both successful target change and collection of that changed value. The arrows show dependencies, not an automated rollback feature.

A **rollback** restores earlier configuration or state. Restoring a mapping is configuration rollback, not guaranteed reversal of completed writes, role transitions, notifications or actions taken while access was different.

**Compensating changes** are new approved actions correcting earlier effects. They don't erase the fact those effects occurred.

Identify completed, failed and unresolved operations. Preserve evidence, coordinate writers and reconcile intended source values, consumers and targets before recovery.

Don't blindly restore a snapshot over legitimate business changes made during the incident. If an account was deleted, a restored mapping cannot recover all its previous content and history; use the actual target's supported recovery procedure.

## Test the decisions against changed evidence

### 1. The code is correct, but the comparison is old

Department evaluates to ENG. Engineering Worker still requires Engineering, and no other condition matches.

Is the new value alone enough to approve the change?

**Worked reasoning:** No. It changes that comparison's result. Coordinate the approved representation and role logic, including a negative OPS case. Correct calculation doesn't certify intended access.

### 2. One preview is correct

Other Employees identities have missing codes or multiple supplying accounts that haven't been checked.

Is profile-wide application validated?

**Worked reasoning:** No. Check representative input assumptions, selection, missing-value behavior and affected population. Preview doesn't isolate the shared mapping.

### 3. The administrative account was overlooked

Both directory-user and directory-admin are correlated to the identity on Directory-Production. Department sync is enabled.

Is only directory-user affected?

**Worked reasoning:** No. Attribute sync updates all correlated accounts on that source. Review the approved account-class requirements and actual writer configuration.

### 4. An optional mapped value becomes null

An optional identity field now returns null. It is configured for sync to an existing correlated account.

Does optional status prevent a write?

**Worked reasoning:** No. Mapped null is propagated under configured sync. Inspect the target attempt/result and approved handling; optional doesn't mean harmless.

### 5. The target denied the write

Identity Department is ENG, target Department remains Engineering, and operation evidence records denial.

Should the team keep editing the mapping?

**Worked reasoning:** No. Investigate approved operation permissions and target response, recover supported affected work and verify delivery. Don't alter correct HR data to conceal failure.

### 6. The previous manager remains

A changed non-null manager input cannot correlate. The identity still has its previous manager.

Does that prove the new input wasn't evaluated?

**Worked reasoning:** No. Documented mismatch behavior can retain the existing manager. Inspect the input, configuration and relationship; retention doesn't establish a successful new match either.

### 7. Another profile references the same calculation

Employees and Contractors use Reference transforms reusing one calculation. That calculation is edited for an employee requirement.

Is it automatically employee-only?

**Worked reasoning:** No. Identify actual references, expected outputs and processing scopes. An independent copy needs different evidence, so inspect definitions rather than assuming sharing or isolation.

### 8. The old mapping returns the new value

The directory received ENG successfully, and ISC collected it. The old directory-based mapping is restored.

Why doesn't Engineering return?

**Worked reasoning:** The old definition now reads changed input ENG. Reconcile approved inputs, writers, consumer definitions and completed effects before planning compensating recovery.

## Apply the review to a contract end date

A team proposes replacing an approved current contract-date input with a field containing a proposed extension.

What would you establish before applying it?

**Worked reasoning:** Confirm which field means approved current end date and which is an unapproved proposal. Inspect publication timing, collected input, date format and time zone.

Find the calculations and processes that use the mapped date, including lifecycle decisions and access removal. Test an approved extension, unapproved proposal, missing date, future change and already-expired contractor.

A previewed date is one result. Expected lifecycle decisions and separate access actions need their own evidence.

Plan action-specific recovery if the wrong date already caused an account change. Restoring configuration can recalculate identity information without reversing everything initiated under it.

Explain the approved input, resulting value, affected population, consumer interpretation, possible operations and evidence of completion. That makes the change reviewable beyond the field opened on the screen.
