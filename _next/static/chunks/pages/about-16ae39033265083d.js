(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return h}});var t=n(6052),i=n(5031),a=n(7294),o=n(7375);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var c=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=a.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,o=l(e,c);return a.createElement("img",s({width:n,height:t,ref:r,alt:i},o))})),h=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,c=e.fallback,h=e.src,f=e.srcSet,m=e.align,p=e.fit,g=e.loading,x=e.ignoreFallback,b=e.crossOrigin,j=l(e,d),v=null!=g||x||void 0===n&&void 0===c,y=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,s=e.onError,l=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,u=(0,a.useState)("pending"),h=u[0],f=u[1];(0,a.useEffect)((function(){f(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),p=(0,a.useCallback)((function(){if(n){g();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){g(),f("loaded"),null==i||i(e)},e.onerror=function(e){g(),f("failed"),null==s||s(e)},m.current=e}}),[n,l,t,c,i,s,r]),g=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.Gw)((function(){if(!d)return"loading"===h&&p(),function(){g()}}),[h,p,d]),d?"loaded":h}(s({},e,{ignoreFallback:v})),w=s({ref:r,objectFit:p,objectPosition:m},v?j:(0,i.CE)(j,["onError","onLoad"]));return"loaded"!==y?c||a.createElement(t.m$.img,s({as:u,className:"chakra-image__placeholder",src:n},w)):a.createElement(t.m$.img,s({as:u,src:h,srcSet:f,crossOrigin:b,loading:g,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},8961:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(6075)}])},603:function(e,r,n){"use strict";n.d(r,{J:function(){return c},P:function(){return d}});var t=n(5893),i=n(1664),a=n(3319),o=n(8527),s=n(4651),l=n(917),c=function(e){var r=e.children,n=e.id,l=e.title,c=e.thumbnail;return(0,t.jsx)(a.E.div,{w:"100%",align:"center",whileHover:{scale:1.025},children:(0,t.jsx)(i.default,{href:"/projects/".concat(n),scroll:!1,children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(s.Ee,{src:c,alt:l,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(o.AB,{href:"/projects/".concat(n),target:"_blank",children:(0,t.jsx)(o.xv,{mt:2,fontSize:20,fontWeight:550,children:l})}),(0,t.jsx)(o.xv,{fontSize:14,children:r})]})})})},d=function(){return(0,t.jsx)(l.xB,{styles:"\n    .grid-item-thumbnail {\n        border: #88888844 4px solid !important;\n        border-radius: 4px;\n    }\n    "})}},2857:function(e,r,n){"use strict";var t=n(5893),i=n(9008),a=n(3319),o=n(603),s={hidden:{opacity:0,x:50,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-50,y:0}};r.Z=function(e){var r=e.children,n=e.title;return(0,t.jsx)(a.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easyInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(i.default,{children:(0,t.jsxs)("title",{children:[n," | Matheus Queiroz"]})}),r,(0,t.jsx)(o.P,{})]})})}},3562:function(e,r,n){"use strict";function t(){var e,r,n=(e=["\ntext-align: justify;\ntext-indent: 1em;\nmargin-top: 0.5em;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return t=function(){return n},n}var i=n(5934).Z.p(t());r.Z=i},7578:function(e,r,n){"use strict";var t=n(5893),i=n(3319),a=n(6052);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var s=(0,a.m$)(i.E.div,{shouldForwardProp:function(e){return(0,a.x9)(e)||"transition"===e}});r.Z=function(e){var r=e.children,n=e.style,i=e.delay,a=void 0===i?0:i,l=e.verticalFadeIn,c=void 0!==l&&l;return(0,t.jsx)(s,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({initial:c?{y:10,opacity:0}:{x:10,opacity:0},animate:{y:0,x:0,opacity:1},transition:{duration:.8,delay:a},mb:6},n,{children:r}))}},8693:function(e,r){"use strict";r.Z="/homepage"},6075:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(1664),a=n(8527),o=n(4651),s=n(949),l=n(894),c=n(2857),d=n(7578),u=n(3562),h=n(155),f=n(8693);r.default=function(){return(0,t.jsx)(c.Z,{title:"Sobre",children:(0,t.jsxs)(a.W2,{mt:6,children:[(0,t.jsxs)(a.xu,{display:{md:"flex"},justifyContent:"center",align:"center",mb:6,children:[(0,t.jsx)(o.Ee,{mr:4,borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",maxWidth:"80px",maxHeight:"80px",display:"inline-block",borderRadius:"full",src:f.Z+"/images/profile.jpg",alt:"profile"}),(0,t.jsxs)(a.xu,{p:1,children:[(0,t.jsx)(a.X6,{as:"h2",variant:"page-title",children:"Matheus Alves Queiroz"}),(0,t.jsx)("p",{children:"Analista e Desenvolvedor de Sistemas"})]})]}),(0,t.jsx)(a.iz,{borderColor:(0,s.ff)("blackAlpha.300","whiteAlpha.400"),mb:12}),(0,t.jsxs)(d.Z,{delay:"0.2",children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Sobre"}),(0,t.jsxs)(u.Z,{children:["Matheus \xe9 um desenvolvedor de softwares da cidade de S\xe3o Paulo nascido em outubro de 2001. Interessado no mundo da tecnologia e em desenvolver solu\xe7\xf5es que entreguem efici\xeancia e praticidade na realiza\xe7\xe3o de tarefas, tem estudado na \xe1rea desde 2016 para construir um repert\xf3rio ferramental de linguagens e"," ",(0,t.jsx)("i",{children:"frameworks"})," que o permitam atingir tal objetivo."]}),(0,t.jsxs)(u.Z,{children:["Ao longo de 2021 teve a oportunidade de aprofundar seus conhecimentos em Angular e SpringBoot durante o desenvolvimento de seu\xa0",(0,t.jsx)(i.default,{href:"/projects/panem",children:(0,t.jsx)(a.rU,{color:"indianred",children:"trabalho de gradua\xe7\xe3o"})}),"\xa0. Al\xe9m disso, est\xe1 sempre se aventurando em novos projetos envolvendo Python, React e afins."]}),(0,t.jsx)(u.Z,{children:"Quando n\xe3o est\xe1 na internet, costuma passar o tempo com amigos, lendo livros e buscando sempre ensinar e aprender com as pessoas a seu redor."})]}),(0,t.jsxs)(d.Z,{delay:"0.6",children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Redes"}),(0,t.jsxs)(a.aV,{children:[(0,t.jsx)(a.HC,{mb:1,children:(0,t.jsxs)(a.rU,{target:"_blank",href:"https://github.com/math-queiroz",children:[(0,t.jsx)(l.JO,{as:h.JOq,mr:2}),"Github"]})}),(0,t.jsx)(a.HC,{mb:1,children:(0,t.jsxs)(a.rU,{target:"_blank",href:"https://www.linkedin.com/in/matheus-alves-queiroz-044ba5223/",children:[(0,t.jsx)(l.JO,{as:h.gXb,mr:2}),"Linkedin"]})})]})]}),(0,t.jsxs)(d.Z,{delay:"0.9",children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Sobre Este Site"}),(0,t.jsxs)(u.Z,{children:["Desenvolvido com Next.JS, grande parte da confec\xe7\xe3o deste site s\xf3 foi poss\xedvel a partir do\xa0",(0,t.jsx)(a.rU,{href:"https://youtu.be/bSMZgXzC9AA",color:"indianred",children:"v\xeddeo"}),"\xa0disponibilizado por"," ",(0,t.jsx)(a.rU,{href:"https://www.craftz.dog",children:(0,t.jsx)("b",{children:"@devaslife"})}),"."]})]})]})})}}},function(e){e.O(0,[774,888,179],(function(){return r=8961,e(e.s=r);var r}));var r=e.O();_N_E=r}]);