# Virtual Appliances and clusters: where does the connection work happen?

An account is stored in an application. SailPoint Identity Security Cloud, or **ISC**, needs to read that account or change one of its permissions. Which machine actually contacts the application?

For a connection that uses a **Virtual Appliance**, or **VA**, the appliance performs the applicable integration work. ISC holds the configuration and initiates the work; the VA needs a working connection to the external system to carry it out.

That distinction helps explain an otherwise puzzling situation: you can open ISC successfully while an account update fails. Your browser reached ISC. The appliance still has a different journey to make.

## Where does the VA sit?

The VA is a Linux-based **virtual machine**, or **VM**, deployed in the customer's operating environment. A virtual machine is a software-defined computer that uses processing, memory and storage supplied by a hosting platform.

The organization provides that hosting environment and the required connectivity. The appliance runs the applicable integration software. It is not a local installation of the whole ISC application.

The hosted ISC environment for your organization is called a **tenant**.

Inside it, a **source** holds the configuration and represented account information for a system or account dataset. A **connector** provides the integration used to read information and perform supported changes in that system.

For example, a source can describe how ISC connects to an asset application. With a VA-based connection, the appliance performs the applicable connector work against that application. The source configuration stays part of the hosted tenant.

The distinction also applies to people and accounts. An **identity** represents a person in ISC. An **account** is a record in a particular external system, with ISC holding its collected representation.

Adding a second VA gives the deployment another appliance to perform work. It does not create another person or another application account, or decide which business permissions someone should receive.

There is also a connection path that does not require these customer-deployed appliances. **Software as a service**, or **SaaS**, means a provider-operated hosted software service. A **SaaS connector** uses its supported SaaS connectivity path without a customer-deployed VA for that connection.

Check the connector's documented options and the source's actual configuration. The application being hosted in the cloud does not, by itself, identify which connection path is in use.

## A source uses a cluster, and a cluster has members

A **VA cluster** is a configured group of appliances that supports the relevant connection work. Each appliance in that group is a **member**.

Suppose an ISC tenant has two sources: Assets-Production and Operations-Directory. Both use a cluster named `assets-prod`. Its members are `va-01` and `va-02`.

Here, **production** means the environment used for live operations. The names identify this hypothetical configuration.

```text
ISC production tenant
  |
  +-- Assets-Production ------+
  |                          |
  +-- Operations-Directory ---+
                             |
                             v
                       assets-prod
                       VA cluster
                         |
                         +-- va-01
                         +-- va-02

Lines show configured associations.
They do not copy each job to both VAs.
```

Start at Assets-Production and follow its line. Its work belongs to assets-prod. Then look at the two members that can handle work for that cluster.

SailPoint describes source operations being sent as requests to the associated cluster. Those waiting requests form a **queue**.

Each running VA **polls** its cluster's queue. Polling means repeatedly asking whether work is available. A member obtains work and performs the applicable connector operation.

Under the documented running-member arrangement, either member can pick up work. Creating va-01 first does not make it a permanent primary worker with va-02 always waiting idle.

This is why checking one appliance is only part of checking the deployment. The next operation can be handled by the other member. Every member that handles the source needs its required connectivity and configuration.

The diagram shows those associations, not network routes or an instruction to perform every operation twice.

Now follow the other source. Operations-Directory uses the same cluster, so a cluster problem can affect both sources.

Each source still has its own connection settings and target requirements. Its **credentials**, such as a password or access token, are used to establish the identity making the connection. A successful asset-system operation does not test the directory connection.

A connection test is also a particular operation. It tests what that connector's test is designed to check. Reading accounts and changing permissions require their own successful operations.

## How does cloud work reach an appliance inside the customer environment?

An ISC operation requests the work. The VA starts the required network communication with SailPoint's cloud services.

The VA uses that **outbound** communication to poll for its cluster's work. Cloud services can return work in response over the communication the appliance initiated.

Outbound describes how the communication begins. It does not mean information can travel in only one direction.

The VA then needs communication with the external system too. An **endpoint** is the address of the service or operation it contacts.

```text
Connection initiation
  VA --outbound--> Cloud services
  VA --target----> External system

Work over the configured connections
  VA asks for its cluster's work
  Cloud returns requested work
  VA performs target operation
  Target returns data or a response
  VA reports data/results to cloud

Responses use initiated communication.
The lines describe communication roles.
```

The first part shows where communication starts. The second shows how work and results pass between the participants. It does not specify private packet ordering, polling intervals, acknowledgements or retry rules.

An account collection beginning in ISC therefore does not require exposing a new public inbound service on the VA for each request.

Keep the two destinations separate when investigating a failure. A member can reach SailPoint's cloud services while being unable to reach the asset application.

Your laptop opening ISC tests another path again. It tells you about communication from your laptop, not whether va-02 can contact the configured application endpoint.

## Follow one permission change through the connection

An existing account, `asset-reader`, needs permission to view asset records. It is already associated with the intended ISC identity. In this example, `asset.read` allows viewing and excludes asset administration.

An **entitlement** is an access item represented from a source, such as a permission or group membership. Here, asset.read is the entitlement we want the account to receive.

An **access profile** bundles related entitlements from one source. **Read assets** contains only asset.read from Assets-Production.

An **access request** asks for specified access for a specified recipient. For this successful trace, the recipient does not already hold the profile or asset.read.

The request is permitted, the configured review approves it, and the integration supports adding that permission to the existing account.

Approval records the access decision. **Provisioning** performs supported account or access changes. The permission still needs to be applied in the external system.

ISC initiates the supported source operation for assets-prod. A running member obtains that work.

The connection uses an **integration account**, `svc-assets`, to perform the operation. asset-reader is the account receiving the permission. Keep those two accounts separate: one makes the change; the other benefits from it.

The connection uses svc-assets's credentials for **authentication**, which verifies the connecting actor. **Authorization** determines whether that actor may perform the requested operation.

For this successful run, the member reaches the correct asset system, the system accepts svc-assets's authentication, and that integration account has permission to perform the update.

The asset system is the **target**, meaning the system receiving the attempted change. It applies asset.read to asset-reader and returns the operation response through the integration.

Now we can connect the decision to the result: the required review approved the access, ISC initiated the work, a member performed the supported operation, and the asset system applied the intended permission.

Inspect the operation evidence and the actual target-account permission to establish delivery. Appliance availability, approval and an accepted credential each establish part of that chain.

The same connection also carries reads. **Aggregation** collects account or entitlement information into ISC. The member needs to find and reach the target, authenticate and read the requested information; ISC can then represent what was collected.

Read permission and update permission can differ. A connection can authenticate and collect accounts while the target refuses an update the integration is not authorized to make.

**Account correlation** uses configured comparisons to associate a source account with an ISC identity. That establishes which person an account belongs to. It is a different job from making the network connection that collects the account.

If a member cannot find the application's network address, investigate that connection problem. Changing person-matching rules will not supply the missing address.

## A saved VA name still needs a working machine

There are two sides to deployment: the appliance running in the hosting environment and its registration/configuration in ISC.

**Pairing** associates the deployed appliance with its tenant and cluster through the supported setup process.

A VA record can be saved without pairing. In that state, the record exists, but the appliance is not operational. The actual machine still needs completed setup, pairing and required communication.

The **cluster passphrase** is a setup secret. Its value must be consistent across the member VAs under the documented setup. It is separate from the local machine login password, svc-assets's integration credential and asset-reader's application password.

Protect those secrets through the approved deployment process. Do not copy another project's setup values into tickets, screenshots or casual notes.

You will also encounter **Cloud Connector Gateway**, or **CCG**. It is the cluster component used for the core connector connectivity discussed here, enabled by default for the applicable ISC VA clusters.

A cluster can support additional licensed components. Each can add resource requirements. An appliance set up for a different standalone component does not establish that source-connector connectivity is ready.

Check which components the deployment is intended to run and allocate the required resources. An available component checkbox is not a reason to enable it.

## Check the path from the member doing the work

A **dependency** is something an operation needs to succeed. For a VA-based connection, several dependencies must work together.

Begin with the source's configured endpoint and the member that attempted the operation. A successful test from another machine does not establish this member's path.

**DNS**, the **Domain Name System**, resolves a service name into an address. When the source uses an application hostname, the member needs to resolve that name before it can use the address to contact the application.

If that lookup fails, the connection cannot proceed using the configured name. Resetting an application password does not repair the lookup.

After finding the address, communication still needs a usable path. **Routing** determines the network path toward a destination. A **firewall** permits or blocks traffic according to configured rules.

Two appliances can have different paths or rules. A target reachable from va-01's network position may be unreachable from va-02's.

Reaching the server is also different from establishing the required secure connection. **Transport Layer Security**, or **TLS**, protects an applicable connection. Its configured certificate and trust checks help establish the server's identity.

A **certificate** provides identity information used in those checks. The VA needs appropriate trust for the configured connection. This is a different check from whether the application accepts the integration account's password or token.

**HTTP**, the Hypertext Transfer Protocol, carries web requests and responses. **HTTPS** protects that communication using TLS.

A **port** identifies a network service endpoint on a host. Our hypothetical asset connection uses HTTPS on port 443. Other connectors and target protocols have their own requirements.

A **proxy** forwards traffic for another component. With the documented HTTP proxy configuration, HTTP/HTTPS source traffic can also go through that proxy. Inspect the actual configuration and any bypass exceptions before assuming the VA contacts the application directly.

Bring the checks back to the operation:

| Dependency | What you need to establish |
|---|---|
| Running VM and resources | This appliance is running with the required processing, memory and storage. |
| Cloud communication | This member reaches the services required by its configuration and region. |
| Target name and path | This member resolves and reaches the configured application endpoint. |
| Secure connection | Applicable certificate, trust and connection requirements are satisfied. |
| Target identity and authority | The integration authenticates and may perform this particular operation. |
| Work and result | The intended operation ran, and its outcome is established. |

“Allow port 443” leaves several of these questions unanswered. Which destinations are allowed? Can the member resolve their names? Does its deployment mode use a proxy? What does the target protocol require?

The VA also needs **time synchronization**, keeping its clock aligned with the required time service.

Use current deployment requirements for resource sizes, supported hosting, required destinations, time services and ports. Values copied from an older project may describe a different environment.

## Read Connected at the appliance's scope

SailPoint describes **Connected** as the VA operating as expected.

Use that as appliance-health information, then investigate the specific operation. A member can maintain cloud communication while failing to resolve one application's hostname.

The health views answer different questions. A cluster view concerns the group and its members. An individual VA view concerns that appliance.

A **process** is a running program that performs work. A component/process view concerns that process's availability. A source or operation view concerns particular integration work.

For example, a component process marked **Busy** is unavailable for new processing or updates while in that state. That process status does not identify a tenant-wide outage.

Read warning and error details with their timestamps. An inactive member means one fewer appliance is available to handle work, even when another member is Connected.

The **front end** presents those records and statuses to the administrator. The **back-end work** still includes the member obtaining work and performing the external operation. The displayed scope matters when connecting the two.

## What does the second appliance protect?

**High availability**, or **HA**, means maintaining enough working capacity and redundancy to continue service when a component becomes unavailable. Redundancy gives the deployment another member that can perform work.

For standard core ISC VA deployments, current requirements call for at least one production cluster and one **sandbox** cluster, with at least two VAs per cluster. A sandbox is an environment used for testing. One saved VA record does not meet that design.

When one member becomes unavailable, another running member can handle cluster work. During **rolling updates**, members are updated and restarted one at a time.

The remaining member still needs sufficient capacity and the required source connectivity.

Now consider what the members share. Two appliances depend on their hosting environments; a common hosting failure can stop both. Two appliances that depend on the same broken route can both lose contact with the target.

Counting members tells you how many appliances exist. You also need to identify which failures their deployment can actually withstand.

Two members do not promise that one aggregation runs twice as fast. They also do not establish that an interrupted operation resumes from exactly where it stopped. Available capacity and completed work need separate evidence.

## Follow a remaining member that cannot find the target

Now consider a separate run in which asset-reader has not received asset.read. Assets-Production uses assets-prod with va-01 and va-02.

Use these hypothetical observations:

| Observation | What it establishes |
|---|---|
| The host running va-01 has failed. | That member cannot perform work. |
| va-02 is Connected and can poll cluster work. | The remaining member has the demonstrated cloud communication. |
| Operation evidence identifies va-02 handling the attempt. | This member attempted the work. |
| Diagnostics from va-02 show failure to resolve the configured target hostname. | This attempt fails before target authentication or the permission update. |
| Current target evidence shows asset.read absent from asset-reader. | The viewing permission is missing at the checked time. |

The second appliance preserved a running member. Its separate DNS problem prevented it from reaching the target using the configured name.

Compare the source endpoint and each relevant member's name-resolution and network setup. Use evidence from the member's position, rather than relying only on an administrator's laptop test.

The supplied failure occurs before the application checks svc-assets's credential. Resetting that credential, changing the recipient password or approving the request again would leave the name-resolution problem in place.

The authorized infrastructure/network team corrects the dependency. The ISC team then examines the failed work, uses its supported recovery procedure and verifies the intended target permission.

Restoring DNS makes the connection prerequisite available again. The operation result and current account permission establish whether the missing access was subsequently delivered.

## A separate healthy cluster needs the right source association

**Disaster recovery**, or **DR**, concerns restoring service after a broader failure, such as loss of a hosting location.

There are different documented arrangements. The source-to-cluster association explains why they behave differently.

In the **all VAs running** arrangement, members in different locations belong to the same cluster and run concurrently. Either location's members can obtain that cluster's work. If the primary-location members fail, the remaining members continue handling requests under that arrangement.

Each location still needs the target dependencies. **Latency** is communication delay; a more distant member can experience more delay when contacting the target. Evaluate that path with the actual workload.

The **switch-clusters** arrangement uses separate primary and DR clusters, both running. Sources initially use the primary cluster.

The DR machines are ready as a separate deployment, but those sources' requests still go to their associated primary cluster. Failover requires reassociating the sources with the DR cluster.

That documented procedure also requires reentering source credentials. Prepare authorized access to the required secrets before an outage.

Compare the relationships:

| Arrangement | Where the sources' work goes | Recovery implication |
|---|---|---|
| Running members across locations in one cluster | To the shared associated cluster | Surviving members can continue handling its work, with their own capacity and target dependencies. |
| Separate running primary and DR clusters | To the cluster currently associated with each source | Switching requires source reassociation, required credential reentry and verification of the recovery path. |

A **runbook** records the approved actions, conditions, responsibilities and verification for an operational task. For recovery, it should identify affected sources, target reachability from the recovery location, required configuration and credentials, and how resumed work will be checked.

Two healthy clusters are not one automatic tenant-wide pool. Their source associations determine which work they receive.

## Maintenance and replacement affect different things

For the standard SailPoint-provided image, SailPoint manages VA software updates. The organization provides hosting and connectivity and monitors the deployment.

Rolling updates support cluster continuity. Individual in-progress work, including applicable long-running aggregations, can still be interrupted under documented update conditions.

Busy process status helps coordinate updates, but it does not defer necessary updates indefinitely. Check the particular job's result afterward.

Standard VA guidance also states that an unconnected member prevents updates to the VAs in that cluster. Inspect the actual alert and follow the documented operational process.

An **operating system**, or **OS**, is the system software on which the VA components run.

A documented **customer-provided OS** option is available to selected customers on request under its conditions. It adds customer OS patching, maintenance and reboot responsibilities while requiring acceptance of applicable SailPoint software updates.

Establish which deployment option is actually in use before assigning maintenance work. Standard-image responsibilities do not describe every deployment.

For replacement or relocation, SailPoint strongly advises against moving or migrating existing VAs. Its documented approach creates new VAs, establishes connectivity, adjusts source associations as needed and then retires the old deployment through the approved process.

Before acting, inventory the affected sources and preserve evidence. The replacement approach does not mean deleting or rebuilding a live cluster is the first diagnostic step.

Restarting a cluster, reassociating a source and replacing a VM change different things. A cluster restart can affect integrations that were working too. Follow the procedure for the actual scope and verify affected work afterward.

## A lost response can mean something different from an unreachable target

The DNS case established that the attempt never reached target authentication.

Now suppose an operation reaches the asset system, the system applies asset.read, and the response is interrupted. The current account has the permission, while the recorded operation result is inconclusive.

A **timeout** means the expected response did not arrive within the applicable waiting period. By itself, it does not establish whether the target made the change.

Compare the current target state, relevant application audit evidence and recorded attempt. Determine the supported way to reconcile or recover that operation before repeating it.

**Reconciliation** here means establishing how the recorded attempt relates to the actual target state, then using the appropriate supported handling.

Losing the response does not mean the target automatically undoes its change, known as **rollback**. Establish what already happened before issuing another change. Whether a repeat is safe, and how duplicate requests are handled, depends on the operation.

The same distinction applies after appliances return. Connected again tells you about appliance health. Inspect interrupted reads and updates to establish what completed and what still needs attention.

ISC can also continue displaying previously collected accounts during a connection problem. That information describes the earlier observation. A failed read alone does not establish that a person left the organization or that all external accounts disappeared.

## Work through the connection decisions

**Only va-01 can handle the source because it was created first. Is that enough evidence?**

Follow the source's cluster association. In the documented running-member arrangement, either running member can obtain its work. Check actual member evidence and dependencies; creation order does not establish permanent ownership.

**An aggregation starts in the cloud. Must the team expose a new public inbound service on the VA?**

The work originates in ISC, but the VA initiates required outbound communication and receives responses over it. Use the supported network design. Work origin does not require the proposed inbound exposure.

**The remaining member is Connected, but its target-name lookup fails. Should the team reset the integration credential?**

The supplied failure occurs before target authentication. Check the endpoint and that member's DNS/path, correct the authorized dependency, then recover and verify the affected work. A credential reset does not repair name resolution.

**The primary cluster is unavailable. A healthy separate DR cluster exists, and the source still uses the primary. What is missing in switch-clusters recovery?**

The source needs reassociation through that procedure, including the required credential preparation. Check recovery-location connectivity, authorization, affected sources and resulting work. Powered-on DR machines alone have not switched the source.

**Two members exist. Does a rolling update guarantee every long-running aggregation finishes uninterrupted?**

Cluster continuity and an individual job's completion are different outcomes. Documented update conditions permit interruption. Inspect the actual job result and its supported recovery requirements.

**A response was lost, but current target evidence shows asset.read on the intended account. Does the timeout prove no change occurred?**

The account's current permission contradicts that conclusion. Compare the attempted operation and audit evidence to establish how it arose and how to reconcile the work. An incomplete response guarantees neither no effect nor rollback.

## Apply the reasoning to Payroll

A VA-based Payroll source uses two VAs on different hosts. Both depend on one network route to the Payroll server.

That route fails. Both VAs can still reach the required cloud services. The Payroll accounts visible in ISC were collected before the failure.

Which redundancy remains, what evidence is missing, and what would establish recovery?

There are still two appliances, but they share the failed target-network dependency. Both can reach the cloud while neither can use that route to Payroll.

Establish the configured cluster and target, each member's target-connectivity results, the network event and the affected reads and writes. The visible accounts are older observations, rather than current Payroll connectivity evidence.

The authorized network team corrects the route. The ISC team identifies and recovers affected work through supported procedures, then verifies relevant read and write outcomes within the connector's capabilities. Preserve unrelated approved access.

Explain the connection to another engineer: which cluster receives the source's work, how a running member obtains it, what that member needs to reach and use the target, and which evidence establishes the intended result?
