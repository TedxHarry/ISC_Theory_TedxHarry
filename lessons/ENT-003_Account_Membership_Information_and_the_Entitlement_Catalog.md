# The catalog has four items. Who actually holds them?

You see four access items in SailPoint Identity Security Cloud (ISC). A report prepared from account records also contains four rows of access.

Can you conclude that every item has a holder?

Only if you know what those rows represent. The same access item can appear on several accounts, while another item has no holders at all. Matching totals can hide that difference.

## What does each list contain?

An **account** is the external system record through which a person or another entity uses that system. A **group** collects members, such as accounts. An application can use group membership when deciding what those accounts may do.

ISC represents access rights as **entitlements**. In this example, the access objects are application groups represented as entitlements.

A **catalog** is an inventory of represented access items. It tells you which items ISC knows about in the selected context.

A **membership** is a relationship between an account and a group. It tells you that this account belongs to this group. A report containing one row for each account-to-group relationship counts memberships.

These lists have different purposes. The catalog describes the represented objects. Account records describe who holds them. A group can exist with many members, one member or no members.

A **source** is ISC's configured representation of a system or collection of account data. Let's use Equipment Production, representing a small, explicitly bounded application population. Its complete records contain exactly three accounts and four groups.

**Scope** means the records and relationships an operation or report covers. Our conclusions concern this source's supplied population, not every application or person in an organization.

These hypothetical records use supported account and group reads, correct linkage and verified account ownership. They show direct membership: the account itself is a member of the listed group. The memberships are continuously held until removed, called **standing access**. Additional access paths are excluded from the example.

## Keep the group attached to the account holding it

A **native identifier** is an identifying value used in the external integration's context. The catalog contains four group definitions, identified by these supplied native values:

- `asset-readers`: Asset Readers.
- `asset-approvers`: Asset Approvers.
- `exception-reviewers`: Exception Reviewers.
- `export-operators`: Export Operators.

The names help us recognize the groups; the native values identify which group each membership references. These are example source values.

The application owner's supplied policy says Asset Readers permits reading equipment records. Asset Approvers permits approving equipment requests. The required membership must be on the account used for the action. We are not deriving those permission meanings from the labels.

The first employee has an ordinary account and a separate administrative account. The second employee has one account.

ISC represents a person as an **identity**. **Account correlation** matches and associates a collected account with the appropriate identity. Both of the first employee's accounts are correctly associated with that employee's identity; the remaining account is associated with the second employee's identity. Those associations are verified facts here, rather than guesses from usernames.

Here is the complete starting membership information:

| Account and verified identity association | Collected membership values |
|---|---|
| First employee's ordinary account | `asset-readers` |
| First employee's administrative account | `asset-readers`, `asset-approvers` |
| Second employee's account | `asset-approvers` |

Let's count each account-to-group relationship.

The ordinary account contributes one relationship. The administrative account contributes two because it belongs to two groups. The second employee's account contributes one. The total is four memberships.

Now ask a different question: how many different groups appear in those memberships?

Only two. Both `asset-readers` and `asset-approvers` occur twice, on different accounts. Neither `exception-reviewers` nor `export-operators` occurs.

```text
Catalog: four group definitions
  asset-readers
  asset-approvers
  exception-reviewers
  export-operators

Recorded account-group relationships
  First: ordinary --> asset-readers
  First: admin    --> asset-readers
  First: admin    --> asset-approvers
  Second: account --> asset-approvers

Four relationships; two held groups.
First employee has two account holders
of asset-readers, but is one person.
```

Each arrow means that the account has that recorded membership. It is not an instruction to grant access, create a group or run an internal process.

The four arrows connect accounts to only two group definitions. This is why four membership rows do not establish four different held entitlements.

There is another consequence. The first employee's administrative account can satisfy the supplied group requirement for approvals. The ordinary account cannot satisfy it. Seeing Asset Approvers associated with the person through the administrative account does not put it on the ordinary account.

A person-level access view can help you find access across accounts. When investigating an action, keep the actual account attached to the membership.

## Which total answers the question you were asked?

These five measurements are all correct for the supplied starting records:

| Measurement | Result and reason |
|---|---|
| Catalog group definitions | 4: the four listed objects |
| Different groups held by at least one account | 2: Readers and Approvers |
| Account-to-group membership pairs | 4: one pair for each arrow |
| Accounts holding Asset Readers | 2: the ordinary and administrative accounts |
| Distinct identities with an account holding Asset Readers | 1: both accounts belong to the first employee |

A **pair** here means one particular account connected to one particular group. Counting pairs preserves repeated holdings on different accounts. Counting distinct groups removes repetitions of the same group. Counting distinct identities groups correctly associated accounts by their owner.

That is why two account holders can correspond to one person. It does not make one of the memberships a duplicate that should be removed.

These numbers are calculations from the supplied records, not a claim that every ISC screen exposes these counters or uses these counting rules.

A completed aggregation's discovered-item total answers another question again. It describes the items discovered in that run. The catalog can contain entitlements represented through other entitlement or account aggregations, so the run total can differ from the inventory total.

When reports disagree, identify what one row represents in each report. Then compare the source, population, kind of access item, filters and observation time. Changing access to make unrelated totals equal would not resolve the difference in what they measure.

## How does ISC learn the objects and their holders?

A **connector** supplies the supported integration for a source. **Aggregation** collects external information into ISC.

In this example, **account aggregation** reads account **attributes**, meaning named pieces of information on each account. One attribute contains the account's group references. Those references supply the recorded holder relationships.

**Entitlement aggregation** separately reads group definitions and their supported details, such as identifiers, names and descriptions. With the relevant support and scope, it can collect a group that no account holds.

Account collection can create simple entitlement representations from the membership values it encounters. Separate entitlement collection can add object details and include unheld groups. This explains how an item can enter the catalog without being discovered on an account.

ISC must also know how a collected value relates to its group details. A **schema** describes the attributes represented for a record kind and their designated uses.

For this source, the account schema has a field named `groups`. It is marked as **Entitlement** information, so its values are interpreted as represented access. It is **Multi-Valued**, so it can contain a list of group references.

An **entitlement type** identifies a supported kind of access object. The native type here is also named `groups`. The account field's **Type** setting points to that supported entitlement type.

The group schema selects `groupKey` as the **Entitlement ID** attribute and `label` as the **Entitlement Name** attribute. The first selection chooses the source value used for identification; the second chooses the readable name.

For example, the account's membership value `asset-readers` matches the value in the group's `groupKey` field. Within the correct source and type relationship, that agreement connects the account's membership to the group's descriptive record. Matching the friendly name alone would not establish this relationship.

Both the account attribute and native type are `groups` in this supplied configuration. Another integration may use different supported fields and read paths. Do not assume all connectors obtain memberships through the same operation.

These reads represent information. Collecting a group does not create it in the application, and collecting a membership does not grant it.

## What happens when a membership is removed?

Now consider a change to the starting records. All observations below are hypothetical and occur on the same day in UTC, a shared time reference.

From 09:00 to 09:05, the three accounts and four groups are verified while no changes occur. This establishes the common baseline; it does not assume that separate reads automatically form one simultaneous snapshot.

At 10:00, an approved change in the application removes `asset-approvers` from the first employee's administrative account. Fresh application evidence confirms the removal. The second employee keeps that membership, and both of the first employee's accounts keep `asset-readers`. No other group or membership changes occur during this observation window.

**Provisioning** performs supported account or access changes. The removal here was performed directly in the application under the supplied approval. We must distinguish that change from later collection that observes it.

At 10:02, entitlement aggregation collects all four group definitions. For this integration, that particular read does not collect the account's `groups` lists. All four groups still exist, so the catalog still contains four objects.

ISC's latest collected account evidence remains the baseline. It still shows the removed Approvers membership on the administrative account.

This does not contradict the verified application removal. The account record describes an earlier observation. A fresh read of group definitions has not made that older relationship evidence current.

At 10:10, a supported account collection and inspection confirms the updated membership values for all three accounts. The first employee's two accounts contain Readers only; the second employee's account contains Approvers.

```text
Same-day observations, UTC

09:00-09:05 verified unchanged baseline
  Catalog: 4; membership pairs: 4

10:00 approved native removal confirmed
  First admin loses asset-approvers
  Second employee retains it

10:02 group definitions collected
  Catalog: 4
  Account records: still baseline

10:10 account values collected/checked
  First ordinary: asset-readers
  First admin: asset-readers
  Second account: asset-approvers
  Catalog: 4; membership pairs: 3

Observed sequence, not a timing promise.
```

We now have three membership pairs instead of four, but the catalog still has four definitions. Readers and Approvers are still the two groups with holders. The first employee no longer has an account holding Approvers, while the second employee still does.

The change removed one account-to-group relationship. It did not delete the group or remove the other employee's membership. The entitlement read did not perform the removal.

The times describe supplied observations, not an expected delay or an instruction to wait ten minutes. To investigate a current membership, inspect the relevant account evidence and the operation that can read it.

## Can an unheld group still belong in the catalog?

Yes. Exception Reviewers and Export Operators have no holders in our complete starting population, but the group definitions exist.

An access object can be retained for a valid future purpose. It might also need a separate retirement review. A zero-holder count does not decide between those possibilities.

Account aggregation does not delete entitlement catalog records because no account holds them. Equally, an old catalog entry alone is not proof that the native object still exists. Check current object evidence when that is the disputed fact.

Also separate the inventory from access offered for requests. An **access request** asks for an access item for a recipient. A **requestable** item is available to request under the applicable configuration.

An unused group can be requestable. A held group can be unavailable for direct requests. Collecting an item does not decide its requestability or approve a request.

So ask the intended question precisely: does the object exist, does an account hold it, is it appropriate to retain, or can someone request it? Each needs different evidence.

## What if a membership arrives without its group details?

Suppose a separate account collection supplies `unmatched-group`, but the selected group-definition read returns no corresponding detailed object.

The missing details do not erase the collected value. Account data can create a simple entitlement representation without the richer description expected from a separate group read.

First check the source, type and exact membership value against the selected group identifier. Then check the definition-read coverage and the integration's read permissions.

A read limited to another type would not establish absence of this group. Insufficient permission to read its details could leave a different gap. The source value could also be stale or invalid. Those are explanations to test, not conclusions established by a blank description.

Find out whether the native relationship is valid and why the expected detail is missing. Supplying a friendlier name or granting membership again does not answer either question.

## How much evidence supports the word “nobody”?

A fresh, complete and correctly interpreted account membership list without `asset-approvers` supports absence of that represented direct membership on that account.

A missing field is not automatically an empty list. An old export is not current evidence. A filter can hide rows without removing the underlying memberships.

**Pagination** retrieves a collection in successive pages. If you inspect only the first page, the remaining records have not been checked. No matching rows on that page means none were found there; it does not mean none exist across the source.

To say “nobody holds Export Operators,” establish that all relevant accounts and membership data were covered with adequate freshness. The complete example supplies those conditions. A production investigation must establish them for its own population.

Even a verified empty direct-membership list does not necessarily prove an account cannot perform an action. Another group might grant the same permission. An **inherited relationship** can supply access indirectly, such as through a group that contains another group.

**Effective access** means what the account can actually do under the application's permission rules. Our main example excludes additional paths so we can count its direct relationships. A real access investigation must check the paths the application actually uses.

## Find the relationship that needs attention

If the question is whether the ordinary account holds Approvers now, inspect that account's membership in the correct source, with current application and collected evidence. Person-level access on another account is insufficient.

If the question is what Approvers permits, inspect the application's permission rules and responsible owner's evidence. A membership list identifies the holder, not the complete permission meaning.

If the question is why the group lacks a description, inspect object collection and descriptive mappings. Regranting the membership does not repair its description.

If a person-level view omits a known account membership, check account ownership, correlation and view scope. An **uncorrelated account** has no established association with an identity in ISC. It can still hold native access; the missing person link does not revoke its membership.

Choose a correction after identifying the mismatch. A required native change needs its approved fulfillment path and outcome check. A collection issue needs the relevant read and mapping evidence. A view issue needs inspection of the records the view actually presents.

## What do these records establish?

Each question supplies an independent variation. Use the complete starting population unless the question changes its facts.

### 1. Four catalog objects and four relationships

The catalog has the four listed group definitions. The three starting accounts have the four membership pairs shown earlier.

Does this establish that every catalog item has a holder?

**Reasoning:** No. Readers and Approvers account for all four pairs. Exception Reviewers and Export Operators have none in the supplied complete population. Compare the actual references and relationships, not just equal totals.

### 2. Two holders of Readers

The first employee's ordinary and administrative accounts both hold Readers and are correctly associated with that employee. No other account in the population holds Readers.

Are there necessarily two different people holding it?

**Reasoning:** No. There are two account memberships and one distinct identity. Keep both account relationships; a difference between account and person counts does not establish an unwanted duplicate.

### 3. Approvers is on the other account

The administrative account holds Approvers; the ordinary account does not. The application requires that membership on the account used for approval.

Does the person-level association justify expecting approval through the ordinary account?

**Reasoning:** No. It establishes a holding through the administrative account, not membership on every account the person owns. Establish the legitimate account-specific requirement before proposing another grant.

### 4. The definition read just completed

The approved 10:00 application removal is confirmed. The 10:02 group-definition read finishes successfully, but the latest collected account list is still the baseline.

Does the old membership prove removal failed?

**Reasoning:** No. The successful read covers group definitions in this case, not refreshed account memberships. Its success does not make the older list current. Inspect the relevant fresh account evidence.

### 5. An existing group has no holders

All relevant accounts and memberships are freshly covered. Exception Reviewers has no holders, and the application owner confirms it still exists for an approved future use.

Is its catalog presence an error?

**Reasoning:** Not from these facts. The catalog represents a valid existing object. Membership review and group-retirement decisions are separate; zero holders does not require deletion.

### 6. A raw value has no detailed object

Account collection supplies `unmatched-group`. A separate group read returns no matching detailed object, but its permissions and type coverage have not been checked.

Does a blank description prove no membership?

**Reasoning:** No. Keep the collected value separate from the missing detail. Verify the intended object, schema linkage and read coverage before deciding whether the reference is valid, stale or misidentified. Another grant or a replacement label would hide the unanswered question.

### 7. Only the first page was read

The first page of an account report has no Export Operators memberships. The response indicates more pages, which have not been inspected.

Can you conclude nobody holds it?

**Reasoning:** No. The population is incomplete. Complete the authorized read or obtain another sufficiently complete evidence set. A negative result on one page is not a source-wide absence.

### 8. Membership exists without a person link

Fresh native and collected records show Approvers on an account that is uncorrelated in ISC. No owning identity association has been established.

Would editing the entitlement's name repair the person-level evidence?

**Reasoning:** No. Investigate ownership and correlation without guessing an owner. The account-to-group relationship exists; the missing relationship connects the account to an identity. A name edit repairs neither.

## Try the count with licenses

A **license** gives an account the right to use a product or feature set under an application's licensing model. A supported source represents three license definitions: Basic, Editor and Analytics.

Two accounts hold Basic, and neither holds the other licenses. Both accounts are correctly associated with the same employee. Complete current coverage is supplied, with no other accounts or licensing paths in scope.

Explain the catalog count, different held license definitions, account-to-license relationships and distinct people holding Basic.

**Reasoning:** There are three catalog definitions, one held definition, two account-to-license relationships and one person holding Basic. Each count answers a different question.

Now an approved change removes Basic from one account. Current evidence confirms the removal, the other account's holding and the continued existence of all three definitions.

Which counts change?

**Reasoning:** Account-to-license relationships fall from two to one. The catalog still has three definitions, one definition is held, and the same one person still holds Basic through the remaining account.

When explaining an access report, say what each row represents, which population it covers and when the evidence was obtained. Then connect the access item to the account and its verified owner. That makes the total understandable and gives you a way to investigate an unexpected result.
