(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(10),i=(n(0),n(202)),o=(n(204),{id:"interoperability",title:"Interoperability"}),s={id:"system_overview/interoperability",title:"Interoperability",description:"For a digital civil registration system's true value to be realised, it needs to work easily with other systems in the e-government ecosystem. OpenCRVS uses a standards-based approach to safely and effectively integrate with other systems.",source:"@site/docs/system_overview/Interoperability_cf67eb5085734d5c8fa77e1ffcc1e22b.mdx",permalink:"/opencrvs-core/docs/system_overview/interoperability",sidebar:"docs",previous:{title:"Key Features",permalink:"/opencrvs-core/docs/system_overview/keyFeatures"},next:{title:"Configuration",permalink:"/opencrvs-core/docs/system_overview/configuration"}},c=[{value:"National ID",id:"national-id",children:[{value:"Use Cases",id:"use-cases",children:[]}]},{value:"Health",id:"health",children:[{value:"Use Cases",id:"use-cases-1",children:[]}]},{value:"Technical Documentation",id:"technical-documentation",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For a digital civil registration system's true value to be realised, it needs to work easily with other systems in the e-government ecosystem. OpenCRVS uses a standards-based approach to safely and effectively integrate with other systems."),Object(i.b)("h2",{id:"national-id"},"National ID"),Object(i.b)("p",null,"OpenCRVS can integrate with any National ID system in order to reliably validate the existence of NID numbers provided during civil registration applications as well as reduce the time spent on the application form itself by pulling data from the NID system and auto-populating form fields."),Object(i.b)("h3",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"OpenCRVS can be integrated with your National ID system in a number of ways, depending on your system's capability. Current capabilities include:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To validate the existence of a NID number"),Object(i.b)("li",{parentName:"ol"},"To auto-populate the form with data from the NID field to minimise required effort from registration staff")),Object(i.b)("h2",{id:"health"},"Health"),Object(i.b)("p",null,"Births and deaths often occur in health facilities and those that occur in the community can be dealt with by health staff at the community level. These actors already use digital health systems to conduct their work and much of the data required for birth/death notifications is already gathered."),Object(i.b)("p",null,"We know that health staff are busy and need to focus on life-saving activities rather than administrative ones. To address the opportunity that this data has for civil registration, OpenCRVS can integrate with existing health systems via a FHIR mediator (leveraging existing health standards) and can receive data from health systems for follow up within the OpenCRVS system."),Object(i.b)("p",null,"For more details of how this works functionally in OpenCRVS, check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../core_functions/notifyAVitalEvent"}),"Notify a vital event")," function."),Object(i.b)("h3",{id:"use-cases-1"},"Use Cases"),Object(i.b)("p",null,"OpenCRVS can integrate with an existing health system via its ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ohie.org/"}),"OpenHIE")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"}),"compliant")," & ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hl7.org/FHIR/"}),"FHIR")," standardised, interoperability layer, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://openhim.org/"}),"OpenHIM"),"."),Object(i.b)("p",null,"Current capabilities include:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To receive birth/death notification information from a health system e.g. ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.dhis2.org/"}),"DHIS2")),Object(i.b)("li",{parentName:"ol"},'To allow Registration Agents and Registrars to view this data as an "in-progress" application and complete it in OpenCRVS'),Object(i.b)("li",{parentName:"ol"},"To see disaggregated data related to the notifications received from health systems")),Object(i.b)("h2",{id:"technical-documentation"},"Technical Documentation"),Object(i.b)("p",null,"For more information how interoperability works, check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../technology/technologyIntroduction"}),"technical documentation"),", especially the role of OpenHIM, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./configuration"}),"configurability"),", and the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/opencrvs/opencrvs-core"}),"README in the code"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Coming Soon")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Refugee management systems")," e.g. PRIMES"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Social protection systems")," e.g. inform case management systems when vulnerable children")))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||h[b]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";var a=n(0),r=n(55);t.a=function(){return Object(a.useContext)(r.a)}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(205);var a=n(203);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},205:function(e,t,n){"use strict";var a=n(8),r=n(20),i=n(206),o="".startsWith;a(a.P+a.F*n(207)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},206:function(e,t,n){var a=n(76),r=n(28);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},207:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);