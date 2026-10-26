# Identity and account: how one person is represented across systems

Someone asks you to show all the accounts an employee uses.

You find a worker record in human resources, or HR, a workplace directory account, and a finance-application account. The directory and finance application use different usernames. Each system holds only part of the information you need.

How do you establish that these records concern the same person without treating them as one record?

SailPoint Identity Security Cloud, or ISC, brings those records into a person-level view through an identity and its associated accounts. The relationship lets you ask about the person across systems while keeping each system's account details separate.

That separation matters whenever you investigate missing access, choose an account to change, or explain why two department values differ.

## The account belongs to a particular system

An **account** is a record used by a person or service in a particular system. A directory account can hold its username, status, group memberships, and other information. A finance account can hold a different username and a different set of permissions.

The directory is a system that stores workplace accounts and information other systems can use. The finance application is separate business software. The same employee can have an account in each without either system using the other's username.

Not every record treated as an account is an interactive login. An HR integration can represent a worker record as an account for collection and identity management. That does not imply that the worker signs in through that record or that it has a password. Establish what the integration's account record represents.

Inside ISC, a **source** represents a configured system or collection of account data. A **connector** provides the integration used to read data and, where supported and configured, perform changes.

Creating a finance source does not create a replacement finance application. The actual account remains in the application; ISC holds its own representation of that source record.

This gives you two places to inspect: what the application currently holds, and what ISC knows about it.

They can differ. If someone changes the account in the application after ISC obtained its information, ISC may still show the earlier value. An account view is evidence about the record ISC holds, not an unconditional guarantee of the application's present state.

## The identity connects the records without combining the accounts

For an employee, an **identity** is ISC's person-level record. It can hold information about the employee and connect their accounts across sources.

The identity is not a fourth workplace login that replaces the HR, directory, and finance records. It gives ISC a way to relate those records to the same person.

The fields on any of these records are **attributes**: named pieces of information such as employee number, department, username, or account status.

An account attribute belongs to that account. An identity attribute belongs to the person-level identity. Even when both are called department, they are not one shared field.

The **account schema** describes the account attributes represented for a source and how they are organized. It helps ISC interpret account information; it does not turn account attributes into identity attributes.

If you want to know the employee's department as recorded on their identity, inspect the identity attribute. If you want the department held on the finance account, inspect the account attribute and consider when it was observed.

Why keep both? Because they describe different things. The organization might regard HR's department as the current employment fact while the finance account still contains an older local value. Combining them into one unexplained field would hide the difference you need to investigate.

## Follow a small set of records

Use these hypothetical values to inspect the relationship. The account records already exist in their systems, but ISC has not loaded them for this walkthrough.

| External record | Account information relevant here | Employee identifier |
|---|---|---|
| HR worker record | Department Finance | employeeNumber: 10482 |
| Directory account | Username staff-a | employeeId: 10482 |
| Finance account | Username finance-b | workerNumber: 10482 |

The usernames differ. The employee identifier is the same, even though its field name differs between systems.

The value `10482` is an organization-managed employee number in this example. It is not the system-generated ID of an ISC identity object. A business value used to match records and a technical ID identifying an ISC record serve different purposes.

A shared value is useful only when it has the right meaning. Before using these fields for matching, establish that they identify the same kind of subject, are populated correctly, and distinguish people reliably in the population being managed.

For the successful path here, assume those checks have been made, the intended match is unique, the required identity information is available, and there are no conflicting records or previous wrong associations.

The administrator has also prepared the sources, identity configuration, and matching settings. Reading records cannot supply missing design decisions by itself.

## First establish the person-level record

Reading account information into ISC is called **aggregation**. For this walkthrough, the administrator loads HR first.

HR has been made an **authoritative source** through an **identity profile**. The authoritative source supplies the population used to establish identities. The identity profile contains configuration for those identities, including how their attribute values are obtained.

A **mapping** specifies an input or calculation used to populate an attribute. Here, the profile maps HR employeeNumber to the identity's employee number and HR department to the identity's department.

With the required information present under this prepared configuration, the HR account data establishes the employee's identity. The identity has employee number 10482 and department Finance, and the HR record is associated with it.

The directory and finance accounts have not been created by that step. They already existed externally; their records have not yet been loaded in this walkthrough.

Also separate two meanings of authority.

HR supplies the identity population here. That does not require every identity attribute to come from HR. Another approved mapping could obtain email from a directory while retaining employee number and department from HR.

The selected mapping determines an attribute's input. The word authoritative on one source does not explain every value on the identity.

## Then associate the other account records

Next, ISC collects the directory account. It needs to determine which identity that account belongs to.

**Account correlation** is the matching and association of a source account with an identity. In this configured example, it compares directory employeeId with the employee number on an existing identity.

Both values are 10482, and the intended match is unique. The directory account becomes associated with that employee's identity.

When the finance account is collected, its configured comparison uses workerNumber instead. That value also matches identity employee number 10482, so the finance account becomes associated with the same identity.

The different field names do not prevent a match because the configuration selects which fields to compare. The different usernames do not prevent it either; usernames are not the selected input in these comparisons.

After the successful association, the relationship is:

```text
Within ISC

One employee identity
employee number: 10482
department: Finance
         |
         +-- HR source account
         |   worker record
         |
         +-- Directory source account
         |   username: staff-a
         |
         +-- Finance source account
             username: finance-b

Lines show account associations,
not automatic changes in applications.
External records remain separate.
```

There is one employee identity associated with three source records. The lines connect records; they do not merge the accounts into one or require the applications to adopt one username.

In this walkthrough, no account-renaming or other external write has been performed. The directory username remains staff-a, and the finance username remains finance-b.

We have established which person the records belong to. We have not established that every permission on those accounts is appropriate.

The relationship makes further questions possible: which accounts belong to this employee, what access do they hold, and which exact account should an authorized change affect? Those answers depend on accurate data and associations.

This HR-first sequence explains the supplied setup. It is not a universal execution order for every source or a complete account-correlation algorithm.

## A failed comparison is not yet a complete matching result

Now change one fact in a separate first-time import.

The employee's identity already exists with employee number 10482. The directory account has never been associated with an employee identity, and its employeeId is empty.

The selected employeeId comparison cannot establish the intended match. There is no account-side value to compare with 10482.

That is a conclusion about one comparison, not necessarily the entire correlation outcome. Another applicable comparison or ISC's default matching behavior may establish an association.

For this variation, assume the complete applicable matching behavior finds no authoritative employee identity. The account remains uncorrelated to that employee identity.

An **uncorrelated** account has no resolved association to an identity established from the authoritative population. It does not mean the external account has disappeared or that ISC failed to collect it. An account linked to the wrong person has a different problem: an association exists, but it is incorrect.

The next useful question is who supplies employeeId and why the supplied value is empty. Inspect the actual account information and the applicable matching configuration before selecting a correction.

Do not replace a missing value with a guessed identifier just to make a comparison pass. A wrong value can associate the account with the wrong person. A visible association then exists, but it does not represent the correct relationship.

The successful example relied on verified meaning and a unique intended match, not merely on two equal-looking strings.

## An identity is not proof that another application account exists

Suppose the employee needs a newly introduced application and has no account in it.

The employee's existing identity still represents the person in ISC. It does not prove that an account exists in the new application.

**Provisioning** performs supported account or access changes. Account creation is one provisioning operation. The **target system** is the system receiving that attempted change.

Creating the new account needs the required account values, appropriate configuration and authority, and a supported delivery arrangement. **Fulfillment** is the work of carrying that intended change through to delivery; it can involve an integration or assigned manual work, depending on the supported configuration.

A configured **lifecycle state**, a business stage used to drive account and access actions, can be one way to initiate such work. The identity profile and related access configuration determine what actions that stage requires. An identity's mere existence is not evidence that account creation was required, attempted, or completed.

Check the applicable design, operation result, and actual application account.

Correlation and creation answer different questions. Correlation associates an account record that ISC has with an identity. Account creation establishes a new account in another system. Dependent automation can connect identity information to provisioning, but you must still inspect the separate work and its result.

When someone says, "The person exists in ISC but cannot use the application," begin with the intended application and account. Establish whether the account exists, whether it is enabled where required, and whether it has the access needed for the specific operation.

## More than one account can belong to the same person on one source

An employee might have a standard directory account for daily work and a separate administrative account for approved administrative tasks.

Both can be associated with the same identity on the same source. They remain distinct accounts with their own identifiers, status, and access.

The identity shows their relationship to the person. It does not make the administrative permissions available through the standard account.

That is why "change this person's directory account" can be incomplete. Which account? For what purpose? What should change on it, and what should stay unchanged on the other?

Account selection matters when provisioning a change. Verify the intended recipient account through the supported process rather than treating a person-level access view as proof that every account holds the same rights.

## A missing account link has more than one possible explanation

Suppose a finance account does not appear where you expect it on the identity.

Separate the external account, its collected representation, and its association.

The account might not exist in the application. It might exist but fall outside the collection scope. It might not have been collected yet. Or ISC may hold the source account without the correct association to the employee.

Ask these questions in order as the evidence requires:

1. Does the intended account exist in the application?
2. Does ISC contain its record under the correct source?
3. Is that record associated with the correct identity?

The source's account view helps you inspect collected accounts and their current associations. The identity view lets you inspect the person-level information and related access from the other direction.

A record visible under the source establishes that ISC holds it. If the expected identity relationship is absent, focus on the current association, selected account values, corresponding identity values, and applicable correlation behavior.

Check whether an association is missing or wrong. Searching only for uncorrelated accounts will not, by itself, explain an account already linked to the wrong person.

Finding an existing account is also a reason to pause before creating another one. A collection or relationship problem is not repaired merely by adding a duplicate external account.

## A changed identity value does not rewrite every account

Now let the employee's department change from Finance to Operations.

HR records the new employment department, and ISC collects the changed value. **Identity processing** evaluates identity information and applicable configured access. With department still mapped from HR and the update applied, the identity's department becomes Operations.

The finance account can still show Finance. These are separate records, so that difference alone does not establish a failed identity update.

First ask what the approved design expects. Should the finance account's department follow employment department, or does that application intentionally maintain a different value?

If it should follow the identity, a separate write mechanism is needed.

**Attribute synchronization** keeps selected attributes on existing, correlated accounts aligned with corresponding identity attributes through configured provisioning. It needs the applicable mappings and supported account-update capability; correlation alone does not turn it on.

Follow the direction of information. HR collection supplies the new input. The identity mapping and processing produce Operations on the identity. Configured synchronization can then attempt to write Operations to the finance account. The application must accept the change.

A later collection or other appropriate update can refresh ISC's account observation. It is not the write that changed the application.

If the values differ, use evidence that distinguishes these steps:

| Question | Evidence to inspect |
|---|---|
| Why does the identity show Operations? | The identity profile's department mapping, its selected input, and the applied identity value |
| What does ISC know about the finance account? | The account attributes and the relevant collection or update history |
| Is that account attribute supposed to follow the identity? | The approved design and applicable attribute-synchronization configuration |
| If an update was expected, what happened? | Synchronization events or provisioning activity, followed by current application-account evidence |

A configuration shows what should be attempted under its conditions. Activity helps explain what was attempted and reported. The application's current account tells you what exists there. None should silently replace the others.

## Work through the relationships

### One person, three associated records

An HR worker record, a directory account, and a finance account have been successfully associated with the same employee identity.

How many employee identities does this example establish? What would you lose by describing the result as one combined account?

**Worked reasoning**

It establishes one employee identity associated with three source records.

The identity provides the person context. The account records retain their source-specific details. Calling them one combined account would hide which system holds which username, status, permission, or department value.

### The account is present, but its expected association is absent

The application contains the intended finance account. ISC's account list under the correct source contains its representation, but it is not associated with the expected employee identity.

What is known, and what would you inspect next?

**Worked reasoning**

The external account exists and ISC has collected it. Those facts do not identify the association problem's cause.

Inspect its current association, the account values selected for matching, the identity values they are compared with, and the complete applicable correlation behavior. Verify that you are following the correct records. If the account is linked to someone else, investigate that wrong relationship rather than assuming it is simply uncorrelated.

Creating another application account is not justified by the supplied evidence.

### The departments differ

The identity shows Operations, while ISC's finance-account representation shows Finance.

Does that prove identity processing failed?

**Worked reasoning**

No. The records can legitimately have different values, or the account observation may be older than a later change.

Establish the origin and applied value of identity department. Then inspect the account observation and its time. Determine whether the design requires synchronization and whether the applicable configuration supports it.

If a write was expected, inspect its activity and the application's current account value. A failure might concern the write or observation rather than identity processing. The differing values alone do not decide which explanation is correct.

### An identity exists, but a new application account does not

Would associating an existing directory account with that identity create the missing application account?

What evidence would establish account creation instead?

**Worked reasoning**

The association connects the directory account with the identity. It does not create a different application's account.

Creation requires the relevant supported provisioning and fulfillment work. Configured automation may initiate that work, but you need the operation result and confirmation of the intended account in the application. An assignment or submitted operation alone is not completed account creation.

## Explain the same distinction in another setting

A contractor has an identity established from an approved contractor register. A warehouse application already has an account for that person, using a different username. Its record has been collected into ISC, but the expected person-level association is unresolved.

Explain why creating a second warehouse account is not your first correction. Then describe what you would need to investigate the relationship and verify any authorized correction.

**One defensible explanation**

The warehouse account already exists and has been collected. The missing piece is its resolved relationship to the correct person-level identity.

Establish the contractor identifier's meaning, the actual account and identity values, and the applicable matching behavior. Inspect any existing association before selecting an authorized correction. Verify the resulting relationship without assuming it has created, renamed, or changed permissions on the external account.

If warehouse access is still missing afterward, identify the required operation and account rights separately. Correct association makes that investigation possible; it is not proof that the account has appropriate access.

Now choose an application you know and explain what its account represents, what the identity represents, how the relationship is established, and how account creation and attribute updates differ. Include which record supplies each important value and what evidence would confirm a change.

Keep the person, the records, the relationships, and the operations distinct as you connect them.
