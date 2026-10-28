# The profile changed. What happens to people who already have it?

An employee can read stock records and enter receipts. The business now wants receiving staff to add notes about delivery discrepancies.

An administrator adds that permission to the existing access profile in SailPoint Identity Security Cloud (ISC). The profile keeps its identifier and familiar name.

Will everyone who already had the profile receive the new permission?

The answer depends on what currently requires that person's access. A role requirement, an earlier request for the profile and recognition of an existing combination do not have identical change behavior.

The records, rules, configurations, times and outcomes below are hypothetical. Each representative person has one correctly associated account on the source. The example uses standing access, without a separate just-in-time activation requirement.

## Identify the exact difference in the package

An **entitlement** represents source access, such as a group membership. An **access profile** is a named bundle of related entitlements from one source.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading data and, where supported and configured, making changes.

Here, Stock Production supports reading accounts and groups and adding or removing the memberships used below. A **permission** allows an action on a resource. A **group** collects members, such as accounts, and its native rules can give those accounts permissions. **Native** means belonging to the external application itself.

The application contact confirms these meanings:

| Group | Native capability |
|---|---|
| Stock Readers | Read stock records within the account's assigned site |
| Receipt Entry | Enter receipts within the assigned site when the same account also has Readers |
| Discrepancy Notes | Add notes within the assigned site when the same account also has Readers; does not approve stock adjustments |

An **identity** is ISC's representation of a person or another entity. An **account** is the external record through which that person uses the application. **Account correlation** matches and associates a source account with the appropriate ISC identity.

The selected accounts are correctly associated, enabled and able to sign in. Each has an assigned site; the role-holder account we will investigate uses North. Those application conditions still matter after access is delivered.

The profile is **Stock receiving**. A **reference** points to another record. Its initial entitlement references identify Readers and Receipt Entry; the proposed edit adds the represented Discrepancy Notes entitlement.

The difference is precise: two required items become three. Nothing is removed in this first change.

The profile's ISC identifier identifies the existing record through the edit. Its unchanged name does not tell you whether the entitlement list changed. Inspect the exact references and source behind the selections, not just labels or an entry count.

## Check where the profile is used and who currently holds it

You need two inventories.

Configurations using the profile are its **consumers** in this discussion. Identities associated with it are its **holders**. These words describe relationships, not additional ISC object types.

A consumer inventory finds dependencies, including a configuration that might select more people tomorrow. A holder inventory finds current people and their reasons for having the profile.

An **assignment origin** is the mechanism through which the access association or requirement arose.

An **ISC role** groups access for a business responsibility. An automatically assigned role can use configured criteria or an identity list to select identities. A role can also be granted through a request.

A **lifecycle state** describes an identity's organizational stage and can carry access requirements. Its governing **identity profile** configures how the population's identity values and lifecycle behavior are managed; it is different from an access profile.

An **access request** asks for an access item for a recipient. An **approval** is the decision that the request may proceed. The source changes that deliver it are separate.

**Access-profile detection** recognizes during identity evaluation that a person already holds the full profile entitlement set. Recognition does not establish that ISC originally granted those native rights.

Let's compare four representative holders:

- The current role holder receives Stock receiving through the enabled Receiving clerk role and still meets its assignment criteria.
- The current lifecycle holder receives it through an enabled lifecycle state's access requirement, which still applies.
- The previous direct-request holder received the profile through a completed request for Stock receiving itself.
- The detected holder already had the original pair; ISC recognized that combination and associated the profile.

Initially, all four accounts hold Readers and Entry, none has Notes, and the recorded memberships are current. The profile and relevant roles/states are enabled for their configured use. No concurrent assignment change or other grant supplies Notes.

A current access list can make these people look alike. Their current requirements and origins explain why an edit affects them differently.

## Why the addition does not produce one result for everyone

**Identity processing** evaluates an identity and relevant access-model configuration. **Provisioning** carries out account or access changes through a supported integration or manual process.

For the current role and lifecycle holders, the ongoing requirement uses the revised bundle. Notes becomes part of what that requirement calls for. Provisioning must deliver it, and its result needs checking.

A completed direct request for the profile itself does not automatically become a requirement to deliver every future addition. Detection is also recognition of a set already held, not a continuing instruction to top up the account.

| Current reason for holding the profile | Effect of adding standing Notes |
|---|---|
| Applicable role requirement | The new entitlement is provisioned to enforce that requirement; native success is separate evidence |
| Applicable lifecycle requirement | The new entitlement is provisioned to enforce that requirement; native success is separate evidence |
| Previous direct request for this profile | No automatic addition from this edit; the revised full set is required to retain the profile on evaluation |
| Detection only | No automatic addition from this edit; the revised full set is required to retain the profile on evaluation |

For the last two accounts, Notes is absent, so the revised three-item set is incomplete. The profile association is no longer retained after relevant evaluation.

That does not mean Readers and Entry were removed. The definition changed; the accounts can still retain the old native pair and perform the original work.

Change one fact: suppose the detected holder already acquired Notes independently, and ISC has current, correctly linked evidence of all three. The revised full set is present, so retaining the profile does not require a new Notes grant from the edit.

Also distinguish a requested role from a requested profile. Someone who requested a role containing Stock receiving holds this profile through that current role. A request appearing somewhere in history does not put them into the previous-direct-profile-request row.

```text
Revised bundle: Readers + Entry + Notes
                  |
          relevant evaluation
                  |
+-- Current role/lifecycle requirement
|   Provision Notes; verify result
|
+-- Past direct profile request
    or detection only
    No automatic Notes addition
    Revised full set already held?
      Yes: retain profile
      No: lose profile association
          old native rights can remain
```

The paths summarize this comparison's dependencies. They are not private engine stages, equal-duration operations or a promise that every account completes together. “Past profile request” means a request for the profile itself.

The expectation concerns standing entitlements. A just-in-time entitlement has separate activation behavior; availability for activation is different from an immediately usable native membership.

## Save the definition, apply it, then inspect the account operations

Saving records the revised configuration. It does not establish that affected identities were evaluated or source writes succeeded.

The profile-list Apply Changes action starts relevant identity processing. Its list-page scope includes identities in ISC's **Active** or **Inactive (short-term)** processing status, rather than **Inactive (long-term)**.

These statuses describe ISC's processing state. They are distinct from an application's account-enabled flag and from the organizational lifecycle requirement selecting access. All four representative identities here are Active.

The role, profile and application configurations are processed together through these list-page actions. Review other saved changes and the affected population. Opening one person's record does not isolate a shared profile edit to that person.

An **integration credential** is the account or authorization used by the connector for source operations.

Use these supplied observations from the same day, in UTC:

- **10:00:** The three-item definition is saved.
- **10:05:** The administrator starts the reviewed processing.
- **10:12:** The role holder's Notes-add operation is rejected because the integration credential lacks the required update permission for that specific account.
- **10:14:** The lifecycle holder's separate Notes addition is reported successful.
- **10:20:** Fresh native checks show the role account still has Readers and Entry only. The lifecycle account has all three and can add a note within its assigned site.

The missing permission is explicitly scoped to the role-holder account here, so the other account's success is not contradictory.

The successful lifecycle path completes the chain: the current requirement includes the revised profile, processing evaluates that requirement, provisioning supplies the membership, and native evidence plus the intended action confirm the selected result.

The role-holder path has a different result. The requirement exists, but the recorded addition failed. Reediting the bundle does not explain or repair the credential permission.

Under an approved account-specific permission correction and supported recovery, a later native check confirms Notes on that account. A North-site note succeeds, while South-site use and adjustment approval remain denied. No other relevant native rights, account or application-policy changes occurred in this recovery example.

The observations are not fixed latency or retry guarantees. They establish separate account outcomes, not success for the whole population.

Preserve source, identity, account, entitlement, operation, result and time when investigating. A **manual provisioning task** asks a person to carry out a source change; where that is the supported path, inspect its actual completion and native result instead of assuming a connector write.

## A description change and an entitlement change answer different questions

Renaming the package Stock receiving and discrepancy notes changes its explanation. Adding the Notes reference changes its contents.

A description promising Notes cannot supply a missing entitlement reference. An added reference with unchanged old wording can instead leave reviewers misunderstanding an expanded package.

**Metadata** is descriptive or governance information about an object. The **profile owner** is recorded as responsible for maintaining the package. Name, description and ownership changes can affect meaning and configured responsibilities without changing the native permission list.

Other fields need their own impact review. Request settings control a direct request route; account-selection configuration can affect where supported provisioning targets access. Calling every non-entitlement edit “cosmetic” would hide those effects.

Also inspect native permission meaning under unchanged references. If the application changes Readers to include stock-adjustment approval, the saved list can remain identical while the actual capability broadens.

Compare references to establish which represented objects changed. Check native permission evidence to establish what those objects allow.

## Removing an item needs another set of conditions

Start an independent removal example from a confirmed three-item profile and accounts holding all three groups. Receipt Entry is no longer required. The revised profile contains Readers and Notes.

First establish the configuration: **Enable Role Access Removal Propagation is off**.

This organization-level setting controls supported removal after specified role access-definition changes. **Deprovisioning** means removing native access.

With propagation off in this example and no other removal action, deleting the Entry reference does not reclaim the existing Entry membership. It can remain independently held, detached from the revised bundle.

“Independent” describes its relationship to the package. It does not mean justified, harmless or impossible to remove.

The role holder can therefore satisfy Readers plus Notes and still retain Entry. If the business wanted receipt entry to stop, editing the definition has not established that outcome.

Now change the setting in a separate variation. With propagation on, removing an entitlement from a profile associated with an enabled role is a documented removal path.

The role must be enabled for that access change to propagate. An edit made while the role was disabled is not simply replayed by enabling it later. The removal setting also does not control additions.

This is why “profile edits never remove native access” and “removing any reference always removes everyone's rights” are both unreliable predictions.

Inspect the applicable path, role state, setting, account and other access requirements. Access also required by another role needs consideration; a profile label alone does not describe all dependencies.

Then distinguish the outcomes: the definition excludes Entry, an applicable process attempts removal, and current native evidence confirms whether Entry is gone. The first fact does not prove the others.

## Restoring the old definition may leave completed grants behind

Return to the addition example, with removal propagation off. Notes has now been delivered to the role account after the approved recovery.

A later review decides that only discrepancy specialists should have Notes. The administrator restores the original definition, Readers and Entry.

A **rollback** reverses a change. Restoring saved configuration reverses the reference-list edit, but under these conditions it does not reverse the completed Notes grant.

```text
Profile: Readers + Entry
          |
          | add Notes to definition
          v
Notes delivered to an account
          |
          | restore old definition
          v
Removal propagation OFF here
Profile: Readers + Entry
Account: Readers + Entry + Notes
          |
          v
Assess authorized corrective removal
          |
          v
Verify native rights and capability
```

The restored profile has the old pair. The account can still hold all three until an applicable removal action removes Notes.

A **compensating action** is an authorized correction addressing effects that have already occurred. Here it may require removing an actual Notes grant, after checking whether another valid requirement needs it.

Do not remove Notes from everybody who currently holds it merely because this change added Notes to the profile. Separate accounts that received it from this change, failed to receive it, were never selected, or already held it for another valid reason.

Their before-state and delivery evidence identify what needs reversing. A restored definition by itself cannot make that distinction.

If an applicable enabled-role path has propagation on, reassess its expected removal behavior instead of importing this off-setting result.

## Assess the shared population before applying the edit

Suppose a change ticket mentions one employee, but 180 identities hold the profile. That count begins the assessment; it does not tell you 180 identical outcomes.

Identify the exact profile and compare before/after references, source, native meanings, approved work and exclusions.

Inventory both configurations using it and current holders. Classify current requirements and origins, keeping mixed-origin or unknown cases visible. Today's holder list alone can miss people a configured role will select later.

Predict outcomes separately: required addition, no automatic addition, loss of an incomplete profile association, retained old membership, or removal dependent on a supported enabled-role propagation path.

Keep expected results separate from observed results. “Requires Notes” and “native Notes membership confirmed” belong in different parts of the change evidence.

Agree the application scope and review other saved configuration changes. A request for a small pilot does not make a shared definition edit a one-person change. A separately designed pilot needs its own controlled configuration and approval.

After application, reconcile the intended identities and selected accounts against actual operation and native results. Include exceptions rather than only a success total.

If origin or earlier approval is unknown, identify the missing evidence. A current screenshot cannot reconstruct the original grant or establish which effect should be undone.

## Work through the changed conditions

### 1. The description promises Notes, but the list still has two items

The wording says reading, receipt entry and discrepancy notes. The saved references contain only Readers and Entry. The role holder cannot add notes.

What should you establish before investigating a failed Notes write?

**Reasoning:** Confirm the approved work and exact configured references. The wording and contents disagree. Do not diagnose failed delivery before establishing that Notes was part of the requirement.

### 2. The role applies, but its source operation fails

The employee still holds the current Receiving clerk role. The revised profile includes Notes, but the account-specific addition reports missing credential permission.

Does that require removing and readding the profile?

**Reasoning:** The requirement exists; delivery failed for the recorded operation. Investigate that account and permission, obtain an approved correction, use supported recovery and verify native results. Recreating the association is not an explanation of the failure.

### 3. The old direct profile request succeeded

A holder received the original pair through a completed request last month. Notes is added today; no other requirement supplies it.

Does that earlier success deliver Notes now?

**Reasoning:** No. This direct-profile-request origin does not automatically receive the later addition. Without Notes, the revised set is incomplete after evaluation, while the old native pair can remain.

### 4. The detected holder already has the larger set

The detected holder acquired Notes independently before the edit. Current, correctly linked records show all three on their only account.

Does retaining the revised profile prove this edit granted Notes?

**Reasoning:** No. The full revised set was already held. Use actual grant evidence to establish origin rather than the profile's continued appearance.

### 5. Entry is removed with propagation off

The account holds all three groups. Entry is removed from the definition, propagation is off and no other removal occurs.

Has receipt-entry capability been reclaimed?

**Reasoning:** No. The native membership can remain independently held. If withdrawal is intended, assess the appropriate authorized removal path and verify the native action outcome.

### 6. The enabled-role removal path has propagation on

In a separate variation, propagation is on, the profile is associated with an enabled role, and Entry is removed. No other role requires Entry.

Is this the same retention case as the off-setting example?

**Reasoning:** No. This is a documented role-change removal path. Follow relevant evaluation, the actual account operation and native result. An edit made while the role was disabled would not be replayed merely by later enablement.

### 7. An unchanged reference now permits approval

The profile references are unchanged. The application team modifies Readers to permit adjustment approval as well as reading.

Does an unchanged list establish unchanged capability?

**Reasoning:** No. Confirm the native change, affected holders and approved duties. A name or description edit cannot remove the broadened permission; the justified access design needs attention.

### 8. The definition is restored after partial delivery

Notes succeeded for 12 accounts and failed for three. The original pair is restored, propagation is off and no corrective account action has occurred.

Can all 15 accounts be reported as restored?

**Reasoning:** No. Separate the actual grants from failed attempts. Assess the 12 successful additions and any independent requirements, then verify each required compensating removal. Do not count a failed addition as a grant later undone.

## Apply the reasoning to a license change

A **license** gives an account the right to use a product or feature set under an application's licensing model.

A design profile contains a project-reader group. The proposal adds a paid Editor license. An enabled role currently requires the profile for 20 people.

Another ten hold it only through completed direct requests for the profile itself. None of the 30 accounts currently holds Editor. The integration supports its assignment, recorded access is current and no other route grants it. Available license capacity is unknown.

Which population has a requirement for Editor, and what would establish successful delivery?

**Reasoning:** The 20 role holders require additions. They are not 20 confirmed successful licenses. The ten previous direct-profile-request holders do not automatically receive the addition and, without Editor, fail the revised full-set condition after evaluation.

Unknown capacity prevents a promise that every required addition succeeds. Reconcile per-account operation results, native license assignments and relevant application conditions.

Now remove the license reference with role removal propagation off. Does that establish reclaimed capacity?

No. Confirm which licenses were actually delivered, assess applicable authorized removals and check native assignments and resulting capacity. Reference removal alone does not establish reclamation.

Exact definition, current requirement, relevant evaluation, account operation and native outcome remain separate evidence even when the entitlement type changes.
