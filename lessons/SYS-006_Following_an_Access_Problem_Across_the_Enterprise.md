# Follow the access problem across the systems

An employee moves into Finance. They can sign in to the reporting application, but they cannot open the Finance reports they need.

Human Resources, or **HR**, confirms that the transfer is complete. The team managing workplace accounts confirms that the employee's account is enabled. The administrator of SailPoint Identity Security Cloud, or **ISC**, says the reporting connection works.

ISC is a cloud service for managing identities and access across systems. A working connection helps it communicate with a system. It does not explain whether this employee received the required report access.

First, make the missing result specific.

A **permission** allows an action on a resource. Here, the action is viewing, and the resource is the Finance report collection. The approved requirement gives active Finance employees viewing access, without editing or exporting financial data.

The application owner checks the employee's reporting account. It is enabled and can sign in, but it lacks the viewing permission. There is no alternative grant that permits this operation. Editing and exporting are also unavailable.

We now know more than “reporting does not work.” We know which action is denied, which account is involved and which permission is missing.

The remaining question is how the department change was supposed to lead to that permission. Let's follow the information and decisions connecting them.

## Keep track of the person and the separate records

An **account** is a record used by a person or service in a particular system. The reporting account has its own identifier, enabled status and permissions.

ISC keeps a person-level record called an **identity**. It connects the person's information with accounts and access across systems. It is not the reporting application's account.

The same employee therefore appears in several records.

HR holds the employment record. A **directory** stores workplace accounts and related information that other systems can use. The reporting application holds its own account. ISC holds collected account information, the identity and the configuration used to manage access.

Suppose HR says department Finance while the directory says Operations. Those are separately stored values. Updating the HR record does not, by itself, replace the directory's value.

Before comparing them, establish that they belong to the same person.

An employee identifier distinguishes the employee under the organization's rules. An account identifier, together with its system context, identifies a particular account.

A shared display name is not enough. Two people can share a name, and the same person's account names can differ across systems.

For our main investigation, those relationships have been verified. The ISC identity exists, the relevant accounts belong to that person, and the employee is using the one suitable, enabled reporting account.

This means the supplied problem concerns the intended person and the account actually being used for reports. In real work, those relationships still need evidence before you rely on them.

## Check what information reached ISC

ISC represents the HR, directory and reporting account data through configured **sources**. A source represents a system or collection of account data being managed.

The **connector** provides the integration used to read that data and perform supported, configured changes. The source is the representation inside ISC; the reporting application is where the person opens reports.

Reading source account information into ISC is **account aggregation**.

For example, the current HR record might already contain Finance while ISC still holds an earlier observation containing Operations. The employment change and its collection are different events.

Aggregation tells us what information ISC obtained within that operation's scope. It does not promise that every account was included or that the displayed information remains current forever.

The collected account also needs to be associated with the right identity.

**Account correlation** matches and associates a source account with an ISC identity. Configured matching can compare a selected account value with a corresponding identity value.

That relationship answers whose account ISC is representing. It does not copy every account value into the identity automatically.

So we have two separate questions: did ISC obtain the new HR information, and what instruction determines the value used on the identity?

## Follow the department value into the identity

An **attribute** is a named field on a record. Department on the HR account, department on the directory account and department on the ISC identity are different attributes on different records.

The common name does not make them one shared field.

The identity needs a department value. A **mapping** tells ISC where that output value comes from, using a selected input or a calculation.

A mapping that selects HR department can produce a different result from one that selects directory department. Both inputs may be available at the same time.

For this employee population, the approved design says HR supplies employment department.

Now compare the actual information. The transfer took effect at 08:00. These are hypothetical observations on the same day in the same time zone, not a promised processing interval.

| Record or configuration | What we find |
|---|---|
| Current HR employment record | Department FIN; employment status ACTIVE |
| HR account collected into ISC at 08:10 | Department FIN; employment status ACTIVE |
| Current directory account | Department OPS |
| Directory account collected into ISC at 08:15 | Department OPS |
| Identity department mapping | Select department from the associated directory account |
| Identity employment-status mapping | Select employment status from HR |
| Current ISC identity after applicable processing | Department OPS; employment status ACTIVE |

**FIN** means Finance. **OPS** means Operations. **ACTIVE** describes active employment in this example.

That employment-status value is not the reporting account's enabled status. It also does not establish that an identity is eligible for every ISC processing operation. Those are separate conditions; the relevant processing has run for this identity in our supplied case.

Let's follow only department.

HR's FIN reached ISC at the collected HR account. The directory's OPS also reached ISC. The mapping selects the directory value, so the identity receives OPS.

Nothing in that instruction says “use whichever account has the newest department” or “use HR because it exists.” The selected input controls the result in this configuration.

This explains why another collection of unchanged HR data would not fix the selection. It could obtain FIN again, but the mapping would still read the directory's OPS.

The directory's older value may need its own follow-up. It is not a reason to leave the identity mapping in conflict with the approved HR-input design.

### Where is this selection configured?

An **identity profile** holds shared configuration for a population of identities, including their identity-attribute mappings.

It is associated with an **authoritative source**, whose accounts establish that identity population. HR establishes the employee population here.

Establishing the population and supplying every attribute are different jobs. The profile could use HR for employment facts and a directory for an email address.

Calling HR authoritative therefore does not answer where identity department comes from. Inspect the actual mapping.

Selecting directory department is wrong in this case because the approved design selects HR. It is not inherently wrong for every organization or every attribute.

## Connect the identity value to the required access

A department value is information. It is not a report permission.

A **role** groups access for a business responsibility or population. Its automatic assignment configuration determines which identities qualify through that path.

**Assignment criteria** are the conditions used to decide who qualifies.

Our enabled role, “Finance Reports,” uses these complete conditions:

```text
Identity department equals FIN
AND
Identity employment status equals ACTIVE
```

AND means both conditions must be true. An active employee outside Finance does not qualify through this rule.

The first condition reads **identity department**. FIN on the collected HR account cannot satisfy a comparison whose actual input is the identity's OPS.

Evaluate the two conditions with the values already found:

- Department OPS equals FIN: false.
- Employment status ACTIVE equals ACTIVE: true.
- False AND true: false.

The condition does not qualify this identity for the role.

Assigning the role would associate its access requirements with the identity. Here, the role was not already assigned, and this automatic path does not newly assign it. It therefore does not generate the expected new grant.

That is different from an attempted account update being rejected. We have not reached the qualifying decision that would require this new addition.

These comparisons explain the supplied configuration and values. They do not claim that ISC exposes a separate log entry for every condition.

### What access would a qualifying identity receive?

ISC represents source access rights as **entitlements**. The report-viewing permission is represented as an entitlement from the reporting source.

An **access profile** bundles related entitlements from one source. The profile “Finance report viewing” contains the viewing entitlement, and Finance Reports includes that profile.

The role's criteria decide who qualifies. Its contents specify what access is required. The application determines what the permission allows.

For this example, the viewing right permits opening the Finance report collection. It does not permit editing or exporting. It is an ordinary held permission, with no separate activation needed after delivery.

This is one chosen role design. Other supported role criteria can read source account attributes or entitlements. Other roles can contain entitlements directly. Inspect the actual input types and contents rather than assuming every role follows this arrangement.

## What would turn a matching condition into a usable permission?

**Identity processing** evaluates identity information and applicable access configuration. It applies identity mappings and evaluates role eligibility as part of that work.

When this path assigns the role, its required access can initiate **provisioning**, which makes supported account or access changes.

The **target system** is the system receiving the operation. Here, it is the reporting application, and the operation adds the viewing permission to the employee's existing reporting account.

A **technical account** is an account the integration uses to perform work in the target. The employee's **recipient account** receives the permission. Authority to update that account belongs to the integration actor; permission to view reports belongs to the recipient.

Some connectors use another supported authentication mechanism instead of a dedicated technical account. The requirement for authority to perform the update still applies.

The person and account are correctly associated. The necessary ISC services are enabled, the role and profile are correctly configured, and the connector supports the addition. Provisioning is enabled, connectivity works and the integration has the authority needed for the successful delivery described later.

The viewing permission is initially absent, and no other grant path supplies it.

A qualifying identity would therefore create a requirement that still needs delivery. The application must accept and apply the change. Its own permission rules then determine whether the report can be opened.

In our starting state, the input selection prevents the qualifying decision. The working reporting connection cannot compensate for that earlier mismatch.

## Put the connections beside one another

The current collected department inputs, the selected identity value and the access decision connect like this:

```text
COLLECTED INPUTS
HR department: FIN
Directory department: OPS
          |
Department mapping selects directory
          |
Identity department: OPS
Identity employment status: ACTIVE
          |
Role requires FIN AND ACTIVE
    /                    \
  no                     yes
   |                      |
No new grant         Role assigned
from this path            |
                  Profile viewing right
                          |
                     Provisioning
                  rejected -> inspect
                  applied
                          |
                  Target holds right
                          |
                  Check intended use

OBSERVE SEPARATELY
Reporting account -> collection -> ISC

Investigators compare each connection.
```

The mapping has both collected inputs available and selects the directory input. The employment-status input comes from HR.

The displayed OPS leads to the no branch. Correcting and applying the department mapping can supply FIN, allowing the same condition to take the yes branch.

The yes branch needs the role contents, supported delivery, target acceptance and application permission rule. A matching comparison alone does not establish usable access.

The separate observation line reads the reporting account back into ISC. It does not perform the grant or test report viewing.

The arrows show these example dependencies. They are not a private ISC service map, fixed processing sequence or guarantee of immediate readback. A real connector can have additional execution and network dependencies.

The investigator supplies the comparison between required and observed results. Drawing the map does not automatically diagnose or correct the systems.

## Explain the cause from the evidence

When the report problem first arrives, you do not yet know that the mapping is wrong.

You can investigate backward from the denied application action: which account, which report, which missing permission and which expected grant path?

You can also start with the transfer: which HR value changed, what reached ISC, which mapping selected it and which rule used the output?

Either direction can work. The result needs to connect the same person, records and operation.

For the supplied case, the application confirms the missing viewing right and its corresponding denial. The account association is verified. The approved access design identifies the automatic role as the expected path.

The role reads identity department and employment status. Those values do not qualify. The mapping explains why the identity has OPS despite collected HR FIN being available.

You can now give a cause another engineer can inspect:

> HR's FIN value reached ISC. The identity department mapping selects directory OPS instead. The Finance Reports criteria do not match, so this automatic path has not generated the expected new grant. The reporting account lacks the viewing permission, which explains the application's denial under the supplied rule.

The rule is comparing the input it was configured to read. The defect is the mapping's disagreement with the approved input design.

An empty activity search would not establish that explanation on its own. The query might exclude the relevant work, the history might be unavailable, processing might not have run or another grant path might apply.

Here, the conclusion comes from the values, configuration, confirmed evaluation conditions and application evidence together.

## Correct the selected input without changing who should qualify

Changing HR back to OPS would damage correct employment information. Resetting the employee's password would not redirect the mapping. Repeating collection would still leave the same selection.

Changing the role to include every active employee would alter the approved policy. Active Operations employees would then qualify too.

The lasting correction for the demonstrated fault is to select the approved HR input for identity department.

Before applying it, assess the shared configuration.

Imagine another employee whose directory says FIN while HR says OPS. Switching the mapping to HR can change that person's identity department in the opposite direction.

Their access eligibility may change too. That might be the intended result, but it must be understood rather than discovered accidentally.

A **dependency** is something that relies on another value or capability. The role depends on the mapped department value. Other access conditions, calculations or configured automation may depend on it as well.

Find those uses and the affected population. Consider both people who should newly qualify and people whose existing access could change. Preserve the original evidence before the corrected state replaces it.

A **mapping preview** lets you inspect the proposed identity value for selected identities. It helps check the selection. It does not execute every later target change or verify the final report permission.

If urgent work needs a temporary grant, use a separately authorized arrangement with a defined recipient, scope, tracking and removal plan. That grant does not correct the shared mapping. Include its presence when explaining later results.

## Follow the correction through to the report

After assessment and authorization, the engineer changes the mapping to select HR department and applies the required processing through the supported procedure.

Saving the selection and applying its result are different events. Check the current identity value and relevant processing, rather than treating the saved configuration screen as the completed outcome.

For this hypothetical continuation, the identity is eligible for the applicable processing, which evaluates the current mappings and role configuration.

The results are:

| Evidence | What we establish |
|---|---|
| Current applied identity values | Department FIN; employment status ACTIVE |
| Role assignment | Both conditions now match, and Finance Reports is assigned |
| Required access | The included profile requires the viewing permission |
| Provisioning result | The supported addition reports success for the intended account |
| Current target account | The viewing permission is present |
| Controlled application use | The same account can open the intended Finance reports |
| Access boundary | The change has not added edit/export permissions; controlled checks keep those actions denied |
| Later reporting collection | ISC's account observation reflects the added permission |

The two conditions now pass because FIN equals FIN and ACTIVE equals ACTIVE. That explains the new qualification.

The later evidence establishes delivery and use. Identity-processing completion alone would not validate successful provisioning. A reported successful addition also does not replace checking the current target and the intended action.

Use authorized checks with non-sensitive reports. The supplied application checks current permissions for the operation, and the viewing right is sufficient for this collection. There is no future start, activation wait or extra application condition in this successful path.

These observations are supplied outcomes, not fixed timings or mandatory separate screens. The later collection is an observed event in the example, not an automatic round trip after every write.

### Why can the directory still say OPS?

The mapping changed where identity department gets its value. It did not write department back to the directory.

**Attribute synchronization** is a separate configured mechanism that writes selected identity values to corresponding account attributes through supported provisioning.

It works on existing, correctly associated accounts under its applicable mappings and configuration. Having a collected account and an identity value does not automatically enable that write.

If the organization also wants identity department written to the directory, establish the supported synchronization design and verify its target result.

Collecting an input, choosing it for the identity, using the output for role eligibility and writing a value to another account are different operations.

## Keep report permission separate from sign-in

**Authentication** verifies the claimed identity during sign-in using the configured checks. **Authorization** decides whether an actor may perform an action on a resource.

The employee's working sign-in establishes successful entry under that sign-in arrangement. The report-viewing action still needs its own authorization decision.

The **front end** is the page and controls the person sees. The **back end** is the trusted application processing that handles protected requests.

A missing report tile can be a clue. Hiding the tile alone does not secure the report; the back end needs to enforce access when the report is requested.

An **identity provider** is a service the application trusts for sign-in checks. The application must also identify which of its own accounts that sign-in represents.

That account selection is different from ISC account correlation. One connects a sign-in to an application account. The other connects collected accounts to an ISC identity.

A **session** is the application's continuing signed-in context. Establish which account it uses.

In our main case, the correct session account and current-permission rule are confirmed. Different conditions can produce a different problem.

Suppose ISC delivered the right to the intended account, but the employee's session uses another account. Repeating the grant to the first account does not correct the session's account choice.

Another application may keep earlier permission information in its session. A new permission on the account might not immediately change that existing session's decisions.

Establish the application's actual reevaluation behavior before treating a new sign-in as necessary or sufficient. These are alternatives to investigate, not a rule that every application needs a fresh session after provisioning.

## Change the evidence, and the next check changes

### HR changed, but its collected record did not

HR now shows FIN. ISC's collected HR account still has OPS from before the transfer. The mapping correctly selects HR.

This time, the selected input has not received the expected new value.

Inspect the actual input supplied through the connection or export, the relevant record and attribute, collection coverage, results and times. A successful job can still exclude this person's updated data.

Establish whether FIN reached the collected account before proposing a different mapping.

### The identity is correct, but the role is absent

The identity now shows FIN and ACTIVE, but Finance Reports is not assigned.

Check the actual enabled role, its complete conditions and the types of records those conditions read. Establish whether applicable processing evaluated these values and the current configuration.

The correct identity value does not establish that the required evaluation has already occurred. A role name does not establish its criteria either.

Before changing connector privileges, determine whether this path required an addition and whether a delivery attempt was made.

### The role is assigned, but the addition was rejected

The criteria match and the role is present. The attempted permission addition was rejected for missing integration authority.

Here, the technical account's authority to update the target is missing. That is different from the employee account's permission to view reports.

The gap is delivery. Inspect the exact operation, recipient account, required integration privileges, error and current target state.

Arrange an authorized recovery suited to the actual state and supported behavior. Changing a correct department mapping would not supply that authority.

### The permission is present, but a report is still denied

The application confirms the viewing right on the intended account, yet a Finance report cannot be opened.

Check the exact report, signed-in account, session behavior and complete application rule. Perhaps the right applies only to a particular business area or another condition is required. These are questions, not established causes.

The main example supplied a sufficient viewing right and a current-permission check. If those conditions differ, the application rule needs a fuller explanation.

Continued denial does not establish failure of the addition already confirmed as present. More than one fault can also coexist: correcting the input does not demonstrate healthy delivery or enforcement everywhere.

## Use each view to answer its own question

A source-account view shows information ISC holds about that account. Identity attributes show values on the person-level record. Profile mappings show how those values are configured to be obtained.

The role definition shows qualification conditions and required access. Provisioning Activity and Account Activity help inspect attempted operations and reported outcomes or errors.

The application's current account and action evidence address what exists and what that account can do there.

ISC **Search** queries searchable information. An update can become visible there later than in another view. An empty result therefore needs scope, time, available history and freshness checks.

Do not wait for a general refresh when more direct evidence can answer the actual question. Also do not turn one view's absence into a claim about every other system.

An investigation note should connect its observation to the claim:

- “The HR account collected at 08:10 contains FIN” establishes that this value reached that record.
- “The identity department mapping selects directory department” identifies the selected input.
- “The role reads identity department, currently OPS” identifies the comparison input.

Together with the FIN condition, those findings explain the mismatch.

Keep the real record identifiers, source/system context and observation times in working notes. The time a screenshot was taken is not necessarily when its account information was collected.

## Leave an unchecked connection unknown

You can keep this evidence trail in an ordinary document. It does not require a special ISC diagram feature.

For each connection, identify the input, instruction, expected result and evidence of the actual result.

For our case, the trail is:

- HR to its collected account: FIN arrived in the 08:10 observation.
- Collected inputs to identity: the design expects HR, but the mapping selects directory OPS.
- Identity to role: OPS fails the identity-department FIN condition.
- Role to new grant: this automatic path has not qualified the identity for the expected addition.
- Account to report use: the application confirms the missing right and corresponding denial.

If you have not checked a connection, mark it unknown. That leaves a useful next question.

An incorrect upstream selection does not make every later component faulty. In this case, the application correctly refuses an action whose required permission is absent.

After correcting one connection, verify what follows. A cause explanation and a complete recovery are different results.

## Work through the changed records

### FIN is on the HR account, but OPS is on the identity

An enabled role's only qualification path requires identity department FIN and employment status ACTIVE. The identity has ACTIVE and OPS. The collected HR account has FIN.

Does the HR value satisfy the department condition?

No. The condition reads the identity department. The HR account's value is not interchangeable with that input.

Inspect the mapping and applicable processing to explain the identity's OPS. If the approved design selects HR, compare that requirement with the actual selection.

### Repeating the same HR collection

HR FIN is already collected. The mapping still selects directory OPS. An engineer proposes collecting HR repeatedly until Finance Reports appears.

Which instruction would change?

None in the supplied proposal. Reading FIN again does not make the mapping select it.

Assess the shared selection and dependent access, then correct it through the authorized process when it conflicts with the design. Other events during a new collection could have other effects; they would not make repetition a correction for this selection defect.

### Role assigned, permission absent

The corrected identity qualifies and Finance Reports is assigned. The addition was rejected, and the application confirms the permission is missing.

Has the access requirement been delivered?

No. The role establishes the requirement. The operation and target evidence show that delivery has not fulfilled it.

Investigate the rejection and applicable integration conditions, arrange supported authorized recovery and verify the actual right and intended action. A failed write does not justify changing correct qualification criteria.

### Make every active employee qualify

An engineer proposes replacing department FIN AND employment status ACTIVE with employment status ACTIVE alone.

Would this fix the mapping?

It would widen eligibility to active employees outside Finance while leaving the selected department input unchanged.

The condition would stop expressing the approved Finance requirement. Correct the input selection, or obtain a separately authorized broader design if the business requirement genuinely changes.

Making one reported employee qualify does not establish that a shared rule is correct.

## Trace a contractor's warehouse access

A contractor should receive warehouse-dashboard viewing access while assigned to location WH2.

The contractor register is the approved source for location. A directory also stores location.

The supplied facts are:

- The current register and its collected ISC account show WH2.
- The identity location mapping selects directory location.
- The directory's collected location and identity location show WH1.
- An enabled automatic role's complete qualification condition is identity location equals WH2.
- The role was not previously assigned, and no other grant supplies the viewing right.
- The existing dashboard account is correctly associated with the identity.
- The viewing permission is absent.
- Applicable processing has run with these values and configuration.

WH1 and WH2 are hypothetical location codes. Explain why this automatic path has not produced the expected permission.

WH2 reached ISC, but the location mapping selected WH1 from the directory. The role reads identity location, so its WH2 condition does not match.

Assess the shared mapping and dependent access before an authorized correction. Then check the applied identity value, role assignment, delivery outcome, current permission and controlled dashboard use by the intended account on the intended resource.

The corrected input does not establish all those later results. Delivery support, successful operation and actual application use still need evidence.

Check the affected population too. The correction should not grant access outside the approved location or change other access unexpectedly.

Now explain the connections in your own words: which record supplies information, which instruction selects it, which condition uses the result, what change should follow and what evidence shows the intended operation works.
