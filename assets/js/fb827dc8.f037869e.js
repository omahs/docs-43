"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),a=n(5488),i=n(5162);const l={description:"Quick Start for developing the Colony Network Smart contracts",sidebar_position:0},s="Quick Start",c={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Quick Start for developing the Colony Network Smart contracts",source:"@site/vendor/colonyNetwork/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/colonynetwork/quick-start",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/quick-start.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Quick Start for developing the Colony Network Smart contracts",sidebar_position:0},sidebar:"sidebar",next:{title:"Guides",permalink:"/colonynetwork/guides/"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cloning the repository and preparing the dependencies",id:"cloning-the-repository-and-preparing-the-dependencies",level:2},{value:"Provisioning the Token Contracts",id:"provisioning-the-token-contracts",level:3},{value:"Where to go from here?",id:"where-to-go-from-here",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q: There&#39;s a Python error, what&#39;s going on?",id:"q-theres-a-python-error-whats-going-on",level:3},{value:"Q: I&#39;m trying to deploy but it can&#39;t connect to the local ganache instance",id:"q-im-trying-to-deploy-but-it-cant-connect-to-the-local-ganache-instance",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS")," v14.x (use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (at least v18, ",(0,r.kt)("strong",{parentName:"li"},"optional"),")")),(0,r.kt)("p",null,"The Colony Network contracts are written in ",(0,r.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," and are built, tested and deployed using the ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle Suite"),". With the above dependencies in place you can just follow the instructions below and the Colony Network build scripts will sort out everything else for you."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're a Dapp developer looking to integrate with colony, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MTaEZ_7xhxpButTDDNj/s/slSiNQHJDrgYgciBacVr/"},"The Colony SDK")," as an entry point as it is the fastest way to start building with Colony. There you'll find analogous instructions better suited to building applications on top of the colonyNetwork. We also have created some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonySDK/tree/main/examples"},"examples")," that you can try out ",(0,r.kt)("a",{parentName:"p",href:"https://joincolony.github.io/colonySDK/"},"live in your browser"),"!")),(0,r.kt)("h2",{id:"cloning-the-repository-and-preparing-the-dependencies"},"Cloning the repository and preparing the dependencies"),(0,r.kt)("p",null,"Clone the repository including all its git submodules using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/JoinColony/colonyNetwork.git --recursive\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Heads up!")," Don't forget to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive")," flag to also clone the git submodules. They are important building blocks for some of the contracts.")),(0,r.kt)("p",null,"Change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyNetwork")," directory and check out the latest version tag (find a list of all released versions and their tags ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/releases"},"here"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd colonyNetwork\ngit checkout eac730e # replace eac730e with glwss in the future as soon as it's available\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check out a tagged git release if you want to develop ",(0,r.kt)("em",{parentName:"p"},"against")," the ColonyNetwork contracts (like running an RPC node)! Only tagged GitHub releases are known to work under all circumstances and are the ones that ultimately get deployed to the relevant live chains. If you want to work on the ColonyNetwork contracts themselves, this should be omitted.")),(0,r.kt)("p",null,"Then, install the required dependencies using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm use # alternatively, make sure you are using node version 14.x\nnpm ci # make sure you are using node version 14.x\n")),(0,r.kt)("p",null,"This will take some time. If you run into issues, see the Troubleshooting section below."),(0,r.kt)("h3",{id:"provisioning-the-token-contracts"},"Provisioning the Token Contracts"),(0,r.kt)("p",null,"The ColonyNetwork uses some Token Artifacts that need to be built first. To do that issue the command"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"docker",label:"Using Docker",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"When using docker the correct version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"solc")," compiler is automatically downloaded and it usually runs faster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run provision:token:contracts\n"))),(0,r.kt)(i.Z,{value:"nodocker",label:"Without Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"When not using Docker, we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DISABLE_DOCKER")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DISABLE_DOCKER=true npm run provision:token:contracts\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Great!")," Now you're ready to compile the contracts and run the tests."),(0,r.kt)("h3",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"You're already able to make modifications to the contracts and run those against the tests. Next step is to ",(0,r.kt)("a",{parentName:"p",href:"guides/deploying-colony-locally"},"deploy the Colony Network contracts locally"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"q-theres-a-python-error-whats-going-on"},"Q: There's a Python error, what's going on?"),(0,r.kt)("p",null,"A: Some ColonyNetwork dependencies require Python in older versions. To get around that, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," has been proven very useful. Install pyenv for your environment according to their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv#installation"},"guide"),", then issue the following command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"colonyNetwork")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 2.7.18\npyenv local 2.7.18\n")),(0,r.kt)("p",null,"This will create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},".python-version")," and instruct pyenv to use Python in version ",(0,r.kt)("inlineCode",{parentName:"p"},"2.7.18"),". After that, try running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm ci")," again."),(0,r.kt)("h3",{id:"q-im-trying-to-deploy-but-it-cant-connect-to-the-local-ganache-instance"},"Q: I'm trying to deploy but it can't connect to the local ganache instance"),(0,r.kt)("p",null,"A: Use NodeJS version 14.x ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," can help!"))}h.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),r=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),r=n(7294),a=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:h,groupId:m,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),o=g[n].value;o!==w&&(O(t),C(o),null!=m&&N(m,String(o)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:E},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}}}]);