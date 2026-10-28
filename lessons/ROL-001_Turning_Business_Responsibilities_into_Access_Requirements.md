# What access does this responsibility actually require?

An employee starts customer-request intake. They need to read incoming requests, prepare intake drafts and consult published support instructions. They do not approve refunds, publish instructions or administer either application.

Someone proposes copying an experienced support specialist's access.

That colleague may approve refunds, cover another queue or retain rights from an earlier job. Their access is useful evidence to investigate, but it does not define the new employee's responsibility.

Start with the authorized work: which actions, on which information, and with which exclusions?

In SailPoint Identity Security Cloud (ISC), a **role** groups related access for a business responsibility. It can cover one source or several. It gives the organization a maintained requirement to assign and investigate; a job title alone does not become an application permission.

**Provisioning** carries out account or access changes. The tenant needs the Provisioning capability to use ISC roles; that prerequisite does not establish that every individual source operation succeeds.

The records, rules, configurations and observations below are hypothetical. We assume authorized administration, that required capability, and supported integrations. The selected accounts already exist.

## Make the responsibility specific enough to verify

“Customer support access” does not tell an engineer what to deliver.

The approved responsibility here is to read assigned-queue requests, create and edit intake drafts in that queue, and read published support instructions.

Refund approval, bulk customer export, instruction publishing and administration stay outside it.

The business owner confirms the work. The application contacts explain which native rights permit it. The identity engineer connects those requirements to the exact objects ISC can manage.

A business owner can know that drafting is required without knowing a group's identifying value. An integration engineer can know that a group is writable without knowing whether every support employee should hold it. Bring those kinds of evidence together.

A **permission** allows an action on a resource. **Native** means belonging to the external application itself. A **group** collects members, such as accounts; the application can use membership to grant permissions.

The employee has an existing account in each of two systems: Requests Production and Knowledge Production. An **account** is the external record through which a person or another entity uses a system.

Both accounts are enabled and sign-in succeeds. The Requests account's assigned queue is North.

An **identity** is ISC's representation of a person or another entity. **Account correlation** matches and associates source accounts with that identity. Both accounts here are correctly associated and are the person's only accounts on their respective sources.

The required memberships are initially absent. No role assignment or other grant supplies them. This example therefore concerns access changes on existing accounts, not account creation.

## Map the work to actual access

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading information and, where supported and configured, changing it.

There is one source for each application here. Both integrations support account reads and the membership changes used below.

An **entitlement** represents source access, such as a group membership. The application contacts verify this mapping:

| Approved action | Native requirement |
|---|---|
| Read requests within the assigned queue | Requests Production: Queue Readers |
| Create and edit intake drafts within that queue | Requests Production: Intake Drafts and Queue Readers on the same account |
| Read published support instructions | Knowledge Production: Published Guide Readers; no publishing permission |

Drafts alone is insufficient. The application requires the reading right too, so the design needs the complete justified combination.

The groups also do not erase queue scope. Requests Production checks its account's assigned queue separately. North work should succeed; access to an unrelated queue is not part of the requirement.

Verify native identifiers, actual capabilities and dependencies with the responsible application contact. A familiar name cannot establish those facts.

Test-source readers cannot substitute for Production access. Nor is a Knowledge reader the same represented object as a Requests reader merely because both names contain “Readers.”

## Represent the combination without inventing a cross-system group

An **access profile** is a named bundle of related entitlements from one source.

Request intake groups Queue Readers and Intake Drafts from Requests Production. Those two belong together because the same intake task requires both.

The ISC role **Customer request intake** contains that profile and the Published Guide Readers entitlement from Knowledge Production directly.

A **reference** points to another record. The role can reference access profiles and entitlements across sources. Each referenced profile still keeps its single-source boundary.

The direct entitlement does not need a compulsory one-item profile wrapper. A separate Knowledge profile could be useful if it has a maintained purpose, but the role can contain this right directly.

“Direct” here describes a reference inside the role. It does not bypass provisioning or create an unrelated grant outside that role.

This is a **standard role**, grouping the stated access-profile and entitlement references. All access is **standing**, delivered without a separate just-in-time activation requirement. The role and profile are enabled for supported use.

```text
Work: customer request intake
              |
ISC role: Customer request intake
|
+-- Requests Production
|   Request intake access profile
|   Queue Readers + Intake Drafts
|   -> selected Requests account
|   -> North reading and drafting
|
+-- Knowledge Production
    Published Guide Readers entitlement
    -> selected Knowledge account
    -> published guide reading
```

The upper relationship connects approved work to the ISC requirement. The branches identify source-specific references, selected accounts and intended capabilities.

They do not create a native group spanning both applications, guarantee writes or specify backend execution order. Each application still decides what its account can do under its own rules.

An application feature named Role would be another native object, not this ISC role.

## Decide who receives the contents

The contents answer what access. Assignment configuration answers who should receive it.

Neither the role's title nor a description saying “for working intake staff” creates a recipient-selection rule.

An **identity attribute** is a named value on the ISC identity. A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. Here the state is an eligibility input, not a separate grant of the role's rights.

The supplied business policy allows automatic assignment only when these current identity values all match:

- Department equals `CustomerOps`.
- Job Code equals `SUP-INTAKE`.
- Lifecycle State equals the technical value `working`.

Working is an enabled configured state in this example. The lifecycle criterion uses the technical value, not an assumed display label.

**Membership criteria** are the configured conditions selecting identities for the role. These three comparisons form one group joined with **AND**, meaning every condition must be satisfied.

OR would instead allow any one match and broaden this supplied policy. The platform supports configuring logic; it does not decide that everyone in a particular department should do intake.

| Current applied identity values | Result under this AND rule |
|---|---|
| CustomerOps, SUP-INTAKE, working | All conditions match |
| CustomerOps, SUP-OBS, working | Job Code does not match, even with a Support specialist title |
| CustomerOps, SUP-INTAKE, prehire | Lifecycle State does not match |
| Finance, SUP-INTAKE, working | Department does not match |
| CustomerOps, missing Job Code, working | Required Job Code comparison cannot be satisfied; investigate the missing value |

Test intended members and nonmembers before applying a shared policy. A department-only rule can be technically valid while selecting observers who should never draft intake records.

ISC can also use an explicitly maintained **identity list** for role assignment. It selects named identities instead of comparing these attributes. You still need a justified reason for each listed person.

## Check what input the rule actually reads

An **identity profile** configures how a population's source information supplies identity values and how its lifecycle behavior is managed. It is different from the access profile containing the Requests entitlement pair.

A **mapping** specifies how information becomes an identity value. Here approved HR information supplies Department and Job Code through configured mappings; lifecycle configuration supplies the applied working-state value.

**Account aggregation** reads configured account data into ISC. **Identity processing** evaluates identity information and relevant configuration, including role requirements.

An approved HR value, a collected source value and an applied identity attribute are different observations.

Suppose HR shows SUP-INTAKE while the current ISC identity still holds SUP-OBS. This rule reads the configured identity input; it does not evaluate somebody's HR screenshot or approval email.

Follow collection, mapping and relevant processing to locate the gap. Broadening the role rule to include SUP-OBS would change eligibility instead of repairing that information flow.

The reverse error is possible too: changing correct HR information to satisfy a bad rule. Establish whether the source record, mapping or approved policy needs correction before changing it.

## Follow selection through separate source outcomes

**Role assignment** associates the role with an identity through an applicable route. Saving and enabling the role does not prove that this person was selected.

Once the configuration is applied and the supplied conditions match, the assignment establishes the required access. Provisioning must then deliver the source changes. A recorded role is not proof that every application task works.

An **integration credential** is the account or authorization used by a connector for its source operations.

Consider these supplied observations from the same day, in UTC:

- **08:00:** HR holds CustomerOps and SUP-INTAKE, but the applied ISC Job Code is still SUP-OBS.
- **08:10:** After relevant collection and processing, current identity values are CustomerOps, SUP-INTAKE and working.
- **08:15:** Relevant evaluation of the reviewed, enabled role configuration selects the identity and records the assignment.
- **08:18:** Activity reports both Requests memberships added. Knowledge's reader addition is rejected because the integration lacks update permission for that account.
- **08:25:** Native checks confirm North reading and intake drafting. Guide reading is denied. Refund approval remains denied.

The selection was correct. Requests delivery succeeded; Knowledge delivery failed. The complete responsibility remains unsupported because its instructions are unavailable.

Removing Guide Readers from the role to make the incident look successful would alter the requirement. It would not repair the rejected account operation.

Under an approved correction to the Knowledge integration's permissions and supported recovery, a later native check confirms Published Guide Readers. Guide reading now succeeds, publishing remains denied, and North intake still works. South drafting and refund approval remain denied. No other relevant access, account or application-policy change occurred.

That closes the selected delivery gap. It does not establish successful changes for every employee, a fixed retry delay or an all-or-nothing transaction across sources.

```text
Applied values + enabled role
              |
      relevant identity evaluation
              |
+-- Conditions not all met
|   No assignment by this rule
|
+-- All conditions met
    Role assigned
         |
    Required source changes
         |
    +-- Requests account result
    +-- Knowledge account result
         |
    Verify each intended native task
```

The “not all met” branch means no assignment by this particular rule. Another configured route would require separate investigation.

The source-result branches show independent delivery evidence, not private backend services or a promise about which source is updated first.

The assignment view establishes the association. Account activity establishes attempted and reported changes. Current native memberships and checked actions establish what was delivered under the selected conditions.

Keep identity, source, account, entitlement, result and observation time together. Another employee's success does not establish this account's success.

A **manual provisioning task** asks a person to make a required source change. Automatic selection can still use a human delivery path; inspect task completion and the native result.

If accounts were missing, supported creation would need its own configuration and evidence. The existing-account example does not establish a universal account-creation guarantee.

## Keep a request decision separate from automatic eligibility

An **access request** asks for an access item for a recipient. **Approval** is the decision that the request may proceed.

A **requestable role** has a configured request route with its applicable controls. Our main role is not requestable; it uses the automatic criteria, without a separate role-request approval in the timeline.

In an independent design, a cover worker can request an appropriately configured role through an authorized route even without matching the automatic criteria.

Approval does not change the worker's identity attributes or prove that the automatic comparisons match. It establishes a different assignment origin: the mechanism through which the association arose.

Conversely, allowing requests does not establish universal eligibility or approval-free access. Automatic criteria are not automatically the request route's eligibility filter.

Identify whether criteria, an identity list or a permitted request selected the identity. For a requested role, its applicable request configuration governs review; included profiles do not each add their own direct-profile approval chain.

A **role owner** is responsible for the maintained role and can be configured as a reviewer. Recording an owner does not establish that every automatic assignment waited for that person's approval.

## Maintain a responsibility you can explain

The owner should understand both the intended work and the recipient policy, and be able to obtain application evidence when permissions change.

A useful description states the capability and exclusions: assigned-queue reading and intake drafts, plus published guide reading; no refunds or guide publishing.

That informs a decision. Exact references, configured assignment and native permission rules establish the actual behavior.

If three senior intake workers also approve refunds, assess a separate responsibility or justified exception. Do not give everyone refunds merely because it is convenient to add one more entitlement.

Different assigned queues do not automatically require one role per person. First establish whether access requirements differ or the application already scopes the same groups using each account's queue.

Also inspect access outside this role. A pre-existing unrelated refund group is not removed by assigning a narrower intake role.

**Least privilege** means limiting access to what is justified for authorized work. Excluding refunds from this role supports that design; it does not prove every old grant or other assignment is appropriate.

Plan how the requirement ends. When intake work stops, identify the governing assignment and other continuing needs. Removing role access does not itself mean deleting the source accounts.

Editing shared contents and removing one person's assignment are different actions. Their impact and retained overlaps need their own assessment.

## Work through the decisions

### 1. A colleague has refund approval

A colleague with the same title holds the intake rights plus refunds. The new employee's approved work excludes refunds.

Should their entire access be copied?

**Reasoning:** No. Map authorized tasks to verified native rights. Keep refunds outside this role and investigate the colleague's additional responsibility separately. A matching title is not matching need.

### 2. The rule selects everyone in CustomerOps

The department contains observers who must not draft. The proposed rule checks Department only.

Is that sufficient for the supplied intake policy?

**Reasoning:** No. Test the approved Job Code and working-state conditions too. A name change cannot narrow actual membership; alternative policy needs a justified business decision.

### 3. HR is correct but the identity is old

HR shows SUP-INTAKE; the applied identity still shows SUP-OBS. Criteria read identity Job Code.

Should the rule be broadened to make this identity match?

**Reasoning:** No. Trace collection, mapping and application to the evaluated record. Correct the actual cause; HR correctness alone does not establish the current rule input.

### 4. Contents are saved and enabled

No criteria, identity list or request has selected the employee.

Does the definition establish a source delivery failure?

**Reasoning:** No. First establish an approved assignment route and actual requirement. Enablement alone does not select this recipient.

### 5. The package uses Test access

The proposed intake profile selects the Test source's reader/draft records rather than Production. Names look similar.

Can the role's cross-source capability make that correct?

**Reasoning:** No. Correct the exact source-specific component for the Production need. A role can span sources, but its included profile must still use the intended same-source entitlements.

### 6. The role is present but guides are unavailable

Criteria match, the role is assigned, Requests works and Knowledge's reader addition reports a permission rejection.

Should Guide Readers be removed from the role?

**Reasoning:** No. Preserve the justified requirement. Investigate Knowledge's selected account/operation, obtain an approved correction and supported recovery, then verify guide reading. Role presence is not complete delivery.

### 7. A cover worker's request is approved

In a separate requestable-role design, the worker receives an approved requested assignment but does not meet the automatic criteria.

Has approval established an automatic match?

**Reasoning:** No. Identify the request origin and inspect its conditions and native results. Approval does not rewrite the identity values or make another route's comparisons true.

### 8. A refund membership already existed

Before receiving the narrow role, the account held unrelated refund access. No refund-removal operation occurred.

Do the role's exclusions prove refunds were withdrawn?

**Reasoning:** No. Investigate the old right's origin and current justification. Any approved correction must consider retained requirements and native outcomes. Narrow contents alone do not establish least privilege across the account.

## Try the same reasoning in a laboratory

Sample intake needs assigned-laboratory reading, draft intake creation and published handling instructions. Releasing results is a separate responsibility.

A senior colleague has result release. A vendor offers a broad all-laboratory-staff group, but its exact permissions are unverified. Draft creation also requires a named-user license; available capacity is unknown.

A **license** gives an account the right to use a product or feature set under the native licensing model.

What can be agreed now, and what is missing before defining complete access and promising delivery?

**Reasoning:** The responsibility and exclusions guide discovery, but they are not a verified entitlement list.

Confirm exact reader, draft and instruction rights, same-account dependencies, native laboratory scope, license requirement and intended recipients. Do not copy result release or accept the broad group merely because it is convenient.

A role can combine justified references across sources. Its selection needs reliable evidence of sample-intake responsibility, not merely laboratory employment. Different coherent packaging is possible if the rights and source boundaries remain correct.

Unknown capacity prevents a delivery promise even after adding the license reference. Establish supported configuration, then verify each account's fulfillment and actual draft action.

Connect the work to access, the policy to recipients and the role to those configured requirements. Use separate account evidence to establish delivery; when a link is missing, identify the information or operation still needed.
