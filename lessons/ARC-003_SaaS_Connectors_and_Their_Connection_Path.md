# SaaS connectors: where does the connection work happen?

You can open a cloud application's website and still have a connection problem between that application and SailPoint Identity Security Cloud, or **ISC**.

Your browser is making one connection. The software managing accounts makes another. To understand the second connection, we need to locate the software that makes the call and the interface it needs to reach.

## Separate the application's hosting from the connector's hosting

**Software as a service**, or **SaaS**, means software operated as a hosted service by its provider. A project-management application can be SaaS because its vendor runs it.

A **connector** is integration software. It provides supported ways to read information from a system and, where supported, make changes there.

Those descriptions answer different questions. SaaS can describe the business application people use. A **SaaS connector** describes an ISC connection path: the connector work runs in SailPoint's hosted environment without a customer-deployed appliance for that connection.

The **runtime** is the environment in which that connector software executes. When you ask where an account-management call comes from, the runtime is the place to locate.

Your organization's hosted ISC environment is its **tenant**. A **source** in that tenant holds configuration and represented account information for a particular system or account dataset. The selected connector supplies the supported behavior; the source supplies the settings for this connection.

There is also a VA-based path. A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine that performs applicable integration work. A **virtual machine** is a software-defined computer using resources supplied by a hosting platform. A **VA cluster** groups appliances for the sources associated with it.

For that path, applicable connector work runs in the VA environment. For the SaaS path, it runs in the supported hosted runtime.

One tenant can use both paths for different sources. Where an application has more than one supported connector option, compare the options' execution paths, authentication and features.

A cloud-hosted application can still have a VA-based connection. Its website being available on the internet does not remove the requirements of the configured connector.

## Follow the runtime to the interface it uses

An **application programming interface**, or **API**, lets software request information or operations from another system.

People use the application's browser interface. A connector can use a different account-management API, with its own address and access requirements.

The system receiving the connector's request is the **target system**.

For API-based integrations, the paths look like this:

```text
SaaS connector
  SailPoint-hosted connector runtime
    |
    | API requests and responses
    v
  External application's API

VA-based connector: API example
  ISC hosted service
    |
    | Work and results
    v
  Customer VA cluster: connector work
    |
    | API requests and responses
    v
  External application's API

Lines show interactions and returned data.
They do not show individual packets.
```

In the first path, the hosted connector calls the external API. In the second, the VA performs the applicable connector work.

The VA initiates its required communication toward SailPoint's cloud services and receives work in response. The downward work arrow does not mean ISC starts an unsolicited inbound connection to the appliance.

The lower path is an API example. Other VA connectors use other documented interfaces; the diagram does not require every target to expose the same API.

Removing the VA from a supported SaaS path removes that customer-deployed component dependency. The external API still needs to be reachable, accept the configured caller and permit the requested operation.

## Give the connection an actual destination

Consider a hypothetical project-management system with two separate **workspaces**, meaning separately identified areas of that application.

`Delivery-Prod` is used for live work. `Delivery-Test` is used for testing.

The ISC source is named **Projects-Production**. Its intended destination is Delivery-Prod. An existing account there, `project-reader`, needs permission to view project records.

An **identity** is ISC's record representing a person. An **account** is a record in a particular external system, with ISC keeping its collected representation.

Here, the production account is already associated with the intended identity. **Account correlation** establishes that association by comparing configured account and identity information. It identifies whose account it is; the association does not itself grant access.

An **entitlement** is an access item represented from a source, such as a group membership or permission. In this example, `project.view` permits viewing project records and excludes editing.

Assume the selected SaaS connector supports reading these accounts and adding or removing project.view through an API reachable from its hosted runtime.

These are supplied example capabilities and permission meanings. They do not describe a particular available project-management connector.

## Identify who makes the call and who receives access

project-reader is the account that needs business access.

The integration uses `isc-project-prod`, a registered **application client**. The registration gives software an identity recognized by this example application. The connector uses that software identity to make the external call.

An ISC administrator configures the source. The administrator, calling integration and receiving account have different jobs and permissions.

A **credential** is information used to establish the caller's accepted identity or access context. An **API token** is a credential the external service accepts for software access.

Here, the connection uses its configured project-system API token. It does not use project-reader's password.

**Authentication** establishes the accepted caller or credential context. **Authorization** determines what that caller may do to a particular resource.

The project system can accept the integration token, allow account reads and deny access-assignment changes. Accepting the credential and allowing the update are separate checks.

An ISC API token belongs to another boundary: calling ISC itself. It does not automatically authorize calls to the project-management system.

Store the external credential through the selected connector's supported settings. Keep tokens out of screenshots and support conversations. The administrator's tenant permissions do not supply a missing external integration privilege.

## Give the connector the right instructions

The connector implements operations. The source configuration tells it which destination and settings to use.

An **endpoint** is the address the integration calls. Reaching the right application can also require the correct workspace, organization identifier, region or path. A valid call to Delivery-Test would still miss the production requirement.

The source also needs to interpret returned account information.

An **account schema** describes account fields and their relevant meanings. A **field**, also called an **attribute**, is a named piece of information. The schema designates which field supplies the account's identifying value.

The **account identifier** distinguishes an account within its source context. In this example, project-reader identifies the intended production account.

An employee number would be a separate person-related value. Equal text in two unrelated fields does not replace the configured account-to-person comparison.

Keep the settings connected to their purposes:

| Question | Example setting | What it enables |
|---|---|---|
| Which external environment? | Production endpoint and Delivery-Prod workspace | Calls address the intended live environment. |
| Which integration identity? | Registered application client isc-project-prod | The external service recognizes the software caller. |
| Which credential? | API token in the supported secret setting | The connection supplies its accepted credential. |
| Which authority? | Account reads and required access-assignment changes | The caller can perform the necessary operations on the intended resources. |
| How are account records interpreted? | Applicable schema and designated account identifier | Returned fields represent the intended accounts. |
| Which operations are implemented? | Supported reads and entitlement additions/removals | The connector can express the required work. |

Each setting has a job. The schema interprets account data; network configuration provides reachability; external permissions authorize operations.

The source's display name is an ISC label. Renaming it Projects-Production does not change an endpoint, select Delivery-Prod or replace a test credential.

## A read brings account information into ISC

**Aggregation** collects account or entitlement information from a source into ISC.

Suppose an authorized on-demand action or configured schedule starts account aggregation for Projects-Production. Opening an account record collected earlier does not start that new collection by itself.

The hosted connector uses the configured endpoint, Delivery-Prod workspace and integration credential to request account data.

The project system checks the call and returns the records the integration may read. The connector interprets the response using its supported behavior and applicable schema. ISC can then represent the collected accounts and access.

The actual accounts remain in the project system. That system continues enforcing their permissions. Collection brings information into ISC; it does not move the application there or instruct it to grant access.

The amount returned also matters.

**Pagination** means returning results in pages. A **continuation marker** tells the caller how to request more results. If the first response includes that marker, one page is not the whole intended collection.

Filters and API permissions can also restrict the returned population. To establish collection coverage, check the intended accounts, allowed visibility, filtering and the connector's handling of later pages.

A successful response establishes that particular read. The actual integration determines page sizes and handling; one response alone does not establish complete collection.

## A change sends instructions to the external system

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source.

Here, **View projects** contains only project.view from Projects-Production and is available through the permitted request process.

For this trace, the recipient does not already hold that profile or permission. The request identifies the intended identity and its correctly selected existing production account, project-reader.

The configured review approves the request. The source is configured for the supported update, with no account creation or additional access dependency needed.

**Provisioning** carries out supported account or access changes. The required change here is adding project.view to that account.

ISC prepares the work for the identified source and account. Connector work executes in the hosted SaaS runtime and calls the production API using the configured integration identity.

The project system checks whether the integration may perform the assignment on that resource. Under these successful conditions, it accepts and applies the update.

The connector returns the result for ISC's operation tracking. The intended production account now holds project.view.

Compare that change with the read:

```text
READ: obtain account information
  External account: project-reader
    |
    | Data through SaaS connector
    v
  ISC collected account representation

CHANGE: add approved access
  ISC supported provisioning work
    |
    | SaaS connector calls production API
    v
  External account: project-reader
    |
    | Target permits and applies update
    v
  Account holds project.view

Read and change are separate operations.
The change assumes a successful update.
```

The arrows describe two kinds of work. They are not a mandatory read-change cycle or a promise that every write immediately triggers aggregation.

The review allowed the recipient to receive access. API authorization allowed the integration to make the change. The resulting assignment establishes what the target account holds.

Removing project.view has a different intended effect. It needs its own supported operation for the identified account, appropriate authority and evidence of the target result.

Deciding that access should end is the business decision. Removing it is the external change. The runtime's location does not decide whether the person still needs access.

## Connect the ISC page to the work behind it

The **front end** is the interface you use. Your browser displays ISC pages and sends authorized actions to the service.

The subsequent connector execution is **back-end work**. Your browser is not the runtime making that project-system call.

An account page shows information represented in ISC. It can continue showing an earlier collection while a later external call fails.

A provisioning activity view describes tracked work: the available source, recipient, action, progress, result and errors. That is evidence about an operation, rather than a continuous view of every external call.

Suppose a current project-system check confirms project.view on project-reader, while the ISC account page still shows the earlier collection.

Compare the operation evidence, actual target assignment and relevant collection or refresh behavior. Refreshing information means updating ISC's represented information through the applicable mechanism. Establish that behavior before issuing another grant just to make an old view change.

There is another distinction after delivery. The permission assignment, a later collected observation and a successful business action answer different questions.

A person can hold the entitlement while an application licence, sign-in restriction or business-data rule prevents the intended action. Check the layer responsible for the reported problem.

| Observation | What it establishes | What you still need to establish |
|---|---|---|
| Administrator opens the application's website | That browser session reached the human interface. | Hosted runtime's API path and integration authority. |
| Source connection test succeeds | The connector's implemented checks passed at that time. | Correct destination and required read/write coverage. |
| Account aggregation completes as reported | The reported collection finished. | Intended population, filters, identifiers and relevant data. |
| View projects review approves | Business review allowed the assignment. | Actual delivery and target-account state. |
| Target explicitly denies the operation's permission | Authorization failed in the supplied operation context. | Correct caller/destination, required privilege and affected work. |
| Target confirms the intended entitlement on the account | The assignment exists when checked. | Freshness of ISC's view and the intended business action. |

Choose the observation that answers your question. These rows are not a prescribed troubleshooting order. A connection test covers what that connector implements at the time; it does not certify every account, resource or future call.

## Different authentication methods use different credentials

The project example uses the separately stated API token. Other connectors can use a dedicated **service account**, an account for software rather than a person's daily login, or a registered application client with another supported method.

**OAuth 2.0** is an authorization framework for obtaining or using limited API access. An **access token** is the credential presented for the authorized API access.

For a connector using an applicable OAuth method, a **client ID** identifies the registered application. A **client secret** is a secret credential used in supported client-authentication flows.

The client ID tells the authorization service which application is involved. The identifier alone is not a password.

The resulting access token has granted **scopes**, which limit the API access it authorizes. Effective authority can also depend on external roles, allowed resources and the user context behind the token.

**Consent** is approval for the application to use specified access under that authorization arrangement. The required consent and caller context depend on the supported method.

This explains why seeing a write-related scope does not establish permission to update every workspace or account. The intended resource must fit the rest of the external authorization too.

Where the method supports a **refresh token**, that credential lets the integration obtain another access token, such as when the current one expires.

The access token is used for the permitted API call. The refresh token is used to obtain another access token. A client secret, where required, authenticates the application under its supported method. These credentials have different jobs.

Not every connector receives refresh tokens or renews access this way. The Projects-Production API-token example does not switch to an OAuth refresh flow when its token is rejected.

## Someone still maintains the external connection

SailPoint operates the hosted connector runtime. Your organization still manages the connection design and the external integration setup it controls, including the intended caller, approved privileges, credentials and allowed resources.

Consider **credential rotation**, replacing a credential.

The application owner creates a new API token and revokes the old one. Projects-Production still stores the old token. Creating the replacement externally has not changed the source setting.

Update the secret through the supported procedure, protect it and validate the affected operations. Accepted authentication after that correction establishes a repaired prerequisite. Investigate earlier failed reads and writes separately, and confirm that required write authority remains.

Network restrictions need the same attention to the actual caller.

An **allowlist** permits only specified callers or network origins. The application may allow your laptop while refusing calls from the hosted connector.

Establish the failed call's origin and context using current supported guidance. Guessing network addresses or removing every restriction does not establish a suitable connection design.

A management API available only through the organization's private network does not become reachable because you select a SaaS connector. The supported hosted path must actually reach it.

The public browser sign-in page can have different addresses, restrictions and credentials from that API.

## Partial reads and missing responses need different reasoning

A **rate limit** restricts API use under the target's rules. **Throttling** means the target limits or refuses work when those limits are reached.

Suppose a paginated read receives a throttling response before collection finishes. The response identifies a request-rate or capacity boundary in this example.

The missing later results are not evidence that those accounts were deleted or their owners left. Inspect the attempted collection, intended scope, API restrictions and documented connector handling.

Use the supported recovery procedure for that operation. Retry behavior is not universal, and adding a VA does not automatically increase the external service's API allowance.

A **timeout** means the expected response did not arrive within the applicable waiting period. For a change, the missing response leaves a different question: did the target already apply it?

Suppose the target added project.view but its response was lost. Inspect current target state and available application audit/activity evidence before repeating the change.

**Reconciliation** here means establishing how the recorded attempt relates to the actual target state, then using the appropriate supported handling. A timeout alone establishes neither no effect nor automatic reversal.

Repairing a credential or connection makes a prerequisite available again. The failed work still needs its own result and target verification.

## Check the precise operation the connector supports

SaaS runtime location tells you where the work executes. It does not identify every operation available.

SailPoint offers read-only SaaS configurations as well as configurations with deeper access-management capability. Collection-only visibility does not include provisioning merely because the connector is hosted.

Even a write-capable connector has operation and account-type boundaries. Support for creating an account does not establish support for every group assignment, disable action or password operation.

For example, the Salesforce SaaS connector's documented enable/disable support excludes portal and partner users. The account category changes whether that operation is supported.

Check the current connector documentation, target prerequisites and applicable feature activation for the specific operation. Connector support, source settings, valid inputs, external authority and required licensing must fit together.

Giving the integration unrestricted administrator privileges cannot supply an operation the connector does not implement.

## Moving a source changes more than the machine making the call

SailPoint documents VA-to-SaaS migration for listed eligible sources. Check that eligibility first; there is no universal conversion switch.

The supported process prepares a **draft**, proposed configuration awaiting application to the live source. The live source continues operating while that draft is prepared.

Encrypted connection values must be entered again for the new path. Retaining other settings does not transfer the secrets automatically.

Coordinate live and draft editing. Publishing the draft can overwrite changes made to the live source during migration.

Applying the migration is permanent and cannot be reverted through that migration process. A successful draft connection test checks its implemented scope; it is not an undo mechanism or comprehensive operation test.

The account schema needs review too.

An attribute's **type** describes the kind of value expected, such as text or a **Boolean**, meaning true or false.

The documented migration merges the existing schema with the SaaS connector's default schema. If a common attribute has the same name but a different type, the SaaS schema's type is used.

A **dependency** is something another configuration or operation relies on. A **mapping** specifies how a value is populated.

Identity mappings, account correlation and provisioning configuration can depend on these fields and types. If a calculation expects text but the resulting schema expects a Boolean, check the comparison or calculation against that new input.

The field name remaining the same does not establish equivalent behavior. The schema rule alone also does not tell you how every dependent calculation will respond.

Review destination, authentication, operation support, account interpretation and scheduling before applying the migration.

A **time zone** specifies how a local clock time relates to a common time reference. The same displayed clock time in two zones can represent different real moments.

An **access review** asks reviewers to decide whether access should remain. VA cluster and SaaS connection settings can use different time-zone contexts, affecting collection schedules and access-review due dates. Check that those times still mean what the organization intends.

Finally, check the old cluster's remaining source associations. Another source may still need those VAs after this source migrates. Retiring the infrastructure is a separate change.

## Work through the connection decisions

These are separate variations of the example.

**The application vendor hosts the system. Can its VA-based source stop using the cluster?**

The configured connector and its documented requirements establish the current path. Check for a supported SaaS alternative and migration route, then validate their conditions. The current VA dependency remains until the supported change is completed.

**Reading works, but adding project.view is denied. Which actor's authority matters?**

The supplied target audit identifies isc-project-prod, Delivery-Prod and an explicit denial of access-assignment updates for that caller. A current target check confirms project.view is absent.

Investigate the integration's operation-specific authority. Reading succeeded with different permission. The recipient password and business approval do not authorize the API update.

Use **least privilege**, granting only the authority needed for the approved work. Establish that permission with the application owner, correct it through the authorized process, then recover and verify the affected operation.

**The write succeeded in Delivery-Test. Did Projects-Production meet the production requirement?**

In this variation, the source points to Delivery-Test and uses a credential accepted there. Test has a separate account also named project-reader. The API applies the update there; production remains unchanged.

The matching account string does not identify its workspace. Inspect destination settings and target audit context with source/account references.

Correct the configuration through change control, review the unintended test change and separately verify the intended production outcome. Renaming the source does not redirect it.

**The old token was revoked, and the source still uses it. Would another VA fix the explicit credential rejection?**

This source uses the SaaS path. Update the configured secret through its supported procedure without exposing it, then validate affected operations.

Another appliance does not replace the rejected credential. Successful authentication after correction also does not establish completion of earlier failed work.

**The first page contains 100 accounts and a continuation marker. A later call is throttled, with no completed collection result. Were the other accounts deleted?**

The first page is explicitly incomplete. The later refusal establishes throttling, rather than deletion.

Investigate coverage, filters, target limits and supported recovery. These facts do not establish how ISC would handle absent records after a completed aggregation. The page size is part of this example, not a universal setting.

**An eligible migration draft passes its connection test. Can the team apply it and delete the cluster immediately?**

The draft has not replaced the live path. Validate required operations, destination, authentication, schema dependencies and timing before the permanent change.

In this case, another production source still uses the cluster. That dependency remains after this one migrates. Infrastructure retirement needs its own review and authorized decision.

## Apply the reasoning to a private payroll API

A payroll provider hosts its application in the cloud. People sign in through a public website. Its management API is reachable only through a private network route from your organization.

The existing supported VA-based connector uses that route.

A proposed SaaS connector design supplies no supported path from SailPoint's hosted runtime to the private API. It also claims that one connection test will establish every payroll access change.

Identify the two gaps and the evidence needed for a sound design.

First, application hosting does not establish runtime reachability. Validate a supported path to the actual management API. The public human website does not supply that path. Retain a suitable supported connection if the proposed requirement cannot be met.

Second, a connection test covers its implemented checks. Validate required account types, operation support, external integration permissions, production destination and representative read/write outcomes. Use target evidence to establish the intended account changes.

Explain the connection to another engineer: where does the connector execute, which API and workspace does it call, who authorizes that caller, and which evidence establishes the intended result?
