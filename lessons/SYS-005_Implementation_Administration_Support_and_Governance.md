# Building access management is only the beginning

A connection check succeeds. Accounts appear in SailPoint Identity Security Cloud, or ISC. It is tempting to say, "The application is ready."

Now consider the first real access request. Someone needs permission to check invoices. Who decides whether that work is appropriate? Which permissions should be added? What if the application rejects the change? Who notices if the same connection stops working next month? And when the person stops checking invoices, who makes sure those permissions are removed?

Connecting the application has not answered those questions.

Managing access means keeping the decision, the delivery, and the continuing operation connected. You need to know what the service is supposed to do, establish that it can do it, keep it working, and revisit whether the access is still needed.

## Start with the work someone needs to do

Suppose an employee needs to read invoices and mark them as reviewed, but must not release payments.

Those are different actions. If you give the employee a broad finance administrator permission just because it makes invoice review work, you may also give them the ability to release payments. A successful task would then hide an access mistake.

First establish the intended boundary: who needs the access, which actions they need, which records they may act on, who can authorize it, and when it should end. Reading invoices for one business area is not necessarily permission to read every invoice.

This is **governance** work: deciding and checking who should have access, for what reason, under whose authority, and for how long. Governance is not limited to a review at the end of a project. It gives the project something meaningful to build.

The people responsible for the business process and application need to explain what the permissions actually allow. An ISC engineer can configure a permission accurately and still choose the wrong permission if its business meaning is misunderstood.

Next, turn that agreement into a working arrangement. Identify the right account, select the appropriate permissions, establish the decision route, arrange delivery, and test the result. This is **implementation**: turning agreed requirements into a tested service that someone can operate.

Once people depend on it, someone must keep collections running, maintain the integration, check outstanding work, and manage approved configuration changes. That continuing work is **administration**.

If an approved change fails or access stops behaving as expected, someone must investigate the interruption, arrange an authorized correction, and verify recovery. That is **support**.

These are four kinds of responsibility, not four mandatory teams. One engineer may do several of them. What matters is that none disappears between job titles.

They also overlap. Support may uncover a design defect that needs implementation work. Administration may find access that needs a governance decision. Go-live does not end those connections.

## How the agreement becomes something ISC can act on

Take the invoice-review requirement a little further. Use a deliberately limited design: eligible employees already have one suitable, enabled account in the application. The service will add and later remove the two review permissions. It will not create accounts as part of this release.

An **account** is the record the application uses for a user, with its own identifier, status, and access. An **identity** is ISC's representation of a person. These records are related, but they are not interchangeable. A person can have an ISC identity while still lacking an account in this particular application.

ISC needs to know which application account belongs to that person before account-directed work can be trusted.

Within ISC, a **source** represents the connected system or collection of account data being managed. A **connector** provides the integration that reads data and, where supported and configured, performs changes. Creating the source does not replace the application or make every possible operation available.

Reading account data into ISC is called **aggregation**. It gives ISC information about accounts and their access. Reading that an account lacks a permission does not itself add the permission.

The next relationship matters just as much: which identity should this account be associated with? **Account correlation** establishes that association. Configured matching can compare a value on an account with a corresponding value on an identity.

For example, an agreed employee identifier may be available in both records. An **attribute** is a named piece of information, such as that identifier. Choosing the attribute is not enough: its values must identify the right person reliably in the relevant population. A duplicated or incorrectly populated identifier can make an apparently convenient match unsafe.

That association gives account information a person context. It does not prove the person should receive every permission the account could hold.

Now represent the agreed access. An **entitlement** is an access right represented in ISC, such as membership in an application group. In this example, the application exposes separate rights for reading invoices and marking them reviewed. Payment release is separate and excluded.

An **access profile** groups related entitlements from one source. A profile named "Invoice review" can package the two agreed rights so that people request a meaningful set rather than guess which technical permissions they need.

The name alone is not a control. Its contents and the application's restrictions must match the agreed actions and business-area boundary.

An **access request** is a request for access to be provided to an intended recipient. For this service, the organization chooses to make the profile requestable and require the recipient's manager to approve it. That is a configured design choice, not a rule that every ISC request always goes to a manager.

Approval answers whether this request may proceed. The application still needs the appropriate account changes.

**Provisioning** is the process of changing accounts or access in connected systems. Adding the two rights is provisioning work. **Fulfillment** is the work that carries an authorized request through to delivery; depending on the integration and configuration, delivery may involve automated changes or assigned manual work.

For the automated path here, ISC initiates supported changes through the integration. The application then accepts or rejects them. The account's resulting permissions determine what the employee can do there.

The integration also needs authority of its own. A **technical account** is an account used by the integration to communicate with the application. Its privileges determine which operations the application lets that integration perform. This is different from the employee account receiving access.

A connector may support adding a permission while the configured technical account lacks permission to add it. Conversely, giving an account broad privileges cannot create an operation the connector does not support. Available ISC services, source configuration, connector capability, and application privileges all need to support the chosen design.

Follow the connection between the decisions: the business requirement determines the rights; the account association determines whose account is involved; the configured request route determines authorization; the delivery arrangement determines how the approved change reaches the application.

None of those steps can safely stand in for the others.

## What would convince you that the service is ready?

A passing connection check tells you something about the checks that connector performed. It is not evidence that every required read, grant, and removal operation works.

Define **acceptance criteria**: observable conditions that must be met before the service is accepted for use.

For invoice review, you would want evidence that:

- An authorized request grants the two intended rights to the correct account.
- The permitted invoice actions work within the agreed business area.
- Payment release remains unavailable.
- A rejected request does not grant access through that request.
- A delivery failure can be found and understood by the people responsible.
- Removing invoice-review access removes the intended rights while preserving the account and unrelated, justified access.
- A person without a suitable account is handled through the agreed exception, not silently treated as a successful delivery.

For these checks, assume no other rule or approved access package independently requires the two review rights. Different ways of receiving the same right can affect removal, so a shared-access situation needs separate analysis.

Why test removal before launch? A service that can add access but cannot withdraw it has only proved half of its intended control. The lack of a user complaint will not reveal that old access remains usable.

Use authorized test accounts and non-sensitive records in a suitable **test environment**, a setting intended for controlled checks rather than ordinary business operation. **Production** is the environment used for real work. A test result establishes what happened under the tested conditions; it does not prove that production has identical privileges, data, or configuration.

The existing-account limit also needs a real operating path. An **exception path** explains what to do when the normal design does not apply. It is not permission to bypass approval.

Before normal fulfillment, establish that the account requirement is met. If it is not, route the case to the agreed account-onboarding process or responsible owner. Do not assume a label such as "existing accounts only" automatically prevents ISC from attempting account creation. The actual configuration and handling must enforce the intended boundary.

If account creation is required later, that is an extension to design and test: which data supplies the account, which operations are supported, who authorizes it, and who operates it afterward?

A missing capability or untested operation remains a gap. A launch date does not turn it into a passed check.

## Go-live passes knowledge and responsibility forward

**Go-live** is the point at which the service begins supporting real operation. People who were not involved in the build may now need to maintain it or explain a failure.

They need more than screenshots of the settings.

They need to know the accepted scope, which account situations are supported, what the access allows, who makes decisions, how delivery works, and where evidence can be found. They also need collection expectations, named operational ownership and backup coverage, known limitations, and a safe route for work outside the design.

A **runbook** is operating guidance for a defined situation. It should explain what to check, what the result means, which actions are authorized, what should happen afterward, and when to stop and escalate.

"Missing access: run aggregation" is not enough.

If the change never received approval, reading account data does not authorize it. If the application rejected a write, another read does not perform that write. If the application has already changed but ISC's collected record is older, a suitable collection may refresh the observation. The action depends on where the expected result stopped.

A useful runbook helps you distinguish those conditions before acting.

Handover must also preserve the conditions established during testing: required read and write privileges, supported removal behavior, evidence locations, manual alternatives where supported, and unresolved risks. If removal has not been tested, record that honestly.

A **credential** is authentication information, such as a password or token. The operating guide should point authorized staff to the approved procedure for managing it, not contain the secret itself.

Good handover lets another engineer understand why the arrangement works and recognize when its assumptions no longer hold.

## Administration keeps the agreed service working

A design that worked at launch can stop working without anyone changing the access profile.

A collection can fail. A file can arrive late. An owner can leave. An integration account can lose privileges. Manual work can remain unfinished.

Administration keeps those conditions visible and arranges approved maintenance. For collections, check the expected population and freshness, not just whether a job ended. For failures, retain enough context to identify the source, account, operation, time, and relevant error.

A **manual task** is work assigned to someone to perform outside the automated change path. Its existence shows that work was assigned. It does not show that the application permission has changed.

Monitoring therefore needs responsible people and a response expectation. A report containing errors is useful evidence, but it is not automatically an alerting and response process. Decide who sees the problem, who acts, and what happens when the primary owner is unavailable.

Pay particular attention to removal failures and overdue tasks. A person waiting for new access may report a delay. A person who retains access they no longer need may report nothing.

Maintenance needs operation-specific verification too.

**Credential rotation** replaces authentication information, such as renewing a password or token. Replacing the technical account means switching to a different account, which may have different privileges. These are not the same change.

After either kind of relevant maintenance, verify the operations the service relies on. Successful reading does not by itself prove that adding and removing permissions still works. Routine work can have a significant effect when many users depend on the same integration.

## Support follows a failed result back to its cause

Now suppose an invoice-review request is approved, but the intended recipient still cannot review invoices.

An **incident** is an interruption or failure of an expected service. The reported symptom tells you what someone experienced. It does not yet identify the cause.

Start by making the missing result specific. Can the person sign in but not open invoices? Can they read invoices but not mark them reviewed? Are they using the account that received the change? Different answers lead to different investigations.

Then connect the evidence. Find the intended request and recipient, check the decision, identify the account involved, inspect delivery results, and compare them with current application access. A request summary alone cannot explain every downstream result.

Consider this supplied evidence:

- The correct manager approved the intended profile.
- The intended account was selected.
- The application rejected both permission additions for insufficient integration privileges, before either addition was applied.
- A current application check shows that neither right is present.
- Maintenance recently replaced the technical account. Its verified privileges allow reading accounts but not adding or removing permissions.

The connection check still passes in this hypothetical integration because that check does not exercise permission changes.

Now the cause is more precise than "ISC is not working." The application accepted the integration's reads but rejected its writes. Approval and account selection were not the failing steps.

The recent maintenance is a useful lead, but timing alone would not prove causation. The rejection details and verified privilege difference connect the change to the failure.

Resetting the recipient's password would not supply the integration's missing write privilege. Changing an already correct approval route would not supply it either.

Notice the supplied boundary: both writes were rejected before application. Do not assume that every failed request behaves that way. Another incident could leave one permission added and another missing. You need the individual operation results and current account state to distinguish them.

## Recovery needs an authorized change and a verified result

The corrective action is not "give the integration unrestricted administrator access."

Establish the privileges required for its supported operations and arrange the appropriate approved correction. The integration should have the authority needed for its work, not unrelated control of the application.

Before repeating a failed change, check what exists now. Someone may already have corrected access manually. One part may have succeeded. Another operation may still be running or waiting for a retry.

Repeating work without those checks can act on an outdated picture. Use the recovery mechanism supported for the actual operation and its current state; there is no universal retry instruction for every failure.

For the supplied incident, assume neither right was added and no other change is pending. After the approved privilege correction, authorized recovery can attempt the required additions. Verify that the intended account receives both rights, invoice review works within its boundary, and payment release remains unavailable.

That establishes this account's recovery. It does not establish that every affected change has recovered.

The **scope of impact** is the set of people, accounts, operations, and time period affected by the fault. Look for other failures that used the same integration during that period. Include removals as well as grants. A failed removal can leave access usable even when nobody is asking for help.

After recovery, there is another question: why did the service allow the defect to go unnoticed?

**Problem investigation** looks for the underlying cause and changes that reduce recurrence. Service can be restored while that follow-up continues.

Here, the immediate cause was missing write privileges. The maintenance procedure also accepted a successful read check as sufficient. Updating the procedure to verify the required read, grant, and removal operations addresses that weakness. Review work that failed during maintenance too, rather than testing one fresh request and overlooking the backlog.

Support has now supplied evidence that improves implementation and administration.

If investigation instead shows that the required operation is unsupported, retries cannot create it. The service needs a revised integration or an acceptable, supported manual arrangement, with owners, timing, and evidence.

## Access can work correctly and still need to end

Suppose an employee no longer checks invoices but still needs the application account for other duties.

The integration may be healthy. Every earlier grant may have succeeded. Those facts do not justify keeping invoice-review rights indefinitely.

Governance revisits the need. One mechanism is a **certification campaign**, an organized access-review exercise. A **certification** is the review assigned to a reviewer within that exercise, covering the relevant users and access.

The reviewer needs understandable access descriptions and current work context. Otherwise, a technically complete review can still produce poorly informed decisions.

For the directly requested invoice-review profile, assume no other rule or approved access package requires its rights. A reviewer can decide that the access should be removed. Recording that decision and removing the application permissions are separate events.

**Remediation** is carrying out the correction required by a review decision. The applicable review process must be completed, including required sign-off, before treating removal as submitted for execution. Delivery then depends on the supported integration or manual path. Verify the resulting access rather than treating a saved revoke choice as proof of removal.

The origin of access also matters. A **role** groups access associated with a responsibility. It can be given through a request or through configured assignment criteria: rules that determine who qualifies. If the rules still say a person qualifies, trying to remove one part of the access does not resolve that continuing requirement. Investigate the rule and the person's current information, then correct the applicable policy or design through the authorized process.

Do not falsify accurate employee information just to force access off. Determine whether the current information, assignment rule, or business decision is wrong and correct the right thing through an authorized process.

The **access model** is the way access is defined, grouped, and assigned. Reviews can reveal defects in that model. If people repeatedly receive more access than their work requires, the package or assignment rule may need redesign. If reviewers misunderstand an accurate package because its description is poor, improve the description.

A known, urgent withdrawal should follow the appropriate authorized removal process. It should not wait merely because a periodic campaign is scheduled later.

## Follow the work and evidence between responsibilities

The relationships look like this:

```text
Governance
approved need and access boundaries
                 |
                 v
Implementation
tested service and operating guidance
                 |
                 v
Administration
operate, monitor and maintain
                 |
          detected problem
                 |
                 v
Support
diagnose, recover and verify
       |                   |
       v                   v
Restored operation    Design correction
       |                   |
Administration       Implementation

Operating evidence and access reviews
                 |
                 v
Governance: retain, remove or revise

Arrows show work and evidence handoffs,
not automatic ISC execution stages.
```

Governance supplies the justified need and limits. Implementation supplies the tested arrangement and operating knowledge. Administration supplies ongoing observation. Support supplies diagnosis, recovery, and evidence of defects.

The order is not a rule that one responsibility must finish before another starts. Operational evidence can change the original requirement. A review can trigger removal, which itself needs delivery and verification. A support investigation can reveal a governance question rather than a broken connection.

The useful handoff includes what is known, what remains uncertain, who can decide, and what result needs to be established next.

## Understand what an ISC screen is showing you

The interface brings several kinds of work together, but a status belongs to a particular record or operation.

A request view shows requested access and decision progress. Provisioning Activity and Account Activity help investigate delivery actions and errors. A task view shows assigned manual work. Certification views show review decisions and their progress.

Connect the screen to the work behind it. "Approved" describes a decision. It does not mean that the application accepted every required change. An older collected account record may also lag behind a later application observation, so compare times before concluding that another write is necessary.

Configuration has its own consequences. **Identity processing** recalculates identity information and applicable access requirements. Applying relevant configuration changes can start that evaluation and lead to provisioning work. Completion of processing is not a test that every resulting application change succeeded.

That distinction matters when someone asks you to undo a change.

**Rollback** means returning something to an earlier state. Restoring an earlier configuration and correcting rights already delivered to accounts are separate tasks. The definition describes what ISC should use; the application's permissions are effects that may already exist.

For ordinary, continuously held entitlements, deleting an access-profile definition does not itself remove the entitlements previously granted through it. **Deprovisioning** means removing access. Deleting the package is not a substitute for arranging the applicable access removal.

Before changing or deleting a profile, check where it is used and how people received its access. A role or another configuration may depend on it, and the supported correction must account for that relationship. Do not try to bypass those dependencies.

Plan both parts: stop further unwanted effects, then correct the effects already delivered. Preserve evidence of the affected population and grants so that you can verify the correction without removing unrelated, justified access.

## What changes when delivery is manual?

Suppose another application supplies an account file but has no automated permission-write integration.

The file can still tell ISC about accounts and access. It cannot change the application's permissions merely because ISC reads it.

Establish whether the available services and supported configuration provide the needed manual fulfillment or remediation path. Do not assume every read-only source automatically supplies a complete process.

Where the arrangement is supported, an assigned operator makes the change in the application. A task can instruct that work; it cannot perform the permission change by itself. The accepted service needs a responsible operator, a completion expectation, evidence of the application change, and an updated account observation where required.

All four responsibilities still matter. Implementation defines the arrangement and verifies its limits. Administration watches file freshness and unfinished work. Support investigates missing files or overdue changes. Governance decides whether the controls and actual removal timing meet the requirement.

If the business needs access withdrawn faster than the manual arrangement can achieve, the requirement is unmet. Change the design or obtain an appropriate, explicit decision about the risk. "The connector is read-only" explains a limitation; it does not resolve it.

## Reason through the next action

### An approved request has no suitable account

The agreed service supports existing accounts only. A request is approved, but delivery has not completed. Someone suggests repeatedly retrying until an account appears.

What would you establish before acting? Is this a failed supported operation, or a case outside the design?

**Worked reasoning**

First check whether the account is genuinely absent. It may exist in the application but not have been collected or correctly associated in ISC.

If it is absent, follow the agreed exception and inspect whether any creation or other work has already been initiated. Do not assume the design label prevented it. Escalate unexpected activity through the authorized process.

Automatic account creation needs an accepted design of its own: required data, supported operations, appropriate privileges, testing, and operational ownership. Retrying does not supply those things.

### One grant works again, but other failures remain

The integration privilege has been corrected and one grant has been verified. There are 12 other failed operations from the affected period, including three removals. Their present outcomes have not been checked.

Can the incident be closed?

**Worked reasoning**

The verified grant establishes one recovery, not the state of the other operations.

Identify their accounts, current access, operation results, and any running or pending work. Arrange recovery according to those facts and the supported mechanisms. Include the three removals according to their risk and required timing, even if no user has complained.

Record what has recovered and what remains unresolved. Prevention work may continue after service recovery, but unchecked affected delivery is not evidence of complete recovery.

### A reviewer changes their mind after choosing removal

A reviewer records removal, then sends support an informal message asking to keep the access because it might be useful someday.

What authority and execution state would you need to establish?

**Worked reasoning**

Resolve the instruction with the authorized decision owner. Establish a current reason to retain access or the appropriate exception, including any required end or review date. An informal possibility of future use is not automatically sufficient justification.

Check whether the review was finalized and whether removal is unstarted, pending, running, or complete. Use the supported process for an authorized change of decision. A message does not prove that submitted work was cancelled.

If access is already removed, restoring it is a separately authorized action. Do not hide that action by rewriting the explanation of the earlier removal.

### A faulty access profile is deleted after granting excess rights

An access profile contained more access than intended and has already been granted to accounts. Deleting its definition is proposed as the entire fix.

What would that leave unresolved?

**Worked reasoning**

Existing permissions can remain after the definition is deleted. Separate stopping new unwanted grants from correcting existing ones.

Preserve the configuration and grant evidence needed to identify the affected population. Use an appropriate controlled change to stop further effects. Check the access requirements and related configurations that still apply, then arrange supported, authorized removal of excessive rights from the relevant accounts.

Verify the resulting application permissions and preserve justified access. The absence of the old profile name is not proof that its unwanted permissions are gone.

## Apply the reasoning to a different service

A proposed warehouse portal service has two populations: staff who read stock records, and supervisors who may adjust stock after approval. Account-file collection works. Automated permission changes have not been verified. The pilot is planned for next week, and access must be removed within an agreed deadline when responsibility ends.

What would you need before accepting the service, and what would the operating team need afterward?

Pause on the uncertain point: the ability to read accounts has been established; the ability to deliver and withdraw the required access has not.

**Worked reasoning**

Start with the work boundaries: which records each population may use, what "adjust" permits, who can authorize it, and when access must end. Then establish the actual grant and removal capabilities, required privileges, and reliable account association.

If automated delivery is unavailable, assess a supported manual alternative. Identify who performs it, how quickly they can act, and how completion is evidenced. If it cannot meet the withdrawal deadline, obtain a design or risk decision before acceptance.

Test permitted actions, excluded actions, rejection, removal, exceptions, and failure visibility using appropriate accounts and data. Untested write behavior remains untested, however close the pilot date is.

Handover should explain the accepted limits, expected collection freshness, decision ownership, operational coverage, evidence locations, and conditional recovery guidance. When a later failure occurs, support needs to identify the account, missing operation, delivery state, and current application result before selecting a correction.

A disputed need goes back to the authorized decision owner. A recurring delivery defect goes back into design and operating improvements. Different teams can divide this work differently, but the decisions, actions, and evidence still need to connect.

Try explaining the whole service without starting with a settings screen: what access is justified, how that becomes a tested arrangement, how it stays operational, how a failure is recovered, and how changing work leads to access being reconsidered and, where needed, actually removed.
