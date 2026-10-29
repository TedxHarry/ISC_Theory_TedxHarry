# Where does IQService fit?

An approved group change in SailPoint Identity Security Cloud, or **ISC**, still needs software to carry out the change in the directory.

For supported operations that need Windows-side capabilities, **IQService**, also called the **Integration Service**, performs that part of the work.

IQService is a **Windows service**: a program managed by Windows that can run without someone keeping a desktop session open.

It gives supported connectors access to Windows **application programming interfaces**, or **APIs**. An API lets software request information or actions from another component.

The distinction is practical. ISC records the access decision and initiates supported work. IQService supplies the required Windows-side execution. The system holding the account still evaluates and applies the requested change.

## Begin with the operation the connector needs to perform

A **connector** is integration software that communicates with a managed system. A **source** in ISC holds configuration and represented account information for that connection.

**Provisioning** carries out supported account or access changes. **Aggregation** collects account or access information into ISC.

Those terms describe the work. The selected connector's requirements tell you which components it needs.

**Active Directory**, Microsoft's directory service, holds accounts, groups and related information. Its ISC connector requires IQService for all provisioning, including an ordinary supported group-membership change.

It also uses IQService to read certain fields, including **Terminal Services attributes**, information about Windows remote-session use.

You do not need to use those special fields before group provisioning requires IQService. The provisioning requirement already applies.

A read can also need IQService. Check the required fields, enabled features and supported account arrangement instead of assuming every read avoids the service.

Other connectors have different paths. A supported SaaS connector can run in SailPoint's hosted environment without this Windows service. **Software as a service**, or **SaaS**, means provider-operated hosted software.

Start with the configured source and the exact operation it needs. That establishes whether IQService belongs in this connection.

## Put ISC, the VA and IQService in their places

An ISC **tenant** is your organization's environment within the hosted service. It holds configuration, represented identity information, access decisions and tracked activity.

A **Virtual Appliance**, or **VA**, is a customer-deployed Linux-based virtual machine used for applicable integration work.

A **virtual machine** is a software-defined computer using resources supplied by its hosting platform. A **VA cluster** groups appliances for the sources associated with it.

In a VA-based connection, the VA environment performs the applicable connector work. For the supported Windows-side part, it communicates with IQService on a supported Windows server.

That server needs connectivity to the **target system**, the system holding the account or permission being managed.

For our directory change, the target is Active Directory. A **domain** groups directory accounts and other objects under shared naming and administration. A **domain controller** provides directory services for its domain, including account and group information.

A Windows server running IQService still needs the required target communication. Installing the service does not automatically make that server a domain controller.

IQService also does not replace the VA or install the hosted ISC application on Windows. It adds the Windows-side component required by the selected connection.

The components perform work. Their presence does not decide which access the organization should allow a person to receive.

## Give the group change a precise purpose

An existing directory account, `docs-reader`, needs permission to read engineering documents.

A **group** is a directory object that collects members. In this example, the document system gives members of `ENG-Docs-Readers` the required reading access, subject to its own checks.

That permission meaning is supplied by the example's configuration. A group name containing Readers would not establish its actual rights by itself.

An **entitlement** is an access item represented from a source. ISC represents this group membership as an entitlement.

An **identity** is ISC's record representing a person. An **account** is a record in an external system, with ISC keeping its representation.

Here, docs-reader already exists and is correctly associated with the intended identity. **Account correlation** establishes that association using configured comparisons of account and identity information. Linking the account to its person does not add the group membership.

The source is **Engineering Directory**. It uses the ISC Active Directory connector and cluster `eng-prod`, whose members are `va-01` and `va-02`.

Its IQService settings point to `iqservice.corp.example` and the service's configured secure listening port. The hostname is hypothetical.

An **endpoint** is the address of the service a component contacts. A **port** identifies a particular network service on a host.

A **listener** accepts incoming connections at the configured endpoint. The source needs the host and port of the intended IQService instance.

An **access request** asks for specified access for a recipient. An **access profile** bundles related entitlements from one source.

Here, **Read engineering documents** contains only the relevant group entitlement from Engineering Directory. The recipient does not already hold that profile or membership.

The permitted request passes its configured review. The intended existing account is selected, and automatic provisioning is configured for this supported update. No account creation, custom script or additional access dependency is needed.

The target change is now clear: add docs-reader to ENG-Docs-Readers in the intended production directory, the environment used for live work.

## Separate the accounts before following the change

A **service account** is an account software uses for an operational purpose, rather than a person's daily login.

A **credential**, such as a password, is information used to check the caller's identity. **Authentication** performs that check under the configured requirements. **Authorization** determines whether the actor may perform a particular operation.

There are four roles to keep separate:

| Role | Example account | What it does |
|---|---|---|
| Recipient | `docs-reader` | Receives the group membership. |
| Source's target-management account | `CORP\svc-ad` | Supplies the configured authority for the directory operation. |
| IQService client-authentication user | `CORP\svc-iq-client` | Authenticates the incoming integration request to IQService. |
| IQService Windows service logon account | `CORP\svc-iq-run` | Runs the service process under its Windows account context. |

CORP is a hypothetical Windows domain label. The names identify roles, not actual credentials or commands.

Start with the client user. Before IQService processes the incoming request, it needs to accept that client.

**Registration** configures which Windows user identities IQService accepts as clients. The Windows user must already exist, be registered with IQService and pass Windows authentication under the supported arrangement.

Registration does not create the Windows account. An account existing in Windows does not register it with IQService either.

When the request passes the required client checks, it is **admitted** for processing. That establishes who may submit this work to IQService. It does not establish directory-group authority.

Now consider the service logon account. It runs the Windows program and needs the local permissions required to operate the service and use its resources.

A **process** is a running program. Starting the IQService process under CORP\svc-iq-run does not automatically give it authority to administer every directory object.

For the supported target operations described in IQService's requirements, the source's configured service account supplies the target-management context. In our example, that is CORP\svc-ad.

Changing the client user would change the identity seeking admission to IQService. It would not add directory privileges to CORP\svc-ad.

These are four roles, not a requirement to invent four different usernames for every deployment. Documentation permits some roles to share an account, including the service logon user also being the registered client.

When one username performs multiple jobs, the admission, local execution and target-authorization checks still have their separate purposes.

## Follow the successful assignment to the directory

ISC prepares supported work identifying Engineering Directory, docs-reader and ENG-Docs-Readers.

Connector work in the VA environment sends the applicable request to the configured IQService listener. The VA needs to reach that listener using the required protected connection.

IQService checks the incoming client under its security requirements before processing the request.

For this authorized operation, IQService performs the supported Windows-side work using the applicable target-management credentials. Active Directory evaluates the request and applies the membership change.

The integration returns the result for ISC's activity tracking. The intended directory account now belongs to the group.

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
It includes returning work/results.
```

Follow each component's job rather than reading the arrows as individual packets. This is the stated group-provisioning path, not every directory read.

The VA initiates its required cloud communication. Work originating in ISC does not require an unsolicited inbound internet connection to the Windows server.

The downstream connections are separate too: VA to IQService, then IQService to the target. Reaching IQService does not establish the second connection's reachability or authority.

Business approval, admission to IQService and applied directory membership are separate events. If an intermediate step fails, the approval can remain while the account still lacks the group.

## Establish trust in the service, then check the caller

**Transport Layer Security**, or **TLS**, protects data while it travels between components and supports checking the server's identity.

For the VA-to-IQService connection, the VA needs to establish that it is communicating with the intended IQService endpoint.

A **certificate** binds an identity, such as a hostname, to a **public key**, which can be shared. Its matching **private key** stays secret.

For certificate-based TLS, the server must prove it can use that matching private key. The public key helps the client check the proof without receiving the server's secret key.

IQService needs that matching private key and the required account access to use it. Copying a certificate onto the Windows host does not establish that the service logon account can use its associated key.

A **certificate authority**, or **CA**, issues certificates. A **trust chain** links the endpoint certificate to an authority the client trusts.

The certificate also needs valid dates and the correct endpoint identity under the applicable requirements. A certificate for another host does not identify iqservice.corp.example simply because both hosts belong to the same organization.

The private key stays with the server. The VA needs appropriate trust configuration for the certificate chain.

Once the protected connection is established, client authentication has a different question to answer: is the caller accepted?

In the documented IQService mechanism, each request carries the configured client's credentials. IQService checks that the user is registered, then authenticates those credentials with Windows before processing the request.

The trusted server and the admitted client are different facts. The target's permission to change ENG-Docs-Readers is another check again.

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

This map connects prerequisites for the secured operation. It does not specify packet order or promise that each attempt reaches the target.

The final lines describe an engineer verifying evidence. They do not promise an automatic target read after every write.

The Active Directory connector requires TLS for IQService, with client authentication required in this secured arrangement. Keep those required protections when correcting a connection problem.

The IQService-to-target connection has its own documented security requirements. Trust configured on the first connection does not automatically configure the other one.

## Change one condition: the certificate has expired

Now consider a separate run in which the intended group membership has not been delivered.

Use these hypothetical observations:

- Both VAs can communicate with ISC.
- A basic directory-account read succeeds through its configured path.
- The provisioning attempt reaches the configured IQService endpoint, but the VA rejects its expired certificate during TLS setup.
- The request is not admitted for target execution through that connection.
- Current directory evidence confirms the intended group membership is absent.

The evidence identifies the VA-to-IQService trust problem. Neither the business approval nor docs-reader's password changes the certificate's validity.

The successful read uses fields and a configured path that do not require the rejected IQService interaction in this example. The VA connector reads the directory and returns that information to ISC without taking this additional connection.

That explains how the read and failed provisioning can coexist. It is not a rule that every directory read bypasses IQService; other fields, features or account arrangements can require it.

The authorized certificate correction needs to address the actual endpoint: valid identity and dates, trusted chain, matching associated private key, required service-account access and compatible source settings.

Replacing one certificate file is only part of establishing that arrangement.

Then inspect and recover the affected operation through its supported procedure. **Reconciliation** means establishing how the recorded attempt relates to the actual target state, then using the appropriate supported handling.

Verify the directory membership and recorded result. Restored trust makes a prerequisite available again; it does not complete the earlier assignment retroactively.

A **timeout** means the expected response did not arrive within the applicable waiting period.

These supplied facts identify rejection before execution. A different timeout or connection error needs its own evidence before you conclude that no target change occurred.

## Read each displayed status at its own scope

The **front end** presents source settings, statuses and activity to the administrator. The **back-end work** includes connector execution, IQService processing and the attempted directory change.

A source configuration page records selected hosts, ports, security settings and credentials. Saving those settings establishes configuration, rather than a successful operation.

A VA's **Connected** state concerns that appliance's operating condition. It does not test every IQService listener, client, operation capability or directory privilege.

Windows reporting IQService as **Running** establishes that its process is running. A VA can still be unable to reach the listener, the source can point elsewhere, or a required capability can be unavailable.

A **connection test** runs the checks implemented by the connector. Its success is useful evidence about those checks, not every group, account type, script or password operation.

Match the observation to the unresolved question:

| Evidence | What it helps establish | What still needs separate evidence |
|---|---|---|
| Actual VA and source association | Which connector environment handles the work. | Successful IQService and target interaction. |
| Endpoint, port and TLS error | Reported connection and trust failure. | A problem with the recipient's credentials. |
| Client-registration or Windows-authentication error | Whether the incoming client was admitted. | Correct target-management privilege. |
| IQService detail and target audit | Target action and credential context involved. | Success of every other step or script. |
| ISC provisioning activity | Tracked source, recipient, action, progress, result and errors. | Continuously current target membership. |
| Intended directory membership checked | Assignment exists at that target and time. | ISC's collected account view has already refreshed. |

Preserve timestamps and target context. A check before a certificate change describes the earlier condition. A laptop check is not a test from the actual VA.

Collect relevant logs without exposing passwords, private keys or unrestricted trace files. Logs can contain sensitive account and operational information even when no password is present.

## A script adds its own execution requirements

A **script** is a set of instructions that performs defined actions. A **native before/after script** is connector-side customization executed through supported IQService mechanisms around applicable provisioning work.

The connector sends the configured script to IQService. A before script can prepare or adjust work; an after script can perform defined follow-up actions.

Under the supported scripting interface, a before script can modify applicable request information and an after script can modify result information. The connector **request** here means account-operation instructions. It is different from the person's original access request and approval.

A **handler** is an IQService capability for a category of requests. A running Windows service does not establish that every handler is enabled.

Current IQService configuration disables **ScriptExecutor**, the native before/after provisioning script capability, by default. Its functionality requires TLS and explicit enablement.

The main group assignment needs no custom script. If another design uses one, check its enabled capability, approved script and supporting files, execution context and required authority. Enable the capability justified by that design.

**PowerShell** is a Windows automation environment used by applicable scripts and operations.

An **execution context** determines the account authority under which work runs. Under supported arrangements, scripts can use the IQService service logon context when the source account is not used. Establish the actual script context rather than assigning every operation to one account by assumption.

Also check what “after” means. A configured after script can execute even when the primary provisioning operation fails.

A follow-up message establishes that part of the script ran. It does not establish that Active Directory applied the group membership.

Inspect the primary operation result, script result and actual target effects separately. Several effects do not imply automatic **rollback**, undoing all changes if something fails.

## Maintain the Windows service as well as the VA path

Your organization hosts the Windows server and maintains its operating environment, accounts, connectivity, certificates and operational controls.

SailPoint supplies IQService software and its supported update mechanism. **UpdateService** is the companion service used for supported IQService software updates.

Automatic updating needs the supported arrangement to be configured. It is not universal for every deployment.

In the documented VA-based update path, the VA downloads the update package and sends it through IQService to UpdateService for application. That arrangement does not require a separate direct internet download from the Windows host.

Supported deployment/version, configuration, credentials, certificate/key access, backups and change validation still need attention. Use current requirements when planning the work.

There is also a shared availability dependency to identify.

A **shared dependency** is a component on which more than one source or operation relies. One IQService instance can serve multiple sources, so maintenance or failure can affect them together.

Both example VAs call iqservice.corp.example. If that service stops, switching work to the other healthy VA still leads to the same stopped service.

Continuity on the Windows side needs its own supported availability design and consistent configuration/security. Adding another VA alone does not create an alternative IQService instance.

## Let the reported failure guide the correction

An unreachable-service error calls for evidence about the actual host, port, listener and relevant network path.

Certificate rejection calls for the intended identity, valid dates, trust and required key access at that endpoint.

A registration or Windows-authentication error calls for the client identity and the account condition identified by the evidence.

A target denial after admission calls for the actual target-management account and its authority over the intended object.

Those investigations address different dependencies. They are not a prescribed sequence of random tests.

**Least privilege** means giving each role the authority needed for its approved work. That includes required local service permissions. It does not mean granting broad directory administration to repair a certificate mismatch.

Likewise, changing docs-reader's password would not repair an unrelated integration-client lockout.

A restart can interrupt other work. Reinstallation can alter configuration or lose useful evidence. Establish the failed dependency, affected scope and authorized correction before choosing the action.

## Work through the separate cases

**A basic read succeeds, but a change requiring IQService cannot reach its endpoint. Does account visibility make IQService unnecessary?**

The read establishes its own configured path and fields. Active Directory provisioning and selected reads still require IQService.

Inspect the failed operation and endpoint evidence. A narrower read or previously collected account view does not establish the whole connection's health.

**The VA rejects an expired IQService certificate before admitting the request. The membership remains absent. What needs correction and verification?**

Correct the intended endpoint's certificate/trust arrangement through the approved process, keeping required TLS and client authentication.

Recipient password changes or broader directory authority do not repair expiry. Recover the affected work and verify its result and target membership. This case supplies rejection before execution; a general timeout does not establish the same outcome.

**TLS succeeds, but IQService reports CORP\svc-iq-client as unregistered. The Windows account exists and is enabled. Would extra rights for CORP\svc-ad help?**

No target work has been admitted in this case.

Windows account existence has not completed IQService registration. Check the approved registration and configured client credentials. More directory privilege would leave the stated admission problem unresolved.

**Client authentication succeeds. The target audit identifies CORP\svc-ad and denies its update to ENG-Docs-Readers. Which account's authority matters?**

The source's target-management account is identified by the supplied audit. IQService runs under CORP\svc-iq-run, but that is not the actor named in this directory denial.

Check the source credential context and the identified account's authority over the intended group. Validate a scoped correction with the directory owner, then recover and verify the change. Changing the client or logon user does not automatically supply that target privilege.

**An after script reports “follow-up completed,” while the primary result failed and membership is absent. Did provisioning succeed?**

After-provisioning execution is not restricted to primary success.

Compare the primary result, script effects and directory state. The message does not establish the group assignment, cancel the failed result or prove that other effects were undone.

**Both VAs are Connected, but their shared IQService endpoint is stopped for Windows maintenance. Two source owners report failures. What did VA redundancy leave unresolved?**

Both appliances still depend on the same unavailable Windows service.

Identify affected sources and work, follow the supported maintenance/recovery plan and verify outcomes after restoration. Required Windows-side continuity needs its own availability design.

## Apply the reasoning to a read operation

A different connector's documentation requires IQService for a particular account-data read. A reviewer dismisses it because “IQService is only for writes.”

After installation, Windows reports the service as Running, but the required handler is disabled. No completed read is supplied.

Identify both mistakes and the evidence needed.

The connector's operation, fields and features establish the required components. A read can need Windows-side work; the read label does not exclude IQService.

The running process also does not establish an enabled, usable capability. Check the required handler, security prerequisites, selected endpoint, admitted request and actual read outcome.

Enable only the capabilities justified by the approved design.

Explain the connection to another engineer: which work belongs to the VA, which Windows-side work needs IQService, which account supplies each authority, and which evidence establishes the target result?
