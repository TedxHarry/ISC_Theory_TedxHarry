# The account has no clear owner in ISC. What is actually missing?

An application account is visible in SailPoint Identity Security Cloud, or ISC, but it isn't connected to the person who uses it. The person already has an identity in ISC.

You inspect the account and find that its person-reference field has no value. Someone suggests matching by email instead. But that email is a shared team contact recorded against two people.

These observations tell us different things. The current comparison lacks the reference it was meant to use. The proposed replacement value doesn't distinguish one person from another. Adding the email comparison would change the design without repairing the missing reference.

Before choosing a correction, let's follow the information that should establish the relationship. That makes it easier to see which part needs attention and what would demonstrate that it has been fixed.

## What relationship are we trying to establish?

An **account** is a record in an application or another connected system. An **identity** is ISC's representation of a person or another managed entity.

**Account correlation** matches a source account to an identity and establishes their relationship in ISC. For a person's application account, the intended result is that ISC represents that account as belonging to the correct person.

A **source** is ISC's configured representation of a system or collection of account data. **Account aggregation** reads that account information into ISC. An account can be successfully collected while its identity relationship remains unresolved.

For the human-account situation here, an **uncorrelated account** is a collected account that hasn't been linked to an established human identity. ISC hasn't established that account-to-person relationship. The account can still have a legitimate business owner and work in the external application.

How does ISC try to establish the relationship? A **correlation criterion** selects an account field and an identity field whose values will be compared. Each field is an **attribute**, a named piece of information on its record.

For example, account `ownerRef` can be paired with identity `identificationNumber`. The standard correlation form uses **Equals**. If the approved person reference is `P-204`, the intended comparison is between that reference on the account and the corresponding reference on the identity.

The field names differ because they belong to different records. Their values must still mean the same thing: the person who owns the account.

## Follow a missing reference to a completed relationship

Here are the supplied facts for a small hypothetical example. Approved application records and the worker registry establish the intended owner independently of the matching configuration.

**Null** means no value is present. The account exists; its `ownerRef` value is null.

| Evidence | Current state |
|---|---|
| Collected application account | Account key `app-17`; login `app.user`; `ownerRef = null`; contact email `team@learn.example`. |
| Intended person's existing identity | Applied `identificationNumber = P-204`; identity `name = worker204`; email `team@learn.example`. Only this identity has the approved reference `P-204`. |
| Another identity | Reference `P-205`, name `worker205`, and the same contact email. |
| Complete saved configured comparison | Account `ownerRef` Equals identity `identificationNumber`. The identity field is already prepared for correlation. Email isn't a configured criterion. |
| Evaluation and result | The account has been evaluated, no existing manual association applies, and its recorded result is uncorrelated. |

The identity already holds the correct person reference. The account doesn't supply it. So the current account-side input cannot identify the approved person through this comparison.

We also need to account for the separate **default correlation** path. The source's **account schema** defines its represented account fields. It designates one field as **Account ID**, which identifies the source account, and one as **Account Name**, which supplies its naming value.

Here, the account key is Account ID and the login field is Account Name. If configured correlation cannot establish an association, the documented default compares Account Name with identity `name`, ignoring differences in letter case. That default isn't configurable.

No identity has a name matching `app.user`, even ignoring case. The default therefore supplies no match in this example. The stated uncorrelated result belongs with all these facts, rather than being inferred from one blank field alone.

Now establish the cause. In this example, the application owner verifies `app-17` against the worker registry. The integration is supposed to supply `P-204` as `ownerRef`, but the application's feed is missing that approved value.

The correction supplies `P-204` in that feed. It doesn't require changing the person's valid identity reference or using the shared contact email.

What must happen after the feed is corrected? The new value must be collected into the same ISC account and that account must receive correlation evaluation. A correct value outside ISC can't participate in a comparison that still sees the old collected value.

Once `ownerRef = P-204` is present on the collected account, the saved criterion can compare it with identity `identificationNumber`. The intended identity already contains `P-204`, and no other identity contains it among the identities considered here.

A **candidate identity** is an identity considered as a possible account owner during matching. Here there is one intended matching candidate. With evaluation occurring, eligible current identity data and no persistent manual link taking precedence, the supplied result is that the same account becomes associated with that identity.

```text
Approved owner reference: P-204

Application feed
  ownerRef: null -> P-204
          |
          v
Same collected account: app-17
  ownerRef = P-204
          |
          v
Configured comparison evaluated
  ownerRef Equals identificationNumber
          |
          v
Identity identificationNumber = P-204
  unique intended match -> associated

Human verification, separately:
Same account? Right person? Any writes?
```

The arrows follow the corrected input from the application's feed to the collected account and then to the comparison and supplied relationship. They don't describe separate mandatory jobs or ISC's private services.

The account key remains `app-17`, the login remains `app.user`, and the intended identity already existed. The missing reference and the account's relationship changed. The shared contact email remains shared and isn't added as another criterion.

Publishing the corrected feed is one piece of evidence. Seeing the collected value is another. Verifying the resulting relationship is what establishes that the account is now associated with the approved owner.

## A field that looks blank needs a closer look

The main example explicitly supplies a current null value. In an investigation, a description such as “the reference is blank” is often less precise.

Perhaps the application didn't return the field. Perhaps it returned null, empty text or spaces. Perhaps the current screen doesn't display it, or the feed substituted a placeholder.

**JSON** is a text format for representing and exchanging named fields and their values. These fragments illustrate different representations; they aren't complete source records or API requests.

```json
{
  "fieldAbsent": {},
  "fieldNull": {
    "ownerRef": null
  },
  "fieldEmpty": {
    "ownerRef": ""
  },
  "fieldSpaces": {
    "ownerRef": "   "
  },
  "fieldPlaceholder": {
    "ownerRef": "UNKNOWN"
  }
}
```

In the first object, `ownerRef` is absent. In the second, the field is present with null. Empty text contains no characters. The spaces example contains three characters, although it can look empty on a screen. `UNKNOWN` is ordinary text and doesn't identify the approved person.

The string `"null"` would also be text. It isn't the JSON null value.

Why does this distinction matter? It tells you what was actually supplied and what still needs checking. A response that omits a field doesn't, by itself, establish that ISC cleared a previously collected value. The connector's handling and the current ISC account record are separate evidence.

A **connector** provides the integration used to read data from a system and, where supported, make changes there. If the application screen shows a valid reference but the ISC account doesn't, follow that reading path.

Check the value in the response or file actually supplied to the integration. Then inspect whether the integration selected the intended field and whether the account schema represents the expected field and type. Finally, compare those observations with the current collected account.

This helps locate where the information stopped matching expectations. An application screen may display a value calculated differently from the field returned to the connector.

A **transform** calculates a value from inputs. If a calculation supplies one side of the comparison, inspect its selected inputs, output and errors. A failed calculation and a successful calculation returning null tell you different things about where to investigate.

Nor does making a field non-null necessarily repair it. Replacing every missing reference with `UNKNOWN` changes the field-presence count while leaving the owner unidentified. It can also introduce the same unsuitable value across many records.

The question is whether the value carries the approved person's reference, with the intended meaning and representation.

## Which side of the comparison is missing its value?

So far, the account lacked `P-204` while the identity already held it. Change that condition: the application account contains the correct reference, but the identity field is empty.

The comparison still lacks necessary information, but the correction belongs elsewhere.

An **identity attribute mapping** defines how an identity field receives its value from selected source data or a calculation. An **identity profile** holds those mappings and other settings for a population of identities. Its **authoritative source** supplies the accounts used to establish that population's identities.

A worker record can therefore supply a person reference through a profile mapping, while an application account independently supplies its own reference for comparison. Finding the reference on the worker record doesn't establish that the identity currently holds it.

**Identity processing** evaluates identity data and configured requirements, including identity attribute mappings. Follow the identity's governing profile, the selected input and the resulting applied identity value.

The profile's **Preview** evaluates mappings for a selected identity. A preview showing `P-204` helps explain what a calculation would produce. It doesn't prove the current identity field has been updated or that an application account was correlated using that value.

For a **custom identity attribute**, an additional organization-defined identity field, preparation matters too. The field must be configured as searchable for correlation and populated appropriately. The documented preparation includes manual processing for all identities before source aggregation. Manual processing means an administrator initiates identity processing.

That correlation-searchable setting is separate from being able to query a field in the Search interface. A field appearing in search results isn't proof that it is ready for use in correlation.

In this changed case, overwriting a correct application reference to imitate an empty identity field would damage good input. Establish and correct the identity-side cause, then verify the applied value and relevant correlation evaluation.

## A present value can still identify nobody

Now consider a collected account containing `ownerRef = P-99999`. No candidate identity has that value.

The account-side input is present. The investigation has moved from “where is the value?” to “what does this value identify, and where is the corresponding identity?”

Perhaps the reference is incorrect. Perhaps it identifies an employment contract while the identity field contains a person reference. Perhaps the intended worker hasn't entered the approved authoritative population. Or the identity exists but its reference is stale or incorrectly mapped.

These are explanations to test against evidence. They don't all call for the same correction.

Check the approved reference and worker-intake records, then the intended identity and its applied value. Creating another identity before establishing those facts can introduce a duplicate while leaving the original data problem unresolved.

Similarly, making the application source authoritative changes its responsibility for establishing identities. It doesn't establish that the application account belongs to an existing person.

There is an earlier boundary too: is the application account actually present in ISC? If it isn't, investigate collection scope and execution. There may be no collected record available for correlation to evaluate.

Keep the missing object clear: the account, the account's reference, the identity's reference, or the intended identity itself. Each points to different evidence and a different responsible team.

## A shared value doesn't distinguish the owner

Return to the proposal to use contact email. The account contains `team@learn.example`, and both supplied identities have that email.

A comparison with that value cannot distinguish which person owns this account. Independent application ownership evidence identifies the intended person; the shared address doesn't provide that distinction.

**Ambiguous matching data** means the available comparison evidence leaves more than one possible person. This is a description of the evidence, not a universal ISC status label or error code.

The proposed email criterion isn't saved in our main configuration. Its ambiguity therefore doesn't explain the current missing `ownerRef`. It tells us why that proposed replacement is unsuitable as a dependable person reference.

If you encounter duplicate candidates in an actual configured comparison, obtain the supported behavior and recorded result for that case. Don't choose the first identity on a screen and present that choice as ISC's decision. The facts here also don't justify claiming that every duplicate always stays uncorrelated or follows the same continuation path.

There are two related situations worth separating.

One is **contradictory input**: an account's person reference identifies one person, while its email identifies someone else. Each value may individually find one candidate, yet the fields disagree about ownership.

Standard configured criteria are ordered alternatives; one criterion can establish an association. Separate rows aren't automatically an **AND condition**, which would require the specified conditions to hold together. Adding a weaker email alternative can provide a route to the wrong person when the preferred reference is missing.

The other situation is a **multi-valued attribute**, a field containing a collection of values. An account field containing `["P-204", "P-205"]` is different from two identities sharing one email. Inspect the schema's single-value or multi-value definition and supported comparison behavior. Selecting the first list member or converting the list to text isn't evidence that you identified its legitimate owner.

These distinctions help you explain what the data proves before choosing any configuration change.

## An existing link can point to the wrong person

Suppose the account is already associated with the identity whose reference is `P-205`, while approved ownership records establish that it belongs to the person identified by `P-204`.

The relationship exists, but it is wrong. The account can disappear from an uncorrelated report without becoming correctly owned.

Start by establishing how the link was created. Current fields don't prove that today's configured criterion created an older relationship. A stale reference, reused email or incorrect explicit assignment is a possible cause to investigate.

**Manual correlation** establishes a persistent explicit account-to-identity relationship. Later source-data changes don't automatically clear it. Accounts created through ISC can also have manual-correlation treatment, indicated by `manuallyCorrelated=true`.

**Unoptimized aggregation** reevaluates correlation even for unchanged account records. It addresses whether those records are examined; it doesn't erase a persistent manual link. Correcting `ownerRef` and running that aggregation therefore don't, by themselves, prove a wrong explicit association moved.

By contrast, **optimized aggregation** checks collected account records for changes. If an existing record is unchanged, correlation evaluation is skipped. Saving new criteria alone doesn't establish that every existing account has used them.

These are separate questions: did the account receive the relevant evaluation, and does an existing persistent relationship require a supported explicit correction?

Verify the actual resulting association after the approved correction. Keep the legitimate reference independent of the value you intend to write. Copying a guessed identity value into an account and then using the copied value as proof would make the reasoning circular.

```text
Human investigation; choose by evidence

Account absent from ISC?
  -> inspect collection and scope

Account value unusable?
  -> trace its source and delivery

Identity value unavailable?
  -> trace mapping and applied state

Usable value, no intended candidate?
  -> reconcile reference and population

Several possible people?
  -> investigate ownership and data

Existing link points to wrong person?
  -> inspect history and correct link

Verify the relevant outcome afterward.
```

This is a human investigation map. Its arrows point to the evidence needed for each finding. They aren't ISC's matching algorithm, a mandatory execution order or a promise about duplicate handling. A record can have more than one problem; correcting one may reveal another.

## What would show that the problem is resolved?

The source's account details show the collected record and represented attributes. The identity's details show current identity values and profile context. The saved correlation configuration shows selected fields and order. Aggregation history and available events help establish what operation ran and when.

A source-specific or global **Uncorrelated Accounts report** helps locate missing relationships. It doesn't establish that every existing relationship is correct or that every listed account lacks a legitimate owner.

Keep the exact source and environment, account key, intended identity, selected values, saved criteria, evaluation scope and observation times together. An old file containing a correct reference doesn't establish the current collected value. Today's matching data doesn't prove a historical execution path if that evidence is unavailable.

The completion evidence should fit the cause:

| Finding | Evidence needed for the relevant correction |
|---|---|
| Account-side input absent or unusable | The approved value reaches the actual collected account with the intended meaning and representation. |
| Identity-side value unavailable | The correct mapping is applied to the intended existing identity, and correlation preparation is established. |
| No intended candidate | Reference meaning and approved identity population are reconciled; the intended identity exists with suitable values. |
| Several possible people | Ownership and data evidence resolve the identification gap; the actual relationship is checked. |
| Wrong existing association | The approved intended relationship is verified after supported correction, with history and affected actions reviewed. |
| Relevant evaluation didn't occur | Evidence establishes evaluation of this account under the relevant conditions and its resulting relationship. |
| Shared or non-human use | Supported classification, responsibility and approved treatment fit the account's actual purpose. |

A **machine account** is a non-human account related to an application or service. Service accounts and shared automation accounts need an appropriate classification and responsibility design. Use the classification and ownership features supported for the tenant and account type.

A source administrator manages an integration. That responsibility doesn't make every account on the source the administrator's personal login. For a legitimate shared or service account, establish who is responsible for it and how it should be represented and governed.

Choose correction and evaluation scope from the proven cause. Repeating broad reads won't supply a reference that the feed still omits.

## A correct relationship still leaves access questions to answer

An **entitlement** is a represented permission or membership. An uncorrelated account can still hold permissions and work in an external application. An unresolved ISC identity relationship doesn't automatically disable it.

**Provisioning** attempts supported account or access changes in an external system, such as creating an account or changing a membership. Correlation establishes a relationship; it doesn't demonstrate that one of those external changes succeeded.

**Attribute synchronization** is a configured write path from identity values to fields on existing correlated accounts. The relationship determines which person's identity data applies to the account. Correcting a link can therefore affect configured writes.

Before moving a real account, review those dependencies and any actions already performed under the old relationship. Establishing the correct owner doesn't automatically reverse previous writes or demonstrate that every permission the account holds is still approved.

No synchronization write or access-changing request is supplied in our main correction. Its successful outcome is the intended relationship, with the missing reference repaired.

Removing accounts, resetting a source or deleting duplicate-looking identities merely to shrink an exception list doesn't establish correct ownership. Shared names or emails require investigation, not an automatic merge or deletion.

## Work through the evidence yourself

### A response omits the field

The application response has no `ownerRef` field. You haven't inspected the current ISC account or verified how this connector handles omission.

Can you conclude that a previously collected reference was cleared?

### A feed fills every blank

Forty missing references are replaced with `UNKNOWN`. Each account should contain its own approved person's reference.

What has improved, and what remains unresolved?

### A preview looks correct

The application account contains the approved reference. A revised identity mapping previews that value, but the current identity field is empty.

Which side needs investigation? Would you overwrite the account to match the empty field?

### A value finds nobody

An account contains `P-99999`, and no identity has it. Employment and intake evidence haven't been checked.

What must you establish before creating another identity?

### Two identities share the email

The proposed contact-email criterion would fit both supplied identities.

Does screen order establish the winner? Can you declare a universal uncorrelated outcome? Does this proposed comparison explain the current saved criterion's missing input?

### The report count falls

An account disappears from the uncorrelated report after being linked to someone other than its approved owner.

Has ownership been repaired?

### Corrected data meets a manual link

A wrong manual association exists. The source reference is corrected and an unoptimized aggregation runs.

Which two outcomes need separate verification?

### A shared automation account has no employee match

The application owner confirms shared automation use. The team proposes attaching the account to the source administrator as a personal login.

What responsibility and classification questions remain?

## Compare your reasoning

For the omitted field, you know the response's shape. You still need the current represented account value and supported connector handling to establish whether anything was cleared.

For `UNKNOWN`, field presence increased. Individual identification hasn't been repaired. The shared placeholder doesn't supply the approved reference for each person.

For the preview, investigate the identity mapping's input, application and correlation preparation. The account already contains the correct reference. A proposed calculation isn't evidence of applied identity state, and damaging correct account data won't repair the missing identity value.

For `P-99999`, establish what the reference means, whether it is correct, and whether the legitimate person belongs in the approved authoritative population. Then inspect the existing identity and mapping. Wrong input and a missing legitimate identity need different repairs.

For the shared email, neither a first-display winner nor a universal duplicate outcome follows from the supplied evidence. Obtain ownership and actual result evidence. Because email is only proposed, it doesn't explain the existing person-reference criterion's missing input.

For the lower report count, the relationship exists but identifies the wrong person. Investigate its origin, make the supported approved correction, verify the actual association and review affected actions.

For the persistent manual link, verify both the corrected collected input and the intended resulting relationship. An unoptimized read doesn't automatically remove that explicit link.

For shared automation, determine the supported account classification and responsible-ownership design. Integration administration doesn't establish personal use. The approved treatment must fit the account's purpose.

## Organize a project exception queue

A project has 100 investigation records, combining uncorrelated accounts and disputed existing links. Initial review places each record in one primary work group:

- 40 have unusable references.
- 25 have references without a verified intended identity.
- 20 have ambiguous candidate evidence.
- 10 have wrong existing links.
- 5 are shared or machine accounts needing classification review.

The team proposes attaching every account to one administrator to close the queue.

How would you organize the work and decide when each record is complete?

The groups total 100 because this example assigns one primary investigation group per record. An actual record can have additional issues. Check the evidence behind its group and keep those additional issues visible.

The 40 unusable references need approved usable input and delivery evidence. The 25 unverified identities need reference and population reconciliation. The 20 ambiguous cases need ownership and data clarification. The 10 wrong links need association history, supported correction and review of dependent effects. The 5 non-person cases need suitable classification and responsibility.

Assign each missing action to the team that can supply it: the application or feed owner for missing account data, the worker-data and identity teams for population or mapping evidence, and the responsible ISC team for configuration, evaluation and relationship checks. Business ownership decisions still need the appropriate approved records.

For each case, verify the relevant evaluation and correct relationship, or its approved non-person treatment. Keep unresolved evidence visible. A lower count is useful only when the account's intended outcome has actually been demonstrated.
