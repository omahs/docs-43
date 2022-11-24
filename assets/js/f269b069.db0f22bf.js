"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(t),c=i,N=k["".concat(l,".").concat(c)]||k[c]||s[c]||r;return t?a.createElement(N,o(o({ref:n},m),{},{components:t})):a.createElement(N,o({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=k;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={},o="Interface: ColonyEvent<T>",p={unversionedId:"api/interfaces/ColonyEvent",id:"api/interfaces/ColonyEvent",title:"Interface: ColonyEvent<T\\>",description:"An Event that came from a contract within the Colony Network",source:"@site/vendor/colonySDK/docs/api/interfaces/ColonyEvent.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ColonyEvent",permalink:"/colonysdk/api/interfaces/ColonyEvent",draft:!1,editUrl:"https://github.com/JoinColony/api/interfaces/ColonyEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: AnnotationMetadata",permalink:"/colonysdk/api/interfaces/AnnotationMetadata"},next:{title:"Interface: ColonyEventManagerOptions",permalink:"/colonysdk/api/interfaces/ColonyEventManagerOptions"}},l={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"data",id:"data",level:3},{value:"eventName",id:"eventname",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"eventSource",id:"eventsource",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"getMetadata",id:"getmetadata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"transactionHash",id:"transactionhash",level:3}],m={toc:d};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-colonyeventt"},"Interface: ColonyEvent<T",">"),(0,i.kt)("p",null,"An Event that came from a contract within the Colony Network"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/colonysdk/api/enums/MetadataType"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},(0,i.kt)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ColonyEvent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#address"},"address")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventname"},"eventName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"eventName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The full event signature of this event (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenMinted(uint256))")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#eventname"},"eventName")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventsource"},"eventSource"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"eventSource"),": keyof ",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/EventSources"},(0,i.kt)("inlineCode",{parentName:"a"},"EventSources"))),(0,i.kt)("p",null,"The Colony contract the event originated from"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#eventsource"},"eventSource")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromblock"},"fromBlock"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#fromblock"},"fromBlock")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmetadata"},"getMetadata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"getMetadata"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ColonyMetadata")," = getColonyMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainMetadata")," = getDomainMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">",">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ColonyMetadata")," = getColonyMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainMetadata")," = getDomainMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">",">"),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ColonyMetadata")," = getColonyMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainMetadata")," = getDomainMetadataFromResponse; ",(0,i.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toblock"},"toBlock"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#toblock"},"toBlock")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topics"},"topics"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"topics"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/ColonyFilter#topics"},"topics")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")))}s.isMDXComponent=!0}}]);