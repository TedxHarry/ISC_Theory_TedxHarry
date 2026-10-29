# Object IDs, account identifiers, and names: which record are we talking about?

Two results both say “Invoice reader.” One belongs to finance production. The other belongs to finance test.

The employee needs production invoice reading, not payment release. The familiar name helps us find candidates. We still need to establish which permission each result represents.

In SailPoint Identity Security Cloud, or **ISC**, different records can have similar names and different identifiers. Let's follow what each identifier points to before using it in a change.

## Separate the person, the account and ISC's account record

An **identity** is ISC's record representing a person. An **account** is a record in a particular system, such as the employee's finance account.

ISC can collect information about that external account and keep its own representation. The account in finance and the record describing it in ISC are separate records.

An **object** is a particular record ISC manages. The identity and the collected account representation are two examples.

An **object ID** identifies that particular ISC record. Other records and operations can use it to refer to the object without relying only on its readable name.

The short IDs in this example stand for actual technical values. They are not real ISC IDs or values to submit.

The employee's identity has ID **I-1**. That identifies the person-level record inside ISC.

Their account in finance has the external key **u-778**. That key identifies the account under this finance integration.

ISC's representation of that account has ID **A-1**. A-1 identifies the ISC account record, while u-778 identifies the external account it describes.

These values are useful together because they answer different questions. I-1 tells us which ISC person. A-1 tells us which ISC account record. u-778 tells us which finance account is represented.

## Keep the source and login beside the account key

A **source** is ISC's configured representation of a system or account dataset. A **connector** supplies the integration used to read its information and perform supported changes.

Our finance production source has ID **S-PROD**.

The account already exists, and ISC has collected its information. Our main example uses its correct association with the employee's identity.

The employee signs in to finance with the login **finance.user**. In this hypothetical system, that login differs from the key u-778. Finance keeps the key when the login changes.

That is a supplied feature of this example, not a guarantee about every application.

The organization also gives the employee the number **10482**. This is a **business identifier**: a value supplied and governed by the organization for a business purpose.

The employee number is not automatically the technical ID ISC assigns to the identity. Their readable person name is another label, useful for recognition but not a substitute for either ID.

We can now put the values beside their meanings:

| Value | What it identifies in this example |
|---|---|
| `10482` | Employment information under the organization's numbering policy |
| `I-1` | ISC identity representing the person |
| `S-PROD` | ISC source configured for finance production |
| `A-1` | ISC record representing the finance account |
| `u-778` | External account under this finance integration |
| `finance.user` | Login used in the finance system |

Suppose an operation asks for the recipient's ISC identity ID. The real ID represented by I-1 is the right kind of value.

Employee number 10482 would answer a different question. A-1 and u-778 identify account records, not the recipient's ISC identity.

If an external operation needs the finance account key, I-1 is the wrong kind of identifier for that field. The operation needs to address the account in its own system.

Before copying a value, establish the record and system the receiving field expects.

## Follow the account's references

A **reference** points from one record to another.

An **attribute** is a named field on a record. The account and identity can each have an employee-number attribute.

A-1 has a source reference identifying S-PROD. That establishes which source the account record belongs to.

Its identity reference identifies I-1. That establishes which ISC person the account is associated with.

The external account key is described as the **native identity** in this account representation. Native here concerns the account's source-system context; it does not mean the person's ISC identity.

```text
ISC account record: A-1
login: finance.user
native identity: u-778
employee number: 10482
 |
 +-- source --> S-PROD
 |              finance production
 |
 +-- identity -> I-1
                employee identity
                employee number 10482

External account represented:
finance production / u-778

Arrows mean "refers to".
They do not create accounts or sign in.
```

Follow the source arrow to finance production's configuration. Follow the identity arrow to the person.

The arrows do not create the account, copy all its attributes onto the person or sign the employee in. The last line identifies the external account being represented. It is not a live query of finance.

The key and the association need separate checks. u-778 could correctly identify the external account while A-1 is linked to the wrong person in ISC. Conversely, the person association can be correct while an attempted finance update fails.

## Understand how the business number helped establish the association

**Account correlation** matches and assigns a source account to an ISC identity using the applicable configuration.

For our example, the configured comparison uses the account's employee number and the identity's employee number. Both contain 10482, and that value identifies one intended identity in the supplied data. The account is therefore associated with I-1.

The number supplied matching information. The resulting relationship points to the identity record.

It did not turn A-1 into an account named 10482, replace u-778 or merge the identity and finance account.

The numbering policy matters too. If numbers are reused, wrong or not unique in the relevant population, equal values may select the wrong person. Check the data and matching design rather than treating every employee number as permanently reliable.

Other references have other purposes. An access object's **owner reference** identifies the responsible identity. A **manager identity reference** identifies another person-level record.

Neither points automatically to that person's application account or gives them the access described by the owned or managed object.

## Distinguish the represented entitlement from the source group

The finance application has a group with key **g-41**. A **group** brings accounts together so its memberships can be used to give access.

In this hypothetical application, g-41 permits invoice reading. It does not permit payment release.

An **entitlement** is an access item represented from a source, such as a group membership or permission.

ISC represents this group with entitlement record ID **E-PROD** and display name **Invoice reader**. A **display name** is the readable label shown to help people recognize the item.

An **entitlement type** identifies a kind of access item within a source. Our type is **group**, and the source is S-PROD.

There are now two identifying values:

E-PROD identifies the ISC entitlement record. g-41 identifies the source group represented by that record.

The account in finance holds the group membership using g-41. Its membership data does not need to contain E-PROD. The application uses its own group key, rather than ISC's ID for the represented entitlement.

This is the same distinction we made for accounts: ISC has its record ID, and the external system has the identifying value used by its own records.

## Connect a collected membership to the entitlement details

**Aggregation** collects account or entitlement information from a source into ISC.

Suppose the collected account's group field contains g-41. How does ISC connect that membership value with E-PROD's readable details?

A **schema** describes represented fields and their designated uses.

For our linking pattern, the account schema marks the field named `group` as an **Entitlement** attribute. Its name agrees with the entitlement type, and its **Type** setting is linked to that group type.

The entitlement schema designates a field as **Entitlement ID**. On our source group record, that designated field contains g-41.

The collected membership and designated source ID therefore match within S-PROD and the group type. That supplies the link to the represented entitlement.

Here, “Entitlement ID” in the schema means the designated identifying value from the source. It is not the ISC object ID E-PROD.

If the account instead supplies the text Invoice reader while the designated source ID remains g-41, the readable name does not satisfy that comparison.

Inspect the returned and collected membership values, connector or export mapping, account schema, entitlement type and entitlement record. Changing an established ID field merely to make one label match would change the identification design rather than explain the mismatch.

## Follow the package to the actual source item

An **access profile** bundles related entitlements from one source.

Our **Read invoices** profile has ID **P-1**. It references source S-PROD and entitlement E-PROD.

A **role** groups access for a responsibility or group of people. Our **Invoice checking** role has ID **R-1** and includes P-1.

Roles can also include entitlements directly. The profile branch here is one useful configuration, rather than a mandatory layer for every role.

```text
R-1: role Invoice checking
 |
 +-> P-1: profile Read invoices
     |
     +-> S-PROD: finance production
     |
     +-> E-PROD: entitlement record
         source: S-PROD
         type: group
         source value: g-41
         display: Invoice reader

Separate collected membership:
A-1 belongs to S-PROD
group contains g-41
 |
 +-> E-PROD through matching
     source/type/schema and designated ID

Top arrows describe configuration.
Bottom arrow links membership details.
Neither shows a completed grant.
```

The upper part tells us what the role and profile contain. Following E-PROD resolves the access item to finance production, type group, value g-41.

The lower part describes membership information collected for account A-1.

These are different facts. A definition can exist without being assigned to this employee. An existing collected membership does not establish who originally granted it.

The arrows also are not steps run from top to bottom whenever the person signs in. They describe references and a membership link.

A technically valid reference can still be wrong for the business need. A profile can reference a real test entitlement while the employee needs production access. Checking only that the name says Invoice reader misses the difference.

## Check the environment even when names and source values match

Return to the two search results:

| ISC entitlement ID | Display name | Source context | Type and source value |
|---|---|---|---|
| `E-PROD` | Invoice reader | `S-PROD`, finance production | `group`, `g-41` |
| `E-TEST` | Invoice reader | `S-TEST`, finance test | `group`, `g-41` |

Both the label and source value match. The source references do not.

Test can have copied group keys and names. Membership in its group still does not give production access.

An **environment** is an operating context such as production or test. An ISC **tenant** is a particular hosted organizational environment containing its own configuration and represented data.

Check both: which ISC tenant are you using, and which business-system environment does this source represent?

Type matters within a source too. A group value and a permission value do not become interchangeable just because their characters match.

Likewise, “update u-778” is incomplete without its system and environment. The key needs the context that tells the integration where it belongs.

When moving a design between ISC test and production tenants, resolve the intended destination objects and map the references to them. Names can help locate candidates. They do not establish that copied technical IDs address the intended destination records.

## Read the field definition for the interface you are using

An **API**, or application programming interface, lets software read information or request an operation. An **endpoint** is the address for a particular resource or operation.

An account API representation can expose several of the relationships we have followed:

| Account field | Meaning in that representation |
|---|---|
| `id` | ISC account object ID, represented here by A-1 |
| `sourceId` | Source record ID, represented by S-PROD |
| `identityId` | When populated, correlated identity ID, represented by I-1 |
| `nativeIdentity` | Account identifier in its source context, represented by u-778 |

Read each field as a different question about the account. Which ISC account record? Which source? Which associated identity? Which external account?

Our nativeIdentity differs from the login because we supplied that design. A real connector can instead use a username, a directory distinguished name or another system-specific value.

A **distinguished name** locates an object within a directory. If its name or location changes, that identifying value can change. Do not assume every native identity behaves like our persistent finance key.

You can also encounter a separate account field called `uuid`. The account model describes it as the account's unique ID determined by its schema. Do not assume uuid, nativeIdentity and the ISC object id are universally interchangeable.

The source's account schema designates fields for **Account ID** and **Account Name**. Those settings identify and name accounts in the source data. They do not tell you to put A-1 into the finance system's account-key field.

To establish the actual relationships, inspect the connector's definitions, schema and returned account data.

Search gives us another example. An identity Search result can contain account information inside it. In that nested account information, the field `accountId` uses the source's `aiqAccountName` value when available; otherwise it uses the account display name.

Here, aiqAccountName is the source-provided account-name value described for that Search field.

Despite ending in Id, Search's accountId must not automatically be treated as the account API's object id. The two representations define their fields differently.

Before moving a value between them, check what the receiving field expects. The word ID alone cannot establish that.

## Change a label without confusing it with an identifier change

Suppose an administrator changes E-PROD's ISC display name from Invoice reader to **Finance invoice reading**.

Its object ID, source, type and source value remain unchanged.

P-1 still references E-PROD. E-PROD still represents S-PROD's group g-41. We have made the same represented item easier to recognize.

ISC entitlement display-name and description edits are not sent to the external source. This edit does not rename the finance group or change its memberships.

A saved label also does not prove that every Search result or open page has refreshed. Inspect the current record and the view showing the older name before concluding that they are different objects.

Now consider a rename inside the external application.

If that integration uses a persistent key and only a separate label changes, the key can remain the same. If it uses the name itself to identify the object, changing that name changes an identifying value.

A real SailPoint example is the **Snowflake** connector. It uses source user and role name values as account and entitlement identifiers and warns against changing those values after aggregation.

So a readable name can be an identifier the integration depends on. Snowflake's documented warning does not establish the handling of every rename in every other connector.

## Compare a schema change with a source-key change

Changing a **schema designation** changes which field ISC treats as Account ID, Account Name or the entitlement's designated ID or Name.

Changing an **external identifier value** changes data in the actual source system.

Editing an ISC display label does neither.

These changes can look similar on a screen, but they affect different parts of the relationship.

SailPoint strongly discourages changing Account ID or Account Name designations after account aggregation because of duplicate-record and broken-reference risks. Changing the designated entitlement ID or Name after aggregation can also create duplicate entitlements.

The warnings tell us to investigate dependencies and supported procedures. They do not predict one exact error for every integration.

For another variation, the external finance key changes from u-778 to **u-991**.

“The account still belongs to the same employee” describes the business intention. It does not establish how the connector recognizes the changed record or whether old references and pending operations still address it correctly.

Inspect the before-and-after source data, schema, returned account records, association and supported change behavior.

Those facts are needed before concluding that ISC automatically tracks the change, creates a duplicate or deletes the old record. None of those outcomes is supplied just by the new key.

## Distinguish a recreated record from a renamed one

Suppose E-TEST is removed. A later current entitlement has the same display name but the different ISC ID **E-TEST-NEW**.

Under these supplied facts, it is a different ISC object.

A saved configuration or handoff that still refers to E-TEST needs investigation. Do not assume it automatically switches to E-TEST-NEW because the name matches.

The particular feature determines whether a missing reference is rejected, cleaned up or handled another way. Our example does not establish that behavior.

An identifier helps address a record in context. It does not promise the record survives deletion, a source reset or a migration.

For that reason, deleting and recreating a source is not a safe first response to unexplained account information. It can affect the dependencies we need to inspect. Begin with read-only records and configuration.

## Use the relationships to investigate the intended change

The **front end** is the interface we inspect. It can display readable source, person and permission names without showing every technical identifier beside them.

The **back-end work** uses record relationships while processing configured operations. The documented models expose those relationships; they do not reveal a private SailPoint database layout.

Start with the tenant and business environment. Identify the record and its type, follow its references, then compare the resolved source item with the requirement.

If a change was attempted, continue to that operation's evidence.

**Provisioning** carries out supported account or access changes. After an applicable access decision, a configured finance integration could attempt to add g-41 to the intended account u-778.

The **target system** is the system receiving that attempted change.

Correct references establish which records and values the work concerns. They do not establish connector support, permission to perform the operation or successful delivery.

The operation result tells us what was reported about the attempt. Collected membership tells us what ISC obtained from a read. A current application-use check tells us about the intended account's actual permitted action.

Those are different kinds of evidence, even when each displays Invoice reader.

A support note saying “Invoice reader failed” leaves the person, account and environment unclear.

A useful handoff identifies the tenant, source S-PROD, profile P-1, entitlement E-PROD with source value g-41, and account A-1 representing u-778. Include the operation, time, observed result and evidence still missing.

Use approved channels and omit credentials. An object ID is not a password or an authorization grant, but person and account information still needs appropriate handling.

## Work through the identifier choices

**An operation needs the recipient's ISC identity ID. Which value should you use?**

We have employee number 10482, ISC account ID A-1, external key u-778 and identity ID I-1.

Use the real ID represented by I-1 after checking that it resolves to the intended identity in the intended tenant. The other values identify different information or records. A familiar format alone is not that check.

**A production request selects a profile on S-TEST that references E-TEST, named Invoice reader. Should we retry it?**

First establish the wrong-environment relationship.

The name matches the required access, but the selected profile points to test. Inspect the profile, source, entitlement and actual request or fulfillment record. Repeating the request does not correct the definition.

The supplied facts do not establish which account changed or whether any operation succeeded.

**E-PROD is now called Finance invoice reading. Does that require a new finance group?**

No. Its ID, source, type and source value are unchanged.

Follow E-PROD to S-PROD/group/g-41. The ISC label edit was not sent to finance and establishes neither a new group nor a new membership.

**The account membership contains Invoice reader, but the designated source ID is g-41. Do the matching words repair the link?**

No. The linking condition needs the designated value in its source and type context.

Inspect raw and collected membership data, export or connector mapping, schemas and entitlement details. Find where an identifier became a label before considering an authorized correction. Do not redesign established identification merely to hide one mismatch.

**One integration keeps u-778 when finance.user changes to invoice.reader. Another uses the login itself as native identity and that value changes. Are these equivalent renames?**

No. The first retains the stated external key. The second changes the value used to identify the account.

Inspect each integration's schema, supported rename procedure, returned records, association and relevant operation results. Include outstanding work in that investigation. Neither the word rename nor these facts guarantees that every reference survives or breaks.

## Follow the same relationships in a warehouse system

Use these hypothetical warehouse records:

| Record | Supplied facts |
|---|---|
| Production source | `W-PROD`, warehouse production |
| Test source | `W-TEST`, warehouse test |
| Production account representation | `W-ACCOUNT`; native identity `w-305`; login `stock.operator`; correlated identity `W-IDENTITY` |
| Production entitlement | `W-READ`; label Stock reader; type permission; source value `stock.read`; source W-PROD |
| Test entitlement | `W-READ-TEST`; same label, type and value; source W-TEST |
| Production profile | `W-PROFILE`; source W-PROD; entitlement reference W-READ |

The technical IDs are again teaching labels.

Which records should a production permission change concern? Can W-READ-TEST substitute for W-READ because the readable name and source value match?

Follow W-PROFILE to W-PROD and W-READ.

For the intended account, distinguish ISC object W-ACCOUNT from external account w-305 and person-level identity W-IDENTITY.

A supported production change must address the intended account and permission in that production context. The actual connector determines the operation format; this table is not a request payload.

W-READ-TEST belongs to another source. Copied labels and values do not make it interchangeable with the production reference.

Now change only W-READ's ISC display name.

That changes the label, not the represented source permission or warehouse membership. It proves neither grant nor removal. Use operation and current target evidence to establish delivery.

Explain the complete relationship to a teammate: from the profile to its entitlement, the source value it represents and the intended source account. Include the tenant and environment, and distinguish that identification from evidence that the change succeeded.
