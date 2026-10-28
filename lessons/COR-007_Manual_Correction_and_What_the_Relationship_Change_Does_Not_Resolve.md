# The account is on the right identity now. What did the manual correction actually fix?

An application account is visible in SailPoint Identity Security Cloud, or ISC, but it isn't connected to the person who uses it. The account's person-reference field is empty.

The application owner checks the account against approved worker records and confirms the intended person. You can now establish that relationship manually, even though the reference that should have supported automatic matching is still missing.

After the correction, the account appears on the right identity. Has the missing reference been repaired too?

Look at the two results separately. Choosing the correct owner establishes a relationship. Supplying a missing reference repairs data. One can succeed while the other still needs work.

## What does a manual correction change?

An **account** is a record in an application or another connected system. An **identity** is ISC's representation of a person or another managed entity. A **source** is ISC's configured representation of a system or collection of account data.

**Account aggregation** reads account information into ISC. **Account correlation** establishes the relationship between a source account and an identity.

For automatic matching, a **correlation criterion** selects an account field and an identity field for comparison. Each field is an **attribute**, a named piece of information on its record. The standard operation is **Equals**, which compares the selected values.

For example, account `personRef` can be compared with identity `identificationNumber`. A dependable person reference on both records can identify the intended owner. If the account doesn't supply that reference, the comparison lacks the input it was meant to use.

**Manual correlation** establishes an explicit persistent account-to-identity relationship. An authorized operator identifies the exact account and intended identity using approved ownership evidence, then uses a supported correction path.

That is why a manual assignment can establish the relationship while the comparison field remains empty. The operator's approved choice identifies the destination identity; the operation isn't a request to fill in the missing source field.

The ownership evidence still matters. Manual selection gives you a way to state an association explicitly. It doesn't make a guess about the owner correct.

## Follow one approved correction through the records

Here are the supplied facts for a hypothetical personal application account. The person's identity already exists.

**Null** means no value is present. In this case, the collected account exists and its `personRef` value is null.

The identity already holds its approved person reference, and the selected identity field is prepared for correlation. The missing input is on the application account.

An **uncorrelated account**, in this human-account situation, is a collected account that hasn't been linked to an established human identity. It can still have a legitimate business owner and work in the application.

| Record or evidence | What is known before correction |
|---|---|
| Collected account `app-41` | Production application source; login `review.user`; `personRef = null`; evaluated and recorded uncorrelated. |
| Intended existing identity | Current `identificationNumber = P-407`; identity `name = worker407`; displayed label `Review User`. |
| A different identity | Reference `P-408`, name `worker408`, and the same displayed label `Review User`. It represents a different person. |
| Complete saved configured comparison | Account `personRef` Equals identity `identificationNumber`; no other configured pairing. |
| Approved ownership evidence | Application records and the worker registry establish that production account `app-41` belongs to the person identified by `P-407`. That reference uniquely identifies the intended person in this design. |
| Approved immediate change | Associate this exact account with the verified existing identity. The missing-reference defect in the application's integration feed remains a separate open issue. |

The two identity records have the same displayed label. Selecting the first `Review User` therefore doesn't establish which person you chose.

Use the approved person reference to identify the intended individual, then verify the actual selected identity record and the approved worker records behind it. Also verify the source environment and account key. An account with the same login in a test source isn't the production account in this change.

The **account schema** defines the source's represented account fields. It designates one field as **Account ID**, identifying the source account, and one as **Account Name**, supplying its naming value.

Here, Account ID uses the account key `app-41`; Account Name uses the login field containing `review.user`.

There is a separate **default correlation** path when configured correlation cannot establish an association. It compares designated Account Name with identity `name`, ignoring differences in letter case. That default isn't configurable.

No identity's name matches `review.user` in the supplied evidence. The account's uncorrelated state belongs with those configured/default conditions and its stated evaluation, rather than being inferred from null alone.

Keep the references distinct: `app-41` identifies the application account, while `P-407` is the approved business reference for its person. The displayed label helps a human recognize a record; it doesn't uniquely identify it.

A supported interface or import file can require a particular identifier for the target identity. Verify that requirement. An **ISC object ID** identifies a record within ISC. A person reference, displayed name and ISC object ID aren't automatically interchangeable. The values here aren't a real correction-file template.

## The supported instruction selects an account and an identity

ISC's account-management capability **Update Correlation** lets an authorized operator choose the account classification and intended identity.

A **human account** is associated with a human identity. For this approved personal account, the intended classification is Human and the destination is the verified person's identity.

A **machine account** is a non-human account related to an application or service, including service or shared automation use. Such accounts need an appropriate classification and responsible-ownership design using the features supported for that tenant and account type.

Choosing Human for every exception would hide that distinction. Source administration doesn't make an automation account the administrator's personal login.

A manual-correlation file is another documented way to submit explicit account-to-identity association instructions. Each proposed row still needs an exact account, an exact intended identity and approved ownership. Submitting the file doesn't establish that every row succeeded.

For the main example, the approved supported correction succeeds. Current account evidence shows `app-41` associated with the intended identity whose approved reference is `P-407`.

What remains the same? The account key is still `app-41`, the login is still `review.user`, and the collected `personRef` is still null. The shared source configuration still compares `personRef` with `identificationNumber`.

```text
Before
  app-41: personRef = null
  no identity association
             |
             v
Human verifies owner independently
  approved person reference: P-407
             |
             v
Approved manual relationship change
  same app-41 -> intended identity
  same login: review.user
  personRef remains null

Verified: intended association
Still open: missing feed reference
```

The arrows connect the supplied before-state, human ownership verification and approved relationship change. The result is the intended association with an unchanged missing input. This isn't a private backend pipeline or a claim about mandatory separate jobs.

No new account or identity was needed. The two people with the same display label haven't been merged. The integration feed hasn't been repaired by selecting the destination identity.

For this main case, no automatic writes from identity fields to application-account fields are configured, and no access-change operation is supplied. The successful result here is the relationship.

An uncorrelated report may now stop listing the account. That is consistent with its new relationship. It doesn't establish that the reference has been populated or that every permission the account holds is approved.

## The explicit link persists after another read

A manual relationship isn't merely a suggestion that disappears as soon as source values change.

**Optimized aggregation** reads accounts and checks for changes. An existing unchanged record is skipped for correlation evaluation. **Unoptimized aggregation** reevaluates correlation even for unchanged account data.

Neither mode automatically releases a manual association. The documented explicit link persists when source account data changes, and unoptimized aggregation doesn't remove it.

Suppose the feed is later corrected and the same account is collected with `personRef = P-407`. That value now agrees with the verified owner.

You have evidence of an input repair and a continuing relationship. The agreement doesn't establish that the explicit link has automatically become an ordinary automatic association.

Now change the facts. The account remains approved for the person identified by `P-407`, but a later collected value is `P-408`.

The new field points toward another person. It doesn't, by itself, authorize a move or establish that business ownership changed. Investigate whether the value is wrong or the approved ownership records need updating.

The persistent manual link doesn't automatically move just because the field changed and an unoptimized read ran.

If the approved design requires removing or replacing explicit treatment, use the supported relationship-management process and verify the result. A changed criterion or repeated reads don't substitute for that work.

Accounts created through ISC can also have `manuallyCorrelated=true`. Here, **true** is a Boolean yes/no value. This treatment can exist without a manual-correlation file upload. File-import history therefore doesn't explain every persistent association.

## Persistence doesn't make a wrong link impossible to correct

Consider a separate account, `app-42`. It is manually associated with the identity whose reference is `P-408`, but approved ownership evidence identifies the person with reference `P-407`. The account already contains the correct `personRef = P-407`.

There is a relationship, so the account may be absent from an uncorrelated report. The relationship is still wrong.

ISC's supported correlation-update capabilities include incorrectly associated accounts, whether the error originated in manual assignment or aggregation. Persistence means you shouldn't assume source-data matching will automatically replace the link. It doesn't prevent an approved explicit correction.

After the supplied approved move, current evidence confirms `app-42` is associated with the intended identity and no longer appears as that account on the former identity. Verify both identity contexts and the exact account key.

Don't rewrite a correct reference to agree with the wrong identity. Nor should you alter the target person's correct worker data to make the old association appear valid.

Keep the earlier cause under investigation. Was the wrong record selected because labels were duplicated? Was an identifier in a correction file misunderstood? Did unsuitable data support an earlier automatic match?

Retained configuration, actual records and available activity can help distinguish those causes. Current matching values alone don't reconstruct the full history.

## Close the relationship task without losing the data defect

The main `app-41` relationship is now correct, while its missing-reference issue remains open.

Trace where the reference should originate, who owns it, what the integration publishes and what ISC actually collects. A value visible on an application screen isn't automatically the field returned in its integration response.

The current null value and the feed's omitted input are supplied observations in this example. They aren't a claim that every connector clears an existing value whenever a response omits a field.

If the missing value is on the identity side instead, follow how that identity receives information. An **identity attribute mapping** defines its selected input or calculation. An **identity profile** holds those mappings and other settings for a population. Its **authoritative source** supplies the accounts used to establish that population's identities.

**Identity processing** evaluates identity attributes and configured requirements, including those mappings. A mapping **Preview** evaluates a selected identity's proposed result. A correct preview doesn't demonstrate that the value has already been applied.

Locate the defective layer before selecting the repair. Changing the relationship, fixing account input and applying a correct identity value are different actions.

For a recurring population of missing links, inspect source data and shared matching configuration. Manually assigning each new account can leave the same underlying defect to affect the next account.

There can also be an approved reason to retain an explicit relationship. Record that reason, its owner evidence and the conditions for reviewing it. A persistent exception needs understood ownership.

```text
Verified association for app-41
             |
             v
Separate human follow-up tracks

Input repair
  approve and deliver the reference
  verify the collected account value

Persistent-link review
  document why explicit link remains
  approve any later relationship change

Dependent effects
  inspect operations using the link
  verify any external writes separately
```

These are separate human follow-up tracks. The arrows don't promise an automatic repair or prescribe a backend execution order.

Whether you can close the narrowly defined relationship task depends on its approved acceptance conditions. You can demonstrate the intended link while keeping input repair open. The feed issue needs its own delivery and collected-value evidence before it can be closed.

## The right link doesn't approve every permission

An **entitlement** is a represented permission or membership. Associating an existing account with an identity can change whose account and access ISC represents.

That doesn't establish business approval for all those permissions.

An **access request** asks for a particular access item for an identity. Any required approval and the fulfillment of that request are separate from identifying the correct owner of an existing account.

**Provisioning** attempts supported account or access changes in an external system. Manually correlating an existing account isn't a substitute for deciding whether its owner should receive additional access.

There can be external effects from a relationship change, however. **Attribute synchronization** is a configured write path from identity values to fields on existing correlated accounts. The configuration selects which eligible account fields should follow mapped identity values.

When an account is moved or correlated to an identity with different values, that change can trigger the configured synchronization.

For a separate variation, suppose a wrongly linked account moves from someone whose department is `Support` to its approved owner, whose department is `Engineering`. Department synchronization and its required mappings are configured.

The move can cause a department write to the external account. If the write fails and the target retains the previous value, the relationship can still be correct while delivery remains unresolved.

If the write succeeds, restoring an old correlation criterion doesn't automatically undo it. Inspect the actual current target value and approve any necessary corrective change separately.

Review mappings that read from the account and other configured operations that use its associated identity. A manual correction can have effects beyond the link you see on a screen.

The main `app-41` example supplies no such synchronization or access-changing operation. Its successful result is the account's relationship. A later target-account observation or sign-in test would answer a different question.

## Choose evidence for the result you claim

A submitted identity selection, an uploaded file and a lower exception count each establish less than a verified individual relationship.

| Result to establish | Evidence that addresses it |
|---|---|
| The intended records were selected | Approved source/environment/account key and target identity reference agree; duplicated labels are disambiguated. |
| The relationship changed correctly | Current account association identifies the approved person; a wrong-link move is checked in both former and intended identity contexts. |
| A correlation-file operation completed | Import status and issues are reviewed, then proposed account results are reconciled individually. |
| The missing reference was repaired | Approved input travels through the integration and is present on the actual collected account. |
| Shared matching is suitable | Saved criteria, actual inputs, identity-field readiness and relevant evaluation support approved ownership across the intended population. |
| A dependent write completed | Relevant operation activity and actual target state establish the specific external change. |
| The exception is resolved | Each approved acceptance condition is met; remaining data, ownership or dependent-operation work stays visible. |

The source's **Latest Manual Correlation** summary and the **Manual Correlation** aggregation-history filter concern file imports. An account-level update must be checked through its actual records and available relevant events. Don't require every supported correction path to produce a file-import entry.

If a file containing 12 proposed corrections reports issues, inspect those issues and reconcile the intended account relationships. Without individual evidence, you can't declare all 12 complete. Don't invent an all-or-nothing result, retry behavior or row-order winner from the presence of a summary badge.

Available identity events can show successful and failed actions. They aren't a guaranteed complete transcript of every historical matching candidate.

Keep observation times with the exact source, account and identities. Different views can reflect changes at different times; reconcile those observations before interpreting a display difference as another account move.

## Removing an account is a different change

ISC's **Remove Account** operation removes the represented account from ISC, not from the external source. A later full aggregation can load the account again.

It changes represented data. It isn't simply another name for selecting a different identity. Removing an account on an authoritative source can also affect the identity's profile or visibility.

**Delete Account**, where supported, concerns deletion from the external source and follows the configured request process, including any required approval.

A **source reset** is broader again: it removes that source's aggregated accounts and entitlements from ISC.

These operations have different outcomes and scope. A legitimate account with a wrong relationship doesn't automatically need any of them. Select the supported operation that fits the approved correction and assess its effects.

Deleting identities, erasing accounts or resetting a source merely to shrink an exception list doesn't demonstrate correct ownership.

## Work through the changed evidence

### Two identities share a displayed label

Both identities display `Review User`. Approved worker records identify `P-407` as the owner of production account `app-41`.

Is selecting the first label sufficient? What records would you verify?

### The account disappears from the report

The approved manual correction links `app-41` to the intended identity. Its collected `personRef` remains null.

Which outcome has been demonstrated, and which issue stays open?

### A later reference indicates another person

The manually associated account remains approved for the person identified by `P-407`. A later collected reference is `P-408`, and an unoptimized aggregation runs.

Must the account move? What would you investigate before approving a different owner?

### An explicit wrong link is corrected

Account `app-42` was manually attached to the wrong identity. An approved supported correction moves it to the intended one, with current evidence in both identity contexts.

Does manual persistence make that explicit correction impossible?

### The import reports issues

A manual-correlation file contains 12 intended corrections. Its summary reports issues, and no account-by-account reconciliation has occurred.

Can all 12 be marked complete?

### Someone proposes Remove Account

The external account is legitimate and must remain. Its ISC relationship is wrong.

Is Remove Account just another name for moving the link?

### The association is correct but a write failed

A separate approved move establishes the correct association. A configured department-sync write fails, and the target still contains the previous value.

Must the relationship have failed as well?

### The owner hasn't been established

The account's reference is missing, and no approved application or worker evidence identifies its owner. Someone proposes assigning it to the source administrator.

What remains unresolved before a personal assignment can be approved?

## Compare your reasoning

For duplicate labels, verify the person's approved reference and the actual identity record, then the source environment and account key. A shared display label doesn't distinguish the two people.

For the report, the intended association is established. The missing feed input remains unresolved until approved delivery and the collected account value demonstrate its repair.

For the changed reference, manual persistence prevents assuming an automatic move. Investigate the source value and legitimate ownership. A newly observed field isn't authority for an unapproved reassignment.

For the wrong-link correction, persistence and explicit correction are different mechanisms. The approved supported move can correct the relationship. Preserve before-and-after evidence, investigate its original cause and review dependent effects.

For the 12-row file, review reported issues and reconcile each proposed account result. Keep unverified instructions open. Submission and summary status don't prove every owner or outcome.

For Remove Account, distinguish represented-account removal, a relationship update and external deletion. Choose the approved supported correction rather than silently substituting a change with a broader effect.

For the failed write, the supplied association can be correct while delivery failed. Investigate the actual operation failure and verify any approved recovery against target state.

For the unverified owner, keep ownership unresolved and establish the account's use and supported classification. Integration administration doesn't make the account a personal login.

## Review a proposed correction file

A project proposes 80 correction rows:

- 40 describe verified uncorrelated personal accounts.
- 10 describe known wrong links.
- 15 lack verified owners.
- 5 describe shared automation accounts.
- 10 are duplicate or contradictory proposals.

These are proposed rows, not necessarily 80 distinct accounts. The team wants to upload everything and close the issue when the report count falls.

How would you decide what can proceed and what still needs investigation?

The 40 verified personal-account cases still need exact record selection, approval, persistence and dependent-effect checks. The 10 wrong links additionally need former/new identity evidence and investigation of consequences already produced.

The 15 unknown-owner proposals need ownership evidence before assignment. The 5 automation accounts need appropriate classification and responsibility, rather than a guessed employee.

Reconcile the 10 duplicate or contradictory instructions by actual account and intended identity. File order isn't evidence that the last proposal is the approved answer. The number of rows alone can't tell you the number of distinct accounts or successful corrections.

Before a real import, establish the supported file structure and identifier requirements. Preserve the approved change set, then reconcile actual account results against it.

Keep relationship completion, underlying data repair and dependent delivery as separate acceptance conditions. That allows an approved immediate correction to be completed without hiding the work that remains.
