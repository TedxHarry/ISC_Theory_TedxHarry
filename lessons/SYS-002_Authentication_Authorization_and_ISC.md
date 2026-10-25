# Signing in, using a permission, and where ISC fits

You sign in to an application, and its home page opens. Then you select Invoices, and the application refuses to show them.

Your sign-in worked. So why can't you read the invoices?

The application is answering two different questions.

During sign-in, it checks the identity you're claiming to use. That verification is called **authentication**.

When you ask to read an invoice, it needs another answer: is the account you're using allowed to read this information? That decision is called **authorization**.

An **account** is a record in a particular system, used by a person or another actor. A **permission** is an allowed action or access right associated with that account. Being allowed to enter the application doesn't mean the account has every permission inside it.

To explain the invoice denial, we need to find which account you're using and which access rule refused the operation. A successful sign-in alone cannot answer those questions.

Where does SailPoint Identity Security Cloud, or **ISC**, fit? It can help manage whether that account should receive the required access and carry out the configured change. The application still enforces its rules when you use it.

## What happens between signing in and opening an invoice?

Start with an application that checks sign-in information itself. You enter a username and password.

The username tells the application which identity you're claiming. Anyone could type that username, so the username alone isn't proof. The application also checks the required evidence, in this case the password.

Some sign-ins require evidence from different categories. A password is something you know; a supported security device can provide evidence of something you possess. Using different categories is **multifactor authentication**, or **MFA**. Entering the same password twice doesn't add a different factor.

Once the application accepts the evidence and permits entry, it needs to connect your later actions to the signed-in account. Otherwise, when you select Invoices, how would it know whose request it is handling?

A **session** maintains that connection across requests. It lets the application recognize that the next request belongs to an already signed-in account rather than making you repeat the whole sign-in for every click.

Consider a common browser design. The application keeps a session record on its server, linked to your account. It sends the browser a session identifier in a **cookie**, a small piece of data that the browser stores and sends with matching requests to that application.

You select Invoices. The browser sends the request with that cookie. The server checks that the session is still valid and finds the account connected to it.

Now it can ask the authorization question: may this account read invoices?

For a small hypothetical rule, suppose an enabled account needs a permission we'll call **Read invoices**. The server checks the account's current permission for each invoice request. If the permission is absent, it refuses to return the invoices. A separate permission, **Release payments**, controls payment release.

These are illustrative permission names, not built-in SailPoint permissions.

With Read invoices present and Release payments absent, the same signed-in account can read invoices but cannot release a payment. Both results follow the rules. A password reset wouldn't add the missing payment permission, and granting invoice reading wouldn't automatically permit payment release.

The cookie also doesn't grant every action. In this design, it helps the server find the session and its account; the application still checks whether the requested action is allowed.

### Where does the visible page fit?

The browser page, sign-in form, and buttons are the **front end**, the part you interact with. The **back end** is the server-side work that receives requests, checks records, and decides what response to return.

You see an invoice button. Behind it, a request has to reach the application, the session has to be accepted, the right account has to be identified, and the invoice permission has to pass its check before the data is returned.

Hiding a payment button can make the interface clearer, but hiding it isn't sufficient protection. Someone could send the protected request without using that button. A trusted part of the system, such as the application server or a **gateway** that handles incoming requests, must enforce the rule.

Authentication and authorization are therefore different decisions even when the same application performs both. They don't have to appear as separate screens or come from separate products.

## What would ISC need to change?

Suppose your work requires invoice reading, but your application account doesn't have Read invoices.

There are two things to settle. Should you have that access? If yes, how will it reach your account?

**Identity governance** addresses the first question: whether access is appropriate, who is responsible for deciding, and whether the need continues. ISC helps organizations govern identities and access across connected systems.

An **access request** asks for specified access for a person. That person is the **recipient**. If you request invoice reading for yourself, you're the recipient; the request is asking for an access change, not trying to sign you in.

The organization decides which items people may request and which review is required. An item marked **requestable** is available to request. That doesn't mean everyone who requests it will receive it.

Suppose the configured reviewer approves your business need. The decision now permits the requested change to proceed, but the application account still needs to be updated.

**Provisioning** is the work of making account or access changes in connected systems. ISC can initiate a supported change so that the application account receives the approved permission. The application must accept and apply that change.

This is why “approved” and “can use it” aren't interchangeable. Approval answers whether the change may proceed. Provisioning carries out the change. The application later checks the resulting account when you use it.

You may hear a manager say, “I've authorized the access.” Here, the manager means they approved the business need. When the application authorizes an invoice request, it is checking whether that particular operation is allowed. The word is being used for two related but different decisions.

A denied access request doesn't grant anything through that request. It also doesn't prove the account has no existing access. The same permission might already be present for another reason, so you still need to inspect the account and how it received access.

## How does ISC know which account should receive it?

The access request concerns a person. The application change concerns an account. ISC needs a reliable connection between the two.

An ISC **identity** is the person-level record that brings together information about a person and their associated accounts and access. The identity isn't the application login account itself.

For example, one person can have an account in the sign-in system and a different account in the invoice application. Both records concern that person, but changing one doesn't automatically change the other. Matching usernames wouldn't make them the same record either.

To bring the application's account information into ISC, an administrator configures a **source**. A source represents the system or collection of account data ISC manages. A **connector** provides the integration used to read that information and perform supported changes.

When ISC reads account information from the source, that collection is called **account aggregation**. It gives ISC information about accounts and their access as reported by the source.

ISC then needs to establish whose account each collected record is. **Account correlation** matches and associates the account with the appropriate identity. With that relationship established, ISC can connect the requested access for a person to the account being managed.

Notice what correlation answers: “Which identity does this account belong with in ISC?” It doesn't verify a password or decide which account an application will select during sign-in. Those are different jobs.

ISC also needs to represent the access being requested. An **entitlement** represents a right on a source, such as an application permission or a group membership. A **group** brings accounts together so a system can apply shared access rules to its members.

The application's rules give the entitlement its practical effect. A membership matters because the application uses it to allow something; collecting its name into ISC doesn't create that behavior.

When the application receives a change, we call it the **target system**. It can be the source of account information during a read and the target of an account update during provisioning. These names describe the direction of the work, not two different copies of the application.

There can also be two accounts involved in making the update. With a connector that uses an **integration account**, that account performs the work in the application. The **recipient account** is the account receiving the permission.

The integration account needs authority to make the change. The recipient account needs the resulting permission to read invoices. Those are different requirements: a failure to update the recipient may concern the integration account's privileges, not the recipient's password.

Not every connector uses a dedicated user account. Some use another supported authentication mechanism. The same question remains: is the integration authorized to perform this operation on the intended account?

## Follow the requested permission into the application

Let's trace one successful change. Your application account already exists, is enabled, and is correctly correlated with your ISC identity. It is the only relevant account for this request, and it lacks Read invoices.

The organization has enabled entitlement requests and made this item requestable and visible to you. You request it for yourself. In this illustration, your correct manager is the configured reviewer; manager review isn't mandatory for every request design.

The request has no future start date or additional activation requirement. That matters because even an approved request can otherwise be waiting for a configured start condition.

Your manager reviews the need and approves it. ISC can now proceed with the configured delivery work, often called **fulfillment**.

For the automated path here, the connector supports adding this permission, provisioning is enabled, connectivity works, and the integration account has the privileges needed to update your account. These conditions explain why ISC can attempt the change through this connection.

ISC initiates the supported operation. The application receives it and adds Read invoices to the intended recipient account.

What changed? That account gained one permission. Its password didn't change. Release payments remains absent. No new account had to be created because the required account already existed. You haven't been signed in by the provisioning operation.

When you later sign in and ask to read an invoice, the application's current-permission check now finds Read invoices and allows reading under the rule we supplied. Payment release is still denied.

The connection between the two processes is the same account and its permission. Provisioning changes that permission; the application uses it when deciding whether to allow the operation.

### How do you know the change reached the account?

Look at the operation result and the target account. A reported success describes the operation's reported outcome. A current target check establishes what the account has now. A later change could make those observations differ without changing what the earlier report said.

Aggregation provides another observation: ISC reads account information back from the source. That can update its recorded view of the permission.

Reading a permission is different from granting it. Aggregation can happen while you're signed out, and its timing depends on the source's collection mechanism and schedule. Don't assume every provisioning operation is immediately followed by account aggregation.

Some supported fulfillment designs use manual work instead of an automated update. An assigned person makes the change in the application and records the task as complete. The completion record reports that work; checking the target account confirms its result.

## What if another system handles sign-in?

So far, the application has verified sign-in information itself. Many organizations instead use a central sign-in system that applications trust.

That system is an **identity provider**, or **IdP**. It maintains identity information and provides authentication services. The application can rely on its verified sign-in information instead of checking a separate application password.

The agreement to accept identity information from another system is called **federation**. It requires configured trust: the application must know which provider it accepts and how to validate what that provider sends.

This can support **single sign-on**, or **SSO**. You sign in through the provider, and an existing acceptable sign-in can be used to enter other participating applications without independently entering credentials for each one.

SSO doesn't mean every application action is allowed. It also doesn't promise you will never see another prompt. The provider's policies may require more authentication evidence for a particular entry attempt.

The provider can also control whether you're allowed to enter an application at all, for example through an application assignment. Valid authentication followed by an entry-policy denial is possible. A rejection around sign-in therefore isn't automatically evidence of a bad password.

### How does the provider tell the application?

One common arrangement uses **Security Assertion Markup Language**, or **SAML**, a standard for exchanging identity and authentication information.

The provider issues a response containing an **assertion**, a structured statement about the user and authentication. The application receives that information as the **service provider**, the system supplying the application service.

The application doesn't trust the statement merely because it arrived through your browser. It validates it against the configured trust and protocol requirements.

Here is the selected path from opening the application to reading an invoice. Assume the application already trusts the provider and can match the verified sign-in information to your existing, enabled account. It uses the browser-cookie session design and current-permission rule we traced earlier.

1. You open the application without a usable application session. It directs your browser to the identity provider.
2. The provider verifies you using the required evidence or an existing acceptable provider session. Its application-entry policies must also permit this attempt.
3. The provider issues a response for the application. Your browser carries it back.
4. The application validates the response. Among its checks, it establishes that the information came from the trusted provider, hasn't been altered, is intended for this application, and is valid for use now.
5. The application uses the verified sign-in identifier to select your existing, enabled application account.
6. It establishes its own application session and sends the browser its session identifier in the application cookie.
7. You ask to read invoices. The browser includes that cookie; the server validates the session, finds its account, and checks the account's current Read invoices permission.

With Read invoices present, reading succeeds under the supplied rule. Without Release payments, payment release remains denied. The SAML response didn't grant every permission inside the application.

This is a conceptual trace of one common arrangement, not every message or validation requirement in a SAML implementation. Applications that verify sign-in locally use a different verification path, but still need to connect the user to an account and enforce access rules.

The provider and the application also have separate sessions. You can have a usable provider session while the application has not yet accepted a response or established its own session. In the cookie design above, later invoice requests carry the application session identifier; they don't repeat the whole SAML response on every click.

## How does the application select the right account?

Step 5 matters because a verified person and a selected application account are not the same thing. The application needs a configured way to connect them.

Consider a separate small mapping example. The SAML assertion contains **NameID**, an identifier for the person the assertion is about. Suppose this application is configured to compare that value with an account field called **externalLogin**.

Here, externalLogin is an illustrative application field. It isn't an ISC setting or a field every SAML application must have.

The application has two existing, enabled accounts:

- **account-a** has externalLogin value **subject-a**.
- **account-b** has externalLogin value **subject-b**.

After the response is validated, its NameID contains **subject-a**. The application compares that value with the two records. It matches account-a, so that is the account used for the session.

If the validated incoming value changes to subject-b while the records and mapping stay the same, the application selects account-b instead. If it is subject-c, neither account matches. In this example, the application permits entry only through a matching existing account, so entry fails. Automatically creating an account would require a different supported design.

This comparison shows why we need the actual incoming value, chosen account field, and stored account values to explain the outcome. Knowing that “SSO succeeded” doesn't identify the account by itself.

ISC could correctly associate both accounts with one person. That correlation would still be separate from the application's comparison at sign-in. A permission delivered to account-a won't help an operation checked against account-b merely because both belong to the same person.

## Put the access change and the sign-in beside each other

The requested change can happen while you're signed out. When you sign in later, the application doesn't need to ask the manager to approve the same access again. It needs to check the account selected for the operation.

The separate paths below use the successful request, federated sign-in, and current-permission rule we've supplied.

```text
CHANGE ACCESS
Configured request and review
  denied -> no grant from this request
  approved
     |
     v
ISC initiates supported target operation
  rejected -> investigate delivery
  applied
     |
     v
Intended account has Read invoices

USE ACCESS
Application directs browser to IdP
     |
     v
IdP verifies user and applies entry policy
  denied -> this entry path stops
  permitted
     |
     v
Application validates sign-in response
and maps to an existing enabled account
  unusable -> application entry fails
  usable
     |
     v
Application establishes session and cookie
     |
     v
Later request includes session cookie
     |
     v
Server validates session and finds account
     |
     v
Current invoice permission check
  absent  -> deny reading
  present -> allow under supplied rule

OBSERVE ACCESS, separately
Target records -> aggregation -> ISC view
```

Each arrow shows what must happen before the next step in that selected path. It doesn't show private ISC services or promise a processing time.

Changing access and using access meet at the application's account record. One path adds the permission; the other selects an account and checks it. If they concern different accounts, the intended connection is missing.

The observation path runs in the other direction: account information comes from the target into ISC. That information may lead a configured access process to initiate another change, but reading the information and making the resulting change remain separate operations.

In this architecture, ISC isn't called to decide whether each invoice-opening click is allowed. The application performs that check. Only expect a live ISC decision call if the actual integration calls for one.

Human investigation is separate again. An engineer compares the request, operation, account and application evidence; the diagram doesn't make that verification an automatic ISC step.

## What does a status on an ISC screen actually prove?

Suppose you see an approved request in ISC. It tells you about the request decision. To know whether the access arrived, you still need the delivery result and relevant account state.

Provisioning activity concerns operations and their reported outcomes. Check which account and change the activity refers to, especially if an identity has more than one account.

A collected account view shows information obtained from the source at a particular time. If someone changed the account afterward, that view may no longer describe the current application record.

These screens are useful because they answer different questions. Before treating a status as the explanation for a user's experience, ask: which decision or record is this, which account does it concern, and when was it observed?

The invoice page has a similar boundary. Its response reflects application processing. Seeing the page open doesn't establish that ISC rechecked the manager's approval at that moment.

## Where can an apparently correct setup still fail?

An approval can be correct while the target rejects the update. For example, the integration account may lack authority to modify the recipient. Repeating the manager's approval wouldn't supply that authority. Inspect the operation's error and the required integration privileges.

The update can also succeed while sign-in selects another account. Compare the delivered-to account with the account actually connected to the session. Don't change ISC correlation simply because the operation was denied; first establish whether the wrong relationship is in ISC or in the application's sign-in mapping.

The provider can authenticate you while the application rejects its response. The application may not accept the trust information or some other part of the exchange. Provider success tells you one part worked, not that the receiving application accepted everything.

### What if the application is using older permission information?

Our original rule checks current account permissions on each operation. Some applications instead keep access information from an earlier point, such as when the session began.

That saved information is a **snapshot**. The current account can change while the session continues using the earlier copy, depending on the application's design.

You may also encounter a **token**, a data object presented as evidence for a particular security purpose. Its meaning, validation, and lifetime depend on the kind of token and the integration. Some session or token designs carry earlier access information rather than rereading the account for every action.

First establish what the application actually checks. An authorized, controlled test with a new session can help determine whether an older session is affecting the result. It is a diagnostic test, not a universal repair or a guarantee that other sessions were ended.

### What if the permission isn't the whole rule?

Change the invoice rule so reading requires both Read invoices and membership in the invoice's business unit. Holding the permission is now only part of the requirement.

If the account has Read invoices but belongs to another business unit, denial follows this changed rule. Investigating only the entitlement would miss the second condition.

These are **native access rules**, meaning rules enforced in the application itself. Find the complete deployed rule before concluding that a permission is ineffective.

Finally, if the request cannot reach a working application, the failure may be network or service availability rather than authorization. “I have no access” describes the experience, not the cause.

Waiting a fixed interval or resetting a password doesn't resolve all these different conditions. Find where the attempt stopped and choose the next observation from there.

## If the permission is removed, what stops working?

Return to the original rule: each invoice request checks the account's current Read invoices permission.

Remove that permission from the account. While it is absent, the next invoice check denies reading. The account is still enabled, so the person may still sign in and use permitted home-page functions.

Removing one permission is therefore different from disabling the account, preventing new sign-ins, or ending an existing session. **Revocation** means withdrawing access or validity. Whenever someone says “revoke access,” ask what needs to be withdrawn.

### Could the permission come back?

There are two records to consider: what the application account currently has, and what ISC still requires it to have.

An approved entitlement request can leave an ongoing **assignment** in ISC, a record connecting the identity with that requested access. The application permission shows what is present now; the assignment records the access that remains assigned through the request.

Suppose an administrator removes the entitlement directly from the source account but leaves the requested assignment in place. SailPoint documents that this requested entitlement is reprovisioned at the next aggregation. **Reprovisioning** means provisioning it again.

The important distinction is that the source edit removed the permission, not the continuing assignment. Collection reveals the source state; the resulting write attempts to restore the still-assigned entitlement. Successful restoration also depends on the target accepting that write.

For a lasting withdrawal through this request route, use the supported requested-entitlement revocation process and verify the target result. Check how the access was granted: other assignment mechanisms have their own removal requirements. Don't assume this specific behavior describes every entitlement found by aggregation.

### What about a session that's already open?

Now consider the different application design that keeps a permission snapshot in the session. Removing Read invoices from the account doesn't, by itself, establish when that session will stop allowing reading.

The application and sign-in teams need to establish how the relevant session or token expires or can be invalidated. Removing the requested assignment, removing the target permission, and ending an active session address different records and need separate evidence.

For an urgent departure, the required outcome may include changes to target accounts, central sign-in routes, and existing sessions. If direct application sign-in can bypass the central provider, that route needs attention too.

An ISC identity label or one completed removal operation doesn't prove that all entry paths and sessions have ended. The useful question is what each change actually affects and whether the intended access has stopped through every relevant route.

## What if you're signing in to ISC itself?

ISC is also an application people enter. An organization can configure an external identity provider for that sign-in. In that relationship, ISC is the service provider receiving the trusted information.

Once you're signed in, your permissions inside ISC determine what you can do there. ISC **user levels** define sets of platform permissions; being signed in doesn't make everyone an administrator.

This is different from ISC managing your account in another application. “The person has access in SailPoint” is ambiguous: do they have permission to use an ISC function, or does ISC record or manage access in an external system?

ISC can also govern access through supported SSO-provider integrations. For example, a governed group or application assignment can affect whether the provider makes an application available.

That can influence application entry without granting every native permission inside the application. Understand what the provider assignment controls and what the application checks separately. The available governance also depends on the supported integration and licensing; it isn't a capability to assume for every provider.

## Work through the evidence

The observations below are hypothetical. They aren't exact ISC log formats or results from a tenant. The times establish event order, not processing-speed promises.

### Approval, missing permission, successful sign-in

The request was approved. Activity then reported that the integration account lacked permission to modify the intended recipient account. A current target check confirms Read invoices is absent. The person subsequently signs in successfully but is denied invoice reading.

Which part failed? Would resetting the person's password address these facts?

### One account received the change; another is in use

An operation reports Read invoices added to account-a, and its current target record contains the permission. The application session identifies account-b, whose current record lacks it. Both accounts relate to the same person; their purposes and intended sign-in mapping haven't yet been established.

Do the observations contradict successful delivery to account-a? What would you establish before changing either account?

### An earlier collected view differs from a later decision

At 10:00, ISC collected Read invoices on an account. At 10:20, an administrator removed it directly in the application. At 10:25, the application denied invoice reading. No later collection or other account-information refresh has reached ISC.

Does the older collected view establish that the later denial is wrong? What else would you check before treating the direct removal as a lasting withdrawal?

### The permission was removed, but an existing session still works

The requested-entitlement assignment has been revoked, and the correct target account is verified without Read invoices at the time of an invoice request. No other grant applies. An existing application session still returns invoice data, but you haven't established whether the deployed application checks current permissions or uses an earlier session snapshot.

What must you establish to explain the continued reading? How would the expected result differ between those two designs? Does permission removal prove that the session itself has ended?

### MFA succeeded, but the permission was inappropriate

A person passes MFA and releases a payment. Application evidence shows that the account held Release payments and the configured rule allowed the action. The accountable business owner confirms the person's work should never include payment release.

Which part needs investigation? Would stronger authentication alone remove the inappropriate capability?

## Compare your reasoning with the facts

For the rejected change, delivery failed under the integration account's authority. The target check confirms the missing permission. Successful sign-in doesn't repair either fact, and resetting the recipient's password wouldn't give the integration account authority to update it.

Examine the error and required integration privileges with the responsible team. Make an authorized correction and arrange a controlled retry where appropriate, then verify the target result. Granting broad administrator rights merely to make the error disappear would skip the question of what authority the integration actually needs.

For the two accounts, delivery and use concern different records. Read invoices reached account-a; the operation was checked against account-b. Those observations can both be correct.

Establish what each account is for and which one sign-in should select. The evidence doesn't justify copying permissions to both accounts or deleting one immediately. Correct the intended relationship rather than adding access to conceal a mapping problem.

For the earlier collected view, the 10:20 removal happened after the 10:00 collection. The application can therefore deny reading at 10:25 while ISC still displays the earlier permission.

Check the reason for removal, the current account, how the access was assigned, and the supported refresh path. If the requested assignment is still active, a later aggregation can lead to reprovisioning. Appropriate assignment revocation matters to a lasting withdrawal. Regranting access just to make the application agree with an old collected view would skip the business decision.

For the continuing session, establish its actual account and the application's deployed rule. Also inspect whether the session retains earlier access information.

If the application checks the same account's current permission for each invoice request, confirmed absence at that check means reading should be denied under the original rule. Continued reading conflicts with that explanation and calls for operation-specific evidence and verification of the deployed behavior.

If it instead uses a still-valid earlier snapshot, the snapshot can explain continued reading until the supported controls invalidate or replace that access information. The facts make this a possibility, not a proven cause. Permission removal, assignment revocation, and session termination need their own evidence. Repeating approval or assuming a universal wait wouldn't establish them.

For the excessive permission, authentication and the configured application rule both worked. The account was recognized and held the right that allowed payment release. What failed was the match between the access and the person's approved work.

Investigate how Release payments was assigned, the approval or policy basis, and any direct application changes. More authentication prompts don't remove an inappropriate permission.

## Apply the same reasoning to document export

A contractor can sign in to a document application and read documents but cannot export them.

For this independent hypothetical rule, export requires an enabled account with **Export documents**. The server checks current permissions for every export request, with no additional export conditions.

ISC contains an approved request targeting **account-x**, and the connector reports adding Export documents there. You have neither a current target record nor evidence identifying the account used by the contractor's session.

What do you know, what remains unproven, and which observations would help you choose the next action?

Sign-in and document reading don't establish permission to export. Approval tells you about the request decision; the connector report tells you about the reported change to account-x. You still need the account's current permission and enabled state, together with the account used by the session at the failed export.

If the permission is absent, investigate delivery and later changes. If the session uses another account, investigate mapping.

If the same enabled account has Export documents at the relevant check and all the supplied conditions hold, denial conflicts with the stated rule. Inspect the export operation's evidence and verify that the deployed application actually follows that rule. Don't quietly add an unexplained condition to make the original explanation fit.

Another approval wouldn't repair an account-mapping error. It permits an access change to proceed; it doesn't select the account used at sign-in.

When someone says “access isn't working,” follow what was decided, what changed, which account is being used, and what the application checks. Connecting those observations explains the result; any one of them alone can leave the cause unresolved.
