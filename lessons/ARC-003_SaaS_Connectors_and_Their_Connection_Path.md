# SaaS connectors: where does the connection work happen?

An application can be hosted in the cloud while its connection to SailPoint Identity Security Cloud (ISC) still uses an appliance in your organization's environment. The application's hosting location doesn't tell you where the integration work runs.

To establish that path, look at the integration configured in ISC and its documented requirements. You need to know which component will make the external call before you can judge whether the connection can reach the right system and perform the required work.

## The application and the connector each have a hosting location

A **connector** is integration software that communicates with a managed system. It implements supported ways to read information and, where supported, send changes.

A **source** is the configured representation of that connection and its account data in ISC. An **ISC tenant** is an organizational environment within the hosted ISC service.

**Software as a service**, or **SaaS**, describes software operated as a hosted service by its provider. A business application can be SaaS because its vendor runs it.

A **SaaS connector** describes an ISC connection path: connector work runs in SailPoint's hosted environment without customer-deployed appliances for that connection. The **runtime** is the environment where the connector software executes.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for VA-based integration work. A **virtual machine** is a software-defined computer using resources provided by its hosting platform. A **VA cluster** groups appliances for the sources associated with it.

With a VA-based connector, the applicable connector work runs in that VA environment. With a SaaS connector, it runs in the supported hosted runtime.

Where an application has more than one supported connector option, compare each option's execution path, authentication and features.

These are separate questions: who hosts the business application, and where does this source's connector execute?

One tenant can contain both connection paths. Another source's use of a VA doesn't create a VA requirement for a source configured with a supported SaaS connector. Conversely, a cloud-hosted application's VA dependency doesn't disappear because people use its website over the internet.

## Put the runtime between the source and the external interface

An **application programming interface**, or **API**, lets software request information or operations from another system. The interface used to manage accounts can differ from the browser interface people use for everyday work.

For integrations that use an API, the two paths look like this:

```text
SaaS connector
  ISC hosted connector runtime
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

Lines show interactions, not packet flow.
```

The lines represent interactions and returning information. They aren't one-way packet streams. In the VA path, the VA initiates its required cloud communication; cloud-originated work doesn't imply an unsolicited inbound connection to the appliance.

The lower path is an API-based VA example. Other VA connectors use other documented interfaces. The picture doesn't require every system to expose the same API.

Removing the VA from the first path removes that customer-deployed component dependency. The external API remains. It still needs to be reachable, accept the configured credential and permit the requested operation.

## Give the source a precise destination and purpose

Consider a project-management system with separate external workspaces, `Delivery-Prod` and `Delivery-Test`. A **workspace** is a separately identified area of this example application.

The ISC source is named **Projects-Production**. Its intended destination is `Delivery-Prod`. An existing account there, `project-reader`, needs permission to view project records.

An **identity** is ISC's person-level record. An **account** is a record in another system, with ISC keeping a collected representation. Here, the production account is already associated with the intended identity.

That relationship is **account correlation**: matching and assigning a source account to a person-level identity through configured comparisons. It establishes whose account it is; it doesn't grant a permission.

An **entitlement** is an access item represented from a source, such as a group membership or permission. In this example, `project.view` allows viewing project records and excludes editing them.

Assume the selected SaaS connector can read the relevant accounts and add or remove `project.view`, using an API reachable from its supported hosted runtime. These are hypothetical integration capabilities and permission meanings, not a claim that a particular project-management connector is available.

## Keep the three actors separate

The recipient account `project-reader` receives business access. The integration uses the registered **application client**, `isc-project-prod`, as its software identity in this example. An ISC administrator configures the source.

An **API token** is a credential the external service accepts for software access. A **credential** is information used to establish the caller's accepted access context, such as a secret token. Here, the connector uses its configured project-system token; it doesn't use the recipient's password.

**Authentication** establishes the caller's accepted identity or credential context. **Authorization** determines which operation it may perform on which resource.

The external application can accept the integration token and permit account reads while refusing access-assignment changes. Those are different authorizations.

A token for calling ISC's own API also doesn't automatically authorize calls to the project system. ISC and the external service check authority at their own boundaries.

Store credentials through the selected connector's supported settings. Keep tokens out of screenshots, teaching examples and support conversations. An ISC administrator's authority doesn't supply the integration's missing external privilege.

## The connector supplies behaviour; the source supplies configuration

The connector implements supported operations. The source configuration tells it which system and settings to use for this implementation.

An **endpoint** is the address called by the integration. Correct destination selection can also require a workspace, organization identifier, region or path. A valid call to test would still be wrong for a production requirement.

An **account schema** describes the returned account fields and their relevant meanings. A field is a named piece of information; the schema identifies which field supplies the account's identifying value.

The **account identifier** distinguishes the account within its source context. Here, `project-reader` identifies the intended production account. An employee number would be a separate person-related value. Equal text in unrelated fields doesn't replace configured correlation.

For the example source, the important configuration questions are:

| Question | Example configuration | Why it matters |
|---|---|---|
| Which external environment? | Production endpoint and `Delivery-Prod` workspace | Reaching a valid test workspace would not meet the production need |
| Which integration identity? | Application client `isc-project-prod` | The API needs to establish which software identity is calling |
| Which credential? | API token stored through the supported secret setting | A source label or administrator's browser session doesn't authenticate that call |
| Which authority? | Account reads and the required access-assignment changes | A read privilege doesn't supply a write privilege |
| How are accounts interpreted? | Applicable schema and account identifier | Returned fields must represent the intended accounts correctly |
| Which operations are implemented? | Supported reads and entitlement additions/removals | Credentials can't add an operation the connector doesn't implement |

The schema interprets data; it doesn't open a network route or authorize reading it. Likewise, the source display name is an ISC label. Renaming a source to Projects-Production doesn't redirect an endpoint or turn test credentials into production credentials.

## First, follow an account read

**Aggregation** collects account or entitlement information from a source into ISC. It observes source data; it isn't itself an instruction to grant access.

Suppose an authorized on-demand action or configured schedule starts an account aggregation for Projects-Production. Opening a previously collected account record isn't, by itself, a new aggregation.

The selected connector uses the configured production endpoint, workspace and integration credential to request account data. The project system checks the call and returns records the integration is allowed to read.

The connector interprets that response using its supported behaviour and applicable schema. ISC then has collected information to represent the source accounts and their access.

The application still holds its actual accounts and enforces their permissions. Reading the data into ISC doesn't move the application into the tenant.

Now consider collection scope. **Pagination** means returning results in pages. If the API returns one page with a marker showing more results exist, the relevant later pages are needed before treating that read as the intended complete population.

Filters and API permissions can also restrict which accounts are returned. A successful response therefore doesn't, on its own, establish a complete intended collection. Page size, filtering and connector handling must be established for the actual integration.

## Then follow a supported access change

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source.

Here, the requestable profile **View projects** contains only `project.view` from Projects-Production. The permitted request identifies the intended identity and its existing, correctly selected account `project-reader`.

Assume the configured review approves it, the source is configured for the supported update, and no account creation or additional access dependency is needed.

**Provisioning** carries out supported account or access changes. For this request, the required change is adding `project.view` to that existing account.

ISC prepares the applicable work for the identified source and account. Connector work executes in the hosted SaaS runtime and calls the production API.

The project system evaluates whether the integration can perform this operation on the intended resource. Under the stated successful conditions, it accepts and applies the entitlement assignment, and the connector returns a result for ISC's operation tracking.

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
```

These are two directions of work, not a mandatory cycle. The change path assumes the supported, authorized and successfully applied operation just described. It does not promise that every approval delivers access or that every write triggers an immediate aggregation.

Business review answered whether the organization permitted this recipient to receive the access. API authorization answered whether the integration could make the change. The target account's resulting assignment establishes what it now holds.

A removal has a different intended effect: remove `project.view` through the supported operation for the identified account. It still needs appropriate external authority and evidence of the target result. Deciding that access should end is not the removal itself, and runtime location doesn't decide whether the person should retain access.

## What do the pages in ISC actually show?

Your browser displays ISC pages and sends authorized actions to the service. It isn't the runtime that performs the subsequent project-system connector work.

An account page shows information represented in ISC. That information can remain visible after a collection, including while a later call fails.

A provisioning activity view describes tracked work, including the available source, recipient, action, progress, result and errors. Neither view is a continuous window into every external call.

Suppose current project-system evidence confirms `project.view` on `project-reader`, but the ISC account page still shows the earlier collection. Compare operation evidence, target state and the relevant collection or refresh behaviour before adding access again.

An operation result, a later collected account view and the person's ability to complete a business action are different evidence. A permission assignment doesn't establish that an unrelated sign-in restriction, application licence or business-data rule has been satisfied.

Choose evidence for the question you're answering:

| Observation | What it establishes | What remains unresolved |
|---|---|---|
| Administrator opens the application's website | That browser session reached the human interface | Hosted runtime's API path and integration authority |
| Source connection test succeeds | The connector's implemented checks passed at that time | Correct destination and operation-by-operation read/write coverage |
| Account aggregation completes as reported | The reported collection finished | Intended population, filters, identifiers and relevant data |
| View projects review approves | Business review allowed the requested assignment | Actual delivery and target-account state |
| Target reports an explicit operation permission denial | Authorization failed in that operation's supplied context | Correct caller/destination, required privilege and affected work |
| Target confirms the intended account holds the entitlement | That assignment exists when checked | Freshness of ISC's view and the intended business action |

The rows are different observations, not a prescribed troubleshooting order. A connection test exercises the checks that connector implements. It doesn't certify every account, resource or future call.

## A different authentication method needs its own configuration

The API-token example doesn't represent every connector's authentication.

Some integrations use a **service account**, a dedicated account for software rather than a person's daily login. Others use a registered application client and the external service's supported authorization method.

**OAuth 2.0** is an authorization framework under which an integration obtains or uses an **access token**, a credential for authorized API access. The connector must use a method the application and connector support.

A **client ID** identifies a registered application. A **client secret** is a secret credential used in applicable client-authentication flows. The identifier alone isn't a password.

A token's granted **scopes** limit the API access it authorizes. Effective authority can also depend on external roles, resource restrictions, consent and the user context behind the token. **Consent** is approval for the application to use specified access under that authorization arrangement.

Seeing a write-related scope doesn't, by itself, establish that every resource update is allowed.

Where the selected method supports a **refresh token**, that credential lets the integration obtain another access token, for example when the current one expires. It isn't interchangeable with an access token or client secret, and not every connector receives or automatically renews tokens this way.

Projects-Production uses the separately stated API token. An invalid token in that example doesn't silently switch the integration to an OAuth refresh flow.

## Someone still maintains the external connection

SailPoint operates the hosted connector runtime. Your organization still manages the connection design and the external integration setup it controls.

That includes the intended caller, approved privileges, credentials and allowed external resources, with changes coordinated with the application owner.

**Credential rotation** replaces a credential. If the application owner creates a new API token and revokes the old one, a source still holding the old token hasn't been updated merely because the replacement exists externally.

Use the supported credential-update procedure, protect the secret, and validate the affected operations. Restoring accepted authentication doesn't establish that earlier failed reads or writes completed, or that every required write remains authorized.

An **allowlist** permits only specified callers or network origins. A laptop may be allowed while calls from the hosted connector are refused. Establish the origin and context of the failed call using current supported guidance; don't guess network addresses or remove every restriction.

A private management API reachable only through an organization's internal network doesn't become reachable because a SaaS connector was selected. The supported runtime path must actually reach it.

A public browser sign-in page may have different addresses, restrictions and credentials from the account-management API. It isn't evidence of that API path.

## Partial reads and missing responses need careful reasoning

A **rate limit** restricts API use under the target's rules. **Throttling** is the target limiting or refusing work when those limits are reached.

Suppose the API returns a throttling response partway through a collection. That response identifies a request-rate or capacity boundary in this example. It doesn't establish that missing accounts were deleted or that their owners left the organization.

Inspect the attempted collection, affected scope, API restrictions and the connector's documented handling. Retries and recovery aren't universal. Adding an appliance doesn't automatically increase the external service's API allowance.

A **timeout** means an expected response didn't arrive within the allowed wait. For a change, that doesn't establish whether the target applied it.

If the target applied `project.view` but the response was lost, inspect current target state and available audit/activity evidence before repeating the operation. Select the supported recovery or reconciliation action for what actually occurred.

Repairing connectivity or a credential is a prerequisite correction. The affected work still needs its own result and target verification.

## Runtime location doesn't establish write capability

SailPoint offers SaaS-based read-only configurations as well as configurations with deeper access-management capability. Collection-only visibility doesn't automatically include provisioning.

Even a write-capable connector has operation and account-type boundaries. Account creation support doesn't establish support for every group assignment, disable action or password operation.

A concrete example is the Salesforce SaaS connector: its documented enable/disable support excludes portal and partner users. Check the precise operation, account type, target prerequisites and applicable activation requirements.

Connector support, source settings, valid inputs, external authority and any required service licensing or feature activation must all fit. Unrestricted external administrator privileges cannot supply an operation the connector doesn't implement.

## Moving an existing source requires more than removing the appliance

SailPoint documents VA-to-SaaS migration for listed eligible sources. It isn't a universal conversion switch.

The supported process prepares a draft while the live source continues operating. A draft is proposed source configuration awaiting application to the live source.

Encrypted connection values must be entered again for the new path. Don't assume credentials transfer merely because other settings are retained.

Changes to the live source during migration can be overwritten when the draft is published. Coordinate the change rather than treating draft and live editing as independent work.

Applying the migration is permanent and cannot be reverted through that migration process. A successful draft connection test isn't an undo mechanism or proof of every required operation.

The account schema also needs review. An **attribute** is a named field, and its **type** determines the kind of value expected. The documented migration merges the existing schema with the SaaS connector's default schema. When a common attribute has different types, the SaaS schema's type is used.

A **dependency** is something another configuration or operation relies on. A **mapping** specifies how a value is populated. Identity mappings, correlation and provisioning configuration can depend on schema fields and their types.

That is why retaining an attribute name isn't enough to establish equivalent behaviour. For example, logic written for a text field needs review if the resulting schema expects a **Boolean** value, meaning true or false. Check the dependent comparisons or calculations against that resulting input before treating the migration as equivalent.

Before applying a migration, establish destination, authentication, supported operations, account interpretation and scheduling effects. The VA cluster and SaaS connection can use different time-zone settings, affecting collection schedules and access-review due dates. The same displayed clock time can represent a different real moment when its time-zone context changes.

Migrating one source also doesn't authorize retiring its former VA cluster. Other sources may still depend on it. Check remaining associations and treat infrastructure retirement as a separate change.

## Work through the connection decisions

These are separate variations of the example.

### 1. The application is hosted in the cloud

A source uses a VA-based connector whose documented requirements include a VA cluster. A colleague proposes retiring it because the application vendor hosts the application.

**Worked reasoning:** The configured connector and its requirements establish the current path. Check whether a supported SaaS alternative and migration route exist and validate their conditions. Until the supported change is completed, the current VA dependency remains.

### 2. Reading succeeds; adding access is denied

Projects-Production reads `project-reader`. A write to add `project.view` fails. The supplied target audit identifies `isc-project-prod`, workspace `Delivery-Prod`, and an explicit denial of access-assignment updates for that caller. The target confirms the permission is absent.

Which actor's authority needs investigation?

**Worked reasoning:** The integration's operation-specific authority. The evidence identifies the intended production caller and a write denial; successful reading doesn't supply that privilege. The recipient password and business approval don't correct it. Establish the required permission with the application owner using **least privilege**, meaning only the authority needed for approved work. Correct it through the authorized process, then recover and verify the affected operation.

### 3. A write succeeds in the wrong workspace

The source is labeled Projects-Production but configured for `Delivery-Test`. Test has a separate account also named `project-reader`. The API applies the write there; production remains unchanged.

**Worked reasoning:** The call succeeded against test, not the intended production account. The matching account string doesn't identify its workspace. Inspect destination configuration and target audit context alongside source/account references. Correct the configuration through change control, review the unintended test change and separately verify the intended production outcome. Changing the source label alone wouldn't repair it.

### 4. The token was replaced

The application owner creates a replacement token and revokes the old token. The source still uses the old one. The supplied target error explicitly rejects that credential.

Would adding another VA solve this?

**Worked reasoning:** This is a SaaS-path credential failure. Update the secret through the supported procedure without exposing it, then validate the affected operations. Another appliance doesn't replace the configured credential. Accepted authentication after correction still doesn't establish recovery of earlier failed work.

### 5. Only the first page arrived

The API returns 100 accounts and a continuation marker showing more results exist. A later call is throttled. No completed collection result is supplied. Someone calls the missing accounts deleted.

**Worked reasoning:** The first page is explicitly incomplete. The throttled call doesn't establish deletion. Investigate intended collection coverage, filters, target limits and supported recovery. The facts don't establish how ISC would handle absent records after a completed aggregation, so don't invent that outcome. The page size is a fact of this example, not a universal connector setting.

### 6. The migration draft passes its test

An eligible source's draft passes its connection test but hasn't been applied. Another production source still uses the VA cluster. A colleague proposes immediate migration and deletion of that cluster.

**Worked reasoning:** Validate required operations, destination, authentication, schema dependencies and timing before the permanent change. A draft hasn't replaced the live path, and its test doesn't validate everything. The other source's VA dependency remains even after this one migrates. Cluster retirement requires a separate dependency review and authorized decision.

## Apply the reasoning to a private payroll API

A payroll provider hosts its application in the cloud. Human users sign in through a public website. Its management API is reachable only through a private network route from your organization.

The existing supported VA-based connector uses that route. A proposed SaaS connector design supplies no supported path from SailPoint's hosted runtime to the private API. It also claims one connection test will prove every payroll access change works.

Explain the two gaps and the evidence needed for a sound design.

**Worked reasoning:** Application hosting doesn't establish runtime reachability. The proposed connector needs a supported path to the actual management API. A public human website doesn't supply it. Validate the connector and connectivity design; retain a suitable supported path if that requirement cannot be met.

A connection test also establishes only its implemented checks. Validate required account types, operation support, external integration permissions, production destination and representative read/write outcomes. Use target evidence to establish the intended account changes.

Explain the distinction to another engineer: the SaaS connector removes the customer VA from that supported path. The target API, correct caller and resource authority, and evidence of the intended change still matter.
