# Account, identity, and entitlement attributes: which value are you looking at?

"The department is wrong."

Before changing it, ask where the value appears. The department on an employee's finance account and the department on their SailPoint Identity Security Cloud (ISC) identity are two separate pieces of information. Even when both fields are named `department`, changing one does not, by that name alone, change the other.

An **attribute** is a named piece of information on a record. Its **value** is what that piece of information contains. In `department = Finance`, the attribute is `department`; its value is `Finance`.

The record matters because it tells you what the statement describes. Does Finance describe the person, one application account, or an access item intended for Finance work? Those are different statements, and ISC uses different configuration to connect them.

## Put the value beside the record that holds it

An **account** is a record in a particular system, such as a finance user account or an employee's worker record in the human resources system, or HR. An **identity** is ISC's person-level representation, connecting the employee's information with their accounts and represented access.

For this example, an employee already has an ISC identity, an HR worker record, and a finance account. ISC has collected the relevant account data and associated the accounts with the correct identity. We are investigating the values, not an unresolved account association.

These are hypothetical observations, after the HR information has been collected and the identity department calculated:

| Record being inspected | Attribute | Observed value |
|---|---|---|
| Collected HR worker account | `orgCode` | `FIN` |
| Employee's ISC identity | `department` | `Finance` |
| Collected finance account | `department` | `Operations` |

Read the first row as "the HR account contains the organization code FIN." Read the second as "ISC records Finance as the person's department." The third describes a value collected from one finance account.

We have not yet established that any of these values is wrong. HR can deliberately store a code while ISC calculates its readable name. The finance department might require an update, or we might be looking at an older observation. We need the intended relationships and the relevant evidence before deciding.

A more useful report is: "The identity department is Finance, but the collected finance account department is Operations." Now we know which records to compare.

## An account attribute belongs to one account

ISC represents a connected system or account dataset through a **source**. A **connector** provides the integration used to read that data and perform supported, configured changes. Collecting account information into ISC is **account aggregation**.

The value you see on a collected account is therefore information ISC obtained about that account. It is not necessarily a live reading of the application at the moment you open the screen.

In this example, the finance source is named `Invoice-Service`. One account under that source contains:

```json
{
  "accountId": "finance-user",
  "department": "Operations",
  "enabled": true,
  "groups": ["g-inv-read", "g-report-export"]
}
```

This is a teaching representation, not an exact connector response or something to run. It uses JSON, JavaScript Object Notation, a format for writing named values. The curly braces enclose one record. A name before a colon identifies an attribute; its value follows the colon.

Here, `accountId` identifies the particular finance account. `department` describes the department stored on that account. `enabled` contains the Boolean value `true`: a Boolean is a logical value that can be true or false. In this hypothetical application, true means that the account is enabled.

The square brackets around the group values mean this attribute holds a list. It contains two separate values, not one long group name.

All of these are **account attributes** because they belong to this account record. Associating the account with an identity does not turn its fields into identity attributes.

That association is called **account correlation**: matching and assigning a source account to the appropriate ISC identity. A matching field, such as an employee number, is information that correlation configuration can compare; simply collecting that field does not itself define a matching instruction.

Our example assumes the correct association is already established. If the employee also has an administrative finance account, that second account has its own attributes. You would need to identify which account contains Operations. "The employee's finance department" could otherwise refer to two different records.

## The schema tells ISC how the account information is organized

The source's **account schema** describes the account attributes and their representation. It tells ISC which fields describe an account, including which field provides its Account ID and which provides its Account Name.

For the finance example, `accountId` supplies the Account ID. The Account Name setting determines the account value used as its name. These are configured roles for account fields, not a rule that every account identifier must equal an employee number.

The schema also describes the value's type and whether it is **multi-valued**, meaning it can contain more than one value. Our `groups` field needs that list representation because an account can have both invoice-reading and report-export memberships.

A schema does not manufacture the source data. Adding `department` to it does not create a department field in the application or give the integration permission to read that field. The application must supply it, the connector must obtain it, and the configured representation must fit what is returned.

This is why you check the external field, connector configuration, and source schema together. An application screen can show "Worker Department" while the integration supplies `orgCode`. The readable label and the attribute used by a mapping need not be the same text.

Do not change Account ID or Account Name selections to repair a department problem. Changing these settings after aggregation can break references or introduce duplicate accounts and identities. Identify the actual faulty field or mapping instead of disturbing how ISC identifies the account.

## How does FIN become Finance on the identity?

An account value answers "What was recorded on this account?" An **identity attribute** answers a person-level question, such as "Which department should ISC use for this employee?"

ISC needs configuration telling it where that person-level value should come from. It cannot choose reliably just because several accounts have a field called department.

An **identity profile** provides configuration for an identity population, including its attribute mappings. Its **authoritative source** supplies the population from which those identities are established.

In this example, the Employees profile uses the `HR-Workers` source as authoritative. HR establishes the employee population. A **mapping** then specifies how each identity attribute obtains its value.

For department, the agreed mapping selects the HR account's `orgCode`. It uses a **transform**, configured logic that takes input and calculates an output, to translate the code:

| HR input | Identity output |
|---|---|
| `FIN` | `Finance` |
| `OPS` | `Operations` |

This describes the intended conversion, not a complete transform configuration. Missing and unexpected codes still need defined treatment.

Let's follow the supplied successful calculation. HR contains `FIN`. Account aggregation collects that value into the HR account representation in ISC. That makes the input available; it has not changed the code into a readable department name yet.

During applicable **identity processing**, ISC evaluates identity information against its configuration. The department mapping selects the collected HR value. Its transform receives `FIN` and returns `Finance`. ISC records Finance on the identity.

The HR account still contains `FIN`. The calculation produced a value for a different record; it did not rewrite its input. This explains why FIN and Finance can both be correct.

Aggregation can lead to identity processing when relevant data changes. Administrators also apply mapping changes through the applicable processing mechanism. Saving a mapping, previewing its output, and applying it to identities are distinct actions. Do not assume opening a screen or saving configuration has recalculated every affected identity.

The authoritative source also does not have to supply every identity attribute. Suppose the employee's already-associated directory account has the approved work email in `mail`. The identity's `email` mapping can select that directory field while department uses HR.

The email and department therefore have different origins even though they appear together on one identity. Check the particular attribute's mapping, not only which source established the person. Where multiple accounts could provide an input, you also need to establish which account the applicable mapping logic selects.

## What would make the finance account change?

Return to the opening observations. HR says FIN, ISC's identity says Finance, and the collected finance account says Operations.

The HR-to-identity calculation agrees with the stated mapping. Whether the finance account should also say Finance is a separate requirement.

**Provisioning** carries out supported account or access changes through a configured delivery method. **Attribute synchronization**, or attribute sync, is the configured mechanism that provisions selected account-attribute values from corresponding identity attributes.

The direction matters. The identity value is the value to enforce on the account. Matching field names do not establish that relationship.

For our finance department update, the required mapping in the source's **Create Account definition** must include the account department and map it directly from the identity department. That definition describes values used for account creation and also supplies the mappings used to determine attribute-sync eligibility.

Including a field there does not automatically synchronize it. The department field must also be selected for sync, and the identity's profile must map the corresponding identity attribute. The account must exist and be correlated. Attribute sync does not create a missing account.

For the successful continuation, assume those conditions are met, the source supports the department update, and the configured integration is permitted to perform it. A relevant identity-department change is processed, attribute sync provisions the update, and the finance application accepts it. Its existing account now contains Finance.

```text
READ

HR worker record
orgCode = FIN
           |
  account aggregation collects FIN
           v
ISC: collected HR account
orgCode = FIN
           |
  identity-profile mapping
  selects orgCode
  transform: FIN becomes Finance
           v
ISC: employee identity
department = Finance

SEPARATE, CONFIGURED WRITE

Identity department = Finance
           |
  applicable attribute sync
  provisions department update
           v
Finance application: existing account
department = Finance
(supplied successful outcome)

Human checks:
inspect activity and current target.
Inspect later collection separately.

Arrows show information and work,
not private services or fixed timing.
```

The read arrow carries FIN from HR into ISC. The calculation uses that collected input to produce Finance on the identity. The separate write carries the configured department update to the finance application. The final target value is a supplied successful outcome, not something the opening observations proved.

Automatic sync responds to applicable detected changes under its configuration; merely selecting more attributes is not proof that every existing account has been reconciled. Applying a new sync configuration and checking existing values requires the applicable synchronization operation.

If an identity has multiple correlated accounts on a source, attribute sync updates all of them under the configured mechanism. Do not assume it updates only the account you happen to be viewing.

For verification, inspect the relevant activity and current finance account. A later collection can provide a refreshed observation in ISC. The diagram does not promise an immediate full aggregation after every write or that all screens update together.

Also keep department and access separate. Changing the account's department is not the same operation as adding an invoice-reading group or removing report-export access. Whether a department value influences permissions depends on the application's behavior and the configured access decisions.

## A definition creates a place for a value, not the value itself

ISC includes default identity attributes and lets administrators add custom ones. A custom identity attribute added under one profile becomes available across profiles, but each profile does not have to map and use it.

Suppose you add a custom attribute for an approved employment category. You have created a place to hold the information. You have not supplied a category for every employee. Each relevant profile still needs its input and mapping.

Removing a custom attribute is broader than fixing one bad value: deleting it removes it across identity profiles. Other configuration can depend on it. Check those dependencies and the mapping before considering an authorized deletion. Default attributes are not candidates for casual deletion either.

This is the same distinction you saw with a source schema. Defining a field, populating it, and using it in a process are different pieces of work.

## The account's group list and the group's own attributes are different

Look again at the finance account's `groups` list:

`["g-inv-read", "g-report-export"]`

In our hypothetical finance application, a **group** collects accounts and gives its members specified access. Membership in `g-inv-read` allows invoice reading; membership in `g-report-export` allows report export.

ISC represents source access items, such as these group memberships or permissions, as **entitlements**. The account list tells us which represented memberships that account holds. It does not tell us everything about what each group means.

The finance integration also supplies this group record:

| Attribute on the group record | Value |
|---|---|
| `id` | `g-inv-read` |
| `name` | `FIN_INV_READ` |
| `description` | `Allows invoice reading` |
| `businessArea` | `Finance` |

These are **entitlement attributes** because they describe the access item itself.

The description answers "What does this group allow?" The account membership answers "Does this account hold that group?" The identity department answers "What department does ISC record for the person?"

Those distinctions prevent a subtle mistake: `businessArea = Finance` on the group does not set the identity department to Finance. It describes the access item. Any separate calculation that uses it needs explicitly defined logic.

The group's meaning also needs confirmation from the real application. A friendly name or a promising description is information about the access, not independent proof of every operation the application permits.

## How does the membership find the right entitlement?

An **entitlement type** identifies a kind of access item within a source. Its schema describes the item's attributes, including the fields designated as Entitlement ID and Entitlement Name.

In `Invoice-Service`, our configured type is `groups`. Its schema uses `id` as Entitlement ID and `name` as Entitlement Name. The additional description and business-area fields exist because this hypothetical integration supports returning them.

**Entitlement aggregation** collects details about the access items. Account aggregation collects account information, including its represented membership values. These contribute different parts of the picture: which access an account holds, and what that access item is.

To connect them, the account schema marks `groups` as an Entitlement field. The field remains an account attribute: its values are references to access items. The setting does not turn it into the group's description.

In the configured relationship here, the account field's name agrees with the `groups` entitlement type, its Type is linked to that entitlement type, and each membership value matches the designated Entitlement ID within that source.

```text
Source: Invoice-Service
Entitlement type: groups

Collected finance account
groups includes g-inv-read
           |
  membership value matches
  designated Entitlement ID
  in this source/type context
           v
Entitlement record
id = g-inv-read
name = FIN_INV_READ
description = Allows invoice reading
businessArea = Finance

The arrow is a reference,
not a grant or a write operation.
```

Follow the reference from the account value `g-inv-read` to the entitlement's `id = g-inv-read`. That explains how the membership can be associated with the details saying it allows invoice reading.

The arrow is not a grant. The account already holds the membership in the supplied example; the relationship helps ISC represent and explain it.

Now suppose the account returns `FIN_INV_READ` instead. That text matches the entitlement's name, but its designated ID is `g-inv-read`. Under our agreed design, a matching visible name does not repair the ID mismatch.

Inspect the returned membership values, connector mapping, and account/entitlement schemas. Do not rename the display label or change an established identifier merely to hide the difference. Changing entitlement ID/Name designations after aggregation can also produce duplicate entitlements.

A real connector determines the supported fields and entitlement types. Not every source offers separate entitlement aggregation, and a collected account membership does not guarantee that every descriptive property has been obtained.

## Does improving the description change the access?

An administrator can maintain an entitlement's ISC display name and description to make its meaning clearer. A display name is a readable label; it does not replace the designated reference ID.

For example, the invoice-reading entitlement can have the description "Read invoices; does not permit invoice export." That helps someone understand what they are considering. It does not remove the separate report-export membership from an account.

Those display-name and description edits in ISC are not sent to the external source. They are different from editing a group in the finance application or provisioning a membership change.

Later entitlement aggregation also does not simply overwrite these manually maintained values; the documented update behavior protects existing display names and descriptions. If the ISC description differs from the application's, establish where each came from before diagnosing a collection failure.

The wording still needs to be accurate. Improving a description helps a person make a decision; it does not restrict what an incorrectly described permission actually allows.

## The kind of value changes what you can conclude

An attribute's name tells you which information to inspect. Its type and shape tell you how that information is represented.

A **string** is text. The string `"0042"` can be an identifier whose leading zeros matter. The numeric value `42` does not preserve those zeros as part of the value. Converting a code into a number merely because it contains digits can change what later matching or delivery uses.

Likewise, `false` is a Boolean, but `"false"` is text. A screen can display both as the word false. You need the supplied representation and any conversion to know what a comparison receives.

Missing and empty information also needs careful reading:

| Supplied representation | What it says about this input |
|---|---|
| The `department` field is absent | This record supplies no such field |
| `"department": null` | The field is present without a value |
| `"department": ""` | The value is empty text |
| `"groups": []` | The value is an empty list |
| `"enabled": false` | A Boolean false was supplied |

False is a value, not a blank. An empty list contains no elements, but an absent list does not by itself establish which memberships currently exist in the application.

These are distinctions in the supplied input. Connectors and features can normalize or interpret representations differently. Check the collected value, the schema, and the consuming logic before predicting behavior. Support for a list on an account field does not establish that an identity mapping or decision feature accepts that list unchanged.

If HR supplies no organization code, our two-row conversion table does not tell you what the running transform returns. The actual configuration needs missing-input handling. An undocumented gap in a description is also not proof of a particular runtime error.

Any fallback value should have an approved meaning. Choosing Finance merely to avoid a blank can misrepresent the person and affect decisions that use department.

A null identity output has a further consequence under attribute sync: when the profile mapping sets a configured synchronized identity attribute to null, sync propagates null to the account attribute. It is not safe to assume the old account value will be left untouched. Check the target's required-value restrictions and the operation result; the target can reject a value that ISC attempts to send.

Dates need meaning as well as text. `2026-10-20` needs an agreed format and interpretation in a calculation. A date with a time also needs a time zone before you can compare instants. A readable date on a screen does not establish that every process interprets it identically.

## Find the first point where the value differs from the design

Suppose the identity unexpectedly shows Operations. The agreed mapping is still HR `orgCode`, with FIN converted to Finance.

Start at the producing record and move toward the result:

| Evidence | What it helps establish |
|---|---|
| Intended employee's current HR record | Whether HR actually contains FIN now |
| Collected HR account and relevant aggregation history | What ISC received and which collection to investigate |
| Governing profile, selected input and transform | Which value the identity calculation uses |
| Mapping preview and current identity attribute | What the mapping calculates versus what the identity currently records |
| Applicable processing and error information | Whether the relevant work was applied or a problem was reported |

A preview evaluates the mapping with selected data. It does not establish that all affected identities have been processed, and it cannot prove an external account update succeeded.

If HR has FIN but the collected account still has OPS, first investigate why the expected input has not arrived. Rewriting a correct FIN-to-Finance conversion does not repair an old input.

If ISC collected FIN but the mapping actually selects a directory department containing Operations, processing again can reproduce Operations. The process is using the wrong agreed input; repetition is not a correction.

If the identity is Finance but the current finance application account is Operations, the investigation has crossed into the write requirement and its execution. Establish whether sync should apply, then inspect the attempted operation and result. If the actual account is already Finance but ISC's collected account still says Operations, investigate the observation and refresh instead.

Choose the authorized correction at the boundary the evidence identifies. A shared mapping can affect an entire profile population, so assess its wider effect before changing it.

This also connects the front end and back end. The **front end** is the interface you see: account details, identity attributes, entitlement details, and activity. The **back-end work** obtains the data, evaluates mappings, connects references, and carries out configured operations.

Each screen answers a different question because a different record or process supplies its information. Available history helps investigate that work; it is not a promise of a single screen exposing every field evaluation.

## Test what a changed observation really means

**The values differ, but the calculation agrees.**

The collected HR account has FIN. The configured mapping converts FIN to Finance, and the identity shows Finance. The collected finance account shows Operations.

Has the supplied evidence established a synchronization failure?

The HR input and identity output agree with the stated calculation. The finance difference alone does not establish a failed write. Check the required finance-field behavior, eligible mappings and sync selection, account association, relevant activity, and current application record. The collected account could be old, or a required update could be unattempted or rejected. The supplied values do not choose between those explanations.

**The name matches, but the ID does not.**

The account returns `FIN_INV_READ` in `groups`. The entitlement ID is `g-inv-read`; its name is `FIN_INV_READ`. The agreed integration requires membership references to use group IDs.

Would matching names establish a correct reference?

No. Compare the raw account membership with the designated ID in the correct source/type context. Inspect the connector mapping and both schemas to find why a name was supplied. Assess existing references before an authorized correction; changing a label or an established ID to make the screen agree conceals the design problem.

**HR supplies no code.**

The collected HR account has an empty `orgCode`. The mapping description lists only FIN and OPS conversions.

Can you predict Finance, Operations, or a particular error?

Not from that description. Inspect the actual transform, its missing-input behavior, the selected input, and appropriate preview or processing evidence. Also establish why HR has no code. A documented conversion list is not a complete execution trace, and a convenient default is not an approved department.

**The value looks false.**

The connector supplies `"enabled": "false"`. A proposed comparison expects Boolean false; no conversion has been checked.

Is the comparison's result established?

No. The supplied value is text. Inspect the schema, connector output, collected value, conversion, and the consuming feature's supported types. The visible word alone does not prove the comparison receives a Boolean or establish how that feature evaluates it.

**The description changes, but the memberships do not.**

An administrator changes the invoice-reading entitlement's ISC description to "Read invoices; does not permit invoice export." No membership operation is requested.

Does that remove `g-report-export` or update the external group's description?

Neither follows. The specified edit maintains descriptive information in ISC. It is not sent to the source and is not a membership removal. If export access must be removed, investigate the correct membership and supported removal path separately.

## Follow the same reasoning with a different field

On a training-platform source, a collected account contains `costCentre = "0042"`. Its identity contains `costCenter = "0042"`, mapped from HR, while a training entitlement has `businessArea = Learning`. The supplied design does not synchronize the training account's cost centre.

HR changes the approved code to `"0043"`. Assume ISC collects it and successfully applies the direct identity mapping. No account-write operation occurs.

What should change, and what does the Learning value tell you?

The identity's cost center becomes the text `"0043"` because its selected HR input changed and the mapping was applied. The training account remains `"0042"` under the stated no-write conditions. Learning describes the entitlement; it neither supplies the person's cost center nor requires a particular account update. Keep the codes as text so their leading zeros remain meaningful.

Now choose a visible field other than department. Explain which record holds it, its source and type, how its value became available, and which configuration uses it.

Change one condition: remove its input, select another source, alter a description, or reject a required write. Explain the result you can justify and the evidence you would still need. Naming the field is the beginning; tracing what produces and consumes its value is how you decide what to do with it.
