"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={description:"Learn About Important Terms Within Colony",sidebar_position:0},i="Glossary of Terms",l={unversionedId:"tldr/glossary",id:"tldr/glossary",title:"Glossary of Terms",description:"Learn About Important Terms Within Colony",source:"@site/vendor/colonyNetwork/docs/tldr/glossary.md",sourceDirName:"tldr",slug:"/tldr/glossary",permalink:"/colonynetwork/tldr/glossary",draft:!1,editUrl:"https://github.com/JoinColony/tldr/glossary.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Learn About Important Terms Within Colony",sidebar_position:0},sidebar:"sidebar",previous:{title:"Whitepaper tl;dr",permalink:"/colonynetwork/tldr/"},next:{title:"Colony",permalink:"/colonynetwork/tldr/colony"}},s={},c=[{value:"CLNY",id:"clny",level:3},{value:"Dispute",id:"dispute",level:3},{value:"Domain",id:"domain",level:3},{value:"Funding Pots",id:"funding-pots",level:3},{value:"Meta Colony",id:"meta-colony",level:3},{value:"Internal Token",id:"internal-token",level:3},{value:"Objection",id:"objection",level:3},{value:"Reputation",id:"reputation",level:3},{value:"Reputation Mining",id:"reputation-mining",level:3},{value:"Rewards",id:"rewards",level:3},{value:"Role",id:"role",level:3},{value:"Skills",id:"skills",level:3},{value:"Task",id:"task",level:3},{value:"Token Issuance Rate",id:"token-issuance-rate",level:3},{value:"Token Supply Ceiling",id:"token-supply-ceiling",level:3},{value:"Work Specification",id:"work-specification",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary-of-terms"},"Glossary of Terms"),(0,a.kt)("h3",{id:"clny"},"CLNY"),(0,a.kt)("p",null,"The Internal Token of the Meta Colony. CLNY is staked in the reputation mining process."),(0,a.kt)("h3",{id:"dispute"},"Dispute"),(0,a.kt)("p",null,"An objection to an objection triggers a dispute, which must be resolved through a reputation-weighted vote within the domain that the objection was initially raised."),(0,a.kt)("h3",{id:"domain"},"Domain"),(0,a.kt)("p",null,"A category for organizing tasks, skills, and pots within a Colony. Domains can be thought of as 'departments' or 'divisions' within the larger organizational whole."),(0,a.kt)("h3",{id:"funding-pots"},"Funding Pots"),(0,a.kt)("p",null,"All funding within a colony resides in pots. Pots can be thought of as 'earmarked' funds for a specific purpose, and depending on context, might be called a bounty, a budget, working capital, or rewards. A colony will have many pots, but at a minimum will have one pot for rewards ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[0]")," ) and one for working capital ( ",(0,a.kt)("inlineCode",{parentName:"p"},"pots[1]")," )."),(0,a.kt)("h3",{id:"meta-colony"},"Meta Colony"),(0,a.kt)("p",null,"The Meta Colony is \u201cthe Colony colony\u201d \u2014 its remit is to develop, support, and grow the Colony Network. Every colony on the public network needs the Meta Colony, and everyone may be a member."),(0,a.kt)("h3",{id:"internal-token"},"Internal Token"),(0,a.kt)("p",null,"A token chosen by a colony which confers reputation when paid out as a task bounty. The internal token together with reputation is used for vote-weighting and calculating rewards payouts."),(0,a.kt)("h3",{id:"objection"},"Objection"),(0,a.kt)("p",null,"A statement by a member of a colony that proposes some variable in the contracts of the colony should be changed to another state. To raise an objection, a colony member is required to put up a stake of internal tokens. If another member opposes an objection, they may stake tokens to elevate the objection to become a dispute. Otherwise, the objection will pass automatically after a defined period of time."),(0,a.kt)("h3",{id:"reputation"},"Reputation"),(0,a.kt)("p",null,"A number associated with an account which attempts to quantify the merit of a user\u2019s recent contributions to a colony. Reputation is used to weight a user\u2019s influence in decisions related to the expertise they have demonstrated, and to determine amounts owed to a colony\u2019s members when rewards are disbursed."),(0,a.kt)("p",null,"Unlike tokens, reputation cannot be transferred between addresses; it must be earned by direct action within the colony. Reputation that is earned will eventually be lost through inactivity (decay), error, or malfeasance."),(0,a.kt)("h3",{id:"reputation-mining"},"Reputation Mining"),(0,a.kt)("p",null,'The calculations involved in maintaining the entire state of reputation amongst all accounts on the Colony Network are far too complex to be performed on-chain. Instead, reputation is calculated off-chain and periodically put on-chain by CLNY holders in a process resembling a proof-of-stake blockchain protocol -- engaging in the process of updating the global state of reputation for the Colony Network is called "Reputation Mining".'),(0,a.kt)("h3",{id:"rewards"},"Rewards"),(0,a.kt)("p",null,"When a colony earns Ether or other currencies as revenue, the revenue distribution system allocates some of them to be claimed as rewards. In particular, the special triggering transaction takes any such revenue that has accumulated since the last such transaction, and makes 99% available to the colony as working capital, while the remaining 1% is used to pay out rewards to users that hold both colony tokens and reputation in the colony."),(0,a.kt)("h3",{id:"role"},"Role"),(0,a.kt)("p",null,"A task has 3 roles associated with it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Manager - someone responsible for defining and coordinating the delivery of the task."),(0,a.kt)("li",{parentName:"ul"},"An Evaluator - someone responsible for assessing whether the work has been completed satisfactorily."),(0,a.kt)("li",{parentName:"ul"},"A Worker - someone responsible for executing the task.")),(0,a.kt)("h3",{id:"skills"},"Skills"),(0,a.kt)("p",null,"Skills are a global hierarchy of tags that can be assigned to any task. Tagging a task with a skill allows for a more granular account of the work a user completes to earn their reputation."),(0,a.kt)("p",null,"The Meta Colony curates the hierarchy of global skill tags."),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"A discrete unit of work which requires no further subdivision or delegation, and which can be evaluated as complete or incomplete based on some set of criteria."),(0,a.kt)("h3",{id:"token-issuance-rate"},"Token Issuance Rate"),(0,a.kt)("p",null,"The rate at which new internal tokens are minted and made available to fund tasks. A higher rate could result in an inflated supply and perhaps diminishing value per-token."),(0,a.kt)("h3",{id:"token-supply-ceiling"},"Token Supply Ceiling"),(0,a.kt)("p",null,"An upper bound on the total supply of a token."),(0,a.kt)("h3",{id:"work-specification"},"Work Specification"),(0,a.kt)("p",null,"A description of the work to be done for a task. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyNetwork")," contracts, the work specification is pointed to by a hash, and stored off-chain."))}p.isMDXComponent=!0}}]);