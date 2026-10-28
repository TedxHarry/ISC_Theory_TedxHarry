# The entitlement has an owner. Do we know what it allows?

An employee needs department headcount totals. Their payroll application account has access displayed in SailPoint Identity Security Cloud (ISC) as Payroll Reports, with the description “Basic reporting access.”

The access item has an owner. Is that enough to decide whether the employee should keep it?

The missing question is what the access actually permits. Reading a department total and exporting every employee's salary and bank details are very different capabilities, even if both appear under the word reporting.

For this hypothetical example, the application administrator confirms that the group permits viewing and exporting employee-level salary and bank-account details across all payroll regions. It does not permit editing those details or releasing payroll. A separate summary-only permission exists, and the employee's confirmed work requires only those summary figures.

The records, work requirement, permission rules and outcomes below are supplied teaching examples. They are not observations from a tenant or a default connector policy.

## What is owned, and what is held?

An **entitlement** is an access right represented in ISC, such as an application group or permission. A **source** is ISC's configured representation of a system or collection of account data. Here, Payroll Production represents the payroll application, and the entitlement represents its Payroll Reports group.

An **account** is the external record through which a person or another entity uses a system. The employee's account is a member of that group. That **membership** is the account-to-group relationship used by the application's permission rules.

An **identity** is ISC's representation of the person. The account is correctly associated with this employee's identity in the supplied records. This lets us discuss the person's recorded access while retaining the account that actually holds it.

The **entitlement owner** is the responsible party recorded for the access item. ISC's **Primary Owner** field selects an identity. It does not select all the accounts that hold the permission.

Suppose the organization assigns a responsible payroll contact as Primary Owner. That person agrees to explain this access item's purpose, confirm its meaning with the application team and maintain its governance information.

That agreement matters. An identity appearing in the owner field does not prove the person understands the permission or has accepted responsibility for it.

**Metadata** is information describing an access item. A description explains its capability; other metadata can record an organizational assessment. These records help people make decisions, but they are separate from application membership.

```text
Payroll Production source
|
+-- Payroll Reports entitlement
|   |
|   +-- owner -> responsible identity
|   |
|   +-- description and metadata
|       -> explain and assess access
|
+-- Employee's application account
    |
    +-- member of payroll group
        -> application permission

Ownership does not add membership.
```

The owner reference identifies responsibility in ISC. The account membership identifies a relationship used by the application. The description and metadata explain the access. These are different relationships, not processing stages.

The owner can govern the entitlement without holding it. The employee can hold it without owning its definition. Assigning ownership also does not grant ISC administrative permissions; administrative authorization is a separate model.

## Who can answer the question you need to resolve?

Different responsibilities provide different evidence.

| Responsibility | Question it helps answer |
|---|---|
| Entitlement owner | What is this access item's purpose, intended use and maintained meaning? |
| Source owner | Who coordinates responsibility for the source and its application or integration issues? |
| Employee's manager | What work does this person currently need to perform? |
| Application administrator | What actions, data scope and account relationships does the application currently enforce? |
| Assigned reviewer | What decision has this particular review process assigned me to make? |

One person can perform more than one job. The jobs still require different evidence.

The manager confirms the need for headcount totals. The administrator confirms the detailed export capability. The entitlement owner turns that technical meaning into information a reviewer can use. The assigned reviewer combines capability and need under the organization's decision process.

An owner need not administer the application personally, but must be able to obtain reliable evidence. An administrator's knowledge of settings does not, by itself, establish the employee's business need.

ISC also supports **Additional Owners**, represented by identities or a **governance group**. A governance group organizes people for governance responsibilities in SailPoint. It is different from the payroll application's group granting access.

Additional owners can provide coverage. Whether they review a particular request, and how many approvals are required, depends on the configured process.

## What should the description tell a reviewer?

A **display name** is a readable label. A **description** explains the capability behind it.

“Basic reporting access” leaves out the actions, information and reach that matter to this decision. A clearer name for the supplied permission would be **Payroll detail export, all regions**.

A usable description could say:

> Allows viewing and exporting employee-level salary and bank-account details across all payroll regions. Intended for approved payroll reconciliation work. Does not permit editing payment details or releasing payroll. Summary headcount reporting uses separate access.

“Viewing and exporting” states the actions. “Employee-level salary and bank-account details” identifies the information. “All payroll regions” states its **scope**, the boundary of data or resources the permission covers.

The exclusions distinguish reporting from editing and releasing payment. The summary alternative matters because it fits the employee's confirmed work without requiring the broader capability.

The intended-use sentence guides a decision. It does not mean the application checks a person's work assignment every time they export. A description can explain who should receive access without enforcing that restriction.

Write exclusions from evidence. If bank-detail access has not been checked, do not promise “no bank data.” Record the unanswered question, obtain the relevant configuration evidence, and then maintain the description.

Likewise, distinguish “all regions” from “the account's assigned region.” An employee's department does not silently narrow a permission whose native rule covers every region. **Native** means information or behavior in the external system's context.

Changing the name or description in ISC does not send those edits to the source or narrow its permission. After this wording correction, the catalog explanation is better, but the account still holds the detailed payroll access.

## Follow the explanation through to an access outcome

An **access request** asks for an access item for a recipient. A **certification** asks designated reviewers to assess selected existing access and decide whether it should remain.

Both need clear permission information. They have different purposes and configurations. A **certification campaign** is a configured set of reviews. The applicable access model and campaign determine which access is included; not every collected item can be reviewed independently.

For a certification requiring **sign-off**, the reviewer must submit their decisions. Selecting Revoke and signing off are different events: an unsigned revoke decision is not applied. Submission initiates the separate removal work; it does not prove that the application change succeeded.

Our example concerns an existing holding. The approved review combines the confirmed all-region export capability with the employee's summary-only work requirement. The organization decides to replace detailed access with the separate summary permission.

That decision requires an access change. **Provisioning** carries out account or access changes. **Remediation** is corrective work addressing access that should not remain.

```text
Application capability evidence
              |
              v
Owner confirms action and scope
              |
              v
Usable description and assessment
              |
              v
Review combines access + work need
              |
              v
       Authorized decision
              |
       if change is required
              |
              v
Separate delivery to selected account
              |
              v
Current membership + action checks

Human responsibilities, not ISC jobs.
```

The arrows show which evidence or decision passes to the next responsibility. They do not mean saving metadata automatically starts a review, or that a reviewer decision proves a source change succeeded.

The replacement must target the correct source, account and access items. Plan both sides: deliver the required summary access and remove the unnecessary detailed access through the approved, supported path. Check the impact of the order so that the employee retains the required working capability.

For this supplied completed example, current native evidence confirms summary access present and detailed-group membership absent on the selected account. A fresh application check confirms that headcount summaries work and detailed payroll viewing and export are denied. No other detailed-data grant exists, and the underlying permission definitions and employee's work requirement have not changed during the replacement.

These observations establish the selected outcome. The summary result confirms the required capability; the detailed-access checks confirm the unwanted capability is unavailable under the checked conditions. Neither result follows merely from renaming the entitlement or recording the decision.

In an actual investigation, follow the relevant operation activity or manual task, then obtain current account and application evidence. If delivery evidence remains pending, record that limit instead of treating the outcome as complete or guessing where it failed.

## Why can read access still need close review?

**Sensitive access** is access deserving special attention because of what its use or misuse can expose or permit. Here, sensitivity is an organizational assessment, not the name of a universally defined ISC setting.

A non-confidential office directory and a payroll export can both be read-only. That shared description does not make their consequences equal. Copying detailed salary and bank information can expose data without changing any record in the application.

Check the actions, data, scope and ability to administer other accounts or permissions. An entitlement that lets someone grant themselves further access may have a broader effect than the first screen suggests.

Use native configuration and a knowledgeable application contact to establish those capabilities. Reader, Support and Basic are names to investigate, not proof of limited reach.

For the original payroll holding, the employee's department alone did not justify detailed all-region exports. The work requirement supplied only a need for totals. This is a practical comparison of capability and need, not a legal classification of payroll data.

## What does a privilege level tell you?

**Privilege classification** assigns privilege levels to entitlements. The **direct privilege level** is the level assigned to the entitlement itself.

SailPoint's classification uses High, Medium and Low. High describes the highest administrative privilege on a source; Medium describes a more limited administrative capability; Low describes access without administrative privilege.

Low does not mean that sensitive information cannot be read or exported. If the payroll item is classified Low, that field alone cannot justify giving its detailed data to someone who only needs totals. Also check whether the classification accurately describes the confirmed capability.

An unset direct level can display **None** when no manual setting or classification method has assigned a level. That is not evidence that the native permission allows nothing.

Classification can use a configured source-wide level, recommendations or custom criteria. Automatic assignment requires the applicable configuration to be enabled. Saving criteria while automatic classification is disabled does not apply those criteria to entitlement levels.

A **manual override** is an explicitly assigned direct level that takes precedence over the classification method until removed. Suppose criteria would produce Medium but a retained manual override sets High. The displayed High has an explanation: changing the criteria does not remove that override.

Check how the value was assigned before changing it. Reviewing the classification is separate from changing the native permission.

**Effective privilege** is the calculated level after direct and inherited privilege are considered. An entitlement hierarchy represents supported relationships among access objects, such as one group belonging to another. A parent entitlement can contribute privilege to a child in a supported, represented hierarchy.

For entitlements, the effective level uses the higher direct or inherited level. In a separate example, direct Low with inherited High produces effective High. Lowering the direct level does not remove the inherited contribution.

This calculation concerns privilege information in SailPoint. It does not create a native relationship or itself enforce a permission change. Missing hierarchy data also does not prove the application has no indirect access path.

Identify which field you are reading. The default unset direct None is different from the effective-level description for an object not used for application access. Neither should replace inspection of the actual source capability. A legacy privileged indicator is also not interchangeable with current direct and effective levels.

Available features and fields depend on the tenant and supported integration. Classification must be interpreted in that context.

## Keep sensitivity information separate from the scale

Suppose the organization creates custom entitlement metadata called **Data sensitivity**, with the value **Restricted payroll**. These are example names and an organization-defined assessment, not predefined ISC values.

That value can communicate why a non-administrative export still needs careful consideration. It adds context that the administrative privilege scale does not fully express.

**Requestable** means available to request under the applicable configuration. Changing requestability is different from delivering or removing access.

Read the fields according to their jobs:

| Entitlement information | What it establishes |
|---|---|
| Primary Owner | Records the responsible identity; does not establish group membership or participation in every review |
| Accurate description | Explains the confirmed capability; does not narrow the native permission |
| Direct Low | Records a privilege level; does not establish harmless data or a justified business need |
| Custom Restricted payroll value | Records the organization's assessment; does not automatically block requests or revoke access |
| Direct requestability disabled | Removes availability through that direct request mechanism; does not establish removal of existing membership |

If the organization wants a metadata value to influence a review, request or workflow, it must configure and validate a process that consumes that value. Storing the value alone does not define that behavior.

Keep this information current. A group can gain export capability while keeping the same name and members. A previously accurate description or assessment can then understate what it permits.

## Does the owner field choose the reviewer?

For entitlement requests, the effective approval configuration determines who reviews. Individual entitlement settings can supersede source and global settings.

**Approval** is the decision assigned within that configured process. An owner reference supplies a possible responsible identity; it does not add an approval stage on its own.

If the effective configuration selects only Manager, the entitlement owner is not silently added as another reviewer. If it selects Primary Owner, the selected owner participates through that option.

Under **All Owners**, any one primary or additional owner can approve. All Owners does not mean every listed owner must approve unanimously. If separate decisions are required, the review design must express them.

These are entitlement request options. A certification campaign or manual remediation task has its own assignment behavior. Inspect the actual process and assignee instead of transferring one routing rule to all work.

When an owner leaves, arrange an agreed handover and update responsibility. Also inspect outstanding requests and tasks. A changed owner field does not prove that existing work changed recipients. Check its recorded assignment and use the supported reassignment process where needed.

If an owner cannot explain the permission, identify the missing technical evidence and a suitable accountable contact. Filling the field with a convenient name does not resolve that gap.

## Why can a corrected source description stay old in ISC?

**Aggregation** reads external data into ISC. **Entitlement aggregation** reads supported access-object details, including descriptions where the integration supplies them.

A description may be collected from the application or maintained in ISC. Its **provenance**, meaning its origin and maintenance history, affects how later reads update it.

Manually updated entitlement names and descriptions are protected from later aggregation overwriting them. This preserves curated explanations, but can also preserve wording that has become outdated.

Suppose the application now describes all-region exports, while ISC retains a manually maintained “Basic reporting access.” That mismatch alone does not prove a failed connection.

Check the exact source and entitlement, current returned description, relevant collection result and manual-update state. Agree which system should maintain the explanation, then update it through the supported method. Do not clear protection across a whole source just to correct one field.

A successful read, retained manual wording and unchanged membership can all coexist. They answer different questions.

## Which evidence changes your conclusion?

### 1. The owner is not a member

The responsible identity owns the entitlement in ISC. Their application account does not hold the payroll group, while the employee's account does.

Is the owner record inconsistent?

**Reasoning:** No. Responsibility and membership are separate relationships. Confirm that the owner accepted the responsibility and can obtain the required evidence, rather than granting payroll access to make ownership and membership appear to match.

### 2. The description was improved

The ISC description now states the detailed all-region exports. No native membership, permission or provisioning operation changed.

Was the employee's access reduced?

**Reasoning:** No. The explanation changed. Inspect current account membership and the application rule for capability evidence. A better description supports a decision, but does not deliver a required access change.

### 3. Low privilege accompanies detailed exports

Direct privilege is Low. Native evidence confirms salary and bank-detail exports. The employee needs only headcount totals.

Does Low justify keeping the broader access?

**Reasoning:** No. Compare the capability with the work requirement, check classification accuracy and review the summary alternative through the approved process. A different work requirement would need evidence; the level cannot supply it.

### 4. A valid owner received no approval task

A new entitlement request went to the manager. Its effective approval configuration selects Manager only, and a valid Primary Owner exists.

Does this establish an owner-resolution failure?

**Reasoning:** No. The task follows the supplied configuration. If policy requires another permission-owner decision, review and correct the approval design. Do not diagnose a missing task that was never configured.

### 5. Updated criteria do not replace High

Automatic classification is enabled. New criteria would assign Medium, but the current High direct level is a retained manual override.

What explains High?

**Reasoning:** The override takes precedence. Check its origin and justification before a controlled decision to retain or remove it. Repeating criteria edits does not address that cause, and classification changes do not alter native permissions.

### 6. All Owners includes two people

The entitlement has one primary and one additional owner. All Owners is selected. The primary owner approved, and the additional owner has not.

Does that option require the second approval too?

**Reasoning:** No. Any one primary or additional owner can approve under this option. Separate required decisions need suitable configured stages; counting ownership names does not define the approval rule.

### 7. Corrected source text does not replace a manual field

The relevant successful entitlement collection returned the new source description for the exact group. ISC retains its old description, previously edited manually.

What should you inspect before repeating collection?

**Reasoning:** Inspect the manual-update state and agreed maintenance authority. Protection explains why the read can succeed without replacing the field. Confirm the intended explanation and update it through the supported method.

### 8. A reviewer selected revoke

An applicable certification records a revoke decision for this employee's detailed payroll access. Delivery evidence is pending, and current application evidence still shows membership.

Is access confirmed removed?

**Reasoning:** No. Check required **sign-off**, the reviewer's submission of decisions, then the relevant delivery activity or manual task and current native membership and capability. The supplied evidence does not identify whether delivery failed, has not started or remains in progress. Keep that uncertainty explicit.

## What if the permission changes while membership stays the same?

A document-system account holds External Reviewers. The recorded owner is active, and the manually maintained description says “Read assigned project documents; no export.”

The application administrator confirms a shared permission change: the same access object now permits exporting all project documents. Membership did not change. A custom Sensitive documents value was saved in ISC, but no access-removal operation occurred. The account holder's work requirement is not supplied.

Explain what changed and what the next decision needs.

**Reasoning:** The capability expanded in both action and scope, even though the holding stayed the same. The description is stale, and an active owner reference does not make it accurate.

Confirm the new permission and affected resources, maintain the description and reassess classification. The custom value communicates an assessment; it does not remove export capability.

Obtain the holder's actual work requirement before declaring the access appropriate or choosing a removal from these facts alone. Follow the organization's decision process.

If a change is required, distinguish removing this account's access from changing the shared permission definition. Those targets can affect different people. Verify the chosen account and capability outcome in the application.

Responsibility, description and classification help a reviewer ask better questions. The decision still needs confirmed capability and business need, and its completion still needs evidence that any required access change happened.
