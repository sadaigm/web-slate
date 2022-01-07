(this["webpackJsonpweb-slate"]=this["webpackJsonpweb-slate"]||[]).push([[0],{25:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=(n(30),n(31),n(32),n(12)),l=n(1),s=r.a.createContext({}),u=r.a.createContext({}),d=r.a.createContext({}),f=function(e){var t=e.guid,n=e.children,a=r.a.useState([]),o=Object(l.a)(a,2),i=o[0],s=o[1],d=r.a.useState(!1),f=Object(l.a)(d,2),h=f[0],m=f[1];r.a.useEffect((function(){s([])}),[t]);return r.a.createElement(u.Provider,{value:{slatePattern:i,loadData:function(e){s([].concat(Object(c.a)(i),[e]))},renderData:h,toggleRender:function(){m(!h)}}},n)},h=function(e){var t=e.islocked,n=e.children,a=r.a.useState(t||!1),o=Object(l.a)(a,2),i=o[0],c=o[1];return r.a.createElement(s.Provider,{value:{islocked:i,setIsLocked:function(e){c(e)},toggleLock:function(){c(!i)}}},n)},m=function(e,t,n,a,r){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.strokeStyle=a,e.lineWidth=1,e.stroke(),e.closePath()},E=function(e,t,n,a,r,o,i){if(e)for(var c=b(i,a,r),l=v(o,a,r),s=1;s<=1;s++){var u=n+r*s,d="grey";t<c&&m(e,{x:0,y:u},{x:o,y:u},d),t<l&&m(e,{x:u,y:0},{x:u,y:i},d="grey")}};function v(e,t,n){return Math.floor(e/n)}function b(e,t,n){return Math.floor(e/n)}var p=function(e,t,n,a,r){if(e)for(var o=1;o<=5;o++){var i=n+4.5*t+a*o,c="blue";2===o||3===o?c="red":5===o&&(c="transparent",i-=.5*a),m(e,{x:0,y:i},{x:r,y:i},c)}},g=function(e,t,n,a,r){if(e)for(var o=1;o<=1;o++){var i=n+t+a*o;m(e,{x:0,y:i},{x:r,y:i},"blue")}},y=function(e,t,n,a,r){if(e)for(var o=1;o<=3;o++){var i=n+2.5*t+a*o,c="grey";3===o&&(c="transparent",i-=.5*a),m(e,{x:0,y:i},{x:r,y:i},c)}},w=function(e,t,n,a,r,o){e&&(t===I.FOURLINE?function(e,t,n,a,r){for(var o=Math.floor((r-t)/(4.5*n)),i=0;i<o;i++){p(e,i*n,t,n,a)}}(e,n,a,r,o):t===I.TWOLINE?function(e,t,n,a,r){for(var o=Math.floor((r-t)/(2.5*n)),i=0;i<o;i++){y(e,i*n,t,n,a)}}(e,n,a,r,o):t===I.SINGLELINE?function(e,t,n,a,r){for(var o=Math.floor((r-t)/n),i=0;i<o;i++){g(e,i*n,t,n,a)}}(e,n,a,r,o):t===I.CHECKED&&function(e,t,n,a,r){for(var o=b(a,t,100),i=v(r,t,100),c=0;c<o||c<i;c++){E(e,c,100*c,t,100,a,r)}}(e,n,0,r,o))},x=768,S=1024,C=2560;var L,O=function(){var e=r.a.useState({width:void 0,height:void 0}),t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.useEffect((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n};!function(e){e[e.MOBILE=0]="MOBILE",e[e.TABLET=1]="TABLET",e[e.LAPTOP=2]="LAPTOP",e[e.DEKTOP=3]="DEKTOP"}(L||(L={}));var I,j=function(){var e=O(),t=r.a.useState(L.MOBILE),n=Object(l.a)(t,2),a=n[0],o=n[1];return r.a.useEffect((function(){e.width&&e.width>=C?o(L.DEKTOP):e.width&&e.width>=S?o(L.LAPTOP):e.width&&e.width>=x&&o(L.TABLET)}),[e]),a},k=function(e){var t=document.createElement("canvas");t.style.border="1px solid red";var n=2*e+10;t.width=50,t.height=50,console.log({brushSize:e,radius:n,width:t.width,height:t.height});var a=t.getContext("2d");if(a){a.fillStyle="#9e9e9e",a.fillRect(0,0,25,25);var r=t.toDataURL("image/png");document.body.style.cursor="url("+r+"), auto"}};!function(e){e[e.MATHS=0]="MATHS",e[e.TAMIL=1]="TAMIL",e[e.ENGLISH=2]="ENGLISH",e[e.SKETCH=3]="SKETCH",e[e.FOURLINE=4]="FOURLINE",e[e.TWOLINE=5]="TWOLINE",e[e.SINGLELINE=6]="SINGLELINE",e[e.CHECKED=7]="CHECKED"}(I||(I={}));var T=function(e){var t=e.clearScreenAction,n=e.brushSize,a=e.slateScreenType,o=r.a.useRef(null),i=r.a.useRef(null),f=r.a.useRef(null),h=r.a.useRef(null),m=r.a.useState(a),E=Object(l.a)(m,2),v=(E[0],E[1],r.a.useState(!1)),b=Object(l.a)(v,2),p=b[0],g=b[1],y=r.a.useState(!1),x=Object(l.a)(y,2),S=x[0],C=x[1],O=r.a.useState([]),I=Object(l.a)(O,2),T=I[0],z=I[1],R=r.a.useState(window.innerHeight-50),N=Object(l.a)(R,2),W=N[0],M=N[1],D=j(),P=r.a.useState(window.innerWidth-50),B=Object(l.a)(P,2),F=B[0],H=B[1],A=r.a.useState(function(e){return e===L.MOBILE?40:35}(D)),K=Object(l.a)(A,2),U=K[0],G=(K[1],r.a.useState(!1)),X=Object(l.a)(G,2),Y=X[0],J=(X[1],r.a.useContext(s).islocked),$=r.a.useContext(d).brushColor,q=r.a.useState($),Q=Object(l.a)(q,2),V=Q[0],Z=Q[1];r.a.useEffect((function(){}),[$]);var _=r.a.useContext(u),ee=_.renderData,te=_.slatePattern,ne=_.loadData;r.a.useEffect((function(){var e,t,n,a,r=null===(e=document)||void 0===e||null===(t=e.getElementById("myDiv"))||void 0===t?void 0:t.offsetHeight,o=null===(n=document)||void 0===n||null===(a=n.getElementById("myDiv"))||void 0===a?void 0:a.offsetWidth;r&&M(r),o&&H(o)}),[]);r.a.useEffect((function(){if(f&&f.current&&o&&o.current){var e=f.current,t=o.current;e.width=F,e.height=W,t.width=F,t.height=W;var a=e.getContext("2d"),r=t.getContext("2d");a&&r&&(a.strokeStyle="black",a.lineWidth=n,h.current=a,r.strokeStyle="black",r.lineWidth=n,i.current=r)}}),[F,W]),r.a.useEffect((function(){if(!J){var e=.75*U,t=i.current;t&&(ce(),w(t,a,e,U,F,W))}}),[a,W,F,Y]),r.a.useEffect((function(){console.log("isDrawing",p)}),[p]),r.a.useEffect((function(){console.log("clearScreenAction",t),J||(Z($),t?k(n):document.body.style.cursor="default")}),[$,t,a,n]);var ae=function(e){var n=e.offsetX,a=e.offsetY,r=h.current;r&&(t?(r.clearRect(n,a+7,25,25),C(!0)):(r.beginPath(),r.moveTo(n,a),g(!0),z([])))},re=function(){var e=h.current;e&&(t||(e.closePath(),ne({pattern:T,strokeStyle:null===e||void 0===e?void 0:e.strokeStyle,lineWidth:null===e||void 0===e?void 0:e.lineWidth}),g(!1)),C(!1))};r.a.useEffect((function(){te.forEach((function(e){var t=h.current;t&&(t.beginPath(),e.pattern.forEach((function(t){return oe(t.x,t.y,(null===e||void 0===e?void 0:e.strokeStyle)||V,e.lineWidth||n)})),t.closePath())}))}),[ee]);var oe=function(e,n,a,r){var o=h.current;o&&(t?o.clearRect(e,n+7,25,25):(o.lineTo(e,n),o.strokeStyle=a,o.lineWidth=r,o.stroke()))},ie=function(e){if(p||S){var t=e.offsetX,a=e.offsetY;oe(t,a,V,n),p&&function(e){var t=e.offsetX,n=e.offsetY;z([].concat(Object(c.a)(T),[{x:t,y:n}]))}(e)}},ce=function(){var e=i.current,t=o.current;e&&t&&e.clearRect(0,0,F,W)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"}},r.a.createElement("div",{id:"myDiv",style:{flexDirection:"column",justifyContent:"center",border:"1px solid grey",height:"".concat(window.innerHeight-100,"px"),width:"".concat(window.innerWidth-10,"px")}},r.a.createElement("div",{id:"canvasesdiv",style:{position:"relative"}},r.a.createElement("canvas",{ref:o,style:{zIndex:1,position:"absolute",height:"".concat(window.innerHeight-110,"px"),width:"".concat(window.innerWidth-10,"px")}}),r.a.createElement("canvas",{style:{zIndex:2,position:"absolute",height:"".concat(window.innerHeight-110,"px"),width:"".concat(window.innerWidth-10,"px")},onMouseDown:function(e){!J&&ae(e.nativeEvent)},onMouseUp:function(e){!J&&re()},onMouseMove:function(e){!J&&ie(e.nativeEvent)},onTouchStart:function(e){var t=e.touches[0],n=new MouseEvent("mousedown",{clientX:t.clientX-10,clientY:t.clientY-50});!J&&ae(n)},onTouchEnd:function(e){!J&&re()},onTouchMove:function(e){var t=e.touches[0],n=new MouseEvent("mousemove",{clientX:t.clientX-10,clientY:t.clientY-50});!J&&ie(n)},ref:f})))))},z=n(3),R=n(4),N=n(5),W=n(6),M=375,D=425,P=768,B=1024,F=1440,H=2560,A={mobileS:"(min-width: ".concat(320,"px)"),mobileM:"(min-width: ".concat(M,"px)"),mobileL:"(min-width: ".concat(D,"px)"),tablet:"(min-width: ".concat(P,"px)"),laptop:"(min-width: ".concat(B,"px)"),laptopL:"(min-width: ".concat(F,"px)"),desktop:"(min-width: ".concat(H,"px)"),desktopL:"(min-width: ".concat(H,"px)")};function K(){var e=Object(N.a)(["\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 10px;\n  font-size: ",";\n  border: none;\n"]);return K=function(){return e},e}function U(){var e=Object(N.a)(["\n  height: ",";\n  width: ",";\n"]);return U=function(){return e},e}function G(){var e=Object(N.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  flex-direction: ",";\n  border: ",";\n  background-color: ",";\n"]);return G=function(){return e},e}var X=W.a.div(G(),(function(e){return e.width||"100%"}),(function(e){return e.height||"100%"}),(function(e){return e.compType||"row"}),(function(e){return e.border||"1px solid #f3cdc1"}),(function(e){return e.bgColor||"transparent"})),Y=W.a.div(U(),(function(e){return e.height||"100%"}),(function(e){return e.width||"100%"})),J=Object(W.a)(X)(K(),(function(e){return e.fontSize?"".concat(.6*e.fontSize,"px"):"15px"})),$=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),n=(t[0],t[1],r.a.createRef(),r.a.createRef(),r.a.createRef(),j(),r.a.useContext(d)),a=n.brushColor,o=n.setBrushColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{border:"none",style:{display:"flex",justifyContent:"space-between",height:"100%"}},r.a.createElement(X,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"none",width:"40%"}},r.a.createElement(R.a,{icon:z.g,size:"sm",color:"#e91e63"}),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("label",{htmlFor:""}," Color Picker ")),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"100%",width:"60%"}},r.a.createElement("label",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{type:"color",value:a,onChange:function(e){e.target.value&&"rgba(0, 0, 0, 0)"!==e.target.value.trim()&&o(e.target.value)}}),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",{style:{fontSize:"0.875rem",borderRadius:"25px",padding:"0.25rem 0.5rem",border:"1px solid grey",color:"white",backgroundColor:"".concat(a)}},a)))))},q=function(e){var t=e.brushSize,n=e.setbrushSize;return r.a.createElement(X,{border:"none",style:{display:"flex",justifyContent:"space-between",height:"100%"}},r.a.createElement(X,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"none",width:"40%"}},r.a.createElement(R.a,{icon:z.f,size:"sm",color:"#0d6efd"}),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("label",{htmlFor:""}," Brush Size ")),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"100%",width:"60%"}},r.a.createElement("label",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{style:{width:"100px"},width:"30",id:"typeinp",type:"range",min:"1",max:"25",value:t,onChange:function(e){n(parseInt(e.target.value)||1)},step:"1"}),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",{style:{fontSize:"0.875rem",borderRadius:"25px",padding:"0.25rem 0.5rem",border:"1px solid grey",color:"white",backgroundColor:"grey"}},"".concat(t>9?t:"0"+t)))))},Q=n(21),V=n(22),Z=n(24),_=n(23),ee=document.getElementById("modal-root"),te=function(e){Object(Z.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(Q.a)(this,n),(a=t.call(this,e)).el=void 0,a.el=document.createElement("div"),a}return Object(V.a)(n,[{key:"componentDidMount",value:function(){null===ee||void 0===ee||ee.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){null===ee||void 0===ee||ee.removeChild(this.el)}},{key:"render",value:function(){return i.a.createPortal(this.props.children,this.el)}}]),n}(a.Component);function ne(){var e=Object(N.a)(["\n  justify-content: center;\n  align-items: center;\n  border: none;\n  @media "," {\n    width: 85%;\n    height: auto;\n  }\n  @media "," {\n    width: 65%;\n    height: auto;\n  }\n  @media "," {\n    width: 45%;\n  }\n\n  @media "," {\n    flex-basis: 30%;\n  }\n"]);return ne=function(){return e},e}var ae=Object(W.a)(X)(ne(),A.mobileS,A.tablet,A.laptop,A.desktop),re=function(e){var t=e.close,n=e.brushSize,a=e.setbrushSize;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,r.a.createElement("div",{className:"modal"},r.a.createElement(ae,{compType:"column",bgColor:"white",height:"35%",style:{borderRadius:"10px",backgroundColor:"white",padding:"5px"}},r.a.createElement(Y,{height:"5px"}),r.a.createElement(X,{border:"none",style:{justifyContent:"center",alignItems:"center",height:"50px",borderBottom:"1px solid brown"},compType:"column"},r.a.createElement("h3",null," Settings ")),r.a.createElement(Y,{height:"5px"}),r.a.createElement(X,{border:"none",style:{justifyContent:"center",alignItems:"center",height:"50px"}},r.a.createElement(q,{brushSize:n,setbrushSize:a})),r.a.createElement(Y,{height:"5px"}),r.a.createElement(X,{border:"none",style:{justifyContent:"center",alignItems:"center",height:"50px"}},r.a.createElement($,null)),r.a.createElement(J,{height:"60px",style:{justifyContent:"center"}},r.a.createElement("button",{type:"button",onClick:t,className:"btn btn-danger btn-sm"},"Close"))))))},oe=function(e){var t=e.brushSize,n=e.setbrushSize,a=r.a.useState(!1),o=Object(l.a)(a,2),i=o[0],c=o[1],s=r.a.createRef(),u=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:s,style:{borderRadius:"".concat(u!==L.MOBILE?"25px":"50px"),border:"1px solid grey"},onClick:function(){return c(!i)},className:"btn btn-default btn-sm"},r.a.createElement(R.a,{icon:z.a,size:"sm",color:"#e91e63"}),u!==L.MOBILE&&r.a.createElement(r.a.Fragment,null," Settings")),i&&r.a.createElement(re,{brushSize:t,setbrushSize:n,close:function(){c(!1)}}))},ie=function(e){var t=e.changeSlateScreenType,n=e.screenIcon,a=e.brushSize,o=e.slateType,i=e.setbrushSize,c=e.clearScreen,l=r.a.useContext(s),d=l.islocked,f=l.toggleLock,h=r.a.useContext(u).toggleRender,m=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid grey",width:"".concat(window.innerWidth-10,"px")}},r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"center",width:"".concat(window.innerWidth-10,"px"),height:"45px"}},r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement(oe,{brushSize:a,setbrushSize:i}),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",null,r.a.createElement("button",{style:{borderRadius:"25px",border:"1px solid grey"},className:"btn btn-default btn-sm initialLower",type:"button",onClick:function(){!d&&h()}},r.a.createElement(R.a,{icon:z.j,size:"sm"}),m!==L.MOBILE&&r.a.createElement(r.a.Fragment,null," Load Session Data "))),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",null,r.a.createElement("button",{style:{borderRadius:"25px"},className:"btn btn-warning btn-sm initialLower",type:"button",onClick:function(){!d&&t()}},r.a.createElement(R.a,{icon:n.icon,size:"sm",color:n.color}),r.a.createElement(r.a.Fragment,null," ".concat(I[o].toLocaleLowerCase())," "))),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",null,r.a.createElement("button",{style:{borderRadius:"25px",border:"1px solid grey"},className:"btn btn-default btn-sm",type:"button",onDoubleClick:function(){return c(2)},onClick:function(){return c(1)}},r.a.createElement(R.a,{icon:z.b,size:"sm",color:"red"}),m!==L.MOBILE&&r.a.createElement(r.a.Fragment,null," Clear "))),r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("div",null,r.a.createElement("button",{style:{borderRadius:"25px"},className:"btn btn-info btn-sm",type:"button",onClick:function(){f()}},r.a.createElement(R.a,{icon:d?z.e:z.d,size:"sm"}),m!==L.MOBILE&&r.a.createElement(r.a.Fragment,null,d?" UnLock":" Lock"," "))),r.a.createElement("div",{style:{width:"10px"}})))))},ce=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.a.useState(1),i=Object(l.a)(o,2),c=i[0],d=i[1],f=r.a.useState(I.SKETCH),h=Object(l.a)(f,2),m=h[0],E=h[1],v=r.a.useState({icon:z.f,color:"red"}),b=Object(l.a)(v,2),p=b[0],g=b[1],y=r.a.useContext(s),w=y.islocked;y.toggleLock,r.a.useContext(u).toggleRender,j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:"10px"}}),r.a.createElement("h3",{style:{color:"#6610f2"}},"Web Slate")),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",{style:{backgroundColor:"red",color:"white",padding:"0 10px"}},w&&"Locked"),r.a.createElement("div",{style:{width:"10px"}}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",width:"100%"}},r.a.createElement(T,{clearScreenAction:n,brushSize:c,slateScreenType:m}),r.a.createElement(ie,{changeSlateScreenType:function(){m===I.SKETCH?(E(I.FOURLINE),g({icon:z.h,color:"#6f42c1"})):m===I.FOURLINE?(E(I.TWOLINE),g({icon:z.c,color:"grey"})):m===I.TWOLINE?(E(I.SINGLELINE),g({icon:z.f,color:"blue"})):m===I.SINGLELINE?(E(I.CHECKED),g({icon:z.i,color:"grey"})):(I.CHECKED,E(I.SKETCH),g({icon:z.f,color:"red"}))},screenIcon:p,brushSize:c,slateType:m,setbrushSize:d,clearScreen:function(e){(2===e||1===e)&&a(!n)}})))},le=function(e){e.initialColor;var t=e.children,n=r.a.useState("#0d6efd"),a=Object(l.a)(n,2),o=a[0],i=a[1];return r.a.createElement(d.Provider,{value:{brushColor:o,setBrushColor:i}},t)};var se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(le,null,r.a.createElement(ce,null))))))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/web-slate",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/web-slate","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(t,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.ef6af49e.chunk.js.map