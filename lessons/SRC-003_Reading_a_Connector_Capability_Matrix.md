# The connector supports it. What can this source actually do?

A project wants SailPoint Identity Security Cloud (ISC) to create purchasing accounts, grant Buyer access, remove that access when work changes, and disable accounts when people leave.

The connector guide lists provisioning support. Can the team promise all four?

**Provisioning** carries out supported account or access changes. Those four requirements need different operations. A connector can offer them while a particular source has only some configured and working.

A useful answer identifies what the connector supports, what this source has configured, and which target results have actually been verified.

## Identify the object and the change it needs

An **identity** is ISC's representation of a person or another entity. An **account** is a record for a user in an external system. A person can already have an ISC identity while still needing a purchasing account.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the integration software and supported behavior. The external application receiving a read or change is the **target**.

An **entitlement** is an access right ISC represents from a source. Suppose Buyer access means membership in an existing target group called `buyers`.

A **group** is an access object in the application. **Membership** is the relationship connecting an account to that group. The group can exist before the new account does.

Giving this person Buyer access can therefore require creating their account, then assigning it to the existing group. Creating another group would be a different change.

An **operation** is a particular action on a particular kind of object. Create Account acts on an account. Add Entitlement can change its membership. Reading the group obtains information about the access object.

Before interpreting a feature list, ask what must change: the account, a field on it, a group object, or a relationship such as membership.

## Follow one account and membership change through to its result

Consider the source `Purchasing-Production`. The person already has an ISC identity but no purchasing account. There is one intended account to create, with no ambiguous existing-account selection.

The selected integration is the **Web Services SaaS connector**. An **application programming interface**, or **API**, lets software exchange supported requests and results. This connector supplies operation types you configure to call the target application's API.

**SaaS**, software as a service, means software operated by its provider as a hosted service. Here, the connector runs in a cloud **runtime**, the environment where its integration work executes. That tells you where the connector runs; the target still determines which operations it offers.

Assume the source has the required provisioning configuration, the target offers supported account-create and membership-add operations, and the required creation values are valid.

The connector uses an **integration credential**, the proof it presents as its technical caller. Here, that caller is `svc-purchasing`. The new recipient account will be `buyer-user`. The integration account performs the operation; the new account is the one on which Buyer access is assigned.

**Authentication** establishes the accepted caller context. **Authorization** determines which actions that caller may perform. In this successful example, the target accepts the caller and permits creation and membership addition for the intended account.

An approved Buyer assignment starts the supported assignment flow. Because the person needs a missing target account, ISC uses the source's configured Create Account values.

The application might require a username, location and account type. These values tell it what account to create. They are example application requirements, rather than fields that every connector universally requires.

The configured create operation sends those inputs to the target. The target creates `buyer-user`. The membership operation then adds that account to the existing `buyers` group. Supplied target checks confirm both effects.

**Aggregation** collects account or entitlement information into ISC. A later supported read that includes this account and its membership can represent those facts in ISC.

```text
Approved Buyer assignment in ISC
                |
                v
Target creates buyer-user
                |
                v
Target adds buyer-user to buyers
                |
      later supported account read
                |
                v
ISC collects account and membership

Creation, assignment and observation
have separate results.
```

These are hypothetical successful conditions and observations, not real tenant results. The arrows trace the supplied changes and later collection; they don't prescribe a universal schedule or private ISC execution sequence.

Notice that creating the account and adding membership have separate effects. If creation succeeds but membership addition fails, the account can exist without Buyer access. Don't assume the failed assignment automatically reversed creation. Recovery needs to account for the account already present.

**Account correlation** associates a collected account with the appropriate ISC identity using configured matching. It connects the represented account to its owner. It doesn't implement a target API or grant the integration extra privileges.

You now have separate evidence questions: what was intended, what the target changed, and what ISC subsequently collected. Aggregation observed the membership; it wasn't the operation that granted it.

## Read the operation and object together in the matrix

A **capability matrix** compares supported operations across object types or integration choices. A guide may use a Supported Features list instead.

A check mark answers the question defined by both its row and its column. “Create” under accounts doesn't establish “Create” under groups. Read support doesn't establish write support.

For a real example, the Active Directory (AD) connector's User Features table distinguishes accounts, contacts and service accounts. Its Enable/Disable row includes these entries; N/A means not applicable:

| Operation | Accounts | Contacts |
|---|---|---|
| Enable/Disable | Supported | N/A |

Contacts are a different directory object category. Moving the account check mark into the contact column would make a claim the table doesn't support.

Read the legend and accompanying notes. Supported, conditional, unavailable and not applicable mean different things. Resolve an unexplained blank rather than treating it as permission to promise a feature.

A feature can depend on activation, a component or a supported environment. Check relevant target versions, editions and subscription conditions where the guide specifies them.

Also confirm that the guide describes the selected connector. **IdentityIQ** is a different SailPoint product from ISC. Its connector guide, an ISC guide and a similarly named SaaS connector guide aren't interchangeable. Similar names can conceal different runtime requirements and feature coverage.

Turn the project's question into something testable: “Does this selected connector support this operation on this kind of object, under our conditions?”

## Understand what a successful read gives you

**Account aggregation** reads account information. Depending on the connector and scope, that includes fields and membership references.

An **attribute** is a named value, such as department or enabled status. A **schema** defines the fields and object information the source represents. It helps ISC interpret returned data; defining a field doesn't make the external field writable.

**Entitlement aggregation** reads information about access objects. An account read can report that `buyer-user` belongs to `buyers`; an entitlement read can supply that group's identifier and description. Those readings describe the account relationship and the group itself.

Neither read creates the group or changes its membership.

The **Delimited File connector** illustrates this distinction. Its documented features include a custom account schema and loading accounts and entitlements. Importing a file supplies information for ISC to represent. It doesn't provide automatic writes back to the application that produced the file.

The file can also report an enabled or disabled condition that ISC represents under the applicable configuration. Reading that reported condition is different from performing a target disable operation.

Some connectors support more specific reads. **Delta aggregation** collects supported changes since an earlier collection, under that connector's conditions. **Single-account retrieval** reads one particular account where supported.

Ordinary account-aggregation support doesn't establish either additional capability. A targeted read may provide fresher evidence after a change, but it remains a read.

## Match each write operation to its actual effect

**Create Account** establishes a new target account using required inputs. **Update Account** changes supported fields on an existing account.

A working department update tells you something about department. It doesn't establish that an identifier, calculated field or application-managed value is also writable.

**Add Entitlement** assigns an existing right to an account. **Remove Entitlement** removes an assignment. Removing `buyers` from `buyer-user` leaves the group available for other accounts. Deleting the group itself changes another object and needs separate support.

**Disable Account** places an account into the target's supported disabled condition. **Enable Account** places it into a supported enabled condition. Check both rather than inferring either from the other.

Disabling can leave stored memberships intact. Removing Buyer can leave an enabled account with other access. Choose the operation according to what the person should still be able to do.

**Delete Account** removes the target account through the supported deletion operation. It differs from disabling and from removing one membership. Its success doesn't establish that every session or related record in other systems ended.

**Unlock Account** addresses a supported lock condition. **Change Password** changes a credential through the applicable password operation. Creation or ordinary field-update support doesn't establish either one.

**Deprovisioning** removes or reduces access. A design might implement it through membership removal, disabling or another supported action. It doesn't universally mean account deletion.

“Handle a leaver” therefore needs an account-and-access outcome: which records should change, which conditions they should enter, and what evidence will confirm those changes.

## Connect the offered operation to a real target implementation

The Web Services SaaS connector offers account and entitlement reads and several write operation types. To use one, the target API needs behavior the configured operation can invoke.

An **endpoint** is an API address for an operation. **HTTP** is the request-and-response protocol used here. Configuration connects the intended operation to details such as destination, request method, input values and response interpretation.

Selecting Remove Entitlement doesn't invent a membership-removal API the target lacks. Selecting Create Account doesn't supply missing application-required values.

The wider review of Purchasing-Production gives these hypothetical findings:

| Required operation | Connector operation type available | Evidence for this source and target |
|---|---|---|
| Read accounts | Yes | Configured; expected in-scope accounts collected |
| Read group details | Yes | Configured; existing buyers group represented |
| Create Account | Yes | Required inputs configured; controlled example creates the intended account |
| Update Account | Yes | Department update verified; other fields unverified |
| Add Entitlement | Yes | Existing buyers membership configured and verified |
| Remove Entitlement | Yes | Target has no supported membership-removal API; no automatic removal path configured |
| Disable Account | Yes | Endpoint configured; target denies the caller's disable authority |
| Delete Account | Yes | No approved target delete path configured or tested |

This is a project evidence matrix, not a feature claim about a named purchasing product.

The middle column describes connector support. The last column describes what this project has established. “Yes” in the middle doesn't turn every last-column entry into a working operation.

Removal has a target capability gap. Disabling has an implemented path but an explicit authority refusal. Deletion has no approved configured or tested path. They need different next actions.

A successful account read won't supply the missing API, grant disable privilege or verify deletion.

## Check the conditions that must hold together

A usable operation depends on more than its feature entry:

```text
Operation readiness
  |
  +-- Intended effect and correct object
  +-- Selected connector support
  +-- Target behavior and runtime path
  +-- Configuration and usable inputs
  +-- Caller authority for the scope
  +-- Verified intended result

These are review dependencies,
not an internal execution sequence.
```

Each branch is something to establish. The diagram is a human review of dependencies, rather than an assertion about the order of ISC's internal checks.

The runtime path includes the components and connections needed to reach the intended target. Some integrations use customer-hosted components; others use a cloud runtime.

For example, Active Directory documentation identifies **IQService** requirements for provisioning and password work. IQService is a Windows service used for supported Windows-specific integration work. A Windows service can run without an interactive desktop session.

The feature table doesn't install that component or establish its secure connectivity. Those AD requirements also don't add IQService to the purchasing source's selected SaaS path. Follow the actual connector and operation.

Authority needs an operation and a **scope**, the accounts or resources where that operation is allowed. The target can allow `svc-purchasing` to read and create accounts while refusing its disable attempt. One accepted credential doesn't authorize every action on every account.

Assess the permission needed for the approved action and population. More privilege can't supply an API the application doesn't offer. A blanket administrator grant doesn't replace finding the actual required authority.

Inputs matter as well. Suppose account creation requires location, but the request has no location value. Trace where that value should come from and why it's absent. A rejection for missing input doesn't establish that Create Account is unsupported.

Finally, compare the operation with its intended effect. Inspecting a complete-looking configuration establishes its settings. Controlled evidence must establish the outcome on the intended object under the conditions the project will support.

## Check the source's enabled behavior too

Product support and source configuration are separate facts.

Source setup distinguishes read-only connections from supported **deep-governance** configurations capable of changing access. **Quick Compliance** sources are read-only and don't provide provisioning.

For supported sources, the documented conversion from read-only to deep-governance provisioning cannot be undone. Treat it as a consequential configuration decision. It isn't a temporary troubleshooting switch, and it doesn't implement target operations that don't exist.

An API response listing the source's provisioning feature describes configuration. It doesn't replace evidence of the specific operation, input, caller authority and target outcome.

Other ISC objects have different responsibilities. An **authoritative source** supplies accounts used to establish identities through an **identity profile**, which configures identity values and related settings. That identity-origin role doesn't upgrade connector writes.

An **access profile** bundles entitlements from one source. A **role** groups access for a business purpose. They can take part in access-assignment designs, but don't grant the technical integration privileges in the target.

An **access request** asks for specified access for a person. Its approval records the business decision under the configured process. The target still checks the caller attempting the actual change.

This is why an approved assignment can be followed by an unsuccessful operation.

## Remove Buyer while preserving the account

Suppose the person still needs the purchasing account for other work but must lose Buyer.

The required effect is to remove `buyers` membership from `buyer-user`. Creating another account wouldn't accomplish that. Disabling the entire account would restrict more than the stated requirement. In this supplied application design, updating department doesn't remove membership either.

The project matrix says the target has no supported membership-removal API. An application administrator can remove membership through its administrative interface, but our configured connector cannot perform that same action automatically.

The project needs an approved alternative fulfillment route, or removal remains unresolved.

**Manual fulfillment** means an accountable person performs the external change. A supported ticket integration can coordinate work through a service-management system. Creating a ticket starts tracked work; it doesn't remove membership. Closing it isn't independent measurement of the account's current condition.

A failed direct operation doesn't guarantee creation of the appropriate manual task. Establish the route, configuration, responsible owner, timing and verification.

After an authorized administrator removes Buyer, retain evidence of the intended account, group, target result and relevant time. A later supported read including the account and membership data can update ISC's representation.

A **certification** is an access review in which a reviewer decides whether access should remain. A revoke decision identifies what should be removed. After the required review and sign-off conditions are met, removal still needs an effective fulfillment path and evidence of the actual membership change.

## Diagnose the denied disable operation on its own evidence

The Disable Account row describes a different requirement.

The target offers a supported endpoint and the source operation is configured. Its supplied HTTP `403` response explicitly states that `svc-purchasing` lacks the disable privilege for `buyer-user`. Target inspection shows the account still enabled.

Together, the destination, caller, account, explicit message and current condition support an authority diagnosis for this attempt. They don't establish that Disable Account is absent from the connector.

A bare `403` in another incident would tell you that the server understood the request and refused it. The number alone wouldn't identify this exact reason. Read the response and related evidence.

The responsible owners can assess an appropriately scoped permission correction and controlled retesting. Changing a credential or its authority repairs a prerequisite; it doesn't replay the earlier operation or establish that the account is now disabled.

Before recovery, confirm that disabling is still authorized, inspect current state and use supported recovery. Account for earlier successful work. Don't create a duplicate account to recover a later membership or disable failure.

The missing part determines the response: absent target capability needs a supported design alternative; denied authority needs a permission assessment; invalid input needs a value correction; an untested operation needs evidence.

## Compare displayed information with the intended target effect

ISC's **user interface**, or **UI**, can display collected accounts and access. The **frontend** is the browser interaction. The **backend** performs the relevant hosted processing behind it. Displaying source data and executing a supported target change are different kinds of work.

**Account Activity** records tracked account work. Provisioning details can describe attempted changes and reported results. Check the action, recipient, source, stage, time and error details, then match them to the intended target condition.

Creation success doesn't establish membership-add success. An older collected view can coexist with a later target change. A completed task records an assertion whose supporting evidence still needs interpretation.

Keep the account and required effect consistent as you move between records.

The purchasing findings are now precise. Reads, creation, the tested department update and Buyer assignment have supporting evidence. Automatic removal has a missing target path. Disabling was denied. Deletion remains unconfigured and untested.

That doesn't invalidate a deliberately scoped read-only project. It can still provide useful visibility. A disconnected file-fed design can also use applicable ISC manual provisioning tasks as an accountable delivery arrangement; that isn't direct file writeback.

If automatic removal is required for launch, however, successful onboarding hasn't completed that requirement.

Maintain an operation-level record of the intended effect and object, selected connector, documented conditions, target behavior, runtime, configuration, inputs, authority and outcome evidence. Record unresolved gaps and their owners. Those details make reassessment possible when the application, credential or population changes.

## Test your reasoning against changed evidence

### 1. Existing groups appear in ISC

An integration reads account memberships and group descriptions. The project now needs to create a new target group.

Does the successful read establish group-creation support?

**Worked reasoning:** It establishes those reads under their tested scope. Creating the group is a different write on an access object. Verify explicit support, target behavior and configuration. Assigning an existing group also wouldn't prove that a new group can be created.

### 2. Creation works, but disabling is denied

Account creation succeeds. A disable attempt with the same caller receives an explicit target permission error and leaves the account enabled.

Should the team mark disabling unsupported?

**Worked reasoning:** Separate documented support, configured implementation and effective authority. In the supplied case, the implemented disable path lacks permission. Creation success doesn't establish disable authority. Reading the condition again can help observe it, but won't grant that privilege.

### 3. The connector offers removal, but the target has no API

Remove Entitlement is available as a connector operation type. The target has no supported membership-removal API, and no alternative automatic route is implemented.

Can selecting the operation complete revocation?

**Worked reasoning:** No. There must be actual supported target behavior to invoke. Agree an approved alternative fulfillment route or keep the requirement unresolved. Approval doesn't supply an endpoint, and failure doesn't guarantee the right manual task appears.

### 4. A file reports a disabled account

An imported file contains a disabled-status value that ISC represents. No external change evidence is supplied.

Did importing the file disable the original account?

**Worked reasoning:** The evidence shows a reported value being represented. It doesn't establish a target write by file ingestion. Inspect the actual target condition and any account-changing work separately.

### 5. One account field updates successfully

Department updates work. A new requirement asks for changes to an application-managed account identifier.

Does Update Account support settle this?

**Worked reasoning:** Verify that specific field's supported write behavior, conditions and authority. Department evidence covers department. Identifier changes also need a relationship and impact review because other records and integrations can depend on the identifier.

### 6. A documented feature hasn't been tested

The correct guide lists Enable Account. Nobody has inspected or exercised this source's enable configuration and recovery behavior.

Is the feature unsupported or ready?

**Worked reasoning:** Neither conclusion follows. Product support is documented; source readiness remains unverified. Inspect target behavior and configuration, then obtain suitable controlled evidence. Keep documented, configured and verified as separate findings.

### 7. A reviewer revokes Buyer, but membership remains

A certification reviewer decides to revoke Buyer. The target still shows `buyers` on `buyer-user`, and no successful removal evidence exists.

Has the requirement been met?

**Worked reasoning:** The decision establishes what should happen. Follow the configured fulfillment route, identify the responsible owner, resolve the delivery gap and verify membership removal. The decision doesn't prove removal, account deletion, ended sessions or revocation of unrelated access.

## Apply the same review to a payroll proposal

A payroll project says: “The connector loads accounts, so it can create accounts, update salary fields, disable accounts, reset passwords and delete accounts. The successful connection test proves all of it.”

What would you need before accepting that scope?

**Worked reasoning:** Split the promise into specific operations, objects and fields. Check the selected ISC connector's guide, conditions, supported target environment and required activation or components.

For each proposed write, establish target behavior, source configuration, usable inputs and appropriate authority. A connection test exercises its own configured behavior; it doesn't verify every write.

Salary changes and deletion need explicit scope and authorization. For a password reset, establish which system actually manages the credential before assuming the payroll account is the right destination.

Record each finding as documented, configured, verified, conditional or unresolved, with its supporting conditions and evidence. A required effect without a supported implementation needs an accountable alternative or remains open.

You can then explain the project accurately: “The connector offers these operations. This source has these operations configured. We verified these target effects under these conditions. These remaining requirements still need a supported route or outcome evidence.”
