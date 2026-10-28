# Signing in, using a permission, and where ISC fits

You sign in to an application, and its home page opens. Then you select Invoices, and the application refuses to show them.

Your sign-in worked. So why can't you read the invoices?

The sign-in and the invoice request involve two different decisions.

During sign-in, it checks the identity you claim to be using. That verification is **authentication**.

When you ask to read an invoice, it checks whether the account you are using may perform that action. That decision is **authorization**.

An **account** is a record used by a person or another actor in a particular system. A **permission** allows an action on a resource. Here, reading is the action and the invoice is the resource.

Being allowed to enter the application does not give the account every permission inside it. To explain the denial, we need to connect the signed-in account to the rule for reading invoices.

SailPoint Identity Security Cloud, or **ISC**, is a cloud service that helps organizations manage accounts and access across systems. It can help decide whether this account should receive access and deliver the configured change. The application still enforces its rules when the person uses it.

## What does signing in actually establish?

Start with an application that checks sign-in information itself. You enter a username and password.

The username tells the application which account you claim to use. Anyone could type that username, so it is not proof by itself. The application checks the required evidence, in this example the password.

Some sign-ins require evidence from different categories. A password is something you know. A supported security device can provide evidence of something you possess.

Using more than one factor category is **multifactor authentication**, or **MFA**. Entering the same password twice does not add another category. MFA strengthens the verification; it does not decide whether invoice reading belongs to your job.

The application also needs to permit this account to enter. Once sign-in is accepted, it must connect your later actions to that account.

Otherwise, when you select Invoices, how would it know whose request it is handling?

## How does the application recognize your next request?

A **session** lets the application connect later requests to an already signed-in account.

Consider a common browser design. The application keeps a session record on its **server**, the part handling its incoming requests. That record is linked to your account, and the session has an identifier.

The application sends that identifier to the browser in a **cookie**, a small piece of data the browser stores and sends with matching requests to that application.

You select Invoices. The browser sends the invoice request with the cookie.

The server checks the session identifier. If the session is still acceptable, it finds the account connected to it. It can now evaluate the invoice request for that account.

The cookie has helped answer “Which signed-in account is making this request?” It has not answered “May this account read the invoice?”

For our hypothetical application, the account must be enabled, meaning its account status permits use, and have **Read invoices** to read an invoice. On each invoice request, the server checks the account's current permission. A separate **Release payments** permission controls payment release.

Suppose the account has neither. Sign-in and the home page can work, while reading invoices and releasing payments are denied.

Now give the account Read invoices, leaving Release payments absent. Reading is allowed under this rule; payment release is still denied. Both results are expected.

A password reset would not add Release payments. Another successful sign-in would not create it either. The application needs the relevant permission, not more evidence of the same account's identity.

These permission names and application rules are illustrative. They are not built-in SailPoint permissions or observations from a real deployment.

## Where do the page and the back end fit?

The forms, pages and buttons you interact with are the **front end**. The **back end** is the server-side work that handles requests, checks records and returns results.

When you select Invoices, the page sends a request. Behind that visible action, the server accepts the session, identifies the account and checks its permission. It returns invoice data only when the applicable checks allow it.

The button is an entry point to the operation. It is not the permission itself.

Hiding a payment button can make a page clearer, but the protected payment operation still needs enforcement. A request could arrive without that button being used. A trusted component, such as the application server or a **gateway** that handles incoming requests, must enforce the rule.

The same application can handle sign-in and action checks. Authentication and authorization describe different decisions; they do not require separate products or separate screens.

This browser-cookie example is one session design. Other applications can use different arrangements. Keep the account, session and action check connected when investigating any particular design.

## Which part could ISC change?

Suppose your work requires invoice reading, but the account lacks Read invoices.

First, someone with authority must decide whether that access is appropriate. Then the permission must reach the intended account.

The decision about who should have access, why and whether the need continues is **identity governance**. ISC helps organize that work across connected systems.

An **access request** asks for specified access for a person. That person is the **recipient**. If you request invoice reading for yourself, you are the recipient.

This request asks to provide invoice-reading access to your account. It does not attempt to sign you in to the invoice application.

An item marked **requestable** is available to request under the configured arrangement. Requestability is not a promise that every request will be approved.

A manager may say, “I have authorized the access.” They mean they approved the business need. When the application authorizes an invoice operation, it means that operation passed its access rule.

Those decisions are related, but they happen for different purposes. A business approval can permit a change to proceed; it cannot replace the application's later check of the account.

If a request is denied, that request does not grant the access. The account might still have the permission through an earlier grant or another arrangement. Check its actual access and history before interpreting denial as “the person has no access.”

## Which account should receive the approved permission?

ISC needs to connect the person asking for access with the application account being changed.

An ISC **identity** is the person-level record that brings together information about that person and their associated accounts. The identity is not the invoice login account.

One person can have accounts in several systems. An account in a central sign-in system and an account in the invoice application remain different records, even when they concern the same person.

Inside ISC, a configured **source** represents the system or collection of account data being managed. Its **connector** supplies the supported way to read that data and, where supported, make changes.

**Account aggregation** reads account information into ISC. It gives ISC a representation of the application account and its reported access.

**Account correlation** matches and associates that account with the appropriate ISC identity. The relationship answers “Whose account is this in ISC?”

That association helps connect a person's requested change to their managed account. It does not check a password or select the account the application will use at sign-in. The application's own sign-in selection is separate.

ISC represents a source access right as an **entitlement**. Read invoices is the represented right in our example. An entitlement can also represent membership in a **group**. A group collects members, such as accounts; the application can use their membership when applying shared access rules.

A group membership permits something because the application uses it in an access rule. Collecting a group name into ISC does not create that behavior.

The invoice application supplies account information during a read. When receiving a change, it is the **target system**. We read account data from the same application that receives the later account update; the names describe the direction of the work.

## Follow the permission from approval to the application

For this successful example, your identity already has one correctly associated invoice account. The account is enabled and lacks Read invoices.

The organization has enabled entitlement requests. This entitlement is requestable and visible to you, and you request it for yourself. Your correct manager is the configured reviewer.

That manager route is a chosen configuration, not a mandatory stage of every ISC request. Here the access should begin now and be usable after delivery; there is no future start or additional activation requirement.

Your manager approves the need. ISC can proceed with **fulfillment**, the work of carrying the authorized change through to delivery.

**Provisioning** carries out account or access changes in another system. For the automated route here, the connector supports adding Read invoices, provisioning is enabled and the connection works.

There is one more condition: the integration must be allowed to perform the addition.

Some connectors use an **integration account** to communicate with the application. That account performs the operation. Your **recipient account** receives the permission. The two accounts have different jobs.

Other connectors use a different supported authentication mechanism instead of a dedicated user account. Either way, the integration needs the authority required for this change.

ISC initiates the supported addition. The application accepts it and adds Read invoices to the intended recipient account.

That account gained a permission. Its password did not change. No new account was needed. Release payments remains absent. The provisioning operation did not sign you in.

When you later use that same account, the invoice check finds Read invoices and allows reading under our current-permission rule. Payment release remains denied.

The connection is the application's account record. Provisioning changes what it holds; the application checks that account when you perform an action.

### What if the operation is rejected?

Suppose the integration can read account information but lacks authority to modify the recipient. The application rejects the addition and leaves the account without Read invoices.

The manager's approval can be correct while that write fails.

Resetting the recipient's password would not give the integration authority to modify it. Another approval would not supply that authority either.

Inspect the account, operation, reported error and required integration privileges with the responsible team. Check the current target record and outstanding work before choosing an authorized correction and supported recovery.

Do not infer the required repair merely from “the user still cannot read invoices.” The rejected-write evidence is what identifies this delivery problem.

### What if a person performs fulfillment?

In a supported manual arrangement, ISC assigns work to a person who makes the change in the application. The person then records task completion.

A completed task reports that work was performed. A current check of the intended application account establishes the resulting permission.

Both automated and manual delivery need a defined account, action, responsible owner and result check. An assignment of work is not the account change itself.

## What does the information in ISC tell you?

The records answer different questions:

| Information | Question it helps answer |
|---|---|
| Access request and approval history | What access was requested, for whom, and what decision was made? |
| Provisioning or account activity | Which operation was attempted, on which account, and what result was reported? |
| Collected source-account data | What information did ISC obtain about that account? |
| Current application account and action | What does this account hold now, and does the intended operation work? |

A reported successful operation concerns that operation's result. A current account check concerns the state when checked. Someone could change the account afterward, so the two observations need not remain identical forever.

Aggregation can read the resulting permission into ISC's account view. That is a read of the access, not the operation that granted it.

Collection can run while you are signed out. Its timing follows the source's supported collection arrangement; do not assume that every write is immediately followed by an aggregation.

Similarly, an approved status in ISC does not mean the application rechecks the manager's approval whenever you open an invoice. In our design, the application uses its session and account permission.

## What changes when a central provider handles sign-in?

So far, the application checked sign-in evidence itself. Many organizations use a central sign-in system that applications trust instead.

That system is an **identity provider**, or **IdP**. It verifies the user and supplies identity information that participating applications can accept.

The application needs a configured trust relationship with that provider. Accepting identity information from another system under that trust is **federation**.

This can support **single sign-on**, or **SSO**. A usable sign-in with the provider can help you enter other participating applications without independently supplying credentials to each one.

The purpose is shared sign-in. It does not give every account every application permission.

The provider can also apply an entry policy. For example, a user might be authenticated but not assigned to enter this application. The provider can reject that entry attempt even though the password was correct.

An existing provider session may satisfy the required verification, or policy may require another prompt. SSO does not promise that every future entry will be prompt-free.

## How does the provider communicate the verified identity?

One common arrangement uses **Security Assertion Markup Language**, or **SAML**, a standard for exchanging identity and authentication information.

The provider sends a response containing an **assertion**, a structured statement about the user and authentication. The receiving application is the **service provider**, because it supplies the application service.

The browser carries the response in this example. The application cannot trust it merely because a browser presented it. It must validate it against the configured provider trust and protocol requirements.

Let's follow one successful path. The application already trusts this IdP and requires a matching, enabled existing account. It uses the browser-cookie session and current-permission rule described earlier.

1. You open the application without a usable application session. It directs the browser to the IdP.

2. The IdP verifies you using the required evidence or an existing acceptable provider session. Its entry policy must also permit this application.

3. The IdP issues a response for that application. The browser carries it back.

4. The application validates the response. Among its checks, it establishes trusted origin, integrity, intended application and current validity. In plain terms: who supplied it, whether it was altered, whether it is for this application and whether it can be used now.

5. The application uses the verified sign-in identifier to select your existing, enabled account.

6. It creates its own application session and sends the browser the session identifier in the application's cookie.

7. You request an invoice. The browser sends the application cookie, and the server validates the session, finds its account and checks the current Read invoices permission.

With Read invoices present, reading succeeds. Without Release payments, payment release remains denied. The accepted sign-in response did not supply every permission.

The provider and application have separate sessions. A usable IdP session does not mean the application has already accepted a response or created its own session.

In this cookie design, later invoice requests use the application session identifier. They do not repeat the whole SAML response on every click.

This is a conceptual path, not a complete SAML implementation or exhaustive validation checklist. Local sign-in uses a different verification path, while the account and operation checks remain necessary.

## Which application account does that sign-in select?

A verified sign-in must still be connected to the correct application account.

Consider a separate mapping example. The validated SAML assertion contains **NameID**, an identifier for the person the assertion concerns.

Suppose the application compares NameID with an account field called **externalLogin**. That field is part of this hypothetical application configuration, not an ISC field or a requirement for every SAML application.

Two enabled accounts already exist:

| Application account | Stored externalLogin |
|---|---|
| account-a | subject-a |
| account-b | subject-b |

If the validated NameID is subject-a, the comparison matches account-a. That is the account selected for the session.

Change the incoming value to subject-b, keeping the account data and mapping unchanged. The application now selects account-b.

With subject-c, neither row matches. Our example requires an existing matching account, so entry fails. Automatic account creation would require a different supported design.

The incoming identifier, configured account field and stored value explain the selection. “The provider authenticated the user” alone does not identify the chosen application account.

ISC could correctly associate both accounts with one person. That would not make the application select either one automatically. ISC correlation and application sign-in mapping answer different questions.

If Read invoices was delivered to account-a while the session uses account-b, both records can be correct as recorded. Find which account sign-in should use before adding more access.

## Put changing access, using it and observing it together

The access change can happen while you are signed out. When you sign in later, the application does not need another manager decision for each invoice request.

The separate paths meet at the account:

```text
CHANGE
Access request -> configured approval
      |
Supported provisioning to target account
      |
Application account holds Read invoices

USE
Accepted sign-in selects application account
      |
Application session connects later requests
      |
Server finds that account's current access
      |
Read invoices present -> allow reading
Read invoices absent  -> deny reading

OBSERVE
Application account -> collection -> ISC view

Human investigation compares these records.
Reading access and changing it are different.
```

The change path describes the successful configured request. A denied request does not grant through that request; a rejected write needs delivery investigation.

The use path describes our accepted session and current-permission check. Federated sign-in reaches it through the provider and application validation; local sign-in reaches it through the application's own verification.

The observation path runs back from the application to ISC. Collected information can lead a configured process to require another write, but the read and that resulting change are different operations.

These are responsibilities and dependencies, not private ISC services or timing promises. Human verification is separate from automatic processing.

In this architecture, the application checks invoice use. ISC is not called to decide each click. A live ISC decision call should only be assumed when the actual integration defines one.

## What if the account has the permission but the action still fails?

First compare the recipient account with the account attached to the session. If they differ, check their intended purposes and the sign-in mapping.

Do not immediately change ISC correlation. Establish whether the wrong relationship is in ISC's records or in the application's sign-in selection.

If the IdP authenticated the person but the application rejected the response, investigate the receiving application's validation. Provider verification and application acceptance are separate results.

If the intended account and accepted session are correct, inspect what the application actually checks for that action.

### The application may use earlier access information

Our original application checks current account permissions for each operation. Another design can keep a copy of access information from when the session began.

That saved copy is a **snapshot**. Changing the account does not automatically establish that an already-open session has replaced its earlier copy.

A **token** is a data object presented as evidence for a particular security purpose. Its meaning, validation and lifetime depend on its type and the integration. Some session or token designs contain earlier access information.

If the application checks that earlier information, the account can have a new permission while the session still lacks it. The reverse can matter after removal: an older session may still carry permission information the current account no longer has.

Establish the actual design before choosing a correction. An authorized, controlled test with a new session can help investigate an older-session effect. It does not prove that all other sessions ended or provide a universal repair.

### The permission may be only part of the rule

Change the invoice rule for a separate example. Reading now requires Read invoices **and** the account belonging to the invoice's business unit.

An account with Read invoices but the wrong business unit fails the second condition. Denial follows the changed rule.

These are **native access rules**, meaning rules enforced by the application itself. Read the complete deployed rule; the entitlement name alone does not describe every condition.

If a request cannot reach a working application at all, network or service availability may be the problem instead. That is different from a running application evaluating the account and denying an operation.

A fixed waiting period or password reset cannot resolve all these causes. Locate the failed step before selecting an action.

## If Read invoices is removed, what ends?

Return to the original current-permission rule.

Remove Read invoices from the intended account. While it is absent, the next invoice check denies reading. The account remains enabled and may still sign in and use permitted home-page functions.

Removing one permission, disabling an account, preventing new sign-ins and ending an existing session are different actions.

**Revocation** means withdrawing access or validity. The useful question is what is being revoked and which result is required.

### Why could a removed permission return?

ISC can still record that the person should hold it.

An approved entitlement request can establish an ongoing **assignment**, a record connecting the identity with the requested access.

The assignment records what remains assigned. The application permission records what is currently present. They can differ.

Suppose an administrator removes that requested entitlement directly from the source account but leaves its assignment active in ISC.

For an entitlement assigned through access requests, that direct removal is followed by reprovisioning at the next aggregation while its assignment remains active. **Reprovisioning** means provisioning it again.

Collection exposes the missing source permission. The continuing assignment provides the reason to restore it, and a separate write must deliver that restoration. The target must still accept the write.

The direct account edit removed the permission, not the ongoing requested assignment.

For a lasting withdrawal through this route, use supported requested-entitlement revocation and verify the target result. Other grant mechanisms have their own removal requirements; the behavior above is specific to the stated requested-entitlement case.

### What happens to an already-open session?

Now use the separate snapshot design. The account is verified without Read invoices, but its session may still contain earlier access information.

Permission removal alone does not establish when that session stops allowing reading. The application and sign-in teams need to establish how its relevant sessions or tokens expire or can be invalidated.

Keep three records distinct:

| Record or state | What it concerns |
|---|---|
| Requested assignment in ISC | Whether access remains assigned through that route |
| Permission on the application account | What the account currently holds |
| Application session or token | What continuing use it permits under that application's design |

For an urgent departure, the required outcome can include target-account changes, central-provider entry restrictions and existing-session termination.

Direct application sign-in also matters if it can bypass the central provider. Ending one route does not demonstrate that every route ended.

Check the intended outcome through each relevant path. An identity label or one completed removal cannot establish that all accounts and sessions are unusable.

## What if the application you are entering is ISC?

ISC itself is an application. An organization can configure an external identity provider for its sign-in.

In that relationship, ISC is the service provider receiving the trusted sign-in information.

Once inside ISC, you still need permission for the platform function you want. ISC **user levels** define sets of platform permissions. Signing in does not make every user an administrator.

“The person has access in SailPoint” can therefore mean two different things: permission to use an ISC function, or external application access that ISC records or manages. Identify which one the question concerns.

ISC can also govern provider accounts, groups or application assignments through supported SSO-provider integrations. A governed provider assignment can affect whether someone may enter an application.

It does not automatically supply every native permission inside that application. The provider entry policy and the application's action rules still have different jobs. Available governance depends on the supported integration, configuration and licensing.

## Work through these situations

The following observations are hypothetical, not exact ISC log formats or tenant results. The times show event order, not expected processing delays.

### Approval exists, reading fails, sign-in works

The manager approved Read invoices. Activity reports that the integration lacked authority to modify the intended recipient account. A current target check confirms that Read invoices is absent.

The person signs in successfully, then invoice reading is denied.

Which part failed? Would resetting the person's password address the known problem?

### The permission reached one account; another is in use

The operation reports Read invoices added to account-a, and its current target record contains it. The session identifies account-b, which lacks the permission.

Both accounts concern the same person, but their purposes and intended sign-in mapping have not been established.

Does this contradict successful delivery? What would you check before changing either account?

### An old ISC observation differs from a later denial

At 10:00, ISC collected Read invoices on the account. At 10:20, an administrator removed it directly in the application. At 10:25, invoice reading was denied under the original current-permission rule.

No later collection or account refresh has reached ISC.

Does the older ISC view establish that the denial was wrong? What must you check before treating direct removal as lasting withdrawal?

### The permission is absent, but a session still reads invoices

The requested-entitlement assignment has been revoked. The correct target account lacks Read invoices at the time of an invoice request, and no other grant applies.

An existing session still returns invoice data. You have not established whether the deployed application checks current permissions or uses a session snapshot.

What must you establish? How would those two designs change the expected result?

### MFA succeeds, but payment release was inappropriate

The person passes MFA and releases a payment. The account held Release payments, and the application's configured rule allowed the action.

The business owner confirms that this person's work should never include payment release.

Which part needs investigation? Would stronger authentication alone remove that capability?

## Compare the reasoning

For the rejected addition, authentication worked but delivery failed under the integration's authority. The target confirms that the required permission is missing.

Investigate the operation error and necessary integration privileges with the responsible team. An approved correction and supported recovery can address the proven cause. Resetting the recipient's password does not supply the integration's missing privilege, and broad administrator rights should not replace establishing the authority actually needed.

For the two accounts, the observations concern different records. Read invoices reached account-a; the application checked account-b.

Establish what each account is for and which account sign-in should select. The facts do not justify copying the permission to both accounts or deleting one. Correct the intended relationship.

For the old observation, the application removal happened after collection. The application can deny reading at 10:25 while ISC still shows the 10:00 permission.

Check the reason for removal, current account, assignment history and supported refresh path. If the requested-entitlement assignment remains active, later aggregation leads to reprovisioning under the documented behavior. Regranting merely to match an old screen would skip the business decision.

For the continuing session, confirm its actual account and the deployed application rule, including any saved access information.

Under the original rule, the same account's confirmed missing permission at the check predicts denial. Continued reading conflicts with that explanation and requires operation-specific evidence and verification of the deployed behavior.

Under a still-valid snapshot design, earlier permission information can explain continued use. The supplied facts make that a possibility, not a proven cause. Assignment revocation, target-permission removal and session termination need separate evidence.

For the excessive payment permission, account verification and the configured action rule worked. The mismatch is between the delivered access and the person's approved work.

Investigate how Release payments was assigned, including request or policy decisions and direct application changes. More authentication evidence does not remove an inappropriate permission.

## Apply the reasoning to document export

A contractor can sign in to a document application and read documents, but cannot export them.

For this separate example, export requires an enabled account holding **Export documents**. The server checks current permissions for every export request, with no additional export conditions.

ISC has an approved request targeting **account-x**. The connector reports adding Export documents there. You have no current target record and no evidence identifying the account used by the contractor's session.

What do you know, what is missing, and what would you inspect next?

Sign-in and reading do not establish export permission. Approval establishes the request decision; the connector report concerns a change to account-x.

Check the account's current permission and enabled state, and identify the account attached to the failed export request.

If the permission is absent, investigate delivery and later changes. If the session uses another account, investigate mapping.

If the same enabled account has Export documents at the relevant check and every supplied condition holds, denial conflicts with the stated rule. Inspect the export operation and confirm that the deployed application follows that rule. Do not invent an extra condition simply to make the explanation fit.

Another approval would not change which account sign-in selects. To explain the result, connect the decision, delivered change, account in use and actual action check.
