# An account schema: which fields describe the account, and which ones identify it?

One person has a standard billing account for daily work and a separate administrative account for approved support tasks. Both contain the same employee number.

That number can help identify their owner. But if it is used to identify each account, how will it distinguish the two?

An account schema gives fields different responsibilities. Some identify or name the account. Others describe it or supply information for a separate ownership match.

## Compare the records before choosing their fields

An **account** is a record in an external system. An **identity** in SailPoint Identity Security Cloud (ISC) represents a person or another entity and connects relevant information, accounts and access.

Our two billing accounts are legitimate separate records for one person. ISC needs to represent both; that doesn't require two employee identities.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration behavior. **Aggregation** collects account or entitlement information into ISC.

Assume a supported billing-application read returns the following hypothetical records for `Billing-Production`:

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

An **attribute** is a named piece of information. `accountKey` is an attribute name; `acct-standard` is its value on the first record. The fullName cells describe the repeated human name, rather than proposing that phrase as an account identifier.

For these records, application owners have established that accountKey and loginName are distinct, stable fields suitable for the supported integration. Both records belong to the intended production environment.

That agreement forms part of the **integration contract**: what the exchanged fields mean, what the connector returns and which behavior the application supports.

Compare the jobs in the table. AccountKey distinguishes the accounts. EmployeeNumber connects them to the same employee. FullName describes the owner. Department and officeCode describe aspects of the account's business context.

Shared information doesn't make the account records interchangeable.

## Separate a field definition from an account's value

An **account schema** defines the attributes a source represents, how they are organized and which attributes supply Account ID and Account Name.

“This source defines office” is a statement about the schema. “This account contains office = BLR” is a statement about an individual account record.

Defining the field gives the represented data a place and a meaning. It doesn't supply an office value for every account.

The schema also describes how values are interpreted. A **string** is text. A **Boolean** represents true or false. A **multi-valued attribute** holds multiple values rather than only one.

Consider costCentre. Here `044` is a business code whose leading zero matters. Treating it as text can preserve the agreed code. Treating it as a number merely because it contains digits can lose that zero and change what the business recognizes.

Groups can require a multi-valued arrangement because an account can belong to more than one group. The schema setting and the connector's returned data must agree. Naming a field groups doesn't establish how several memberships are represented.

An **entitlement** is an access right represented from a source. The groups attribute can be designated as representing entitlements under the relevant definitions and connector behavior. That describes how ISC interprets collected memberships. It doesn't grant membership or give the integration authority to change it.

The account schema covers exposed, represented information. It isn't a copy of the application's whole database. The application may store fields its selected connector, interface or export doesn't expose.

## Give Account ID, Account Name and owner matching different jobs

The account schema selects one attribute for **Account ID** and one for **Account Name**.

Account ID supplies the account-identifying value under the source's schema and connector arrangement. Its question is, “Which account record is this?”

Account Name supplies the designated naming or display value for that account representation. Its question is, “Which field provides this account's designated name?” It isn't whichever readable text happens to appear somewhere on a page.

Our supported design selects these fields:

| Purpose | Selected attribute | What it tells us |
|---|---|---|
| Account ID | accountKey | Which distinct billing account this record represents |
| Account Name | loginName | The designated account name |
| Person-matching input | employeeNumber | Which employee owns it under separate matching configuration |

The third row documents an ownership input. It isn't a third Account ID/Account Name schema designation.

If you select employeeNumber for Account ID here, both accounts supply `E-24`. That may distinguish their owner from other employees, but it can't distinguish the owner's standard account from the administrator account.

A good person identifier isn't automatically a good account identifier.

These choices depend on the actual connector requirements and application contract. Another system having fields called accountKey or loginName doesn't establish the same stability, uniqueness or supported use.

## Follow the standard account from the response to its represented values

An **application programming interface**, or **API**, is a supported software interface for exchanging requests and results. The billing connector uses an API to read these records.

Assume the configured read includes the intended accounts and fields. A **mapping** specifies which input supplies an output value. The connector's supported field mapping connects returned data to the source-account attributes ISC represents.

For the standard account, accountKey supplies `acct-standard` and loginName supplies `billing-user`.

The office information uses different names on the two sides. The external response contains `officeCode = BLR`; the intended represented account field is office. The correct mapping reads officeCode and supplies that value to office.

The result is `office = BLR` on this account. The schema defines the field and its role; the individual account record contains the supplied value.

```text
External account record
              |
   supported read and field mapping
              |
              v
Values in source account attributes
              |
   interpreted under account schema
              |
              v
ISC representation of that account

Definitions and collected values
have different responsibilities.
```

The diagram connects the external data, supported mapping and account representation. It doesn't prescribe a private processing sequence or separate internal services.

The administrative account follows the same design with its own key `acct-admin` and name `billing-admin`. Its shared employee number doesn't collapse it into the standard account.

Both accounts already existed in the application. Reading them hasn't created either one. **Provisioning** carries out supported account or access changes externally; representing data from a read is different work.

### Match the screen to the question you're asking

The **user interface**, or **UI**, contains the pages and controls you use. The **frontend** displays those interactions in the browser. The **backend** performs the relevant hosted processing behind the pages.

The source's Account Schema view shows definitions and designations. An individual account's details show values collected for that record.

Finding office in the schema answers whether the field is defined. Finding office = BLR on an account answers what that represented account currently contains. Neither observation establishes that every account has a value or that the external application was changed.

When locating the account, compare the source context, account key, selected naming attribute and actual values. A friendly title alone doesn't identify the record precisely enough.

## Read identityAttribute and displayAttribute as field selections

A technical schema representation can use the property names `identityAttribute` and `displayAttribute`. The first selects the attribute used for the represented object's unique identifier. The second selects its display value.

You can see these settings in **JSON**, a text format that represents information using names and values. In this small fragment, each property name is on the left of the colon and its selected attribute name is on the right:

```json
{
  "identityAttribute": "accountKey",
  "displayAttribute": "loginName"
}
```

The braces enclose this group of properties. The quotation marks identify text. This is an explanatory fragment, rather than a complete configuration request.

The value `"accountKey"` selects a field. It isn't the account's key value `"acct-standard"`. Each collected account supplies its own value from the selected field.

The word identity in `identityAttribute` concerns identification of the represented object. It doesn't select the person's identity profile or configure account ownership.

An **identity profile** configures ISC identities, including the mappings supplying their identity values. An account schema describes source-account records. Those are separate configuration objects.

An **object ID** identifies a particular stored ISC object. A schema's own ID identifies that schema definition, rather than the external account. Sources, represented accounts and identities also have their own object contexts.

An external field called id doesn't automatically equal those IDs. Establish which object and context each value identifies before comparing them.

## Associate both accounts with the existing person

**Account correlation** matches and associates a source account with an ISC identity using configured comparisons.

Assume the person's existing identity contains employeeNumber = E-24. The approved comparison matches that identity value with each account's employeeNumber, and the intended identity is unambiguous.

The standard account supplies E-24 and can match that person. The administrative account supplies the same reference and can match the same person.

```text
Account: acct-standard
     employeeNumber: E-24
                \
                 > One ISC identity
                /    employeeNumber: E-24
Account: acct-admin
     employeeNumber: E-24

Two account keys; one matched person.
```

The associations connect two separate accounts to one owner. The accounts retain their keys. They aren't merged, and equal values alone don't configure the comparison or imply a matching score.

This gives you two different investigations. If employeeNumber is wrong or absent, owner matching can fail while accountKey still identifies the account correctly. If accountKey is unusable, a correct employeeNumber doesn't repair account identification.

An **uncorrelated account** has been collected but hasn't been matched to an established identity representing its owner. That differs from an unread record or an account that couldn't be represented correctly.

Investigate the demonstrated layer. A correlation change won't make an unread record arrive. Manually assigning ownership shouldn't conceal an account-key defect.

Account Name also has a documented role beyond appearance. When configured correlation doesn't find a match, default correlation can compare Account Name with the identity's `name` attribute. That is a particular identity field, rather than permission to match any readable human name. It doesn't replace the explicit employee-number arrangement supplied here.

## Distinguish changing a description from changing a designation

Suppose someone proposes replacing loginName with fullName as Account Name so the records “look nicer.”

That changes which field has the designated naming role. It isn't the same as correcting a descriptive fullName value on one account.

SailPoint's schema guidance describes Account Name as **immutable**, meaning intended to remain fixed, and warns that changing it after aggregation can lead to duplicate accounts and identities. It also warns that changing Account ID can break references to accounts across systems.

Those consequences follow the field's role, rather than how readable its text seems.

Both accounts can legitimately have the same descriptive fullName because they have the same owner. That doesn't make fullName an appropriate Account Name.

A page showing the human name somewhere doesn't establish that fullName is the selected Account Name. Inspect the designation and the record supplying the displayed value.

For a new source, establish supported account-identifying and naming fields before the first collection. For a loaded source, assess dependencies and supported change handling before redesignating either field.

### An external rename is a different situation again

Replacing the selection loginName with fullName changes which field supplies Account Name.

An application changing the value inside loginName leaves the selected field the same but changes its data. These are different changes, and keeping the schema selection doesn't guarantee a harmless external rename.

Check the actual connector's supported rename behavior and verify existing references and relationships.

## Trace a missing office value to the broken connection

Keep the original response `officeCode = BLR` and the defined account field office. In this variation, the mapping still expects an older response field, siteCode, which isn't present.

The needed information exists in the response. The destination field exists in the schema. The mapping connects the wrong input to that destination.

Adding office again won't supply the missing connection. Changing Account Name won't correct it either.

The approved correction maps officeCode to office. After an appropriate supported read, the inspected account contains office = BLR.

The application record didn't need editing because it already supplied the correct information. The defect was in how that input reached the represented field.

Now change the facts. If the current response doesn't include officeCode at all, establish whether the external value exists and whether this read is configured and permitted to obtain it.

An **integration credential** is the proof the connector presents when authenticating externally. Its read authority and the operation's scope can affect the available information. A schema field doesn't expand either.

The absence can also be legitimate: perhaps this account has no office value. Establish the business requirement and supported handling of absence before declaring an error. Inventing BLR would conceal missing information rather than explain it.

Follow the value across the external record, actual response, applicable mapping, schema definition and collected account.

## Use discovery to obtain definitions, then assess them

**Schema discovery** inspects and imports the external field definitions where the selected source supports it. Other sources need manual definitions or connector-specific setup. Many connected sources provide an initial schema.

Discovery can reveal definitions, but it can't decide whether employeeNumber distinguishes every account. The two actual records showed why that identifier choice would fail.

Saving a discovered or edited schema changes the definition. Subsequent account aggregations follow the saved schema under the documented behavior. Saving alone doesn't establish that all existing accounts now hold newly collected values.

Identify the supported collection or processing needed for the intended change, then inspect the resulting records. A definition save isn't evidence that every dependent process reran.

An **audit event** records an activity or configuration change. Schema changes are captured in audit events. That can establish a definition change; it doesn't establish a completed collection or external write.

Compare a discovered or replacement schema with the existing one. The Delimited File connector documents preserving settings for retained attributes and removing absent attributes only under its stated conditions, including whether other configurations use them.

That is connector-specific behavior. Check the added, removed and redesignated fields and their dependents before assuming schema replacement is harmless for another source.

## Investigate missing and repeated account keys without guessing the outcome

If a returned record has no usable accountKey, the selected Account ID can't obtain its intended value from that record. Investigate the response, mapping and connector requirements. Correlation doesn't manufacture an external key afterward.

If two genuinely different accounts supply the same accountKey in one intended source context, the identification inputs conflict.

Inspect the actual connector result and collection messages. Don't assume a universal first-row winner, last-row overwrite or silent repair.

Compare the external records, export or API response, selected fields, mapping and population. The evidence may describe repeated copies of one record, legitimate separate accounts, or incorrectly combined populations with overlapping local keys.

**Source context** includes the external system and environment. A local key can exist in two applications or environments without identifying the same account.

If one source combines those populations, the supported identification design still needs to distinguish their accounts.

A **composite identifier** combines agreed components into one key. Where supported, it can be a design option. Validate uniqueness, stability and connector compatibility. Joining a region and local key isn't automatically a safe repair for a source already loaded with accounts.

Assigning two conflicting rows to different people doesn't make their repeated account key unique.

## Keep account department and identity department separate

An **identity attribute** belongs to the ISC identity. An account attribute belongs to the represented source account. Two fields can share the name department without being the same stored value.

The billing account contains its collected department, Billing Operations. The identity's department follows its applicable identity-profile mapping and processing.

An **identity mapping** specifies how an identity attribute gets its value. **Identity processing** evaluates the identity under relevant configuration. A **transform** calculates or formats a value using supported logic and can participate in that mapped-value design.

Adding department to an account schema doesn't configure those mechanisms. It doesn't automatically replace identity department or select the source responsible for that business value.

An **authoritative source** supplies accounts used to establish identities through a profile. That identity-origin responsibility is separate from choosing this source's Account ID and Account Name.

If someone says, “Department is correct, but it hasn't changed everywhere,” identify the record and field. A collected account value, calculated identity value and external provisioning result have different inputs and evidence.

## Assess the intended change through its dependencies

Correcting non-designated fullName leaves accountKey and loginName selected. Its value still depends on the actual read or write arrangement.

Redesignating Account Name changes the schema's selected naming field. An external rename changes application data and needs the connector's supported rename handling.

Before an approved schema change, identify dependent account associations, correlation inputs, identity mappings, entitlement representations, reports and provisioning configuration.

Define the evidence needed afterward. Do the correct accounts remain distinguishable? Were relationships retained or deliberately managed under the approved design? Did the supported read supply usable values? Do dependent configurations still reference the intended fields?

Resetting a source, deleting accounts or trying different identifiers can remove the context needed for that assessment. Use impact review and controlled validation for the specific change.

A saved form establishes a configuration action. The resulting account representation and verified relationships establish whether the design worked.

## Work through the field choices

### 1. One employee number, two accounts

The source returns acct-standard and acct-admin. Both contain employeeNumber = E-24.

Can employeeNumber replace accountKey because it identifies their owner?

**Worked reasoning:** It doesn't distinguish these accounts. Retain the supported distinct keys and establish ownership through the separate configured comparison. One identity can own both.

### 2. Two accounts show the same full name

Both contain the owner's same fullName. Their keys and login names differ, and Account Name remains loginName.

Does repeated fullName prove duplicate account identification?

**Worked reasoning:** No. It is descriptive data here. Inspect the actual Account ID and Account Name selections and values. A repeated human name isn't a repeated account key, and a visible label isn't necessarily the designated Account Name.

### 3. Office is defined but empty on the account

The response includes officeCode = BLR. The schema defines office, but the mapping reads absent siteCode.

Should another office attribute be added?

**Worked reasoning:** The definition already exists. The mapping expects siteCode instead of reading the available officeCode. Correct that connection, perform the supported read and verify office = BLR on the intended account.

### 4. The person reference exists, but the account key is missing

A record contains employeeNumber = E-24 but lacks the required Account ID input.

Will correlation supply the key?

**Worked reasoning:** Correlation establishes ownership through configured comparisons; it doesn't invent an external account identifier. Investigate the data, actual read and mapping under the connector requirements. The question alone doesn't establish a universal skip, rejection or overwrite result.

### 5. Account Name is redesignated after collection

A loaded source would replace loginName with fullName as Account Name. Someone calls it a cosmetic label change.

Is that enough for approval?

**Worked reasoning:** No. It changes a designated schema responsibility after collection. Documented Account Name/ID guidance warns of duplicates and serious reference effects. Assess dependencies and supported handling rather than using redesignation as a display shortcut.

### 6. A new schema field is saved

The team adds costCentre to the schema. No subsequent collection or target operation is supplied.

Has it created an external field or populated every account?

**Worked reasoning:** Neither result is established. The definition describes represented data. Verify external information, read exposure, mapping and the required collection. Creating or updating an external field would need a separate supported operation.

### 7. Account department is correct

The account has department = Billing Operations. Identity department still follows a personnel-source mapping.

Should the account field overwrite the identity automatically?

**Worked reasoning:** No. Inspect the applicable identity mapping and processing. Account-schema definition, identity-value sourcing and external provisioning serve different jobs. A correct collected value isn't an instruction to replace identity department.

## Review a different feed

A proposed payroll source combines two regional exports. Each uses local key u17 for a different person's account. The proposal chooses surname as Account Name and expects employee number to “fix duplicates during correlation.”

What would you establish first?

**Worked reasoning:** Determine the intended source boundary and whether the supported identifiers distinguish its accounts and remain stable. Matching the rows to different people doesn't resolve their conflicting account keys inside one combined source.

Work with application owners to establish account-identifying and naming fields using representative records. Separate source contexts or a deliberately validated key design can be options. Neither is an automatic migration procedure for an already-loaded source.

Check export fields, definitions, mappings and subsequent collection. Establish employee-number matching separately, including legitimate multiple-account ownership.

Surname isn't an appropriate Account Name merely because it's readable. Check the connector's naming requirements, the population and post-aggregation change risks.

Explain the record relationships: “These fields distinguish and name each account. These inputs supply its collected values. This separate matching arrangement connects it to its owner. A successful person match doesn't repair a key that cannot distinguish the accounts.”
