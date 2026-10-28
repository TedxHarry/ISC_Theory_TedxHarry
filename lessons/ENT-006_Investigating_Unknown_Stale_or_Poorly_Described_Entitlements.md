# This entitlement looks wrong. What exactly needs fixing?

An employee's account shows the access value `case-reviewers` in SailPoint Identity Security Cloud (ISC), but the entry has no useful description.

Someone asks whether it is old access that can be removed.

What have we actually established? We have an access value without enough explanation. We have not established that the group is obsolete, that the account should lose it or that the application no longer contains it.

Those are different questions, and they can require different corrections.

## Give the uncertainty a precise meaning

An **entitlement** is an access right represented in ISC, such as an application group or permission. The **entitlement catalog** is the collection of those represented access items.

Unknown describes a gap in our knowledge. It does not identify the cause of that gap.

A raw value can appear because account data supplied it without richer group details. A group can have a readable name but no useful source description. A detailed description can become outdated when the application's allowed actions change.

A **permission** allows an action on a resource, such as reading assigned cases. **Native** means information or behavior in the external system's context.

Stale also needs a specific comparison. Is the membership older than a confirmed account change? Does the description understate today's permission? Has the group been deleted, or does a view merely show an earlier observation?

Keep the observation separate from the conclusion:

| Observation | What it does not establish |
|---|---|
| Raw value without a useful name or description | That the native access is invalid or deleted |
| Zero observed holders | That the object no longer exists or has no planned use |
| Object absent from one read | That it is absent outside that read's coverage |
| Source and ISC descriptions differ | That collection failed |
| No recorded owner | That the access is harmless or any holder can explain it |
| Completed run with a small discovered count | That it covered the entire catalog or every access type |

A missing explanation is not repaired by removing access. An incorrect membership is not repaired by improving the explanation.

## Identify which access you are investigating

A **source** is ISC's configured representation of a system or collection of account data. Cases Production and Cases Test are different sources, even if both contain a group named Case Reviewers.

An **account** is the external record through which a person or another entity uses a system. An **identity** is ISC's representation of that person or entity. The selected employee account is correctly associated with its identity here.

A **membership** is the account-to-group relationship. Our question concerns that account's recorded `case-reviewers` membership on Cases Production.

The employee's manager confirms that assigned support-case review is still required work. That work requirement does not establish what the group permits; the permission meaning still needs application evidence.

The source, records, configurations, times and outcomes in this example are hypothetical. Supported reads and verified account association are supplied, rather than a real connector test or tenant observation.

A **native identifier** identifies the external access object in its integration context. An **ISC entitlement ID** identifies its catalog record in ISC. Keep both when recording an investigation, with the source, environment, relevant account and observation time. They identify related but different records.

Also retain the **entitlement type**, the supported kind of access object, and the relevant **account attribute**, a named field on the account. A group and a native application role can have the same raw value without being the same object.

A similarly named replacement with a different key also needs its own evidence. A friendly label cannot prove object continuity or permission equivalence.

## How did ISC obtain the value without its explanation?

**Aggregation** collects external data into ISC. **Account aggregation** reads accounts and their relevant values, including represented access memberships.

**Entitlement aggregation** separately reads supported access-object details, such as group identifiers, names and descriptions. It can include groups no account currently holds.

Account-held values can create simple catalog representations. Separate object collection can enrich them. That is why a membership reference can be represented before the detailed group explanation is available.

A **connector** supplies the source's supported integration. Its read scope, available permissions and configuration determine which information it can obtain. **Scope** means the objects and relationships the read covers.

Let's compare the supplied same-day observations. UTC provides a shared time reference.

- At 09:00, account collection reads the selected account with `groups: [case-reviewers]`.
- At 09:05, group-definition collection completes successfully for `CurrentTeams` only.
- At 09:10, the application administrator finds group `case-reviewers` in `LegacyTeams`, with the current label Case Reviewers.

A **container** here is an application grouping used to restrict the hypothetical connector's search. These container names and the filter are supplied integration facts, not standard ISC fields or universal connector options.

The group has not moved between containers during these observations. Its key, membership, permission and the employee's work requirement have not changed.

```text
Cases Production
|
+-- Account read, 09:00
|   groups: [case-reviewers]
|       -> recorded membership
|
+-- Group read, 09:05
    CurrentTeams only
    case-reviewers in LegacyTeams
        -> outside selected scope

Native check, 09:10:
Group exists in LegacyTeams.
Permission meaning checked separately.
```

The account read supplied the membership reference. The definition read excluded its group because that group was outside the selected container. The native check independently establishes existence.

The arrows show evidence paths, not a hidden processing schedule. The times describe this example, not a latency guarantee.

A successful read can be correct for CurrentTeams and still be insufficient for the intended integration. The word Legacy also does not establish retirement. Here, the group exists and the employee still performs the relevant work.

## Check that the returned value would connect correctly

Before changing scope, the team also checks the interpretation rules.

A **schema** describes the fields represented for a record kind and their designated uses. Our account schema has a field named `groups`. It is marked **Entitlement**, so ISC interprets its values as access information, and **Multi-Valued**, so it can contain several references.

The supported native entitlement type is also `groups`. The account field's **Type** setting points to that type.

The group schema selects `groupKey` as the **Entitlement ID** attribute and `label` as the **Entitlement Name** attribute. The first chooses the field supplying identification; the second chooses readable display text.

The account value `case-reviewers` agrees with the native group's `groupKey` value. The source, type relationship and identifying values have been checked and agree.

That matters to the diagnosis. We have evidence for an excluded definition, rather than evidence that matching failed. Changing the key or account membership would not address the established omission.

## Complete the correction at the layer that was wrong

The team confirms that the required LegacyTeams objects belong within the agreed integration scope. It reviews which other objects the proposed scope change would include and the impact on the source's represented data. A filter change is not a private edit to one entitlement.

Under the approved change, the relevant definition read includes the required container. It returns `groupKey: case-reviewers`, `label: Case Reviewers` and the source description “Support access.”

The matching value connects the detail to the existing membership. Check the agreed coverage of the newly included population as well as this selected object before accepting the broader scope change.

One problem is resolved: the required group detail is now collected and linked.

Another remains: Support access does not explain the permission.

The administrator confirms the group's current rule: read support cases assigned to the account, with no editing or export supplied by this group. The responsible business contact confirms its intended use and accepts responsibility for maintaining its meaning.

An **entitlement owner** is the responsible party recorded for that access item. Ownership is separate from holding the permission; the most frequent holder is not automatically the correct owner.

The team records the agreed owner and maintains an accurate ISC description:

> Read the support cases assigned to the account in Cases Production. This group does not grant editing or export. Intended for staff performing assigned-case review.

The native configuration supports the scope and exclusions. The intended-use sentence guides assignment decisions; it does not implement a new restriction in the application.

Closing evidence now shows the correct represented group, useful description, accepted owner and matching account reference. Current native evidence confirms that the selected membership and the group's permission remain unchanged.

The investigation improved collection and understanding. It did not remove or broaden the account's access. These continuation observations are supplied hypothetical facts, not a promise that every source exposes these fields or a claim that checking one object validates every newly included object.

## What changes if the definition was returned but did not link?

Consider a separate variation. The account returns `case-reviewers`, but the group schema selects `label` for identification, and its value is Case Reviewers.

The identifier values no longer agree. Readable words do not repair that mismatch.

Check the actual integration contract, field selection and source values. Do not replace the account's native reference with a friendly name just to make a screen look consistent.

Changes to the selected Entitlement ID or Name attributes after aggregation can create duplicate representations. Review existing records and dependent references, validate a proposed correction in a suitable non-production setting, and use the controlled change process.

Deleting the entitlement type is not a cleanup shortcut. It does not delete its associated entitlements. It prevents their aggregation or update until an appropriate type exists again.

## A recent completion time is not complete coverage

A timestamp belongs to an operation. Identify which read it describes, which source and types it covered, and whether it inspected the needed records.

A recent account read does not establish fresh group descriptions. A recent definition read does not establish current membership on every account.

**Pagination** retrieves a collection in successive pages. Stopping after the first page leaves the rest unexamined. A groups query also says nothing about native roles it did not request.

The **integration credential** is the account or authorization the connector uses to communicate with the source. A human administrator can have different visibility.

If the administrator finds a group the connector does not return, compare their environment, search scope and permissions. Obtain the read permissions needed for the agreed integration. Missing descriptive information does not, by itself, justify adding broad write or administrator rights.

For a file-based source, inspect the file's origin and export time. Uploading a file today does not make yesterday's exported values current. Verify the correct source template, identifying fields and included rows.

A run's discovered total is also different from the accumulated catalog. Earlier account or entitlement reads can have contributed items that this run did not discover. Interpret the count within the operation's scope.

## Why might the description remain old after a correct read?

First compare the returned source field with the schema's description mapping. Useful text in a different field needs supported mapping; a mapping change can affect more than one object.

Then inspect **provenance**, the field's origin and maintenance history. A manually maintained ISC description can have a different update authority from source-collected text.

Manually updated entitlement names and descriptions are protected from later aggregation overwriting them. This can preserve a useful business explanation or retain wording that is now outdated.

Repeating the same successful read cannot decide which explanation should govern. Confirm the native meaning, agree where the description is maintained and use the supported correction for the exact field. Do not clear protection across a source to solve one entry.

The reverse boundary matters too: an ISC name or description edit is not sent to the source. Wrong application help text needs its own correction.

## Does zero holders mean retirement?

Suppose a different group, Monthly Reviewers, has no holders in a complete current account population. The administrator confirms it exists, and the owner confirms an approved periodic use.

The count concerns assignment now. It does not establish an obsolete definition.

An **access profile** bundles related entitlements from one source. An **ISC role** groups access for a business purpose and can include access profiles or entitlements. These objects can reference access that no account currently holds.

An **access request** asks for an access item for a recipient. **Requestable** means available through the applicable request configuration. Turning that setting off does not remove existing membership or establish that automatic assignment and access-model references are absent.

Before retirement, investigate current existence, future use, responsible ownership and dependencies. A dependency is something that relies on the access item, such as a stored access-profile reference.

Now take a stronger case. Old Exporters has an approved retirement record. The application team confirms deletion of that exact native group in Production, and a sufficiently authorized, complete check confirms absence. Historical evidence shows that entitlement aggregation previously collected the group. Only account aggregation has run since deletion.

ISC does not provide a general direct catalog-delete action for entitlements. For a native object previously collected through entitlement aggregation, the documented removal path is source deletion followed by entitlement aggregation. Inspect the relevant run and catalog outcome for the correct source and type.

Account aggregation never deletes entitlement catalog records merely because memberships disappear. Another account read is not the catalog-removal mechanism here.

There is an important boundary: entitlements created solely through account aggregation are an exception to that general entitlement-aggregation removal path. Establish the record's origin and supported source handling. Do not promise another account read will delete it or invent a cleanup operation.

These mechanisms do not authorize deleting a live group to tidy the catalog. Native deletion can affect all members and dependencies. Retirement must be established and approved independently of display cleanup.

## Match the correction to the finding

**Provisioning** performs account or access changes. It is separate from reading records and maintaining descriptive information.

If a valid permission is no longer needed by one employee, the correction may concern that account's membership. If the permission itself is too broad, it may concern a shared application rule. Those changes have different effects and verification needs.

```text
Identify source, type and native key
                |
                v
Compare current native evidence
                |
       +--------+--------+
       |                 |
     found           not found
       |                 |
       v                 v
Check read path     Verify coverage
and field origin    before absence
       |                 |
       +--------+--------+
                |
                v
Choose scoped approved correction
                |
                v
Verify that layer and affected access

Not found is not deletion permission.
```

Found means compare the read path and field origin; it does not mean approve access. Not found means verify coverage before asserting absence; it does not mean delete.

This is a human investigation map, not an ISC job order or a requirement to change something in every investigation.

Match the closing evidence to the established cause:

| Finding | Correction and closing evidence |
|---|---|
| Intended object excluded from read scope | Reviewed scope correction, returned detail, correct linkage and population checks |
| Source wording vague but native meaning confirmed | Agreed content authority, accurate explanation and verified saved result |
| Returned values disagree with schema identification | Controlled contract/mapping correction, existing references and duplicate-risk checks |
| One holder no longer needs valid access | Approved account-access change, relevant delivery evidence and native outcome |
| Native object confirmed retired | Addressed dependencies and supported catalog synchronization for that record's origin |
| Evidence incomplete | Precise remaining question, accountable next check and no invented conclusion |

If the unknown capability may expose sensitive information, use the organization's approved risk-handling process for the evidence gap and any authorized interim restriction. Incomplete knowledge is not approval to retain access or permission for broad unreviewed deletion.

For an access change, inspect the correct source, account, entitlement and operation or manual task. A clearer catalog is not evidence that delivery happened. If membership remains when removal was required, the outcome is unmet; that fact alone does not identify an unobserved technical failure stage.

## What would you conclude from these facts?

Each question supplies an independent variation.

### 1. The administrator found the excluded group

The successful definition read covered CurrentTeams. Native `case-reviewers` is confirmed in LegacyTeams, and its key matches the selected account value.

Does the missing definition establish a failed connector operation?

**Reasoning:** No. The read was limited to CurrentTeams, while the group was in LegacyTeams. It can succeed within that scope while the integration's intended coverage remains incomplete. Compare intended and actual scope, review the correction's wider effect and verify returned detail. Changing the key or removing membership would address a different layer.

### 2. A readable label has a different key

The account holds `case-reviewers`. A returned group has key `case-reviewers-v2` and the same label Case Reviewers. No replacement or migration evidence is supplied.

Can its definition be used as the held group's definition?

**Reasoning:** No. Find the exact source/type/key or obtain replacement evidence. Matching display text does not establish the same object or equivalent permission, and does not justify merging them.

### 3. Monthly Reviewers has nobody assigned

A complete current account read shows no holders. The native group exists and its owner confirms approved periodic use.

Should account aggregation remove the catalog entry?

**Reasoning:** No. Account aggregation does not delete catalog entitlements. The native existence and planned use also contradict the assumption that zero current holders means obsolete.

### 4. A deleted native group remains visible

Approved deletion of Old Exporters is confirmed. Entitlement aggregation previously collected it, and only account aggregation has run since deletion.

Is another account read the documented catalog-removal path?

**Reasoning:** No. Check the relevant entitlement aggregation and its outcome, after confirming dependencies and approved retirement. Disappearing memberships alone do not remove the catalog definition.

### 5. Correct returned text does not replace manual wording

A relevant successful entitlement read returns the intended source description, but ISC retains an older manually maintained description.

What should be checked next?

**Reasoning:** Inspect manual-update protection and content authority. Confirm the current meaning and use the supported maintenance method. The mismatch alone does not establish failed collection, and another identical read does not choose the authoritative text.

### 6. The first page contains no match

A native query's first page does not contain the object. More pages remain, and no authorized exact-key lookup has been performed.

Can the object be recorded as deleted?

**Reasoning:** No. Complete the relevant search or obtain a suitable exact-key check. Not yet observed is the supported conclusion; incomplete evidence cannot establish absence or justify a guessed classification.

### 7. The team proposes deleting the type

An entitlement type has poorly described entries. Someone proposes deleting the type and starting again.

Does this remove those entitlements?

**Reasoning:** No. It retains associated entitlements while stopping their aggregation or update until an appropriate type exists. Investigate field content, scope and mapping instead of damaging the update path.

### 8. Description work was completed instead of removal

An approved decision requires removing the selected membership. Only the ISC description was changed, and current native evidence still shows the account in the group.

Was the required correction delivered?

**Reasoning:** No. Inspect the appropriate provisioning activity or manual task and verify the exact native change. The supplied evidence establishes an unmet outcome, not which unobserved technical stage failed.

## Try the investigation with licenses

A **license** gives an account the right to use a product or feature set under an application's licensing model.

A supported design-application source has two native license definitions, `standard-edit` and `standard-view`, both displayed as Standard. The first permits editing and export; the second permits viewing only.

A complete current account read shows nobody holds `standard-edit`. A supported native definition read confirms it exists, and an accountable business contact confirms its approved use for a project starting next month. Its description is “Default license.” No retirement or access change has been approved.

Explain whether the item is stale, whether the two definitions are duplicates, and what needs correction.

**Reasoning:** Zero current assignments do not establish retirement when the definition and approved future use remain. The matching labels obscure different capabilities; they do not make the separate native keys duplicates.

Confirm the feature boundaries and accountable application contact. Maintain a description that explains actions, intended use and limits, after checking mapping and field-maintenance authority. Preserve the identifier distinctions.

A clearer catalog does not assign a license or change its features. A future worker still needs an appropriate work requirement, decision and supported delivery.

When closing an investigation, state what was unknown, which evidence resolved it, which layer changed and how its result was checked. If a gap remains, name the missing evidence and who will obtain it.
