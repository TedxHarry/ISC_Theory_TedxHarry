# Where does an ISC identity come from?

Human Resources (HR) has made a new worker record available. The person doesn't yet have an identity in SailPoint Identity Security Cloud (ISC), and no account exists for them in a separate business application.

If ISC reads the worker record, what should appear?

There are separate results to establish: the collected HR record, an identity representing the person, and any application account or access needed afterward. They depend on different configuration and evidence.

Let's follow how the worker information becomes identity information.

## The HR account doesn't have to be a login

An **identity** is ISC's representation of a person or another managed entity. It holds identity-level information and connects the entity's accounts and access.

An **account** is a record in a particular system. That can be an application login, but it can also be an HR worker record. The person doesn't need an HR password for that worker record to supply personnel information.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration operations. **Account aggregation** reads account information and represents it as source accounts in ISC.

The HR account and the identity are therefore different objects. Locating the collected worker record doesn't, by itself, prove that the identity is complete.

Our neutral source, HR-Production, represents an approved employee population. Its connector supports account collection. These are supplied example conditions, not results from a real tenant.

## What makes these records establish identities?

An **authoritative source** supplies accounts from which ISC establishes identities through an **identity profile**. Configuring an identity profile for a source makes that source authoritative.

The profile supplies shared configuration for its identities, including how identity values are populated. In our example, the Employees profile belongs to HR-Production. It isn't a separate personal profile created for each worker.

That relationship gives the source accounts their identity-establishment responsibility. ISC doesn't assign it because the source's name contains HR.

An approved design can use a directory as an authoritative source. An ordinary application containing employee names doesn't become authoritative merely because those names look useful.

Ask what the population is meant to establish. Is it the approved set of people ISC should represent, or additional accounts owned by people established elsewhere?

Making every application authoritative to fix unresolved ownership changes that responsibility. It doesn't investigate why the existing accounts haven't been connected to their intended owners.

Authoritative also doesn't grant permission to write everywhere. A read-only personnel feed can establish identities. Creating or disabling external accounts requires separate capability, authority and configuration.

## How does the profile supply the identity's values?

An **attribute** is a named piece of information. Account attributes describe source records. Identity attributes describe the ISC identity.

For example, familyName on an HR account and lastname on an identity are distinct fields. Their similar meanings don't automatically connect their values.

An **identity attribute mapping** specifies how to obtain an identity value. A direct mapping selects a source and an account attribute. Supported calculations can also supply values, but the main example uses direct inputs.

Here is selected account data in **JSON**, JavaScript Object Notation, a format pairing property names with values:

```json
{
  "workerKey": "worker-a",
  "workerNumber": "W-101",
  "iscUserName": "worker-w101",
  "givenName": "Sample",
  "familyName": "Worker",
  "workEmail": "worker-w101@example.invalid",
  "departmentCode": "LOG"
}
```

Each quoted value is text. The field names are choices in this supplied HR design, not a complete response or universal upload template. The name values and email address are illustrative; no real person or mailbox is claimed.

The project design supplies its initial username and email input before identity establishment. Don't assume every HR feed already provides those fields.

An **account schema** describes the account fields ISC represents. Its **Account ID** designation identifies which attribute supplies the source account's identifying value. Here it selects workerKey, so worker-a identifies this HR record within HR-Production.

The Employees profile uses these mappings:

| Identity attribute | Selected source input | Result in this example |
|---|---|---|
| User Name, uid | HR-Production: iscUserName | worker-w101 |
| Work Email, email | HR-Production: workEmail | worker-w101@example.invalid |
| Last Name, lastname | HR-Production: familyName | Worker |
| First Name, firstname | HR-Production: givenName | Sample |
| Identification Number, identificationNumber | HR-Production: workerNumber | W-101 |
| Department, department | HR-Production: departmentCode | LOG |

The source fields don't have to share the identity attributes' technical names. The mapping is the connection between them.

User Name, Work Email and Last Name are required identity attributes. Every profile must map them, and their resulting values cannot be **null**, meaning no value.

User Name must also be unique across identities in all identity profiles. A different source account key doesn't remove that requirement.

Work Email must be non-null, but ISC's required-value check doesn't validate email format. A populated string doesn't prove a real address, mailbox or mail delivery. The illustrative address above demonstrates a mapping, not a usable production mailbox.

The other mapping rows serve the supplied design; they aren't all universal requirements for creating every identity. A project can require additional information for its own decisions.

Now separate the identifiers. Worker-a identifies the HR account. Worker-w101 is the mapped ISC User Name. W-101 is the worker number mapped to identificationNumber. The identity also has its own platform object ID.

Even related-looking values have different jobs. A missing email doesn't justify changing the account key, and a username collision doesn't justify changing a valid worker number.

## Follow the first successful arrival

Assume the Employees profile and mappings have been saved and appropriately applied. No account aggregation is running during profile creation; ISC doesn't allow creating a profile while account aggregation is running.

For this main path, no identity already represents the person. There is no conflicting User Name or competing eligible authoritative profile. All required mapped values are available.

First, HR exposes worker-a through the approved read interface. The integration account, the identity whose credentials the connector uses, must be able to read it. The configured collection scope must include it.

Aggregation then collects the record. The source's extraction and schema must represent the required fields correctly. A value visible in HR still needs to arrive in the matching ISC source-account attribute.

Because this source is authoritative through Employees, its collected worker account participates in establishing the identity. The profile mappings supply identity values, subject to the required-value and uniqueness rules.

In the supplied successful result, the engineer finds one Employees identity with uid worker-w101 and identificationNumber W-101, linked to the collected HR account.

```text
[HR worker record: worker-a]
              |
[Supported account aggregation]
              |
[ISC HR source account]
              |
[Authoritative source + Employees]
[Required mapped inputs valid]
              |
[ISC identity: uid worker-w101]
[identificationNumber: W-101]

[No application account proven]
```

The connected lines show dependencies: available HR input, supported collection, represented account and profile-backed identity values. They don't specify private services, transactions or an exact completion time.

Employees in the diagram is the identity profile. The required-input line includes the stated mappings and unique User Name conditions.

The separated application line marks a result not established by this evidence. Creating the identity hasn't proved an application account or permission exists.

**Identity processing** evaluates identity information under the relevant configuration, including attribute mappings and access-related decisions. Identity changes during aggregation can initiate that processing.

That can lead to further configured work, but the aggregation result isn't evidence that every downstream outcome finished.

Likewise, saving mappings isn't the same as observing their values on existing identities. A profile can show **Needs Processing** when changes need applying. Inspect the relevant processing and resulting values rather than treating saved configuration as an already-applied result.

## What if the worker record arrives without a required value?

Consider a separate variation where familyName isn't supplied. The direct lastname mapping lacks its required input.

ISC reports **identity exceptions** for missing required attributes and duplicate User Names. Identities with missing required attributes also appear as **Incomplete Identities**.

That doesn't mean account collection necessarily failed. It means the identity lacks required information or has another reported exception needing investigation.

Be precise about what exists. Is the source account missing? Is an identity incomplete? Does the report identify a duplicate User Name?

Use the profile's exception report, actual account attributes and mapping together.

If the producer never supplied familyName, involve the source-data owner. If the response supplied Worker but extraction selected the wrong field, changing the source surname would address the wrong layer. If the account value is correct but the profile selects another attribute, inspect the identity mapping.

After the approved correction, verify the relevant collection and identity processing, then recheck both the represented value and exception outcome. Another read of the same defective input doesn't resolve its cause.

There is also a dependency to catch before onboarding. Suppose identity Work Email is mapped only from a directory account that the chosen process can create only after the identity is established.

The initial identity then needs a value whose provider isn't available yet. Referencing that account in a mapping doesn't create it or make its email arrive.

Agree how the required initial value will be supplied and how the intended email will be maintained later. Don't fabricate addresses to silence exceptions. The design has to satisfy its actual identity and business requirements.

## How does an ordinary application account join the identity?

Now take an independent variation. An application administrator has already created application-user, whose employeeRef is text W-101.

Application-Production is **non-authoritative** for this employee population: it isn't the profile-backed origin of these identities. Its accounts can still be collected and associated with owners for access management and review.

**Account correlation** matches and associates a source account with its owning identity using applicable comparisons.

Here, the approved criterion compares account employeeRef with identity identificationNumber. The intended identity is the sole eligible match, and no manual ownership override applies.

When the account is collected and evaluated, W-101 matches W-101. The supplied result links application-user to the existing Employees identity. It doesn't require creating another person.

```text
[Existing Employees identity]
[identificationNumber: W-101]
               ^
               |
[ISC correlates matching inputs]
               |
[Collected application account]
[key: application-user]
[employeeRef: W-101]
```

The upward arrow means ownership association performed by ISC. It isn't a write to the application. Both the application account and the identity already exist in this variation.

If the application account is collected before the required person identity exists, the intended match may be unavailable. It can remain **uncorrelated**, meaning the intended ownership association isn't resolved.

A technical **shadow identity** can represent uncorrelated account data. That isn't evidence of successful authoritative employee onboarding.

When the person and required values become available, the account needs suitable correlation evaluation. An optimized full read can skip further processing of unchanged accounts.

**Optimization** is that shortcut for existing unchanged data. A **full aggregation** reads the configured population; full coverage doesn't guarantee repeated matching for every unchanged record.

After a correlation configuration change, the documented **unoptimized aggregation** approach re-evaluates unchanged accounts. Don't assume waiting or repeating an optimized run must repair ownership.

A manual association is an administrator-established ownership link. Changes to comparison inputs don't automatically move that account to another identity. Review its documented handling when it affects the result.

## What if two authoritative systems contain the same person?

A person can have records in an employee system and a contractor register. That doesn't establish that ISC should represent two separate people.

An identity can have only one governing identity profile at a time. If its accounts belong to multiple authoritative sources, the highest-priority eligible profile governs it. That profile's mappings determine the identity inputs.

The qualification matters: the relevant accounts must actually belong to that represented identity. A similar name isn't proof, and changing priority isn't a general merge operation for separately created identities.

For a contractor becoming an employee, inspect existing identities, account ownership and the approved continuity design. Verify the resulting association and governing profile rather than promising that matching names, numbers or usernames automatically merge records.

Our main new-person example had no existing identity and one eligible profile. A migration has different conditions to establish.

## Which evidence confirms each result?

Use the record each view represents:

| Evidence | What it helps establish | What it doesn't establish alone |
|---|---|---|
| HR-Production Accounts entry for worker-a | Collected worker record and account values | Complete identity, correct profile or application access |
| Employees profile and Mappings | Authoritative-source relationship and selected inputs | Input availability or application of every saved change |
| Profile exception report and Incomplete Identities | Required-value or username issues | No worker record exists or the whole collection failed |
| Identity Details and associated accounts | Current identity values, profile and represented ownership | Successful sign-in or permission in an application |
| Application-operation result and target observation | The required external change occurred | Unrelated identities, accounts or future changes are correct |

**Provisioning** performs supported external account or access changes. Application readiness still needs its access decision, supported integration, required account inputs and successful fulfillment.

Creating the application account and assigning its permissions can also be separate results.

**Authentication** verifies a sign-in. Identity creation doesn't establish registration for ISC, use of its configured sign-in method or successful application sign-in.

The organization's ISC environment is its **tenant**. Identity representation, tenant sign-in and application access have separate requirements and evidence.

## Try changing one condition

Each case is independent of the supplied main result.

### 1. HR has the worker, but the source has no account

The approved integration view excludes new workers until their start date. Today's read didn't return worker-a.

Would changing the identity's Department mapping make that account arrive?

**Worked reasoning:** No. The mapping consumes represented account information; it doesn't expand the read. Confirm intended population and timing with the owner before changing selection, then verify the required account was collected.

### 2. The account exists, but Last Name is absent

The account lacks familyName. The direct lastname mapping selects it, and the profile reports a required Last Name problem.

Does the account entry prove complete onboarding?

**Worked reasoning:** No. It establishes account representation. Correct the evidenced source-data problem through its owner, collect through the appropriate process and verify the identity's Last Name and exception outcome.

### 3. Distinct workers receive the same User Name

Two workers have different account keys and worker numbers, but both map uid to worker-w101. An exception reports a duplicate User Name.

Should they be combined because the usernames match?

**Worked reasoning:** No. These are different people with a naming collision. Cross-profile username uniqueness still applies. Correct the approved naming input or generation; don't merge people or change valid account keys to remove the exception.

### 4. The application account has no person match

Application-user is collected, but no eligible identity has identificationNumber W-101. Its source is non-authoritative.

Does reading it establish the employee through Employees?

**Worked reasoning:** No. Investigate the missing authoritative person or matching values. An uncorrelated account or shadow representation doesn't prove successful employee identity establishment. Don't make the application authoritative just to conceal that symptom.

### 5. Two profiles are eligible

One existing identity correctly owns employee and contractor authoritative accounts. Employees has higher priority and maps Department from HR. The contractor account contains another department.

Must both departments be combined?

**Worked reasoning:** No. The governing profile's mapping selects the input. Priority isn't a field-by-field vote. Verify profile and mapping before concluding that the contractor value was lost incorrectly.

### 6. The identity exists, but the application account doesn't

The Employees identity is complete. No application account exists, and no access assignment or provisioning evidence is supplied.

Did aggregation fail?

**Worked reasoning:** That doesn't follow. Identity establishment succeeded in the supplied facts. Investigate whether the access decision and supported fulfillment were requested, attempted and completed. Identity presence doesn't prove application readiness.

### 7. Work Email contains an unsuitable value

The source supplies not-an-email, which the mapping copies. It is non-null.

Does the absence of a missing-email exception prove a usable mailbox?

**Worked reasoning:** No. The required-value check doesn't validate email format or delivery. Verify the organization's actual data requirement and real address or mailbox where needed.

## Apply the reasoning to a contractor feed

A contractor source supplies account contractor-a, person reference C804, username contractor-c804, surname Contractor and a non-null approved work-email input.

There is no existing identity. The Contractors profile makes this source authoritative, its required mappings are valid and applied, and the account is collected. No other profile is eligible.

A project manager says, “The contractor is visible in ISC, so the project application must be ready.”

What evidence is missing? How does the investigation change if the account arrives but the mapped surname is null?

**Worked reasoning:** Inspect the authoritative account, profile, required values and identity association. These establish the identity side; they aren't application-account or permission evidence.

Application readiness needs its own access decision, supported fulfillment result and confirmed target state.

A null mapped surname redirects investigation to the required Last Name value. Inspect the exception or incomplete identity, profile mapping and actual source field before trying to repair application access.

To explain why an identity exists, identify its authoritative account and governing profile. To explain a value, trace the mapping and input. To explain working access, follow the separate application result.
