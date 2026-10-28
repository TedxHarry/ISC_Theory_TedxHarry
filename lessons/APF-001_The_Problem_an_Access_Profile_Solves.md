# Why give a set of entitlements a name?

An employee needs to enter supplier invoices. Their application account already permits reading invoices for its assigned business unit, but cannot create invoice drafts.

The application requires a combination of access, not just a group whose name sounds appropriate:

- Invoice Readers permits reading invoices within the account's assigned business unit.
- Invoice Draft Entry permits creating drafts within that unit, provided Invoice Readers is also present.
- A separate Payment Release group permits releasing payments. Invoice intake does not require it.

These are supplied application rules. An **account** is the external record through which a person or another entity uses the system. A **group** collects members, such as accounts. A **membership** connects an account to a group. A **permission** allows an action on a resource, such as reading an invoice; the application uses membership when deciding which actions to allow.

Now consider several legitimate invoice-intake requests. If each asks only for “invoice access,” someone must translate that phrase into the correct combination each time. One account might receive reading only; another might receive draft entry without its dependency.

A reviewed, reusable package gives those requests a clearer meaning.

The records, application rules, configurations and outcomes below are hypothetical. They are not a built-in connector specification or tenant observations.

## What does an access profile add?

In SailPoint Identity Security Cloud (ISC), an **entitlement** represents an access right from a source, such as a group or application permission.

A **source** is ISC's configured representation of a system or collection of account data. Our source, Invoices Production, represents the invoice application. Its **connector** supplies the supported integration for reading data and, where supported and configured, making changes.

An **access profile** is a named bundle of related entitlements from one source. It gives a useful access combination a maintained purpose, rather than making each requester reconstruct its technical contents.

The team defines **Invoice intake**, referencing Invoice Readers and Invoice Draft Entry from Invoices Production. Its explanation says:

> Read invoices and create drafts within the account's assigned business unit. Intended for invoice-intake work. Does not include payment release.

The two references point to represented entitlement records. A **reference** identifies another record; it does not copy or rewrite that access item's native definition. **Native** means belonging to the external system's context.

The native groups remain separate. The profile names their intended combination without combining their identifiers or changing either group's permission.

This does not impose a minimum of two entitlements. An enabled profile can contain one entitlement if that is the useful access item. It must contain at least one.

## Where does that package exist?

An **identity** is ISC's representation of a person or another entity. The employee's account is correctly associated with its identity, and it is the only account on Invoices Production in this example.

The account holds native memberships. The profile exists in ISC and references the access the organization wants to manage together.

For the selected records, `invoice-readers` identifies Invoice Readers and `invoice-draft-entry` identifies Invoice Draft Entry in the source's integration context. These are illustrative native references, not ISC object IDs or executable input.

```text
ISC: Invoice intake access profile
|
+-- source: Invoices Production
|
+-- entitlement references
    +-- invoice-readers
    +-- invoice-draft-entry

Native application
  Selected account's group memberships
      -> application permission rules

The profile is not a native group.
```

The upper branches describe the profile's source and contents. The lower branch describes the application using actual account memberships to determine allowed actions. This is a relationship map, not a processing sequence.

Creating Invoice intake does not create another native application group or nest the existing groups inside a new parent. You would find the account and its native groups in the application; the ISC bundle is a separate object.

A native application role with the same name would also be a separate object. Its native identifier and permission meaning need their own evidence. Likewise, a profile referencing a Test source does not grant similarly named Production access.

## Why not copy another employee's groups?

Another employee may have payment release, temporary investigation access or older rights that do not belong in the intake task.

The bundle should follow the work requirement and confirmed permission meanings. For our example, Readers and Draft Entry belong together because the application's draft operation requires both.

An **access profile owner** is the identity recorded as responsible for the bundle. That responsibility includes maintaining its meaning and coordinating application knowledge. Ownership does not establish that the person holds its access or receives every approval task.

A named item gives the requester, manager and application contact something specific to discuss. The reviewer can inspect its contents instead of inferring a purpose from group codes.

It also makes a design mistake reusable. If Payment Release is included for convenience, every later use can carry that excessive design. Writing “do not release payments” in the description does not cancel the group's native permission.

A meaningful name helps only when its contents and scope remain appropriate.

## Who receives the defined bundle?

The definition answers what is included. It does not, on its own, select recipients.

An **assignment** records an identity's association with an access item through a particular mechanism. That mechanism matters because it explains why the item is present and what process governs it.

An **access request** asks for an access item for a recipient. The configured request process may require approval before the supported delivery path supplies the access.

An **ISC role** groups access for a broader business purpose. It can include access profiles or direct entitlements. An automatically assigned role can select identities using configured criteria, then use Invoice intake as a source-specific component.

A **lifecycle state** describes an identity's organizational stage, such as active employment or termination. Its configured requirements can include access profiles. A label such as active does not inherently mean everyone should enter invoices; including the profile would be an explicit business design choice.

These routes have different selection and review behavior. The approval settings for a direct profile request are not a universal approval stage for automated role or lifecycle grants.

Saving the profile does not assign it to everyone in Finance. Selecting an owner does not make the owner a recipient. A department word in the name is not a configured selection rule.

## Follow an approved request into the application

An **enabled** profile is available for supported access-model use. **Requestable** means it is offered through the applicable request configuration. Request availability is separate from approval and from who actually receives access.

For this main example, Invoice intake is enabled, directly requestable through the tenant's supported configuration, and requires manager approval. No automatic role or lifecycle requirement supplies it to this employee.

The employee already has an enabled account, sign-in succeeds, and there is no account-selection ambiguity. This is **standing access**: entitlements are delivered without a separate just-in-time activation requirement. No new account creation is needed in this example.

**Provisioning** carries out account or access changes. The approved profile request identifies the bundle; its contents identify the source access items; fulfillment must establish the required memberships on the selected account.

**Identity processing** is ISC's evaluation of an identity and relevant identity/access-model information. New or changed profile configurations need relevant processing to apply them to identities. Saving and applying configuration are different from granting or delivering access.

Use these supplied same-day observations, with UTC as the shared time reference:

- At 10:00, Invoice intake is saved with the two entitlement references. The account still holds Readers only.
- At 10:05, the configuration has been applied through the relevant identity processing. No grant requirement has yet been initiated, and the account still holds Readers only.
- At 10:10, the configured manager approves the employee's profile request.
- At 10:12, the recorded attempt to add Draft Entry to the selected account is rejected because the integration credential lacks the required write permission.
- At 10:15, current native evidence confirms Readers present and Draft Entry absent. Reading works; creating a draft within the assigned business unit is denied.

The **integration credential** is the account or authorization the connector uses for its source operations. Supporting a membership-write operation does not establish that the credential has the permission required for this attempt.

The evidence identifies a delivery problem. It does not identify an unsuitable bundle or a missing second approval. The desired combination is clear; the rejected change did not establish it.

Readers existed before the request and remains present afterward. A **rollback** would undo changes made by an operation. The retained pre-existing membership is not evidence that an undo occurred. One named request does not make every required source change an all-or-nothing transaction, and it does not imply that every referenced entitlement requires a new write.

Under an approved correction to the integration's permissions and the appropriate supported recovery, later native evidence confirms both memberships on the same account. A fresh application check permits draft creation within the assigned unit and denies payment release. The account has no payment-release group or other payment-release route. No other membership, application policy or relevant account-condition change occurred.

That closes the selected intake requirement. The observed result does not establish a universal retry interval, atomic delivery guarantee or success for other accounts.

## Why can the profile appear without a new request?

Consider a separate variation. Before any Invoice intake request, the employee's only account already holds Readers and Draft Entry. Current membership information has been collected into ISC.

**Aggregation** collects external data into ISC. The collected view is evidence of what was read; it is not automatically a live application check.

**Detection** recognizes that an identity already has the full entitlement set described by a profile. With the enabled definition applied through relevant identity processing, ISC can record Invoice intake as held from that existing set.

Recognizing the combination is different from provisioning the native memberships that make it up.

```text
Grant route, as configured here
  Profile request
       |
       v
  Manager approval
       |
       v
  Supported account-access delivery
       |
       v
  Verify groups and intended action

Separate detection route
  Current collected full set
       |
       v
  Identity processing recognizes set
       |
       v
  Access profile recorded as held
```

The upper route summarizes the configured manager-approved request example. The lower route recognizes an existing collected set. They are separate explanations, not compulsory stages of every profile association or a private backend job order.

Detection does not establish who originally granted the access, whether a profile request was approved or whether the access remains justified. Inspect the history and current business requirement.

If the account holds only Readers, it does not satisfy the full set. Detection alone is not an instruction to add Draft Entry to complete the package. A qualifying request or configured automatic requirement would be a different mechanism.

Also distinguish current native state, collected state and processing result. If a membership changed after collection, a displayed profile name does not independently prove current application access.

## Which evidence answers which question?

| Observation | What it establishes |
|---|---|
| Two saved entitlement references on Invoices Production | The bundle definition exists; this does not select a recipient or change an account |
| Profile enabled | It is enabled for supported use; recipients still need the relevant mechanism |
| Profile offered for requests | A configured route exists for asking; approval has not thereby occurred |
| Manager approval recorded | The configured decision is complete; native delivery needs evidence |
| Both groups currently verified on the selected account | That account holds the specified native memberships; the grant origin is a separate question |
| Intended draft operation succeeds | That account/action/resource worked under the checked conditions, not every possible action |

This distinction helps you investigate a result without repeating the wrong step. A missing group after a rejected write needs delivery investigation. A profile saved without any recipient mechanism does not need another approval or an invented grant to every incomplete account.

## One source does not mean one whole job

Suppose intake staff also need a document-attachment permission from Documents Production.

That entitlement cannot be inserted into the Invoices Production access profile merely because it supports the same job. Model the other source's component separately. An ISC role can bring source-specific components into a broader business requirement where appropriate.

The boundary is the ISC source. One directory source can contain groups governing several applications. That does not automatically make every group from that source a sensible single package; related purpose still matters.

There are also other similarly named objects.

An **access application** is an ISC configuration used to group a source's access profiles in the request experience and support configured password-management functions. It is not the native software, the connector or another membership delivered by the profile.

An **identity profile** configures the source used to establish an identity population, its identity-field mappings and lifecycle configuration. It is not a bundle of source access rights.

Keeping these responsibilities separate helps you find the right record: source for integration data, entitlement for represented access, access profile for a related same-source bundle, role for a wider access requirement.

## Enablement, account choice and later changes still matter

A supported tenant configuration can use an enabled profile for automated assignment without offering it as a direct request item. Turning requestability on is not the repair for an unrelated role-selection or provisioning defect.

Inspect the tenant's request experience and supported settings. The conceptual difference does not imply a universal interface default.

Our example has one account. Where an identity has several accounts on a source, automatic profile provisioning can use configured account-selection criteria. A useful package name does not choose which account should receive it.

When a new or changed configuration needs to be applied, relevant identity processing must evaluate the affected identities. Saving is not proof that everyone was reevaluated; processing completion is not proof that each target operation succeeded.

For the standing entitlements discussed here, disabling a profile can remove its association after identity processing while the native entitlements remain. Deleting the profile is also not, by itself, entitlement deprovisioning. Removing an entitlement from the definition does not establish its removal from existing holders.

Actual removal depends on the operation and assignment mechanism. Do not assume another overlapping access profile always protects a shared entitlement. Check the documented path and assignment evidence before deciding what will remain.

Likewise, a later native permission change can broaden what a referenced group allows without making the profile's familiar name look different. Maintain the contents and their meaning, not just the label.

## What would you conclude from these facts?

Each question supplies an independent variation.

### 1. Saved definition, unchanged account

Invoice intake contains both groups. No grant mechanism has been initiated for the employee, whose account still holds Readers only.

Does missing Draft Entry prove saving failed?

**Reasoning:** No. The saved definition did not select a recipient or initiate a grant. Verify the source and contents, then identify the intended request or automatic assignment route. Do not assume every account lacking part of a profile should receive it.

### 2. Payment release was added for convenience

The profile now includes Payment Release alongside Readers and Draft Entry. The approved work remains intake only.

Does the profile's familiar name justify the extra access?

**Reasoning:** No. Compare actual capabilities with the requirement. Correct the design through the controlled process and investigate affected holders separately. A description exclusion or renamed bundle does not remove native access already granted.

### 3. Approval exists, but the write was rejected

Draft Entry delivery was rejected. Readers remains on the account and reading works.

Would another approval repair this result?

**Reasoning:** No. Inspect the required credential permission and exact source/account/operation, use the approved correction and supported recovery, then verify memberships and capability. Existing Readers is neither proof of rollback nor a complete intake combination.

### 4. Both groups preceded any profile request

No profile request was submitted. Current collected data shows both groups on the employee's only account, and relevant processing records Invoice intake as detected.

Does that establish that ISC originally provisioned the memberships?

**Reasoning:** No. Detection explains recognition of the existing set. Inspect native and ISC history for grant origin and confirm continuing need. The profile association is not evidence of a historical request approval.

### 5. Detection sees only Readers

Current collected data contains Readers but not Draft Entry. No role, lifecycle requirement or approved request requires the profile.

Will detection supply the missing membership?

**Reasoning:** No. The set does not satisfy the profile. Establish the work need and approved grant route instead of treating detection as an access-completion instruction.

### 6. The work also needs another source

A document-attachment entitlement comes from Documents Production, while Invoice intake uses Invoices Production.

Can it be added to this same profile?

**Reasoning:** No. Keep source-specific components separate and consider a role for the wider requirement. A common job does not erase the access-profile source boundary.

### 7. Enabled, but not directly requestable

In this tenant's supported configuration, an enabled role includes the enabled profile and selects the intended employees. The profile is not directly requestable.

Must the direct request route be enabled first?

**Reasoning:** No. Automatic assignment and direct request availability are different routes. Check selection, profile configuration, processing and native results rather than turning on an unrelated request mechanism.

### 8. Disabling removed the profile name

After disabling the profile and relevant processing, its held-profile association disappears. Current native evidence still shows both standing memberships.

Does that contradict disabling behavior?

**Reasoning:** No. Disabling is not entitlement deprovisioning. If access must end, establish the approved requirement and correct assignment/removal path, then verify the native result. A missing profile label does not prove lost application access.

## Try a permission and a license together

A **license** gives an account the right to use a product or feature set under the application's licensing model.

On one supported design-platform source, project reporting needs the Report Authors permission and an Editor license. The proposed Project report preparation profile references both entitlements and excludes tenant administration.

The worker already has Report Authors but lacks the license. No request is approved and no automatic assignment requirement is configured.

What does creating the profile solve, and what would establish delivery?

**Reasoning:** It gives a maintained name and purpose to a related same-source combination. Different native entitlement kinds do not, by themselves, prevent that bundle.

The definition does not authorize or deliver the missing license. Confirm the worker's need, supported route and any license-capacity dependency. After an authorized grant, inspect the selected account's permission/license assignments and the intended reporting outcome.

If the two items come from different sources, use separate source-specific components. If the full set already exists and processing detects the profile, investigate those prior grants rather than calling detection a new approved request.

An access profile connects a business-readable package to its technical contents. To explain a particular person's access, also identify the selection mechanism, account and evidence that the intended native capability exists.
