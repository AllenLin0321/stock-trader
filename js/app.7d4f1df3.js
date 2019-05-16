(function(t){function n(n){for(var o,r,c=n[0],i=n[1],u=n[2],f=0,d=[];f<c.length;f++)r=c[f],s[r]&&d.push(s[r][0]),s[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,c=1;c<e.length;c++){var i=e[c];0!==s[i]&&(o=!1)}o&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},s={app:0},a=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=i;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"loadData",function(){return ft});e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",[e("Header"),e("b-col",{attrs:{md:"12"}},[e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)],1)},r=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{to:"/"}},[t._v("Stock Trader")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:"/portfolio"}},[t._v("Portfolio")]),e("b-nav-item",{attrs:{to:"/stocks"}},[t._v("Stocks")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{staticClass:"mr-3",attrs:{href:"#"},on:{click:t.endDay}},[t._v("End Day")]),e("b-nav-item-dropdown",{staticClass:"mr-3"},[e("template",{slot:"button-content"},[t._v("Save & Load")]),e("b-dropdown-item",{attrs:{href:"#"},on:{click:t.saveData}},[t._v("Save Data")]),e("b-dropdown-item",{attrs:{href:"#"},on:{click:t.loadData}},[t._v("Load Data")])],2),e("b-nav-text",[e("strong",[t._v("Funds: "+t._s(t._f("currency")(t.funds)))])])],1)],1)],1)],1)},i=[],u=e("cebc"),l=e("2f62"),f=e("bc3a"),d=e.n(f),p={computed:{funds:function(){return this.$store.getters.funds}},methods:Object(u["a"])({},Object(l["b"])({randomizeStocks:"randomizeStocks",fetchData:"loadData"}),{endDay:function(){this.randomizeStocks()},saveData:function(){var t={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};d.a.put("data.json",t)},loadData:function(){this.fetchData()}})},b=p,v=e("2877"),k=Object(v["a"])(b,c,i,!1,null,null,null),m=k.exports,h={components:{Header:m},created:function(){this.$store.dispatch("initStocks")}},y=h,_=(e("5c0b"),Object(v["a"])(y,a,r,!1,null,null,null)),S=_.exports,O=e("8c4f"),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Trade or View your Portfolio")]),e("h6",[t._v("You may Save & Load your Data")]),e("h6",[t._v("Click on 'End Day' to begin a New Day!")]),e("hr"),e("p",[t._v("Your Funds: "+t._s(t._f("currency")(t.funds)))])])},q=[],j={computed:{funds:function(){return this.$store.getters.funds}}},P=j,T=Object(v["a"])(P,g,q,!1,null,null,null),w=T.exports,C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.stocks,function(t,n){return e("app-stock",{key:n,attrs:{stock:t}})}),1)},D=[],$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-col",{staticClass:"float-left mt-4",attrs:{sm:"6",md:"4"}},[e("b-card",{attrs:{"border-variant":"info"}},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.stock.name)+"\n            "),e("small",[t._v("(Price : "+t._s(t.stock.price)+") | Quantity: "+t._s(t.stock.quantity))])]),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-input",{staticClass:"float-left",class:{danger:t.insufficientQuantity},attrs:{type:"number",placeholder:"Quantity"},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}})],1),e("b-col",[e("b-button",{staticClass:"float-right",attrs:{variant:"info",disabled:t.insufficientQuantity||t.quantity<=0||Number.isInteger(t.quantity)},on:{click:t.sellStock}},[t._v("\n                    "+t._s(t.insufficientQuantity?"Not enough":"Sell"))])],1)],1)],1)],1)},x=[],E={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:Object(u["a"])({},Object(l["b"])({placeSellOrder:"sellStock"}),{sellStock:function(){var t={stockId:this.stock.id,quantity:this.quantity,stockPrice:this.stock.price};this.placeSellOrder(t),this.quantity=0}})},L=E,F=(e("bba0"),Object(v["a"])(L,$,x,!1,null,"42f8dba4",null)),I=F.exports,K={computed:Object(u["a"])({},Object(l["c"])({stocks:"stockPortfolio"})),components:{appStock:I}},M=K,Q=Object(v["a"])(M,C,D,!1,null,null,null),N=Q.exports,R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.stocks,function(t,n){return e("app-stock",{key:n,attrs:{stock:t}})}),1)},z=[],B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-col",{staticClass:"float-left mt-4",attrs:{sm:"6",md:"4"}},[e("b-card",{attrs:{"border-variant":"success"}},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.stock.name)+"\n            "),e("small",[t._v("(Price : "+t._s(t.stock.price)+")")])]),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-input",{staticClass:"float-left",class:{danger:t.insufficientFunds},attrs:{type:"number",placeholder:"Quantity"},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}})],1),e("b-col",[e("b-button",{staticClass:"float-right",attrs:{variant:"success",disabled:t.insufficientFunds||t.quantity<=0||Number.isInteger(t.quantity)},on:{click:t.buyStock}},[t._v("\n                    "+t._s(t.insufficientFunds?"Insufficient Funds":"Buy"))])],1)],1)],1)],1)},Y=[],U={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}},H=U,J=(e("e646"),Object(v["a"])(H,B,Y,!1,null,"602ef11e",null)),A=J.exports,G={components:{appStock:A},computed:{stocks:function(){return this.$store.getters.stocks}}},V=G,W=Object(v["a"])(V,R,z,!1,null,null,null),X=W.exports;s["default"].use(O["a"]);var Z=new O["a"]({mode:"history",routes:[{path:"/",component:w},{path:"/portfolio",component:N},{path:"/stocks",component:X}]}),tt=(e("ac6a"),[{id:1,name:"BMW",price:100},{id:2,name:"Google",price:200},{id:3,name:"Apple",price:250},{id:4,name:"Twitter",price:80}]),nt={stocks:[]},et={SET_STOCKS:function(t,n){t.stocks=n},RND_STOCKS:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.5))})}},ot={buyStock:function(t,n){var e=t.commit;e("BUY_STOCK",n)},initStocks:function(t){var n=t.commit;n("SET_STOCKS",tt)},randomizeStocks:function(t){var n=t.commit;n("RND_STOCKS")}},st={stocks:function(t){return t.stocks}},at={state:nt,mutations:et,actions:ot,getters:st},rt=(e("7f7f"),e("7514"),{funds:1e4,stocks:[]}),ct={BUY_STOCK:function(t,n){var e=n.stockId,o=n.quantity,s=n.stockPrice,a=t.stocks.find(function(t){return t.id==e});a?a.quantity+=o:t.stocks.push({id:e,quantity:o}),t.funds-=s*o},SELL_STOCK:function(t,n){var e=n.stockId,o=n.quantity,s=n.stockPrice,a=t.stocks.find(function(t){return t.id==e});a.quantity>o?a.quantity-=o:t.stocks.splice(t.stocks.indexOf(a),1),t.funds+=s*o},SET_PORTFOLIO:function(t,n){t.funds=n.funds,t.stocks=n.stockPortfolio?n.stockPortfolio:[]}},it={sellStock:function(t,n){var e=t.commit;e("SELL_STOCK",n)}},ut={stockPortfolio:function(t,n){return t.stocks.map(function(t){var e=n.stocks.find(function(n){return n.id==t.id});return{id:t.id,quantity:t.quantity,name:e.name,price:e.price}})},funds:function(t){return t.funds}},lt={state:rt,mutations:ct,actions:it,getters:ut},ft=function(t){var n=t.commit;d.a.get("data.json").then(function(t){var e=t.data;if(e){var o=e.stocks,s=e.funds,a=e.stockPortfolio,r={stockPortfolio:a,funds:s};n("SET_STOCKS",o),n("SET_PORTFOLIO",r)}})};s["default"].use(l["a"]);var dt=new l["a"].Store({actions:o,modules:{stocks:at,portfolio:lt}}),pt=e("9f7b"),bt=e.n(pt);e("f9e3"),e("2dd8");s["default"].use(bt.a),s["default"].config.productionTip=!1,d.a.defaults.baseURL="https://vuejs-stock-trader-97cf2.firebaseio.com/",s["default"].filter("currency",function(t){return"$ ".concat(t.toLocaleString())}),new s["default"]({router:Z,store:dt,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var o=e("5e27"),s=e.n(o);s.a},"5e27":function(t,n,e){},bba0:function(t,n,e){"use strict";var o=e("d8c6"),s=e.n(o);s.a},d8c6:function(t,n,e){},e646:function(t,n,e){"use strict";var o=e("ecd5"),s=e.n(o);s.a},ecd5:function(t,n,e){}});
//# sourceMappingURL=app.7d4f1df3.js.map