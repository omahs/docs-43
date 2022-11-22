"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={description:"How to Initiate a Token Sale."},a="Selling Tokens",l={unversionedId:"craft/coin-machine/selling-tokens",id:"craft/coin-machine/selling-tokens",title:"Selling Tokens",description:"How to Initiate a Token Sale.",source:"@site/colony/craft/coin-machine/selling-tokens.md",sourceDirName:"craft/coin-machine",slug:"/craft/coin-machine/selling-tokens",permalink:"/craft/coin-machine/selling-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/coin-machine/selling-tokens.md",tags:[],version:"current",frontMatter:{description:"How to Initiate a Token Sale."},sidebar:"craft",previous:{title:"Parameters",permalink:"/craft/coin-machine/parameters"},next:{title:"Uninstallation",permalink:"/craft/coin-machine/uninstallation"}},c={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selling-tokens"},"Selling Tokens"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Coin Machine is moving to a stand alone product and is therefore no longer being included in the Colony DApp. The documentation for Coin Machine will also be moved to it's own Gitbook as required.")),(0,r.kt)("p",null,"When selling tokens in your colony through Coin Machine, the real work happens during ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/coin-machine/installation"},"installation"),"  and when defining the ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/coin-machine/parameters"},"Parameters"),"."),(0,r.kt)("p",null,"After you have installed and enabled Coin Machine, starting a sale is super-simple:"),(0,r.kt)("p",null,"1",".",' Navigate to "Extensions"/"Coin Machine" and, on the right-hand side of the screen, click on "Contract address" to copy it to your clipboard.'),(0,r.kt)("p",null,"2",".",' Go to "Actions"/"New Action"/"Create Expenditure"/"Payment" and paste the contract address of your Coin Machine into the "Assignee" field.'),(0,r.kt)("p",null,"3",".",' Specify the amount of tokens you want to sell in the "Amount" field.'),(0,r.kt)("p",null,"4",".",' To start the sale immediately, click on "Confirm" and confirm in your wallet.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The sale will end once either all the tokens are sold, or the extension is ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/coin-machine/uninstallation"},"deprecated"),".")))}u.isMDXComponent=!0}}]);