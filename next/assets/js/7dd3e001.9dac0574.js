"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>l});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),l=r,y=d["".concat(c,".").concat(l)]||d[l]||u[l]||o;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function l(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={description:"How to send a payment to an Ethereum address in any token.",sidebar_position:4},i="Payments",s={unversionedId:"managing-funds/payments",id:"managing-funds/payments",title:"Payments",description:"How to send a payment to an Ethereum address in any token.",source:"@site/colony/craft/managing-funds/payments.md",sourceDirName:"managing-funds",slug:"/managing-funds/payments",permalink:"/next/craft/managing-funds/payments",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/managing-funds/payments.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"How to send a payment to an Ethereum address in any token.",sidebar_position:4},sidebar:"sidebar",previous:{title:"Managing Funds",permalink:"/next/craft/managing-funds/"},next:{title:"Unlock Token",permalink:"/next/craft/managing-funds/unlock-token"}},c={},p=[],m={toc:p};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payments"},"Payments"),(0,r.kt)("p",null,"To create an expenditure and send a payment in any ERC20 token to any address, simply navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Create Expenditure > Payment")," and input:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From where you want to send the payment"),(0,r.kt)("li",{parentName:"ol"},"To which Ethereum address"),(0,r.kt)("li",{parentName:"ol"},"Which token and amount you wish to send"),(0,r.kt)("li",{parentName:"ol"},"You can also input details of why you are making this payment (optional)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9290).Z,width:"2878",height:"1636"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Sending a payment currently requires you to have ",(0,r.kt)("a",{parentName:"p",href:"/next/craft/advanced-features/permissions#administration"},(0,r.kt)("strong",{parentName:"a"},"Administration"))," and ",(0,r.kt)("a",{parentName:"p",href:"/next/craft/advanced-features/permissions#funding"},(0,r.kt)("strong",{parentName:"a"},"Funding"))," permissions in the domain from which you're creating the expenditure.")),(0,r.kt)("p",null,":::hint\nOnly payments in the colony native tokens confer reputation!\n:::"),(0,r.kt)("p",null,"We encourage interactions between members of a colony. You can leave a comment below every action, such as a payment, or a new Team is created... \ud83d\ude0e"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7624).Z,width:"2878",height:"1636"})))}u.isMDXComponent=!0},7624:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/CommentPay-f23deb377741002b79d545fbcc95a741.gif"},9290:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/CreatePayment-333487665ebcdc39fcedc9c61ce38a8e.gif"}}]);