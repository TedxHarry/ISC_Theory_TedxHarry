# The account changed. What should change in ISC?

An application account's operating-office code changes from BLR to HYD. ISC still shows BLR on its collected account record.

We want ISC to read the current value and update that record.

The person's ISC identity also has an office field, but it contains CHN, supplied by Human Resources (HR). Should reading the application replace that value too?

Let's follow the information through the records. Updating the account and choosing a value for the identity are connected responsibilities, but they aren't the same decision.

## Identify the record we expect to change

An **account** is a record used to access an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and can bring together its accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading that information and, where supported and configured, making changes.

Suppose Case-Production represents a case-review application. The application account already exists. ISC also has a record of it, already associated with the intended existing identity.

The application and ISC hold separate records. ISC's account record represents information collected from the application; it isn't a live view of every field inside that application.

An **attribute** is a named piece of information on a record. The application's operating-office value, ISC's collected account office and the identity's office are attributes on different records.

**Account aggregation** reads account records and their attributes into ISC or refreshes their collected information.

That is the work needed here: obtain the new application value and update the corresponding account representation. The old BLR value can remain visible in ISC until an appropriate read delivers and represents HYD.

**Provisioning** carries out supported external account or access changes. Reading the changed account doesn't require creating the application account again.

The records, configuration and results in this explanation are supplied examples. The account-identification design is valid, the intended identity exists and its current account association is correct.

## Starting a read is different from receiving its result

A supported source aggregation can start manually, on a configured schedule or through an authorized **API** operation. An API, or application programming interface, lets software interact with a system.

The start action requests work. To establish the result, we need evidence from the read and the account record it updates.

The connector uses its configured external connection. The **integration actor** is the account or application identity it uses to access the application. That actor's permissions determine what it may read.

An administrator seeing HYD on an application screen doesn't prove that the integration actor can retrieve that same account and field.

**Collection scope** is the boundary of the information being read. A **filter** selects or excludes records according to supported conditions.

For the normal trace, assume the correct production source is selected, the intended account is included and the actor can read the required fields. No filter excludes it.

The source aggregation can read many accounts. We are following one record within the supplied complete intended read. Finding that one record isn't proof that the whole population was collected.

A connection test or a visible Start Aggregation button is useful for its own purpose. The actual operation and execution evidence must establish that this account was read.

## Look at what the integration actually receives

A **direct-connect source** reads through a configured connector connection. A **flat-file source** imports supplied files.

Both need delivered information. A current application screen can't replace the response or export received by the integration.

In this Web Services example, the connector reads the application's web API. The following selected response uses **JSON**, JavaScript Object Notation, a format for exchanging structured data:

```json
{
  "items": [
    {
      "accountKey": "case-account",
      "login": "case-user",
      "employeeRef": "W-31",
      "profile": {
        "siteCode": "HYD"
      },
      "groups": ["G-51"]
    }
  ]
}
```

The outer braces enclose an object with named properties. A property name is on the left of the colon; its value is on the right.

The items property contains an **array**, or collection, inside square brackets. Our selected account is an object inside that collection.

Within the account, profile is another object. Its siteCode property contains the text HYD. Quoted values such as HYD and case-account are **strings**, meaning text.

The groups property is a collection containing one text item, G-51. In this example, it identifies an existing case-reviewers group the account already belongs to.

The **response** is the information returned by the read. Here it supplies the account, current office code and membership reference we need to follow.

This selected fragment doesn't describe the complete population. **Pagination** divides a result into pages. A successful first response doesn't establish that the remaining pages were read.

For the supplied normal outcome, the intended account is present and complete collection is confirmed. We don't need to explain this case by inventing a missing page.

## Select the returned value and give it the intended field

**Extraction** selects records or values from delivered data. A **mapping** specifies which input supplies a represented attribute, including supported conversion when needed.

A **schema** defines the attributes ISC represents and their designated uses. The definition describes a field; the read supplies its value.

For this response, extraction selects account entries from items. Within each entry, the intended mappings are:

| Delivered field | Represented account attribute | Purpose |
|---|---|---|
| accountKey | accountKey | Identifies this application account |
| login | login | Supplies its designated account name |
| employeeRef | employeeRef | Supplies the person reference used by configured matching |
| profile.siteCode | office | Supplies the account's operating-office code |
| groups | groups | Supplies existing membership identifiers |

The notation profile.siteCode describes the nested input: enter profile, then select siteCode. These are illustrative relationships, not a complete connector configuration or syntax recipe for every runtime.

The application calls its field siteCode. ISC's account representation calls the selected field office. The mapping explains why differently named fields carry the same information.

With the supplied correct extraction and mapping, the selected account attributes in ISC are:

```json
{
  "accountKey": "case-account",
  "login": "case-user",
  "employeeRef": "W-31",
  "office": "HYD",
  "groups": ["G-51"]
}
```

This shows selected represented attributes, rather than a complete ISC accounts API response.

The input's nested siteCode supplies office. The account key, designated name, person reference and separate membership item are preserved.

A **data type** describes the kind of value, such as text or a whole number. **Cardinality** describes whether a field holds one value or a collection.

Office has one text value, HYD. Groups is a collection with one text item. Correct collection preserves the values and their structure.

Adding office to a schema wouldn't obtain HYD by itself. The integration still needs the returned field and the mapping that selects it.

You can now follow the read-side dependency:

```text
Request account collection
          |
          v
Connector reads the application
          |
          v
Returned account selected and mapped
          |
          v
ISC represents the source account
```

The arrows connect the request, supported read, selection/mapping and represented result. They don't describe ISC's internal job or storage steps, or specify where every connector runs.

The connector performs the read, and ISC records the account information. The administrator starting the work isn't manually copying each application field into an identity.

## Recognize the account, then establish its owner

The account schema selects attributes for **Account ID** and **Account Name**.

Account ID selects the field used to identify each account. Here accountKey supplies case-account. Account Name selects the designated naming field; here login supplies case-user.

Both values remain unchanged while office changes. Under the supplied intact identification design, the result updates the existing ISC account representation from BLR to HYD.

The changed office belongs on that existing record; it doesn't require a second copy of the account.

A different variation could be the first collection of an already existing external account. ISC would then create its account representation. That still wouldn't mean the read created the external account.

The source account key, ISC's own account-record ID and a person reference identify different things. Don't substitute one merely because someone asks for an “account ID.”

Missing, repeated or renamed identifiers need investigation under the actual supported design. This example doesn't establish a universal duplicate-handling rule or a private storage-key algorithm.

Now consider the owner relationship.

**Account correlation** matches and associates source accounts with their appropriate ISC identities through configured account-to-identity comparisons.

Here, the approved comparison pairs account employeeRef with identity employeeNumber. Both contain the text W-31, and the intended existing identity is the supplied unique match.

The actual association is verified in the normal outcome. Similar-looking values alone don't prove that matching was configured or that it selected the intended person.

Office isn't the owner reference. Many people can share HYD without owning this account.

Collection supplies account information. Account identification distinguishes the record. Correlation establishes its identity association.

## A collected account can still lack its intended person association

An **uncorrelated account** hasn't been associated with an established identity through account correlation. The account can still have been successfully read.

The source account view can display it through a technical **shadow identity**, a placeholder for unmatched account information. That isn't evidence that HR has established another employee or that the intended person match succeeded.

If the source record exists but ownership is unresolved, inspect the compared values, matching configuration and actual association. Changing the office or creating an HR identity to hide the uncertainty doesn't identify the correct owner.

In a separate variation, employeeRef contains W-13 while the intended identity's employeeNumber is W-31.

Read success still doesn't establish the intended match. Inspect any other supported matching and the actual association; the read alone cannot repair an incorrect person reference.

## Follow the identity office through its own input

An **authoritative source** supplies accounts used to establish identities through an **identity profile**. The profile configures that identity population and the mappings supplying its attributes.

Case-Production is **non-authoritative** here. It isn't the configured source for establishing this population. The existing identity comes from a separate HR-backed arrangement.

Its non-authoritative designation doesn't make the case account or its access unimportant. Those accounts can be collected and associated with identities. A profile can also use a supported account field from another source for a mapped value.

But that isn't how identity office is configured in this example.

An **identity attribute** belongs to the ISC identity, rather than to one source-account representation. The identity's office is explicitly mapped from HR's home-office value, which remains CHN.

The application's office describes where that account operates. HR's office describes the person's home office. These are different agreed business facts.

Follow their two inputs separately:

```text
Application operating office HYD
               |
               v
Collected account office HYD

HR home office CHN
          |
          v
Mapped identity office CHN
```

The upper path supplies the account value from the application. The lower path supplies the identity value from HR. The diagram doesn't tell either source to overwrite the other.

HYD on the account and CHN on the identity can therefore both be correct.

If the requirement changes so identity office should come from the application, review the profile mapping, its dependencies and the processing needed to apply it. Editing correct HR data or repeatedly reading the application wouldn't implement that new input choice.

A **transform** calculates or formats a value using supported logic. A mapping can use a transform, so its output needn't be a literal copy of one raw field.

For an identity value, identify its configured input and the meaning of the resulting output.

## Account collection and identity processing do different work

**Identity processing** evaluates identity information and relevant access configuration. It can update mapped identity attributes and evaluate configured access consequences.

When aggregation or provisioning modifies an identity, that event initiates processing under the applicable configuration. Scheduled, time-based and manual processing also exist for their documented conditions.

That doesn't mean every account returned by a read runs every calculation or causes an external write.

An **optimized aggregation** can skip further processing for an existing account whose delivered data hasn't changed. A supported **delta aggregation** reads changes rather than the complete configured population.

The documented **single-account aggregation** action is another operation. It refreshes collected account information, but it doesn't synchronize that new information with identity attributes or perform provisioning.

Our normal example uses an applicable source account aggregation. The account office updates; the verified identity office stays HR-supplied CHN. We aren't using a successful single-account action as proof that the identity was recalculated.

A configuration change also differs from a data change. Changing correlation criteria doesn't necessarily change the account values the next read receives.

For changed correlation configuration, SailPoint documents aggregation with optimization disabled so unchanged accounts can be examined again.

For a saved identity-profile mapping change, the profile's documented Apply Changes action applies the changes to its identities. Check that work and the resulting identity value, rather than assuming that another read of unchanged account data applies every saved configuration change.

Choose that work with the intended scope and existing-record consequences in mind. “Run aggregation again” is only a proposed action until you can explain which missing step it will perform.

## Seeing an existing membership isn't granting it

An **entitlement** represents an item of access. A **membership** connects an account to an access object such as a group.

G-51 identifies the existing case-reviewers group in our example. The account held it before the read, and the supplied completed result retains that same membership.

The account read collects the identifier. It doesn't create the group or add the account to it.

An **entitlement aggregation** collects information about access objects themselves, such as their identifiers, names and descriptions. Membership values on accounts and detailed group inventory provide different information.

External account creation, adding a membership or changing a target field requires the relevant supported provisioning operation.

A read can nevertheless begin a wider process that changes access.

An ISC **role** organizes access for business assignment. A **lifecycle state** represents organizational status with configured access behaviour.

If collected data changes an identity value used by a role or lifecycle configuration, processing can initiate separate provisioning work. The read supplies input; the change operation performs the external effect.

The whole workflow can have access consequences. Discovering an already existing membership is still different from granting a new one.

In our main result, office changes on the account representation while G-51 remains unchanged. No access-changing outcome is supplied.

## Match each conclusion to the record that supports it

The completed normal trace supplies the following results: the application returned HYD; the correct mapping supplied account office HYD; the existing representation was updated; and the intended identity association is correct.

Identity office remains CHN under its HR mapping. No external account creation or membership change is reported.

These questions help separate the evidence:

| Question | Useful evidence | What remains a separate question |
|---|---|---|
| Did the application supply HYD? | Correct actor's response or controlled source export | Was it extracted and represented correctly in ISC? |
| Did the account field update? | Correct source/account and its collected office | Which field supplies the identity's office? |
| Who owns the account? | Actual association, matching configuration and compared values | Does another descriptive field identify the same person reliably? |
| Why is identity office CHN? | Profile mapping, HR input and resulting identity value | Was a different business requirement intended? |
| Did access change externally? | Applicable provisioning outcome and actual target state | Was the observed membership already present? |

**Aggregation History** shows execution status, timing, counts and warnings or errors. It describes that execution. A total account count doesn't establish that case-account's office changed.

The **frontend**, or user interface (UI), displays different records and configuration. Source Accounts shows collected accounts and associations. Account details show this account's represented office. Identity details show identity values; profile mappings explain their input.

The **backend** is the software handling requests, reads and processing behind those screens. A general success label doesn't tell you which record or field someone inspected.

ISC Search can reflect a change later than the account record itself. Compare the actual account record, execution evidence, viewing conditions and freshness before treating an old Search result as a failed connector read.

## Let the missing evidence guide the investigation

If the account isn't in the application's response, inspect the destination, integration actor, scope, filters, pages and source data.

If the account arrived but wasn't selected for representation, inspect extraction, mapping, schema and relevant errors.

If the representation exists but office is old, compare the delivered value with its configured input path and the actual operation. A later job timestamp doesn't establish that the input contained a newer value.

For example, a mapping from profile.branchCode doesn't select HYD when the returned field is profile.siteCode. Inspect the resulting record and errors. Don't invent one universal skip, rejection or clearing result for every connector.

If the account has HYD and the identity has CHN, follow the identity mapping and business meaning before calling it a fault.

If the owner is unresolved, investigate correlation separately from delivery.

If an external change was expected, establish the configured change operation and whether it was initiated. Then verify its outcome and actual target state.

These are investigation branches, not universal failure codes or private execution stages.

Before rerunning a wider source operation, review existing records and deletion settings. A narrower response or failed read isn't proof that the application deleted an account.

## Trace the changed conditions

### 1. Account and identity offices differ

The collected account has HYD. Identity office remains CHN, mapped from HR, whose input is still CHN. Must one value be wrong?

**Worked reasoning:** No. Check the mappings and agreed meanings. Equal field labels don't require equal values or authorize overwriting either source.

### 2. A representation appears for the first time

The external case-account already exists. Its first collection creates a representation in ISC. What was created?

**Worked reasoning:** The collected account representation. The read didn't create the application account; that would be a separate provisioning outcome.

### 3. The response has the value but the path is wrong

The response contains profile.siteCode HYD. The office mapping selects absent profile.branchCode. Should the application owner change HYD first?

**Worked reasoning:** No. The fault concerns selection of an available input. Inspect the mapping, actual result and errors without assuming a universal clear, reject or retry behaviour.

### 4. The person reference differs

A separate variation has employeeRef W-13; the intended identity has employeeNumber W-31. No other matching evidence is supplied. Does read success establish ownership?

**Worked reasoning:** No. Inspect configured comparisons and actual association. Don't silently replace the reference or select an owner by office.

### 5. Only the first response page is confirmed

The first page succeeds, but continuation hasn't been checked. Is the intended population completely collected?

**Worked reasoning:** That isn't established. Check scope and supported continuation through completion. Individual request success doesn't establish population completeness.

### 6. Criteria change while account data stays the same

Correlation configuration changes, but returned account values are unchanged. Is a new optimized run guaranteed to apply the new criteria to every unchanged account?

**Worked reasoning:** No. Optimization can skip unchanged records and correlation evaluation. Follow the documented re-evaluation path with optimization disabled, appropriate scope and existing-record review. A new timestamp doesn't establish that matching ran again.

### 7. A read leads to a later membership addition

Collected information changes an identity value used by a role. Separate supported provisioning adds access. Which operation changed the membership?

**Worked reasoning:** Provisioning performed the external change. The read supplied input to the configured decision. Verify the target result and account for the access consequences of the full workflow.

### 8. A new file carries an old value

A newly delivered file still contains BLR for the intended account while the application shows HYD. Can identity processing reconstruct HYD from that old input?

**Worked reasoning:** No. Inspect the producer and export selection. A mapping can't manufacture the unsupplied current value. A fresh file timestamp doesn't prove that its rows contain current information.

## Trace a different HR record

A project receives a worker record from HR and expects an ISC identity and a downstream application account. Its proposal says: “After the row is read, all three records exist and their fields match.”

What needs separate evidence?

**Worked reasoning:** Inspect the worker record, source/schema identification, population and required values. Establish the authoritative source and identity profile for identity creation. Our application-source example's non-authoritative assumption doesn't carry into this different design.

Check the identity mappings, resulting identity and required-value exceptions. Then establish the separate application-account creation or access-changing mechanism, its inputs and authority, and verify the external result.

A collected HR row, an established identity and a provisioned application account are different outcomes. Follow any differing field through its own input and meaning before declaring a failure.

Explain the work through those relationships: “The read supplies account information. Identification distinguishes the account, correlation associates its owner, and profile mappings determine which identity values use that information. An external change needs its own supported operation and evidence.”
