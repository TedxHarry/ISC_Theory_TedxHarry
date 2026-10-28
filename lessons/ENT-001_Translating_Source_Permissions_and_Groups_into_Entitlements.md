# A group appears in ISC. What access does it actually represent?

An employee can open invoices for the West region but cannot approve them. In SailPoint Identity Security Cloud (ISC), you can see Invoice Readers listed against the employee's application account.

Does that mean the access is working, or that something has failed?

Start with what the employee is trying to do. Reading an invoice and approving it are different actions. A record showing Invoice Readers can help explain the first action without promising the second. To decide whether there is a problem, we need to connect the access recorded in ISC to the application's permission rules.

## What does the group actually allow?

An **account** is the record through which a person or another entity uses a system. Here, we are looking at one employee's account in an invoice application.

A **permission** allows an action on something, such as reading an invoice or approving an expense. Both parts matter. “Read invoices” tells us the action, but we still need to know which invoices it covers.

Applications can organize permissions through **groups**, which collect accounts or other supported members together. Instead of giving the same permission separately to every account, an application can use membership in a group when deciding what an account may do. The group and the application's rules together give that membership its meaning. A group used only as a mailing list does not automatically grant invoice access.

Let's use these supplied application rules:

| Group | What its membership permits |
|---|---|
| Invoice Readers | Read invoices within the account's business unit; no editing or approval |
| Invoice Approvers | Approve invoices within the account's business unit; this permission does not itself release payment |

The employee's account has a business unit of West and belongs only to Invoice Readers. It is enabled, sign-in succeeds, and there are no other grants of invoice access in this example.

Under these rules, West reading is allowed. East reading and invoice approval are denied. That is the expected boundary of the account's access.

These are hypothetical rules and observations for a supported integration. The membership remains in place until removed, rather than awaiting a separate activation. The application, policy and results are not observations from an actual tenant.

Notice why we needed the rules. The word Readers suggested reading, but it did not tell us the regional limit. A group name gives us a label to investigate; it does not establish every permission behind it.

## What does ISC represent?

ISC needs a way to record which access rights exist and which accounts hold them.

A **source** is ISC's configured representation of a system or collection of account data. Our source, Invoice Production, represents this production invoice application directly. A **connector** supplies the supported integration for reading its data and, where supported and configured, making changes.

An **entitlement** represents an access right on a source. In this integration, ISC represents the Invoice Readers group as an entitlement. The external group is the access object; the entitlement is its representation in ISC.

The represented unit depends on the system and integration. It could be a group, a native application role, a license or another supported access object. One such object can permit more than one action. ISC does not automatically split every action in an application into a separately manageable entitlement.

Now separate the object from the relationship.

The Invoice Readers group exists whether this employee belongs to it or not. **Membership** is the relationship saying that a particular account belongs to that group. If twenty accounts join the same group, there is still one shared group definition, with twenty membership relationships.

This is why finding Invoice Readers in the access list does not answer “Does this employee hold it?” We must also inspect the employee's account and its membership.

ISC connects that account to a person through an **identity**, its representation of that person. **Account correlation** matches and associates a collected account with the appropriate identity. It lets ISC associate that account's recorded access with the person.

For our example, the employee's account has been checked and is correctly correlated. We therefore have a connected set of facts: the group exists, this account belongs to it, and this account is associated with this employee's identity. A mistake in any one of those relationships changes what we can conclude.

## How do the application records reach ISC?

**Aggregation** means collecting external data into ISC. For this integration, two kinds of collection answer different questions.

**Account aggregation** reads accounts and their relevant **attributes**, meaning named pieces of information on a record. The account's business unit is one attribute. Its list of group memberships is another.

Collecting the membership values tells ISC which represented access rights the account holds. Account aggregation can create a simple representation of those entitlements in the source's **catalog**, the collection of represented access items.

That account data does not necessarily contain the group's full details. It may give a group reference without a useful description of what the group means.

**Entitlement aggregation** separately reads the access objects and their supported details, such as group identifiers, names and descriptions. With the relevant integration support and collection scope, it can also collect a group that has no members. This makes it possible to represent available access without waiting for an account to hold it first.

The two collections complement each other: account data supplies the holder relationship; entitlement data supplies details about the access object. Separate entitlement aggregation is not mandatory for every simple entitlement representation, and available capabilities depend on the connector.

Neither read adds a membership to the external account. Nor does reading a group into ISC create a new group in the application. Collection gives ISC information about access; changing that access is separate work.

## How does ISC recognize a membership value?

An account contains many fields. ISC needs instructions to distinguish a group membership from an ordinary descriptive value.

Those instructions are part of a **schema**: the definition of the attributes represented for a kind of record and how those attributes are used.

For this hypothetical integration, the account's membership field is named `groups`. Its schema marks it as an **Entitlement** attribute. That designation tells ISC to interpret its collected values as access information. The field is also **Multi-Valued**, meaning it can contain a list of group references rather than only one.

An **entitlement type** identifies a supported kind of access object. The native type supplied by this integration is also named `groups`. Here, **native** means belonging to the external system's model. The type's name must match the supported native object type; it is not an arbitrary friendly label.

The account attribute's **Type** setting connects `groups` to that entitlement type. This is a relationship setting, not just a statement that the field contains text.

The entitlement schema then identifies which field supplies the object's identifying value and which supplies its displayed name. In this example:

- `id` is selected as the **Entitlement ID**.
- `displayName` is selected as the **Entitlement Name**.
- The group record contains `id: invoice-readers` and `displayName: Invoice Readers`.
- The employee account's `groups` list contains `invoice-readers`.

The value `invoice-readers` is the supplied native group reference used on both records. It is not an ISC object ID. These field names and values belong to this example; a different connector may use different supported fields and identifiers.

Why does the matching value matter? The account record says “this account holds `invoice-readers`.” The group record says “`invoice-readers` is the group displayed as Invoice Readers.” Within the correct source and type, the matching reference connects the membership to the object's details.

A display name alone cannot do that job. A group in a test environment might have the same name but represent a different access object.

```text
Invoice Production source

Employee's ISC identity
  |
  | correlated account
  v
Collected employee account
  businessUnit: West
  groups: [invoice-readers]
             |
             | same native reference
             v
Entitlement type: groups
  id: invoice-readers
  displayName: Invoice Readers

One group; many account memberships.
```

The vertical relationships show how the records connect, not a required collection schedule. Group details and account data can arrive at different times, so check the relevant collection's freshness when asking about current access.

The account's `businessUnit` value also influences what the application allows. It is not automatically an ISC entitlement. In this design, `groups` represents access membership, while `businessUnit` supplies a restriction used by the application.

Marking a field as an entitlement changes how ISC interprets that field. It does not configure the application's permission rules or place anyone in the group.

## Who decides whether an invoice can be opened?

Once the membership is represented, it is tempting to treat ISC as the system deciding each invoice action. For this integration, the application makes those decisions.

**Authentication** establishes who is signing in. **Authorization** determines what the authenticated account may do. Successful sign-in does not settle whether an invoice can be read or approved.

When the employee attempts to read an invoice, the application evaluates its own policy. In our supplied rules, it considers the account's group membership, business unit, requested action and the invoice's region.

The **scope** of a permission is the boundary of the resources it covers. Here, West is part of that boundary. Membership supplies the reading permission, while the business unit limits which invoices can be read.

```text
Employee signs into invoice application
  |
  v
Enabled account; sign-in succeeds
  groups: invoice-readers
  businessUnit: West
  |
  v
Application evaluates its own policy
  |
  +-- Read West invoice --> Allowed
  |
  +-- Read East invoice --> Denied
  |
  +-- Approve invoice ---> Denied

ISC records the represented access.
The application enforces these actions.
```

This diagram describes the supplied application policy. It does not describe an ISC rule engine, and the application does not ask ISC to approve each ordinary invoice-opening action in this example.

**Effective access** means what the account can actually do under the conditions being evaluated. The represented membership helps explain that outcome, but it may not describe all the conditions.

For example, an account restriction can prevent use even when a group is recorded. Another group can independently allow the same action. Some supported access is **Just-In-Time**, meaning it is authorized ahead of time but provisioned for use when activated. That differs from the continuously held membership used here, called **standing access**.

So if someone says “I have the entitlement, but access fails,” make the report more precise: which account attempted which action, on which resource, and when? Without those details, expected denial and broken delivery can look like the same problem.

## What can you trust on the screen?

The screen displays records and relationships supplied through the integration and ISC configuration. The application's permission rules determine what those records mean in use. A screen showing a group name does not establish that every part is correct.

For a support investigation, keep the evidence tied to the question:

| Evidence | What it establishes |
|---|---|
| Invoice Readers appears in the catalog | ISC represents that access object; this does not establish the employee's membership |
| The collected account includes the matching group reference | ISC recorded that account's membership at the relevant collection; freshness matters for a current-state claim |
| The account is correctly correlated | Its recorded access can be associated with the right identity; this does not establish that the access is appropriate |
| The application owner confirms the intended rule | Establishes the agreed permission meaning; current enforcement still needs suitable evidence |
| A current application check allows West reading | Establishes that action under the checked conditions, rather than every invoice or action |

Descriptions and owners help people interpret and govern those records. **Metadata** is information describing an object. An entitlement's description explains its purpose; its **owner** is an assigned responsible party for decisions about that access. The owner need not hold the access.

For Invoice Readers, “Read invoices within the account's business unit; no editing or approval” supports a better decision than “Basic access.”

However, changing an entitlement's display name or description in ISC does not send that change to the source or rewrite its permissions. If the application's actual group rule accidentally permits editing, editing must be addressed in the application's permission configuration through the approved process. Better wording alone cannot remove the capability.

## Does holding an entitlement mean ISC granted it?

Suppose an application administrator added the employee to Invoice Readers before the application was connected to ISC. Later account aggregation collects that membership.

ISC can represent access it did not originally grant. The membership record tells us what was collected, not necessarily why or through which process it was granted.

An **access request** asks for an access item for a recipient. Its configured process may include approval. A membership does not, by itself, prove that a request existed or an approver accepted it.

This is one reason accurate entitlement representation matters for **governance**, the work of deciding whether access is appropriate, accountable and maintained under the organization's policies. A **certification** is a review in which designated reviewers assess selected existing access and decide whether it should be retained or removed. Reviewing existing access has a purpose even when that access arrived outside ISC's request process.

Likewise, discovering an entitlement does not automatically make it **requestable**. Requestable means the applicable request configuration makes it available to request. Discovery, holding access, permission to request it and approval of a particular request are separate facts.

## Where do access profiles, roles and provisioning fit?

Once entitlements represent useful access units, ISC can organize them into larger sets.

An **access profile** bundles related entitlements from one source. An Invoice Review profile might combine Invoice Readers with another required entitlement on Invoice Production.

An **ISC role** groups access for a business purpose, such as a job function. It can contain access profiles or direct entitlements, from one source or across sources, and can be assigned through configured criteria or requests.

These objects organize access requirements. Including Invoice Readers in a bundle does not rewrite the application's reading permission.

The word role needs care here. A native role in an application can be represented as an entitlement. An ISC role is a different object used to organize and assign access. Identify which system owns the object before deciding what the word means.

**Provisioning** carries out account or access changes. If an authorized process calls for a new membership, fulfillment must actually add it to the selected external account. A decision that the employee should receive access is not evidence that the application accepted the change.

For a direct change, check whether the integration supports the operation, whether the source is configured for it, whether the connection has the necessary permissions, and what result the operation produced. Other configurations require manual fulfillment by a responsible person. Being able to read a group does not establish the ability to add a member to it.

Removing access also needs a precise object. Removing this account's membership changes its relationship to the group. Deleting the shared group affects the object used by other members and is not a substitute for removing one account's membership.

After an attempted addition or removal, use evidence appropriate to the outcome. An approved request does not establish a successful addition. An old collected membership does not establish that a recent removal failed.

Even a confirmed membership removal may leave the account able to read invoices through another independently granted group. “Remove this membership” and “eliminate all invoice reading” describe different outcomes to verify.

## What would you conclude from these records?

Each question supplies a separate variation. Where it does not change a fact, use the invoice policy and correctly associated employee account described above.

### 1. The group exists, but the account's list is empty

Entitlement aggregation collected Invoice Readers. A fresh account collection contains an empty `groups` list. A current application check confirms there is no other invoice-reading grant.

Does the catalog item establish that this employee holds Invoice Readers?

**Reasoning:** No. The access object exists, but the account has no recorded membership in it. The supplied check also rules out another reading grant for this case. A catalog entry cannot supply the missing account-to-group relationship.

### 2. There was no ISC access request

Fresh account evidence includes `invoice-readers`. The application administrator's change record confirms a direct membership addition in the application. No ISC request was used.

Does that make the recorded entitlement unreal or automatically inappropriate?

**Reasoning:** No. The membership exists and can be represented. How it was granted and whether it was authorized are separate questions. Review the applicable policy and authorization evidence to judge appropriateness; absence of an ISC request alone does not answer it.

### 3. Readers can now edit

The application owner confirms that a recent permission change accidentally gave Invoice Readers editing rights. A current check shows the employee can edit a West invoice. ISC still displays Invoice Readers.

Which change addresses the problem?

**Reasoning:** Correct the application's unintended permission rule through the approved change process, considering the affected members and intended scope. Renaming the entitlement or improving its description can help people understand it, but cannot remove editing. The confirmed policy change and current editing result establish the defect.

### 4. The name matches in test and production

A test source contains an entitlement displayed as Invoice Readers. The production account has no membership in the production Readers group. Someone uses the test catalog result as proof of production access.

Is that enough?

**Reasoning:** No. The catalog result belongs to a different source context. Check the production account, its membership reference and the matching production entitlement. Matching display names do not combine objects across environments.

### 5. Reading succeeds, approval fails

The account currently holds only Invoice Readers. West reading succeeds, approval is denied, and the owner reconfirms the stated policy.

Should you repeat provisioning of Invoice Readers?

**Reasoning:** The supplied access is behaving as intended. Repeating the same membership addition cannot turn a reading permission into an approval permission. Establish whether approval is a legitimate new requirement. If it is, use the approved access process for the appropriate item.

### 6. Twenty accounts reference one group

Twenty current account records on Invoice Production reference `invoice-readers`. The catalog contains one matching group record.

Are nineteen entitlement definitions missing?

**Reasoning:** No. One shared access object can have many holders. Expect the relevant membership on each account, rather than a separate definition of the same group for each member.

### 7. The membership is on the wrong identity

Ownership evidence in the application confirms which employee owns the account. Its `groups` list contains `invoice-readers`, but ISC associates the account with another person's identity.

Would changing the entitlement description repair the access view?

**Reasoning:** No. Investigate and correct the account-to-identity association under the approved correlation process. The membership is on the account, while the incorrect association places that account's recorded access on the wrong identity. A description does not repair that relationship or change native membership.

### 8. The membership was removed, but reading continues

Fresh application evidence confirms an authorized removal of Invoice Readers. The account still belongs to another group, Regional Report Readers. The owner confirms that this second group independently permits West invoice reading. A current read succeeds.

Does the successful read prove that the first removal failed?

**Reasoning:** No. The selected membership was removed; the remaining grant explains the capability. If the requirement was to eliminate all invoice reading, that broader outcome remains unmet. Review the second grant and its legitimate purpose before deciding on another change.

## Explain the same idea for a native application role

A project application has a native role named Project Reviewer. Its supported integration represents that role as an entitlement. In the correct source and entitlement type, the account's role reference `project-reviewer` matches the selected entitlement ID. The account is correctly associated with its owner in ISC.

The application's rule allows reading reports only for projects assigned to that account. It allows no editing. A current check confirms assigned-project reading succeeds and editing is denied. The entitlement has not been made requestable.

Explain why the native role can be an entitlement without being an ISC role. Then explain what establishes the holder relationship, why editing denial is expected, and why the catalog item is not automatically available as an access request.

**Reasoning:** Project Reviewer is an external access object, and the entitlement represents that object in ISC. An ISC role is a separate access-model object. The matching reference in the correct source and type establishes the account's recorded access; correct correlation associates it with its owner. The supplied application rule explains the editing denial. Making the entitlement requestable requires applicable request configuration, separate from collecting it.

When explaining an entitlement to someone else, connect its name to the external access object, the account holding it, and the permission the application enforces. Those connections let you explain both what the person holds and why a particular action is allowed or denied.
