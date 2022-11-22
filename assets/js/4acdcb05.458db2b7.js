"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={description:"How to only allow users having undergone KYC to a token sale."},i="Setting up KYC",l={unversionedId:"craft/advanced-features/extensions/whitelist/setting-up-kyc",id:"craft/advanced-features/extensions/whitelist/setting-up-kyc",title:"Setting up KYC",description:"How to only allow users having undergone KYC to a token sale.",source:"@site/colony/craft/advanced-features/extensions/whitelist/setting-up-kyc.md",sourceDirName:"craft/advanced-features/extensions/whitelist",slug:"/craft/advanced-features/extensions/whitelist/setting-up-kyc",permalink:"/craft/advanced-features/extensions/whitelist/setting-up-kyc",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/extensions/whitelist/setting-up-kyc.md",tags:[],version:"current",frontMatter:{description:"How to only allow users having undergone KYC to a token sale."},sidebar:"craft",previous:{title:"Setting up an Agreement",permalink:"/craft/advanced-features/extensions/whitelist/setting-up-an-agreement"},next:{title:"Uninstallation",permalink:"/craft/advanced-features/extensions/whitelist/uninstallation"}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-kyc"},"Setting up KYC"),(0,o.kt)("p",null,"To include Know Your Customer (KYC) standards in a token sale through Coin Machine, the Whitelist Extension allows you to upload a list of whitelisted wallet addresses that have undergone KYC with a KYC provider of your choice. Colony does not provide KYC services itself nor does it integrate any third-party providers directly into the interface. When looking for a KYC solution, it is important that the data includes a list of to-be-whitelisted wallet addresses in a compatible format."," "),(0,o.kt)("p",null,"To set up KYC, follow these steps."," "),(0,o.kt)("p",null,"1",".",' Select "KYC only" or "KYC and agreement", as you wish.'),(0,o.kt)("p",null,"2",".",' If you chose "KYC and agreement", paste the agreement in the box provided below.'),(0,o.kt)("p",null,"3",".",' Click "Confirm" and confirm the transaction in your wallet.'),(0,o.kt)("p",null,"4",".",' Revisit the "Whitelist" page in the "Extensions" section whenever you have to-be-whitelisted wallet addresses available.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To add a single wallet address, paste it into the text field."),(0,o.kt)("li",{parentName:"ul"},'To add multiple wallet addresses in a CSV file, click "Upload .csv" in the upper right-hand corner of the text field to toggle the view to a file uploader and select your CSV file. The input must be formatted a CSV file and contain a single column of wallet addresses with one address per row, see also the following template.')),(0,o.kt)("p",null,"5",".",' Click on "Confirm" and confirm in your wallet.'),(0,o.kt)("p",null,"Users will now be required to have their wallet address whitelisted before they can take part in a token sale on Coin Machine in your colony."))}d.isMDXComponent=!0}}]);