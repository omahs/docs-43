"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,y=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={description:"Advanced methods of making payments.",sidebar_position:5},o="Advanced Payments",s={unversionedId:"craft/advanced-features/advanced-payments",id:"craft/advanced-features/advanced-payments",title:"Advanced Payments",description:"Advanced methods of making payments.",source:"@site/colony/craft/advanced-features/advanced-payments.md",sourceDirName:"craft/advanced-features",slug:"/craft/advanced-features/advanced-payments",permalink:"/craft/advanced-features/advanced-payments",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/advanced-payments.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Advanced methods of making payments.",sidebar_position:5},sidebar:"craft",previous:{title:"Advanced Features",permalink:"/craft/advanced-features/"},next:{title:"Extensions",permalink:"/craft/advanced-features/extensions/"}},l={},m=[{value:"Payment Methods",id:"payment-methods",level:3},{value:"Creating an Advanced Payment",id:"creating-an-advanced-payment",level:3},{value:"Stages of Advanced Payments (Multi, Split, Staged, Batch)",id:"stages-of-advanced-payments-multi-split-staged-batch",level:3},{value:"Stages of Streaming Payments",id:"stages-of-streaming-payments",level:3},{value:"Other Considerations",id:"other-considerations",level:3},{value:"Editing locked Payments",id:"editing-locked-payments",level:4},{value:"<strong>Cancelling a Payment &amp; Stake punishments</strong>",id:"cancelling-a-payment--stake-punishments",level:4}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-payments"},"Advanced Payments"),(0,r.kt)("h3",{id:"payment-methods"},"Payment Methods"),(0,r.kt)("p",null,"Advanced payments offers a range of flexible payment options, powerful on their own, but even more powerful when combined and integrated with other features and workflows of Colony."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"multi-payments"},(0,r.kt)("strong",{parentName:"h4"},"Multi Payments")),(0,r.kt)("p",{parentName:"li"},"If you have more complicated needs of your payments, and need to construct a complicated payment involving multiple recipients receiving a number of different tokens at different times, multi payments is the tool for you.\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batch Payments"),"\\\n****Upload a CSV of tokens and recipients and send to all in a single Action or Motion.\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Split Payments"),"\\\n****Divide a pot of funds evenly or unevenly between a set of recipients.\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Staged Payments"),"\\\n****A payment broken down into separate chunks which may be released in sequence. Useful, for example, to make partial payments upon delivery of agreed milestones.\\")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Streaming Payments"),"\\\n****Continuously stream tokens on a per second basis from multiple teams to a single recipient. Streams can be for a set period of time or indefinite. Useful for things like salaries or continuous services."))),(0,r.kt)("h3",{id:"creating-an-advanced-payment"},"Creating an Advanced Payment"),(0,r.kt)("p",null,"Coming soon...\\"),(0,r.kt)("h3",{id:"stages-of-advanced-payments-multi-split-staged-batch"},"Stages of Advanced Payments (Multi, Split, Staged, Batch)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create Payment"),"\\\n****The initial state of an Advanced payment, where you can select the Payment type and set up the payment that you intend to make.\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stake Payment")," (not required for Steaming payments)\\\n****In order to officially create the Payment, you will need to stake the Payment with some of your own tokens, this helps to reduce the spamming of fake payments.\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Draft Stage"),"\\\n****The draft stage allows the Payment initiator to create and modify an Advanced Payment freely. The Payment can also be cancelled without losing your stake. Be sure to double check all values are correct before moving to the next stage.\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Locked Stage"),"\\\n****This stage locks in the values set up until this point, any changes made while in the locked stage or after will either require a Motion, or a member with the Arbitration permission to make changes.\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Funding Stage"),"\\\n****Funding involves actually collecting the funds from the Colony in order to make the Advanced Payment, this will require a Motion or Funding permission in the relevant team.\\"),(0,r.kt)("hr",{parentName:"li"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Releasing Funds"),"\\\n****Once a Payment has been funded, the Payment can be released and either start the claim delay or make the Payment to be claimable immediately.\\"),(0,r.kt)("hr",{parentName:"li"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Claiming Funds"),"\\\n****Claiming funds from an Advanced Payment can be done by anyone, the action will simple trigger the action to make process the payments to the relevant recipients.\\"))),(0,r.kt)("h3",{id:"stages-of-streaming-payments"},"Stages of Streaming Payments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create Streaming Payment"),"\\\n****The initial state of an Advanced Payment, where you can select the payment type and set up the payment that you intend to make.\\")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start the Stream"),"\\\n****Funding involves actually collecting the funds from the Colony in order to make the Advanced Payment, this will require a Motion or Funding permission in the relevant team.\\"),(0,r.kt)("hr",{parentName:"li"}))),(0,r.kt)("h3",{id:"other-considerations"},"Other Considerations"),(0,r.kt)("h4",{id:"editing-locked-payments"},"Editing locked Payments"),(0,r.kt)("p",null,"Editing a locked payment requires a Motion, or a member with the Arbitration permission to make changes. Once the change has been approved, as expected, the actual parameters that were originally set for the payment will be changed."),(0,r.kt)("p",null,"However, in cases where a change request goes to vote, there is a special condition. If this value has been changed previously, then any subsequent changes will require more voting Reputation in favor of the change in order for the change to actually happen."),(0,r.kt)("h4",{id:"cancelling-a-payment--stake-punishments"},(0,r.kt)("strong",{parentName:"h4"},"Cancelling a Payment & Stake punishments")),(0,r.kt)("p",null,"In the case where an Advanced Payment needs to be cancelled, for example if it was created with bad intent or created in error, the person who cancels the Payment has the decision to punish the initial creator for the stake made to create the Payment. Cancelling a Payment requires a Motion, or a member with the Arbitration permission."))}d.isMDXComponent=!0}}]);