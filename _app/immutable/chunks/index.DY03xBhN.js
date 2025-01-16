import{z as F,A as J,h as m,B as M,a as U,C as X,g as H,H as q,D as O,E as L,F as I,G as z,I as C,J as W,K as Y,L as Q,M as B,N as b,O as Z,P as $,Q as j,R as ee,S as re,T as ae,U as ne,m as se,V as D,W as te,X as ie,Y as le,Z as fe,_ as oe,a0 as ue,a1 as ce,a2 as ve}from"./runtime.Cr9plavz.js";function ye(a,e){return e}function he(a,e,r,l){for(var f=[],o=e.length,c=0;c<o;c++)$(e[c].e,f,!0);var g=o>0&&f.length===0&&r!==null;if(g){var h=r.parentNode;j(h),h.append(r),l.clear(),w(a,e[0].prev,e[o-1].next)}ee(f,()=>{for(var v=0;v<o;v++){var _=e[v];g||(l.delete(_.k),w(a,_.prev,_.next)),re(_.e,!g)}})}function Ee(a,e,r,l,f,o=null){var c=a,g={flags:e,items:new Map,first:null};{var h=a;c=m?M(X(h)):h.appendChild(F())}m&&U();var v=null,_=!1,n=ae(()=>{var u=r();return ie(u)?u:u==null?[]:B(u)});J(()=>{var u=H(n),s=u.length;if(_&&s===0)return;_=s===0;let t=!1;if(m){var p=c.data===q;p!==(s===0)&&(c=O(),M(c),L(!1),t=!0)}if(m){for(var T=null,y,i=0;i<s;i++){if(I.nodeType===8&&I.data===z){c=I,t=!0,L(!1);break}var d=u[i],N=l(d,i);y=K(I,g,T,null,d,N,i,f,e),g.items.set(N,y),T=y}s>0&&M(O())}if(!m){var A=ne;_e(u,g,c,f,e,(A.f&C)!==0,l)}o!==null&&(s===0?v?W(v):v=Y(()=>o(c)):v!==null&&Q(v,()=>{v=null})),t&&L(!0),H(n)}),m&&(c=I)}function _e(a,e,r,l,f,o,c,g){var h=a.length,v=e.items,_=e.first,n=_,u,s=null,t=[],p=[],T,y,i,d;for(d=0;d<h;d+=1){if(T=a[d],y=c(T,d),i=v.get(y),i===void 0){var N=n?n.e.nodes_start:r;s=K(N,e,s,s===null?e.first:s.next,T,y,d,l,f),v.set(y,s),t=[],p=[],n=s.next;continue}if(de(i,T,d),i.e.f&C&&W(i.e),i!==n){if(u!==void 0&&u.has(i)){if(t.length<p.length){var A=p[0],E;s=A.prev;var R=t[0],x=t[t.length-1];for(E=0;E<t.length;E+=1)S(t[E],A,r);for(E=0;E<p.length;E+=1)u.delete(p[E]);w(e,R.prev,x.next),w(e,s,R),w(e,x,A),n=A,s=x,d-=1,t=[],p=[]}else u.delete(i),S(i,n,r),w(e,i.prev,i.next),w(e,i,s===null?e.first:s.next),w(e,s,i),s=i;continue}for(t=[],p=[];n!==null&&n.k!==y;)(o||!(n.e.f&C))&&(u??(u=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;i=n}t.push(i),s=i,n=i.next}if(n!==null||u!==void 0){for(var k=u===void 0?[]:B(u);n!==null;)(o||!(n.e.f&C))&&k.push(n),n=n.next;var P=k.length;if(P>0){var V=h===0?r:null;he(e,k,V,v)}}b.first=e.first&&e.first.e,b.last=s&&s.e}function de(a,e,r,l){Z(a.v,e),a.i=r}function K(a,e,r,l,f,o,c,g,h,v){var _=(h&le)!==0,n=(h&fe)===0,u=_?n?se(f):D(f):f,s=h&te?D(c):c,t={i:s,v:u,k:o,a:null,e:null,prev:r,next:l};try{return t.e=Y(()=>g(a,u,s),m),t.e.prev=r&&r.e,t.e.next=l&&l.e,r===null?e.first=t:(r.next=t,r.e.next=t.e),l!==null&&(l.prev=t,l.e.prev=t.e),t}finally{}}function S(a,e,r){for(var l=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,o=a.e.nodes_start;o!==l;){var c=oe(o);f.before(o),o=c}}function w(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function me(a,e,r,l){var f=a.__attributes??(a.__attributes={});m&&(f[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[ue]=r),r==null?a.removeAttribute(e):typeof r!="string"&&ge(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var G=new Map;function ge(a){var e=G.get(a.nodeName);if(e)return e;G.set(a.nodeName,e=[]);for(var r,l=a,f=Element.prototype;f!==l;){r=ve(l);for(var o in r)r[o].set&&e.push(o);l=ce(l)}return e}const we=[{name:"GitHub",url:"https://github.com/huangsam"},{name:"Facebook",url:"https://facebook.com/samuel.c.huang"},{name:"Linkedin",url:"https://www.linkedin.com/in/sambyte/"},{name:"Wordpress",url:"https://sambyte.wordpress.com/"},{name:"Twitter",url:"https://twitter.com/s_c_huang"}],Te={states:["Oregon","Washington","Nevada","Wyoming","Ohio","Chicago"],countries:["Taiwan","Mexico","Japan","Korea","Italy"]},Ae=[{name:"Glorious Light Christian Church",url:"https://glorious-light.net"},{name:"Echo Church",url:"https://echo.church"}],Ie={company:"Tesla",role:"Software Engineer",org:"Network Engineering"};export{we as a,Ie as b,Ae as c,Ee as e,ye as i,me as s,Te as t};
