# Which entitlements actually belong in the same bundle?

An employee needs to read purchase orders and prepare drafts for their assigned business unit. Their application account already permits reading, but cannot create drafts. Approving orders and exporting the complete supplier register are outside the employee's work.

You find five access items in the application. Three are needed for drafting. The other two permit approval and broad export.

Putting all five into one package would make the package larger without making it more suitable. The useful question is which combination gives these recipients the complete capability they are authorized to use.

The application rules, source configuration and observations below are hypothetical. They supply the conditions for reasoning; they are not a connector specification or real tenant results.

## Start with what the work actually requires

An **account** is the external record through which a person or another entity uses a system. A **permission** allows an action on a resource, such as reading a purchase order.

The application can use different access objects when deciding whether to permit that action. A **group** collects members, such as accounts; membership can give those accounts permissions. A **native role** is a role defined inside the application. A **license** gives an account the right to use a product or feature set under the application's licensing model.

In SailPoint Identity Security Cloud (ISC), an **entitlement** represents source access, such as one of these group, role or license assignments.

A **source** is ISC's configured representation of a system or collection of account data. The source here is Orders Production. Its **connector** supplies the supported integration for reading data and, where supported and configured, making changes.

For this example, the integration supports collecting and assigning all five candidate items. That support must be established for the actual source; calling an item a license does not establish that a connector can assign it.

The responsible business contact confirms that draft preparation is the required work. The application contact confirms what each native item currently permits:

| Candidate access item | Capability and decision for this task |
|---|---|
| Order Readers group | Read orders within the account's assigned business unit. Required. |
| Draft Creator native role | Create drafts when Readers and the editor license are also present. Required. |
| Draft Editor license | Enable the editing feature needed for drafts. Required with the group and native role. |
| Order Approver native role | Approve orders. Excluded because approval is a separate responsibility. |
| Full Supplier Export group | Export the complete supplier register. Excluded because draft preparation does not require it. |

Notice how the requirement and the application rules answer different questions. The business contact establishes what work is authorized. The native permission rules establish which access combination can perform it. You need both to justify the package.

Names alone cannot supply that evidence. If Draft Creator also permitted approval, a description saying “drafts only” would not remove its approval capability. You would need a different native access design or an explicitly justified change to the work requirement.

## Give the complete capability a maintained name

An **access profile** is a named bundle of related entitlements from one source. The proposed profile, **Order draft preparation**, references Readers, Draft Creator and Draft Editor from Orders Production.

A **reference** points to another record. Including an entitlement reference does not copy its native permission definition or create a replacement access object.

Why include all three?

Readers lets the account inspect the orders it will work on. Draft Creator permits the draft action, subject to the application's other conditions. Draft Editor enables the editing feature. Removing any one leaves this particular task incomplete.

That is the reason they belong together. Sharing a source makes them eligible for this profile; the required outcome makes them a useful package.

A person who only reads completed orders has a different need. Giving them the drafting package would include unnecessary capability and a license they do not need.

**Least privilege** means giving the access required for authorized work without unrelated capability. Here, it excludes approval and full export while retaining the dependencies that make drafting possible. Counting the fewest entries is not the goal if the resulting package cannot do the approved work.

An **enabled** profile is available for supported access-model use; that status does not select recipients. It must contain at least one entitlement. If one verified native role supplied the whole required capability, including the editing feature, without unwanted rights, a one-entitlement profile could be appropriate. Our supplied native role does not do that, so all three relationships remain necessary.

## Check exactly which records you are grouping

An **entitlement type** identifies a kind of source access object. This source exposes `groups`, `roles` and `licenses`. These are supported example types, not a standard list every connector must provide.

The three required native objects deliberately share the text key `2201`:

- In `groups`, it identifies Order Readers.
- In `roles`, it identifies Draft Creator.
- In `licenses`, it identifies Draft Editor.

The repeated value helps expose a mistake: the value alone does not identify the access without its type and source context.

ISC has a separate identifier for each represented entitlement record. The profile points to those distinct records. It does not point to one group and interpret that group as a role and license as well.

```text
Profile: Order draft preparation
Source: Orders Production
|
+-- reader entitlement record
|   type groups, native value "2201"
|
+-- creator entitlement record
|   type roles, native value "2201"
|
+-- editor entitlement record
    type licenses, native value "2201"

Three represented entitlement records.
Each has its own ISC identifier.
```

Each branch means “this profile references this represented entitlement.” The branches are relationships, not source writes or a required execution order.

If you select the reader record three times, that does not substitute for selecting the creator and editor records. A count of three selected entries is not proof of the intended contents. Likewise, selecting similarly named Test-source records would not provide the Production rights.

An **account attribute** is a field describing an account. A **schema** specifies the fields and how ISC interprets them. In the supplied account data, the relevant fields can contain `groups = ["2201"]`, `roles = ["2201"]` and `licenses = ["2201"]`.

For this example, each field is marked as entitlement-bearing, supports multiple values, and is linked to its matching entitlement type. Its collected values match that type's native entitlement identifiers. This established linkage explains which represented access each account field describes.

The profile does not invent these mappings. It also does not infer the role and license from a group value with the same spelling.

When reviewing a saved profile, expand the selected entitlement details and verify the source, type and exact represented record. The friendly name helps you read the selection; the record behind it establishes what was selected.

The entitlement list contains entitlements, not other access profiles. For a wider structure that combines profiles, use the appropriate ISC access-model object.

## Follow the intended package into one account

An **identity** is ISC's representation of a person or another entity. The employee's application account is correctly associated with their identity and is their only account on Orders Production.

The account is enabled, sign-in succeeds and its assigned business unit is West. It initially holds Readers only. It has no approval or full-export access through any other route.

An **access request** asks for an access item for a recipient. For this example, Order draft preparation is enabled, offered through a supported direct request configuration, and requires manager approval. No automatic assignment supplies it to this employee.

The request is for the defined profile package. The configured manager reviews whether the employee should receive the drafting capability, including its license.

**Identity processing** evaluates an identity and relevant identity/access-model information. The saved definition has been applied through the relevant processing before this request. Saving the definition and applying it to identities are separate from delivering its native access.

**Provisioning** carries out account or access changes. Once the configured request approval is complete, the supported delivery path must establish the profile's required access on the selected account.

In this supplied successful result, the account keeps its existing Readers membership and receives Draft Creator and Draft Editor. Current native records confirm all three on that same account. An application check permits preparing a draft for a West order. Approval and full supplier export remain unavailable.

The package is **standing access**: it does not require a separate just-in-time activation before these entitlements are delivered. The observations do not establish how many connector calls were used or a universal delivery time.

The basic chain is now connected: the approved work determines the combination, the profile identifies its entitlement records, the recipient mechanism establishes who should receive it, and provisioning delivers the required native relationships. Native evidence and an application check establish what works.

Creating the package alone would not have selected the employee or delivered their missing rights.

## The application still decides whether an action is allowed

The profile groups access for management. The application's permission rules determine whether the account can act on a particular order.

Under the supplied rules, drafting requires the following conditions together:

```text
Selected application's account
|
+-- Order Readers membership
+-- Draft Creator native role
+-- Draft Editor license
|
All three required for drafting
|
+ enabled account
+ successful sign-in
+ order in assigned business unit
|
v
Draft creation permitted
```

The vertical path combines required conditions. It does not show the order in which ISC provisions the items or a universal ISC authorization algorithm.

The license enables editing, but does not by itself grant draft creation. The creator role supplies the draft action, but does not supply the other required relationships. The account must also be enabled, able to sign in, and working within its assigned unit.

For the West account, a West draft succeeds while an East draft is denied. That result agrees with the approved business-unit boundary. Giving broader access to make East succeed would change the requirement, rather than repair the supplied package.

Now change the account condition. Even with all three items present, a disabled account cannot satisfy this application's stated conditions. That is why investigating “the profile is assigned, but drafting fails” needs the exact account, action and resource, rather than only the profile name.

## A required combination is different from a choice

Suppose the application offers East Editor and West Editor licenses. Each draft preparer needs only the license for their assigned region.

An ordinary profile containing both licenses defines a package containing both. The list does not express “choose one according to this employee's region.”

You need separate appropriate packages or a supported higher-level selection design that actually chooses the right access. Adding both to the profile and expecting an approval step to discard one does not express that design.

The same applies to reader-only use. A requester asking for the drafting profile is asking for its defined combination, not choosing an arbitrary subset from its entitlement list.

Distinguish the question before changing the design: are these dependencies required together, or alternatives required by different recipients? The answer determines whether one package is suitable.

## Grouping does not create native inheritance

A **native hierarchy** is a relationship inside the source, such as one group belonging to another. The application may derive permissions through such relationships according to its own rules.

The profile's references do not create that hierarchy or make a specialized-sounding role include every simpler right.

Our application contact has confirmed that Draft Creator does not automatically grant Readers or Draft Editor. Omitting either would leave an unmet condition. Only evidence of a different native permission contract would justify reducing the package.

Where a real source supports native entitlement relationships, their representation and effect need to be verified. Do not use the ISC grouping as evidence that those relationships exist.

## A suitable bundle can still fail during delivery

Consider a separate delivery variation. The same package is approved for the same account. Current native evidence shows Readers and Draft Creator, but no Draft Editor license. Drafting within West is denied.

The absence establishes an incomplete required set. It does not, by itself, establish why the license is missing.

Now add the relevant operation evidence: the license-assignment event for this account reports rejection because no assignable editor seats remain. The reported error identifies a capacity problem for that attempt. It does not mean the profile should include Order Approver or that another approval will create a license.

After an approved capacity allocation and the appropriate supported recovery, fresh native evidence confirms the editor license on this account. Drafting within West succeeds; approval and broad export remain unavailable. No other relevant account, permission or application-policy change occurred in this variation.

The corrected outcome supports the specific explanation. It does not establish automatic license purchasing, a retry schedule or successful delivery to other accounts.

A named bundle also does not make delivery an all-or-nothing transaction. Partial results need inspection; do not assume earlier successful changes were undone when the license assignment failed.

**Aggregation** reads external data into ISC. A collected view describes what was read, while a delivery activity describes an attempted or reported change. Neither replaces current native evidence when you need to confirm the resulting access.

| Evidence | What you can conclude |
|---|---|
| Saved references to the intended reader, creator and editor records | The definition matches the chosen package; this does not establish a recipient or native delivery |
| Current Readers and Creator, with Editor absent | The required set is incomplete; the absence alone does not identify a capacity or credential defect |
| Rejected license-assignment event for the exact account | That attempt failed for its recorded reason; check its relevance and the current state |
| All three native relationships, enabled account and successful sign-in | Those conditions are satisfied; the selected order's unit still matters |
| West drafting succeeds, East drafting is denied | The observations agree with the supplied resource boundary |
| An unwanted reference disappears from the definition | The package changed; existing holders' native access needs separate investigation |

An **integration credential** is the account or authorization used by the connector for source operations. A rejected change could instead identify missing credential permission. Use the actual error to choose the approved correction; the same absent license is compatible with more than one cause.

## Keep the source boundary separate from the job boundary

Suppose the purchasing job also requires document upload from Documents Production.

That entitlement belongs to another source. A common job does not make it eligible for the Orders Production profile. Keep the source-specific components separate.

An **ISC role** groups related access for a broader business purpose and can include profiles or entitlements across sources. It can provide the wider structure where appropriate.

The word role now refers to two different objects. Draft Creator is an application's native role, represented as an entitlement. The ISC role groups access-model components. The shared word does not make them interchangeable.

One source can also represent groups that govern more than one business application. Two application names do not necessarily mean two sources. Related directory groups can belong in one profile if they share the source and support a justified common task.

Do not redesign integration boundaries simply to make a preferred bundle fit. Connector support, represented data, account relationships and operational responsibility need a coherent design of their own.

## Think about how the need ends

An **access profile owner** is responsible for the maintained package. That responsibility includes explaining why its contents remain appropriate; it does not establish that the owner holds the access.

Suppose an employee needs reading throughout the year but drafting only during a short assignment. Combining everything into an ongoing grant would fail to express when the editing need ends.

You can model the continuing reading need separately and use an appropriate drafting package for the temporary work. Another supported design may fit the actual assignment and removal mechanisms better. Judge the design by both the grant and the intended end state.

An **assignment origin** is the mechanism through which access became associated with an identity, such as a profile request or a role. The operation and origin matter when access ends. Two packages sharing Readers do not establish that every removal operation will preserve Readers.

Different approval responsibilities also matter. Combining drafting and approval to save a request means every recipient is asking for both capabilities. Separate eligible populations or decision requirements are reasons to examine the package boundary.

## Repair the definition and examine existing holders

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements.

In an independent variation, an older Order draft preparation profile mistakenly included Order Approver. The selected employee received it through a direct request for the profile, not through a role or lifecycle requirement.

Removing Approver from the definition corrects that package. Under this direct-profile scenario, the earlier entitlement can remain individually held. Relevant processing applies the configuration change; it does not turn this reference deletion into a native revocation.

The employee's current approval access therefore needs its own investigation and approved removal path. Confirm why they hold it now and whether another legitimate grant exists, then verify the required native outcome.

Do not generalize this example into “profile edits never remove native access.” For an enabled ISC role, configured **role access removal propagation** can turn specified access-definition removals, including removal from an associated profile, into deprovisioning, meaning removal of native access. This setting governs supported role-driven removal behavior. The origin, role state and configuration must be checked.

Adding an entitlement also needs origin-aware review. **Detection** recognizes a profile from an existing collected full entitlement set; it does not itself create the original native grants.

A current role or lifecycle requirement and a profile held from detection or a past direct profile request do not have identical addition behavior. For the standing access discussed here, additions enforce current role/lifecycle requirements through provisioning; they do not automatically top up detection-only or previously requested profile holders. Those holders need the revised full set to retain the profile when evaluated.

Before changing a shared definition, identify affected identities and origins, apply the relevant configuration, inspect delivery where required, and check resulting native access. One representative account does not establish every holder's outcome.

## Work through the grouping decisions

### 1. All five items share a source

Draft preparers need Readers, Draft Creator and Draft Editor. Approver and Full Supplier Export are also on Orders Production.

Does the common source justify including all five?

**Reasoning:** No. It establishes the source boundary, not the work need. Match each actual capability to the authorized task. Keep approval and broad export outside this package and evaluate their requirements separately.

### 2. The three native values are identical

The reader group, creator role and editor license each use text key `2201`, within their different native types.

Would selecting the group record supply all three?

**Reasoning:** No. Source, type and represented record distinguish them. The profile needs the intended three entitlement references. Repeating one group reference, or counting entries without inspecting them, does not establish the role or license assignment.

### 3. Both regional licenses are listed

A worker needs only West Editor. The profile contains West Editor and East Editor; no supported selector chooses one.

Does the profile express an either/or choice?

**Reasoning:** No. Both are in the defined package. Establish the appropriate regional package or actual supported selection mechanism. Do not expect a reviewer or provisioning operation to invent that choice from the employee's need.

### 4. Another source supports the same job

The document-upload entitlement belongs to Documents Production, while the drafting profile uses Orders Production.

Can the upload entitlement become a fourth item in that profile?

**Reasoning:** No. Represent the other source's access separately and consider an ISC role for the wider requirement. The native Draft Creator role is an entitlement, not that broader ISC role.

### 5. The creator name sounds sufficient

The confirmed native contract requires Readers and Editor as separate assignments. No native hierarchy or automatic dependency grant supplies them.

Can you omit Readers because the creator sounds more capable?

**Reasoning:** No. Names do not establish inheritance. Retain the required relationships unless verified native permission evidence supports a different complete design.

### 6. All three are present, but East fails

The West account holds all three items, is enabled and signs in successfully. West drafting succeeds; East drafting is denied.

Does East denial prove a missing entitlement?

**Reasoning:** No. The result agrees with the supplied unit restriction. Inspect account and resource scope before calling it a provisioning defect. Permitting every unit would broaden the requirement.

### 7. Approver remains after a definition repair

A holder received the old profile through a direct profile request, with no role or lifecycle requirement. Approver is removed from the definition, and relevant processing applies the change. Current native evidence still shows Approver.

Does that contradict the definition correction?

**Reasoning:** No. In this scenario the removed entitlement can remain independently held. Investigate current need and grant history, use any separately approved removal path and verify native access. Role-driven propagation is a different conditional mechanism; the supplied case does not establish it.

### 8. The required rights are split across accounts

In a separate variation, the person has two application accounts. Their ordinary account has Readers only. Their administrative account has Creator and Editor. The native rule evaluates each account's own rights.

Can the ordinary account draft because the person has all three somewhere?

**Reasoning:** No. The ordinary account lacks two required relationships. Rights on the administrative account do not satisfy its per-account rule. Inspect the intended account and selection evidence. This conclusion concerns native capability, not an assumed ISC detection algorithm across accounts.

## Try grouping access across two applications

A directory source represents two groups. Assigned Stock Viewers permits viewing assigned stock in a stock application. Dispatch Draft Submitters permits submitting drafts in a shipping application. The confirmed application rules use these directory memberships, and both capabilities are required for one approved dispatch task.

The same directory also contains Global Administrators, which the task does not require. A separate shipping API source represents a scheduling entitlement.

Which rights belong in the directory profile, and what evidence would establish the result?

**Reasoning:** The two required directory groups share one source and support the same task, so they can form a coherent profile there. Two business applications do not by themselves require two ISC sources.

Global Administrators fails the work-need test even though it shares the source. The scheduling entitlement belongs to another source; represent it separately and consider the appropriate broader role if the job needs it.

Then inspect the intended account's memberships and verify the required behavior in each application. Correct directory memberships do not independently prove that both applications have consumed the expected information.

For any proposed addition, explain the same connection: which exact source access does this reference represent, why does this recipient need it with the other items, and what evidence will establish the intended capability?
