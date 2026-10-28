# The group is in ISC. Does the account hold it?

An account has two group memberships, G-520 and G-521. ISC has collected those values, but their names and descriptions aren't useful yet.

A separate group read returns details for G-520, G-521 and a third group, G-599.

What did ISC learn about the account's access? It learned more about the groups, including one that the account doesn't hold. The third definition isn't a third membership.

To understand why, keep the account record and the access-object record separate, then follow how their information connects.

## One record describes a group; another refers to it

An **account** is a record in an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and connects relevant information, accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies supported integration behaviour.

Our hypothetical source is `Invoice-Production`. The existing account `invoice-user` is already associated with its intended ISC identity. Supported account and group reads are correctly configured, and the supplied account values describe direct group memberships.

A **group** is an application object that can associate accounts with access. A **membership** is the relationship between an account and that group.

An **entitlement** represents an access right in ISC. Here, application groups are represented as entitlements:

G-520 identifies Invoice Reviewers. G-521 identifies Archive Readers. G-599 identifies Exception Reviewers.

The identifier says which group a reference identifies. The readable name helps someone recognize the access.

Knowing the name Exception Reviewers doesn't establish a membership between invoice-user and G-599. We need the account's access information for that relationship.

An **attribute** is a named piece of information, such as groups on an account or description on a group. A **schema** defines represented attributes and their uses.

An **entitlement type** identifies a supported category of access object, such as groups.

All records, reads, mappings and outcomes below are supplied examples, rather than observations from a real tenant.

## What account aggregation contributes

**Aggregation** collects information into ISC.

**Account aggregation** collects account records and their attributes, including supported access values associated with those accounts.

An **API**, or application programming interface, lets software interact with a system. This selected **JSON**, JavaScript Object Notation, illustrates account attributes produced by the supplied read:

```json
{
  "accountKey": "invoice-user",
  "groups": ["G-520", "G-521"]
}
```

Curly braces enclose an object with named properties. Square brackets enclose an array, a collection of values. The groups array has two text identifiers.

This isn't a complete ISC Accounts API response. It shows which account and membership values we're following.

**Account correlation** associates a source account with its appropriate ISC identity using configured comparisons. The correct existing association is supplied and verified here. An account name alone wouldn't establish ownership.

The account schema marks groups as an entitlement attribute and connects it to the supported groups type. It is **multi-valued**, so it permits a collection rather than just one value.

The collection setting describes structure; the entitlement designation describes access meaning. A collection of phone numbers wouldn't become access merely because it also used square brackets.

In the supplied successful result, ISC represents G-520 and G-521 on invoice-user.

Entitlement records can also arise from these collected account values before a separate object read supplies richer descriptions. Here, the account read establishes representations of those two held groups with limited descriptive information.

So account aggregation can create entitlement representations in ISC. It hasn't created the corresponding groups in the external application; they already existed.

**Provisioning** performs supported external account or access changes. Discovering existing membership isn't an instruction to grant it again.

## What entitlement aggregation adds

**Entitlement aggregation** collects information about access objects under the source's supported types and schemas. It can collect objects that no account currently holds.

For this example, the supported group read supplies:

```json
[
  {
    "groupKey": "G-520",
    "label": "Invoice Reviewers",
    "description": "Review invoices awaiting approval."
  },
  {
    "groupKey": "G-521",
    "label": "Archive Readers",
    "description": "Read archived invoice records."
  },
  {
    "groupKey": "G-599",
    "label": "Exception Reviewers",
    "description": "Review invoices marked as exceptions."
  }
]
```

The array contains three selected group objects. It isn't a complete API response or connector configuration.

The group schema selects groupKey as **Entitlement ID**, the attribute supplying an object's identifying value. It selects label as **Entitlement Name**, the attribute supplying its naming value.

`groupKey` is the selected field; G-520 is a value in that field. Description supplies additional information about the access item's purpose.

Those are group details, rather than assignments to invoice-user.

The **entitlement catalog** is ISC's recorded inventory of access items. In our supplied result, it contains the three groups and their collected descriptions.

Two existing representations gain details. G-599 becomes known through the group read. The example assumes no protected manual description prevents those intended updates.

“Three definitions returned” therefore doesn't mean three newly granted memberships. It doesn't even mean three newly created ISC entitlement records, because two were already represented from account data.

A returned-object count, a created-record count and an assignment count describe different things.

## Connect each held value to the right object

The account has G-520, and the group's selected identifying field contains G-520. That is the reference we need to preserve.

The documented linking model requires an entitlement-marked account attribute whose name matches the entitlement type name, and values matching the selected entitlement IDs.

Here groups is marked Entitlement, connects to the supported groups type and contains G-520. The corresponding group record has groupKey G-520 in the same Invoice-Production source context.

With those supported conditions met, ISC automatically links the account-derived access information with the separately collected object details.

```text
[Account read]       [Object read]
      |                   |
[Held group IDs]     [Group details]
      |                   |
      +---------+---------+
                |
 [Linked access information in ISC]
```

The branches show the information each read supplies. The lower connection represents linking under the schema agreement. It isn't a grant, a private storage model or a requirement for simultaneous execution.

The account side supplies held identifiers. The object side describes the access those identifiers refer to.

A **mapping** determines which input supplies a represented attribute. If an account mapping substitutes Invoice Reviewers for G-520 while groupKey remains G-520, another group read won't correct the account-side value.

A matching readable label doesn't replace the selected identifier relationship.

Changing a working Entitlement ID or Entitlement Name designation isn't a harmless way to hide that mismatch. Post-aggregation designation changes can produce duplicate entitlements and affect dependent references; assess supported change handling first.

## Count accounts, relationships and objects separately

Assume these are all accounts in the selected population:

| Account | Collected groups | Membership occurrences |
|---|---|---|
| invoice-user | G-520, G-521 | 2 |
| account-b | G-520 | 1 |
| account-c | G-521 | 1 |

You have three accounts and four account-to-group relationships. G-520 occurs on two accounts, and G-521 occurs on two accounts.

There are only two distinct held group identifiers. Repeated membership in the same group doesn't create another group object.

The group read returns three definitions. G-599 has no membership in the supplied complete account population.

The totals are therefore three accounts, four relationships, two distinct held groups and three known objects. They aren't expected to match.

One group can have many members. One account can hold many groups. A group can also exist without members.

A particular entitlement run's summary may differ from the complete Entitlements list too. The list can include records originating from previous account and entitlement aggregations; the execution summary concerns that run's discovered population.

For every total, establish what it counts, its source and type, and which execution and population it describes.

“No account in this supplied complete population holds G-599” follows from the table. A filtered or incomplete account result wouldn't justify saying that nobody anywhere holds it.

## Keep source, type and access path with the identifier

The same G-520 text in a test environment isn't established as the production group. Nor does a group and an application role sharing a short code make them one object.

An **application role** is defined in the external application. An ISC **role** groups access for business assignment. If a source exposes groups and application roles, each needs its supported type, schema and read coverage.

The selected example describes direct group memberships. Supported object data can also describe relationships between access objects, such as indirect grants through another group.

That indirect path isn't the same as an extra direct membership on invoice-user.

A **permission** is an allowed operation on a resource. **Effective access** concerns what an account can actually do after relevant grants and restrictions.

These two direct membership values alone don't establish a complete effective-access calculation. First identify which relationships the integration represents and which target rules matter.

This lets you answer the precise question being asked: object inventory, direct membership or effective access.

## A successful read still needs the right scope and authority

A **direct-connect source** uses a configured connector connection. Supported entitlement collection can be started manually or scheduled, separately from account aggregation.

A schedule requests recurring work. It doesn't prove that any particular account, group or field was collected.

On supported sources, entitlement aggregation can include all configured types or selected types. A groups-only success doesn't establish that application roles were read too.

The **integration actor** is the account or application identity used to read the external system. Its authority can differ by operation. Permission to list accounts doesn't establish permission to list groups or retrieve descriptions.

**Scope** identifies the records and information a read covers. A **filter** selects or excludes records under supported conditions. Inspect account and object scopes separately.

**Extraction** selects records or values from delivered data. A correct schema can't supply a description that the actor didn't receive or the mapping didn't select.

**Pagination** splits a result into pages. The first successful response isn't evidence that the remaining selected objects were consumed.

Compare actual delivery, extraction, mapping, supported continuation and relevant errors before blaming the wrong collection.

An **endpoint** is a particular external interface address used by an operation. Its name alone doesn't prove which ISC collection responsibility completed.

A supported connector can use multiple external calls to assemble account information. Calling an interface associated with groups during that work doesn't by itself complete a separate entitlement aggregation.

**SaaS** means software operated as a hosted service. The Web Services SaaS connector documents such multi-call account collection and distinguishes account, group and entitlement-change operations. These are supported connector examples, rather than a universal call sequence.

## Choose the order around the outcome you need

There isn't a universal rule that entitlement aggregation must always finish first.

Account collection can establish held values before richer details arrive. Object collection can establish group definitions before any account memberships are collected.

For a useful access review, you need the intended account relationship and understandable object details. For an inventory of unassigned groups, you need object coverage beyond values found on accounts.

Our main successful trace starts with account collection and then collects groups. The supplied result confirms their link. That sequence isn't a requirement for every connector or an instant-refresh promise.

Also check each fact's observation time. Two successful reads don't automatically form one frozen picture of the target.

## A later group read doesn't refresh an older membership

Consider a separate timing variation for invoice-user. All times use **UTC**, Coordinated Universal Time, as their shared reference.

```text
09:00  Account: G-520, G-521
09:20  Target: remove G-520 membership
09:30  Group read: G-520 exists
```

At 09:00, the account is observed with both memberships. At 09:20, the target changes that account's membership, removing G-520. The group itself remains.

At 09:30, the group read confirms G-520 still exists. That is consistent with the removal: other accounts can hold it, and the object can exist without members.

The lines are separate observations and an external change, rather than stages of one aggregation. The later read doesn't undo the removal or refresh the older account observation.

To establish current membership, obtain and verify the applicable account-access evidence.

**Freshness** concerns when the relevant fact was observed. One recent job time doesn't make every related record current.

The same reasoning applies to separately produced files. A new group file doesn't refresh an older account export.

## File imports need both information responsibilities too

A **flat-file source** imports supplied files instead of reading through a live connector connection.

An account file supplies accounts and their access references. An entitlement file describes the access objects. Uploading the latter doesn't assign every listed object to every account.

**CSV**, comma-separated values, represents records as rows and fields as columns. Its structure and the configured schema determine how those fields are interpreted.

Use the source-specific entitlement template and required identifying column. Its ID values must agree with the account's entitlement values. Arbitrary column headings aren't interchangeable across sources.

The documented flat-file entitlement mechanism is manual. It doesn't provide recurring entitlement schedules or multiple entitlement types through that mechanism.

If the project needs recurring collection or multiple access types, establish a supported ingestion design. Adding files doesn't give a source every direct-connect capability.

An account-only connector has another boundary: creating a schema doesn't implement an unsupported object-read operation.

## Check what each screen represents

The **user interface**, or UI, presents data and configuration from different responsibilities.

Source Accounts and account details show collected accounts. The source's Entitlements view and wider Entitlements page show recorded access items.

Entitlement Types and Schemas describes configuration. It doesn't establish that G-599 was delivered.

Aggregation History and latest-aggregation information describe executions. Inspect operation, selected types, status, counts and warnings or errors. Starting a read isn't completion; completed work still has a scope.

| Question | Evidence to compare | What it doesn't establish alone |
|---|---|---|
| Is G-599 recorded? | Correct entitlement record and group-read evidence | That invoice-user holds it |
| What does this account hold? | Source, invoice-user and collected groups | Current descriptions for every object |
| Whose account is it? | Actual identity association and matching evidence | That group inventory established ownership |
| Why is a description old? | Delivered object, mapping, read and manual-update state | That account collection failed |
| Was target access changed? | Applicable change operation and target membership | That a catalog update granted or revoked access |

Search results can also lag a change present in the underlying account or entitlement records. Compare identified records, execution evidence and view freshness before treating one stale result as a read failure.

## Preserved metadata can explain an old description

**Metadata** is descriptive or governance information about an access item.

An administrator can edit an entitlement's Display Name or Description in ISC. Those edits aren't sent to the external source, and manually maintained values can be preserved against later aggregations.

If a group read returns a new description while ISC retains manual wording, inspect that manual-update state and the agreed owner of the explanation.

The issue may be descriptive-data responsibility rather than a missing read. Repeating account aggregation or clearing a protected value merely to make the screens match wouldn't establish the right correction.

An **access request** asks for access through a configured process. A **certification** is a responsible person's review of recorded access.

Clear details help those decisions. Collecting them doesn't approve a request, make an item requestable to everyone or prove that existing members should retain it.

## A missing membership doesn't delete the group

If account collection no longer reports G-520 on invoice-user, the group can still exist and belong to other accounts.

Account aggregations don't delete entitlement records, including when no accounts currently hold them.

Conversely, a group absent from an object read needs investigation. It might be absent from the target or outside that read's scope. Permissions, filters, continuation and stale input can produce different evidence.

Review actual completeness and existing-record consequences before using a partial result as a cleanup plan.

Removing access requires its separately authorized change mechanism and target evidence. Collected information can feed configured decisions that initiate provisioning, but observation and external change remain different operations.

## Test the distinction with changed evidence

### 1. Three accounts, four memberships

The complete account table has three rows. The group read returns G-520, G-521 and G-599. How many held group identifiers and object definitions are there?

**Worked reasoning:** Two distinct held identifiers and three definitions. The four occurrences are account-to-group relationships. G-599 has no supplied member, while repeated G-520 and G-521 don't create extra group objects.

### 2. G-599 appears in inventory

The account still contains groups = ["G-520", "G-521"]. What changed in its represented memberships when the group read discovered G-599?

**Worked reasoning:** Nothing in the supplied outcome. The inventory gained an object; no assignment or provisioning operation was supplied.

### 3. Membership arrives before description

Account collection represents G-520, but separate group collection isn't confirmed. Its description is missing. Where would you investigate?

**Worked reasoning:** Establish supported object collection, delivered fields, scope and mappings. Limited description doesn't negate the membership. Identify where the details should originate before repeating an unrelated account read.

### 4. A readable label replaces the ID

The account mapping supplies Invoice Reviewers while the group remains identified by groupKey G-520. Will another group read repair the link?

**Worked reasoning:** Not by rereading the same definition. Correct the account-side identifying relationship through supported mapping and change review. Don't casually redesign working identifiers to conceal the mismatch.

### 5. Accounts are readable; groups are denied

The actor can list accounts, but the target denies its group-list request. Should the team change memberships to fix the inventory?

**Worked reasoning:** No. Investigate the required group-read operation and appropriate permission through the authorized owner. Account-read success doesn't establish group-read authority, and no missing membership was demonstrated.

### 6. The group read follows a removal

G-520 membership is removed at 09:20. The latest account observation is 09:00, and the 09:30 group read returns G-520. What does it prove?

**Worked reasoning:** The group still exists at that observation. It doesn't update the old account membership or reverse the removal. Obtain the relevant current account-access evidence.

### 7. Manual wording survives a read

A supported group read returns a new description. ISC retains the identified entitlement's manually maintained description. Is another account aggregation the first correction?

**Worked reasoning:** Inspect manual-update preservation and descriptive ownership. The observation can be consistent with intended metadata protection; account collection doesn't resolve that policy choice.

### 8. Only one type completes

A source supports groups and application roles. A successful entitlement run selected only groups. Is the application-role inventory complete?

**Worked reasoning:** Not established. Check that type's supported schema, configuration, actor visibility, selected scope and completed results. A successful scoped run doesn't prove work it excluded.

## Review a project-file proposal

An account export contains teams = ["T-22"]. A separately produced team file lists T-22, Regional Reviewers, and T-90, Emergency Reviewers.

The proposal says: “Import both teams, assign both to the person and schedule the flat-file entitlement import hourly.” No account association or current target-state evidence is supplied.

What must change before acceptance?

**Worked reasoning:** Preserve T-22 as the supplied membership and connect it to the matching object under the supported source/schema relationship. T-90 is inventory information, rather than an assignment to this account.

Establish the account's owner, each export's population and observation time, the identifying values and source-specific template. Verify actual imports and collected records rather than treating available files as completed work.

The documented flat-file entitlement mechanism doesn't provide that recurring schedule. Establish a supported ingestion design instead of calling an unimplemented scheduler a native capability.

If a new membership is required, identify its separately authorized fulfillment operation and verify the target result. Don't alter access to compensate for incomplete inventory evidence.

Explain it through the two records: “This account holds these identifiers. Those object records describe what the identifiers mean, including objects nobody holds. Importing the definitions doesn't assign their contents to the account.”
