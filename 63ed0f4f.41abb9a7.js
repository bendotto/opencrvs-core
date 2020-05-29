(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return u}));var n=r(2),o=r(10),i=(r(0),r(202)),a={id:"vitalStatisticsExport",title:"Vital statistics export"},c={id:"core_functions/vitalStatisticsExport",title:"Vital statistics export",description:"This functionality allows data gathered through the civil registration process to be exported in CSV format for use in vital statistics systems.",source:"@site/docs/core_functions/Vital_statistics_export_0d0e040a44104fe294484efc3ba4479f.md",permalink:"/opencrvs-core/docs/core_functions/vitalStatisticsExport",sidebar:"docs",previous:{title:"Issue a certificate",permalink:"/opencrvs-core/docs/core_functions/issueACertificate"},next:{title:"Correct record",permalink:"/opencrvs-core/docs/core_functions/correctRecord"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[]},{value:"Functionality",id:"functionality",children:[{value:"Export report",id:"export-report",children:[]}]}],l={rightToc:s};function u(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This functionality allows data gathered through the civil registration process to be exported in CSV format for use in vital statistics systems."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Defined fields required for inclusion in export."),Object(i.b)("h2",{id:"user-stories"},"User Stories"),Object(i.b)("p",null,"As a ",Object(i.b)("strong",{parentName:"p"},"member of the NSO"),", I want to be able to export a vital statistics extract so that I can upload it and use it in a vital statistics system."),Object(i.b)("p",null,"As a ",Object(i.b)("strong",{parentName:"p"},"member of the NSO"),", I want to be able to select the parameters of data that I want for analysis, so that I can see the data that is of use for me."),Object(i.b)("h2",{id:"functionality"},"Functionality"),Object(i.b)("h3",{id:"export-report"},"Export report"),Object(i.b)("p",null,"Any user with access to reports can download a CSV file of the reports that have been defined for that country. The registration authority should work with the vital statistics agency to agree on the content of these reports."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Coming Soon")),Object(i.b)("p",null,"The user can change the parameters of the reports before exporting it."))}u.isMDXComponent=!0},202:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=o.a.createContext({}),u=function(t){var e=o.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(d,c(c({ref:e},l),{},{components:r})):o.a.createElement(d,c({ref:e},l))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);