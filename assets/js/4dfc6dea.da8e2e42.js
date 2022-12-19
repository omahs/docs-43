"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=s(a),N=r,u=d["".concat(o,".").concat(N)]||d[N]||m[N]||l;return a?n.createElement(u,i(i({ref:t},k),{},{components:a})):n.createElement(u,i({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="API",p={unversionedId:"api/README",id:"api/README",title:"API",description:"Namespaces",source:"@site/vendor/colonySDK/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/colonysdk/api/",draft:!1,editUrl:"https://github.com/JoinColony/api/README.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Creating a colony",permalink:"/colonysdk/guides/colony-creation"},next:{title:"Class: CloudflareReadonlyAdapter",permalink:"/colonysdk/api/classes/CloudflareReadonlyAdapter"}},o={},s=[{value:"Namespaces",id:"namespaces",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"EventSource",id:"eventsource",level:3},{value:"MetadataEvent",id:"metadataevent",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"MetadataValue",id:"metadatavalue",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Variables",id:"variables",level:2},{value:"DecisionMotionCode",id:"decisionmotioncode",level:3},{value:"Functions",id:"functions",level:2},{value:"addressesAreEqual",id:"addressesareequal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"extractCustomEvent",id:"extractcustomevent",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"extractEvent",id:"extractevent",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getLogs",id:"getlogs",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"nonNullable",id:"nonnullable",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"toEth",id:"toeth",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"toWei",id:"towei",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"w",id:"w",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4}],k={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/modules/Tokens"},"Tokens"))),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/ColonyLabelSuffix"},"ColonyLabelSuffix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/ColonyRole"},"ColonyRole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/Extension"},"Extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/Id"},"Id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/MetaTxBroadCasterEndpoint"},"MetaTxBroadCasterEndpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/MetadataType"},"MetadataType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/MotionState"},"MotionState")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/Network"},"Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/SupportedExtension"},"SupportedExtension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/TeamColor"},"TeamColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/enums/Vote"},"Vote"))),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/CloudflareReadonlyAdapter"},"CloudflareReadonlyAdapter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/Colony"},"Colony")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyEventManager"},"ColonyEventManager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyToken"},"ColonyToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/ColonyTxCreator"},"ColonyTxCreator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/MetaTxCreator"},"MetaTxCreator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/OneTxPayment"},"OneTxPayment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/PinataAdapter"},"PinataAdapter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/TxCreator"},"TxCreator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/classes/VotingReputation"},"VotingReputation"))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/AnnotationMetadata"},"AnnotationMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/BaseContract"},"BaseContract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyEvent"},"ColonyEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyEventManagerOptions"},"ColonyEventManagerOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyMetadata"},"ColonyMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyMultiFilter"},"ColonyMultiFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyNetworkOptions"},"ColonyNetworkOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ColonyTopic"},"ColonyTopic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/DecisionMetadata"},"DecisionMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/DomainMetadata"},"DomainMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/Ethers6FilterByBlockHash"},"Ethers6FilterByBlockHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/EventSources"},"EventSources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/MetaTxBaseContract"},"MetaTxBaseContract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/NetworkClientOptions"},"NetworkClientOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},"ParsedLogTransactionReceipt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/PermissionConfig"},"PermissionConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/SupportedExtensions"},"SupportedExtensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/TxConfig"},"TxConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/TxCreatorConfig"},"TxCreatorConfig"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"eventsource"},"EventSource"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"EventSource"),": ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/EventSources"},(0,r.kt)("inlineCode",{parentName:"a"},"EventSources")),"[keyof ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/EventSources"},(0,r.kt)("inlineCode",{parentName:"a"},"EventSources")),"]"),(0,r.kt)("p",null,"An EventSource is essentially an ",(0,r.kt)("em",{parentName:"p"},"ethers")," contract, that we can keep track of"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"metadataevent"},"MetadataEvent"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"MetadataEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"IPFS_METADATA_EVENTS"),"[",(0,r.kt)("inlineCode",{parentName:"p"},"K"),"]"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"metadatavalue"},"MetadataValue"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"MetadataValue"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"IPFS_METADATA_PARSERS"),"[",(0,r.kt)("inlineCode",{parentName:"p"},"K"),"]",">"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"decisionmotioncode"},"DecisionMotionCode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DecisionMotionCode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"0x12345678"')),(0,r.kt)("p",null,"Identifies a motion as a decision"),(0,r.kt)("p",null,"Usually there's no need to use this directly. Use ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/VotingReputation#createdecision"},"VotingReputation.createDecision")," instead."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"addressesareequal"},"addressesAreEqual"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addressesAreEqual"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Check if two addresses are equal"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"b")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extractcustomevent"},"extractCustomEvent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"extractCustomEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"receipt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iface"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Manually extract an event using the interface (e.g. if emitting contract is a different one than the calling contract)"),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receipt")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ContractReceipt")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iface")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Interface"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extractevent"},"extractEvent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"extractEvent"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"receipt"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Extract event args from a contract receipt"),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receipt")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ContractReceipt")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlogs"},"getLogs"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLogs"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Log"),"[]",">"),(0,r.kt)("p",null,"Version of ",(0,r.kt)("inlineCode",{parentName:"p"},"getLogs")," that also supports filtering for multiple addresses"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/Ethers6Filter"},(0,r.kt)("inlineCode",{parentName:"a"},"Ethers6Filter"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/Ethers6FilterByBlockHash"},(0,r.kt)("inlineCode",{parentName:"a"},"Ethers6FilterByBlockHash"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/Ethers6Filter"},(0,r.kt)("inlineCode",{parentName:"a"},"Ethers6Filter"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/interfaces/Ethers6FilterByBlockHash"},(0,r.kt)("inlineCode",{parentName:"a"},"Ethers6FilterByBlockHash")),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JsonRpcProvider"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Log"),"[]",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nonnullable"},"nonNullable"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"nonNullable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): value is NonNullable<T",">"),(0,r.kt)("p",null,"Use this to filter empty undefinied values from arrays in a type-safe way"),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"value is NonNullable<T",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toeth"},"toEth"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toEth"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"num"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Convert any number to ETH (remove 18 zeros)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { toEth } from '@colony/sdk';\n\nconst oneEther = BigNumber.from(\"1000000000000000000\");\nconsole.log(toEth(oneEther)); // 1.0\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"towei"},"toWei"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toWei"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"num"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"Convert any number to wei (add 18 zeros)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { toWei } from '@colony/sdk';\n\nconst oneEther = '1.0';\nconsole.log(toWei(oneEther)); // { BigNumber: \"1000000000000000000\" }\n")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"w"},"w"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"w"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"Short-hand method to convert a number to wei using JS tagged template strings"),(0,r.kt)("p",null,"See also here: ",(0,r.kt)("a",{parentName:"p",href:"http://tc39wiki.calculist.org/es6/template-strings/"},"http://tc39wiki.calculist.org/es6/template-strings/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This is only useful in contexts where the number is hard-coded (e.g. examples)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\nconsole.log(w`1.0`); // { BigNumber: \"1000000000000000000\" }\n")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TemplateStringsArray"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")))}m.isMDXComponent=!0}}]);