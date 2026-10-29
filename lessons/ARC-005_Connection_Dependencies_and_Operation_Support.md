# The connection works. Why does the change still fail?

You can open an application, see a successful connection test in SailPoint Identity Security Cloud, or **ISC**, and still have an access change fail.

Your browser reached the application's website. The connector's test completed its own checks. The attempted access change had separate requirements.

To connect those observations, start with the actual change and the component trying to make it. Then use the evidence to identify what that operation could not do.

## Give the failed work a precise meaning

A **connector** is integration software that communicates with a managed system. A **source** in ISC holds configuration and represented account information for that connection.

The **target system** is the external system the connector reads or changes.

A **connection test** runs checks implemented by the selected connector. Its successful result tells you those checks passed with that configuration at that time. It is a useful observation, rather than a test of every future operation.

A **dependency** is a condition or component that work needs. Reading an account and changing its permissions can need different dependencies.

Suppose an existing account, `orders-reader`, can view order summaries and now needs to export them. Viewing and exporting are separate permissions in this hypothetical application.

An **entitlement** is an access item represented from a source. Here, `orders.export` supplies the additional export permission.

An **identity** is ISC's record representing a person. An **account** is a record in another system, with ISC keeping its collected representation.

The existing orders-reader account is correctly associated with the intended identity. **Account correlation** establishes that association using configured comparisons of account and identity information. It identifies whose account it is; it does not grant export access.

The source **Orders-Production** points to `Orders-Prod`, the live external **workspace**, a separately identified area of this application.

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source.

**Export order summaries** contains only orders.export from Orders-Production. For this trace, the recipient does not already hold that profile or export permission.

The permitted request passes its configured review. The intended existing account is selected, and automatic provisioning is configured for the supported update. No account creation or custom script is needed.

**Provisioning** carries out supported account or access changes. The intended result is orders.export on orders-reader in Orders-Prod.

That gives us something to verify. “The orders application isn't working” leaves the account, action and intended result unresolved.

## Locate the component making the call

The **runtime** is the environment where connector software executes. Your browser is not automatically that environment.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for applicable integration work. A **virtual machine** is a software-defined computer using resources supplied by its host. A **VA cluster** groups appliances for associated sources.

A **SaaS connector** runs in SailPoint's hosted environment without customer-deployed VAs for that connection. **Software as a service**, or **SaaS**, means provider-operated hosted software.

The application's hosting location does not select its connector path.

**IQService** is a Windows service used by supported connectors for particular Windows-side work. A **Windows service** is a program Windows can run without someone keeping an interactive desktop session open.

An applicable IQService path needs both the VA-to-IQService connection and the service's required target connection.

An **application programming interface**, or **API**, lets software request information or operations. An application's management API can differ from the website people use.

```text
VA-based API work
  ISC <-> VA connector <-> Target API

SaaS connector work
  ISC hosted connector <-> Target API

Applicable Windows-side work
  ISC <-> VA <-> IQService <-> Target

Arrows show work and returned results.
These are example operation paths.
```

The arrows show interactions and returning information, rather than complete network routes. The VA initiates its required cloud communication. Work originating in ISC does not require unsolicited inbound internet connections to customer servers.

The API paths are examples; other connectors use other supported interfaces.

An **ISC tenant** is your organization's environment in the hosted service. Identify the source and actual operation path in that tenant before investigating components.

For Orders-Production, assume a supported VA-based connector uses the application's management API. Cluster `orders-prod` contains `va-01` and `va-02`.

The supplied operation evidence identifies va-02 handling the attempt through its configured direct target path.

IQService is not part of this operation. The later IQService and proxy cases explicitly use different paths.

## Follow an update that completes

The **integration actor** is the account or software identity performing the external operation. Here, `svc-orders` uses a configured **API token**, a credential the external service accepts for software access.

A **credential** is information used to establish the caller's accepted identity or access context. **Authentication** establishes that context. **Authorization** determines whether the caller may perform a particular action on a resource.

svc-orders makes the change. orders-reader receives the permission. The administrator configures ISC. Their permissions have different purposes.

For this successful run, ISC prepares supported work for Orders-Production, orders-reader and orders.export.

Connector work from the applicable VA reaches the intended production API through its configured protected connection and presents the integration credential.

The target accepts the caller, permits this assignment and receives the information the operation requires. It applies orders.export to orders-reader in Orders-Prod.

The integration returns a result for ISC's tracking. Compare that reported result with the intended target assignment to establish delivery.

The business review allowed the recipient to receive export access. It did not supply svc-orders's external write privilege.

Now we can change individual conditions and understand their consequences. The dependencies below belong to the operation; they are not a fixed sequence of internal ISC checks.

## Establish which destination the settings select

An **endpoint** is the address an integration calls. Workspace, region, API path and resource settings can further determine the actual destination.

Orders-Production is an ISC label. Orders-Prod is the external workspace. Renaming the source does not redirect its endpoint or replace a test credential with a production one.

An **account identifier** distinguishes an account within its source context. A test workspace could contain another account also called orders-reader. Changing that record would not establish a change to the production account.

The runtime also needs to find the configured service.

**DNS**, the **Domain Name System**, resolves a hostname into an address. **Name resolution** is that lookup.

Machines can use different DNS resolvers, the services that answer those lookups. They can also have different access to those resolvers.

If va-02 cannot resolve the configured name, changing the target password leaves it without the address it needs.

Check the intended hostname and the lookup from the actual runtime. A successful laptop lookup describes the laptop's path.

Successful resolution answers the name-to-address question. You still need to establish that the address selects the intended service and that the caller can reach and use it.

## Check the actual runtime's path to that service

**Network reachability** means the calling environment can communicate with the required destination service over the intended path.

A **port** identifies a particular network service on a host. A **listener** accepts connections there. A **route** determines the path toward a destination, while a **firewall** controls permitted traffic.

An **allowlist** permits specified callers, destinations or network origins according to its rules. Those rules can differ between two VAs or between a VA and your laptop.

A **proxy** forwards traffic for another component. A **gateway** can receive and control requests before they reach the application.

With an applicable supported proxy configuration, source web traffic uses that proxy path. Inspect the actual mode and any bypass exceptions. A successful direct test does not reproduce a call that must go through the proxy.

For this example's protected web API, assume the required target service uses port 443. Other interfaces, including directory, database and IQService connections, have their own requirements.

Reaching SailPoint's cloud services is also a different test from reaching the orders API.

A **timeout** means the expected response did not arrive within the applicable waiting period.

During connection setup, an unavailable listener, a blocked route or an unresponsive dependency can need different corrections. The timeout alone does not select the cause.

A connection-refused result and a name-resolution failure are different observations too. Neither automatically identifies a password problem.

Even a network connection does not establish that the correct application service was selected or that it accepted the caller. Establish the required path rather than opening every port or removing all restrictions.

## Check trust separately from application permission

**Transport Layer Security**, or **TLS**, protects data while it travels between components and supports checking the server's identity.

**Hypertext Transfer Protocol**, or **HTTP**, carries web requests and responses. **HTTPS** protects that communication using TLS.

A **certificate** binds an identity, such as a hostname, to a shareable **public key**. Its matching **private key** stays secret. In certificate-based TLS, that key pair helps the client check the server's proof of identity without receiving its secret key.

A **certificate authority**, or **CA**, issues certificates. A **trust chain** connects the service certificate to an authority the client trusts.

For the actual connection, check the intended endpoint identity, certificate validity, trusted chain and the calling machine's trust configuration.

Certificate dates also depend on the relevant clock context. A time-related validation error calls for checking that context, rather than assuming only the certificate file can be wrong.

Your browser can trust a certificate that a VA does not trust. That difference concerns the connecting clients' trust configuration, not the recipient's password.

An inspection proxy can inspect protected traffic under its configured design and affect the certificate chain the caller sees. Use the supported trust arrangement for that route. Disabling certificate validation would leave the intended trust requirement unmet.

For IQService work, the VA-to-IQService and IQService-to-target connections still have separate protection requirements.

A protected connection gets data to the service securely. It does not grant svc-orders permission to assign export access.

## Identify the caller whose credential is being checked

A rejected credential can have different explanations: an expired or revoked token, an incorrect secret, a locked integration account, or a credential intended for another destination.

Use the reported detail and actual caller settings to distinguish them.

Creating a replacement secret externally does not update a source still storing the old value. Follow the supported update procedure, protect the secret and validate the affected work.

A token for calling ISC's own API is not automatically valid for the external application. An ISC administrator's tenant permissions also do not become svc-orders's target permissions.

Other connectors can use **OAuth 2.0**, an authorization framework for obtaining or using limited API access. An **access token** is the credential presented for that authorized API access.

Its granted **scopes** limit the API access it represents. Effective authority can also depend on external roles, consent, account context and resource restrictions.

An **external role** here means the target application's permission grouping. **Consent** is approval for the integration to use specified access under that arrangement.

A write-related scope name therefore does not establish permission to change every workspace or object.

IQService has another account distinction. Its registered client user authenticates incoming requests; its Windows service logon account runs the program; the source's target-management account supplies the applicable target context.

Client **registration** configures which Windows identities IQService accepts. Those clients still need valid Windows authentication. Acceptance for processing, or **admission**, does not settle authority over a target group or account.

## Ask whether this caller may perform this exact action

**Aggregation** collects account or entitlement information into ISC. A successful aggregation concerns that read and its account/field coverage.

The target can let svc-orders read accounts while refusing permission assignments. It can also allow an action in one workspace or resource category and refuse it in another.

The useful question is whether this caller may perform this action on this object in this environment. “The account is privileged” does not identify those boundaries.

**Least privilege** means granting only the authority needed for approved work. Establish the required operation before changing privileges.

Connector capability is a separate requirement again. Target permissions cannot supply an operation the connector does not implement.

Read-only configurations exist alongside connectors or configurations that support changes. An external API offering account disable does not establish that the configured source implements disable.

Support can also depend on account type or feature configuration. For example, the Salesforce SaaS connector's enable/disable support excludes portal and partner users.

Check the actual operation, account type, source settings and required feature activation or service licensing. A failed write is not automatically a missing-privilege problem.

## Check what information the operation carries

A supported, authorized operation can still contain invalid data.

A **payload** is the information carried by a request. A **field** is a named piece of information. The required fields and values depend on the target operation.

A **mapping** specifies how a value supplies a field in another representation. For example, a represented account value can supply the account key the target expects.

An **account schema** describes represented account fields and their meanings, including which field identifies the account. A readable display label is not automatically that key.

Inspect the source, account, entitlement reference and values required by this operation. More privilege does not supply a missing workspace value or repair a wrong account key.

Target conditions can also block work. The account's state can prevent an action, a required resource or licence can be unavailable, or the external service itself can be unavailable.

Several conditions can be wrong together. If correcting a credential lets the target examine the request and report missing data, the later refusal does not invalidate the successful credential correction.

For the export assignment, put the requirements together:

| Required condition | Relevant evidence |
|---|---|
| Intended source, workspace, account and access item | Destination settings and precise object references. |
| Supported and enabled connector operation | Operation/account-type support and applicable source configuration. |
| Usable, protected integration path | Actual runtime's resolution, service connectivity and trust results. |
| Accepted integration caller | Credential context and authentication evidence. |
| Authority for this action and resource | Target privileges, allowed resource boundary and operation audit. |
| Valid inputs and target conditions | Mapped values, validation detail, resource availability and result. |

This compares dependencies. It does not prescribe their internal execution order.

A connector can reject unsupported work or invalid configuration before contacting the target. A target can validate data after receiving a request.

Passing one requirement does not cancel another. Correcting a mapping does not grant authority; accepted authentication does not provide a missing input.

## Find the component that produced the response

An **HTTP status code** classifies a response. Read it with the component that sent it, the operation and the accompanying detail.

| Response | Starting meaning | What the code alone does not identify |
|---|---|---|
| 400 Bad Request | Responder reports a client-request problem. | The exact missing or invalid value, or a password fault. |
| 401 Unauthorized | Valid authentication credentials for that resource are lacking. | A problem with the recipient's personal password. |
| 403 Forbidden | Responder understands but refuses the request. | A particular missing target role. |
| 407 Proxy Authentication Required | The caller needs to authenticate to use the proxy. | Rejection of the target application's credential. |
| 429 Too Many Requests | Responder is limiting request rate. | A reason to repeat immediately. |

A gateway can refuse work before the application processes it. Locate the responder and its stated reason before prescribing a target privilege change.

Even the word Forbidden does not tell you which resource restriction or intermediary produced the refusal.

A **rate limit** restricts permitted API use. **Throttling** means the service limits work under those rules. Use the connector's documented handling and the target's current constraints; there is no universal retry delay or count.

IQService and directory interfaces can report their own messages. Interpret those under the relevant interface rather than forcing every failure into an HTTP-code meaning.

Keep source, account, action, environment, actual execution component and timestamp with **time zone**, the context that relates a local clock time to a common time reference.

A **request reference** is an identifier used to relate records for the same work where the involved systems provide one.

A missing log entry alone does not establish that no call occurred. Check logging scope, retention and which component's records you inspected.

## Use a failed attempt to choose a narrow correction

Consider a separate export attempt with these hypothetical facts:

- Operation evidence identifies va-02 and the production API destination.
- The attempt resolves the hostname and establishes the required protected connection.
- Target audit identifies svc-orders, Orders-Prod and orders-reader.
- It explicitly denies the orders.export assignment because the caller lacks the required permission-assignment privilege.
- Current target evidence confirms that export permission remains absent.

This evidence supports investigating svc-orders's operation-specific authority with the application owner.

A recipient-password change would leave the identified caller's privilege unchanged. DNS failure and unsupported operation also do not explain the supplied target denial.

The successful read exercised another action. It did not supply write authority.

The successful portions of this failed attempt describe this attempt. They do not certify every other member or future call.

After the authorized, scoped privilege correction, use the supported recovery process for the failed work and verify the intended target result.

Without these operation and audit facts, a green connection test and successful read would not be enough to choose that correction.

## Keep the facts you have already established

**Reconciliation** means establishing how the recorded attempt relates to the actual target state, then using the appropriate supported handling.

An engineer's investigation can follow this decision pattern:

```text
Identify operation and intended result
  |
  v
Locate actual path and evidence
  |
  v
Enough evidence for a scoped action?
  |
  +-- No --> Gather missing evidence
  |            |
  |            +--> Return to decision
  |
  +-- Yes -> Validate scoped correction
               |
               v
             Recover/reconcile work
               |
               v
             Verify target outcome

These are an engineer's decisions.
They are not ISC's internal check order.
```

The No branch gathers missing evidence and returns to the decision. It does not authorize a configuration or privilege change.

The Yes branch validates an authorized, scoped correction, then addresses the affected work and verifies the outcome. A scoped correction repairs the demonstrated defect while preserving unrelated security and business decisions.

Suppose a repaired route lets an attempt reach the target, which now rejects its token. Keep the evidence that the route worked for this attempt.

The new response identifies another prerequisite to investigate. It is not a reason to undo the working route or restart every check from zero.

## Establish the effect before repeating a timed-out change

A response can be lost after the target applies a change. A broader operation can also have one completed effect and another failed effect.

For example, an operation can create an account and then fail to assign its access. A failed overall result does not establish that the new account was undone.

**Rollback** means undoing changes after a failure. Do not assume every connector operation automatically rolls back every completed effect.

Inspect target state and operation detail before repeating the work.

An operation is **idempotent** when repeated equivalent requests have the same intended target effect as one request. That property belongs to the particular operation.

Suppose a hypothetical API defines its request as leaving a named account disabled, whatever the account's initial state. After success, the account is disabled. Repeating the equivalent request leaves that same intended state.

An operation that creates a new record each time has a different repeat effect.

Idempotence does not promise identical responses, no extra log entries or no other side effects. Check supported recovery and duplicate handling rather than treating every timeout as an instruction to retry.

After repair, distinguish restored communication, recovered or reconciled work, and verified target state. Each needs its own evidence.

**Collected state** is information represented from a read. An ISC page can show earlier collected data while the target has already changed.

The **front end** displays that represented information and tracked activity. The **back-end work** includes connector execution and the external operation. Compare the displayed observation's timing with the operation result and current target evidence.

## Give the next team the evidence it needs

A useful handoff identifies the source operation, actual runtime, destination/service, time and relevant error. Separate established facts from unanswered questions.

For a target authorization denial, give the application owner the identified caller, resource and action.

For a name-resolution failure, give the responsible team the actual runtime, hostname and resolver context.

Ownership follows the organization's operating model. A generic error label does not assign blame.

Share the necessary account identity and settings context without sharing passwords, complete tokens, private keys or unrestricted sensitive traces.

## Work through the investigations

These are separate situations.

**A laptop and va-01 resolve the name, but the actual attempt uses va-02 and fails lookup before any target session. Would rotating the target password help?**

Investigate the intended hostname and configured resolution path from va-02, including resolver reachability.

The other machines' results do not establish its path. Correct the demonstrated dependency through the supported process, then recover and check the affected work. A password does not repair name resolution.

**For a different IQService operation, corrected trust allows TLS, then IQService refuses an unregistered client. Did the trust correction fail?**

TLS passed for the new interaction. The supplied failure is client registration, with no target request admitted.

Check the approved registered-user and source-client credential configuration. More target authority would leave that admission problem unresolved. One successful correction can reveal another unmet requirement.

**A supported, permitted operation reaches the intended service, which returns 400 and explicitly says the workspace identifier is missing. No change is applied. What should be investigated?**

Inspect the operation configuration, input and mapping that should supply the identifier.

The validation detail identifies missing data. Correct and validate that value through the supported process. The 400 number alone would not establish this exact cause or a credential failure.

**A different deployment uses a supported web-proxy path. Evidence identifies a 407 from the proxy and confirms it forwarded no target request. Which credential boundary matters?**

Check the approved proxy configuration and supported authentication.

Proxy admission differs from target authentication. Replacing the target token does not supply proxy credentials. The no-forwarding conclusion comes from the supplied path evidence, not the number alone.

**The attempt times out, but target audit and a current check confirm orders.export on orders-reader in Orders-Prod. ISC shows an older collection. Should the grant be repeated?**

The supplied target evidence establishes the assignment.

Use supported handling to reconcile tracked work and the collected view. Timeout and old displayed data do not establish absence. Do not create a new request or repeat effects without understanding recovery and duplicate handling.

## Review a proposed disable design

A team needs ISC to disable departed contractors in a hosted research application.

Its source uses a read-only SaaS connector configuration and successfully collects accounts. The external API offers disable, but the team has not established a supported write-capable connector path or the required external authority.

The proposal assumes administrator credentials, a green connection test and successful reads establish that the current source can disable accounts.

What is established, and what must still be demonstrated?

The current configuration performed the reported reads through its SaaS path. Those observations do not implement a write in a read-only connector.

Establish a supported design for the exact disable operation and relevant account types. Then validate destination, required path, source settings, caller authority, valid inputs and target outcome. Confirm applicable activation or licensing conditions.

Administrator credentials do not implement missing connector behavior. They can add authority without supplying the required capability.

Explain the connection to the team: how does the caller reach the intended service, which identity does it accept, what action does it permit on the resource, and how do supported connector behavior and valid inputs lead to a verified result?
