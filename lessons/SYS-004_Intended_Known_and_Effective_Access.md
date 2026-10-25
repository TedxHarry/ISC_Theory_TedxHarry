# What should be allowed, what ISC records, and what actually works

A temporary assignment ends at 09:00. The person must still be able to read reports, but must no longer be able to export them.

At 09:06, SailPoint Identity Security Cloud, or **ISC**, still lists export access. The application administrator checks the reporting account and finds export access there too.

The two records agree. Is the access correct?

No. They agree about something that should no longer be allowed.

Later, an authorized administrator removes export access. The application now refuses exports, but ISC still displays the earlier information.

This time the records disagree, although the application is enforcing the required restriction.

To explain either situation, you need to connect the requirement, the work performed, the information collected, and the application's actual decision. Comparing two screens alone leaves those connections unanswered.

## What exactly needs to stop, and what must remain?

“Remove reporting access” could mean several different changes. It might mean stopping sign-in, reading, exporting, or administration. Those actions don't have the same effect on the person's work.

A **permission** allows an action or access to a resource. For this hypothetical reporting application, call the two permissions **Read reports** and **Export reports**.

Read reports allows reading the daily operations reports. Export reports allows exporting that same report collection to a file. The labels are illustrative, not built-in SailPoint permissions.

The requirement is to remove export while preserving reading and leaving the existing account enabled. Disabling the whole account would stop export, but would also stop legitimate reading. That would solve the wrong problem.

An **account** is a record in a particular system used by a person or another actor. An ISC **identity** represents the person and connects their identity information, associated accounts, and access.

The identity and the reporting account are related records, not one object. Before comparing evidence, establish that you're examining the account actually used for the operation. A correct result about another account wouldn't answer this question.

The report collection matters too. Permission to export a different collection wouldn't establish whether these daily operations reports can be exported.

For the main example, assume one relevant existing, enabled reporting account. Its direct permissions determine reading and export; there is no alternative grant of export. The application checks current account permissions for each operation. We'll examine different grant and session conditions separately.

All names, times, records, and outcomes here are hypothetical. Times are on the same day in the same time zone. The 09:00 deadline is the business requirement, not a guarantee that an ISC expiry setting enforces every application's restriction at that exact second.

## Where does “should be allowed” come from?

**Intended access** is what the organization has decided should be allowed for the person, under the relevant conditions and for the applicable period.

In this case, temporary export ends at 09:00. Reading continues. Both parts belong in the requirement, because a removal can be too broad as well as too narrow.

The decision might come from an approved job-access policy, a manager's approved request, an application owner's decision, or an authorized removal instruction. Establish which decision applies and who has authority to make it.

An **access request** asks for specified access for a person. Its approval records the decision about that request; it doesn't itself edit the reporting account.

Time is part of that decision. Last week's genuine approval can explain why export was granted without justifying why it is still available after the approved period ends.

There is also a difference between the approved requirement and the configuration intended to implement it.

Suppose an engineer configures permanent export access for everyone in Operations, although the approved policy permits export only during a temporary assignment. The systems could follow that setting perfectly and still provide inappropriate access.

First ask whether the configuration expresses the approved requirement. Then ask whether the systems carried it out correctly. Successful execution of the wrong requirement isn't a correct business outcome.

## How did export reach the ISC screen?

The permission exists in the reporting application. ISC needs a way to obtain information about that account.

A **source** is ISC's configured representation of a system or account-data collection. A **connector** provides the integration used to read the information and perform supported changes.

The reporting source therefore represents information about the application; it isn't the application itself.

ISC represents a source access right, such as an application permission or group membership, as an **entitlement**. In this example, Read reports and Export reports are represented as entitlements.

**Account aggregation** reads source account information into ISC. The data can cover a configured account population or, for a supported change-based collection, relevant changes since an earlier collection.

Suppose the relevant collection obtained both permissions at 08:45. ISC now has an observation that the reporting account held read and export in the collected data.

At 08:45, that observation agrees with the temporary assignment. After 09:00, it is still an accurate description of what was collected earlier. It isn't automatically evidence of the account's current state or of what should be allowed now.

That distinction explains why an old permission can remain on a screen after a target change. The displayed information needs a new observation or another supported update before you can treat it as reflecting that change.

## What work was needed to remove it?

Reading the account doesn't remove a permission. A change has to reach the application.

**Provisioning** is the work of making account or access changes through a supported integration. Here, ISC initiates an operation to remove Export reports.

The reporting application is the **target system**, the system receiving the change. For the illustrated automated path, the connector supports this removal, provisioning is enabled, and the authorized change has been initiated. The target still needs to accept and apply the operation.

The integration also needs authority to perform the update.

With a connector that uses an **integration account**, that technical account performs work in the target. It isn't the **recipient account**, the person's reporting account whose permission is changing.

An **integration privilege** is authority held by the integration to perform an operation. The integration might be allowed to read reporting accounts while lacking authority to remove their permissions.

Those are separate capabilities. A successful account collection doesn't prove the connection can perform a removal. Some integrations use another supported authentication mechanism rather than a dedicated user account, but the operation still requires appropriate authority.

In our example, the target rejects the removal because the integration lacks the required removal privilege. The approved instruction exists and the attempt occurred; the specific account change did not complete.

A failed removal doesn't become successful because the account was collected afterward. A newer read could confirm that export is still present, but would not supply the missing write authority.

## What does the application permit at 09:06?

The administrator finds Export reports on the correct target account. An authorized check using non-sensitive test data also succeeds in exporting a report.

**Effective access** is what the application permits for the account, operation, resource, and conditions being considered. Here, the tested account can still export the daily operations reports.

**Authorization** is the application's decision about whether an operation is allowed. Under our supplied rule, it checks the account's current Export reports permission for each export request. The permission is still present, so the application allows the operation.

The business restriction is therefore unmet.

Notice what each observation contributes. The target record establishes that the permission is present. The controlled check establishes that this export worked under the tested conditions. The rejected provisioning operation explains why that particular attempt didn't remove the permission.

### Where does the visible button fit?

The page and its controls are the **front end**, the part the person sees and interacts with. The trusted application services handling the request are the **back end**.

Hiding an Export button changes the interface. It doesn't establish that the back end rejects an export request reaching it through another supported interface.

The restriction needs to be enforced where the protected request is handled. A meaningful check must establish whether export was allowed or refused, rather than relying only on the button's appearance.

A failed test also needs its cause. “Service unavailable” might mean the request never reached a working permission check. That isn't the same evidence as an authorization denial.

A **session** connects later application requests to a signed-in user. An expired session can stop a request too, without demonstrating that the export permission has been removed. Establish the relevant account and valid sign-in conditions when interpreting an application result.

## Put the first observations in order

The sequence explains why the matching records at 09:06 don't show a successful restriction.

| Time | Event or observation | What it establishes |
|---|---|---|
| 08:45 | ISC collects Read reports and Export reports | Both appear in the collected account data. |
| 09:00 | The approved temporary export period ends | Export should stop; reading should remain. |
| 09:02 | An authorized export-removal operation is initiated through ISC | The change is being attempted. |
| 09:03 | The target rejects it for missing integration removal privilege | This attempted removal did not complete. |
| 09:05 | The administrator checks the target account | Both permissions are still present. |
| 09:06 | A safe, authorized export check succeeds | Export is still permitted under the tested conditions. |

The failed write and the current target evidence fit together. ISC's old collected view happens to agree with the target because the attempted removal didn't change it.

“Run aggregation again” doesn't address that demonstrated failure. It can provide another observation, but the team needs an authorized correction to the delivery path or another approved removal method.

If continued export creates an immediate risk, escalate under the organization's incident process. Waiting for a display update doesn't contain the capability to export.

This sequence concerns one explicitly rejected removal. A change with several operations can have mixed outcomes. If an operation's result is uncertain rather than rejected, inspect its actual result and current target state before deciding what failed or repeating it.

## What changes after a separate manual correction?

For this example, the application owner authorizes a manual correction by the application administrator.

An **assignment** connects an ISC identity with an access item. Before making a target-only change, the engineer checks whether an ongoing assignment or rule would cause export to be restored. For this correction, no continuing configured requirement calls for export.

The administrator removes only Export reports, leaving Read reports and the account's enabled state unchanged.

| Time | Event or observation | What it establishes |
|---|---|---|
| 09:12 | The administrator removes Export reports directly in the target | A separate corrective action occurs. |
| 09:13 | A target check finds reading present and export absent | The inspected account permissions match the requirement. |
| 09:14 | Controlled checks allow reading and deny export for a permission reason | The tested behavior matches the requirement. |
| 09:15 | ISC still displays the information collected at 08:45 | This collected view hasn't incorporated the correction. |
| 09:20 | A permitted collection obtains the corrected account data | The relevant ISC account information now reflects the corrected permissions. |

At 09:15, making the target match the old ISC observation would put Export reports back. That would undo the correction.

The approved requirement tells you which outcome is wanted. Current target and application evidence tell you whether that outcome has been achieved within the checked scope. The older observation tells you about unfinished information maintenance.

The 09:20 collection is a supplied event, not an automatic round trip guaranteed after every change. A real integration may update information through another supported mechanism. Establish what actually updated the relevant record.

### What should happen to the failed operation's history?

Keep it as a failure. The manual correction is a different action; it doesn't turn the 09:03 rejection into a successful ISC operation.

Record the correction and the evidence connecting it to the original issue. Otherwise, someone reading only the failed activity might reasonably think the target remains unchanged.

The deadline was also missed. Correct behavior at 09:14 doesn't establish that export stopped at 09:00.

Preserve the verified timeline and any unresolved exposure interval. Permission observations and a safe test don't prove whether real business data was exported. That requires relevant usage evidence under the organization's process.

An accurate explanation can therefore say that the current restriction is verified while also acknowledging late enforcement, a failed original operation, and pending record maintenance.

## See the change and observation as different directions

The same target account connects these paths. One changes its permissions; the other obtains information about them.

```text
CHANGE ACCESS
Approved business requirement
     |
     v
Configured, authorized removal
     |
     v
ISC attempts supported target operation
  rejected -> this removal not completed
  applied
     |
     v
Target account permissions change
     |
     v
Application applies its access rules
     |
     v
Protected operation allowed or denied

OBSERVE ACCESS
Target account data
     |
     v
Aggregation within configured scope
     |
     v
ISC's collected account information

HUMAN COMPARISON
Compare requirement, records and behavior
Check account, scope, time and conditions
```

The arrows show dependencies in the selected paths, not ISC's private service architecture. The rejection branch concerns this removal; it doesn't summarize every operation in a larger request.

Observation can happen independently of a write. It doesn't have to wait for a user sign-in, and it isn't itself proof that the business restriction was enforced.

The human comparison is separate because this isn't a universal automatic ISC routine that repairs every difference. Collection can also lead to configured processing and another change, which is why the surrounding configuration matters before starting it.

The manually performed correction from the timeline reaches the target through a separate authorized operator, not through a second successful pass along the illustrated ISC write path.

## Why can different ISC records seem to tell different stories?

So far, we've used a collected permission and a provisioning result. ISC also contains access definitions, decisions, and assignments. Each answers a different question.

### A bundle definition doesn't tell you who currently holds it

An **access profile** bundles related entitlements from one source. For example, a reporting profile might contain Read reports.

Opening that definition tells you what the bundle contains. It doesn't establish that a particular person holds it, or that every entitlement has reached the person's target account.

A friendly name such as “Basic reporting” doesn't settle the contents either. Inspect the configured entitlements, then establish what the application permits through them.

A **role** groups access for a business responsibility. A role assignment can be a reason ISC seeks to provide access. The definition, assignment, delivery, and later application use are still different observations.

This is also where the approved policy must be checked. If a supposedly reading-only profile contains Export reports too, matching records can demonstrate delivery of the wrong configuration.

### An assignment explains a relationship, not necessarily its whole history

An assignment can help explain why access is being managed. A request can document a decision to assign it; a configured role can provide a different basis.

**Identity processing** evaluates identity data and applicable configuration. It can update identity information and initiate configured access changes. Completing this evaluation doesn't validate that target provisioning succeeded.

During processing, ISC can also recognize that a user already holds all the entitlements required by an access profile. That recognition is **detection**: the access profile is associated with the identity based on already-held access.

Seeing the detected profile doesn't prove ISC originally provisioned those entitlements. It tells you what ISC recognized in the information it evaluated. To explain how the access arrived, inspect the relevant history.

### Activity describes work; collected data describes an observation

A provisioning report can tell you which operation was attempted, for which account, and what outcome or error was reported.

In a supported manual-fulfillment arrangement, an assigned person carries out the change. **Fulfillment** means getting the access change performed. A task records assigned work and its completion status; target evidence is still needed to confirm the result.

Even a genuine success report is historical. The operation might have affected a different permission, or a later administrator might have changed the account again.

The collected account view has another boundary: it describes information obtained from the source within the relevant collection's scope. The time you open that view doesn't make the source observation newer.

This is why the phrase “ISC shows access” needs a follow-up question: which record is showing what?

An identity's Access tab presents represented access items. Account details present account information and attributes. Provisioning reports and Account Activity help inspect change activity. None performs a live export test merely because you open it.

“Intended,” “recorded” or “known,” and “effective” are ways of reasoning about this evidence. They aren't three ISC status fields or competing product screens called “sources of truth.”

## Which time does a timestamp actually describe?

Suppose you open the account page at 09:30.

That establishes when you inspected it. It doesn't establish that the target account was read at 09:30.

Several times can matter:

- **Effective time** is when the approved requirement starts to apply.
- **Target event time** is when a change occurs in the application.
- **Collection time** is when the relevant account information is obtained.
- **Display or search availability time** is when an update becomes available in the view being used.
- **Inspection time** is when you look at the page or export the evidence.

These labels describe evidence, not five timestamp fields guaranteed on every ISC page. You may need to combine collection records, operation records, and application observations.

ISC **Search** lets you query searchable information about identities, access, and activity. It isn't a fresh query to the reporting application for each search you submit.

An update can reach one ISC view before it becomes visible in Search. **Synchronization** here means bringing another view or service's information up to date. Its timing depends on the kind of change and system conditions, so don't assume one fixed delay for all information.

An empty search result therefore needs interpretation. Was the query scoped to the correct identity, account relationship, source, and access item? Was the relevant information collected and made searchable?

Time zones matter when comparing evidence too. SailPoint documents that date-based Search queries use **Greenwich Mean Time**, or **GMT**, while displayed Search dates use the browser's time zone.

Convert times to a common zone before putting them into one sequence. A query value and a displayed value can look different while representing the same instant.

“Screenshot taken at 09:30” and “target permission checked at 09:30” remain different claims, even after the time zones agree.

## Can a recent collection still miss important access?

Yes. Freshness tells you about age; coverage tells you what was included.

A **filter** limits the records included in a collection. An **attribute** is a named value on a record, such as an account identifier or a permission list. An account **schema** describes the attributes ISC represents and how they are organized.

A collection can finish successfully while excluding another account population. It can also lack a permission the integration doesn't expose or represent. A recent collection isn't automatically a complete picture of everything the person can do.

First establish that the relevant account and permission are actually included. Then consider how the application grants the capability.

### What if export comes through a group as well?

A **group** brings accounts together so a system can apply shared access rules to its members.

Change the application design so export is allowed through either a direct Export reports permission or membership in a privileged application group. Removing the direct permission now leaves another grant path.

The direct removal can succeed while export still works through the group. The failed overall restriction doesn't prove the individual removal failed; it proves that removing that path wasn't sufficient.

This is a different rule from our main example, which explicitly excluded alternative grants. Identify the actual rule and its inputs before choosing another change.

### What if an old session keeps earlier access information?

The main example checks current permissions for every operation. Another application may keep permission information captured when the session began.

In that design, the target account can be updated while the existing session continues using earlier information. A new sign-in test and an old-session test can then produce different results.

Establish the application's actual enforcement and supported session-expiry or invalidation behavior. Don't declare a stale session proven merely because export continues; other grant paths or an unexpected account could also explain it.

If the requirement includes stopping existing use, its verification must address existing sessions. Permission removal alone doesn't establish that every session or previously issued credential has stopped being accepted.

A careful conclusion stays within the evidence: “Export isn't present in the collected attributes for this account” is narrower than “The person cannot export anything.”

The broader conclusion needs evidence covering the relevant accounts, grant paths, resources, and session conditions. Record its scope and time, because later changes can alter the result again.

## Why can “refresh it” be the wrong next action?

Start by identifying the gap.

If the business owners disagree about whether export should stop, collection won't settle their decision. If the configuration grants permanent export against a temporary-access policy, retrying its operations won't repair the requirement it expresses.

If the target rejected the removal, inspect the operation and required authority. If it applied to the wrong account, fix the account-selection problem. If another grant path still allows export, inspect that path and its business basis.

If the target is correct and ISC's observation is old, investigate collection scope, results, and subsequent visibility. Don't undo the correct target state to make it match an older observation.

The term **reconciliation** is often used for comparing records or states and addressing differences. Ask what is being compared, which requirement governs the result, and whether the requested action is investigation or an actual correction. It isn't the name of one universal ISC repair.

Use read-only checks when they can answer the question. A **retry** repeats an operation; it isn't simply another observation. An uncertain first result calls for current-state and operation checks before repeating a potentially state-changing action.

Aggregation reads data, but the resulting information can be used by configured processes that initiate writes. Identity processing can evaluate access requirements and start provisioning without proving that provisioning succeeded.

There is a concrete reason to inspect continuing assignments before a target-only removal. For entitlements assigned through access requests, SailPoint documents that removing the entitlement directly from the source account leads to **reprovisioning**, another attempt to provision it, at the next aggregation. The target must still accept and apply that write for access to return.

The source read and the resulting write are different operations. The assignment still requires the access, so a direct target edit alone may not provide a lasting withdrawal. Use the supported requested-access revocation process and verify its result; other grant origins have their own rules.

That is why our manual-correction example explicitly establishes that no continuing requirement will restore export. A collection isn't a substitute for resolving the access assignment.

## What would let you close the issue accurately?

Join the requirement to the verified outcome.

For this example, identify the authorized 09:00 restriction, the exact reporting account, the daily reports in scope, and the reading capability that must remain.

Explain that the ISC removal was rejected, then an authorized administrator performed a separate correction. Current target permissions and controlled application checks support the corrected result.

State the conditions: this account is enabled, Read reports remains, Export reports is absent, no alternate grant applies, and the application checks current permissions for the tested operations.

Then account for remaining work. At 09:15, the target result is verified but the collected view is still old. Assign that follow-up instead of reporting that every record is synchronized.

A useful update could say:

> Export removal is confirmed for the reporting account, and reading remains available. An administrator performed the approved correction after the ISC operation failed. Target permissions and controlled application checks support the result. ISC's collected view still shows the earlier permission; collection follow-up remains open. The missed deadline is recorded separately.

Whether the overall ticket can close while the collection follow-up remains open depends on the organization's process. A precise update lets the responsible people make that decision without confusing containment, record maintenance, and historical evidence.

## Work through these observations

### A newer screenshot, an older observation

An engineer initiates export removal at 11:00. A colleague opens ISC at 11:10 and sees export listed. The last relevant account collection was at 10:30. No target evidence after 11:00 is supplied.

Has the removal failed? Which observation would help you choose the next action?

The screenshot can't settle that question. The collected information predates the attempted change, so the removal might have succeeded or failed.

Check the operation result and the current target permission for the exact account. If the target is correct, investigate updating ISC's relevant observation. If export remains, investigate delivery and later changes rather than treating another read as the removal.

### Everything succeeded, but too much access arrived

The approved policy permits reading only. The configured access profile contains read and export. Both reach the person, provisioning reports success, and the collected account data matches the target.

Where is the problem?

The configuration doesn't express the approved policy. Successful execution and matching records show that the configured access was delivered, not that it was appropriate.

Compare the profile's contents with the authorized requirement. Involve the decision owner and assess who else uses that shared definition before making a controlled correction. Editing one account alone leaves the wider design problem unresolved.

### No Search result, but target access is present

A search returns no export access for an employee. The application administrator finds export on an account believed to belong to that employee.

Should another permission be added to make ISC recognize it?

No. The observations don't establish a need for another grant.

Confirm the account's ownership and association with the ISC identity, collection coverage, query scope, and synchronization. The empty result tells you that this query didn't return the expected information; it doesn't prove absence in the target or authorize extra access.

### One grant disappeared, but export still works

The application's direct export permission is absent on the account used for an authorized test. The test still exports successfully. You haven't established whether the account has group-based export access or whether the session retains earlier permissions.

Did the direct removal fail? Has the overall restriction been achieved?

The direct permission is absent, but effective export remains under the tested conditions. The broader restriction hasn't been demonstrated.

Inspect other grant paths and session behavior. Don't declare the direct removal unsuccessful solely because another route might permit export, and don't declare the requirement satisfied solely because one grant disappeared.

## Apply the reasoning to two portal accounts

One employee has two accounts in a supplier portal: **standard-account** and **admin-account**.

The approved requirement permits reading supplier records but prohibits changing supplier bank details through either account.

You have this evidence:

- ISC Search shows no bank-edit entitlement on the identity.
- The target administrator confirms that standard-account has read-only permissions.
- An attempted bank-detail change fails with “service unavailable.”
- Nobody has inspected admin-account, and the relevant collection time is unknown.

Would you confirm that the requirement is met? Explain the next checks and why each matters.

You cannot yet confirm it. The unexamined account remains part of the requirement. The service error doesn't establish that authorization refused editing. The unknown collection time also limits the Search evidence.

Confirm both account identifiers and ownership with the portal administrator. Inspect current permissions and other grant paths for both, including session conditions relevant to continued use. Establish whether ISC collected both accounts and when the relevant information was obtained.

Arrange authorized verification using a safe test record or equivalent application evidence, without changing real supplier bank information. Verify that editing is rejected for an authorization reason while legitimate reading remains available.

Record the scope and time of the checks. Teams can coordinate them in parallel where appropriate; there isn't one mandatory investigation order. The requirement is to address all material evidence gaps before claiming the outcome.

## Explain the distinction without the reporting example

Try explaining why matching records alone don't establish appropriate access.

Intended access tells you what the organization has authorized for the relevant period and conditions. ISC contains several kinds of records, each with its own meaning, scope, and time. Effective access concerns what the application actually permits under the conditions being checked.

Connecting those observations helps locate a problem in the requirement, configuration, delivery, information visibility, or application enforcement. The next action follows from that explanation, not from a general instruction to make two screens agree.
