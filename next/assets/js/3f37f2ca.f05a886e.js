"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||l;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o="Meta Colony (`IMetaColony`)",i={unversionedId:"interfaces/imetacolony",id:"interfaces/imetacolony",title:"Meta Colony (`IMetaColony`)",description:"The Meta Colony is a special colony which controls the Colony Network.",source:"@site/vendor/colonyNetwork/docs/interfaces/imetacolony.md",sourceDirName:"interfaces",slug:"/interfaces/imetacolony",permalink:"/next/colonynetwork/interfaces/imetacolony",draft:!1,editUrl:"https://github.com/JoinColony/interfaces/imetacolony.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Ether Router (`IEtherRouter`)",permalink:"/next/colonynetwork/interfaces/ietherrouter"},next:{title:"Recovery (`IRecovery`)",permalink:"/next/colonynetwork/interfaces/irecovery"}},d={},s=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>addExtensionToNetwork(bytes32 _extensionId, address _resolver)</code>",id:"-addextensiontonetworkbytes32-_extensionid-address-_resolver",level:3},{value:"\u25b8 <code>addGlobalSkill():uint256 skillId</code>",id:"-addglobalskilluint256-skillid",level:3},{value:"\u25b8 <code>addNetworkColonyVersion(uint256 _version, address _resolver)</code>",id:"-addnetworkcolonyversionuint256-_version-address-_resolver",level:3},{value:"\u25b8 <code>deprecateGlobalSkill(uint256 _skillId)</code>",id:"-deprecateglobalskilluint256-_skillid",level:3},{value:"\u25b8 <code>mintTokensForColonyNetwork(uint256 _wad)</code>",id:"-minttokensforcolonynetworkuint256-_wad",level:3},{value:"\u25b8 <code>setNetworkFeeInverse(uint256 _feeInverse)</code>",id:"-setnetworkfeeinverseuint256-_feeinverse",level:3},{value:"\u25b8 <code>setPayoutWhitelist(address _token, bool _status)</code>",id:"-setpayoutwhitelistaddress-_token-bool-_status",level:3},{value:"\u25b8 <code>setReputationMiningCycleReward(uint256 _amount)</code>",id:"-setreputationminingcyclerewarduint256-_amount",level:3}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meta-colony-imetacolony"},"Meta Colony (",(0,r.kt)("inlineCode",{parentName:"h1"},"IMetaColony"),")"),(0,r.kt)("p",null,"The Meta Colony is a special colony which controls the Colony Network.\nThis colony has access to a number of special functions used to manage\nvarious parameters of the network."),(0,r.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.kt)("h3",{id:"-addextensiontonetworkbytes32-_extensionid-address-_resolver"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"addExtensionToNetwork(bytes32 _extensionId, address _resolver)")),(0,r.kt)("p",null,"Add a new extension/version to the Extensions repository."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls ",(0,r.kt)("inlineCode",{parentName:"em"},"IColonyNetwork.addExtensionToNetwork"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_extensionId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"keccak256 hash of the extension name, used as an indentifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_resolver"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The deployed resolver containing the extension contract logic")))),(0,r.kt)("h3",{id:"-addglobalskilluint256-skillid"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"addGlobalSkill():uint256 skillId")),(0,r.kt)("p",null,"Add a new global skill."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls ",(0,r.kt)("inlineCode",{parentName:"em"},"IColonyNetwork.addSkill"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skillId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the added skill")))),(0,r.kt)("h3",{id:"-addnetworkcolonyversionuint256-_version-address-_resolver"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"addNetworkColonyVersion(uint256 _version, address _resolver)")),(0,r.kt)("p",null,"Adds a new Colony contract version and the address of associated ",(0,r.kt)("inlineCode",{parentName:"p"},"_resolver")," contract. Secured function to authorised members."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls ",(0,r.kt)("inlineCode",{parentName:"em"},"IColonyNetwork.addColonyVersion"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The new Colony contract version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_resolver"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Resolver")," contract which will be used with the underlying ",(0,r.kt)("inlineCode",{parentName:"td"},"EtherRouter")," contract")))),(0,r.kt)("h3",{id:"-deprecateglobalskilluint256-_skillid"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"deprecateGlobalSkill(uint256 _skillId)")),(0,r.kt)("p",null,"Mark a global skill as deprecated which stops new tasks and payments from using it."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls ",(0,r.kt)("inlineCode",{parentName:"em"},"IColonyNetwork.deprecateSkill"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_skillId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the added skill")))),(0,r.kt)("h3",{id:"-minttokensforcolonynetworkuint256-_wad"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"mintTokensForColonyNetwork(uint256 _wad)")),(0,r.kt)("p",null,"Mints CLNY in the Meta Colony and transfers them to the colony network. Only allowed to be called on the Meta Colony by the colony network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_wad"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to mint and transfer to the colony network")))),(0,r.kt)("h3",{id:"-setnetworkfeeinverseuint256-_feeinverse"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"setNetworkFeeInverse(uint256 _feeInverse)")),(0,r.kt)("p",null,"Set the Colony Network fee inverse amount."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls ",(0,r.kt)("inlineCode",{parentName:"em"},"IColonyNetwork.setFeeInverse"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_feeInverse"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Nonzero amount for the fee inverse")))),(0,r.kt)("h3",{id:"-setpayoutwhitelistaddress-_token-bool-_status"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"setPayoutWhitelist(address _token, bool _status)")),(0,r.kt)("p",null,"Set a token's status in the payout whitelist on the Colony Network"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_token"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The token being set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist status")))),(0,r.kt)("h3",{id:"-setreputationminingcyclerewarduint256-_amount"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"setReputationMiningCycleReward(uint256 _amount)")),(0,r.kt)("p",null,"Called to set the total per-cycle reputation reward, which will be split between all miners."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Calls the corresponding function on the ColonyNetwork.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The CLNY awarded per mining cycle to the miners")))))}k.isMDXComponent=!0}}]);