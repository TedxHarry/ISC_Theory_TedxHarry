# The profile appeared. Did ISC actually grant new access?

An application account already lets an employee read release evidence and add review comments. Later, SailPoint Identity Security Cloud (ISC) displays a named package for that combination among the employee's access.

Nobody submitted a request for the package.

The package association is new. Does that mean the application access is new too?

You need to compare what was already held with what, if anything, changed on the account. ISC can recognize an existing combination and represent it as a named package without adding memberships to the application account.

The records, permissions, configurations and outcomes below are hypothetical. The main example uses one source and one correctly associated account; it does not assume how every multiple-account or inherited-access arrangement works.

## Establish the account's access before the package appears

An **account** is the external record through which a person or another entity uses a system. A **group** collects members, such as accounts. Membership can provide a **permission**, which allows an action on a resource.

In ISC, an **entitlement** represents source access, such as one of those memberships.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** supplies the supported integration for reading data and, where supported and configured, making changes.

Our source, Releases Production, supports collecting accounts and groups and adding or removing the memberships used here. **Native** means belonging to the external application itself.

The application contact confirms these rules and initial holdings:

| Native group | Confirmed meaning and initial state |
|---|---|
| Release Readers | Read release evidence within the account's assigned project; already held |
| Review Comments | Add comments when the same account also has Readers; already held |
| Release Approvers | Approve releases, outside the employee's evidence-review work; also already held |

The account is enabled, sign-in succeeds and its assigned project is North. The native application also requires those account and resource conditions.

An **identity** is ISC's representation of a person or another entity. The account is correctly associated with the employee's identity and is their only account on Releases Production.

All three memberships are **standing access**: they do not require a separate just-in-time activation before use. Activation-based access has additional behavior outside this example.

The employee's current work needs reading and commenting, not release approval. That extra Approvers membership needs its own appropriateness investigation.

An **access profile** is a named bundle of related entitlements from one source. The team defines **Release evidence review**, referencing the represented Readers and Comments entitlements. Approvers is deliberately excluded.

A **reference** points to another record. Each represented entitlement has its own ISC identifier, separate from its native group's identifying value. Selecting a record with a similar display name is not sufficient; the intended source and access object must match.

## A group in the catalog does not identify its members

**Aggregation** collects external data into ISC. Two collection responsibilities matter here.

**Entitlement aggregation** collects definitions and details of access items, such as group names and descriptions. Its catalog can include a group that no account currently holds.

**Account aggregation** collects account records and fields describing their access. That supplies information about who holds a membership.

A **schema** describes fields and how ISC interprets them. The source's account schema marks its `groups` field as entitlement-bearing and able to hold multiple values. An **entitlement type** identifies the kind of access object; here the field is linked to the source's `groups` type.

For the selected records, the native identifying values are:

- `release-readers` for Release Readers.
- `review-comments` for Review Comments.
- `release-approvers` for Release Approvers.

The collected account's groups field contains all three values. Each matches the native identifier of the correct represented group within that source and type. These are illustrative native values, not ISC object IDs or an API payload.

This linkage explains which exact access objects the account is recorded as holding. The profile does not infer Comments from a group name or create the linkage merely by bundling two records.

**Account correlation** matches and associates source accounts with ISC identities. That relationship answers whose account this is. Profile recognition answers a different question about the access held through the associated account.

Reading the right memberships from someone else's account would not establish this employee's holdings. Check the source, exact entitlement references, account values and account-to-identity association together.

## Recognition asks whether every required item is held

**Identity processing** evaluates identity information and relevant identity/access-model configuration. It is separate from the source read that supplied the account's membership information.

**Access-profile detection** recognizes during that evaluation that an identity holds all the entitlements in a profile and associates the profile with the identity.

Here, the required set means the two items listed in Release evidence review. Compare those exact references with the recorded holdings:

Readers is required and recorded. Comments is required and recorded. Every required item is present.

```text
Profile requires Readers + Comments
Collected account holdings:
  Readers + Comments + Approvers
             |
             | both required items held
             v
Identity processing recognizes profile
             |
             v
Profile associated with identity

Native memberships are unchanged.
Approvers remains outside the profile.
```

The comparison concerns recorded holdings. Its arrows describe recognition and association, not adding groups to the application or a private backend job sequence.

The profile requires Readers and Comments. The account holds those two plus Approvers. Having more access does not make the required pair absent.

But “holds the required set” is different from “holds only appropriate access.” Approvers stays outside this profile. Detection neither includes it in the bundle nor removes it.

ISC can represent the required combination through the profile instead of treating those contents as independent access items. The two native memberships remain separate in the application. Detection does not create a new native parent group or replace them with a single membership named after the profile.

## Trace what changed in ISC and what did not change natively

An **enabled** profile is available for supported access-model use. Release evidence review is enabled.

An **access request** asks for an access item for a recipient. A **requestable** profile allows its direct request route under supported configuration. Direct requests are off here, in a tenant configuration that supports an enabled, non-requestable profile.

An **ISC role** groups access for a broader business requirement and can select identities using configured criteria or a list. A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements.

No profile request, role requirement, lifecycle requirement or other new grant mechanism supplies this package in the controlled main example.

Follow these supplied observations from the same day, in UTC:

- **09:00:** Native inspection shows Readers, Comments and Approvers. A North-project read and comment already succeed.
- **09:10:** The collected ISC account records those same memberships. Its association, group definitions and type/identifier linkage are correct.
- **09:20:** The team saves and enables the two-item review profile.
- **09:25:** Relevant identity processing applies the reviewed access-model configuration.
- **09:28:** Identity evidence shows the review-profile association. Fresh native inspection shows the same three memberships; North reading and commenting still work.

Saving the new definition did not prove that unchanged identities had already been evaluated against it. The relevant evaluation establishes the association.

The before-and-after observations establish something more precise than “access appeared.” The profile association is new; the native reading and commenting rights already existed. Native permissions and other relevant account conditions are unchanged in this trace.

That conclusion is about this recognition result. The same processing run can evaluate other requirements and initiate separate changes; it is not a promise that the entire run is read-only.

The timestamps are observation times, not fixed processing delays. Also, 09:00 establishes that the memberships existed by then. It does not identify when someone originally granted them.

## A partial combination is not an instruction to grant the rest

Now take an independent variation. The account holds Readers only. The profile still requires Readers and Comments. No request or configured automatic requirement supplies Comments.

The recorded set is incomplete. Detection cannot recognize this account's access as the complete two-item package.

It does not add Comments merely to make the account fit.

Why would that be the wrong interpretation? A reader group could be widely held. Treating one component as an instruction to grant every other component would create an unintended route to commenting, editing or approval.

If additional access is justified, establish the employee's work need and use an appropriate supported request, role or lifecycle requirement. Those mechanisms can require access for a selected recipient. Detection recognizes access already held.

## Change the authorization facts, then follow provisioning

Continue with the partial-access variation, but introduce a separate approved grant.

The organization deliberately makes the profile directly requestable under its supported configuration. The employee submits a permitted request for access now. The configured recipient-manager review approves it.

An **approval** is the decision that the request may proceed. **Provisioning** carries out account or access changes through a supported integration or manual process.

The supplied operation attempts to add Comments to the selected existing account. That is a source change required by this new grant route. Detection of an already complete set did not need that addition.

```text
Only Readers held
  Required set incomplete
  No Comments grant from detection

Separate approved profile request
             |
             v
Attempt to add Comments membership
             |
       +-----+------+
       |            |
    rejected     delivered
       |            |
       v            v
Check absence   Verify membership
and error       and intended action

These are alternative outcomes.
```

The upper part ends with incomplete recognition; it does not automatically initiate the request below it. The approved request is a separate mechanism. The two outcome branches are alternatives, not simultaneous results for one operation.

In the successful outcome, current native evidence confirms Readers and Comments on the same account. With the account enabled, sign-in successful and the target evidence in North, commenting succeeds.

Now consider the rejected outcome. The Comments-add operation reports that the integration lacks required write permission, and current native evidence confirms Comments absent. Approval did not deliver the missing access.

An **integration credential** is the account or authorization the connector uses for source operations. Investigate the exact account, source, operation and required permission. Under an approved correction and supported recovery, a later native check confirms the missing membership and successful North commenting. No other relevant permission, account or application-policy change occurred in that recovery example.

These are supplied results, not real credential changes or a guaranteed retry procedure.

The observed operation is one membership addition. That does not promise that every connector performs exactly one minimal write or handles already held items identically. Inspect actual activity rather than deriving a call count from the profile's two entries.

A **manual provisioning task** is a work item asking someone to make a required source change. Its existence establishes work to do, not that the membership has been delivered. Native verification is still needed.

## A current association cannot supply missing grant history

Return to the main full-set example.

Detection can organize rights that were granted through another process, including a change made directly in the native application. It does not retroactively create an approved ISC request or establish that the person still needs the rights.

Keep three events separate: the original native grant, collection of its membership data, and recognition of the profile. They can happen at different times.

An **assignment origin** is the route by which an access association or requirement arose. To investigate it, inspect available request decisions, role/lifecycle requirements, native application audit records and approved work needs.

Missing request history alone does not prove detection. Another configured route, unavailable older records or insufficient evidence can explain that absence. In our controlled trace, the supplied configuration and before-and-after observations support the detection explanation.

The review profile also does not explain the employee's Approvers membership. Even if the review package is suitable, the separate approval capability still needs justification or an authorized correction.

State what the evidence establishes and what remains unknown. A current label cannot reconstruct a historical approval.

## Recorded holdings and current application access can differ

In another independent variation, the 09:10 collection still records both required memberships. A native administrator removes Comments at 09:15. ISC still has the older full-set record when the profile is evaluated.

The comparison is using an observation that no longer describes the current membership. A visible profile association does not restore Comments or prove that commenting still works.

Inspect the particular account's collected values, read coverage and freshness, relevant evaluation and current native state.

A successful group-definition aggregation does not refresh the account's membership field. A source-wide successful run also does not by itself establish that this account was included and updated. Check the actual account result.

There is another reason an action can fail with both groups present: resource scope. Under our unchanged native rule, a North account can comment on North evidence while South commenting is denied.

That denial does not establish a missing membership or wrong detection. Inspect the intended account, action and project before diagnosing a provisioning problem.

For multiple accounts or rights obtained through other native relationships, establish the supported representations and the account actually performing the action. Do not combine unrelated accounts' rights or assume every inherited relationship is represented as the same direct membership.

| Observation | What it establishes and what remains separate |
|---|---|
| The profile references Readers and Comments | Package definition; not an account membership or an approved recipient |
| Both groups exist in the catalog | Represented access objects; not who holds them |
| The correctly linked collected account records both | Recorded full-set holding evidence at that observation; not a continuous live check |
| The identity shows the profile association | An ISC association; alone, not a new native grant or historical approval |
| Approval and activity identify an attempted addition | Decision plus an operation that can still be pending or unsuccessful |
| Current native membership and North commenting succeed | Capability under those checked conditions; not all-project authorization or justification for every extra right |

## Recognition supports a review. It does not make the decision

A meaningful reader-and-commenter package helps a reviewer understand a capability without reconstructing it from technical group labels.

A **certification** reviews whether existing access should be retained. Detected profiles can be reviewed through applicable certification configuration. Which items appear and how they can be acted on depend on the supported review configuration and access model.

The reviewer still needs current package meaning, the person's work and access outside the package. Detection does not make Approvers appropriate or clean it up.

Also distinguish recognition from **revocation**, an action requesting that access be taken away. Revoking a detected profile can cause supported removal of its underlying entitlements. It is not necessarily a harmless deletion of an ISC label.

Before removal, inspect actual requirements, origin and the operation's documented overlap behavior. Another profile sharing a right does not establish that every removal path preserves it. Verify the selected native outcome separately.

## A detected package is not an ongoing instruction to add future contents

Consider one final independent change. The employee held the original two-item profile through detection only. The **profile owner**, responsible for maintaining the package, adds Comparison Tools. This third entitlement permits comparing versions of release evidence within the assigned project.

The employee lacks that entitlement. No role/lifecycle requirement or new request requires it.

For a detection-origin profile, adding an entitlement to the definition does not provision that addition to existing holders. On relevant evaluation, the identity retains the profile only if it already holds the revised full set.

Here, the third item is absent, so the revised full set is not held. The earlier native memberships do not change merely because the definition changed. Under the supplied unchanged application rules, the old North reading/commenting capability can remain while the revised profile association is lost.

That is a specific definition-addition behavior, not a universal statement about every removal or recovery operation. Current role or lifecycle requirements have different documented addition behavior.

Check both the current definition and origin before predicting a shared change's effects.

## Work through the evidence

### 1. Both groups exist in the catalog

The catalog contains Readers and Comments, but the employee's collected account records Readers only.

Is the catalog enough to recognize the two-item profile as held?

**Reasoning:** No. Definitions do not establish membership. Inspect the entitlement-bearing account field and correct linkage. The supplied holding set is incomplete.

### 2. Only Readers is held and no grant route applies

The enabled profile requires both items. No request, role, lifecycle requirement or other authorized route supplies Comments.

Should detection add Comments?

**Reasoning:** No. An incomplete set does not create a grant requirement. Establish the actual work need, then use a supported route if more access is justified.

### 3. The account holds the pair plus Approvers

The correctly associated collected account holds Readers, Comments and Approvers. The profile references the first two only.

Does recognition establish that the person has only review access?

**Reasoning:** No. The required pair is present, while Approvers remains outside the package. Inspect the full relevant access and approval responsibility. Recognition neither removes nor justifies the extra membership.

### 4. Direct requests are off

The enabled profile is not directly requestable under supported configuration. The full set is correctly represented, and relevant processing evaluates it.

Does lack of a request prevent recognition?

**Reasoning:** No. Direct requestability controls a different route. Detection can recognize the existing complete set without inventing a request for rights already held.

### 5. Comments was removed after collection

ISC records the full set from 09:10. Native Comments membership is removed at 09:15. Current commenting is denied, while a profile association remains visible.

Does that association establish working access now?

**Reasoning:** No. Compare the account read's coverage/freshness, current native membership and subsequent evaluation. These observations differ in time. A label is not a live authorization result or evidence of restored membership.

### 6. Approval exists but the write failed

In the partial-access request variation, Comments addition reports a source permission rejection. Current native evidence confirms Comments absent.

Has approval supplied the missing membership?

**Reasoning:** No. Approval supplies the decision. Investigate the specific rejected operation, use authorized supported correction/recovery and verify membership and the intended action.

### 7. North works and South is denied

Both required groups are present on the enabled account, sign-in succeeds, and the account is assigned to North.

Does South comment denial prove incorrect profile detection?

**Reasoning:** No. The stated project restriction explains it. Recognition of the entitlement set does not authorize every resource; verify account and project conditions before diagnosing missing access.

### 8. The detected profile gains a third item

The original profile was held through detection only. Its definition now includes Comparison Tools, which the employee lacks. No current role/lifecycle requirement or new grant request applies.

Will the edit automatically deliver that item?

**Reasoning:** No. This detection-origin addition does not provision it. On relevant evaluation, the revised full set is required to retain the profile. The old association is not a standing instruction to grant every future addition.

## Try the distinction on a directory source

A directory source represents Ticket Readers and Internal Notes. An enabled Ticket collaboration profile references both. The application's confirmed rules use those memberships for ticket viewing and internal notes.

The catalog contains both groups. One employee's correctly associated account records both memberships; another employee's correctly associated account records Readers only. Neither employee has a profile request or role/lifecycle requirement.

What can be recognized, what does it say about past approval, and should the second employee receive Notes automatically?

**Reasoning:** The first employee's complete represented set supports recognition during relevant processing. The catalog alone would not. Recognition does not establish who authorized the original memberships or whether the current work still needs them.

The second account is incomplete. Detection does not grant the missing Notes right; establish the person's requirement before choosing a grant route.

Now a source administrator confirms that the first employee's native Notes membership was removed after the last account read.

The old full-set record no longer establishes current capability. Investigate the updated account collection and processing, and check the current native rights actually used by the ticket application.

When a profile appears, connect its definition to recorded holdings and origin. Use separate operation and current-application evidence before describing it as newly delivered access.
