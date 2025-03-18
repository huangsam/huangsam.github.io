var Fn=Array.isArray,Zt=Array.prototype.indexOf,Mn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Yn=Array.prototype,Wt=Object.getPrototypeOf;const jn=()=>{};function Hn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,gt=4,J=8,ot=16,R=32,P=64,V=128,w=256,G=512,v=1024,k=2048,N=4096,b=8192,Q=16384,Xt=32768,Tt=65536,Bn=1<<17,Jt=1<<19,mt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function At(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function zn(){tt=!0}const Wn=1,Xn=2,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,ar=1,lr=2,sn="[",un="[!",fn="]",Rt={},sr=Symbol(),ur="http://www.w3.org/1999/xhtml";function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let o=null;function ht(t){o=t}function fr(t,n=!1,r){var e=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(o.l={s:null,u:null,r1:[],r2:it(!1)}),wn(()=>{e.d=!0})}function or(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Ft(a.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function nt(){return!tt||o!==null&&o.l===null}const q=new Map;function it(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function ir(t){return kt(it(t))}function on(t,n=!1){var e;const r=it(t);return n||(r.equals=xt),tt&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return kt(on(t,n))}function kt(t){return u!==null&&!y&&(u.f&g)!==0&&(x===null?xn([t]):x.push(t)),t}function _n(t,n){return u!==null&&!y&&nt()&&(u.f&(g|ot))!==0&&(x===null||!x.includes(t))&&ln(),cn(t,n)}function cn(t,n){if(!t.equals(n)){var r=t.v;H?q.set(t,n):q.set(t,r),t.v=n,t.wv=Ut(),St(t,k),nt()&&f!==null&&(f.f&v)!==0&&(f.f&(R|P))===0&&(E===null?Rn([t]):E.push(t))}return n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&k)===0&&(!e&&s===f||(m(s,n),(i&(v|w))!==0&&((i&g)!==0?St(s,N):at(s))))}}let I=!1;function cr(t){I=t}let T;function Y(t){if(t===null)throw Dt(),Rt;return T=t}function vr(){return Y(C(T))}function pr(t){if(I){if(C(T)!==null)throw Dt(),Rt;T=t}}function hr(t=1){if(I){for(var n=t,r=T;n--;)r=C(r);T=r}}function dr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===sn||r===un)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,vn,pn,It,Ot;function Er(){if(dt===void 0){dt=window,vn=document,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=vt(n,"firstChild").get,Ot=vt(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return It.call(t)}function C(t){return Ot.call(t)}function wr(t,n){if(!I)return st(t);var r=st(T);if(r===null)r=T.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),Y(e),e}return Y(r),r}function yr(t,n){if(!I){var r=st(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function gr(t,n=1,r=!1){let e=I?T:t;for(var l;n--;)l=e,e=C(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=lt();return e===null?l==null||l.after(s):e.before(s),Y(s),s}return Y(e),e}function Tr(t){t.textContent=""}function Nt(t){var n=g|k,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=mt,{ctx:o,deps:null,effects:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function mr(t){const n=Nt(t);return n.equals=xt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function dn(t){var n,r=f;z(hn(t));try{Ct(t),n=Gt(t)}finally{z(r)}return n}function bt(t){var n=dn(t),r=(D||(t.f&w)!==0)&&t.deps!==null?N:v;m(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function Pt(t){f===null&&u===null&&rn(),u!==null&&(u.f&w)!==0&&f===null&&nn(),H&&tn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{et(a),a.f|=Xt}catch(_){throw O(a),_}else n!==null&&at(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|V))===0;if(!s&&e&&(l!==null&&En(a,l),u!==null&&(u.f&g)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function wn(t){const n=F(J,null,!1);return m(n,v),n.teardown=t,n}function Ar(t){Pt();var n=f!==null&&(f.f&R)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ft(t);return e}}function xr(t){return Pt(),_t(t)}function Rr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ft(t){return F(gt,t,!1)}function Dr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=_t(()=>{t(),!e.ran&&(e.ran=!0,_n(r.l.r2,!0),bn(n))})}function kr(){var t=o;_t(()=>{if(Kt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&m(r,N),M(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function _t(t){return F(J,t,!0)}function Sr(t,n=[],r=Nt){const e=n.map(r);return yn(()=>t(...e.map(Kt)))}function yn(t,n=0){return F(J|ot|n,t,!0)}function Ir(t,n=!0){return F(J|R,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=H,e=u;wt(!0),Z(null);try{n.call(null)}finally{wt(r),Z(e)}}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:O(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&Jt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),X(t,0),m(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Mt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Yt(t,r,!0),mn(r,()=>{O(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&Tt)!==0||(e.f&R)!==0;Yt(e,n,a?r:!1),e=l}}}function Or(t){jt(t,!0)}function jt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&v)===0&&(t.f^=v),M(t)&&(m(t,k),at(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&R)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let j=[],ut=[];function Ht(){var t=j;j=[],yt(t)}function An(){var t=ut;ut=[],yt(t)}function Nr(t){j.length===0&&queueMicrotask(Ht),j.push(t)}function Et(){j.length>0&&Ht(),ut.length>0&&An()}let U=!1,$=!1,K=null,S=!1,H=!1;function wt(t){H=t}let L=[];let u=null,y=!1;function Z(t){u=t}let f=null;function z(t){f=t}let x=null;function xn(t){x=t}let c=null,d=0,E=null;function Rn(t){E=t}let Bt=1,W=0,D=!1;function Ut(){return++Bt}function M(t){var p;var n=t.f;if((n&k)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&G)!==0,i=e&&f!==null&&!D,_=r.length;if(s||i){var A=t,B=A.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(A)))&&(a.reactions??(a.reactions=[])).push(A);s&&(A.f^=G),i&&B!==null&&(B.f&w)===0&&(A.f^=w)}for(l=0;l<_;l++)if(a=r[l],M(a)&&bt(a),a.wv>t.wv)return!0}(!e||f!==null&&!D)&&m(t,v)}return!1}function Dn(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),kn(n))throw t;return}r!==null&&(U=!0);{Dn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?Vt(a,n,!1):n===a&&(r?m(a,k):(a.f&v)!==0&&m(a,N),at(a))}}function Gt(t){var ct;var n=c,r=d,e=E,l=u,a=D,s=x,i=o,_=y,A=t.f;c=null,d=0,E=null,D=(A&w)!==0&&(y||!S||u===null),u=(A&(R|P))===0?t:null,x=null,ht(t.ctx),y=!1,W++;try{var B=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(X(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!D)for(h=d;h<p.length;h++)((ct=p[h]).reactions??(ct.reactions=[])).push(t)}else p!==null&&d<p.length&&(X(t,d),p.length=d);if(nt()&&E!==null&&!y&&p!==null&&(t.f&(g|N|k))===0)for(h=0;h<E.length;h++)Vt(E[h],t);return l!==null&&(W++,E!==null&&(e===null?e=E:e.push(...E))),B}finally{c=n,d=r,E=e,u=l,D=a,x=s,ht(i),y=_}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(m(n,N),(n.f&(w|G))===0&&(n.f^=G),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function et(t){var n=t.f;if((n&Q)===0){m(t,v);var r=f,e=o,l=S;f=t,S=!0;try{(n&ot)!==0?gn(t):Lt(t),Mt(t);var a=Gt(t);t.teardown=typeof a=="function"?a:null,t.wv=Bt;var s=t.deps,i}catch(_){rt(_,t,r,e||t.ctx)}finally{S=l,f=r}}}function In(){try{en()}catch(t){if(K!==null)rt(t,K,null);else throw t}}function $t(){var t=S;try{var n=0;for(S=!0;L.length>0;){n++>1e3&&In();var r=L,e=r.length;L=[];for(var l=0;l<e;l++){var a=Nn(r[l]);On(a)}}}finally{$=!1,S=t,K=null,q.clear()}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|b))===0)try{M(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function at(t){$||($=!0,queueMicrotask($t));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|R))!==0){if((r&v)===0)return;n.f^=v}}L.push(n)}function Nn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(R|P))!==0,a=l&&(e&v)!==0;if(!a&&(e&b)===0){if((e&gt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,M(r)&&et(r)}catch(A){rt(A,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Cn(t){var n;for(Et();L.length>0;)$=!0,$t(),Et();return n}async function Cr(){await Promise.resolve(),Cn()}function Kt(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){x!==null&&x.includes(t)&&an();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&w)===0&&(l.f^=w)}return r&&(l=t,M(l)&&bt(l)),H&&q.has(t)?q.get(t):t.v}function bn(t){var n=y;try{return y=!0,t()}finally{y=n}}const Pn=-7169;function m(t,n){t.f=t.f&Pn|n}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{vn as $,fr as A,gr as B,yr as C,Sr as D,Tt as E,or as F,wr as G,sn as H,pr as I,hr as J,mr as K,Dr as L,kr as M,_r as N,Qt as O,tt as P,lt as Q,st as R,fn as S,b as T,sr as U,Mn as V,f as W,cn as X,it as Y,Fn as Z,Xn as _,vr as a,Yt as a0,Tr as a1,mn as a2,O as a3,Wn as a4,Jn as a5,C as a6,Vn as a7,ur as a8,Wt as a9,rr as aA,Un as aB,tr as aC,Qn as aD,er as aE,Cn as aF,ir as aG,Cr as aH,zt as aa,Z as ab,z as ac,u as ad,Jt as ae,pn as af,ar as ag,lr as ah,Er as ai,Rt as aj,Dt as ak,Gn as al,Rr as am,pt as an,qn as ao,Yn as ap,Zn as aq,vt as ar,Kn as as,Ft as at,_t as au,Nr as av,$n as aw,Bn as ax,nr as ay,xt as az,yn as b,un as c,cr as d,Or as e,Ir as f,T as g,I as h,Ln as i,Kt as j,_n as k,o as l,on as m,jn as n,Ar as o,Tn as p,yt as q,dr as r,Y as s,wn as t,xr as u,bn as v,Hn as w,br as x,Nt as y,zn as z};
