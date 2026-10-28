# The group exists. Why doesn't the account's access connect to it?

ISC has collected an account's group membership and a separate record describing that group. The group record uses `G-206` as its identifier. The account's collected membership contains `expense.approvers`.

The application owner recognizes both as referring to Expense Approvers. Why doesn't ISC connect them as intended?

The connection depends on what the configured fields identify, rather than on a person's ability to recognize two names. To see where it breaks, first follow the relationship when the values agree.

## An account holds access; a group record describes it

An **account** is a record in an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity. Accounts can be associated with that identity.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides supported integration behaviour.

Assume our source, `Expenses-Production`, represents an expense application. The account `expense-user` already belongs to its Expense Approvers group. In this hypothetical application design, that membership allows expense review within the account's approval limits.

An **entitlement** represents an access right. A **membership** is the relationship between an account and an access object such as this group.

The account's membership tells us which group it belongs to. The group record tells us what that group is.

That group can have many members, one member or no members. Its existence doesn't depend on this particular account.

An **attribute** is a named piece of information on a record. A **schema** defines represented attributes and their designated uses. We need definitions for both kinds of record:

| Schema | Record it describes | Information it can represent |
|---|---|---|
| Account schema | One application account | Account key and membership references, alongside other account attributes |
| Entitlement schema | One access object of a supported type | Object identifier, name, description and other supported details |

The account needn't repeat the group's full description for every member. It can carry an identifying reference, while the entitlement record supplies the details.

This is a data relationship we need to preserve through collection.

## Follow the account reference and the group identifier

Assume the integration supports reading both accounts and group objects through the application's **API**, or application programming interface, a supported way for software to exchange requests and results.

Here is a selected account response in **JSON**, JavaScript Object Notation. Curly braces enclose an object with named properties. Square brackets enclose an array, a collection of values.

```json
{
  "accountKey": "expense-user",
  "groups": ["G-206"]
}
```

Groups contains one text value, G-206. In the supplied **integration contract**, the agreement about exchanged data and behaviour, that value identifies a group.

The **membership attribute** is the account field carrying these access references. Here it is named groups.

Now inspect the selected response describing the group:

```json
{
  "groupKey": "G-206",
  "technicalName": "expense.approvers",
  "label": "Expense Approvers",
  "description": "Review expenses within the account's approval limits."
}
```

An **entitlement type** identifies a supported category of access object on the source. Its entitlement schema defines the details represented for objects in that category.

Here the application's supported category is groups. Its **native object type** is that external category's name, rather than a friendly name invented for the ISC screen. The configured entitlement-type name must match that native object-type name.

The schema selects groupKey as **Entitlement ID**, the attribute supplying the object's identifying value. It selects label as **Entitlement Name**, the attribute supplying its naming/display value.

| Item | Supplied selection or value | What it tells us |
|---|---|---|
| Entitlement type | groups | Which supported category the object belongs to |
| Entitlement ID attribute | groupKey | Which field supplies the identifier |
| Entitlement ID value | G-206 | Which particular group this is |
| Entitlement Name attribute | label | Which field supplies the selected name |
| Selected name value | Expense Approvers | A recognizable name for that group |
| Additional technical name | expense.approvers | Another group attribute, not the selected ID |

GroupKey is a field name. G-206 is a value in that field. Those are different parts of the design.

TechnicalName sounds like it might be the identifier, but its spelling doesn't decide its role. In this design it is additional descriptive information.

All these records, field choices and outcomes are supplied examples. They aren't a real tenant observation or the default configuration of an actual expense connector.

## What makes the two records connect?

A **mapping** selects or converts incoming data into represented attributes. For the normal case, assume the supported mappings preserve G-206 on the account and groupKey = G-206 on the group.

The documented account-attribute linking model also needs a schema agreement. The account attribute must be marked as an entitlement, its name must match the entitlement type name, and its values must match the designated Entitlement ID values.

The account attribute's Type relationship connects it to the appropriate entitlement type.

For this supplied design, check each part together:

- The account attribute is groups and is marked Entitlement.
- Its relationship points to the supported groups entitlement type.
- The account's membership value is G-206.
- The group's selected identifying field, groupKey, contains G-206.
- Both belong to the intended Expenses-Production source context.

When these documented conditions are met, ISC automatically links the access information collected from the account attribute with the separately collected entitlement details.

```text
[Account: expense-user]
          |
[groups contains G-206]
          |
[Same source + type groups]
          |
[Group identified by G-206]
          |
[Expense Approvers + description]
```

The lines show the reference relationship, rather than a sequence of backend jobs. They connect the account's G-206 membership to the same source/type's G-206 group and its description. They don't grant access at each step.

An **account aggregation** collects account records and their attributes, including represented membership values. An **entitlement aggregation** collects access-object information under the supported entitlement schemas.

When the relevant data has been collected and the relationship agrees, the detailed object can explain the access reference on the account. Collection represents a membership that already exists in this example.

**Provisioning** performs supported account or access changes in the external system. Linking the two collected records isn't an instruction to add the membership again.

## The field settings answer different questions

A **multi-valued attribute** holds a collection rather than one value. **Cardinality** describes this single-value or collection distinction.

Our selected account has one groups item. Another account can have several. A collection containing one item is still a collection.

Marking the field as Entitlement tells ISC to interpret it as access information. Marking it as multi-valued permits multiple values. Neither setting alone establishes that the correct identifiers were collected.

A list of phone numbers can be multi-valued without representing access. Conversely, a supported access model can have a single-valued entitlement attribute.

You may also see Type set to a named entitlement type in the schema editor. That expresses a relationship to another schema. It isn't simply a basic value kind such as text or a **Boolean**, which means true or false.

For groups, there are two related ideas: the references are text values, and those values refer to objects of the groups type. Choosing that type doesn't replace G-206 with the word groups.

The technical attribute model represents value type and schema association through separate properties. Don't assume that a UI label and every API property use an identical representation.

Existing connectors have supported default schemas and mappings. Inspect their actual relationships before editing. Another connector's field name isn't a reason to rename a production groups field.

## Keep object identification separate from person matching

Technical schema representations use `identityAttribute` and `displayAttribute` to name the attributes selected for object identification and display.

For our group schema, those selections correspond to groupKey and label. They select fields, rather than supplying the group's particular identifier or name directly.

“Identity” inside identityAttribute concerns identification of the object described by that schema. It doesn't mean “find the person who owns the expense account.”

An **ISC object ID** identifies a stored ISC record. An entitlement record and its schema have their own object contexts. G-206, the selected source-group identifier, isn't automatically either record's ISC ID.

When someone asks for “the entitlement ID,” establish whether they mean G-206, an ISC entitlement-record ID or the schema's ID. Substituting one for another can identify a different object or fail to find it.

**Account correlation** associates an account with its appropriate ISC identity using configured matching. That relationship can tell you who owns expense-user. It doesn't decide which group G-206 identifies.

A membership reference identifies an access object. A person-matching value identifies an intended account owner. Correct ownership association won't repair a wrong membership value.

## Account and entitlement reads provide different evidence

The **entitlement catalog** is the inventory of access items recorded in ISC.

Entitlements can originate from values collected during account aggregation, before a separate entitlement read supplies richer names and descriptions. Entitlement aggregation can also collect an access object that no account currently holds.

That gives us two information responsibilities:

```text
[Account read]     [Entitlement read]
      |                    |
[Membership IDs]     [Object details]
      |                    |
      +---------+----------+
                |
 [Link by source, type and identifier]
```

The branches show what the supported reads supply. The lower connection represents their schema agreement. They don't prescribe a universal order, simultaneous execution, schedule or internal queue.

Suppose the catalog contains G-999, but the inspected account has no G-999 membership. You have evidence that an access object was collected, rather than evidence of this account holding it.

Now reverse the observation. An account has G-206, but the recorded entitlement has only a raw-looking name and no description. The access reference exists; its descriptive information may be incomplete.

Check whether supported entitlement collection read the object, whether the correct fields were mapped and whether the producer supplied the details. Missing description alone doesn't make the membership invalid.

Don't assume a universal screen appearance or duplicate-handling result for every mismatch. Read the actual records and collection evidence.

A **direct-connect source** reads through a configured connector connection. Supported entitlement aggregation can be started manually or scheduled. A **flat-file source** imports supplied files; its entitlement-import mechanism is manual and doesn't support multiple entitlement types.

An account-only connector doesn't gain access-object aggregation simply because someone adds a schema. Likewise, a completed groups read doesn't establish that another type was included. Check what the selected operation actually covers.

## The label can be right while the reference is wrong

Now return to the opening mismatch.

The account API returned G-206. A project-added mapping replaced that reference with technicalName, producing expense.approvers on the collected account.

The detailed group still has groupKey = G-206 as its selected identifier.

Those values don't satisfy the intended identifier match. A person recognizing them as names for the same business group doesn't change the configured relationship.

Changing the group's displayed label to expense.approvers would change descriptive information, while leaving the selected ID as G-206. It wouldn't correct the account reference.

In this supplied investigation, responsible owners approve correcting the account mapping to preserve G-206. Appropriate subsequent collection represents the corrected value, and the supplied verified result links it to the existing detailed group.

The target account and its actual membership remain unchanged. This is a correction of ISC's read-side representation, rather than a grant or removal.

Changing the designated Entitlement ID to accommodate the bad mapping would be another design change. It isn't a harmless shortcut. Changing Entitlement ID or Entitlement Name selections after aggregation can cause duplicate entitlements; review supported handling and dependent references first.

For a new schema, the first attribute is initially marked as both Entitlement ID and Entitlement Name. Review those selections before collection. Field-entry order isn't a business decision about which value should identify the object.

## Different access categories need their own relationships

Suppose a supported direct-connect integration also exposes the native type appRoles. An **application role** here is an access object defined in the expense application. It is different from an ISC role used to group access for business assignment.

In this conditional extension:

- groups contains G-206, identifying Expense Approvers.
- appRoles contains R-51, identifying Audit Exporter.

The account's groups relationship points to groups; its appRoles relationship points to appRoles. Each has its supported schema and identifying fields.

Don't direct both account attributes to groups simply because both represent access. The account-schema configuration doesn't allow multiple attributes to be marked with the same entitlement type.

Equal text can also occur in different categories. A group 51 and an application role 51 aren't established as one object merely because their identifiers look alike.

Keep source, type and identifier together. The same rule applies across environments: G-206 in Expenses-Test isn't established as the same governed object as G-206 in Expenses-Production.

If a proposed source exposes a category differently, investigate its actual supported model. Don't invent a second native type or silently merge fields just to make the configuration diagram look convenient.

## Some access relationships exist between entitlements

Where the target and connector support it, one access object can grant another kind of access object.

For example, a group schema can contain an attribute referring to application roles. Its Type relationship can point to the role entitlement type, with cardinality appropriate to that supported relationship.

This describes an entitlement-to-entitlement relationship. It doesn't establish an additional direct appRoles membership read from the account.

**Hierarchy** describes parent/child relationships between access objects. Its supported representation depends on the connector and schema. A friendly group name doesn't encode a hierarchy, and importing group names doesn't discover every inherited permission.

A **permission** is an allowed operation on a resource, such as reading or writing it. Supported sources can distinguish permissions held directly by an account from permissions granted through entitlements.

The type name permission is specially handled for direct permissions. Don't create an ordinary entitlement type with that name in any capitalization as a substitute for the supported permission model.

**Effective access** means what an account can actually do after relevant grants and restrictions are considered. A membership list is useful evidence, but doesn't by itself establish every indirect path or restriction.

For schema work, establish which objects and relationships the connector exposes. Keep groups, application roles, direct permissions and indirect relationships recognizable instead of flattening them into one invented category.

## Compare the right screen with the right record

The **user interface**, or UI, presents several kinds of evidence.

Account Schema shows field definitions and their settings. Entitlement Types and Schemas shows categories, attributes and selected ID/Name fields. These configuration views don't prove that all corresponding records were collected.

Individual account details show represented values for an account. The Entitlements view shows recorded access objects and their details.

For our mismatch, compare the intended source and account, actual groups elements, type relationship, groupKey and applicable collection results. Include the operation's scope, collection times and errors.

An **audit event** records an activity or configuration change. A schema-change event can establish that someone changed the definition. It doesn't establish that a later read collected the intended data or that linking now works.

If the account references an object that the entitlement read doesn't return, investigate both read scopes and times alongside the exact values and target records. The object could be outside the read scope, the reference could be stale, or a mapping could be wrong. Choose the diagnosis supported by this case's evidence.

Similarly, a missing description needs an input-to-result trace: did the source provide it, did the mapping select it, and did the relevant read collect it? A schema definition can't invent unavailable upstream data.

## Editing a description is different from changing a schema designation

**Metadata** is descriptive or governance information about an access item. Editing an entitlement record's Display Name or Description in ISC updates that information; those edits aren't sent to the external source.

That is different from changing which schema attribute supplies Entitlement Name or Entitlement ID. A record-level text edit and a schema-level selection have different responsibilities and impact.

Manually updated names and descriptions can be protected from replacement during later aggregation. If the external source has a new description but ISC retains older wording, inspect manual-update state as well as mapping and collection.

The visible text alone doesn't establish that the connector failed to read the new description. Nor does an unchanged external description establish a failed provisioning operation when the action was an ISC metadata edit.

Useful descriptions still matter. An **access request** asks for access through a configured request process. A **certification** is an access review in which a responsible person evaluates recorded access.

Clear names, descriptions and populated entitlement attributes help someone understand what they are requesting or reviewing. G-206 alone communicates less than the group's purpose and approval limits.

An **entitlement owner** is the responsible party recorded for the item. Depending on configuration, that owner can participate in request or review decisions. Ownership doesn't mean personally holding the entitlement.

An **access profile** bundles entitlements from one source. An ISC **role** can group access profiles and direct entitlements. These definitions can refer to entitlement records, so an identifier redesign deserves more care than a readability edit.

Catalog presence also doesn't make an item requestable to everyone. The applicable request configuration and access policies still matter.

## Removing a schema isn't revoking the access it describes

Deleting an entitlement type removes that type's schema configuration. It doesn't delete the associated entitlement records or their target memberships. Objects of that type won't be aggregated or updated until another type is created for them.

Account aggregation also doesn't delete an entitlement merely because no accounts currently hold it. The access object may still exist externally.

These distinctions follow the records. A schema describes a category. A catalog record describes an access item. A membership relates an account to it. Removing or editing one representation isn't automatically an external change to another.

If the requirement is to remove access, identify the supported external operation and verify its result on the intended account. Schema deletion, an absent membership observation or catalog cleanup isn't proof of successful target revocation.

## Try changing one fact

### 1. The label matches, but the identifier doesn't

An account contains Expense Approvers. The detailed group has groupKey G-206 and label Expense Approvers. GroupKey remains the selected Entitlement ID. Does the matching label establish the intended link?

**Worked reasoning:** No. Compare the actual account reference with the selected ID under the supported schema relationship. Investigate the raw value and mapping. Don't redesign a working identifier merely to accommodate a wrongly mapped label.

### 2. The field holds two phone numbers

BackupPhones is multi-valued. Someone proposes marking it Entitlement because it is a list. Does that structure establish access meaning?

**Worked reasoning:** No. Cardinality describes the number and structure of values. Entitlement designation requires access meaning and the appropriate supported model. Phone numbers don't become access rights because there are two.

### 3. The catalog contains a group

An entitlement read collects G-999. No supplied account record contains it. Can you report that the expense account holds it?

**Worked reasoning:** Inventory doesn't establish membership. Inspect the relevant account's access values and, when reporting a person's access, its identity association. For effective access, investigate relevant indirect paths separately rather than inventing a direct assignment.

### 4. Membership exists but details are sparse

The account has G-206. Its entitlement record has a raw-looking name and no description. Only account aggregation is confirmed. Is the group invalid?

**Worked reasoning:** That conclusion doesn't follow. Account aggregation can originate entitlements without richer details. Check supported entitlement collection, scope, mapping and supplied object data. Missing description isn't by itself evidence of an invalid external group or failed membership.

### 5. Two types use the same short code

A supported source represents a group 51 and an application role 51 under separate types. Should they be merged?

**Worked reasoning:** No. Source, type and identifier identify the intended access object together. Follow each supported schema relationship; equal identifier text across categories doesn't establish one object.

### 6. A description changes only in ISC

An administrator edits Description in ISC. The external description stays unchanged, and a later read preserves the manual wording. Is this a provisioning failure?

**Worked reasoning:** No provisioning operation was supplied. The edit concerns ISC metadata, which isn't sent to the source. Inspect manual-update preservation, mapping and collection before diagnosing a failed read or write.

### 7. An entitlement type is deleted

The team deletes the type and says everyone's access is removed. What has that action established?

**Worked reasoning:** It removed type/schema configuration and interrupted that type's collection/update until another type is created. It didn't delete the associated entitlements or target memberships. Access removal requires a supported operation and resulting-state evidence.

## Review a different application's design

An application returns teams = ["T-8"] on accounts. A separate team export contains teamCode T-8, displayLabel Regional Reviewers and a description. The supported native type is teams.

The proposal maps memberships to Regional Reviewers, selects teamCode as Entitlement ID, assumes every imported team belongs to every account, and points both teams and emergencyTeams at the same entitlement type.

What needs correcting?

**Worked reasoning:** Preserve the intended T-8 identifier in the account's teams attribute. Connect that entitlement-marked attribute to the supported teams type and match its value with teamCode. Use an appropriate display field without replacing the reference with its label.

An imported team establishes inventory information. Read the relevant account values before asserting membership.

The proposed duplicate account-attribute/type association conflicts with the documented constraint. Establish what emergencyTeams means and how the actual connector supports it. Don't invent a new native category or silently merge the fields to bypass the issue.

Check scope, data quality, identity association where needed, representative linking results and supported handling of existing identifiers. If the design also needs access changes, establish those operations and authority separately.

Explain the connection through the records: “The account holds access references. The entitlement schema identifies and describes the objects they refer to. The references connect when source, type and identifying values agree under the supported configuration.”
