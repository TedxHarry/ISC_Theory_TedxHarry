# The group is in ISC. Does the account hold it?

An account belongs to two groups, G-520 and G-521. ISC has collected those membership values, but it doesn't yet have useful names and descriptions for them.

A separate group read returns details for G-520, G-521 and G-599.

The account still holds two groups. ISC now knows about three group objects.

That difference matters. Let's follow what each read contributes, then connect the information without turning a group definition into an account assignment.

## Separate the account, the group and the relationship

An **account** is a record used to access an external system. In SailPoint Identity Security Cloud (ISC), an **identity** represents a person or another entity and can bring together its accounts and access.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration used to read information and, where supported and configured, make changes.

Suppose our source is Invoice-Production. The existing account invoice-user is already associated with the intended ISC identity.

A **group** is an application object that can associate accounts with access. The group has its own record, separate from any one account.

A **membership** is the relationship between an account and that group. An **entitlement** represents an item of access in ISC; here, the application's groups are represented as entitlements.

For this example:

- G-520 identifies Invoice Reviewers.
- G-521 identifies Archive Readers.
- G-599 identifies Exception Reviewers.

The identifying value tells us which group a reference points to. The readable name helps a person recognize the access.

Knowing that Exception Reviewers exists doesn't tell us whether invoice-user belongs to it. For that, we need evidence of the membership relationship.

An **attribute** is a named piece of information on a record, such as groups on an account or description on a group. A **schema** defines the attributes ISC represents and their designated uses.

An **entitlement type** identifies a supported category of access object on a source. In this design, that category is groups.

The records and outcomes below are supplied examples. Supported account and group reads are correctly configured, and the account values describe direct group memberships.

## What the account read tells ISC

**Aggregation** collects information into ISC. **Account aggregation** reads account records and their attributes, including supported access values associated with those accounts.

An **API**, or application programming interface, lets software interact with a system. These selected account attributes illustrate the supplied read using **JSON**, JavaScript Object Notation, a format for exchanging structured data:

```json
{
  "accountKey": "invoice-user",
  "groups": ["G-520", "G-521"]
}
```

The braces enclose one object. Each property has a name on the left of the colon and a value on the right.

The groups property contains an **array**, or collection, inside square brackets. Its two items are strings, meaning text values: G-520 and G-521.

This fragment shows the account and memberships we're following. It isn't a complete ISC Accounts API response.

**Account correlation** matches and associates an account with its appropriate ISC identity through configured comparisons. The correct existing association is supplied and verified here. The account's name alone wouldn't establish its owner.

The account schema marks groups as an entitlement attribute and connects it to the supported groups type. The field is also **multi-valued**, meaning it can hold a collection.

Those settings answer different questions. Multi-valued describes structure; Entitlement describes access meaning. A list of phone numbers wouldn't become access rights just because it also used square brackets.

In the supplied successful read, ISC represents G-520 and G-521 on invoice-user.

These account values can also establish entitlement records in ISC before a separate group read supplies richer details. Here, the two held groups become represented with limited descriptive information.

That creation happens in ISC's records. The application groups and their memberships already existed.

**Provisioning** carries out supported external account or access changes. Reading an existing membership doesn't require granting it again.

## What the group read adds

**Entitlement aggregation** reads information about access objects under the source's supported types and schemas. It can collect objects that no account currently holds.

Our group read supplies these selected objects:

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

The outer array contains three group objects. Each has an identifying field, a readable label and a description of the group's purpose. This isn't a complete connector configuration or API response.

The group schema selects groupKey as **Entitlement ID**, the attribute supplying each object's identifying value. It selects label as **Entitlement Name**, the attribute supplying its naming/display value.

GroupKey is the selected field. G-520 is a value in that field. Selecting groupKey doesn't make the word groupKey the identifier of every group.

Description adds meaning: Invoice Reviewers can review invoices awaiting approval; Archive Readers can read archived records. Those details help explain the access, but they don't assign it to an account.

The **entitlement catalog** is ISC's inventory of recorded access items. In our supplied result, it contains all three groups and their descriptions.

The two account-derived group representations gain useful details. G-599 becomes known through the object read. Assume these descriptions can be updated by aggregation; no earlier manual edits prevent that in this example.

Notice the three different outcomes: three definitions were returned, two existing representations were enriched, and one additional object became known. No new membership was granted.

A returned-object count, a created-record count and an assignment count aren't interchangeable.

## Connect a held value to its object record

The account carries G-520. The corresponding group's selected ID field also contains G-520.

The values agree, and the configuration must identify the relationship too.

For the documented account-attribute linking model, the account field must be marked as an entitlement. Its name must match the entitlement type name. Its collected values must match the values selected as Entitlement ID on the collected objects.

Here, the account field is groups, marked Entitlement and connected to the supported groups type. The group schema selects groupKey as ID. Both records belong to the intended Invoice-Production source.

Under those supported conditions, ISC automatically links the account-derived access information to the separately collected object details.

Follow the two held references:

```text
Account: invoice-user      Recorded groups
  G-520 ----------------> G-520 + details
  G-521 ----------------> G-521 + details
                          G-599 + details
```

Each arrow connects a held identifier to its group record. G-599 has details but no membership arrow from this account.

The diagram describes reference relationships, not grants, private storage steps or simultaneous jobs.

A **mapping** specifies which input supplies a represented attribute. Suppose an account mapping substitutes Invoice Reviewers for G-520 while the group remains identified by groupKey G-520.

A person can recognize the name, but the intended identifying values no longer agree. Another read of the same group definition won't correct the account-side reference.

Inspect and correct the supported mapping rather than casually redesigning a working identifier. Changing Entitlement ID or Entitlement Name selections after aggregation can cause duplicate entitlements and affect dependent references.

## Count each kind of record or relationship separately

Now consider all accounts in the supplied complete selected population:

| Account | Collected groups | Membership occurrences |
|---|---|---|
| invoice-user | G-520, G-521 | 2 |
| account-b | G-520 | 1 |
| account-c | G-521 | 1 |

There are three accounts.

Count the relationships next. Invoice-user contributes two, account-b one and account-c one: four account-to-group membership occurrences.

Now count distinct held group identifiers. They are G-520 and G-521: only two. Finding G-520 on another account doesn't create another group object.

Finally, the group read returned three object definitions, including G-599. No account in this supplied complete population holds G-599.

So the four totals are **three accounts, four relationships, two distinct held groups and three known objects**. They describe different things and needn't match.

This is a **many-to-many relationship**: one account can belong to several groups, and one group can have several accounts as members. A group can also exist with zero members.

A particular entitlement run's discovered count can differ from the full Entitlements list. The list can include records created by earlier account and entitlement reads; the run summary concerns that execution.

For any total, identify what it counts, which source and type it covers, and the population and execution behind it.

The complete table supports “none of these accounts holds G-599.” A filtered or incomplete account result wouldn't establish that nobody anywhere holds it.

## Keep source, type and access path with the identifier

The text G-520 in a test environment doesn't establish that it is the production group.

Different access categories can also reuse the same short identifier. A group and an application role with equal identifier text aren't thereby the same object.

An **application role** is defined in the external application. An ISC **role** organizes access for business assignment. Where a source exposes both groups and application roles, each needs its supported type, schema and read coverage.

The main example describes direct group memberships. A supported model may also expose relationships between access objects, such as access obtained through membership in another group.

That indirect path differs from an additional direct membership on invoice-user.

A **permission** is an allowed operation on a resource. **Effective access** is what an account can actually do after relevant grants and restrictions are considered.

Two direct group values don't establish every indirect path or restriction. Identify which relationships the integration represents and which application rules matter before claiming a complete effective-access picture.

That helps you distinguish the actual question: which objects are known, which are directly held, or what access ultimately works.

## Check each read's authority and scope

A **direct-connect source** reads through a configured connector connection. Where supported, entitlement aggregation can be started manually or scheduled separately from account aggregation.

A schedule requests recurring work. The execution result must establish which objects were actually read.

Supported entitlement runs can include all configured types or selected types. A successful groups-only run doesn't establish that application roles were collected too.

The **integration actor** is the account or application identity used to read the external system. Its permissions can differ by operation. Being allowed to list accounts doesn't establish permission to list groups or retrieve their descriptions.

**Scope** is the boundary of records and information being read. A **filter** selects or excludes records under supported conditions. Check account scope and object scope separately.

**Extraction** selects records or values from delivered data. A schema definition can't supply a description that the actor never received or the mapping didn't select.

**Pagination** divides a result into pages. A successful first response doesn't establish that the remaining selected objects were read.

Trace delivery, extraction, mapping, continuation and errors to find the missing information. Changing memberships isn't a repair for a denied group-list operation.

## One aggregation can use several external calls

An **endpoint** is an external interface address used by an operation. The address's name doesn't establish which ISC responsibility completed.

A connector may need several calls to assemble account information: one to list accounts and another to retrieve related data.

Calling an interface associated with groups during that work doesn't automatically mean a separate entitlement aggregation completed. Check what records the operation was configured to produce and what its result contains.

**SaaS** means software operated as a hosted service. The Web Services SaaS connector documents multi-call account aggregation and distinguishes account aggregation, group aggregation and entitlement-change operations.

Those examples explain supported responsibilities. They aren't a universal call sequence or a complete configuration for Invoice-Production.

## Plan the reads around the information you need

There isn't one universal rule that entitlement aggregation must always finish first.

Account collection can establish held values before richer group details arrive. Object collection can establish group definitions before account memberships are collected.

For a useful access review, you need the intended account relationship and understandable group details. For an inventory of unassigned groups, you need object coverage beyond the values found on accounts.

Our main trace starts with accounts, then groups, and confirms their link. That sequence is supplied for this example; it isn't a requirement for every connector or a promise of immediate refresh.

Timing matters too. Two successful reads needn't describe one frozen application state.

## A newer group read can coexist with older membership information

Consider a separate timing variation for invoice-user. The times use **UTC**, Coordinated Universal Time, as their common reference.

```text
09:00  Account read: G-520, G-521
09:20  Application: remove G-520 membership
09:30  Group read: G-520 still exists
```

At 09:00, the account is observed with both memberships. At 09:20, an external operation removes its membership in G-520. The group itself remains.

At 09:30, the group read confirms G-520 exists. That is consistent with the removal: the group can have other members or no members.

These are separate observations and an external change, not stages of one aggregation. The later object read doesn't reverse the removal or update the older account observation.

To establish current membership, obtain and verify the applicable current account-access evidence.

**Freshness** concerns when the relevant fact was observed. A recent group-read time doesn't make the earlier account-membership information current.

Separately produced files have the same issue. A new group file doesn't refresh an older account export.

## File imports still need the two kinds of information

A **flat-file source** imports supplied files instead of reading through a live connector connection.

The account file supplies account records and their access references. The entitlement file describes access objects. Importing the definitions doesn't assign every listed group to every account.

**CSV**, comma-separated values, represents records as rows and fields as columns under its format rules. The configured schema determines how those fields are represented.

Use the source-specific entitlement template and required identifying column. Its ID values must agree with the account's entitlement values. Column headings from one source aren't automatically interchangeable with another source's template.

The documented flat-file entitlement mechanism is manual. It doesn't provide recurring entitlement schedules or multiple entitlement types through that mechanism.

If a project needs those capabilities, establish a supported way to bring in the data. Having a file doesn't establish that its source has every direct-connect capability.

An account-only connector has another boundary: adding a schema doesn't implement an object-read operation the connector doesn't support.

## Ask what a screen is showing

The **frontend**, or user interface (UI), presents collected records and configuration on different pages. The **backend** is the software handling reads, processing and requests behind those screens.

Source Accounts and account details show collected accounts. The source's Entitlements view and wider Entitlements page show recorded access items.

Entitlement Types and Schemas describes configuration. Seeing a field definition there doesn't establish that G-599 was delivered.

Aggregation History and latest-aggregation information describe executions. Check the operation, selected types, status, counts and warnings or errors.

Starting a read isn't completion. Completed work still has a scope.

| Question | Evidence to compare | What remains separate |
|---|---|---|
| Is G-599 recorded? | Correct entitlement record and group-read evidence | Does invoice-user hold it? |
| What does this account hold? | Source, invoice-user and collected groups | Are descriptions current for all the objects? |
| Whose account is it? | Actual identity association and matching evidence | What group inventory was collected? |
| Why is a description old? | Delivered object, mapping, read and manual-update state | Did account collection fail? |
| Did target access change? | Applicable change operation and actual membership | What changed only in the catalog? |

Search can reflect a record change later than the account or entitlement view. Compare identified records, execution evidence and view freshness before treating one stale result as a read failure.

## An old description can be deliberately preserved

**Metadata** is descriptive or governance information about an access item.

Editing an entitlement's Display Name or Description in ISC changes that information. These edits aren't sent to the external source. Manually maintained values can also be preserved against later aggregation.

Suppose the group read returns a new description, but ISC retains the item's manual wording. Check its manual-update state and who owns that explanation before deciding what to correct.

The read may have worked. The remaining issue may be which description should be maintained.

Repeating account aggregation won't resolve that ownership decision. Clearing protected wording merely to force the screens to match doesn't establish the intended description.

An **access request** asks for access through a configured process. A **certification** is an access review in which a responsible person evaluates recorded access.

Useful group details help a requester or reviewer understand the item. Collecting those details doesn't approve a request, make it requestable to everyone or decide that current members should retain it.

## Missing membership and missing object are different findings

If account collection no longer reports G-520 on invoice-user, the group can still exist and have other members.

Account aggregation doesn't delete entitlement records, even when no account currently holds them. The access object may still exist externally.

A group absent from an object read needs different investigation. It may be gone from the application, outside scope, hidden from the actor, omitted by a filter or missing because the result wasn't completely read.

Compare target state, permissions, filters, continuation and input freshness. Review completeness and existing-record consequences before treating a partial result as a cleanup plan.

Access removal needs its separately authorized change mechanism and target evidence. Collected information can feed configured decisions that initiate provisioning, but the observation and the external change remain different operations.

## Test the distinction with changed evidence

### 1. Three accounts, four memberships

The complete account table has three rows. The group read returns G-520, G-521 and G-599. How many held group identifiers and definitions are there?

**Worked reasoning:** Two distinct held identifiers and three definitions. Four occurrences describe the account-to-group relationships. G-599 has no member in this supplied population; repeated G-520 or G-521 doesn't create another group.

### 2. G-599 appears in inventory

The account still contains groups = ["G-520", "G-521"]. What changed in its represented memberships when the group read discovered G-599?

**Worked reasoning:** Nothing in the supplied outcome. The inventory gained an object. No assignment or provisioning operation was supplied.

### 3. Membership arrives before description

The account read represents G-520, but separate group collection isn't confirmed. Its description is missing. Where would you investigate?

**Worked reasoning:** Check supported object collection, delivered fields, scope and mappings. Missing details don't negate the membership. Identify where the description should originate before repeating an unrelated account read.

### 4. A readable label replaces the ID

The account mapping supplies Invoice Reviewers while the group remains identified by groupKey G-520. Will another group read repair the link?

**Worked reasoning:** Re-reading the same definition won't repair the account reference. Correct the supported mapping with appropriate change review; don't casually redesign working identifiers to conceal the mismatch.

### 5. Accounts are readable; groups are denied

The actor can list accounts, but the application denies its group-list request. Should the team change memberships to fix the inventory?

**Worked reasoning:** No. Investigate the group-read operation and its required permission through the authorized owner. Account-read success doesn't establish group-read authority, and no missing membership was demonstrated.

### 6. The group read follows a removal

G-520 membership is removed at 09:20. The latest account observation is 09:00, and the 09:30 group read returns G-520. What does it prove?

**Worked reasoning:** The group still exists at that observation. It doesn't update the old membership or reverse the removal. Obtain current account-access evidence.

### 7. Manual wording survives a read

The group read returns a new description. ISC retains the identified entitlement's manually maintained description. Is another account aggregation the first correction?

**Worked reasoning:** Inspect manual-update preservation and descriptive ownership. The result can be consistent with intended metadata protection. Account collection doesn't decide which wording should be kept.

### 8. Only one type completes

The source supports groups and application roles. A successful entitlement run selected only groups. Is the application-role inventory complete?

**Worked reasoning:** That isn't established. Check its supported schema, configuration, actor visibility, selected scope and completed results. A successful scoped run doesn't prove work it excluded.

## Review a project-file proposal

An account export contains teams = ["T-22"]. A separately produced team file lists T-22, Regional Reviewers, and T-90, Emergency Reviewers.

The proposal says: “Import both teams, assign both to the person and schedule the flat-file entitlement import hourly.” No account association or current target-state evidence is supplied.

What needs changing before acceptance?

**Worked reasoning:** Preserve T-22 as the supplied membership and connect it to its object under the supported source/schema relationship. T-90 supplies inventory information, not an assignment to this account.

Establish the account's owner, each export's population and observation time, identifying values and source-specific template. Verify completed imports and collected records rather than treating available files as completed work.

The documented flat-file entitlement mechanism doesn't provide that recurring schedule. Use a supported way to bring in the data instead of describing an unimplemented scheduler as a native capability.

If another membership is required, establish its separately authorized account-change operation and verify the target result. Changing access won't compensate for incomplete inventory evidence.

Explain the connection through the records: “This account holds these identifiers. Those object records describe the access, including objects no account in our observed population holds. Importing the definitions doesn't assign them to the account.”
