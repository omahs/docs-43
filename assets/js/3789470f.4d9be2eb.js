"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,c=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(c,i(i({ref:t},h),{},{components:a})):n.createElement(c,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={description:"The Parameters required when setting up this Extension and their Default Values."},i="Parameters",s={unversionedId:"craft/advanced-features/extensions/governance/parameters",id:"craft/advanced-features/extensions/governance/parameters",title:"Parameters",description:"The Parameters required when setting up this Extension and their Default Values.",source:"@site/colony/craft/advanced-features/extensions/governance/parameters.md",sourceDirName:"craft/advanced-features/extensions/governance",slug:"/craft/advanced-features/extensions/governance/parameters",permalink:"/craft/advanced-features/extensions/governance/parameters",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/extensions/governance/parameters.md",tags:[],version:"current",frontMatter:{description:"The Parameters required when setting up this Extension and their Default Values."},sidebar:"craft",previous:{title:"Objecting and Creating a Dispute",permalink:"/craft/advanced-features/extensions/governance/objecting-and-creating-a-dispute"},next:{title:"Uninstallation",permalink:"/craft/advanced-features/extensions/governance/uninstallation"}},l={},u=[{value:"Required Stake",id:"required-stake",level:3},{value:"Voter Reward",id:"voter-reward",level:3},{value:"Minimum Stake",id:"minimum-stake",level:3},{value:"End Vote Threshold",id:"end-vote-threshold",level:3},{value:"Staking Phase Duration",id:"staking-phase-duration",level:3},{value:"Voting Phase Duration",id:"voting-phase-duration",level:3},{value:"Reveal Phase Duration",id:"reveal-phase-duration",level:3},{value:"Escalation Phase Duration",id:"escalation-phase-duration",level:3}],h={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"To use Governance, it must first be enabled. Enabling this extension requires that you set some additional parameters. These parameters cannot be changed after enabling it. To do so, you must uninstall the extension, and then install and enable it again with new parameters. Note that uninstalling the extension results in all Motions being lost."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you intend to set up a colony ",(0,o.kt)("strong",{parentName:"p"},"for testing purposes only"),", you may want to adjust some of the default settings in order to speed up some processes while testing in real-time with other users, such as on a call. ",(0,o.kt)("em",{parentName:"p"},'For that purpose, we recommend setting the "End Vote Threshold" to 50% and the duration of all four phases to 0.1 hours.')," For asynchronous testing and a more realistic experience, you may want to stick the default values listed below.")),(0,o.kt)("h3",{id:"required-stake"},"Required Stake"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"What percentage of the team\u2019s reputation, in token terms, should need to stake on each side of a motion?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 1%")),(0,o.kt)("p",null,"E.g., if a team has 100 reputation points between them, and the Required Stake is 1%, then 1 token would need to be staked to either support or object to a motion."),(0,o.kt)("h3",{id:"voter-reward"},"Voter Reward"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In a dispute, what percentage of the losing side\u2019s stake should be awarded to the voters?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 20%")),(0,o.kt)("p",null,"E.g., if both the colony members who create a motion, and the colony members who raise an objection stake 50 tokens, and the Voter Reward is 20%, then the voters will share 20 tokens between them, proportional to their reputations (i.e. 20% of the combined stake of both side of the dispute).\\\n\\\nFor unbalanced voting outcomes the reward calculation is on a linear scale between 0 and 100% of the defined Voter Reward. The remainder will be shared between the stakers proportional to the outcome of the vote. The calculation for this is: \\\n\\\n",(0,o.kt)("em",{parentName:"p"},"rewardFactor = (2 ","*"," Winning Votes Count / (Winning Votes Count + Losing Votes Count)) - 1"),"\\\n",(0,o.kt)("em",{parentName:"p"},"totalReward = rewardFactor ","*"," Voter Reward Value")),(0,o.kt)("h3",{id:"minimum-stake"},"Minimum Stake"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"What is the minimum percentage of the total stake that each staker should have to provide?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 1%")),(0,o.kt)("p",null,"E.g., 1% means anybody who wishes to stake must provide at least 1% of the Required Stake. 100% means that one person must provide the entire stake."),(0,o.kt)("h3",{id:"end-vote-threshold"},"End Vote Threshold"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"At what threshold of reputation having voted should the voting period to end?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 70%")),(0,o.kt)("p",null,"E.g., If the End Vote Threshold is 70%, then the voting period will end as soon as 70% of the reputation in a team has cast their vote. This helps votes get settled faster. If you want to ensure everyone gets to vote if they want to, set the value to 100%."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 50%.")),(0,o.kt)("h3",{id:"staking-phase-duration"},"Staking Phase Duration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How long do you want to allow each side of a motion to get staked?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,o.kt)("p",null,"E.g., if the staking phase is 72 hours, then once a motion is created members will have 72 hours to provide the full stake required to back the motion. If the motion does not receive the full stake in 72 hours, it will fail. Once the motion has been fully staked, the staking period will reset and members will have a further 72 hours in which to \u201cObject\u201d by staking against the motion if they wish to take the decision to a vote. If the full stake for the objection is not staked, then the motion will automatically pass."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,o.kt)("h3",{id:"voting-phase-duration"},"Voting Phase Duration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How long do you want to give members to cast their votes?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,o.kt)("p",null,"E.g., if the vote duration is 72 hours, then after both sides of the motion are fully staked, members with reputation in the team will have 72 hours in which to vote, unless the \u201cEnd Vote Threshold\u201d is reached, in which case the vote will end early."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,o.kt)("h3",{id:"reveal-phase-duration"},"Reveal Phase Duration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How long do you want to give members to reveal their votes?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,o.kt)("p",null,"E.g., votes in colony are secret while the vote is ongoing, and so must be revealed once votes have been cast. If the reveal phase is 72 hours long, then members will have 72 hours to reveal their votes, otherwise their votes will not be counted and they will not receive a share of the voter reward. If all votes are revealed before the end of the reveal phase, then the reveal phase will end."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,o.kt)("h3",{id:"escalation-phase-duration"},"Escalation Phase Duration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How long do you wish to allow for members to escalate a dispute to a higher team?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,o.kt)("p",null,"E.g., if the escalation phase is 72 hours, once the outcome of a vote is known, if the loser feels the outcome was for any reason incorrect, then they will have 72 hours in which to escalate the dispute to a higher team in the colony by increasing the stake to meet the required stake of that higher team."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that Dispute escalation is not yet supported.")))}p.isMDXComponent=!0}}]);