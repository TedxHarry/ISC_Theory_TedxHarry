# What is actually inside this role?

A case-intake responsibility needs case reading, draft preparation, case submission and access to supporting evidence. The role's access screen shows only three entries.

That can be correct. An entry can point to a bundle, and different bundles can include the same right. To understand the access, you need to follow the references behind the entries.

In SailPoint Identity Security Cloud (ISC), a **role** groups access for a business responsibility. An **entitlement** represents access on a source, such as a group membership. An **access profile** groups related entitlements from one source.

A role can contain access profiles and entitlements directly. That gives us two paths to inspect: role to profile to entitlement, and role to entitlement.

The configuration, native rules and observations below are hypothetical. The role is a **standard role**, with the profile and entitlement contents described here. Its access is **standing**, so delivery does not wait for a separate just-in-time activation. Authorized administration and the required ISC Provisioning capability are supplied.

**Provisioning** carries out account or access changes. Having that capability does not prove that a particular application accepted a change.

## Establish what the rights actually allow

There are two applications: Cases Production and Evidence Production.

A **source** is ISC's configured representation of a system or collection of account data. A **connector** supplies the supported integration for reading information and, where supported and configured, making changes. Each application has its own source here, and both integrations support the membership reads and changes used below.

**Native** means belonging to the external application itself. A **permission** allows an action on a resource. A native **group** collects members, such as accounts; the application can use that membership to grant permissions.

An **account** is the external record through which someone uses a system. An **identity** is ISC's representation of a person or another entity. **Account correlation** matches and associates source accounts with that identity.

The intended recipient has one existing account on each source. Both are correctly associated with the identity, enabled and able to sign in. Their assigned workspace is North.

The application contacts confirm these rules:

- Cases Readers permits reading cases in the account's assigned workspace.
- Cases Drafts permits creating and editing case drafts when that same account also has Readers.
- Cases Submitters permits submitting cases when that same account also has Readers.
- Evidence Readers permits reading evidence in the Evidence account's assigned workspace. It does not permit editing or publishing.

The approved responsibility requires all four rights. Refund approval, bulk evidence export and administration are excluded.

Membership in a Cases group does not grant access to Evidence Production. Neither application's groups remove the account's workspace restriction.

Readers already exists on the Cases account. Drafts, Submitters and Evidence Readers are absent. Keep that starting state in mind: the role's full definition and the changes this account needs are different things.

## Open each entry instead of treating it as one permission

The role is named **Case intake coordinator**.

A **reference** points to another record. When a role references a profile, you follow that profile's contents to find its entitlement references. The profile does not become a new application account or a private copy of each permission.

Here are the role's immediate entries:

| Entry on the role | Referenced contents |
|---|---|
| Case preparation profile | Cases Production: Readers and Drafts |
| Case submission profile | Cases Production: the same Readers entitlement and Submitters |
| Evidence Readers entitlement | Evidence Production: the entitlement directly, without a profile wrapper |

“Immediate” means one step away from the role. There are three immediate entries: two profiles and one entitlement.

Now expand them:

1. Preparation points to Readers.
2. Preparation points to Drafts.
3. Submission points to Readers.
4. Submission points to Submitters.
5. The role points directly to Evidence Readers.

Those are five paths through the configuration, but only four distinct entitlement objects. Both Readers paths point to the same Cases entitlement.

Under the supplied native group model, the account has one Readers membership. Including that reference through two profiles does not create two memberships or stronger reading permission.

Keep both paths in your dependency notes. The repeated reference matters when reviewing which packages use Readers, even though it does not represent a second native right.

```text
Role: Case intake coordinator
|
+-- Case preparation profile
|   +-- Cases: Readers
|   +-- Cases: Drafts
|
+-- Case submission profile
|   +-- Cases: Readers (same object)
|   +-- Cases: Submitters
|
+-- Evidence: Evidence Readers
    directly included entitlement

Intended existing account holdings:
Cases: Readers + Drafts + Submitters
Evidence: Evidence Readers
```

The branches show references and profile contents. The account lines show intended holdings, including the Readers membership that already exists. They do not describe execution order or guarantee delivery.

No other ISC role is nested in this structure. Sharing some contents with another role does not make one role inherit the other. For this standard-role design, follow the actual profile and entitlement references.

The UI presents different parts of these relationships. The role's access view represents its configured entries; a profile's entitlement view represents that profile's contents. An identity's access and account views concern that identity's associations and account records.

Different counts can therefore be valid. Before comparing a screen or an application programming interface (API) response, establish what its number counts. Our three/five/four comparison explains this supplied definition; it does not prescribe every product field's counting rules.

It also does not establish the number of connector calls. Operation grouping, retries and reported activity need their own evidence.

## Check whether repeated names really mean the same object

Here, both profiles use the exact same Readers entitlement record on Cases Production.

If another entry points to a Test source, a different entitlement type or another object key, it is a different reference even if its display label says Readers.

An **identifier** distinguishes a record within its object context. A display name helps people recognize it; a familiar name alone cannot establish that two references are identical.

Trace the profile identifier, its source and its actual entitlement references. Then verify the native right represented by each entitlement.

Renaming Preparation while keeping the same profile identifier does not create a different object. Replacing its reference with another profile does change the object being used.

This distinction becomes useful when someone says, “I edited Preparation, but the role still has the old access.” The role may reference a separate, similarly named copy.

## Direct inclusion still needs delivery

Evidence Readers is directly included **inside the role**. That describes the reference path.

It does not say that someone granted it outside ISC or separately from this role. It does not bypass the connector, account selection or the source's permission checks.

An **access request** asks for an access item for a recipient. A separately requested entitlement and an entitlement directly referenced by a role are different relationships. An old grant made in the native application is another possibility. When someone says “direct access,” establish which meaning they intend.

A complete contents review checks both entry types. Looking only inside profiles would miss Evidence Readers. Looking only at the direct entitlement would miss the Cases rights behind the profiles.

## Follow the definition into the recipient's accounts

**Role assignment** associates the role with an identity through an applicable selection route.

For the main configuration, an authorized **identity list** selects this recipient: a maintained list of identities that should receive the role automatically. The role and both profiles are enabled.

Direct requests for the profiles are off under the supplied supported configuration. Role use does not require a separate request for each included profile.

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. No other role, lifecycle requirement or grant supplies the missing rights here.

**Identity processing** evaluates identity information and applicable configuration, including access requirements. The recipient is in the ISC **Active processing state**, meaning it participates in the relevant processing described here. This is different from an application's account being enabled.

The approved list selects the identity; the role defines the requirement. The existing account holdings then help establish what is missing.

Readers is already present. The missing result is Drafts and Submitters on Cases, plus Evidence Readers on Evidence. Complete delivery would let the recipient read, draft and submit North cases and read North evidence, with the excluded actions still unavailable.

The **integration actor** is the account or authorization the connector uses to perform source operations. It is distinct from the account receiving access.

That is the intended result. Now compare it with these supplied observations from one date, in Coordinated Universal Time (UTC):

- **09:00:** The role and profile definitions are saved with the three entries shown above.
- **09:10:** Relevant identity processing applies the agreed configuration and the role is assigned.
- **09:14:** Activity reports successful Drafts and Submitters additions on the Cases account.
- **09:16:** The Evidence Readers addition is rejected because the integration actor cannot modify that membership on the Evidence account.
- **09:20:** Native checks confirm Readers, Drafts and Submitters, and the North case actions work. North evidence reading is denied.

The Cases result is successful, but the business responsibility is incomplete because evidence remains unavailable. The Evidence rejection does not undo the successful Cases additions.

The entry count did not predict this result. Nor did it establish a new Readers addition: that native membership existed before assignment.

An approved correction to the integration's Evidence update permission and a supported recovery later produce Evidence Readers on the intended account. A fresh native check confirms North evidence reading. Evidence editing, publishing and bulk export remain denied; North case work still succeeds. No other relevant access or application-policy change occurred.

That establishes recovery for these accounts under the supplied conditions. It does not promise automatic rollback across sources, a fixed retry time or successful results for every identity.

Keep the exact source, account, entitlement, operation, result and observation time together. The role assignment shows the requirement's association; account activity shows attempted and reported changes; native checks establish current holdings and usable actions.

A **manual provisioning task** asks a person to make a required source change. If that is the supported fulfillment path, inspect the task and the native outcome. A role entry alone does not promise an automatic write.

Multiple accounts would add another decision: which account should receive the right? Profile account-selection configuration is not a universal routing rule for every directly included entitlement. One relevant account per source is supplied here, so that additional routing outcome is not assumed.

## Choose a bundle because it has a purpose

A role can combine rights across sources, but each profile remains single-source.

You could put Evidence Readers in a one-entitlement Evidence profile and reference that profile. You can also use the supported direct reference in this design.

A wrapper can help when it names a maintained capability, has useful ownership or supports reuse. It is not compulsory merely because the right belongs in a role.

Preparation groups Readers and Drafts because that combination supports preparing a case. Another responsibility can reuse the same profile without receiving Submission or Evidence Readers.

Creating another profile with identical contents is different. It is a separate object whose later edits are independent. Similar names and starting contents do not make two profiles a shared record.

Changing between a direct reference and a one-entitlement profile does not itself prove that native capability changed. Before replacing an existing design, assess assignment, delivery, withdrawal and retained requirements. A tidier list is not evidence of a safe migration.

## A shared profile carries an edit to every relevant consumer

Suppose another enabled role, **Case readiness reviewer**, references the same Preparation profile.

Readiness reviewers use Readers and Drafts. That shared reference does not give them the coordinator role's Submitters or Evidence Readers. Neither role sits inside the other.

Now someone proposes adding **Case Tags** to Preparation. In the supplied native application, Tags permits editing case tags and requires Readers on that same account.

The coordinator owner approves the need for coordinators. Is that enough to apply the shared edit?

The readiness population also needs an impact review. The edit is to the common profile, so its contents would change for both consuming roles.

```text
Coordinator role       Readiness role
       |                     |
       +----------+----------+
                  |
        same Preparation profile
           Readers + Drafts
                  |
         proposed Tags addition
                  |
       review both populations
                  |
       if approved and applied:
       current role requirements
                  |
       verify each account result
```

The converging lines identify one shared profile object. The lower arrows describe a proposed change and its conditional effects; they do not authorize an operation or specify backend service order.

For current role holders, an approved standing addition to the referenced profile becomes part of that role's access requirement and is provisioned after relevant evaluation. Verify each account's delivery.

The coordinator's immediate reference can stay exactly the same while its required access changes: Preparation now points to another entitlement as well.

Do not extend that addition behavior to every identity that once held Preparation. **Detection** recognizes a profile's complete existing entitlement set and associates the profile. For a profile held only through detection or a previous request for that profile itself, later additions are not automatically supplied; the association is retained only if the identity has the new complete set.

Those origins answer different questions. A current role requirement is more than evidence that a package happened to match earlier holdings.

The Tags change remains proposed here. Review both populations before authorizing application; no Tags provisioning result has been supplied.

## An enabled role can still reference a disabled profile

In an independent variation, another recipient has existing accounts but no Cases memberships. Preparation is disabled, while Submission and the role remain enabled.

A disabled profile can remain referenced in a role, but its entitlements are not provisioned through that disabled profile. An enabled parent role does not override the profile's state.

Suppose the supplied final account results are Readers and Submitters on Cases, plus Evidence Readers on Evidence, but no Drafts.

Readers comes through enabled Submission. Under the stated native rules, reading and submission work, but draft creation does not. The role's friendly name cannot supply the missing Drafts right.

Now change the starting condition. An existing holder already had Drafts before Preparation was disabled. No removal or other withdrawal took place.

Disabling the profile does not deprovision those existing entitlements. Its profile association is removed when the identity is next examined in processing, while the native rights remain. A retained reference on the role, an identity's profile association and native membership are separate observations.

The new recipient's missing Drafts and the old holder's retained Drafts are therefore compatible outcomes.

## Apply a shared change with its real scope in view

Saving a definition records configuration. Applying it through relevant processing recalculates the affected identity requirements; source fulfillment still needs separate verification.

The role, profile and application list-page **Apply Changes** actions process those access-model configurations together. They do not isolate the job to whichever single object was open most recently.

That list-page processing covers ISC Active and **Inactive (short-term)** identities. It does not include **Inactive (long-term)** identities. These are processing-participation categories, not statements that the corresponding native accounts are enabled or disabled.

Review the other saved changes and the edited profile's consumers before broad application. Opening one identity in another tab does not limit a shared edit to that person.

Removal needs its own decision. **Role access removal propagation** carries specified role-definition removals through to affected identities. The setting **Enable Role Access Removal Propagation** governs those removals, and the role must be enabled. This setting does not decide whether standing additions become required.

Removing Preparation from the role, removing an entitlement from Preparation, disabling Preparation and **revoking** a recipient's role assignment are different actions. Revoking means withdrawing that association and its applicable access requirements.

If Preparation disappears from the definition, inspect the propagation setting, role state, remaining requirements, actual removal operation and native result before concluding that Drafts disappeared. Submission still has its Readers reference in our definition.

Do not invent a universal last-reference rule from that overlap. Also, access edits made while a role is disabled are not simply replayed as propagation when it is later enabled.

## Trace a missing permission and a proposed edit differently

For missing access, start with the intended native action and the correct account. Find the entitlement that permits it, then trace its profile or direct role reference.

Check the referenced object's enabled state, the actual role assignment, relevant processing and the source operation. Finish with the account's present membership and action result.

For change impact, follow the references outward too: which other roles and populations use this exact profile?

One direction explains why this recipient should have the right. The other explains who else a shared edit can affect. Both need actual identifiers and contents rather than familiar names.

## Work through the reference changes

### 1. Three entries are reported as three permissions

The role contains two two-entitlement profiles and a direct entitlement. Both profiles reference the exact same Readers record.

What does the definition establish?

**Reasoning:** Three immediate entries, five entitlement paths and four distinct entitlement objects. It does not establish account counts, connector calls or successful writes. Check what a particular screen's total actually measures before comparing it.

### 2. The reviewer checks only the profiles

The review reports that the coordinator role affects only Cases Production.

Which requirement was missed?

**Reasoning:** The direct Evidence Readers reference. Inspect both immediate entry types and expand profile contents. A right does not need a profile wrapper to be required by this role.

### 3. Only coordinators were consulted

Preparation is shared with the readiness role. Tags is proposed, but only the coordinator population's need has been approved.

Is the impact review complete?

**Reasoning:** No. Assess readiness recipients too because the exact same profile would change. They do not inherit the coordinator's whole package; the shared profile is the connection.

### 4. A similarly named copy is referenced

The role points to a separate Preparation copy with a different identifier. An administrator edits the original.

Does that establish a change in the role's referenced contents?

**Reasoning:** No. Follow the stored identifier and the referenced object's actual contents. Similar labels do not establish shared edits.

### 5. A new recipient receives no Drafts

Preparation is disabled. The recipient's existing account initially has no Cases memberships; later Readers and Submitters are present, but Drafts is absent.

Can reading and submission work while drafting fails?

**Reasoning:** Yes, under the supplied native rules. Enabled Submission provides the required Readers/Submitters combination. Preparation's retained disabled reference does not supply Drafts.

### 6. An existing holder retains Drafts

Drafts existed before Preparation was disabled. No withdrawal operation occurred.

Did disabling prove native cleanup?

**Reasoning:** No. Disabling does not deprovision the previously held entitlements. Inspect actual membership and any separately authorized withdrawal, rather than importing the new recipient's result into this history.

### 7. The direct Evidence path is rejected

Both Cases additions succeed; Evidence membership addition fails for insufficient integration permission.

Does “direct” mean the entitlement should bypass that rejection?

**Reasoning:** No. Direct describes the role reference. Investigate the selected source account and rejected operation, obtain an approved correction, recover through a supported path and verify evidence reading. No reversal of Cases success is established.

### 8. Preparation disappears from the definition

Its reference is removed. Submission still references Readers; propagation settings and native results are unknown.

Can you conclude that Drafts was withdrawn?

**Reasoning:** No. Establish the applicable propagation setting and enabled role state, other continuing requirements, operation evidence and native outcome. A changed list alone cannot prove withdrawal or establish a universal overlap algorithm.

## Try the same tracing with a directory and a license

A design role references a directory profile containing Portal Access and Project Files. It also directly includes an Editor license from a separate source.

A **license** gives an account the right to use a product or feature set under the native licensing model.

Another role uses the same directory profile. The proposed edit adds Full Archive Export for the design team. The license assignment reports success, but the directory change remains unverified.

What result is established, who else needs a review, and what is missing?

**Reasoning:** The successful report concerns the license operation. It does not establish current directory membership or the complete design task's usability. Verify the license's present state and its intended action too.

Trace the directory profile's other consumer and assess that population's justification for archive export. Sharing the profile does not mean sharing the design role's whole contents.

Inspect exact references, actual assignment, selected accounts, native scope and current memberships. Verify each required action separately. The role's entry count cannot replace any of that evidence.
