# The group exists. Why doesn't the account's access connect to it?

An account already belongs to Expense Approvers in an application. SailPoint Identity Security Cloud (ISC) has read information about the account and a separate record describing the group.

Yet the two don't connect as intended. The account's collected group value is `expense.approvers`, while the group record is identified by `G-206`.

The application owner knows these refer to the same group. ISC needs the configured references to agree.

Let's first follow the connection with the correct values. Then we can see exactly what the mismatch breaks.

## There are two records because they answer different questions

An **account** is a record used to access an external system. An ISC **identity** represents a person or another entity; that identity can have accounts on different systems.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration used to read that information and, where supported and configured, make changes.

Suppose the source Expenses-Production represents an expense application. The existing account expense-user belongs to Expense Approvers. In this example, that group allows expense review within the account's approval limits.

That is the meaning of this particular access. The name alone doesn't tell us the approval limits; the application determines them.

An **entitlement** represents an item of access, such as this group. A **membership** is the relationship between an account and the group it belongs to.

Now ask two separate questions:

- Which group does expense-user belong to?
- What is that group called, and what does it allow?

The account record can answer the first by carrying a group reference. A separate group record can supply the name, description and other details. Every member doesn't need a separate copy of the full group definition.

The group can also exist with no members. Its existence isn't dependent on this one account, so “the group exists” and “this account belongs to it” need separate evidence.

An **attribute** is a named piece of information on a record. A **schema** defines the attributes ISC represents and how selected attributes are used.

We therefore need to describe both records:

| Schema | What one record represents | Information it can contain |
|---|---|---|
| Account schema | One application account | Account key, group references and other account information |
| Entitlement schema | One access object of a supported category | Identifier, name, description and other supported object details |

The schemas describe the fields. Individual account and group records supply their values.

## Read the account reference before reading the group details

Assume the integration supports reading both accounts and group objects through the application's **API**, or application programming interface. An API lets software exchange requests and results.

Here are selected fields returned for the account:

```json
{
  "accountKey": "expense-user",
  "groups": ["G-206"]
}
```

This is **JSON**, a format for exchanging structured data. The braces enclose one object. Each property has a name on the left of the colon and a value on the right.

The accountKey value identifies this account. The groups value is an **array**, or list, shown inside square brackets. It contains one **string**, meaning text: `G-206`.

The field groups is the **membership attribute**: the account field carrying references to the groups it belongs to.

What does G-206 identify? The application and integration must agree on that. Their **integration contract** is the agreement about exchanged data and behaviour. In this example, G-206 is the identifying value for Expense Approvers.

Now look at selected fields returned for the group itself:

```json
{
  "groupKey": "G-206",
  "technicalName": "expense.approvers",
  "label": "Expense Approvers",
  "description": "Review expenses within the account's approval limits."
}
```

The groupKey value identifies the group. The label makes it recognizable to a reader. The description explains its purpose. TechnicalName is another name held by the application.

These fields have different jobs. The fact that technicalName sounds technical doesn't automatically make it the identifying field ISC should use.

These are hypothetical returned records. Their field names and selections illustrate one supported design; they aren't defaults for every expense connector.

## Choose which field identifies the group

An **entitlement type** describes a supported category of access object on a source. For this example, the category is groups. The entitlement schema describes the information represented for each group in that category.

The category's name on the external system is its **native object type**. The configured entitlement-type name must match that native name. We can't invent a more convenient category name and assume the connector will know what to read.

Within the group's schema, two selections matter here:

**Entitlement ID** selects the attribute whose value identifies the object. We select groupKey, so this group's identifying value is G-206.

**Entitlement Name** selects the attribute used for the object's naming/display value. We select label, so the chosen name is Expense Approvers.

Keep the selection separate from the value it selects:

| Item | Supplied selection or value | Its job |
|---|---|---|
| Entitlement type | groups | Selects the supported category of access object |
| Entitlement ID attribute | groupKey | Selects the field used to identify each group |
| Entitlement ID value | G-206 | Identifies this particular group |
| Entitlement Name attribute | label | Selects the field used for its name |
| Selected name value | Expense Approvers | Helps a reader recognize the group |
| Additional technical name | expense.approvers | Describes another name; it isn't the selected ID |

GroupKey is a field name. G-206 is a value inside that field. Selecting groupKey does not make the literal word groupKey every group's identifier.

This distinction matters whenever someone says, “Use the entitlement ID.” You need to know which field was designated and what value that field contains on the actual object.

## Connect the account field to the right kind of object

A **mapping** selects incoming information for a represented field and can include supported conversions. For the normal case, assume the mappings preserve G-206 on the account and groupKey = G-206 on the group.

The values agree. The schema also needs to say what kind of thing the account's value refers to.

In the account schema, marking groups as **Entitlement** identifies it as access information. Its **Type** relationship points to the groups entitlement type. This tells ISC that values in this account field refer to objects in that category.

For this account-attribute linking model, the field must be marked as an entitlement. Its name must be identical to the entitlement type's name. Each collected reference must match the value of the field selected as Entitlement ID on the corresponding collected object.

For this example, the complete agreement is:

- The account attribute is named groups and is marked Entitlement.
- Its Type relationship points to the supported groups entitlement type.
- The account carries G-206 as a membership value.
- The group's selected ID field, groupKey, also contains G-206.
- The account and group belong to the intended Expenses-Production source context.

Under these conditions, ISC automatically links the access information collected from the account attribute with the separately collected group details.

Follow the reference in this diagram:

```text
Account: expense-user
  groups contains G-206
          |
          | Same source and type: groups
          v
Group with ID G-206
  label: Expense Approvers
  description: approval purpose
```

The account's value points to the group identified by G-206. The linked group record supplies the recognizable name and description.

The arrow represents that data relationship. It doesn't mean ISC grants access while moving down the diagram, or that these are separate background jobs.

**Account aggregation** reads account records into ISC or refreshes their collected information, including represented memberships. **Entitlement aggregation** reads information about the access objects under their supported schemas.

Here, collection records access the account already has. **Provisioning** is the separate process that carries out supported account or access changes in the external system. Linking the collected information doesn't require granting the membership again.

## A list setting, an access setting and a type relationship have different jobs

Our selected account has one groups item. Another account can belong to several groups.

A **multi-valued attribute** holds a collection. **Cardinality** describes whether the field holds a single value or a collection. One item inside square brackets is still a collection; the number of items in this record doesn't change the field's purpose.

Marking a field multi-valued permits multiple values. Marking it Entitlement gives it access meaning. A list of two phone numbers can be multi-valued without representing access.

A supported access model can also have a single-valued entitlement attribute. Access meaning and collection structure are independent questions.

The Type label needs care too. A basic value type describes the kind of value, such as text or a **Boolean**, which means true or false. A named entitlement type in the schema editor expresses a relationship to another schema.

For groups, the actual references are text values such as G-206, and the relationship says those values identify objects of type groups. Selecting groups does not replace G-206 with the word groups.

The technical attribute model represents basic value type and schema association through separate properties. The screen's labels and an API's properties aren't necessarily identical ways of expressing the configuration.

Existing connectors have supported default schemas and mappings. Read those relationships before changing them. Another connector using a different field name doesn't establish that a production source needs its field renamed.

## Follow the two reads without confusing inventory and membership

The **entitlement catalog** is ISC's inventory of recorded access items.

An entitlement record can originate from a membership value discovered during account aggregation. A separate entitlement aggregation can then supply richer object details. That separate read can also collect a group that no account currently holds.

The reads answer different questions:

```text
Account read             Group-object read
     |                          |
     v                          v
Membership references    Names and descriptions
     |                          |
     +------------+-------------+
                  |
                  v
   Link by source, type and identifier
```

The two branches show information supplied by the reads. Their convergence shows why the schema relationship and matching identifiers matter. It doesn't prescribe which read must always run first, that both run together, or how ISC queues their work.

Suppose the catalog contains G-999. The inspected account has no supplied G-999 membership. We know an access object was collected; we don't yet have evidence that this account holds it.

Now suppose the account has G-206, but the recorded entitlement has a raw-looking name and no description. The membership reference exists. Its descriptive details may simply be incomplete.

Check whether the supported entitlement read included the group, whether the application supplied the description, and whether the mapping selected it. Missing description alone doesn't establish an invalid external group or a failed membership.

Inspect actual records and collection results. A mismatch doesn't have one universal screen appearance or duplicate-handling outcome.

A **direct-connect source** reads through a configured connector connection. Where supported, entitlement aggregation can be started manually or scheduled. A **flat-file source** imports supplied files; its entitlement-import mechanism is manual and doesn't support multiple entitlement types.

The connector's capability still matters. Adding a schema to an account-only connector doesn't give it an object-reading capability it lacks. A completed read of groups also doesn't establish that another entitlement type was included.

The operation's **scope** is what it was configured and allowed to read. Check that scope, its time and its result before deciding what the data proves.

## Now trace the wrong reference

Return to the opening mismatch. In this example, the application's account response contains the correct G-206.

A project-added mapping replaces that reference with the group's technicalName. The collected account therefore contains expense.approvers, while the group's selected ID remains G-206.

A person can recognize the two names. The intended identifier comparison still fails: expense.approvers and G-206 are different values.

Changing the displayed group label to expense.approvers doesn't repair the reference. The selected ID would still be G-206.

The supplied correction is to preserve G-206 in the account mapping, after the responsible owners approve the supported change. An appropriate later collection reads the corrected account value. In this example, verification then confirms that it connects to the existing detailed group.

That repairs ISC's collected representation. The target account, its identifier and its actual membership are unchanged. No new grant, removal or account recreation is part of this correction.

Saving the mapping alone doesn't establish that the collected account now contains G-206. Check the later read and the resulting relationship.

Changing the selected Entitlement ID to accommodate the faulty mapping would redesign identification instead. Changing Entitlement ID or Entitlement Name selections after aggregation can cause duplicate entitlements to be aggregated. Review existing references and supported handling before changing those selections.

For a new entitlement schema, the first attribute you create is initially marked as both Entitlement ID and Entitlement Name. Review those choices before collection. The order in which fields were entered isn't a reason for the first field to identify every object.

## The group's identifier isn't the person's identity

You may see `identityAttribute` and `displayAttribute` in a technical schema representation.

They contain the names of the attributes selected for identification and display. In this group schema, those selections correspond to groupKey and label.

The word identity inside identityAttribute concerns identifying the object described by the schema. Here, that object is a group. It doesn't mean the ISC identity of the person using expense-user.

There is another distinction: an **ISC object ID** identifies a stored record inside ISC. The entitlement record and its schema have their own record contexts. G-206, the source group's selected identifier, isn't automatically either record's ISC ID.

When someone asks for an ID, establish which object and system they mean. Substituting a schema ID for a group identifier doesn't refer to the same thing.

**Account correlation** matches an account to its appropriate ISC identity through configured comparisons. That relationship answers who the account belongs to.

Membership linking answers which access object an account reference identifies. Correctly associating expense-user with a person won't turn expense.approvers into G-206. The ownership link and the group link need their own correct information.

## Keep different access categories recognizable

Suppose a supported extension of this direct-connect integration also exposes the native type appRoles.

An **application role** here is an access object defined in the expense application. It differs from an ISC role used to organize access for business assignment.

In this extension, groups contains G-206 for Expense Approvers, while appRoles contains R-51 for Audit Exporter. The account's groups field points to the groups type; appRoles points to appRoles. Each type has its supported schema and identifying fields.

Both fields describe access, but that doesn't make them the same category. The account schema doesn't allow multiple attributes to be marked with the same entitlement type.

The identifier text alone isn't enough either. A group identified by 51 and an application role identified by 51 aren't established as one object. Keep the source, type and identifying value together.

The source matters across environments too. G-206 in Expenses-Test isn't established as the same governed object as G-206 in Expenses-Production.

If the target exposes its categories differently, inspect that supported model. Inventing another native type or silently merging fields can hide a design problem instead of resolving it.

## Some access is reached through another entitlement

Consider a different supported design: a group grants an application role to its members.

The group schema can contain an attribute referring to objects of the application-role type. Its Type relationship points to that other entitlement type; its single-value or collection setting follows the actual supported relationship.

This describes a connection from one entitlement to another. It doesn't establish that an account directly received an appRoles membership.

To understand the access, follow both relationships: the account belongs to the group, and the group grants the role. A direct role assignment would be a different path.

A **hierarchy** describes parent/child relationships between access objects. The connector and schema determine which relationships can be represented. A friendly group name doesn't encode the hierarchy, and importing names doesn't discover every inherited access right.

A **permission** is an allowed operation on a resource, such as reading or writing it. Supported sources can expose permissions held directly by accounts and permissions granted through entitlements.

The type name permission is specially handled for direct permissions. Don't create an ordinary entitlement type named permission, in any capitalization, as a substitute for the supported permission model.

**Effective access** means what an account can actually do after relevant grants and restrictions are considered. A membership list contributes evidence, but it doesn't establish every indirect path or restriction by itself.

For schema work, identify which categories and relationships the connector exposes. Keep direct memberships, links between entitlements and permissions distinguishable so you can explain how the access is obtained.

## Use each screen for the question it can answer

The **frontend** is the user interface, or UI: the part of ISC you interact with. It presents configuration and collected records on different pages. The **backend** is the software handling the reads, processing and requests behind those screens.

Account Schema shows field definitions and their settings. Entitlement Types and Schemas shows categories, their attributes and selected ID/Name fields.

Those views describe the configuration. They don't prove that the corresponding account or group records have been collected.

Individual account details show represented values for that account. The Entitlements view shows recorded access objects and their details.

For the opening mismatch, compare the original account response, the mapping, the actual collected groups elements, the Type relationship and the group's groupKey value. Keep the source and account consistent, and include read scope, collection time and errors.

An **audit event** records an activity or configuration change. A schema-change event establishes that the definition changed. It doesn't establish that a later read collected the expected values or that linking now works.

If an account references a group absent from the entitlement read, inspect both sides. Did the object fall outside the read's scope? Is the account reference stale? Did a mapping change the value? Compare the actual application records and operation evidence to choose the explanation.

For a missing description, follow the information similarly: did the application supply it, did the mapping select it, and did the applicable read collect it? A schema cannot invent details that were never supplied.

## A clearer description changes what people understand

**Metadata** is descriptive or governance information about an access item. Editing an entitlement record's Display Name or Description in ISC changes that information. Those edits aren't sent to the external source.

That differs from selecting a different schema attribute as Entitlement Name or Entitlement ID. One edits text on a record; the other changes which field supplies naming or identification across the type.

Manual name and description updates can be preserved during later aggregation. If ISC keeps older manual wording while the application supplies a new description, inspect the manual-update state as well as the mapping and read results.

The unchanged wording alone doesn't prove a failed read. An unchanged external description doesn't prove a failed write either when the action was only an ISC metadata edit.

Readable descriptions help with real decisions. An **access request** asks for access through a configured request process. A **certification** is an access review in which a responsible person evaluates recorded access.

Someone requesting or reviewing G-206 needs to understand what Expense Approvers permits and where its approval limits apply. A name, useful description and populated entitlement attributes give them more than an unexplained code.

An **entitlement owner** is the responsible party recorded for the item. That owner can participate in request or review decisions when configured to do so. Being responsible for the entitlement doesn't mean the owner personally holds it.

An **access profile** bundles entitlements from one source. An ISC **role** can contain access profiles and direct entitlements to organize access around a responsibility. Those definitions can refer to entitlement records, so an identifier redesign can affect more than the text displayed on an account.

Catalog presence also doesn't make an entitlement requestable to everyone. Its request configuration and applicable access policies still matter.

## Removing a schema doesn't remove the access

Deleting an entitlement type removes its type/schema configuration. It doesn't delete the associated entitlement records or the application's memberships. Entitlements of that type won't be aggregated or updated until another type is created for them.

The records have different jobs. The schema describes the category. The entitlement record describes the access item. The membership connects an account to that item. Deleting the schema is not an external command to remove every member.

Account aggregation also doesn't delete an entitlement merely because no accounts currently hold it. The access object can still exist in the application with zero members.

If the requirement is to revoke access, identify the supported external change and verify its result for the intended account. A schema deletion, a catalog observation or a membership value missing from a read is not proof that a revocation operation succeeded.

## Try changing one fact

### 1. The label matches, but the identifier doesn't

An account contains Expense Approvers. The detailed group has groupKey G-206 and label Expense Approvers. GroupKey remains the selected Entitlement ID. Does the matching label establish the intended link?

**Worked reasoning:** No. Compare the account's actual reference with the value selected as the group's ID under the supported relationship. The label's readability doesn't replace that match. Trace the input and mapping before considering any redesign of the identifier.

### 2. The field holds two phone numbers

BackupPhones contains two values. Someone proposes marking it Entitlement because it is a list. Does that establish access meaning?

**Worked reasoning:** No. Multi-valued describes the collection. Entitlement designation describes access meaning under a supported model. Two phone numbers don't become access rights because they share a list.

### 3. The catalog contains a group

An entitlement read collects G-999, but no supplied account record contains that value. Can you report that the expense account holds it?

**Worked reasoning:** No. Inventory is evidence about the object. Inspect the account's access values for membership evidence. If reporting a person's access, also establish the account's identity association. Investigate relevant indirect paths separately when the question concerns effective access.

### 4. Membership exists but details are sparse

The account has G-206. Its entitlement record has a raw-looking name and no description. Only account aggregation is confirmed. Is the group invalid?

**Worked reasoning:** That conclusion doesn't follow. Account aggregation can originate entitlement records with limited details. Check the supported object read, its scope, mappings and supplied application data. Missing description alone doesn't invalidate the group or its membership.

### 5. Two types use the same short code

A supported source represents group 51 and application role 51 under separate types. Should they be merged?

**Worked reasoning:** No. Follow the source, type and identifying value together. Equal text across different categories doesn't establish one access object.

### 6. A description changes only in ISC

An administrator edits Description in ISC. The external description stays unchanged, and a later read preserves the manual wording. Is this a provisioning failure?

**Worked reasoning:** No provisioning operation was supplied. The record edit updates ISC metadata and isn't sent to the source. Inspect manual-update preservation, mapping and collection before diagnosing a failed read or write.

### 7. An entitlement type is deleted

The team deletes a type and says everyone's access is removed. What has the action established?

**Worked reasoning:** It removed the type/schema configuration and interrupted that type's collection and updates until another type is created. It didn't delete the associated entitlements or target memberships. Revocation needs a supported operation and evidence of its external result.

## Review a different application's design

An application returns teams = ["T-8"] on accounts. A separate team export contains teamCode T-8, displayLabel Regional Reviewers and a description. Its supported native type is teams.

The proposal maps account memberships to Regional Reviewers, selects teamCode as Entitlement ID, assumes every imported team belongs to every account, and points both teams and emergencyTeams at the same entitlement type.

What would you change, and what would you investigate?

**Worked reasoning:** Preserve T-8 in the account's teams attribute. Mark that field as access information, connect it to the supported teams type, and match its value to the selected teamCode value. Use the display field to explain the item without replacing its identifier.

The team export establishes inventory information. Read the relevant account's values before asserting membership.

The duplicate account-attribute/type association conflicts with the documented constraint. Establish what emergencyTeams means and how the actual connector represents it. Don't invent a second native category or silently merge fields to bypass the problem.

Check scope, data quality, the intended source, identity association where needed and representative linking results. If identifiers are already in use, establish supported handling and affected references before changing their design. Any required access changes also need their own operations and authority.

When you explain the relationship, follow one reference all the way through: which account field carries it, which source and access category it belongs to, and which selected object value it matches. Then explain what the linked record adds. That is how an account's access value becomes understandable access information.
