(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);n(25);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(c(c(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?c(e):t}(this,s(t).call(this,e)))),"scrollTo",function(e){var t=document.getElementById(e);window.scroll({left:t.offsetLeft,top:t.offsetTop,behavior:"smooth"})}),n.scrollToAboutSection=n.scrollTo.bind(c(c(n)),"about"),n.scrollToWorkSection=n.scrollTo.bind(c(c(n)),"work"),n.scrollToSkillsSection=n.scrollTo.bind(c(c(n)),"skills"),n.scrollToProjectsSection=n.scrollTo.bind(c(c(n)),"projects"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.a.Component),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-links"},r.a.createElement("span",{onClick:this.scrollToAboutSection},"About this geek."),r.a.createElement("span",{onClick:this.scrollToWorkSection},"What do I do? Hmm.."),r.a.createElement("span",{onClick:this.scrollToSkillsSection},"Skills, you asked?"),r.a.createElement("span",{onClick:this.scrollToProjectsSection},"Have a look at some projects!")),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rkrishi"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://github.com/rishichawda"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://medium.com/@rishii.kumar.chawda"},r.a.createElement("i",{className:"fab fa-medium"})),r.a.createElement("a",{href:"https://www.instagram.com/rishi.py"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fas fa-envelope"}))))}}]),t}();t.default=f},25:function(e,t,n){var o=n(26);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},26:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".sidebar{height:100vh;padding:0.2em 2em;display:flex;width:20%;flex-direction:column;align-items:center;box-sizing:border-box;position:fixed;background-color:aliceblue;animation:slideIn 1.1s linear;will-change:transform}.sidebar .sidebar-links{display:flex;flex-direction:column;list-style:none;margin:0;width:100%;align-self:center;padding:0 3%;margin:auto}@media only screen and (max-width: 700px){.sidebar .sidebar-links{min-width:100%;justify-content:center}}.sidebar .sidebar-links span{text-decoration:none;display:flex;width:fit-content;color:black;padding:0.7em 1.1em;min-width:fit-content;cursor:pointer}@media only screen and (max-width: 700px){.sidebar .sidebar-links span{margin:0 2%}}.sidebar .footer{width:100%;justify-content:space-around;display:flex;bottom:2em;position:absolute;padding:2%;box-sizing:border-box;font-size:1.6em}.sidebar .footer a{text-decoration:none;color:black}@keyframes slideIn{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}65%{opacity:0.2}100%{opacity:1;-webkit-transform:translateX(0%);transform:translateX(0%)}}\n",""])}}]);