(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8427356"],{"0ca9":function(t,e,r){},"1bde":function(t,e,r){},"1ea6":function(t,e,r){"use strict";var i=r("1bde"),n=r.n(i);n.a},"2a50":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"conl"},[r("Row",[r("i-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:6}}},[r("BtRodio",{staticStyle:{display:"inline-block"},attrs:{data:t.exchange_arr.map(function(t){return""+t.brief})},model:{value:t.brief,callback:function(e){t.brief=e},expression:"brief"}})],1),r("i-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:10},lg:{span:10}}},[r("BtRodio",{staticStyle:{display:"inline-block"},attrs:{data:t.size_arr.map(function(t){return t.label})},on:{"on-navite":t.handleFast},model:{value:t.fast,callback:function(e){t.fast=e},expression:"fast"}})],1),r("i-col",{attrs:{xs:{span:12},sm:{span:12},md:{span:5},lg:{span:5}}},[r("i-input",{attrs:{clearable:"",search:""},on:{"on-clear":t.handleClean,"on-search":t.handleChange},model:{value:t.symbol,callback:function(e){t.symbol=e},expression:"symbol"}})],1),r("i-col",{staticStyle:{"text-align":"right"},attrs:{xs:{span:11},sm:{span:11},md:{span:2,offset:1},lg:{span:2,offset:1}}},[r("Icon",{style:{color:t.show_symobl_mode?"var(--blue)":"var(--textcolor)"},attrs:{type:"md-apps",size:"30"},on:{click:function(e){t.show_symobl_mode=!t.show_symobl_mode}}}),t._v("\n       \n      "),r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.init_params({})}}},[t._v("刷新")])],1)],1),r("br"),r("Table",{directives:[{name:"show",rawName:"v-show",value:!t.show_symobl_mode,expression:"!show_symobl_mode"}],attrs:{stripe:"",columns:t.columns,data:t.lists,height:t.height-120,size:"small",loading:t.loading},scopedSlots:t._u([{key:"attention",fn:function(e){var i=e.row,n=e.index;return[r("Icon",{staticClass:"icon-fa",style:{width:"24px",color:"X"===i.m?"var(--blue)":"var(--textcolor)"},attrs:{type:"md-star"},on:{click:function(e){return t.handleAttention(i,n)}}})]}},{key:"state",fn:function(e){var i=e.row;return[r("span",{style:{background:"linear-gradient(180deg,"+t.tipsObj1(i.kstate&&i.kstate.ks20)+" , "+t.tipsObj1(i.kstate&&i.kstate.ks60)+" , "+t.tipsObj1(i.kstate&&i.kstate.ks120)+" )"}},[t._v(" ")])]}}],null,!1,823238661)}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_symobl_mode,expression:"show_symobl_mode"}],staticClass:"bt-symbol",style:{height:t.height-120+"px"}},t._l(t.lists,function(e,i){return r("BtSymbol",{key:i,attrs:{item:e},on:{star:function(r){return t.handleAttention(e,i)}}})}),1)],1):t._e()},n=[],a=r("9ab4"),s=r("2b0e"),o=r("f129"),l=r("b1f3"),c=r("f13e"),u=r("fd9b"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"main"},[r("Poptip",{staticClass:"poptip",attrs:{trigger:"hover",placement:"right-start",width:"300"}},[r("router-link",{staticClass:"wapper",attrs:{to:"/trade?_symbol="+t.item.b+"_"+t.item.s,target:"_blank"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate1,expression:"$store.state.list.show_kstate1"}],staticClass:"wapper-tips-row",style:{background:"linear-gradient(180deg,"+t.tipsObj1(t.item.kstate&&t.item.kstate.ks20)+" ,25%, "+t.tipsObj1(t.item.kstate&&t.item.kstate.ks60)+" ,75%, "+t.tipsObj1(t.item.kstate&&t.item.kstate.ks120)+") "}},[t._v(" ")]),r("Row",{staticClass:"wapper-row1"},[r("i-col",{staticClass:"wapper-row1-col"},[r("strong",{staticClass:"wapper-row1-col-name"},[t._v(t._s(t.item.b)+"."+t._s(t.item.s))]),r("strong",{staticClass:"wapper-row1-col-price"},[t._v("\n            "+t._s(t.to_ticksize(t.item))+"\n          ")]),r("strong",{staticClass:"wapper-row1-col-ptc",style:t.amplitude_filter(t.item.pct)},[t._v(t._s(t.to_twopoint(t.item.pct))+"%")])])],1),r("Row",{staticClass:"wapper-row2"},[r("i-col",{staticClass:"wapper-row2-col"},[r("span",{staticClass:"wapper-row2-col-calory",style:t.amplitude_filters(t.item.c)},[t._v(t._s(t.to_twopoint(t.item.c,1))+" C")]),r("span",{staticClass:"wapper-row2-col-qty"},[r("span",{style:t.max_qty(t.item)},[t._v(t._s(t.qty_filter(t.item)))]),t._v("\n             / "+t._s(t.qty24_filter(t.item))+"\n          ")]),r("span",{staticClass:"wapper-row2-col-p60"},[t._v(t._s(t.item.p60)+"%")])])],1)],1),r("Row",{attrs:{slot:"title",type:"flex",justify:"center",align:"middle"},slot:"title"},[r("i-col",{attrs:{span:"6"}},[r("a",{staticStyle:{"text-decoration":"underline","font-weight":"bold",color:"var(--textcolor)"},attrs:{href:"/trade?_symbol="+t.item.b+"_"+t.item.s,target:"_blank"}},[t._v(t._s(t.item.b)+"."+t._s(t.item.s))])]),r("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"18"}},[r("Icon",{staticStyle:{color:"var(--green)",cursor:"pointer"},style:{"font-size":"2.5rem",color:"X"===t.item.m?"var(--blue)":"var(--textcolor)"},attrs:{size:"18",type:"md-star"},on:{click:function(e){return t.$emit("star",t.item)}}})],1)],1),r("Row",{attrs:{slot:"content"},slot:"content"},[r("i-col",[r("div",[t._v("价格："+t._s(t.to_ticksize(t.item))+" "+t._s(t.item.qA))]),r("div",[t._v("当日涨跌幅："+t._s(Number(t.item.pct).toFixed(2))+"%")]),r("div",[t._v("60秒滚动涨跌幅："+t._s(t.item.p60))]),r("div",[t._v("\n          60秒滚动交易量："+t._s(Math.floor(t.item.q*t.item.qp*t.item.p).toLocaleString())+"\n        ")]),r("div",[t._v("\n          60秒平均交易量："+t._s(Math.floor(t.item.q24*t.item.qp*t.item.p).toLocaleString())+"\n        ")]),r("div",[t._v("\n          4小时级别行情提示（"+t._s(t.transformatDateString(1e3*t.item.kstate.t))+"发布）：\n        ")]),r("div",[r("strong",{style:{color:t.handKcolor(t.item.kstate),"white-space":"normal"}},[t._v(t._s(t.item.kstate.k))])])])],1)],1)],1)},h=[],f=s["default"].extend({data:function(){return{scale_arr:{"5m":"5分钟","15m":"15分钟","30m":"30分钟","1h":"1小时","4h":"4小时","1d":"1日"}}},props:{item:{type:Object,default:function(){}}},methods:{transformatDateString:l["p"],transformatTime:l["q"],qty_filter:l["h"],qty24_filter:l["g"],amplitude_filters:function(t){var e="var(--textcolor)",r={color:e,"font-weight":"inherit"};return t>=1&&(e="var(--green)",r={color:e}),t<=-1&&(e="var(--red)",r={color:e}),r},amplitude_filter:function(t){var e=t>0;return{color:e?"var(--seletedlinghtgreen)":"var(--red)"}},handKcolor:function(t){var e=null,r=[{key:0,value:"var(--textcolor)"},{key:1,value:"var(--green)"},{key:2,value:"var(--lightGreen)"},{key:3,value:"var(--red)"}];if(t&&t.ks){var i=function(e){return e.key===t.ks};e=r.find(i),e&&(e=e.value)}return e},max_qty:function(t){var e=t.qty,r=t.qty24,i=Number(e)>Number(r);return{"font-weight":i?"bold":""}},to_ticksize:function(t){var e,r=t.p,i=t.ts;return r&&(e=Number(r).toFixed(i)),e},to_twopoint:function(t,e){var r;return void 0===e&&(e=2),r=t?Number(t).toFixed(e):t,r},tipsObj:function(t){var e="var(--red)",r=([0].some(function(e){return e===t}),[1,5,12,16].some(function(e){return e===t})),i=[2,6,11,15].some(function(e){return e===t}),n=[3,7,10,14].some(function(e){return e===t}),a=[4,8,9,13].some(function(e){return e===t});return e=r?"var(--green)":i?"var(--lightGreen)":n?"var(--pink)":a?"var(--red)":"var(--bgcolor)",e},tipsObj1:function(t){if("number"!==typeof t)return{};var e="var(--red)",r=[1].some(function(e){return e===t}),i=[2].some(function(e){return e===t}),n=[3].some(function(e){return e===t}),a=[4].some(function(e){return e===t});return e=r?"var(--green)":i?"var(--lightGreen)":n?"var(--lightPink)":a?"var(--red)":"var(--bgcolor)",e}}}),p=f,d=(r("1ea6"),r("2877")),b=Object(d["a"])(p,m,h,!1,null,"038f780a",null),v=b.exports,_=s["default"].extend({components:{BtRodio:u["a"],BtSymbol:v},data:function(){return{show_symobl_mode:!0,brief:"",symbol:"",symbol_arr:[],show:!1,select_loading:!1,fast:"TOP20",name:"",size_arr:[{label:"全部",key:"all"},{label:"TOP20",key:20},{label:"TOP50",key:50},{label:"TOP100",key:100},{label:"USDT",key:"all"},{label:"BTC",key:"all"},{label:"ETH",key:"all"}],name_arr:[],auto_refresh:{timer:1e4,status:!0,t:null},params:{limit:20,symbol:""},loading:!1,ex_active:{},exchange_arr:[],exchange_all:[],count_rodia_arr:[{label:20,key:"TOP20"},{label:50,key:"TOP20"},{label:100,key:"TOP100"},{label:"全部",key:"全部"}],lists:[],columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"关注",width:50,slot:"attention"},{title:"交易对",key:"symbol",minWidth:110,render:function(t,e){var r=e.row;return t("a",{attrs:{href:"/trade?_symbol="+r.b+"_"+r.s,target:"_blank"},style:{"text-decoration":"underline",color:"var(--textcolor)"}},r.b+"."+r.s)}},{title:"价格",key:"p",align:"right",minWidth:110,render:function(t,e){var r=e.row;return t("span",r.p+" "+r.qA)}},{title:"当日涨跌幅",key:"p_pct",align:"right",minWidth:90,sortable:!0,render:function(t,e){var r=e.row;return t("span",(r.pct&&Number(r.pct).toFixed(2))+"%")}},{title:"卡路里",key:"calory",align:"right",minWidth:70,sortable:!0,render:function(t,e){var r=e.row;return t("span",Number(r.c).toFixed(1)+" C")}},{title:"60秒滚动涨跌幅",key:"p_pct",align:"right",minWidth:120,sortable:!0,render:function(t,e){var r=e.row;return t("span",(r.p60&&Number(r.p60).toFixed(2))+"%")}},{title:"60秒滚动交易量",key:"p_pct",align:"right",minWidth:120,sortable:!0,render:function(t,e){var r=e.row;return t("span",(r.q&&Math.floor(r.q*r.qp*r.p).toLocaleString())+" USDT")}},{title:"60秒平均交易量",key:"s_vol_60",align:"right",minWidth:120,sortable:!0,render:function(t,e){var r=e.row;return t("span",(r.q24&&Math.floor(r.q24*r.qp*r.p).toLocaleString())+" USDT")}},{title:"24H交易量",key:"v",align:"right",minWidth:120,sortable:!0,render:function(t,e){var r=e.row;return t("span",(r.v&&Math.floor(Number(r.v)).toLocaleString())+" USDT")}}]}},mounted:function(){return a["b"](this,void 0,void 0,function(){var t,e,r,i,n,s=this;return a["e"](this,function(a){switch(a.label){case 0:return t=this.$route.query.brief,[4,Object(o["g"])()];case 1:return e=a.sent(),t?(this.ex_active.brief=this.$route.query.brief,this.brief=this.$route.query.brief,i=function(t){return t.brief===s.ex_active.brief},r=e.list.find(i)):(this.ex_active=e.list[0],this.brief=e.list[0].brief),this.exchange_all=e.list,0===e.error_num&&(this.exchange_arr=e.list),n=r||e.list[0],this.ex_active=n,this.init_params(n),[2]}})})},destroyed:function(){this.auto_refresh.status=!1},methods:{tipsObj1:function(t){if("number"!==typeof t)return{};var e="var(--red)",r=[1].some(function(e){return e===t}),i=[2].some(function(e){return e===t}),n=[3].some(function(e){return e===t}),a=[4].some(function(e){return e===t});return e=r?"var(--green)":i?"var(--lightGreen)":n?"var(--lightPink)":a?"var(--red)":"var(--bgcolor)",e},handleSymbol:function(t){if(this.fast="",t){var e=this.symbol_arr[t].s;this.params.symbol=e,this.init_params({})}else this.params.symbol="",this.init_params({})},handleSymbolAll:function(t){return a["b"](this,void 0,void 0,function(){var t;return a["e"](this,function(e){switch(e.label){case 0:return this.symbol_arr.length>0?[2]:(this.select_loading=!0,[4,Object(o["O"])({brief:this.brief})]);case 1:return t=e.sent().list,this.select_loading=!1,this.symbol_arr=t,[2]}})})},handleChangeFre:function(t){var e=this.auto_refresh,r=e.timer;e.status;t&&(this.$Message.warning("已开启每"+r/1e3+"秒自动刷新"),this.handle_refresh())},handle_refresh:function(){var t=this.auto_refresh;t.timer,t.status,t.t,this.$store.state.instant.cursor},progress_start:function(){var t=this,e=function(){return a["b"](t,void 0,void 0,function(){var t=this;return a["e"](this,function(r){return this.auto_refresh.t=setTimeout(function(){t.auto_refresh.timer=t.auto_refresh.timer-100;var r=t.auto_refresh,i=r.timer,n=r.status;i<1&&(t.init_params(t.ex_active),t.auto_refresh.timer=t.$options.data().auto_refresh.timer),n&&e()},100),[2]})})};e()},type_filter:function(t){if(t.brief===this.ex_active.brief)return"primary"},changeExchange:function(t){this.ex_active=t;var e=this.$route;this.$router.push({path:e.path,query:{brief:""+t.brief}}),this.init_params(t)},changeSize:function(){},handleChange:function(t){return a["b"](this,void 0,void 0,function(){return a["e"](this,function(e){return t&&(this.params.symbol=t.toUpperCase()+"*"),this.fast="",this.params.limit="",this.init_params({}),[2]})})},handleClean:function(t){this.params.symbol="",this.init_params({})},sortQuick:function(t){var e={arr:t,quickSort:function(t){if(t.length<=1)return t;var r=Math.floor(t.length/2),i=t.splice(r,1)[0],n=[],a=[];return t.forEach(function(t){Number(t.s_vol)<Number(i.s_vol)?n.push(t):a.push(t)}),e.quickSort(n).concat([i],e.quickSort(a))}};return e},init_params:function(t){var e=t.exchange,r=void 0===e?"":e,i=t.account,n=void 0===i?"":i;return a["b"](this,void 0,void 0,function(){var t,e,i,s,u;return a["e"](this,function(m){switch(m.label){case 0:return t=Object(l["c"])("user"),r=r||this.ex_active.exchange,n=n||this.ex_active.account,e=a["a"]({},this.params,{user:t,language:c["cb"],exchange:r,account:n}),e.symbol=e.symbol&&""+e.symbol||"",this.$Loading.start(),[4,Object(o["k"])(e)];case 1:return i=m.sent(),s=i.error_num,u=i.list,0===s&&u?(this.$Loading.finish(),this.show=!0,this.lists=u.map(function(t){return a["a"]({},t)})):this.$Loading.error(),[2]}})})},handleAttention:function(t,e){var r=t.s,i=t.m;a["f"](t,["s","m"]);return a["b"](this,void 0,void 0,function(){var t,n,s,u,m,h,f,p,d;return a["e"](this,function(a){switch(a.label){case 0:return t=this.ex_active,n=t.exchange,s=t.account,u=t.brief,m=Object(l["c"])("user"),h={user:m,exchange:n,account:s,symbol:r,brief:u,language:c["cb"]},f={},"X"!==i?[3,2]:[4,Object(o["J"])(h)];case 1:return f=a.sent(),[3,4];case 2:return[4,Object(o["I"])(h)];case 3:f=a.sent(),a.label=4;case 4:return p=f.error_num,d=f.msg,0===p?this.lists[e].m="X"===i?"":"X":this.$Notice.error({title:d}),[2]}})})},handleFast:function(t){if(this.params.symbol="",this.symbol="","全部"===t)this.params.limit="all";else if(t)if("T"===t.substring(0,1)){var e=t.split("P"),r=e[1];this.params.limit=Number(r)}else this.params.symbol="*"+t;this.init_params({})}},watch:{brief:function(t,e){var r=this.exchange_arr.find(function(e){return e.brief===t});this.ex_active=r,""!==e&&r&&this.changeExchange(r)}},computed:{percent:function(){var t=this.$options.data().auto_refresh.timer;return Math.ceil(100*(1-this.auto_refresh.timer/t))},data:function(){var t=this.$store.state.instant.timer;return t.caloryAll?t.caloryAll:[]},height:l["d"]}}),y=_,g=(r("6581"),Object(d["a"])(y,i,n,!1,null,"757e4775",null));e["default"]=g.exports},"61a5":function(t,e,r){"use strict";var i=r("0ca9"),n=r.n(i);n.a},6581:function(t,e,r){"use strict";var i=r("c9d5"),n=r.n(i);n.a},c9d5:function(t,e,r){},fd9b:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("RadioGroup",{staticClass:"bt-group",attrs:{value:t.value,type:"button",size:t.size},on:{"on-change":function(e){return t.$emit("on-change",e)}}},t._l(t.data,function(e,i){return r("Radio",{key:i,staticClass:"bt-radio",style:t.style_name,attrs:{label:e},nativeOn:{click:function(r){return t.$emit("on-navite",e)}}})}),1)},n=[],a=r("2b0e"),s=a["default"].extend({model:{prop:"value",event:"on-change"},props:{style_name:{type:Object||Number,default:function(){}},value:{type:String||Number,default:function(){return""}},data:{type:Array||Object,default:function(){return[]}},size:{type:String,default:function(){return"default"}}}}),o=s,l=(r("61a5"),r("2877")),c=Object(l["a"])(o,i,n,!1,null,"dbfcdeb2",null),u=c.exports;e["a"]=u}}]);