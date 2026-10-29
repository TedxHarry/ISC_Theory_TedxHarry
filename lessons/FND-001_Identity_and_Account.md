# Identity and account: how one person is represented across systems

Someone asks you to find the accounts an employee uses.

You find a worker record in Human Resources, or **HR**, a workplace directory account and a finance-application account. The directory username is different from the finance username.

Are these records for the same person? If they are, should they become one account?

The person is the same, but the records have different jobs. HR holds employment information. The directory supports workplace account services. The finance application holds the account used for finance work.

SailPoint Identity Security Cloud, or **ISC**, is a cloud service for managing identities and access across systems. It connects these records to a person-level identity while retaining the individual accounts.

That lets you ask, “Which accounts belong to this employee?” and then inspect each account in its own system context.

## Start with the account in its own system

An **account** is a record used by a person or service in a particular system.

A directory account can have a username, enabled status and access information. A **directory** stores workplace accounts and related information that other systems can use.

The finance application has a separate account. It may use another username and hold different permissions. A **permission** allows an action, such as reading an invoice, in that system.

The employee can own both accounts without the applications sharing one username or one permission list.

An account is also not always an interactive login. For an HR integration, the collected “account” can represent a worker record. The worker does not need a password on that record or sign in through it for it to supply employment information.

So ask what the account represents in that particular integration. Do not infer a working login merely from the word account.

## What does ISC hold about that account?

ISC uses a configured **source** to represent a system or collection of account data.

The **connector** supplies the integration used to read its information and, where supported and configured, make changes.

The finance application remains the business software. Its source in ISC represents the relevant account data and integration configuration.

This gives us two separate records to examine: the account in the application and ISC's representation of it.

If an administrator changes the application account after ISC collected its information, ISC can still display the earlier value. Opening that view does not automatically ask the application for a fresh account check.

Keep the observation time with the record. “ISC shows department Finance” describes information ISC holds. It does not yet tell you what the application holds now.

## The identity supplies the person context

For an employee, an **identity** is ISC's person-level record. It holds information about that person and connects their accounts across sources.

The identity does not replace the directory account or finance account. It gives ISC a record to which those separate accounts can be related.

A named field on a record is an **attribute**. Employee number, department, username and account status are examples.

An **account attribute** belongs to that particular account. An **identity attribute** belongs to the person-level identity.

If both records have department, the name does not turn them into one shared field. The identity can say Operations while the finance account says Finance.

That difference is worth keeping visible. Perhaps Operations is the current employment department and the finance account still holds an older value. Perhaps the application intentionally uses a different local classification. Combining the records into one unexplained value would hide the question.

The account **schema** describes the attributes ISC represents for a source and how they are organized. It helps ISC interpret the account data. It does not make every account attribute an identity attribute.

When investigating a value, identify both the field and the record: identity department, collected HR department or finance-account department.

## Use a small set of records to follow the relationship

The following accounts already exist in their systems. ISC has not loaded them yet and has no employee identity for this person at the start of this walkthrough.

| Existing external record | Information used here | Employee identifier |
|---|---|---|
| HR worker record | Department Finance | employeeNumber = 10482 |
| Directory account | Username staff-a | employeeId = 10482 |
| Finance account | Username finance-b | workerNumber = 10482 |

employeeNumber, employeeId and workerNumber are the hypothetical field names used by these systems. Each holds the same organization-managed employee number, 10482.

The different names tell us which field to read. The shared value can help establish which employee each record concerns.

It is not enough that the text looks the same. We need to establish that the fields identify the same kind of subject, are populated correctly and distinguish the intended employee reliably.

For our successful path, those checks are complete, the intended match is unique and there are no conflicting records or earlier wrong associations.

The administrator has prepared the sources, identity settings, required identity information and matching configuration. The trace collects and associates these records without requesting changes to the external accounts.

### An employee number and an ISC identity ID have different jobs

The organization assigns employee number 10482 to identify the worker.

ISC also gives its identity record a system-generated **identity ID**, a technical identifier for that ISC record.

Those values answer different questions. The employee number is business information that several systems can share for matching. The identity ID identifies the resulting record inside ISC.

Putting 10482 on the identity as an employee-number attribute does not make it the identity's technical ID.

## Establish the employee identity from HR

Reading source account information into ISC is **account aggregation**. The operation brings information from the selected source into ISC.

For this prepared example, the administrator loads HR first.

HR is configured as an **authoritative source** through an **identity profile**. The authoritative source supplies the worker population from which ISC establishes identities. The identity profile holds configuration for that population, including how identity attributes obtain their values.

A **mapping** specifies the selected input or calculation used to populate an attribute.

Here, the profile maps HR employeeNumber into the identity's employee-number attribute and HR department into identity department. All other required identity information is valid and mapped as well.

The loaded HR worker data therefore establishes the employee identity under this configuration. That identity has employee number 10482 and department Finance, with the HR source account associated with it.

We have created a person-level representation inside ISC. We have not created the employee or a new finance login.

The directory and finance accounts already existed externally. They have not yet been loaded in this walkthrough.

### Does authoritative mean every value must come from HR?

No. Establishing the identity population and supplying each identity attribute are separate configuration decisions.

The profile can use HR for employee number and department while using a directory account for email, where that is the approved design.

You must inspect the selected mapping to explain a particular identity value. The source's authoritative designation does not select every attribute input by itself.

## Connect the directory account to the identity

ISC next collects the directory account. It now needs to establish which identity that account belongs to.

**Account correlation** matches and associates a collected source account with an identity.

The directory source's configured comparison pairs account employeeId with the existing identity's employee number.

The account has 10482. The identity has 10482. Those values have the agreed employee-number meaning and identify the unique intended match.

The directory account becomes associated with that identity.

Notice why the username staff-a is not deciding this comparison. We configured the comparison to read employeeId, not username.

For the finance account, the configuration selects a different account field: workerNumber. Its 10482 value is compared with identity employee number 10482.

That account also becomes associated with the same identity, even though its username is finance-b.

The relationship is now:

```text
WITHIN ISC

Employee identity
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

Lines associate separate records.
They do not merge or rename accounts.
External accounts remain in their systems.
```

There is one employee identity associated with three source records.

The HR account retains its worker information. The directory account retains staff-a. The finance account retains finance-b and its own permissions.

The diagram shows associations within ISC, not account changes sent to the applications. In this trace, no renaming, permission update or other external write occurs.

The person-level view now supports questions across systems: which accounts belong to this employee, what access is recorded for them and which account should a particular change affect?

Correct association also does not decide whether every permission is appropriate. Ownership and justified access are different questions.

The HR-first order explains this setup. It is not a universal collection order or the complete correlation algorithm for every source.

## What if the employee number is missing?

Change one fact in a separate first-time directory import.

The employee identity already exists with employee number 10482. The directory account has never been associated with an employee identity, and its employeeId is empty.

Our selected employeeId comparison has no account-side employee number to match with 10482. It cannot establish the intended relationship.

That tells us about this comparison. We still need to consider the complete applicable matching behavior.

A source can have other configured comparisons. ISC also documents built-in default matching when source-configured correlation does not find a match.

The account schema designates a field as **Account Name**. The default can associate the account when that field matches an identity's name. This is a different comparison from the selected employeeId-to-employee-number comparison.

A failed employee-number comparison therefore does not, by itself, establish that no association is possible.

For this variation, suppose no applicable configured or default comparison finds an identity from the authoritative employee population. The account remains **uncorrelated** to that employee identity.

Uncorrelated means the employee relationship has not been resolved. It does not mean the external account disappeared or that ISC failed to collect its record.

An account already linked to the wrong person is different: a relationship exists, but it is incorrect.

Inspect the actual employeeId input, who supplies it and why it is empty. Compare that with the intended matching design before choosing a correction.

Guessing a number to make a comparison pass can create a wrong-person association. A visible link would then conceal an ownership error.

This first-time example also does not describe every account that was linked previously. Inspect an existing relationship and its history rather than assuming a new missing field tells you how it was established.

## If the identity exists, does every application account exist?

Suppose the organization introduces another application. The employee has an ISC identity but has no account in that application.

The existing identity still represents the person. It does not create an application account merely by existing.

**Provisioning** makes supported account or access changes. Account creation is one such operation.

The **target system** is the system receiving that change. Creating this account needs the required account values, applicable configuration, appropriate integration authority and a supported delivery arrangement.

**Fulfillment** is the work of getting the intended change delivered. Depending on the supported design, an integration can perform the operation or a person can receive assigned manual work.

A configured **lifecycle state** represents a business stage, such as working or departure, and can drive account or access actions. Its configured requirements can be one route to initiating account work.

The stage and related access configuration must actually require the action. The identity's existence is not evidence that account creation was required, attempted or completed.

Follow the separate results: what should be created, what work was initiated, what result was reported and whether the intended account exists in the application.

Correlation associates an account record ISC has with an identity. Creation establishes an account in another system.

Configured automation can use identity information or changes to start provisioning. You still need evidence of that work and its result; the association itself is not proof that another account was created.

If someone says, “The person exists in ISC but cannot use the application,” identify the application and intended account. Check existence, enabled status where required and permissions for the particular action.

## One person can have two accounts on the same source

Consider a standard directory account for daily work and an administrative account for approved administrative duties.

Both can be associated with one employee identity on the same source. They remain separate accounts with different identifiers, statuses and permissions.

An administrative permission on the second account does not automatically become available through the standard account.

So “change the person's directory account” leaves an important question: which one?

Identify the intended account and purpose before a supported provisioning change. Check what should change there and what must remain unchanged on the other account.

A person-level access view helps connect the accounts to the person. It does not establish that every associated account holds every displayed right.

## Find which part of a missing link is actually missing

Suppose you cannot find the expected finance account under the employee identity.

There are three places to examine: the external application account, its collected representation in ISC and the association with the identity.

The account could be absent in the application. It could exist but fall outside collection scope or not have been collected yet. Its representation could also be present in ISC with a missing or incorrect association.

Choose checks that distinguish those possibilities:

1. Establish whether the intended account exists in the finance application.
2. Find its collected record under the correct ISC source.
3. Inspect which identity, if any, it is currently associated with.

The source-account view helps inspect collected accounts and their associations. The identity view approaches the relationship from the person, with identity information and represented access.

If the source contains the record, collection has supplied it. If the expected person relationship is missing, inspect its current association, account matching values, corresponding identity values and applicable correlation behavior.

Do not search only for uncorrelated accounts when the account may already be linked to someone else. A wrong association needs investigation even though a link is visible.

Finding the external account is also a reason to pause before creating another one. A duplicate finance account would not repair the unexplained relationship of the existing account.

## Why can identity department change while account department stays the same?

Now let the employee move from Finance to Operations.

HR records Operations. ISC collects the changed HR information.

**Identity processing** evaluates identity information and applicable access configuration. With the department mapping still selecting HR and the update applied, identity department becomes Operations.

The finance account can still contain Finance.

That difference does not establish that the identity update failed. We have updated a value on one record; a different record holds the other value.

First establish the design. Should the application's department follow employment department, or is its local value intentionally maintained differently?

If it should follow the identity, something must write the new value to the application.

**Attribute synchronization** is a separately configured mechanism that keeps selected attributes on existing, correlated accounts aligned with identity attributes through provisioning.

It needs the applicable mappings and supported account-update capability. Linking the account to the identity does not enable synchronization by itself, and synchronization does not create a missing account.

Follow the direction of the information:

- HR supplies Operations through collection.
- The identity mapping and applied processing produce Operations on the identity.
- Configured synchronization can initiate an update to the finance account.
- The application must accept that update before the native account value changes.
- A later collection or another appropriate update can refresh ISC's account observation.

The collection observes the application result. It is a separate operation from the write that changed it.

Suppose ISC still shows Finance on the account. Use evidence to locate the gap:

| Question | Useful evidence |
|---|---|
| Why does identity department show Operations? | Selected identity mapping input and the current applied identity value |
| What account information does ISC hold? | Collected account attributes and relevant collection/update history |
| Should this account value follow the identity? | Approved design and applicable synchronization configuration |
| Was a write attempted, and what happened? | Synchronization events or provisioning activity, then current application-account evidence |

The configuration describes the intended behavior under its conditions. Activity describes attempted work and reported results. The current application account shows what is there now.

If the design permits a different local value, the difference may be correct. If a write was required, inspect that work and the observation before deciding which stage failed.

## Work through the relationships

### One person, three associated records

An HR worker record, directory account and finance account are successfully associated with the same employee identity.

How many employee identities does this establish? What would “one combined account” hide?

It establishes one employee identity associated with three source records.

The identity provides person context. The accounts retain their individual usernames, statuses, permissions and values. Combining them into one account would hide which system holds which information.

### The account exists, but the expected association is absent

The finance application has the intended account. ISC's account list under the correct source contains its representation, but it is not associated with the expected employee identity.

What is established, and what should you inspect?

The external account exists and ISC holds its record. The cause of the association problem is still unknown.

Inspect its actual association, the matching fields and values on both records, and the complete applicable matching behavior. Confirm the record identifiers and system context.

If it is linked to someone else, investigate the wrong link. Creating another account is not justified by these facts.

### The department values differ

Identity department is Operations, while ISC's finance-account representation says Finance.

Does that demonstrate failed identity processing?

No. Establish the identity value's selected input and applied result, then check the account observation and its time.

Find out whether the design requires the account to follow the identity. If so, inspect synchronization configuration, activity and current native value.

The difference alone does not distinguish an intended local value, unfinished write, rejected update or old observation.

### The identity exists, but a new application's account does not

Would associating an existing directory account create the missing account in another application? What evidence would demonstrate creation?

The directory association connects an existing record to the identity. Creation of the other account needs its own supported provisioning and fulfillment work.

Configured automation may initiate it. The reported operation and confirmation of the intended account in the application establish further results. A submitted operation or access requirement alone is not completed creation.

## Apply the distinction to a contractor's warehouse account

A contractor has an identity established from an approved contractor register.

The warehouse application already has an account for the contractor under a different username. Its record has been collected into ISC, but the expected person-level association remains unresolved.

Why is creating a second warehouse account not the first correction? What would you check to resolve and verify the relationship?

The required account already exists and has been collected. The unresolved part is its relationship to the correct person.

Establish what the contractor identifier means, the actual values held on the account and identity, and the applicable matching behavior. Inspect any current association before choosing an authorized correction.

Verify the resulting relationship. Do not assume that establishing it created or renamed the external account or changed its permissions.

If warehouse use is still unavailable, investigate the particular account and required action separately. A correct relationship helps you follow that account; it does not establish that its permissions are appropriate or sufficient.

Now choose an application you know. Explain what its account represents, what the ISC identity represents, how the relationship is established and how creation or attribute updates differ.

Identify where each important value comes from and what evidence would confirm a change.
