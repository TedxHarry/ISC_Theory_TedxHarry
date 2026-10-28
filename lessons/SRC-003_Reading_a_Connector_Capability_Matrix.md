# The connector supports it. What can this source actually do?

A project needs ISC to create purchasing accounts, give people Buyer access, remove that access when their work changes, and disable accounts when they leave.

The selected connector lists provisioning support. That sounds promising, but what does it establish about those four requirements?

**Provisioning** means carrying out supported account or access changes. Creating an account, adding access, removing access and disabling an account are different changes. A connector may offer the operation types for all four while a particular source can perform only some of them.

To understand why, start with one successful change. Then we can examine what has to be true before the project promises the rest.

## What must actually change?

An **identity** is ISC's representation of a person or another entity. An **account** is that person's record in an external system. A person can already have an ISC identity while still needing an account in the purchasing application.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration behaviour. The external application that is read or changed is the **target system**.

An **entitlement** is an assignable access right. Suppose Buyer access means membership in an existing target group identified as `buyers`. A **group** is an access object in the application; **membership** is the relationship saying that a particular account belongs to it.

Giving someone Buyer access may therefore require two effects: create the correct account if it is missing, then assign that account to the existing group. Creating the group itself is a different requirement.

An **operation** is a specific action on a particular kind of object. Create Account acts on an account. Add Entitlement can change an account's membership. Reading the group describes something that already exists.

That distinction matters before you open any feature table. You need to know whether the requirement concerns an account, an access object, a field on a record or a relationship between records.

## Follow a successful account and access change

Consider a source named `Purchasing-Production`. The person already has an ISC identity, but initially has no purchasing account. There is one intended account to create, with no ambiguous existing-account selection.

For this example, the selected integration is the **Web Services SaaS connector**. An **API**, or application programming interface, is a supported way for software to exchange requests and results. This connector provides operation types that you configure to call the target application's API.

**SaaS** means software operated as a hosted service. Here the connector executes through a cloud **runtime**, the environment where its integration work runs. That explains where the connector work takes place; it doesn't establish what the target application allows.

Assume the source has its required provisioning configuration, the application offers supported create and membership-add operations, and all required creation values are valid. The following results and application conditions are supplied examples, rather than real tenant observations.

An approved Buyer assignment starts the supported access-assignment flow. Where that flow needs a missing account, ISC uses the source's configured Create Account values. For example, an application might require a username, location and account type. Those requirements come from that application's design; they aren't universal ISC fields for every connector.

The configured operation sends the target a request to create the intended account. In this example the target creates `buyer-user`. The membership operation then assigns the existing `buyers` group to that account. Target checks confirm both the account and its membership.

Who is making those requests? The connector uses an **integration credential**, the proof it presents to the target as its technical caller. Here that caller is `svc-purchasing`. It is separate from `buyer-user`, the recipient account being created.

**Authentication** establishes the caller's accepted credential context. **Authorization** determines which actions that caller may perform. For this successful example, the caller is accepted and has the required create and membership-add authority for the intended account.

Now consider how ISC learns the resulting account details. **Aggregation** collects account or entitlement information into ISC. A later account read that includes this account and its membership can bring those facts into ISC's representation.

```text
[ISC: approved Buyer assignment]
                |
                v
[Target: create buyer-user account]
                |
                v
[Target: add buyer-user to buyers]
                |
       later supported account read
                |
                v
[ISC: account and membership collected]
```

The upper arrows follow the supplied successful changes; the lower arrows follow later collection. They don't specify a universal schedule or a private ISC execution sequence.

Creating the account and assigning membership remain distinct effects. This diagram doesn't promise an all-or-nothing transaction. If creation succeeds but membership addition fails, the account may exist without Buyer access. Investigate and recover that partial result rather than assuming creation was automatically reversed.

**Account correlation** associates a collected account with the appropriate ISC identity using the configured matching arrangement. It helps place the account under the correct person. It doesn't create an application API or grant the caller permission.

You can now distinguish three questions: what change was intended, what the target actually changed, and what ISC has subsequently collected. Aggregation reports available information; it wasn't the operation that granted Buyer.

## Read a capability matrix as an operation and an object

A **capability matrix** compares supported operations across object types or integration choices. Some connector guides use a Supported Features list instead of a table.

Read the row and column together. “Create” under accounts doesn't establish “Create” under groups. A check mark for reading data doesn't establish permission to change it.

The Active Directory connector provides a useful real example. Its User Features table separates accounts, contacts and service accounts. Enable/Disable is supported in the accounts column, while contacts are marked N/A. Moving the check mark across those columns would change the documented claim.

Read the legend too. Supported, conditional, unavailable and not applicable have different meanings. An unexplained blank is something to resolve; it doesn't give you a capability you can safely promise.

Notes are part of the claim. A feature may require activation, a particular component or a supported environment. Check any relevant target version, edition and subscription conditions.

First make sure you're reading the guide for the connector actually selected in ISC. IdentityIQ is a different SailPoint product. Its guide, an ISC connector guide and a similarly named SaaS connector guide aren't interchangeable. Similar names can conceal different runtime arrangements and feature coverage.

The useful question is specific: “Does this selected connector support this operation on this object, under our conditions?”

## What reading support gives you

**Account aggregation** reads account information. That can include account fields and membership references, depending on the connector and configured scope.

An **attribute** is a named value, such as department or enabled status. A **schema** defines the fields and object information the source represents. The schema helps ISC interpret a returned value; it doesn't itself make an external field writable.

**Entitlement aggregation** collects information about access objects, such as a group's identifier and description. The account read might tell ISC that `buyer-user` belongs to `buyers`; the entitlement read might explain what `buyers` represents.

Both readings are useful. Neither reading creates the group, adds the membership or removes it.

The Delimited File connector illustrates the boundary. Its documented features include a custom account schema and loading accounts and entitlements. Importing those records supplies information to ISC. It doesn't establish an automatic write connection back to the application that produced the file.

A file can also contain an enabled or disabled status that ISC represents under the applicable configuration. That is a reported condition. To establish that an integration disabled the external account, you need evidence of that change separately.

Some connectors offer additional read features. **Delta aggregation** collects supported changes since an earlier collection, subject to the connector's conditions. **Single-account retrieval** reads a particular account where supported. Account aggregation support alone doesn't establish either capability.

A targeted read can help obtain fresher evidence after a change. It is still a read operation.

## What each write operation is meant to change

Operation names become clearer when you connect each one to its intended effect.

**Create Account** establishes a new target account using required inputs. **Update Account** changes supported fields on an existing account. A successful department update doesn't establish that an account identifier, calculated field or application-managed value can also be changed.

**Add Entitlement** assigns an existing right to an account. **Remove Entitlement** removes an assignment. Removing `buyers` membership from `buyer-user` leaves the group itself available for other accounts. Deleting that group would affect a different object and requires separate support.

**Disable Account** places an account into the target's supported disabled condition. **Enable Account** places it into a supported enabled condition. Check both; evidence for one doesn't prove the other.

Disabling may leave stored memberships intact. Conversely, removing Buyer can leave an enabled account with other access. The correct action depends on the required outcome.

**Delete Account** removes the target account through the supported deletion operation. It isn't another name for disabling the account or removing one permission. Its success alone doesn't prove that every session or related record elsewhere has ended.

**Unlock Account** addresses a supported lock condition. **Change Password** changes a credential through the applicable password operation. Account creation and ordinary attribute updates don't establish either of these capabilities.

**Deprovisioning** means removing or reducing access. Its implementation might involve membership removal, account disabling or another appropriate supported action. It doesn't universally mean Delete Account.

“Handle a leaver” therefore needs a more precise design: which accounts and access should change, into which conditions, and how will you establish those results?

## A connector operation still needs a target implementation

The Web Services SaaS connector offers account and entitlement reads and several write operation types. The target API must provide the behaviour that the configured operation will call.

An **endpoint** is an API address used for an operation. **HTTP** is the request-and-response protocol used here. The configuration needs such details as the destination, request method, inputs and interpretation of the response.

Selecting Remove Entitlement doesn't supply a membership-removal API that the target lacks. Likewise, selecting Create Account doesn't fill in the application's required fields.

Consider the wider review of `Purchasing-Production`. The following is an example project matrix with supplied conditions and results, rather than a published feature claim about a particular purchasing product.

| Required operation | Connector operation type available | Evidence for this source and target |
|---|---|---|
| Read accounts | Yes | Configured; expected in-scope accounts collected |
| Read group details | Yes | Configured; existing buyers group represented |
| Create Account | Yes | Required inputs configured; controlled example creates the correct account |
| Update Account | Yes | Department update configured and verified; other fields unverified |
| Add Entitlement | Yes | Existing buyers membership configured and verified |
| Remove Entitlement | Yes | Target has no supported membership-removal API; no automatic removal path configured |
| Disable Account | Yes | Endpoint configured; target denies the caller's disable authority |
| Delete Account | Yes | No approved target delete path configured or tested |

The middle column describes connector support. The last column describes how far this project has established a usable operation.

For removal, the missing part is target behaviour available to the integration. For disabling, a path exists but the target refuses the caller's attempted action. For deletion, configuration and outcome evidence haven't been established.

Those are different findings. Repeating a successful account read won't supply the missing API, grant disable authority or verify deletion.

## Check the conditions behind “ready”

For an operation to meet the project requirement, several conditions must hold together.

```text
[Required effect on the right object]
                  |
[Selected connector supports operation]
                  |
[Target behaviour and runtime available]
                  |
[Source configured with usable inputs]
                  |
[Caller has required authority and scope]
                  |
[Result checked against intended effect]
```

The connecting lines mean “also establish this condition.” This is a human review of dependencies, not a claim that ISC internally performs these checks in this order.

The runtime path includes the components and connections needed to reach the intended system. Some integrations require customer-hosted components; others use a cloud runtime.

For example, Active Directory documentation identifies IQService requirements for provisioning and password work. **IQService** is a Windows service used for supported Windows-specific integration work. A feature check mark doesn't install the service or establish its secure connectivity.

That AD requirement doesn't add IQService to the purchasing example's selected SaaS path. Follow the requirements of the actual connector and operation.

Authority also needs an operation and scope. A target can accept `svc-purchasing` for reads and creation while refusing account disabling. One accepted credential doesn't mean every operation is authorized on every account.

The appropriate correction is the permission needed for the approved action and population. More privilege cannot create a missing target API, and a blanket administrator grant shouldn't replace investigation of the required authority.

Inputs remain important even when support, connectivity and authority are correct. If creation requires a location and the request has none, trace where that value should come from and why it is missing. A rejection caused by absent input doesn't establish that Create Account is unsupported.

Finally, inspect the result. A configuration that appears complete is still a configuration. Controlled evidence must show what happened to the intended object under the conditions you plan to support.

## Source configuration has its own responsibility

A connector's product capability and a source's enabled behaviour are separate facts.

Current source setup distinguishes read-only connections from supported **deep-governance** configurations that can change access. **Quick Compliance** sources are read-only and do not provide provisioning.

For supported sources, the documented conversion to deep-governance provisioning cannot be undone. It is a consequential configuration decision, rather than a temporary troubleshooting switch. Enabling it doesn't implement operations missing from the target.

An API response listing a source's provisioning feature tells you about configuration. You still need to establish the actual operation, its inputs, the caller's authority and its outcome.

Other ISC configuration objects have different responsibilities. An **authoritative source** supplies accounts used to establish identities through an **identity profile**, which configures those identities and their mapped values. That identity-origin responsibility doesn't upgrade the connector's write support.

An **access profile** bundles entitlements from one source. A **role** groups access for a business purpose. These can participate in access-assignment designs, but they don't grant the technical caller privileges in the external application.

An **access request** asks for specified access for a person. Its approval authorizes the access under the configured business process. The target still evaluates the caller attempting the actual change.

That is why a valid business decision can exist alongside an unsuccessful target operation.

## Remove one membership without removing the account

Suppose the person now needs the purchasing account for other work, but must lose Buyer.

The required effect is to remove `buyers` membership from `buyer-user`. Recreating the account wouldn't do that. Disabling the entire account would affect more usability than required. In this supplied application design, updating department doesn't remove membership either.

Our project matrix says there is no supported target API for membership removal. The application's administrator can remove it through the application's administrative interface, but the configured connector cannot perform that same action automatically.

The project needs an explicitly designed and approved alternative fulfillment route, or the requirement remains unresolved.

**Manual fulfillment** means a responsible person carries out the target change. A supported ticket integration can coordinate work through a service-management system. Creating a ticket doesn't change the group membership, and closing one isn't independent measurement of the result.

Don't assume a failed direct operation automatically creates the appropriate manual task. The route, responsible owner, timing and verification need an agreed design and applicable configuration.

After an authorized administrator removes the membership, useful evidence identifies the account, group, actual target result and relevant time. A later supported read that includes this account and membership information can update ISC's representation.

The same dependency applies to a **certification**, an access review in which a reviewer decides whether access should remain. A decision to revoke Buyer establishes what should change. It still needs an effective fulfillment path and evidence that the intended change occurred.

## Diagnose a denied disable operation separately

Now examine the Disable Account row as a separate requirement.

Here the target offers a supported endpoint and the source operation is configured. The supplied response is HTTP `403`, with a target message explicitly stating that `svc-purchasing` lacks the disable privilege for `buyer-user`. Target inspection shows that the account remains enabled.

Together, those facts support an authority diagnosis for this attempt. They don't establish that the connector lacks Disable Account support.

A bare `403` elsewhere wouldn't identify this exact cause. It means the server understood the request but refused it; the response and surrounding evidence are needed to explain why. Here we have the caller, account, destination, explicit target message and unchanged target condition.

The responsible owners can assess a narrowly scoped privilege correction and controlled retesting. Changing the credential or its permissions doesn't itself replay the earlier operation or complete the disable requirement.

Before recovery, confirm that disabling is still authorized, inspect the current account state and use the supported recovery path. Successful earlier changes don't need blind replay. In particular, don't create a duplicate account to retry a later membership or disable operation.

The distinction guides the next action: missing target capability needs a supported design alternative; missing authority needs an appropriate permission assessment; invalid input needs a value correction; an untested operation needs evidence.

## Compare the screen with the effect you intended

ISC's **user interface**, or UI, can display collected accounts and access. Account Activity and provisioning details provide information about attempted changes and their reported results.

When investigating an activity, establish the action, recipient, source, stage, time and any error details. Then compare that activity with the intended target condition.

An account-creation success doesn't establish membership-add success. An old collected account view doesn't disprove a more recent target change. A task marked complete records an assertion; consider what evidence supports it.

These records answer related questions at different stages. Keep the target account and required effect consistent as you move between them.

For this project, account and group reads, creation, the tested department update and Buyer assignment have supporting evidence. Automatic membership removal has a target-path gap. Disabling was denied. Deletion is unconfigured and untested.

That doesn't invalidate every read use case. A deliberately scoped read-only integration can provide valuable visibility. A disconnected file-fed design can use applicable ISC manual provisioning tasks rather than direct connector writes; that remains an accountable fulfillment design.

But if automatic removal is a launch requirement, successful onboarding hasn't completed that scope.

Keep an operation-level record of the intended object and effect, selected connector, documented conditions, target behaviour, runtime, configuration, inputs, authority and outcome evidence. Record unresolved gaps and their owners too. That record gives you something concrete to reassess when a credential, population or application changes.

## Test your reasoning against changed evidence

### 1. Existing groups appear in ISC

An integration reads account memberships and group descriptions. The project now needs to create a new target group. Does the successful read establish group-creation support?

**Worked reasoning:** It establishes reading those objects under the tested scope. Group creation is a write on a different object. Check explicit group-creation support, target behaviour and configuration. Even the ability to assign an existing group wouldn't prove the ability to create one.

### 2. Creation works, but disabling is denied

An account was created successfully. A disable attempt using the same caller receives an explicit target permission error and leaves the account enabled. Should the team mark disabling unsupported?

**Worked reasoning:** First distinguish documented support, configured implementation and effective authority. In the supplied case, the implemented disable path lacks the necessary authority. Creation success doesn't establish disable permission. Reading the account again can help inspect its condition, but won't grant the missing privilege.

### 3. The connector offers removal, but the target has no API

Remove Entitlement is available as a connector operation type. The target has no supported membership-removal API, and no alternative automatic route has been implemented. Can selecting the operation complete revocation?

**Worked reasoning:** No. Configuration needs a real supported target behaviour to invoke. Agree an approved alternative fulfillment route or leave the requirement open. Business approval doesn't supply an endpoint, and a failed write doesn't guarantee automatic conversion into the correct manual task.

### 4. A file reports a disabled account

An imported file contains a disabled-status value, which ISC represents. No external change evidence is supplied. Did importing the file disable the original account?

**Worked reasoning:** That evidence shows a reported value being represented in ISC. It doesn't establish that file ingestion performed a target write. Check actual target state and account-changing activity separately.

### 5. One account field updates successfully

Department updates work. A new requirement asks for changes to an application-managed account identifier. Does Update Account support settle this?

**Worked reasoning:** Establish whether that particular field is writable through the selected connector and target API, under the required conditions and authority. Department evidence covers department. Identifier changes also need their own relationship and impact review because other records and integrations may refer to that identifier.

### 6. A feature is documented but untested

The correct guide lists Enable Account. Nobody has inspected or exercised this source's enable configuration and recovery behaviour. Is it unsupported or ready?

**Worked reasoning:** Neither follows. Product support is documented; project readiness is unverified. Inspect target behaviour and source configuration, then obtain appropriate controlled evidence. Keep supported, configured and verified as separate findings.

### 7. The reviewer revoked Buyer, but membership remains

A certification reviewer decides to revoke Buyer. Target observation still shows `buyers` on `buyer-user`, and no successful removal evidence exists. Has the requirement been met?

**Worked reasoning:** The decision establishes what should happen. Follow the configured fulfillment route, identify its accountable owner, resolve the delivery gap and verify the membership result. The decision doesn't prove completed removal, account deletion, session termination or revocation of unrelated access.

## Apply the same review to a payroll proposal

A payroll project says: “The connector loads accounts, so we can use it for account creation, salary-field updates, disabling, password reset and deletion. The successful connection test proves all of it.”

Before approving that scope, what would you need to establish?

**Worked reasoning:** Split the promise into specific operations, objects and fields. Check the selected ISC connector's guide, notes, supported target environment and required activation or components.

For each proposed write, establish a supported target behaviour, applicable source configuration, usable inputs and appropriate authority. A connection test proves the behaviour that test exercises. It doesn't replace evidence for every write.

Salary changes and deletion require explicit scope and authorization. Check where passwords are actually managed before assuming a payroll account is the correct place for a reset.

Record each capability as documented, configured, verified, conditional or unresolved, with the relevant evidence and conditions. If a required effect lacks a supported implementation, agree an accountable alternative or keep the requirement open.

You can then give the project owner a precise explanation: “The connector offers these operations. This source has these operations configured. We have verified these effects against this target under these conditions. These remaining requirements still need a supported route or outcome evidence.”
