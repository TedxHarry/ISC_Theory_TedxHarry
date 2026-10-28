# The first comparison found no match. What happens next?

An application account has been collected into SailPoint Identity Security Cloud, or ISC. The person's identity already exists there, but the account still needs to be connected to it.

You might expect a matching employee reference to make that connection. But what happens if that reference doesn't match and the account's email does?

The account is a record from the application. The **identity** is ISC's representation of the person. **Account correlation** establishes the relationship between those two records by matching account information to identity information.

One unsuccessful comparison can be followed by another comparison that establishes the intended relationship. To explain the final outcome, we need to follow the comparisons that apply to this account.

To understand the outcome, keep the result of a comparison separate from the result of the whole matching process.

## What is ISC actually comparing?

A **source** is ISC's configured representation of a system or collection of account data. **Account aggregation** reads account information from that source into ISC. Correlation can be evaluated as part of that work.

Reading an account and identifying its owner are different responsibilities. An account can be present in ISC even when its relationship to an identity is unresolved.

Here, the person's identity already exists. The application account needs a relationship to that identity; it doesn't need a second identity created merely because its first comparison finds no match.

A **correlation criterion** pairs an account field with an identity field. Each field is an **attribute**, a named piece of information on its record. The criterion tells ISC which values to compare.

For example, an account field named `employeeRef` can be paired with the identity field `identificationNumber`. The field names don't have to be identical. What matters is that their values represent the same agreed identifier for the person.

The standard correlation form uses **Equals**. This operation compares the selected values. It doesn't mean “contains these digits” or “looks like the same person.”

Notice which records participate in that comparison: the collected application account and the existing identity. ISC compares the selected value held on each record. Pairing an account field with an identity field doesn't mean reading any similarly named field directly from HR at that moment.

So where did the identity get its value? An **identity attribute mapping** defines how an identity field receives information from a selected account or a calculation. An **identity profile** holds those mappings and other settings for a population of identities. Its **authoritative source** supplies the accounts used to establish that population's identities.

For example, a worker record can supply the employee reference that a mapping places on the identity. The application account then supplies its own reference for correlation. Those are separate inputs, even if they are supposed to contain the same text.

That gives you two questions to investigate: how did the identity receive its identifier, and does the application account contain the corresponding value? A correctly selected pairing can still compare incorrect data if a mapping supplied the wrong identity value.

## Follow two saved comparisons with actual values

Here is a small hypothetical example. The application account and the intended person's identity already exist in ISC. Approved application ownership records identify that person as the account's owner.

The complete saved correlation configuration contains these pairings, in this order:

1. Account `employeeRef` Equals identity `identificationNumber`.
2. Account `mail` Equals identity `email`.

For this example, both identity fields are available for use in correlation, and the identity already holds the values shown below. These are current values, rather than a proposed calculation that has only been previewed.

The account is evaluated using these saved pairings. It has no existing manually assigned relationship that takes precedence over this matching.

The configured comparisons are **case-insensitive**: differences in uppercase and lowercase letters don't prevent a match.

Put the selected values beside each other:

| Saved pairing | Collected account value | Intended identity's applied value |
|---|---|---|
| `employeeRef` to `identificationNumber` | `OLD-E-204` | `E-204` |
| `mail` to `email` | `USER@learn.example` | `user@learn.example` |

A **candidate identity** is an identity considered as a possible owner during matching. We also need to know whether the selected value could identify someone else: no identity has `identificationNumber = OLD-E-204`, and only the intended person's identity has the matching email.

Start with the first row. ISC takes `OLD-E-204` from this account's `employeeRef` and compares it with the selected `identificationNumber` values on identities. The intended identity contains `E-204`, and no other identity contains `OLD-E-204`.

The first criterion therefore finds no matching identity.

Equals doesn't remove `OLD-` because the remaining characters look familiar. A **transform** is a calculation that can deliberately change an input into another value. Such a calculation or a correction to the source data is separate from this equality comparison. Neither is supplied here.

What happens next? The first comparison has left the relationship unresolved, and another configured pairing is available. ISC can consider that next pairing; the first no-match hasn't rejected every other way to identify the account.

The second row selects a different pair of fields. ISC takes `USER@learn.example` from account `mail` and compares it with identity `email`. The intended identity contains `user@learn.example`. Under the supplied case-insensitive setting, these values match. Only that identity has the matching email in this example.

Standard configured criteria are evaluated one attribute pairing at a time, in their saved order. Meeting a criterion can establish the account's association. Here, the second criterion supplies the intended association despite the first criterion finding nothing.

What has changed is the account-to-identity relationship represented in ISC. The application account is now associated with the person's identity. ISC hasn't needed to turn the unsuccessful employee-reference comparison into a success.

The account has been linked, but its employee reference is still `OLD-E-204`. Correlation established a relationship; it didn't repair that field. Its origin and any required correction still need investigation.

You can now describe the result precisely: the employee-reference comparison found no match, while the email comparison established the intended relationship under the supplied conditions.

## Why doesn't every row have to agree?

It is easy to read two rows in a configuration screen as two requirements that must both be satisfied. Let's check that interpretation against what the rows actually do.

An **AND condition** requires the specified conditions to hold together. An **OR condition** allows an alternative to satisfy the requirement. These configured correlation pairings are ordered alternatives, rather than a combined AND test.

Change the example so that `employeeRef` contains the correct `E-204`, uniquely matching the intended identity. The email is outdated and would match no identity.

The employee-reference criterion can establish the relationship. Once that criterion establishes the association in this straightforward case, the later email row isn't a second confirmation that must also pass. Its no-match doesn't veto the successful first comparison.

That is why a later criterion may never become the deciding comparison for an account. Order tells you which pairing gets the opportunity to establish the relationship first.

This changes how you should evaluate a proposed design. Adding email after an employee identifier provides another route to an association. It doesn't automatically make the employee-identifier route safer by requiring an email confirmation.

Likewise, adding a company field as another row doesn't mean “the company AND the employee identifier must match the same person.” If the business requirement needs those values considered together, the design must use an approved, supported way to express that combined requirement.

There is no need to imagine a points system here. A unique match isn't “one vote,” and ISC isn't waiting for a majority of fields to agree in the standard configuration described here.

The saved order matters to your trace. Inspect the actual configuration rather than assuming the preferred identifier is first because a design document placed it there.

## What if no configured comparison establishes the relationship?

There is another matching path to inspect: **default correlation**.

First, we need the naming value that this path uses. The source's **account schema** defines the fields used to represent its accounts. One field is designated **Account ID**, which identifies the source account, and one is designated **Account Name**, which supplies its naming value.

When an account can't be correlated using its source's configured correlation, the documented default compares that designated Account Name with an identity's `name`. This comparison is case-insensitive and isn't configurable.

Neither designation automatically means employee number, full name, or email. You need to inspect which field the schema actually selects.

For the main account, suppose `loginName` is designated Account Name and contains `app.user`. The intended identity's `name` is `worker204`. No identity has `name = app.user`.

If both configured criteria found no match, those supplied naming values would also fail to establish a default association.

Now consider a separate account variation for the same intended person. Neither configured pairing finds a match, but `loginName` contains `WORKER204`. Only the intended identity has the matching name `worker204`. With evaluation occurring and no existing manual association, the supplied unique match can establish the relationship through default correlation.

The selected schema field hasn't changed. The variation changes the account's value, not the Account Name designation. Changing Account Name or Account ID after aggregation is strongly discouraged because it can damage account representation and references; it isn't a harmless way to force a match.

A friendly display name isn't a substitute for this comparison. A screen could show an appealing full name while the designated Account Name contains something entirely different.

For an account with no configured match and no default naming match, with no persistent manual relationship or other matching behavior supplied, the outcome is **uncorrelated**. In this human-account context, that means the account isn't associated with an authoritative identity. The collected account can still exist in ISC.

That answers two different questions separately: was the account collected, and was it connected to an identity? The first can be yes while the second is no.

Here is how the configured and default comparisons connect in the simple cases we have just followed. The first pairing can establish the association; if it finds no match, the next pairing has its opportunity:

```text
Evaluated account; no manual link
                |
                v
Configured pairing 1
  unique intended match -> associate
  no match
     |
     v
Configured pairing 2
  unique intended match -> associate
  no match
     |
     v
Default: Account Name to identity name
  unique intended match -> associate
  no match              -> uncorrelated

Human verification, separately:
Does the link identify the right owner?
```

The downward arrows follow a no-match to the next applicable comparison. A unique intended match ends the matching trace with an association. A configured association doesn't continue into default matching to find a replacement owner. The default branch applies when configured correlation can't establish the relationship.

The separate human check asks whether that recorded relationship identifies the legitimate owner. Equality alone cannot answer the business ownership question.

Duplicate candidates, unavailable inputs, and evaluation errors aren't resolved by this drawing. Don't interpret every abnormal condition as an instruction to continue to the next row. The figure is a teaching view of documented behavior, not ISC's private service architecture or a set of separate jobs.

An uncorrelated outcome also isn't an instruction to disable or delete the external account. Those are separate changes requiring their own reason and authority.

## Change the comparison setting, and the reasoning changes

Return to the account email `USER@learn.example` and identity email `user@learn.example`.

They match under the configured case-insensitive setting used earlier. If that configured comparison becomes case-sensitive, the difference in letter case matters and this email pairing no longer supplies the same match.

That changes this criterion's result. To determine the overall outcome, you still need the other applicable configured comparisons, the default path, and the account's association history.

Configured correlation supports an `ignoreCase` setting that controls whether differences in letter case are ignored. This setting applies on a source/configuration-specific basis. Record the actual setting rather than assuming every configured comparison uses the familiar default behavior.

That setting belongs to configured matching. The separate, non-configurable default Account Name-to-identity-name comparison remains case-insensitive.

Ignoring letter case also doesn't establish a rule for trimming spaces, removing prefixes, or converting numbers. Text `E-204` and `E-204 ` differ by a trailing space. Leading zeros in a text identifier may be meaningful. Don't assume a cleanup or conversion step that isn't part of the verified design.

**Null** means no value is present. An empty string is text with no characters. Neither is the agreed employee reference. An unavailable value and an evaluation error require their own evidence; neither should be rewritten as an ordinary no-match just to complete a trace.

## Matching data still needs trustworthy ownership

The email match in the main example was useful because the supplied evidence identified one candidate and independently established the intended owner.

Remove either condition and you have more work to do.

If two identities share that email, the available value no longer distinguishes one person. Investigate the duplicates and obtain the actual evaluation result. Choosing the first identity on a screen isn't a supported explanation of what ISC did.

Now suppose the employee reference identifies one person while the email identifies someone else. The fields disagree about ownership.

Preserve the actual saved order, selected values, candidates, and recorded association. Then investigate why the inputs disagree. An outdated email, a reused address, or a wrong employee reference is a possible cause to check, not a cause you can declare without evidence.

Moving your preferred criterion to the top doesn't repair the contradictory data. A later alternative can still affect other accounts whose first criterion finds no match.

Nor can a recorded association decide which business record must be true. Compare it with approved ownership evidence. A matching engine can follow configuration while the resulting relationship is wrong for the business.

Don't invent a tie-breaker such as newest identity, identity-profile priority, collection order, or a hidden confidence score. Where the evidence doesn't establish a safe unique outcome, keep that uncertainty visible and use the supported investigation path.

## Did this account actually use the configuration you're inspecting?

So far, the main example has explicitly supplied evaluation under the saved criteria. In everyday investigation, you have to establish that fact.

A saved configuration tells you what is configured now. It doesn't establish when an existing account was last evaluated or which configuration was used at that time.

**Optimized aggregation** reads account records and checks them for changes. For an existing unchanged record, correlation evaluation is skipped. A successful optimized read can therefore leave an account's relationship unchanged after you edit the correlation criteria.

**Unoptimized aggregation** reevaluates correlation even for unchanged account records. It is the documented approach for reevaluation after changing the source's correlation configuration. It addresses whether unchanged records are examined; it isn't an instruction to erase every existing relationship.

The reason matters: changing comparison configuration isn't the same as changing application account data. An unchanged account may not enter the evaluation you expected during an optimized read.

There is a separate history question as well. **Manual correlation** creates an explicit persistent account-to-identity link. Later changes to the account's fields don't automatically move that link to another identity, and an unoptimized aggregation doesn't automatically clear it.

Accounts created through ISC can also have manual-correlation treatment, indicated by `manuallyCorrelated=true`. “No administrator imported a correlation file” is therefore insufficient to establish that an account has no such treatment.

These are different boundaries. An optimized read may not evaluate an unchanged account. A persistent manual relationship isn't an automatic reassignment just because you performed an unoptimized read.

Before a real correction, establish the intended owner, how the link was created, which records are affected, and the supported authorized correction. Don't reset a source, delete identities, or remove accounts merely to force the outcome of a teaching example.

## Use the screens as evidence for particular questions

The source's **Account Correlation** page shows the saved attribute pairings and order. A source type can supply a **preset configuration**, meaning initial predefined pairings. Inspect the current saved configuration rather than assuming the preset is still in place. A preset is different from the separate default naming path.

The **Accounts** view lets you inspect the collected source account and its represented attributes. The identity's details and associated accounts let you inspect its current values and recorded relationships. Together, these views help reconstruct what the selected comparisons can do with the current data.

The identity profile's **Preview** evaluates mappings for a selected identity. It can explain how a proposed identity value would be calculated. Apply Changes and the resulting identity state are separate evidence; previewing a value doesn't establish that every identity already holds it.

Eligibility matters before evaluation too. A **custom identity attribute** is an additional identity field defined for the organization. Identity attributes must be configured as searchable to appear in correlation's Identity Attribute list.

**Identity processing** evaluates identity data and configured requirements, including identity attribute mappings. Manual processing means an administrator starts that evaluation. After making the relevant searchable configuration, the documented preparation includes manual processing for all identities before source aggregation. This prepares the identity side before the source accounts are evaluated for correlation.

Identity processing isn't the same operation as reading the application account or comparing it with an identity.

Being searchable for correlation is also different from being usable as a query field in the separate Search interface. Finding a value there doesn't establish that a new field is prepared for correlation.

The correlation **Test** feature checks a sample of accounts to estimate matching results. That is useful configuration feedback, but a high estimated percentage doesn't establish that every existing account has been evaluated or that all matched accounts have legitimate owners.

For a real investigation, preserve the source, account key, intended identity, actual selected values, saved criteria and order, case setting, operation scope and optimization setting, observation time, and recorded relationship. Use available aggregation history and event information to establish what ran and when.

If there is no criterion-by-criterion historical trace available, say so. Explaining why today's data fits today's configuration isn't proof that the same comparison produced an older association.

## What does establishing the relationship change?

Correlation establishes whose account ISC represents. It doesn't, by itself, prove that a new external account was created, a permission was granted, or the account's fields were corrected.

**Provisioning** attempts supported account or access changes in a target system, such as creating an account or changing a permission. Establishing which identity owns an account is a different result from completing one of those external changes.

**Attribute synchronization** is a configured write path from selected identity attributes to fields on existing correlated accounts. The relationship matters because it identifies the account that receives the person's identity value. If the relationship points to the wrong person, a configured write can carry that wrong person's value to the account.

A real relationship correction can affect these configured writes and other dependent actions. Review them before changing a link, and verify any resulting writes separately.

No synchronization operation or access-changing request is supplied in the main example. Its established result is the intended account relationship, with the old employee reference still needing attention.

## Check the result before reading the reasoning

### A changed case setting

The first configured criterion finds no match. The second compares `USER@learn.example` with `user@learn.example`, but it is now case-sensitive. The designated Account Name is `WORKER204`, uniquely matching the intended identity's `name = worker204`. Evaluation occurs, and there is no manual override or other matching behavior in this example.

Which path can establish the relationship, and why?

### An email with two candidates

The first configured criterion finds no match. The second email criterion fits two identities. The current evidence doesn't identify a unique intended candidate or an observed evaluation result.

Can you finish the trace by choosing the first identity displayed? What evidence would you obtain instead?

### A changed configuration and an old link

An account's fields now point to a different person under the new criteria. A successful optimized aggregation leaves its existing link unchanged. Its association history hasn't been checked.

What would you establish before deciding that ISC ignored the configuration? If a later unoptimized read also leaves the link unchanged, is that enough to prove a defect?

### Two fields disagree

An account's employee reference identifies the approved owner. Its email matches another person. The team moves employee reference to the first configured row and declares the data problem resolved.

What remains unresolved, including for other accounts using that configuration?

## Work through the answers

For the changed case setting, the second configured comparison doesn't supply a match because letter case now matters. The separate default naming path remains case-insensitive. Under the supplied unique-match conditions, `WORKER204` matches `worker204`, so default correlation can establish the intended relationship. Keep the configured comparison's result separate from the overall outcome.

For the duplicate email, the evidence doesn't support selecting one person. Investigate why the value is shared, obtain approved ownership evidence and the actual account relationship or operation result, and use the supported correction or design path. Screen position isn't a verified tie-breaker. Don't label this an ordinary unique match or assume an error or ambiguous result follows the simple no-match branch in the diagram.

For the unchanged link, first establish whether the account was eligible for reevaluation in that optimized operation. Then inspect the association history and current inputs. An unoptimized read addresses unchanged-account reevaluation; it doesn't clear persistent manual correlation. Neither observation alone proves a defect or guarantees that an existing relationship must move.

For the contradictory fields, row order doesn't correct the email. Establish and repair the proven data cause through the approved process. The email alternative can still associate other records whose first comparison finds nothing. Verify resulting ownership and any affected consumers rather than treating the new order as a complete repair.

## Apply the reasoning to a contractor account

A proposed contractor source uses sponsor number as its first correlation criterion and contractor email as its second. The designers believe both must match the contractor's identity.

The sponsor number identifies an employee, not the contractor. Contractor email won't exist until another system creates a mailbox. An approved independent contractor reference exists in the application records, but it isn't yet available on both sides of the proposed comparison.

Would you accept the design as ready? Explain which relationship each available value could establish and which evidence is still missing.

The two standard rows are alternatives. A successful sponsor comparison can identify the employee whose sponsor number is present; it doesn't establish the contractor as owner. An email that will exist later isn't an available matching input now.

Evaluate the independent contractor reference: its meaning, uniqueness, actual account value, mapped identity value, and correlation eligibility. Establish how and when both sides will be ready. Then inspect the actual saved pairings and order, case settings, designated Account Name/default behavior, existing associations, and supported reevaluation conditions.

Finally, verify the resulting relationship against approved contractor ownership evidence and review dependent changes separately. The supplied proposal hasn't established a safe completed association.

When you explain a correlation result, connect the selected account value, the identity value, the comparison setting, and the evaluation conditions to the recorded relationship. Then check whether that relationship identifies the right owner. That is what turns “correlation worked” into an explanation someone else can follow and verify.
