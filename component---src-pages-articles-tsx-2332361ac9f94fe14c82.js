"use strict";(self.webpackChunkrishikc_com=self.webpackChunkrishikc_com||[]).push([[339],{8481:function(e){!function(t,i,n){let r;(r=n.define)&&r.amd?r([],(function(){return i})):(r=n.modules)?r["FlexSearch".toLowerCase()]=i:e.exports=i}(0,function e(t){function i(e,t){const i=t?t.id:e&&e.id;this.id=i||0===i?i:R++,this.init(e,t),l(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),l(this,"length",(function(){return this.index.length}))}function n(e,t,i,n){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,n&&this.o.length>=n&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(t,this.o),this.F&&this.F(this.o))),this}function r(e){const t=C();for(const i in e)if(e.hasOwnProperty(i)){const n=e[i];b(n)?t[i]=n.slice(0):E(n)?t[i]=r(n):t[i]=n}return t}function s(e,t){const i=e.length,n=w(t),r=[];for(let s=0,o=0;s<i;s++){const i=e[s];(n&&t(i)||!n&&!t[i])&&(r[o++]=i)}return r}function o(e,t,i,n,r,s,o,l,a,c){let h;if(i=y(i,o?0:r,l,s,t,a,c),l&&(l=i.page,h=i.next,i=i.result),o)t=this.where(o,null,r,i);else{for(t=i,i=this.l,r=t.length,s=Array(r),o=0;o<r;o++)s[o]=i[t[o]];t=s}return i=t,n&&(w(n)||(L=n.split(":"),1<L.length?n=p:(L=L[0],n=m)),i.sort(n)),i=g(l,h,i),this.cache&&this.j.set(e,i),i}function l(e,t,i){Object.defineProperty(e,t,{get:i})}function a(e){return new RegExp(e,"g")}function c(e,t){for(let i=0;i<t.length;i+=2)e=e.replace(t[i],t[i+1]);return e}function h(e,t,i,n,r,s,o,l){return t[i]?t[i]:(r=r?(l-(o||l/1.5))*s+(o||l/1.5)*r:s,t[i]=r,r>=o&&((e=(e=e[l-(r+.5>>0)])[i]||(e[i]=[]))[e.length]=n),r)}function u(e,t){if(e){const i=Object.keys(e);for(let n=0,r=i.length;n<r;n++){const r=i[n],s=e[r];if(s)for(let i=0,n=s.length;i<n;i++){if(s[i]===t){1===n?delete e[r]:s.splice(i,1);break}E(s[i])&&u(s[i],t)}}}}function f(e){let t="",i="";var n="";for(let r=0;r<e.length;r++){const s=e[r];s!==i&&(r&&"h"===s?(n="a"===n||"e"===n||"i"===n||"o"===n||"u"===n||"y"===n,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&n||" "===i)&&(t+=s)):t+=s),n=r===e.length-1?"":e[r+1],i=s}return t}function d(e,t){return 0>(e=e.length-t.length)?1:e?-1:0}function m(e,t){return(e=e[L])<(t=t[L])?-1:e>t?1:0}function p(e,t){const i=L.length;for(let n=0;n<i;n++)e=e[L[n]],t=t[L[n]];return e<t?-1:e>t?1:0}function g(e,t,i){return e?{page:e,next:t?""+t:null,result:i}:i}function y(e,t,i,n,r,s,o){let l,a=[];if(!0===i){i="0";var c=""}else c=i&&i.split(":");const h=e.length;if(1<h){const b=C(),w=[];let E,k;var u,f=0;let j;var d=!0;let S,N,O,P,R,M,A=0;if(c&&(2===c.length?(P=c,c=!1):c=R=parseInt(c[0],10)),o){for(E=C();f<h;f++)if("not"===r[f])for(k=e[f],j=k.length,u=0;u<j;u++)E["@"+k[u]]=1;else O=f+1;if(x(O))return g(i,l,a);f=0}else N=v(r)&&r;for(;f<h;f++){const v=f===(O||h)-1;if(!N||!f)if((u=N||r&&r[f])&&"and"!==u){if("or"!==u)continue;M=!1}else M=s=!0;if(k=e[f],j=k.length){if(d){if(!S){S=k;continue}var m=S.length;for(u=0;u<m;u++){var p="@"+(d=S[u]);o&&E[p]||(b[p]=1,s||(a[A++]=d))}S=null,d=!1}for(p=!1,u=0;u<j;u++){var y="@"+(m=k[u]);const e=s?b[y]||0:f;if(!(!e&&!n||o&&E[y]||!s&&b[y]))if(e===f){if(v){if((!R||--R<A)&&(a[A++]=m,t&&A===t))return g(i,A+(c||0),a)}else b[y]=f+1;p=!0}else n&&((y=w[e]||(w[e]=[]))[y.length]=m)}if(M&&!p&&!n)break}else if(M&&!n)return g(i,l,k)}if(S)if(f=S.length,o)for(u=c?parseInt(c,10):0;u<f;u++)E["@"+(e=S[u])]||(a[A++]=e);else a=S;if(n)for(A=a.length,P?(f=parseInt(P[0],10)+1,u=parseInt(P[1],10)+1):(f=w.length,u=0);f--;)if(m=w[f]){for(j=m.length;u<j;u++)if(n=m[u],(!o||!E["@"+n])&&(a[A++]=n,t&&A===t))return g(i,f+":"+u,a);u=0}}else!h||r&&"not"===r[0]||(a=e[0],c&&(c=parseInt(c[0],10)));return t&&(o=a.length,c&&c>o&&(c=0),l=(c=c||0)+t,l<o?a=a.slice(c,l):(l=0,c&&(a=a.slice(c)))),g(i,l,a)}function v(e){return"string"==typeof e}function b(e){return e.constructor===Array}function w(e){return"function"==typeof e}function E(e){return"object"==typeof e}function x(e){return void 0===e}function k(e){const t=Array(e);for(let i=0;i<e;i++)t[i]=C();return t}function C(){return Object.create(null)}function j(){let e,t;self.onmessage=function(i){if(i=i.data)if(i.search){const n=t.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:e,content:i.content,limit:i.limit,result:n})}else i.add?t.add(i.id,i.content):i.update?t.update(i.id,i.content):i.remove?t.remove(i.id):i.clear?t.clear():i.info?((i=t.info()).worker=e,console.log(i)):i.register&&(e=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,t=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))(),t=new t(i.options))}}function S(i,n,r,s){i=t("flexsearch","id"+i,j,(function(e){(e=e.data)&&e.result&&s(e.id,e.content,e.result,e.limit,e.where,e.cursor,e.suggest)}),n);const o=e.toString();return r.id=n,i.postMessage({register:o,options:r,id:n}),i}const N={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},O={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},P=[];let R=0;const M={},A={};let L;i.create=function(e,t){return new i(e,t)},i.registerMatcher=function(e){for(const t in e)e.hasOwnProperty(t)&&P.push(a(t),e[t]);return this},i.registerEncoder=function(e,t){return z[e]=t.bind(z),this},i.registerLanguage=function(e,t){return M[e]=t.filter,A[e]=t.stemmer,this},i.encode=function(e,t){return z[e](t)},i.prototype.init=function(e,t){if(this.v=[],t){var s=t.preset;e=t}else e||(e=N),s=e.preset;if(t={},v(e)?(t=O[e],e={}):s&&(t=O[s]),s=e.worker)if("undefined"==typeof Worker)e.worker=!1,this.m=null;else{var o=parseInt(s,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var l=0;l<o;l++)this.m[l]=S(this.id,l,e,n.bind(this))}if(this.f=e.tokenize||t.f||this.f||N.f,this.split=x(s=e.split)?this.split||N.split:v(s)?a(s):s,this.D=e.rtl||this.D||N.D,this.async="undefined"==typeof Promise||x(s=e.async)?this.async||N.async:s,this.g=x(s=e.worker)?this.g||N.g:s,this.threshold=x(s=e.threshold)?t.threshold||this.threshold||N.threshold:s,this.b=x(s=e.resolution)?s=t.b||this.b||N.b:s,s<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||x(s=e.depth)?t.depth||this.depth||N.depth:s,this.w=(s=x(s=e.encode)?t.encode||N.encode:s)&&z[s]&&z[s].bind(z)||(w(s)?s:this.w||!1),(s=e.matcher)&&this.addMatcher(s),s=(t=e.lang)||e.filter){if(v(s)&&(s=M[s]),b(s)){o=this.w,l=C();for(var c=0;c<s.length;c++){var h=o?o(s[c]):s[c];l[h]=1}s=l}this.filter=s}if(s=t||e.stemmer){var u;for(u in t=v(s)?A[s]:s,o=this.w,l=[],t)t.hasOwnProperty(u)&&(c=o?o(u):u,l.push(a(c+"($|\\W)"),o?o(t[u]):t[u]));this.stemmer=u=l}if(this.a=l=(s=e.doc)?r(s):this.a||N.a,this.i=k(this.b-(this.threshold||0)),this.h=C(),this.c=C(),l){if(this.l=C(),e.doc=null,u=l.index={},t=l.keys=[],o=l.field,c=l.tag,h=l.store,b(l.id)||(l.id=l.id.split(":")),h){var f=C();if(v(h))f[h]=1;else if(b(h))for(let e=0;e<h.length;e++)f[h[e]]=1;else E(h)&&(f=h);l.store=f}if(c){if(this.G=C(),h=C(),o)if(v(o))h[o]=e;else if(b(o))for(f=0;f<o.length;f++)h[o[f]]=e;else E(o)&&(h=o);for(b(c)||(l.tag=c=[c]),o=0;o<c.length;o++)this.G[c[o]]=C();this.I=c,o=h}if(o){let n;for(b(o)||(E(o)?(n=o,l.field=o=Object.keys(o)):l.field=o=[o]),l=0;l<o.length;l++)b(c=o[l])||(n&&(e=n[c]),t[l]=c,o[l]=c.split(":")),u[c]=new i(e)}e.doc=s}return this.B=!0,this.j=!!(this.cache=s=x(s=e.cache)?this.cache||N.cache:s)&&new B(s),this},i.prototype.encode=function(e){return e&&(P.length&&(e=c(e,P)),this.v.length&&(e=c(e,this.v)),this.w&&(e=this.w(e)),this.stemmer&&(e=c(e,this.stemmer))),e},i.prototype.addMatcher=function(e){const t=this.v;for(const i in e)e.hasOwnProperty(i)&&t.push(a(i),e[i]);return this},i.prototype.add=function(e,t,i,n,r){if(this.a&&E(e))return this.A("add",e,t);if(t&&v(t)&&(e||0===e)){var o="@"+e;if(this.c[o]&&!n)return this.update(e,t);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:e,content:t}),this.c[o]=""+this.C,i&&i(),this;if(!r){if(this.async&&"function"!=typeof importScripts){let r=this;return o=new Promise((function(i){setTimeout((function(){r.add(e,t,null,n,!0),r=null,i()}))})),i?(o.then(i),this):o}if(i)return this.add(e,t,null,n,!0),i(),this}if(!(t=this.encode(t)).length)return this;r=w(i=this.f)?i(t):t.split(this.split),this.filter&&(r=s(r,this.filter));const d=C();d._ctx=C();const m=r.length,p=this.threshold,g=this.depth,y=this.b,v=this.i,b=this.D;for(let t=0;t<m;t++){var l=r[t];if(l){var a=l.length,c=(b?t+1:m-t)/m,u="";switch(i){case"reverse":case"both":for(var f=a;--f;)h(v,d,u=l[f]+u,e,b?1:(a-f)/a,c,p,y-1);u="";case"forward":for(f=0;f<a;f++)h(v,d,u+=l[f],e,b?(f+1)/a:1,c,p,y-1);break;case"full":for(f=0;f<a;f++){const t=(b?f+1:a-f)/a;for(let i=a;i>f;i--)h(v,d,u=l.substring(f,i),e,t,c,p,y-1)}break;default:if(a=h(v,d,l,e,1,c,p,y-1),g&&1<m&&a>=p)for(a=d._ctx[l]||(d._ctx[l]=C()),l=this.h[l]||(this.h[l]=k(y-(p||0))),0>(c=t-g)&&(c=0),(u=t+g+1)>m&&(u=m);c<u;c++)c!==t&&h(l,a,r[c],e,0,y-(c<t?t-c:c-t),p,y-1)}}}this.c[o]=1,this.B=!1}return this},i.prototype.A=function(e,t,i){if(b(t)){var n=t.length;if(n--){for(var r=0;r<n;r++)this.A(e,t[r]);return this.A(e,t[n],i)}}else{var s,o=this.a.index,l=this.a.keys,a=this.a.tag;r=this.a.store;var c=this.a.id;n=t;for(var h=0;h<c.length;h++)n=n[c[h]];if("remove"===e&&(delete this.l[n],c=l.length,c--)){for(t=0;t<c;t++)o[l[t]].remove(n);return o[l[c]].remove(n,i)}if(a){for(s=0;s<a.length;s++){var u=a[s],f=t;for(c=u.split(":"),h=0;h<c.length;h++)f=f[c[h]];f="@"+f}s=(s=this.G[u])[f]||(s[f]=[])}for(let r=0,s=(c=this.a.field).length;r<s;r++){for(u=c[r],a=t,f=0;f<u.length;f++)a=a[u[f]];u=o[l[r]],f="add"===e?u.add:u.update,r===s-1?f.call(u,n,a,i):f.call(u,n,a)}if(r){for(i=Object.keys(r),e=C(),o=0;o<i.length;o++)if(r[l=i[o]]){let i,n;for(l=l.split(":"),c=0;c<l.length;c++)i=(i||t)[a=l[c]],n=(n||e)[a]=i}t=e}s&&(s[s.length]=t),this.l[n]=t}return this},i.prototype.update=function(e,t,i){return this.a&&E(e)?this.A("update",e,t):(this.c["@"+e]&&v(t)&&(this.remove(e),this.add(e,t,i,!0)),this)},i.prototype.remove=function(e,t,i){if(this.a&&E(e))return this.A("remove",e,t);var n="@"+e;if(this.c[n]){if(this.g)return this.m[this.c[n]].postMessage({remove:!0,id:e}),delete this.c[n],t&&t(),this;if(!i){if(this.async&&"function"!=typeof importScripts){let i=this;return n=new Promise((function(t){setTimeout((function(){i.remove(e,null,!0),i=null,t()}))})),t?(n.then(t),this):n}if(t)return this.remove(e,null,!0),t(),this}for(t=0;t<this.b-(this.threshold||0);t++)u(this.i[t],e);this.depth&&u(this.h,e),delete this.c[n],this.B=!1}return this},i.prototype.search=function(e,t,i,n){if(E(t)){if(b(t))for(var r=0;r<t.length;r++)t[r].query=e;else t.query=e;e=t,t=1e3}else t&&w(t)?(i=t,t=1e3):t||0===t||(t=1e3);if(!this.g){var l=[],a=e;if(E(e)&&!b(e)){i||(i=e.callback)&&(a.callback=null);var c=e.sort,h=e.page;t=e.limit,j=e.threshold;var u=e.suggest;e=e.query}if(this.a){j=this.a.index;const s=a.where;var f=a.bool||"or",m=a.field;let d,y,w=f;if(m)b(m)||(m=[m]);else if(b(a)){var p=a;m=[],w=[];for(var g=0;g<a.length;g++)r=(n=a[g]).bool||f,m[g]=n.field,w[g]=r,"not"===r?d=!0:"and"===r&&(y=!0)}else m=this.a.keys;for(f=m.length,g=0;g<f;g++)p&&(a=p[g]),h&&!v(a)&&(a.page=null,a.limit=0),l[g]=j[m[g]].search(a,0);if(i)return i(o.call(this,e,w,l,c,t,u,s,h,y,d));if(this.async){const i=this;return new Promise((function(n){Promise.all(l).then((function(r){n(o.call(i,e,w,r,c,t,u,s,h,y,d))}))}))}return o.call(this,e,w,l,c,t,u,s,h,y,d)}if(j||(j=this.threshold||0),!n){if(this.async&&"function"!=typeof importScripts){let e=this;return j=new Promise((function(i){setTimeout((function(){i(e.search(a,t,null,!0)),e=null}))})),i?(j.then(i),this):j}if(i)return i(this.search(a,t,null,!0)),this}if(!e||!v(e))return l;if(a=e,this.cache)if(this.B){if(i=this.j.get(e))return i}else this.j.clear(),this.B=!0;if(!(a=this.encode(a)).length)return l;i=w(i=this.f)?i(a):a.split(this.split),this.filter&&(i=s(i,this.filter)),p=i.length,n=!0,r=[];var x=C(),k=0;if(1<p&&(this.depth&&"strict"===this.f?f=!0:i.sort(d)),!f||(g=this.h)){const e=this.b;for(;k<p;k++){let t=i[k];if(t){if(f){if(!m)if(g[t])m=t,x[t]=1;else if(!u)return l;if(u&&k===p-1&&!r.length)f=!1,t=m||t,x[t]=0;else if(!m)continue}if(!x[t]){const i=[];let s=!1,o=0;const l=f?g[m]:this.i;if(l){let n;for(let r=0;r<e-j;r++)(n=l[r]&&l[r][t])&&(i[o++]=n,s=!0)}if(s)m=t,r[r.length]=1<o?i.concat.apply([],i):i[0];else if(!u){n=!1;break}x[t]=1}}}}else n=!1;return n&&(l=y(r,t,h,u)),this.cache&&this.j.set(e,l),l}this.F=i,this.u=0,this.o=[];for(var j=0;j<this.g;j++)this.m[j].postMessage({search:!0,limit:t,content:e})},i.prototype.find=function(e,t){return this.where(e,t,1)[0]||null},i.prototype.where=function(e,t,i,n){const r=this.l,s=[];let o,l=0;var a;let c;if(E(e)){i||(i=t);var h=Object.keys(e),u=h.length;if(o=!1,1===u&&"id"===h[0])return[r[e.id]];if((a=this.I)&&!n)for(var f=0;f<a.length;f++){var d=a[f],m=e[d];if(!x(m)){if(c=this.G[d]["@"+m],0==--u)return c;h.splice(h.indexOf(d),1),delete e[d];break}}for(a=Array(u),f=0;f<u;f++)a[f]=h[f].split(":")}else{if(w(e)){for(i=(t=n||Object.keys(r)).length,h=0;h<i;h++)e(u=r[t[h]])&&(s[l++]=u);return s}if(x(t))return[r[e]];if("id"===e)return[r[t]];h=[e],u=1,a=[e.split(":")],o=!0}for(f=(n=c||n||Object.keys(r)).length,d=0;d<f;d++){m=c?n[d]:r[n[d]];let f=!0;for(let i=0;i<u;i++){o||(t=e[h[i]]);const n=a[i],r=n.length;let s=m;if(1<r)for(let e=0;e<r;e++)s=s[n[e]];else s=s[n[0]];if(s!==t){f=!1;break}}if(f&&(s[l++]=m,i&&l===i))break}return s},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:P.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let e=0;e<this.g;e++)this.m[e].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const e=this.a.keys;for(let t=0;t<e.length;t++)this.a.index[e[t]].destroy();this.a=this.l=null}return this},i.prototype.export=function(e){const t=!e||x(e.serialize)||e.serialize;if(this.a){const t=!e||x(e.doc)||e.doc;var i=!e||x(e.index)||e.index;e=[];let n=0;if(i)for(i=this.a.keys;n<i.length;n++){const t=this.a.index[i[n]];e[n]=[t.i,t.h,Object.keys(t.c)]}t&&(e[n]=this.l)}else e=[this.i,this.h,Object.keys(this.c)];return t&&(e=JSON.stringify(e)),e},i.prototype.import=function(e,t){(!t||x(t.serialize)||t.serialize)&&(e=JSON.parse(e));const i=C();if(this.a){var n=!t||x(t.doc)||t.doc,r=0;if(!t||x(t.index)||t.index){const n=(t=this.a.keys).length;for(var s=e[0][2];r<s.length;r++)i[s[r]]=1;for(r=0;r<n;r++){s=this.a.index[t[r]];const n=e[r];n&&(s.i=n[0],s.h=n[1],s.c=i)}}n&&(this.l=E(n)?n:e[r])}else{for(n=e[2],r=0;r<n.length;r++)i[n[r]]=1;this.i=e[0],this.h=e[1],this.c=i}};const I=function(){const e=a("\\s+"),t=a("[^a-z0-9 ]"),i=[a("[-/]")," ",t,"",e," "];return function(e){return f(c(e.toLowerCase(),i))}}(),z={icase:function(e){return e.toLowerCase()},simple:function(){const e=a("\\s+"),t=a("[^a-z0-9 ]"),i=a("[-/]"),n=[a("[àáâãäå]"),"a",a("[èéêë]"),"e",a("[ìíîï]"),"i",a("[òóôõöő]"),"o",a("[ùúûüű]"),"u",a("[ýŷÿ]"),"y",a("ñ"),"n",a("[çc]"),"k",a("ß"),"s",a(" & ")," and ",i," ",t,"",e," "];return function(e){return" "===(e=c(e.toLowerCase(),n))?"":e}}(),advanced:function(){const e=a("ae"),t=a("ai"),i=a("ay"),n=a("ey"),r=a("oe"),s=a("ue"),o=a("ie"),l=a("sz"),h=a("zs"),u=a("ck"),d=a("cc"),m=[e,"a",t,"ei",i,"ei",n,"ei",r,"o",s,"u",o,"i",l,"s",h,"s",a("sh"),"s",u,"k",d,"k",a("th"),"t",a("dt"),"t",a("ph"),"f",a("pf"),"f",a("ou"),"o",a("uo"),"u"];return function(e,t){return e?(2<(e=this.simple(e)).length&&(e=c(e,m)),t||1<e.length&&(e=f(e)),e):e}}(),extra:function(){const e=[a("p"),"b",a("z"),"s",a("[cgq]"),"k",a("n"),"m",a("d"),"t",a("[vw]"),"f",a("[aeiouy]"),""];return function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(let i=0;i<t.length;i++){const n=t[i];1<n.length&&(t[i]=n[0]+c(n.substring(1),e))}t=f(t=t.join(" "))}return t}}(),balance:I},B=function(){function e(e){this.clear(),this.H=!0!==e&&e}return e.prototype.clear=function(){this.cache=C(),this.count=C(),this.index=C(),this.s=[]},e.prototype.set=function(e,t){if(this.H&&x(this.cache[e])){let i=this.s.length;if(i===this.H){i--;const e=this.s[i];delete this.cache[e],delete this.count[e],delete this.index[e]}this.index[e]=i,this.s[i]=e,this.count[e]=-1,this.cache[e]=t,this.get(e)}else this.cache[e]=t},e.prototype.get=function(e){const t=this.cache[e];if(this.H&&t){var i=++this.count[e];const t=this.index;let r=t[e];if(0<r){const s=this.s;for(var n=r;this.count[s[--r]]<=i&&-1!==r;);if(r++,r!==n){for(i=n;i>r;i--)n=s[i-1],s[i]=n,t[n]=i;s[r]=e,t[e]=r}}}return t},e}();return i}(function(){const e={},t="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(i,n,r,s,o){return r=t?URL.createObjectURL(new Blob(["("+r.toString()+")()"],{type:"text/javascript"})):i+".min.js",e[i+="-"+n]||(e[i]=[]),e[i][o]=new Worker(r),e[i][o].onmessage=s,e[i][o]}}()),this)},4001:function(e,t,i){var n=i(7294),r=i(7896),s=i(193);t.Z=e=>{let{title:t,description:i,keywords:o,image:l,type:a,children:c}=e;const h=(0,s.$)(),u={title:t||h.title,description:i||h.description,image:""+h.siteUrl+l,type:a||"WebSite",url:""+h.siteUrl+r.globalHistory.location.pathname};return n.createElement(n.Fragment,null,n.createElement("html",{lang:"en"}),n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),o?n.createElement("meta",{name:"keywords",content:o}):null,n.createElement("meta",{name:"og:title",content:u.title}),n.createElement("meta",{name:"og:site_name",content:u.title}),n.createElement("meta",{name:"og:type",content:h.og.type}),n.createElement("meta",{name:"og:description",content:u.description}),n.createElement("meta",{name:"og:image",content:u.image}),n.createElement("meta",{name:"og:url",content:u.url}),n.createElement("meta",{name:"twitter:title",content:u.title}),n.createElement("meta",{name:"twitter:description",content:u.description}),n.createElement("meta",{name:"twitter:card",content:h.twitter.card}),n.createElement("meta",{name:"twitter:creator",content:h.twitter.creator}),n.createElement("meta",{name:"twitter:image",content:u.image}),n.createElement("script",{type:"application/ld+json"},'{\n          "@context": "https://schema.org/",\n          "@type": "'+u.type+'",\n          "@id": "'+u.url+'",\n          "headline": "'+u.title+'",\n          "description": "'+u.description+'",\n          '+(o?'"keywords": '+JSON.stringify(o.split(","))+",":"")+'\n          "author": {\n            "@type": "Person",\n            "name": "Rishi Kumar Chawda"\n          }\n        }'),c,n.createElement("meta",{name:"theme-color",content:"#f9fafb",media:"(prefers-color-scheme: light)"}),n.createElement("meta",{name:"theme-color",content:"#1e293b",media:"(prefers-color-scheme: dark)"}))}},7356:function(e,t,i){var n=i(7294);const r=e=>{let{children:t,focusable:i,onClick:r,showCloseButton:s}=e;const o="focus:outline-1 focus:outline-brand-300 focus:outline-dashed overflow-hidden tag-pill"+(i?"":" focus:outline-0 cursor-default");return n.createElement("button",{tabIndex:i?void 0:-1,className:o,"aria-label":null==t?void 0:t.toString(),onClick:r},t,s?n.createElement(n.Fragment,null,"  ",n.createElement("strong",null,"x")):null)};r.defaultProps={children:"tag-pill",showCloseButton:!1,focusable:!0},t.Z=r},1790:function(e,t,i){i.d(t,{$N:function(){return o},Dp:function(){return l},gd:function(){return r},m_:function(){return s}});var n=i(1883);const r=()=>{const e=(0,n.useStaticQuery)("2464194210");return[e.allMdx.edges,e.localSearchArticles]},s=e=>{let[t,i]=r();return t.find((t=>{var i;return(null===(i=t.node.fields)||void 0===i?void 0:i.slug)===e}))},o=(e,t)=>e.filter((e=>e.node.frontmatter.tags.some((e=>t.includes(e))))),l=e=>e.map((e=>({node:{id:e.id,fields:{slug:e.slug,timeToRead:{text:e.timeToRead}},frontmatter:{title:e.title,subtitle:e.subtitle,date:e.date,tags:e.tags},excerpt:e.excerpt}})))},6616:function(e,t,i){i.r(t),i.d(t,{Head:function(){return E},default:function(){return x}});var n=i(5785),r=i(6610),s=i(7828),o=i(7294),l=i(8481),a=i.n(l);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(a){r=!0,s=a}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=new Error("FlexSearch index is required. Check that your index exists and is valid."),u=new Error("FlexSearch store is required. Check that your store exists and is valid."),f=i(1883),d=i(7356);const m={initial:{},animate:{transition:{staggerChildren:.05}},exit:{}},p={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};var g=e=>o.createElement(s.M,null,o.createElement(r.E.ul,{initial:"initial",animate:"animate",exit:"exit",variants:m,className:"article-list",role:"list"},e.items.length?e.items.map((t=>{var i,n,s,l,a,c,h;let{node:u}=t;return o.createElement(r.E.li,{variants:p,layout:!0,className:"block focus-within:bg-gray-300 dark:focus-within:bg-slate-900 article-list-item",role:"listitem",key:u.id},o.createElement(f.Link,{className:"focus:outline-none",to:null===(i=u.fields)||void 0===i?void 0:i.slug},o.createElement("div",{className:"flex flex-col items-start md:justify-between md:items-center md:flex-row article-list-item-header"},o.createElement("div",{className:"article-list-item-header-content"},o.createElement("h2",{className:"article-list-item-header-content-title"},null===(n=u.frontmatter)||void 0===n?void 0:n.title),o.createElement("span",{className:"article-list-item-header-content-tags"},null===(s=u.frontmatter)||void 0===s||null===(l=s.tags)||void 0===l?void 0:l.map((t=>o.createElement(d.Z,{key:t,focusable:!1,onClick:i=>{e.onTagClick(i,t)}},t))))),o.createElement("span",{className:"dark:bg-slate-600 whitespace-nowrap article-list-item-header-info"},o.createElement("span",null,null===(a=u.frontmatter)||void 0===a?void 0:a.date),"  ",o.createElement("strong",null,"·"),"  ",o.createElement("span",null,null===(c=u.fields)||void 0===c||null===(h=c.timeToRead)||void 0===h?void 0:h.text))),o.createElement("p",{className:"article-list-item-details"},u.excerpt)))})):o.createElement("p",null,"Uh-oh! No results for the search.")));var y=e=>{let{searchQuery:t,setSearchQuery:i}=e;return o.createElement("form",{id:"articles-search-bar",action:"javascript:void(0);",method:"get",autoComplete:"off",className:"border-4 border-gray-200 focus-within:border-gray-300 dark:border-slate-600 dark:focus-within:border-slate-500 w-full sm:w-fit"},o.createElement("label",{htmlFor:"articles-search-bar"},o.createElement("span",{className:"hide"},"Search")),o.createElement("input",{value:t,onInput:e=>{i(e.target.value)},type:"text",placeholder:"Type to search..",name:"articles-search-bar",className:"placeholder:text-gray-400 block bg-gray-200 dark:bg-slate-600 dark:placeholder:text-slate-300"}),o.createElement("button",{className:"hide",type:"submit"},"Search"))},v=i(2416),b=i(4001),w=i(1790);const E=()=>o.createElement(b.Z,{title:"Articles - rishikc.com",type:"BlogPosting"});var x=()=>{const[e,t]=(0,w.gd)(),[i,l]=(()=>{var e,t,i,n,r,s,o,l;const a=(0,f.useStaticQuery)("4264103088"),c=(null===(e=a.globalMetadata)||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.mdx)||void 0===i||null===(n=i.tags)||void 0===n?void 0:n.all)||[],h=(null===(r=a.globalMetadata)||void 0===r||null===(s=r.data)||void 0===s||null===(o=s.mdx)||void 0===o||null===(l=o.tags)||void 0===l?void 0:l.top)||[],u=c.filter((e=>h.join(" ").includes(e.split("(")[0].trim())));return[c,u]})(),[m,p]=o.useState(!1),[b,E]=o.useState(""),[x,k]=o.useState([]),C=(j=b,S=t.index,N=t.store,P=c((0,o.useState)(null),2),R=P[0],M=P[1],(0,o.useEffect)((function(){if(!S)throw h;if(!N)throw u}),[S,N]),(0,o.useEffect)((function(){if(S instanceof a())M(S);else{var e=a().create();e.import(S),M(e)}}),[S]),(0,o.useMemo)((function(){return j&&R&&N?R.search(j,O).map((function(e){return N[e]})):[]}),[j,R,N]));var j,S,N,O,P,R,M;const A=o.useMemo((()=>b.length?(0,w.Dp)(C):(0,n.Z)(e)),[b,C]),L=o.useMemo((()=>x.length?(0,w.$N)(A,x):A),[x,A]),I=o.useCallback((e=>{p(!m)}),[m]),z=(e,t)=>{e.stopPropagation(),e.preventDefault(),(e=>{x.includes(e)?k(x.filter((t=>t!=e))):k([].concat((0,n.Z)(x),[e]))})(t)},B=o.useCallback((()=>{let e=i.filter((e=>x.includes(e.split("(")[0].trim()))),t=m?i:l;return(0,n.Z)(new Set(e.concat.apply(e,(0,n.Z)(t)))).map((e=>{const t=e.split("(")[0].trim();return o.createElement(r.E.span,{key:e,layout:!0},o.createElement(d.Z,{key:e,onClick:e=>z(e,t),showCloseButton:x.includes(t)},e))}))}),[m,x]);return o.createElement(v.Z,null,o.createElement("div",{className:"root-container"},o.createElement("main",{className:"article-page-container"},o.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-between article-list-header"},o.createElement("h1",{className:"mb-3 sm:m-0 article-list-header-title"},"Blog posts"),o.createElement(y,{searchQuery:b,setSearchQuery:E})),o.createElement("div",{className:"article-list-search-info"},o.createElement(s.M,null,o.createElement(r.E.span,{className:"flex flex-wrap items-center w-full sm:w-2/3 article-list-search-info-tags"},o.createElement("p",{className:"m-0"},"Popular tags  ",o.createElement("button",{className:"text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-700 focus-within:outline-dotted focus-within:outline-2 focus-within:outline-brand-700 cursor-pointer show-all-button",onClick:I},"(show all)")," : "),B()))),o.createElement("section",null,o.createElement(g,{items:L,onTagClick:z})))))}},7828:function(e,t,i){i.d(t,{M:function(){return g}});var n=i(7294),r=i(3380),s=i(8868);function o(){const e=(0,n.useRef)(!1);return(0,s.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var l=i(240),a=i(6681);class c extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:t}){const i=(0,n.useId)(),r=(0,n.useRef)(null),s=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)((()=>{const{width:e,height:n,top:o,left:l}=s.current;if(t||!r.current||!e||!n)return;r.current.dataset.motionPopId=i;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${n}px !important;\n            top: ${o}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(a)}}),[t]),n.createElement(c,{isPresent:t,childRef:r,sizeRef:s},n.cloneElement(e,{ref:r}))}const u=({children:e,initial:t,isPresent:i,onExitComplete:r,custom:s,presenceAffectsLayout:o,mode:c})=>{const u=(0,a.h)(f),d=(0,n.useId)(),m=(0,n.useMemo)((()=>({id:d,initial:t,isPresent:i,custom:s,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))})),o?void 0:[i]);return(0,n.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),n.useEffect((()=>{!i&&!u.size&&r&&r()}),[i]),"popLayout"===c&&(e=n.createElement(h,{isPresent:i},e)),n.createElement(l.O.Provider,{value:m},e)};function f(){return new Map}var d=i(5364);var m=i(5487);const p=e=>e.key||"";const g=({children:e,custom:t,initial:i=!0,onExitComplete:l,exitBeforeEnter:a,presenceAffectsLayout:c=!0,mode:h="sync"})=>{(0,m.k)(!a,"Replace exitBeforeEnter with mode='wait'");let[f]=function(){const e=o(),[t,i]=(0,n.useState)(0),s=(0,n.useCallback)((()=>{e.current&&i(t+1)}),[t]);return[(0,n.useCallback)((()=>r.Wi.postRender(s)),[s]),t]}();const g=(0,n.useContext)(d.p).forceRender;g&&(f=g);const y=o(),v=function(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}(e);let b=v;const w=new Set,E=(0,n.useRef)(b),x=(0,n.useRef)(new Map).current,k=(0,n.useRef)(!0);var C;if((0,s.L)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const i=p(e);t.set(i,e)}))}(v,x),E.current=b})),C=()=>{k.current=!0,x.clear(),w.clear()},(0,n.useEffect)((()=>()=>C()),[]),k.current)return n.createElement(n.Fragment,null,b.map((e=>n.createElement(u,{key:p(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:c,mode:h},e))));b=[...b];const j=E.current.map(p),S=v.map(p),N=j.length;for(let n=0;n<N;n++){const e=j[n];-1===S.indexOf(e)&&w.add(e)}return"wait"===h&&w.size&&(b=[]),w.forEach((e=>{if(-1!==S.indexOf(e))return;const i=x.get(e);if(!i)return;const r=j.indexOf(e);b.splice(r,0,n.createElement(u,{key:p(i),isPresent:!1,onExitComplete:()=>{x.delete(e),w.delete(e);const t=E.current.findIndex((t=>t.key===e));if(E.current.splice(t,1),!w.size){if(E.current=v,!1===y.current)return;f(),l&&l()}},custom:t,presenceAffectsLayout:c,mode:h},i))})),b=b.map((e=>{const t=e.key;return w.has(t)?e:n.createElement(u,{key:p(e),isPresent:!0,presenceAffectsLayout:c,mode:h},e)})),n.createElement(n.Fragment,null,w.size?b:b.map((e=>(0,n.cloneElement)(e))))}}}]);
//# sourceMappingURL=component---src-pages-articles-tsx-2332361ac9f94fe14c82.js.map