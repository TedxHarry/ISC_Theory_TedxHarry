# If two profiles share an entitlement, what does revoking one remove?

An employee is finishing case note-taking but must continue exporting evidence from their assigned queue.

Their access appears as two packages in SailPoint Identity Security Cloud (ISC). Case review includes reading and notes. Evidence export includes reading and export. Both reference the same reader entitlement.

An administrator proposes revoking Case review.

Will Evidence export protect the shared reading access?

To answer, follow the exact access references, current requirements and native account. Two package names do not necessarily behave as independent permission switches.

The records, permissions, configurations and observations below are hypothetical. The main case uses one correctly associated account, current holdings and standing access, without a separate just-in-time activation requirement.

## Identify the shared access before choosing the removal

An **identity** is ISC's representation of a person or another entity. An **account** is the external record through which that entity uses a system. **Account correlation** matches and associates a source account with the appropriate identity.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

Cases Production is our source. Its supplied integration can read and change the memberships used here.

A **group** collects members, such as accounts. A **permission** allows an action on a resource; application rules can use memberships to grant permissions. **Native** means belonging to the external application itself.

| Native group | Confirmed permission |
|---|---|
| Case Readers | Read cases within the account's assigned queue |
| Review Notes | Add notes within that queue when the same account also has Readers |
| Evidence Export | Export evidence within that queue when the same account also has Readers |

The employee's account is enabled, sign-in succeeds and its assigned queue is North. It currently has all three memberships. ISC's recorded account holdings agree. No administration or all-queue permission is supplied.

An **entitlement** represents source access, such as one of these memberships. An **access profile** is a named bundle of related entitlements from one source.

Case review references Readers and Notes. Evidence export references Readers and Export.

A **reference** points to another record. ISC identifies the represented entitlement record separately from the native group's own identifier. Here, both profile references point to the same Readers record, representing the same native group on the same source.

An **entitlement type** identifies a kind of source access object; the objects here are groups. Verify that context as well as the exact record.

Similar display names pointing to different records would not establish this overlap.

There are four profile-to-entitlement references but three distinct access items. The account has one Readers membership, not a separate Readers membership for each profile. A count of references is also not a count of source operations.

## Establish why the profiles are held

An **access request** asks for an access item for a recipient. Both profiles here came from completed requests for the profiles themselves.

An **ISC role** groups access for a broader business requirement. A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements.

Neither profile is role-derived in the main example. No lifecycle requirement, other grant or concurrent change affects the result. Both profiles are enabled for supported use.

That scope matters. The documented comparison for two profiles outside roles differs from retention under a current role requirement.

**Revocation** withdraws access through the applicable removal process. **Provisioning** carries out supported account or access changes; **deprovisioning** is its removal side.

For these two non-role profiles, revoking Case review removes its entitlements, including the shared Readers entitlement. Evidence export does not protect Readers merely by referencing it.

## Follow a fulfilled revocation into the native account

An **access removal request** asks for specified access to be withdrawn. An **approval** is a decision that the request may proceed.

A revocation control depends on the assignment being revocable and the actor having the relevant authority. A submission confirmation establishes submission, not disappeared memberships.

Use these supplied observations from the same day, in UTC:

- **14:00:** The authorized administrator submits Case review's revocation.
- **14:04:** The configured removal approval completes.
- **14:09:** Activity reports successful Readers and Notes removals for the selected account.
- **14:12:** Fresh native checks confirm Readers and Notes absent, Export still present, and North evidence export denied.

The intended removal was fulfilled, but it interrupted work that was meant to continue.

```text
Case review: Readers + Notes
Evidence export: Readers + Export
  Same Readers entitlement reference

Account: Readers + Notes + Export
             |
             | revoke Case review
             | removals succeed
             v
Account: Export only
  Evidence export is incomplete
  Its profile association is lost
  Its Export membership remains

No other requirement in this example.
```

The upper lines identify one shared reference. The downward path shows the stated fulfilled removal and resulting account, not a private engine sequence or an all-or-nothing transaction guarantee.

Readers and Notes are gone because they belonged to the revoked profile. Evidence export now lacks one of its required items, so its association is lost too. Its unique Export entitlement remains individually held.

Only Case review was explicitly revoked. Evidence export became incomplete; its nonshared entitlement was not removed.

This is why “both profiles were fully revoked” would hide residual access. “Only the first label disappeared” would instead hide the actual membership removal and service interruption.

**Access-profile detection** recognizes during identity evaluation that an identity already holds a profile's complete set. The same non-role overlap behavior applies if Case review was detected rather than obtained through a provisioning route. Detected access is not automatically label-only cleanup when revoked.

## The residual membership and working capability are different evidence

Export remains, but the native rule requires Readers on that same account. Without Readers, the account cannot export, read cases or add notes.

**Authorization** is the application's allow-or-deny decision for an action on a resource. Here it depends on memberships, enabled account, successful sign-in and queue scope.

The actual outcome is Export-only membership and no working export. The intended outcome was Readers plus Export, with Notes removed.

A denied export is not evidence that the Export membership disappeared. If Readers is restored through an approved route, that existing Export membership can become effective again without another Export grant.

That can be appropriate service recovery here, but it is an effect to recognize and verify.

If exports must continue, establish a valid continuing reading requirement and controlled transition. If exports must end too, assess the residual membership and its authorized removal.

In another application, the leftover right could work independently. Use its verified native rules rather than assuming every residual entitlement becomes harmless when a companion is removed.

## Change one condition: a current role requires Readers

Consider an independent variation.

The employee still has the two profiles outside roles, but also holds the enabled Queue analyst role. That role directly requires Readers throughout the removal. It does not require Notes.

The documented role-overlap behavior retains access required by a current role when an overlapping profile is revoked.

Case review's revocation therefore removes Notes while Readers is retained. Export is not in the revoked profile and remains. Evidence export still has its complete pair.

In this supplied successful variation, native checks confirm Readers and Export, Notes absent. North export succeeds and note entry is denied.

```text
Independent current-role variation
  Queue analyst still requires Readers
  Revoked Case review: Readers + Notes
                 |
                 | fulfilled revocation
                 v
  Readers retained; Notes removed
  Export remains on account
                 |
                 v
  Evidence export stays complete
  North export works; notes denied
```

The inputs identify the changed requirement; the result is the stated fulfilled revocation under that condition. This is not a description of whether an implementation skips a write, retries one, or uses a particular internal service.

The reason the answer changed is the current role requirement, not simply the number of objects mentioning Readers.

A role definition existing somewhere is insufficient. Check that the role is assigned to this identity and currently requires the exact right on the relevant account.

Do not infer a universal reference-count rule in which every entitlement stays until the last access-model reference disappears. The original direct-profile comparison already produces a different result.

## A role-held profile has another governing removal path

Now change the situation again: Case review itself comes through role membership.

That profile cannot be directly deprovisioned as an independent profile grant while the role governs it. Inspect the role assignment and approved work requirement.

An automatically assigned role can use **membership criteria**, configured conditions selecting identities, or a configured identity list. Check the actual inputs and selection. An ordinary revocation request does not replace correction of an automatic requirement.

For a requested role, inspect its revocable assignment and the authorized role-removal process.

Do not falsify department or job information to make a valid rule stop matching. Determine whether the person's requirement, the rule or an approved exception needs correction.

Also distinguish removing one role assignment from editing a shared role definition. Editing shared contents can affect other people, even if the ticket mentions only one employee.

**Role access removal propagation** controls supported removal after specified role-definition changes. It is not a master switch disabling every explicit access revocation. A directly held profile can still be explicitly revoked when that separate setting is off.

When planning role removal, include other assigned roles and retained work. Another role can still require an entitlement; removing one assignment is not automatically withdrawal of everything it mentions.

## A lifecycle requirement can explain a later regrant

A lifecycle state can require a profile while the identity remains in that state. Its governing **identity profile** configures the population's identity values and lifecycle behavior; it is different from an access profile.

If the profile is removed but that current requirement continues, the access can be provisioned again.

Separate the observations: a removal may succeed, then a later operation restores access because a requirement still applies. That is different from the original removal never having happened.

Inspect current lifecycle configuration and the later activity before blaming a rejected removal or guessing a connector retry.

The main non-role comparison excluded lifecycle requirements. This separate enforcement rule does not justify inventing a universal mixed-origin overlap algorithm. Inspect actual requirements and the applicable removal path.

## Partial fulfillment needs per-entitlement evidence

Return to the original direct-profile setup, but change the delivery result.

Notes removal succeeds. Readers removal is rejected because the integration lacks permission to change that membership on this account.

An **integration credential** is the account or authorization the connector uses for source operations. Confirm the actual operation's permission defect rather than inferring it from the profile label.

Fresh native evidence now shows Readers and Export, without Notes. Export can still work because its dependency remains. Note-taking has stopped, but the requested Readers removal did not complete.

Do not use an overall activity label to infer every entitlement's result. Inspect exact source, account, operation and error.

A **manual provisioning task** asks a person to carry out a required source change. If that is the supported delivery path, task completion and native outcome need checking separately.

**Account aggregation** reads external account data, including supported access holdings, into ISC. **Identity processing** evaluates available identity information and relevant access-model configuration. Neither is the native write performed by deprovisioning.

A record collected before 14:09 cannot establish the 14:12 native state. Likewise, an old profile view cannot establish that removal failed. Compare observation times, relevant collection and evaluation, and actual current memberships without assuming one universal refresh delay.

## Name the operation rather than saying “remove the profile”

| Operation or condition | What changes the conclusion |
|---|---|
| Revoke one directly held profile while another non-role profile overlaps | Shared rights can be removed; the other profile can become incomplete while unique rights remain |
| Revoke while a current assigned role requires the overlap | Role-required access is retained; inspect other rights individually |
| Profile itself is held through a role | The governing role assignment is not an independent direct-profile grant |
| Disable a profile definition | Pauses its use and removes associations after relevant evaluation, without itself deprovisioning existing rights |
| Remove a reference from the shared definition | Changes the bundle; applicable enabled-role removal propagation may affect native removal |
| Current lifecycle state still requires the profile | Enforcement can produce later provisioning; a one-time removal does not end the requirement |

A definition edit can affect many holders. A revocation concerns one identity's access, but its shared-entitlement effects can interrupt other work on that account.

Specify the object, operation, intended withdrawal and retained capability. The phrase “remove the profile” does not tell you which of these mechanisms is intended.

## Design the withdrawal around what must remain

Write the goal first: keep North case reading and evidence export, stop notes.

Then identify exact profile references, actual account, current requirements and origins. A multiple-account arrangement needs its own account-scope evidence before applying this one-account result.

Predict both the removal set and retained application dependencies. If the prediction interrupts approved work, revise the controlled design and transition plan before execution.

A future design could model Readers as justified baseline access, with Notes and Export as separate optional packages. A Notes-only profile would contain no Readers reference to withdraw, provided the baseline remains valid and native dependencies are satisfied.

That does not make migration from the current design automatically safe. Adding a new directly held Readers-only profile and then revoking old Case review still creates non-role overlap. The new profile alone does not protect Readers during that transition.

Splitting profiles can clarify purpose, but the removal mechanism and transition still need assessment. There is no universal split that makes every existing overlap safe.

A legitimate continuing role can express real requirements. Creating a dummy role only to defeat removal leaves ownership, membership and maintenance obligations without a sound business model.

After an interruption, distinguish service recovery from cleanup. Approved restoration of Readers may reactivate Export already on the account. Verify both the restored task and intended Notes withdrawal, then assess any residual access.

Close the change when withdrawn permissions, retained work and remaining native memberships agree with the approved result. A request number or disappearing label is insufficient.

## Test the changed conditions

### 1. Two direct profiles share Readers

Case review contains Readers and Notes; Evidence export contains Readers and Export. Both are held outside roles. No other requirement applies, and both removals for Case review succeed.

What remains, and does export work?

**Reasoning:** Readers and Notes are removed. Evidence export becomes incomplete and loses association, while Export remains individually. Export fails under the supplied Reader dependency. The second direct profile did not protect the overlap.

### 2. A current role requires only Readers

The same profiles exist, but an assigned role requires Readers throughout. Notes has no continuing requirement, and its removal succeeds.

Does the original Export-only result still apply?

**Reasoning:** No. Role-required Readers is retained; Notes is removed and Export remains. The export profile stays complete. Verify North export and denied note entry. A role name without an actual assigned requirement would not establish this result.

### 3. Case review was detected

Case review was recognized from existing memberships. No role/lifecycle requirement applies; its revocation is authorized and fulfilled.

Is that only deletion of a detected label?

**Reasoning:** No. Apply the stated non-role removal behavior and inspect native rights. Detection explains recognition, not a guarantee that revocation leaves memberships untouched or evidence of original approval.

### 4. The profile is not directly revocable

Case review is granted through a role. The profile details show it is not directly revocable, and the role requirement remains valid.

Should you seek another control to bypass it?

**Reasoning:** No. Examine whether the approved role assignment should continue and assess the appropriate assignment/design correction if needed. Include the rest of the role's access rather than treating it as an independent profile grant.

### 5. One membership removal fails

Notes removal succeeds; Readers removal fails. Current native evidence shows Readers and Export, Notes absent.

Has the whole requested removal succeeded because note-taking stopped?

**Reasoning:** No. The Readers operation remains incomplete. Export's required pair remains and can work. Preserve the exact rejected operation and reason; a missing profile view does not establish Reader removal.

### 6. The names match but the records do not

Case review references Production Readers. The other profile references a different same-source reader object with a similar name. No entitlement references overlap.

Should matching names produce the shared-entitlement prediction?

**Reasoning:** No. Compare source, type and exact references, then native dependencies. If no required right of the other profile changes and its complete set remains, this shared-reference mechanism does not make it incomplete. Names alone establish neither identical access nor the complete target outcome.

### 7. The definition was disabled, not revoked

After disablement and evaluation, Case review is no longer associated with the identity. No native membership removal occurred.

Has Notes been withdrawn?

**Reasoning:** No. Disablement and revocation differ. Inspect current memberships and use the appropriate authorized removal if withdrawal is required.

### 8. Access returns after a successful removal

Separate native observations establish removal followed by later additions. The current lifecycle state still requires the enabled profile.

Must the original removal have failed?

**Reasoning:** No. Inspect later provisioning and the continuing requirement. Earlier withdrawal can succeed before enforcement restores access. Lasting withdrawal needs an approved requirement correction, not repeated membership deletion without addressing the cause.

## Transfer the reasoning to a paid license

A **license** gives an account the right to use a product or feature set under the application's licensing model.

A reporting source has two directly held standing profiles:

- Report design: Editor license and Draft Authors.
- Report publishing: Editor license and Publishers.

One account holds all three rights. No role, lifecycle requirement or other grant applies. Publishing requires Editor plus Publishers.

The approved goal is to stop draft authoring while retaining publishing. Someone expects Report publishing to protect Editor when Report design is revoked.

What does successful removal leave, and what must be verified?

**Reasoning:** The non-role overlap behavior removes Editor and Draft Authors. Report publishing becomes incomplete. Publishers remains individually, but publishing fails because Editor is absent.

Check the actual license operation and current native assignment, not only profile labels. If seat reclamation matters, inspect the application's reported capacity too; an ISC association alone does not establish that outcome.

In an independent variation, a valid current assigned role requires Editor. Reassess retention using that requirement. The mechanism changes the answer, not the second package's familiar name.

Before approving the transition, reconcile the intended retained work with the predicted native result. A technically successful removal can still achieve the wrong business outcome.
