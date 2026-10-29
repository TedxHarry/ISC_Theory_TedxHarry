# A button, an API call, or automation: what is ISC actually doing?

A page says an update succeeded. An automated job also reports success. The person still cannot read the reports they need.

Those results may describe work that completed exactly as requested. Updating an item's descriptive text and requesting its access are different instructions.

Start with what the action asked SailPoint Identity Security Cloud, or **ISC**, to do. That tells you which result to look for.

## Connect the page to the instruction behind it

The **user interface**, or **UI**, is the set of pages and controls a person uses. The **frontend** presents that interaction, such as a browser page. The **backend** is the hosted service processing the relevant requests and configuration.

Opening an item lets the page obtain and display information. Submitting a change sends an instruction to ISC. Looking at a value and asking for a change are different interactions.

Software needs a way to send instructions too. An **application programming interface**, or **API**, provides that interface. An **API client** is the software making the call.

A **script** is a program that carries out defined instructions. A script or an integration application can be an API client.

A **platform capability** is supported work ISC can perform, such as returning stored information or submitting a request for access.

An authorized API client can invoke a documented capability without a person filling out its page each time. That makes integrations useful: software can supply the required information repeatedly under an approved design.

The selected operation still determines what it asks ISC to do. A different tool does not turn a description update into an access grant.

These frontend/backend roles describe responsibilities, not ISC's private service layout. A page can combine interactions; each button does not necessarily correspond to one identical public API.

## Establish the permission the person needs

An existing application account, `reports-reader`, needs permission to read reports.

An **identity** is ISC's record representing a person. An **account** is a record in an external system, with ISC keeping a representation.

Here, the account is already correctly associated with the intended identity. **Account correlation** establishes that association using configured comparisons. It identifies whose account it is; the association does not add report access.

An **entitlement** is an access item represented from a source. In this hypothetical application, `report.read` permits reading reports without editing them.

A **source** in ISC holds the connection configuration and represented account information. A **connector** is the integration software communicating with the managed system. That external system is the **target**.

**Reports-Production** represents the live connection. **Read reports** contains only report.read from that source.

Read reports is an **access profile**, a bundle of related entitlements from one source. An **access request** asks for specified access for a recipient.

For this example, the person requests Read reports for themselves. They do not already hold the profile or permission.

The profile is available through the permitted request process, applicable checks allow the request, and the intended existing account is eligible. The configured review requires approval.

Supported automatic delivery is configured, without account creation or a custom script. The intended result is report.read on reports-reader in the production system used for live work.

## Follow a request that actually asks for access

Through the UI, the person selects Read reports and submits the request for themselves. The page collects the information needed for that interaction.

An alternative is an authorized API client submitting the corresponding supported request.

For this comparison, the call has the same person's **user context**, meaning it is associated with that person's ISC authority. The client has the required API permissions and supplies the same intended recipient and access item.

These are alternative ways to submit the request. You do not need both submissions for one request.

The request then follows applicable ISC processing and its configured review. Submitting through the request API does not inherently remove approval.

Once required approval and the other delivery conditions are satisfied, supported **provisioning** can proceed. Provisioning carries out account or access changes.

In this successful trace, ISC arranges the supported assignment through the configured connector. The target permits and applies report.read to the existing account, and the integration returns an operation result.

That delivery result describes later work. It is separate from the earlier response accepting the request submission.

```text
UI submission        API submission
      |                    |
      +---------+----------+
                |
                v
      ISC request processing
                |
                v
      Required approval granted
                |
                v
      Supported provisioning work
                |
                v
      Connector changes target
                |
                v
      Engineer verifies permission

Alternative entries; successful path.
```

The arrows connect the responsibilities in this example. They do not show private services or network routes, or guarantee that every request reaches the final line.

The final verification is an engineer checking the intended result. It is not a promised automatic stage after every write.

A denied review and a later delivery error stop different work. Inspect the stage and its evidence rather than calling every incomplete request an API failure.

The frontend begins or displays the interaction. ISC processes the request, the connector performs its integration work, and the target holds and enforces the external permission.

## A successful save can mean something else

Now an administrator changes only the Read reports profile's description. The supported update confirms that the new description was saved.

That instruction did not request access for reports-reader. There is no missing account grant to recover from the description-only update.

**Aggregation** collects account or entitlement information into ISC. Its collection purpose is different again from provisioning.

Compare the selected operations:

| Operation | What success means for that operation | What still needs separate work |
|---|---|---|
| Read a profile | Its represented configuration was returned. | A recipient receiving its access. |
| Update only its description | Descriptive information was saved. | A target permission being added. |
| Make it requestable | Requests are allowed under the applicable configuration. | A request being submitted and approved. |
| Submit an access request | The submission entered applicable request processing. | Required decisions and completed target delivery. |
| Start account aggregation | The collection was initiated under its supported behavior. | Completed collection and any separately required grant. |

Other configuration edits can affect access behavior. The description example is limited to that field; it does not establish that every save has the same consequences.

Read the particular operation's purpose and result. A Save label or success message alone does not identify an account change.

## Give an API call a complete meaning

An **endpoint** is the address called for an API operation. Its documented **API contract** explains the supported operation, required information, caller permissions and result.

For a web API, the **method** expresses the kind of interaction, such as retrieving information or submitting work. The address alone is not a complete instruction.

A **tenant** is an organization's environment in the hosted ISC service. Calling a different tenant can select different objects and configuration even when familiar names appear.

An **object ID** identifies a particular record or configuration item in ISC, such as an identity or access profile.

For the report request, the identity reference selects the person-level record. The access-profile reference selects the bundle. The external username reports-reader identifies a different kind of record.

The client must supply the right reference for each purpose. A correct profile with the wrong recipient is still a wrong request. A readable name does not replace an object ID where the contract requires that ID.

A **payload** is information carried in a request. **JSON** is a text format for structured named values, objects and lists, used by ISC APIs.

The contract determines which values the payload needs and how they must be organized. No amount of authorization corrects a payload that identifies the wrong person.

The UI can help someone find an item or choose a recipient. An integration must provide valid corresponding information through its supported contract. Similar intent does not promise identical forms, defaults or endpoints.

A **response** is the service's answer to that interaction. Returned information, a saved configuration and an accepted request are different responses to different instructions.

An **SDK**, or software development kit, provides tools or library functions for development. A **CLI**, or command-line interface, lets someone invoke operations using text commands.

These tools can make supported calls easier to construct. They do not choose the correct business intent or add permission.

## Separate the user's authority from the token's authority

**Authentication** establishes the accepted caller identity or credential context. **Authorization** determines what that caller may do on the relevant resource.

A **credential** is information used to establish an accepted access context. An **access token** is the credential presented to an API under its authorization rules.

Receiving a token does not establish permission to call every operation.

In ISC, a **user level** sets an applicable boundary around a user's platform permissions. Token **scopes** specify permitted API access within that authority.

For example, an administrator can have permission to update a configuration object in the UI while their API token is limited to the relevant reads.

If the update needs a scope that token lacks, the administrator's broader UI authority does not remove the token restriction.

Broader token scopes also do not elevate the user's level. Match the operation's requirements to the actual user context and token.

These platform permissions concern work inside ISC. They are separate from report.read in the external application.

A **personal access token**, or **PAT**, is ISC's user-associated client credential mechanism. The name can be confusing because the client obtains another token for the actual resource calls.

The PAT supplies a **client ID**, identifying the client credential, and a **client secret**, secret proof used in the supported token-acquisition flow.

First, the client uses those credentials to request an access token. After a successful token request, it receives that access token. It then presents the access token when calling the resource API.

The client secret and resulting access token have different jobs. Keep both out of screenshots and support messages.

An API key operating outside a user context is not interchangeable with a user-associated credential for an operation requiring that context.

An unattended integration must choose a supported credential arrangement for its actual operations, including the rules for requesting on behalf of other people.

Obtaining a token, having a required scope and being allowed to request a particular item for a particular recipient are related checks with different purposes.

## Acceptance identifies a stage, rather than the final result

The supported access-request submission operation is **asynchronous**. The initiating interaction can finish while processing continues.

Its documented successful response is **202 Accepted**. The submission was accepted and queued for processing. Required review and target delivery can still be ahead.

Keep the response information and request references available through supported tracking. A **request reference** identifies tracked work; it is different from the identity ID, profile ID and external username.

Use the selected contract's tracking information. Do not assume that every successful response returns every identifier you will later need.

A **status query** asks about existing tracked work. It does not submit another request.

If the request is awaiting approval, investigate that decision stage. If later delivery reports an error, inspect that operation. Acceptance earlier does not contradict either state.

The client exiting after submission does not itself cancel submitted asynchronous work. Cancellation needs the applicable supported operation where available.

Slow delivery is not an automatic reason to submit again either. Duplicate or overlapping requests need not produce an immediate submission error.

Some already-held-access requests can be ignored and absent from the supported status list. Check the selected contract's duplicate handling and actual access rather than assuming every missing row proves no request was sent.

An automation that records only “request sent” leaves this chain unresolved. Retain enough evidence to establish what was accepted and what later happened.

## The connector has its own caller at the target

For Reports-Production, assume a supported **SaaS connector**. Its software runs in SailPoint's hosted environment without a customer-deployed appliance for that connection.

**SaaS**, or software as a service, means provider-operated hosted software. Other sources use a **Virtual Appliance**, or **VA**, a customer-deployed virtual machine for applicable integration work. A virtual machine is a software-defined computer using resources supplied by its host.

The **runtime** is the environment in which connector software executes. Calling ISC through an API does not change the source's configured connector type or move its work to another runtime.

The external integration actor, `svc-reports`, performs the target assignment. It is separate from the recipient and the API client calling ISC.

The ISC caller needs authority to submit the request. svc-reports needs the target's authority to assign report.read.

A token accepted by ISC does not supply the target credential or external write privilege. ISC can accept an authorized request while the target later refuses the change.

Switching the submission from UI to API leaves that target requirement in place.

## Automation controls when software starts work

**Automation** means configured software starts or carries out work without a person manually repeating each action.

An external script can run on a **schedule**, a rule for when it runs. Each run still needs the right tenant, recipient, access item, caller authority and required input.

Scheduling the script does not authorize it to request access for everyone. The selected operation's user-context and on-behalf-of conditions remain applicable.

A script could instead call the reporting application directly using that application's credentials. That is a different path: it does not automatically create an ISC access request, invoke ISC review or give ISC an immediate record of the target change.

An ISC **Workflow** is another automation mechanism: a configured set of steps managed within ISC.

Its **trigger** determines when it starts and supplies its initial input. The Workflow does not depend on an engineer leaving a local script running.

A custom Workflow is not another name for every internal ISC process. Aggregation and access-request processing already have their supported behavior; you do not need to rebuild those processes as custom Workflows.

Workflow actions also do not all use personal-token API calls. Check the selected action and the credentials its integration needs.

## Follow the information through a Workflow

Consider a separate notification design. When someone's department changes to Finance, the design should send a notification. It contains no request, grant or removal.

An **identity attribute** is a named value on the person-level record, such as department. An **event** reports that something happened, such as an identity attribute changing.

This Workflow uses the relevant identity-change trigger with a **filter** selecting department-change events. The filter narrows which events start the Workflow.

Assume it is enabled, the relevant event is available, and the event input supplies the identity and changed-department information this design needs.

An **execution** is one run. Its **data flow** is the information passing through its configured steps, including outputs available to later steps as supported.

An **operator** directs that flow or makes a choice. Here, a comparison checks whether the supplied new department equals Finance.

An **action** performs configured work. The matching branch uses a supported notification action with valid recipient information and required inputs. The other branch ends successfully without notifying.

```text
Relevant identity-change event
              |
              v
Department-change filter matches?
  |
  +-- No --> No execution
  |
  +-- Yes -> Start execution with input
               |
               v
           New department = Finance?
             |
             +-- No --> Success end
             |
             +-- Yes -> Send notification
                          |
                          v
                       Success end

No branch requests or grants access.
```

The trigger filter and the comparison operate at different points.

The filter decides whether an execution starts. The comparison selects a path inside an execution that has already started.

For a supplied change from Operations to Finance, department changed, so the filter matches. The execution reads Finance as the new value and takes the notification branch.

The action receives its configured recipient and required information. Assuming it succeeds, the run reaches its successful end. No account permission changes.

If only an unrelated attribute changes, the department-change filter does not select that event. This Workflow has no execution for that situation.

If department changes to Marketing, the filter can still match because department changed. The execution then compares Marketing with Finance and follows its successful end without notification.

The actual values matter. Trigger input and earlier outputs can supply later steps, but missing or wrongly selected information does not become correct because the Workflow has a helpful name.

The identity reference identifying who changed can have a different purpose from an identity reference used to select a notification recipient. Neither automatically supplies the other.

Use the action's required recipient format too. An action asking for an email address needs a valid address, rather than an identity ID substituted for it.

A Workflow called “Grant report access” still does not grant access if its actual steps only notify. Requesting access needs the applicable supported action, inputs and conditions.

## Read a saved design and a run as different evidence

The **Workflow definition** is its configured trigger, steps, conditions and inputs. Saving it stores the design.

That save does not establish that a real event matched, that an execution started or that an action ran. Enabled state and trigger conditions still matter.

Testing with supplied input can exercise the steps without demonstrating that the real event path supplies the expected values.

A test can fully execute an enabled action. A simulated step instead returns **mock output**, supplied test data standing in for that action's result.

Check which happened. Testing does not automatically mean an action-free preview.

Execution history and playback show the recorded run: input, selected path, step results and relevant configuration. Inspect the definition used at execution time, since a later edit can describe another design.

Overall success means the run reached success under that definition and its step behavior. In the Marketing variation, successful completion means the configured no-notification branch ended correctly.

If an action submits asynchronous work, its successful submission and that work's later outcome still need separate interpretation.

Available actions, product requirements and permissions remain applicable. Naming a step after an unsupported connector operation does not implement that operation.

## Compare the same records before calling two views inconsistent

**Pagination** divides results into pages. If an API returns one page and supplies information establishing that more results exist, that page is incomplete as a view of the intended population.

A list **filter** limits which records are returned or displayed. It serves a different purpose from the Workflow trigger filter, even though both select information according to conditions.

Compare the tenant, object type, object references, caller authority, filters and observation time. A browser user and a restricted API token can have different visible scope.

Also compare what the record describes. A pending access request, a Workflow execution and an account's collected permissions answer different questions.

**Collected data** is information obtained through a read. An ISC account page represents that information, rather than a continuous live inspection of the target.

A request result and an older account view can describe different stages. Compare their timing with the intended target permission and relevant operation evidence.

Refreshing the page or changing a list filter is not itself a command to repeat provisioning.

## Build unattended work on its supported contract

A **public API** is a documented interface intended for external integration. Public does not mean anonymous or universally authorized.

A call visible inside a browser is not automatically that supported contract.

Choose the documented operation and its applicable **version**, the identified form of its contract. Required inputs, authorization and behavior can differ between contracts.

An **experimental API** is still under development. It can change with little or no notice and is intended for evaluation, rather than production automation. Check the selected service's current documentation.

For unattended use, establish credential ownership and supported **rotation**, replacing credentials through the supported arrangement.

Apply **least privilege**, granting only the authority needed for approved work. The design also needs valid inputs, useful tracking and a procedure for failures.

Automatic repetition can repeat effects when the operation does not provide the duplicate protection the script assumes.

If a run stops after an uncertain response, the next run or engineer needs enough retained information to investigate existing work. An unrestricted administrator credential does not repair missing tracking.

## Work through these cases

Treat each case as a separate situation.

**An administrator can update an object in the UI, but the client's token has only the relevant read access. The API explicitly rejects a missing required scope. Does the API lack the capability?**

The supplied rejection identifies token authority.

Confirm the documented operation and the additional scope justified by the approved purpose. The broader UI authority does not remove the token restriction. A generic rejection without this evidence would not identify the same cause.

**Only Read reports' description was updated and the saved value was confirmed. No request or account change was submitted. Should report.read appear on reports-reader?**

No access assignment was requested by that description-only operation.

It succeeded at changing descriptive information. Use an actual access-changing flow if delivery is required, rather than treating the completed description update as a failed grant.

**The client exits after an accepted submission. Later status shows the same request awaiting approval. Should the next run submit again or assume cancellation?**

The supplied status identifies existing work awaiting a decision.

Preserve the reference and inspect that request. Client exit does not imply cancellation, and incomplete delivery does not establish a need for another submission.

**The notification-only Workflow runs for a department change to Marketing and ends successfully without notifying. Someone calls it an access-grant success. What happened?**

Its configured no-notification branch completed.

Inspect the actual definition and execution path. A misleading name does not add a grant action. Establish report access using the relevant assignment, delivery and target evidence.

**The API client retrieves only the first page, with supplied pagination information showing more results. Under equivalent authority, the UI shows a broader list in the same tenant. Were objects lost?**

The first response establishes a partial client view.

Retrieve the intended collection through documented pagination and compare equivalent filters and object types. A successful page establishes neither complete retrieval nor deletion of unseen objects.

## Review a scheduled-request design

A team wants an external scheduler to request access to a training application.

Its proposal calls a run successful once it obtains a token and sends a request. It stores no request references and checks no later status.

If the person cannot use the application immediately, the next run submits the same access again.

What needs to change?

Obtaining a token supplies a credential for later API calls. It does not establish that this access request had valid information, was authorized or was accepted.

Define the intended tenant, recipient, access item, caller context and request conditions. Interpret the supported submission result, retain tracking information and inspect existing or unresolved work before creating more.

Separate acceptance, configured decisions, delivery and verification of the intended target result. Define credential ownership, scoped authority, supported rotation and recovery for unattended use.

Follow one operation through that design: what starts it, which information and authority it needs, what ISC processes, whether a connector changes the target, and which evidence establishes the result.
