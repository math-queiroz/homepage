(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return f}});var t=n(6052),i=n(5031),a=n(7294),c=n(7375);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,c=s(e,l);return a.createElement("img",o({width:n,height:t,ref:r,alt:i},c))})),f=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,l=e.fallback,f=e.src,h=e.srcSet,m=e.align,p=e.fit,x=e.loading,g=e.ignoreFallback,j=e.crossOrigin,v=s(e,u),b=null!=x||g||void 0===n&&void 0===l,y=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,o=e.onError,s=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),p=(0,a.useCallback)((function(){if(n){x();var e=new Image;e.src=n,s&&(e.crossOrigin=s),t&&(e.srcset=t),l&&(e.sizes=l),r&&(e.loading=r),e.onload=function(e){x(),h("loaded"),null==i||i(e)},e.onerror=function(e){x(),h("failed"),null==o||o(e)},m.current=e}}),[n,s,t,l,i,o,r]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===f&&p(),function(){x()}}),[f,p,u]),u?"loaded":f}(o({},e,{ignoreFallback:b})),k=o({ref:r,objectFit:p,objectPosition:m},b?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==y?l||a.createElement(t.m$.img,o({as:d,className:"chakra-image__placeholder",src:n},k)):a.createElement(t.m$.img,o({as:d,src:f,srcSet:h,crossOrigin:j,loading:x,className:"chakra-image"},k))}));i.Ts&&(f.displayName="Image")},7357:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/helpmycar",function(){return n(5527)}])},603:function(e,r,n){"use strict";n.d(r,{J:function(){return l},P:function(){return u}});var t=n(5893),i=n(1664),a=n(3319),c=n(8527),o=n(4651),s=n(917),l=function(e){var r=e.children,n=e.id,s=e.title,l=e.thumbnail;return(0,t.jsx)(a.E.div,{w:"100%",align:"center",whileHover:{scale:1.025},children:(0,t.jsx)(i.default,{href:"/projects/".concat(n),scroll:!1,children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(o.Ee,{src:l,alt:s,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(c.AB,{href:"/projects/".concat(n),target:"_blank",children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,fontWeight:550,children:s})}),(0,t.jsx)(c.xv,{fontSize:14,children:r})]})})})},u=function(){return(0,t.jsx)(s.xB,{styles:"\n    .grid-item-thumbnail {\n        border: #88888844 4px solid !important;\n        border-radius: 4px;\n    }\n    "})}},2857:function(e,r,n){"use strict";var t=n(5893),i=n(9008),a=n(3319),c=n(603),o={hidden:{opacity:0,x:50,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-50,y:0}};r.Z=function(e){var r=e.children,n=e.title;return(0,t.jsx)(a.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easyInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(i.default,{children:(0,t.jsxs)("title",{children:[n," | Matheus Queiroz"]})}),r,(0,t.jsx)(c.P,{})]})})}},3562:function(e,r,n){"use strict";function t(){var e,r,n=(e=["\ntext-align: justify;\ntext-indent: 1em;\nmargin-top: 0.5em;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return t=function(){return n},n}var i=n(5934).Z.p(t());r.Z=i},2734:function(e,r,n){"use strict";n.d(r,{Dx:function(){return u},KZ:function(){return d},h_:function(){return f}});var t=n(5893),i=(n(7294),n(1664)),a=n(8527),c=n(949),o=n(4651),s=n(8485),l=n(8693),u=function(e){var r=e.children;return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(i.default,{href:"/projects",children:(0,t.jsx)(a.rU,{color:"indianred",children:"Projetos"})}),(0,t.jsxs)("span",{children:["\xa0",(0,t.jsx)(s.XC,{}),"\xa0"]}),(0,t.jsx)(a.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r}),(0,t.jsx)(a.iz,{borderColor:(0,c.ff)("blackAlpha.300","whiteAlpha.400"),mb:4})]})},d=function(e){var r=e.src,n=e.alt;return(0,t.jsx)(o.Ee,{borderRadius:"lg",w:"full",src:l.Z+r,alt:n,mb:4})},f=function(e){var r=e.children;return(0,t.jsx)(a.Ct,{colorScheme:"red",mr:2,children:r})}},8693:function(e,r){"use strict";var n;n="/homepage",r.Z=n},5527:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=(n(7294),n(8527)),a=n(2734),c=n(3562),o=n(2857);r.default=function(){return(0,t.jsx)(o.Z,{title:"HelpMyCar",children:(0,t.jsxs)(i.W2,{maxW:"container.md",children:[(0,t.jsxs)(a.Dx,{children:["HelpMyCar ",(0,t.jsx)(i.Ct,{children:"2018"})]}),(0,t.jsx)(c.Z,{children:"HelpMyCar \xe9 uma plataforma que busca atuar estabelecendo uma ponte entre clientes e prestadores de servi\xe7os automotivos, sendo tamb\xe9m um marketplace para pe\xe7as."}),(0,t.jsx)(c.Z,{children:"Origin\xe1rio do programa Startup in School, o projeto teve por objetivo atuar como uma plataforma de an\xfancios e procura de servi\xe7os automotivos que, por exatamente atuar neste ramo espec\xedfico, entregaria maior efic\xe1cia de comunica\xe7\xe3o em rela\xe7\xe3o \xe0 comunica\xe7\xe3o que se vale do uso de m\xeddias sociais que atuem em escopos mais abrangentes."}),(0,t.jsxs)(i.aV,{ml:4,my:6,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Plataformas"}),(0,t.jsx)("span",{children:"Windows, macOS, Linux, iOS e Android"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Feito com"}),(0,t.jsx)("span",{children:"WordPress, BuddyPress"})]})]}),(0,t.jsx)(a.KZ,{src:"/images/works/helpmycar/hmc_landpage.png"}),(0,t.jsx)(a.KZ,{src:"/images/works/helpmycar/hmc_login.png"}),(0,t.jsx)(a.KZ,{src:"/images/works/helpmycar/hmc_mapa.png"})]})})}}},function(e){e.O(0,[774,888,179],(function(){return r=7357,e(e.s=r);var r}));var r=e.O();_N_E=r}]);