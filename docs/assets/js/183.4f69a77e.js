(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{617:function(e,t,a){"use strict";a.r(t);var r=a(36),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[e._v("#")]),e._v(" Releases")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("TABLE OF CONTENTS")])]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#targeted-release"}},[e._v("Targeted Release")]),a("ul",[a("li",[a("a",{attrs:{href:"#benefits"}},[e._v("Benefits")])]),a("li",[a("a",{attrs:{href:"#setup"}},[e._v("Setup")])])])]),a("li",[a("a",{attrs:{href:"#validation-rings"}},[e._v("Validation Rings")])]),a("li",[a("a",{attrs:{href:"#versioning-strategy"}},[e._v("Versioning Strategy")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"targeted-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#targeted-release"}},[e._v("#")]),e._v(" Targeted Release")]),e._v(" "),a("h3",{attrs:{id:"benefits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[e._v("#")]),e._v(" Benefits")]),e._v(" "),a("p",[e._v("Targeted release allows admins, change managers, or anyone else responsible for nBold updates to prepare for the upcoming changes by letting them:")]),e._v(" "),a("ul",[a("li",[e._v("Test and validate new updates before they are released to all the users in the organization.")]),e._v(" "),a("li",[e._v("Prepare user notification and documentation before updates are released.")]),e._v(" "),a("li",[e._v("Prepare internal help-desk for upcoming changes.")]),e._v(" "),a("li",[e._v("Go through compliance and security reviews.")]),e._v(" "),a("li",[e._v("Use feature controls, where applicable, to control the release of updates to end users.")])]),e._v(" "),a("h3",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("Access to targeted release is controlled by an "),a("RouterLink",{attrs:{to:"/platform/rbac.html"}},[e._v("RBAC")]),e._v(" policy. To grant a user access to targeted release features:")],1),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("code",[e._v("Settings")]),e._v(" tab")]),e._v(" "),a("li",[e._v("Open the "),a("code",[e._v("Roles (RBAC)")]),e._v(" section")]),e._v(" "),a("li",[e._v("Assign the "),a("code",[e._v("Change Manager")]),e._v(" role to the user")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Save")])])]),e._v(" "),a("h2",{attrs:{id:"validation-rings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-rings"}},[e._v("#")]),e._v(" Validation Rings")]),e._v(" "),a("p",[e._v('Our release process is comprised of multiple "rings" of validation that are related to specific environments, to a specific audience and a specific compliance labeling level:')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Ring")]),e._v(" "),a("th",[e._v("Environments")]),e._v(" "),a("th",[e._v("Primary Audience")]),e._v(" "),a("th",[e._v("Purpose")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("4")])]),e._v(" "),a("td",[a("strong",[e._v("production")])]),e._v(" "),a("td",[e._v("Customers (All)")]),e._v(" "),a("td",[e._v("Obvious isn't it? 😉")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("3.5")])]),e._v(" "),a("td",[a("strong",[e._v("staging")])]),e._v(" "),a("td",[e._v("DevOps Team")]),e._v(" "),a("td",[e._v("Test automated deployments and upgrades in an iso-production environment")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("3")])]),e._v(" "),a("td",[a("strong",[e._v("beta")])]),e._v(" "),a("td",[e._v("Customers (Preview)")]),e._v(" "),a("td",[e._v("Preview environment designed to help some customers prepare for updates, from a technical and change management standpoint")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("2")])]),e._v(" "),a("td",[a("strong",[e._v("uat")])]),e._v(" "),a("td",[e._v("Product Team")]),e._v(" "),a("td",[e._v("The product team tests the app to verify whether it meets their expectations")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("1.5")])]),e._v(" "),a("td",[a("strong",[e._v("alpha")])]),e._v(" "),a("td",[e._v("Partners (SI/ISV)")]),e._v(" "),a("td",[e._v("Give strategic partners an early look at the features we're currently working on")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("1")])]),e._v(" "),a("td",[a("strong",[e._v("dogfood")])]),e._v(" "),a("td",[e._v("Internal")]),e._v(" "),a("td",[e._v("Internal "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dogfooding"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("0")])]),e._v(" "),a("td",[a("strong",[e._v("integration")])]),e._v(" "),a("td",[e._v("DevOps Team")]),e._v(" "),a("td",[e._v("Integrations and functional testing by the tech team")])])])]),e._v(" "),a("p",[e._v("Using this kind of rings has many advantages:")]),e._v(" "),a("ul",[a("li",[e._v("Clear and common understanding of each ring purpose")]),e._v(" "),a("li",[e._v("Separation of concerns")]),e._v(" "),a("li",[e._v("Real isolation between environments")]),e._v(" "),a("li",[e._v("Enforced security")])]),e._v(" "),a("h2",{attrs:{id:"versioning-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning-strategy"}},[e._v("#")]),e._v(" Versioning Strategy")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MAJOR.MINOR.PATCH-BUILD\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MAJOR.MINOR.PATCH-BUILD\n")])])]),a("p",[e._v("Our versioning strategy adheres to "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nA version number may be comprised of 3 to 4 components and takes this form:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MAJOR.MINOR.PATCH-BUILD\n")])])]),a("p",[e._v("Meaning of each component:")]),e._v(" "),a("ul",[a("li",[e._v("MAJOR: version that includes incompatible changes (data schema, api signatures...)")]),e._v(" "),a("li",[e._v("MINOR: version that includes functionality in a backwards-compatible manner")]),e._v(" "),a("li",[e._v("PATCH: version that includes backwards-compatible bug fixes")]),e._v(" "),a("li",[e._v("BUILD: incremental development-only version")])]),e._v(" "),a("Classification",{attrs:{label:"public"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);