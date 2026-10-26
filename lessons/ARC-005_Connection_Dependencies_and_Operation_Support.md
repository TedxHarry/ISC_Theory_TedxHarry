# The connection works. Why does the change still fail?

An administrator opens an application. SailPoint Identity Security Cloud (ISC) reports a successful connection test. An account read completes, but an access change fails.

Those observations can all be accurate. They concern different operations, possibly from different machines and under different authority.

The useful next question is what the failed operation actually needed. A password change won't help if the operation lacks a required field, uses the wrong destination or isn't implemented by the selected connector.

## Define the work before investigating the connection

A **connector** is integration software that communicates with a managed system. A **source** is ISC's configured representation of that connection and its account data. The **target system** is the external system the connector reads or changes.

A **connection test** runs the checks implemented by the selected connector. A successful result establishes that those checks passed under that configuration at that time. It doesn't establish that every later operation has everything it needs.

A **dependency** is a condition or component on which work relies. Different reads and writes can have different dependencies, even within the same source.

Suppose an existing account, `orders-reader`, can view order summaries and now needs to export them. Viewing and exporting are separate permissions in this example.

An **entitlement** is an access item represented from a source. Here, `orders.export` provides the additional export permission.

An **identity** is ISC's person-level record. An **account** is a record in another system, with ISC keeping a representation. The existing account is correctly associated with its intended identity.

That association is **account correlation**: matching and assigning a source account to an identity through configured comparisons. It identifies whose account it is, rather than granting export access.

The source **Orders-Production** points to external workspace `Orders-Prod`. A **workspace** is a separately identified area of this example application.

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source. The profile **Export order summaries** contains only `orders.export` from Orders-Production.

Assume the permitted request passes its configured review, the intended existing account is selected, and automatic provisioning is configured for this supported change. No account creation or custom script is needed.

**Provisioning** carries out supported account or access changes. The intended result is precise: `orders.export` on `orders-reader` in `Orders-Prod`.

That's a testable requirement. “The orders application isn't working” leaves the operation, account and intended effect unresolved.

## Find the component making the call

The **runtime** is the environment where the connector software executes. Your browser isn't automatically that environment.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for VA-based integration work. A **virtual machine** is a software-defined computer using its host's resources. A **VA cluster** groups appliances associated with sources.

A **SaaS connector** executes in SailPoint's hosted environment without customer-deployed VAs for that connection. **Software as a service**, or **SaaS**, means provider-operated hosted software. The application's hosting location doesn't select the connector path.

**IQService** is a Windows service used by supported connectors for particular Windows-side work. A Windows service is a program Windows can run without an interactive desktop session. An applicable path needs the VA-to-IQService connection and IQService's required target connection.

An **application programming interface**, or **API**, lets software request information or operations. It can differ from the website a person uses.

```text
VA-based API work
  ISC <-> VA connector <-> Target API

SaaS connector work
  ISC hosted connector <-> Target API

Applicable Windows-side work
  ISC <-> VA <-> IQService <-> Target

Arrows show work and returned results.
```

The arrows represent work interactions and returning results, not complete network routes. The VA initiates its required cloud communication. Cloud-originated work doesn't introduce unsolicited inbound internet connections to customer servers.

The API paths are examples; connectors can use other supported interfaces.

An **ISC tenant** is an organizational environment within the hosted service. Identify which source and path in that environment performs the work rather than adding every component you recognize to the investigation.

For Orders-Production, assume a supported VA-based connector uses the application's management API. Cluster `orders-prod` contains `va-01` and `va-02`. The example operation evidence identifies `va-02` as handling the attempt through its configured direct target path.

IQService is not part of that operation. Other cases below use different paths explicitly.

## Follow one successful update

The **integration actor** is the account or software identity performing the external operation. Here it is `svc-orders`, using a configured **API token**, a credential the external service accepts for software access.

A **credential** establishes the accepted caller identity or access context. **Authentication** establishes that context; **authorization** determines whether the caller may perform a particular action on a resource.

The integration actor is different from the recipient `orders-reader` and from the administrator configuring ISC.

Under successful conditions, ISC prepares the supported change for the source, account and entitlement. Connector work from the applicable VA reaches the intended production API through its configured protected connection and presents the integration credential.

The target accepts the caller, permits this assignment and receives valid information for it. It applies `orders.export` to `orders-reader` in `Orders-Prod`, and the integration returns a result for ISC's tracking.

Business approval permitted the recipient to receive export access. It didn't supply the caller's external write privilege.

To establish delivery, compare the reported operation result with the intended target assignment. A connection test, an accepted token or an approved request alone doesn't establish that complete outcome.

The remaining questions explain why one part can succeed while another fails. They are dependencies to investigate, not a mandatory sequence of internal ISC checks.

## Does the configured address select the intended system?

An **endpoint** is the address an integration calls. The actual destination can also depend on a workspace, region, API path or resource setting.

Orders-Production is a label inside ISC. `Orders-Prod` identifies the external workspace. Renaming the source doesn't force its endpoint or credential to select production.

An **account identifier** distinguishes an account within its relevant source context. An identical account string in a test workspace wouldn't establish that the production account changed.

**DNS**, the **Domain Name System**, resolves a hostname into an address. **Name resolution** is that lookup. Machines can use different resolvers or have different access to them.

If `va-02` cannot resolve the configured name, a new target password doesn't provide the missing address.

Successful resolution still doesn't establish the intended destination, reachable service or accepted caller. Check the actual settings and resolution evidence from the relevant runtime; a laptop result isn't a substitute.

## Can that runtime reach the service?

**Network reachability** means that the calling environment can communicate with the required destination service over the intended path.

A **port** identifies a network service endpoint on a host. A **listener** accepts connections there. A **route** determines the path toward a destination, while a **firewall** controls permitted traffic.

An **allowlist** admits specified callers, destinations or network origins according to its rules. Those rules can differ between two VAs or between a VA and an administrator's laptop.

A **proxy** forwards traffic for another component. A **gateway** can receive and control requests before they reach the application.

The configured proxy route can carry applicable source web traffic. Inspect the supported mode, configuration and any bypass exceptions. A successful direct test doesn't reproduce a call that must use a proxy.

For the example's protected web API, assume the required service uses port 443. That is not every connector's port requirement. Directory, database and IQService interfaces have their own requirements.

Likewise, the VA reaching SailPoint's cloud services doesn't establish that it can reach the target. Those are different destinations.

A **timeout** means an expected response wasn't received within the allowed wait. During connection setup, an unavailable listener, blocked route or unresponsive dependency can require different corrections. The timeout alone doesn't identify which one occurred.

A connection-refused result and a name-resolution failure are also different observations. Don't turn either into a generic password diagnosis.

Even an established network connection doesn't prove the correct service was selected or application authentication succeeded. Identify the actual requirement rather than opening every port or removing all restrictions.

## Does the caller trust the service it reached?

**Transport Layer Security**, or **TLS**, protects communication in transit and supports checking the server's identity.

**Hypertext Transfer Protocol**, or **HTTP**, exchanges web requests and responses. **HTTPS** is HTTP protected by TLS. A protected channel doesn't supply application privileges.

A **certificate** binds an identity, such as a hostname, to a **public key**. That key can be shared to verify cryptographic proof made with the corresponding secret **private key**.

A **certificate authority**, or **CA**, issues certificates. A **trust chain** connects the service certificate to an authority the client trusts.

For the applicable connection, check the endpoint identity, certificate validity, trusted chain and the actual machine's trust configuration. A time-related validation error also calls for the relevant clock context.

A browser can trust a certificate that a VA doesn't trust. That doesn't establish that the recipient's password is wrong.

A configured inspection proxy can also affect the certificate chain the caller sees. Use the supported trust design for that route. Removing certificate validation would remove a required protection rather than establish the correct integration.

For IQService work, distinguish VA-to-IQService protection from IQService-to-target communication. One secured leg doesn't configure or prove the other.

## Accepted credentials still have a particular caller context

A caller can be rejected because its token expired or was revoked, its secret is incorrect, its integration account is locked, or the credential belongs to another destination. The available evidence must distinguish these explanations.

Replacing a secret externally doesn't automatically update a source still using the old value. Follow the supported update procedure and validate the affected work without exposing the secret.

A token used to call ISC's own API isn't automatically valid for the external application. Similarly, an ISC administrator's authority doesn't give `svc-orders` target administration privileges.

Other connectors can use **OAuth 2.0**, an authorization framework under which an integration obtains or uses an **access token**, a credential for authorized API access. A token's **scopes** limit the authorized API access it represents.

Effective authority can also depend on external roles, consent, account context and resource restrictions. Here, an external role is the target application's permission grouping. **Consent** is approval for the integration to use specified access under that arrangement.

A write-related scope name therefore doesn't establish permission for every object or workspace.

For IQService, the registered client user supplies incoming-request authentication, the Windows service logon account runs the process, and the source's target-management account supplies the applicable target context. Client registration configures which Windows identities IQService accepts; those clients still need valid Windows authentication. This admission check doesn't settle the target account's authority.

## Reading is a different action from changing access

**Aggregation** collects account or entitlement information into ISC. A successful aggregation concerns its read operation and the account/field coverage involved. It doesn't test every possible write.

The target can permit `svc-orders` to read accounts while refusing permission-assignment changes. It can also permit changes in one workspace or resource category but not another.

Ask whether the actual caller may perform this operation on this object in this environment. “The account is privileged” is too broad to settle that question.

**Least privilege** means granting only the authority needed for approved work. Unrestricted target administration isn't a suitable first response to an unidentified defect.

Also check connector capability. Target permissions cannot add an operation the connector doesn't implement.

Read-only connector configurations exist alongside options that support access changes. An external API offering account disable doesn't establish that the currently configured connector implements it.

Operation support can depend on account type or feature configuration. For example, the Salesforce SaaS connector's enable/disable support excludes portal and partner users.

Check applicable source settings, supported operations and required feature activation or service licensing. A failed write isn't automatically a missing-privilege problem.

## Does the operation contain valid information?

A supported, authorized operation can still carry invalid data.

A **payload** is the information carried by a request. Required fields and values depend on the operation and its target.

A **mapping** specifies how one value supplies a field in another representation. For example, an ISC account value can supply the account key the target expects.

An **account schema** describes represented account fields and their relevant meanings, including which field identifies the account. A readable display label isn't automatically that key.

Inspect the source, account, entitlement reference and required values for the actual operation. Extra privilege doesn't provide a missing workspace value or correct a wrong account key.

Target conditions also matter. An account's state can prevent a particular action. A required resource or licence may be unavailable. External service availability is another dependency.

More than one condition can be wrong. If a corrected credential lets the target evaluate a request and then report missing data, the new refusal doesn't establish that the credential correction was wrong.

## Put the required conditions together

For the export assignment, these conditions need to fit:

| Required condition | Relevant evidence |
|---|---|
| Intended source, workspace, account and access item | Destination settings and precise object references |
| Supported and enabled connector operation | Operation/account-type support and applicable source configuration |
| Usable, protected integration path | Actual runtime's resolution, service connectivity and trust results |
| Accepted integration caller | Credential context and authentication evidence |
| Authority for this action and resource | Target privileges, allowed resource boundary and operation audit |
| Valid inputs and target conditions | Mapped values, validation detail, resource availability and result |

This is a dependency comparison, not a fixed backend execution order. A connector can reject unsupported work or invalid configuration before contacting the target. A target can validate input after receiving a request.

Passing one condition doesn't cancel the others. Correcting a mapping doesn't grant authority; accepted authentication doesn't supply a required input.

## Find the component that produced the response

An **HTTP status code** classifies a response. Interpret it with the responder, operation and accompanying detail.

| Response | Starting meaning | What it doesn't establish |
|---|---|---|
| 400 Bad Request | Responder reports a client-request problem | Every 400 is a password error |
| 401 Unauthorized | Valid authentication credentials for that resource are lacking | The recipient's personal password is wrong |
| 403 Forbidden | Responder understands but refuses the request | A particular target role must be missing |
| 407 Proxy Authentication Required | Authentication is needed to use the proxy | The target rejected its own credential |
| 429 Too Many Requests | Responder is limiting request rate | Immediate repetition will fix the operation |

A gateway can produce a refusal before an application processes the intended work. Locate the responder and reason before prescribing a privilege change from a number alone.

A **rate limit** restricts permitted API use. **Throttling** is the service limiting work under those rules. Use the selected connector's handling and target's current constraints; there is no universal retry delay or count.

IQService and directory interfaces also have their own messages. Don't force them into an HTTP-code interpretation.

Keep source, account, operation, environment, actual execution component and timestamp with time zone together. A **request reference** is an identifier used to relate records for the same work where the involved systems provide it.

A missing log entry alone doesn't prove no call occurred. Logging scope, retention and the inspected component affect what you can see.

## Use the actual attempt to choose the correction

Consider a separate failed export attempt with these hypothetical facts:

- Operation evidence identifies `va-02` and the production API destination.
- The attempt resolves the hostname and establishes the required protected connection.
- Target audit identifies `svc-orders`, `Orders-Prod` and `orders-reader`.
- It explicitly denies the `orders.export` assignment because the caller lacks the required permission-assignment privilege.
- Current target evidence confirms that export permission remains absent.

This evidence supports investigating the integration actor's operation-specific authority with the application owner. The recipient password, DNS and unsupported-operation explanations don't fit the supplied facts.

The successful read tested another action. It didn't establish the missing write privilege.

The successful portions of this failed attempt also don't certify every other member or future call. They establish what happened for this attempt.

After the authorized, scoped privilege correction, address the failed work through the supported recovery process and verify the intended target result.

Without these audit and operation facts, a green connection test and successful read would not be enough to select that correction.

## Keep established facts when a new failure appears

**Reconciliation** means establishing what actually happened and aligning the tracked work with the observed outcome through the supported process.

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
```

The branches are human investigation decisions. They aren't an internal ISC processing sequence. The no branch gathers the missing evidence and returns to assessment; it doesn't authorize a change.

A scoped correction addresses the demonstrated defect without changing unrelated security or business decisions.

Suppose a repaired network route lets an attempt reach the target, which now rejects its token. That new observation identifies another prerequisite. Investigate the credential context rather than undoing the working route or restarting every check from zero.

## A timeout leaves a question about the effect

A response can be lost after the target applies a change. A broader operation can also have one completed effect and another failed one.

In a different operation, creating an account successfully and then failing its access assignment isn't the same as nothing happening. A failed overall result doesn't establish automatic rollback of that account.

Inspect target state and operation details before repeating effects.

An operation is **idempotent** when repeated equivalent requests have the same intended target effect as one request. That is a property of the particular operation, not every connector action.

Suppose a hypothetical API defines a request to leave a named account disabled, regardless of its initial state. After a successful request, the account is disabled; repeating the equivalent request leaves that same state. An operation that creates a new record each time has a different repeat effect.

Idempotence doesn't promise identical responses, no additional log records or no other side effects. Check the operation's supported recovery behaviour instead of treating every timeout as an instruction to retry.

After repair, distinguish restored communication, recovered or reconciled work, and verified target state. One doesn't establish the next.

**Collected state** is information represented from a read. An ISC page showing earlier collected data isn't a continuous live target inspection. Compare its timing with the operation result and a current target check.

## Make the handoff useful

A useful handoff identifies the source operation, actual runtime, destination/service, time and relevant error. It states which facts are established and what remains unknown.

If audit evidence shows a target authorization denial, involve the application owner with the identified caller, resource and action. If the runtime cannot resolve a name, provide its hostname and resolver context to the responsible team.

Ownership follows the organization's operating model. A generic error label doesn't assign blame.

Share the necessary credential identity and settings context without sharing passwords, complete tokens, private keys or unrestricted sensitive traces.

## Work through the investigations

These cases are separate situations.

### 1. The name works from another machine

A laptop and `va-01` resolve the target name. The actual operation uses `va-02`, whose lookup returns a name-resolution failure before any target session starts.

Which evidence is relevant, and would rotating the target password address the problem?

**Worked reasoning:** Investigate the intended hostname and configured resolution path from `va-02`, including resolver reachability. The other machines' success doesn't establish its path. Correct the demonstrated dependency through the supported process, then recover and check the affected operation. A password doesn't repair the lookup failure.

### 2. Corrected trust reveals an unregistered client

For a different IQService operation, an approved correction resolves certificate trust. The next attempt establishes TLS, but IQService explicitly refuses an unregistered client. No target request is admitted.

Did the first correction fail, and would more target authority help?

**Worked reasoning:** TLS passed for the new interaction. Its supplied failure is now client registration. Check the approved registered-user and source-credential configuration rather than unrelated target privilege. More than one prerequisite can fail; passing one doesn't prove the others were already satisfied.

### 3. The request is missing its workspace value

A supported change reaches the intended target service under an actor permitted to make it. The target returns 400 with an explicit validation message: the workspace identifier is missing. No change is applied.

**Worked reasoning:** Examine the operation configuration, input and mapping that should supply that identifier. The detail identifies missing data, not rejected credentials. Correct and validate the required value through the supported process. The status number alone wouldn't identify this precise cause.

### 4. The proxy returns 407

In another deployment, the VA uses the supported web-proxy path. Evidence identifies a 407 from that proxy, requiring its configured authentication. It forwards no target request in this attempt.

Which boundary needs investigation?

**Worked reasoning:** Check the approved proxy configuration and supported authentication. Proxy admission differs from target authentication; replacing the target token doesn't provide proxy credentials. The no-forwarding conclusion comes from the supplied path evidence, not from treating any code as a complete account of target effects.

### 5. The target changed before the response was lost

A recorded attempt times out. Audit and a current target check confirm that it assigned `orders.export` to `orders-reader` in `Orders-Prod`. ISC's account page shows an older collection.

Should the grant be repeated solely because of that timeout or view?

**Worked reasoning:** No. The supplied target evidence establishes the assignment. Reconcile tracked work and the collected view through supported handling. Neither timeout nor older data proves absence. Don't create another request or repeat effects without understanding recovery and duplicate handling.

## Review a proposed disable design

A team needs ISC to disable departed contractors in a hosted research application. Its source uses a read-only SaaS connector configuration and successfully collects accounts.

The external API offers disable, but the team hasn't established a supported write-capable connector path or the external authority required for that operation.

The proposal assumes administrator credentials, a green connection test and successful reads prove that the current source can disable accounts.

What is established, what is missing, and what evidence is needed before approving the design?

**Worked reasoning:** The current configuration can perform the reported reads through its SaaS path. Those observations don't implement a write in a read-only connector.

Establish a supported design for the exact disable operation and relevant account types. Then validate destination, required path, source settings, caller authority, valid inputs and target outcome. Confirm applicable activation or licensing conditions.

Administrator credentials don't implement missing connector behaviour and can add unnecessary exposure. Require operation-specific evidence.

Explain the connection to the team: reachability gets the caller to a service; authentication establishes its context; authorization permits an action on a resource. Supported connector behaviour and valid information are still required, and the intended result is verified separately.
