# The ISC tenant: what SailPoint runs, and what your organization still owns

SailPoint operates the core Identity Security Cloud application. Your organization still has to decide which person needs which permission, and make the connection to the system that will apply it.

Those responsibilities meet during an ordinary access change.

An employee can receive approval in SailPoint Identity Security Cloud, or **ISC**, while the supplier application refuses the update. That does not contradict the approval. The decision and the external operation have different jobs.

Let's locate those jobs, then follow one change between them.

## Locate the tenant inside the hosted service

ISC is **software as a service**, or **SaaS**. SailPoint operates the hosted application rather than requiring your organization to install and maintain the core ISC application servers.

Your configuration and represented identity/access information belong to a particular organizational environment called a **tenant**.

The service is **multi-tenant**: the platform serves multiple organizational environments while keeping their data and configuration logically separate. Your organization's administrator does not gain access to another customer's records by using the same platform.

The tenant is also not a physical computer that your ISC administrator owns. It is the environment in which your organization's records and configuration are managed.

This matters when identifying a change. “I updated it in ISC” does not yet tell us which environment was changed.

A **sandbox** is an environment used for testing and configuration work. **Production** is used for live operations. An organization can have separate sandbox and production tenants; establish which environments actually exist for your implementation.

A setting saved in one tenant belongs to that environment. Its name alone does not identify an equivalent setting in another tenant.

## Separate the tenant's records from the systems they describe

An **identity** is ISC's record representing a person.

A **source** is ISC's configured representation of a system or account dataset. One tenant can contain many sources: for example, human resources, a directory and several business applications.

An **authoritative source** supplies account records used to establish person identities. An **identity profile** provides configuration for that group of identities, including how their information obtains values.

Adding another source or profile changes the tenant's configuration. It does not create a new tenant.

An **account** is a record in a particular system. ISC can collect information about it and hold its own representation.

The real account still exists in the application. The tenant contains information about it and instructions for managing it; it does not replace the application itself.

For our example, the production supplier system already has an account called **supplier-reader**, correctly associated with the intended ISC identity.

That account needs to view supplier records. It must not receive authority to change supplier bank details.

## Establish what permission meets the business need

A **permission** allows a particular action. An **entitlement** is an access item represented from a source, such as a permission or group membership.

In our hypothetical supplier system, **supplier.view** allows supplier-record viewing. It does not permit bank-detail changes.

Your organization needs to establish that meaning from the actual system. A package called View suppliers could still be badly designed if someone included bank-detail-change rights in it.

SailPoint hosting the platform does not choose the correct business permission for that package.

ISC can represent the access item and initiate supported changes. The supplier system maintains its account and enforces its own operation rules.

**Authorization** determines whether an actor may perform an operation. We will need to distinguish two authorizations: the integration's authority to change permissions and the employee account's authority to view suppliers.

The external supplier system could itself be another SaaS application. Outside ISC means a separate system or service; it does not necessarily mean equipment in your office.

## Identify the actor making the change

A **connector** provides the integration used to read source information and perform supported changes. The particular connector determines which operations it supports.

**Aggregation** collects account and access information into ISC. **Provisioning** carries out supported account or access changes.

Reading the supplier account and changing its permissions are separate operations, even if they use the same connection.

The **integration account** is the account or software identity the connection uses in the external system. Call ours **svc-supplier**.

svc-supplier performs the update. supplier-reader receives the business permission. They are different accounts.

**Credentials** are authentication information, such as a password or access token, used by the connection. **Authentication** verifies the connecting actor under the required checks.

If the supplier system accepts the credential, that establishes successful authentication for the connection. It does not establish permission to perform every operation.

For example, svc-supplier can have authority to read accounts while lacking authority to update their memberships. Account collection can succeed under that arrangement, while a permission change is refused.

The connection also needs **network reachability**: the relevant component must be able to communicate with the required destination.

A valid credential does not open a blocked path. A reachable destination does not supply a missing write privilege.

Keep the actors and their authority together:

| Actor | What their authority concerns |
|---|---|
| ISC administrator | Managing permitted tenant configuration and investigating activity |
| Integration identity svc-supplier | Performing the specific operation in the supplier system |
| Recipient account supplier-reader | Using supplier-record viewing after receiving the business permission |

The administrator's ISC privileges do not automatically become svc-supplier's external privileges. Changing supplier-reader's password would not give svc-supplier a missing update privilege either.

## Locate the component used by this connection

Some connectors use a **Virtual Appliance**, or **VA**, a customer-deployed integration component that connects ISC with enterprise systems.

A **VA cluster** groups VAs for that connectivity arrangement. It is not another tenant or a local installation of the whole ISC application.

A **SaaS connector** uses its supported SaaS connection path without requiring a customer-deployed VA cluster for that connection.

An **API**, or application programming interface, lets software request information or an operation from another system. A SaaS connection still needs the external API access and permissions required by its integration.

Removing a VA dependency does not remove those requirements.

Our supplier example uses a supported VA-based connection:

```text
SailPoint-hosted service
  ISC production tenant
    Identity/account representations
    Source and access configuration
    Requests and recorded activity
           |
           | Supported integration
           v
Customer-provided environment
  VA cluster and network dependencies
           |
           | External connection
           v
Supplier production system
  Integration: svc-supplier
  Recipient: supplier-reader
  Actual accounts and permissions

Collection also returns information to ISC.
Arrows show relationships, not packet routing.
```

The hosted tenant holds represented information, instructions and activity.

The customer-provided environment supplies the applicable VA hosting and connectivity.

The supplier system holds the external accounts and applies its permission rules.

The arrows connect these responsibilities. They do not describe an exact private execution sequence or a permanent connection session. Information collected from the supplier system also returns to ISC.

A SaaS connector uses a different path. Do not put every connection behind the VA in this example.

## Follow an approved viewing request

An **access profile** bundles related entitlements from one source.

Here, **View suppliers** contains only supplier.view from the supplier production source. The viewing requirement is expressed without bank-detail-change access.

An **access request** asks for specified access for a specified recipient.

For this successful trace, supplier-reader already exists, is associated with the correct identity and does not yet hold supplier.view. The profile is available through the permitted request process, the required reviewer is configured and the integration supports the update.

The request identifies the recipient, profile, source and intended account.

The reviewer approves it. **Approval** records the decision that this access may be given. ISC then initiates the supported change through the configured integration.

The supplier system is the **target system**, meaning the system receiving that attempted change.

It accepts svc-supplier's authorized operation and adds supplier.view to supplier-reader.

The result depends on several connected facts. The organization chose the intended permission and account. Its tenant configuration expressed that choice. The connection reached the correct supplier system, and the integration had authority for the update.

The approval permitted the work. It did not prove that the later external operation had completed.

## Explain why a read can succeed while a write fails

Now consider a different run.

All times below use **Coordinated Universal Time**, or **UTC**, so the observations share one time reference.

| Time | Supplied observation |
|---|---|
| 09:00 | A supplier-system security change removes membership-update permission from svc-supplier. Account-reading permission remains. |
| 09:10 | Account aggregation successfully reads current supplier account data. |
| 09:15 | The View suppliers request is approved in the ISC production tenant. |
| 09:16 | The supplier system rejects the attempted update because the integration lacks the required permission. |
| 09:20 | A current external account check confirms supplier.view is absent from supplier-reader. |

The times establish the order in this example. They are not standard ISC intervals or delivery promises.

The engineer can still open the request. The account read succeeds. The update fails.

These observations fit together because opening an ISC page, reading supplier data and changing supplier access test different operations.

The supplier system accepted the read authority that svc-supplier retained. It rejected the update authority that account no longer had.

```text
Approved View suppliers request
  |
  v
ISC initiates supported change
  |
  v
Integration reaches supplier system
  |
  +-- May svc-supplier perform this update?
        |
        +-- Yes: apply supplier.view
        |
        +-- No: reject this update
              No permission delivered
              in this rejected case

A separate account read can still succeed.
The branch isolates update authorization.
```

This diagram starts after the attempted operation reaches the supplier system. A blocked network path or invalid credential could stop work before that branch.

A failed write alone therefore does not prove that someone removed a privilege. Here, the security change and permission rejection are supplied evidence, and the current account check confirms the viewing requirement is still unmet.

Recorded activity helps establish the attempt and reported result. The external check establishes the account's state at the time inspected. Keep both observations rather than silently replacing one with the other.

## Put responsibility beside the work

SailPoint runs the hosted platform and provides its documented capabilities. Your organization configures how those capabilities apply to its people and systems.

A **mapping** specifies how a value is populated, such as taking a person's department from human resources.

**Account correlation** compares configured account and identity fields to associate an account with a person. If an employee number was copied onto the wrong account, the comparison can run as configured and still associate it with the wrong person.

The organization needs to validate the input, configuration and intended relationship.

The same reasoning applies to access review. A reviewer can approve the exact package presented, while the package itself includes excessive access. Correct routing is not proof of suitable contents or correctly delivered permissions.

The responsibilities extend across the operation:

| Area | SailPoint service contribution | Organization's implementation responsibility |
|---|---|---|
| Hosted platform | Operates and maintains the SaaS platform | Manages tenant configuration and who may administer it |
| Identity information | Supplies collection and evaluation capabilities | Supplies reliable data and validates mappings and matching |
| Access decisions | Supplies access models, requests, reviews and automation capabilities | Defines permission meanings, recipients, reviewers and acceptable exceptions |
| Integration | Supplies documented connector capabilities | Maintains connection configuration, required external credentials, permissions and connectivity |
| Customer-deployed components | Supplies applicable software and requirements | Maintains the required hosting/network environment, monitors conditions and takes documented actions |
| Operational assurance | Supplies activity, reports, health signals and support mechanisms | Investigates outcomes and exceptions, coordinates owners and verifies results |

Check which capabilities are enabled for the actual tenant and implementation.

An organization can delegate work to a partner or managed service provider. It still needs an accountable arrangement for its data, access decisions and outcomes. Delegating the operation does not make every business configuration choice SailPoint's decision.

## Correct the dependency, then recover the affected work

For the rejected supplier update, the ISC engineer inspects the intended account, source, profile, attempted operation and recorded result.

The application team checks svc-supplier's current privileges and relevant application audit evidence.

The security or access owner establishes the minimum privilege needed for the approved integration operation. The team authorized to manage that privilege corrects it through the organization's change process.

Giving svc-supplier unrestricted administrator access would broaden its authority beyond the demonstrated requirement. Establish the specific operation it needs.

Restoring that authority corrects a prerequisite. It does not prove the earlier failed update has now completed.

Inspect the affected request or operation and use its supported recovery procedure. Then verify supplier.view on the intended external account. Do not assume every failure automatically retries.

Also investigate the affected scope. Other operations attempted while the write privilege was missing may need attention.

If evidence indicates a service defect or unsupported connector behavior, SailPoint support may need to investigate. Customer and vendor work can proceed together.

The boundary map does not establish that every incident has one cause or one responsible team.

A useful handoff identifies the tenant and business environment, affected source and operation, time with time zone, scope, error, recent changes and checks already completed.

An **object ID** identifies a particular ISC record. Keep it with the tenant and object context so another engineer can locate the intended source or operation.

Use approved support channels and omit passwords and access tokens. Logs and exports can contain person/access information even when no credentials are included.

## Maintain the VA environment without taking over its managed software

SailPoint manages VA software updates. The organization maintains the required deployment environment and connectivity, monitors health and performs documented operational actions when needed.

Those responsibilities can meet during an update. A connectivity condition can prevent a VA update from proceeding.

Vendor-managed software does not repair every customer network condition. A locally deployed component also does not justify replacing managed software with an improvised patch.

Follow the documented maintenance process and establish whether the issue concerns software, customer-provided hosting/network conditions or the external destination.

VA updates are performed through rolling updates and reboots. **Rolling** means updating members in turn rather than all together.

Maintaining cluster availability does not guarantee that each individual job finishes uninterrupted. Documented VA update behavior permits interruption of in-progress work, including applicable long-running aggregations.

Check the component's condition and the particular job's result separately.

## Govern tenant administration as access too

An ISC **administrative user level** grants applicable management capabilities within the tenant. **Org Admin** is a broad organization-administrator level.

It does not automatically grant supplier-system administrator rights or give svc-supplier a missing external privilege.

Your organization must govern these tenant permissions as well as business application access: give people and automation the authority needed for their work, review it and remove it when no longer appropriate.

A business **role** groups access for duties or a group of people with a shared need. It serves a different purpose from an ISC administrative user level.

For example, assigning a Procurement business role does not, by definition, authorize someone to edit ISC source configuration.

Administration options depend on the supported permission model and enabled capabilities. A documented option does not prove that the tenant subscription includes it or the current user is allowed to use it.

## Trace a sandbox test to its actual destination

A sandbox tenant and production tenant can both contain a source named Supplier production.

Equal names do not establish separate external destinations.

Suppose the sandbox source points to the live supplier system and uses a credential authorized to write there. A supported test update can affect live accounts under those conditions.

The sandbox's tenant boundary does not turn that credential into a read-only credential.

Trace the test all the way through: the ISC tenant, external destination, credentials, permissions and actions that may run. Establish what data can be collected and who can receive notifications too.

Copied production identity data also needs appropriate tester controls. A separate tenant does not make the copied information suitable for every tester.

An **instance badge** is a configurable interface label identifying an environment, such as sandbox or production. It helps recognition; it does not enforce destination isolation or external authorization.

An API or script needs the same actual environment check. A browser badge cannot stop software from addressing the wrong tenant.

## Separate moving a configuration from applying its effects

Administrators use supported ISC interfaces and capabilities. They do not administer the tenant as a customer-owned core application server or directly edit the hosted platform's private database.

Moving a design from sandbox to production requires checking its destination dependencies.

A **dependency** is something the configuration needs to use correctly, such as a source, owner, identity reference, access definition or external destination.

An export can contain environment-specific references and settings. Use the supported deployment process, checking which objects it handles and which destination relationships need mapping or configuration.

A successful import does not establish that the design is suitable or that its access changes have completed.

Suppose a role's criteria change. The saved criteria are instructions for deciding who qualifies.

**Identity processing** evaluates identity information and applicable configured access. The relevant processing or documented application step must use the changed configuration before its effects can be established.

Any resulting provisioning then has its own attempted operations and outcomes.

Saving the instruction, evaluating it and completing an external change are different events.

Retain evidence of the intended change, affected scope, tests, approvals and verification. Valid configuration format can still point to the wrong external system.

## Read a health signal at the scope it actually tests

The **front end** is the interface people use. The **back-end work** processes information and configured operations behind it.

Opening a page establishes that observed interaction. It does not test every source, background job or external write permission.

A successful aggregation establishes the applicable read and its scope. It does not establish that every supported write can succeed.

SailPoint provides configurable system notifications for source and VA conditions. The organization needs recipients who receive and act on them. Delivering an alert to an unmonitored mailbox does not resolve the condition.

Compare operation history with target evidence and preserve the time and scope of each observation. Use appropriate service-health and support channels as additional evidence when a broader service problem is suspected.

No recent customer change does not rule out a service defect. One failed source operation does not establish a platform-wide outage either. Follow the evidence for the actual work.

## Work through the responsibility boundaries

**The dashboard opens, but a supplier update reports an authorization rejection. Does the page load prove the write path is healthy?**

It proves the observed interface interaction.

Inspect the affected account/source operation and external permission evidence. A successful read and a denied update can coexist because they require different authority.

**Human resources supplies the wrong manager identifier. The configured comparison links the employee to the wrong manager. Would a platform update necessarily fix it?**

**Manager correlation** establishes which ISC identity represents a person's manager using configured matching information.

In this case, investigate the authoritative input, mappings and matching configuration. A platform update does not identify the intended manager for the business.

Verify the corrected input, resulting relationship and affected work separately. If the evidence contradicts supported behavior, vendor investigation may also be appropriate.

This case supplies a wrong match; it does not predict every missing-manager outcome.

**The engineer has Org Admin, while svc-supplier lacks update permission. Can the tenant user level substitute for it?**

The engineer, integration identity and receiving account are different actors.

The authorized application/security team must establish the required scoped external privilege. Tenant authority neither supplies that privilege nor fulfills the failed request.

**A sandbox source reaches production with a write-authorized credential. Does its sandbox label block live changes?**

Under the supplied conditions, a supported operation can reach and change the live destination.

Establish the intended isolation, actual destination, credentials, actions and data controls. The label does not enforce them.

**The required VA cannot communicate through the customer network. Can the team leave it to managed software updates?**

Managed software and customer-provided connectivity are separate dependencies.

Inspect hosting, network conditions, component health and documented update status. Follow the supported maintenance process. Ignoring the network or improvising a software patch does not resolve the dependency.

**Scoped write privilege is restored, but no recovery or current supplier.view is evidenced. Is the access incident complete?**

A prerequisite has been corrected.

Address the failed work through the supported recovery procedure and verify the intended target permission. Check other affected operations and retain evidence of both correction and outcome. Do not assume all failed work automatically retried.

## Follow the same responsibilities through a SaaS connector

A hosted document service uses a SaaS connector with no customer-deployed VA.

The employee's account already exists and needs a read-only folder entitlement. The request is approved.

The document service accepts the integration token, but rejects the membership update because its permissions allow account reads only.

Which responsibilities remain, and what would establish completion?

Removing the VA removes that component dependency. It leaves the hosted ISC service, connector support, external document system, integration permissions and the organization's access design involved.

The accepted token establishes authentication under the service's requirements. It does not establish authorization to update membership.

Validate the intended folder access, receiving account, supported operation, required scoped integration privilege and request configuration. The authorized external-permissions team corrects the missing privilege.

Then investigate recovery and the operation result, and check current document-service access for the intended account and folder. Preserve unrelated approved access.

A later collection provides an observation. It does not prove the earlier failed attempt succeeded.

Explain the chain to another engineer: which work belongs to the hosted tenant, which external identity performs the change, which account receives it and which evidence establishes the intended business result?
