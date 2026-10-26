# A button, an API call, or automation: what is ISC actually doing?

A page says the update succeeded. An automated job also reports success. Yet the person still can't read the reports they need.

Before treating that as a failed access grant, look at what each action asked SailPoint Identity Security Cloud (ISC) to do. Saving a description and asking for a permission are different operations. Either can succeed without establishing that the person has access.

The starting tool matters, but the operation behind it tells you what should happen next.

## The page collects an instruction. ISC processes the work.

The **user interface**, or **UI**, is the set of pages and controls a person uses. The **frontend** is the part presented to that person, such as the browser page. The **backend** is the hosted service processing the relevant requests and configuration.

When you open an access item, the page can obtain information and present it. When you submit a change, it communicates the relevant instruction to ISC. Seeing a value on the page and asking the service to change something are different interactions.

Software needs a way to make such requests too. An **application programming interface**, or **API**, provides that interface. An **API client** is the software making the call, such as a script or integration application.

A **platform capability** is supported work ISC can perform, such as returning an identity record or submitting an access request. An authorized client can invoke a documented capability without a person filling out its web page each time.

That explains why APIs are useful for integrations. A script can supply the required information repeatedly under an approved design. It still needs to select the right operation.

These frontend and backend responsibilities don't reveal ISC's private service layout. Also, a page can combine interactions; there isn't necessarily one identical public API behind each button.

## Start with the permission the person needs

Suppose a person needs to read reports in an application. Their existing account, `reports-reader`, doesn't yet have that permission.

An **identity** is ISC's person-level record. An **account** is a record in an external system, with ISC keeping a representation of it. Assume ISC has correctly associated this account with the intended identity.

That association is **account correlation**. It establishes whose account is represented; it doesn't add the report permission.

An **entitlement** is an access item represented from a source. In this hypothetical application, `report.read` permits reading reports without editing them.

A **source** is ISC's configured representation of a connection and its account data. A **connector** is the integration software that communicates with the managed system. The **target** is that external system.

The source **Reports-Production** represents the production connection. The **Read reports** access profile contains only `report.read` from that source. An **access profile** bundles related entitlements from one source.

An **access request** asks for specified access for a recipient. In this example, the person asks for Read reports for themselves.

Assume the profile is available for this request, the applicable request checks permit it, and the intended existing account is eligible. The configured review requires approval. Supported automatic delivery is configured, without creating an account or running a custom script.

The desired result is precise: `report.read` on `reports-reader` in the intended production system.

## Follow the request from its entry point to that result

Through the UI, the person selects Read reports and submits the request for themselves. The page collects the required information and presents the interaction.

An alternative is an authorized API client submitting the corresponding supported request. For this comparison, assume it acts in the same person's **user context**, meaning the call is associated with that person's ISC authority. It has the required API permissions and supplies the same intended recipient and access item.

These are alternative submissions. You don't submit both to complete one request.

Once submitted, the request follows its applicable ISC processing and configured review. Using the request API doesn't inherently remove the approval requirement.

After the required approval and other delivery conditions are satisfied, the supported change can proceed. **Provisioning** is the work of carrying out account or access changes.

For this example's successful path, ISC arranges the supported assignment through the configured connector. The target permits and applies `report.read` to the existing account, and the integration returns an operation result.

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
      Verify intended permission

Alternative entries; successful path.
```

The arrows connect the responsibilities and intended stages of this example. They don't show private services, network routes or a guarantee that every request reaches the last line. Verification is the engineer's check of the intended result, not a promised automatic step in that diagram.

A refused review or a delivery error changes the outcome. Identify the stage and its evidence rather than describing every incomplete request as “the API didn't work.”

The frontend begins or displays the interaction. ISC processes the requested work. The connector performs its integration part, and the target holds and enforces the external permission.

## Saving the profile asks for different work

Now suppose an administrator changes only Read reports' description to explain its purpose more clearly. A supported update confirms that the new description was saved.

No request for the recipient was submitted by that description-only update. There is no missing grant to recover from it.

The same distinction applies across these operations:

| Selected operation | Its purpose | What success alone doesn't establish |
|---|---|---|
| Read a profile | Return its represented configuration | A recipient received the access |
| Update only its description | Save descriptive information | A target permission was added |
| Make it requestable | Allow requests under applicable configuration | A request was submitted or approved |
| Submit an access request | Begin applicable request processing | Target delivery finished |
| Start account aggregation | Collect account data into ISC | New target access was granted |

**Aggregation** collects account or entitlement information into ISC. Its read purpose differs from provisioning's change purpose.

Other configuration edits can affect access behaviour. The description example is deliberately limited to that field; it doesn't mean all saves are harmless or have identical consequences.

Ask what the particular operation changes. The label Save, the tool used and a successful response don't answer that by themselves.

## What information makes an API call meaningful?

An **endpoint** is the address called for an API operation. The documented **API contract** explains the operation, required information, caller permissions and meaning of its result.

For a web API, the request's method also matters. A **method** expresses the kind of interaction, such as retrieving information or submitting work. An address alone isn't a complete instruction.

A **tenant** is an organization's environment within ISC's hosted service. Calling the wrong tenant can select different configuration and objects even when their names look familiar.

An **object ID** identifies a particular object inside ISC. The recipient's identity reference selects a person-level record; the profile reference selects the access bundle. Neither is the external account's username.

An API client must keep those purposes separate. Supplying the right profile with the wrong recipient is still the wrong request. Supplying a readable profile name where its object reference is required doesn't satisfy the contract.

A **payload** is information carried in a request. **JSON** is a text format for structured named values, objects and lists, used by ISC APIs. The payload carries required values in the shape that the selected operation expects.

The UI can help a person find an item and choose a recipient. An integration must provide the corresponding valid information through its supported contract. Similar business intent doesn't promise identical forms, defaults or endpoints.

A **response** is the service's answer to a particular interaction. Read it according to that operation: information returned, configuration saved and request accepted are different results.

An **SDK**, or software development kit, provides tools or library functions for software development. A **CLI**, or command-line interface, lets someone invoke operations using text commands. These can make supported calls easier to construct. They don't select the correct business intent for you or add permissions.

## The caller's permission still matters

**Authentication** establishes the accepted caller identity or credential context. **Authorization** determines what that caller may do on the relevant resource.

A **credential** is information used to establish an accepted access context. An **access token** is a credential presented to an API under its authorization rules. Obtaining one isn't permission to invoke every operation.

In ISC, a user's **user level** sets an applicable boundary around platform permissions. Token **scopes** specify permitted API access within that authority. These concern work inside ISC, separate from report permissions in the external application.

Suppose an administrator can update a configuration object in the UI. Their API client uses a valid token restricted to the relevant read access. If the update requires a scope the token lacks, the owner's broader UI authority doesn't remove that restriction.

Conversely, broader scopes don't elevate a user's level. Match the operation's documented requirements to the actual caller and token.

A **personal access token**, or **PAT**, is ISC's user-associated client credential mechanism. Its **client ID** identifies the client credential, while its **client secret** supplies secret proof in the supported token-acquisition flow. The resulting access token is what the client presents for resource API calls.

The client secret and access token have different jobs. Keep both out of screenshots and support messages.

An API key operating outside a user context isn't interchangeable with a user-associated credential for operations requiring that context. An unattended design must choose a supported credential arrangement for its actual operations, including any rules for requesting on behalf of other people.

Receiving a token, having the required scope and being allowed to request the selected access are related checks with different purposes.

## Acceptance tells you where the work has reached

The supported access-request submission operation is **asynchronous**: the initiating interaction can finish while the requested processing continues.

Its documented successful response is **202 Accepted**. This means the submission was accepted and queued for processing. It doesn't mean the configured approval has happened or the target permission has been delivered.

Keep the returned tracking information and relevant request references available through supported tracking. A **request reference** identifies the tracked request, separately from the recipient, profile and target account.

A **status query** asks about existing tracked work. It is different from submitting more work.

If the request is awaiting its required approval, inspect that decision stage. If later delivery reports an error, investigate the delivery details. An earlier accepted submission doesn't contradict a later failure.

An API client exiting after submission doesn't by itself cancel already submitted asynchronous work. Cancellation requires the applicable supported operation where available.

Nor does slow delivery justify another submission automatically. Duplicate or overlapping requests need not produce an immediate submission error. Use the documented handling, existing request information and access evidence before repeating.

This is why an automation that records only “request sent” leaves an engineer with too little information. It records an attempt to communicate without establishing what was accepted or what later happened.

## The target has its own caller and requirements

For the report example, assume the source uses a supported **SaaS connector**. Its connector software runs in SailPoint's hosted environment without customer-deployed VAs for that connection.

**SaaS**, or software as a service, means provider-operated hosted software. A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for VA-based integration work.

Other sources use that VA path. Calling ISC through an API doesn't change the source's connector type or move its work to a different runtime.

The external integration actor, `svc-reports`, performs the target assignment. It is separate from the person receiving access and the client calling ISC.

The ISC caller needs authority to submit the request. The integration actor needs the target's authority to assign `report.read`. A token accepted by ISC doesn't supply the target credential or missing external privilege.

ISC can therefore accept an authorized request while the target later refuses a change. Switching the submission from UI to API doesn't correct that target refusal.

## Automation decides when software performs the work

**Automation** means configured software starts or carries out work without a person manually repeating each action.

An external script can run on a **schedule**, a rule for when it runs. At each run, it still needs the correct tenant, recipient, access item, caller authority and required input.

Scheduling a script doesn't give it permission to request access for everyone. The selected operation's caller-context and on-behalf-of requirements still apply.

A script could instead call the reporting application directly under that application's credentials. That is a different path. The call doesn't automatically create an ISC access request, invoke ISC review or give ISC an immediate record of the change.

An ISC **Workflow** provides another automation mechanism: a configured set of steps managed within ISC. Its **trigger** determines when it starts and supplies its initial input. It doesn't depend on an engineer leaving a local script running.

A Workflow is not another name for every internal ISC process. Aggregation and access-request processing have their own supported behaviour. They don't require someone to recreate the platform's processing as a custom Workflow.

Also, Workflow actions aren't all personal-token API calls. Inspect the particular action and the credentials its integration requires.

## Watch the data move through a Workflow

Consider a separate notification design. A change to a person's department should lead to a notification when the new department is Finance. No request, grant or removal is part of this design.

An **identity attribute** is a named value on the person-level record, such as department. An **event** reports that something happened, such as an identity attribute changing.

The Workflow uses the relevant identity-change trigger, with a **filter** that selects department-change events. A filter narrows which events start this Workflow.

Assume the Workflow is enabled, the relevant event is available and its input supplies the identity and changed-department information needed by this design.

An **execution** is one run of the Workflow. Its **data flow** is the information passing through its configured steps, with outputs available to subsequent work as supported.

An **operator** directs that flow or makes a choice. Here, a comparison checks whether the supplied new department equals Finance.

An **action** performs configured work, such as sending a notification. The matching branch uses a supported notification action with a valid configured recipient and the required information. The other branch ends successfully without sending it.

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

The arrows show this design's event selection and choices. The trigger filter determines whether an execution starts. The department comparison selects a path inside an execution that has already started.

For a supplied change from Operations to Finance, the department-change filter matches and an execution starts. The comparison reads Finance as the new value, takes the matching branch and passes the required information to the notification action. Assuming that action succeeds, the run reaches its successful end. No account permission changes.

If only an unrelated attribute changes, the department-change filter doesn't select the event. No execution starts for this Workflow in that situation.

If department changes to Marketing, the filter can still match because department changed. The execution then finds that Marketing isn't Finance and ends successfully without sending a notification.

For the Finance branch, the action must receive the right input. Data from the trigger and earlier step outputs can supply later steps. Missing or wrongly selected values don't become correct because the Workflow has a helpful name.

For example, the changed person's identity reference and the notification recipient's identity reference can have different purposes. The event saying who changed doesn't automatically select the person who should receive a message.

A Workflow named “Grant report access” still won't grant access if its actual actions only notify. To request access, the design needs the applicable supported action, inputs and conditions for that work.

## A saved definition and an execution prove different things

The **Workflow definition** is its configured trigger, steps, conditions and inputs. Saving it stores that design. It doesn't establish that a real event matched or that an action ran.

Enabled state and applicable trigger conditions matter. A disabled or nonmatching design doesn't become a successful business process merely because the definition was saved.

A test with supplied input can exercise step behaviour without proving that the real event path supplies the expected information. Also distinguish an executed action from a simulated step returning mock output. Testing is not automatically an action-free preview.

Execution history and playback let you inspect the recorded run: its input, selected path, step results and relevant configuration. Examine the definition used for that execution, since a later edit can describe a different design.

An overall success means the execution reached success under its definition and step behaviour. For the notification design, that can mean the configured no-notification branch ended correctly.

If an action submits asynchronous work, successful submission and the later result of that work still need separate interpretation. The word success doesn't enlarge the action's purpose.

Available actions, product requirements and permissions remain applicable. A Workflow can't supply an unsupported connector operation merely by naming a step after it.

## Why can the screen and an API list look different?

First compare equivalent records and questions.

**Pagination** divides results into pages. If an API returns only the first page and provides information establishing that more results exist, that page isn't the complete population.

A **filter** on a list limits which records are returned or displayed. It has a different role from the Workflow trigger filter, although both select information according to conditions.

Check the same tenant, object type, object references, caller authority, filters and observation time. A browser user's view and a restricted token's view need not have the same scope.

Also ask what kind of record you're examining. A pending request, a Workflow execution and an account's collected permissions answer different questions.

**Collected data** is information obtained through a read. An ISC account page represents collected account information; it isn't a continuous live inspection inside the target.

A current request result and an older account view can describe different stages without proving data loss. Compare their timing with the intended target permission and relevant operation evidence.

Refreshing a page or changing a filter isn't by itself a command to repeat provisioning.

## Build on the supported contract

A **public API** is a documented interface intended for external integration. Public doesn't mean anonymous or universally authorized.

A call seen inside a browser isn't automatically that supported contract. Choose a documented operation and its applicable **version**, the identified form of its contract. Inputs, authorization and behaviour can differ between contracts.

An **experimental API** is still under development and has different stability conditions from a public production interface. Check the selected service's current documentation before committing an unattended design to it.

For unattended use, define credential ownership and supported rotation, which means replacing credentials through the supported arrangement. Apply **least privilege**, granting only the authority needed for approved work.

The design also needs validated input, useful tracking and a procedure for failures. Automatic repetition can repeat effects when the operation doesn't provide the duplicate protection the script assumes.

A script that stops after an uncertain response needs enough retained evidence for the next run or engineer to investigate the existing work. Using an unrestricted administrator credential doesn't solve that tracking problem.

## Work through these cases

Treat each case as a separate situation.

### 1. The UI works, but the token can only read

An administrator can update a supported configuration object through the UI. Their client's valid token has only the relevant read access. The API rejects the update with explicit evidence that the required scope is absent.

Does that establish that the API lacks the capability?

**Worked reasoning:** No. The supplied rejection identifies token authority. Confirm the documented operation and the additional scope justified by the approved purpose. Broader UI authority doesn't remove the token restriction. Avoid inferring the cause from a generic rejection alone.

### 2. Only the profile description changed

A supported update changes only the Read reports profile's description and confirms the saved value. No request or account-changing operation is submitted.

Should `reports-reader` receive `report.read` because of that update?

**Worked reasoning:** No. The operation completed its descriptive change. It didn't ask for the account assignment. Investigate an actual access-changing flow if delivery is required; don't diagnose this description-only success as a failed grant.

### 3. The client exits after acceptance

An access-request submission is accepted. The client exits. Later supported status information identifies that same request as awaiting required approval.

Should the next run submit again or assume the first request was canceled?

**Worked reasoning:** Neither conclusion follows. The supplied status establishes tracked work awaiting a decision. Preserve the reference and inspect that request. Client exit doesn't imply cancellation, and incomplete delivery doesn't establish that a new submission is needed.

### 4. The Workflow succeeded without sending a notification

The notification-only Workflow starts for a department change. Its comparison finds that the new department isn't Finance and follows the successful end without notifying anyone.

Someone says, “The access-grant Workflow succeeded, so report access must be present.”

What did that execution establish?

**Worked reasoning:** The configured no-notification branch completed. A misleading name doesn't add a grant action. Inspect the actual definition and execution path. To establish report access, inspect the relevant assignment, delivery and target evidence.

### 5. The API list is shorter

A client retrieves the first page of a supported list operation. Supplied pagination information establishes more results. The UI shows a broader list in the same tenant under equivalent authority.

Does the first response prove the API lost objects?

**Worked reasoning:** No. It establishes a partial client view. Retrieve the intended collection through documented pagination and compare equivalent filters and object types. A successful page isn't proof that all matching objects were retrieved or that unseen objects were deleted.

## Review a scheduled-request design

A team wants an external scheduler to request access to a training application.

The proposal counts a run as successful once it obtains a token and sends a request. It stores no request references and checks no later status. If the person can't use the application immediately, the next run submits the same access again.

What would you change?

**Worked reasoning:** Obtaining a token gives the client a credential for later API calls. It doesn't establish that the access request had valid input, was authorized or was accepted.

Define the intended tenant, recipient, access item, caller context and request conditions. Interpret the supported submission result, retain tracking information and inspect existing or unresolved work before creating more.

Separate acceptance, configured decisions, delivery and verification of the intended target result. Define credential ownership, scoped authority, supported rotation and recovery for unattended use.

You should be able to follow one selected operation through the design: what starts it, which information and authority it needs, what ISC processes, whether a connector changes the target, and which evidence establishes the result.
