(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{764:function(t,a,s){"use strict";s.r(a);var e=s(36),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"🚀-azure-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚀-azure-deployment"}},[t._v("#")]),t._v(" 🚀 Azure Deployment "),s("Badge",{attrs:{text:"draft",type:"error"}})],1),t._v(" "),s("p",[t._v("This tutorial assumes you've already installed the common prerequisites from the "),s("a",{attrs:{href:"./getting_started"}},[t._v("Getting Started")]),t._v(" guide.")]),t._v(" "),s("h2",{attrs:{id:"azure-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-prerequisites"}},[t._v("#")]),t._v(" Azure prerequisites")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("To follow this tutorial, you'll use the "),s("code",[t._v("az")]),t._v(" "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Command-Line Interface"),s("OutboundLink")],1),t._v(". If required, please refer to:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to install the Azure CLI"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get started with Azure CLI"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"initialize-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-the-project"}},[t._v("#")]),t._v(" Initialize the project")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./terraform/azure\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./terraform/azure\n")])])]),s("p",[t._v("After cloning our "),s("a",{attrs:{href:"https://github.com/SalesTim/hosting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hosting"),s("OutboundLink")],1),t._v(" repository, open the azure project directory:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./terraform/azure\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform init\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform init\n")])])]),s("p",[t._v("Initialize the terraform project using the "),s("code",[t._v("init")]),t._v(" command, which downloads a plugin that allows Terraform to interact with Azure.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform init\n")])])]),s("p",[t._v("When Terraform asks you to confirm type yes and press ENTER.")]),t._v(" "),s("h2",{attrs:{id:"minimal-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal-configuration"}},[t._v("#")]),t._v(" Minimal configuration")]),t._v(" "),s("p",[t._v("SalesTim comes with safe defaults, but you still need to define some settings specific to your environment. To do so, open the "),s("code",[t._v("variables.tf")]),t._v(" configuration file. It defines most of the configurable aspects of your environment.")]),t._v(" "),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "WEB_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the web tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "API_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the api tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_ID" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client ID."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_SECRET" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client Secret."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "WEB_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the web tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "API_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the api tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_ID" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client ID."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_SECRET" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client Secret."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Locate these keys and define the appropriate value in the "),s("code",[t._v("default")]),t._v(" field:")]),t._v(" "),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "WEB_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the web tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "API_PUBLICURL" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Public URL of the api tier"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_ID" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client ID."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "MICROSOFT_APP_CLIENT_SECRET" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Azure AD app registration client Secret."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("For more information about all the available configuration settings, please refer to "),s("a",{attrs:{href:"../references/configuration_reference"}},[t._v("Configuration Reference")])]),t._v(" "),s("h2",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[t._v("#")]),t._v(" Deploy")]),t._v(" "),s("p",[t._v("Now that you've defined your minimal configuration, you're ready to deploy your brand new SalesTim environment.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform plan\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform plan\n")])])]),s("p",[t._v("Before executing your project, validate your configuration using the "),s("code",[t._v("plan")]),t._v(" command.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform plan\n")])])]),s("p",[t._v("This command generates a human-readable version of your configuration and helps you validate the changes that are gonna be performed on your environment before actually executing it.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform apply\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform apply\n")])])]),s("p",[t._v("Once validated, execute the plan using the "),s("code",[t._v("apply")]),t._v(" command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("terraform apply\n")])])]),s("p",[t._v("You can now verify your installation by visiting "),s("a",{attrs:{href:"http://YOUR_AZURE_PUBLIC_URL/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://YOUR_AZURE_PUBLIC_URL/home"),s("OutboundLink")],1),t._v(" in your web browser.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])]),s("p",[t._v("You can also the the list of running containers with:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Congrats! You've now provisioned a full-featured SalesTim environment.")])]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),s("p",[t._v("At this stage, you should have a basic installation of SalesTim going. The latest step is to "),s("a",{attrs:{href:"./teams_package"}},[t._v("generate your Microsoft Teams package")])])])}),[],!1,null,null,null);a.default=r.exports}}]);