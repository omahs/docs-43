"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Interface: EventSources",l={unversionedId:"api/interfaces/EventSources",id:"api/interfaces/EventSources",title:"Interface: EventSources",description:"Valid sources for Colony emitted events. Used to map the parsed event data",source:"@site/vendor/colonySDK/docs/api/interfaces/EventSources.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/EventSources",permalink:"/next/colonysdk/api/interfaces/EventSources",draft:!1,editUrl:"https://github.com/JoinColony/api/interfaces/EventSources.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: Ethers6FilterByBlockHash",permalink:"/next/colonysdk/api/interfaces/Ethers6FilterByBlockHash"},next:{title:"Namespace: Tokens",permalink:"/next/colonysdk/api/modules/Tokens"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"Colony",id:"colony",level:3},{value:"ColonyNetwork",id:"colonynetwork",level:3},{value:"OneTxPayment",id:"onetxpayment",level:3},{value:"VotingReputation",id:"votingreputation",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-eventsources"},"Interface: EventSources"),(0,o.kt)("p",null,"Valid sources for Colony emitted events. Used to map the parsed event data"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"colony"},"Colony"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Colony"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"IColonyEvents")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"colonynetwork"},"ColonyNetwork"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"ColonyNetwork"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"IColonyNetworkEvents")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onetxpayment"},"OneTxPayment"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"OneTxPayment"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"OneTxPaymentEvents")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"votingreputation"},"VotingReputation"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"VotingReputation"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"VotingReputationEvents")))}u.isMDXComponent=!0}}]);