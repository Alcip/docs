(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{585:function(e,t,a){"use strict";a.r(t);var o=a(36),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"team-creation-approval-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#team-creation-approval-workflow"}},[e._v("#")]),e._v(" Team creation approval workflow")]),e._v(" "),a("p",[a("strong",[e._v("ABSTRACT")]),a("br"),e._v("\nThis article describes the different options you have to configure your team creation approval workflow.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")])]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#understanding-your-options"}},[e._v("Understanding your options")])]),a("li",[a("a",{attrs:{href:"#approval-email-sent-by-nbold"}},[e._v("Approval email sent by nBold")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-does-it-work"}},[e._v("How does it work?")])]),a("li",[a("a",{attrs:{href:"#what-about-security"}},[e._v("What about security?")])])])]),a("li",[a("a",{attrs:{href:"#approval-email-sent-by-your-organization"}},[e._v("Approval email sent by your organization")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-does-it-work"}},[e._v("How does it work?")])]),a("li",[a("a",{attrs:{href:"#what-do-i-have-to-do"}},[e._v("What do I have to do?")])]),a("li",[a("a",{attrs:{href:"#what-about-security"}},[e._v("What about security?")])])])]),a("li",[a("a",{attrs:{href:"#microsoft-teams-approval-app"}},[e._v('Microsoft Teams "Approval" app')])]),a("li",[a("a",{attrs:{href:"#use-your-own-custom-app"}},[e._v("Use your own custom app")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"understanding-your-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-your-options"}},[e._v("#")]),e._v(" Understanding your options")]),e._v(" "),a("p",[e._v("Team creation approval workflow in nBold could be configured using one of these options:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#approval-email-sent-by-salestim"}},[e._v("Approval email sent by nBold")]),e._v(": This is the default and easiest option, works without any configuration.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#approval-email-sent-by-your-organization"}},[e._v("Approval email sent by your organization")]),e._v(": If you need advanced security/compliance control over your notification emails.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#microsoft-teams-approval-app"}},[e._v("Microsoft Teams Approval App")]),e._v(": A Microsoft Teams native experience, that you can customize using Power Automate or Logic Apps.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#use-your-own-custom-app"}},[e._v("Use your own custom app")]),e._v(": Bring your own aproval workflow as a custom application.")])]),e._v(" "),a("h2",{attrs:{id:"approval-email-sent-by-nbold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approval-email-sent-by-nbold"}},[e._v("#")]),e._v(" Approval email sent by nBold")]),e._v(" "),a("h3",{attrs:{id:"how-does-it-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),a("p",[e._v("This is the option enabled by default in any new organization, and doesn't require any configuration. In this mode, the approval process is implemented as an Outlook actionable email, send from the "),a("code",[e._v("notifications@salestim.io")]),e._v(" address.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message.png",alt:"nBold Approval Workflow Actionable Message"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📧 IMPORTANT")]),e._v(" "),a("p",[e._v("nBold does "),a("strong",[e._v("NOT")]),e._v(" collect "),a("strong",[e._v("ANYTHING")]),e._v(" from these notification emails, neither openings, nor clicks, and does not include any invisible image or other form of tracker.")])]),e._v(" "),a("h3",{attrs:{id:"what-about-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-about-security"}},[e._v("#")]),e._v(" What about security?")]),e._v(" "),a("p",[e._v("Actionable messages security is guaranteed by:")]),e._v(" "),a("ul",[a("li",[e._v("The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.")]),e._v(" "),a("li",[e._v("A sender verification is enforced using signed cards. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sender verification\n"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Phishing prevention is ensured by using a "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Card Signing"),a("OutboundLink")],1),e._v(" mechanism")]),e._v(" "),a("li",[e._v("Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying that requests come from Microsoft"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The token provided by Outlook to the actionable message is used to verify the end-user identity. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying the identity of the user"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Learn more by reading "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security requirements for actionable messages in Office 365"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Configure Exchange safelist collections on a mailbox")]),e._v(" "),a("p",[e._v("As a Microsoft 365 administrator, you can directly manage an end-user mailbox rules, and add the "),a("code",[e._v("notifications@salestim.io")]),e._v(' address to its "Safe Senders" list.'),a("br"),e._v("\nSee "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide#use-exchange-online-powershell-to-configure-the-safelist-collection-on-a-mailbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Exchange Online PowerShell to configure the safelist collection on a mailbox"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"approval-email-sent-by-your-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approval-email-sent-by-your-organization"}},[e._v("#")]),e._v(" Approval email sent by your organization")]),e._v(" "),a("h3",{attrs:{id:"how-does-it-work-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work-2"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),a("p",[e._v("For advanced control over your approval notification emails (for instance to implement custom Exchange transport rules), you can configure nBold to send your approval emails from your own internal email as a sender.")]),e._v(" "),a("h3",{attrs:{id:"what-do-i-have-to-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-have-to-do"}},[e._v("#")]),e._v(" What do I have to do?")]),e._v(" "),a("p",[e._v("You need to enable the service account that you configured in nBold to be authorized to send actionable messages. For that, and to ensure the security around the messages that are sent, Microsoft require to follow these quick steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the "),a("a",{attrs:{href:"https://aka.ms/publishoam",target:"_blank",rel:"noopener noreferrer"}},[e._v("Actionable Email Developer Dashboard"),a("OutboundLink")],1),e._v(" and login with a Microsoft 365 user with "),a("code",[e._v("Exchange Administrator")]),e._v(" or "),a("code",[e._v("Global administrator")]),e._v(" permissions.")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("New provider")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-add.png",alt:"nBold Approval Actionable Message New Provider 2"}})]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Fill the form:")]),e._v(" "),a("ul",[a("li",[e._v("Friendly Name: "),a("code",[e._v("nBold")]),e._v(" Or "),a("code",[e._v("Teams Approval")]),e._v(" for example")]),e._v(" "),a("li",[e._v("Provider Id (originator): Copy the value that is "),a("strong",[e._v("Automatically generated")])]),e._v(" "),a("li",[e._v("Organization Info: "),a("strong",[e._v("Automatically generated")])]),e._v(" "),a("li",[e._v("Sender email address from which actionable emails will originate: "),a("strong",[e._v("Your service account email address")])]),e._v(" "),a("li",[e._v("Target URLs: "),a("code",[e._v("https://api.salestim.io")])]),e._v(" "),a("li",[a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code")])]),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code")])]),e._v("Public Key:")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ=="),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("AQAB"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ=="),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Modulus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("AQAB"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Exponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("RSAKeyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("ul",[a("li",[e._v("Logo: "),a("strong",[e._v("You can use the "),a("a",{attrs:{href:"https://docs.nbold.co/color.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("nBold Logo"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-form.png",alt:"nBold Approval Actionable Message New Provider Form"}})]),e._v(" "),a("ul",[a("li",[e._v("Scope of submission: "),a("code",[e._v("Organization")])]),e._v(" "),a("li",[e._v("Additional Information: "),a("strong",[e._v("One of your Microsoft 365 Exchange or Global administrators")]),a("br"),e._v(" "),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Before submitting the form, "),a("em",[a("strong",[e._v("BE SURE TO COPY THE PROVIDER ID VALUE")])])])]),e._v(" "),a("li",[a("p",[e._v('Accept the terms and conditions and hit "Save"')])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-form-2.png",alt:"nBold Approval Actionable Message New Provider Form 2"}})]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("Wait for your Microsoft 365 Exchange or Global administrators to approve this request\n"),a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-pending-approval.png",alt:"nBold Approval Actionable Message New Provider Pending Approval"}})])]),e._v(" "),a("li",[a("p",[e._v("Global Admin and Exchange Administrators are then receiving the request in inbox that needs to be approved.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approval-email.png",alt:"nBold Approval Actionable Message New Provider Approval email"}})]),e._v(" "),a("ul",[a("li",[e._v("the administrator needs to approve:")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approve.png",alt:"nBold Approval Actionable Message New Provider Approve"}})]),e._v(" "),a("ul",[a("li",[e._v("The Provider is then confirmed as approved")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approval-actionable-message-new-provider-approved.png",alt:"nBold Approval Actionable Message New Provider Approved"}})]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v('Open the nBold Settings tab and open "Approval" and check the "Enable organization-level provider" option')]),e._v(" "),a("li",[e._v('Paste the provider id you copied in the step 3 and hit "Save"')])]),e._v(" "),a("p",[e._v("From the nBold Catalog, you should now be able to enable the approval workflow on your templates (You may have to refresh the page to see your changes).")]),e._v(" "),a("p",[e._v("For more details about this procedure, you may refer to "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Register your service with the actionable email developer dashboard"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"what-about-security-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-about-security-2"}},[e._v("#")]),e._v(" What about security?")]),e._v(" "),a("p",[e._v("Actionable messages security is guaranteed by:")]),e._v(" "),a("ul",[a("li",[e._v("The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token.")]),e._v(" "),a("li",[e._v("A sender verification is enforced using signed cards. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sender verification\n"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Phishing prevention is ensured by using a "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Card Signing"),a("OutboundLink")],1),e._v(" mechanism")]),e._v(" "),a("li",[e._v("Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying that requests come from Microsoft"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The token provided by Outlook to the actionable message is used to verify the end-user identity. See: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verifying the identity of the user"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Learn more by reading "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security requirements for actionable messages in Office 365"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"microsoft-teams-approval-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-teams-approval-app"}},[e._v("#")]),e._v(' Microsoft Teams "Approval" app')]),e._v(" "),a("p",[e._v("Instead of relying on Outlook actionable emails, you can leverage the "),a("a",{attrs:{href:"https://support.microsoft.com/en-us/office/what-is-approvals-a9a01c95-e0bf-4d20-9ada-f7be3fc283d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Teams Approvals app"),a("OutboundLink")],1),e._v(" to implement your team creation approval workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/approvals-app.png",alt:"nBold Approval Workflow with Approval App"}})]),e._v(" "),a("p",[e._v("This options brings some valuable benefits and new options:")]),e._v(" "),a("ul",[a("li",[e._v("Multi-stage approvals")]),e._v(" "),a("li",[e._v("Dynamic approvers list (for instance based on the requester profile and manager)")]),e._v(" "),a("li",[e._v("Integration with third-party apps")])]),e._v(" "),a("p",[e._v("To learn more about this option, please read the "),a("RouterLink",{attrs:{to:"/connectors/"}},[e._v("Power Platform and Logic Apps Connectors")]),e._v(" documentation, and refer to these connector's triggers that you can leverage from Microsoft Power Platform and Azure Logic Apps:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/connectors/connectors-actions.html#when-a-team-creation-approval-is-requested-🛃"}},[e._v("When a Team Creation Approval is Requested")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/connectors/connectors-actions.html#when-a-team-creation-is-approved-✅"}},[e._v("When a Team Creation is Approved")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/connectors/connectors-actions.html#when-a-team-creation-is-rejected-🚫"}},[e._v("When a Team Creation is Rejected")])],1)]),e._v(" "),a("h2",{attrs:{id:"use-your-own-custom-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-your-own-custom-app"}},[e._v("#")]),e._v(" Use your own custom app")]),e._v(" "),a("p",[e._v("Instead of relying on Outlook actionable emails, you can use your own custom application to manage approval workflows.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/nocode/custom-approval.png",alt:"nBold Approval Workflow with Custom App"}})]),e._v(" "),a("p",[e._v("To learn more about this option, please read the "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("nBold API")]),e._v(" documentation, and refer to these webhooks that you can leverage from your custom application:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/api/webhooks.html#team-creation-approval-requested"}},[e._v("Team Creation Approval Requested")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/api/webhooks.html#supported-events"}},[e._v("Team Creation Approved")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/api/webhooks.html#team-creation-rejected"}},[e._v("Team Creation Rejected")])],1)]),e._v(" "),a("Classification",{attrs:{label:"public"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);