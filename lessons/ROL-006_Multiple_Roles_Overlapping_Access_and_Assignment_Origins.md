# One role was removed. Why does some access remain?

The Case preparer assignment ends. Draft editing stops, but reading and follow-up notes still work.

That result can be correct. The person also holds Case follow-up, which still requires reading.

Before treating every remaining right as a failed removal, identify which responsibility ended and which current responsibility still needs it. Removing all rights mentioned by the first role could break the work the second role supports.

## Put both requirements on the same account

In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity. An **account** is the external record through which that person uses a system.

**Account correlation** matches and associates source accounts with their ISC identity. Here, one existing account on Cases Production is correctly associated with the intended identity.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

**Native** means belonging to the external application. A **group** collects members, such as accounts; native application rules can use membership to grant **permissions**, meaning allowed actions on resources.

The application contacts confirm:

- Readers allows case reading within the account's assigned resource scope.
- Draft Editors allows draft editing when that same account also holds Readers.
- Follow-up allows follow-up notes when that same account also holds Readers.

None grants final approval, export or administration.

An **entitlement** represents source access in ISC, such as one of these memberships. The ISC record's identifier locates that represented object; the native group key identifies the external group. They are different kinds of identifiers, even when a screen displays them together.

An **access profile** bundles related entitlements from one source. A **role** groups access for a business responsibility and can reference profiles or entitlements directly.

The enabled standard roles are:

- **Role A, Case preparer:** includes the Case preparation profile, containing Readers and Draft Editors.
- **Role B, Case follow-up:** includes the Case follow-up profile, containing the same Readers entitlement and Follow-up.

A **role assignment** associates a role with an identity through an applicable route. Both assignments are current and target this same account.

The account is enabled, sign-in works and its scope is North. All three memberships are present; North reading, draft editing and follow-up work.

This is **standing access**, so the delivered rights do not wait for separate just-in-time activation. **Provisioning** carries out account or access changes; a withdrawal is **deprovisioning**.

The records, native rules, configurations, dates and outcomes below are hypothetical. Supported ISC Provisioning and membership changes are supplied. All components are enabled, and the main example has no other grants, requirements, concurrent changes or additional accounts.

## Expand the paths without counting the shared right twice

A **reference** points to another record.

A points to Case preparation, which references Readers. B points to Case follow-up, which references that exact same Readers object.

The profiles are separate records. Their common entitlement is the overlap.

```text
Two current roles, same account
              |
+-- A: Case preparer
|   Case preparation profile
|   Readers + Draft Editors
|
+-- B: Case follow-up
    Case follow-up profile
    same Readers + Follow-up

Both Readers paths reference
one entitlement on Cases Production.
The native account has one membership.

Four paths / three distinct rights.
```

There are four paths from roles to entitlements: A-to-Readers, A-to-Draft Editors, B-to-Readers and B-to-Follow-up.

Those paths reach three distinct entitlement objects. Under the supplied native group model, the account has one Readers membership, not two stronger copies of reading permission.

The diagram shows references and a common target. It does not count connector calls, prescribe their order or claim duplicate native grants. Configuration paths, assignment records, operations and memberships are different things to count.

A direct Readers entitlement inside a role would still be a role requirement. “Direct” would describe the role-to-entitlement reference, not an independent request or native grant outside the role.

## Establish why both assignments are current

**Assignment origin** means the route through which an access association arose. It explains authorization and maintenance; the contents explain which rights are required.

A was assigned automatically through current **membership criteria**, the configured tests selecting identities. An **identity attribute** is a named field on the ISC identity.

Its approved criteria require department ServiceOps, job code CASE-PREP and lifecycle state working, joined with **AND**, meaning every comparison must match.

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. Working is the technical value in this example, and its configured identity state is Active. **Identity state** concerns ISC participation; it is different from native account enablement. No lifecycle requirement separately grants these rights here.

B came through a permitted **access request**, which asks for specified access for a recipient. **Approval** is the decision allowing the request to proceed.

The required reviews completed, the start passed, and the supplied assignment and native records establish that B's access was delivered to this account. Its end is **October 30, 2026, at 17:00 UTC**. UTC means Coordinated Universal Time.

B is a requested **role**. Its profile is included through that role; it is not a separately requested profile.

Follow the relationship: accepted role request, current B assignment, included profile, required Readers and Follow-up, then actual account evidence.

Automatic versus requested describes the assignment route. Standing versus just-in-time describes whether separate activation is needed. Those distinctions answer different questions.

A role being requestable does not establish a completed request. A person matching criteria today does not, by itself, establish the origin of an existing assignment. Inspect the actual history and current requirement.

## End A's requirement and inspect each right

The person stops preparing cases. Department remains ServiceOps and lifecycle state remains working, but the current job code is no longer CASE-PREP. That comparison is false, so A's AND expression no longer matches. B's separate temporary follow-up project continues.

**Identity processing** evaluates identity information and applicable configuration, including automatic role requirements. Relevant evaluation withdraws A's automatic assignment in this supplied case. B remains assigned to the same account.

The definitions stay unchanged. This is one person's assignment ending, not Draft Editors being deleted from a shared role for every member.

| Right on the main account | Requirement after A ends |
|---|---|
| Readers | Still required by current assigned B, so retained for that role |
| Draft Editors | Required only by A; with no other stated need, it must be withdrawn |
| Follow-up | Still required by B; A did not supply this requirement |

The documented role-overlap behavior retains entitlements required by another assigned role. B's **remaining current requirement** explains Readers here.

The date of the earliest grant does not establish that explanation. Nor does the number of catalog profiles mentioning Readers. Check the current assigned requirement and account.

If another unassigned role mentions Draft Editors, it does not justify Draft Editors for this person. Its definition describes possible contents for its members; it is not a currently assigned need on this account.

B also does not inherit A's unique rights merely because they share Readers. Sharing an entitlement does not nest the roles or copy all of one role's contents into the other.

```text
A ends; B stays on this account
              |
+-- Readers: still required by B
+-- Draft Editors: no remaining need
+-- Follow-up: still required by B
              |
After successful Draft Editors removal:
Readers + Follow-up remain
Read and follow up work; drafts denied

Later, B ends too
              |
No remaining stated requirements
              |
Readers + Follow-up need removal
              |
Verify each native outcome
```

The first section separates retained rights from the unique right needing removal. The lower section changes the condition again: B eventually ends too.

These are requirement and outcome relationships under the supplied conditions. They are not a private backend algorithm or a guarantee that every source operation succeeds.

## Verify the successful withdrawal before changing the explanation

The supplied observations on **October 28, 2026** are:

- **10:00 UTC:** A's current identity inputs no longer match; B's project authorization is still valid.
- **10:05 UTC:** Assignment evidence shows A withdrawn and B current on the main account.
- **10:10 UTC:** Draft Editors removal reports success.
- **10:15 UTC:** Native inspection shows Readers and Follow-up, with Draft Editors absent. North reading and follow-up work; draft editing is denied.

These times are observations, not promised processing intervals.

Identity processing calculated the changed requirement. The operation result and native checks establish what happened on the account.

Readers remaining is not evidence that a Readers removal failed. There is a positive reason to retain it: B still requires it here.

Now use an independent failure variation. Draft Editors removal reports a permission error, and native inspection still shows all three memberships.

Readers and Follow-up have valid B requirements. Draft Editors does not. A disappearing from an ISC view cannot justify the remaining draft capability.

The **integration actor** is the account or authorization the connector uses for source operations. Inspect the failed operation and that actor's permission on the intended account.

An approved permission correction and supported recovery then remove Draft Editors. Fresh checks confirm North reading and follow-up still work, drafts are denied, and South follow-up, final approval, export and administration remain denied. No other relevant account, access or native-policy change occurred.

Recover the unrequired right without withdrawing the shared right B needs. Correct retention and failed withdrawal should not be combined into one conclusion such as “some access remained.”

## Reassess the requirements when B ends

At B's configured end date and time, deprovisioning starts. The timestamp does not establish instantaneous native completion or an application-session cutoff.

In the original main conditions, A is already gone and no other requirement exists. Ending B leaves Readers and Follow-up needing removal.

In a supplied successful continuation after that end, both removals complete. Native checks show none of the three example memberships and deny North reading, draft editing and follow-up. The account remains enabled and can still sign in.

This establishes withdrawal of these rights, not account deletion or proof that every possible application permission has disappeared.

In a separate expiry-failure variation, Follow-up removal succeeds but Readers removal fails. The account still reads North cases, but cannot follow up. That is partial source fulfillment even though the project period ended.

If fulfillment uses a **manual provisioning task**, a person must carry out the required source change. Inspect task completion and the native result. A valid end date does not eliminate that delivery dependency.

Also revisit the starting assumptions. If a new assigned role requires Readers before B ends, the current retained needs have changed. An earlier plan stating “no other grants” is not permanent evidence about a later assignment population.

## Compare the same profiles outside roles

Now consider an independent alternative with no roles, lifecycle requirements or other grants.

The person holds Case preparation and Case follow-up directly through profile requests. The same three native memberships are initially present.

An authorized explicit **revocation**, withdrawal through the supported route, of Case preparation completes successfully. It removes Readers and Draft Editors.

Case follow-up now lacks Readers, so its complete entitlement set is no longer satisfied. Its profile association is lost. Follow-up remains as an individual entitlement.

Under the supplied native dependency, Follow-up alone cannot add notes. Readers is required on that same account.

The second non-role profile did not protect the shared Readers membership. That differs from the main case's current assigned B requirement.

**Detection** recognizes a profile's complete recorded entitlement set and associates the profile with the identity. It does not itself add native groups or reconstruct their original approval.

The documented explicit non-role profile-revocation result is not converted into label-only cleanup because a profile was detected rather than requested. Its actual action and current requirements still matter.

This is why “retain every right until the last catalog object mentioning it disappears” is not a safe universal rule. The assignment mechanism and the operation differ between these cases.

A profile governed by a role also cannot simply be treated as an independent direct-profile revocation. Investigate its governing role assignment and permitted withdrawal route.

## Use the origin to select the correct evidence

An **Identity List** is an alternative automatic-role selector in which an administrator maintains named ISC identities. A department change does not silently remove a list entry.

A **lifecycle requirement** is access required by the configured organizational state. Profiles assigned through a current lifecycle state are enforced while that state continues.

Those meanings help separate the histories:

| Basis or observation | Evidence needed before predicting withdrawal |
|---|---|
| Automatic role from criteria or Identity List | Actual selector, current inputs or listed identity, applied decision and account target |
| Requested role | Specific current assignment, request history, effective dates, target accounts and retained roles; supported revocation or expiry |
| Profile included through a role | Governing current role requirement and permitted withdrawal, rather than an independent profile revoke |
| Directly held or detected non-role profile | Actual revocability, complete contents, other current requirements and fulfilled operation |
| Current lifecycle requirement | Configured state, required profile and separate removal/addition evidence |
| Native membership with unknown history | Current holdings and managed requirements; no invented request approval or role association |

A past approved request records a past decision. Establish whether its assignment is still current and applicable to the account before treating it as a retained requirement.

For lifecycle access, suppose activity and native observations establish a successful removal followed later by a new addition while the state still requires the profile. Continuing lifecycle enforcement can explain that regrant.

That differs from the right never being removed. Use separate operations and observations to distinguish justified retention, failed removal and later reprovisioning.

Do not invent an origin-priority table covering every mixed role, lifecycle, direct request, native grant and just-in-time case. Gather the exact current configuration and supported behavior when the facts exceed these verified examples.

## Keep source identity and account scope attached to every path

Overlap requires more than two display labels saying Readers.

Compare the exact source, entitlement type, entitlement record and actual account target. The **entitlement type** identifies the category represented on that source, such as its group memberships.

Production Readers and Test Readers are different rights. Separate profile objects can both reference the same entitlement; similarly named profiles can also contain completely different rights.

The ISC entitlement identifier and native group key remain different object contexts. Verify the references instead of treating a familiar label as an identifier.

In a separate two-account variation, A concerns a daily-use account and B targets a privileged account.

B's requirement on the privileged account does not establish retention on the daily-use account. Do not combine their holdings into one imaginary account.

Inspect assignment details, relevant account-selection configuration and per-account operations. If one role has several requested assignments, identify which assignment and source accounts the chosen removal actually affects.

The one-account result from the main example cannot supply a missing native outcome for this variation.

## Connect the views to the current account result

Manage Access describes a role's contents. It does not establish that this person is assigned to it. The role's assigned-identities view and assignment details address that separate relationship and can include both automatic and requested holders.

For requested access, connect its reviews and dates to the current assignment and target accounts. For automatic access, connect current inputs or the list entry to the selector and relevant processing.

Provisioning activity shows which account change was attempted and what result or error was reported. **Account aggregation** reads configured account information into ISC; data collected before a removal is not proof of its later native outcome.

Current membership shows whether a group is present. Task checks establish its effect under account status, sign-in, resource scope and application dependencies.

An approval, a vanished role label or one successful operation cannot establish every intended withdrawal and every retained capability.

## Work through the changed conditions

### 1. A ends while B remains

Both main roles target the same account. A ends, B remains and Draft Editors removal succeeds.

Which capabilities should remain?

**Reasoning:** Readers and Follow-up remain required by B. Draft Editors is withdrawn. Verify North reading and follow-up, with draft editing denied. Retaining Readers supports the intended design.

### 2. A catalog role mentions Draft Editors

A ends. Another enabled role contains Draft Editors, but it is not assigned to this person and no other requirement applies.

Does the catalog reference justify retention?

**Reasoning:** No. Possible role contents are not an assigned requirement on this account. Investigate the actual removal result.

### 3. An unrelated administrator membership is found

After both main roles end, all three example memberships are successfully removed. Native inspection finds another administrator group that neither role contained.

Can the account be reported as having no application access?

**Reasoning:** No. Investigate that membership's origin, current justification and supported removal separately. Withdrawal of these roles neither removes nor authorizes every unrelated right.

### 4. B contains Test Readers

B references a different Readers entitlement on a Test source. A concerns Cases Production.

Does B supply the stated overlap for Production Readers?

**Reasoning:** No. Compare exact source, record and account scope. A shared name is not the common entitlement from the main example.

### 5. Only the profiles are directly held

There are no roles or lifecycle requirements. Explicit Case preparation revocation successfully removes Readers and Draft Editors.

What happens to Case follow-up?

**Reasoning:** Its required set is incomplete, so the profile association is lost. Follow-up remains individually, but cannot support notes without same-account Readers. The role-retention result cannot be copied into this non-role case.

### 6. Draft Editors removal fails

A ends, B remains and a permission rejection leaves all three native memberships.

Is every remaining right justified by B?

**Reasoning:** No. B justifies Readers and Follow-up, not Draft Editors. Obtain an approved correction, recover the failed removal and verify draft denial while preserving B's work.

### 7. B reaches its end

A is already gone. B's end time arrives, but no removal results or current native observations have been supplied.

What can be concluded?

**Reasoning:** Withdrawal is due; completion is unproved. Inspect assignment state, fulfillment and exact native memberships. The timestamp does not establish that either Readers or Follow-up is absent.

### 8. The remaining role targets another account

B remains for a privileged account. A's withdrawal concerns the daily-use account. No continuing daily-account requirement is established.

Can normal-account retention be predicted from B?

**Reasoning:** No. Establish the exact account-target requirements and removals. More evidence is needed for a native outcome; the main single-account result does not answer this history.

## Try the reasoning with a paid application

Two enabled roles target the same reporting account:

- Report author requires an Editor license and Draft Authors.
- Report publisher requires the same Editor license and Publishers.

A **license** gives an account the right to use a product or feature set under the native licensing model. Here, authoring requires Editor plus Draft Authors; publishing requires Editor plus Publishers.

The authoring responsibility ends while the publisher role remains current. Access is standing and no other grants apply.

What is the intended result, and has the paid license been reclaimed?

**Reasoning:** Editor remains required by the publisher role. Draft Authors needs removal; Publishers remains. After successful fulfillment, publishing works and draft authoring is denied under the supplied rules.

The Editor license has not been reclaimed merely because the author role ended. Reconcile any license-reclamation objective with the continuing publisher need and native licensing model. Inspect the actual license assignment and capacity as well as ISC's role labels.

If these were non-role profiles, revisit the applicable profile-revocation behavior. If they targeted different accounts, inspect account scope. If a write failed, inspect its operation and native result.

Identify the assignment that ended, the current requirement that remains, the exact rights on each account and the application's resulting capability. Those facts distinguish correct retention from incomplete removal.
