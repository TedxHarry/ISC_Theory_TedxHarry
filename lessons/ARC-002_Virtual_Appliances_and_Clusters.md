# Virtual Appliances and clusters: where does the connection work happen?

To read an account or change its access, SailPoint Identity Security Cloud, or ISC, needs communication with the system that holds it. Saving instructions in the hosted service doesn't, by itself, establish that connection.

For connections that use a **Virtual Appliance**, or **VA**, this customer-deployed component performs the applicable integration work against the external system. You need to establish both where the work comes from and which machine must be able to carry it out.

A second appliance can keep a worker available when the first is unavailable. It still needs its own working path to the target.

## What is actually running?

The VA is a Linux-based virtual machine deployed in the customer's operating environment to support applicable integrations with ISC.

A **virtual machine**, or **VM**, is a software-defined computer using resources supplied by a hosting platform. The VA needs a running machine, sufficient allocated resources and the required connectivity. A name in the ISC interface is only part of its setup.

An ISC **tenant** is an organizational environment in the hosted service. A **source** is its configured representation of a system or collection of account data. A **connector** provides the integration used to read data and perform supported changes.

With a VA-based source, the hosted service holds the source configuration and related information, while the VA performs the applicable connector work against the external system. The VA is not a complete local installation of ISC.

An **identity** represents a person in ISC. An **account** is a record in another system, with ISC keeping a representation of it. Running two appliances does not create two person identities or two application accounts. Appliances perform integration work; they don't multiply the people being governed or decide which business access those people should receive.

Not every connector uses this path. **Software as a service**, or **SaaS**, means a provider-operated hosted software service. A **SaaS connector** uses the supported SaaS connectivity path without customer-deployed VAs for that connection.

Check the connector's documented options and the actual source configuration. An application being hosted in the cloud doesn't, by itself, tell you which connector path is configured.

## A source is associated with a cluster

A **VA cluster** is a configured group of appliances supporting the relevant connection work. Sources are associated with the cluster; individual VAs are its members.

For example, suppose an ISC production tenant has two sources, Assets-Production and Operations-Directory. **Production** means the environment used for live operations. Both sources are associated with the cluster `assets-prod`, containing `va-01` and `va-02`.

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

Lines show configured relationships.
They do not send every job to both VAs.
```

The lines show source-to-cluster and cluster-to-member relationships. They do not describe network routes or duplicate every task onto both appliances.

SailPoint documents source operations as requests sent to the source's associated cluster, where they form a **queue**: work awaiting handling. Each running VA **polls** that queue, meaning it repeatedly asks for available work.

A connection test, an account collection and a supported permission update can all generate cluster work. They are different operations. Passing a connection test doesn't establish that every account read or permission update will succeed.

In the documented running-member arrangement, either member can pick up work. The first-created VA is not automatically a permanent primary worker, and the second is not automatically an idle standby.

That matters when testing a deployment. An operation isn't guaranteed to use the member you checked yesterday. Each member that can handle the source needs that source's required dependencies.

The shared cluster also creates a shared operational scope. A cluster issue can affect both sources. Each source still has its own connection settings, credentials and target requirements, so a successful Assets-Production operation doesn't validate Operations-Directory.

## Cloud-originated work can use a VA-initiated connection

The request originates from an ISC operation, but the VA initiates the required network communication toward SailPoint's cloud services.

The VA polls for work through that outbound communication and can receive a response over the communication it initiated. **Outbound** describes connection initiation here, not a rule that information can travel in only one direction.

You therefore don't need to expose a new public inbound service on the VA so that ISC can start an unsolicited connection for every aggregation.

The VA also needs communication with the configured external system. An **endpoint** is the address of the service or operation being contacted. Reaching cloud services and reaching the external endpoint are separate dependencies.

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
These are roles, not packet-level steps.
```

The first part identifies where communication is initiated. The work exchange describes responsibilities over the configured connections. It doesn't specify packet order, acknowledgements, polling intervals or retry rules.

A VA can reach SailPoint's cloud endpoints while failing to reach an application endpoint. Your laptop can also open ISC while that VA has a connectivity problem. Those tests originate from different machines and may use different network paths.

## Follow a supported operation through the member

An **entitlement** is an access item represented from a source, such as a permission or group membership. **Aggregation** collects account or entitlement information into ISC. **Provisioning** carries out supported account or access changes.

For a read, the VA's connector needs to find and reach the target, authenticate and read the requested records. ISC can then represent the collected information.

For a write, reaching the target is still necessary, but the target must also permit the particular change.

Suppose `asset-reader` is an existing account correctly associated with the intended identity. The example permission `asset.read` allows asset viewing, excluding asset administration.

An **access profile** bundles related entitlements from one source. Here, **Read assets** contains `asset.read` from Assets-Production. An **access request** asks for specified access for a specified recipient.

Assume the request is permitted, its configured review approves it, and the integration supports adding the permission to this existing account. ISC initiates that supported work for the source's cluster. A running member obtains the work and performs the applicable connector operation.

The connection uses an **integration account**, `svc-assets`, rather than the receiving account `asset-reader`. **Credentials** are the secrets or tokens used to authenticate the connection.

**Authentication** verifies the connecting actor. **Authorization** determines whether that actor may perform the operation. The target can accept the integration credential while rejecting a permission update it isn't authorized to make.

Under the successful conditions, the member reaches the correct target, authenticates and performs the permitted update. The target applies `asset.read` to `asset-reader`, and the operation response is returned through the integration.

To establish delivery, inspect both the operation evidence and the actual target-account permission. A working appliance, approved request or accepted credential alone doesn't establish that result.

**Account correlation** matches and assigns a source account to an ISC identity through configured comparisons. It concerns which person an account belongs to. It is different from the network connection used to collect or change that account.

A hostname lookup failure is a connection-stage problem, not a decision about which person owns the account.

## A saved VA record still needs a working appliance

Deployment involves both the actual machine and its registration/configuration in ISC.

**Pairing** associates a deployed appliance with its tenant and cluster through the supported setup process. A VA record can be saved without pairing, but it is not operational in that state.

The deployed machine must be configured, paired and able to complete the required setup and communication. Saving its name doesn't demonstrate those conditions.

The **cluster passphrase** is a setup secret whose value must be consistent across member VAs under the documented setup. It is different from a local machine login password, the external integration credential and the recipient's application password.

Keep setup secrets out of tickets, screenshots and casual notes. Use the approved deployment process rather than copying another project's values.

You can also encounter **Cloud Connector Gateway**, or **CCG**. It is the cluster component used for the core connector connectivity discussed here and is enabled by default for the applicable ISC clusters.

A cluster can support additional licensed components with their own resource requirements. A VA running a different standalone component doesn't establish that the source-connector component is configured. Verify the intended components and allocate their required resources; visibility of a component option isn't a reason to enable it.

## Check dependencies from the appliance doing the work

Begin at the configured endpoint and the member that actually attempted the operation. A successful check from a laptop or another VA doesn't establish that member's path.

**DNS**, the **Domain Name System**, resolves a service name into an address. If the VA cannot resolve the configured application name, it cannot use that name to find the target. An application password doesn't correct this name-resolution failure.

A **firewall** permits or blocks traffic according to configured rules. **Routing** determines the network path toward a destination. A target reachable from one network segment may be unreachable from another.

Reaching a server also differs from establishing the required secure connection. **Transport Layer Security**, or **TLS**, protects an applicable connection and includes certificate checks under the configured trust requirements. The server's certificate helps establish its identity; the VA must trust it appropriately.

**HTTP** is a protocol for exchanging web requests and responses. **HTTPS** protects that communication using TLS.

A **proxy** forwards traffic for another component. In the documented HTTP proxy configuration, HTTP/HTTPS source traffic can also pass through the proxy. Inspect the actual mode and any configured bypass exceptions instead of assuming every target connection is direct.

A **port** identifies a network service endpoint on a host. Requirements depend on the target protocol and connector. This asset-system example uses HTTPS on port 443; other targets need their own documented ports and connection requirements.

Bring these dependencies together when investigating:

| Dependency | Evidence needed |
|---|---|
| Running VM and resources | Appliance is running with required processing, memory and storage |
| Cloud communication | This VA can reach the required services for its configuration and region |
| Target name and path | This VA can resolve and reach the configured external endpoint |
| Secure connection | Applicable certificate trust and connection requirements are satisfied |
| Target identity and authority | Integration authenticates and can perform this particular operation |
| Work and result | Intended operation ran, and its outcome is established |

“Allow port 443” is incomplete on its own. Required destinations, name resolution, **time synchronization** to keep the appliance's clock aligned, deployment mode and target-specific ports still matter.

Use current deployment requirements for concrete resource sizes, supported hosting, destinations and network values. The reasoning remains useful when those details change; copied values from an older project may not.

## Connected is an appliance status

SailPoint describes **Connected** as the appliance operating as expected. That is useful appliance-health information, but it isn't a separate successful test of every operation on every source.

Read the health views at their actual scope. The cluster view concerns the group and its members. An individual VA view concerns one appliance. A component/process view concerns that process's availability. A source or operation view concerns particular integration work.

For example, a member can maintain cloud communication while failing to resolve the asset-system hostname. Both observations can be true.

The documented component status **Busy** means that process is unavailable for new processing or updates while in that state. The label alone does not establish a tenant-wide outage. Inspect the work, warning/error details and timestamps.

Similarly, an inactive member means the deployment has lost part of its redundancy. Another member showing Connected doesn't restore the missing capacity merely by appearing healthy.

## Two members protect against some failures

**High availability**, or **HA**, means maintaining working capacity and redundancy so the required service can continue when a component becomes unavailable.

A **sandbox** is an environment used for testing. For standard core ISC VA deployments, current requirements call for at least one production cluster and one sandbox cluster, with at least two VAs per cluster. A single saved VA record doesn't meet that redundancy design.

When one member is unavailable, another running member can handle cluster work. During rolling updates, VAs are updated and restarted one at a time.

Now look at what remains shared. Two VMs on one failed hosting platform can both stop. Two members using one broken route can both lose the target. Counting appliances doesn't remove a common dependency.

The remaining member also needs sufficient capacity and correct source connectivity. A second member that has never been tested against the required target is an unverified part of the design.

Two members don't establish that one aggregation runs twice as fast, or that an interrupted operation resumes at exactly the point where it stopped. Workload, source behaviour and supported processing matter. Available workers and completed work are different outcomes.

## A remaining worker can still fail before reaching the target

Return to the requirement: `asset.read` on the existing account `asset-reader`. The source uses `assets-prod`, with `va-01` and `va-02`.

For this different run, consider these hypothetical observations:

| Observation | What it establishes |
|---|---|
| The host running `va-01` has failed | One member cannot perform work |
| `va-02` is Connected and can poll cluster work | The remaining member has the demonstrated cloud communication |
| Operation evidence identifies `va-02` handling the attempt | That member attempted this work |
| Diagnostics from `va-02` show failure to resolve the configured target hostname | The attempt fails before target authentication or permission update |
| Current target evidence shows `asset.read` absent from `asset-reader` | The required permission is not delivered at the checked time |

The second appliance preserved a running worker. It didn't provide the missing name resolution.

Compare the source's configured endpoint and the name-resolution/network setup from each relevant member. Test from the member's position, not only from the administrator's laptop.

The evidence doesn't justify resetting the recipient password or the integration credential: the attempt never reached application authentication. Reapproving the request wouldn't repair DNS either.

The authorized infrastructure/network team corrects the dependency. The ISC team then addresses affected work through the supported recovery procedure and verifies the intended account's permission. Restoring name resolution alone doesn't establish that the earlier failed update completed.

## A healthy separate cluster is not automatically a standby

**Disaster recovery**, or **DR**, concerns restoring service after a broader failure, such as loss of a hosting location. The source-to-cluster association remains relevant during recovery.

SailPoint documents an **all VAs running** arrangement where members in different locations belong to the same cluster and run concurrently. Either location's members can obtain that cluster's work. If primary-location members fail, the remaining members can continue handling requests under that arrangement.

Every participating location still needs the target dependencies. Consider **latency**, the communication delay between the appliance and target, when evaluating distant members and the workload.

The documented **switch-clusters** strategy uses separate primary and DR clusters, both running. The sources initially use the primary cluster. The DR cluster doesn't receive those sources' work simply because it is powered on.

Failover requires reassociating the sources with the DR cluster. The documented procedure also requires reentering source credentials. Prepare authorized access to those secrets and validate the operational plan before an outage.

A **runbook** records the approved actions, conditions, responsibilities and verification for an operational task. It should establish affected sources, target reachability from the recovery location, required configuration/credentials and how resumed work will be checked.

Two healthy clusters aren't one automatic tenant-wide worker pool. Their associations and purposes can differ.

## Updates and replacement have their own scope

For the standard SailPoint-provided image, SailPoint manages VA software updates. The customer provides hosting/connectivity and monitors the deployment.

Rolling updates support continuity, but long-running work can be interrupted under the documented conditions. A Busy process is not a promise that updates will wait indefinitely.

Standard VA guidance also warns that when a member is not connected, updates are not made to the VAs in that cluster. Inspect the actual alert and follow the supported operational process.

An **operating system**, or **OS**, is the system software on which the VA components run. It is different from the external business application's software.

There is a documented **customer-provided OS** option, available to selected customers on request under its documented conditions. It adds customer OS patching, maintenance and reboot responsibilities while requiring acceptance of applicable SailPoint software updates. Check the actual deployment option before assigning maintenance work; the standard-image assumptions don't cover every option.

For replacement or relocation, SailPoint strongly advises against moving or migrating existing VAs. The documented approach creates new VAs, establishes connectivity, adjusts source associations as needed and then retires the old deployment through the approved process.

That is a replacement approach, not a reason to delete or rebuild a live cluster before investigating. Inventory affected sources and preserve evidence first.

A cluster restart, source reassociation and VM replacement affect different scopes. They can disrupt working integrations as well as the failing one. Follow the specific procedure and verify affected work afterward.

## An interrupted response can leave a different outcome

The DNS example establishes that the target wasn't reached. Now change that condition: suppose a target applies the permission, but its response is interrupted. The account has the permission while the recorded operation result is inconclusive.

A timeout or lost response alone doesn't establish that nothing changed.

Compare the target state, relevant audit evidence and recorded attempt. Determine the operation's supported reconciliation or recovery behaviour before repeating it. A retry is not universally harmless, and duplicate-prevention behaviour is operation-specific.

After a cluster returns, “Connected again” establishes appliance health, not completion of all interrupted collections and updates.

ISC can also display previously collected accounts during a connection problem. Read the observation's age and scope. A failed read alone doesn't establish that a worker left the organization or that every external account disappeared.

## Work through the connection decisions

### 1. The first-created VA

Assets-Production uses `assets-prod`, with two running members. A colleague says only `va-01` can run its work because it was created first.

**Worked reasoning:** The source is associated with the cluster. Running members poll its queue, and either can handle work in the documented arrangement. Inspect actual operation/member evidence and member dependencies; creation order doesn't establish a permanent worker assignment.

### 2. An inbound firewall change

An engineer proposes exposing a new inbound service because an ISC aggregation begins in the cloud.

**Worked reasoning:** Work origin differs from network initiation. The VA initiates the required outbound cloud communication, polls for cluster work and receives responses over that communication. Follow the documented network design; the cloud origin doesn't require the proposed inbound exposure.

### 3. Connected, but DNS fails

The remaining VA is Connected. Its diagnostics show that the target hostname cannot be resolved. Should you reset the integration credential?

**Worked reasoning:** The observed failure occurs before target authentication. Verify the source endpoint and that member's DNS/network setup. Correct the authorized dependency, then recover and verify affected work. Credential changes aren't supported by the supplied failure evidence.

### 4. A healthy DR cluster

The primary cluster is unavailable. A separate DR cluster is healthy, but the asset source is still associated with the primary. The organization uses switch-clusters recovery.

**Worked reasoning:** The source needs reassociation through that recovery process, including the documented credential preparation. Check recovery-location connectivity, affected sources, authorization and verification. Powered-on spare machines alone don't complete failover.

### 5. A rolling update

Two members are deployed. An engineer assumes rolling updates guarantee every long-running aggregation continues uninterrupted.

**Worked reasoning:** The documented behaviour permits interruption under update conditions. Verify the particular operation result and supported recovery. Cluster availability differs from uninterrupted completion of an individual job.

### 6. Permission present after a lost response

After an interrupted operation, current target evidence shows `asset.read` on the intended account. Its recorded outcome remains inconclusive.

Does the timeout prove that nothing happened?

**Worked reasoning:** No. Compare current account state with the attempted operation and audit evidence. Establish what occurred and how the work should be reconciled or recovered before retrying. An incomplete response neither proves no change nor guarantees rollback.

## Apply the reasoning to Payroll

A VA-based Payroll source uses two VAs on different hosts. Both rely on one network route to the Payroll server.

That route fails. Both VAs can still reach the required cloud services. The Payroll accounts visible in ISC were collected before the failure.

Explain which redundancy remains, what evidence is missing and what would establish recovery.

**Worked reasoning:** The deployment has appliance redundancy but a shared target-network dependency. Both workers can reach the cloud while neither can use the failed route to Payroll.

Establish the configured cluster and target, each member's target-connectivity results, the network event and the affected read/write operations. The visible account data is an older observation, not a current Payroll connectivity test.

The authorized network team corrects the route. The ISC team identifies and recovers affected work through supported procedures, then verifies relevant read and write outcomes within the connector's capabilities. Preserve unrelated approved access.

Explain the connection to another engineer: the source identifies its cluster, running members obtain work through cloud communication, and whichever member handles an operation still needs a working, authorized path to the target.
