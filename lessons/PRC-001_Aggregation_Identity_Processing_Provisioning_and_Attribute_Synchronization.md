# The data changed. Which process needs to act?

HR changes a worker's department from Finance to Engineering. Later, a ticket says, "The HR aggregation finished, but the application is still wrong."

Before choosing an action, let's make "wrong" more specific. Does ISC still have the old HR account data? Does the person's identity still say Finance? Or does the identity already say Engineering while the application still has the old department or lacks the required access?

Each observation points to a different piece of work. To decide what needs attention, you need to follow the value from the record that supplies it to the records and decisions that use it.

## Start with the account data ISC actually has

An **account** is a person's record in a particular system. HR has an account containing the worker's employment information. An **attribute** is a named field on that record, such as department.

ISC also keeps collected account information. The department visible on an HR account in ISC is information ISC has received; it isn't a live view of every edit in HR.

**Account aggregation** is the process that reads account information into ISC. For a connected system, the configured integration reads the records. For a file-based source, ISC imports the supplied file.

A **source** is ISC's configured representation of a system's account data. A **connector** provides the integration used to read that data and, where supported, make changes.

For our department change, call the HR source HR-Primary. The person already has one correctly associated HR account. HR has saved Engineering, but ISC's collected account still says Finance.

What can another process do with that old value? If its instructions say "read department from this account," it will still receive Finance. Repeating a later step cannot supply a change that hasn't reached its input.

We therefore need evidence that the right account and field were collected. A successful aggregation summary tells us about that operation; it doesn't establish the value of every account field. Check its scope and result, then inspect the exact collected account.

For the rest of this example, suppose the relevant aggregation has brought Engineering into that account. That establishes the available input. Next, we need to understand how it becomes information about the person.

The configurations and observations in this example are hypothetical. They are supplied for reasoning, not results from a real tenant.

## The identity needs instructions for using that account value

An ISC **identity** is the record representing the person across their accounts. The collected HR account and the identity are separate records, so each can have its own department field.

**Account correlation** establishes which identity an account belongs to. Here, the HR account and an existing directory account are already correlated to the correct identity. That association tells ISC whose accounts they are. It doesn't, by itself, copy their fields onto the identity.

The Employees **identity profile** supplies shared configuration for this population. HR-Primary is its **authoritative source**: its worker accounts participate in establishing and maintaining the corresponding identities.

Within the profile, a department **mapping** specifies where the identity's department comes from. Ours reads department directly from the associated HR-Primary account. It applies no calculation or substitute.

Those instructions explain the connection:

- The account association identifies the worker's HR account.
- The mapping selects that account's department as the input.
- Relevant **identity processing** evaluates the identity information using the applicable configuration.

With Engineering available in the selected account, this mapping supplies Engineering for identity department.

Why keep the account and identity separate? The account describes the worker in HR. The identity provides information about that person for ISC's wider decisions. A mapping makes the intended connection explicit instead of assuming that every field from every account should replace identity information.

For this hypothetical continuation, relevant processing and a current observation of the identity both confirm department Engineering. We have established the identity result. We haven't yet established any change to the directory.

## A correct identity value still needs a reason to change an account

The directory has its own external account for this person. Call its ISC source Directory-Primary. That existing account still has department Finance.

Updating the identity doesn't tell every application to copy every field. We need configuration that says which account field should follow which identity field.

That is the purpose of **attribute synchronization**, or attribute sync. It defines selected account fields that should align with corresponding identity fields. Here, an established sync configuration requires the directory account's department to follow identity department.

Notice the direction. HR supplies identity department through the Employees mapping. Identity department then supplies the directory's department through sync. Directory-Primary is a destination for this field, not its authority for the identity mapping.

The update itself is **provisioning**: carrying out a required account or access change in the external system. Provisioning can create an account, change a field, or add or remove access. Attribute sync determines the required field alignment; provisioning delivers the resulting account update.

Our directory supports this field update, provisioning is enabled, and the update must execute with sufficient permission. If the update succeeds, the external account's department becomes Engineering.

```text
HR account in the external system
department: Engineering
               |
      account aggregation reads
               v
Collected HR account in ISC
department: Engineering
               |
   Employees department mapping
   relevant identity processing
               v
Current ISC identity
department: Engineering
               |
    established department sync
    requires account alignment
               |
    supported provisioning write
               v
External directory account
department: Engineering
IF the update succeeds
```

Read each arrow as an information dependency or configured responsibility. The diagram doesn't prescribe separate background jobs or guarantee that the last write succeeds.

Attribute sync has eligibility rules. The account field must be included in the source's **Create Account** definition and mapped directly from an identity attribute there, then selected for synchronization. The identity profile must also map that identity attribute.

Create Account defines how fields are populated when a new account is created. Its mapping alone doesn't establish ongoing updates to existing accounts. Our department sync is already configured and applied; this example doesn't describe first-time bulk setup.

That distinction explains a common surprise. You can have a correct identity department and a correct new-account mapping while an existing account still keeps its old department. Without an ongoing update mechanism, those facts are compatible.

Another associated account, on Archive-Primary, also starts with department Finance. No ongoing department update is configured for that source. Its remaining Finance is therefore not, by itself, evidence that identity processing failed. First establish whether that account is supposed to follow this change.

## Why the department update doesn't grant the group

Suppose Engineering workers also need membership in directory group `ENG-BASE`. Changing a department label and adding group membership are different external changes.

ISC represents a source-specific permission, such as this group membership, as an **entitlement**. An **access profile** bundles entitlements from one source. Our enabled Engineering access profile contains ENG-BASE.

A **role** groups access around a business responsibility and can use assignment conditions to determine who receives it. Our enabled Engineering role tests whether identity department equals Engineering and includes the Engineering access profile.

Let's follow that condition. Before the change, department Finance doesn't meet it. After the current identity becomes Engineering, the condition matches. Relevant identity processing can assign the role and require the access represented by its access profile.

That gives the group change a reason: this person now meets the configured Engineering role condition. It is separate from the reason for the department write, which comes from attribute sync.

The existing directory account lacks ENG-BASE. This is ordinary ongoing membership, with no separate activation step. No previous Finance-based access assignment or removal is involved.

Provisioning now needs to add ENG-BASE to that account. The source must support the operation, and its execution needs the appropriate permission. Support for updating department doesn't establish permission to change group membership.

```text
Current identity: Engineering
               |
      role condition matches
               v
Engineering role requires
Engineering access profile
               |
  profile includes ENG-BASE membership
               v
Provisioning: add ENG-BASE
to the existing directory account
               |
      +--------+--------+
      |                 |
   succeeds           fails
      |                 |
verify membership   inspect operation,
on target account   error and target

Department sync is a separate write.
One result does not prove the other.
```

If department is updated successfully but the group add fails, the account can say Engineering while the required group is still absent. There is no contradiction: one operation delivered its change and the other didn't.

Likewise, a role assignment in ISC establishes the stated access requirement, not successful membership delivery. Identity processing doesn't validate that access was successfully provisioned after starting provisioning.

## See what the supplied observations actually establish

Here are the observations for our example on October 23, 2026. UTC means Coordinated Universal Time.

| Supplied observation | What you can conclude |
|---|---|
| 10:00 UTC: HR publishes department Engineering | The producing system has changed. Collection in ISC is not yet established. |
| 10:05 UTC: the exact collected HR-Primary account has Engineering | The required mapping input is available in ISC. |
| 10:06 UTC: relevant processing, current identity department Engineering and Engineering role assignment are verified | The stated identity value and access requirement are established. |
| 10:07 UTC: the department update result and a fresh directory observation confirm Engineering | The target department update succeeded. |
| 10:08 UTC: the ENG-BASE add reports insufficient permission | That group operation failed. |
| 10:09 UTC: a fresh directory observation confirms ENG-BASE is absent | The required membership has not been established on that account. |

The times establish the order of these supplied observations. They aren't processing durations, expected waiting periods or a required order between the two target writes.

At 10:05, we can verify account collection. We don't yet have evidence of the current identity result. That missing evidence doesn't prove either successful or failed processing.

At 10:09, we can be much more precise: the HR input and identity change are verified; the department update succeeded; group delivery failed with a permission problem and membership remains absent.

Reaggregating HR won't grant the missing group-operation permission. Replacing the department mapping won't repair it either.

The next corrective work concerns the authorized group operation and its reported failure. After resolving the cause, use the supported retry or recovery path for the affected work and verify membership on the intended target account.

Before repeating a change, check its scope and which operations already succeeded. A broad rerun can involve other identities and requirements. "Try everything again" doesn't explain which cause it is expected to correct.

## These responsibilities connect without one universal sequence

Aggregation can lead into identity processing. Specifically, when aggregation or provisioning modifies an identity, that event initiates identity processing. You shouldn't infer that an administrator must launch each step in our diagram separately.

In an optimized aggregation, ISC can skip unchanged account records. A completed source run therefore doesn't establish that every account and its dependent results were reevaluated.

The opposite assumption is also misleading: not every action called aggregation has the same downstream scope.

The UI **Aggregate Account** action reloads a selected account's data and status. Its documented scope excludes synchronizing that data into identity attributes and affecting provisioning. A completed account reload is useful collection evidence; it is not evidence that the identity or external access changed.

Account aggregation also differs from **entitlement aggregation**, which collects information about access objects such as ENG-BASE. Reading that a group exists doesn't add a person to it.

Identity processing has event-based, scheduled, time-based and manual initiation paths. Their configuration and identity eligibility matter. A mapping change may need supported application and processing even when the source data hasn't changed.

**Preview** evaluates selected identity-mapping results. A correct Preview helps check a mapping; saving it and checking one identity don't establish application across the profile population. Review shared impact, use the supported application path and verify the current results.

Processing can reevaluate more than department. **Manager correlation** resolves a manager reference to the corresponding manager identity. A **lifecycle state** describes a business stage, such as active employment, and can drive configured access. Alongside identity mappings, processing evaluates manager relationships, lifecycle-driven access and role assignments as applicable.

Manager and lifecycle state don't change in our example. They explain why a processing action may have broader consequences than "copy this department." If applicable inputs and conditions produce the same result, processing need not create a new change merely because it ran.

Provisioning has other initiators too. An **access request** asks for specified access; when approved under its configuration, it can initiate delivery. A **certification** is an access review whose decisions can require changes. These routes don't require repeating HR aggregation before every delivery.

The delivery path also depends on the integration. A supported direct connection can perform changes automatically. For a flat-file source, importing a file can't push an update to the external system; a manual provisioning task can require an authorized person to make the change.

A task records required work. It doesn't prove that the person has completed it. Inspect the task's account, source and required change, then the completion evidence and actual target state.

## Keep this comparison beside the record you're investigating

| Process | What it does and what to verify |
|---|---|
| Account aggregation | Collects configured account information into ISC. Verify the operation's scope and result and the exact collected account field. |
| Identity processing | Evaluates identity information and applicable access decisions using the available data and configuration. Verify the current identity value and relevant requirement. |
| Provisioning | Carries out required account or access changes through a supported automatic or manual path. Verify each intended operation, its result and the required target state. |
| Attribute synchronization | Specifies selected identity-to-account field alignment and uses provisioning to deliver updates. Verify eligible mappings, account association, scope and each field update. |

Aggregation supplies information that processing can use. Processing can establish an access requirement that provisioning must deliver. Attribute sync is one configured use of provisioning.

<a href="../assets/PROCESSING_COMPARISON_GUIDE.txt" download>Download the processing comparison guide</a>

## What changes when the account or input is different?

Attribute sync applies to existing **correlated accounts**, accounts associated with an identity. It doesn't create an account on its own. If another operation creates an account, sync can then enforce the configured alignment.

If one identity has multiple correlated accounts on the source, attribute sync updates all of them. You can't assume it selects only the account that an access profile would choose for delivering access.

This matters when someone has a normal account and a privileged account. An access profile's account-selection conditions don't narrow the separate sync scope. Review whether the field should follow the identity on both accounts.

Missing data needs its own decision too. **Null** means no value. When an identity-profile mapping sets an identity attribute to null, configured sync can propagate that null to account fields. It isn't a universal instruction to leave the old external value alone.

Agree what missing data means before enabling those writes. A department mapping that unexpectedly loses its input can have consequences beyond an empty identity display.

Now consider **drift**, a difference from the intended state. The current identity says Engineering, but an application administrator changes the directory account's department to Finance.

Directory aggregation can collect that native edit. Under the established sync configuration, detecting the difference can lead to separate corrective provisioning back to the identity's Engineering value.

The read collected a fact; the sync policy required a response; provisioning carries out the write. The possibility of a response doesn't turn account aggregation itself into a write operation.

Before enforcing the value repeatedly, establish whose value is approved. Is the application's Finance value an authorized exception, or should the account follow Engineering? Resolve that question with the responsible owners.

Avoid conflicting directions where the directory supplies identity department while another instruction independently overwrites the directory from different HR logic. Each field needs an agreed producer, any required calculation, enforcement direction and exception policy.

An **account schema** describes the fields represented for source accounts. A field's presence in that schema establishes neither a supported write nor permission to perform it. Reading the field, owning its business meaning and authorizing an update are separate decisions.

## Find the first requirement the evidence hasn't established

When you investigate "the change didn't work," walk through the actual observations.

If the collected HR account still has Finance, start with collection scope, account selection and timing. Processing can't be expected to read uncollected Engineering.

If the collected input is Engineering but the identity is wrong, inspect the governing profile, mapping, any calculation and relevant processing. A correct sample Preview doesn't replace checking the current identity.

If the identity is Engineering but the target department is wrong, inspect the intended update mechanism. For sync, check eligible configuration, the account association, the required value and the specific provisioning result.

If department is correct but ENG-BASE is missing, inspect the role requirement and group delivery. For the supplied failure, the group operation and target evidence identify the remaining work.

If the target values and memberships are correct but the application still can't be used, investigate the application's own behavior. **Authentication** checks who is signing in. **Authorization** determines what that signed-in user may do. A correct ISC field or group name alone doesn't prove either successful sign-in or usable application permission.

Keep each observation attached to the right record. A collected directory account describes what a read found at that time. A fresh external observation checks the target at the time of that observation.

Likewise, a general record-modified timestamp doesn't say which field, access requirement or delivery operation changed. Inspect the relevant details rather than treating any recent date as proof.

ISC also synchronizes identity information across platform services such as Search. That is a question of where identity information is visible inside the platform. It is separate from configuring an external account's department to follow the identity.

## Work through these process choices

### Questions

1. HR now says Engineering, but the associated collected HR account still says Finance. Identity department maps directly from that account. Should the investigation start by repairing the new Engineering role's provisioning?
2. The UI Aggregate Account action reloads the HR account with Engineering. No current identity or target result is checked. Does that action itself establish an identity update and group grant?
3. A department mapping is corrected and saved. Preview returns Engineering for one selected identity. No population application is verified. Have the profile's identities all been corrected?
4. Relevant processing, current identity Engineering and the Engineering role assignment are verified. ENG-BASE delivery reports insufficient permission. Does that failure establish that identity processing failed?
5. Directory department is Engineering, but ENG-BASE is absent and its add failed. Can successful department sync close the required-access incident?
6. Another identity has department Engineering but no directory account. Department sync is configured. Will sync create the missing account?
7. An identity has normal and privileged accounts on the same source. Both are correlated, and department sync is enabled. Can you assume only the normal account receives the field update?
8. Identity department remains Engineering. Directory aggregation detects a native change to Finance, and established sync can require a corrective write. Does that make aggregation itself a write operation?

### Work through the reasoning

**1. Establish the available input first.** The mapping still reads Finance. Confirm collection of the correct HR account and field before assuming the new identity value or role requirement. Another delivery fault can coexist, but these facts haven't established it.

**2. An account reload establishes its narrower result.** This UI action updates account data without synchronizing identity attributes or affecting provisioning. Use the appropriate supported processing path where needed, then check current identity and target evidence separately.

**3. One Preview doesn't establish population application.** It shows the selected mapping result. Review shared impact, apply the configuration through the supported path and verify current results across the required scope.

**4. The supplied facts identify a separate delivery failure.** The current identity and stated role requirement are verified. Investigate the group operation's capability, execution permission and error, then verify membership after correction. Don't relabel that error as failed identity processing.

**5. The required membership is still missing.** Department and group updates are separate changes. Keep the successful field result, but resolve and verify the failed membership before claiming the access requirement has been delivered.

**6. Sync needs an existing correlated account.** An approved account/access provisioning event needs the supported creation configuration to create one. Attribute sync can apply after another operation creates it; a field-alignment setting doesn't itself request creation.

**7. Both accounts are in sync scope.** Attribute sync updates all correlated accounts for that identity on the source. Check whether that is approved. Access-profile account selection doesn't narrow this field-update scope.

**8. Collection and the corrective response remain distinct.** Aggregation detects the changed account value. The established policy can then require provisioning to restore Engineering. Verify authority and exception policy as well as the required write and its outcome.

## Try the same reasoning with a phone number

An approved work phone changes in HR. The exact collected HR account and the current identity's workPhone field both contain the new number.

An existing contact-application account still has the old number. Its Create Account definition maps phone from workPhone, but ongoing phone synchronization isn't configured.

Someone proposes running HR aggregation until the contact application changes. What is missing, and which evidence would establish the correction?

Collection and the identity value are already verified. Another HR read doesn't create an ongoing update requirement for that existing account. The new-account mapping explains how phone would be populated at creation; it doesn't establish continued alignment.

First confirm that the contact account is supposed to follow the identity's workPhone, that it is associated with the right identity, and that a supported authorized update path exists. Attribute sync is one option if its eligibility and scope fit; another approved update mechanism can also meet the requirement.

Then inspect the specific phone update and verify the new number on the target. No access role or group-membership change is needed merely to make the phone field follow its approved input.

The remaining work is to establish the approved ongoing update mechanism for the existing account and verify that the required phone change was delivered.
