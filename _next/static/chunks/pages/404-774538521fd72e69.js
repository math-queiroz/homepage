(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return f}});var t=r(6052),i=r(5031),l=r(7294),a=r(7375);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=l.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=c(e,s);return l.createElement("img",o({width:r,height:t,ref:n,alt:i},a))})),f=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,s=e.fallback,f=e.src,h=e.srcSet,g=e.align,x=e.fit,m=e.loading,b=e.ignoreFallback,p=e.crossOrigin,j=c(e,u),v=null!=m||b||void 0===r&&void 0===s,y=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,o=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),f=d[0],h=d[1];(0,l.useEffect)((function(){h(r?"loading":"pending")}),[r]);var g=(0,l.useRef)(),x=(0,l.useCallback)((function(){if(r){m();var e=new Image;e.src=r,c&&(e.crossOrigin=c),t&&(e.srcset=t),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){m(),h("loaded"),null==i||i(e)},e.onerror=function(e){m(),h("failed"),null==o||o(e)},g.current=e}}),[r,c,t,s,i,o,n]),m=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,a.Gw)((function(){if(!u)return"loading"===f&&x(),function(){m()}}),[f,x,u]),u?"loaded":f}(o({},e,{ignoreFallback:v})),k=o({ref:n,objectFit:x,objectPosition:g},v?j:(0,i.CE)(j,["onError","onLoad"]));return"loaded"!==y?s||l.createElement(t.m$.img,o({as:d,className:"chakra-image__placeholder",src:r},k)):l.createElement(t.m$.img,o({as:d,src:f,srcSet:h,crossOrigin:p,loading:m,className:"chakra-image"},k))}));i.Ts&&(f.displayName="Image")},2448:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(1635)}])},8462:function(e,n,r){"use strict";var t=r(5893),i=r(8527);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}n.Z=function(e){var n=e.children,r=e.id,l=e.style;return(0,t.jsx)(i.xu,{id:r,style:a({display:"flex",flexDirection:"column",height:"calc(100vh - 190px)",width:"100vw",alignItems:"center",justifyContent:"center"},l),children:n})}},603:function(e,n,r){"use strict";r.d(n,{J:function(){return s},P:function(){return u}});var t=r(5893),i=r(1664),l=r(3319),a=r(8527),o=r(4651),c=r(917),s=function(e){var n=e.children,r=e.id,c=e.title,s=e.thumbnail;return(0,t.jsx)(l.E.div,{w:"100%",align:"center",whileHover:{scale:1.025},children:(0,t.jsx)(i.default,{href:"/projects/".concat(r),scroll:!1,children:(0,t.jsxs)(a.fG,{cursor:"pointer",children:[(0,t.jsx)(o.Ee,{src:s,alt:c,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(a.AB,{href:"/projects/".concat(r),target:"_blank",children:(0,t.jsx)(a.xv,{mt:2,fontSize:20,fontWeight:550,children:c})}),(0,t.jsx)(a.xv,{fontSize:14,children:n})]})})})},u=function(){return(0,t.jsx)(c.xB,{styles:"\n    .grid-item-thumbnail {\n        border: #88888844 4px solid !important;\n        border-radius: 4px;\n    }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(9008),l=r(3319),a=r(603),o={hidden:{opacity:0,x:50,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-50,y:0}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(l.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easyInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:r})}),n,(0,t.jsx)(a.P,{})]})})}},1635:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(1664),l=r(8527),a=r(949),o=r(5193),c=r(8462),s=r(2857);n.default=function(){return(0,t.jsx)(s.Z,{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(l.X6,{as:"h1",align:"center",children:(0,t.jsx)(l.xv,{fontFamily:"Secular One",fontSize:"5em",mb:-16,style:{backgroundImage:(0,a.ff)("linear-gradient(to bottom, #000000 25%, #00000000 75%)","linear-gradient(to bottom, #ffffff 25%, #00000000 75%)"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",WebkitUserSelect:"none",MsUserSelect:"none",userSelect:"none"},children:"404"})}),(0,t.jsx)(l.X6,{mb:1,style:{fontFamily:"Secular One"},children:"Oops!"}),(0,t.jsx)(l.xv,{children:"A p\xe1gina que voc\xea procura n\xe3o est\xe1 dispon\xedvel."}),(0,t.jsx)(l.iz,{borderColor:(0,a.ff)("blackAlpha.300","whiteAlpha.400"),width:150,my:6}),(0,t.jsxs)(l.xu,{align:"center",children:[(0,t.jsx)("small",{children:(0,t.jsx)("i",{children:(0,t.jsx)(l.xv,{children:"Nem tudo que reluz \xe9 ouro, nem todos que vagueiam est\xe3o perdidos. Mas dessa vez, n\xe3o h\xe1 nada a explorar por aqui..."})})}),(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)(o.zx,{my:10,bg:"indianred",color:"white",children:"Voltar ao In\xedcio"})})]})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=2448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);