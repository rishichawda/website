"use strict";(self.webpackChunkrishikc_com=self.webpackChunkrishikc_com||[]).push([[160],{4107:function(e,t,a){var l=a(8522),r=a(1673),n=a(2560),s=a(1883),i=a(7294),o=a(7356);const c={initial:{},animate:{transition:{staggerChildren:.05}},exit:{}},m={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};t.Z=e=>i.createElement(l.X,{features:r.H},i.createElement(n.m.ul,{initial:"initial",animate:"animate",exit:"exit",variants:c,className:"article-list",role:"list"},e.items.length?e.items.map((t=>{var a,l,r,c,d,u,f;let{node:g}=t;return i.createElement(n.m.li,{variants:m,layout:!0,className:"block focus-within:bg-gray-300 dark:focus-within:bg-slate-900 article-list-item",role:"listitem",key:g.id},i.createElement(s.Link,{className:"focus:outline-none",to:null===(a=g.fields)||void 0===a?void 0:a.slug},i.createElement("div",{className:"flex flex-col items-start md:justify-between md:items-center md:flex-row article-list-item-header"},i.createElement("div",{className:"article-list-item-header-content"},i.createElement("h2",{className:"article-list-item-header-content-title"},null===(l=g.frontmatter)||void 0===l?void 0:l.title),i.createElement("span",{className:"article-list-item-header-content-tags"},null===(r=g.frontmatter)||void 0===r||null===(c=r.tags)||void 0===c?void 0:c.map((t=>i.createElement(o.Z,{key:t,focusable:!1,onClick:a=>{e.onTagClick(a,t)}},t))))),i.createElement("span",{className:"dark:bg-slate-600 whitespace-nowrap article-list-item-header-info"},i.createElement("span",null,null===(d=g.frontmatter)||void 0===d?void 0:d.date),"  ",i.createElement("strong",null,"·"),"  ",i.createElement("span",null,null===(u=g.fields)||void 0===u||null===(f=u.timeToRead)||void 0===f?void 0:f.text))),i.createElement("p",{className:"article-list-item-details"},g.excerpt)))})):i.createElement("p",null,"Uh-oh! No results for the search.")))},7784:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(1883),r=a(7294);var n=e=>{var t,a,n;let{data:s}=e;return r.createElement("li",{className:"inline-flex w-full items-stretch focus-within:outline-dotted focus-within:outline-2 focus-within:outline-brand-700 article-preview-list-item",role:"listitem"},r.createElement("div",{className:"h-full flex flex-col items-start justify-between p-6 bg-white  dark:bg-gray-900 dark:border-gray-800 shadow-sm"},r.createElement("div",{className:"h-2/3 flex flex-col justify-between"},r.createElement(l.Link,{className:"focus:outline-none",tabIndex:-1,to:null===(t=s.fields)||void 0===t?void 0:t.slug},r.createElement("h2",{className:"mb-2 text-gray-900 dark:text-white article-preview-list-item-title"},null===(a=s.frontmatter)||void 0===a?void 0:a.title))),r.createElement("div",null,r.createElement("p",{className:"mb-3 text-gray-700 dark:text-gray-400 article-preview-list-item-details"},s.excerpt),r.createElement(l.Link,{to:null===(n=s.fields)||void 0===n?void 0:n.slug,className:"inline-flex items-center text-center text-brand-700 rounded-lg hover:text-brand-900 focus:outline-none"},"Read more  ➜"))))};var s=()=>{const e=(0,l.useStaticQuery)("4225959321");return r.createElement("div",{className:"flex flex-col mx-auto justify-between mb-28 article-preview"},r.createElement("h2",{className:"antialiased article-preview-header"},"Some of my writings . ."),r.createElement("div",{className:"mx-auto py-4"},r.createElement("ul",{className:"grid grid-cols-1 sm:grid-rows-1 md:grid-cols-3 grid-flow-row article-preview-list"},e.allMdx.nodes.map((e=>r.createElement(n,{key:e.id,data:e}))))),r.createElement(l.Link,{to:"articles",className:"text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-700 focus:outline-dotted focus:outline-2 focus:outline-brand-700 antialiased self-center all-articles-link"},"Browse the complete list"))}},5485:function(e,t,a){var l=a(7294);t.Z=e=>{let{searchQuery:t,setSearchQuery:a}=e;return l.createElement("form",{id:"articles-search-bar",method:"get",autoComplete:"off",className:"border-4 border-gray-200 focus-within:border-gray-300 dark:border-slate-600 dark:focus-within:border-slate-500 w-full sm:w-fit"},l.createElement("label",{htmlFor:"articles-search-bar"},l.createElement("span",{className:"hide"},"Search")),l.createElement("input",{value:t,onInput:e=>{a(e.target.value)},type:"text",placeholder:"Type to search..",name:"articles-search-bar",className:"placeholder:text-gray-400 block bg-gray-200 dark:bg-slate-600 dark:placeholder:text-slate-300"}))}},8445:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(7294);var r=()=>l.createElement("div",{className:"mt-12 lg:mt-0 z-10 contact-page-section-text"},l.createElement("h1",{className:"text-brand-700 dark:text-brand-200 font-bold tracking-tight"},"Get in touch ",l.createElement("br",null)),l.createElement("h2",{className:"text-brand-400"},"for collaboration, queries and more."),l.createElement("p",{className:"text-brand-300 font-semibold mt-1"},"Don't feel like sharing your email?"),l.createElement("p",{className:"text-brand-300 font-semibold mt-1"},"You can reach out to me on any of the social media platforms. Find the link to my social media profiles at the bottom of this website."),l.createElement("p",{className:"text-brand-300 font-semibold"},"Talk to you soon!  👋")),n=a(4810);var s=function(){return l.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},l.createElement("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),l.createElement("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}))},i=a(5408),o=a(7581),c=function(e){return e[e.Idle=0]="Idle",e[e.Processing=1]="Processing",e[e.Successful=2]="Successful",e[e.Error=3]="Error",e}(c||{}),m=function(e){return e.Email="reply_to",e.Message="message",e}(m||{});var d=()=>{const e=l.useRef(null),[t,a]=l.useState(c.Idle),[r,d]=l.useState({[m.Email]:"",[m.Message]:""}),u=t=>{t.preventDefault(),Object.keys(r).some((e=>""!==r[e]))||(a(c.Processing),n.ZP.sendForm("service_yq0pgxr","template_0a9gvht",e.current,"UrG3wBE3mX3V9b-Gd").then((()=>{a(c.Successful)}),(()=>{a(c.Error)})))},f=e=>{let t;switch(e.target.name){case m.Email:t=(0,o.o)(e.target.value.trim()),d({...r,[m.Email]:t?t.message:""});break;case m.Message:t=(0,o.N)(e.target.value.trim()),d({...r,[m.Message]:t?t.message:""})}};switch(t){case c.Processing:return l.createElement("svg",{"aria-hidden":"true",className:"w-10 h-10 mr-2 text-gray-300 animate-spin fill-brand-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}));case c.Successful:case c.Error:return l.createElement("div",{className:"p-4 mb-4 w-full text-slate-600 dark:text-gray-200",role:"alert"},l.createElement("div",{className:"flex items-center"},l.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})),t===c.Error?l.createElement("h3",{className:"text-lg font-medium"},"Uh-oh! Something went wrong :("):l.createElement("h3",{className:"text-lg font-medium"},"Message sent!")),t===c.Error?l.createElement("div",{className:"mt-6 mb-4 text-sm"},"Don't worry, you can still contact me on social media."):l.createElement("div",{className:"mt-6 mb-4 text-sm"},"Please keep an eye out for a reply to your inbox as soon as I receive your message."));default:return l.createElement("form",{onSubmit:u,ref:e,className:"text-slate-500 text-sm flex flex-col items-center w-full dark:text-gray-400"},l.createElement("div",{className:"w-full contact-page-section-form-input-container"},l.createElement("label",{htmlFor:"email-address-input",className:"hide"},"Email"),l.createElement("div",{className:"relative"},l.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},l.createElement(s,null)),l.createElement("input",{name:"reply_to",type:"email",id:"email-address-input",className:"block w-full pl-10 p-2.5 bg-gray-50 border rounded-lg border-gray-300 focus:outline-none focus:border-brand-500 dark:bg-slate-800 dark:border-gray-700 dark:placeholder-gray-400  dark:focus:border-brand-700",placeholder:"email address",onBlur:f,onChange:f})),l.createElement("p",{className:"mt-2 text-sm text-red-600 dark:text-red-500"},r[m.Email]?""+r[m.Email]:"")),l.createElement("div",{className:"w-full contact-page-section-form-input-container"},l.createElement("label",{htmlFor:"email-content-input",className:"hide"},"Content"),l.createElement("textarea",{name:"message",id:"email-content-input",rows:4,className:"block p-2.5 w-full text-sm bg-gray-50 border rounded-lg border-gray-300 focus:outline-none focus:border-brand-500 dark:bg-slate-800 dark:border-gray-700 dark:placeholder-gray-400  dark:focus:border-brand-700",placeholder:"write your thoughts here..",onBlur:f,onChange:f}),l.createElement("p",{className:"mt-2 text-sm text-red-600 dark:text-red-500"},r[m.Message]?""+r[m.Message]:"")),l.createElement("button",{type:"submit","data-mdb-ripple":"true","data-mdb-ripple-color":"light",className:"inline-flex items-center bg-brand-800 dark:bg-brand-800 hover:bg-brand-900 dark:hover:bg-brand-900 focus:bg-brand-900 dark:focus:bg-brand-900 text-white uppercase rounded-lg border-gray-300 focus:outline-none focus:border-brand-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-brand-500"},l.createElement(i.Z,null),"Send message"))}};var u=()=>l.createElement("div",{className:"flex items-center justify-center bg-white dark:bg-slate-900 shadow-2xl shadow-brand-500 dark:shadow-slate-500 contact-page-section"},l.createElement("svg",{id:"blob-1",className:"absolute drop-shadow-lg fill-violet-200 dark:fill-purple-700",viewBox:"0 0 480 480"},l.createElement("path",{d:"M345,326Q240,412,131,326Q22,240,131,129.5Q240,19,345,129.5Q450,240,345,326Z"})),l.createElement("svg",{id:"blob-2",className:"absolute drop-shadow-lg fill-violet-200 dark:fill-purple-700",viewBox:"0 0 200 200"},l.createElement("path",{d:"M57.6,-16.4C65.8,6.7,57.7,37.4,35.6,54.9C13.5,72.4,-22.6,76.5,-39.3,62.4C-56.1,48.3,-53.5,15.9,-43.8,-9.3C-34,-34.5,-17,-52.4,3.8,-53.6C24.7,-54.9,49.3,-39.4,57.6,-16.4Z",transform:"translate(100 100)"})),l.createElement("div",{className:"grid lg:grid-cols-2 gap-10 contact-page-section-wrapper"},l.createElement(r,null),l.createElement("div",{className:"relative flex items-center justify-center rounded-2xl contact-page-section-form"},l.createElement(d,null))))},7573:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(757),r=a(7294),n=a(6075),s=a(8032),i=a(5655);var o=e=>{let{data:t}=e;const a=(0,s.c)(t.node.localFile);return r.createElement("div",{onClick:()=>{(0,i.m)("https://www.instagram.com/rishiikc/")},className:"inline-flex w-full items-stretch cursor-pointer aspect-square instagram-gallery-image-wrapper"},r.createElement(s.G,{className:"w-full",alt:t.node.id,image:a}))};var c=()=>{const e=(0,n.Z)();return r.createElement("div",{className:"flex flex-col w-full mx-auto px-4 mb-28 justify-between gallery-preview-container"},r.createElement("div",{id:"gallery-preview","aria-label":"gallery-preview",className:"flex flex-row justify-between pb-6"},r.createElement("h2",{className:"antialiased"},"Gallery"),r.createElement(l.M,{href:"https://www.instagram.com/rishiikc/",target:"_blank",rel:"noopener noreferrer",className:"text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-700 antialiased focus-within:outline-dotted focus-within:outline-2 focus-within:outline-brand-700"},"View all photos")),r.createElement("div",{className:"flex mx-auto"},r.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 grid-flow-row gap-2 auto-cols-min gallery-preview-list"},e.map((e=>r.createElement(o,{data:e,key:e.node.id}))))))}},9674:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(3615),n=a(757);var s=e=>{var t;let{languages:a}=e;return l.createElement("div",{className:"w-full flex github-repo-card-languages"},null==a||null===(t=a.edges)||void 0===t?void 0:t.map((e=>{const t=e;let r=Math.ceil(t.size/a.totalSize*100)+"%";return l.createElement("dfn",{key:t.node.name,className:"h-full",title:t.node.name+", "+r,style:{backgroundColor:t.node.color,width:r}},l.createElement("div",{className:"h-full w-full",style:{backgroundColor:t.node.color,width:r}}))})))};var i=function(e){let{repository:t}=e;return l.createElement("li",{role:"listitem",className:"flex items-stretch max-w-md md:max-w-none w-full github-repositories-preview-list-item"},l.createElement(n.M,{className:"inline-flex w-full items-stretch focus:outline-dotted focus:outline-2 focus:outline-brand-700",href:null==t?void 0:t.url,target:"_blank"},l.createElement("div",{className:"github-repo-card relative w-full bg-white  dark:bg-gray-900 sm:mx-auto overflow-hidden shadow-sm"},l.createElement(s,{languages:null==t?void 0:t.languages}),l.createElement("div",{className:"flex justify-between items-start github-repositories-preview-list-item-title"},l.createElement("h2",null,null==t?void 0:t.name),l.createElement("small",null,"★  ",null==t?void 0:t.stargazerCount)),l.createElement("div",{className:"repo-description opacity-70",dangerouslySetInnerHTML:{__html:null==t?void 0:t.descriptionHTML}}))))};var o=()=>{const e=(0,r.Z)();return l.createElement("div",{id:"repositories",className:"flex flex-col w-full mx-auto mb-28 justify-between items-start github-repositories-preview"},l.createElement("h2",{className:"antialiased github-repositories-preview-header"},"Popular OSS repositories"),l.createElement("div",{className:"mx-auto py-6"},l.createElement("ul",{role:"list",className:"grid grid-cols-1 grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-cols-fr github-repositories-preview-list"},e.map((e=>{var t;return l.createElement(i,{key:null===(t=e.node)||void 0===t?void 0:t.name,repository:e.node})})))),l.createElement(n.M,{className:"text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-700 focus-within:outline-dotted focus-within:outline-2 focus-within:outline-brand-700 antialiased",href:"https://github.com/rishichawda",target:"_blank",rel:"noopener noreferrer"},"See more projects on GitHub"))}}}]);
//# sourceMappingURL=components-6067fba36bb4a595cd52.js.map