# What should a profile's name, description and owner tell you?

An employee needs to read case evidence and add review notes for cases in their assigned queue. They do not need bulk export or evidence deletion.

The access catalog offers **Case support**. Its description says “Standard access for the team.” An owner is recorded.

Would you have enough information to decide whether this is the right access?

“Support” could mean reading evidence, changing cases or administering the application. “Standard” does not identify a capability or data boundary. The owner field gives you someone to contact, but it does not tell you what the access permits.

Let's inspect the access behind those words, then make the package understandable enough to choose and maintain.

The records, application rules, configured decisions and outcomes below are hypothetical. They are not observations from a real tenant or a built-in connector contract.

## Establish the actual access before writing its explanation

An **account** is the external record through which a person or another entity uses a system. A **permission** allows an action on a resource. A **group** collects members, such as accounts; the application can use those memberships when deciding which actions to allow.

In SailPoint Identity Security Cloud (ISC), an **entitlement** represents source access, such as one of these group memberships. A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, making changes.

Our source is Cases Production. A separate Cases Test source represents the test environment. A similar group name in Test does not supply Production access.

The application contact confirms these current native rules. **Native** means belonging to the external application itself.

| Native group | Confirmed capability |
|---|---|
| Case Readers | Read evidence within the account's assigned queue |
| Review Notes | Add review notes within that queue when the same account also has Readers; does not change or delete the evidence itself |
| Bulk Export | Export evidence across all queues; outside the stated review need |

The integration supports collecting and assigning these groups. That is a condition of this example, not a promise about every connector.

An **access profile** is a named bundle of related entitlements from one source. The intended review profile references the represented Readers and Review Notes records from Cases Production. A **reference** identifies another record; it does not create a new native group or rewrite the group's permissions.

These two items together provide the required review capability. Bulk Export adds a different data exposure, so it stays outside the package. Evidence deletion and administration are not provided by the selected rights.

An **identity** is ISC's representation of a person or another entity. The employee's existing account is correctly associated with their identity and is their only Cases Production account. It is enabled, sign-in succeeds and its assigned queue is West.

The account's queue is a field maintained separately in the application. The memberships provide the capabilities; that field helps determine which cases the account may use them on.

## Let the name distinguish the choices

Compare **Case support** with **Cases: Case review (Production)**.

The second makes the system, work and environment visible. This is an example naming convention, not required ISC syntax. Use a consistent convention that distinguishes the actual choices in your catalog.

Why include the work rather than only the team?

If Compliance and Quality staff need exactly the same review capability, **Compliance standard** can mislead Quality staff and encourage unnecessary duplicate packages. The first department to request access does not necessarily define its lasting purpose.

If a second package permits bulk export, its name should reveal that meaningful difference. Otherwise, a requester can choose the wrong item while believing the two choices are equivalent.

Use unique, descriptive names. You do not need to fit every entitlement identifier, owner and eligibility condition into the title. Put the distinction needed for choosing in the name and the necessary explanation in the description.

Queue scope needs particular care. The selected groups use whichever queue is assigned to the account. They are not intrinsically West-only groups.

The main account happens to use West; another account could use North. Calling the same package **West case review** would suggest a restriction its contents do not establish.

Check the source and entitlement references and the application's actual controls before making a boundary claim in a name.

## Write the description to support a decision

For the verified two-item package, a useful description is:

> Read case evidence and add review notes in Cases Production within the account's assigned queue. Intended for staff with an approved case-review responsibility. Includes Case Readers and Review Notes. Does not provide bulk export, evidence deletion or application administration. Queue assignment is managed separately in the application.

Each sentence helps someone decide something.

The actions explain the work. The queue condition states the data scope. Production distinguishes live information from test data. The intended-use statement lets a reviewer compare the employee's responsibility with the package purpose.

The exclusions distinguish this item from more privileged choices. They need to be supported by the actual permissions, not added because the words sound reassuring.

The last sentence identifies a separate dependency. If the account has both groups but is assigned to the wrong queue, granting the same groups again will not correct that field. Investigate the queue assignment and its approved maintenance process.

Keep changing support rosters and personal contact details in an appropriate maintained record. The description should still explain the access when the support team changes. Essential access meaning, however, must remain available to the person making the decision.

## Which parts explain access, and which parts control it?

There are two decisions to keep separate.

The organization decides who should receive the package through its actual request or assignment controls. Writing “For reviewers only” explains intended use; it does not configure a rule selecting reviewers.

The application decides what a particular account may do on a particular case. **Authorization** is that allow-or-deny decision. Here, it uses the account's native memberships and assigned queue, with an enabled account and successful sign-in as required conditions.

The profile's description supplies neither a membership nor a queue restriction.

```text
Access profile in ISC
|
+-- name and description
|   Explain purpose and scope
|
+-- source and entitlement references
|   Cases Production
|   Case Readers
|   Review Notes
|
+-- owner references
    Record package responsibility

Native application
  Account memberships + assigned queue
      -> permitted actions/resources

Description text is not enforcement.
```

The branches show information belonging to the ISC profile. They are relationships, not a processing sequence. The entitlement references identify represented native access; they do not create parent groups or native permission rules.

The lower path shows the application using account relationships and queue scope. It does not read “within the assigned queue” from the profile description and implement that restriction.

Suppose the application changes Readers to permit reading every queue. Rewriting the description cannot narrow that native permission. Establish the changed capability, affected accounts and authorized correction: a narrower native right, a different represented entitlement, or another appropriate access design.

The wording must describe the verified boundary.

**Metadata** is descriptive information about an access item. A custom value such as `Audience = Reviewers` can provide context. It does not by itself implement recipient selection. If a separate control consumes that value, inspect that control and its conditions before claiming enforcement.

## What does the owner take responsibility for?

The **primary owner** is the identity recorded as owning the profile. ISC also supports additional owners selected as identities or a governance group.

A **governance group** is an ISC group whose members can perform configured governance work, such as reviewing whether access is appropriate. It is different from the native Case Readers group: one supports governance responsibilities; the other supplies application access.

For our example, one identity is primary owner and another is an additional owner. Both have accepted their organizational responsibilities. The primary owner has no Cases application account.

Saving an owner reference records who is selected. It cannot prove that the person understands or has accepted the responsibility.

An accountable owner needs to explain why these rights belong together, what work justifies them and whether the stated exclusions still match the application. They also need a way to obtain native permission evidence and identify users and access-model objects affected by changes.

They do not need to operate every connected system personally. They need appropriate knowledge, reliable contacts and an agreed maintenance process.

Different responsibilities can belong to different people:

- The profile owner maintains the purpose and boundaries of the whole package.
- An entitlement owner is responsible for an individual represented access right.
- The source's responsible team handles the integration and system-specific work allocated to it.
- The recipient's manager confirms the work need.

This is a distinction between responsibilities, not a required staffing chart. One person can hold more than one responsibility if they are suitable and accept it. Selecting the same identity in several fields does not make the fields mean the same thing.

Profile ownership also does not automatically grant native memberships or ISC administrator permissions. Administrative authority is configured separately. The primary owner here does not need an application account merely to own this package.

When selecting an owner, verify the intended identity behind the display name. A familiar name, departed employee or unmaintained team is not evidence of current decision coverage.

## Trace an owner-based approval through its actual configuration

An **access request** asks for an access item for a recipient. An **approval** is a decision that the request may proceed. **Provisioning** carries out account or access changes through the supported integration or manual process.

The owner reference and reviewer configuration connect when you deliberately configure an owner-based review stage. Ownership alone does not insert a stage.

For this example, the profile is enabled for supported use and offered through a supported direct request route. The configured reviewer order is **Manager**, then **Primary Owner**.

Manager means the manager of the person receiving access. That manager checks whether case review belongs to the employee's current work. After approval, the Primary Owner stage uses the profile's recorded primary owner to review the package's suitability.

In the supplied successful path, both required stages approve. Provisioning then establishes the required native memberships on the selected account, which initially had Readers only. Current native evidence confirms Readers and Review Notes. Reading and note-writing work for West cases, while cross-queue review, bulk export, evidence deletion and administration remain unavailable. No other relevant rights or application-policy changes occurred.

This is **standing access**, delivered without a separate just-in-time activation requirement. The approval sequence explains the decisions; the native observations establish delivery and the checked capability.

```text
Configured direct-profile request
  Recipient's manager
       |
       | approves
       v
  Primary Owner
       |
       | approves
       v
  Continue toward access delivery

Alternative reviewer stage
  All Owners
  Primary OR additional owner
       |
       | one approves this stage
       v
  Continue through configured process
```

In the upper path, each approval allows the request to reach its next configured responsibility. A rejection at a required stage does not authorize the request to continue as approved. The final arrow leads toward delivery, not a guarantee that every native operation succeeds.

The lower path is an independent alternative configuration. **All Owners** allows any one primary or additional owner to approve that reviewer stage. It does not require unanimous approval.

If policy requires separate decisions, configure the stages that express them. The word “All” does not create a second mandatory decision.

The additional owner is not a required approver in our Manager-then-Primary-Owner chain. Likewise, a Manager-only configuration would not automatically add either owner.

## Check which process is asking for the decision

The examples above are direct requests for the profile itself.

An **ISC role** groups access for a broader business purpose and can include profiles or entitlements. A request for a role that includes this profile uses the role's request approval process.

A **lifecycle state** describes an identity's organizational stage, such as prehire or active employment, and can carry configured access requirements. Automatically assigned role or lifecycle access does not invoke this direct-profile request approval chain.

Turning off local Require Approval also does not establish that all approval is bypassed. Global approval configuration can still apply.

A **certification** reviews whether existing access should be retained. Its configured reviewer assignment is separate from the direct-request chain.

A **manual provisioning task** asks someone to carry out a required source change when the applicable delivery path uses human work. That task also has its own assignment evidence.

Before inferring who must act, identify the kind of work and the configuration that assigns it. Owner, request reviewer, certification reviewer and manual-task assignee are related responsibilities, not interchangeable fields.

## Set a boundary one owner can explain

Readers and Review Notes belong together because the required review task uses both. Bulk Export has broader data scope and a different justification.

Splitting every entitlement into its own profile can leave requesters assembling incomplete pieces of one capability. An enabled profile must contain at least one entitlement; a one-item profile is useful when that item already supplies the intended capability.

At the other extreme, **All case-team access** can combine unrelated work, exposure and decision requirements. A short catalog is not useful if nobody can explain what each recipient receives.

Reading versus export, Production versus Test and ordinary review versus administration are meaningful differences to consider. A department difference alone does not prove different permissions are needed. Sharing an owner alone does not justify combining different capabilities.

Ask whether every intended recipient needs each included right for this package's purpose.

If the job also needs access from another source, keep that source-specific component separate and consider an appropriate ISC role for the broader requirement. A longer description does not remove the single-source profile boundary.

## Identify the kind of change before choosing the repair

Suppose Case support becomes Cases: Case review (Production), its description is corrected and a replacement owner is recorded.

The profile's **ISC identifier** identifies that record. In this supplied rename, the identifier, source and entitlement references remain the same. The wording changed on the existing profile; it did not establish a new native grant.

Conversely, creating a replacement profile with the old display name does not make it the same record. Trace the identifier and actual references rather than matching names alone.

A native permission change is another kind of work. If Readers gains bulk export while the profile still points to the same entitlement record, the capability has broadened under an unchanged list. Recheck the design, description and affected holders.

| Evidence | What it establishes and what remains to check |
|---|---|
| Profile identifier, name and saved description | Which definition was edited; not native restriction or completed access delivery |
| Owner references and reviewer configuration | Recorded responsibility and configured reviewer categories; inspect current work to establish actual assignees |
| Exact entitlement references and native permission rules | Which access is packaged and whether its capabilities support the claimed purpose and exclusions |
| Selected account, delivery activity and current application result | The relevant attempted/reported change and observed access; approval or clear wording alone cannot establish delivery |

**Identity processing** evaluates identities and relevant identity/access-model configuration. Account for the relevant application of configuration changes before judging their identity effects. Saving a record, completing evaluation and observing native access are separate events.

That does not imply that every name, description or owner edit must generate a membership change.

Consider another independent repair. An older version wrongly included Bulk Export, and the selected holder received that profile through a direct profile request, without a role or lifecycle requirement. Removing Export from the definition and applying relevant processing can leave the earlier entitlement individually held.

The definition is corrected, but current native export still needs investigation. Establish current need and grant history, arrange any separately approved removal, then verify the actual account and capability.

Do not turn this into a universal “definition changes never remove access” rule. Configured **role access removal propagation** can deprovision access, meaning remove native rights, after specified definition changes involving an enabled role and its associated profiles. Inspect the origin, role state, operation and supported configuration.

A corrected explanation or definition alone is not proof that every prior exposure ended.

## Complete the handover by checking outstanding work

The current primary owner is moving to another team. The additional owner will take over primary responsibility, and the package remains necessary.

The incoming owner confirms the business purpose and current native permissions, accepts responsibility, and checks the intended owner references and dependent decision configurations. The old owner's reference is updated according to the approved handover.

Now inspect pending work. In this supplied variation, an already pending profile-request approval still records the former primary owner as its assignee.

The profile's new owner reference does not establish that this particular item moved. The item's own assignment is the evidence that matters.

An authorized administrator uses the supported request-review reassignment mechanism. A fresh inspection shows the incoming owner assigned to that review and a recorded reassignment. The item is still awaiting a decision; changing its reviewer did not approve it.

That resolves the selected outstanding assignment. It does not establish that every request, certification or manual task was transferred. Review those items through their own supported mechanisms and confirm their actual results.

If a governance group provides coverage, maintain its membership. Changes from active to inactive lifecycle state, or identity disablement, do not automatically update governance-group membership.

A group name that sounds like a functioning team is not evidence that its current members can provide coverage. Check the actual membership and relevant work assignments.

Before closing the handover, check a representative decision path and outstanding items against the intended arrangement. Responsibility has transferred when accepted ownership, maintained access meaning and actual decision coverage agree.

## Work through the evidence

### 1. The description says West only

The two groups use each account's assigned queue. Only the profile description changes to “West only”; no recipient-selection or application configuration changes.

Has the edit restricted this package to West?

**Reasoning:** No. Text changes neither recipient selection nor native queue assignment. Check both. Correct the description to match the actual boundary, or make an approved technical change that genuinely implements a justified West-specific design.

### 2. A new primary owner has no application account

An identity is saved as primary owner. The person has no Cases account, and no access assignment is initiated.

Should the edit give them Readers and Review Notes?

**Reasoning:** No. The reference records responsibility, not native membership. If they need application access for separate work, establish that need and use the appropriate supported assignment route.

### 3. The configured reviewer is Manager only

The profile has a primary and additional owner. The supplied request configuration contains only Manager, with no additional owner-review stage.

Does ownership add two more required approvals?

**Reasoning:** No. Inspect the actual chain. Owner references support configured owner-based stages; they do not insert stages into this Manager-only example.

### 4. One All Owners stage has two eligible owners

The only owners are the primary and additional identity. The additional owner approves the All Owners stage.

Must the primary owner also approve that stage?

**Reasoning:** No. Any one primary or additional owner can approve it. Separate required decisions need explicit configured stages; unanimity does not follow from the option's name.

### 5. A rename preserves the profile identifier

The identifier, source and two entitlement references remain the same. Only the name and description change.

Does the new label prove new native access was delivered?

**Reasoning:** No. The facts establish an edit to the same profile. Native access needs separate operation/account evidence. Trace the identifier when reviewing history, not only the display name.

### 6. Readers now permits bulk export

The application adds export to the Readers group. The profile keeps the same references and still says it does not provide export.

Does the unchanged list keep that exclusion trustworthy?

**Reasoning:** No. The native capability behind a reference changed. Confirm the permission change, review affected holders and correct the justified design and wording. Renaming the profile cannot remove export.

### 7. The former owner is still assigned pending work

The new primary owner is correctly recorded, but an existing approval still names the former owner as assignee.

Can you close the handover on the owner-field evidence alone?

**Reasoning:** No. Inspect and, where authorized, reassign that specific work through its supported mechanism. Confirm the resulting assignee and decision state. Neither a new owner field nor reassignment proves that the request was approved.

### 8. Export was removed from the profile

The holder obtained the old package through a direct profile request, with no role or lifecycle requirement. Export is removed from the definition and relevant processing applies the change. Current native evidence still shows Export.

Has the definition correction proved the holder can no longer export?

**Reasoning:** No. Under these facts, the earlier entitlement can remain individually held. Establish continuing need and origin, carry out any separately approved removal and verify native access. A role-driven propagation scenario would need its own configuration evidence.

## Try the same reasoning with reporting access

Two proposed profiles share a reporting Production source. One permits reading assigned-region summary reports. The other permits exporting all-region detailed records.

Both are named Reporting access and described as “For Finance.” The integration engineer is proposed as owner. They maintain the connector but have not accepted responsibility for appropriate data use.

What would you change and verify before using these packages?

**Reasoning:** Give the choices distinct purpose and scope, such as Regional summary reading and All-region detail export, with system and environment clear in the catalog. Explain actual actions, data boundaries and supported exclusions. “For Finance” alone supplies neither that distinction nor an eligibility control.

Verify the selected entitlements and native permissions. An all-region permission cannot become regional through wording.

Establish an owner who accepts responsibility for the access purpose and can obtain the required technical evidence. The integration engineer can remain the delivery contact. If they are suitable for both responsibilities and accept them, document that arrangement rather than ruling it out by job title.

Then inspect the actual request or assignment controls, reviewer configuration and relevant outstanding work. Owner metadata alone establishes none of those outcomes.

When reviewing a package, connect its stated purpose to the exact entitlement references, current native permissions and accepted owner responsibility. Use the actual decision or operation records to establish any approval, delivery or reassignment.
