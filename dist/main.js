!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=84)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(43))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(30),i=r(1),u=r(31),c=r(38),f=r(59),a=o("wks"),s=e.Symbol,l=f?s:u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,r){var e=r(7),o=r(8),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(4);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(7),o=r(25),i=r(6),u=r(12),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,r){var e=r(0),o=r(3),i=r(1),u=r(13),c=r(27),f=r(29),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e=r(5);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(3);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(30),o=r(31),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(0),o=r(32).f,i=r(3),u=r(11),c=r(13),f=r(47),a=r(54);t.exports=function(t,n){var r,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(r=h?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(33),o=r(20);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(20);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(7),o=r(4),i=r(26);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(5),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(28),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(13),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e,o,i,u=r(44),c=r(0),f=r(5),a=r(3),s=r(1),l=r(14),p=r(16),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var x=l("state");p[x]=!0,e=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(15),o=r(28);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.8",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(7),o=r(46),i=r(9),u=r(18),c=r(12),f=r(1),a=r(25),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(4),o=r(19),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(49),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(1),o=r(18),i=r(51).indexOf,u=r(16);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){"use strict";var e=r(55).forEach,o=r(60);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){var e=r(56);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(4);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e,o,i,u=r(40),c=r(3),f=r(1),a=r(2),s=r(15),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||f(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(1),o=r(24),i=r(14),u=r(74),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,r){var e=r(8).f,o=r(1),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(11),o=Date.prototype,i=o.toString,u=o.getTime;new Date(NaN)+""!="Invalid Date"&&e(o,"toString",(function(){var t=u.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(27),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){"use strict";var e=r(17),o=r(36);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(48),i=r(32),u=r(8);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(34),o=r(50),i=r(53),u=r(6);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(35),o=r(23).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(18),o=r(21),i=r(52),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(22),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(4),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(37),o=r(33),i=r(24),u=r(21),c=r(57),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,d){for(var g,x,b=i(v),m=o(b),S=e(y,h,3),w=u(m.length),O=0,j=d||c,T=n?j(v,w):r?j(v,0):void 0;w>O;O++)if((p||O in m)&&(x=S(g=m[O],O,b),t))if(n)T[O]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:f.call(T,g)}else if(s)return!1;return l?-1:a||s?s:T}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(5),o=r(58),i=r(2)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(19);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(38);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,n,r){"use strict";var e=r(4);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(17),o=r(62);e({target:"Array",stat:!0,forced:!r(69)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(37),o=r(24),i=r(63),u=r(64),c=r(21),f=r(65),a=r(66);t.exports=function(t){var n,r,s,l,p,v=o(t),y="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,g=void 0!==d,x=0,b=a(v);if(g&&(d=e(d,h>2?arguments[2]:void 0,2)),null==b||y==Array&&u(b))for(r=new y(n=c(v.length));n>x;x++)f(r,x,g?d(v[x],x):v[x]);else for(p=(l=b.call(v)).next,r=new y;!(s=p.call(l)).done;x++)f(r,x,g?i(l,d,[s.value,x],!0):s.value);return r.length=x,r}},function(t,n,r){var e=r(6);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(2),o=r(10),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){"use strict";var e=r(12),o=r(8),i=r(9);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(67),o=r(10),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(68),o=r(19),i=r(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(2)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(71).charAt,o=r(29),i=r(72),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(22),o=r(20),i=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e=r(17),o=r(73),i=r(40),u=r(79),c=r(41),f=r(3),a=r(11),s=r(2),l=r(15),p=r(10),v=r(39),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,v,x,b){o(r,n,s);var m,S,w,O=function(t){if(t===v&&L)return L;if(!h&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",T=!1,E=t.prototype,A=E[d]||E["@@iterator"]||v&&E[v],L=!h&&A||O(v),P="Array"==n&&E.entries||A;if(P&&(m=i(P.call(new t)),y!==Object.prototype&&m.next&&(l||i(m)===y||(u?u(m,y):"function"!=typeof m[d]&&f(m,d,g)),c(m,j,!0,!0),l&&(p[j]=g))),"values"==v&&A&&"values"!==A.name&&(T=!0,L=function(){return A.call(this)}),l&&!b||E[d]===L||f(E,d,L),p[n]=L,v)if(S={values:O("values"),keys:x?L:O("keys"),entries:O("entries")},b)for(w in S)!h&&!T&&w in E||a(E,w,S[w]);else e({target:n,proto:!0,forced:h||T},S);return S}},function(t,n,r){"use strict";var e=r(39).IteratorPrototype,o=r(75),i=r(9),u=r(41),c=r(10),f=function(){return this};t.exports=function(t,n,r){var a=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,r){var e=r(4);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(6),o=r(76),i=r(23),u=r(16),c=r(78),f=r(26),a=r(14)("IE_PROTO"),s=function(){},l=function(){var t,n=f("iframe"),r=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[a]=t):r=l(),void 0===n?r:o(r,n)},u[a]=!0},function(t,n,r){var e=r(7),o=r(8),i=r(6),u=r(77);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(35),o=r(23);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(34);t.exports=e("document","documentElement")},function(t,n,r){var e=r(6),o=r(80);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){var e=r(0),o=r(82),i=r(36),u=r(3);for(var c in o){var f=e[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){},function(t,n,r){"use strict";r.r(n);r(42);var e={github:{bgcolor:"#24292e",url:"https://github.com/huangsam/"},facebook:{bgcolor:"#3b5998",url:"https://www.facebook.com/samuel.c.huang"},linkedin:{bgcolor:"#0077b5",url:"https://www.linkedin.com/in/sambyte/"},wordpress:{bgcolor:"#21759b",url:"https://sambyte.wordpress.com/"}},o=(r(45),r(61),r(70),r(81),function(t,n,r){document.body.style.backgroundColor=t,document.querySelectorAll("p, h1, footer span").forEach((function(t){t.style.color=n})),Array.from(document.getElementsByTagName("pre")).forEach((function(t){t.style.border=r}))});r(83);document.getElementById("service").onchange=function(t){var n=t.currentTarget.value;if("default"!==n){var r=function(t){return e[t].bgcolor}(n);o(r,"white",".3em solid white")}else o("white","","")},document.getElementById("goto").onclick=function(t){t.preventDefault();var n=document.getElementById("service").value;"default"!==n?window.location.href=function(t){return e[t].url}(n):alert("Please select a valid service from the dropdown.")},document.addEventListener("DOMContentLoaded",(function(){var t=(new Date).getFullYear();document.getElementById("current-year").innerHTML=t}))}]);
//# sourceMappingURL=main.js.map