# Every account was read. Why wasn't this one re-evaluated?

Suppose SailPoint Identity Security Cloud (ISC) has already collected an application account, but hasn't connected it to the person who owns it. You correct the comparison used to find that owner. Then you run another collection, and it finishes successfully.

The account is still unassigned.

It would be reasonable to check the comparison again. Before changing it, though, there's another question to answer: did ISC repeat the comparison for this account, or did it read the account and skip further processing because its data hadn't changed?

Those are different outcomes. Once you can separate them, a successful collection with an unchanged ownership result starts to make sense.

## First, separate the account data from the matching configuration

An **account** is a record in an external system. An **identity** is ISC's representation of a person or another entity. ISC connects accounts to identities so that it can associate the accounts and their access with their owners.

A **source** is ISC's configured representation of a system or collection of account data. Its **connector** provides the supported integration with that system. We'll use a source named Equipment-Production to keep the records identifiable.

**Account aggregation** collects accounts and their information into ISC. Each named piece of information is an **attribute**, such as an account's email address or department.

Collecting a record gives ISC information about an account. ISC also needs to establish which identity owns it. **Account correlation** is the matching and assignment of a source account to its owning identity using the applicable comparison logic.

For example, a source can be configured to compare an account's employee reference with an identity's employee number. The account field supplies one value; the identity field supplies the other. The configured comparison tells ISC which values to examine.

Let's make the distinction visible with a small record. **JSON**, JavaScript Object Notation, writes named properties and their values inside curly braces:

```json
{
  "accountKey": "equipment-account",
  "mail": "old@example.invalid",
  "employeeRef": "W-33",
  "department": "OPS"
}
```

These are selected account values, not a complete API response. The email addresses are illustrative, not real contact details. Assume the account has valid, stable identification and was collected successfully.

The intended owner's existing identity has work email `current@example.invalid` and employeeNumber `W-33`. Both employee identifiers are text.

The original comparison used account mail and identity work email. When the account was first collected, those addresses already differed. In the supplied starting state, ISC did not establish an association between this account and the intended identity.

That's an **uncorrelated account**: its ownership hasn't been resolved to an established identity. An uncorrelated record can be represented with a technical **shadow identity**, a placeholder used by the system. That doesn't establish that Human Resources (HR) has recorded another employee.

Now the approved comparison changes to account employeeRef against identity employeeNumber. Both values already contain W-33, and exactly one existing identity is the intended match. There is no manual ownership assignment overriding automatic matching.

Notice what changed: ISC's matching configuration.

Notice what stayed the same: the account's mail, employeeRef and department. Saving the comparison doesn't rewrite the external account. It also doesn't, by itself, establish that the new comparison has been applied to every previously collected record.

The runs and completed results below are supplied examples, not observations from a real tenant.

## What does a full aggregation actually read?

A **full aggregation** reads the source's configured account population, rather than collecting only accounts reported as new or changed. Here, that population contains four accounts.

“Configured” matters. A full run doesn't mean every account in every connected system, or even every account that someone expects to see in this particular application.

The read has a **scope**, meaning the records and information it is intended to include. A **filter** selects or excludes records under supported conditions. The **integration actor**, the account or application identity used to reach the external system, also needs permission to read the intended information.

If the application returns results in pages, **pagination** is the mechanism for collecting those successive portions. Receiving the first page doesn't prove that the remaining pages were collected.

For our four-account example, assume the supported read returns all four intended accounts, with the required attributes. There are no missing pages or visibility gaps.

That settles one question: which records reached ISC during this run?

It doesn't settle the next question: how much processing did ISC repeat for each returned record?

## Why would ISC skip an account it has just read?

An **optimized aggregation** reads account data and avoids repeating further processing for existing accounts whose data hasn't changed. Optimization is the documented default.

Think about a record ISC already collected yesterday. Today's read supplies the same account information. Repeating work for that unchanged record would consume resources even though the input hasn't changed. Optimization lets ISC skip that repeated work.

For an existing unchanged account, the skipped work includes evaluating account correlation and **manager correlation** through this aggregation. Manager correlation establishes the relationship between an employee's identity and the identity of their manager. It answers who the employee reports to; account correlation answers who owns an application account.

That phrase “through this aggregation” matters. A skipped record in this run doesn't prove that no other supported process could evaluate the identity. We are following this run's handling of the account.

Newly collected accounts and existing accounts with changed data take the processing path. Existing unchanged accounts can take the skip path when optimization is enabled:

```text
[Account returned by the scoped read]
                  |
       [Existing and unchanged?]
          no /             \ yes
 [Process record]   [Optimization on?]
                      yes /     \ no
                    [Skip]   [Reprocess]
```

Read the lines as a logical choice after account data has been returned. A no answer to “Existing and unchanged?” includes a newly represented account or an existing account with changed data. A yes answer leads to the optimization choice: skip repeated processing when optimization is on, or reprocess when it is disabled.

The connector obtains the supported account data; ISC applies the relevant account-processing behavior. The diagram doesn't describe a private comparison algorithm, storage mechanism or exact internal execution order.

Also, “unchanged” says nothing about whether the account is active or useful. An active account can have the same data as yesterday. A disabled account can have a newly changed department or status. The decision concerns the account information available to processing, not a judgment about the account's importance.

Now return to our corrected comparison. The input data stayed the same, but the configuration that should interpret it changed. Optimization can therefore skip work whose result you now need to reconsider.

## Follow the first run, one account at a time

Call the first full aggregation after the comparison change **Run A**. It uses optimization.

| Account | What the read supplies compared with ISC's existing record | Run A handling |
|---|---|---|
| equipment-account | Existing account, unchanged data | Skip repeated processing |
| changed-account | Existing account, department changes from OPS to FIN | Process changed data |
| steady-account | Existing account, unchanged data | Skip repeated processing |
| newly-seen-account | Account already exists externally; first representation in ISC | Process newly collected account |

All four records were read. The changed account and the newly collected account take the processing path. Equipment-account and steady-account take the unchanged skip path.

That gives us four read, two processed and two skipped.

Here, “processed” means the record wasn't skipped and received the applicable account processing. It doesn't mean every identity value changed, every account found an owner, or any requested application change finished.

Equipment-account is the account we wanted to fix. Although its employeeRef W-33 could support the intended match under the corrected comparison, that comparison wasn't re-evaluated for it through this optimized run.

So the run can finish successfully while the ownership association remains unresolved. The read succeeded. The particular repeated comparison you needed was skipped.

There is another distinction in the table. Newly-seen-account was already present in the external application. ISC discovering it for the first time doesn't mean ISC created a new application account.

**Provisioning** performs supported changes to external accounts or access. Reading an account, establishing its owner in ISC and creating an account in the application are separate outcomes.

The table counts logical record handling in this supplied example. These aren't universal formulas or exact labels for every task counter shown in ISC.

## How do you apply the comparison without changing correct data?

An **unoptimized aggregation** scans the source's accounts and attributes and re-evaluates account and manager correlation even when account data hasn't changed.

The difference is the handling of unchanged records. You don't need to give a correct account an artificial department change just to get that record past the skip decision.

Before requesting this operation, confirm what you expect the current comparison to do. For equipment-account, that means checking the correct source and account, the approved employeeRef-to-employeeNumber comparison, the actual W-33 values, and the one intended existing identity. Our starting account is uncorrelated and has no manual ownership override.

Then a supported unoptimized full aggregation can include and re-evaluate that unchanged record.

In the supplied completed result, equipment-account becomes associated with the intended existing identity. Its employeeRef is still W-33. The result changed because the current comparison was applied to data already present.

Nothing in that correction requires a new employee record or a new application account.

Reprocessing gives the comparison another evaluation. It doesn't make incorrect data correct. If the account supplied W-30 and the intended identity had W-33, disabling optimization wouldn't make those unequal identifiers equal.

It also isn't a universal instruction to move already associated accounts to new owners. We began with unresolved ownership, not an account that had an established or manually assigned different owner.

Avoid changing correct business data merely to trigger work. That hides the actual reason for the run and can affect other decisions based on the field. Resetting a source, deleting records or recreating identities is also not a routine substitute for the supported reprocessing mechanism.

## The option belongs to the requested run

An **API**, application programming interface, allows software to interact with a system. ISC's account-aggregation API provides a supported way for an authorized caller to request this reprocessing.

The documented option is `disableOptimization=true`.

Read it from left to right: disable optimization, true. The caller is asking ISC to turn off the shortcut that skips unchanged records for this aggregation.

The option belongs to the aggregation request. It isn't an attribute of equipment-account and isn't something to add to the selected account JSON above. The current account-aggregation API describes it as a form-data field in the request body, not an account field or a permanent source setting. Form data is a request format that submits named fields.

The caller also needs appropriate authority. **Authentication** establishes who the caller is; **authorization** determines what that caller may do. Supplying a source's identifier selects the source. It doesn't grant permission to aggregate it.

The option applies to the current aggregation only. A later API aggregation uses optimization unless the caller requests that it be disabled again. Scheduled and manual account aggregations through the documented **user interface (UI)** run with optimization enabled.

That explains why “we disabled optimization yesterday” is insufficient evidence about today's run. You need the option and execution information for the run that was meant to re-evaluate the account.

An API accepting the request isn't the final association result either. Verify the completed execution and the identified account's actual owner.

For real work, the supported API version, request format, authentication, permissions and source behavior need to be checked together. The option explains the processing choice; it isn't a complete executable request.

## Read the same four accounts again

After Run A, ISC has recorded changed-account's new department. Newly-seen-account now has a representation in ISC too.

A **mapping** determines which input supplies a represented value. Assume no further external or mapped account-value changes occur before the next read. All four records now exist in ISC, and each read supplies unchanged data.

Call the next supported full aggregation **Run B**. This time optimization is explicitly disabled.

```text
Run A: 4 read / 2 processed / 2 skipped
Run B: 4 read / 4 reprocessed / 0 skipped
```

The reads cover the same four accounts. Run A processed the changed and newly collected records. By Run B, those records are existing and unchanged, but the unoptimized run still re-evaluates all four.

Steady-account is included too. It wasn't the reason for the investigation, yet the source operation also reprocesses it.

That is why scope and impact matter. A source-wide operation doesn't become a one-account correction just because one account prompted it. The counts above describe these two supplied runs, not exact task-summary field names or a promise about every connector's counters.

## What if the read only returns changed accounts?

A **delta aggregation** uses a supported changes-only mechanism. Its purpose is to collect the accounts reported as created or changed, instead of reading the full configured population. Support and behavior depend on the connector.

Changing a comparison inside ISC doesn't, by itself, change the external account. It also doesn't establish that the application's change mechanism will report that account.

Suppose a delta read doesn't return equipment-account. You now have a delivery problem as well as a processing question: the record you need to examine didn't arrive in that operation.

Disabling an unchanged-record shortcut doesn't, by itself, prove that a record omitted by the selected read mechanism was collected. Establish which records the supported operation will return, then establish how those returned records will be processed.

Don't assume this option universally resets a connector's delta state, removes a filter or widens the source population. Our main example explicitly uses a full-population read with all four records returned.

A **single-account aggregation** reads one specified account. The documented UI action updates that account's collected information, but doesn't synchronize the new data with identity attributes or perform provisioning.

That makes it useful for its supported account-data purpose. It doesn't make it a general substitute for re-evaluating the source population after a matching configuration change. Choose the supported operation by the outcome you need.

An **entitlement** represents an access right, such as membership in a group. **Entitlement aggregation** collects information about access objects, such as group definitions. Reading a group successfully doesn't establish that an unchanged account's ownership was compared again.

## What if the configuration change concerns an identity value?

An account attribute belongs to a particular source account. An **identity attribute** belongs to the identity itself, such as the office value ISC uses to describe the person.

An **identity profile** configures an identity population and the mappings that supply its identity attributes. For example, a profile can specify which existing account input should supply the identity's office.

Saving a new office mapping is a different change from correcting the source's account-to-owner comparison. One changes how an identity value should be calculated; the other changes how an account should be matched.

**Identity processing** evaluates identity information and the relevant access configuration. When aggregation or provisioning modifies an identity, that event initiates identity processing. It can apply profile mappings and evaluate configured access consequences.

ISC also documents manual identity processing for identity-profile and access-model configuration changes, including changes that must be applied even though identity data hasn't changed. That is the relevant mechanism when the saved configuration, rather than missing source data, is the issue.

So don't treat an unoptimized aggregation as a universal refresh for every configuration change. First identify the responsibility affected by the change.

Reading a source, matching an account to an owner, calculating identity values and changing an external account are distinct responsibilities. One workflow can connect them, but evidence that one happened doesn't prove that all the others finished.

For example, a changed identity value can affect configured access and lead to separate provisioning. Starting identity processing doesn't establish that the external change succeeded. Equally, a workflow that begins with reading data can have later access consequences; the complete workflow isn't automatically consequence-free.

## Where can you see what happened?

The source's **Aggregation History** and account-aggregation details provide execution evidence, including status, timing, accounts scanned and whether optimization was enabled. Relevant execution details can also report unchanged-account counts.

A scanned count tells you about the read. It doesn't, on its own, prove that each account received another ownership evaluation.

The source's **Account Correlation** configuration tells you which comparisons are saved. The source's **Accounts** view shows collected accounts and their associations. The identity's account list provides another view of the ownership relationship.

Use those views together. For equipment-account, compare the saved attribute pair with the collected employeeRef and the actual associated identity. A correct saved comparison and an unchanged association can coexist when repeated processing was skipped.

ISC Search has its own update timing. A stale search result alone isn't enough to establish that the completed re-evaluation failed.

| Question you need to answer | Evidence to compare | What that evidence doesn't establish alone |
|---|---|---|
| Was the required account delivered? | Correct source, actor visibility, scope, returned record and completed read | That ownership was re-evaluated |
| Was unchanged-record reprocessing requested? | Applicable request and execution's optimization information | That the comparison or input values were correct |
| Should the intended identity match? | Approved attribute pair, actual values and one intended matching identity | That the run completed or changed the association |
| Did the account's owner change? | The identified account and its actual identity association | That an external permission changed |
| Did an external change finish? | The separate provisioning result and resulting application state | That aggregation success alone proves delivery |

There isn't one status message that answers every question. Follow the evidence for the result you're trying to establish.

## If the result is still wrong, narrow down the cause

Start with delivery. Was this the correct source and environment? Did the actor have visibility? Did the filter include the account? Were all required pages collected? If the record never arrived, repeating the matching configuration won't explain that absence.

Then check the information that arrived. A **schema** defines represented attributes and their uses. A mapping identifies which input supplies a represented value. An application screen can show a field that the integration doesn't return or that the source doesn't represent.

For example, changing an application-only comment isn't proof of changed account data available to ISC if the delivered and represented fields remain unchanged. Check those actual fields rather than assuming every application edit affects the optimization decision. There is no need to invent ISC's private comparison algorithm to make that distinction.

Next, inspect the matching inputs. Is employeeRef really W-33, or is it W-30? Is the selected identity attribute the approved employeeNumber field? Are you examining the intended identity? Reprocessing can't repair an incorrect pair or unequal values.

Then verify the operation. Did this run include the account and actually disable optimization when unchanged-record re-evaluation was required? Did it finish, or were there errors, warnings or partial results?

Ownership history needs its own check. **Manual correlation** is an administrator-supplied ownership association. ISC documents that an account manually linked to one identity won't move to another simply because account attributes change. An unoptimized aggregation doesn't remove that manual correlation.

That situation requires the documented authorized handling of the association. It isn't the initially uncorrelated condition used in our main example. If an account is already on a different identity, investigate the association and its history before proposing reassignment.

Finally, identify the remaining failed outcome. If the correct identity owns the account but a permission is still missing in the application, inspect the separate provisioning work and target state. Repeating collection doesn't establish that a denied write has succeeded.

## Why not disable optimization for every run?

An optimized full aggregation still reads the configured population. Its processing saving comes from skipping repeated work for existing unchanged records; it doesn't become a delta read.

Disabling optimization adds re-evaluation for those unchanged records. On a large source, that adds processing work beyond the accounts that originally drew your attention.

This doesn't establish a fixed duration, a particular increase in external calls or identical performance across connectors. It does give you a reason to choose reprocessing deliberately, based on the configuration change and the population affected.

Before a real operation, review expected ownership effects and any connected identity-processing or access consequences. Keep account-deletion settings and safeguards in view when assessing read scope and reruns. A record omitted from a read isn't an unchanged record that was examined and skipped.

Don't remove safeguards to make an unexplained outcome disappear. Record what changed, which records need re-evaluation, which operation was requested, what completed and what result was verified. That gives the next engineer a reasoned account of the action.

## Reason through these changes

### 1. Four accounts were read, and two were skipped

Run A reads the four accounts in the table. Equipment-account and steady-account are existing and unchanged.

How many records take the processing path?

**Worked reasoning:** Two. Changed-account has new department data, and newly-seen-account is being represented in ISC for the first time. All four were read, but two unchanged records were skipped. Don't treat the scanned count as a count of repeated ownership evaluations.

### 2. The comparison changed, but the employee reference didn't

Account employeeRef W-33 and identity employeeNumber W-33 already exist. The approved comparison has just been saved. Another optimized run succeeds, but the account remains unassigned.

Must someone edit the employee reference to trigger a match?

**Worked reasoning:** No. First check whether this run skipped processing for the unchanged record. The existing values can support the intended unique match. After verifying the comparison, scope and association conditions, use the supported re-evaluation mechanism rather than falsifying correct data.

### 3. The application screen changed, but the collected fields didn't

Someone changes a comment in the external application. The delivered account response and represented attributes remain unchanged.

Does the screen edit prove that optimization must process this account?

**Worked reasoning:** No. The screen edit doesn't establish that changed information reached ISC's account processing. Inspect the actual response, schema and mappings. Don't assume that a field outside the delivered and represented information changes the record available for this decision.

### 4. Yesterday's API request disabled optimization

An authorized caller requested `disableOptimization=true`. Tomorrow, the normal scheduled UI aggregation runs.

Will that scheduled run inherit yesterday's choice?

**Worked reasoning:** No. The option applies to the requested aggregation. Documented UI scheduled runs remain optimized. Check the relevant request and execution rather than treating the option as a permanent source setting.

### 5. The delta read didn't return the required account

The external account is unchanged. Only ISC's comparison configuration changed, and the selected changes-only operation doesn't return equipment-account.

What must be established before promising re-evaluation?

**Worked reasoning:** Establish a supported read that includes the required record and the appropriate handling of unchanged records. Removing a processing shortcut doesn't prove collection of a record that the chosen read didn't deliver. Don't assume a universal delta reset.

### 6. Reprocessing receives W-30 instead of W-33

In an independent variation, account employeeRef is W-30 and the intended identity's employeeNumber is W-33. An unoptimized aggregation completes.

Should the intended match now be guaranteed?

**Worked reasoning:** No. The operation permits re-evaluation; it doesn't make unequal values equal. Investigate the approved inputs and comparison. Don't silently rewrite an identifier to produce the desired-looking association.

### 7. The account already has a manual owner

An administrator manually associated an account with one identity. Someone expects an unoptimized run to move it to another automatically.

Is this the same condition as our initially uncorrelated account?

**Worked reasoning:** No. The manual association has documented handling and isn't removed by an unoptimized aggregation. Verify the legitimate owner and use the supported authorized handling. A source reset or a promise of automatic mass reassignment doesn't follow from this example.

### 8. Ownership is corrected, but the group change is denied

The correct identity now owns the account. A **group membership** associates an account with an application group. A separate provisioning operation tries to change that membership, but the application denies it.

What succeeded, and what still needs investigation?

**Worked reasoning:** The supplied ownership association succeeded. The external membership change didn't. Inspect the provisioning operation, its authority and the target state. A successful account read or association isn't evidence that the denied write succeeded.

## Apply the distinction to a different configuration change

A project already has current HR account data in ISC. An identity profile is changed so that the identity's office comes from a different existing input. Someone proposes unoptimized reads of every connected application.

What would you establish before accepting that plan?

**Worked reasoning:** Identify the affected profile, the changed mapping, the available inputs and the expected office value. Then establish whether any source data is actually missing or stale.

In the supplied problem, the required current inputs are already present. The change concerns applying an identity-profile mapping. Follow the documented manual identity-processing mechanism for that configuration, review its impact and verify the resulting identity value. Re-evaluating every application's account ownership doesn't, by itself, answer the office-mapping question.

If fresh source data is also needed, arrange that collection separately. If the resulting identity value drives an external change, verify the separate provisioning outcome and the application state.

You can explain the choice to the project owner this way: “A full read establishes coverage. Optimization determines whether unchanged accounts skip repeated processing. Here, we need to apply an identity mapping to data we already have, so we'll use the mechanism for that change and verify the identity's office.”
