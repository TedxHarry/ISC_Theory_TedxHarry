# Authoritative for what: the person, a value, a login, or a change?

The employee system says Finance, but SailPoint Identity Security Cloud (ISC) still shows Vendor Services as the person's department. Both the employee and contractor records have been collected.

Should another read of the employee system force Finance onto the identity?

First follow the configuration that produces the identity value. ISC can have the correct employee data and still use a different configured input. The question is which arrangement applies to this person, then where that arrangement obtains department.

## Start with the person and the accounts ISC represents

An **identity**, for the people in this example, is ISC's person-level record. An **account** is a record in another system. ISC keeps information representing that external account and can associate it with an identity.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** is the integration software used to read information and perform the operations it supports.

**Aggregation** collects account or entitlement information into ISC. An **entitlement** is an access item represented from a source, such as a permission or group membership.

One person can have an employee record, a contractor record, a directory account and an expense account. Those are four account records with different jobs, rather than four people.

The design needs to establish the person in ISC and connect the additional accounts to that identity. It also needs rules for producing the person's identity values. These responsibilities are related, but they aren't the same decision.

## Use an authoritative source together with an identity profile

An **authoritative source** provides accounts used to establish ISC identities through an **identity profile**.

The identity profile holds configuration for those identities. It connects the source to identity establishment and defines how account information supplies identity values, along with relevant sign-in and identity-management settings.

An **attribute** is a named value. An **account attribute** belongs to a source account, such as its department. An **identity attribute** belongs to the person-level ISC identity.

A **mapping** specifies where an identity attribute gets its value. It can select an account field from a source or use supported calculation logic.

For a simple new-person arrangement, assume a valid employee record is available. Its source is configured with an identity profile, the required mappings are present, and their inputs supply the required identity values.

Aggregation brings in that account data. Under the configured arrangement and applicable processing, ISC can establish the identity and populate its mapped values. Marking a source authoritative is therefore only part of the setup: the profile, mappings and usable data complete the intended arrangement.

Additional application accounts can then be associated with the existing person. **Account correlation** matches collected source accounts to identities under configured comparisons.

```text
Authoritative account + identity profile
                 |
       establishment and mappings
                 v
         ISC person identity
                 ^
       configured owner association
                 |
Additional collected application accounts

The arrows show different relationships.
```

The first relationship establishes the person through the source and profile. The second connects other accounts to that person. The diagram isn't a private execution order, fixed schedule or guarantee that every collected record creates a valid identity and every additional account matches.

A **non-authoritative source** isn't designated as that profile-backed origin. It can supply additional accounts and data to associate with people established through the organization's authoritative arrangements.

### What if an application account arrives before it can be matched?

An **uncorrelated account** has been collected but hasn't been matched to an established authoritative identity representing its owner.

ISC can use a **shadow identity**, a placeholder representation for uncorrelated account data. That representation isn't the same result as successfully establishing the intended person through an authoritative profile.

So “non-authoritative sources never have any identity representation” would be too absolute. Ask whether the source establishes the intended person through a profile or supplies additional account information for someone established elsewhere.

An account can be read successfully while its ownership remains unresolved. An account associated with the wrong person has a different problem; it isn't uncorrelated merely because the association is incorrect.

## Choose the role according to the source's responsibility

A **Human Resources system**, or **HR system**, can supply employee records. A contractor register can supply another intended population.

A directory can also be authoritative when its accounts are the organization's chosen basis for identities. Authority isn't reserved for products called HR, and useful finance data doesn't automatically make a finance application's account list the right personnel origin.

“Authoritative” describes a responsibility in the identity design. It isn't a security or data-quality score. Non-authoritative accounts and data can still need careful governance.

It also isn't a measure of connector capability. A personnel source supplied through imported files can establish identities through its profile without automatically changing external accounts.

**Provisioning** carries out supported account or access changes. A non-authoritative application source can support that work when its connector, configuration and external permissions allow it.

Keep these questions distinct: “Which arrangement establishes this person?” and “Which integration can perform this account change?”

## Establish the overlap before deciding which profile applies

Return to the department mismatch. The person has moved from contractor work into employee work, but both records remain present.

The hypothetical arrangement contains these accounts:

| Source | Account | Responsibility here |
|---|---|---|
| Employee HR | `employee-record` | Authoritative source for the Employees identity profile |
| Contractor Register | `contractor-record` | Authoritative source for the Contractors identity profile |
| Corporate Directory | `directory-user` | Non-authoritative account source; supplies email and checks directory sign-in credentials |
| Expense application | `expense-user` | Non-authoritative application-account and access information |

Assume all four accounts have been collected and correctly associated with the same existing ISC identity. Both authoritative accounts already belong to it.

Their external account identifiers are distinct. They share an appropriate person reference, `workerRef = W-24`, under the approved matching design. Their correct association is a supplied fact, rather than a conclusion drawn from similar names or the shared value alone.

The employee account contains department Finance. The contractor account contains Vendor Services. Neither account value is missing.

The business wants the employee arrangement to apply while these records overlap. ISC needs configuration expressing that choice. The employee record being newer doesn't express the policy by itself.

## Let priority select one applicable profile

An identity uses one identity profile at a time. When it has accounts on multiple authoritative sources, ISC selects the highest-priority profile among those sources.

A **profile priority** is the ordering used for that selection. Lower numerical values have higher precedence: a profile at 10 takes precedence over one at 20.

First establish applicability, then compare priority. A high-priority profile doesn't apply to every person simply because it exists. This identity must have the relevant authoritative account relationship.

By default, earlier-created profiles have higher priority. The first receives 10, the next 20, and the pattern continues. That creation order may no longer fit the intended employee-versus-contractor policy.

Here are the supplied settings and the later approved correction:

| Profile | Initial priority | Priority after correction |
|---|---|---|
| Contractors | 10, higher precedence | 20, lower precedence |
| Employees | 20, lower precedence | 10, higher precedence |

Initially, both authoritative accounts belong to this identity and Contractors has the higher priority. Contractors therefore supplies the applicable profile configuration.

Reading Employee HR later doesn't change the selection rule into “last read wins.” Priority chooses the profile; the selected profile then provides the relevant mappings and settings.

Priority also isn't permission to administer ISC, a data-quality rating or an identity-merging operation. If the two accounts were on separate identities, changing order wouldn't repair that relationship. The starting account associations need to be investigated separately.

The table describes this example's approved population design. It isn't a rule that every organization must rank employees and contractors this way.

## Follow the selected profile's department mapping

The supplied mappings are:

- Contractors obtains identity department from Contractor Register's department.
- Employees obtains identity department from Employee HR's department.
- Both obtain identity email from the intended Corporate Directory account's mail value.

Assume there is one intended directory account, its association is correct, and these supported mappings are valid.

Let's trace the initial department result:

1. This identity has both relevant authoritative accounts.
2. Contractors has higher priority, so Contractors applies.
3. Its department mapping selects the contractor account's department.
4. That input contains Vendor Services.
5. The evaluated identity department is Vendor Services.

Meanwhile, `employee-record` still contains Finance. These values belong to different records. The HR value describes the source account; the identity value is produced through the selected profile's mapping.

**Identity processing** evaluates identity data using the relevant configuration, including mapped attributes and applicable access logic.

A new aggregation can update the account information available to that processing. The mapping still determines which input supplies department. Read timing isn't a universal conflict-resolution rule.

You can now investigate the mismatch without overwriting correct HR data. Check the account associations, applicable profile, priority, actual mapping and its input.

## Review what a priority change can affect

A **lifecycle state** is a configured identity state used in identity-management and access behavior, such as an active or leaving arrangement.

A **role** groups access for a business purpose and can have assignment conditions.

If department or state changes, configured role and lifecycle logic can evaluate differently. A different profile can also bring different sign-in settings and other attribute mappings.

Priority is population configuration. Changing it can affect other identities with the same overlap, rather than only the person used to demonstrate the mismatch.

Assume the responsible owners assess those effects and approve Employees taking precedence. They use the supported configuration and processing path.

The underlying account values and their identity associations remain unchanged. The supplied verification now shows the same identity using Employees, with department Finance from HR. Its email remains `person@corp.example` from Corporate Directory.

The correction changes which profile supplies the rules. It doesn't need to falsify Vendor Services on the contractor record or create another identity.

Verify the saved order, actual profile association, account relationships, mapping inputs and processed values. The preserved relationships are supplied outcomes in this example, not a guarantee that every migration preserves every relationship automatically.

If access changes were also expected, continue into the account-operation and target evidence. A correct department is an identity-side result; it isn't proof that application access has been delivered.

## Use other sources for values without giving them the identity-origin role

The Employees profile obtains department from HR and email from a non-authoritative directory.

```text
Employees profile supplies the mappings
  |
  +-- HR department: Finance
  |       |
  |       v
  |   Identity department: Finance
  |
  +-- Directory account mail
          |
          v
      Identity email

One applicable profile, two inputs.
```

The source used to establish the identity doesn't have to supply every attribute. Corporate Directory can provide the configured email input without becoming authoritative.

The diagram shows two mappings in one applicable profile. It doesn't show two simultaneously active profiles or a search for whichever source value arrived last.

A **transform** calculates or formats a value using supported logic. A **fallback** is an explicitly designed alternative when a preferred input cannot be used.

For example, a mapping design can test whether its preferred input is available, then use a specified alternative under the supported conditions. That behavior must exist in the mapping or calculation.

Profile priority doesn't automatically turn Contractors into a per-field fallback provider when an Employees department or email mapping lacks a value.

**Manager correlation** establishes the relationship between a person's identity and their manager's identity using its configured matching. Account correlation instead identifies which person owns an account.

Manager relationships have their own configuration and selection behavior. Don't infer their complete mechanism from the department/email example or generalize the ordinary attribute-mapping explanation to every relationship.

## Check required identity values separately from successful collection

ISC requires these identity attributes to be mapped and populated:

- **User Name**, `uid`.
- **Work Email**, `email`.
- **Last Name**, `lastname`.

User Name must be unique across identities from all identity profiles. An external account name that is unique within one source doesn't establish that identity-wide uniqueness.

An **identity exception** reports a problem such as a missing required value or duplicate User Name.

**Null** means no value is supplied. Suppose aggregation succeeds, but the Employees email mapping returns null. The account data was collected; the required identity email is still unresolved.

An address on a lower-priority source doesn't automatically fill that gap. Inspect the selected mapping, available account data and any explicitly configured alternative.

An **account schema** describes the fields represented on account records. Defining a mail field in the schema doesn't establish that the relevant directory account currently has a usable mail value.

Correct the responsible data or supported mapping. Inventing an address to silence the exception wouldn't repair the missing business information.

The documented required-value check also has a specific limit: Work Email must be non-null, but that check doesn't validate it as an email address. Passing it doesn't establish correct format, deliverability or suitability for sign-in and notifications.

## Find the source that checks the sign-in credential

A **credential** provides proof used in an authentication check, such as a password. **Authentication** checks the required proof.

An **authentication source** is a supported source configured to check user credentials in ISC's **Directory Connection** arrangement, also called **pass-through authentication**, or **PTA**.

In this example, Corporate Directory has that role. Assume its connection and the intended directory account have been configured correctly and the relevant accounts have already been collected.

The employee/profile arrangement establishes the person. The authentication integration checks the person's directory credential for this sign-in path. Those jobs can belong to different sources.

If the directory connection becomes unavailable, making HR authoritative doesn't supply a replacement credential check. Follow the actual authentication dependency and its reported failure.

**Single sign-on**, or **SSO**, lets participating services use an established authentication relationship under a configured trust arrangement. It has its own configuration and operation.

Making a source authoritative doesn't copy users' passwords into ISC or configure SSO for every application. The PTA example doesn't acquire an SSO route simply because HR is authoritative.

A profile change can affect sign-in settings, which is why it needs an authentication impact review. That connection doesn't make identity origin, attribute input and credential checking interchangeable.

## Establish target authority for an account change

The **target** is the external system where an account operation would occur. **Authorization** determines whether the accepted caller may perform an action there.

The connector needs support for the operation, the correct destination, applicable configuration and the required target permissions. Its integration credential is used to act in the target; it isn't the employee identity receiving the access.

A **read-only source** collects supported information without configured automatic target changes. Authoritative designation doesn't implement a missing account-create operation or grant the integration extra target privileges.

A non-authoritative source can still support approved account creation and permission changes. The source's identity responsibility and its supported operations answer different questions.

An **access profile** bundles entitlements from one source. An **identity profile** configures identities, mapped values and related settings. The similar names don't make them interchangeable.

An **access request** asks for specified access for a recipient.

Applicable roles, lifecycle configuration and access requests can drive account changes. Having an authoritative account doesn't automatically grant every application permission.

Identity processing can initiate provisioning without validating that delivery succeeded. Follow the account action and target result when confirming access. Employees selected and Finance calculated establish identity-side outcomes, rather than completed external changes.

## Distinguish a status change from removal of an authoritative account

Suppose the employee account remains associated, but its employment-status value changes.

The authoritative-account relationship still exists. The changed attribute alone doesn't establish that Contractors now applies. Inspect the actual profile association and relevant lifecycle and processing configuration.

Likewise, a temporary source outage isn't evidence that its authoritative accounts were deleted.

A different situation arises when the authoritative account is deleted externally. A supported full source aggregation with account deletion enabled can remove its ISC representation, subject to the applicable deletion safeguards. ISC then reassesses the identity's profile association.

If another authoritative account remains, the identity can move to the appropriate remaining profile and its values can be recalculated using that profile's mappings. This is a change in the account relationships, not merely a changed employment-status value.

If no authoritative account remains, deletion or **hidden-identity** handling has additional conditions. A hidden identity is retained when dependencies prevent deletion; it lacks the normal profile connection and doesn't appear in the usual Identities view. Other accounts or ownership responsibilities are examples of dependencies that can matter.

That retained or deleted identity state doesn't establish that every external account or session ended.

**Deprovisioning** removes or reduces access through applicable account-changing behavior. A profile change or disappearance from a personnel feed isn't itself evidence of completed deprovisioning.

### Deleting the profile is another operation again

Deleting an identity profile can make its account source non-authoritative and delete its identities unless they can be reassigned. Accounts associated with deleted identities become uncorrelated.

The documented operation doesn't delete the source or its ISC account records, and doesn't itself deprovision the external accounts.

Those effects need a planned change. Deleting a profile is a poor diagnostic action for our department mismatch: it changes the identity-establishment arrangement rather than correcting the demonstrated priority and mapping choice.

## Connect the screens to the processing they show

The **user interface**, or **UI**, displays configuration and represented state. The **frontend** is the browser interaction; the **backend** performs the relevant hosted processing.

The identity-profile view can show priorities, exceptions and processing status. A mapping **preview** evaluates selected values using the available data.

A preview helps you inspect a calculation. It doesn't establish that every affected identity has been processed or that target access has changed.

**Needs Processing** indicates that relevant profile configuration still needs the supported processing step. Saving a mapping, previewing its result and verifying the applied identity value are different observations.

For the department incident, connect the collected account data and associations to the actual profile, relevant priorities, selected mapping, its inputs and the processed department.

If the reported problem concerns application access, continue into delivery evidence. If it concerns sign-in, inspect the authentication path. The same person can be involved while the responsible configuration and evidence differ.

## Work through these situations

### 1. HR says Finance, but Contractors applies

Both authoritative accounts belong to the same intended identity. Contractors has priority 10 and Employees 20. Contractors maps department from the register's Vendor Services value.

Should another HR aggregation force Finance onto the identity?

**Worked reasoning:** The selected profile and mapping explain Vendor Services. Check the approved priority design and processing impact. A newer read doesn't override that configuration, and changing correct HR data would address the wrong input.

### 2. The directory supplies email without being authoritative

Employees maps the correct directory account's mail value and produces `person@corp.example`.

Must Corporate Directory become authoritative?

**Worked reasoning:** No. The profile can use that supported attribute input while the employee arrangement establishes the identity. Providing a value and supplying the authoritative origin are separate responsibilities.

### 3. The required email is missing

Collection succeeds, but the email mapping returns null and an identity exception reports missing email. Another address exists on a lower-priority source.

Will priority automatically supply it?

**Worked reasoning:** Inspect the selected profile's mapping, available input and explicit fallback logic. The required value is unresolved. Priority doesn't implement an alternative per-field input merely because another source has an address.

### 4. The authoritative accounts are on separate identities

The employee and contractor records concern the same confirmed person, but were incorrectly associated with different identities. Someone proposes changing priority to merge them.

Does priority repair that relationship?

**Worked reasoning:** No. Priority selects among the relevant authoritative accounts associated with an identity. Investigate identifiers, matching and account associations through supported duplicate-identity correction. A population-wide order change isn't a general merge operation.

### 5. HR is authoritative, but PTA fails

Employees applies and the mapped values are valid. The configured directory authentication connection is unavailable.

Does HR authority bypass that dependency?

**Worked reasoning:** No. Investigate the configured directory credential-check path. The identity's origin doesn't provide replacement authentication when that integration is unavailable.

### 6. A read-only application is made authoritative to obtain writes

A separate connector supports only reads. Someone proposes making its source authoritative so it can create target accounts.

Does that implement account creation?

**Worked reasoning:** No. It changes identity-establishment responsibility and can affect the population. Connector capability, provisioning configuration and target privilege are still required for the write. Establish a supported approved design for that work.

### 7. Employment status changes while the account remains

The employee account remains associated, Employees has higher priority, and an employment-status value changes. No account removal is supplied.

Must Contractors now apply?

**Worked reasoning:** No. A changed attribute isn't removal of the authoritative-account relationship. Inspect lifecycle and processing behavior and the observed profile association. These facts establish neither automatic profile fallback nor completed external removal.

## Review an acquisition design

A team proposes making an acquired directory authoritative alongside its existing employee HR profile, then letting whichever source aggregates last decide the person and values.

What would you ask the design to define?

**Worked reasoning:** Establish which records identify each intended population, where people overlap and how stable identifiers and supported correlation preserve the intended person relationships.

Where one identity has both authoritative accounts, define applicable profile priority. Review creation-order defaults rather than relying on read timing.

Specify each profile's attribute inputs, required values, unique identity usernames, usable email and explicitly designed fallback.

Assess the effects on sign-in, lifecycle behavior, roles and provisioning before applying changes. Keep credential checking and target operation authority separate, then verify identity-side and external results with their own evidence.

Explain how the responsibilities connect: the authoritative source and profile establish the person; account relationships and priority determine the applicable profile; mappings produce values; correlation connects accounts; and authentication and provisioning follow their configured paths.
