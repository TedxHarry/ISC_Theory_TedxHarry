# Object IDs, account identifiers, and names: which record are we talking about?

Two search results say "Invoice reader." One represents access in the production finance system; the other represents access in its test environment.

An employee needs production invoice reading, not payment release. Choosing whichever result looks familiar is not enough. The displayed words can match while the records point to different systems.

In SailPoint Identity Security Cloud (ISC), names help you recognize records. Identifiers and their context help you establish which records they are. That distinction matters before you change access, copy a configuration, or investigate an account.

## What does this ID identify?

An **object** is a particular record ISC manages, such as an identity, a source, an account representation, or an access configuration. An **object ID** identifies that record so another record or operation can refer to it without relying only on a readable name.

An **identity** is ISC's person-level representation. An **account** is a record in a particular system. ISC can also hold a collected representation of that external account. The actual account and its ISC representation are not the same record.

A **source** is ISC's configured representation of a system or account dataset. A **connector** provides the integration used to read its data and perform supported changes.

For our hypothetical example, an employee already has an identity and a finance production account. ISC has collected the relevant data and correctly associated that account with the identity.

These short labels stand in for technical IDs. They are not real tenant IDs or values to submit anywhere.

| Record or value | Teaching value | What it identifies here |
|---|---|---|
| Employee number | `10482` | Employment information under the organization's numbering policy |
| ISC identity ID | `I-1` | The person-level identity record |
| ISC source ID | `S-PROD` | The finance production source configuration |
| ISC account object ID | `A-1` | ISC's representation of one finance production account |
| External account key | `u-778` | The account in finance production under this integration |
| Account login | `finance.user` | The username used in the finance system |

The employee number is a **business identifier**, supplied and governed by the organization. It is not automatically the ID ISC assigns to the identity. The employee's readable name is a label for recognizing the person, not a substitute for either identifier.

Suppose an operation asks for an ISC identity ID. I-1 represents the right kind of identifier. The employee number, account-record ID, and external key answer different questions.

If an external account operation instead needs the finance account key, I-1 is the wrong kind of value. It identifies the person-level record in ISC, not the external account that operation must address.

Before copying a value, ask: "ID of what, in which system?"

## Why does one account have several identifying values?

The finance system's key for the account is u-778. The employee signs in using finance.user. In this example, the finance system keeps that key when the login changes.

ISC's representation has its own ID, A-1, because it is a separate record describing the account and its relationships. A-1 does not replace the finance key or become the person's login.

A **reference** points from one record to another. For A-1, the source reference identifies S-PROD. It says which configured source the represented account belongs to. Its identity reference identifies I-1, saying which ISC identity the account is associated with.

**Account correlation** is the matching and assignment of source accounts to ISC identities. An **attribute** is a named piece of information on a record, such as employeeNumber.

Suppose the configured matching compares the account's employee-number attribute with the identity's employee-number attribute. Both contain 10482 and, under the supplied data, identify one intended identity. The account is associated with I-1.

The number helped establish the match. The resulting relationship points to the identity record. It did not rename the account object to 10482 or turn the identity into a finance account.

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

Follow the first arrow to the source and the second to the associated identity. They mean "refers to," not "creates," "copies every attribute," or "signs in." The external-account line identifies what A-1 represents; it is not a live query of the finance system.

This gives you separate checks. The external key can correctly identify an account while that account is associated with the wrong person in ISC. Conversely, the person association can be correct while an attempted account change fails.

The business identifier needs its own governance. If employee numbers are reused, incorrect, or not unique in the relevant population, an apparent equality is not sufficient evidence that the intended person was selected. Check the actual data and matching design.

Other references have their own purposes too. An access object's owner reference identifies the responsible identity, not that person's application account. A manager identity reference identifies another person-level record. Neither relationship automatically gives that owner or manager the described access.

## The permission also has more than one identifying value

The production finance system has a group with key `g-41`. A **group** collects accounts whose membership the application can use to grant access. In this hypothetical design, g-41 permits invoice reading, not payment release.

An **entitlement** is an access item represented from a source, such as that group membership or a permission. ISC represents this group as entitlement record `E-PROD`, with display name `Invoice reader`.

An **entitlement type** distinguishes a kind of access item within a source. Here the type is `group`, the source is S-PROD, and the source value is g-41.

E-PROD identifies the ISC entitlement record. The value g-41 identifies the source group represented by that record. These are different identification contexts, not alternative spellings of one field.

If the collected account holds group value g-41, it does not need to hold E-PROD as its native membership value. The finance system uses its group key, not ISC's identifier for the represented entitlement.

How can ISC connect that membership to the entitlement's details?

A **schema** describes an object's represented attributes and their designated uses. For the account-attribute linking pattern here, the account schema marks `group` as an entitlement-bearing attribute. Its name matches the configured entitlement type, and its Type is linked to that type.

The entitlement schema designates an attribute as the **Entitlement ID**. In our supplied group record, that designated attribute contains g-41. The collected account membership also contains g-41 within the intended source/type context, so the values supply the link.

There are two different uses of "ID" here: the ISC record E-PROD and the designated source ID value g-41. The account membership matches the latter under this configuration.

A friendly label cannot replace that comparison. If an export or mapping substitutes Invoice reader for g-41 while the designated ID remains g-41, matching displayed words do not repair the reference.

Inspect the collected membership value, account schema, entitlement type and entitlement record together. The source/type relationship and designated values explain the link; the label only helps you read it.

## Follow the access package to the source item

An **access profile** is a bundle of related entitlements from one source. Our profile `Read invoices`, represented by `P-1`, references source S-PROD and entitlement E-PROD.

A **role** groups access for a responsibility or population. The example role `Invoice checking`, represented by `R-1`, includes P-1. Roles can also include entitlements directly; this is one relationship, not a mandatory stack for all access.

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

Separate collected account observation:
A-1 belongs to S-PROD
group contains g-41
 |
 +-> E-PROD when source/type/schema
     and designated ID values match

Top arrows describe configuration.
Bottom arrow links membership details.
Neither shows a completed grant.
```

The upper part describes access definitions: what the role and profile contain and which source item the entitlement represents. The lower part describes an account observation: membership value g-41 was collected for A-1.

Those arrows do not run from top to bottom every time the employee signs in. The definitions can exist without being assigned to that employee, and collected membership alone does not establish who originally granted it.

To check the profile, follow its entitlement reference. Resolving E-PROD gives you the actual source, type and value to compare with the requirement.

A reference can be technically valid but wrong for the business need. A profile may point to a real entitlement that permits reading in test when the requirement is reading in production. Checking only that the selected item is called Invoice reader misses the problem.

## Matching names and values still need the right context

Compare the two search results:

| ISC entitlement record | Display name | Source context | Type and source value |
|---|---|---|---|
| `E-PROD` | Invoice reader | `S-PROD`, finance production | `group`, `g-41` |
| `E-TEST` | Invoice reader | `S-TEST`, finance test | `group`, `g-41` |

The source value matches as well as the label. They are still different represented access items. Test can contain copied keys and names without providing production access.

An **environment** is an operating context such as production or test. An ISC **tenant** is a particular hosted organizational environment containing its configuration and represented data. Establish both the ISC tenant you are using and the business-system environment represented by the source.

Type also matters within the source. A group value and a permission value do not become interchangeable merely because their characters match. Read the enclosing record and configured relationship.

"Update u-778" is incomplete until you know which source system and environment owns that key. Likewise, when moving a design between ISC test and production tenants, resolve and map the intended destination objects. Names can help locate candidates; they do not establish that copying technical IDs produces the intended relationships.

## Read field names in the interface that supplies them

An **API** is a software interface for reading information or requesting operations. An **endpoint** identifies a particular resource or operation address.

In an account API representation, you can encounter these fields:

| Field | Meaning in that account representation |
|---|---|
| `id` | ISC account object ID, A-1 in our example |
| `sourceId` | ID of the source the account belongs to, S-PROD |
| `identityId` | When populated, ID of the identity it is correlated to, I-1 |
| `nativeIdentity` | Identifier of the account in its source-system context, u-778 |

A **native identity** is that source-context identifier. Our example deliberately separates it from the login finance.user. A real connector can use a username, a directory distinguished name, or another system-specific value instead.

A **distinguished name** is a directory-style name locating an object within the directory. If the name or location changes, that identifier can change. Do not turn our persistent-key example into a rule that every native identity survives renaming.

You may also see `uuid` as a separate account field. The account model describes it as the account's unique ID determined by its schema. Do not assume uuid, nativeIdentity and the ISC object id have one universal meaning or mapping. Their actual relationship must be established from the relevant connector, schema and account data.

The source account schema designates which attributes provide **Account ID** and **Account Name**. Those roles describe identification and naming in the source account data. They are not instructions to write A-1 into the external account's identifier field.

Search adds another reason to check context. ISC Search's nested account field `accountId` uses the source's `aiqAccountName` value when available; otherwise it uses the account display name. It must not automatically be interpreted as the account API's object `id`.

Here, aiqAccountName is the source-provided account-name value described for that Search field. Search data and an account API response have different field definitions, even though both concern accounts.

Before carrying a value from one view to another, check the receiving field's documented object type and meaning. The English word "ID" is not an interface contract.

## What changes when you edit a display name?

Suppose an administrator changes E-PROD's ISC display name from Invoice reader to `Finance invoice reading`. Its ID, source, type and source value remain unchanged.

P-1 still references E-PROD. E-PROD still represents S-PROD's group g-41. The new label helps someone understand that same access item.

ISC entitlement display-name and description edits are not sent to the external source. This edit neither renames the finance group nor changes who belongs to it.

A saved label also does not prove every Search result or open page has refreshed. Inspect the current record and relevant view before treating a label discrepancy as a new object.

Now change the direction: someone renames a group in the external system. That is not automatically the same kind of edit.

If the integration uses a persistent group key and only a separate label changes, the key can remain the same. If the integration identifies the object by its name, changing the name changes the identifying value.

**Aggregation** collects account or entitlement data from a source into ISC. The identifier matters when ISC interprets that data. SailPoint's Snowflake connector, for example, uses source user/role `name` values as account/entitlement identifiers and warns against changing those values after aggregation.

That is a connector-specific counterexample, not a rule that every rename has identical consequences. A field that looks readable can still be the identifier on which the integration depends.

## A schema change, a key change, and a label change are different

Changing a **schema designation** changes which attribute ISC treats as Account ID, Account Name, or the entitlement's designated ID/Name. You are changing how the integration identifies or names the represented records.

Changing an **external identifier value** changes data in the actual source system. A supported rename procedure and the connector's handling determine what that change means.

Editing an ISC entitlement display label does neither of those things.

SailPoint strongly discourages changing Account ID or Account Name designations after account aggregation because of duplicate-record and broken-reference risks. Changing designated entitlement ID/Name attributes after aggregation can also create duplicate entitlements.

These warnings are reasons to inspect dependencies and supported procedures, not a promise that every change produces the same error.

For a separate hypothetical variation, the external finance key changes from u-778 to `u-991`. Someone says, "It's still the same employee's account."

That states the business intention. It does not establish how the connector recognizes the changed record, preserves its ISC association, or addresses outstanding operations that use the old key.

Inspect before-and-after source data, schema, returned account records and the supported change behavior. Do not assume automatic tracking, duplication, or deletion from the sentence alone.

## Deleting and recreating is not another name for renaming

Suppose the test entitlement E-TEST is removed. A later current entitlement has the same label but a different ISC record ID, `E-TEST-NEW`.

Under those supplied facts, it is a different ISC object. The matching display name does not make E-TEST-NEW the old E-TEST.

Inspect any saved configuration or handoff still referring to E-TEST. Do not assume it retargets itself by visible name. Missing-reference rejection and cleanup behavior depend on the actual feature; neither is established just by our example.

An identifier precisely addresses a record in context. It does not promise that the record survives deletion, source resets, or migration.

For the same reason, deleting and recreating a source is not a safe first repair for unexplained account data. It can affect the dependencies you need to investigate. Start with read-only records and configuration instead.

## Use the names to navigate, then check the relationships

The **front end** is the interface you see. The **back end** is the trusted processing behind it. The interface can display names for source, identity and entitlement references without showing every technical identifier beside them.

The documented account and access models expose those relationships. They do not establish a private SailPoint database layout.

For an investigation, establish the tenant and business environment first. Then identify the particular record and its type, follow its relevant references, and compare the resolved source identifiers with the requirement.

If a change was attempted, continue into its operation evidence. **Provisioning** carries out supported account or access changes. For example, after an applicable access decision, a supported finance integration could attempt to add g-41 to the intended account u-778. The **target system** is the system receiving that attempted change.

Correct references establish which records and source values the work concerns. They do not prove permission to perform the change, connector support, successful execution, or current usable access.

A reported operation result, a collected membership and an actual application-use check answer different questions. Keep them separate even when all three display the same friendly permission name.

A support note saying "Invoice reader failed" leaves the recipient and environment unresolved. A useful handoff identifies the tenant, source S-PROD, profile P-1, entitlement E-PROD with source value g-41, and account A-1 representing u-778. Add the operation, time, observed result and evidence still missing.

Use approved channels and omit credentials. An object ID is not a password or an authorization grant, but identity/account details still need appropriate handling.

## Work through these identifier choices

**A field asks for the recipient's ISC identity ID.**

You have employee number 10482, account object ID A-1, source key u-778 and identity ID I-1. Which belongs in that field?

Use the real identity ID represented by I-1 after verifying that it resolves to the intended identity in the intended tenant. The other values identify employment data or account records. Having the right-looking format is not a substitute for resolving the record.

**A production request uses the test profile.**

The selected profile belongs to S-TEST and references E-TEST, labeled Invoice reader. The requirement is production access on S-PROD. Is the matching label enough, and should you retry immediately?

No. The configured relationship addresses the wrong environment for the requirement. Inspect the profile/source/entitlement and actual request or fulfillment record. Repeating the request does not correct that definition. The supplied facts also do not establish which account changed or whether any operation succeeded.

**The permission has a new ISC label.**

E-PROD is now called Finance invoice reading. Its ID, source, type and source value are unchanged. Does the employee need a new finance group because of this edit?

No. It is the same represented access item under a different ISC label. The edit is not sent to the source and establishes neither a new group nor a new membership. Follow E-PROD to S-PROD/group/g-41 to verify the relationship.

**The membership contains the readable words.**

The account's entitlement-marked group attribute contains Invoice reader, while the corresponding entitlement's designated source ID is g-41. Does the display name make them equal?

No. Inspect raw source/collected data, export or connector mapping, schemas and entitlement details to find where the identifier became a label. The specified linking condition needs the designated value. Do not redesign the established ID field merely to hide one mismatch.

**Two accounts are renamed in different integrations.**

The finance login changes from finance.user to `invoice.reader`, while its source key remains u-778. Another source instead uses the login as its native account identifier, and that login changes too.

Are the technical changes equivalent, and can you guarantee all references survive?

No. One retains the stated external key; the other changes the value used to identify the account. Inspect each integration's schema, supported rename handling, returned records, association and relevant operation results. Neither the word "rename" nor these facts establish the handling of every pending operation or reference.

## Trace the same relationships in a warehouse system

A warehouse platform supplies these hypothetical records. All technical labels are again teaching stand-ins.

| Record | Supplied facts |
|---|---|
| Production source | `W-PROD`, warehouse production |
| Test source | `W-TEST`, warehouse test |
| Production account representation | `W-ACCOUNT`; native identity `w-305`; login `stock.operator`; correlated identity `W-IDENTITY` |
| Production entitlement | `W-READ`; label Stock reader; type permission; source value `stock.read`; source W-PROD |
| Test entitlement | `W-READ-TEST`; same label/type/value; source W-TEST |
| Production profile | `W-PROFILE`; source W-PROD; entitlement reference W-READ |

Which records should a production permission change concern? Is W-READ-TEST an acceptable substitute because its name and source value match? What would changing only W-READ's ISC display name establish?

Follow W-PROFILE to W-PROD and W-READ. For the stated account, distinguish ISC object W-ACCOUNT from external account w-305 and person-level identity W-IDENTITY. A supported production write must address the intended source account and permission in that production context; its operation format comes from the actual connector, not these labels.

W-READ-TEST belongs to another source and is not an interchangeable entitlement reference for the production profile. Equal values in copied environments do not remove that source boundary.

A display-name-only change to W-READ changes the ISC label, not the represented permission or the warehouse membership. It proves neither a grant nor removal. Use operation and current target evidence to establish delivered access.

Now explain one complete relationship to a teammate: from the profile to the represented entitlement and its source value, then to the intended source account. The readable name helps locate the item; resolving its identifiers and context tells you what the work actually concerns.
