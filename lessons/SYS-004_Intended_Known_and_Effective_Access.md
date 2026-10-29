# What should be allowed, what ISC records, and what actually works

You have temporary permission to export reports from an application. That permission should end at 09:00, but you must still be able to read the reports.

At 09:06, SailPoint Identity Security Cloud, or **ISC**, still lists export access for your account. ISC is a cloud service for managing identities and access across systems. The application administrator checks the account in the reporting application and finds export access there too.

Both records say the same thing. Does that mean everything is correct?

The requirement says export should have stopped. Agreement between the records cannot make the remaining access appropriate.

Now suppose an authorized administrator removes export access. The application refuses exports, but ISC still displays the earlier permission.

The records disagree this time. Putting export back just to make them match would undo the correction.

To decide what to do, we need to follow three connected questions: what should this person be allowed to do, what information does ISC have, and what does the application actually allow?

## Make the required result precise

Let's give the two permissions clear meanings.

A **permission** allows an action on a resource. The action here is reading or exporting. The resource is the daily operations report collection.

In this hypothetical application:

- **Read reports** allows the account to read those reports.
- **Export reports** allows the account to save that report collection to a file.

These are example labels, not standard SailPoint permissions.

The requirement is to remove Export reports while keeping Read reports and leaving the existing account enabled.

Why keep all three parts together? Disabling the whole account could stop export while also stopping the reading the person still needs. Removing the wrong permission could leave export available. Either change would miss the agreed result.

An **account** is a record used by a person or another actor in a particular system. Here, the application holds the reporting account and its permissions.

ISC has a separate person-level record called an **identity**. It connects information about the person with their accounts across systems. The identity is not the reporting account itself.

For our main example, the existing reporting account is correctly associated with the person's ISC identity. It is the account used for the checks below.

That connection matters. If you inspect one account while the person exports through another, the two observations concern different records. The report collection matters for the same reason: an export check on unrelated reports would answer a different question.

In the main example, the account is enabled, sign-in works, and the application checks its current permissions for each operation. Export reports is the only permission or membership that provides export for this collection.

All times below are hypothetical, on the same day and in the same time zone. The 09:00 deadline is an agreed business requirement. It does not claim that every ISC expiry setting can stop every application's access at that exact second.

## What tells us export should end?

**Intended access** means the access the organization has authorized for the person, including its conditions and duration.

Here, the person was allowed to export during a temporary assignment. From 09:00 onward, that permission is no longer justified. Reading remains justified.

The basis could be an approved job-access policy, an application owner's decision, or an authorized removal instruction. Establish who can make that decision and which decision applies.

An **access request** asks for specified access for a person. An approval can record the decision to provide it.

That approval and the account update do different jobs. Approval establishes that the request may proceed. The application account must still receive the permission before the application can use it.

The reverse is true when access ends. An authorized decision to remove export must lead to the required account change and restriction.

Last week's valid approval explains why export was granted. It does not justify keeping it beyond the approved period.

There is another decision to check: does the technical configuration express the agreed requirement?

Suppose the policy allows temporary export, but an engineer configures permanent export for everyone in Operations. The systems could apply that instruction exactly and still provide too much access.

The first problem would be what the configuration requires. A perfectly executed operation cannot correct an inappropriate instruction.

## How did ISC learn that the account had export access?

The reporting permission exists in the application. ISC needs to obtain information about it.

ISC uses a configured **source** to represent the system or account-data collection being managed. The **connector** supplies the supported way of reading that information and, where supported, performing changes.

Creating the reporting source does not create another reporting application. It gives ISC a way to represent the relevant account data and use the configured integration.

Reading source account information into ISC is **account aggregation**.

For the collection in this example, the integration reads the reporting account and its permission list. ISC stores a representation of that account using the information it received.

ISC represents source access rights as **entitlements**. Read reports and Export reports are the entitlements represented here.

The application account holds the permissions. Aggregation brings information about them into ISC, where the account's association with the identity connects that access information to the person.

Suppose this collection happened at 08:45. Both read and export were present.

At 08:45, that was appropriate. The temporary assignment had not ended.

At 09:06, the same collected record still tells us what ISC obtained at 08:45. Opening it later does not perform a new account read.

That is why the age of the information matters. A record can accurately preserve an earlier observation without establishing the account's current permissions.

Collection also has a scope. It may read a configured account population, or use a supported method that obtains relevant changes since an earlier collection. A successful collection does not mean every account and permission in the application was included.

## What had to happen after the removal decision?

The application needs a change to the account's permissions.

**Provisioning** is the work of making account or access changes through a supported integration. Adding a permission and removing one are both provisioning work.

Here, ISC initiates the removal of Export reports. The reporting application is the **target system**, meaning the system receiving that operation.

For this attempted removal, the connector supports the operation, provisioning is enabled, the connection works and the authorized change has been initiated.

There is still another requirement: the integration must be allowed to make that update in the target.

A connector may use an **integration account**, a technical account whose authority lets it perform operations. The **recipient account** is the person's reporting account being changed.

The integration account needs permission to remove an access right. The recipient account currently has permission to export reports. Those permissions belong to different accounts and allow different actions.

An **integration privilege** is the authority the integration has to perform an operation in the connected system.

The integration might be allowed to read reporting accounts but lack the privilege to remove their permissions. Knowing what an account holds and being allowed to change it are separate capabilities.

Some connectors use another supported authentication mechanism instead of a dedicated integration account. The need for authority to perform the operation still applies.

In our example, the engineer initiates removal at 09:02. At 09:03, the target rejects it because the integration lacks the required removal privilege. Export reports remains on the recipient account.

Now we can explain the gap. The business decision exists, and the removal was attempted. The target did not apply this change.

Another collection could read the remaining export permission. It would supply newer information about the account, but it would not supply the missing removal privilege or carry out the rejected update.

## What can the person actually do at 09:06?

At 09:05, the administrator checks the intended reporting account and confirms that both permissions remain.

At 09:06, an authorized check using non-sensitive test data successfully exports a report.

**Effective access** means what the application permits for the account, action, resource and conditions being examined. Under these conditions, the account can still export the daily operations reports.

The application makes an **authorization** decision when it decides whether an operation is allowed.

For a working signed-in account, the supplied export rule checks whether Export reports is currently present. If it is, allow export of the report collection; if it is absent, deny export. Reading has its separate Read reports check.

The permission remains, so the application allows export. It is enforcing its configured rule while the business restriction remains unmet.

Here is how the evidence fits together:

| Time | What happened | What that tells us |
|---|---|---|
| 08:45 | ISC collected read and export | Both were present in the information received. |
| 09:00 | The approved export period ended | Export should stop; reading should remain. |
| 09:02 | ISC initiated the authorized removal | An attempt started. |
| 09:03 | The target rejected it for missing removal privilege | This removal did not complete. |
| 09:05 | The administrator found both permissions on the target account | Export remained on the inspected account. |
| 09:06 | A controlled export check succeeded | Export was still allowed under the tested conditions. |

The target record and the controlled action check support each other. The operation error explains why this particular attempt did not produce the required change.

ISC's earlier observation happens to agree with the current target account because the failed removal left export in place.

At 09:06, these three views answer different questions about the same account:

| View | In this case at 09:06 |
|---|---|
| Intended access | Reading should remain; export should have ended. |
| ISC's recorded or known information | The 08:45 collection shows both permissions; activity records the rejected removal. |
| Effective access | The tested account can still export the report collection. |

“Intended,” “known” and “effective” are ways of reasoning about the evidence. They are not three ISC status fields.

ISC can hold more than one useful record about the same case. Its collected account record and rejected-operation record describe different facts, and both can be accurate.

## Correct the gap that the evidence identifies

The demonstrated delivery problem is the integration's missing removal authority.

The responsible team needs an approved correction to that authority or another authorized way to perform the removal. Repeating an approval does not change the integration's privileges.

A **retry** repeats an operation. Before repeating it, inspect the current account and outstanding work. Another operator may already have corrected the permission since the rejection.

This example gives a definite rejection with no removal. Other cases can have uncertain results, and a larger request can contain several operations with mixed outcomes. Investigate the particular account and operation rather than treating one error as the result of all work.

If continued export creates an immediate risk, use the organization's incident process. Updating ISC's displayed information is different from stopping the application capability.

For our case, the application owner authorizes a separate correction by the application administrator.

Before that target-only change, the engineer checks whether ISC still has a continuing reason to grant export.

An **assignment** associates an identity with an access item. Depending on how the access was assigned and managed, it can express an ongoing requirement to provide that access.

If that requirement remains, simply removing the target permission may be temporary: later processing can try to provide it again.

For this manual correction, the check establishes that no continuing configured assignment or rule requires export. The administrator can remove Export reports while preserving Read reports and the enabled account.

## Why do the screens disagree after the correction?

At 09:12, the administrator removes Export reports directly in the reporting application.

That is a new, separate action. It is not a successful retry of the rejected ISC operation.

At 09:13, the target account has Read reports and no Export reports. At 09:14, controlled application checks allow reading and deny export because the export permission is absent.

The current-permission rule now produces the required result.

ISC still has its earlier collected account information. The manual target edit did not, by itself, perform another collection.

| Time | What happened | What that tells us |
|---|---|---|
| 09:12 | An authorized administrator removed export in the target | A separate correction was performed. |
| 09:13 | The target showed reading present and export absent | The inspected permissions matched the requirement. |
| 09:14 | Reading worked; export was denied for a permission reason | The checked application behavior matched the requirement. |
| 09:15 | ISC still displayed its 08:45 observation | The collected view had not incorporated the correction. |
| 09:20 | A permitted collection obtained the corrected account data | The relevant ISC account information reflected the correction. |

At 09:15, disagreement identifies old information in ISC. Restoring export to make the target match that observation would reintroduce the unwanted access.

The appropriate follow-up concerns collection and visibility. The restriction itself has been verified within the supplied account, resource and application-rule conditions.

The 09:20 collection is an event supplied for this example. It is not a guaranteed automatic step after every change. In another supported integration, a different update mechanism may bring the information up to date. Establish what actually updated the record.

### Does the later correction erase the earlier failure?

The 09:03 operation remains a rejected operation. The 09:12 manual action explains how the account was corrected afterward.

Keep both in the history, with evidence connecting the correction to the original issue. Otherwise, an engineer who sees only the failed activity cannot know that another operator resolved the target permission.

The deadline was also missed. Correct behavior at 09:14 does not establish that export stopped at 09:00.

Nor does successful export in a safe test establish whether anyone exported real business data. Investigating actual use needs the relevant application usage evidence.

You can therefore have a verified current restriction, a late correction, an original operation failure and a remaining information update in the same case. Describing each accurately is more useful than forcing them into one “success” label.

## Follow the two directions through the same account

One path changes the target account. Another reads information about it.

```text
CHANGE THROUGH ISC
Authorized export-removal instruction
       |
ISC initiates supported removal
       |
Target receives the operation
 rejected -> this removal not applied
 applied
       |
Target account loses Export reports
       |
Application checks current permission
       |
Export denied; reading retained

OBSERVE THE ACCOUNT
Target account information
       |
Aggregation reads included data
       |
ISC's collected account information

SEPARATE HUMAN WORK
Compare requirement, records and behavior
Check account, resource, time and rules
Manual correction uses another operator
```

The write path connects an authorized instruction to an attempted operation and the target's response. Its successful branch assumes the selected current-permission rule and retained reading.

The observation path brings account information back into ISC. Reading can happen independently of a permission change or user sign-in.

The arrows show those dependencies, not a private ISC service sequence or fixed processing time. The rejection concerns this removal, not every operation in a larger request.

The manual correction follows its own authorized operator route into the target. It does not turn the rejected write into an applied write.

The comparison is human investigation here. ISC does not automatically repair every difference merely because two records disagree. Collected information can, however, be used by configured processing that initiates further changes. We need to understand that configuration before treating a new collection as harmless observation only.

## When someone says “ISC shows access,” which record do they mean?

So far, we have used a collected account and a provisioning result. Neither is the same as an access definition or an assignment.

An **access profile** bundles related entitlements from one source. A reading profile could contain Read reports.

Opening its definition tells you what the bundle contains. To establish that a person has the access, you still need to examine that person's relationship to it and the relevant account information.

A name such as “Basic reporting” does not enforce a reading-only boundary. If the definition contains export too, delivering that bundle could faithfully implement an incorrect access design.

A **role** groups access for a business responsibility. A role assignment can be a reason ISC seeks to provide that access to an identity.

The connection is definition, assignment, delivery and use. The definition describes access. The assignment relates it to the person. Delivery changes the intended account. Application rules determine the resulting capability.

An assignment is therefore useful evidence of why access is being managed. By itself, it is not a complete history of every permission change.

### Could the person already have held the access?

Yes. ISC does not have to be the system that originally granted every permission it records.

**Identity processing** evaluates identity information and applicable configuration. It can update identity information and initiate configured access changes. Its completion does not validate that those target changes succeeded.

During that processing, ISC can also recognize that a person already holds all the entitlements required by an access profile. This is **detection**.

For the reading profile, suppose the collected account already has Read reports. If the profile's complete entitlement requirements are met, processing can associate that profile with the identity.

That tells you what ISC recognized from existing access. It does not establish that ISC originally added Read reports. The permission could have arrived through earlier administration; inspect the history rather than assuming its origin.

### Where would you look for the different pieces?

An identity's **Access tab** presents represented access items such as roles, access profiles and entitlements. **Account details** show the account information and its attributes.

An **attribute** is a named field on a record. An account's identifier and permission list are examples.

**Provisioning Activity** and **Account Activity** help inspect attempted changes, their accounts, reported outcomes and errors. An activity result describes that work at that time. A later administrator can change the account again.

For a supported manual arrangement, **fulfillment** is the work of getting the change carried out, and a **manual task** assigns that work to a person. Marking the task complete records the operator's reported completion. Current target evidence establishes what is there afterward.

These records help reconstruct the case. Opening any of them does not perform an export check in the application.

## What happens when the application receives an export request?

The **front end** is the page and controls the person uses. The **back end** is the trusted application processing that handles the request.

The Export button can start an export request. The back end must decide whether the account may perform it.

Hiding the button changes what the page offers. A protected request might also arrive through another supported interface. The permission restriction needs to be enforced where the application handles that request.

That is why the controlled check at 09:14 matters: the application refuses the action for a permission reason. The conclusion does not depend only on a missing button.

A **session** connects later requests with a signed-in account. If sign-in has expired, the application can reject a request before it evaluates the export permission.

A service outage can also stop the request. “Service unavailable” tells you about a service problem, not a completed decision that this account lacks export authority.

For an authorization check, establish the intended account, valid sign-in conditions and the reason for refusal. A failed operation and a permission denial are not automatically the same result.

## Which time are you looking at?

Suppose you open ISC at 09:30. You now know when you inspected the page. You do not yet know when the target information was obtained.

Keep the events distinct:

- The requirement's **effective time** is when export should stop.
- The **target event time** is when the account actually changes.
- The **collection time** is when the relevant account data is obtained.
- The **display or search availability time** is when the update becomes available in that view.
- The **inspection time** is when you look at or capture the evidence.

These are meanings to investigate, not five fields guaranteed on every ISC screen.

For example, “screenshot taken at 09:30” can still describe information collected at 08:45. The newer screenshot date does not make the underlying observation newer.

ISC **Search** queries searchable information about identities, access and activity. It does not ask the reporting application for fresh permission information on each query.

An update can reach one ISC view before Search reflects it. **Synchronization** means bringing that other representation up to date. Timing depends on the change and system conditions; one fixed delay does not describe every update.

Before treating an empty result as absent access, check what the query asked for, whether it covered the correct identity, account, source and access item, and whether the relevant information became searchable.

Time zones add another possible difference. SailPoint documents that date-based Search queries use **Greenwich Mean Time**, or **GMT**, while Search displays dates in the browser's time zone.

Convert the times to a common zone before comparing them. Different displayed clock values can represent the same instant.

## Could fresh information still be incomplete?

Yes. Age and coverage answer different questions.

A **filter** limits which records are included in collection. If it excludes the person's second account, successfully collecting the first account says nothing about the excluded one.

The account **schema** describes which attributes ISC represents and how they are organized. The connector and configuration must expose and represent the access information being investigated.

A recent collection could therefore omit the account or permission needed for the question. Establish inclusion before interpreting absence.

Even complete information about one permission may not describe every route to the capability. Let's change two conditions from the main example.

### Export is available through a group too

A **group** collects members, such as accounts. An application can grant permissions through that membership.

Suppose the application's rule now permits export when the account either holds Export reports directly or belongs to an export-enabled group.

Before removal, the account satisfies both conditions.

Removing the direct permission changes the first condition to false. The group condition stays true, so the application still permits export.

The individual removal can succeed while the overall restriction remains unmet. The missing work concerns the remaining grant path and its approved business basis.

This is a different rule from the original example, which excluded alternative grants. We cannot apply its permission-only conclusion after changing that condition.

### An existing session uses earlier permission information

Our main application checks current account permissions for every operation. Another application may use permission information captured when the session began.

Suppose that session began while export was allowed. The account later loses export, but the existing session continues using its earlier information.

A fresh sign-in could use the new permissions while the older session behaves differently. A new-session check alone would leave the old-session requirement unanswered.

Find out what the application actually checks and how it supports session expiry or invalidation, meaning ending acceptance of that session. Permission removal does not establish that every existing session or previously issued credential stopped working.

Do not assume the session is the cause merely because export continues. Another grant path or a different account could also explain the result.

The conclusion must fit the evidence. “Export is absent from this collected account record” is narrower than “This person cannot export any reports.”

The broader claim needs coverage of the relevant accounts, grants, resources and session conditions, with a stated check time.

## Why can export return after someone removes it?

Now return to the continuing assignment we checked before the manual correction.

Suppose, in a different case, Export reports was assigned through an ISC access request and that assignment still requires it.

An administrator removes the entitlement directly from the source account. That changes the target, but it does not withdraw the continuing ISC requirement.

SailPoint documents that this requested entitlement is reprovisioned at the next aggregation after direct source removal. **Reprovisioning** means another attempt to provide the access.

Follow the distinction carefully. Aggregation reads that the target permission is missing. The continuing requested assignment leads to a new provisioning attempt. That write must still be accepted and applied by the target for export to return.

The read and the write have different jobs, even though the read can lead to the later work.

For a lasting withdrawal, use the supported requested-entitlement revocation process and verify its delivery. **Revocation** means withdrawing access through the applicable process.

Other assignment origins have their own rules. Do not turn this specific requested-entitlement behavior into a claim that every collected permission is automatically restored.

Our earlier manual correction explicitly had no continuing configured requirement for export. That condition explains why we did not leave a known restoration requirement unresolved.

## Choose an action that changes the cause

“Refresh it” is incomplete advice until we identify what is wrong.

If the authorized owners disagree about whether export should stop, collecting more account data does not settle the decision.

If the shared configuration grants permanent export against a temporary-access policy, inspect that definition and the affected population. Repeating its operations would keep applying the wrong instruction.

If delivery was rejected, investigate the exact operation, error and required authority. If it targeted another account, investigate account selection.

If a second grant still permits export, examine that route. If the correct target result is verified but ISC has an old observation, investigate collection scope, results and subsequent visibility.

**Reconciliation** is a term used for comparing records or states and addressing differences. Ask what is being compared, which requirement governs the result and whether the proposed work is investigation or an actual correction. There is no universal ISC repair that makes every difference correct.

Use read-only inspection when it can answer the question. Before aggregation, identity processing or a retry, understand the configured work that can follow. A new observation, a reevaluation and a repeated write are different actions.

## What would you report as resolved?

For the main example, the useful conclusion joins the authorized requirement to the current result.

Identify the correct reporting account, the daily reports in scope, the 09:00 deadline and the reading capability that must remain.

Explain that the ISC removal was rejected and a separate authorized administrator corrected the target. Current permissions and controlled checks verify retained reading and denied export under the supplied rule.

Then identify the unfinished work. At 09:15, the target restriction is verified, but the collected record remains old.

A useful update could say:

> Export removal is confirmed for the reporting account, and reading remains available. An administrator performed the approved correction after the ISC operation failed. Target permissions and controlled application checks support the result. ISC's collected view still shows the earlier permission; collection follow-up remains open. The missed deadline is recorded separately.

Whether the overall ticket can close with that follow-up open depends on the organization's process. Give the responsible people an accurate account of current restriction, remaining information maintenance and the historical failure.

## Work through these observations

### A newer screenshot, an older observation

An engineer initiates export removal at 11:00. A colleague opens ISC at 11:10 and sees export listed. The last relevant collection was at 10:30. No target evidence after 11:00 is supplied.

Has the removal failed? What would you check?

The displayed observation predates the attempt. It cannot establish whether that attempt succeeded.

Inspect the operation result and current permission on the exact target account. A correct target points toward observation maintenance. Remaining export calls for investigation of delivery, later changes or continuing grants.

Repeating collection alone would observe the account; it would not perform the removal.

### Everything succeeded, but too much arrived

The approved policy permits reading only. The configured access profile contains read and export. Both are delivered, provisioning reports success, and collected account data agrees with the target.

Where is the problem?

The configuration does not express the approved requirement. Successful delivery explains how the wrong access reached the person.

Compare the shared profile with the authorized policy, involve its accountable owner and assess who else uses it before a controlled correction. Editing this one account alone leaves the shared design unresolved.

### Search is empty, but the target holds export

Search returns no export access for an employee. The administrator finds export on an account believed to belong to that employee.

Should another permission be granted so ISC recognizes it?

No. The known problem is missing or unexpected visibility, not demonstrated missing access.

Confirm account ownership and its association with the ISC identity. Check collection coverage, query scope and synchronization. The result says this query did not return the expected information; it does not authorize another grant.

### One grant disappeared, but export still works

The direct export permission is absent from the account used in an authorized test. The test still exports. Group-based export and the session's permission behavior have not been checked.

Did the direct removal fail? Is the required restriction verified?

The direct permission is absent, but the tested export still works. Those facts can coexist.

Inspect remaining grant paths and the actual session rule. Do not invent which one caused the result. One removed grant does not establish a complete restriction, and continued use alone does not establish failure of that specific removal.

## Apply the reasoning to two portal accounts

An employee has two accounts in a supplier portal: **standard-account** and **admin-account**.

The requirement permits reading supplier records but prohibits changing supplier bank details through either account.

The available evidence is:

- ISC Search shows no bank-edit entitlement on the identity.
- The portal administrator confirms standard-account has read-only permissions.
- An attempted bank-detail change fails with “service unavailable.”
- Nobody has inspected admin-account, and the relevant collection time is unknown.

Would you confirm that the requirement is met?

The unexamined account is still part of the requirement. The service error does not establish a permission denial. The unknown collection time also limits the Search evidence.

Confirm both account identifiers and ownership with the administrator. Inspect current permissions and other grant paths for both accounts, including session conditions relevant to continued use.

Establish whether ISC collected both accounts, which permissions were represented and when that information was obtained.

Arrange authorized verification using a safe test record or equivalent application evidence. Do not change real supplier bank information. Confirm that editing is refused for an authorization reason while legitimate reading remains available.

Teams can perform appropriate checks in parallel. There is no mandatory investigation order, but all material evidence gaps must be addressed before making the broader claim.

Record the account, resource, conditions and check time. A later change can alter the result.

## Explain the distinction in your own words

Why can matching records still show incorrect access? Why can different records exist after a correct removal? What would decide your next action?

The requirement establishes what should be allowed. ISC's records describe decisions, definitions, assignments, observations and work, each with its own meaning and time. The application determines what the account can actually do under its rules.

Trace how those parts connect. Then choose the action that addresses the demonstrated gap, whether it concerns the decision, configuration, delivery, visibility or application enforcement.
