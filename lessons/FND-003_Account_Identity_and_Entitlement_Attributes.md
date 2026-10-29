# Account, identity, and entitlement attributes: which value are you looking at?

“The department is wrong.”

Let's look at where that department appears before we change anything.

An employee's finance account might say Operations, while their record in SailPoint Identity Security Cloud, or **ISC**, says Finance. Both fields describe a department. They belong to different records, though, so we need to understand how each received its value.

An **attribute** is a named field on a record. Its **value** is the information in that field. In `department = Finance`, department is the attribute name and Finance is its value.

The next question is: whose department does this field describe?

## Start with the record that holds the value

An **account** is a record in a particular system. A finance application has accounts for its users. A human resources system, usually called **HR**, has worker records that ISC can collect as accounts.

An **identity** is ISC's record representing the person. It brings together information about that person and links to their accounts and represented access across systems.

For now, suppose the employee's identity already exists and the HR and finance accounts are correctly linked to it. We inspect these three values in ISC:

| Record we open | Attribute | Value |
|---|---|---|
| Collected HR worker account | `orgCode` | `FIN` |
| Employee's identity | `department` | `Finance` |
| Collected finance account | `department` | `Operations` |

Read the first row as “the HR account contains the organization code FIN.” The second says “ISC records Finance as this person's department.” The third says “the finance account information collected into ISC contains Operations.”

Those statements can all be true at the same time.

HR might store a short code that ISC converts into a readable name. Finance might need an update, or ISC might still hold information from an earlier collection. We cannot choose the explanation just from the three values.

We can already describe the issue more clearly: “The identity department is Finance, but the collected finance account department is Operations.”

That tells us which records to compare. Next, let's see how the information gets onto them.

## Follow one account's information into ISC

ISC uses a **source** to represent a particular system's account data and the configuration for working with it. A **connector** provides the integration used to read that data and perform supported, configured changes.

In this example, the finance source is called **Invoice-Service**. The finance application holds the actual accounts. Invoice-Service represents their data inside ISC.

**Account aggregation** is the collection of account information into ISC. After that collection, ISC can show what it obtained about an account. Opening the account screen does not, by itself, read the application again.

Here is a compact way to write the information collected for one finance account:

```json
{
  "accountId": "finance-user",
  "department": "Operations",
  "enabled": true,
  "groups": ["g-inv-read", "g-report-export"]
}
```

This uses **JSON**, short for JavaScript Object Notation, a format for writing named values. It illustrates our account; it is not an exact connector response or a command to run.

The curly braces enclose one record. In each line, the name before the colon identifies the field and the value follows it.

The account identifier is finance-user. Its department is Operations. The `enabled` field holds `true`, which our hypothetical finance application uses to mean the account is enabled.

A **Boolean** is a value that can be true or false. Here, `true` is a Boolean.

The square brackets on the last line enclose a list. The account has two group values: g-inv-read and g-report-export. They are separate entries, rather than one long group name. We'll follow what those entries refer to shortly.

These fields are **account attributes** because they describe this particular account.

ISC associates a source account with a person's identity through **account correlation**. That association tells ISC which person the account belongs to. It does not copy every account attribute onto the identity.

A field such as employee number may provide information for a correlation comparison. ISC still needs matching configuration specifying how to use it. Merely collecting employee numbers does not define the comparison.

Our employee's association is already correct. If the person has a second finance account for administrative work, that account has its own identifier, department, status and group values. Before fixing “their finance department,” we would need to establish which account has the disputed value.

## Understand what the account schema contributes

How does ISC know which returned fields identify the account and which can hold several values?

The source's **account schema** describes the account fields and their representation. Think of the schema as the description of how this account data is organized.

It designates a field for **Account ID**, used to identify and reference the account, and a field for **Account Name**, used to name it. In our example, `accountId` supplies the Account ID.

Those are roles assigned to fields in the schema. They do not mean that an application's account identifier must equal an employee number.

The schema also describes field types and whether a field is **multi-valued**, meaning it can hold more than one value. Our groups field needs that setting because the account can hold both listed memberships.

There are still three things that must agree: what the application supplies, what the connector obtains and how the schema represents it.

For example, the application screen might label a field “Worker Department,” while the integration returns it under the name `orgCode`. Configuration that selects this information needs the actual attribute name supplied through the integration. The screen label alone will not tell us that name.

Adding a department field to the ISC schema does not create a department field in finance. It also does not give the integration permission to read one. If finance does not supply the information through the configured interface, a schema entry cannot invent it.

For a department problem, inspect the department field and its use. Changing established Account ID or Account Name selections is a much broader change. After accounts have been aggregated, such changes can break references or produce duplicate accounts and identities. They are not a repair for an incorrect department value.

## Decide where the person's department should come from

We now know what an account attribute describes. An **identity attribute** describes the person at the ISC identity level.

That distinction gives us a question to answer: if several accounts contain department information, which one should ISC use for the person's department?

ISC needs an agreed source for that information and configuration that selects it.

An **identity profile** supplies configuration for a population of identities. Population here means the group of people managed using those profile settings. The configuration includes how their identity attributes obtain values.

The profile's **authoritative source** supplies the account records used to establish those person-level identities.

Suppose the Employees profile uses an HR source called **HR-Workers** as authoritative. HR establishes the employee population.

That tells us where the employee population comes from. It does not answer where every individual identity attribute gets its value.

A **mapping** specifies how a particular identity attribute is populated. The department mapping might select the HR account's orgCode, while the email mapping selects `mail` from an already-associated directory account.

A directory is a system that stores account information, often including work email. In this example, the selected directory account holds the approved email address.

So the identity can have department from HR and email from the directory. The fields appear together on the identity, but their inputs come from different accounts.

If several accounts could supply a field, we must also establish which account the mapping's logic selects. “It comes from the directory” is incomplete when the person has more than one directory account.

## Follow FIN until it becomes Finance

Our agreed department mapping selects HR orgCode. HR supplies FIN, but we want the identity to show Finance.

A **transform** is configured logic that takes input and calculates an output. For this department mapping, the intended logic converts FIN to Finance and OPS to Operations.

Let's follow the successful FIN calculation one step at a time.

First, HR holds FIN on the worker record. Account aggregation collects it into ISC's representation of the HR account.

At this point, ISC has received FIN. Receiving the code and converting it are different jobs.

During applicable **identity processing**, ISC evaluates identity information using its configuration. For department, the mapping selects the collected HR orgCode. The transform receives FIN, converts it to Finance and supplies that output for the identity's department.

```text
HR worker record
orgCode = FIN
        |
        | account aggregation reads
        v
ISC: collected HR account
orgCode = FIN
        |
        | department mapping selects orgCode
        | transform converts FIN to Finance
        v
ISC: employee identity
department = Finance

The calculation writes the identity value.
It does not rewrite the HR input.

This is a value path, not a timing chart.
```

Notice why the two records can correctly show different text. FIN is the input stored on the HR account. Finance is the calculated output stored on the identity. The calculation did not replace the input.

Aggregation changes can lead to identity processing. Configuration changes can also require an administrator to apply the appropriate processing operation.

Saving a mapping defines the instructions. A **preview** evaluates a mapping using selected data so you can inspect its output. Applying the mapping to the relevant identities is another action. A successful preview is useful evidence about the calculation; it does not establish that every affected identity now holds that result.

Our FIN and OPS conversions also leave a question unanswered: what happens if HR supplies no code or an unexpected one?

The actual transform needs behavior for those inputs. A two-value description does not tell us whether the configured transform returns a default, produces `null` (no value) or reports a problem. We must inspect the actual logic before predicting that result.

## Give a new identity field both a definition and an input

ISC provides default identity attributes and allows custom ones.

Suppose you add a custom field for an approved employment category. The field's definition gives ISC a place to hold that information. A relevant profile still needs a mapping that supplies its value.

Adding a custom identity attribute makes that definition available across profiles. It does not automatically populate the field for everyone, and each profile does not have to use it.

This explains a common situation: the field appears in the configuration, but the employee's identity has no category. The field may exist while its mapping or input is missing.

Deleting the definition is broader than clearing one employee's value. A custom attribute deletion affects its availability across identity profiles and can affect configuration that depends on it. Before an authorized deletion, check those dependencies. Default attributes should not be deleted; seek SailPoint Support guidance if a change to one is being considered.

Defining the field, supplying its value and using it in a decision are separate pieces of work.

## Work out whether the finance account should change

Return to our opening values: HR has FIN, the identity has Finance and the collected finance account has Operations.

The HR-to-identity calculation agrees with our intended mapping. It has not yet explained whether the finance application should receive Finance.

That needs a separate requirement and a delivery mechanism.

**Provisioning** carries out supported account or access changes through a configured delivery method. **Attribute synchronization**, usually called **attribute sync**, provisions selected account fields from corresponding identity attributes.

For department, the direction is from the identity to the application account.

Attribute sync requires an existing account correctly correlated to the identity; it does not create a missing account. If several accounts are correlated on that source, the configured synchronization applies to all of them.

The account field must be included in the source's **Create Account definition** and mapped there directly from an identity attribute. That definition supplies account-creation values and the mappings used to determine sync eligibility. The field must also be selected for sync, and the person's profile must map the corresponding identity attribute.

Putting department in a Create Account definition therefore does not, on its own, enable ongoing department synchronization.

The earlier identity-profile mapping answered “Where does the person's department come from?” This account mapping answers “Which identity value should the finance account receive?” They describe different directions of work.

For our successful update, suppose those conditions are met, finance supports the change and the integration is allowed to perform it. A relevant change triggers sync, the department update is provisioned and finance accepts it. The existing application account now says Finance.

Automatic sync responds to applicable detected changes. Applying a new selection to existing accounts requires the appropriate synchronization operation; selecting a field alone does not prove that all accounts have been updated to match.

We still check the operation's activity and the current finance account. A later collection can refresh what ISC shows about that account. There is no promise here that every write immediately runs a full aggregation or updates every screen together.

If the current application account is Finance but ISC's collected account still says Operations, the write may already have succeeded. The remaining issue is the observation in ISC.

Changing department is also different from changing a group membership. Whether an application uses department to influence permissions depends on its own behavior and the configured access decisions. A department update alone does not tell us that invoice-reading or export access changed.

## Separate the account's memberships from the group's details

Let's return to the account's groups list:

`["g-inv-read", "g-report-export"]`

In our hypothetical finance application, a **group** brings together accounts and gives its members specified access. Membership in g-inv-read allows invoice reading. Membership in g-report-export allows report export.

A **permission** allows an action. Here, reading invoices and exporting reports are separate permissions supplied through separate group memberships.

ISC represents access items such as source groups and permissions as **entitlements**. The account's list tells us which represented memberships it holds.

But the list only contains identifiers. Where do the readable group name and description come from?

Our finance integration also supplies a record describing the invoice-reading group:

| Attribute on the group record | Value |
|---|---|
| `id` | `g-inv-read` |
| `name` | `FIN_INV_READ` |
| `description` | `Allows invoice reading` |
| `businessArea` | `Finance` |

These are **entitlement attributes**. They describe the access item itself.

The group's description tells us what the group is intended to allow. The account's membership list tells us whether that account holds the group. The identity's department tells us which department ISC records for the person.

Each answers a different question.

In particular, businessArea = Finance on the group does not populate the person's identity department. It labels the access item's business area. Using it in a person-level calculation would require separately defined logic.

We also need accurate knowledge of the actual application's permission behavior. A group called Invoice Read could be incorrectly described or configured. Its friendly name is useful information, but the words alone do not prove everything its members can do.

## Connect the membership value to the right entitlement

An **entitlement type** identifies a kind of access item within a source. In Invoice-Service, our type is groups.

The type's schema describes the group's fields. It designates `id` as **Entitlement ID**, the identifying value used in the reference, and `name` as **Entitlement Name**, the naming value.

**Entitlement aggregation** collects information about access items. Account aggregation collects account information, including memberships. For our example, one provides the account's group identifiers; the other provides details of those groups.

To connect these parts, the account schema marks groups as an **Entitlement** field and links its **Type** setting to the groups entitlement type. The account field name must agree with the entitlement type's name, and each membership value must match the designated Entitlement ID.

The source and type are part of that comparison. A matching string in an unrelated source is not enough.

```text
Source: Invoice-Service
Entitlement type: groups

ISC: collected finance account
groups includes g-inv-read
        |
        | reference matches Entitlement ID
        | in this source and type
        v
ISC: entitlement record
id = g-inv-read
name = FIN_INV_READ
description = Allows invoice reading
businessArea = Finance

This link describes an existing membership.
It does not grant access or send a change.
```

The groups field still belongs to the account. Marking it Entitlement tells ISC how to use its references; it does not turn those references into descriptions.

Now suppose the account returns FIN_INV_READ in its groups list. That matches the group's name, but our designated ID is g-inv-read. The supplied integration design expects IDs. A matching readable name does not satisfy that design.

We would inspect what the application returned, how the connector mapped it and how the two schemas identify the relationship.

Changing a label to make the screen look consistent does not repair a mismatched reference. Changing established Entitlement ID or Name selections can also cause duplicate entitlements after aggregation. Assess existing references before an authorized correction.

The available fields and entitlement types depend on the connector and source. The description and businessArea fields are supported assumptions in our example. Not every source supports a separate entitlement aggregation, and an account membership can be collected before all descriptive information is available.

## Improve the description without confusing it with a permission change

An administrator can maintain an entitlement's display name and description in ISC. A **display name** is a readable label; it does not replace the identifying value used by our membership reference.

Suppose we improve the invoice-reading description to “Read invoices; does not permit invoice export.”

That wording helps a person understand this particular access item. It does not remove g-report-export from an account. The separate export membership still needs its own removal operation if it should no longer be held.

Display-name and description edits made in ISC are not sent to the external source. Later entitlement aggregation protects manually maintained values from being overwritten.

So if ISC's description differs from the application's, first establish where each value came from. The difference may reflect an intentional ISC edit.

The description must still be accurate. Writing that a permission cannot export does not make the application enforce that restriction.

## Read the value's type as well as its text

So far, we have followed where values belong and how they connect. We also need to understand what kind of value each process receives.

A **string** is text. The string `"0042"` can be an identifier whose leading zeros matter. The number `42` does not preserve those zeros as part of its value. Converting a code into a number merely because it contains digits can change what a later comparison or update uses.

The same distinction applies to `false` and `"false"`.

The first is a Boolean. The second is text containing the word false. A screen may display both as false, so the visible word alone does not tell us which kind of value a comparison receives.

Now look at several ways an input can contain little or no information:

| Input we receive | What is present |
|---|---|
| No `department` field | The record supplies no such field |
| `"department": null` | The field is present without a value |
| `"department": ""` | The field contains empty text |
| `"groups": []` | The field contains a list with no entries |
| `"enabled": false` | The field contains the Boolean value false |

False is an actual value. Treating it as “missing” could make logic choose an inappropriate default.

An empty list has no entries. An absent list supplies no list at all. We still need the connector's collection behavior and the consuming feature's rules before concluding what either means for current application memberships.

A connector or feature can also convert these representations. Inspect the received data, schema, collected value and any conversion when investigating a comparison. Support for lists on an account field does not mean every identity mapping or decision feature accepts that list unchanged.

The same care applies to dates. A value written as `2026-10-20` needs an agreed format and meaning: here we intend year-month-day. If a calculation compares moments that include a time, it also needs a time zone. Two readable dates on screens do not establish that the underlying calculations interpret them identically.

## Follow a missing value through the same flow

Suppose HR supplies no organization code.

Our FIN-to-Finance conversion has no FIN input to work with. Before choosing an output, inspect the transform's handling of missing input.

A **fallback** is an alternative value used when the preferred input cannot supply a result. That value needs an approved meaning. Choosing Finance just to fill the field could incorrectly describe the employee and affect decisions that use department.

A null output also deserves attention when the field is synchronized. If the profile mapping sets a synchronized identity attribute to null, attribute sync propagates null toward the account field. We cannot assume it leaves the previous account value intact. The application may reject a missing value, so inspect the attempted operation and its result.

Follow the cause as well as the calculation. If HR is supposed to supply a code, we need to establish why it did not. A convenient fallback can otherwise hide a source-data problem.

## Investigate the first place the value departs from the agreed logic

Suppose the identity now shows Operations, although our agreed department logic uses HR orgCode and converts FIN to Finance.

Start with the intended employee's current HR record. Does it actually contain FIN?

Then inspect the collected HR account and the relevant account aggregation information. This establishes what input ISC received and which collection to investigate.

If HR currently has FIN but ISC still holds OPS, the expected input has not arrived in the collected record. Changing a correct FIN-to-Finance transform would not repair that older input.

Next, inspect the profile governing this identity and its department mapping. Does it select this HR account's orgCode?

If the mapping instead selects Operations from a directory account, processing again can reproduce Operations. Repeating the work does not correct its selected input.

If the collected input and selection are correct, inspect the transform, its preview, the current identity value and applicable processing or error information. A preview that calculates Finance helps check the mapping. It does not establish that the affected identity was subsequently processed.

Finally, if the identity is already Finance but the actual finance account remains Operations, follow the separate write. Establish whether synchronization is required and configured, then inspect what was attempted and how the application responded.

If the actual finance account is Finance while ISC's collected account says Operations, investigate the collection or refresh of that observation.

These findings lead to different corrections because the values are produced at different points. Use the evidence to select the authorized change. A shared profile mapping can affect many identities, so consider that population before changing it.

The **front end** is the interface where we inspect account details, identity attributes, entitlement details and activity.

The **back-end work** reads account data, evaluates mappings, connects membership references and carries out configured changes. The screens present results of those different jobs.

That is why two screens can show different values without telling us which job failed. Available history helps investigate the relevant work, but we should not expect one screen to reveal every individual field evaluation.

## Check what each observation allows you to conclude

**HR has FIN, the identity has Finance and the collected finance account has Operations. Has synchronization failed?**

Not enough has been established yet.

The HR input and identity output agree with our mapping. For finance, we still need its required behavior, sync configuration, correct account association, relevant activity and current application value.

The collected account might be old. An update might not have been attempted, or finance might have rejected it. The three values alone do not choose between those possibilities.

**The account's groups list contains FIN_INV_READ. The entitlement's ID is g-inv-read and its name is FIN_INV_READ. Is that a correct reference?**

Under our stated design, it is not. Memberships must use the designated IDs within this source and type.

Compare the returned membership, connector mapping and both schemas. A matching name does not replace the ID. Assess the effect on existing references before changing an identifier.

**HR supplies an empty orgCode. The mapping description lists only FIN and OPS. What will the identity receive?**

That description does not tell us.

Inspect the actual selected input, transform and missing-input handling, together with appropriate preview or processing evidence. Establish why HR has no code too. We cannot infer Finance, Operations or a particular error from an incomplete description.

**The connector supplies `"enabled": "false"`. A comparison expects Boolean false. Will it match?**

We have text in the supplied input, while the proposed comparison expects a Boolean.

Check the schema, collected representation, conversion and consuming feature. Until we know what reaches that comparison and how it handles types, the displayed word false does not establish its result.

**We edit the invoice-reading entitlement's ISC description. Does that remove report-export membership or update the application's description?**

Neither follows from this edit.

The change maintains descriptive information in ISC. It is not sent to the external source and does not remove a membership. A required export-access removal needs the correct membership and a supported removal path.

## Try the same reasoning with another field

A training-platform account contains `costCentre = "0042"`. The person's identity has `costCenter = "0042"`, mapped from HR. A training entitlement has `businessArea = Learning`.

The spelling differs between the account and identity fields. Both happen to contain the same text. The supplied design does not synchronize the training account's cost centre.

HR changes the approved code to `"0043"`. ISC collects it and successfully applies the direct identity mapping. No operation writes to the training account.

What changes?

The identity cost center becomes the text 0043 because its selected HR input changed and its mapping was applied.

The training account stays at 0042 under the stated no-write conditions. Matching earlier values did not establish an ongoing synchronization relationship.

Learning continues to describe the entitlement's business area. It does not supply the person's cost center or cause a training-account update. Keeping the codes as text preserves their leading zeros.

Now choose another field you might inspect at work. Explain which record holds it, what kind of value it contains, where its input comes from and what configuration uses it.

Then change one condition: remove the input, select another account, edit a description or have the application reject an update. Follow the effect through the records. Explain what you can establish and which evidence you would still need.

That is how a field name becomes something you can investigate: you can explain both the value in front of you and the work that placed it there.
