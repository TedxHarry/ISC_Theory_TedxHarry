# Which account field is ISC comparing with which identity field?

Suppose a project account contains workerRef text "0072002". The intended person's identity contains identificationNumber text "0072002".

The values agree. Does that establish a match?

Only if those are the fields the configured comparison actually uses. A correct value in an unselected field doesn't enter the comparison.

Let's put the selected fields beside their records and trace where both values came from.

## Identify the two sides before interpreting Equals

In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another managed entity. An **account** is a record in a connected system.

An **attribute** is a named piece of information on an object. Here workerRef belongs to the project account, while identificationNumber belongs to the identity.

**Account correlation** matches and associates source accounts with identities. A **correlation criterion** pairs an account attribute with an identity attribute for comparison.

The standard correlation form uses a fixed **Equals** operation. It compares the selected values under the applicable settings; that Operation field isn't a place to enter contains or substring logic.

Equals doesn't ask whether field names resemble each other.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

In this hypothetical example, HR-Production represents Human Resources (HR) worker records. It is an **authoritative source**: its accounts establish identities through the Employees **identity profile**, shared configuration including how identity fields are populated.

Project-Production represents existing project-management accounts. It isn't authoritative for establishing employees.

HR account hr-record already belongs to the intended employee identity. Project account project-account is the relationship being evaluated.

The approved reference includes the zeros in 0072002. Project login and payroll reference have different purposes.

## Inspect the selected fields on the actual records

**JSON**, JavaScript Object Notation, represents named fields and values. Quoted values below are text; the grouping labels organize teaching evidence.

This is neither an upload request nor a complete ISC export:

```json
{
  "hrAccount": {
    "accountKey": "hr-record",
    "personNumber": "0072002",
    "payrollRef": "PAY-884"
  },
  "identity": {
    "identificationNumber": "0072002",
    "name": "worker72002",
    "displayName": "Worker A"
  },
  "projectAccount": {
    "accountKey": "project-account",
    "loginName": "project.user",
    "workerRef": "0072002",
    "displayName": "Worker A"
  }
}
```

An **account schema** defines represented account fields and their properties. Here it designates accountKey as **Account ID**, the source account identifier, and loginName as **Account Name**, its selected naming field.

Those designations don't mean employee number. project-account, project.user and 0072002 identify different things.

The identity's name worker72002 also differs from its friendly displayName Worker A. Similar screen labels don't make the underlying fields interchangeable.

The saved project criterion pairs workerRef with identificationNumber. Identification Number is already eligible for correlation in this supplied configuration.

Assume the approved person reference uniquely identifies the intended identity, no other configured criterion establishes a different relationship, and no existing explicitly assigned account-to-identity link overrides this case.

**Default correlation** compares designated Account Name with identity name when configured matching cannot associate an account. No identity has name project.user here, so that path doesn't supply another match.

These facts let us explain this result without inventing an ambiguous-match winner.

## The identity value was produced before it was compared

An **identity attribute mapping** selects or calculates a value for an identity field. Employees maps HR personNumber to identificationNumber.

**Identity processing** evaluates identity information and configured requirements, including mappings. In the supplied evidence, the mapping is already applied: the identity holds text 0072002.

The project correlation criterion doesn't directly join the project account to the HR account. It compares project workerRef with the value on the identity.

HR matters because it independently supplied that identity-side value. There isn't an extra HR account-field selection on the project's correlation form.

```text
[Already associated HR account]
[personNumber: "0072002"]
                 |
[Employees identity attribute mapping]
                 |
[Identity identificationNumber: "0072002"]

[Collected project account]
[workerRef: "0072002"]
                 |
[Compare with identity value above]
[Equals under configured settings]
                 |
[Supplied: same intended identity]

[Engineer verifies approved ownership]
```

The upper chain explains identity-side provenance. The lower chain supplies the project input and comparison with that identity value.

Under the saved pairing and supplied conditions, both sides contain the approved text 0072002. Supported evaluation produces the supplied association with the same existing employee identity.

No login is renamed, no account key is replaced and no second employee identity is created by that statement.

The arrows describe input availability and the comparison, not private services or a mandatory job for every arrow. Aggregation can read the project account and evaluate correlation in the same run.

Reading project data doesn't prove that the independently supplied HR-to-identity value is current. Each side needs its own evidence.

## Decide which configuration could explain a mismatch

“The mapping is wrong” can refer to different work:

| Configuration or relationship | What it controls |
|---|---|
| Project account schema | Represented fields, properties and designated Account ID/Name. |
| Employees identity mapping | How identificationNumber receives its input from HR personNumber. |
| Project correlation criterion | Which account value is compared with which eligible identity value. |
| Recorded association | Which identity currently owns project-account in ISC; the relationship is an outcome, not the criterion definition. |

Consider two independent defects.

First, the criterion selects accountKey instead of workerRef. The comparison receives project-account, not 0072002. The correct reference is present elsewhere on the account but isn't selected.

Second, the criterion correctly selects workerRef, but Employees maps Identification Number from HR payrollRef. The applied identity value is PAY-884.

The first defect is the account-side selection. The second is the origin and meaning of the identity-side value.

Changing a valid login or account key repairs neither. Find the selected field on each object, then trace how its actual value was produced.

## Choose fields by meaning, not similar names

workerRef and identificationNumber have different names but contain the same approved person reference here. Renaming them isn't required.

Two fields both called employeeId can instead represent different facts: a global person reference and a local employment-contract reference.

A field can even contain the manager's employee number rather than the account user's reference. Matching that number could associate the account with the manager instead of its user.

An **entitlement** is a represented permission or membership. A group identifier or membership list describes access; being present in the schema doesn't make it an appropriate account-owner reference.

Before accepting a pairing, explain what each value identifies and verify that meaning against approved records.

## Make the identity field available for correlation

A **custom identity attribute** is an additional identity field defined for the organization's ISC environment.

Its definition is available across profiles, but each profile can map it differently or leave it unused. Defining externalWorkerRef doesn't populate it for every identity.

Account correlation adds an eligibility requirement. Identity attributes must be configured as **searchable** to appear in the correlation form's Identity Attribute list. A subset of predefined fields already has that setting.

This correlation setting differs from the separate **Search** interface, where you query represented identity and access information.

Finding a value in Search therefore doesn't prove the field is ready to use on the identity side of correlation.

For a new externalWorkerRef, distinguish definition, profile mapping, actual populated values and correlation-searchable configuration.

After configuring that searchable identity attribute, the documented preparation requires manual processing for all identities before aggregating the source that will use it.

That isn't a single-person Preview. Review the affected profiles and wider processing impact through the approved change process.

The form's right side is an eligible identity attribute, not an arbitrary raw account field from another application. If the needed reference exists on an already associated HR account, an appropriate identity mapping can make it independently available on the identity.

Check existing suitable fields first. Don't add custom definitions when an already eligible attribute correctly carries the intended reference.

## Equals doesn't repair the input

Correlation is case-insensitive by default. Configured correlation supports a per-source/configuration case setting through ignoreCase; inspect the actual setting when letter case distinguishes people.

That doesn't establish cleanup for every other difference.

Text "0072002" and "72002" have different representations. Numeric conversion discards the zeros. Whether such a conversion is legitimate is a business-data decision, not a consequence of Equals.

Likewise, "0072002 " includes a trailing space. Don't assume an undocumented trim before comparison.

A **transform** calculates a value from inputs. **Trim** removes whitespace from the beginning and end of text.

Applying Trim in an identity mapping changes that mapping's output. It doesn't automatically rewrite the incoming project's workerRef. Cleaning one side doesn't prove the actual values on both sides now meet the requirement.

Correct the layer responsible for the defect, preserve its original evidence and inspect the newly collected or applied result.

A **multi-valued attribute** holds several values. A list such as ["0072002", "0083003"] isn't the same input as one person-reference string. Don't assume Equals picks the intended person from a list or that converting the whole list to text solves ownership.

**Null** means no value. An **empty string** is present text with zero characters; an omitted field is another observation. Connector representation can differ, so inspect the actual data.

None supplies the approved reference under this project's requirement. A shared placeholder UNKNOWN can be non-null while identifying nobody reliably.

## The first account can't depend only on its missing relationship

Suppose a proposed identity field, projectWorkerRef, reads workerRef from a project account already associated with the identity.

The **Account Attribute transform**, technical operation accountAttribute, looks up an account on an identity and returns a selected field. It doesn't search all uncorrelated accounts to discover their owners.

Now suppose that field is used to correlate the person's first project account. There is no associated project account, no independent input or **fallback**, meaning an approved alternative under a configured condition, and no other matching path.

The value needed to establish the relationship requires that relationship to exist first.

```text
First-account proposal:
[Correlation needs projectWorkerRef]
                 |
[Mapping needs linked project account]
                 |
[That association doesn't exist yet]

Independent input:
[Linked HR -> identity person reference]
[Project account -> worker reference]
                 |
[Compare independently available values]
```

The upper path is a circular data dependency under these stated conditions. It doesn't describe an endless ISC retry loop or an automatic fallback.

The lower path uses a reference already available from independently associated HR data. It removes that missing-input dependency, although approved meaning and ownership still need verification.

Another design can use a genuinely independent input or an evidence-based exception. Merely reading back from the unassociated account doesn't supply independence.

Apply the same check to email: if the identity's email can only come from the account being associated, establish what is available beforehand. A placeholder address isn't verified owner evidence.

## Account history and other matching paths still matter

A **preset correlation configuration** supplies initial pairings for a source type. Inspect what is actually saved rather than assuming the preset remains or suits the data.

**Default correlation** is another documented path when configured matching cannot associate the account. It compares designated Account Name with identity name case-insensitively and isn't configurable.

In the main example, this would compare project.user with identity name, not friendly Worker A with another displayed full name. No identity has name project.user.

If the preferred reference criterion failed, there would be no default match under these supplied facts. Other values can produce another outcome.

An **uncorrelated account** isn't linked to an authoritative identity. Establish applicable paths before predicting that result.

**Manual correlation** creates a persistent explicit association. Later value changes and an unoptimized aggregation don't automatically clear that link. Accounts created through ISC can also receive manual-correlation treatment.

**Optimization** avoids relevant reevaluation for unchanged accounts. After changing correlation configuration, the documented unoptimized aggregation approach lets unchanged accounts be reexamined.

Read success isn't proof that all records used the revised pairing. Nor is today's criterion a complete history of how an existing association was established.

## Assemble evidence from both sides and the result

| Evidence | What it helps establish |
|---|---|
| Exact source/account key | The intended project-account and environment, rather than a similar record. |
| Schema and collected fields | Designated ID/Name and the actual selected account value/type. |
| Saved correlation settings | Paired fields, operation, order and case behavior. |
| Current identity/profile | Candidate existence and applied mapping that supplies the identity-side value. |
| Eligibility and preparation | Availability for correlation and completion of required processing. |
| Time and association history | Current inputs and whether the relationship came from new evaluation or a persistent manual link. |
| Recorded result and business evidence | Actual linked identity and whether that person legitimately owns the account. |

**Preview** evaluates a profile mapping for selected identity data. It can explain proposed identity input, but doesn't establish application across identities, project correlation reevaluation or correct ownership.

Use Accounts for collected evidence and identity details/associated accounts for person-level evidence. Record Search/report times rather than assuming every view updates simultaneously.

**Provisioning** performs supported external account or access changes. **Attribute synchronization** is a configured identity-to-account writer for existing correlated accounts.

Review real consumers before changing a mapping or association. Correct correlation isn't proof of successful external delivery.

The main supplied result includes no sync write or requested access change. It establishes project-account on the same intended employee identity.

## Try changing one part of the comparison

### 1. Different names carry the same reference

Saved, eligible and evaluated workerRef and identificationNumber both contain text 0072002, uniquely identifying the approved person.

Must the account field be renamed?

**Worked reasoning:** No. Selected fields can have different names while carrying the same intended reference. Renaming a valid field doesn't repair a defect.

### 2. The matching value isn't selected

The criterion reads accountKey project-account. Unselected workerRef on that account contains 0072002.

Does that reference make the criterion match?

**Worked reasoning:** No. The comparison receives project-account. Correct the proven selection through approved review and verify reevaluation; don't alter a valid account key to imitate the person reference.

### 3. The identity copied a payroll reference

Project workerRef is correct, but applied identificationNumber is PAY-884 from HR payrollRef.

Which side needs investigation?

**Worked reasoning:** The identity mapping and value meaning. Correct that input, verify the applied identity value and then evaluate the relationship. Don't overwrite correct project data to match the wrong identity value.

### 4. Search finds a custom field

The reference is populated and searchable in Search, but lacks correlation-searchable configuration and isn't offered in the correlation list.

Is correlation readiness established?

**Worked reasoning:** No. Verify eligibility and documented all-identity processing preparation before source aggregation. A search result or single Preview isn't that preparation.

### 5. Feed conversion lost the zeros

Approved text 0072002 was converted to numeric 72002.

Should all identity references lose their zeros too?

**Worked reasoning:** No. Repair the feed's proven representation defect and confirm the collected input. Broad identity changes can conceal the cause and affect other consumers.

### 6. Letter case distinguishes people

A legacy system assigns abc7 and ABC7 to different people. Correlation is case-insensitive.

Is an apparent match enough?

**Worked reasoning:** No. The comparison policy conflicts with the business reference. Review the supported setting and candidate population. Don't invent a winning identity from ambiguous evidence.

### 7. The first account must supply its own matching value

The identity field can only read an already associated project account. No such account, independent input or other path exists.

Will another aggregation supply that missing identity reference by itself?

**Worked reasoning:** Not under the stated data path. Establish an independent reference or approved exception. A lookup requiring association can't use an absent association as its starting evidence.

### 8. Preview changed, but the recorded link didn't

Revised mapping previews 0072002. No applied identity result, account reevaluation or existing association history has been supplied.

Has correlation been proved to ignore the corrected value?

**Worked reasoning:** No. Check current applied input, supported evaluation and manual history. Preview isn't deployment, unchanged data can need reexamination and explicit manual links can persist.

## Apply the pairing to contractor accounts

A contractor application's workerId contains the sponsor employee's number. Another account field, externalPersonRef, identifies the contractor.

The profile has custom contractorRef populated from an independently associated contractor registry account. Its values agree with externalPersonRef, but eligibility and processing preparation haven't been established.

Which proposal should proceed, and what remains to verify?

**Worked reasoning:** Treat externalPersonRef to contractorRef as the candidate design, after validating actual values and approved meaning. workerId would identify the sponsor, not the account's user.

Confirm ownership, representation, candidate uniqueness, custom eligibility and preparation, saved criteria/default path and existing manual relationships. Then verify supported evaluation and actual association.

Review downstream effects separately. A defensible explanation names both objects and fields: the application's external person reference is compared with the independently populated contractor identity reference.
