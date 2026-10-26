# Authoritative for what: the person, a value, a login, or a change?

An employee record contains Finance, but SailPoint Identity Security Cloud (ISC) still shows Vendor Services as the person's department. Both the employee and contractor records have been collected.

Reading the employee system again looks like the obvious fix. Yet ISC can be following saved configuration correctly while that configuration no longer matches the intended employee arrangement. Find which configuration applies and where it obtains the department value.

To understand the result, separate four responsibilities: establishing the person, producing an identity value, checking sign-in credentials and changing an external account.

## Begin with the person and their records

ISC represents people and their relevant account and access relationships.

For the people in this example, an **identity** is the person-level record in ISC. An **account** is a record in a particular system, with ISC keeping a representation of that external account.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** is the integration software used for supported reads and other operations.

**Aggregation** collects account or entitlement information into ISC. An **entitlement** is an access item represented from a source, such as a permission or group.

A person can have an employee record, a contractor record, a directory account and an expense account. Collecting those records doesn't mean ISC should treat them as four people.

The design must establish which records identify the person and how the additional accounts belong to that identity.

## An authoritative source and its profile establish the identity

An **authoritative source** provides accounts used to establish identities through an **identity profile**.

The identity profile is configuration for those identities. It connects the source to identity establishment and defines their relevant value mappings, sign-in settings and identity-management behaviour.

An **attribute** is a named value. An account attribute belongs to a source account, such as its department. An **identity attribute** belongs to the ISC identity.

A **mapping** specifies how a value supplies an identity attribute. It can select an account field from a source or use supported calculation logic.

Consider a simple new-person arrangement. The personnel system has a valid employee record, its authoritative source has an identity profile, and the configured inputs satisfy the required identity values.

Aggregation brings in the record. Under that configured arrangement and applicable processing, ISC can establish the identity and populate its mapped values.

Additional collected application accounts can then be matched to their owner. Their ownership association has a different purpose from establishing the person through the authoritative arrangement.

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

Arrows show different relationships.
```

The arrows show the different relationships. They aren't a private execution sequence, a fixed schedule or a guarantee that every record creates a complete identity and every additional account matches.

Marking a source authoritative isn't the whole onboarding design. The profile, required mappings and usable data must also exist.

**Account correlation** matches and associates a collected source account with the appropriate ISC identity under configured comparisons. It doesn't turn every business application's inventory into the personnel origin for new identities.

A **non-authoritative source** isn't designated as that profile-backed identity origin. Its accounts can be associated with identities established through the organization's authoritative arrangements.

## Unmatched account data can still have a representation

An **uncorrelated account** has been collected without being associated with the intended authoritative person identity.

ISC can use a **shadow identity**, a placeholder representation for uncorrelated account data. That isn't the same outcome as successfully establishing the intended person through an authoritative identity profile.

This explains why “non-authoritative sources never have any identity representation” is too absolute.

The useful question is whether this source is configured to establish the intended person identity or to supply additional accounts and data for people represented through another arrangement.

An application account collected before its owner can be matched need not be successfully associated merely because the read completed.

## A product name doesn't decide the source's role

A Human Resources system, or **HR system**, commonly supplies employment records. A contractor register can supply another intended population.

A directory can also be authoritative when the organization's design makes its accounts the basis for identities. The role isn't reserved for systems named HR.

Conversely, useful finance data doesn't automatically make the finance application's account inventory an appropriate personnel origin.

Authority here isn't a security score. A non-authoritative source can provide useful data and accounts requiring governance.

It also isn't an operation-capability level. A file-fed personnel source can establish identities through its profile without automatically changing external accounts.

**Provisioning** carries out supported account or access changes. A non-authoritative application source can support provisioning when its connector, configuration and external authority allow it.

## Give the overlapping records their separate responsibilities

Now return to the department mismatch. The person has moved from contractor work into employee work, while both records remain present.

Use these hypothetical records:

| Source | Account | Responsibility in this design |
|---|---|---|
| Employee HR | `employee-record` | Authoritative source for the Employees identity profile |
| Contractor Register | `contractor-record` | Authoritative source for the Contractors identity profile |
| Corporate Directory | `directory-user` | Non-authoritative account source, corporate email input and configured directory-authentication source |
| Expense application | `expense-user` | Non-authoritative application-account and access information |

Assume all four accounts have been collected and correctly associated with the same existing ISC identity. Both authoritative accounts already belong to it.

They have distinct source-account identifiers and share an appropriate person reference, `workerRef = W-24`. Their association is a supplied fact under the approved matching design, not something inferred from similar names or the reference alone.

The employee account's department is Finance. The contractor account's department is Vendor Services.

The business intent is to use the employee arrangement while both records overlap. That intent has to be reflected in configuration and verified processing. Newer HR data doesn't express the profile-selection policy by itself.

## One identity uses one applicable identity profile

ISC associates an identity with one identity profile at a time.

When that identity has accounts on multiple authoritative sources, ISC uses the highest-priority profile among the authoritative sources holding its accounts.

A **profile priority** is the ordering used for that selection. Lower numerical values have higher precedence.

It isn't an administrator privilege, a rating of data quality or a command to merge people. A high-priority profile isn't applicable to everyone merely because it exists.

By default, earlier-created profiles receive higher priority. That creation order doesn't necessarily match a later employee-versus-contractor policy.

The supplied configuration and approved correction are:

| Profile | Initial priority | Priority after correction |
|---|---|---|
| Contractors | 10, higher precedence | 20, lower precedence |
| Employees | 20, lower precedence | 10, higher precedence |

These are the example's settings. They don't require every organization to use this particular population design.

Initially, the identity has both relevant authoritative accounts, and Contractors has the higher priority. Contractors therefore applies.

Loading the employee record later doesn't replace that rule with “last read wins.” Priority selects the profile; the selected profile then provides the relevant configuration.

If the two accounts were on different identities, they wouldn't satisfy this example's starting condition. Priority isn't an identity-merging mechanism.

## Follow the selected profile to the department input

In this supplied configuration:

- Contractors maps identity department from Contractor Register's department.
- Employees maps identity department from Employee HR's department.
- Both map identity email from the appropriate Corporate Directory account's mail value.

Assume one intended directory account is available, its association is correct and those supported mappings are valid.

With Contractors selected, its department mapping reads Vendor Services. That produces Vendor Services on the identity.

HR can simultaneously contain Finance on `employee-record`. There is no contradiction: the source-account value and the processed identity value belong to different records, and the selected mapping explains the difference.

**Identity processing** evaluates the identity using relevant configuration, including its mapped attributes and applicable access logic.

Another read can update available account data. Identity values still follow their configured mappings and relevant processing; aggregation order isn't a universal value-conflict rule.

You can now diagnose the mismatch without changing correct HR data. Inspect the account relationships, selected profile, priority and actual mapping input.

## A priority correction can affect more than this department

A **lifecycle state** is a configured identity state used in identity-management and access behaviour, such as active or leaving arrangements.

A **role** groups access for a business purpose and can have assignment conditions.

If a mapped department or state changes, configured role and lifecycle logic can evaluate differently. A profile change can also change sign-in settings and other mappings.

That is why priority is a population configuration decision. Its impact isn't limited to the one identity used to demonstrate the mismatch.

Assume responsible owners assess the overlapping population and approve Employees taking precedence. They use the supported configuration and processing path.

The source-account values and their identity associations remain unchanged. Supplied verification now shows the same identity associated with Employees and department Finance from HR.

Its email remains `person@corp.example` from Corporate Directory.

This is the observed result supplied for this example, not a guarantee that every population migration preserves every relationship automatically.

Confirm the intended account associations, saved order, actual profile association, mapping inputs and processed identity values. If access changes were expected, continue to their delivery evidence rather than treating a correct department as completed target provisioning.

## The identity's origin doesn't have to supply every value

The Employees profile can obtain department from HR and email from a non-authoritative directory through supported mappings.

```text
Employees profile selects inputs
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

Two mappings, not two active profiles.
```

The branches show two configured inputs to identity values. They aren't two active identity profiles or a search across every source for whichever value arrived most recently.

Corporate Directory doesn't need to become authoritative just to provide that email input.

A **transform** calculates or formats a value using supported logic. A **fallback** is an explicitly designed alternative when a preferred input cannot be used.

For example, a design can specify how another input is considered when the preferred value is missing. That behaviour belongs in the supported mapping or calculation and its conditions.

Profile priority doesn't automatically make Contractors a per-field fallback provider when an Employees mapping lacks a value.

**Manager correlation** establishes an identity's relationship to its manager's identity through its configured matching mechanism. It isn't the same relationship as account ownership.

Don't extend this department/email mapping example into a universal rule for manager relationships or every other identity relationship. Use the configuration for the particular relationship being established.

## A successful read can still leave required identity values unresolved

ISC requires these identity attributes to be mapped and populated:

- **User Name**, `uid`.
- **Work Email**, `email`.
- **Last Name**, `lastname`.

User Name must be unique across identities from all identity profiles. A unique external account name within one source doesn't establish that identity-wide requirement.

An **identity exception** reports a problem such as missing required values or a duplicate User Name.

**Null** means no value is supplied. If the email mapping returns null, successful account collection doesn't make that identity value complete.

Suppose the Employees email input is unavailable while a lower-priority source contains another address. Inspect the selected mapping, available account data and any explicitly configured alternative. Priority alone doesn't route that address into email.

An **account schema** describes the represented fields on account records. A field defined in that schema doesn't prove the account currently has a usable value.

Resolve the responsible data or mapping issue through the supported process. Don't invent an address to suppress the exception.

The documented required-value check demands a non-null Work Email; it doesn't validate that value as an email address. Passing this check therefore doesn't prove a correct format, deliverability or suitability for sign-in and notifications.

## The authentication source checks a different kind of proof

A **credential** supplies proof for an accepted identity or access context. **Authentication** checks the required proof.

An **authentication source** is the supported source configured to check user credentials in ISC's **Directory Connection** arrangement, also called **pass-through authentication**, or **PTA**.

In the example, Corporate Directory has that role. Assume the relevant connection and the intended directory account are configured correctly.

The employee/profile arrangement establishes the person while the directory checks their directory-based sign-in credential.

If that directory connection becomes unavailable, making HR authoritative doesn't provide an alternative credential check. Investigate the actual authentication dependency.

**Single sign-on**, or **SSO**, is a configured arrangement allowing participating services to rely on an established authentication relationship. Its trust and operation are separate from identity establishment.

Making a source authoritative doesn't copy its users' passwords into ISC or configure SSO for every application. No SSO route is added to this example's PTA path merely because the person has an authoritative HR account.

Profile settings can influence sign-in, so profile changes need authentication impact review. That doesn't make identity origin, attribute sourcing and credential checking interchangeable.

## Identity authority doesn't supply target write authority

The **target** is the external system where an account operation would occur. **Authorization** determines what the accepted caller may do there.

The connector needs supported operation capability, correct destination, applicable configuration and the required target authority. Its integration credential has a different purpose from the employee identity receiving access.

A **read-only source** collects supported data without configured automatic target changes. Authoritative designation doesn't add an unimplemented account-create operation or provide external privileges.

Conversely, a source can stay non-authoritative while supporting approved account creation and permission changes.

An **access profile** bundles entitlements from one source. It differs from an identity profile: the access profile groups access, while the identity profile configures identities and their mapped values and settings.

Applicable roles, lifecycle configuration and requests can drive access changes. Having an authoritative account doesn't assign every application permission automatically.

Identity processing can initiate provisioning work without validating that the target change succeeded. A correct Employees association and calculated Finance department establish identity-side results. The account operation and target effect need their own evidence.

## A changed status isn't a removed authoritative account

The selection rule concerns the identity's authoritative-account relationships.

Suppose the employee account remains associated while its employment-status value changes. That value change alone isn't removal of the account relationship.

Don't declare Contractors selected without inspecting the actual profile association and relevant processing or lifecycle configuration.

A temporary source outage also doesn't establish that its authoritative accounts were deleted.

Under the documented full-aggregation and account-deletion conditions, removal of an authoritative account can lead to reassessment. If another authoritative account remains, the identity can be reassigned to the appropriate remaining profile and its values recalculated.

If no authoritative account remains, deletion or **hidden-identity** handling has additional conditions. A hidden identity can be retained when dependencies block deletion, rather than remaining a normal profile-backed identity in the usual identity view.

None of that establishes universal immediate removal of every external account.

**Deprovisioning** removes or reduces external access through applicable account-changing behaviour. A profile association change or disappearance from one personnel feed doesn't by itself prove that permissions or sessions ended.

Deleting an identity profile is also a different action. The documented consequences can include making its source non-authoritative, deleting identities unless reassignment is possible and leaving accounts uncorrelated. It doesn't delete the source or its account records, and doesn't itself deprovision the external accounts.

Use a planned change for those consequences. Profile deletion isn't a way to diagnose the department mismatch.

## Use each screen to answer a specific question

The **user interface**, or **UI**, displays configuration and represented state. The **frontend** is the interaction the user sees; the **backend** performs the relevant hosted processing.

The identity-profile view can show priorities, exceptions and processing status. Mapping previews evaluate selected values using available data.

A **preview** shows that evaluation. It isn't evidence that every affected identity has been processed or that external access changed.

**Needs Processing** indicates that relevant profile configuration still needs the supported processing step. Saving a mapping and confirming a calculated preview aren't substitutes for verifying its applied outcome.

For the department incident, connect these observations: collected accounts and associations, the identity's actual profile, relevant priorities, the selected mapping and its inputs, then the processed value.

If the reported problem is missing application access, continue into delivery evidence. If it is failed sign-in, inspect the configured authentication path.

Those investigations can concern the same person while requiring different records and actions.

## Work through these situations

Each case supplies a separate variation.

### 1. HR says Finance, but Contractors applies

Both authoritative accounts are on the same intended identity. Contractors has priority 10 and Employees 20. Contractors maps department from the register's Vendor Services value.

Should another HR aggregation force Finance onto the identity?

**Worked reasoning:** No. The supplied profile choice and mapping explain Vendor Services. Check the approved priority design and processing impact. A newer authoritative-account read doesn't override that configuration or justify changing correct HR data.

### 2. The directory supplies email without being authoritative

Employees uses the correct directory account's mail value, and the supported mapping produces `person@corp.example`.

Must Corporate Directory become authoritative?

**Worked reasoning:** No. Identity establishment and a particular attribute input are separate responsibilities. The applicable profile can use that supported input without making directory accounts the origin of employee identities.

### 3. The required email value is missing

Collection succeeds, but the email mapping produces null and an identity exception reports missing email. Another address exists on a lower-priority source.

Will priority automatically supply it?

**Worked reasoning:** No. Inspect the selected profile's mapping, available input and explicit fallback logic. Collection didn't resolve the required value. Correct the responsible data or supported mapping rather than assuming cross-profile fallback.

### 4. The authoritative accounts are on different identities

The employee and contractor records concern the same confirmed person, but were incorrectly associated with separate identities. Someone proposes changing priority to merge them.

Does priority repair that relationship?

**Worked reasoning:** No. Priority selects among relevant authoritative accounts associated with an identity. Investigate identifiers, matching and account associations through the supported duplicate-identity correction process. A population-wide order change isn't a general merge operation.

### 5. HR is authoritative, but PTA fails

Employees is correctly associated and mapped values are valid. The configured directory authentication connection is unavailable.

Does HR authority bypass that dependency?

**Worked reasoning:** No. Follow the separate credential-check path and its reported failure. Identity origin doesn't implement replacement authentication.

### 6. A read-only application is made authoritative to obtain writes

A separate connector supports only reads. The proposal is to make its source authoritative so it can create target accounts.

Does that implement account creation?

**Worked reasoning:** No. It changes identity-establishment responsibility, with potential population consequences. It doesn't add connector capability, provisioning configuration or target privilege. Establish a supported approved change design instead.

### 7. Employment status changes while the account remains

The employee account remains associated, Employees has higher priority, and an employment-status value changes. No account removal is supplied.

Must Contractors now apply?

**Worked reasoning:** No. A changed attribute isn't the removal of the authoritative-account relationship. Inspect configured lifecycle/processing behaviour and the observed profile association. Neither automatic profile fallback nor completed external removal follows from these facts.

## Review an acquisition design

A team proposes making an acquired directory authoritative alongside its existing employee HR profile and letting whichever source aggregates last decide the person and values.

What needs to be defined?

**Worked reasoning:** Establish which records identify each intended population, where people overlap and how stable identifiers and supported correlation preserve the intended person relationships.

Where one identity has both authoritative accounts, define applicable profile priority. Review creation-order defaults rather than relying on read timing.

Specify each profile's attribute inputs, required values, unique identity usernames, usable email and explicitly designed fallback.

Keep authentication and external operation authority separate. Assess sign-in, lifecycle, role and provisioning effects before applying changes, then verify identity-side and target-side results with their own evidence.

Explain the design through its decisions: the authoritative source/profile arrangement establishes the identity; priority selects the applicable profile when accounts overlap; mappings produce values; correlation connects accounts; and authentication and provisioning follow their configured paths.
