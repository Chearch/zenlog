(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({main:"main",tool:"tool"}[e]||e)+"."+{main:"48904c7a",tool:"26327715"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={main:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({main:"main",tool:"tool"}[e]||e)+"."+{main:"679d8ec8",tool:"31d6cfe0"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b5a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("my-nav"),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navagation bg-white-100 dark:bg-black h-16 shadow-md flex items-center relative dark:"},[e._m(0),e._m(1),e._m(2),e._m(3),n("div",{staticClass:"search-warpper text-3xl absolute right-32 flex items-center"},[n("transition",{attrs:{name:"search"}},[e.searchVisible?n("div",{staticClass:"search-bar relative h-10 mr-6 w-96 bg-gray-200 dark:bg-gray-500 rounded-md flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inpVal,expression:"inpVal"}],staticClass:"inpstyle outline-none text-xl w-full h-full bg-transparent dark:text-gray-100",attrs:{type:"text"},domProps:{value:e.inpVal},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.search(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.cancel(t)}],input:function(t){t.target.composing||(e.inpVal=t.target.value)}}}),n("span",{staticClass:"icon-cancel icon mr-2 cursor-pointer",on:{click:e.cancel}})]):e._e()])],1),n("div",{staticClass:"search-icon-wrapper text-3xl cursor-pointer flex items-center"},[n("span",{staticClass:"search icon-search icon absolute right-24 ",on:{click:e.search}})]),n("div",{staticClass:"search-warpper text-3xl absolute right-2 cursor-pointer"},[n("ios-switch",{attrs:{onTodo:e.onTodo,offTodo:e.offTodo}})],1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-wrapper subTitle"},[n("div",{staticClass:"title font-semibold"},[e._v("首页")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recommand-wrapper subTitle"},[n("div",{staticClass:"recommand font-semibold"},[e._v("推荐")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feature-wrapper subTitle"},[n("div",{staticClass:"feature font-semibold"},[e._v("精选")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feature-wrapper subTitle"},[n("div",{staticClass:"feature font-semibold"},[e._v("消遣")])])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{ref:"checkbox",staticClass:"ios-switch",style:{width:e.width,height:e.height},attrs:{type:"checkbox"},on:{click:e.ckcheckbox}})])},l=[],u={props:{width:{type:String,default:"51px"},height:{type:String,default:"31px"},onTodo:{type:Function,default:function(){}},offTodo:{type:Function,default:function(){}}},methods:{ckcheckbox:function(){this.$refs.checkbox.checked?this.onTodo():this.offTodo()}}},f=u,d=(n("d7f4"),n("2877")),p=Object(d["a"])(f,c,l,!1,null,"500c331a",null),h=p.exports,m={data:function(){return{searchVisible:!1,inpVal:""}},components:{iosSwitch:h},methods:{search:function(){this.searchVisible?console.log(this.inpVal):this.searchVisible=!0},cancel:function(){this.inpVal?this.inpVal="":this.searchVisible=!1},onTodo:function(){document.documentElement.classList.add("dark")},offTodo:function(){document.documentElement.classList.remove("dark")}}},g=m,v=(n("9f55"),Object(d["a"])(g,a,s,!1,null,"596b6a62",null)),b=v.exports;document.addEventListener("DOMContentLoaded",(function(e){var t=window.innerWidth/37.5>15?15:window.innerWidth/37.5,n=document.getElementsByTagName("html")[0];n.style.fontSize=t+"px",console.log("html-font-size: ",n.style.fontSize)}));var y={components:{myNav:b}},w=y,k=Object(d["a"])(w,o,i,!1,null,null,null),x=k.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(_["a"]);var C=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:function(){return n.e("main").then(n.bind(null,"7f94"))}},{path:"/like",name:"like",component:function(){return n.e("tool").then(n.bind(null,"e74e"))}}],E=new _["a"]({mode:"history",base:"/",routes:C}),T=E,j=n("2f62");r["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=(n("c860"),n("9929"),n("b972"),n("5530")),V=(n("a15b"),!0),P={computed:Object(S["a"])({},Object(j["b"])([])),methods:Object(S["a"])(Object(S["a"])({},Object(j["c"])([])),{},{jumpto:function(e){var t="/"+e;this.$route.fullPath!==t&&this.$router.push({path:t})},linkTo:function(e){window.open(e)},getNowTime:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[t,n+1,r,o,i,a]},info:function(e){if("string"!==typeof e)throw new Error("msg must be string");var t=["color: orange","background: white","font-weight: 900"].join(";");V&&console.log("%c%s",t,e)},error:function(e){if("string"!==typeof e)throw new Error("msg must be string");var t=["color: red","background: white","font-weight: 900"].join(";");V&&console.log("%c%s",t,e)},success:function(e){if("string"!==typeof e)throw new Error("msg must be string");var t=["color: green","background: white","font-weight: 900"].join(";");V&&console.log("%c%s",t,e)}})};r["a"].mixin(P),r["a"].config.productionTip=!1,new r["a"]({router:T,store:O,render:function(e){return e(x)}}).$mount("#app")},9929:function(e,t,n){},"9f55":function(e,t,n){"use strict";n("c862")},c860:function(e,t,n){},c862:function(e,t,n){},d7f4:function(e,t,n){"use strict";n("2b5a")}});
//# sourceMappingURL=app.1646b86d.js.map