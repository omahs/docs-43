"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=d(n),N=r,u=s["".concat(p,".").concat(N)]||s[N]||m[N]||o;return n?a.createElement(u,l(l({ref:t},k),{},{components:n})):a.createElement(u,l({ref:t},k))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},l="Class: ColonyToken",i={unversionedId:"api/classes/ColonyToken",id:"api/classes/ColonyToken",title:"Class: ColonyToken",description:"Properties",source:"@site/vendor/colonySDK/docs/api/classes/ColonyToken.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyToken",permalink:"/colonysdk/api/classes/ColonyToken",draft:!1,editUrl:"https://github.com/JoinColony/api/classes/ColonyToken.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ColonyNetwork",permalink:"/colonysdk/api/classes/ColonyNetwork"},next:{title:"Class: PinataAdapter",permalink:"/colonysdk/api/classes/PinataAdapter"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"tokenLockingClient",id:"tokenlockingclient",level:3},{value:"Methods",id:"methods",level:2},{value:"approve",id:"approve",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"deposit",id:"deposit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getUserApproval",id:"getuserapproval",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getUserDeposit",id:"getuserdeposit",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"mint",id:"mint",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"symbol",id:"symbol",level:3},{value:"Returns",id:"returns-5",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4}],k={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-colonytoken"},"Class: ColonyToken"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"tokenlockingclient"},"tokenLockingClient"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tokenLockingClient"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenLockingClient")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"approve"},"approve"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"approve"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"guy?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"src?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wad?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"Approve ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of the wallet owners holdings of the Colony's native token."),(0,r.kt)("p",null,'In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony\'s native token. The wallet must hold at least the amount of the token that will be approved.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  const token = await colony.getToken();\n  // Approve 100 tokens to be \"activated\"\n  await token.approve(w`100`);\n  // Deposit the tokens\n  await token.deposit(w`100`);\n})();\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of the token to be approved")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"guy?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"src?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wad?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"src")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that approved the tokens from their wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"guy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the TokenLocking contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wad")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount that was approved")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deposit"},"deposit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deposit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"amount?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"Deposit ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of the wallet owners holdings of the Colony's native token into the Colony."),(0,r.kt)("p",null,'In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony\'s native token. The wallet must hold at least the amount of the token that will be deposited.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  const token = await colony.getToken();\n  // Approve 100 tokens to be \"activated\"\n  await token.approve(w`100`);\n  // Deposit the tokens\n  await token.deposit(w`100`);\n})();\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of the token to be deposited")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"amount?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the Colony's native token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that deposited the tokens from their wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount that was deposited")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getuserapproval"},"getUserApproval"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getUserApproval"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"obligator"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Get the wallet owner's approved balance of the Colony's native token for an obliator (i.e. an extension)"),(0,r.kt)("p",null,"This method will show the accumulated amount that was approved using the ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyToken#approve"},"ColonyToken.approve")," method"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet address that we want to check the approved amount of")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"obligator")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that has been approved to obligate the funds.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"The currently approved balance of the Colony's native token for the obligator"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getuserdeposit"},"getUserDeposit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getUserDeposit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Get the wallet owner's deposited and locked balance of the Colony's native token."),(0,r.kt)("p",null,"This method will show the accumulated amount that was deposited using the ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyToken#deposit"},"ColonyToken.deposit")," method"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet address that we want to check the deposited amount of")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"The currently deposited balance of the Colony's native token"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mint"},"mint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"mint"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyClientV10"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"mintTokens"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Mints ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of a Colony's native token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Only works for tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use our ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"toWei")," functions (see example). Also not that for tokens to be available in the Colony after funding, you need to call the ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony#claimfunds"},"Colony.claimFunds")," method after minting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  const token = await colony.getToken();\n  // Mint 100 tokens of the Colony's native token\n  // (forced transaction example)\n  await token.mint(w`100`).force();\n  // Claim the minted tokens for the Colony\n  // (forced transaction example)\n  await colony.claimFunds().force();\n})();\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of the token to be minted")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyClientV10"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"mintTokens"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},"TxCreator")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"symbol"},"symbol"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"symbol"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Gets the token's symbol"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The token's symbol (e.g. CLNY)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"withdraw"},"withdraw"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"withdraw"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"amount?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"Withdraw ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of the wallet owners holdings of the Colony's native token from the Colony."),(0,r.kt)("p",null,"Does the opposite of ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit")," and frees the deposited tokens back to the wallet address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  const token = await colony.getToken();\n  // Withdraw 100 tokens that were previously deposited\n  await token.withdraw(w`100`);\n})();\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of the token to be withdrawn")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"amount?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"token?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"user?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the Colony's native token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that withdrew the tokens from their wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount that was withdrawn")))))}m.isMDXComponent=!0}}]);