# Signing into ISC and changing a password: which system is doing the work?

A person can open SailPoint Identity Security Cloud (ISC) through the company's sign-in service. They have forgotten the password for a separate support application.

Would resetting their ISC password restore the application login?

That depends on which system checks the forgotten credential. In this example, the support application checks its own password. The company sign-in service authenticates the person into ISC. Those are separate relationships.

Start by identifying the service the person is trying to enter and the account whose credential needs attention. A correct change to the wrong password won't solve the problem.

## One person can have several accounts without sharing a password

An **identity** is ISC's person-level record. An **account** is a record within a particular system. ISC keeps representations of external accounts so it can relate them to the person and manage supported work.

A **source** is ISC's configured representation of a connection or collection of account data. A **connector** is the integration software used to read information and perform supported operations. The external system it communicates with is the **target**.

For the situation above, separate these records:

| Record or system | Its purpose in this example |
|---|---|
| HR account | Supplies employee information used to establish the ISC identity |
| Corporate directory account | Holds a network credential that a directory sign-in arrangement could check |
| Company sign-in service's user | Authenticates the person on the configured external sign-in route |
| ISC identity and sign-in information | Represent the person within ISC and support the configured ISC sign-in relationship |
| Support application account, `support-user` | Uses the support application's independent password |

Assume the necessary accounts already exist and ISC associates their represented records with the correct identity.

That association is **account correlation**. It connects an account record to its represented owner. It doesn't connect the accounts' password stores.

**Aggregation** collects account information and access items, called **entitlements**, into ISC. Importing an account establishes represented data within the collection's scope. It doesn't make the person's current password readable on the identity page.

The same username in two systems also doesn't establish that their passwords are shared. The configured authentication and password-management relationships determine that.

## Authentication answers a different question from permission

A **credential** is information used to establish an accepted identity or access context. A password is one kind.

**Authentication** checks the required proof to establish that context. **Authorization** determines what the authenticated user may do.

After sign-in, a **session** lets the browser continue interacting as the signed-in user under the service's rules. The service doesn't have to repeat the complete sign-in interaction for each page.

An ISC **user level** sets an applicable boundary around the person's platform permissions. A person can authenticate successfully while lacking administration permissions.

The support application has its own permission checks too. Entering the application doesn't establish that the account may edit every case.

When someone says “access works,” ask what they actually tested: authentication, opening a permitted page, or completing the required action. Each observation has a different scope.

## Follow the company sign-in route into ISC

**Single sign-on**, or **SSO**, lets participating services rely on an established authentication arrangement instead of each independently asking for a separate password.

An **identity provider**, or **IdP**, authenticates the user and supplies an authentication result to a service that trusts it. ISC is the **service provider**, or **SP**, in this relationship: it provides the service being entered.

**Federation** is the trust arrangement allowing one service to accept authentication performed by another.

For ISC's documented SAML integration, **SAML**, Security Assertion Markup Language, is the standard used to exchange the result. A SAML **assertion** is a structured statement about the authenticated user and relevant authentication context. It isn't a copy of their password.

Assume the company's IdP and ISC trust are configured correctly, the person is permitted to use the integration, and matching ISC identity information already exists. Automatic creation of a missing ISC identity isn't enabled in this example.

The person opens ISC's sign-in address. The configured route sends their browser to the IdP. The IdP performs its required authentication or uses an applicable existing IdP session.

Its authentication response returns through the browser to ISC. ISC must accept the response under the configured trust and associate its identity information with the intended ISC user. This successful route then establishes an ISC session.

```text
Browser opens ISC
        |
        v
Configured IdP authenticates user
        |
        v
SAML response returns via browser
        |
        v
ISC accepts trust and user mapping
        |
        v
ISC session for the intended user

Successful sign-in, not password sync.
```

The arrows show the successful logical exchange. They don't show every network interaction or prescribe ISC's private validation sequence.

The **frontend** is the page and browser interaction the person sees. The **backend** is the hosted processing behind it. The IdP does its authentication work; ISC handles acceptance, user matching and its session under the configured arrangement.

Reaching the IdP page establishes only that the browser reached it. An IdP success record establishes that provider's authentication result. An accepted ISC session establishes a further outcome.

ISC doesn't receive the IdP password through this SAML sign-in. The exchange also doesn't copy that password into `support-user` or configure the support application's own SSO integration.

## A trusted response still needs to identify the right ISC user

Two questions matter: does ISC accept the authentication response, and which ISC user does the response identify?

An **entity ID** identifies a participant in the SAML arrangement. The configured login address tells the browser where to send the relevant interaction. The IdP also needs the intended service-provider information.

A **signing certificate** supplies public-key information used to verify the expected signing identity. A **public key** is the shareable part of that cryptographic arrangement; the corresponding **private key** remains secret with its authorized owner.

The IdP uses its signing key for the required signed message. ISC uses the configured verification information to check the signature. Altered signed content won't pass that check. This protects a different boundary from asking the user for a password.

If signing configuration changes, the relevant trust settings need coordinated updates. A user password reset doesn't repair a signing-trust failure.

An **identity attribute** is a named value on the ISC identity, such as email. The **identity mapping attribute** selects the ISC value used to match the authenticated sign-in information.

Suppose this setup matches against ISC email. The intended identity contains `person@corp.example`. The IdP sends that same intended value, and the other acceptance conditions are satisfied. The sign-in can resolve to the correct existing user.

Now change just the supplied value to `person@old.example`. An explicit user-matching failure after successful IdP authentication points to the mapping or data, rather than proving the password is incorrect.

A **tenant** is the organization's environment within the hosted service. Check the selected attribute, actual values, intended tenant and reported error; familiar names don't establish that the response targets the correct environment.

Sign-in mapping and account correlation have different purposes. Mapping identifies the user entering ISC. Correlation associates a collected external account with its owner.

**Just-in-time account creation**, or **JIT creation**, is a separately configured sign-in arrangement for creating the relevant ISC account and identity when an eligible user first authenticates. It isn't implied by SSO, doesn't create every business-application account, and differs from activating temporary access.

Without that configured arrangement, a missing ISC identity isn't automatically supplied by a successful IdP login. Resolve the intended identity and configuration rather than creating a duplicate to hide a mismatch.

## ISC can check a directory credential through another arrangement

SSO is one supported route. It isn't the only one.

An **authoritative source** supplies the accounts used to establish ISC identities. An **identity profile** is configuration associated with identities established from that source. Its responsibilities include relevant sign-in and recovery settings.

An **authentication source** is a configured supported source used to check credentials for directory-based ISC sign-in.

HR can supply who the person is while the corporate directory checks their network password. Those roles don't have to belong to the same source.

These arrangements have different credential checks:

| Arrangement | Relevant authentication |
|---|---|
| Site username and password | ISC's supported site sign-in using registered site credentials and applicable verification |
| Directory Connection | The configured supported source checks the relevant source-account credentials through its integration |
| External SSO | The IdP authenticates; ISC accepts the resulting response and user mapping |

They are alternatives, not three consecutive checks every user must complete. With SSO configured, normal SSO sign-in takes precedence over Directory Connection. A supported direct sign-in route has its own eligibility and authentication conditions.

**Directory Connection** is also called **pass-through authentication**, or **PTA**. It lets the user enter ISC using the configured source-account credential.

Consider a separate PTA setup. The directory source supports authentication, its accounts have already been aggregated, and the relevant account is correctly associated with the identity. The identity profile selects that source for authentication.

Assume the person has one account on that source, `directory-user`. They supply its password, rather than the independent support-application password.

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

An alternative to the normal SSO path.
```

The arrows represent the configured credential check and the successful result, including the other required ISC checks. They don't describe a universal connector protocol or claim every sign-in follows this path.

A **Virtual Appliance**, or **VA**, is a customer-deployed virtual machine used for applicable integrations. A **virtual machine** is a software-defined computer using its host's resources. A VA-based authentication source needs its actual integration path to work. The external SAML exchange doesn't thereby require the same VA path.

If the source can't be reached, ISC can't complete that source check. Knowing the correct password doesn't repair the unavailable connection. Conversely, a reachable source doesn't establish that a supplied password or account state will be accepted.

**Provisioning** carries out account or access changes. Its selected account isn't automatically the account used for authentication.

Multiple accounts need care. The documented PTA behaviour uses the first account ISC encountered for authentication. Don't infer that selection from display order, a preferred account label or the account chosen for a change.

Changing a production authentication source can disrupt sign-in. Follow the supported, tested change process and consult support as required, rather than switching it to investigate an unrelated password problem.

## Identify which verification the person cannot complete

**Multifactor authentication**, or **MFA**, uses proof from more than one factor category, such as a password and possession of a registered authenticator.

The IdP's authentication policy, ISC sign-in verification and verification for password recovery are separate configurations. Completing one doesn't establish the others.

A **time-based one-time password**, or **TOTP**, is a short-lived code generated from registered secret material and time. Registering the authenticator establishes what's needed for that check. It doesn't change an application's password.

An **elevated user** has a user level with access to the Admin menu. ISC supports authenticator requirements through identity-profile settings and requirements for elevated users. For elevated users signing in through an IdP, the documented flow requires authenticator registration if not already completed. After registration, normal IdP sign-ins don't require that additional ISC TOTP challenge; the direct route uses it under the documented conditions.

SSO therefore doesn't remove every registration responsibility. Nor should you diagnose every IdP challenge as an ISC authenticator problem.

If a device is lost, first locate the challenge that cannot be completed. An IdP MFA recovery and an ISC MFA reset affect different registrations. Resetting or deregistering an ISC identity doesn't clear its MFA settings; the supported MFA reset is a separate operation.

Use the relevant supported recovery operation. Repeated password changes won't replace a lost authenticator, and removing verification isn't a repair for its missing registration.

## Return to the application password that was forgotten

**Password Management** lets ISC carry out password changes for supported, configured sources. **Password Manager** is the user-facing view of the available applications and password groups.

An **access application** is ISC configuration grouping relevant source access and exposing supported user functions. It isn't the external application itself or an SSO trust.

Suppose the **Support-Production** source has a supported **direct connection**, a configured integration capable of the required password operation. The Support application is configured and visible to the intended user in Password Manager.

Assume `support-user` is the eligible existing target account. This application checks its own password, isn't using the company IdP for that sign-in, and isn't part of a shared-password or sync-group arrangement.

A **password policy** defines applicable password requirements. ISC's policy also controls when configured additional verification is required for password updates. Recovery methods are configured on the identity profile and need usable registered information.

The person must be able to complete the required verification. An offered method with an unusable email address, phone number or registration doesn't establish a workable recovery path.

The target has its own password restrictions as well. ISC's applicable policy needs to be compatible with those requirements; passing one set of checks doesn't override the other.

Now follow the successful change. The person selects the intended application's password operation, supplies the required information and completes its verification. ISC processes the supported change for the intended source account.

The relevant provisioning work requests a password change through the connector's configured path and authority.

The external integration actor `svc-support` performs the applicable target operation. It is separate from `support-user`, the IdP user and the ISC administrator.

The target accepts the required authority and password information, applies the change and returns the operation result.

```text
Select intended source/account
        |
        v
Complete required verification
        |
        v
Applicable password-policy checks
        |
        v
Supported connector password operation
        |
        v
Target checks and applies change
        |
        v
Verify intended account result

Successful example; verify each result.
```

The arrows trace the successful example's responsibilities and required conditions. They don't specify every internal validation order or guarantee delivery. The final line is the engineer's verification, not an automatic fresh target login promised by ISC.

A completed recovery challenge establishes the verification stage. It doesn't grant `svc-support` the target authority to change passwords.

Likewise, a successful connection test or account read doesn't prove that the connector supports or is permitted to perform this password operation.

The confirmed change concerns the selected account. Under this standalone setup, it doesn't change the IdP password, directory password, ISC user level or support-application permissions.

An **access request** asks for particular access for a recipient. Resetting a password doesn't create a missing account or supply a missing entitlement.

## An imported account isn't a working password connection

A **flat-file source** receives imported account records. That import isn't a live password-change interface.

Flat-file sources aren't compatible with ISC Password Management. Aggregating support accounts from a file wouldn't supply the missing connector operation.

Even a direct connection needs applicable operation support, configuration, policy, account scope and external authority. Being able to display the account doesn't settle those conditions.

Password Manager isn't a readable inventory of current passwords. Use supported result and authentication evidence rather than looking for the new secret on an identity page.

## Two application tiles can lead to the same password

Passwords are managed per source. Two access applications can refer to the same account source and operate on the same underlying source password.

That is one explanation for applications appearing together in Password Manager. Two tiles don't necessarily mean two separate password stores.

A **password sync group** creates a different relationship: it groups supported direct-connect sources so configured password changes can propagate across them.

For example, a group can involve two distinct sources, each with its own account and password operation. A submitted group update needs the applicable source operations to succeed; it isn't simply another name for one shared source.

Neither grouping establishes SAML trust. Conversely, configuring SSO or matching usernames doesn't create password synchronization.

The group's policy must fit its participating targets. In the documented PTA password-change path, failure of the applicable source password change prevents attempts on the other sources in the group. A non-PTA group can have mixed outcomes, with one source changed and another failed.

Those conditions matter when recovering work. Don't report group-wide success from one successful source or assume every failed group update rolled back completed changes.

Password-history checking can use a configured authentication source that supports it. That source can validate a proposed password against its history; aggregation doesn't provide a readable history of everyone's passwords.

Also identify where the change began. A supported ISC-initiated group update isn't evidence that a password changed directly on an external website will propagate back through ISC. A separate synchronization mechanism needs its own supported design.

For PTA, a supported change to the authentication-source password affects the credential used for directory-based ISC sign-in. This doesn't establish that two independent stores, a separate ISC password and a directory password, were both updated.

## Follow the result beyond the reset message

An administrator can initiate password recovery by sending reset instructions. That establishes that the recovery interaction was started, not that the person followed it or a target password changed.

The configured reset can interact with PTA and password groups. Establish its actual scope before promising which credentials will change.

For investigation, retain the operation time, intended source/account, reported result and useful error detail. Source-specific audit evidence can identify failed updates. Keep passwords, recovery codes, private keys and sensitive authentication responses out of support notes.

A collected account page shows represented data from a read. It doesn't display the current password or independently confirm a later password update.

An approved fresh authentication check can help establish whether the intended system accepts the new credential. An already-open application page can be using a session established before the change.

Avoid repeated guesses. A **lockout** restricts authentication after applicable failure conditions. ISC and the external authentication system have their own relevant rules; PTA can connect the effects on the primary account.

An account **disabled** by administration has a different state from an account locked by failed attempts. ISC's documented password-reset feature isn't available for disabled accounts.

Reset, unlock, reenable and MFA reset perform different work, even where a supported recovery flow connects them. Reenabling an account needs its own approved reason and process.

## A password result doesn't answer every session question

The IdP, ISC and support application can each maintain sessions. Returning to ISC can reuse an ISC session or cause authentication through an existing IdP session. Neither observation proves that the person entered a password again.

ISC has maximum and idle-session settings. Maximum duration limits how long a session can remain active; idle duration concerns inactivity. Browser retention can also affect whether a session resumes.

Closing a window isn't reliable evidence that every session ended. Changing session configuration also doesn't establish that it was immediately applied to existing sessions.

**SAML Single Logout**, or **SLO**, is the protocol mechanism for coordinating logout across participating services. ISC doesn't support SAML SLO. A logout redirect doesn't prove that every IdP or business-application session was terminated.

Similarly, a confirmed password update doesn't establish revocation of every existing session or integration token. A **token** is a credential used under a service's access rules; its validity and revocation need their own evidence.

This matters during suspected compromise. Password recovery alone doesn't establish containment. The responsible team must verify the affected sessions, credentials and access under the relevant systems' supported controls.

An approved **emergency-access** arrangement provides a controlled route for authorized elevated users when the normal IdP route is unavailable. ISC documents direct sign-in for eligible elevated users, with its required authentication.

That route isn't a universal employee bypass. Its credentials and verification must be prepared under the approved arrangement before an outage makes them necessary.

## Work through the evidence

Each case supplies a separate situation.

### 1. The IdP accepts the user, but ISC cannot match them

The IdP records successful authentication. ISC's configured mapping uses email, whose intended value is `person@corp.example`. The response contains `person@old.example`, and ISC explicitly reports a matching failure. JIT creation is off.

Would a password reset correct the demonstrated problem?

**Worked reasoning:** The supplied evidence identifies a mismatch after IdP authentication. Check the intended identity and approved mapping, then correct the responsible data or configuration. Resetting a credential doesn't align those values. Creating another identity would obscure the intended relationship.

### 2. Directory sign-in fails during a connection outage

In the separate PTA setup, the configured source can't be reached. There is no result establishing whether the supplied password for `directory-user` was accepted or rejected.

Does this establish an incorrect password?

**Worked reasoning:** No. Investigate the configured authentication integration and source availability. The credential check didn't produce the required decision. Resetting the password or switching the production authentication source doesn't repair the demonstrated connection dependency.

### 3. ISC opens, but administration is unavailable

A person authenticates successfully and enters ISC. Their assigned user level doesn't permit administration. Someone proposes replacing the SAML signing certificate.

Which condition needs attention?

**Worked reasoning:** The supplied facts establish a signed-in user with limited authority. Check the intended user level and approved authorization. Repairing trust isn't justified as the cause of this missing permission, and successful sign-in doesn't justify granting administration.

### 4. The standalone application changes, but another password doesn't

The supported operation reports a successful change for `support-user`, confirmed by an approved fresh sign-in. The application uses its own authentication and is outside every shared-password and sync-group relationship.

Should the company IdP password also have changed?

**Worked reasoning:** No. The configuration and target evidence concern the standalone account. Correlation and similar user labels don't create a password-sharing relationship.

### 5. A password group has mixed results

A separate non-PTA sync group contains two supported sources. Audit evidence establishes that one accepted its update and the other rejected it because of a target policy restriction.

Did nothing change, or do both now have the new password?

**Worked reasoning:** Neither statement fits. Reconcile the per-account outcomes, investigate the incompatible requirement and use supported recovery. Don't infer rollback or repeat changes blindly. The first success isn't proof of group-wide success.

### 6. Recovery verification succeeds, but the target operation is denied

The user completes required verification. The external integration actor then receives an explicit permission denial for the support-account password change. No target change is confirmed.

Would resetting the user's authenticator supply the missing authority?

**Worked reasoning:** No. The supplied verification stage succeeded. Investigate the integration actor's justified password-operation privilege, then recover and verify the intended account change. User verification and connector authority are different conditions.

### 7. An existing application tab still works

A password update is confirmed. A tab already signed into the application remains usable. No fresh authentication or session-revocation result is supplied.

Does the old tab prove the password update failed?

**Worked reasoning:** No. It can be using an existing session. Check fresh authentication and supported session handling through the approved procedure. The tab alone establishes neither a failed reset nor complete incident containment.

## Review a purchasing-application proposal

A team says, “People already enter ISC through the company IdP. Once we aggregate purchasing accounts, ISC should know their passwords, let everyone reset them and sign them straight into purchasing.”

What relationships must the team establish?

**Worked reasoning:** Aggregation supplies represented account data. It doesn't reveal current passwords or create an authentication trust.

Identify how purchasing authenticates users and which accounts belong to them. If ISC will manage passwords, establish a supported source operation, intended account scope, visible access-application configuration, usable verification, compatible policies and target authority.

If purchasing should use SSO, establish its own supported IdP trust and permitted-user arrangement. Its business permissions still need an appropriate access design.

If coordinated password changes are intended, identify a real shared account source or supported sync group. Matching usernames and existing ISC SSO aren't evidence of either.

Explain the flow in terms of the actual work: which service the user enters, who checks the proof, how ISC identifies the person, which account a password operation changes, and what evidence confirms the intended result.
