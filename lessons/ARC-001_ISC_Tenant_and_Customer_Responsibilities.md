# The ISC tenant: what SailPoint runs, and what your organization still owns

When you open SailPoint Identity Security Cloud, or ISC, you're using an application that SailPoint operates. Your organization doesn't install and maintain the core ISC application servers as its own deployment.

That removes a substantial operating responsibility. It still leaves decisions such as which people need access, which application permissions meet that need, and which external account should receive them.

A working hosted service can carry out a configuration that points to the wrong system. It can also attempt a correctly approved change that an external application refuses. Understanding the boundary helps you investigate the actual operation and bring in the people who can resolve it.

## The tenant is your working environment inside the service

ISC is **software as a service**, or **SaaS**: a hosted application service operated by the provider. A **tenant** is a particular organizational environment within that service. Your configurations and represented identity/access information exist in that tenant.

The platform is **multi-tenant**. It serves multiple organizational environments while maintaining boundaries between their data and configuration. Sharing the platform does not give your administrators access to another organization's records. It also does not mean your tenant is a physical computer that your ISC administrator owns.

For daily work, the tenant tells you where a record or change belongs. “I changed the source” needs an environment: was that the testing tenant or the one handling live access?

A **sandbox** is an environment used for testing and configuration work. **Production** is the environment used for live operations. An organization can have separate sandbox and production tenants; establish which environments actually exist for your implementation.

Within a tenant, a **source** is a configured representation of a system or collection of account data. One tenant can contain many sources.

An **identity** is ISC's person-level record. An **authoritative source** supplies the group of people from which ISC establishes identities. An **identity profile** configures that population, including how person information is populated.

For example, one tenant can contain an HR source supplying worker information, a directory source and several application sources. Adding another source or identity profile changes configuration inside that tenant. It doesn't create a new tenant.

The tenant contains representations and instructions. The connected applications continue to exist as their own systems.

## An account represented in ISC still belongs to another system

An **account** is a record in a particular system. ISC keeps a representation of that account using information collected through its integration.

Suppose an existing account, `supplier-reader`, needs permission to view supplier records in the production supplier system. The account is already associated with the intended ISC identity.

An **entitlement** is an access item represented from a source, such as a permission or group membership. Here, `supplier.view` allows supplier-record viewing. It does not allow changing supplier bank details. These are the permission meanings in this example.

ISC can represent that entitlement, make it available through a configured access process and initiate a supported change. The supplier system still maintains the actual account and applies its own permission checks when the person uses it.

**Authorization** determines whether an actor may perform an operation. There are two authorization questions here: may the integration change this account's access, and may the person using the account view supplier records? The external system applies its relevant rules to each.

Your organization must establish which permission in that system meets the business requirement. If a supposedly read-only access package includes bank-detail-change rights, hosting ISC as SaaS doesn't correct that design.

The supplier system may itself be another SaaS service. “Outside ISC” describes a service boundary; it doesn't necessarily mean equipment inside your office.

## The account making the change is different from the account receiving it

A **connector** provides the integration used to read source information and perform supported changes. Which operations it supports depends on that connector.

**Aggregation** collects account and access information into ISC. **Provisioning** carries out supported account or access changes. Reading an account and changing its permissions are different operations, even when they use the same connection.

The **integration account** is the account or software identity the connection uses in the external system. For this example, call it `svc-supplier`. It performs the update; `supplier-reader` receives the permission.

**Credentials** are the secrets or tokens used to authenticate that connection. **Authentication** verifies the connecting actor. An accepted credential establishes that the connection met the applicable authentication requirements. It doesn't, by itself, authorize every operation.

An integration account can have account-reading permission without membership-update permission. In that arrangement, a read can succeed while an access change is rejected.

The integration also needs **network reachability**: the relevant component must be able to communicate with the required destination. A valid credential doesn't open a blocked network path. An open network path doesn't supply missing write privileges.

Keep three actors separate:

| Actor | Authority needed for this work |
|---|---|
| ISC administrator | Applicable permission to manage the tenant's configuration and investigate its activity |
| Integration account, `svc-supplier` | External permission to carry out the particular supplier-system operation |
| Recipient account, `supplier-reader` | The business permission being granted for supplier-record viewing |

An ISC administrator's permissions don't automatically become the integration account's external permissions. Changing the recipient's password would not supply a missing privilege to the integration account either.

## Where does the connection run?

The connector's documented connection path determines which components are involved.

A **Virtual Appliance**, or **VA**, is a customer-deployed integration component used by VA-based connectors to connect ISC with enterprise systems. A **cluster** groups VAs for the relevant connectivity arrangement. It is not another tenant or a local copy of the whole ISC application.

A **SaaS connector** uses the supported SaaS connectivity path without requiring a customer-deployed VA cluster for that connection.

An **API** is an interface through which software reads information or requests operations. A SaaS connector still needs the external API access and permissions required by its integration. Removing the VA dependency does not remove those requirements.

The supplier example assumes a supported VA-based connection. Its system boundaries look like this:

```text
SailPoint-hosted service
  ISC production tenant
    Identity/account representations
    Source and access configuration
    Requests and recorded activity
           |
           | Supported integration
           v
Customer-managed environment
  VA cluster and network dependencies
           |
           | External connection
           v
Supplier production system
  Integration: svc-supplier
  Recipient: supplier-reader
  Accounts and enforced permissions

Collection also returns data to ISC.
```

The arrows show the integration relationship across the environments. They do not describe packet routing, a permanent session or an exact internal execution sequence. Collection also brings information back into ISC.

The hosted tenant holds configuration, represented information and activity. The customer-managed environment provides the applicable VA hosting and connectivity. The supplier system holds the external accounts and enforces its permissions.

A SaaS connector uses a different connection path. Don't place every connector behind the VA shown here.

## Follow one approved change across those systems

An **access request** asks for specified access for a specified recipient. An **access profile** bundles related entitlements from one source.

Here, **View suppliers** contains only `supplier.view` from the supplier production source. The business requirement is viewing, so the package excludes bank-detail-change access.

The recipient has the existing correctly associated account `supplier-reader`. The profile is available through the permitted request process, the required reviewer is configured, and the integration supports the required access update.

In the successful path, the request identifies the intended recipient, profile, source and account. The reviewer approves it. ISC then initiates the supported change through the integration.

The supplier system is the **target system** for this change: the external system ISC is asking to update. It accepts the integration's authorized operation and adds `supplier.view` to `supplier-reader`.

The result depends on connected pieces of work: the organization chose the correct permission and account; the tenant configuration expressed that choice; the connection reached the right system; and the integration had authority for that specific update.

Approval was the decision to allow the change. It was not evidence that the later external operation had completed.

Now consider a different run. All times in this hypothetical sequence use **Coordinated Universal Time (UTC)**, one shared time reference:

| Time | Observed event in this example |
|---|---|
| 09:00 | An application-security change removes membership-update permission from `svc-supplier`. Account-reading permission remains. |
| 09:10 | An account aggregation successfully reads current supplier-system account data. |
| 09:15 | The View suppliers request is approved in the ISC production tenant. |
| 09:16 | The supplier system rejects the attempted update because the integration lacks the required permission. |
| 09:20 | A current external account check confirms that `supplier.view` is absent from `supplier-reader`. |

The times establish the order of these observations. They are not standard ISC processing intervals or delivery promises.

The engineer can still open the request in ISC. The account read succeeds. The write fails. These observations are consistent because the external integration identity has different permissions for reading and updating access.

The diagram isolates that authorization condition after the operation reaches the supplier system:

```text
Approved View suppliers request
  |
  v
ISC initiates supported change
  |
  v
Integration reaches supplier system
  |
  +-- Integration can make this update?
        |
        +-- Yes: apply supplier.view
        |
        +-- No: reject this update
              No permission delivered
              in the rejected case

Separate account read can still succeed.
```

Other failures can stop an operation before this branch, such as invalid credentials or a blocked connection. A failed write alone therefore doesn't prove that someone removed a permission.

Here, the privilege change and the application's rejection are both given as evidence. They explain this failure. The current account check confirms the unmet access requirement.

Recorded activity can help you identify the attempt and its reported result. Current target evidence concerns the actual external account at the time checked. Neither should be silently substituted for the other.

## Put the responsibilities beside the work

SailPoint operates the hosted ISC platform and provides its documented capabilities. Your organization configures how those capabilities apply to its people and systems.

A **mapping** specifies how a value is populated, such as taking a person's department from HR. **Account correlation** compares configured account and identity fields to match and assign the account to a person-level record. For example, an employee-number comparison can find the wrong person if the number was copied onto the wrong account. The service can execute the comparison correctly while the resulting business relationship is wrong. Your organization needs to validate both the data and the intended relationship.

That relationship requires operational ownership across the complete access path:

| Area | SailPoint service contribution | Organization's implementation responsibility |
|---|---|---|
| Hosted platform | Operates and maintains the SaaS platform | Manages tenant configuration and who may administer it |
| Identity information | Provides collection and person-data evaluation capabilities | Supplies trustworthy data and validates mappings and matching |
| Access decisions | Provides access models, requests, reviews and configured automation | Defines permission meanings, eligible recipients, reviewers and acceptable exceptions |
| Integration | Provides documented connector capabilities | Configures the connection and maintains required external credentials, permissions and connectivity |
| Customer-deployed components | Provides applicable integration software and requirements | Maintains required hosting/network dependencies and responds to component conditions |
| Operational assurance | Provides activity, reports, health signals and support mechanisms | Monitors outcomes, investigates exceptions, coordinates owners and verifies results |

The capabilities available in a tenant depend on what is enabled for that environment. Check the documented requirements for the implementation.

Similarly, a reviewer can approve exactly the item presented while the item contains excessive access. Correct routing, suitable business authorization and correct delivered permissions are separate things to establish.

An organization can delegate configuration or operations to a partner or managed service provider. It still needs an accountable arrangement for its data, decisions and outcomes. Delegation doesn't make every implementation choice SailPoint's decision.

## Who corrects the denied supplier update?

The ISC engineer checks the intended account, source, profile, attempted operation and recorded result. The application team checks the integration identity's current privileges and the application's audit evidence.

The security or access owner establishes the minimum privilege required for the approved integration operation. The team authorized to manage that privilege corrects it through the organization's change process.

Giving the integration unrestricted administrator access just to remove the error would broaden authority beyond the demonstrated need. Establish the scoped operation it actually requires.

After correcting the dependency, address the affected request or operation through its supported recovery procedure. Then verify the intended permission on the intended external account. Restoring a privilege doesn't prove the earlier failed work completed, and you cannot assume every failure automatically retries.

Also check the affected scope. If the integration lost write authority for a period, there may be other failed operations to investigate.

If evidence points to unsupported connector behavior or a service defect, SailPoint support may need to investigate. Customer and vendor work can proceed together. The boundary map helps organize evidence; it doesn't establish that every incident has a single cause or a single responsible team.

For a useful handoff, identify the tenant/environment, affected source and operation, time with time zone, scope, error, recent changes and checks already completed.

An **object ID** identifies a particular ISC record. Keep it with its tenant and object context so the next engineer can locate the intended source or operation.

Use approved support channels and share the information needed for the investigation. Exclude passwords and access tokens. Logs and exports can still contain sensitive identity/access information even when they contain no credentials.

## A customer-deployed VA still has shared maintenance

SailPoint manages VA software updates. Your organization maintains the required deployment environment and connectivity, monitors health and performs documented operational actions when needed.

For example, an update can be prevented by a connectivity condition. Vendor-managed updates do not repair every customer network issue. Equally, a locally deployed component isn't an invitation to replace SailPoint-managed software with an improvised patch.

Follow the documented maintenance process for the component. Check whether the issue concerns the managed software, the customer-provided hosting/network environment or the external destination.

Rolling updates also do not guarantee that every long-running job finishes without interruption. The documented VA update behavior permits interruption of in-progress work under applicable conditions. Component availability and completion of an individual job are different outcomes.

## Tenant administration needs its own access controls

An ISC **administrative user level** grants applicable management capabilities within the tenant. **Org Admin** is a broad organization-administrator level.

It doesn't automatically grant external supplier-system administrator rights. Nor does it grant `svc-supplier` additional write permission.

Your organization must govern tenant privileges as well as business application access. Give people and automation authority appropriate to their work, review it and remove it when it is no longer appropriate.

A business **role** groups access needed for duties or a population. It has a different purpose from an ISC administrative user level. Being assigned a Procurement business role does not, by definition, authorize editing ISC source configuration.

Available administration options depend on the supported permission model and enabled tenant capabilities. Seeing an option in documentation does not establish that your subscription includes it or your signed-in user can use it.

## A sandbox label doesn't isolate the whole test

Suppose a sandbox tenant and a production tenant both contain a source named Supplier production. Their equal names don't establish that the source configurations reach separate external environments.

If the sandbox source actually points to the live supplier system and uses a credential authorized to write there, a supported test update can affect live accounts. The sandbox tenant's data boundary doesn't turn that external credential into a read-only credential.

Trace the intended test all the way to its destination. Establish which ISC tenant contains it, which external system each source or action reaches, and which credentials and permissions it uses. Also establish what data can be collected, which actions can run and who can receive notifications.

Test data needs controls too. A separate tenant doesn't make copied production identity data suitable for every tester.

An **instance badge** is a configurable interface label that helps you recognize an environment such as sandbox or production. It helps orientation; it does not enforce destination isolation or external permissions.

Check the actual environment before a consequential action, including software operations through an API. A browser badge cannot prevent a script from addressing the wrong tenant.

## Moving configuration is different from applying its effects

Tenant administrators use supported interfaces and capabilities. They don't administer ISC as a customer-owned application server or directly edit the hosted platform's private database.

When moving a design from sandbox to production, inspect the destination's dependencies. Sources, owners, identity references, access definitions and external destinations need to resolve correctly there.

An export is configuration information, not proof of portability. It can contain references to other records and settings specific to one environment. Use the applicable supported deployment process, checking what it supports and what must be mapped or configured for the destination.

A successful import establishes neither that the design is suitable nor that its intended access changes have completed.

For example, changing a role's criteria changes the instructions used to decide who qualifies. **Identity processing** evaluates identity information and applicable configured access. The relevant processing or documented application step must use the changed configuration before its effects can be established.

Any resulting provisioning then has its own attempted operations and outcomes. Saving the criterion, evaluating it and completing an external update are different events.

Retain evidence of the intended change, affected scope, tests, approvals and verification. A configuration can be valid in format yet point to the wrong external environment.

## Read a health signal at the scope it actually tests

The **front end** is the interface people use. The **back end** is the processing behind it.

Opening a page confirms that the observed interaction succeeded. It does not test every source, background operation or external write permission.

A successful aggregation confirms the applicable read operation and its scope. It doesn't establish that every supported write can be completed.

SailPoint provides configurable system notifications for source and VA conditions. Your organization needs people who receive and act on them. An alert delivered to an unmonitored mailbox does not resolve the underlying problem.

Compare the actual operation history with the target evidence, retaining the time and scope of each observation. Use applicable service-health and support channels as additional evidence when a broad service problem is suspected.

Finding no recent customer change does not eliminate a service defect. One failed source operation does not establish a platform-wide outage either. Follow the evidence for the specific work before deciding where the failure occurred.

## Work through the responsibility boundaries

### 1. A page opens, but the update fails

The ISC dashboard opens successfully. A supplier-system access update reports an authorization rejection.

Does the page load establish that the connector and target write permissions are healthy?

**Worked reasoning:** It establishes the observed interface interaction. The failed external operation needs its own source/account and permission evidence. In the earlier incident, reads succeed while membership updates are denied. Those tests cover different operations.

### 2. HR supplies the wrong manager identifier

**Manager correlation** establishes which ISC identity represents a person's manager using configured matching information. In this case, HR supplies the wrong manager identifier, and the configured comparison matches it to the wrong manager.

Would a hosted-service update necessarily resolve that relationship?

**Worked reasoning:** The organization needs to investigate the authoritative input and the relevant mappings and matching configuration. A platform update doesn't identify the intended manager. Verify the corrected input, resulting person-level relationship and affected business work separately. If supported behavior is contradicted by evidence, vendor investigation may also be needed. This case supplies a wrong match; it does not predict every missing-manager outcome.

### 3. Org Admin is available, but external write authority is missing

An engineer has Org Admin in ISC. The external integration identity lacks membership-update permission.

Can the engineer's user level substitute for it?

**Worked reasoning:** The administrator, integration identity and receiving account are different actors. The authorized application/security team must establish the appropriate external integration privilege. Tenant authority doesn't supply that privilege or fulfill the failed request.

### 4. A test reaches a live destination

A sandbox source points to the production supplier system with a valid write-authorized integration credential. A colleague expects the sandbox label to prevent live updates.

**Worked reasoning:** The supported operation can reach and change that live destination under the stated conditions. Establish the intended isolation, destination, credentials, permitted actions and data controls before testing. The label itself does not enforce them.

### 5. The VA cannot communicate

A required VA cannot communicate through the customer network. The team declines to investigate because SailPoint manages the software updates.

**Worked reasoning:** Managed software updates and customer-provided connectivity are separate dependencies. Inspect the hosting, network, component health and documented update status. Follow the supported operating process; neither ignoring the network nor improvising patches resolves the responsibility boundary.

### 6. Write privilege has been restored

The application team restores scoped write authority to `svc-supplier`. There is no evidence of recovery for the failed operation or of `supplier.view` on `supplier-reader`.

Is the access incident complete?

**Worked reasoning:** A dependency has been corrected. Address the affected work using the applicable recovery procedure and verify the intended target permission. Check other affected operations and preserve evidence of both the correction and the outcome. Don't assume every failed operation automatically retried.

## Trace the same responsibilities without a VA

A hosted document service uses a SaaS connector. This connection has no customer-deployed VA.

An employee's account already exists and needs a read-only folder entitlement. The request is approved. The document service accepts the integration token but rejects the membership update because its permissions allow account reads only.

Explain which responsibilities remain, what successful authentication establishes, and what would demonstrate a completed change.

**Worked reasoning:** Removing the VA removes that component dependency. The hosted ISC service, connector support, external document system, integration permissions and customer's access design still have separate roles in the outcome.

The accepted token establishes successful authentication under the service's requirements. It does not establish authorization to update membership.

Validate the intended folder permission, recipient account, supported operation, required scoped integration privileges and request configuration. The authorized external-permissions team corrects the missing privilege.

Then investigate recovery and the operation result, and check current document-service access for the intended account and folder. Preserve unrelated approved access. A later collection records an observation; it does not establish that the earlier failed attempt succeeded.

Explain the chain to another engineer: which work happens in the hosted tenant, which external identity performs the change, which account receives it, and which evidence establishes that the business requirement was met?
