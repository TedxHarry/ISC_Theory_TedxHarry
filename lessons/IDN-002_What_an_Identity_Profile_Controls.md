# What does an identity profile actually control?

A Human Resources (HR) worker record says Department HR. The associated directory account says FIN, and the identity in SailPoint Identity Security Cloud (ISC) also shows FIN.

Both source accounts have been collected and correctly associated with the identity. The identity is governed by the Employees profile.

Should changing that profile make Department HR? Would it also change the directory, repair sign-in or provide an application's required access?

The profile connects to all of those areas, but each result depends on its own settings and operations. Let's start with why the identity currently shows FIN.

## Shared configuration governs a population

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a particular system, such as an HR worker record or directory login.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behavior. **Aggregation** collects supported account or access information into ISC.

An **identity profile** is shared configuration for identities associated with an **authoritative source**, the source supplying accounts from which ISC establishes those identities.

In our neutral example, HR-Production is authoritative through Employees. The worker account is hr-record. A separate Directory-Production account, directory-user, is also correctly associated.

**Account correlation** is matching and associating source accounts with their owners. That relationship is already correct here; the Department question isn't an ownership problem.

Other identities governed by Employees share its settings. A change made during one incident can therefore affect a population, not just the identity on screen.

An identity can have only one governing profile at a time. If it has accounts on multiple authoritative sources, the highest-priority eligible profile applies. This assumes the accounts already belong to that identity; priority doesn't merge separately created identities.

Identify the governing profile first. Its name alone doesn't assign someone to it.

All values, configuration choices and completed results below are supplied examples, not observations from a live tenant.

## The mapping selects the value, even from another source

An **attribute** is a named piece of information. An account attribute belongs to a source account; an identity attribute belongs to the ISC identity.

An **identity attribute mapping** specifies how to obtain an identity value. A direct mapping selects a source and account attribute. A **transform** can calculate or convert values through configured operations; a supported **rule** can supply logic implemented in code.

A **lifecycle state (LCS)** describes a business stage, such as pre-hire, active employment or termination. The Lifecycle State mapping supplies the value used to select its configured state.

Here are selected current inputs and results:

| Identity attribute | Current selected input | Current result |
|---|---|---|
| Identification Number, identificationNumber | HR-Production: workerNumber = W-102 | W-102 |
| User Name, uid | HR-Production: iscUserName = user-w102 | user-w102 |
| Work Email, email | Directory-Production: mail = worker-w102@example.invalid | worker-w102@example.invalid |
| Last Name, lastname | HR-Production: familyName = Worker | Worker |
| Department, department | Directory-Production: department = FIN | FIN |
| Lifecycle State, cloudLifecycleState | HR-Production: workerState = active | active |

These are selected teaching values, not a complete account response or upload template. The email is illustrative; no real mailbox or delivery is claimed.

HR's workDepartment contains HR, but Department currently selects the directory's department field. FIN is therefore the expected result of the saved mapping.

Authority establishes the population. It doesn't make every authoritative-source field override other selected inputs.

The email row demonstrates the same independence. Directory-Production is non-authoritative for this population, yet its associated account can supply an identity value.

User Name, Work Email and Last Name must be mapped and non-null, meaning they must have values. User Name must be unique across identities from all profiles.

Missing required values or duplicate usernames can produce **identity exceptions**, reported problems with identity information. A profile existing doesn't establish that every mapped input is available or valid for its purpose.

## Complete the Department change before calling it fixed

Suppose the organization approves HR workDepartment as the intended Department input. The proposed mapping changes from Directory-Production department to HR-Production workDepartment.

First review the Employees population and the decisions that consume Department. A shared mapping can affect records where the new input is missing, different or unexpected.

**Preview** evaluates proposed mappings using a selected identity's data. HR appearing in one preview establishes the proposed result for that record. It doesn't establish coverage of everyone governed by Employees or change any target account.

**Identity processing** evaluates identity information and relevant access configuration. After saved changes, the profile can show **Needs Processing**. **Apply Changes** initiates processing for identities associated with that profile.

Applying isn't merely refreshing the screen. Processing can update mapped values and re-evaluate configured access requirements.

In the supplied corrected result, identity Department is checked and contains HR. Employees still governs the identity, and its source-account associations are unchanged.

The directory account still contains FIN. No attribute synchronization is configured in this example.

**Provisioning** performs supported external account or access changes. **Attribute synchronization** is separately configured behavior that sends selected identity values to account attributes through supported provisioning. It isn't an automatic consequence of choosing a new identity input.

So the evidence establishes an identity-value correction. A directory write would need its applicable configuration, operation and target result. Sign-in repair and application access also need separate evidence.

When someone asks to fix Department everywhere, establish which records should change and who owns each value. The identity's HR value and directory's FIN value don't become one shared field just because they describe departments.

## Profile mappings and attribute definitions have different scopes

The **tenant** is the organization's ISC environment. Identity attribute definitions are shared across that tenant, even though each profile has its own mappings.

Adding a custom identity attribute while editing Employees makes its definition available in other profiles too. Those profiles don't all have to map it.

Deleting the definition is also tenant-wide. An empty Employees mapping doesn't prove the attribute is unused by Contractors or by access rules. Review its consumers before deletion, and don't delete default attributes.

Manager information has another dependency. A profile can map **Manager Name**, the input reference, but establishing the reporting relationship also needs source **manager correlation**, matching the supplied reference to the manager's identity.

A manager-looking string alone doesn't establish that the intended reporting relationship exists.

## What does the profile control about signing in?

**Authentication** verifies a sign-in. It is different from representing an identity or granting permission in an application.

Profiles include sign-in and security settings for their populations. The actual path also depends on the tenant's wider authentication configuration.

For local username-and-password registration, invitation and registration matter. A complete identity doesn't prove that an invitation was delivered or registration completed.

**Directory Connection**, also called **pass-through authentication (PTA)**, lets ISC use a supported authentication source to verify the person's network password. The selected source and relevant accounts must have been aggregated before configuration, and that source must support the operation.

In this example, Directory-Production is the configured supported authentication source for Employees, with the correct associated directory account.

That doesn't make it the personnel-authoritative source. It also doesn't copy a password into identity attributes. The Department and email mappings don't describe password verification.

**Single sign-on (SSO)** can instead use an external **identity provider**, the service authenticating the user and supplying that result. Investigate the actual SSO path rather than assuming local-password settings explain every sign-in.

Profiles also include **multifactor authentication (MFA)**, verification using more than one authentication factor, password-reset and unlock verification methods, and network or geographic restrictions. Administrator MFA requirements still apply even if the profile's MFA checkbox is disabled.

Consider **Off Network**. It depends on the tenant's network definition, which specifies the organization's network ranges. Enabling the restriction without that definition blocks all users associated with the profile from accessing ISC.

That is a security-setting result, not evidence that their identities disappeared. Use the approved security-review process rather than recreating identities or changing credentials from that symptom.

Production PTA-source changes need particular care: SailPoint directs organizations to consult Support because the change can prevent authentication. A profile setting isn't a generic troubleshooting switch.

## Lifecycle access needs both a value and configured behavior

The profile defines lifecycle states for its population. The cloudLifecycleState mapping supplies a value; the matching state's configuration defines its behavior.

For Employees, suppose the enabled state's technical name is active. HR workerState supplies active.

The match is case-sensitive. `Active` and `active` aren't interchangeable technical values. A display label that looks right doesn't fix a mismatched mapped value.

New lifecycle states are disabled by default. Creating the name doesn't establish an enabled state to which identities can be assigned.

When provisioning is enabled, the profile can also configure automatic registration invitations at a specified enabled lifecycle state. That is an invitation rule, not proof of delivery or registration.

An **entitlement** represents an access right, such as application group membership. An **access profile** bundles entitlements from one source into a named access package.

Our independent lifecycle variation uses Benefits Self-Service, an access profile on Benefits-Production containing benefits-selfservice. It provides employee self-service, not benefits-administration rights.

Employees' enabled active state requires that access profile. The identity profile defines when the bundle is required; the access profile defines the bundled access. They aren't the same object.

Lifecycle configuration can also specify account actions on selected sources, access removal and notifications.

An **identity state** is a separate ISC processing and service-participation classification, such as Active or Inactive (long-term). Lifecycle configuration can select it, but it isn't an application's enabled or disabled account flag.

A state label such as Terminated doesn't, by itself, prove every account was disabled. An Active identity also doesn't prove all its application accounts are enabled. Inspect actual configured actions and their results.

## Follow the access requirement to the target

In this variation, benefits-user already exists and is correctly associated with the identity. It lacks benefits-selfservice.

Assume provisioning is enabled, the lifecycle configuration is saved and applied, and automatic assignment places the identity in the enabled active state.

The integration supports the entitlement change, its credentials have the required permission, and the existing account is the unambiguous target. No competing assignment or removal applies.

Identity processing evaluates the mapped state and its configured access requirement. Provisioning performs the supported operation. The engineer then checks operation evidence and actual membership.

```text
[HR workerState: active]
              |
[Employees maps cloudLifecycleState]
[Value: active]
              |
[Matches enabled active state]
[Requires Benefits Self-Service]
              |
[Identity processing evaluates access]
              |
[Supported provisioning]
[Target: benefits-user]

[Engineer checks result + membership]
```

The connected lines show dependencies between the input, enabled-state requirement, evaluation and supported write. They don't guarantee delivery or specify private transaction stages or duration.

The separated engineer line is human verification. In the supplied successful result, the operation reports success and benefits-user is independently confirmed to have benefits-selfservice.

That establishes this membership change. It doesn't establish every sign-in requirement or unrelated administrative permission.

If the target denies the operation, a correct state value doesn't supply missing connector permission. Identity processing doesn't validate successful provisioning after initiating it.

Configured lifecycle account actions also aren't evidence of a permanent monitoring loop that continuously repairs every account state. Inspect actual execution and supported retry behavior; don't promise endless retries from a state label.

Access profiles assigned through the current lifecycle state are enforced while the identity remains there. If such a profile is removed while still required by that state, it is provisioned again.

On leaving the state, its granted profiles are revoked unless the new state also assigns them. Other assignment paths and removal settings still matter before predicting all effective access.

## The profile supplies inputs to other access mechanisms

An **access request** asks ISC to arrange specified access for an identity. It follows applicable request policy and fulfillment. It isn't an identity profile.

A **role** represents an access package or business responsibility and can use configured membership criteria. A profile can supply identity values those criteria consume.

For example, a role could require identity Department HR. Correcting the mapping can affect that role's evaluation without editing the role definition. That is a dependency to review, not a promise that every Department change grants a particular role.

Here is the responsibility map:

```text
[Employees identity profile]
  |
  +-- Authoritative population
  |   HR-Production workers
  |
  +-- Identity attribute mappings
  |   Selected input for each value
  |
  +-- ISC sign-in/security settings
  |   Applicable authentication path
  |
  +-- Lifecycle configuration
      State mapping + enabled states
      Access requirements + actions
```

These branches are configuration responsibilities, not execution order. ISC uses each setting in its applicable process.

A Department change doesn't, by itself, establish an authentication-source change, registration invitation or grant of every bundle. Verify the consumer and result relevant to the request.

## Use each observation for the claim it supports

**Authorization** determines what a signed-in account may do. Authentication, observed membership and successful use of a permitted action are related but separate evidence.

| Observation | What it establishes | What still needs checking |
|---|---|---|
| Identity shows Employees | Governing profile | Relevant mappings and settings |
| Saved Department input selects HR | Intended configuration | Preview, applied processing and actual value |
| Preview shows HR | Proposed result for selected data | Other population cases and represented outputs |
| Identity Department becomes HR | Identity value changed | Required directory sync or access effects |
| Mapped cloudLifecycleState contains active | Value available for state selection | Exact technical-name match, enabled state and actual assignment |
| Identity's lifecycle assignment shows active | Represented state assignment | Required access configuration and target results |
| Benefits account holds the entitlement | Observed target membership | Authentication, authorization and other account conditions |

Don't delete and recreate a profile to repair one stale value. Deletion makes its source non-authoritative and can delete identities unless they can be reassigned. It doesn't itself delete or deprovision the source's external accounts.

That changes population-defining configuration, not just the Department input being investigated.

## Work through these support questions

### 1. HR is current, but Department follows the directory

HR workDepartment contains HR. Directory department contains FIN. Employees still selects the directory for identity Department.

Would another HR aggregation establish that Department will become HR?

**Worked reasoning:** No. The selected mapping still consumes FIN. Confirm the approved value owner and mapping. Reading an unselected input doesn't change that selection.

### 2. One preview looks right

The new Department preview shows HR. Employees still shows Needs Processing, and the stored identity value hasn't been checked.

Can the incident be closed?

**Worked reasoning:** No. Preview isn't completed application. Review the population, apply the approved change through identity processing and verify actual identity values and relevant downstream results.

### 3. One capital letter differs

The enabled technical state is `active`, but the mapped value is `Active`. No manual alternative assignment applies.

Is that an exact match?

**Worked reasoning:** No. Technical-name matching is case-sensitive. Review the mapping and approved normalization, conversion into the required representation, then verify the corrected assignment. Editing display wording isn't equivalent.

### 4. The bundle belongs to another profile

Contractors governs an identity. Only Employees' active state grants Benefits Self-Service, and no other assignment path is supplied.

Does an active contractor inherit it because both display labels say Active?

**Worked reasoning:** No. State configuration is per profile. Check the governing profile and enabled state; a shared label doesn't copy another profile's access requirements.

### 5. The target denies the write

The identity is correctly active and its configured access requires benefits-selfservice. Provisioning reports insufficient target permission.

Should the Lifecycle State mapping be repaired first?

**Worked reasoning:** The evidence identifies an execution problem. Review the approved integration permission and supported operation, then recover and verify target membership. Repeating processing or broadening rights without understanding the denial doesn't repair it.

### 6. Employees' users can't sign in

Off Network was enabled without a tenant network definition. Worker accounts and identities remain present.

Should the identities be recreated?

**Worked reasoning:** No. Those settings can block the profile's users from ISC. Review the security configuration through the approved process. The symptom doesn't establish missing identities or bad credentials.

### 7. A custom field looks unused locally

A custom identity attribute is unmapped in Employees but used by a Contractors mapping and a role condition.

Is deleting it local cleanup?

**Worked reasoning:** No. Its definition is tenant-wide. Review other profiles and consumers; an empty local mapping doesn't establish global lack of use.

## Review a contractor email change

A project proposes moving contractor Work Email from a register's emailAddress to a directory account's mail. Some contractors have no directory account yet.

Email is required, and local-registration invitations use it. No fallback or complete directory-coverage evidence is supplied.

The proposal says, “Preview one person and apply it. It's only one mapping.”

What must be established first?

**Worked reasoning:** Identify the affected population, correct account associations and availability of mail for every required case. A successful preview doesn't cover people without the supplying account.

Trace their proposed output, required-value exceptions, invitation dependency and other consumers. Establish how the directory account becomes available rather than assuming it supplies a value needed earlier in onboarding.

Agree the field owner, initial-value design and correction path. Review representative cases before applying, then verify actual identity outputs and applicable downstream results.

If coverage isn't established, state the missing evidence. One good sample doesn't resolve it.

A profile change can be explained when you can identify its governed identities, changed input or setting, consuming processes and the evidence for the required outcome. Saving answers only the configuration part.
