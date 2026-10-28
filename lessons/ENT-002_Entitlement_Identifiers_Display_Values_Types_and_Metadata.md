# The entitlement name changed. Is it still the same access?

An application group is renamed from Case Review to Case Review Readers. An employee already belongs to that group and can read assigned case files, but cannot edit them.

You see the old wording in SailPoint Identity Security Cloud (ISC). Should you arrange another grant of access under the new name?

The new name alone cannot answer that. The application might have relabeled the existing group, or it might have replaced it with a different group. Those changes can look similar on a screen while requiring different work.

## What are we trying to identify?

A **group** collects members, such as application accounts. An **account** is the external system record through which a person or another entity uses that system. The application can use group membership to decide what an account may do.

Our question concerns the group itself and the account's membership in it. The employee's account is a separate object from the group.

ISC represents access rights as **entitlements**. An entitlement can represent a group membership or another supported kind of access on a **source**, ISC's configured representation of a system or collection of account data.

For this example, Case Files Production is the source representing the case-file application. Its **connector** provides the supported integration for reading account and group information and, where supported and configured, making changes.

The application has a group record. ISC has an entitlement record representing that access. Each system needs a way to identify its record.

A **native identifier** is the identifying value used in the external integration's context. Here, the group's native key is `case-readers`.

An **ISC entitlement object ID** identifies the entitlement record in ISC. It is not the same kind of identifier as the external group's key, even though both concern the access we are investigating.

If an operation expects the ISC entitlement object ID, it needs the actual ID retrieved for that ISC record. Supplying `case-readers` because it is “the group's ID” supplies a different kind of value. Conversely, an external membership reference does not become correct by substituting ISC's record ID.

An **object** is a particular record. A **reference** points to another object, such as an entitlement's reference to its source. Before copying an ID, establish which object the receiving operation expects.

The fields, configuration and results below are hypothetical, with supported account and group collection. Any notation such as `<ISC entitlement ID>` marks where an actual retrieved identifier belongs; it is not a usable ID.

## A schema chooses a field. The group supplies the value.

Let's look at the information the application exposes about this group after the label change.

An **attribute** is a named piece of information on a record. Here are four selected group attributes:

| Attribute name | Value on this group |
|---|---|
| `groupKey` | `case-readers` |
| `technicalName` | `case.review` |
| `label` | Case Review Readers |
| `description` | Read assigned case files; no editing |

Which one should ISC use to identify the group? Which one should it display to a person?

A **schema** describes the attributes represented for a kind of record and their designated uses. In our supplied configuration, the group schema selects `groupKey` as the **Entitlement ID** attribute and `label` as the **Entitlement Name** attribute.

That means: use the value found in `groupKey` to identify the represented source object, and use the value found in `label` for its readable name.

This is the difference between an instruction and the data it selects. `groupKey` is the field name in the instruction. `case-readers` is this particular group's value in that field. Another group can use the same schema while supplying a different `groupKey` value.

The `technicalName` field may help the application team recognize the group. But the word technical does not make it the selected identifier. Its job depends on the supported schema configuration.

An **API**, or application programming interface, lets software read information or request operations. If you inspect a schema through such an interface, you can encounter `identityAttribute` and `displayAttribute`.

In this example, `identityAttribute` contains `groupKey`, and `displayAttribute` contains `label`. These properties name the fields ISC uses for identification and display.

The word identity in `identityAttribute` concerns identifying objects represented by this schema. It does not mean finding the person who owns the account.

The schema record also has its own ISC `id`. That ID identifies the schema, not an individual group using it. Similarly, the source configuration has its own ID. A source ID, schema ID and entitlement object ID select different ISC records.

## Follow the value from the group to the account

Now we can connect the group's identity to the employee's recorded access.

**Aggregation** collects external data into ISC. **Entitlement aggregation** reads access objects and their supported details. For this group, the schema selections interpret `case-readers` as the represented source value and Case Review Readers as the readable name.

**Account aggregation** reads accounts and their relevant attributes, including represented memberships. A **membership** is the relationship connecting an account to a group.

In this supplied integration, the account's membership attribute is `groups`. Its account schema marks it as **Entitlement** information and **Multi-Valued**, so it can carry a list of access references.

An **entitlement type** identifies a supported kind of access object. The supported native type here is also `groups`. The account attribute's **Type** setting points to that entitlement type.

The collected account contains `groups: [case-readers]`. The brackets indicate a list containing one value. The selected identifying value on the group is also `case-readers`.

That agreement matters: the account says it holds that native group reference, and the represented group supplies details for the same reference. Source context and the configured type relationship tell us which access objects we are connecting.

To connect the account to its owner, ISC uses **account correlation**. Correlation matches and associates a collected account with an **identity**, ISC's representation of a person or another entity. For this example, that association has been checked and is correct.

The account-to-identity relationship lets ISC connect this account's recorded access to the employee. It does not replace the account-to-group membership relationship.

```text
Case Files Production source

Group schema selects field names
  identityAttribute: groupKey
  displayAttribute: label
              |
              | interprets group data
              v
ISC entitlement record
  id: <ISC entitlement ID>
  value: case-readers
  name: Case Review Readers
              ^
              | source and type groups
              | matching native value
Collected employee account
  groups: [case-readers]
```

The top arrow shows how schema instructions interpret the group data. The lower arrow connects the collected membership to the represented access object. These arrows describe relationships, rather than an order for internal jobs or services.

Both the account attribute and native type are named `groups` here, and Type explicitly selects that supported type. These are example configuration facts. Another connector may use different supported fields and identifiers.

The account's membership value must agree with the integration's selected group identifier. Replacing `case-readers` with the friendly text Case Review Readers would lose that agreement, even if a person could guess the intended group.

Collecting the new label supplies information about the object. It does not add a membership to the account.

## What would you see on the ISC entitlement record?

A selected entitlement representation can contain these fields:

| Field | Meaning in this example |
|---|---|
| `id` | Actual ISC ID of this entitlement record |
| `name` | Case Review Readers, the readable entitlement name |
| `attribute` | `groups`, the account entitlement attribute |
| `value` | `case-readers`, the represented source value |
| `sourceSchemaObjectType` | `groups`, the object type from the source schema |
| `source` | A reference to the Case Files Production source |

This is a selection of model fields, not a complete response or a payload for creating access. Inspect the field definitions of the interface you are using; every screen need not display these labels.

Compare the schema and entitlement again. The schema's `identityAttribute` contains the field name `groupKey`. The entitlement's `value` contains the selected data, `case-readers`. Its `id` identifies the ISC entitlement record.

Those are three different answers to a loosely worded request for “the entitlement ID.” Resolve the meaning before using the value.

## What evidence makes this a rename?

Return to the change from Case Review to Case Review Readers.

For this example, the application owner confirms that the same native group still exists. Its `groupKey`, members and permission rules are unchanged. It still permits reading assigned case files and no editing.

The label is maintained from the source in this case; it has not been manually overridden in ISC. A later entitlement aggregation reads the new label. A current check of the ISC entitlement verifies the same ISC record ID, the same source value `case-readers`, and the new name.

Fresh account evidence also confirms that the employee's `groups` list still includes `case-readers`.

These supplied observations support continuity at each relevant relationship. We have not inferred unchanged access merely from a familiar name.

```text
Verified before
  Native key: case-readers
  Label: Case Review
  Account groups: [case-readers]
  ISC record: <same entitlement ID>
              |
              | label changed
              v
Verified after collection
  Native key: case-readers
  Label: Case Review Readers
  Account groups: [case-readers]
  ISC record: <same entitlement ID>

Same members and permissions verified.

Replacement key: case-readers-v2
Different object; continuity unproven.
```

No new membership is needed because of the wording change in this case. Creating a second item just to match the new label would address an assumed access change that the evidence does not establish.

The verified after-state belongs to this example. It is not a guarantee that every rename preserves native identifiers, ISC references or the timing of every view.

For a real investigation, retain the source, the actual ISC entitlement record ID, native type or relevant attribute, source value, and observation time. A screenshot containing only the name leaves too much unanswered.

## What if the application replaced the group?

Suppose the old group was deleted and a new group with native key `case-readers-v2` was created using the same friendly label.

We can no longer rely on the rename reasoning. The native object is different. The familiar label does not establish its permissions, members or relationship to the old access.

An **access requirement** states what someone should receive. An **access profile** bundles related entitlements from one source. An **ISC role** groups access for a business purpose and can contain access profiles or direct entitlements.

If an access profile still references the old represented entitlement, a new group with the same name does not prove that the profile now points to the replacement. Review the stored reference against the approved requirement.

**Provisioning** performs supported account or access changes. If the replacement requires a new membership, an approved process must deliver that change through the supported path and verify the selected account's result. A read of the replacement's label does not accomplish that work.

Check the intended holders, permissions, references and delivery before calling the change complete. This is a replacement review, not a promise of automatic migration or an instruction to remove old access without checking its dependencies.

A similar limit applies across environments. A test source can contain a group named Case Review Readers without identifying the production group. Copying a test record's ID is not a migration design. Establish the corresponding records in the receiving environment.

## Changing the schema is a different kind of change

A label rename changes data on a group. Changing the schema's selected identifying field changes the instructions used to interpret groups.

For example, switching `identityAttribute` from `groupKey` to `technicalName` changes which source field supplies the identifier. That affects the identification of records using that schema, not just the wording for one group.

Changing selected Entitlement ID or Entitlement Name attributes after aggregation can cause duplicate entitlement records. Review the supported procedure, membership linkage and dependent references before making those changes.

If the problem is an unfriendly display name, first establish whether display selection is wrong. That does not establish a defect in the identifying field. Even a display-schema correction needs controlled verification; it is not automatically harmless.

Also, a schema's identifying selection must name a field. Setting `identityAttribute` to `case-readers` would be incorrect here because there is no source field named `case-readers`. That is one group's value, not the instruction selecting it.

There is no universally permanent native identifier. An integration can use a name or directory path as an identifying value, and that value can change. Verify the actual connector's identification and rename behavior before predicting what survives a change.

## When you read “type,” what is being classified?

Type can describe different parts of these records.

The **native object type** identifies a category exposed by the external integration, such as `groups`. A schema representation can express this category in `nativeObjectType`. The entitlement type's name must match the supported native model. Inventing a plausible name does not give the connector a new capability; some sources support only accounts or restricted entitlement types.

A **data type** describes a field's values. A string is text; a Boolean represents true or false. Our `groupKey` is text, but `string` is not the name of this entitlement type.

In the account attribute's Type setting, choosing `groups` instead establishes a relationship to that entitlement type. Ask whether Type is describing a primitive value or linking an access object.

A broader access listing can also classify an item as an entitlement, access profile or ISC role. That access-model category answers a different question again.

Keeping this context avoids another trap. A supported source might expose a group and a native application role that both use the raw value `shared-code`. They can be different objects with different permissions. The native role is an external access object, not automatically an ISC role.

A value alone cannot distinguish them. Keep source, type or relevant attribute, and identifying value together; keep the actual ISC entitlement ID when referring to its ISC record. This is investigation discipline, not a claim about ISC's internal database key or deduplication algorithm.

## Which information describes access, and which changes a process?

**Metadata** is information about an access item that helps people or configured processes understand and govern it. Different metadata has different consequences.

A description such as “Read assigned case files; no editing” explains the permission boundary. Editing that text in ISC does not rewrite the application's permissions or send a description change to the source.

An **owner** is an assigned responsible party for the access item. Ownership does not make that identity a group member. It can, however, affect a process configured to use the owner.

An **access request** asks for an access item for a recipient. An **approval** is a decision in the configured request process. If that process selects the entitlement owner as reviewer, changing the owner can affect routing for later requests.

That does not establish that an already-created request changed reviewers. Inspect its recorded work separately.

The **requestable** setting concerns whether an item is available for direct requests under the applicable configuration. It is not an existing grant or a completed approval. Setting it does not add the employee to the group.

ISC also supports managed access-model metadata, including default and custom attributes. An organization might define a classification to support reviews. Its meaning must be agreed, and the classification alone does not enforce an application restriction.

Keep this managed context separate from collected source details. In entitlement representations, `attributes` can hold source-supplied key-value information, while `accessModelMetadata` concerns managed access-model metadata. Neither should be confused with the selected native membership value.

## Why might a description stay old after collection?

First establish where that field comes from and who maintains it. **Provenance** means a value's origin and maintenance history.

A description might come from the application, a manual ISC edit, or an incorrect schema selection. The correction depends on which explanation the evidence supports.

Entitlement aggregation can collect supported display names and descriptions, but manually updated fields are protected from later aggregation overwriting them. Repeating the read does not necessarily replace a manually maintained description.

Compare the current source value, schema mapping, relevant collection evidence and the field's manual-update state. Inspect that state using the definitions of the interface you are reading, rather than assuming every representation spells the property the same way.

A manually maintained description might be deliberately clearer than the source's wording. It might also be outdated. Establish which value should govern, then use the supported correction process. Removing maintenance protection just to make two screens match skips that decision.

Finally, distinguish a name edited in ISC from a group renamed in the application. A local display edit is not proof of a native rename. Neither edit alone proves that permissions changed.

## Which difference would change your decision?

Each question supplies an independent variation on the records above.

### 1. The operation asks for the ISC entitlement ID

A read operation expects the ISC entitlement object ID. You have the actual retrieved ID for the entitlement and its source value `case-readers`. Someone proposes using the source value.

Which value fits?

**Reasoning:** Use the actual retrieved ISC entitlement ID for that operation. The source value identifies the native access in its integration context. A wrong kind of identifier can produce an operation problem without proving missing access. Placeholder notation in a diagram is not a real input.

### 2. Continuity is confirmed after a rename

The owner confirms the same native group, unchanged members and permissions. Current ISC evidence shows the same entitlement record ID, source value `case-readers` and new label. Fresh account evidence still includes that membership.

Is another grant required because of the new wording?

**Reasoning:** No. The evidence establishes the same represented object and existing membership in this case. A descriptive rename alone does not create a new access requirement.

### 3. A new group has the familiar name

The old group was deleted. A replacement with key `case-readers-v2` uses the same label. Fresh account data has no replacement membership, and the access profile still references the old entitlement.

Can you declare the access profile correct from its visible name?

**Reasoning:** No. Review the new requirement, replacement's permissions and stored reference, then the supported fulfillment path and selected account's outcome. The membership and reference have not migrated merely because the wording matches.

### 4. A field value is placed in a schema setting

The schema correctly selects `groupKey`. A proposed edit sets `identityAttribute` to `case-readers`, but no source attribute has that name.

Does the edit make identification more precise?

**Reasoning:** No. The setting needs the attribute name used to obtain each group's identifier. The proposed value names this group's data instead. Retain the supported field selection unless an identification change has a reviewed purpose.

### 5. Readability is “fixed” by changing identification

The schema identifies groups through `groupKey` but displays `technicalName`. The requirement is to display the friendly label. Someone proposes using `label` for both identification and display.

What should you resolve first?

**Reasoning:** Identify which selection is wrong. The readability requirement concerns display, not necessarily identification. Review the supported display correction and its impacts without unnecessarily changing the identifier contract. Verify the result because changing selected ID or Name attributes after aggregation can cause duplicates.

### 6. An export keeps only a raw value

A supported source has a group and native role with value `shared-code`, granting different permissions. The export omits source and type information.

Can that value alone identify the intended entitlement?

**Reasoning:** No. Recover the original record's source, type or attribute and ISC record reference before acting. The export discarded the context needed to distinguish the access objects.

### 7. A manual description survives collection

The source has the approved new description. Correct mapping and completed entitlement collection are verified. ISC retains older wording, and that field is marked as manually updated.

Does the old wording prove the connector never read the source?

**Reasoning:** No. Manual-update protection explains why the read does not overwrite that field. Review the intended maintenance authority and supported correction. This does not establish a missing membership or failed provisioning.

### 8. A future request uses the entitlement owner

A future direct request is configured to use the entitlement owner as reviewer. The owner changes to another responsible identity. No native membership or permission change is requested.

Is this only a display edit?

**Reasoning:** No. The configured process uses that ownership relationship, so review future routing implications. The edit does not grant access to the new owner or establish rerouting of existing work. Check any already-created request separately.

## Apply the reasoning to a license

A **license** gives an account the right to use a product or feature set under the application's licensing model. A supported integration represents these licenses as entitlements.

Its schema selects `licenseCode` for identification and `title` for display. A license with native code `report-edit` is displayed as Report Editor.

The vendor renames it Report Author. Supplied current evidence confirms the same native code, licensed capabilities, ISC entitlement record ID and account holding. Only the title changed.

Explain which value changed, which schema instructions stayed the same, and whether that wording requires a new grant. Then consider a different proposed license, `report-advanced`, with a different feature set.

**Reasoning:** The title changed; the schema still selects `licenseCode` and `title` for their respective jobs. Verified object continuity and the existing holding mean a new grant is not required by the wording alone.

The different code and features describe a replacement proposal, not an equivalent rename. Review intended holders, configuration references and supported fulfillment before treating it as the same access.

When someone asks whether an entitlement changed, establish which record, field or relationship changed. That gives you a reason for your decision, whether the right next step is a display correction, a schema investigation or a reviewed access replacement.
