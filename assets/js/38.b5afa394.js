(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{320:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"displayed-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#displayed-attributes"}},[t._v("#")]),t._v(" Displayed attributes")]),t._v(" "),a("p",[a("em",[t._v("Child route of the "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Displayed attributes are the fields contained in each matching document.")]),t._v(" "),a("p",[t._v("Displayed attributes can also be updated directly through the "),a("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" at the same time than the other settings.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),a("code",[t._v("DELETE")]),t._v(" routes.")])]),t._v(" "),a("h2",{attrs:{id:"get-displayed-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-displayed-attributes"}},[t._v("#")]),t._v(" Get displayed attributes")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),a("p",[t._v("Get the displayed attributes of an index.")]),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("p",[t._v("List the settings.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rank"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"poster"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-displayed-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-displayed-attributes"}},[t._v("#")]),t._v(" Update displayed attributes")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),a("p",[t._v("Update the displayed attributes of an index.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("List of displayed attributes of an index.")]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[\n    "title",\n    "description",\n    "release_date",\n    "rank",\n    "poster"\n]\'')]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"reset-displayed-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-displayed-attributes"}},[t._v("#")]),t._v(" Reset displayed attributes")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/displayed-attributes"}}),t._v(" "),a("p",[t._v("Reset the displayed attributes of the index to the default value.")]),t._v(" "),a("h4",{attrs:{id:"default-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),a("p",[t._v("All attributes found in the documents added to the index.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/displayed-attributes'")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);