# The account was imported. Why isn't it on the person's identity?

An employee identity exists in SailPoint Identity Security Cloud (ISC). The person's payroll account also appears in ISC's account inventory.

Yet the identity doesn't show that payroll account. The account is recorded as uncorrelated.

The read succeeded. What is still missing?

Collection establishes that ISC has a particular account record. Correlation establishes the identity relationship for that account. One result doesn't, by itself, establish the other.

## Recognizing an account isn't identifying its person

An **identity** is ISC's representation of a person or another managed entity. An **account** is a record in a connected system.

One identity can have an HR worker record, a directory account and a payroll account attached. Those accounts needn't share a username or account identifier.

A **source** is ISC's configured representation of a system or account-data collection. Its **connector** provides supported integration behavior. **Account aggregation** reads account information into ISC.

An **attribute** is a named piece of information. Account attributes describe a source account; identity attributes describe the identity.

An **authoritative source** provides accounts used to establish identities through an **identity profile**. The profile supplies shared configuration, including how identity values are populated.

In this hypothetical example, HR-Production is authoritative for Employees. Its hr-record already belongs to the intended employee identity, whose required values are present.

Payroll-Production represents existing payroll accounts. It isn't authoritative for establishing employees in this design. Collected account pay-account should belong to the existing employee identity.

An **account identifier** distinguishes a record within its source. Payroll's selected Account ID field is accountKey, containing pay-account. That lets subsequent reads recognize the same account.

The selected **Account Name** field is loginName, containing pay.user. A separate friendly displayName contains Worker A.

These are different schema roles. An **account schema** defines represented fields and designates which identify and name accounts. Account Name means the designated field, not every field that resembles a person's name.

Recognizing pay-account again can update that account's represented information. It doesn't identify whether the account belongs to the intended employee, another person or a shared service.

**Account correlation** matches and associates source accounts with identities. It answers which identity this account should be attached to.

That is a relationship between records. It isn't merely copying a value, and it differs from recognizing the same source account on another read.

## Follow the matching information on both sides

**Null** means no value is present. Here it concerns the payroll employee reference, not whether the payroll account exists.

The supplied evidence is:

| Object or configuration | Selected facts |
|---|---|
| Intended identity | Employees governs it. identificationNumber is text W-107; identity name is worker-w107; friendly display name is Worker A. |
| HR account hr-record | Already attached to that identity; approved worker reference and person have been verified. |
| Payroll account pay-account | Account ID pay-account, designated Account Name pay.user, friendly displayName Worker A, employeeRef null. |
| Configured correlation | One pairing compares payroll employeeRef with identity identificationNumber. No other configured comparison matches. |
| Other matching evidence | No identity has the name pay.user. The missing employee reference supplies no intended matching value. |
| Recorded result | pay-account is uncorrelated and absent from the intended employee identity's associated payroll accounts. |

The friendly labels match. The configured comparison doesn't use those labels.

It pairs payroll employeeRef with identity identificationNumber because both are intended to represent the same approved employee reference.

The account key pay-account and login pay.user have different purposes. They aren't wrong because they differ from W-107.

With employeeRef null, that configured comparison doesn't establish the relationship. If the approved unique reference W-107 were supplied, it could match the intended identity's identificationNumber.

But don't stop at one unsuccessful comparison and assume every such account must remain uncorrelated.

Supported source types can have **preset correlation configuration**, initial attribute pairings supplied for that source type. Inspect the actual configuration, including any changes to those presets.

ISC also documents **default correlation** when the source's configured correlation cannot match an account. It compares the field designated Account Name with identity name, case-insensitively. This documented default isn't configurable.

Case-insensitive means letter case doesn't distinguish the values in that comparison. It doesn't turn every friendly full-name field into a matching input.

Here the designated Account Name is pay.user. The intended identity's name is worker-w107, and no other identity has name pay.user. The default path therefore supplies no match either.

```text
[Existing employee identity]
[identificationNumber: "W-107"]
[name: worker-w107]

[Collected payroll account pay-account]
[Account Name: pay.user]
[displayName: Worker A]
[employeeRef: null]
                  |
[Configured reference: no match]
[Default name comparison: no match]
                  |
[Recorded: uncorrelated]

[Engineer verifies intended ownership]
```

The upper records are separate evidence. The connected matching checks explain the supplied uncorrelated result. The final line is human ownership verification, not another automatic correlation stage.

This is a logical relationship map, not a private service pipeline. One aggregation can collect an account and evaluate correlation in the same run; different responsibilities don't require separate jobs in every case.

The absence of both applicable matches explains this example. Null employeeRef alone, or two similar display labels alone, wouldn't explain every source's outcome.

## Supply the approved reference and verify the relationship

The payroll owner confirms from approved employment evidence that pay-account belongs to employee reference W-107. The integration is intended to publish that reference in employeeRef.

The approved correction supplies employeeRef W-107 in the payroll feed. It doesn't rename pay.user, alter the valid employee reference or make Payroll-Production authoritative.

The corrected data then needs to be published, collected and evaluated through the supported correlation path. An external edit alone doesn't replace the old represented input inside ISC.

Assume the intended matching value is unique, ownership evidence is correct, and correlation is reevaluated. The supplied result is:

```text
[Same payroll account pay-account]
[employeeRef: null -> "W-107"]
                  |
[Corrected input published and collected]
                  |
[Correlation reevaluated]
[Unique approved identity match]
                  |
[Same identity now has pay-account]

[Account key and login unchanged]
[No access change supplied]
```

The changed account field now matches the intended identity's identificationNumber. The same payroll account becomes attached to the same employee identity.

Its account key is still pay-account, and its login is still pay.user. No new employee identity is needed. No application permission was newly granted by the statement that correlation succeeded.

Verify the exact source/account on the intended identity and check that the approved owner evidence supports that association. A lower uncorrelated count alone wouldn't prove the link is right.

The diagram describes dependencies and supplied outcomes. It doesn't promise that editing a feed immediately updates every ISC view.

## Understand what uncorrelated does and doesn't tell you

An **uncorrelated account** is a collected account not linked to an authoritative identity. In this example, the intended employee relationship hasn't been established.

The payroll team may already know who uses it. Technical lack of correlation doesn't necessarily mean the business has no legitimate owner.

An **orphan account** is a business-risk description whose meaning should be agreed, such as an account without a valid accountable owner or with access no longer needed. It isn't an automatic synonym for every uncorrelated account.

An uncorrelated account hasn't necessarily been disabled, deleted or stripped of permissions in its application.

**Provisioning** performs supported external account or access changes. The **target system** receives those attempted changes.

The initial read and unsuccessful match supply no operation to remove payroll access. Verify current sign-in capability and permissions through the application and relevant evidence.

Conversely, an account can be correctly associated with an identity while disabled in its source. Ownership and usable access are separate observations.

## Look in the view that contains the evidence

The Accounts view contains collected source accounts and attributes, including uncorrelated accounts. Source-level uncorrelated views and reports help locate unresolved relationships.

The identity's account and access views show what ISC associates with that identity. Searching only the employee identity won't establish everything in the source inventory when the payroll account isn't attached.

An **entitlement** is a represented permission or membership. An uncorrelated account can carry collected membership information without establishing that the intended employee holds it.

Don't assign those memberships to the employee in your analysis merely because displayName looks familiar. Person-based access decisions need the right account-to-identity relationship, not just a source inventory entry.

An **access request** asks for access to be assigned or removed through configured processing. A **certification** reviews whether existing access should remain. Reliable relationships matter when these processes govern a person's accounts and access.

A **Source Owner** is assigned operational responsibilities, such as manual fulfillment or access review. Manual fulfillment means a person carries out the required change rather than an automated connector doing it.

That assignment doesn't mean every source account is the Source Owner's personal account. Nor are a service account's responsible administrator, an application's business owner and a human account's user interchangeable relationships.

Record the source, exact account identifier, current association, matching fields and observation time. Counts and friendly labels don't identify the ownership evidence.

## A different defect needs a different correction

The main example changes missing matching data. A wrongly configured pairing needs configuration review instead.

If employeeRef is correct but the source compares another field, supplying it again won't fix that selection. Inspect actual configured, preset and default paths.

**Optimization** avoids unnecessary reevaluation of unchanged account data during an optimized aggregation. A successful read doesn't prove every unchanged account used newly edited criteria.

After correlation configuration changes on an already-aggregated source, the documented approach includes aggregation with optimization disabled so unchanged accounts can be reexamined.

Choose the supported operation and appropriate affected scope; this isn't an instruction to broadly reprocess every source.

Existing association history matters too. **Manual correlation** creates an explicit persistent link to an identity. Later source-value changes don't automatically move that account to another identity.

Unoptimized aggregation doesn't erase the manual link. Accounts created through ISC can also have manually correlated treatment, so inspect how the relationship was established.

An approved manual correction can fit a verified exceptional account. It doesn't replace repairing a feed with widespread missing references or a broadly wrong pairing.

Don't remove accounts, reset a source or delete identities simply to improve the count. A relationship on the wrong identity requires ownership evidence, supported correction and a review of dependent effects.

## A successful match isn't proof of correct ownership

Suppose approved payroll records say the account belongs to the intended worker, but employeeRef mistakenly contains another employee's number.

The configured comparison can attach it to that other identity. Correlation exists, but the business relationship is wrong.

That is why 100% correlated isn't a complete quality measure. It records associations, not proof that all are legitimate.

A default name match can also conceal the missing planned reference. If the designated Account Name matches an unintended identity's name, the default path can produce an association even though the employee-reference comparison didn't.

Verify which path supplied the match and whether it agrees with approved ownership. Don't replace the main example with a broad friendly-display-name comparison; names can be shared, changed or entered inconsistently.

For a shared or service account, use a responsible-ownership and account-classification design appropriate to its actual use and supported features. Don't force a personal account relationship merely because someone administers it.

The intended result is the correct relationship for the account type, not simply the largest correlated percentage.

## Review what a changed relationship makes possible

**Identity processing** evaluates identity information and configured access requirements. Correlation can change which associated account data is available to a person's mappings and other decisions.

An **identity attribute mapping** selects or calculates an identity field. A governing profile can read a value from an associated application account without making that application authoritative for establishing employees.

A **role** groups access requirements and can use membership criteria. A **lifecycle state (LCS)** is a business stage with configured account or access actions. These decisions depend on their actual inputs and configuration.

**Attribute synchronization** is a configured identity-to-account write path for existing correlated accounts. A new or changed association can matter when that path is configured, because the identity whose values apply to the account has changed.

That doesn't establish that every field is written, every role changes or required provisioning succeeds. Identity processing and target delivery have separate outcomes.

In the main payroll correction, no synchronization write is configured as part of the repair and no access change is requested. Its successful result establishes the intended account relationship.

Where a project does configure downstream actions, review them before moving an account. The relationship can determine whose data or access requirements the account receives.

## Separate the observations before diagnosing the symptom

| Observation | What it establishes and what remains to check |
|---|---|
| Account exists in the application | The application has a record; ISC collection and ownership are still unproved. |
| Account exists in ISC | That source record was collected and represented; inspect current fields and association. |
| Account is uncorrelated | The authoritative identity link is missing; investigate identity availability, inputs and matching paths, not assumed deletion. |
| Account is correlated | A relationship exists; verify the intended person and how the link was established. |
| Identity shows account and access | ISC associates represented data with that identity; verify ownership, freshness and required target outcomes. |

If no account record exists in ISC, investigate collection and scope first.

If it is present but uncorrelated, investigate the missing relationship. If attached to the wrong identity, investigate incorrect ownership. If correctly attached but a permission is missing, inspect collected membership and the actual access process.

“I can't find the account under the employee” doesn't, by itself, distinguish those causes.

## Try the reasoning against changed records

### 1. The import succeeds without a reference

pay-account is collected with employeeRef null. No configured or default path matches.

Has import success established the intended worker's ownership?

**Worked reasoning:** No. Collection and comparison evidence describe different results. Verify approved ownership and missing input; read success doesn't supply the relationship.

### 2. The display labels match

Account displayName and identity display name both contain Worker A. Designated Account Name is pay.user and identity name is worker-w107. No configured comparison uses the friendly label.

Does the label prove a default match?

**Worked reasoning:** No. Default correlation uses the designated Account Name and identity name. Inspect those fields and other applicable criteria; identical display text isn't ownership proof.

### 3. The default comparison matches

Configured employee-reference matching fails. Designated Account Name equals an identity's name, with no manual relationship overriding this supplied case.

Must it remain uncorrelated?

**Worked reasoning:** No. The documented default can establish a relationship. Verify its actual result and business ownership rather than assuming only the preferred configured pairing matters.

### 4. A matching reference belongs to someone else

Approved account evidence identifies the intended worker, but employeeRef contains another employee's number and the account is attached to that identity.

Is the correlated state sufficient?

**Worked reasoning:** No. Correct the actual data or relationship through an approved evidence-based process and review dependencies. A correlated percentage can conceal wrong ownership.

### 5. The intended identity doesn't exist

The application account was collected, but the worker identity hasn't been established. No legitimate alternative identity matches.

Should the application become authoritative to clear the count?

**Worked reasoning:** No. Investigate the approved authoritative intake and missing population. Changing application authority changes identity-establishment responsibility; it doesn't prove ownership.

### 6. Criteria changed, but account data didn't

The pairing was corrected. Unchanged account data is read with optimization.

Does success prove all records used the new comparison?

**Worked reasoning:** No. Establish the documented unoptimized reexamination and affected results. Read success isn't universal correlation reevaluation.

### 7. A manual association survives a field change

A manually correlated account receives a changed employee reference.

Will an unoptimized aggregation automatically move it?

**Worked reasoning:** No. The explicit manual link persists. Inspect association history, intended owner and supported correction; changed data and reexamination don't remove it by themselves.

### 8. Uncorrelated in ISC, enabled in the application

The application owner confirms the uncorrelated account remains enabled with existing permissions.

Is that contradictory?

**Worked reasoning:** No. These are relationship and external account-state observations. No disabling or removal operation is supplied. Establish legitimate use and approved action separately.

## Apply the distinction to another application

A project imports 2,000 project-management accounts and finds 120 uncorrelated records. The team proposes attaching all 120 to the source administrator.

What would you establish first?

**Worked reasoning:** Separate missing identities, absent matching references, wrong pairings, legitimate shared/service accounts and accounts no longer needed. Inspect preset/default logic and existing manual links too.

For sampled records, identify the exact source/account, intended owner evidence, candidate identity and the comparison that should establish the relationship.

Include a similarly named different person and an account whose login differs from the employee reference. Neither a friendly name nor a different login resolves ownership by itself.

Choose cause-specific corrections and suitable account classification. Operational responsibility for the source doesn't make every account the administrator's personal account.

Verify the resulting relationships and configured downstream effects. A completion statement should say whose account was established and on what evidence, rather than only that the uncorrelated count reached zero.
