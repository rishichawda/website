"use strict";(self.webpackChunkrishikc_com=self.webpackChunkrishikc_com||[]).push([[339],{8481:function(t){!function(e,i,n){let s;(s=n.define)&&s.amd?s([],(function(){return i})):(s=n.modules)?s["FlexSearch".toLowerCase()]=i:t.exports=i}(0,function t(e){function i(t,e){const i=e?e.id:t&&t.id;this.id=i||0===i?i:P++,this.init(t,e),h(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),h(this,"length",(function(){return this.index.length}))}function n(t,e,i,n){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,n&&this.o.length>=n&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function s(t){const e=E();for(const i in t)if(t.hasOwnProperty(i)){const n=t[i];b(n)?e[i]=n.slice(0):k(n)?e[i]=s(n):e[i]=n}return e}function r(t,e){const i=t.length,n=w(e),s=[];for(let r=0,o=0;r<i;r++){const i=t[r];(n&&e(i)||!n&&!e[i])&&(s[o++]=i)}return s}function o(t,e,i,n,s,r,o,h,l,c){let a;if(i=v(i,o?0:s,h,r,e,l,c),h&&(h=i.page,a=i.next,i=i.result),o)e=this.where(o,null,s,i);else{for(e=i,i=this.l,s=e.length,r=Array(s),o=0;o<s;o++)r[o]=i[e[o]];e=r}return i=e,n&&(w(n)||(I=n.split(":"),1<I.length?n=g:(I=I[0],n=p)),i.sort(n)),i=m(h,a,i),this.cache&&this.j.set(t,i),i}function h(t,e,i){Object.defineProperty(t,e,{get:i})}function l(t){return new RegExp(t,"g")}function c(t,e){for(let i=0;i<e.length;i+=2)t=t.replace(e[i],e[i+1]);return t}function a(t,e,i,n,s,r,o,h){return e[i]?e[i]:(s=s?(h-(o||h/1.5))*r+(o||h/1.5)*s:r,e[i]=s,s>=o&&((t=(t=t[h-(s+.5>>0)])[i]||(t[i]=[]))[t.length]=n),s)}function f(t,e){if(t){const i=Object.keys(t);for(let n=0,s=i.length;n<s;n++){const s=i[n],r=t[s];if(r)for(let i=0,n=r.length;i<n;i++){if(r[i]===e){1===n?delete t[s]:r.splice(i,1);break}k(r[i])&&f(r[i],e)}}}}function u(t){let e="",i="";var n="";for(let s=0;s<t.length;s++){const r=t[s];r!==i&&(s&&"h"===r?(n="a"===n||"e"===n||"i"===n||"o"===n||"u"===n||"y"===n,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&n||" "===i)&&(e+=r)):e+=r),n=s===t.length-1?"":t[s+1],i=r}return e}function d(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function p(t,e){return(t=t[I])<(e=e[I])?-1:t>e?1:0}function g(t,e){const i=I.length;for(let n=0;n<i;n++)t=t[I[n]],e=e[I[n]];return t<e?-1:t>e?1:0}function m(t,e,i){return t?{page:t,next:e?""+e:null,result:i}:i}function v(t,e,i,n,s,r,o){let h,l=[];if(!0===i){i="0";var c=""}else c=i&&i.split(":");const a=t.length;if(1<a){const b=E(),w=[];let k,j;var f,u=0;let C;var d=!0;let O,S,A,M,P,N,B=0;if(c&&(2===c.length?(M=c,c=!1):c=P=parseInt(c[0],10)),o){for(k=E();u<a;u++)if("not"===s[u])for(j=t[u],C=j.length,f=0;f<C;f++)k["@"+j[f]]=1;else A=u+1;if(x(A))return m(i,h,l);u=0}else S=y(s)&&s;for(;u<a;u++){const y=u===(A||a)-1;if(!S||!u)if((f=S||s&&s[u])&&"and"!==f){if("or"!==f)continue;N=!1}else N=r=!0;if(j=t[u],C=j.length){if(d){if(!O){O=j;continue}var p=O.length;for(f=0;f<p;f++){var g="@"+(d=O[f]);o&&k[g]||(b[g]=1,r||(l[B++]=d))}O=null,d=!1}for(g=!1,f=0;f<C;f++){var v="@"+(p=j[f]);const t=r?b[v]||0:u;if(!(!t&&!n||o&&k[v]||!r&&b[v]))if(t===u){if(y){if((!P||--P<B)&&(l[B++]=p,e&&B===e))return m(i,B+(c||0),l)}else b[v]=u+1;g=!0}else n&&((v=w[t]||(w[t]=[]))[v.length]=p)}if(N&&!g&&!n)break}else if(N&&!n)return m(i,h,j)}if(O)if(u=O.length,o)for(f=c?parseInt(c,10):0;f<u;f++)k["@"+(t=O[f])]||(l[B++]=t);else l=O;if(n)for(B=l.length,M?(u=parseInt(M[0],10)+1,f=parseInt(M[1],10)+1):(u=w.length,f=0);u--;)if(p=w[u]){for(C=p.length;f<C;f++)if(n=p[f],(!o||!k["@"+n])&&(l[B++]=n,e&&B===e))return m(i,u+":"+f,l);f=0}}else!a||s&&"not"===s[0]||(l=t[0],c&&(c=parseInt(c[0],10)));return e&&(o=l.length,c&&c>o&&(c=0),h=(c=c||0)+e,h<o?l=l.slice(c,h):(h=0,c&&(l=l.slice(c)))),m(i,h,l)}function y(t){return"string"==typeof t}function b(t){return t.constructor===Array}function w(t){return"function"==typeof t}function k(t){return"object"==typeof t}function x(t){return void 0===t}function j(t){const e=Array(t);for(let i=0;i<t;i++)e[i]=E();return e}function E(){return Object.create(null)}function C(){let t,e;self.onmessage=function(i){if(i=i.data)if(i.search){const n=e.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:t,content:i.content,limit:i.limit,result:n})}else i.add?e.add(i.id,i.content):i.update?e.update(i.id,i.content):i.remove?e.remove(i.id):i.clear?e.clear():i.info?((i=e.info()).worker=t,console.log(i)):i.register&&(t=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,e=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))(),e=new e(i.options))}}function O(i,n,s,r){i=e("flexsearch","id"+i,C,(function(t){(t=t.data)&&t.result&&r(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),n);const o=t.toString();return s.id=n,i.postMessage({register:o,options:s,id:n}),i}const S={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},A={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},M=[];let P=0;const N={},B={};let I;i.create=function(t,e){return new i(t,e)},i.registerMatcher=function(t){for(const e in t)t.hasOwnProperty(e)&&M.push(l(e),t[e]);return this},i.registerEncoder=function(t,e){return L[t]=e.bind(L),this},i.registerLanguage=function(t,e){return N[t]=e.filter,B[t]=e.stemmer,this},i.encode=function(t,e){return L[t](e)},i.prototype.init=function(t,e){if(this.v=[],e){var r=e.preset;t=e}else t||(t=S),r=t.preset;if(e={},y(t)?(e=A[t],t={}):r&&(e=A[r]),r=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var o=parseInt(r,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var h=0;h<o;h++)this.m[h]=O(this.id,h,t,n.bind(this))}if(this.f=t.tokenize||e.f||this.f||S.f,this.split=x(r=t.split)?this.split||S.split:y(r)?l(r):r,this.D=t.rtl||this.D||S.D,this.async="undefined"==typeof Promise||x(r=t.async)?this.async||S.async:r,this.g=x(r=t.worker)?this.g||S.g:r,this.threshold=x(r=t.threshold)?e.threshold||this.threshold||S.threshold:r,this.b=x(r=t.resolution)?r=e.b||this.b||S.b:r,r<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||x(r=t.depth)?e.depth||this.depth||S.depth:r,this.w=(r=x(r=t.encode)?e.encode||S.encode:r)&&L[r]&&L[r].bind(L)||(w(r)?r:this.w||!1),(r=t.matcher)&&this.addMatcher(r),r=(e=t.lang)||t.filter){if(y(r)&&(r=N[r]),b(r)){o=this.w,h=E();for(var c=0;c<r.length;c++){var a=o?o(r[c]):r[c];h[a]=1}r=h}this.filter=r}if(r=e||t.stemmer){var f;for(f in e=y(r)?B[r]:r,o=this.w,h=[],e)e.hasOwnProperty(f)&&(c=o?o(f):f,h.push(l(c+"($|\\W)"),o?o(e[f]):e[f]));this.stemmer=f=h}if(this.a=h=(r=t.doc)?s(r):this.a||S.a,this.i=j(this.b-(this.threshold||0)),this.h=E(),this.c=E(),h){if(this.l=E(),t.doc=null,f=h.index={},e=h.keys=[],o=h.field,c=h.tag,a=h.store,b(h.id)||(h.id=h.id.split(":")),a){var u=E();if(y(a))u[a]=1;else if(b(a))for(let t=0;t<a.length;t++)u[a[t]]=1;else k(a)&&(u=a);h.store=u}if(c){if(this.G=E(),a=E(),o)if(y(o))a[o]=t;else if(b(o))for(u=0;u<o.length;u++)a[o[u]]=t;else k(o)&&(a=o);for(b(c)||(h.tag=c=[c]),o=0;o<c.length;o++)this.G[c[o]]=E();this.I=c,o=a}if(o){let n;for(b(o)||(k(o)?(n=o,h.field=o=Object.keys(o)):h.field=o=[o]),h=0;h<o.length;h++)b(c=o[h])||(n&&(t=n[c]),e[h]=c,o[h]=c.split(":")),f[c]=new i(t)}t.doc=r}return this.B=!0,this.j=!!(this.cache=r=x(r=t.cache)?this.cache||S.cache:r)&&new Z(r),this},i.prototype.encode=function(t){return t&&(M.length&&(t=c(t,M)),this.v.length&&(t=c(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=c(t,this.stemmer))),t},i.prototype.addMatcher=function(t){const e=this.v;for(const i in t)t.hasOwnProperty(i)&&e.push(l(i),t[i]);return this},i.prototype.add=function(t,e,i,n,s){if(this.a&&k(t))return this.A("add",t,e);if(e&&y(e)&&(t||0===t)){var o="@"+t;if(this.c[o]&&!n)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[o]=""+this.C,i&&i(),this;if(!s){if(this.async&&"function"!=typeof importScripts){let s=this;return o=new Promise((function(i){setTimeout((function(){s.add(t,e,null,n,!0),s=null,i()}))})),i?(o.then(i),this):o}if(i)return this.add(t,e,null,n,!0),i(),this}if(!(e=this.encode(e)).length)return this;s=w(i=this.f)?i(e):e.split(this.split),this.filter&&(s=r(s,this.filter));const d=E();d._ctx=E();const p=s.length,g=this.threshold,m=this.depth,v=this.b,y=this.i,b=this.D;for(let e=0;e<p;e++){var h=s[e];if(h){var l=h.length,c=(b?e+1:p-e)/p,f="";switch(i){case"reverse":case"both":for(var u=l;--u;)a(y,d,f=h[u]+f,t,b?1:(l-u)/l,c,g,v-1);f="";case"forward":for(u=0;u<l;u++)a(y,d,f+=h[u],t,b?(u+1)/l:1,c,g,v-1);break;case"full":for(u=0;u<l;u++){const e=(b?u+1:l-u)/l;for(let i=l;i>u;i--)a(y,d,f=h.substring(u,i),t,e,c,g,v-1)}break;default:if(l=a(y,d,h,t,1,c,g,v-1),m&&1<p&&l>=g)for(l=d._ctx[h]||(d._ctx[h]=E()),h=this.h[h]||(this.h[h]=j(v-(g||0))),0>(c=e-m)&&(c=0),(f=e+m+1)>p&&(f=p);c<f;c++)c!==e&&a(h,l,s[c],t,0,v-(c<e?e-c:c-e),g,v-1)}}}this.c[o]=1,this.B=!1}return this},i.prototype.A=function(t,e,i){if(b(e)){var n=e.length;if(n--){for(var s=0;s<n;s++)this.A(t,e[s]);return this.A(t,e[n],i)}}else{var r,o=this.a.index,h=this.a.keys,l=this.a.tag;s=this.a.store;var c=this.a.id;n=e;for(var a=0;a<c.length;a++)n=n[c[a]];if("remove"===t&&(delete this.l[n],c=h.length,c--)){for(e=0;e<c;e++)o[h[e]].remove(n);return o[h[c]].remove(n,i)}if(l){for(r=0;r<l.length;r++){var f=l[r],u=e;for(c=f.split(":"),a=0;a<c.length;a++)u=u[c[a]];u="@"+u}r=(r=this.G[f])[u]||(r[u]=[])}for(let s=0,r=(c=this.a.field).length;s<r;s++){for(f=c[s],l=e,u=0;u<f.length;u++)l=l[f[u]];f=o[h[s]],u="add"===t?f.add:f.update,s===r-1?u.call(f,n,l,i):u.call(f,n,l)}if(s){for(i=Object.keys(s),t=E(),o=0;o<i.length;o++)if(s[h=i[o]]){let i,n;for(h=h.split(":"),c=0;c<h.length;c++)i=(i||e)[l=h[c]],n=(n||t)[l]=i}e=t}r&&(r[r.length]=e),this.l[n]=e}return this},i.prototype.update=function(t,e,i){return this.a&&k(t)?this.A("update",t,e):(this.c["@"+t]&&y(e)&&(this.remove(t),this.add(t,e,i,!0)),this)},i.prototype.remove=function(t,e,i){if(this.a&&k(t))return this.A("remove",t,e);var n="@"+t;if(this.c[n]){if(this.g)return this.m[this.c[n]].postMessage({remove:!0,id:t}),delete this.c[n],e&&e(),this;if(!i){if(this.async&&"function"!=typeof importScripts){let i=this;return n=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(n.then(e),this):n}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)f(this.i[e],t);this.depth&&f(this.h,t),delete this.c[n],this.B=!1}return this},i.prototype.search=function(t,e,i,n){if(k(e)){if(b(e))for(var s=0;s<e.length;s++)e[s].query=t;else e.query=t;t=e,e=1e3}else e&&w(e)?(i=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var h=[],l=t;if(k(t)&&!b(t)){i||(i=t.callback)&&(l.callback=null);var c=t.sort,a=t.page;e=t.limit,C=t.threshold;var f=t.suggest;t=t.query}if(this.a){C=this.a.index;const r=l.where;var u=l.bool||"or",p=l.field;let d,v,w=u;if(p)b(p)||(p=[p]);else if(b(l)){var g=l;p=[],w=[];for(var m=0;m<l.length;m++)s=(n=l[m]).bool||u,p[m]=n.field,w[m]=s,"not"===s?d=!0:"and"===s&&(v=!0)}else p=this.a.keys;for(u=p.length,m=0;m<u;m++)g&&(l=g[m]),a&&!y(l)&&(l.page=null,l.limit=0),h[m]=C[p[m]].search(l,0);if(i)return i(o.call(this,t,w,h,c,e,f,r,a,v,d));if(this.async){const i=this;return new Promise((function(n){Promise.all(h).then((function(s){n(o.call(i,t,w,s,c,e,f,r,a,v,d))}))}))}return o.call(this,t,w,h,c,e,f,r,a,v,d)}if(C||(C=this.threshold||0),!n){if(this.async&&"function"!=typeof importScripts){let t=this;return C=new Promise((function(i){setTimeout((function(){i(t.search(l,e,null,!0)),t=null}))})),i?(C.then(i),this):C}if(i)return i(this.search(l,e,null,!0)),this}if(!t||!y(t))return h;if(l=t,this.cache)if(this.B){if(i=this.j.get(t))return i}else this.j.clear(),this.B=!0;if(!(l=this.encode(l)).length)return h;i=w(i=this.f)?i(l):l.split(this.split),this.filter&&(i=r(i,this.filter)),g=i.length,n=!0,s=[];var x=E(),j=0;if(1<g&&(this.depth&&"strict"===this.f?u=!0:i.sort(d)),!u||(m=this.h)){const t=this.b;for(;j<g;j++){let e=i[j];if(e){if(u){if(!p)if(m[e])p=e,x[e]=1;else if(!f)return h;if(f&&j===g-1&&!s.length)u=!1,e=p||e,x[e]=0;else if(!p)continue}if(!x[e]){const i=[];let r=!1,o=0;const h=u?m[p]:this.i;if(h){let n;for(let s=0;s<t-C;s++)(n=h[s]&&h[s][e])&&(i[o++]=n,r=!0)}if(r)p=e,s[s.length]=1<o?i.concat.apply([],i):i[0];else if(!f){n=!1;break}x[e]=1}}}}else n=!1;return n&&(h=v(s,e,a,f)),this.cache&&this.j.set(t,h),h}this.F=i,this.u=0,this.o=[];for(var C=0;C<this.g;C++)this.m[C].postMessage({search:!0,limit:e,content:t})},i.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},i.prototype.where=function(t,e,i,n){const s=this.l,r=[];let o,h=0;var l;let c;if(k(t)){i||(i=e);var a=Object.keys(t),f=a.length;if(o=!1,1===f&&"id"===a[0])return[s[t.id]];if((l=this.I)&&!n)for(var u=0;u<l.length;u++){var d=l[u],p=t[d];if(!x(p)){if(c=this.G[d]["@"+p],0==--f)return c;a.splice(a.indexOf(d),1),delete t[d];break}}for(l=Array(f),u=0;u<f;u++)l[u]=a[u].split(":")}else{if(w(t)){for(i=(e=n||Object.keys(s)).length,a=0;a<i;a++)t(f=s[e[a]])&&(r[h++]=f);return r}if(x(e))return[s[t]];if("id"===t)return[s[e]];a=[t],f=1,l=[t.split(":")],o=!0}for(u=(n=c||n||Object.keys(s)).length,d=0;d<u;d++){p=c?n[d]:s[n[d]];let u=!0;for(let i=0;i<f;i++){o||(e=t[a[i]]);const n=l[i],s=n.length;let r=p;if(1<s)for(let t=0;t<s;t++)r=r[n[t]];else r=r[n[0]];if(r!==e){u=!1;break}}if(u&&(r[h++]=p,i&&h===i))break}return r},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:M.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const t=this.a.keys;for(let e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},i.prototype.export=function(t){const e=!t||x(t.serialize)||t.serialize;if(this.a){const e=!t||x(t.doc)||t.doc;var i=!t||x(t.index)||t.index;t=[];let n=0;if(i)for(i=this.a.keys;n<i.length;n++){const e=this.a.index[i[n]];t[n]=[e.i,e.h,Object.keys(e.c)]}e&&(t[n]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},i.prototype.import=function(t,e){(!e||x(e.serialize)||e.serialize)&&(t=JSON.parse(t));const i=E();if(this.a){var n=!e||x(e.doc)||e.doc,s=0;if(!e||x(e.index)||e.index){const n=(e=this.a.keys).length;for(var r=t[0][2];s<r.length;s++)i[r[s]]=1;for(s=0;s<n;s++){r=this.a.index[e[s]];const n=t[s];n&&(r.i=n[0],r.h=n[1],r.c=i)}}n&&(this.l=k(n)?n:t[s])}else{for(n=t[2],s=0;s<n.length;s++)i[n[s]]=1;this.i=t[0],this.h=t[1],this.c=i}};const z=function(){const t=l("\\s+"),e=l("[^a-z0-9 ]"),i=[l("[-/]")," ",e,"",t," "];return function(t){return u(c(t.toLowerCase(),i))}}(),L={icase:function(t){return t.toLowerCase()},simple:function(){const t=l("\\s+"),e=l("[^a-z0-9 ]"),i=l("[-/]"),n=[l("[àáâãäå]"),"a",l("[èéêë]"),"e",l("[ìíîï]"),"i",l("[òóôõöő]"),"o",l("[ùúûüű]"),"u",l("[ýŷÿ]"),"y",l("ñ"),"n",l("[çc]"),"k",l("ß"),"s",l(" & ")," and ",i," ",e,"",t," "];return function(t){return" "===(t=c(t.toLowerCase(),n))?"":t}}(),advanced:function(){const t=l("ae"),e=l("ai"),i=l("ay"),n=l("ey"),s=l("oe"),r=l("ue"),o=l("ie"),h=l("sz"),a=l("zs"),f=l("ck"),d=l("cc"),p=[t,"a",e,"ei",i,"ei",n,"ei",s,"o",r,"u",o,"i",h,"s",a,"s",l("sh"),"s",f,"k",d,"k",l("th"),"t",l("dt"),"t",l("ph"),"f",l("pf"),"f",l("ou"),"o",l("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=c(t,p)),e||1<t.length&&(t=u(t)),t):t}}(),extra:function(){const t=[l("p"),"b",l("z"),"s",l("[cgq]"),"k",l("n"),"m",l("d"),"t",l("[vw]"),"f",l("[aeiouy]"),""];return function(e){if(!e)return e;if(1<(e=this.advanced(e,!0)).length){e=e.split(" ");for(let i=0;i<e.length;i++){const n=e[i];1<n.length&&(e[i]=n[0]+c(n.substring(1),t))}e=u(e=e.join(" "))}return e}}(),balance:z},Z=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=E(),this.count=E(),this.index=E(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&x(this.cache[t])){let i=this.s.length;if(i===this.H){i--;const t=this.s[i];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=i,this.s[i]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){const e=this.cache[t];if(this.H&&e){var i=++this.count[t];const e=this.index;let s=e[t];if(0<s){const r=this.s;for(var n=s;this.count[r[--s]]<=i&&-1!==s;);if(s++,s!==n){for(i=n;i>s;i--)n=r[i-1],r[i]=n,e[n]=i;r[s]=t,e[t]=s}}}return e},t}();return i}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(i,n,s,r,o){return s=e?URL.createObjectURL(new Blob(["("+s.toString()+")()"],{type:"text/javascript"})):i+".min.js",t[i+="-"+n]||(t[i]=[]),t[i][o]=new Worker(s),t[i][o].onmessage=r,t[i][o]}}()),this)},7356:function(t,e,i){var n=i(7294);const s=t=>{let{children:e,focusable:i,onClick:s,showCloseButton:r}=t;const o="focus:outline-1 focus:outline-brand-300 focus:outline-dashed overflow-hidden tag-pill"+(i?"":" focus:outline-0 cursor-default");return n.createElement("button",{tabIndex:i?void 0:-1,className:o,"aria-label":null==e?void 0:e.toString(),onClick:s},e,r?n.createElement(n.Fragment,null,"  ",n.createElement("strong",null,"x")):null)};s.defaultProps={children:"tag-pill",showCloseButton:!1,focusable:!0},e.Z=s},1790:function(t,e,i){i.d(e,{$N:function(){return o},Dp:function(){return h},gd:function(){return s},m_:function(){return r}});var n=i(1883);const s=()=>{const t=(0,n.useStaticQuery)("2464194210");return[t.allMdx.edges,t.localSearchArticles]},r=t=>{let[e,i]=s();return e.find((e=>{var i;return(null===(i=e.node.fields)||void 0===i?void 0:i.slug)===t}))},o=(t,e)=>t.filter((t=>t.node.frontmatter.tags.some((t=>e.includes(t))))),h=t=>t.map((t=>({node:{id:t.id,fields:{slug:t.slug,timeToRead:{text:t.timeToRead}},frontmatter:{title:t.title,subtitle:t.subtitle,date:t.date,tags:t.tags},excerpt:t.excerpt}})))},5404:function(t,e,i){i.r(e),i.d(e,{Head:function(){return w},default:function(){return k}});var n=i(5785),s=i(8529),r=i(8522),o=i(1873),h=i(7294),l=i(8481),c=i.n(l);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,s=!1,r=void 0;try{for(var o,h=t[Symbol.iterator]();!(n=(o=h.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(l){s=!0,r=l}finally{try{n||null==h.return||h.return()}finally{if(s)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=new Error("FlexSearch index is required. Check that your index exists and is valid."),u=new Error("FlexSearch store is required. Check that your store exists and is valid."),d=i(4107),p=i(5485),g=i(2416),m=i(7125),v=i(7356),y=i(1790),b=i(1883);const w=()=>h.createElement(m.Z,{title:"Articles - rishikc.com",description:"Welcome to my blog for quick reads to detailed articles on technology, development, science and everything in between.",type:"BlogPosting"});var k=()=>{const[t,e]=(0,y.gd)(),[i,l]=(()=>{var t,e,i,n,s,r,o,h;const l=(0,b.useStaticQuery)("4264103088"),c=(null===(t=l.globalMetadata)||void 0===t||null===(e=t.data)||void 0===e||null===(i=e.mdx)||void 0===i||null===(n=i.tags)||void 0===n?void 0:n.all)||[],a=(null===(s=l.globalMetadata)||void 0===s||null===(r=s.data)||void 0===r||null===(o=r.mdx)||void 0===o||null===(h=o.tags)||void 0===h?void 0:h.top)||[],f=c.filter((t=>a.join(" ").includes(t.split("(")[0].trim())));return[c,f]})(),[m,w]=h.useState(!1),[k,x]=h.useState(""),[j,E]=h.useState([]),C=(O=k,S=e.index,A=e.store,P=a((0,h.useState)(null),2),N=P[0],B=P[1],(0,h.useEffect)((function(){if(!S)throw f;if(!A)throw u}),[S,A]),(0,h.useEffect)((function(){if(S instanceof c())B(S);else{var t=c().create();t.import(S),B(t)}}),[S]),(0,h.useMemo)((function(){return O&&N&&A?N.search(O,M).map((function(t){return A[t]})):[]}),[O,N,A]));var O,S,A,M,P,N,B;const I=h.useMemo((()=>k.length?(0,y.Dp)(C):(0,n.Z)(t)),[k,C]),z=h.useMemo((()=>j.length?(0,y.$N)(I,j):I),[j,I]),L=h.useCallback((t=>{w(!m)}),[m]),Z=(t,e)=>{t.stopPropagation(),t.preventDefault(),(t=>{j.includes(t)?E(j.filter((e=>e!=t))):E([].concat((0,n.Z)(j),[t]))})(e)},F=h.useCallback((()=>{let t=i.filter((t=>j.includes(t.split("(")[0].trim()))),e=m?i:l;return(0,n.Z)(new Set(t.concat.apply(t,(0,n.Z)(e)))).map((t=>{const e=t.split("(")[0].trim();return h.createElement(s.m.span,{key:t,layout:!0},h.createElement(v.Z,{key:t,onClick:t=>Z(t,e),showCloseButton:j.includes(e)},t))}))}),[m,j]);return h.createElement(g.Z,null,h.createElement("div",{className:"root-container"},h.createElement("main",{className:"article-page-container"},h.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-between article-list-header"},h.createElement("h1",{className:"mb-3 sm:m-0 article-list-header-title"},"Blog posts"),h.createElement(p.Z,{searchQuery:k,setSearchQuery:x})),h.createElement(h.Suspense,null,h.createElement("div",{className:"article-list-search-info"},h.createElement(r.X,{features:o.H},h.createElement(s.m.span,{className:"flex flex-wrap items-center w-full sm:w-2/3 article-list-search-info-tags"},h.createElement("p",{className:"m-0"},"Popular tags  ",h.createElement("button",{className:"text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-700 focus-within:outline-dotted focus-within:outline-2 focus-within:outline-brand-700 cursor-pointer show-all-button",onClick:L},"(show all)")," : "),F())))),h.createElement("section",null,h.createElement(h.Suspense,null,h.createElement(d.Z,{items:z,onTagClick:Z}))))))}}}]);
//# sourceMappingURL=component---src-pages-articles-tsx-fbb8cd0d2ac173ed7536.js.map