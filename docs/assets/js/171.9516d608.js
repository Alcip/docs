(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{603:function(e,t,a){"use strict";a.r(t);var s=a(36),r=function(e){e.options.__data__block__={mermaid_382ee148:"graph LR\n\n    %% Nodes\n    s([Start])\n    subgraph adop[Azure AD]\n        appreg(1. AD App Registration)\n    end\n    subgraph pp[Power Platform]\n        openapi(2. OpenAPI Import)\n        papps(3. Power Apps)\n        pauto(3. Power Automate)\n        pbi(3. Power BI)\n    end\n    e([End])\n\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n\n    %% Links\n    s --\x3e appreg\n    appreg --\x3e|Client id & secret| openapi\n    openapi --\x3e|Use| papps\n    openapi --\x3e|Use| pauto\n    openapi --\x3e|Use| pbi\n    papps --\x3e e\n    pauto --\x3e e\n    pbi --\x3e e\n"}},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setup-the-connector-for-power-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-connector-for-power-platform"}},[e._v("#")]),e._v(" Setup the Connector for Power Platform")]),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")]),e._v(":\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#procedure-overview"}},[e._v("Procedure Overview")])]),a("li",[a("a",{attrs:{href:"#create-a-new-app-registration-in-azure-active-directory"}},[e._v("Create a new app registration in Azure Active Directory")])]),a("li",[a("a",{attrs:{href:"#import-the-salestim-openapi-definition"}},[e._v("Import the SalesTim OpenAPI definition")])]),a("li",[a("a",{attrs:{href:"#how-to-update-the-power-platform-connector"}},[e._v("How to update the Power Platform Connector")])]),a("li",[a("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"procedure-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-overview"}},[e._v("#")]),e._v(" Procedure Overview")]),e._v(" "),a("p",[e._v("Here is an overview of the overall procedure:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee148",graph:e.$dataBlock.mermaid_382ee148}}),a("h2",{attrs:{id:"create-a-new-app-registration-in-azure-active-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-app-registration-in-azure-active-directory"}},[e._v("#")]),e._v(" Create a new app registration in Azure Active Directory")]),e._v(" "),a("p",[e._v("To securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as SalesTim, and defines the permissions you wan to grant to it. To learn more, you can refer to "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added",target:"_blank",rel:"noopener noreferrer"}},[e._v("How and why applications are added to Azure AD"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To create a new app registration, follow these steps:")]),e._v(" "),a("ul",[a("li",[e._v("Open your "),a("a",{attrs:{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("App registrations")]),e._v(" from the left menu")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("New registration")]),e._v(" from the top bar")]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Give the app a name, such as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim Power Platform Connector\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim Power Platform Connector\n")])])]),a("ul",[a("li",[e._v("Select the option "),a("code",[e._v("Accounts in this organizational directory only")]),e._v(", as you want to restrict access to your own tenant.")]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Use this web redirection URL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://global.consent.azure-apim.net/redirect\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://global.consent.azure-apim.net/redirect\n")])])]),a("ul",[a("li",[e._v("Click "),a("code",[e._v("Register")])]),e._v(" "),a("li",[e._v("From the "),a("code",[e._v("Overview")]),e._v(" menu, copy the "),a("code",[e._v("Application (client) ID")]),e._v(", and keep it as we're gonna reuse it later.")]),e._v(" "),a("li",[e._v("Open the "),a("code",[e._v("Authentication")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Ensure that the "),a("code",[e._v("Access tokens (used for implicit flows)")]),e._v(" and "),a("code",[e._v("ID tokens (used for implicit and hybrid flows)")]),e._v(" options are checked from the "),a("code",[e._v("Implicit grant and hybrid flows")]),e._v(" section, and save your updates if required.")]),e._v(" "),a("li",[e._v("Open the "),a("code",[e._v("Certificates and secrets")]),e._v(" menu and click "),a("code",[e._v("New client secret")]),e._v(". A client secret is a kind of a password for your app, so manage it carefully.")]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Give a name to your client secret such as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim Power Platform Connector client secret\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim Power Platform Connector client secret\n")])])]),a("ul",[a("li",[e._v("Select the expiration option, and click "),a("code",[e._v("Add")])]),e._v(" "),a("li",[e._v("Copy the "),a("code",[e._v("Secret Value")]),e._v(" value (be careful, it will only be shown once), and keep it as we're gonna reuse it later. You can temporarily paste it here:")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Be careful")]),e._v(" "),a("p",[e._v("You should use the "),a("code",[e._v("Secret Value")]),e._v(", not the "),a("code",[e._v("Secret ID")]),e._v("!")])]),e._v(" "),a("ul",[a("li",[e._v("Open the "),a("code",[e._v("API permissions")]),e._v(" from the left menu and click "),a("code",[e._v("Add a permission")]),e._v(" from the top bar")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Microsoft Graph")]),e._v(", then from the permissions list, select the appropriate permissions as described in our "),a("a",{attrs:{href:"../references/permissions"}},[e._v("Permissions References")]),e._v(" documentation.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add permissions")])]),e._v(" "),a("li",[e._v("Then click "),a("code",[e._v("Grant admin consent for...")]),e._v(" then "),a("code",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("You're done, you've created your app registration for the SalesTim Connector. You should also have saved for later the "),a("code",[e._v("Application (client) ID")]),e._v(" and "),a("code",[e._v("Client secret")]),e._v(" that we're gonna use in the next steps.")]),e._v(" "),a("h2",{attrs:{id:"import-the-salestim-openapi-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-the-salestim-openapi-definition"}},[e._v("#")]),e._v(" Import the SalesTim OpenAPI definition")]),e._v(" "),a("p",[e._v("Now that we've created the app registration, we're gonna use it to create our custom connector.")]),e._v(" "),a("ul",[a("li",[e._v("To import the SalesTim API OpenAPI definitions for Power Automate and Power Apps, go to "),a("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerApps"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The custom connector you're about to create will be available for both PowerApps and Power Automate, as they're sharing the same list of connectors.")])]),e._v(" "),a("ul",[a("li",[e._v("In the navigation pane, select "),a("code",[e._v("Data")]),e._v(" then "),a("code",[e._v("Custom connectors")]),e._v(".")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("New custom connector")]),e._v(" then choose "),a("code",[e._v("Import an OpenAPI from URL")])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Give your connector a name, such as :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SalesTim\n")])])]),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Paste this URL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.json\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.json\n")])])]),a("ul",[a("li",[e._v("Click "),a("code",[e._v("Import")]),e._v(", then "),a("code",[e._v("Continue")])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Upload the connector logo that you can download from:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://www.salestim.com/wp-content/uploads/2019/05/color.png\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://www.salestim.com/wp-content/uploads/2019/05/color.png\n")])])]),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Set the icon background color to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#000000\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#000000\n")])])]),a("ul",[a("li",[e._v("Update the "),a("code",[e._v("Host")]),e._v(" property using the host URL you've defined for your API service")]),e._v(" "),a("li",[e._v("Make sure the "),a("code",[e._v("Base URL")]),e._v(" property is defined at "),a("code",[e._v("/api/v1.0")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Security")])]),e._v(" "),a("li",[e._v("Ensure that the authentication type is set to "),a("code",[e._v("OAuth 2.0")]),e._v(" and the identity provider is set to "),a("code",[e._v("Azure Active Directory")])]),e._v(" "),a("li",[e._v("Paste the previously copied "),a("code",[e._v("Client id")]),e._v(" and "),a("code",[e._v("Client secret")])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Ensure that the login url is set to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://login.windows.net\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://login.windows.net\n")])])]),a("ul",[a("li",[e._v("Ensure that the tenant ID is set to:\n"),a("code",[e._v("common")])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Set the resource URL to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://graph.microsoft.com\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://graph.microsoft.com\n")])])]),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Set the scope to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://graph.microsoft.com/.default\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://graph.microsoft.com/.default\n")])])]),a("ul",[a("li",[e._v("Click "),a("code",[e._v("Create connector")]),e._v(", then "),a("code",[e._v("Close")])])]),e._v(" "),a("h2",{attrs:{id:"how-to-update-the-power-platform-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-the-power-platform-connector"}},[e._v("#")]),e._v(" How to update the Power Platform Connector")]),e._v(" "),a("p",[e._v("To update your Power Platform connector:")]),e._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])]),e._v("Open the updated "),a("a",{attrs:{target:"_blank",href:"https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml"}},[e._v("connector definition")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml\n")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://developers.salestim.com/api/definitions/v1.0/open-api/power-platform/apiDefinition.swagger.yaml\n")])])]),a("ul",[a("li",[e._v("Copy the whole content")]),e._v(" "),a("li",[e._v("From Power Apps or Power Automate, open your custom connector from the "),a("code",[e._v("Data \\ Custom connectors")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Swagger Editor")])]),e._v(" "),a("li",[e._v("From the left page, replace the content by pasting the updated connector definition")]),e._v(" "),a("li",[e._v("Update the "),a("code",[e._v("Host")]),e._v(" property using the host URL you've defined for your API service")]),e._v(" "),a("li",[e._v("Make sure the "),a("code",[e._v("Base URL")]),e._v(" property is defined at "),a("code",[e._v("/api/v1.0")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Update connector")])])]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("Now that you've created the SalesTim connector, you can use it from "),a("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Apps"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://powerbi.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI"),a("OutboundLink")],1),e._v(". See the available "),a("a",{attrs:{href:"https://developers.salestim.com/connectors/connectors-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Triggers and Actions"),a("OutboundLink")],1),e._v(" for reference.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 To Go Further")]),e._v(" "),a("p",[e._v("Here are a few interesting articles that may give you some guidelines and new ideas on how to use the the SalesTim Connector:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.salestim.com/power-automate-with-microsoft-teams-the-full-tutorial-with-examples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate with Microsoft Teams: The Full Tutorial with Examples"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/power-automate/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get started with Power Automate"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.salestim.com/power-bi-with-microsoft-teams-how-to-manage-reports-effectively/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI with Microsoft Teams: How to Manage Reports Effectively"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(o);t.default=o.exports}}]);