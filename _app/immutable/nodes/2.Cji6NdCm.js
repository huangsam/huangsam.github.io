import{s as j,n as m}from"../chunks/scheduler.CtbWrGNo.js";import{S as D,i as S,e as v,s as y,c as p,a as k,g as H,f as b,d as _,m as u,h as P,j as o,p as V,t as q,b as w}from"../chunks/index.CV0V03XC.js";import{e as z,s as A}from"../chunks/index.-Yr8GGDG.js";const M=""+new URL("../assets/profile.HIXssPhj.jpg",import.meta.url).href;function T(n,e,s){const a=n.slice();return a[0]=e[s].name,a[1]=e[s].url,a}function R(n){let e,s;return{c(){e=v("a"),s=q(n[0]),this.h()},l(a){e=p(a,"A",{id:!0,href:!0,class:!0});var i=k(e);s=w(i,n[0]),i.forEach(_),this.h()},h(){u(e,"id",n[0].toLowerCase()),u(e,"href",n[1]),u(e,"class","social svelte-enx30f")},m(a,i){P(a,e,i),o(e,s)},p:m,d(a){a&&_(e)}}}function U(n){let e,s,a="Sam Huang",i,f,E="Engineer at day. Artist at night.",g,c,I=`<img class="profile svelte-enx30f" src="${M}" alt="profile"/>`,x,d,L=z(A),r=[];for(let t=0;t<L.length;t+=1)r[t]=R(T(n,L,t));return{c(){e=v("div"),s=v("h1"),s.textContent=a,i=y(),f=v("p"),f.textContent=E,g=y(),c=v("div"),c.innerHTML=I,x=y(),d=v("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var l=k(e);s=p(l,"H1",{"data-svelte-h":!0}),H(s)!=="svelte-cgsvdk"&&(s.textContent=a),i=b(l),f=p(l,"P",{"data-svelte-h":!0}),H(f)!=="svelte-mgghzq"&&(f.textContent=E),g=b(l),c=p(l,"DIV",{class:!0,"data-svelte-h":!0}),H(c)!=="svelte-8hxzsp"&&(c.innerHTML=I),x=b(l),d=p(l,"DIV",{class:!0});var h=k(d);for(let C=0;C<r.length;C+=1)r[C].l(h);h.forEach(_),l.forEach(_),this.h()},h(){u(c,"class","profile svelte-enx30f"),u(d,"class","social svelte-enx30f"),u(e,"class","banner svelte-enx30f")},m(t,l){P(t,e,l),o(e,s),o(e,i),o(e,f),o(e,g),o(e,c),o(e,x),o(e,d);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(d,null)},p:m,i:m,o:m,d(t){t&&_(e),V(r,t)}}}class F extends D{constructor(e){super(),S(this,e,null,U,j,{})}}export{F as component};