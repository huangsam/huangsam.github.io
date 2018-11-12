!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){var t={github:{color:"#24292e",url:"https://github.com/huangsam/"},facebook:{color:"#3b5998",url:"https://www.facebook.com/samuel.c.huang"},linkedin:{color:"#0077b5",url:"https://www.linkedin.com/in/sambyte/"},wordpress:{color:"#21759b",url:"https://sambyte.wordpress.com/"}};e.exports={getServiceUrl:function(e){return t[e].url},getServiceColor:function(e){return t[e].color}}},function(e,n,t){"use strict";t.r(n);var o=t(0);t(2);document.getElementById("service").onchange=function(e){var n=e.currentTarget.value;"default"!==n?function(e){var n=Object(o.getServiceColor)(e);document.body.style.backgroundColor=n;var t=document.querySelectorAll("p, h1, footer span"),r=!0,a=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)s.value.style.color="white"}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}var l=document.getElementsByTagName("pre"),u=!0,f=!1,p=void 0;try{for(var d,m=l[Symbol.iterator]();!(u=(d=m.next()).done);u=!0)d.value.style.border=".3em solid white"}catch(e){f=!0,p=e}finally{try{u||null==m.return||m.return()}finally{if(f)throw p}}}(n):function(){document.body.style.backgroundColor="white";var e=document.querySelectorAll("p, h1, footer span"),n=!0,t=!1,o=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done);n=!0)r.value.style.color=""}catch(e){t=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(t)throw o}}var i=document.getElementsByTagName("pre"),s=!0,c=!1,l=void 0;try{for(var u,f=i[Symbol.iterator]();!(s=(u=f.next()).done);s=!0)u.value.style.border=""}catch(e){c=!0,l=e}finally{try{s||null==f.return||f.return()}finally{if(c)throw l}}}()},document.getElementById("goto").onclick=function(e){e.preventDefault();var n=document.getElementById("service").value;"default"!==n?window.location.href=Object(o.getServiceUrl)(n):alert("Please select a valid service from the dropdown.")},document.addEventListener("DOMContentLoaded",function(e){var n=(new Date).getFullYear();document.getElementById("current-year").innerHTML=n})},function(e,n,t){var o=t(3);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(n=e.exports=t(4)(!0)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Mono|Open+Sans);",""]),n.push([e.i,"h1,h2,h3,h4,h5{font-family:'Fira Mono', monospace}pre,pre span,code{font-family:'Fira Mono', monospace}p,span{font-family:'Open Sans', sans-serif}html{position:relative;min-height:100%}body{margin-bottom:60px}.footer{position:absolute;bottom:0;height:60px;line-height:60px}nav{margin-top:10px}main{margin-top:30px}body{-webkit-transition:background-color .5s ease-out;-moz-transition:background-color .5s ease-out;-o-transition:background-color .5s ease-out;transition:background-color .5s ease-out}a,h1,p{-webkit-transition:color .25s ease-out;-moz-transition:color .25s ease-out;-o-transition:color .25s ease-out;transition:color .25s ease-out}pre{-webkit-transition:border .25s ease-out;-moz-transition:border .25s ease-out;-o-transition:border .25s ease-out;transition:border .25s ease-out}a,a:visited{color:#0275d8}.lead{font-weight:bold}.code-block{margin-top:20px;margin-bottom:20px}pre{border-radius:.5em;border:0.3em solid #545454;box-shadow:1px 1px .5em black inset;margin:.5em 0;overflow:auto;padding:1em;background-color:#141414;color:white;font-size:.9em}pre code.language-python span.bool{color:#1ab728}pre code.language-python span.var{color:#ff9100}pre code.language-python span.func{color:#009dff}\n","",{version:3,sources:["/Users/samhuang/Playground/personal/huangsam.github.io/scss/scss/fonts.scss","/Users/samhuang/Playground/personal/huangsam.github.io/scss/scss/footer.scss","/Users/samhuang/Playground/personal/huangsam.github.io/scss/scss/home.scss","/Users/samhuang/Playground/personal/huangsam.github.io/scss/scss/code.scss"],names:[],mappings:"AAOA,eACE,kCAAmC,CACpC,kBAGC,kCAAmC,CACpC,OAGC,mCAAoC,CACrC,KCXC,kBACA,eAAgB,CACjB,KAIC,kBAAmB,CACpB,QAGC,kBACA,SAEA,YAEA,gBAAiB,CAClB,ICfC,eAAgB,CACjB,KAGC,eAAgB,CACjB,KAGC,iDACA,8CACA,4CACA,wCAAyC,CAC1C,OAGC,uCACA,oCACA,kCACA,8BAA+B,CAChC,IAGC,wCACA,qCACA,mCACA,+BAAgC,CACjC,YAGC,aAAc,CACf,MAGC,gBAAiB,CAClB,YCnCC,gBACA,kBAAmB,CACpB,IAGC,mBAEA,2BACA,oCACA,cACA,cACA,YACA,yBACA,YACA,cAAe,CAChB,mCAGC,aAAc,CACf,kCAGC,aAAc,CACf,mCAGC,aAAc,CACf",file:"main.scss",sourcesContent:["/**\n * Fira Mono and Open Sans are being pulled from Google APIs and\n * loaded dynamically as assets.\n */\n\n@import url('https://fonts.googleapis.com/css?family=Fira+Mono|Open+Sans');\n\nh1, h2, h3, h4, h5 {\n  font-family: 'Fira Mono', monospace;\n}\n\npre, pre span, code {\n  font-family: 'Fira Mono', monospace;\n}\n\np, span {\n  font-family: 'Open Sans', sans-serif;\n}\n",'/**\n * Inspired by CSS styling in "Sticky Footer" from the official\n * Bootstrap 4 website.\n */\n\nhtml {\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  /* Margin bottom by footer height */\n  margin-bottom: 60px;\n}\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  /* Vertically center the text there */\n  line-height: 60px;\n}\n',"/**\n * Foundational CSS classes to keep the styling of the\n * page intact. Some of the DOM elements it modifies are\n * <nav>, <main> and <body>.\n */\n\nnav {\n  margin-top: 10px;\n}\n\nmain {\n  margin-top: 30px;\n}\n\nbody {\n  -webkit-transition: background-color .5s ease-out;\n  -moz-transition: background-color .5s ease-out;\n  -o-transition: background-color .5s ease-out;\n  transition: background-color .5s ease-out;\n}\n\na, h1, p {\n  -webkit-transition: color .25s ease-out;\n  -moz-transition: color .25s ease-out;\n  -o-transition: color .25s ease-out;\n  transition: color .25s ease-out;\n}\n\npre {\n  -webkit-transition: border .25s ease-out;\n  -moz-transition: border .25s ease-out;\n  -o-transition: border .25s ease-out;\n  transition: border .25s ease-out;\n}\n\na, a:visited {\n  color: #0275d8;\n}\n\n.lead {\n  font-weight: bold;\n}\n","/**\n * Code classes to make <pre> blocks look nicer on the\n * browser side.\n */\n\n.code-block {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\npre {\n  border-radius: .5em;\n  /* RGB equivalent is #282A2B */\n  border: .3em solid hsl(0, 0%, 33%);\n  box-shadow: 1px 1px .5em black inset;\n  margin: .5em 0;\n  overflow: auto;\n  padding: 1em;\n  background-color: hsl(0, 0%, 8%);\n  color: white;\n  font-size: .9em;\n}\n\npre code.language-python span.bool {\n  color: #1ab728;\n}\n\npre code.language-python span.var {\n  color: #ff9100;\n}\n\npre code.language-python span.func {\n  color: #009dff;\n}\n"],sourceRoot:""}])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(a).concat([r]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){var o={},r=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),i=null,s=0,c=[],l=t(6);function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(b(r.parts[i],n))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(b(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,n){for(var t=[],o={},r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function p(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),c.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,t);t.insertBefore(n,r)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return t.nc}();o&&(e.attrs.nonce=o)}return h(n,e.attrs),p(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,o,r,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var c=s++;t=i||(i=m(n)),o=A.bind(null,t,c,!1),r=A.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),p(e,n),n}(n),o=function(e,n,t){var o=t.css,r=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||a)&&(o=l(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){d(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return u(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var i=t[a];(s=o[i.id]).refs--,r.push(s)}e&&u(f(e,n),n);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function A(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);
//# sourceMappingURL=bundle.js.map