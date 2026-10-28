# The account changed. What should change in ISC?

An application's existing account has changed its operating-office code from BLR to HYD. ISC still shows BLR on its collected account record.

A read is started to bring the account information into ISC. The expected result is a current representation of that account, rather than a new application account or a new access grant.

But the person's ISC identity has office = CHN, supplied by Human Resources (HR). Should that value change too?

To answer, follow the account data into ISC, then inspect which input supplies the identity's office. The same field label on two records doesn't make them one shared value.

## Start with the account that already exists

An **account** is a record in an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and connects relevant information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behaviour.

Our hypothetical `Case-Production` source represents a case-review application. The external account already exists. ISC also has its account representation, already associated with the intended existing identity.

An **attribute** is a named piece of information. The account's operating-office value and the identity's office value are attributes on separate records.

**Account aggregation** collects account records and their attributes into ISC. The representation records information obtained under the source's configuration. It isn't the external account itself.

That explains how the application can show HYD while ISC still shows BLR: the new value hasn't yet reached the relevant collected representation.

**Provisioning** performs supported external account or access changes. A read of an existing account and an operation changing that account have different purposes.

The source, values, configuration and results here are supplied teaching conditions. The account-identification design is valid, the intended identity already exists and its association is correct. No real tenant read or target change is claimed.

## What starts the work, and who reads the application?

A supported source aggregation can start manually, on a configured schedule or through an authorized **API** operation. An API, or application programming interface, lets software interact with a system.

The start action asks ISC to perform work. It isn't the returned account data or evidence that the requested work finished.

The connector uses the configured external connection. The **integration actor** is the account or application identity used to access that external system. Its permissions determine what it may read.

An administrator seeing HYD in the application doesn't establish that this actor's account-read operation can retrieve the same record and field.

**Collection scope** describes which records and information the operation covers. A **filter** selects or excludes records under supported conditions.

For our successful trace, the correct production source is selected, the operation includes the intended account, and the actor can read its required fields. No filter excludes it.

The source aggregation may collect many accounts. We are examining one record within the supplied complete intended read, rather than treating a one-record example as proof of the population.

The source's connection test and a visible Start Aggregation button don't establish those conditions. The operation and execution evidence do.

## Inspect the delivered record

A **direct-connect source** reads through a configured connector connection. A **flat-file source** imports supplied files instead.

Either way, ISC needs delivered data. A correct application screen doesn't substitute for the response or export the integration actually receives.

For this Web Services example, the connector reads through the application's web API. Here is a selected response in **JSON**, JavaScript Object Notation:

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

Curly braces enclose objects with named properties. Square brackets enclose arrays, which are collections. Quoted values such as HYD are text.

The outer object contains an items collection. That collection contains the selected account object. The `profile` property contains another object inside the account, and `siteCode` supplies a value inside it.

The **response** is the information returned by the read operation. Successful delivery still needs the intended contents: this account, its HYD value and its relevant access information.

Groups contains one text identifier, G-51. In this example it refers to an existing case-reviewers group already held by the account.

The fragment isn't a complete population response. **Pagination** splits a result into pages; a successful first request doesn't prove that every page was consumed.

In the supplied normal result, the intended record is present and complete collection is confirmed. A missing page isn't the explanation for the initial BLR value.

## Turn the returned fields into represented account attributes

**Extraction** selects records or values from delivered data. A **mapping** determines which input supplies a represented attribute, with supported conversion where needed.

A **schema** defines represented attributes and their designated uses. It describes the fields ISC represents; it doesn't fetch their values by itself.

For this response, account extraction selects entries from items. Within each entry, the intended mappings are:

| Delivered field | Represented account attribute | Purpose |
|---|---|---|
| accountKey | accountKey | Identifies this application account |
| login | login | Supplies its designated account name |
| employeeRef | employeeRef | Supplies the person reference used by configured matching |
| profile.siteCode | office | Supplies the account's operating-office code |
| groups | groups | Supplies existing membership identifiers |

`profile.siteCode` describes the nested input relationship here. These paths aren't a complete connector configuration or syntax recipe for every runtime.

The external field can be named siteCode while the represented field is office. The mapping connects them.

With the supplied correct extraction and mapping, selected represented account attributes are:

```json
{
  "accountKey": "case-account",
  "login": "case-user",
  "employeeRef": "W-31",
  "office": "HYD",
  "groups": ["G-51"]
}
```

This illustrates selected account attributes, rather than a complete ISC accounts API response. The nested input supplies the office value while the account identifiers and memberships are preserved.

A **data type** describes the kind of value, such as text or a whole number. **Cardinality** describes one value versus a collection.

HYD is one text value. Groups is a collection containing one text item. Preserving both value and structure is part of a correct read.

Adding office to a schema wouldn't supply HYD without the returned input and correct mapping.

Now you can follow the read-side dependency:

```text
[ISC requests account collection]
                 |
[Connector reads the application]
                 |
[Returned record selected and mapped]
                 |
[ISC represents that source account]
```

The lines connect the collection request, supported read, selection/mapping and represented account. They aren't separate private jobs, a storage-commit sequence or a promise that all connectors execute on the same host.

The connector performs the supported read; ISC records the account information. The person starting the job isn't manually copying each application field into an identity.

## Recognize the account before deciding who owns it

The schema selects attributes for **Account ID** and **Account Name**. Here accountKey supplies the account-identifying value and login supplies its designated naming value.

Those values remain case-account and case-user. The operating-office change doesn't change either one.

The supplied outcome updates the existing account representation from BLR to HYD. It doesn't create another account.

That depends on the intact supported identification design. Don't infer a private storage-key algorithm or universal handling of missing, repeated or renamed identifiers.

The external account key, ISC's own account-record ID and a person reference identify different things.

**Account correlation** matches and associates source accounts with their appropriate ISC identities using configured account-to-identity comparisons.

Here the approved comparison pairs account employeeRef with identity employeeNumber. Both have the text W-31, and the intended identity is a supplied unique existing match.

The actual association is verified in the outcome. Equal-looking values alone wouldn't establish that every source already has this matching configuration.

Office doesn't identify the owner. Many people can have HYD as an office without owning this account.

Collection tells ISC about the account. Account identification distinguishes that record. Correlation establishes its person association.

## Collected but uncorrelated is a different result

An **uncorrelated account** hasn't been associated with its intended established identity. That doesn't necessarily mean the connector failed to read it.

The source account view can represent such an account through a technical **shadow identity**, a placeholder for unmatched account data rather than a verified match to the intended established person identity.

That placeholder isn't evidence that HR has established another employee.

If the source record exists but its owner is unresolved, inspect matching inputs, configuration and actual association. Changing the account's office or creating an HR identity to hide the uncertainty wouldn't establish the correct owner.

A separate mismatch variation can have employeeRef W-13 while the intended identity has W-31. A successful read still doesn't prove the intended ownership. Other supported matching and actual association need inspection; the read alone doesn't repair the reference.

## Trace the identity's office through its own mapping

An **authoritative source** supplies accounts used to establish identities through an **identity profile**. The profile configures an identity population and the mappings supplying its attributes.

Case-Production is non-authoritative here: it isn't the configured source for establishing this identity population. The existing identity comes from a separate HR-backed arrangement.

Non-authoritative doesn't make its accounts or access unimportant. They can be collected and associated with identities. The designation concerns identity origin; a profile can still use a supported account field from another source for a mapped value.

In this design, however, identity office is explicitly mapped from HR, whose home-office value remains CHN. It isn't mapped from the case account's operating-office field.

An **identity attribute** belongs to the ISC identity, rather than to an individual source-account representation.

```text
[Application operating office HYD]
                |
[Collected account office HYD]

[HR home office CHN]
          |
[Mapped identity office CHN]
```

The upper relationship supplies the application's collected account value. The lower relationship supplies the identity value through its configured HR mapping. Neither tells one system to overwrite the other.

HYD and CHN can therefore both be correct: operating office and HR home office are different agreed facts.

If the requirement changes so identity office should use the case application, inspect and assess the profile mapping and its processing. Editing HR or repeatedly reading the application wouldn't implement that new value-source decision.

A **transform** calculates or formats a value using supported logic. A mapping can use one, so an identity result needn't be a literal copy of a raw field.

For any identity value, ask which configuration supplies it and what that output means.

## Collection and identity processing have different responsibilities

**Identity processing** evaluates identity information and relevant access configuration. It can update mapped attributes and evaluate configured access consequences.

When aggregation or provisioning modifies an identity, that event initiates processing under the applicable configuration. Other supported processing mechanisms also exist.

This doesn't mean that every account returned by a read triggers every identity calculation or external write.

An **optimized aggregation** can skip further processing for an existing account whose delivered data is unchanged. A supported **delta aggregation** reads changes rather than the complete configured population.

A **single-account aggregation** is another operation. The documented single-account action updates collected account information but doesn't synchronize that new data with identity attributes or perform provisioning.

Our main trace uses an applicable source account aggregation. It represents the changed office while the verified identity office remains HR-supplied CHN. A successful single-account action isn't used as evidence that the identity was recalculated.

Likewise, changing correlation criteria or an identity mapping doesn't necessarily make unchanged source data different. Establish the documented re-evaluation or configuration-application process needed.

“Run aggregation again” names an action. It doesn't yet explain why that action would resolve the issue.

## Seeing a group isn't granting it

An **entitlement** represents an access right. A **membership** associates an account with an access object such as a group.

G-51 is the supplied identifier of the existing case-reviewers group. The target membership existed before collection and remains unchanged in the main outcome.

The account read collects its identifier. It doesn't create the group or assign it to the account.

An **entitlement aggregation** collects information about access objects themselves, such as identifiers, names and descriptions. Account-held membership values and detailed object inventory have separate responsibilities.

Creating an external account, adding a membership or changing a target field requires the relevant supported provisioning operation.

Collected data can still feed a wider access-changing process. An ISC **role** groups access for business assignment. A **lifecycle state** represents organizational status with configured access behaviour.

If a collected value changes identity information used by those configurations, processing can initiate separate provisioning work. The read supplies information; the change operation performs the external effect.

That is why a workflow starting with a read can have access consequences, while discovering an existing membership isn't itself a new grant.

The main example supplies no access-changing result: account office updates, but G-51 remains the same membership.

## Use evidence for the particular claim

In the supplied completed trace, the application response contains HYD, the mapping supplies account office HYD, the existing account representation is updated, and its intended identity association is correct.

Identity office remains CHN under the HR mapping. No external account creation or membership change is reported.

| Question | Useful evidence | What it doesn't establish alone |
|---|---|---|
| Did the target supply HYD? | Correct actor's response or controlled source export | Correct extraction or representation in ISC |
| Did the account field update? | Correct source/account and its collected office | Which field supplies identity office |
| Who owns this account? | Actual association, matching configuration and compared values | That office or a repeated friendly name safely identifies the person |
| Why is identity office CHN? | Profile mapping, HR input and resulting identity value | That application collection failed |
| Was access changed externally? | Applicable provisioning outcome and target state | That a collected existing membership was newly granted |

**Aggregation History** shows execution status, timing, counts and warnings or errors. Those describe the execution rather than every business conclusion.

The **user interface**, or UI, presents different records. Source Accounts shows collected accounts and associations. Account details show this account's represented office. Identity details show identity values; profile mappings explain their inputs.

A total account count doesn't establish that case-account changed. A general success label doesn't identify which office field was inspected.

A change can also reach an account record before it appears in ISC Search. Compare the actual record, execution evidence, viewing conditions and freshness before treating an old search result as a failed read.

## Use the missing evidence to choose the next investigation

If the account isn't in the external response, inspect the destination, integration actor, scope, filters, pages and source data.

If it arrived but wasn't selected for representation, inspect extraction, mapping, schema and relevant errors.

If the account exists but office remains old, compare the actual delivered value with its configured input path, operation and execution. A later job timestamp doesn't prove the input was current.

For example, selecting profile.branchCode when only profile.siteCode exists doesn't select the supplied HYD value. Inspect the actual result and errors; don't assume every connector skips, rejects or clears it identically.

If the account value is HYD while identity office is CHN, inspect the identity mapping and business meaning before calling that a fault.

If ownership is unresolved, investigate correlation separately from delivery.

If an external change was expected, establish the configured change operation and whether it was initiated. Then inspect its outcome and actual target state.

These are investigation branches, rather than universal failure codes or undocumented internal stages. Before rerunning a wider source operation, consider existing records and deletion settings. A narrower response or failed read isn't proof of an external deletion.

## Trace the changed conditions

### 1. Account and identity offices differ

The collected account now has HYD. Identity office is still CHN, mapped from HR, whose input remains CHN. Must one value be wrong?

**Worked reasoning:** No. Verify the mappings and agreed business meanings. Equal field labels don't require equal values or authorize overwriting either source.

### 2. A representation appears for the first time

In this separate variation, the external case-account already exists. The first collection creates its representation in ISC. What was created?

**Worked reasoning:** The collected account representation. The external account wasn't created by the read. External creation is a separate supported provisioning outcome.

### 3. The response has the value but the path is wrong

The response has profile.siteCode HYD. The office mapping selects absent profile.branchCode. Should the application owner change HYD first?

**Worked reasoning:** No. The supplied defect concerns selecting an available input. Inspect mapping, actual account result and errors without inventing universal clear, reject or retry behaviour.

### 4. The person reference differs

A separate account variation has employeeRef W-13; the intended identity has employeeNumber W-31. No other matching evidence is supplied. Does read success establish ownership?

**Worked reasoning:** No. Compare configured matching inputs and actual association. Reading a record isn't proof of the intended person link; don't silently replace the reference or choose an owner by office.

### 5. Only the first response page is confirmed

The first page succeeds, but continuation hasn't been checked. Has the intended population been completely collected?

**Worked reasoning:** Not established. Check scope and supported continuation through completion. Individual response success isn't population completeness.

### 6. Criteria change while account data stays the same

Correlation configuration changes, but delivered account attributes are unchanged. Is a new optimized run guaranteed to apply the criteria to every unchanged account?

**Worked reasoning:** No. Optimization can skip unchanged records and correlation evaluation. Follow documented supported re-evaluation with appropriate scope and existing-record review. A new timestamp doesn't establish that work occurred.

### 7. A read leads to a later membership addition

Collected information changes an identity value used by a role. Separate supported provisioning adds access. Which operation changed the membership?

**Worked reasoning:** The provisioning operation. The read supplied input to the configured decision process. Verify the separate target result and acknowledge the access consequences of the complete workflow.

### 8. A new file carries an old value

A newly delivered file still contains BLR on the intended account row, while the application shows HYD. Can identity processing reconstruct HYD from that old input?

**Worked reasoning:** No. Inspect the producer's state and export selection. Mapping doesn't manufacture the unsupplied current value, and a fresh file timestamp doesn't prove fresh row contents.

## Trace a different HR record

A project receives a worker record from HR and expects an ISC identity and a downstream application account. Its proposal says: “After the row is read, all three records exist and their fields match.”

What must be established separately?

**Worked reasoning:** Check the actual worker record, source/schema identification, population and required values. Establish the authoritative source and identity profile for identity creation; the main example's non-authoritative application-source assumption doesn't carry into this design.

Inspect the configured identity mappings, resulting identity and any required-value exceptions. Then establish the separate account-creation or access-changing mechanism, its inputs and authority, and verify the external result.

A collected HR row, an established identity and a provisioned target account are different outcomes. Trace any differing field through its own input and meaning before declaring failure.

Explain the relationships directly: “The read supplies account information. Account identification distinguishes the record, correlation associates its owner, and profile mappings determine which identity values use it. An external change needs its own supported operation and evidence.”
