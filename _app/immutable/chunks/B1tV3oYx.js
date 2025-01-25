import{d as Y,a5 as M,a6 as P,U as q,V as G,O as S,A as E,B as W,a7 as $,h as c,a8 as F,_ as D,F as w,C as T,G as d,D as R,a9 as j,aa as z,a as H,ab as L,ac as O,I as J,ad as K,ae as Q,R as X,N as Z,af as x,L as ee,p as re,q as te,c as ae}from"./DlJv7byX.js";const ne=["touchstart","touchmove"];function oe(e){return ne.includes(e)}const ie=new Set,V=new Set;function N(e){var I;var r=this,t=r.ownerDocument,f=e.type,n=((I=e.composedPath)==null?void 0:I.call(e))||[],a=n[0]||e.target,i=0,v=e.__root;if(v){var _=n.indexOf(v);if(_!==-1&&(r===document||r===window)){e.__root=r;return}var y=n.indexOf(r);if(y===-1)return;_<=y&&(i=_)}if(a=n[i]||e.target,a!==r){Y(e,"currentTarget",{configurable:!0,get(){return a||t}});var A=G,l=S;M(null),P(null);try{for(var o,s=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+f];if(m!==void 0&&!a.disabled)if(q(m)){var[B,...U]=m;B.apply(a,[e,...U])}else m.call(a,e)}catch(b){o?s.push(b):o=b}if(e.cancelBubble||h===r||h===null)break;a=h}if(o){for(let b of s)queueMicrotask(()=>{throw b});throw o}}finally{e.__root=r,delete e.currentTarget,M(A),P(l)}}}let u;function se(){u=void 0}function ce(e){let r=null,t=c;var f;if(c){for(r=d,u===void 0&&(u=R(document.head));u!==null&&(u.nodeType!==8||u.data!==F);)u=D(u);u===null?w(!1):u=T(D(u))}c||(f=document.head.appendChild(E()));try{W(()=>e(f),$)}finally{t&&(w(!0),u=d,T(r))}}function de(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function p(e,r){var t=S;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function _e(e,r){var t=(r&j)!==0,f=(r&z)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return p(d,null),d;n===void 0&&(n=de(a?e:"<!>"+e),t||(n=R(n)));var i=f?document.importNode(n,!0):n.cloneNode(!0);if(t){var v=R(i),_=i.lastChild;p(v,_)}else p(i,i);return i}}function he(e=""){if(!c){var r=E(e+"");return p(r,r),r}var t=d;return t.nodeType!==3&&(t.before(t=E()),T(t)),p(t,t),t}function ve(){if(c)return p(d,null),d;var e=document.createDocumentFragment(),r=document.createComment(""),t=E();return e.append(r,t),p(r,t),e}function pe(e,r){if(c){S.nodes_end=d,H();return}e!==null&&e.before(r)}function me(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ue(e,r){return k(e,r)}function ye(e,r){L(),r.intro=r.intro??!1;const t=r.target,f=c,n=d;try{for(var a=R(t);a&&(a.nodeType!==8||a.data!==F);)a=D(a);if(!a)throw O;w(!0),T(a),H();const i=k(e,{...r,anchor:a});if(d===null||d.nodeType!==8||d.data!==J)throw K(),O;return w(!1),i}catch(i){if(i===O)return r.recover===!1&&Q(),L(),X(t),w(!1),ue(e,r);throw i}finally{w(f),T(n),se()}}const g=new Map;function k(e,{target:r,anchor:t,props:f={},events:n,context:a,intro:i=!0}){L();var v=new Set,_=l=>{for(var o=0;o<l.length;o++){var s=l[o];if(!v.has(s)){v.add(s);var h=oe(s);r.addEventListener(s,N,{passive:h});var m=g.get(s);m===void 0?(document.addEventListener(s,N,{passive:h}),g.set(s,1)):g.set(s,m+1)}}};_(Z(ie)),V.add(_);var y=void 0,A=x(()=>{var l=t??r.appendChild(E());return ee(()=>{if(a){re({});var o=ae;o.c=a}n&&(f.$$events=n),c&&p(l,null),y=e(l,f)||{},c&&(S.nodes_end=d),a&&te()}),()=>{var h;for(var o of v){r.removeEventListener(o,N);var s=g.get(o);--s===0?(document.removeEventListener(o,N),g.delete(o)):g.set(o,s)}V.delete(_),l!==t&&((h=l.parentNode)==null||h.removeChild(l))}});return C.set(y,A),y}let C=new WeakMap;function ge(e,r){const t=C.get(e);return t?(C.delete(e),t(r)):Promise.resolve()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{pe as a,he as b,ye as c,ve as d,ce as h,ue as m,me as s,_e as t,ge as u};
