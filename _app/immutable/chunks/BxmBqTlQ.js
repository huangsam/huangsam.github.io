var bn=Array.isArray,Kt=Array.prototype.indexOf,Pn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Ln=Array.prototype,zt=Object.getPrototypeOf;const qn=()=>{};function Yn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,yt=4,W=8,ut=16,R=32,q=64,H=128,w=256,U=512,c=1024,k=2048,S=4096,C=8192,X=16384,Wt=32768,gt=65536,jn=1<<17,Xt=1<<19,Tt=1<<20,vt=Symbol("$state"),Bn=Symbol("legacy props"),Hn=Symbol("");function mt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Kn(){J=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,ln="[",sn="[!",un="]",xt={},ar=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let o=null;function pt(t){o=t}function lr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:ft(!1)})}function sr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];K(l.effect),$(l.reaction),Pt(l.fn)}}finally{K(r),$(e)}}o=n.p,n.m=!0}return{}}function Q(){return!J||o!==null&&o.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function ur(t){return Dt(ft(t))}function fn(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function fr(t,n=!1){return Dt(fn(t,n))}function Dt(t){return u!==null&&!y&&(u.f&g)!==0&&(A===null?mn([t]):A.push(t)),t}function on(t,n){return u!==null&&!y&&Q()&&(u.f&(g|ut))!==0&&(A===null||!A.includes(t))&&an(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ht(),kt(t,k),Q()&&f!==null&&(f.f&c)!==0&&(f.f&(R|q))===0&&(x===null?An([t]):x.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;(i&k)===0&&(!e&&s===f||(m(s,n),(i&(c|w))!==0&&((i&g)!==0?kt(s,S):rt(s))))}}let I=!1;function or(t){I=t}let T;function M(t){if(t===null)throw Rt(),xt;return T=t}function ir(){return M(N(T))}function _r(t){if(I){if(N(T)!==null)throw Rt(),xt;T=t}}function cr(t=1){if(I){for(var n=t,r=T;n--;)r=N(r);T=r}}function vr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,cn,vn,It,Ot;function pr(){if(ht===void 0){ht=window,cn=document,vn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=ct(n,"firstChild").get,Ot=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function at(t){return It.call(t)}function N(t){return Ot.call(t)}function hr(t,n){if(!I)return at(t);var r=at(T);if(r===null)r=T.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),M(e),e}return M(r),r}function dr(t,n){if(!I){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return T}function Er(t,n=1,r=!1){let e=I?T:t;for(var a;n--;)a=e,e=N(e);if(!I)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=et();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function wr(t){t.textContent=""}function St(t){var n=g|k,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=Tt,{ctx:o,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function yr(t){const n=St(t);return n.equals=At,n}function Nt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function pn(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function hn(t){var n,r=f;K(pn(t));try{Nt(t),n=Vt(t)}finally{K(r)}return n}function Ct(t){var n=hn(t),r=(D||(t.f&w)!==0)&&t.deps!==null?S:c;m(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function bt(t){f===null&&u===null&&nn(),u!==null&&(u.f&w)!==0&&f===null&&tn(),it&&Qt()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var a=(t&q)!==0,l=f,s={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{nt(s),s.f|=Wt}catch(E){throw O(s),E}else n!==null&&rt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Tt|H))===0;if(!i&&!a&&e&&(l!==null&&dn(s,l),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function gr(t){const n=b(W,null,!1);return m(n,c),n.teardown=t,n}function Tr(t){bt();var n=f!==null&&(f.f&R)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Pt(t);return e}}function mr(t){return bt(),ot(t)}function Ar(t){const n=b(q,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return b(yt,t,!1)}function xr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,on(r.l.r2,!0),Nn(n))})}function Rr(){var t=o;ot(()=>{if($t(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&c)!==0&&m(r,S),P(r)&&nt(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return b(W,t,!0)}function Dr(t,n=[],r=St){const e=n.map(r);return En(()=>t(...e.map($t)))}function En(t,n=0){return b(W|ut|n,t,!0)}function kr(t,n=!0){return b(W|R,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;Et(!0),$(null);try{n.call(null)}finally{Et(r),$(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&Xt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),z(t,0),m(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];qt(t,r,!0),gn(r,()=>{O(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function qt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&gt)!==0||(e.f&R)!==0;qt(e,n,l?r:!1),e=a}}}function Ir(t){Yt(t,!0)}function Yt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&c)===0&&(t.f^=c),P(t)&&(m(t,k),rt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&gt)!==0||(r.f&R)!==0;Yt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let L=[],lt=[];function jt(){var t=L;L=[],wt(t)}function Tn(){var t=lt;lt=[],wt(t)}function Or(t){L.length===0&&queueMicrotask(jt),L.push(t)}function dt(){L.length>0&&jt(),lt.length>0&&Tn()}let j=!1,V=!1,G=null,B=!1,it=!1;function Et(t){it=t}let F=[];let u=null,y=!1;function $(t){u=t}let f=null;function K(t){f=t}let A=null;function mn(t){A=t}let v=null,d=0,x=null;function An(t){x=t}let Bt=1,Z=0,D=!1;function Ht(){return++Bt}function P(t){var p;var n=t.f;if((n&k)!==0)return!0;if((n&S)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var a,l,s=(n&U)!==0,i=e&&f!==null&&!D,_=r.length;if(s||i){var E=t,Y=E.parent;for(a=0;a<_;a++)l=r[a],(s||!((p=l==null?void 0:l.reactions)!=null&&p.includes(E)))&&(l.reactions??(l.reactions=[])).push(E);s&&(E.f^=U),i&&Y!==null&&(Y.f&w)===0&&(E.f^=w)}for(a=0;a<_;a++)if(l=r[a],P(l)&&Ct(l),l.wv>t.wv)return!0}(!e||f!==null&&!D)&&m(t,c)}return!1}function xn(t,n){for(var r=n;r!==null;){if((r.f&H)!==0)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw j=!1,t}function Rn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&H)===0)}function tt(t,n,r,e){if(j){if(r===null&&(j=!1),Rn(n))throw t;return}r!==null&&(j=!0);{xn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&g)!==0?Ut(l,n,!1):n===l&&(r?m(l,k):(l.f&c)!==0&&m(l,S),rt(l))}}function Vt(t){var _t;var n=v,r=d,e=x,a=u,l=D,s=A,i=o,_=y,E=t.f;v=null,d=0,x=null,D=(E&w)!==0&&(y||!B||u===null),u=(E&(R|q))===0?t:null,A=null,pt(t.ctx),y=!1,Z++;try{var Y=(0,t.fn)(),p=t.deps;if(v!==null){var h;if(z(t,d),p!==null&&d>0)for(p.length=d+v.length,h=0;h<v.length;h++)p[d+h]=v[h];else t.deps=p=v;if(!D)for(h=d;h<p.length;h++)((_t=p[h]).reactions??(_t.reactions=[])).push(t)}else p!==null&&d<p.length&&(z(t,d),p.length=d);if(Q()&&x!==null&&!y&&p!==null&&(t.f&(g|S|k))===0)for(h=0;h<x.length;h++)Ut(x[h],t);return a!==null&&Z++,Y}finally{v=n,d=r,x=e,u=a,D=l,A=s,pt(i),y=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=Kt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&g)!==0&&(v===null||!v.includes(n))&&(m(n,S),(n.f&(w|U))===0&&(n.f^=U),Nt(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function nt(t){var n=t.f;if((n&X)===0){m(t,c);var r=f,e=o,a=B;f=t,B=!0;try{(n&ut)!==0?wn(t):Mt(t),Ft(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,i}catch(_){tt(_,t,r,e||t.ctx)}finally{B=a,f=r}}}function kn(){try{rn()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Gt(){try{for(var t=0;F.length>0;){t++>1e3&&kn();var n=F,r=n.length;F=[];for(var e=0;e<r;e++){var a=n[e];(a.f&c)===0&&(a.f^=c);var l=On(a);In(l)}}}finally{V=!1,G=null}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|C))===0)try{P(e)&&(nt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(a){tt(a,e,null,e.ctx)}}}function rt(t){V||(V=!0,queueMicrotask(Gt));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(q|R))!==0){if((r&c)===0)return;n.f^=c}}F.push(n)}function On(t){for(var n=[],r=t.first;r!==null;){var e=r.f,a=(e&R)!==0,l=a&&(e&c)!==0;if(!l&&(e&C)===0){if((e&yt)!==0)n.push(r);else if(a)r.f^=c;else{var s=u;try{u=r,P(r)&&nt(r)}catch(E){tt(E,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Sn(t){var n;for(dt();F.length>0;)V=!0,Gt(),dt();return n}async function Sr(){await Promise.resolve(),Sn()}function $t(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){A!==null&&A.includes(t)&&en();var e=u.deps;t.rv<Z&&(t.rv=Z,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!D||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&w)===0&&(a.f^=w)}return r&&(a=t,P(a)&&Ct(a)),t.v}function Nn(t){var n=y;try{return y=!0,t()}finally{y=n}}const Cn=-7169;function m(t,n){t.f=t.f&Cn|n}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{cn as $,Er as A,dr as B,Dr as C,sr as D,gt as E,hr as F,_r as G,sn as H,cr as I,yr as J,xr as K,Rr as L,fr as M,Jt as N,J as O,et as P,at as Q,un as R,C as S,Pn as T,ar as U,f as V,_n as W,ft as X,bn as Y,zn as Z,qt as _,ir as a,wr as a0,gn as a1,O as a2,Zn as a3,Wn as a4,N as a5,Hn as a6,zt as a7,Zt as a8,$ as a9,Bn as aA,Jn as aB,Xn as aC,nr as aD,Sn as aE,ur as aF,Sr as aG,K as aa,u as ab,Xt as ac,ln as ad,vn as ae,rr as af,er as ag,pr as ah,xt as ai,Rt as aj,Un as ak,Ar as al,vt as am,Mn as an,Ln as ao,$n as ap,ct as aq,Gn as ar,Pt as as,ot as at,Or as au,Vn as av,jn as aw,Qn as ax,At as ay,tr as az,En as b,or as c,Ir as d,kr as e,T as f,Fn as g,I as h,$t as i,on as j,o as k,Tr as l,fn as m,qn as n,wt as o,yn as p,Nn as q,vr as r,M as s,gr as t,mr as u,Yn as v,Nr as w,St as x,Kn as y,lr as z};
