# Signing into ISC and changing a password: which system is doing the work?

You can enter SailPoint Identity Security Cloud (ISC) through the company's sign-in service, but you have forgotten the password for a separate support application.

Would changing your ISC password help you enter that application?

First, find out who checks the forgotten password. In this situation, the support application checks its own password. The company sign-in service checks who can enter ISC. Changing one password won't repair the other.

Let's follow both kinds of work: how ISC lets someone in, and how it can arrange a password change in another system.

## Start with the account whose password matters

An **account** is a record a system uses for a user. A directory account, for example, can have a username, a password and rules controlling whether it can sign in. An **identity** is ISC's record for the person. ISC can associate several external accounts with that one identity.

ISC keeps a representation of each collected account. That means ISC has information about the account; the original account still exists in its own system.

The records in this situation serve different purposes:

| Record | What it does here |
|---|---|
| Human resources (HR) account | Supplies employee information from which ISC establishes the person's identity |
| Corporate directory account | Holds the credential used for network sign-in |
| Identity-provider user | Is the user recognized by the company sign-in service |
| ISC identity and sign-in information | Let ISC identify the person and apply its own sign-in and permission settings |
| Support-application account | Has an independent password checked by the support application |

An **identity provider**, or **IdP**, is the sign-in service that checks the user's proof and provides authentication information another service can accept. It might use a directory behind the scenes. The directory and IdP rows show different responsibilities; they don't require every company to maintain separate password stores for those two rows.

For this explanation, the external accounts already exist and are associated with the correct ISC identity. **Account correlation** is the work that makes that account-to-person association. It answers, “Whose account is this?” It doesn't make the accounts share passwords.

ISC receives account information through a **source**: configuration representing a connected system or collection of account data. A **connector** supplies the integration used to read data and perform supported changes. The external system receiving an operation is often called the **target**.

**Aggregation** reads account information into ISC. That information can include **entitlements**, the permissions or group memberships represented for an account. Aggregation gives ISC data to manage and review. It doesn't reveal everyone's current password in readable form.

Two accounts can have the same username and still check different passwords. A matching name and a correct correlation don't configure password sharing.

## Separate proving who you are from what you can do

A **credential** is something used to prove identity, such as a password. **Authentication** is the check of that proof.

After successful authentication, **authorization** determines what the recognized user is permitted to do. A **session** allows the service to recognize subsequent interactions as belonging to the signed-in user, without asking for the same proof on every page.

These explain three observations that can otherwise look like one:

1. The user signs in successfully.
2. The user can open a particular page.
3. The user can perform a particular business action.

Each observation establishes something different. A person might enter ISC and read their own information while being unable to administer sources. Their ISC **user level**, the permissions assigned for using ISC, controls that administrative authority.

The support application has its own permissions. An accepted support password doesn't, by itself, grant permission to approve tickets or administer that application.

When someone says “access isn't working,” identify which of these stages they mean before choosing a repair.

## Follow a successful sign-in through the identity provider

**Single sign-on**, or **SSO**, lets participating services use an established sign-in arrangement so the person doesn't independently authenticate to each one with a separate application password.

In this example, ISC is the **service provider**: the service the person wants to enter. The IdP authenticates the person, and ISC accepts the resulting information under a configured trust relationship. This arrangement between services is called **federation**.

One protocol for it is **SAML**, short for Security Assertion Markup Language. A protocol gives the participants agreed rules for exchanging information. A SAML **assertion** is a statement from the IdP about the user and authentication. It isn't the user's password.

Assume the IdP and ISC are correctly configured to work together, the user is permitted to use the service, and ISC already has a matching identity. Automatic identity creation at sign-in is off; we'll discuss that separate option shortly.

Now follow the person from the browser into ISC:

1. **The person opens ISC.** The configured sign-in route directs the browser to the IdP.
2. **The IdP authenticates the person.** It performs the checks its policy requires. If an applicable IdP session already exists, the person might not have to enter a password again.
3. **The browser carries the SAML response back to ISC.** The response contains the information ISC needs to evaluate the sign-in.
4. **ISC checks the response and identifies the intended ISC user.** It must accept the authentication information and find the appropriate user under its configured matching rules.
5. **The successful sign-in establishes an ISC session.** ISC applies the user's permissions as they use its pages and functions.

```text
Browser opens ISC
        |
        v
Browser follows the IdP sign-in route
        |
        v
IdP authenticates or uses its session
        |
        v
Browser carries SAML response to ISC
        |
        v
ISC checks response and user mapping
        |
        v
ISC session for the intended user

Successful path with configured trust
and an existing matching identity.
```

This shows the logical exchange and its successful outcome. It isn't a list of every network message or ISC's private internal validation order.

The **frontend** is the part the person interacts with in the browser. The **backend** performs the service's processing behind those pages. The browser follows the sign-in route and carries the response; the IdP does its authentication work; ISC processes the response and establishes its session.

Reaching the IdP page proves that the browser reached that page. A successful IdP authentication establishes more, but ISC still has its own response checks and user matching to complete. An ISC session is the later result.

ISC doesn't need a copy of the IdP password for this exchange. The response supplies authentication information instead. Also, configuring this relationship for ISC doesn't automatically configure SSO for the support application. Each participating service needs its own supported arrangement.

## Understand what ISC must trust and whom it must match

There are two questions in accepting the response: “Can ISC accept this authentication information?” and “Which ISC user does it identify?”

Trust configuration answers the first. An **entity ID** identifies a participant in the SAML relationship. The IdP's login addresses tell the browser where the relevant sign-in interaction takes place. The IdP also needs the intended ISC service-provider information.

A **digital signature** lets a receiver check the sender's signing proof and whether signed information was altered. A **signing certificate** provides public-key information for checking that signature. The **public key** can be shared for verification; its corresponding **private key** must remain secret with its authorized owner.

The IdP uses its signing key to sign the required message. ISC uses its configured verification information to check it. Altered signed content fails the applicable signature check. This helps ISC distinguish acceptable authentication information from a message it must reject.

Changing a user's password doesn't repair incorrect signing configuration. If the signing setup changes, coordinate the relevant trust settings.

User matching answers the second question. An **identity attribute** is a named value on the ISC identity, such as email. The configured **identity mapping attribute** selects the ISC attribute used to identify the user from the sign-in information.

Suppose this setup uses email. The intended identity contains `person@corp.example`, and the IdP supplies `person@corp.example`. With the other checks satisfied, those values allow ISC to find the intended identity.

Now suppose the IdP supplies `person@old.example` instead. IdP authentication succeeds, but ISC explicitly reports that it cannot match the user. The problem demonstrated by those facts is the matching value or configuration. A password reset won't turn one email value into the other.

A **tenant** is the organization's environment within the hosted service. Check the intended tenant, selected attribute, actual values and reported error. A familiar-looking sign-in page or username doesn't prove that the response is for the intended environment.

Sign-in matching and account correlation both connect information, but they do different jobs. Sign-in matching identifies the person entering ISC. Account correlation associates an external account collected by ISC with its owner.

### What if ISC doesn't have the person yet?

**Just-in-time account creation**, or **JIT account creation**, is a separately configured arrangement that can create the relevant ISC account and identity when an eligible user first authenticates through the IdP.

That setup includes a JIT source, an identity profile and the required mappings and service-provider settings. An **identity profile** is configuration for identities established from a selected source, including relevant identity, sign-in and recovery settings.

JIT account creation isn't an automatic consequence of enabling SSO. It doesn't create accounts in every business application. It also differs from temporary access that is granted only when someone activates it.

In our existing-identity sign-in, JIT creation is off. A successful IdP login therefore doesn't automatically supply a missing ISC identity. Establish the intended identity and correct the responsible data or configuration; creating a duplicate can conceal the original mismatch.

## Follow the alternative directory-password route

A company can use HR information to establish who its employees are while using a directory to check their network passwords.

The HR source is then the **authoritative source** for establishing those ISC identities. A supported directory source selected to check credentials is the **authentication source**. The two responsibilities don't have to belong to the same system.

ISC supports different sign-in arrangements:

| Arrangement | Who checks the relevant proof? |
|---|---|
| Site username and password | ISC's supported site sign-in uses registered site credentials and applicable verification |
| Directory Connection | The configured authentication source checks the source-account credentials through its integration |
| External SSO | The IdP authenticates; ISC evaluates the response and identifies the intended ISC user |

These are alternatives. A person doesn't normally pass through all three in that order. Where SSO is configured, it takes precedence over Directory Connection for normal sign-in. An eligible direct sign-in route has its own conditions; it isn't an automatic fallback for every employee.

**Directory Connection** is also called **pass-through authentication**, or **PTA**. It allows the user to enter ISC using the credential for the configured authentication-source account.

Consider a separate setup using PTA. The directory supports the required authentication operation, has been configured as the profile's authentication source, and has already had its accounts aggregated. The relevant account is correctly associated with the identity.

Assume the person has one account on that source, `directory-user`. They supply that account's credential. The independent support-application password has no role in this check.

```text
User supplies directory credentials
        |
        v
Configured integration checks them
        |
        v
Authentication source returns result
        |
        v
Accepted plus required ISC checks
        |
        v
ISC session for the intended user

Separate PTA setup; this isn't another
step in the normal SAML sign-in.
```

Here, the source's authentication result is part of what enables the ISC session. The diagram doesn't prescribe one protocol or where the integration runs for every source.

Some integrations use a **Virtual Appliance**, or **VA**: a customer-deployed virtual machine that runs the applicable integration work. A **virtual machine** is a software-defined computer using resources from its host.

If this authentication source depends on a VA, that actual path must work. The external SAML exchange described earlier doesn't acquire a VA dependency simply because the company also uses VA-based sources.

If the directory can't be reached, the credential check cannot complete. The correct password won't restore an unavailable connection. Conversely, reaching the directory doesn't prove that a particular password will be accepted or that the account is allowed to sign in.

### Which directory account is checked?

With one `directory-user` account, the example supplies an unambiguous account. Multiple accounts require more care.

ISC's documented PTA behavior uses the first account it encountered for authentication. Don't substitute the first account displayed on a page or an account someone labels “preferred.”

**Provisioning** carries out account or access changes in a target system. An account selected for provisioning isn't automatically the one used for PTA. Authentication selection and change selection serve different work.

Treat a production authentication-source change as a sign-in change. SailPoint's guidance calls for consulting support and testing changes in a suitable nonproduction environment. Switching sources to investigate an unrelated password problem can prevent people from signing in.

## Locate the verification challenge before recovering it

**Multifactor authentication**, or **MFA**, uses proof from more than one factor category. A password is something you know; possession of a registered authenticator can supply a different factor.

The IdP can require its own MFA. ISC can require an external authenticator through identity-profile sign-in settings, and elevated users have additional requirements. Password recovery can require verification too. Although the person sees these challenges in a browser, different services or settings can control them.

A **time-based one-time password**, or **TOTP**, is a short-lived code generated using registered secret material and time. Registering an authenticator establishes what is needed to generate and verify those codes. It doesn't change a target application's password.

An **elevated user** has an ISC user level with access to the Admin menu. For elevated users entering through an IdP, ISC requires external-authenticator registration if it hasn't already been completed.

Once registered, normal IdP sign-ins don't require that additional ISC TOTP challenge. The documented direct route uses that TOTP check. Elevated users entering directly without prior registration must complete the supported account-unlock flow before setting up the authenticator.

That is why an initial registration prompt and a later sign-in challenge aren't the same event. SSO can remove a separate password prompt while leaving a registration responsibility.

If a person loses a device, identify which service's challenge they cannot complete. Recovering an IdP authenticator and resetting ISC MFA affect different registrations.

ISC's supported **MFA reset** clears the relevant ISC MFA setup so the user can register again. Resetting or deregistering the identity doesn't clear its MFA settings. Repeated password resets won't replace a lost authenticator either. Use the supported recovery for the actual failed check.

## Now change the support application's password

**Password Management** is ISC's capability for managing passwords on supported, configured sources. **Password Manager** is the user-facing view of available applications and password groups.

An **access application** is ISC configuration that groups relevant source access and exposes supported user functions. It isn't the external application itself, and its presence doesn't establish SSO trust.

Return to the forgotten support password. In this setup:

- The **Support-Production** source has a supported **direct connection**: an integration that can communicate with the target and perform the required password operation.
- The Support application is configured and visible to the intended user in Password Manager.
- `support-user` is the eligible existing target account whose password needs changing.
- The application checks its own password. It doesn't use the company IdP for this sign-in, share an account-source password with another application, or belong to a password sync group.

Those conditions tell us which account the operation can change and why the result won't automatically spread to other passwords.

### Establish the requirements before sending the change

A **password policy** defines applicable password requirements. ISC's policy also controls when extra verification is required for password updates. The identity profile provides the configured recovery methods.

A recovery option must be usable. An email link can't help if the selected address is inaccessible. A phone or authenticator method needs the corresponding usable information or registration. Showing an option on a page doesn't establish that the person can complete it.

The target also has password restrictions. ISC's applicable policy must be compatible with them. Passing ISC's checks doesn't force the target to accept a value that violates its own rules.

Now follow a successful operation. The person selects the intended application's password operation, supplies the required information and completes the required verification. ISC processes the change for the selected source account using the supported connector path.

In this example, `svc-support` is the integration account acting in the target system. It needs authority to perform the password operation on `support-user`. It is a different account from the person receiving the change, the IdP user and the ISC administrator.

The target accepts the operation's authority and password information, applies the change and returns its result.

```text
Select intended source and account
        |
        v
Complete required user verification
        |
        v
Satisfy applicable password policy
        |
        v
Connector sends supported operation
        |
        v
Target accepts and changes password
        |
        v
Engineer verifies intended result

Successful example; arrows connect
responsibilities, not every engine step.
```

The diagram gives a successful path. It doesn't promise delivery or specify the order of every internal validation. Its final line is the engineer checking the outcome, not a promise that ISC automatically performs a fresh login to the target.

Notice the two kinds of authority involved. The person must complete the required recovery verification. Separately, `svc-support` needs permission to change the target password. A completed recovery challenge doesn't grant that integration account extra privileges.

The same distinction explains why a successful connection test or account read is insufficient. Reading accounts and changing passwords are different operations. The connector must support the password operation and have the necessary target authority.

Under the standalone conditions above, the confirmed result changes `support-user`'s password. It doesn't change the IdP password, directory password, ISC user level or the support account's business permissions.

An **access request** asks for specified access for a recipient. A password reset doesn't create a missing account or add a missing entitlement. If the account doesn't exist, a different kind of work is needed.

## Understand why an account can be visible but its password cannot be managed

A **flat-file source** imports account records from a file. That supplies data ISC can represent; it doesn't provide a live interface for changing the external password. Flat-file sources aren't compatible with ISC Password Management.

Even a direct source needs support for the particular operation, appropriate configuration, eligible account scope, compatible policies and target authority.

An account page therefore answers a different question from a password-operation result. It can show what ISC collected about the account. It doesn't display the current password or prove that a later password change succeeded.

Password Manager isn't an inventory of readable passwords either. Investigate the supported operation and its outcome instead of expecting to find the new secret on the identity.

## Work out whether one password change affects other applications

There are two arrangements to distinguish.

**Applications sharing one source.** Passwords are managed per source. Two access applications can use the same account source and operate on the same underlying password. Two application tiles don't necessarily mean two independent password stores.

**Sources in a password sync group.** A **password sync group** connects supported direct-connect sources so an ISC-initiated password update can coordinate changes across them. Each source still has its own account and operation.

For a sync group, choose requirements compatible with every participating target. A group label doesn't make target restrictions disappear.

Also check which path is being used. In the documented PTA password-change path, failure of the applicable source password change prevents attempts on the other sources in the group. Outside that PTA path, a group can have partial results: one source changes while another fails.

Investigate those source-specific results. Don't infer that all passwords changed because one did, or that every completed change was rolled back because the group had a failure.

A configured authentication source that supports password-history checking can help validate a proposed password against its history. This doesn't mean aggregation exposes readable old passwords.

The direction of the change matters too. An ISC-initiated sync-group update doesn't establish that a password changed directly on an external website will propagate back through ISC. Such propagation requires its own supported design.

For PTA, changing the authentication-source password can change the credential used to enter ISC through that source. The person experiences a changed ISC sign-in password because ISC checks that source credential. This doesn't establish that two independent password stores were both updated.

SSO trust, a shared account source, a password sync group and matching usernames describe different relationships. Confirm the one actually configured before predicting an effect.

## Follow a recovery request through to its real result

An administrator can initiate recovery by sending the person a password-reset email. Sending the email begins the interaction. It doesn't establish that the person opened it, completed verification or changed a target password.

Check the configured scope before promising the result. PTA or password-group relationships can connect the eventual update to other credentials.

Useful investigation evidence includes the operation time, intended source and account, reported result, useful error detail and source-specific audit events. Keep passwords, recovery codes, private keys and sensitive authentication responses out of support notes.

An approved fresh authentication check can help confirm that the intended system accepts the new credential. An already-open application page can still be using a session created before the password changed.

Avoid repeated guesses. A **lockout** restricts authentication after configured failure conditions. ISC and the external authentication system have relevant rules; with PTA, lockout can affect the primary source account too. More attempts can worsen the original problem.

A **disabled account** has been administratively placed in a state that prevents its use. That differs from a failure-triggered lockout. ISC's password-reset feature isn't available for disabled accounts.

Resetting a password changes a credential. Unlocking addresses a lockout. Reenabling changes the disabled state. Resetting MFA clears the relevant MFA registration. A supported recovery flow can connect some of these tasks, but one result doesn't prove that all of them happened. Reenabling an account needs its own approved reason and process.

## Check sessions separately from passwords

The IdP, ISC and the support application can each maintain sessions. Returning to ISC might reuse an ISC session, or a new ISC sign-in might use an existing IdP session. Neither observation proves that a password was entered again.

ISC's **maximum session length** limits how long a session can remain active. Its **idle expiration** concerns inactivity. Changes to those settings apply after sign-out and sign-in rather than changing active sessions immediately.

A **session cookie** is information the browser keeps and sends back to help the service recognize its session. Retaining these cookies can let a browser resume a session. Closing a window isn't reliable evidence that all relevant sessions ended.

**SAML Single Logout**, or **SLO**, is a protocol mechanism for coordinating logout across participating services. ISC doesn't support SAML SLO. Redirecting the browser to another page after logout doesn't demonstrate that every IdP and business-application session was terminated.

A password change also doesn't prove that existing sessions or integration tokens were revoked. A **token** is a credential used under the receiving service's access rules. Its validity and supported revocation need their own checks.

During suspected compromise, recovering a password is only part of the work. The responsible team needs evidence about the affected sessions, credentials and access under each system's supported controls before concluding that the incident is contained.

An approved **emergency-access** arrangement provides a controlled way for authorized elevated users to enter when the normal IdP route is unavailable. ISC supports direct sign-in for eligible elevated users with the required authentication. Prepare the credentials and verification under the approved arrangement before an outage. This isn't a universal employee fallback.

## Work through the evidence

### 1. The IdP accepts the user, but ISC cannot match them

The configured ISC mapping uses email. The intended identity contains `person@corp.example`; the response contains `person@old.example`. IdP authentication succeeds, ISC explicitly reports a matching failure, and JIT creation is off.

Would resetting the password repair the demonstrated problem?

**Worked reasoning:** The authentication succeeded at the IdP. ISC then couldn't match the supplied value to the intended identity. Check the intended tenant, identity, selected attribute and approved mapping; correct the responsible data or configuration. A password reset doesn't align the values. A duplicate identity can hide the intended relationship.

### 2. Directory sign-in fails during a connection outage

In the separate PTA setup, the authentication source can't be reached. There is no result accepting or rejecting the password for `directory-user`.

Does this prove the password is wrong?

**Worked reasoning:** The source check didn't produce a credential decision. Investigate the integration path and source availability. A password reset doesn't restore that connection. Switching a production authentication source introduces a different sign-in change without repairing the demonstrated dependency.

### 3. ISC opens, but administration is unavailable

The person signs in successfully, but their assigned ISC user level doesn't permit administration. Someone proposes replacing the SAML signing certificate.

What needs attention?

**Worked reasoning:** The facts establish a signed-in user whose permissions don't include administration. Check the intended user level and approved authority. They don't establish a signing-trust failure. They also don't justify granting administration merely because the user can sign in.

### 4. The support password changes, but the IdP password doesn't

The operation changes `support-user`'s password successfully, confirmed by an approved fresh sign-in. The application checks its own password and is outside all shared-source and sync-group relationships.

Should the company IdP password also have changed?

**Worked reasoning:** The confirmed operation concerns the independent support account. Nothing in these conditions connects it to the IdP's password. Correlation or similar usernames don't supply that connection.

### 5. A password group has mixed results

A separate non-PTA sync group contains two supported sources. Audit evidence shows that one accepted its update while the other rejected it because of a target password restriction.

Did nothing change, or do both now have the new password?

**Worked reasoning:** Neither conclusion fits the supplied results. Reconcile each source and account outcome, investigate the incompatible requirement and use supported recovery. Don't assume rollback or repeat changes blindly. One success doesn't establish success for the group.

### 6. Recovery verification succeeds, but the target operation is denied

The person completes required verification. The integration account then receives an explicit permission denial for changing the support account's password. No target change is confirmed.

Would resetting the person's authenticator supply the missing authority?

**Worked reasoning:** Verification has already succeeded. The denial concerns the integration account's target authority for a different operation. Investigate the justified password-change privilege, then recover and verify the intended change. Resetting the user's authenticator doesn't grant that privilege.

### 7. An existing application tab still works

A password update is confirmed, but a tab already signed into the application remains usable. No fresh authentication or session-revocation result is supplied.

Does the old tab prove that the update failed?

**Worked reasoning:** It may be using its earlier session rather than checking the password again. Follow the approved checks for fresh authentication and session handling. The tab alone establishes neither a failed reset nor complete incident containment.

## Review a purchasing-application proposal

A team says, “People already enter ISC through the company IdP. Once we aggregate purchasing accounts, ISC should know their passwords, let everyone reset them and sign them straight into purchasing.”

How would you examine the proposal?

**Worked reasoning:** Start with how purchasing authenticates users and which existing accounts belong to them. Aggregation supplies represented account data; it doesn't reveal current passwords or establish SSO trust.

For ISC password management, establish the supported source operation, intended account scope, visible access-application configuration, usable verification, compatible policies and target authority. Imported accounts alone don't provide those capabilities.

For purchasing SSO, establish that application's own supported IdP trust and permitted-user arrangement. Its business permissions still need an appropriate access design.

For coordinated password changes, establish a real shared account source or a supported password sync group. Existing ISC SSO and matching usernames don't create either one.

Try explaining the actual journey: which service the person wants to enter, who checks their proof, how ISC identifies the person, which account a password operation changes, and what evidence confirms the intended result.
