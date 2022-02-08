(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{516:function(t,a,s){"use strict";s.r(a);var e=s(36),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"n-bold-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n-bold-api"}},[t._v("#")]),t._v(" n_bold_api")]),t._v(" "),s("p",[t._v("NBoldApi - JavaScript client for n_bold_api\nVisit our "),s("a",{attrs:{href:"https://docs.nbold.co/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API documentation"),s("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),s("p",[t._v("This SDK is automatically generated by the "),s("a",{attrs:{href:"https://openapi-generator.tech",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenAPI Generator"),s("OutboundLink")],1),t._v(" project:")]),t._v(" "),s("ul",[s("li",[t._v("API version: 2.0.0")]),t._v(" "),s("li",[t._v("Package version: 2.0.0")]),t._v(" "),s("li",[t._v("Build package: org.openapitools.codegen.languages.JavascriptClientCodegen\nFor more information, please visit "),s("a",{attrs:{href:"https://docs.nbold.co/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.nbold.co/api"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h3",{attrs:{id:"for-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-node-js"}},[t._v("#")]),t._v(" For "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),s("p",[t._v("To publish the library as a "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(", please follow the procedure in "),s("a",{attrs:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Publishing npm packages"'),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Then install it via:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" n_bold_api --save\n")])])]),s("p",[t._v("Finally, you need to build the module:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h5",{attrs:{id:"local-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[t._v("#")]),t._v(" Local development")]),t._v(" "),s("p",[t._v("To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing "),s("code",[t._v("package.json")]),t._v(" (and this README). Let's call this "),s("code",[t._v("JAVASCRIPT_CLIENT_DIR")]),t._v(". Then run:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("Next, "),s("a",{attrs:{href:"https://docs.npmjs.com/cli/link",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(" it globally in npm with the following, also from "),s("code",[t._v("JAVASCRIPT_CLIENT_DIR")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n")])])]),s("p",[t._v("To use the link you just defined in your project, switch to the directory you want to use your n_bold_api from, and run:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" /path/to/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JAVASCRIPT_CLIENT_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Finally, you need to build the module:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h4",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("p",[t._v("If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID\nthen install it via:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" GIT_USER_ID/GIT_REPO_ID --save\n")])])]),s("h3",{attrs:{id:"for-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-browser"}},[t._v("#")]),t._v(" For browser")]),t._v(" "),s("p",[t._v("The library also works in the browser environment via npm and "),s("a",{attrs:{href:"http://browserify.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserify"),s("OutboundLink")],1),t._v(". After following\nthe above steps with Node.js and installing browserify with "),s("code",[t._v("npm install -g browserify")]),t._v(",\nperform the following (assuming "),s("em",[t._v("main.js")]),t._v(" is your entry file):")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("browserify main.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bundle.js\n")])])]),s("p",[t._v("Then include "),s("em",[t._v("bundle.js")]),t._v(" in the HTML pages.")]),t._v(" "),s("h3",{attrs:{id:"webpack-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configuration"}},[t._v("#")]),t._v(" Webpack Configuration")]),t._v(" "),s("p",[t._v('Using Webpack you may encounter the following error: "Module not found: Error:\nCannot resolve module", most certainly you should disable AMD loader. Add/merge\nthe following section to your webpack config:')]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("amd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Please follow the "),s("a",{attrs:{href:"#installation"}},[t._v("installation")]),t._v(" instruction and execute the following JS code:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" NBoldApi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n_bold_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Bearer (JWT) access token for authorization: bearerAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bearerAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearerAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbearerAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR ACCESS TOKEN"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApprovalsApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" approvalRequestId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"approvalRequestId_example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {String} The approval request ID.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'approvedApprovalResponsePayload'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NBoldApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApprovedApprovalResponsePayload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {ApprovedApprovalResponsePayload} An ApprovedApprovalResponsePayload object.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("approveTeamCreation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("approvalRequestId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"documentation-for-api-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-api-endpoints"}},[t._v("#")]),t._v(" Documentation for API Endpoints")]),t._v(" "),s("p",[t._v("All URIs are relative to "),s("em",[t._v("https://api.nbold.co/production")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Class")]),t._v(" "),s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("HTTP request")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("NBoldApi.ApprovalsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovalsApi.html#approveTeamCreation"}},[s("strong",[t._v("approveTeamCreation")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /approvals/{approvalRequestId}/approve")]),t._v(" "),s("td",[t._v("Approve a team creation request")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.ApprovalsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovalsApi.html#rejectTeamCreation"}},[s("strong",[t._v("rejectTeamCreation")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /approvals/{approvalRequestId}/reject")]),t._v(" "),s("td",[t._v("Reject a team creation request")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.AuditTrailsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/AuditTrailsApi.html#getAuditTrailRecords"}},[s("strong",[t._v("getAuditTrailRecords")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /audittrails/{code}/records")]),t._v(" "),s("td",[t._v("Get all the records from an audit trail")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.AuditTrailsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/AuditTrailsApi.html#getAuditTrails"}},[s("strong",[t._v("getAuditTrails")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /audittrails")]),t._v(" "),s("td",[t._v("Get audit trails")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.JobsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/JobsApi.html#getJob"}},[s("strong",[t._v("getJob")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /jobs/{jobId}")]),t._v(" "),s("td",[t._v("Get information about a job")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.SensitivityLabelsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/SensitivityLabelsApi.html#getMyLabels"}},[s("strong",[t._v("getMyLabels")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /me/labels")]),t._v(" "),s("td",[t._v("Get my sensitivity labels")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#addTeamMember"}},[s("strong",[t._v("addTeamMember")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/members")]),t._v(" "),s("td",[t._v("Add a team member")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#archiveTeam"}},[s("strong",[t._v("archiveTeam")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/archive")]),t._v(" "),s("td",[t._v("Archive a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#createTeamChannel"}},[s("strong",[t._v("createTeamChannel")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/channels")]),t._v(" "),s("td",[t._v("Create a new team channel")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#createTeamChannelTab"}},[s("strong",[t._v("createTeamChannelTab")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/channels/{channelId}/tabs")]),t._v(" "),s("td",[t._v("Create a new team channel tab")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#createTeamProvisioningJob"}},[s("strong",[t._v("createTeamProvisioningJob")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/provisioning")]),t._v(" "),s("td",[t._v("Create a new team based on a template")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#deleteTeam"}},[s("strong",[t._v("deleteTeam")])])],1),t._v(" "),s("td",[s("strong",[t._v("DELETE")]),t._v(" /teams/{teamId}")]),t._v(" "),s("td",[t._v("Delete a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#getTeam"}},[s("strong",[t._v("getTeam")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /teams/{teamId}")]),t._v(" "),s("td",[t._v("Get a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#getTeamChannelTabs"}},[s("strong",[t._v("getTeamChannelTabs")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /teams/{teamId}/channels/{channelId}/tabs")]),t._v(" "),s("td",[t._v("Get team channel tabs")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#getTeamChannels"}},[s("strong",[t._v("getTeamChannels")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /teams/{teamId}/channels")]),t._v(" "),s("td",[t._v("Get team channels")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#getTeamPrimaryChannel"}},[s("strong",[t._v("getTeamPrimaryChannel")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /teams/{teamId}/channels/primary")]),t._v(" "),s("td",[t._v("Get the primary channel of a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#unarchiveTeam"}},[s("strong",[t._v("unarchiveTeam")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /teams/{teamId}/unarchive")]),t._v(" "),s("td",[t._v("Unarchive a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TeamsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamsApi.html#updateTeam"}},[s("strong",[t._v("updateTeam")])])],1),t._v(" "),s("td",[s("strong",[t._v("PATCH")]),t._v(" /teams/{teamId}")]),t._v(" "),s("td",[t._v("Update a team")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TemplatesCatalogApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TemplatesCatalogApi.html#getCatalogTemplates"}},[s("strong",[t._v("getCatalogTemplates")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /catalog/templates")]),t._v(" "),s("td",[t._v("Get teams templates")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.TemplatesCatalogApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TemplatesCatalogApi.html#getMyCatalogTemplates"}},[s("strong",[t._v("getMyCatalogTemplates")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /me/catalog/templates")]),t._v(" "),s("td",[t._v("Get my teams templates")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.UsersApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/UsersApi.html#getUsers"}},[s("strong",[t._v("getUsers")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /users")]),t._v(" "),s("td",[t._v("Retreive users from your Microsoft 365 environment")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.WebhooksApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/WebhooksApi.html#createHook"}},[s("strong",[t._v("createHook")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /hooks")]),t._v(" "),s("td",[t._v("Create a new webhook")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.WebhooksApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/WebhooksApi.html#deleteHook"}},[s("strong",[t._v("deleteHook")])])],1),t._v(" "),s("td",[s("strong",[t._v("DELETE")]),t._v(" /hooks/{hookId}")]),t._v(" "),s("td",[t._v("Delete a webhook")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.WebhooksApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/WebhooksApi.html#generateHookSignature"}},[s("strong",[t._v("generateHookSignature")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /hooks/signature")]),t._v(" "),s("td",[t._v("Generate a signature from a secret and a webhook payload")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("NBoldApi.WebhooksApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/WebhooksApi.html#getHooksEvents"}},[s("strong",[t._v("getHooksEvents")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /hooks/events")]),t._v(" "),s("td",[t._v("Get webhooks events")])])])]),t._v(" "),s("h2",{attrs:{id:"documentation-for-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-models"}},[t._v("#")]),t._v(" Documentation for Models")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApiError.html"}},[t._v("NBoldApi.ApiError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApiErrorError.html"}},[t._v("NBoldApi.ApiErrorError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApiErrorErrorInnerError.html"}},[t._v("NBoldApi.ApiErrorErrorInnerError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovalTeamMember.html"}},[t._v("NBoldApi.ApprovalTeamMember")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovedApprovalResponsePayload.html"}},[t._v("NBoldApi.ApprovedApprovalResponsePayload")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovedApprovalResponsePayloadApprover.html"}},[t._v("NBoldApi.ApprovedApprovalResponsePayloadApprover")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/ApprovedApprovalResponsePayloadUpdates.html"}},[t._v("NBoldApi.ApprovedApprovalResponsePayloadUpdates")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/AuditTrail.html"}},[t._v("NBoldApi.AuditTrail")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/AuditTrailRecords.html"}},[t._v("NBoldApi.AuditTrailRecords")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/AuditTrails.html"}},[t._v("NBoldApi.AuditTrails")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplate.html"}},[t._v("NBoldApi.CatalogTemplate")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateClonedTeam.html"}},[t._v("NBoldApi.CatalogTemplateClonedTeam")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateNewTeam.html"}},[t._v("NBoldApi.CatalogTemplateNewTeam")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateTemplateConfiguration.html"}},[t._v("NBoldApi.CatalogTemplateTemplateConfiguration")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateTemplateConfigurationApproval.html"}},[t._v("NBoldApi.CatalogTemplateTemplateConfigurationApproval")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateTemplateConfigurationAudienceTargeting.html"}},[t._v("NBoldApi.CatalogTemplateTemplateConfigurationAudienceTargeting")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplateTemplateConfigurationPermanentMembership.html"}},[t._v("NBoldApi.CatalogTemplateTemplateConfigurationPermanentMembership")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/CatalogTemplates.html"}},[t._v("NBoldApi.CatalogTemplates")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Hook.html"}},[t._v("NBoldApi.Hook")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HookConfig.html"}},[t._v("NBoldApi.HookConfig")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HookEvent.html"}},[t._v("NBoldApi.HookEvent")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HookPayload.html"}},[t._v("NBoldApi.HookPayload")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HookSignature.html"}},[t._v("NBoldApi.HookSignature")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HookSignatureRequest.html"}},[t._v("NBoldApi.HookSignatureRequest")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/HooksEvents.html"}},[t._v("NBoldApi.HooksEvents")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Job.html"}},[t._v("NBoldApi.Job")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Label.html"}},[t._v("NBoldApi.Label")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Labels.html"}},[t._v("NBoldApi.Labels")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/MemberUserIdentifier.html"}},[t._v("NBoldApi.MemberUserIdentifier")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/OwnerUserIdentifier.html"}},[t._v("NBoldApi.OwnerUserIdentifier")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/PermanentMember.html"}},[t._v("NBoldApi.PermanentMember")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/RejectedApprovalResponsePayload.html"}},[t._v("NBoldApi.RejectedApprovalResponsePayload")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Team.html"}},[t._v("NBoldApi.Team")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamChannel.html"}},[t._v("NBoldApi.TeamChannel")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamChannelTab.html"}},[t._v("NBoldApi.TeamChannelTab")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamChannelTabConfiguration.html"}},[t._v("NBoldApi.TeamChannelTabConfiguration")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamChannelTabTeamsApp.html"}},[t._v("NBoldApi.TeamChannelTabTeamsApp")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamDiscoverySettings.html"}},[t._v("NBoldApi.TeamDiscoverySettings")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamFunSettings.html"}},[t._v("NBoldApi.TeamFunSettings")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamGuestSettings.html"}},[t._v("NBoldApi.TeamGuestSettings")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamMemberSettings.html"}},[t._v("NBoldApi.TeamMemberSettings")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamMembershipPayload.html"}},[t._v("NBoldApi.TeamMembershipPayload")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamMessagingSettings.html"}},[t._v("NBoldApi.TeamMessagingSettings")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamProvisioningRequest.html"}},[t._v("NBoldApi.TeamProvisioningRequest")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamProvisioningRequestTeam.html"}},[t._v("NBoldApi.TeamProvisioningRequestTeam")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamProvisioningRequestTeamMembership.html"}},[t._v("NBoldApi.TeamProvisioningRequestTeamMembership")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/TeamProvisioningRequestTemplate.html"}},[t._v("NBoldApi.TeamProvisioningRequestTemplate")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/User1.html"}},[t._v("NBoldApi.User1")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/production/sdks/javascript/docs/Users.html"}},[t._v("NBoldApi.Users")])],1)]),t._v(" "),s("h2",{attrs:{id:"documentation-for-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-authorization"}},[t._v("#")]),t._v(" Documentation for Authorization")]),t._v(" "),s("h3",{attrs:{id:"bearerauth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bearerauth"}},[t._v("#")]),t._v(" bearerAuth")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type")]),t._v(": Bearer authentication (JWT)")])])])}),[],!1,null,null,null);a.default=o.exports}}]);