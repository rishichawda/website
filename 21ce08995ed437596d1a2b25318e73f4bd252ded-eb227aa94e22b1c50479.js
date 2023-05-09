"use strict";(self.webpackChunkrishikc_com=self.webpackChunkrishikc_com||[]).push([[270],{8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return h},M:function(){return L},P:function(){return k},S:function(){return H},_:function(){return o},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return l}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,c=o(e,y);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,s({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var v;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=o(e,E);return t?n.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return n.createElement(n.Fragment,null,n.createElement(w,s({},e)),n.createElement("noscript",null,n.createElement(w,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=w.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:I},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],j=new Set;let R,_;const q=function(e){let{as:t="div",image:r,style:i,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,y=o(e,T);const{width:f,height:b,layout:w}=r,v=d(f,b,w),{style:E,className:k}=v,L=o(v,O),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const x=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,f,b);return(0,n.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(_&&j.has(S))return;let t,n;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(S),image:r},y)),j.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=o(C.current,S,j,i,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(S)&&_&&(C.current.innerHTML=_(s({isLoading:j.has(S),isLoaded:j.has(S),image:r},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:c}),className:k+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(q,e):null}));P.propTypes=N,P.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:a,__imageData:r,__error:i}=t,l=o(t,A);return i&&console.warn(i),r?n.createElement(e,s({image:r},l)):(console.warn("Image not loaded",a),null)}}const z=W((function(e){let{as:t="div",className:a,class:r,style:i,image:l,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:b}=e,w=o(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=s({objectFit:f,objectPosition:b,backgroundColor:y},p);const{width:v,height:E,layout:I,images:N,placeholder:T,backgroundColor:O}=l,j=d(v,E,I),{style:R,className:_}=j,q=o(j,S),P={fallback:void 0,sources:[]};return N.fallback&&(P.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?x(N.fallback.srcSet):void 0})),N.sources&&(P.sources=N.sources.map((e=>s({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,s({},q,{style:s({},R,i,{backgroundColor:y}),className:_+(a?" "+a:"")}),n.createElement(h,{layout:I,width:v,height:E},n.createElement(k,s({},m(T,!1,I,v,E,O,f,b))),n.createElement(L,s({"data-gatsby-image-ssr":"",className:g},w,u("eager"===c,!1,P,c,p)))))})),F=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),D={src:i().string.isRequired,alt:I,width:F,height:F,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=D;const H=W(P);H.displayName="StaticImage",H.propTypes=D},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=n(c)===c&&r(c)!==c,o=s,s=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},4001:function(e,t,a){var n=a(7294),r=a(7896),i=a(193);t.Z=e=>{let{title:t,description:a,keywords:s,image:o,type:l,children:c}=e;const d=(0,i.$)(),u={title:t||d.title,description:a||d.description,image:""+d.siteUrl+o,type:l||"WebSite",url:""+d.siteUrl+r.globalHistory.location.pathname};return n.createElement(n.Fragment,null,n.createElement("html",{lang:"en"}),n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),s?n.createElement("meta",{name:"keywords",content:s}):null,n.createElement("meta",{name:"og:title",content:u.title}),n.createElement("meta",{name:"og:site_name",content:u.title}),n.createElement("meta",{name:"og:type",content:d.og.type}),n.createElement("meta",{name:"og:description",content:u.description}),n.createElement("meta",{name:"og:image",content:u.image}),n.createElement("meta",{name:"og:url",content:u.url}),n.createElement("meta",{name:"twitter:title",content:u.title}),n.createElement("meta",{name:"twitter:description",content:u.description}),n.createElement("meta",{name:"twitter:card",content:d.twitter.card}),n.createElement("meta",{name:"twitter:creator",content:d.twitter.creator}),n.createElement("meta",{name:"twitter:image",content:u.image}),n.createElement("script",{type:"application/ld+json"},'{\n          "@context": "https://schema.org/",\n          "@type": "'+u.type+'",\n          "@id": "'+u.url+'",\n          "headline": "'+u.title+'",\n          "description": "'+u.description+'",\n          '+(s?'"keywords": '+JSON.stringify(s.split(","))+",":"")+'\n          "author": {\n            "@type": "Person",\n            "name": "Rishi Kumar Chawda"\n          }\n        }'),c,n.createElement("meta",{name:"theme-color",content:"#f9fafb",media:"(prefers-color-scheme: light)"}),n.createElement("meta",{name:"theme-color",content:"#1e293b",media:"(prefers-color-scheme: dark)"}))}}}]);
//# sourceMappingURL=21ce08995ed437596d1a2b25318e73f4bd252ded-eb227aa94e22b1c50479.js.map