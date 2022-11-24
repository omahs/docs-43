"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),u=o,k=f["".concat(l,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Interface: ColonyNetworkOptions",p={unversionedId:"api/interfaces/ColonyNetworkOptions",id:"api/interfaces/ColonyNetworkOptions",title:"Interface: ColonyNetworkOptions",description:"Additional options for the ColonyNetwork",source:"@site/vendor/colonySDK/docs/api/interfaces/ColonyNetworkOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ColonyNetworkOptions",permalink:"/colonysdk/api/interfaces/ColonyNetworkOptions",draft:!1,editUrl:"https://github.com/JoinColony/api/interfaces/ColonyNetworkOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ColonyMultiFilter",permalink:"/colonysdk/api/interfaces/ColonyMultiFilter"},next:{title:"Interface: ColonyTopic",permalink:"/colonysdk/api/interfaces/ColonyTopic"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"ipfsAdapter",id:"ipfsadapter",level:3},{value:"metaTxBroadcasterEndpoint",id:"metatxbroadcasterendpoint",level:3},{value:"networkClientOptions",id:"networkclientoptions",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-colonynetworkoptions"},"Interface: ColonyNetworkOptions"),(0,o.kt)("p",null,"Additional options for the ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"ipfsadapter"},"ipfsAdapter"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"ipfsAdapter"),": ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},(0,o.kt)("inlineCode",{parentName:"a"},"IpfsAdapter"))),(0,o.kt)("p",null,"Provide a custom ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metatxbroadcasterendpoint"},"metaTxBroadcasterEndpoint"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"metaTxBroadcasterEndpoint"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Provide a custom metatransaction broadcaster endpoint"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"networkclientoptions"},"networkClientOptions"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"networkClientOptions"),": ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/NetworkClientOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"NetworkClientOptions"))),(0,o.kt)("p",null,"Provide custom ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/NetworkClientOptions"},"NetworkClientOptions")," for the ColonyJS client"))}d.isMDXComponent=!0}}]);