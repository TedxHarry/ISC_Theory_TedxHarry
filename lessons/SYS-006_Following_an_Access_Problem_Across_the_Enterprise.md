# Follow the access problem across the systems

An employee has moved into Finance. They can sign in to the reporting application, but they cannot view the Finance reports they need.

Human resources, or HR, says the transfer is complete. The directory team says the workplace account is enabled. The SailPoint Identity Security Cloud (ISC) administrator says the reporting connection is working.

All three statements can be correct. None, on its own, explains whether the right report permission reached the account being used.

Let's make the missing result precise. The approved requirement gives active Finance employees permission to view Finance reports, not edit or export financial data. The application owner confirms that the employee's existing reporting account lacks the required viewing permission and has no alternative access that permits the operation.

We now have something specific to investigate: the right account can sign in, but a particular operation is denied because a required permission is missing.

The question is how the employee's changed department was supposed to produce that permission, and where that connection stopped.

## Follow the same person without treating every record as the same record

An **account** is a record used by a person or service in a particular system. The reporting account holds information such as its identifier, enabled state, and permissions.

An **identity** in ISC represents the person and connects information about their accounts and access. It is not the reporting application's own account.

That distinction matters because the same person appears in several places.

HR holds an employment record. A **directory** stores workplace accounts and related information that other systems can use. The reporting application holds the account that opens reports. ISC holds collected representations of accounts, the person's identity, and the configuration used to manage access.

A department value on the directory account can differ from the department on the HR record. The organization may expect them to agree, but they are still separately stored values.

Before following the information, confirm that the records belong to the intended person. Use the relevant identifiers and system context, not a shared display name alone. Two people can have the same name, and one person's account names can differ across systems.

An employee identifier identifies the person under the organization's rules. The system context and account identifier tell you which particular account you are following. They answer different questions.

For the main investigation, assume those relationships have been verified: there is an existing ISC identity, the relevant accounts belong to it, and the employee is using the one suitable, enabled reporting account. There is no wrong-person or wrong-account association hiding in the supplied facts.

Those are established conditions for this example, not checks you can omit from a real investigation.

## A value must reach ISC before ISC can use it

Within ISC, a **source** is the configured representation of a system or collection of account data. A **connector** provides the integration used to obtain that data and, where supported and configured, perform changes.

The reporting source is therefore not the reporting application itself. It represents information and integration configuration inside ISC; the employee opens reports in the external application.

Here, ISC has sources for HR, the directory, and reporting.

**Aggregation** collects account information into ISC. For example, HR may already hold the new department while ISC still holds information read before the transfer. A completed business change and a completed collection are separate events.

Collection gives ISC an observation of account data within the operation's scope. It does not guarantee that every account was included, and it is not a permanent live view of the external system.

**Account correlation** associates a collected account with the appropriate ISC identity. Configured matching can compare an account value with a corresponding identity value to establish that relationship.

Aggregation answers, "What information did ISC obtain?" Correlation answers, "Which identity is this account associated with?" Neither means that every value on the account automatically becomes the identity's corresponding value.

This is the next connection to inspect.

## Which department is actually used on the identity?

An **attribute** is a named piece of information on a record. Department on an HR account, department on a directory account, and department on the ISC identity are three attributes on three records.

The shared word "department" does not make them one shared value.

A **mapping** specifies where an output attribute gets its value, either from a selected input or a calculation. An identity department mapping could select department from an associated HR account or from an associated directory account. Those choices can produce different results for the same person.

The configuration that includes identity-attribute mappings is the **identity profile**. It is associated with an **authoritative source**, whose records provide the basis for establishing that population of identities. HR supplies the employee population here.

Do not read "authoritative" as "supplies every value." HR can establish the population while a mapping uses another source for a particular attribute. That can be intentional, such as taking an email address from a directory. You need the actual mapping to know what supplies department.

For this investigation, the approved design says HR supplies employment department. Selecting directory department conflicts with that agreement. It would not be inherently wrong in every organization.

Now inspect the supplied observations. The transfer became effective at 08:00. The values and times below are hypothetical evidence, not a tenant execution trace.

| Record or configuration | Observed value or selection |
|---|---|
| Current HR employment record | Department FIN; employment status ACTIVE |
| HR account data collected into ISC at 08:10 | Department FIN; employment status ACTIVE |
| Current directory account | Department OPS |
| Directory account data collected into ISC at 08:15 | Department OPS |
| Identity department mapping | Select department from the associated directory account |
| Identity employment-status mapping | Select employment status from HR |
| Current ISC identity, after applicable processing | Department OPS; employment status ACTIVE |

Here, `FIN` means Finance and `OPS` means Operations. Employment status is an illustrative attribute describing employment information. `ACTIVE` means active employment in this example; it does not establish that an application account is enabled or that an identity is included in every ISC process. Those conditions need their own evidence.

Follow just the department value for a moment.

HR's FIN reached ISC. The directory's OPS also reached ISC. Both inputs are available, but the mapping selects the directory input. The identity therefore has OPS under this configuration.

ISC has not failed to obtain HR's new value. It is using a different input for the identity attribute.

What would another collection of the unchanged HR record accomplish? It could read FIN again. It would not redirect a mapping that still selects the directory.

The directory's older department may deserve its own investigation. But changing that value is not a substitute for making this identity mapping agree with the approved design.

## How does an identity value lead to a permission?

A department value is information. The application needs an access right. Something must connect the two.

A **role** groups access for a responsibility or population. Its assignment configuration determines who receives it automatically, where that automatic path is used.

**Assignment criteria** are the conditions used to decide who qualifies. In this example, an enabled role named "Finance Reports" requires:

```text
Identity department equals FIN
AND
Identity employment status equals ACTIVE
```

AND means both conditions must be true. An active employee outside Finance does not qualify through these conditions.

Notice what the criteria read: identity attributes. FIN on the collected HR account cannot directly satisfy a condition that reads an identity department currently equal to OPS.

The role also needs access contents.

An **entitlement** is an access item represented from a source, such as an application permission or group membership. The reporting application gives this example's viewing permission its meaning: opening the Finance report collection, without edit or export permission.

An **access profile** bundles related entitlements from one source. Here, a profile named "Finance report viewing" contains that viewing entitlement, and the Finance Reports role includes the profile.

The criteria answer who qualifies. The access contents answer what the role requires for someone who qualifies. The application determines what those rights actually allow.

Other role designs can use supported account attributes or entitlements as inputs. Inspect the configured input type rather than assuming every condition reads the identity.

**Identity processing** evaluates identity information and applicable access configuration. It applies identity mappings and evaluates role eligibility as part of that work. When this path assigns the role, the required access can initiate **provisioning**, the process that performs supported account or access changes.

The **target system** is the system receiving the attempted change. Here, it is the reporting application, and the intended change is adding the viewing permission to the existing reporting account.

For the main path, assume the necessary ISC services are enabled, the role and its contents are correctly configured, and the integration supports the required addition. The role was not already assigned, the permission is absent, and no other grant path provides it.

Now evaluate the identity values supplied in the table:

Department OPS does not equal FIN. Employment status ACTIVE does equal ACTIVE. One condition is false, so the combined condition is false.

The role is not newly assigned through this automatic path. Consequently, this path does not generate the expected new grant.

That does not mean a provisioning attempt failed. The required assignment condition was not met in the first place.

This comparison is reasoning from supplied values and configuration. It is not a promise that ISC displays a separate log line for each condition.

## Read the map as connected responsibilities

The relationship between data, configuration, decisions, and delivery can now be drawn:

```text
HR: FIN                  Directory: OPS
   |                           |
aggregation               aggregation
   v                           v
Collected FIN             Collected OPS
   \                           /
    \                         /
     Department mapping selects
          directory input
                 |
                 v
Identity department: OPS
Employment status: ACTIVE, from HR
                 |
        identity processing
                 v
Role: department FIN AND status ACTIVE?
        /                     \
      no                       yes
      |                         |
      v                         v
No new grant              Role assigned
from this path                  |
                                v
                         Required access
                         profile contents
                                |
                           provisioning
                                v
                         Reporting account
                         applied/rejected
                                |
                         application check
                                v
                         Viewing allowed
                         or denied

Separate observation:
Reporting account --aggregation--> ISC

Arrows show example dependencies,
not ISC's internal service topology.
```

The department selection shown is the current, incorrect selection for this approved design. The status input comes from HR. After the department mapping is corrected and applied, FIN can reach the identity and the same criteria can take the matching branch.

The "yes" branch requires more than a matching comparison to produce usable access. The role requires the profile's access; provisioning attempts the account change; the application applies or rejects it; and the application checks the actual viewing operation.

The observation line reads information back into ISC. It does not perform the write or prove that the application operation works.

These arrows show dependencies in this example, not private ISC services or a guaranteed immediate round trip. A connector can have additional execution and network dependencies. The map does not diagnose or correct them automatically.

Your investigation supplies the human connection: compare what was required, which inputs were selected, which decisions followed, and what the application actually did.

## Investigate from the symptom, then explain the cause forward

When someone reports missing reports, you do not yet know that the mapping is wrong.

You can work backward from the application: which account was used, which operation was denied, which right is missing, and what was supposed to provide it?

You can also work forward from the transfer: what changed in HR, what reached ISC, what populated the identity, and what condition consumed that value?

Neither starting point is mandatory. The important thing is to connect the evidence rather than stop at the first reassuring status.

For this example, application evidence identifies the missing viewing permission and corresponding denial. The verified account association establishes that you are following the intended person and account. The approved access design identifies the automatic role as the expected grant path.

The role's current criteria use identity department and employment status. Those identity values do not qualify. The mapping and collected inputs explain why: the mapping selects directory OPS even though the approved input, HR FIN, is available.

The comparison is doing what its configured input tells it to do. The defect is the input selection's disagreement with the design.

You can state the cause in connected sentences:

> HR's FIN value reached ISC. The identity department mapping selects directory OPS instead. The Finance Reports criteria therefore do not match, so this automatic path has not generated the expected grant. The reporting account lacks the permission, which explains the application's denial under the supplied rule.

Each sentence has a link another engineer can inspect.

An empty activity search would not establish that chain on its own. It might reflect search scope, available history, record freshness, processing not having run, or a different grant path. Here, the conclusion depends on the configuration, values, processing conditions, and application evidence together.

## Correct the wrong connection without changing the requirement

Several actions might change a symptom without repairing the cause.

Changing HR back to OPS would corrupt correct employment information. Resetting the employee's reporting password would not change the role's input. Repeatedly collecting unchanged HR data would still leave the mapping pointed at the directory.

Changing the role to include every active employee would be worse: it would replace a Finance-only access policy with a wider one just to make one person qualify.

The lasting correction here is to select the approved HR input for identity department.

But the mapping is shared configuration. It does not apply only to the employee who reported the problem.

Consider another person whose directory says FIN while HR says OPS. Switching department to HR could make that person's value change in the opposite direction. Their eligibility could change too. That might be the intended correction, but the affected access needs assessment before applying it.

A **dependency** is something that relies on another value or capability. A role that reads department depends on the department mapping's result. Other access rules, calculations, or configured automation may use that value as well.

Find those consumers and assess the affected population, including people who should gain access and people whose existing access could change. Preserve the original evidence before replacing it with the corrected state.

Use the available preview and testing facilities. A mapping preview helps inspect the proposed value for selected identities. It does not execute every later application change or establish the final permission outcome.

An urgent business need may justify a separately authorized temporary grant. It still needs a defined recipient, scope, tracking, and removal plan. It does not correct the shared mapping, and its presence must be considered when checking later results.

## Follow the corrected value all the way to use

After impact assessment and authorization, the engineer changes the mapping to select HR department and applies the required processing through the supported procedure.

Saving a mapping is not the same as having its result applied to the identity. Verify the current identity value and the applicable processing rather than treating a configuration screen as the outcome.

In this hypothetical successful continuation, the results are:

| Evidence point | What is established |
|---|---|
| Applied identity values | Department FIN; employment status ACTIVE |
| Role assignment | The identity now qualifies and Finance Reports is assigned |
| Required access | The included profile requires the report-viewing permission |
| Provisioning result | The supported addition to the intended reporting account reports success |
| Current application account | The viewing permission is present |
| Authorized, controlled use | That account can view the intended Finance reports |
| Access boundary check | The change has not added edit or export permissions |
| Later reporting collection | ISC's account observation reflects the added permission |

These are supplied outcomes, not timings, separate mandatory screens, or a promise that collection automatically follows every write.

Processing completion establishes neither successful provisioning nor usable access by itself. A successful provisioning report describes the operation result; checking the application's permission and the allowed operation addresses further questions.

Use authorized checks and non-sensitive reports. Confirm both what should work and what should remain unavailable.

The corrected identity department can now be FIN while directory department remains OPS. Why? The mapping changed which input supplies the identity. It did not write a new value into the directory.

**Attribute synchronization** is a separate configured mechanism that writes selected identity values to corresponding account attributes through supported provisioning. It has its own mapping, account, and integration conditions.

If the organization wants identity department written to the directory, that needs its own supported configuration and validation. Collecting a value, using it for role eligibility, and writing it to another system are different operations.

## Keep the sign-in relationship separate

The employee's successful sign-in was useful evidence at the start. It did not establish permission to view every report.

**Authentication** verifies who is signing in. **Authorization** decides whether an actor may perform a particular operation on a resource. Opening a Finance report is an authorization question, even after sign-in succeeds.

The **front end** is the interface the user sees. A missing report tile is a clue, but hiding a tile is not enough to protect its report. Trusted application processing, the **back end**, must enforce the protected operation.

An **identity provider** can carry out sign-in checks for an application that trusts it. The application must also identify which of its own accounts the sign-in represents. That sign-in account relationship is different from ISC's correlation between collected accounts and an identity.

A **session** is the application's continuing signed-in context. If a person has several accounts, you must establish which account that session uses.

For the main example, the account and current-permission evaluation are confirmed. Change those conditions and the conclusion may change.

Suppose the viewing permission was added to the intended account, but the user is signed in through a different one. Another grant to the first account will not fix that session's account choice.

Alternatively, an application may retain permission information in its session rather than immediately use a later change. Establish its documented reevaluation behavior before assuming a fresh permission is usable straight away. This is a conditional application behavior, not a claim that every application requires a new sign-in.

Check the actual account, resource, and permission rules before compensating for an unexplained denial with more access.

## Changed evidence tells you where to look next

Keep the same symptom, but change one observation. The original mapping diagnosis no longer follows automatically.

### HR is current, but its collected record is old

HR shows FIN. ISC's collected HR account still shows OPS from before the transfer, and the mapping correctly selects HR.

The gap is now between current HR data and the information obtained by ISC.

Inspect the record supplied by the export or connection, the population included, the relevant attribute, and the collection result. A job can complete without obtaining this person's changed value.

Before changing the mapping, establish whether the approved input reached ISC at all.

### The identity is correct, but the role is absent

The identity shows FIN and ACTIVE. Finance Reports is not assigned.

Inspect the actual enabled role, the complete criteria, their selected input types, and whether applicable processing evaluated the current values and configuration.

A role's name does not prove its conditions. A correct current identity value does not prove that the relevant evaluation has already used it.

Do not start with a connector-write fix before establishing that this path required a change and whether an attempt was made.

### The role is assigned, but delivery was rejected

The criteria match and the role is present. Provisioning reports rejection because the integration lacks permission to add access.

A **technical account** is an account the integration uses to communicate with the application. Its authority to make changes is different from the recipient account's permission to read reports.

The failing connection is now delivery, not department selection. Inspect the exact operation, recipient account, required integration privileges, reported error, and current application state.

Choose an authorized recovery that fits those facts and supported behavior. Changing a correct identity mapping would not supply the integration's missing privilege.

### The permission is present, but the report is still denied

The application confirms the viewing right on the intended account, yet one Finance report cannot be opened.

Check the precise report, the signed-in account, session behavior, and additional application conditions. The real permission may be restricted to a business area or require another condition.

The main example assumed the stated viewing right was sufficient. New evidence of an additional requirement means the application rule needs a fuller explanation. It does not prove ISC failed to deliver the right already confirmed as present.

Also allow for more than one fault. Correcting an upstream input does not establish that later delivery or application behavior is healthy.

## Read each screen for the question it can answer

A source-account view shows information ISC holds about that account. An identity's attributes show values on the person-level record. The identity profile's mapping shows how a value is configured to be obtained. The role definition shows the configured qualification conditions and access contents.

Provisioning Activity and Account Activity help investigate attempted changes and reported results. The application's own account and operation evidence address what exists and what the account can do there.

Those views are not interchangeable versions of one fact.

ISC Search provides searchable information, and updates can appear there later than in another record. Before drawing a conclusion from an empty result, check scope, relevant time, available history, and freshness. Do not wait blindly if you can obtain more direct evidence for the actual question.

An investigation note should explain what its evidence establishes.

"The HR account collected at 08:10 contains department FIN" establishes that this value reached that record. It does not establish that identity department uses it.

"The department mapping selects the directory account" explains input selection.

"The criterion reads identity department, currently OPS" explains the condition's input. With the configured FIN comparison, you can then explain why it does not match.

Keep record identifiers and system context in actual investigation notes, even though invented keys are unnecessary for this illustration. Include relevant observation times. A screenshot without those details may leave the next engineer unable to tell which record or point in time it represents.

## Mark a connection unknown until you have evidence

You can make this investigation map on paper or in an ordinary document. It does not require a special ISC diagram feature.

For each connection, record the input, configuration, expected result, and evidence for the observed result. A short evidence trail for the main case would read:

- HR to collected HR account: FIN is present in the 08:10 observation.
- Collected data to identity department: the design expects HR, but the mapping selects directory OPS.
- Identity to role: department OPS fails the configured FIN condition.
- Role to permission: this automatic path has not reached the condition that requires the new grant.
- Permission to report use: the application confirms the missing right and corresponding denial.

If you have not checked a connection, mark it unknown. That gives you a next question rather than a false conclusion.

Do not label every later component faulty because an earlier dependency is wrong. In the main example, the application is correctly refusing an operation whose required permission is missing.

After correcting one connection, verify the rest. A good explanation identifies both what caused the supplied result and which outcomes still need evidence.

## Work through the changed records

### FIN is on the HR account, but OPS is on the identity

The role is enabled. Its only qualifying path requires identity department FIN and employment status ACTIVE. The identity's status is ACTIVE, but its department is OPS. The collected HR account has FIN.

Does FIN on that HR account satisfy the department condition?

**Worked reasoning**

No. The configured condition reads the identity department, not any record that happens to contain FIN.

Inspect the mapping and applicable processing to establish why the identity has OPS. If the approved design selects HR, compare that requirement with the actual selection. The same field name on two records does not make their values interchangeable.

### Another successful HR collection is proposed

HR FIN has already reached ISC. The identity mapping still selects directory OPS. An engineer proposes repeating HR collection until Finance Reports appears.

What connection would remain unchanged?

**Worked reasoning**

The mapping would still select the directory. Reading an unchanged FIN value again does not redirect it.

Assess the shared mapping and dependent access decisions, then correct the selection through an authorized change if it conflicts with the design. Other changes during a new collection might have other effects, but they would not make repetition a repair for the supplied selection defect.

### The role is present, but the permission is absent

The corrected identity qualifies. Finance Reports is assigned. The provisioning addition was rejected, and the application confirms that the permission is missing.

Has the access requirement been fulfilled?

**Worked reasoning**

No. The assignment establishes required access through that role; the operation and account evidence show delivery has not fulfilled it.

Investigate the rejection and applicable integration conditions. After authorized recovery, verify the actual permission and permitted operation. Changing correct role criteria is not justified merely because a write failed.

### Make every active employee qualify

An engineer proposes replacing the Finance-and-active criteria with employment status ACTIVE alone.

Would that repair the mapping defect?

**Worked reasoning**

No. It would change who qualifies, including active employees outside Finance, without correcting the department selection.

The condition would no longer express the approved requirement. Repair the input selection, or obtain a separately authorized design if the business genuinely wants a broader population. Making the reported employee qualify is not sufficient evidence that a shared rule is correct.

## Trace the same relationships in a different setting

A contractor should receive warehouse-dashboard viewing access while assigned to location WH2. The contractor register is the approved source for location, and a directory also stores location.

You are given these facts:

- The current contractor register and its collected ISC account both show WH2.
- The identity location mapping selects directory location.
- The directory's collected location and the identity location are WH1.
- An enabled automatic role requires identity location WH2.
- The existing dashboard account is correctly associated with the identity.
- The viewing permission is absent.
- Applicable processing has run with these values and configuration.

Explain the connection from the approved requirement to the missing permission. What would you correct, and what would still need checking afterward?

**Worked reasoning**

WH2 reached ISC from the approved input. The location mapping selected directory WH1 instead. The role condition reads identity location, so it does not match WH2. That explains why this supplied automatic path has not generated the expected new grant.

Assess the shared mapping and its dependent access before an authorized correction. Then verify the applied identity value, role assignment, delivery outcome, current permission, and controlled dashboard use by the intended account on the intended resource.

Check the affected population too. The correction should not grant access to people outside the approved location or change other access unexpectedly. A corrected input is necessary here, but it is not proof of every downstream result.

Now describe the map in connected sentences: which record supplies the information, which configuration selects it, which condition uses it, what change is required, and what evidence shows the intended operation works.

That explanation lets another engineer check the cause and the remaining uncertainty, even when the application and permission names are unfamiliar.
