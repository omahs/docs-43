"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const l={},o="Enumeration: ClientType",a={unversionedId:"reference/api/enums/ClientType",id:"reference/api/enums/ClientType",title:"Enumeration: ClientType",description:"The type for a specific contract-client (extended ethers Contract).",source:"@site/vendor/colonyJS/docs/reference/api/enums/ClientType.md",sourceDirName:"reference/api/enums",slug:"/reference/api/enums/ClientType",permalink:"/next/colonyjs/reference/api/enums/ClientType",draft:!1,editUrl:"https://github.com/JoinColony/reference/api/enums/ClientType.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"colonyJS",permalink:"/next/colonyjs/reference/api/"},next:{title:"Enumeration: ColonyNetworkAddress",permalink:"/next/colonyjs/reference/api/enums/ColonyNetworkAddress"}},p={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"CoinMachineClient",id:"coinmachineclient",level:3},{value:"ColonyClient",id:"colonyclient",level:3},{value:"MotionTargetClient",id:"motiontargetclient",level:3},{value:"NetworkClient",id:"networkclient",level:3},{value:"OneTxPaymentClient",id:"onetxpaymentclient",level:3},{value:"TokenClient",id:"tokenclient",level:3},{value:"TokenLockingClient",id:"tokenlockingclient",level:3},{value:"VotingReputationClient",id:"votingreputationclient",level:3},{value:"WhitelistClient",id:"whitelistclient",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumeration-clienttype"},"Enumeration: ClientType"),(0,r.kt)("p",null,"The type for a specific contract-client (extended ethers ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract"),").\nThis is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"coinmachineclient"},"CoinMachineClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"CoinMachineClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"CoinMachineClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colonyclient"},"ColonyClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ColonyClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"ColonyClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"motiontargetclient"},"MotionTargetClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"MotionTargetClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"MotionTargetClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"networkclient"},"NetworkClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"NetworkClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"NetworkClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onetxpaymentclient"},"OneTxPaymentClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"OneTxPaymentClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"OneTxPaymentClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tokenclient"},"TokenClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"TokenClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"TokenClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tokenlockingclient"},"TokenLockingClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"TokenLockingClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"TokenLockingClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"votingreputationclient"},"VotingReputationClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"VotingReputationClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"VotingReputationClient"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"whitelistclient"},"WhitelistClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"WhitelistClient")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"WhitelistClient"')))}s.isMDXComponent=!0}}]);