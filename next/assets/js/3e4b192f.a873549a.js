"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={description:"A guide on how to deploy and run the Colony Network Smart Contracts on your machine",sidebar_position:0},s="Deploying Colony Locally",p={unversionedId:"guides/deploying-colony-locally",id:"guides/deploying-colony-locally",title:"Deploying Colony Locally",description:"A guide on how to deploy and run the Colony Network Smart Contracts on your machine",source:"@site/vendor/colonyNetwork/docs/guides/deploying-colony-locally.md",sourceDirName:"guides",slug:"/guides/deploying-colony-locally",permalink:"/next/colonynetwork/guides/deploying-colony-locally",draft:!1,editUrl:"https://github.com/JoinColony/guides/deploying-colony-locally.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"A guide on how to deploy and run the Colony Network Smart Contracts on your machine",sidebar_position:0},sidebar:"sidebar",previous:{title:"Guides",permalink:"/next/colonynetwork/guides/"},next:{title:"Reputation Oracle Setup",permalink:"/next/colonynetwork/guides/reputation-oracle-setup"}},c={},u=[{value:"Starting out",id:"starting-out",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Cloning the repository and preparing the dependencies",id:"cloning-the-repository-and-preparing-the-dependencies",level:3},{value:"Starting an RPC server",id:"starting-an-rpc-server",level:3},{value:"Deploying the Colony Network contracts",id:"deploying-the-colony-network-contracts",level:3},{value:"Talking to the Colony Network",id:"talking-to-the-colony-network",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:3}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-colony-locally"},"Deploying Colony Locally"),(0,a.kt)("p",null,"This guide will cover the basics of getting the Colony Network Smart Contracts running on your local development machine."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that following this guide will enable you to only ",(0,a.kt)("em",{parentName:"p"},"deploy")," and ",(0,a.kt)("em",{parentName:"p"},"run")," the contracts locally in order to develop software against the Colony API that needs an ",(0,a.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API"},"RPC endpoint")," (like ",(0,a.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MTaEZ_7xhxpButTDDNj/s/QcRjzRciEwod6UqfA3ta/"},"ColonyJS")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MTaEZ_7xhxpButTDDNj/s/slSiNQHJDrgYgciBacVr/"},"Colony SDK"),"). If you would like to work on the Colony Network contracts ",(0,a.kt)("em",{parentName:"p"},"themselves"),", please see ",(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/contributing"},"Contributing"),".")),(0,a.kt)("h2",{id:"starting-out"},"Starting out"),(0,a.kt)("p",null,"After cloning the repository and installing the remaining dependencies you can start a local blockchain with the Colony contracts deployed. Read on to find out how."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need to have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS")," (best to use ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," to choose the right node version) and optionally ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed. See ",(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/quick-start#prerequisites"},"here")," for more information."),(0,a.kt)("h3",{id:"cloning-the-repository-and-preparing-the-dependencies"},"Cloning the repository and preparing the dependencies"),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/quick-start#cloning-the-repository-and-preparing-the-dependencies"},"follow this guide")," to clone and set up the repository."),(0,a.kt)("h3",{id:"starting-an-rpc-server"},"Starting an RPC server"),(0,a.kt)("p",null,'The RPC development server is a piece of software that emulates the behavior of a "real" RPC node like ',(0,a.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/"},"geth"),". It runs on your machine and you can deploy Smart Contracts just like on any Ethereum chain. A blockchain on your computer! We are using ",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/ganache/"},"Ganache")," for this, which is part of the ",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle")," suite."),(0,a.kt)("p",null,"Ganache was installed when you set up all the dependencies earlier. You can start a CLI version of it like so (run in a different terminal window from the ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyNetwork")," directory):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:blockchain:client\n")),(0,a.kt)("p",null,"This will run Ganache on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8545"),". Do not close the window, we're about to deploy the contracts!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Ganache will also create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"ganache-accounts.json")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyNetwork")," directory. This file contains the public and private keys of development accounts you can use (see the ",(0,a.kt)("inlineCode",{parentName:"p"},"private_keys")," property at the bottom). These accounts will be used to deploy the ColonyNetwork contracts and will be funded with ETH on the local blockchain. You are encouraged to use them in your own code!")),(0,a.kt)("h3",{id:"deploying-the-colony-network-contracts"},"Deploying the Colony Network contracts"),(0,a.kt)("p",null,"To deploy the Colony Network contracts to the running development RPC node (Ganache) we use the following command (",(0,a.kt)("strong",{parentName:"p"},"make sure you're using the same NodeJS version as for Ganache"),"):"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",label:"Using Docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle migrate --reset --compile-all\n"))),(0,a.kt)(l.Z,{value:"nodocker",label:"Without Docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"DISABLE_DOCKER=true npx truffle migrate --reset --compile-all\n")))),(0,a.kt)("p",null,"This will run Truffle's so called ",(0,a.kt)("strong",{parentName:"p"},"migrations"),", to deploy all contracts. Keep in mind that this will not only deploy the main ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyNetwork")," contract, but also set up the MetaColony alongside all its extensions. Please be patient, this will take some time. When you see something akin to the following output, everything was successfully deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Summary\n=======\n> Total deployments:   13\n> Final cost:          0.57571114 ETH\n")),(0,a.kt)("p",null,"The migration scripts will also create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"etherrouter-address.json"),". It contains the address for the main entry point for the Colony Contracts and can be instantiated as the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyNetwork")," contract. From this one you will be able to figure out all relevant addresses by just calling the corresponding functions on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyNetwork")," contract."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Why ",(0,a.kt)("inlineCode",{parentName:"p"},"etherrouter-address"),"? Colony uses the so called ",(0,a.kt)("em",{parentName:"p"},"EtherRouter")," pattern for upgradeable Smart Contracts. Read more about that ",(0,a.kt)("a",{parentName:"p",href:"https://blog.colony.io/writing-upgradeable-contracts-in-solidity-6743f0eecc88/"},"here"),". Or watch ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Sw9O2LWgWC0"},"this video"),". It's up to you :)")),(0,a.kt)("p",null,"What does that mean in practice? Act as if the ",(0,a.kt)("inlineCode",{parentName:"p"},"etherrouter-address")," is the Address for the deployed ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyNetwork")," contract."),(0,a.kt)("h2",{id:"talking-to-the-colony-network"},"Talking to the Colony Network"),(0,a.kt)("p",null,"While the Ganache RPC is still running, we can now actually communicate with the deployed contracts. Let's find out the address of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EtherRouter")," and ask for the locally deployed MetaColony's address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat etherrouter-address.json       \n# {"etherRouterAddress":"0x5CC4a96B08e8C88f2c6FC5772496FeD9666e4D1F"}\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"eth_call","params":[{ "to": "0x5CC4a96B08e8C88f2c6FC5772496FeD9666e4D1F", "data": "0x731bc22f" }],"id":1}\' http://localhost:8545\n# {"id":1,"jsonrpc":"2.0","result":"0x0000000000000000000000001133560db4aebbebc712d4273c8e3137f58c3a65"}\n')),(0,a.kt)("p",null,"What happened here? Let's break it down:"),(0,a.kt)("p",null,"As mentioned before, the ",(0,a.kt)("inlineCode",{parentName:"p"},"etherRouterAddress")," can be seen as the address the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/db41471f222a012c1a05f48a129f71c8d93d8a3b/contracts/colonyNetwork/IColonyNetwork.sol"},"IColonyNetwork")," contract is deployed under. Now we are using curl to talk to the Ethereum JSON-RPC API of our Ganache node. See ",(0,a.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#eth_call"},"the RPC API documentation")," for detailed explanations."),(0,a.kt)("p",null,"What we're doing here is issuing a ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/db41471f222a012c1a05f48a129f71c8d93d8a3b/contracts/colonyNetwork/IColonyNetwork.sol#L75"},(0,a.kt)("inlineCode",{parentName:"a"},"getMetaColony()"))," function on the contract with the address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x5CC4a96B08e8C88f2c6FC5772496FeD9666e4D1F")," (the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," field). This is encoded in the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field by using the first four bytes of the ",(0,a.kt)("inlineCode",{parentName:"p"},"keccak256")," hash of the function signature (",(0,a.kt)("inlineCode",{parentName:"p"},"getMetaColony()"),") - including its parameter types (in this case there are none). For some more examples see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/latest/abi-spec.html#examples"},"Solidity documentation"),"."),(0,a.kt)("p",null,"To reiterate:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Function signature"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getMetaColony()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Function signature ",(0,a.kt)("inlineCode",{parentName:"td"},"keccak256")," hash (use for example ",(0,a.kt)("a",{parentName:"td",href:"https://emn178.github.io/online-tools/keccak_256.html"},"this online tool"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"731bc22f478b87eebe748e766203ce0cbda401a2dd97cc0679f3a69a209ed724"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"First four bytes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"731bc22f"))))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If this way of communication with Ethereum Smart Contracts seems cumbersome to you - that's because it is! Luckily some wonderful people in the Open Source community built tools to make all this a lot easier. For general solutions look into ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},(0,a.kt)("inlineCode",{parentName:"a"},"ethers.js"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"web3.js")),".")),(0,a.kt)("p",null,"The Ganache server will answer with the address of the deployed MetaColony (plus some 0-padding): ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1133560db4aebbebc712d4273c8e3137f58c3a65"),"."),(0,a.kt)("p",null,"Check the logs of the ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle migrate")," command we issued earlier. The MetaColony should have the same address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"8_setup_meta_colony.js\n======================\n### Meta Colony created at 0x1133560dB4AebBebC712d4273C8e3137f58c3A65\n\n   > Saving migration to chain.\n   -------------------------------------\n   > Total cost:                   0 ETH\n")),(0,a.kt)("p",null,"\ud83c\udf89",(0,a.kt)("strong",{parentName:"p"},"Congratulations, you've successfully deployed the ColonyNetwork")," \ud83c\udf89"),(0,a.kt)("p",null,"Where to go from here? Well, you can try to issue a few more ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_call")," commands to retrieve data or even make a custom manual transaction?"),(0,a.kt)("p",null,"Or just go down the easy path! We created ",(0,a.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MTaEZ_7xhxpButTDDNj/s/slSiNQHJDrgYgciBacVr/"},"Colony SDK"),", to make it really easy to talk to the Colony contracts. With the knowledge you just acquired you can even test it out locally. Or try our more involved solution ",(0,a.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MTaEZ_7xhxpButTDDNj/s/QcRjzRciEwod6UqfA3ta/"},"ColonyJS")," that is quite a bit more flexible - we're using it to power the Colony Dapp!"),(0,a.kt)("h3",{id:"where-to-go-from-here"},"Where to go from here?"),(0,a.kt)("p",null,"If you would like to access the reputation related functionality within your development work (mainly to get a user's reputation), please see the ",(0,a.kt)("a",{parentName:"p",href:"reputation-oracle-setup"},"this guide"),"."))}h.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),a=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:h,values:m,groupId:y,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===h?h:null!=(t=null!=h?h:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:C}=(0,s.U)(),[v,T]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=y){const e=w[y];null!=e&&e!==v&&g.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),o=g[n].value;o!==v&&(D(t),T(o),null!=y&&C(y,String(o)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=x.indexOf(e.currentTarget)+1;n=null!=(o=x[t])?o:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},k)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":v===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function h(e){const t=(0,l.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}}}]);