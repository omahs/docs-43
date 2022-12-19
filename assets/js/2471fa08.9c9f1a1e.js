"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={description:"A guide on how to create transactions within Colony. You can create motions and even gasless MetaTransactions in a very straightforward and concise way.",sidebar_position:0},r="How to create transactions",s={unversionedId:"guides/transactions",id:"guides/transactions",title:"How to create transactions",description:"A guide on how to create transactions within Colony. You can create motions and even gasless MetaTransactions in a very straightforward and concise way.",source:"@site/vendor/colonySDK/docs/guides/transactions.md",sourceDirName:"guides",slug:"/guides/transactions",permalink:"/colonysdk/guides/transactions",draft:!1,editUrl:"https://github.com/JoinColony/guides/transactions.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"A guide on how to create transactions within Colony. You can create motions and even gasless MetaTransactions in a very straightforward and concise way.",sidebar_position:0},sidebar:"sidebar",previous:{title:"Guides",permalink:"/colonysdk/guides/"},next:{title:"Creating a colony",permalink:"/colonysdk/guides/colony-creation"}},c={},l=[{value:"Creating transactions and motions",id:"creating-transactions-and-motions",level:2},{value:"Creating gasless transactions and motions (MetaTransactions)",id:"creating-gasless-transactions-and-motions-metatransactions",level:2},{value:"tl;dr",id:"tldr",level:2},{value:"Create an immediate action",id:"create-an-immediate-action",level:3},{value:"Create a motion to trigger an action once it passes",id:"create-a-motion-to-trigger-an-action-once-it-passes",level:3}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-transactions"},"How to create transactions"),(0,o.kt)("p",null,"Within Colony, there are a few ways to do an action. As a colony is a permissioned contract, not everyone can just do anything they like, users (or contracts) have to have the right permission in the relevant team to do so.\nIf a governance extension is installed for the colony, this behaviour changes. Using ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation"},"Motions & Disputes")," for example, it is possible to propose an action without having the appropriate permissions.\nAs permissioned functions and governance functions take the same arguments, we have unified this in one API, that could be extended in the future."),(0,o.kt)("h2",{id:"creating-transactions-and-motions"},"Creating transactions and motions"),(0,o.kt)("p",null,"So what does this mean? Let's look at an example. We would like to create a team using Colony SDK. If we have the right permissions, we can just do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Immediately executing async function\n(async function() {\n  // Create a new team (domain) within our colony (using sheer force ;) )\n  const [{ domainId }] = await colony.createTeam().tx();\n})();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note the ",(0,o.kt)("inlineCode",{parentName:"strong"},"tx()")," at the end.")," That's where we tell Colony SDK to create a transaction that will take its action immediately, given we have the right permissions."),(0,o.kt)("p",null,"If we wanted to create a motion instead (see ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation"},"VotingReputation"),") to create a new team, we'd replace ",(0,o.kt)("inlineCode",{parentName:"p"},"tx()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"motion(motionTeam)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Id } from '@colony/sdk';\n// Immediately executing async function\n(async function() {\n  // Create a motion in the Root team to create a new team. Will have to go through the whole motion workflow\n  const [{ motionId }] = await colony.createTeam().motion(Id.RootDomain);\n})();\n")),(0,o.kt)("p",null,"Note that you have to supply a ",(0,o.kt)("inlineCode",{parentName:"p"},"motionTeam")," when creating a motion. This is the id of the team in which the motion will be created. This will have an effect on who will be able to object or vote and with how much reputation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If the ",(0,o.kt)("inlineCode",{parentName:"strong"},"motionTeam")," is not specified it will default to the Root domain"),"!"),(0,o.kt)("h2",{id:"creating-gasless-transactions-and-motions-metatransactions"},"Creating gasless transactions and motions (MetaTransactions)"),(0,o.kt)("p",null,"Colony SDK supports another way of sending off transactions or motions which we call ",(0,o.kt)("em",{parentName:"p"},"MetaTransactions"),". These are gasless transactions (which makes them entirely free for the user) and are signed by the user who wants to issue them and send off by a Colony server. To send a MetaTransaction, just use ",(0,o.kt)("inlineCode",{parentName:"p"},"metaTx()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"tx()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"metaMotion()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"motion()"),". The wallet then needs to sign a message instead of a transaction, which will be transferred to the Colony MetaTransaction broadcaster. The broadcaster will send back a transaction id from which the receipt and event data will be retrieved as usual."),(0,o.kt)("p",null,"Here's an example on how to file a motion through a metatransaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Id } from '@colony/sdk';\n// Immediately executing async function\n(async function() {\n  // Create a motion in the Root team to create a new team using a metatransaction\n  const [{ motionId }] = await colony.createTeam().metaMotion();\n})();\n")),(0,o.kt)("h2",{id:"tldr"},"tl;dr"),(0,o.kt)("p",null,"Okay, what did we learn? Here's a little overview:"),(0,o.kt)("h3",{id:"create-an-immediate-action"},"Create an immediate action"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator#tx"},"TxCreator.tx"),': create ("force") a Colony transaction, knowing you have the permissions to do so'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator#metatx"},"TxCreator.metaTx"),": same as ",(0,o.kt)("inlineCode",{parentName:"li"},"tx()"),", but send as a gasless metatransaction")),(0,o.kt)("h3",{id:"create-a-motion-to-trigger-an-action-once-it-passes"},"Create a motion to trigger an action once it passes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator#motion"},"TxCreator.motion"),": create a motion (needs the motion's domain as a parameter)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator#metamotion"},"TxCreator.metaMotion"),": same as ",(0,o.kt)("inlineCode",{parentName:"li"},"motion()"),", but sends a gasless metatransaction")),(0,o.kt)("p",null,"Also refer to the ",(0,o.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},"TxCreator")," documentation if you'd like to learn more."))}d.isMDXComponent=!0}}]);