"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={description:"What are Native Tokens in Colony, and how do they work?"},i="Native Tokens",s={unversionedId:"managing-funds/native-tokens",id:"managing-funds/native-tokens",title:"Native Tokens",description:"What are Native Tokens in Colony, and how do they work?",source:"@site/colony/craft/managing-funds/native-tokens.md",sourceDirName:"managing-funds",slug:"/managing-funds/native-tokens",permalink:"/next/craft/managing-funds/native-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/managing-funds/native-tokens.md",tags:[],version:"current",frontMatter:{description:"What are Native Tokens in Colony, and how do they work?"},sidebar:"sidebar",previous:{title:"Move Funds Between Teams",permalink:"/next/craft/managing-funds/move-funds"},next:{title:"Sending Funds to a Colony",permalink:"/next/craft/managing-funds/sending-funds-to-a-colony"}},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-tokens"},"Native Tokens"),(0,r.kt)("p",null,"Every colony has its own native token that complements its reputation. Payment in a colony\u2019s native token confers ",(0,r.kt)("strong",{parentName:"p"},"reputation")," ",(0,r.kt)("strong",{parentName:"p"},"in the team from which it was received, as well as all parent Teams, including Root.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"They do not earn any reputation in child Teams, as well as siblings Teams.")),(0,r.kt)("p",null,"Both internal tokens and reputation are required to create motions, raise disputes, and vote."),(0,r.kt)("p",null,"Users can decide to adopt an ",(0,r.kt)("a",{parentName:"p",href:"../quickstart-guide.md#step-2b-using-an-existing-token"},"existing ERC20 token")," as their native token (i.e. DAI or ",(0,r.kt)("em",{parentName:"p"},"USDC"),"), or to ",(0,r.kt)("a",{parentName:"p",href:"../quickstart-guide.md#step-2a-creating-a-new-token"},"create a new one"),". Native Tokens are a key aspect when creating a new colony."),(0,r.kt)("p",null,"You can also check the Native Token contract address and add it to your Metamask."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2328).Z,width:"2878",height:"1634"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A colony native tokens are locked and non-transferrable by default. They can be ",(0,r.kt)("a",{parentName:"p",href:"../manage-funds/unlock-token.md"},"unlocked")," anytime, so that they may be freely transferred between accounts. **** This action is irreversible and only applies to new tokens created with Colony.")))}d.isMDXComponent=!0},2328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AddTokenMetamask-7c4b09d200dabc4acc9826d78e4c1343.gif"}}]);