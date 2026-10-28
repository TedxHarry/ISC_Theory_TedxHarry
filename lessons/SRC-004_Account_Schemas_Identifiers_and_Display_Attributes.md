# An account schema: which fields describe the account, and which ones identify it?

One person can have a standard application account for daily work and a separate administrative account for approved support tasks.

Both accounts can contain the same employee number. That number helps identify their owner, but it cannot distinguish one account from the other.

Suppose you're preparing to collect these records into SailPoint Identity Security Cloud (ISC). How should ISC know which account a returned record represents? Which field should name that account? And where do the other values, such as department and office, belong?

Those choices are part of the account schema. Let's look at the records they need to describe.

## The person and the account aren't the same record

An **account** is a record in an external system. An ISC **identity** represents a person or another entity and connects relevant information, accounts and access.

Here, one person's standard and administrative accounts are legitimate separate records. Representing both doesn't require creating two employee identities.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration behaviour. **Aggregation** collects account or entitlement information into ISC.

Assume a billing application's supported read returns these two accounts for a source named `Billing-Production`. The records and values below are hypothetical teaching inputs.

| External field | Standard account | Administrative account |
|---|---|---|
| accountKey | acct-standard | acct-admin |
| loginName | billing-user | billing-admin |
| employeeNumber | E-24 | E-24 |
| fullName | The person's full name | The same person's full name |
| department | Billing Operations | Billing Operations |
| officeCode | BLR | BLR |
| costCentre | 044 | 044 |
| groups | billing-read | billing-support |

An **attribute** is a named piece of information. In the table, `accountKey` is an attribute name, while `acct-standard` is a value supplied by one account. The fullName cells describe the repeated human name; they aren't proposed account identifiers.

For this example, the application owners have established that accountKey and loginName are distinct and stable for these accounts. The two records belong to the intended production environment.

That agreement is part of the **integration contract**: what the exchanged fields mean, what the connector returns and which behaviours the application supports.

Now compare the rows. AccountKey distinguishes the two records. EmployeeNumber connects them to the same employee. FullName describes the owner, and department describes an aspect of the account's business context.

Each field is useful, but they have different jobs.

## A schema defines fields; an account supplies values

An **account schema** defines the attributes a source represents and how those attributes are organized. It also designates which attribute supplies Account ID and which supplies Account Name.

Think about the difference between “this source has a field called office” and “this account has office = BLR.”

The first describes a definition shared by the represented account records. The second describes one account's data. Defining the field doesn't supply a value for every account.

The schema also describes how to interpret values. A **string** is text. A **Boolean** represents true or false. A **multi-valued attribute** holds a collection of values rather than just one.

Why does that matter? If costCentre is a business code, the leading zero in `044` may be significant. Treating that code as text can preserve its agreed meaning. Choosing a number simply because the code contains digits can lose information the business needs.

Likewise, an account can belong to more than one group. A field intended to represent those memberships needs the connector's supported multi-value arrangement. The schema setting and the returned data must agree; neither the field's name nor its appearance in a table settles that design.

An **entitlement** is an assignable access right. A groups field can be designated as representing entitlements, with the relevant entitlement definitions and connector behaviour. That tells ISC how to interpret the collected memberships. It doesn't assign those rights or grant the connector permission to change them.

The schema represents information exposed through this source. It isn't a copy of the application's entire database. An application may store fields that the selected connector, software interface or export doesn't expose.

## Choose a field for the account's identity and a field for its name

The schema selects one attribute as **Account ID** and one as **Account Name**.

Account ID supplies the account-identifying value under the source's schema and connector arrangement. It answers “which account record is this?”

Account Name supplies the designated naming/display value for that account representation. It is a configured role for an attribute, rather than a label you can infer from whichever text looks most readable on a page.

For the supplied billing records, the design is:

| Purpose | Selected attribute | What its value tells us |
|---|---|---|
| Account ID | accountKey | Which of the two distinct accounts this record represents |
| Account Name | loginName | The supported designated account name |
| Person-matching input | employeeNumber | Which employee owns the account under separate matching configuration |

The last row isn't a third schema designation. It identifies information used to establish a different relationship.

If you select employeeNumber as the Account ID here, both separate accounts supply `E-24`. The value distinguishes the person from other people, but doesn't distinguish that person's standard account from the administrative one.

You haven't solved account identification merely because the value is a good employee identifier.

The chosen fields must meet the actual connector's requirements. These hypothetical accountKey and loginName choices don't establish that every application's similarly named fields are stable, unique or supported.

## Follow a returned record into ISC

In this example the connector reads the application through an **API**, or application programming interface: a supported software interface for exchanging requests and results.

Assume the configured account read includes the intended records and fields. A **mapping** specifies which input supplies an output value. The connector's supported field mapping associates the returned data with the source-account attributes represented in ISC.

For the standard account, accountKey supplies `acct-standard`, loginName supplies `billing-user`, and the other returned fields supply their applicable account values.

Where the external field and represented field have different names, the mapping must connect them. For example, this design represents the returned officeCode as the account attribute office. With the correct mapping and supplied input, office becomes BLR.

The schema describes those fields and their designated uses. The account record holds the collected values.

```text
[External account record]
              |
    supported read and field mapping
              |
              v
[Values in source account attributes]
              |
    interpreted under account schema
              |
              v
[ISC representation of that account]
```

The arrows show the relationship between external data, supported mapping and account representation. They don't assert a private internal sequence or separate backend services.

The administrative record is represented with its own key, `acct-admin`, and its own designated name, `billing-admin`. Shared employee information doesn't collapse these into one account.

Nothing in this read creates a new billing account. Both already existed externally. **Provisioning** carries out supported account or access changes in the external system; reading and representing a record is a different responsibility.

You can inspect that distinction in the **user interface**, or UI. The source's Account Schema view shows definitions and designations. An individual account's details show values collected for that particular record.

Finding office in the schema answers “is this field defined?” Finding office = BLR on an account answers “what value does this represented account currently contain?” Neither screen alone establishes that every account has the value or that the target application was changed.

When identifying an account on a screen, check the source context, account key, selected naming attribute and actual collected values. A friendly title alone doesn't establish which record you opened.

## When you encounter identityAttribute and displayAttribute

Technical schema representations use the property names `identityAttribute` and `displayAttribute`. The first selects the attribute used for the represented object's unique identifier; the second selects its display value.

For our selected fields, a small name-and-value fragment looks like this:

```json
{
  "identityAttribute": "accountKey",
  "displayAttribute": "loginName"
}
```

Each line names a schema property on the left and its selected attribute on the right. This is an explanatory fragment, rather than a complete configuration request.

Notice that `accountKey` is a field name. The standard account's value in that field is `acct-standard`. Confusing a field selection with a particular account's value would change the meaning of the configuration.

The word “identity” inside identityAttribute concerns identification of the represented object. It doesn't mean “select this person's identity profile” or “this property configures who owns every account.”

An **identity profile** configures ISC identities, including the mappings that supply their attributes. An account schema describes source-account records. Those are separate configuration objects.

An **object ID** identifies a particular stored ISC object. A schema's own ID identifies that schema definition; it isn't the external account key. An ISC source, account and identity also have their own object contexts.

An external field called id doesn't automatically equal all those identifiers. Before comparing two IDs, establish which objects they identify.

## Two distinct account records can point to one person

**Account correlation** matches and associates a source account with the appropriate ISC identity using configured comparisons.

Assume the person's existing identity has employeeNumber = E-24, the approved matching configuration compares that identity value with the account's employeeNumber, and the intended identity is unambiguous.

The standard account supplies E-24, so the configured comparison can establish its association with that person. The administrative account supplies the same person reference and can be associated with the same identity.

```text
[Account: acct-standard]
     employeeNumber: E-24
                \
                 > [One ISC identity]
                /    employeeNumber: E-24
[Account: acct-admin]
     employeeNumber: E-24
```

The arrows represent the supplied account-to-person associations. Each account retains its own key. They aren't being merged, and the diagram doesn't introduce a matching score or claim that equal-looking values configure the comparison automatically.

Here you can see why both kinds of identifier matter. AccountKey distinguishes the accounts. EmployeeNumber supports their ownership relationship.

If employeeNumber is wrong or absent, ownership matching can fail even while accountKey correctly identifies the account. If accountKey is unusable, a correct employeeNumber doesn't repair that identification problem.

An **uncorrelated account** is an account whose intended identity association hasn't been established. That differs from a record that wasn't collected or couldn't be represented correctly in the first place.

Locate which problem the evidence supports. A correlation-rule change won't make an unread account arrive, and manual association shouldn't hide an account-identification defect.

Account Name also has responsibilities beyond how a page looks. ISC documents default correlation that can compare Account Name with an identity's name when the source's configured correlation doesn't find a match. That doesn't replace the explicit employee-number arrangement supplied here, but it is another reason to inspect the actual designation before treating it as cosmetic.

## Why changing Account Name needs more care than editing descriptive text

Suppose someone wants accounts to “look nicer” by replacing loginName with fullName as Account Name.

That changes which field has the designated naming responsibility. It isn't simply correcting a descriptive fullName value on one record.

SailPoint's account-schema guidance describes Account Name as immutable, meaning it is intended to remain fixed, and warns that editing it after aggregation can lead to duplicate accounts and identities. It also warns that changing Account ID can break account references across systems.

These are dependencies to assess before a designation change, rather than errors to discover after saving the form.

The repeated fullName in our table is ordinary descriptive information. It can legitimately be the same on both accounts because the owner is the same. That doesn't make fullName a suitable designated Account Name.

A page showing the person's name somewhere doesn't prove that fullName is selected as Account Name. Inspect the schema designation and the record supplying the displayed value.

For a new source, establish supported identification and naming fields before the first collection. For an already-loaded source, investigate the documented impact and supported change handling before redesignating either field.

Also separate a designation change from an external rename. Changing the selection from loginName to fullName changes which field supplies the name. An application changing the value inside the selected field is another situation.

Keeping the same schema selection doesn't by itself guarantee a harmless external rename. Check the actual connector's rename behaviour and verify the existing relationships and references.

## Now suppose office is defined, but its value is missing

Keep the same intended office field and returned officeCode = BLR. In this variation, however, the mapping expects an older input called siteCode, which isn't in the response.

The schema still defines office. The application still supplied the needed location information. The broken connection is the input-to-account-field mapping.

Adding office again won't connect officeCode to it. Changing Account Name won't repair that mapping either.

The approved correction in this example maps the returned officeCode to represented office. After an appropriate supported read, the inspected account contains office = BLR.

Notice why the application record didn't need editing: its response already contained the correct information. The correction addressed how the integration supplied the represented field.

Now change the evidence. Suppose the current API response doesn't include officeCode at all. Before changing a mapping, establish whether the value exists externally and whether this operation is configured and permitted to read it.

An **integration credential** is the proof the connector presents when authenticating to the external system. Its read authority and the operation's scope can affect which information is available. A schema field doesn't expand that authority.

There is also a legitimate-data possibility: this account may have no office value. Establish the business requirement and supported treatment of absence before deciding that an empty field is an error. Don't invent BLR merely to make the account look complete.

The investigation follows the value: external record, actual read result, applicable mapping, schema definition and inspected collected account. It doesn't start by repeatedly adding the same field.

## Discovery can find definitions; it can't decide their business meaning

**Schema discovery** inspects and imports an external source's field definitions where the selected source supports it. Other sources need manual definition or connector-specific setup. Many connected sources provide an initial schema.

Discovery helps establish which definitions are exposed. It doesn't tell you that employeeNumber distinguishes every account in your population. You needed the two actual records to see why that choice fails here.

Saving a discovered or edited schema changes the definition. The documented behaviour is that subsequent account aggregations follow the saved schema. A save doesn't itself establish that all existing accounts now contain newly collected values.

For an intended change, identify the supported collection or processing required and inspect the resulting accounts. Don't assume every dependent process reruns merely because a definition was saved.

An **audit event** records an activity or configuration change. Schema changes are captured in audit events. That can establish that someone changed the definition; it doesn't prove that account collection ran or an external account was updated.

Discovery or replacement also needs a comparison with the existing definition. The Delimited File connector, for example, documents retaining settings for attributes that remain and conditional removal of absent attributes when they aren't used in other configurations.

That connector-specific behaviour isn't a guarantee that replacing every source's schema is harmless. Check which attributes are added, removed or redesignated and what depends on them.

## What if the chosen account key is missing or repeated?

If a returned record has no usable accountKey, the selected Account ID cannot obtain its intended value from that record. Investigate the returned data and mapping under the connector's requirements. Correlation doesn't manufacture the missing external key later.

If two genuinely different accounts return the same accountKey within the same intended source context, the identification inputs conflict.

Don't invent a universal rule that ISC always keeps the first row, overwrites it with the last or silently repairs the conflict. Inspect the actual connector outcome and collection messages.

Compare the external records, export or API response, selected fields, mapping and intended population. Determine whether you have repeated copies of one record, legitimate separate accounts, or populations incorrectly combined under an overlapping key.

**Source context** includes the configured external system and environment. A local key can appear in two applications or two environments without identifying the same external account.

If a single source combines those populations, its supported identification design still needs to distinguish the accounts.

A **composite identifier** combines agreed components into one key. It can be a design option where supported, but its uniqueness, stability and connector compatibility need validation. Concatenating a region and local key isn't automatically a safe repair for an already-loaded source.

Ownership matching remains a separate question. Assigning the conflicting rows to different people doesn't make the repeated account key distinguish them.

## An account's department and an identity's department are separate values

An **identity attribute** belongs to the ISC identity. An account attribute belongs to the represented source account.

The two can have the same English name without being the same field. Our billing account's department describes its collected account data. The identity's department follows its applicable identity-profile mapping and processing.

An **identity mapping** specifies how an identity attribute obtains its value. **Identity processing** evaluates the identity under the relevant configuration. A **transform** calculates or formats a value using supported logic and can participate in a mapped-value design.

Adding department to the account schema doesn't configure any of those mechanisms by itself. It doesn't automatically replace the identity's department or establish which source should supply that business value.

An **authoritative source** supplies accounts used to establish identities through an identity profile. That identity-origin responsibility is separate from choosing this source's Account ID and Account Name.

So when someone says, “The department is correct, but it hasn't changed everywhere,” identify which record and field they mean. Collected account data, an identity value and an external provisioning result have different inputs and evidence.

## Assess the change by its dependencies and result

A descriptive-field correction, a schema redesignation and an external rename need different assessments.

In our example, correcting non-designated fullName doesn't change the selected accountKey and loginName fields. Its value still depends on the actual read or write configuration. Redesignating Account Name changes the schema's selected naming field. An external rename changes data in the application and needs supported rename handling.

Before an approved schema change, identify dependent account associations, correlation inputs, identity mappings, entitlement representations, reports and provisioning configuration.

Then define what evidence will establish the intended result. Did the correct accounts remain distinguishable? Are relationships retained or deliberately managed under the approved design? Did the relevant read supply usable values? Do the dependent configurations still refer to the intended fields?

Resetting a source, deleting its accounts or switching identifiers as an experiment can destroy the context you need to assess those questions. Use impact assessment and controlled validation for the actual change.

A saved form establishes a configuration action. Correct account representation and verified relationships establish whether the intended design worked.

## Work through the field choices

### 1. One employee number, two accounts

The billing source returns acct-standard and acct-admin. Both contain employeeNumber = E-24. Can employeeNumber replace accountKey because it identifies their owner?

**Worked reasoning:** It doesn't distinguish the two supplied accounts. Retain the supported distinct account keys and establish ownership through the separately configured employee-number comparison. One identity can own both.

### 2. Two accounts show the same full name

Both records contain the owner's same fullName. Their keys and login names are distinct, and Account Name is still loginName. Does the repeated fullName prove duplicate account identification?

**Worked reasoning:** No. It is descriptive data in this design. Inspect the actual Account ID and Account Name designations and their values. A repeated human name isn't a repeated account key, and every label visible on a page isn't necessarily the designated Account Name.

### 3. Office exists in the schema but is empty on the account

The response includes officeCode = BLR. The schema defines office, but the mapping reads missing siteCode. Should the team add another office attribute?

**Worked reasoning:** The field definition already exists. Correct the supported mapping, perform the appropriate read and inspect the resulting account value. The supplied defect is between an available input and its intended represented field.

### 4. There is a person reference but no account key

A record has employeeNumber = E-24 but lacks the required Account ID input. Will correlation supply that identifier?

**Worked reasoning:** Correlation establishes an ownership relationship through configured comparisons. It doesn't invent the external account key. Investigate the data, read result and schema mapping under the connector's requirements; no universal skip, rejection or overwrite outcome follows from the question alone.

### 5. Account Name is redesignated after collection

An existing source would replace loginName with fullName as Account Name. Someone describes this as a cosmetic label change. Is that description sufficient for approval?

**Worked reasoning:** No. It changes a designated schema responsibility after accounts were collected. The documented guidance warns of duplicates and serious reference effects for Account Name/ID changes. Assess dependencies and supported change handling rather than treating redesignation as a display-format shortcut.

### 6. A new schema field is saved

The team adds costCentre to the schema. No target operation or subsequent account collection is supplied. Has this created an external field or populated every existing account?

**Worked reasoning:** Neither is established. The definition describes represented data. Establish the external information, read exposure, mapping and necessary collection. An external field creation or update would require a separate supported operation.

### 7. Account department is correct

The collected account has department = Billing Operations. The identity's department still follows a personnel-source mapping. Should the new account field automatically overwrite the identity?

**Worked reasoning:** No. Inspect the applicable identity mapping and processing. Account-schema definition, identity-value sourcing and external provisioning have different responsibilities. A correct account value isn't an instruction to replace the identity value.

## Review a different feed

A proposed payroll source combines two regional exports. Each region uses local account key u17 for a different person. The proposal selects surname as Account Name and says employee number will “fix any duplicates during correlation.”

What would you establish before accepting that design?

**Worked reasoning:** Determine the intended source boundary and whether the selected identifiers distinguish the represented accounts and remain stable. Correlating the two rows to different people doesn't resolve their conflicting account keys inside the combined source.

With the application owners, establish supported account-identification and naming fields using representative records. Separate source contexts or a deliberately validated key design can be options. Neither is an automatic migration procedure for a source that already contains accounts.

Check the external export fields, schema definitions, mappings and conditions for subsequent collection. Establish employee-number matching separately, including whether a person can legitimately own multiple accounts.

Surname isn't a safe designated account name merely because it is readable. Check the connector's actual naming requirements, the population and post-aggregation change risks.

Explain the design through the records: “These fields distinguish and name each account. These inputs supply its collected values. This separate matching arrangement associates it with its owner. A successful person match doesn't repair an account key that cannot distinguish the records.”
