# The same role was granted in two ways. What changes?

Two people can read evidence and add review comments in the same application. One needs that access for their regular job. The other needs it for temporary cover work.

The resulting permissions can look identical. The reason for granting them, and the reason for later withdrawing them, can differ.

In SailPoint Identity Security Cloud (ISC), a **role** groups access for a business responsibility. An **identity** is ISC's representation of a person or another entity. A **role assignment** associates a role with an identity through an applicable route.

The **assignment origin** is the route through which that association arose. It helps answer a practical question: why should this particular person hold this particular assignment?

## Establish the access both routes are meant to deliver

The role is Evidence reviewer. It contains an enabled **access profile**, a named bundle of related entitlements from one source.

A **source** is ISC's configured representation of a system or collection of account data. An **entitlement** represents source access, such as group membership. Here both entitlements belong to Evidence Production.

**Native** means belonging to the external application itself. A **permission** allows an action on a resource. A native **group** collects members, such as accounts; the application uses membership to grant the stated permissions.

The application contacts confirm:

- Evidence Readers permits reading evidence within the account's assigned resource scope.
- Review Comments permits adding review comments when that same account also holds Evidence Readers.

Neither group grants final approval, export or administration.

An **account** is the external record through which someone uses a system. **Account correlation** matches and associates that source account with the ISC identity.

For the main examples, there is one existing account on Evidence Production. Its association is correct, the account is enabled, sign-in works and its scope is North. Signing in and being allowed to review North evidence are separate application decisions.

The role and its profile are enabled. This is a standard role containing the stated profile, with **standing access**: once delivered, its rights do not require a separate just-in-time activation before use.

**Provisioning** carries out account or access changes. A **connector** supplies the supported integration for reading information and, where supported and configured, making those changes. The required ISC Provisioning capability and these membership reads and writes are supplied.

All records, policies, native rules, configurations, dates and results below are hypothetical. No tenant operation is being reported.

## Automatic assignment uses an approved recipient policy

The business authorizes regular evidence reviewers to receive this role.

An **identity attribute** is a named field on the ISC identity. The configured **Standard Criteria**, the data comparisons selecting recipients, require all three current values:

- Department equals `Assurance`.
- Job code equals `EVIDENCE-REVIEW`.
- Lifecycle state equals `working`.

**AND** means every comparison must be satisfied.

A **lifecycle state** describes an identity's organizational stage and can carry configured access requirements. Here working is the configured technical name used by the criterion, not a universal ISC state name. In this example, it is an eligibility input rather than a separate grant of the same rights.

The identity's current values match all three. **Identity processing** evaluates identity information and applicable configuration, including role requirements. Relevant evaluation of the enabled, applied role supplies the basis for automatic assignment.

There is no separate role access request waiting for a reviewer to approve this ordinary matching assignment.

That does not mean nobody authorized the access. The business approved the role's contents, recipient policy and intended operation. A request reviewer assesses one proposed need; the automatic-policy owner must ensure that the rule selects an appropriate population.

A broad rule can repeatedly grant the right package to the wrong people. A stale input can also make the implemented decision differ from the intended policy. Check the actual current fields and configuration.

In a supplied successful automatic history, neither membership nor any role assignment initially exists, and no other route supplies the rights. Relevant processing records the assignment, supported provisioning adds both memberships, and native checks confirm North reading and commenting. Final approval, export and administration remain denied.

That completes this history's path from policy to usable access. Saving the selector alone would not establish any of those account results.

ISC also supports an **Identity List** selector: an authorized administrator explicitly maintains which ISC identities should receive the role automatically.

The list is the selection basis instead of the department/job expression. Maintaining an entry is not approving an access request. Standard Criteria and Identity List are alternative selector configurations, not an assumed combined rule with an exception list.

## A request can authorize a particular nonmatching need

An **access request** asks for an access item for a specified recipient. **Approval** is the decision allowing that request to proceed.

Now use an independent alternative history for the same identity and account. The role contents stay the same, but the current job code is PROJECT-COORD rather than EVIDENCE-REVIEW. The person needs North evidence-review cover temporarily.

The automatic job comparison is false.

This history starts with no role assignment, neither required membership and no other grant route. It is not a second request layered over the successful automatic history.

The role is configured to allow requests, and the person is permitted to request it. The request supplies the role, recipient, intended account, business justification and dates.

The **requester** submits the request; the **recipient** receives the access. They can be different people when the requester has the relevant permission to act for someone else.

In this supplied design, the recipient's manager reviews first, followed by the role's primary owner, a different person in this example. The **role owner** is responsible for the maintained role and is configured here as a reviewer. Both decisions are required.

The manager checks the cover responsibility. The owner checks whether this role's actual rights fit it. A rejection ends this request's grant path, and an unresolved review is not an approval.

After approval, PROJECT-COORD is still PROJECT-COORD. The automatic comparison did not become true. A separate configured route accepted the particular temporary need.

Automatic membership criteria are not automatically the eligibility filter for requesting the role. Request availability, requester permissions, applicable controls and the review decision still matter.

A role can support automatic assignment and requests at the same time: a narrow regular population plus authorized cover requests. That does not imply unrestricted request availability or approval-free grants.

## Keep enablement, selection and approval separate

A role being requestable opens a route for asking. It does not broadcast an assignment to every potential requester.

| Configuration or observation | What it establishes |
|---|---|
| Role enabled | Supports its configured assignment mechanisms; enablement alone selects nobody |
| Criteria match or identity is explicitly listed | An automatic membership basis exists to evaluate; this is not request approval |
| Role permits requests | A permitted request route is available, subject to applicable controls |
| Request submitted | Someone asked for access for a recipient; no approval or delivery is proved |
| Required reviews complete | That request passed its required decisions; dates and fulfillment still matter |
| Source operation reported | A particular account change has a result and possible errors to inspect |
| Current native membership and task checked | Evidence of what this account can do on the intended resource |

The administration screens address different records and decisions. **Define Assignment** configures automatic membership. **Access Requests** configures the request route. **Manage Access** describes the role's contents.

They concern the same role, but editing one does not perform the work represented by the others.

A role request uses the role's applicable approval process. If its included profile has another review chain for direct requests for that profile, that chain does not automatically become an extra review layer on the role request.

Automatic role assignment does not run the profile's direct-request approvals either. Assess the role-level design against the actual business review requirement.

Our requested example explicitly requires manager and owner approval. In another configuration, one unchecked item-level Require Approval option is insufficient evidence that no review applies: applicable global approval configuration still needs checking.

```text
AUTOMATIC                 REQUESTED
Current criteria          Recipient + role
or identity list          + approved need
        |                        |
Relevant evaluation       Required reviews
of enabled configuration  + allowed dates
        |                        |
        +-----------+------------+
                    |
          role assignment basis
                    |
          required source access
                    |
          account provisioning
                    |
          verify native task

Basis explains why access is required.
Delivery establishes what reached where.
```

The upper branches show alternative assignment bases. They do not claim two duplicate grants for the same account or prescribe how ISC combines simultaneous origins.

The lower relationships connect the required access to account delivery. Neither route strengthens a connector's source permissions or changes the application's native rules.

## Follow the temporary request through its dates

Continue only with the nonmatching temporary-cover history.

The request record, recipient identity, role record and source account identify different things. Keep those references distinct even when the screens connect them. Approval for one recipient or assignment is not evidence about another account.

The supplied access period is **October 26, 2026, 09:00 UTC** through **October 28, 2026, 17:00 UTC**. UTC means Coordinated Universal Time. The justification is North evidence-review cover.

This role requires an end date. The requested dates satisfy its configured limits.

Read the selected time zone when comparing request dates with source events. A wall-clock time without its zone can lead to a wrong early-access or late-removal conclusion.

The **integration actor** is the account or authorization the connector uses to perform source operations. It is distinct from the recipient account.

**Deprovisioning** withdraws access through the applicable fulfillment path.

| Supplied observation, in 2026 | Meaning |
|---|---|
| October 24, 14:00 UTC: request submitted | The identified recipient, role, intended account and period have been requested; no membership addition is established |
| October 24, 15:00 UTC: manager approves | One required review is complete; owner review remains |
| October 24, 16:00 UTC: owner approves | Required reviews are complete; the future start is still October 26 at 09:00 |
| October 26, 08:45 UTC: neither membership is present | Consistent with the future start; approval did not authorize this request to deliver early |
| October 26, 09:05 UTC: Readers addition succeeds; Comments addition reports a target permission error | Delivery is partial; business approval does not supply the integration actor's native authority |
| October 26, 09:15 UTC: native account has Readers only; North reading works, commenting fails | Actual capability matches the delivered subset, not the complete intended role |
| October 28, 17:00 UTC: access end reached | Deprovisioning starts; the timestamp alone does not establish completed native removal |

These times are supplied observations, not processing-speed promises.

At 09:15, another request would not repair the known source permission error. The review already accepted the need; the failed Comments operation is the gap.

An approved correction to the integration permission and a supported recovery later add Review Comments to the intended account. Native checks confirm North reading and commenting, while South commenting, final approval, export and administration remain denied. No other relevant account, access or native-policy change occurred.

This supplies evidence that delivery recovered for this requested assignment. Do not broaden automatic criteria or falsify the job code to conceal an integration problem.

## Approval timeout and access duration are different clocks

An **approval timeout** limits how long an unresolved request can remain pending under its applicable settings. An **access end date** limits the intended access period of an assignment.

A pending request timing out does not prove that unrelated pre-existing native access was removed.

A **maximum duration** constrains the requested period. With an explicit access start, the limit is measured from that start. Without one, the reference point is the request time.

Approval delay can therefore consume the available period when no start date was supplied. A three-day maximum is not a promise of three full days after approval.

Check the applicable request-time settings and any item-specific overrides when investigating a timeout. Changing global timeout settings does not retroactively replace the settings followed by an already pending request.

If the need is extended, use the permitted date-change route and its applicable review. A changed justification note does not by itself extend the assignment's end time.

```text
Request submitted
        |
Required approvals complete
        |
Future authorized start
        |
Source changes attempted
        |
Verify account and actual task
        |
Access end date and time
        |
Deprovisioning starts
        |
Check retained requirements
        |
Verify source removals and task

Approval is not delivery.
End time is not instant completion.
```

This diagram follows the dated request in the supplied history. Required decisions, the authorized start, source changes and withdrawal are different stages. The final check matters even when each earlier decision was correct.

A future start governs this request's grant. It is not a denial over rights already held for another valid reason.

In a separate variation, another assigned role already supplies Evidence Readers before this request's start. That can explain early reading without early delivery from this request. Earlier commenting would need its own entitlement and operation evidence.

## Connect the screens to the records behind them

A role's assigned-identities view can include both automatically selected people and people who obtained it through requests. That view is different from the configured Identity List selector.

Seeing a person among the holders establishes an association to investigate. The role name alone does not establish the origin, intended dates or every source-account target.

For a requested assignment, connect its request history to the exact recipient, role, period, assignment and accounts. The request tracker shows review progress and request errors. Provisioning activity shows another view of attempted source changes.

An approved status is useful evidence of a decision. Detached from the relevant object and history, it is not a certificate that all native tasks work.

For an automatic assignment, inspect the current identity values or explicit selector entry, enabled configuration and relevant processing. A request identifier is not required evidence for access that was never requested.

In either route, inspect the intended source account and action.

**Account aggregation** reads configured account data into ISC. An access display based on an earlier read and a later native observation can differ until collection and relevant updates catch up. Neither identity processing nor an old account read proves a later provisioning operation succeeded.

If the only evidence is an “approved” screenshot, establish which recipient, role, assignment, account, dates and source result it concerns. Missing context is a reason to seek more evidence, not to assume the approval was wrong.

## End the requirement through its actual route

In the automatic history, the requirement depends on current criteria or an explicit selector entry. When the person no longer qualifies, or the approved list entry is removed, relevant evaluation changes that automatic membership and its associated access requirements.

**Revocation** means withdrawing an assignment through its supported route. An ordinary revocation request cannot override a continuing automatic membership basis.

Removing a native group while leaving a valid automatic requirement intact does not resolve why ISC still requires that access. Correct the approved policy, list or input at the appropriate level. Do not falsify a department simply to force a result.

In the requested history, identify the actual requested assignment and use its supported revocation or expiry route. A permitted removal request can require approval too.

A job-code change does not, by itself, establish that every requested role ended. Inspect the requested assignment's dates, revocation history and applicable lifecycle controls. A **lifecycle state** describes an identity's organizational stage; its configured actions can separately affect access, including requested roles.

If several assignments exist, inspect their account targets before choosing one. A requested assignment for a daily-use account and another for an administrative account must not be treated as interchangeable merely because the role name matches.

At the requested end date and time, ISC starts deprovisioning. The end date is not sent to the source as an account attribute.

For disconnected fulfillment, a **manual provisioning task** asks a person to remove the access. Inspect that task and the native result. A connected source still needs operation and outcome evidence; an end timestamp is not proof of an instantaneous application-session cutoff.

In a supplied continuation of the temporary-cover history, no other requirement retains either entitlement. After the configured end, supported removal reports both memberships withdrawn. A later native check confirms both absent and denies North reading and commenting. The account remains enabled and can still sign in.

That closes this history's access period without confusing access removal with account deletion. No particular removal latency is established.

In a separate retention variation, another assigned role still requires Evidence Readers. This assignment can end while Readers remains justified. Inspect whether Review Comments is also required elsewhere and whether its actual removal succeeded.

Keep the ending assignment, continuing requirements, attempted removal and current capability separate. A remaining group alone proves neither failed expiry nor complete temporary-access cleanup.

## Work through the decisions

### 1. No automatic match, but an approved need

The current job is PROJECT-COORD. The role is requestable, this requester is permitted, and the configured manager and owner approve the dated cover request.

Can the role be assigned without changing the job code?

**Reasoning:** Yes, through the approved request route, subject to dates and delivery. The automatic comparison remains false. Changing an accurate job code would misrepresent the record and could affect other decisions.

### 2. A requestable role never appears on the identity

The role is enabled and requestable. The person does not match the automatic selector and has not submitted a request.

Is failed provisioning established?

**Reasoning:** No. Neither route has selected a grant under the supplied facts. Requestability permits asking; it does not assign access to everyone who could ask.

### 3. The owner receives no individual review

The person's regular job matches the current, applied automatic criteria. Someone expects the role owner to approve each matching identity.

Which decision actually authorized the grant?

**Reasoning:** The approved automatic recipient policy. Check whether that design was intentionally authorized for the population. If per-person review is required, change the approved assignment design; waiting for a nonexistent request does not add that control.

### 4. The included profile's reviewer is absent

A role request completes its configured role reviews. The profile has a different review chain for direct profile requests, but no separate profile review appears.

Is that missing review necessarily an error?

**Reasoning:** No. The requested item was the role, so its applicable process governs. The profile's direct-request chain does not automatically cascade into every containing role. Assess the role's actual review design against the requirement.

### 5. Reading works before a future start

Another assigned role already supplies Readers. A new Evidence reviewer request starts later.

Does reading prove this request provisioned early?

**Reasoning:** No. Inspect the existing role and current native holdings. The future start is not a deny rule over other justified access; commenting would require its own evidence.

### 6. All reviews passed, but commenting fails

Readers was added successfully. Comments reported a target permission error and is absent on the intended account.

Should the person request the role again?

**Reasoning:** The known gap is the rejected Comments operation. Approval and correct correlation do not establish that write's success. Obtain an approved integration correction, recover through a supported path and verify the North comment action.

### 7. The wrong assignment could be revoked

A requested role has assignments targeting a daily-use account and an administrative account. Only the administrative assignment is no longer justified.

What identifies the right withdrawal?

**Reasoning:** Exact assignment details and source-account targets, with the permitted removal route and review. Selecting only by role name risks withdrawing the wrong work access. The main one-account assumption does not apply here.

### 8. The end passes but Readers remains

The temporary assignment ends. Another assigned role still requires Evidence Readers.

Did expiry necessarily fail?

**Reasoning:** No. Retention can be correct for that other role. Establish that this assignment ended, whether Comments has another justification, and its actual removal outcome. Readers remaining alone does not prove all temporary rights were retained or removed.

## Try the same reasoning with temporary license access

A Layout designer role normally goes to people whose current job requires layout work. It contains a design-application entitlement and a font-library entitlement.

A **license** gives an account the right to use a product or feature set under its native licensing model.

A communications employee needs the same capabilities for two weeks of cover. The business does not want everyone in Communications to receive permanent design access.

What should the assignment design and evidence establish?

**Reasoning:** A narrow automatic population can coexist with a permitted, reviewed and dated role-request route for the specific cover need. Validate licensing, requester permissions, applicable reviews and supported fulfillment before implementing that proposal.

Follow the identified recipient and accounts, accepted temporary need, any future start, separate delivery of both rights and the actual layout task. A successful design-application operation does not prove the font-library entitlement arrived.

When the need ends, inspect the ending assignment, any retained role requirements and each native removal. Another valid role can retain a license after the temporary assignment ends.

State the assignment basis, intended period, account targets, delivered rights and the event that should end that particular requirement. Those facts explain more than the role name alone.
