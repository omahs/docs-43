"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=l,c=k["".concat(o,".").concat(m)]||k[m]||d[m]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={},i="Token Supplier (`TokenSupplier`)",p={unversionedId:"interfaces/extensions/tokensupplier",id:"interfaces/extensions/tokensupplier",title:"Token Supplier (`TokenSupplier`)",description:"A simple extension which allows a colony to automatically manage the",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/tokensupplier.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/tokensupplier",permalink:"/next/colonynetwork/interfaces/extensions/tokensupplier",draft:!1,editUrl:"https://github.com/JoinColony/interfaces/extensions/tokensupplier.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Streaming Payments / Salaries (`StreamingPayments`)",permalink:"/next/colonynetwork/interfaces/extensions/streamingpayments"},next:{title:"Motions & Disputes Extension (`VotingReputation`)",permalink:"/next/colonynetwork/interfaces/extensions/votingreputation"}},o={},s=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getLastPinged():uint256 lastPinged</code>",id:"-getlastpingeduint256-lastpinged",level:3},{value:"\u25b8 <code>getLastRateUpdate():uint256 lastUpdate</code>",id:"-getlastrateupdateuint256-lastupdate",level:3},{value:"\u25b8 <code>getMetatransactionNonce(address userAddress):uint256 nonce</code>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <code>getTokenIssuanceRate():uint256 issuanceRate</code>",id:"-gettokenissuancerateuint256-issuancerate",level:3},{value:"\u25b8 <code>getTokenSupplyCeiling():uint256 supplyCeiling</code>",id:"-gettokensupplyceilinguint256-supplyceiling",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>initialise(uint256 _tokenSupplyCeiling, uint256 _tokenIssuanceRate)</code>",id:"-initialiseuint256-_tokensupplyceiling-uint256-_tokenissuancerate",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>issueTokens()</code>",id:"-issuetokens",level:3},{value:"\u25b8 <code>setTokenIssuanceRate(uint256 _tokenIssuanceRate)</code>",id:"-settokenissuancerateuint256-_tokenissuancerate",level:3},{value:"\u25b8 <code>setTokenSupplyCeiling(uint256 _tokenSupplyCeiling)</code>",id:"-settokensupplyceilinguint256-_tokensupplyceiling",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"token-supplier-tokensupplier"},"Token Supplier (",(0,l.kt)("inlineCode",{parentName:"h1"},"TokenSupplier"),")"),(0,l.kt)("p",null,"A simple extension which allows a colony to automatically manage the\ntoken supply. A colony can configure a maximum supply and a rate of issuance,\nat which point anyone can continually mint tokens and have them sent\nto the colony."),(0,l.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,l.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,l.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,l.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,l.kt)("p",null,"Called when upgrading the extension (currently a no-op)"),(0,l.kt)("h3",{id:"-getlastpingeduint256-lastpinged"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"getLastPinged():uint256 lastPinged")),(0,l.kt)("p",null,"Get the time of the last token minting event"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastPinged"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp of the last ping")))),(0,l.kt)("h3",{id:"-getlastrateupdateuint256-lastupdate"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"getLastRateUpdate():uint256 lastUpdate")),(0,l.kt)("p",null,"Get the time of the last change in issuance rate"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp of the last update")))),(0,l.kt)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"getMetatransactionNonce(address userAddress):uint256 nonce")),(0,l.kt)("p",null,"Gets the next nonce for a meta-transaction"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nonce"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The nonce")))),(0,l.kt)("h3",{id:"-gettokenissuancerateuint256-issuancerate"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"getTokenIssuanceRate():uint256 issuanceRate")),(0,l.kt)("p",null,"Get the token issuance rate"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuanceRate"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The token issuance rate")))),(0,l.kt)("h3",{id:"-gettokensupplyceilinguint256-supplyceiling"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"getTokenSupplyCeiling():uint256 supplyCeiling")),(0,l.kt)("p",null,"Get the token supply ceiling"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"supplyCeiling"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The token supply ceiling")))),(0,l.kt)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,l.kt)("p",null,"Returns the identifier of the extension"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,l.kt)("h3",{id:"-initialiseuint256-_tokensupplyceiling-uint256-_tokenissuancerate"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"initialise(uint256 _tokenSupplyCeiling, uint256 _tokenIssuanceRate)")),(0,l.kt)("p",null,"Initialise the extension, must be called before any tokens can be issued"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_tokenSupplyCeiling"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of tokens to issue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_tokenIssuanceRate"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tokens to issue per day")))),(0,l.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,l.kt)("p",null,"Configures the extension"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_colony"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,l.kt)("h3",{id:"-issuetokens"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"issueTokens()")),(0,l.kt)("p",null,"Issue the appropriate amount of tokens"),(0,l.kt)("h3",{id:"-settokenissuancerateuint256-_tokenissuancerate"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"setTokenIssuanceRate(uint256 _tokenIssuanceRate)")),(0,l.kt)("p",null,"Update the tokenIssuanceRate"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_tokenIssuanceRate"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tokens to issue per day")))),(0,l.kt)("h3",{id:"-settokensupplyceilinguint256-_tokensupplyceiling"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"setTokenSupplyCeiling(uint256 _tokenSupplyCeiling)")),(0,l.kt)("p",null,"Update the tokenSupplyCeiling, cannot set below current tokenSupply"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_tokenSupplyCeiling"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of tokens to issue")))),(0,l.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"uninstall()")),(0,l.kt)("p",null,"Called when uninstalling the extension"),(0,l.kt)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,l.kt)("p",null,"Returns the version of the extension"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_version"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}d.isMDXComponent=!0}}]);