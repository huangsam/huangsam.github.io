!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={github:{bgcolor:"#24292e",url:"https://github.com/huangsam/"},facebook:{bgcolor:"#3b5998",url:"https://www.facebook.com/samuel.c.huang"},linkedin:{bgcolor:"#0077b5",url:"https://www.linkedin.com/in/sambyte/"},wordpress:{bgcolor:"#21759b",url:"https://sambyte.wordpress.com/"}},o=function(e,t,n){document.body.style.backgroundColor=e,document.querySelectorAll("p, h1, footer span").forEach(function(e){e.style.color=t}),Array.from(document.getElementsByTagName("pre")).forEach(function(e){e.style.border=n})};n(0);document.getElementById("service").onchange=function(e){var t=e.currentTarget.value;if("default"!==t){var n=function(e){return r[e].bgcolor}(t);o(n,"white",".3em solid white")}else o("white","","")},document.getElementById("goto").onclick=function(e){e.preventDefault();var t=document.getElementById("service").value;"default"!==t?window.location.href=function(e){return r[e].url}(t):alert("Please select a valid service from the dropdown.")},document.addEventListener("DOMContentLoaded",function(){var e=(new Date).getFullYear();document.getElementById("current-year").innerHTML=e})}]);
//# sourceMappingURL=main.js.map