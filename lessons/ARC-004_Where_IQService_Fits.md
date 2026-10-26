# Where does IQService fit?

An access change approved in SailPoint Identity Security Cloud (ISC) still has to be carried out in the system that holds the account. For some integrations, that includes work performed on Windows.

The component is **IQService**, also called the **Integration Service**. It is a Windows service used by supported connectors for operations needing its Windows-side capabilities.

A **Windows service** is a program managed by Windows that can run without someone keeping an interactive desktop session open. IQService provides access to supported Windows APIs. An **application programming interface**, or **API**, lets software request information or actions from another component.

Installing IQService adds a component to particular connection paths. It doesn't install the hosted ISC application on a Windows server.

## Establish whether this operation needs IQService

A **connector** is integration software that communicates with a managed system. A **source** is ISC's configured representation of that connection and its account data.

**Provisioning** carries out supported account or access changes. **Aggregation** collects account or access information into ISC. Those labels describe the work, but the selected connector's requirements determine which components perform it.

For the ISC Active Directory connector, IQService is required for all provisioning. It also participates in reading certain information, including Terminal Services attributes, which concern Windows remote-session use.

That doesn't mean you must use those special attributes before ordinary group provisioning needs IQService. The provisioning requirement already applies.

Conversely, calling an operation a read doesn't establish that it bypasses IQService. Required fields, enabled features and the supported account arrangement can affect its path.

Other connectors have their own requirements. A supported SaaS connector can execute in SailPoint's hosted environment without this Windows service. **Software as a service**, or **SaaS**, means provider-operated hosted software.

Begin with the configured source, required operation and relevant fields. “Does this operation use IQService?” is more useful than assuming either every read or every write follows one universal path.

## Give each component a distinct job

An ISC **tenant** is an organizational environment in the hosted service. It contains the applicable configuration, represented identity information, access decisions and tracked activity.

A **Virtual Appliance**, or **VA**, is a customer-deployed Linux-based virtual machine used for VA-based integration work. A **virtual machine** is a software-defined computer using resources supplied by its host. A **VA cluster** groups appliances associated with sources.

The VA environment performs the applicable connector work. IQService performs its supported Windows-side work on a supported Windows server with the required target connectivity.

The **target system** holds the account or permission being managed. In this example it is **Active Directory**, Microsoft's directory service for accounts, groups and related information.

A **domain** groups directory accounts and other objects under a shared name and administration. A **domain controller** provides directory services for its domain, including account and group information. A Windows server running IQService still needs appropriate communication with the relevant target; it isn't automatically the domain controller.

IQService isn't a Windows version of the VA. Adding it doesn't remove the VA from a VA-based source. Neither component decides, merely by being present, which business access a person should receive.

## Define the group change before following the connection

Suppose an existing directory account, `docs-reader`, needs access to read engineering documents.

A **group** is a directory object that collects members. Under this example's document-system permissions, membership in `ENG-Docs-Readers` provides the required reading access, subject to the document system's own checks. The group name alone doesn't establish those permissions.

An **entitlement** is an access item represented from a source. Here, ISC represents the relevant group membership as an entitlement.

An **identity** is ISC's person-level record. An **account** is a record in an external system, with ISC keeping a representation of it. The recipient's existing account is correctly associated with the intended identity.

That relationship is **account correlation**: matching and assigning a source account to an identity through configured comparisons. It identifies whose account it is; it doesn't add the group membership.

The source **Engineering Directory** uses the ISC Active Directory connector and cluster `eng-prod`, containing `va-01` and `va-02`. Its IQService configuration points to `iqservice.corp.example` and the service's configured secure listening port.

A **port** identifies a network service endpoint on a host. A **listener** accepts incoming connections at the configured endpoint. The source must call the host and port where the intended IQService instance actually listens. The example hostname is fictional.

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source. Here, **Read engineering documents** contains only the relevant group entitlement from Engineering Directory.

Assume the permitted request passes its configured review, the intended existing account is selected, and automatic provisioning is configured for the supported operation. No account creation, custom script or extra access dependency is needed.

The target change is precise: add `docs-reader` to `ENG-Docs-Readers` in the intended production directory.

## Which account supplies which authority?

A **service account** is an account software uses for an operational purpose rather than a person's everyday login. A **credential**, such as a password, is used to establish the caller's accepted identity or access context.

**Authentication** establishes that context. **Authorization** determines whether the actor may perform a particular operation. Being accepted by IQService isn't the same as being authorized to change a directory group.

Keep these roles separate in the example:

| Role | Example account | Contribution |
|---|---|---|
| Recipient | `docs-reader` | Receives the group membership |
| Source's target-management account | `CORP\svc-ad` | Supplies the configured authority for the directory operation |
| IQService client-authentication user | `CORP\svc-iq-client` | Authenticates incoming integration requests to IQService |
| IQService Windows service logon account | `CORP\svc-iq-run` | Runs the service process and provides its Windows execution context |

`CORP` is a hypothetical Windows domain label. These names illustrate roles, not actual credentials or commands.

The client user must exist in Windows, be registered with IQService and authenticate under the documented arrangement. **Registration** configures which Windows user identities IQService accepts as clients. It doesn't create that Windows account or grant directory permissions.

The Windows service logon account needs the local permissions required to operate the service and use its resources. Starting the process doesn't automatically authorize it to administer every directory object.

For the supported target operations described in IQService's requirements, the source's configured service account supplies the target-management context. Changing the admitted client user doesn't supply more directory privileges to that account.

These are four roles, not a universal requirement for four different usernames. Documentation permits some roles to share an account. One username then performs multiple jobs, but the admission, local execution and target-authorization checks still have different purposes.

## Follow a successful assignment

ISC prepares the supported work for the identified source, recipient account and group. Connector work in the VA environment sends the applicable request to the configured IQService endpoint.

The VA must reach that listener through the required protected connection. IQService checks the incoming client under its configured security requirements before processing the request.

For the authorized operation in this example, IQService performs the supported Windows-side work using the applicable target-management credentials. Active Directory evaluates the request and applies the membership change. Results return through the integration for ISC's activity tracking.

```text
ISC: approved supported change
  |
  | Work and returned results
  v
VA: Active Directory connector work
  |
  | Request to configured IQService
  v
Windows host: IQService
  |
  | Supported directory operation
  v
Active Directory: account and group

This map covers the stated group update.
```

The lines show the stated group-provisioning path and returning work/results, not every read or a packet-by-packet sequence.

The VA initiates its required cloud communication. Work originating in ISC doesn't imply a new unsolicited inbound internet connection to the Windows server.

There are also two different downstream connections: VA to IQService, and IQService to the target. A working first connection doesn't establish the second one's reachability or authority.

Approval, admission to IQService and applied directory membership are separate events. A failure between them can leave the business approval intact while the account still lacks the group.

## What makes the connection trusted?

**Transport Layer Security**, or **TLS**, protects communication in transit and supports checking the server's identity. For the VA-to-IQService connection, the VA must establish trust in the intended IQService endpoint.

A **certificate** binds an identity, such as a hostname, to a **public key**. That shareable key is used to verify cryptographic proofs made with its matching **private key**, which the server keeps secret.

IQService needs the matching private key and the required account access to use it. Copying the certificate onto the host doesn't establish that the service logon account can use the associated key.

A **certificate authority**, or **CA**, issues certificates. A **trust chain** links the endpoint certificate to an authority the client trusts. Certificate validity and the configured hostname must also meet the applicable requirements. The private key stays with the server; the VA needs the appropriate trust configuration for the certificate chain.

For example, a certificate for a different host doesn't identify `iqservice.corp.example` merely because both hosts belong to the same organization. An expired certificate is another distinct validity problem.

TLS and **client authentication** answer different questions. TLS protects the channel and validates the intended server under its trust requirements. Client authentication checks the identity presenting the integration request.

In the documented IQService mechanism, the request carries the configured client's credentials. IQService checks that the user is registered, then authenticates those credentials with Windows before processing the request.

A trusted server therefore doesn't establish an admitted client. An admitted client doesn't establish target-group authority.

```text
VA reaches intended IQService listener
  |
  v
Trusted TLS connection to intended host
  |
  v
Registered client authenticates
  |
  v
Required IQService capability available
  |
  v
Target permits this operation

Separate verification after the attempt:
  Engineer examines operation result
  Engineer checks target membership
```

The arrows connect prerequisites for this secured operation. They show what must be satisfied, not a packet-by-packet sequence or a promise that every attempt reaches the target.

The verification lines describe an engineer checking evidence. They do not promise an automatic target read after every write.

The Active Directory connector requires TLS for IQService, with client authentication required in the stated secured arrangement. Follow the supported configuration when correcting a connection problem; disabling the checks would remove the protection the connection requires.

The IQService-to-target connection has its own documented security requirements. Configuring trust on the VA-to-IQService leg doesn't automatically configure that other leg.

## Now change one condition: the certificate expires

Consider a separate hypothetical run with these observations:

- Both VAs can communicate with ISC.
- A basic directory-account read succeeds through its configured path.
- The provisioning attempt reaches the configured IQService endpoint, but the VA rejects its expired certificate during TLS setup.
- The request isn't admitted for target execution through that connection.
- Current directory evidence confirms that the intended group membership is absent.

The evidence places the failure at the VA-to-IQService trust boundary. The business approval and recipient password don't correct certificate expiry.

The basic read doesn't contradict that failure. In this example, it uses fields and a configured read path that don't require the rejected IQService interaction. The VA connector reads the directory and returns that data to ISC without taking this additional leg.

That is not a rule that every directory read bypasses IQService. Different fields, features or account arrangements can introduce an IQService dependency.

The authorized certificate correction must address the actual endpoint: valid identity and dates, trusted chain, associated private key, service-account access and compatible source settings. Replacing one certificate file isn't proof that all those conditions hold.

Then reconcile or recover the failed operation through the supported process and verify the intended directory membership and recorded result. Restored trust doesn't retroactively complete the failed assignment.

These facts establish a before-execution rejection in this case. A different timeout or connection error needs its own evidence before you infer that no target change occurred.

## Read each status at its actual scope

A source configuration page records selected hosts, ports, security settings and credentials. Saved settings establish configuration, not successful execution.

A VA's **Connected** state concerns that appliance's operating condition. It doesn't certify the IQService listener, client authentication, enabled operation capability or directory privilege.

Windows reporting a service as **Running** establishes that the process is running. The listener can still be unreachable from a VA, a different endpoint can be configured, or the required capability can be unavailable.

A **connection test** runs the checks implemented by the connector. Its success doesn't establish that every group, account type, script or password operation will work.

Match the evidence to the unresolved boundary:

| Evidence | What it helps establish | What it doesn't establish alone |
|---|---|---|
| Actual VA and source association | Which connector environment handles the work | Successful IQService or target interaction |
| Endpoint, port and TLS error | Reported connection and trust failure | Wrong recipient credentials |
| Client-registration or Windows-authentication error | Whether the incoming client was admitted | Correct target-management privilege |
| IQService detail and target audit | Target action and credential context involved | Success of every other step or script |
| ISC provisioning activity | Tracked source, recipient, action, progress, result and errors | Continuously current target membership |
| Intended directory membership checked | Assignment exists at the observed target/time | ISC's collected account view is already refreshed |

Preserve timestamps and target context. A check before a certificate change doesn't establish the current connection. A laptop check isn't a test from the actual VA.

Collect relevant logs without exposing passwords, private keys or unrestricted trace files. Even a log without a password can contain sensitive account or operational information.

## A script adds another execution dependency

A **native before/after script** is connector-side customization run through supported IQService mechanisms around applicable provisioning work. The connector sends the configured script to IQService for that execution. A before script can prepare or adjust work; an after script can perform defined follow-up actions.

Under the supported scripting interface, a script can also modify applicable request or result information. Here, the connector request means the account-operation instructions, not the person's original access-request review.

A **handler** is the IQService capability supporting a category of requests. A running service doesn't establish that every handler is enabled.

The current IQService configuration disables `ScriptExecutor`, the native before/after provisioning script capability, by default. Related functionality requires TLS and explicit enablement. Enable the capability justified by the design rather than every available handler.

The main group assignment needs no custom script. If another design uses one, check its enabled capability, approved script and supporting files, execution context and required authority.

**PowerShell** is a Windows automation environment used by applicable scripts and operations. Depending on the supported arrangement, scripts can use the IQService service logon context when the source account isn't used. Check the actual script context rather than assuming all IQService work runs as one account.

Also, “after” doesn't mean “only after success.” A configured after script can execute even when the primary provisioning operation fails. A follow-up message is evidence about the script, not proof that the directory membership was applied.

Inspect primary operation results, script results and actual target effects separately. Multiple effects don't create a universal guarantee that failure rolls everything back.

## Who maintains IQService?

Your organization hosts the Windows server and maintains the operating environment, accounts, connectivity, certificates and operational controls.

SailPoint supplies IQService software and its supported update mechanism. **UpdateService** is the companion service used for supported IQService software updates. Automatic updating requires the supported arrangement to be configured; it isn't universal for every deployment.

In the documented VA-based update path, the VA downloads the update package and passes it through IQService to UpdateService for application. A separate direct internet download path from the Windows host isn't required for that arrangement.

Configuration, supported deployment/version, credentials, certificate/key access, backups and change validation still need attention. Use current requirements rather than an old installation's remembered settings.

A **shared dependency** is a component on which more than one source or operation relies. One IQService instance can serve multiple sources, creating a common maintenance and failure boundary.

Both example VAs call the same `iqservice.corp.example` endpoint. If that service stops, another healthy VA doesn't provide an alternative IQService instance.

Windows-side continuity needs its own supported availability design and consistent configuration/security. Adding another VA alone doesn't create it.

## Let the error guide the correction

An unreachable-service error calls for the actual host, port, listener and relevant network path. Certificate rejection calls for identity, validity, trust and required key access at that endpoint.

A registration or Windows-authentication error calls for the client identity and the account condition described by the evidence. A target denial after admission calls for the actual target-management context and authority over the intended object.

These are different evidence-based investigations, not a prescribed sequence of random tests.

**Least privilege** means giving each role the authority needed for its approved work. It doesn't justify omitting required local service permissions, and it doesn't mean granting broad directory administration to repair a certificate mismatch.

Likewise, the recipient password doesn't repair an unrelated integration-client lockout.

Restarting can interrupt other work; reinstalling can alter configuration or lose useful evidence. Establish the failed dependency, affected scope and authorized correction before selecting an operational action.

## Work through the separate cases

### 1. The basic read succeeds

Engineering Directory collects basic fields, but a change requiring IQService cannot connect to its endpoint. Someone concludes IQService is unnecessary because the accounts are visible.

Does that conclusion follow?

**Worked reasoning:** The read establishes its own path and fields. Active Directory provisioning and certain reads require IQService. Inspect the failed operation and endpoint evidence rather than treating a narrower successful read or stored account view as complete connector health.

### 2. The endpoint certificate has expired

Both VAs can communicate with ISC. The supplied provisioning error identifies rejection of the IQService endpoint's expired certificate, before admission for execution. The intended membership remains absent.

Which boundary failed, and what needs verification after correction?

**Worked reasoning:** Correct the intended endpoint's certificate/trust arrangement through the approved process, retaining required TLS and client authentication. Recipient password changes or broader directory authority don't repair the reported failure. Recover the affected work and verify its result and target membership. This supplied rejection is before execution; don't generalize that conclusion to every timeout.

### 3. Windows knows the user, but IQService doesn't

TLS succeeds. The error explicitly identifies `CORP\svc-iq-client` as unregistered with IQService. The Windows account exists and is enabled; no target work is admitted.

Would extra rights for `CORP\svc-ad` solve this?

**Worked reasoning:** Windows account existence doesn't complete IQService registration. Check the approved client registration and source credentials. Directory authority might matter after admission, but expanding it doesn't address this stated failure.

### 4. Admission succeeds, but the group update is denied

TLS and client authentication succeed. The target audit identifies `CORP\svc-ad` and denies its membership update on `ENG-Docs-Readers`. IQService runs under `CORP\svc-iq-run`.

Which account's directory authority does the audit identify?

**Worked reasoning:** The supplied audit identifies the source's target-management account. Investigate its authority over the intended group and the source credential context. Changing the client user or process logon doesn't automatically correct that denial. Validate the scoped correction with the directory owner, then recover and verify the change.

### 5. The after script reports follow-up completion

A configured after script writes “follow-up completed.” The primary provisioning result reports failure, and the directory confirms the membership is absent.

Does the message establish successful provisioning?

**Worked reasoning:** After-provisioning execution is not restricted to primary success. Compare the primary result, script effects and directory state. The message doesn't establish the group assignment, cancel the failed result or prove rollback of other effects.

### 6. Two healthy VAs share one stopped service

Both VAs are Connected. Their configured IQService endpoint is stopped for Windows maintenance. Two source owners report failed operations using it.

Why doesn't the second VA keep those operations working?

**Worked reasoning:** Both appliances still depend on the same unavailable service. Identify affected sources and work, follow the supported maintenance/recovery plan and verify outcomes after restoration. Required continuity needs a Windows-side availability design; VA redundancy alone doesn't provide it.

## Apply the reasoning to a read operation

A different connector's documentation requires IQService for a particular account-data read. A reviewer dismisses the requirement because “IQService is only for writes.”

After installation, Windows reports the service as Running, but the required handler is disabled. No completed read is supplied.

Explain both mistakes and the evidence needed.

**Worked reasoning:** Follow the connector's operation, field and feature requirements. A read can require supported Windows-side work; its label doesn't exclude IQService.

A running process also doesn't establish an enabled, usable capability. Check the required handler and security prerequisites, selected endpoint, admitted request and actual read outcome. Enable only the capabilities justified by the approved design.

Explain the connection to another engineer: the VA performs its connector work, IQService performs the required Windows-side part, and the target still applies its own authority checks. The connections, credentials and actual outcome each need evidence.
