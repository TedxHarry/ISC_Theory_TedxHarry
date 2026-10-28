# The membership was removed. Why does access still work?

An approved change removes an employee's account from Support Team. Current application evidence confirms that membership is gone, but the account can still read a West-region report.

Does the successful read mean the removal failed?

It depends on how the account receives permission to read. Removing one membership can interrupt one route while leaving another route in place. To understand the result, we need to follow the actual relationships and the rule that uses them.

## What exactly is connected to what?

An **account** is the record through which a person or another entity uses an external system. A **group** collects members, which can include accounts and, where supported, other groups.

A **membership** connects a member to a group. A **permission** allows an action on a resource, such as reading a particular report.

An account does not receive a permission merely because a relationship can be drawn on a diagram. The application must use that relationship when deciding whether to allow the action.

Let's use one account in a reporting application. Before the approved removal, its **direct memberships** are Support Team and Exception Readers. Direct means the account itself is a member of the group, without passing through another group.

The account is not a direct member of Report Readers.

The application also supports a group-to-group relationship: Support Team is a member of Report Readers. These facts give us two kinds of connection: account-to-group and group-to-group.

The records, policies, changes and results here are hypothetical. Supported reads, correct account ownership and the stated relationships are supplied. Each allowed or denied outcome is a fresh permission decision based on the stated current relationships. No other grant, restriction or separate activation requirement is included.

## How can the account reach a group it did not join directly?

Follow the first connection from the account to Support Team. Then follow Support Team's membership in Report Readers.

That group-to-group relationship is **nested membership**: one group is a member of another.

Under this application's supplied interpretation, the account is an **indirect member** of Report Readers through Support Team. There is a route to Report Readers, but no separate direct account-to-Report Readers membership.

**Transitive membership** means following a chain of membership relationships beyond the first direct connection. A supported chain can have more than one intermediate group.

Why organize access this way? An application can let a team receive a shared set of permissions by making its team group a member of the group carrying those permissions. Each account need not receive another direct membership for that same route. Whether this arrangement actually grants access still depends on the system's rules.

The direction matters. Support Team belongs to Report Readers. That does not mean every member of Report Readers belongs to Support Team. A person could reach the broader group through a different team or a separate direct membership.

You may see the containing group called a parent and the contained group called a child. Before relying on those labels in an export or configuration, check what the field contains. “Groups containing this group” points in the opposite direction from “groups contained by this group.”

## Which rule turns the route into permission?

**Authorization** is the decision about whether an account may perform an action on a resource. **Effective access** is what that account can actually do under the conditions being evaluated.

For this reporting application, the owner supplies these rules:

| Relationship or condition | Effect in this application |
|---|---|
| Membership reaching Report Readers | Permits reading, including through the supported Support Team chain |
| Direct Exception Readers membership | Independently permits reading |
| Account business unit West | Limits either reading route to West-region reports |
| Enabled account and successful sign-in | Required to use either reading route |

The account's business unit is West. An **attribute** is a named piece of information on a record, such as the account's business unit.

**Inherited access**, as used here, is permission received through an indirect membership route that the application honors. Support Team leads to Report Readers, and the application accepts that chain for reading. That is why this account can inherit reading permission without joining Report Readers directly.

Exception Readers supplies another route. It does not depend on Support Team.

These are alternatives, expressed as **OR** logic: either reading route can satisfy the group-based part of the rule. If both exist, removing one still leaves the other.

The remaining conditions use **AND** logic: the account must also be enabled, sign-in must succeed, and the selected report must fall within the West-region boundary. A reading route does not override those requirements.

Neither group permits editing. The word Exception does not make Exception Readers exempt from the region rule.

```text
Route A: indirect reading
  Selected account
      | direct member of
      v
  Support Team
      | group is a member of
      v
  Report Readers
      | application permits
      v
  Read West reports

Route B: independent reading
  Selected account
      | direct member of
      v
  Exception Readers
      | application permits
      v
  Read West reports

Enabled + sign-in + region checks
apply to both routes.
```

Read the membership arrows as “is a member of.” The later arrows show the permission effect of the supplied application rule. They are not SailPoint operations.

Both routes lead to the same selected reading action, subject to the account and region conditions. They are separate ways to satisfy a requirement, rather than two copies of the report or two additional direct memberships in Report Readers.

## Now remove the account's Support Team membership

The approved operation changes one relationship: selected account to Support Team.

Fresh native evidence confirms that this direct membership is absent. **Native** means information or behavior in the external system's context.

The account still directly belongs to Exception Readers. Support Team still exists and remains a member of Report Readers. Other Support Team members retain their relationships. No other membership, policy or account-condition change occurs in this example.

Route A no longer starts from this account. The account cannot use its former Support Team membership to reach Report Readers.

Route B still starts from the account because Exception Readers remains. The account is enabled, sign-in succeeds, and the selected report is in West. The supplied rule therefore allows a fresh read.

The continued read has an explanation consistent with the verified removal. It does not require us to assume the operation failed.

**Provisioning** carries out supported account or access changes. A requirement to remove access, an attempted operation and a confirmed native result are different pieces of evidence. Here, we have confirmation of the selected membership removal, followed by a separate check of the reading outcome.

If the approved requirement was “remove this account from Support Team,” the supplied evidence establishes success.

If the requirement was “eliminate this account's report-reading capability,” the remaining Exception Readers route means that broader outcome has not been achieved. Review that requirement and the remaining access before deciding on another change.

## What changes when a route or condition changes?

Each row below is a separate variation. The account is enabled, sign-in succeeds, its business unit is West, it has no direct Report Readers membership, and no other grants exist.

| Current memberships and attempted action | Result under the supplied rules |
|---|---|
| Support Team and Exception Readers; read West | Allowed through both routes |
| Exception Readers only; read West | Allowed through the independent direct route |
| Support Team only; read West | Allowed through the supported nested route |
| Neither group; read West | Denied because neither reading route exists |
| Both groups; read East | Denied because the resource is outside the West boundary |
| Both groups; edit West | Denied because neither route permits editing |

The answers depend on both the relationships and the application rule. Correct memberships can coexist with a correctly denied action.

This is also why a report saying “has Report Readers” is incomplete for an investigation. Is that a direct membership, an indirectly reached group or simply a displayed access requirement? What action was attempted, through which account, on which report?

## Would another application honor the same chain?

Suppose another application accepts only direct Report Readers membership. Our account belongs only to Support Team, and Support Team still belongs to Report Readers.

The chain exists, but it does not meet that application's direct-only rule. Drawing the same relationship does not make the permission outcome the same.

A denial in that situation need not indicate failed collection or failed provisioning. The proposed access design relies on a relationship the application does not accept for that decision.

There is a real example of this boundary: Microsoft Entra group-based assignment to enterprise applications does not cascade assignment to nested groups. That statement concerns this assignment mechanism. It should not be generalized to every Microsoft resource or group-based permission.

For an integration, identify the decision consuming the membership information. Directory membership, assignment to an application and permission inside that application can be different decisions. Check which one supports nesting.

## How does ISC learn about these relationships?

An **entitlement** is an access right represented in SailPoint Identity Security Cloud (ISC). A source group can be represented as an entitlement without every member holding it directly.

A **source** is ISC's configured representation of a system or collection of account data. Reports Production represents the reporting application directly in this example. A **connector** provides its supported integration for reading data and making supported changes.

An **identity** is ISC's representation of a person or another entity. **Account correlation** matches and associates a collected account with the appropriate identity. The selected account is correctly associated with its owner here. That association identifies whose recorded access we are reviewing; authorization still concerns the account used.

**Aggregation** collects external data into ISC. Account collection can supply membership values; entitlement collection can supply group definitions and supported relationships between them.

A **schema** describes the attributes represented for a record kind and their designated uses. Our supplied account schema has a field named `groups`. Its **Entitlement** designation tells ISC to interpret the values as access information. Its **Multi-Valued** designation allows several group references rather than only one.

An **entitlement type** identifies a supported kind of access object. The native type here is `groups`, and the account field's **Type** setting points to it. The group schema selects `groupKey` for the **Entitlement ID** and `label` for the **Entitlement Name**.

Those selections connect exact native values to their represented group records. For example, `support-team` is the value identifying Support Team. An account membership containing that value points to that group's details in the correct source and type.

This integration supplies a direct-only account list. Before removal, `groups` contains `support-team` and `exception-readers`, not a direct `report-readers` membership.

The group data supplies the other relationship. A field named `parentGroups` lists groups containing the group being described. On Support Team, it contains `report-readers`. This field name and direction belong to the hypothetical supported integration; they are not universal ISC names or parent/child display conventions.

ISC can represent hierarchical entitlement relationships for applicable sources. A group schema's `hierarchyAttribute` setting names the field supplying hierarchy references. In our supplied source, the supported mapping uses `parentGroups` for the stated containing-group references. The source capability, actual identifiers, field direction and supported interpretation must agree.

Adding a field name to a schema does not create a native group relationship or give a connector an unsupported capability.

```text
Collected representation
  Native account + group records
        |
        | supported reads and schema
        v
  ISC membership + hierarchy view

Application authorization
  Account + current relationships
        |
        | application's permission rules
        v
  Action on resource allowed or denied

A represented link is not a new grant.
Reading a link does not change it.
```

The first section shows how supported reads and schema interpretation supply ISC's view. The second shows the application using current relationships and its permission rules to decide an action. These are responsibility boundaries, not a required sequence of backend jobs.

A native relationship can exist even if it was not collected into ISC. An older represented relationship can also remain visible after a native change. Check the observation time and read coverage before treating a view as current evidence.

## Does a displayed group prove a direct membership?

Not always. The answer depends on the read's meaning.

A **direct-only list** contains the account's own group memberships. An **expanded list** also includes groups reached indirectly by following supported relationships.

If an expanded list includes Report Readers, it may be showing the Support Team route. That does not establish a separate direct membership available for removal.

Inspect the native direct relationship and the chain behind the displayed item. A derived relationship is not automatically an independently writable grant.

Likewise, if ISC's collection omitted the native Support Team-to-Report Readers relationship, that omission would leave its explanation incomplete. It would not remove the native relationship or force the application to stop using it.

## Which relationship would a proposed correction change?

Removing an account from Support Team and removing Support Team from Report Readers are different operations.

The account removal affects that account's connection. The group-to-group change affects a shared relationship and can change the route for other Support Team members.

The wider effect of a change is sometimes called its **blast radius**: the people, accounts and capabilities it can affect beyond the selected account. A ticket for one person does not make a shared group change private to that person.

Support Team may also supply other legitimate permissions. Before removing it to interrupt reading, review those permissions and the approved requirement. A correction must account for required access that the proposed change could disturb.

Similarly, adding direct Report Readers membership just to make the screen easier to interpret creates another access path. It needs its own authorization and later removal handling.

An **access profile** bundles related entitlements from one source. An **ISC role** groups access for a business purpose and can contain access profiles or direct entitlements.

These objects express access requirements. They are not the source's group-to-group membership relationship. “Assigned through an ISC role” does not prove native nesting, and changing the native hierarchy does not establish that every ISC requirement has been removed.

Before attempting to remove an indirectly displayed item, establish the supported action and exact relationship it would change. Do not assume one removal command eliminates every path supporting that item.

## What if the current result still does not fit?

Start with the account, action and resource. “The person still has access” can hide a different account or a report governed by different rules.

Trace current direct memberships, group-to-group relationships, the policy using them and resource restrictions. Check whether the evidence covers all those links, rather than just group names.

If every known route is reportedly absent but reading still succeeds, keep the unanswered question visible. The evidence may omit another grant or describe a different observation time.

A **session** is an ongoing signed-in interaction. The application may be evaluating information obtained for that session rather than the membership report you just inspected. Establish how it obtains and refreshes that information. An older session does not prove a new grant exists, and there is no universal waiting period to prescribe.

The supplied reading checks in our example deliberately use the stated current relationships. They do not rely on old-session behavior or an invented refresh delay.

A denied action also needs interpretation. The wrong account, resource restriction or a direct-only policy can explain denial while the collected membership is correct. A relationship defect, collection gap and policy outcome require different corrections.

## Follow the path before choosing the answer

Each question supplies an independent variation on the relationships and rules.

### 1. Report Readers is absent from the direct list

The account directly holds Support Team only. Support Team belongs to Report Readers. The application honors that nested route, and the enabled-account, sign-in and West conditions are satisfied.

Must another direct Report Readers membership be added?

**Reasoning:** No. The supplied nested route already satisfies the reading rule. Absence from the direct list is expected. Another grant would create an additional access path that needs authorization and removal handling.

### 2. One removal is confirmed

Current native evidence confirms removal of Support Team from the account. Exception Readers remains, and a fresh West read succeeds.

Does the read prove that the selected operation failed?

**Reasoning:** No. Exception Readers supplies the remaining route. The selected removal succeeded, while a broader requirement to eliminate reading would remain unmet. Review that requirement and the legitimate remaining access before another change.

### 3. The application accepts direct membership only

Another application's rule accepts only direct Report Readers membership. The account has Support Team only, with the same nested relationship. No other grant exists.

Does the chain establish authorization?

**Reasoning:** No. Its direct-only rule does not accept the indirect path. Review the approved design and supported assignment path rather than assuming the hierarchy proves a provisioning failure.

### 4. Someone follows the arrows backward

Support Team is a member of Report Readers. Another account belongs directly to Report Readers but not Support Team. No reverse or additional relationship is supplied.

Does that make the account a Support Team member?

**Reasoning:** No. Membership in the containing group does not establish membership in its contained groups. Follow the actual member-to-containing-group direction.

### 5. A person's ticket leads to a shared change

Many accounts belong to Support Team. A proposed correction removes Support Team from Report Readers instead of changing the selected account's membership.

Is the proposed effect limited to that account?

**Reasoning:** No. The shared relationship can support other members' access. Review affected accounts, permissions and requirements before authorization. The ticket's origin does not limit the operation's reach.

### 6. An expanded list includes Report Readers

A report explicitly combines direct and indirect memberships. It includes Report Readers, but the account's native direct-membership record has not been inspected.

Does that prove a direct Report Readers grant exists to remove?

**Reasoning:** No. The item may be derived from the nested route. Inspect the direct relationship and supporting chain under the read contract before treating it as independently writable.

### 7. ISC did not collect the hierarchy

The native Support Team-to-Report Readers relationship and the application's nested reading rule are verified. ISC has account and group records, but the selected collection omitted group-to-group relationships.

Must the application deny reading because ISC lacks the link?

**Reasoning:** No. Missing representation does not remove the native path. The application can still use it. Investigate supported hierarchy collection and interpretation instead of adding unnecessary access.

### 8. Both routes exist, but the report is East

The account has both reading routes, its business unit is West, and a fresh attempt to read an East report is denied.

Should aggregation be repaired to force an allowed result?

**Reasoning:** No. The denial follows the region condition. Either reading route can satisfy the grant part, but neither bypasses the resource boundary. Establish a legitimate new requirement before changing data or access.

## Try a native role as the second route

A document-system account directly belongs to Project Reviewers. That group belongs to Document Readers. The account also holds a separately assigned native document-reader role.

A **native application role** is an access object or assignment defined by that application. It is different from an ISC role organizing business access.

The application owner confirms that either the supported nested route or the separate native role permits reading the selected project. No other grants exist, and account, sign-in and resource conditions are satisfied.

An approved operation removes the account from Project Reviewers. Fresh native evidence confirms removal, yet a fresh reading check succeeds.

Explain the remaining path and whether the selected removal failed.

**Reasoning:** The separate native role still permits reading. The group membership can be successfully removed while that independent role assignment retains the capability. The two routes depend on different relationships.

Now consider a separate variation: the native role is absent, the document application accepts only direct Document Readers membership, and the account has none. In this variation, the account still directly belongs to Project Reviewers, which belongs to Document Readers.

Would that group chain establish reading?

**Reasoning:** No. The changed policy does not honor the nested route, and neither qualifying direct membership nor the separate role exists. The chain cannot provide an authorization rule the application does not use.

An explanation of inherited access needs the relationship, its direction and the policy accepting it. An explanation of removal then needs the exact relationship changed, the paths remaining and evidence that the approved outcome was reached.
