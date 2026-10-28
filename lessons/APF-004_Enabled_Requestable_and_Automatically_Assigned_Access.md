# The profile is enabled. Who actually receives its access?

An employee has an application account and can sign in, but cannot read or update work orders. An engineer defines a package containing the required access and enables it.

The employee still cannot update a work order.

Before calling that a failure, ask what has selected this employee to receive the package. Making a package available for use and deciding who receives it are different actions.

The records, native rules, configurations, times and outcomes below are hypothetical. They supply a supported example, not real tenant observations or a universal connector contract.

## Identify the package and the account separately

An **account** is the external record through which a person or another entity uses a system. A **group** collects members, such as accounts. A membership connects an account to a group, and the application can use that relationship to determine allowed actions.

In SailPoint Identity Security Cloud (ISC), an **entitlement** represents source access, such as a group membership. An **access profile** is a named bundle of related entitlements from one source.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

**Native** means belonging to the external application itself. Here, Work Orders Production supports reading accounts and groups and writing group-membership changes. The **Work-order maintenance** profile references these two represented entitlements:

- Work-order Readers permits reading work orders at the account's assigned site.
- Work-order Editors permits updating those orders when the same account also has Readers.

These rights do not permit application administration. The application also requires an enabled account and successful sign-in.

An **identity** is ISC's representation of a person or another entity. The employee's account is correctly associated with their identity and is their only account on this source. It is enabled, sign-in succeeds and its assigned site is North.

Neither group is initially present. No other grant gives this account the required rights. The selected entitlement records belong to Production, not similarly named Test access.

The example uses **standing access**: the memberships are delivered without a separate just-in-time activation requirement. Just-in-time access, where authorized access needs activation for a limited period, has additional behavior outside this example.

## What did enabling the profile change?

An **enabled** profile can participate in supported access-model use. Enablement changes the profile's status. It does not select employees or add native memberships by itself.

A profile created in the administrative interface starts disabled and needs at least one entitlement before it can be enabled. Inspect the exact saved record when checking its current state; do not infer that state from an old screenshot or an assumed API default.

The profile's status is also separate from the application's account status. Enabling Work-order maintenance does not enable a disabled application account. Our employee's account was already enabled before the profile existed.

When the administrative screen shows an enabled profile, it is showing the state of that access-model object. To explain a particular person's access, you still need the mechanism that requires access for them and evidence of delivery.

At this point in the example, no such mechanism requires this package for the employee. That explains the unchanged account.

## What does requestable make possible?

An **access request** asks for an access item for a recipient. ISC's **Request Center** is the user-facing place for finding and submitting supported access requests.

A **requestable** profile is configured to allow direct requests for that profile. It must also be enabled, and the applicable request permissions and audience restrictions must allow the intended request.

This configuration is presented through Allow Access Requests. In the access-profile model, `enabled` and `requestable` are separate yes-or-no properties.

For this example, the tenant's supported Request Center configuration permits an enabled profile to be non-requestable. That support must be checked in the actual tenant; do not assume every request experience or API configuration supports the same combination.

Work-order maintenance initially has direct requests off.

Even if requests were on, a person seeing the package would not thereby receive it. Availability allows a request to be made. It is not submission, a decision or a completed account change.

Now let's give the employee a specific, automatic reason to receive it.

## Configure the actual selection rule

An **ISC role** groups access for a broader business responsibility. It can include access profiles. Our role, **Facilities technician**, includes Work-order maintenance.

The role has **membership criteria**, conditions that select which identities should receive it. They are configured rules, not conclusions ISC derives from the role's name.

An **identity attribute** is a named value on an ISC identity. The role's criteria here read identity values, rather than a similarly named field on any arbitrary source account.

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. Its governing **identity profile** defines how source information populates identity attributes and which lifecycle configuration governs those identities.

For this example, the applied identity values are:

- Department: `Facilities`.
- Lifecycle State: `working`, the technical value of the enabled state displayed as Working.

Working is a configured state in this example. The criterion uses its technical value, not an assumed built-in label. These are current applied identity values, not merely new information in HR or a preview of values that has not been applied.

The enabled Facilities technician role requires Department equal to Facilities **AND** Lifecycle State equal to working.

AND means both conditions must match. Our employee satisfies both. A Facilities employee in prehire does not satisfy this rule, because matching Department does not compensate for the other failed condition.

The role includes the enabled profile, so its configured requirement supplies the reason for assigning that package. Direct profile requests can remain off.

## Follow that decision into the application

**Identity processing** evaluates an identity and relevant identity/access-model configuration. It uses applied information and configured requirements to determine access changes.

**Provisioning** carries out account or access changes. Processing can establish a requirement and start provisioning; it does not validate that the final native operation succeeded.

Saved access-model changes need the relevant processing to apply them to identities. For reviewed role, profile and application changes, Apply Changes initiates that recalculation.

Using Apply Changes on those list pages covers the related role, profile and application configurations together. It is not an isolated application of the last row edited. Review the actual change set and affected population before initiating it.

Use these supplied observations from the same day, in UTC:

- **10:00:** The profile is enabled and non-requestable. No role or lifecycle requirement yet includes it. Current native evidence shows neither group on the employee's account.
- **10:15:** The reviewed role, its two criteria and profile reference are saved and enabled. Relevant access-model processing is initiated.
- **10:17:** ISC evidence records the employee assigned to Facilities technician. The provisioning activity is pending. Fresh native evidence still shows neither group.
- **10:24:** Current native evidence shows Readers and Editors on that same account. With the account enabled and sign-in successful, a North-site work-order update succeeds. A South-site update is denied; administration remains unavailable.

No profile request was submitted. The role selected the employee using its configured criteria.

At 10:17, the assignment and working access had different states. That is expected while delivery is pending. At 10:24, the native memberships and scoped action establish the selected outcome. No other relevant account, permission or application-policy change occurred.

The times describe these observations, not a delivery guarantee or a recommended waiting period. A pending change, a rejected source operation and a successful native outcome need different evidence.

If a source operation instead reports a permission rejection, investigate that operation's exact source, account and error. An **integration credential** is the account or authorization the connector uses for its source operations. A verified missing credential permission needs an approved correction and supported recovery, followed by native checks. Turning on profile requests does not repair the rejected write.

## Automatic selection can have another basis

A role can also use an **identity list**, an explicitly configured list of identities that should receive it. Selecting identities into that list is a design choice; the role name still does not invent the recipients.

Alternatively, the governing Working lifecycle state could include Work-order maintenance as an access requirement.

That lifecycle design covers identities governed by that identity profile and state. It does not acquire a Facilities department restriction merely because the profile's name sounds like a technician package.

If everyone covered by the state needs the package, that can be appropriate. If only Facilities employees need it, review whether the lifecycle scope is too broad. Our main example uses the role's two conditions instead.

These automatic routes authorize access through the configured model. They do not ask each qualifying person to submit a profile request or invoke the profile's direct-request approval chain.

If an automatic grant is inappropriate, inspect the actual requirement, applied inputs and approval of the model change. Adding more direct-request approvers does not narrow an automatic role criterion.

## A direct request follows its own conditions

Consider an independent variation. Work-order maintenance is enabled and directly requestable. No automatic assignment applies to this employee.

The request permissions allow the employee to find the package and request it for themselves. They submit the required justification for access now. The configured reviewer is the recipient's manager.

An **approval** is the decision that the request may proceed. Submission alone does not establish that decision, and approval does not establish native delivery.

Once the applicable conditions are met, the supported delivery path must select the account and establish its required memberships. A pending activity, rejected operation or unfinished human task can leave access incomplete.

A future start date changes when access is due. If a request is approved today for a later start, lack of current access is not enough to diagnose failed provisioning. Check its date, time zone and current status.

Requestable also does not mean “manager approval always required.” That is supplied configuration here. Applicable local and global settings determine review behavior; turning off local Require Approval does not prove every approval is bypassed.

The **profile owner** is recorded as responsible for the package. Ownership alone does not insert that person into the reviewer chain.

A requested ISC role uses the role's approval process, rather than automatically invoking the approval settings of each included profile. Inspect the object being requested. Turning off direct requests for a profile is not a complete deny policy for every route to its underlying entitlements.

## Connect the route to delivery without merging their meanings

```text
Enabled profile
|
+-- Direct profile request
|   Requestable and allowed request
|   Decision/timing conditions met
|
+-- Configured automatic assignment
    Matching enabled role
    OR governing lifecycle requirement

Required account access
          |
          v
Select account and deliver change
          |
          v
Verify native rights and intended action

Enablement alone selects nobody.
```

The branches show the two route families discussed here. They are alternatives, not stages every identity must pass through. A configured automatic assignment does not wait for a direct profile request.

The direct branch includes the request's applicable decision and timing conditions. The automatic branch requires a real matching role or governing lifecycle requirement. Both still depend on the selected account and supported delivery.

The lower arrows show responsibilities to establish and verify the account result. They do not specify private backend services, a universal execution order or every way access can be recorded.

Our main account selection is simple because there is one account. With several accounts, supported automatic account-selection criteria and request-time account selection need separate inspection. Profile enablement does not choose the correct account by itself.

Automatic assignment also does not promise automatic source writes. A **manual provisioning task** is a work item asking someone to carry out a required source change. If that is the configured delivery path, the selection can be automatic while the actual change still needs human action.

Our main example instead uses supported membership writes. In either arrangement, verify the native result, not only the assignment.

| Profile configuration and situation | Result supported by those facts |
|---|---|
| Disabled, even if a requestable value remains | Not available for direct profile requests or provisioned through retained role/lifecycle references; existing native rights are separate |
| Enabled, non-requestable, no applicable assignment | No new recipient selected by enablement |
| Enabled, non-requestable, included in a qualifying automatic requirement | Direct profile requests are unnecessary; processing and delivery still matter |
| Enabled and requestable, but no request or automatic requirement | A permitted request route is available; no grant follows merely from offering it |

When a screen shows a setting, identify the object and scope of that setting. When it shows a role assignment, identify the requirement and evaluated inputs. When it shows an activity, inspect its account, operation and result.

| Question | Evidence needed |
|---|---|
| Is this profile enabled and directly requestable? | The exact saved profile and applicable request configuration |
| Why should this identity receive it? | Current applied identity inputs, enabled role and criteria or lifecycle requirement, and actual assignment evidence |
| Which account and change are involved? | Selected source/account and specific provisioning activity or manual task, with its result |
| Does the intended work succeed within scope? | Current native memberships and a checked action using the required account, sign-in and resource conditions |

## Turning requests off does not withdraw existing rights

Suppose an independently requested profile should no longer be offered as a direct choice. The team turns off Allow Access Requests using supported configuration.

That closes this direct profile-request route. It does not by itself remove native memberships, disable a role, remove a lifecycle requirement or revoke their assignments.

Our automatic-role example already had requests off when the employee received the groups. The request setting therefore cannot be treated as a universal access switch.

The current toggle also does not establish what happened to a request already submitted or executing. Inspect that request and its activity. Use an appropriate supported, authorized action if it must be stopped; a catalog-setting change is not cancellation evidence.

## Disabling the profile changes another layer

The team now pauses Work-order maintenance while reviewing its design.

At **11:00 UTC**, the profile is disabled.

A disabled profile is removed from the Request Center if it was offered there. Existing roles and lifecycle configurations can still reference it, but the disabled profile is not provisioned through those references.

At the next relevant identity processing, its held-profile association is removed. **Deprovisioning** means removing native access; disabling this standing profile does not deprovision memberships already received.

At **11:06 UTC**, supplied processing and identity evidence show the employee no longer associated with the profile. A fresh native check still shows Readers and Editors. A North-site update still succeeds. The account and application conditions are unchanged.

```text
Before disabling the profile
  Profile enabled and held
  Account has Readers + Editors
  North-site update works
             |
             | disable, then process
             v
After relevant identity processing
  Profile disabled, association removed
  Account still has Readers + Editors
  North-site update still works

No native removal shown in this change.
```

The arrow represents disabling followed by relevant processing in this example. No native removal is shown because that action did not remove the groups.

The profile association and native memberships are different state. A missing profile label is therefore not proof that the application should deny the operation.

If the real requirement is to end work-order maintenance, review how the access was assigned, ongoing requirements and other relevant grants. Use the supported authorized removal design and verify the native result.

Do not assume every overlap preserves access or that a role-derived profile can always be revoked directly. The origin and operation determine which path must be investigated.

A **certification** reviews whether existing access should be retained. A disabled profile can remain in an existing certification, with its revocation decisions still enforceable. Pausing the profile is not cancellation of that review.

## Reenabling needs a review of the current model

The disabled profile can retain its place in role and lifecycle configurations.

If Facilities technician still includes it, reenabling and applying configuration can make it available for that role's provisioning again. Inspect the current eligible population, criteria and entitlement references before doing that.

Also inspect the saved requestability setting. Reenabling is not evidence that the profile should now become a direct request choice.

Unexpected disablement needs investigation too. ISC can disable a profile automatically if all its entitlements are deleted. Check whether the intended entitlement objects still exist and whether their references are valid. Do not blindly enable an empty or incorrectly rebuilt package.

Source provisioning capability, role status, lifecycle-state status, profile status and native account status belong to different objects. One enabled label does not certify the entire access path.

## Work through the evidence

### 1. Enabled, but nobody selects the employee

The profile is enabled and non-requestable. Both groups are absent. No role, lifecycle requirement or other grant route applies.

Should enablement have added the memberships?

**Reasoning:** No. No recipient mechanism requires the access. Establish the approved assignment design. Repeating application of an unchanged profile does not invent that missing requirement.

### 2. Non-requestable, but the role matches

The role and profile are enabled. The role contains the profile, both applied identity criteria match, and relevant processing evaluates them.

Does direct non-requestability block this automatic assignment?

**Reasoning:** No. It controls direct requests for the profile. Follow the automatic requirement through source/account delivery and verify the native memberships before claiming completed access.

### 3. Requestable, but nobody requests it

The profile is enabled and permits direct requests. No request is submitted, no automatic requirement applies and both native groups are absent.

Has requestability selected every eligible requester?

**Reasoning:** No. Availability is not submission or assignment. The permitted route still has to be used under its configured conditions.

### 4. Only one criterion matches

Another identity has Department Facilities and Lifecycle State prehire. The role requires Facilities AND working. No other route applies.

Should this role give the person the package?

**Reasoning:** No. Both comparisons must match. Inspect current applied values and the approved requirement; do not weaken the rule or falsify identity information merely to make a test identity qualify.

### 5. Approval is for a later start

In a request-only variation, the employee has no groups. The request is approved today, with a future start date that has not arrived.

Does absent access now establish failed provisioning?

**Reasoning:** No. The timing condition does not yet require current access. Check the start date and time zone, request state and later delivery evidence. Approval and the access-start boundary are separate facts.

### 6. An enabled role still references a disabled profile

The role is enabled and still includes the disabled profile. A newly qualifying employee lacks both groups.

Does the reference mean those groups should be delivered through this profile anyway?

**Reasoning:** No. The reference can remain while the disabled profile is not provisioned. Check the state and authorized reason for pausing it rather than reenabling merely to make the reference active.

### 7. Processing finishes, but a write is rejected

A role assignment is recorded and identity processing completes. The specific group-add operation reports a source permission rejection, and current native evidence shows the group absent.

Did processing completion establish successful delivery?

**Reasoning:** No. Evaluation and the source change have different outcomes. Inspect the exact operation, account and required source permissions. Use approved correction and supported recovery, then recheck native access. Requestability does not repair a rejected write.

### 8. The profile association disappears

After disabling and relevant processing, the employee no longer holds the profile in ISC. Current native evidence shows both groups, and a North-site update succeeds.

Has the disappearing association removed the maintenance capability?

**Reasoning:** No. The memberships remain under the supplied disable behavior. If removal is required, establish the correct operation and ongoing requirements, perform the authorized change and verify the account's actual outcome.

## Try the same reasoning with a license

A **license** gives an account the right to use a product or feature set under the application's licensing model.

An enabled Design editor profile contains its editor-license entitlement. Direct profile requests are off. An enabled Product designer role includes it and selects identities whose applied job code equals `DESIGN`.

One designer matches, but the attempted license assignment reports no available license capacity. Another employee does not match and has no other route.

Why does neither have working editor access, and would turning on profile requests fix the causes?

**Reasoning:** The first employee has a configured automatic requirement, but the supplied delivery failed because capacity was unavailable. Investigate capacity and the supported recovery path. A new request cannot create a spare license.

For the other employee, the supplied model creates no requirement. Establish whether their real work justifies qualifying for the role, an approved exception through another supported route, or no access. Do not falsify the job code to force a match.

If an exception request is appropriate, deliberately configure its route and controls. Requestability is only part of that design, not an assignment.

Finally, suppose an existing designer already has the native license when the profile is disabled. A disappearing profile association does not prove the license was reclaimed. Verify the required native removal and resulting capacity separately.

For any setting change, identify the object and route it controls, then choose evidence that establishes the selected account's actual access.
