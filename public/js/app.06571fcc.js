(function(e){function n(n){for(var r,i,c=n[0],l=n[1],a=n[2],p=0,s=[];p<c.length;p++)i=c[p],o[i]&&s.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(n);while(s.length)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Home"),t("RouterView"),e._v("\n  "+e._s(e.result)+"\n")],1)},u=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[e._v("\n    welcome to my project\n")])},c=[],l={},a=l,f=(t("8b71"),t("2877")),p=Object(f["a"])(a,i,c,!1,null,null,null);p.options.__file="Home.vue";var s=p.exports,d={test:function(){return fetch("/api").then(function(e){return e.json()})}},v={data:function(){return{result:null}},components:{Home:s},created:function(){var e=this;d.test().then(function(n){return e.result=n})}},b=v,h=(t("9993"),Object(f["a"])(b,o,u,!1,null,null,null));h.options.__file="App.vue";var _=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"8b71":function(e,n,t){"use strict";var r=t("e3a2"),o=t.n(r);o.a},9993:function(e,n,t){"use strict";var r=t("c352"),o=t.n(r);o.a},c352:function(e,n,t){},e3a2:function(e,n,t){}});
//# sourceMappingURL=app.06571fcc.js.map