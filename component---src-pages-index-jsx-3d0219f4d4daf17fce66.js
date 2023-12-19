"use strict";(self.webpackChunkhuangsam_github_io=self.webpackChunkhuangsam_github_io||[]).push([[230],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=n(c)===c&&r(c)!==c,l=s,s=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return L},P:function(){return k},_:function(){return l},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return g},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function g(e,t,a,n,r,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=l(e,m);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:o}=e,c=l(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,y);const o=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,s({},i,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,E);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const L=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:i().object.isRequired,alt:I},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],R=new Set;let O,_;const j=function(e){let{as:t="div",image:r,style:i,backgroundColor:c,className:d,class:g,onStartLoad:m,onLoad:p,onError:h}=e,f=l(e,$);const{width:y,height:b,layout:v}=r,w=u(y,b,v),{style:E,className:k}=w,L=l(w,T),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(d=g);const x=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(v,y,b);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(S);if(_&&R.has(S))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:R.has(S),image:r},f)),R.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=l(C.current,S,R,i,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{R.has(S)&&_&&(C.current.innerHTML=_(s({isLoading:R.has(S),isLoaded:R.has(S),image:r},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:c}),className:`${k}${d?` ${d}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));q.propTypes=N,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:r,__error:i}=t,o=l(t,A);return i&&console.warn(i),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const P=M((function(e){let{as:t="div",className:a,class:r,style:i,image:o,loading:c="lazy",imgClassName:m,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=s({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:w,height:E,layout:I,images:N,placeholder:$,backgroundColor:T}=o,R=u(w,E,I),{style:O,className:_}=R,j=l(R,S),q={fallback:void 0,sources:[]};return N.fallback&&(q.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?x(N.fallback.srcSet):void 0})),N.sources&&(q.sources=N.sources.map((e=>s({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,s({},j,{style:s({},O,i,{backgroundColor:f}),className:`${_}${a?` ${a}`:""}`}),n.createElement(h,{layout:I,width:w,height:E},n.createElement(k,s({},g($,!1,I,w,E,T,y,b))),n.createElement(L,s({"data-gatsby-image-ssr":"",className:m},v,d("eager"===c,!1,q,c,p)))))})),z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:I,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=F;const H=M(q);H.displayName="StaticImage",H.propTypes=F},2059:function(e,t,a){var n=a(7294),r=a(4160);t.Z=function(e){let{description:t,lang:a,meta:i,title:s}=e;const{site:l}=(0,r.K2)("63159454"),o=l.siteMetadata.description,c=l.siteMetadata.title,u=t||o,d=s?`${c} | ${s}`:c;return n.createElement(n.Fragment,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{name:"author",content:l.siteMetadata.author}),n.createElement("meta",{name:"og:title",content:d}),n.createElement("meta",{name:"og:description",content:u}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("title",null,d))}},610:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return o}});var n=a(7294),r=a(8032),i=a(9583),s=a(2059);const l={facebook:i.R9i,github:i.hJX,linkedin:i.ltd,twitter:i.N1v,wordpress:i.k7O};function o(e){let{data:t}=e;const a=[];for(const r of t.site.siteMetadata.social)a.push(n.createElement("a",{key:r.name,alt:r.name,href:r.url},n.createElement(l[r.name])));const i=(0,r.c)(t.profile);return n.createElement("div",null,n.createElement("div",{style:{textAlign:"center",margin:"0 auto"}},n.createElement("h1",null,"Sam Huang"),n.createElement("p",null,"Software Engineer at day. Artist at night."),n.createElement(r.G,{image:i,alt:"",style:{width:"18.75rem",height:"18.75rem",marginBottom:"1.50rem",marginLeft:"auto",marginRight:"auto",borderRadius:"25%"}}),n.createElement("div",{className:"social"},a)))}const c=()=>n.createElement(s.Z,{title:"Home"})}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3d0219f4d4daf17fce66.js.map