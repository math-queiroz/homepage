(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5542)}])},603:function(e,n,t){"use strict";t.d(n,{J:function(){return c},P:function(){return d}});var i=t(5893),r=t(1664),a=t(3319),o=t(8527),s=t(4651),l=t(917),c=function(e){var n=e.children,t=e.id,l=e.title,c=e.thumbnail;return(0,i.jsx)(a.E.div,{w:"100%",align:"center",whileHover:{scale:1.025},children:(0,i.jsx)(r.default,{href:"/projects/".concat(t),scroll:!1,children:(0,i.jsxs)(o.fG,{cursor:"pointer",children:[(0,i.jsx)(s.Ee,{src:c,alt:l,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,i.jsx)(o.AB,{href:"/projects/".concat(t),target:"_blank",children:(0,i.jsx)(o.xv,{mt:2,fontSize:20,fontWeight:550,children:l})}),(0,i.jsx)(o.xv,{fontSize:14,children:n})]})})})},d=function(){return(0,i.jsx)(l.xB,{styles:"\n    .grid-item-thumbnail {\n        border: #88888844 4px solid !important;\n        border-radius: 4px;\n    }\n    "})}},2857:function(e,n,t){"use strict";var i=t(5893),r=t(9008),a=t(3319),o=t(603),s={hidden:{opacity:0,x:50,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-50,y:0}};n.Z=function(e){var n=e.children,t=e.title;return(0,i.jsx)(a.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easyInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(r.default,{children:(0,i.jsxs)("title",{children:[t," | Matheus Queiroz"]})}),n,(0,i.jsx)(o.P,{})]})})}},3562:function(e,n,t){"use strict";function i(){var e,n,t=(e=["\ntext-align: justify;\ntext-indent: 1em;\nmargin-top: 0.5em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return i=function(){return t},t}var r=t(5934).Z.p(i());n.Z=r},7578:function(e,n,t){"use strict";var i=t(5893),r=t(3319),a=t(6052);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=(0,a.m$)(r.E.div,{shouldForwardProp:function(e){return(0,a.x9)(e)||"transition"===e}});n.Z=function(e){var n=e.children,t=e.style,r=e.delay,a=void 0===r?0:r,l=e.verticalFadeIn,c=void 0!==l&&l;return(0,i.jsx)(s,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({initial:c?{y:10,opacity:0}:{x:10,opacity:0},animate:{y:0,x:0,opacity:1},transition:{duration:.8,delay:a},mb:6},t,{children:n}))}},8693:function(e,n){"use strict";var t;t="/homepage",n.Z=t},5542:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var i=t(5893),r=t(8527),a=t(894),o=t(3319),s=t(6261),l=t(5459),c=t.n(l),d=t(2857),u=t(7294),h=t(2212),f=t(6052),x=t(9238);function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];p(this,e),m(this,"mesh",null),this.geometry=n,this.animate=i,this.initialConfig=t,this.isDashed=r},j=[new v(new h.DvJ(1,1,1),(function(e){return e.position.set(-4,0,0)}),(function(e,n){e.rotation.x+=.01,e.rotation.y+=.003,e.position.y=1.5+Math.sin(n)/4}),!0),new v(new h.cJO(1.2),(function(e){return e.position.set(4,0,0)}),(function(e,n){e.rotation.x-=.008,e.rotation.y+=.002,e.position.y=1.9+Math.sin(1.6*n+4)/4}),!0),new v(new h.b_z(.7,1,3),(function(e){e.position.set(3,0,0),e.rotation.z=Math.PI/2}),(function(e,n){e.rotation.x+=.01,e.position.y=Math.sin(.6*n-4)/4-.5}),!0),new v(new h.xo$(.05),(function(e){return e.position.set(-1.3,0,0)}),(function(e,n){return e.position.y=1.75+Math.sin(n+3)/10})),new v(new h.DvJ(.1,.1,.1),(function(e){return e.position.set(1,0,0)}),(function(e,n){e.rotation.z+=.01,e.rotation.x+=.006,e.position.y=Math.sin(.8*n)/5-1.25})),new v(new h.DvJ(.25,.05,.05),(function(e){return e.position.set(-3,0,0)}),(function(e,n){e.rotation.z+=.01,e.rotation.x+=.006,e.position.y=Math.sin(n+2)/10-.75})),new v(new h.DvJ(.05,.25,.05),(function(e){return e.position.set(-3,0,0)}),(function(e,n){e.rotation.z+=.01,e.rotation.x+=.006,e.position.y=Math.sin(n+2)/10-.75}))];function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){y(e,n,t[n])}))}return e}var b=(0,f.m$)(o.E.div,{shouldForwardProp:function(e){return(0,f.x9)(e)||"transition"===e}}),w=function(e){var n=(0,u.useRef)(null),t=(0,u.useState)(!0),r=t[0],a=t[1],o=(0,u.useState)(),s=o[0],l=o[1],c=(0,u.useState)(),d=c[0],f=c[1],p=(0,u.useState)(new h.Pa4(0,.35,8))[0],m=(0,u.useState)(new h.xsS)[0],v=(0,u.useState)(j)[0],y=(0,u.useCallback)((function(){var e=n.current;if(e&&s){var t=e.clientWidth,i=e.clientHeight;d.aspect=t/i,d.updateProjectionMatrix(),s.setSize(t,i)}}),[d,s]);return(0,u.useEffect)((function(){var e=n.current;if(e&&!s){var t=e.clientWidth,i=e.clientHeight,r=new h.CP7({antialias:!1,alpha:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(t,i),r.outputEncoding=h.knz,e.appendChild(r.domElement),l(r);var o=t/i,c=new h.cPb(65,o);c.position.copy(p),f(c);var d=new h.vBJ({color:11221819}),u=new h.FT0({color:4539717,dashSize:.1,gapSize:.05}),x=!0,j=!1,y=void 0;try{for(var g,b=v[Symbol.iterator]();!(x=(g=b.next()).done);x=!0){var w=g.value;w.isDashed?(w.mesh=new h.ejS(new h.TOt(w.geometry),u),w.mesh.computeLineDistances()):w.mesh=new h.Kj0(w.geometry,d),w.initialConfig(w.mesh),m.add(w.mesh)}}catch(z){j=!0,y=z}finally{try{x||null==b.return||b.return()}finally{if(j)throw y}}a(!1);var S=null,C=0,O=function(){S=requestAnimationFrame(O),C+=.025;var e=!0,n=!1,t=void 0;try{for(var i,a=v[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;o.animate(o.mesh,C)}}catch(z){n=!0,t=z}finally{try{e||null==a.return||a.return()}finally{if(n)throw t}}r.render(m,c)};return O(),function(){cancelAnimationFrame(S),r.dispose()}}}),[]),(0,u.useEffect)((function(){return window.addEventListener("resize",y,!1),function(){return window.removeEventListener("resize",y,!1)}}),[s,y]),(0,i.jsx)(b,{ref:n,className:"background-scene",style:g({position:"absolute",top:-104,zIndex:-1},e.style),width:"100%",height:"100vh",initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{opacity:0},transition:{duration:.75,type:"easyInOut"},children:r&&(0,i.jsx)(x.$,{size:"xl",position:"absolute",left:"50%",top:"30%",ml:"calc(0px - var(--spinner-size) / 2)",mt:"calc(0px - var(--spinner-size) / 2)"})})},S=t(4651),C=t(949),O=t(3562),z=t(7578),E=t(8693),P=function(){return(0,i.jsxs)(r.W2,{id:"landpage-info-container",children:[(0,i.jsxs)(z.Z,{delay:1.2,children:[(0,i.jsxs)(r.xu,{align:"center",mt:10,children:[(0,i.jsx)(S.Ee,{borderColor:"indianred",borderWidth:3,borderStyle:"solid",maxWidth:"110px",display:"inline-block",borderRadius:"full",src:E.Z+"/images/profile.jpg",alt:"profile"}),(0,i.jsx)(r.X6,{color:"indianred",align:"center",as:"h2",letterSpacing:".15rem",variant:"page-title",children:"Matheus Alves Queiroz"}),(0,i.jsx)("p",{children:"Analista e Desenvolvedor de Sistemas"})]}),(0,i.jsx)(r.xu,{borderRadius:"lg",bg:(0,C.ff)("blackAlpha.200","whiteAlpha.200"),my:10,p:3,align:"center",children:"Simples mas em constante movimento."}),(0,i.jsx)(r.X6,{as:"h3",variant:"section-title",children:"Bio"}),(0,i.jsx)(O.Z,{children:"Tenho 20 anos e sou um estudante de An\xe1lise e Desenvolvimento de Sistemas em busca de uma oportunidade profissional para dar in\xedcio \xe0 minha carreira em tecnologia."})]}),(0,i.jsxs)(z.Z,{delay:1.5,children:[(0,i.jsx)(r.X6,{as:"h3",variant:"section-title",children:"Compet\xeancias"}),(0,i.jsxs)(r.aV,{display:"inline-grid",minWidth:"225px",children:[(0,i.jsx)(r.xv,{fontWeight:"bold",children:"Hard Skills"}),(0,i.jsx)(r.HC,{children:"JavaScript"}),(0,i.jsx)(r.HC,{children:"HTML/CSS"}),(0,i.jsx)(r.HC,{children:"Java"}),(0,i.jsx)(r.HC,{children:"SQL"}),(0,i.jsx)(r.HC,{children:"Python"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.xv,{fontWeight:"bold",children:"Idiomas"}),(0,i.jsx)(r.HC,{children:"Ingl\xeas - Intermedi\xe1rio"}),(0,i.jsx)("br",{})]}),(0,i.jsxs)(r.aV,{display:"inline-grid",minWidth:"225px",children:[(0,i.jsx)(r.xv,{fontWeight:"bold",children:"Soft Skill"}),(0,i.jsx)(r.HC,{children:"Trabalho em Equipe"}),(0,i.jsx)(r.HC,{children:"Comunica\xe7\xe3o Clara"}),(0,i.jsx)(r.HC,{children:"Adaptabilidade"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.xv,{fontWeight:"bold",children:"Outras Compet\xeancias"}),(0,i.jsx)(r.HC,{children:"Git"}),(0,i.jsx)(r.HC,{children:"Microsoft Office"}),(0,i.jsx)(r.HC,{children:"Ambiente Linux"})]})]}),(0,i.jsxs)(z.Z,{delay:1.8,children:[(0,i.jsx)(r.X6,{as:"h3",variant:"section-title",mb:"1em",children:"Forma\xe7\xe3o Acad\xeamica"}),(0,i.jsxs)(r.xu,{ml:4,children:[(0,i.jsx)(r.X6,{as:"h5",fontSize:18,children:"FATEC Ipiranga - Pastor En\xe9as Tognini"}),(0,i.jsx)(r.xv,{children:"An\xe1lise e Desenvolvimento de Sistemas - Cursando atualmente"}),(0,i.jsx)(r.X6,{as:"h5",fontSize:18,mt:"1em",children:"ETEC Professor Camargo Aranha - 2018"}),(0,i.jsx)(r.xv,{children:"T\xe9cnico em Inform\xe1tica - Cursado de 2016 a 2018"})]})]})]})},H=t(1649),I=function(){return(0,i.jsxs)(d.Z,{title:"In\xedcio",children:[(0,i.jsx)(w,{}),(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(r.W2,{id:"landpage-header-container",style:{display:"flex",height:"calc(100vh - 190px)",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)(r.xu,{align:"center",children:[(0,i.jsxs)(r.X6,{as:"h1",style:{fontFamily:"Secular One",letterSpacing:".15rem",wordSpacing:".3rem"},children:[(0,i.jsx)("span",{style:{color:"indianred"},children:"Matheus"})," Queiroz"]}),(0,i.jsx)(z.Z,{delay:.3,verticalFadeIn:!0,children:(0,i.jsx)(c(),{onInit:function(e){e.changeDeleteSpeed(32).typeString("T\xe9cnico em Inform\xe1tica").pauseFor(2e3).deleteAll().typeString("Analista e Desenvolvedor de Sistemas").start()}})})]})}),(0,i.jsx)(r.W2,{style:{display:"flex",justifyContent:"center",flexDirection:"row"},children:(0,i.jsx)(z.Z,{delay:.9,style:{align:"center",margin:0},verticalFadeIn:!0,children:(0,i.jsx)(s.rU,{activeClass:"active",to:"landpage-info-container",smooth:!0,offset:-140,duration:1e3,style:{cursor:"pointer"},children:(0,i.jsxs)(o.E.div,{whileHover:{translateY:10},children:[(0,i.jsx)(r.xv,{children:"Ver mais"}),(0,i.jsx)(a.JO,{as:H.OId,size:"25px"})]})})})})]}),(0,i.jsx)(P,{id:"landpage-info-container"})]})}}},function(e){e.O(0,[737,866,777,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);