import{d as Y,a5 as I,a6 as P,X as q,U as G,N as A,z as w,A as W,a7 as $,h as c,a8 as H,_ as O,E,B as T,F as d,C as S,a9 as j,aa as z,a as V,ab as C,ac as M,G as K,ad as Q,ae as X,Q as J,M as Z,af as x,K as ee,p as re,q as te,c as ae}from"./runtime.Cr9plavz.js";const ne=["touchstart","touchmove"];function oe(e){return ne.includes(e)}const ie=new Set,F=new Set;function N(e){var L;var r=this,t=r.ownerDocument,f=e.type,n=((L=e.composedPath)==null?void 0:L.call(e))||[],a=n[0]||e.target,i=0,v=e.__root;if(v){var _=n.indexOf(v);if(_!==-1&&(r===document||r===window)){e.__root=r;return}var y=n.indexOf(r);if(y===-1)return;_<=y&&(i=_)}if(a=n[i]||e.target,a!==r){Y(e,"currentTarget",{configurable:!0,get(){return a||t}});var R=G,l=A;I(null),P(null);try{for(var o,s=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+f];if(m!==void 0&&!a.disabled)if(q(m)){var[B,...U]=m;B.apply(a,[e,...U])}else m.call(a,e)}catch(b){o?s.push(b):o=b}if(e.cancelBubble||h===r||h===null)break;a=h}if(o){for(let b of s)queueMicrotask(()=>{throw b});throw o}}finally{e.__root=r,delete e.currentTarget,I(R),P(l)}}}let u;function se(){u=void 0}function ce(e){let r=null,t=c;var f;if(c){for(r=d,u===void 0&&(u=S(document.head));u!==null&&(u.nodeType!==8||u.data!==H);)u=O(u);u===null?E(!1):u=T(O(u))}c||(f=document.head.appendChild(w()));try{W(()=>e(f),$)}finally{t&&(E(!0),u=d,T(r))}}function de(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function p(e,r){var t=A;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function _e(e,r){var t=(r&j)!==0,f=(r&z)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return p(d,null),d;n===void 0&&(n=de(a?e:"<!>"+e),t||(n=S(n)));var i=f?document.importNode(n,!0):n.cloneNode(!0);if(t){var v=S(i),_=i.lastChild;p(v,_)}else p(i,i);return i}}function he(e=""){if(!c){var r=w(e+"");return p(r,r),r}var t=d;return t.nodeType!==3&&(t.before(t=w()),T(t)),p(t,t),t}function ve(){if(c)return p(d,null),d;var e=document.createDocumentFragment(),r=document.createComment(""),t=w();return e.append(r,t),p(r,t),e}function pe(e,r){if(c){A.nodes_end=d,V();return}e!==null&&e.before(r)}function me(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ue(e,r){return k(e,r)}function ye(e,r){C(),r.intro=r.intro??!1;const t=r.target,f=c,n=d;try{for(var a=S(t);a&&(a.nodeType!==8||a.data!==H);)a=O(a);if(!a)throw M;E(!0),T(a),V();const i=k(e,{...r,anchor:a});if(d===null||d.nodeType!==8||d.data!==K)throw Q(),M;return E(!1),i}catch(i){if(i===M)return r.recover===!1&&X(),C(),J(t),E(!1),ue(e,r);throw i}finally{E(f),T(n),se()}}const g=new Map;function k(e,{target:r,anchor:t,props:f={},events:n,context:a,intro:i=!0}){C();var v=new Set,_=l=>{for(var o=0;o<l.length;o++){var s=l[o];if(!v.has(s)){v.add(s);var h=oe(s);r.addEventListener(s,N,{passive:h});var m=g.get(s);m===void 0?(document.addEventListener(s,N,{passive:h}),g.set(s,1)):g.set(s,m+1)}}};_(Z(ie)),F.add(_);var y=void 0,R=x(()=>{var l=t??r.appendChild(w());return ee(()=>{if(a){re({});var o=ae;o.c=a}n&&(f.$$events=n),c&&p(l,null),y=e(l,f)||{},c&&(A.nodes_end=d),a&&te()}),()=>{var h;for(var o of v){r.removeEventListener(o,N);var s=g.get(o);--s===0?(document.removeEventListener(o,N),g.delete(o)):g.set(o,s)}F.delete(_),l!==t&&((h=l.parentNode)==null||h.removeChild(l))}});return D.set(y,R),y}let D=new WeakMap;function ge(e,r){const t=D.get(e);return t?(D.delete(e),t(r)):Promise.resolve()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{pe as a,he as b,ye as c,ve as d,ce as h,ue as m,me as s,_e as t,ge as u};