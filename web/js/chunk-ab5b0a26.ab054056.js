(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab5b0a26"],{"5e38":function(t,e,o){},"7aea":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{value:t.modal2,"mask-closable":!1,width:"445",styles:{top:"25%"}},on:{"on-visible-change":t.handlevisiblechange}},[o("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[o("Icon",{attrs:{type:"ios-information-circle"}}),o("span",[t._v("修改密码")])],1),o("div",{staticStyle:{"text-align":"center"}},[o("Form",{ref:"pwdForm",attrs:{model:t.pw_form,rules:t.rules},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("on-sumit",t.pw_form)}}},[o("FormItem",{attrs:{prop:"old_pw"}},[o("i-input",{attrs:{type:"password",size:"large",placeholder:"请输入原密码"},model:{value:t.com_old_pw,callback:function(e){t.com_old_pw=e},expression:"com_old_pw"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:16,type:"md-lock"}})],1)])],1),o("FormItem",{attrs:{prop:"new_pw"}},[o("i-input",{attrs:{type:"password",size:"large",placeholder:"请输入新密码"},model:{value:t.pw_form.new_pw,callback:function(e){t.$set(t.pw_form,"new_pw",e)},expression:"pw_form.new_pw"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:16,type:"md-lock"}})],1)])],1),o("FormItem",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"con_pw"}},[o("i-input",{attrs:{type:"password",size:"large",placeholder:"请确认新密码"},model:{value:t.pw_form.con_pw,callback:function(e){t.$set(t.pw_form,"con_pw",e)},expression:"pw_form.con_pw"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:16,type:"md-lock"}})],1)])],1)],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"primary",size:"large",long:"",loading:t.modal_loading},on:{click:function(e){return t.$emit("on-sumit",t.pw_form)}}},[t._v("确认修改")])],1)])},n=[],l=o("2b0e"),a=o("b1f3"),r=l["default"].extend({data:function(){return{pw_form:{old_pw:"",new_pw:"",con_pw:""}}},computed:{rules:function(){return{old_pw:this.old_pw,new_pw:this.new_pw,con_pw:this.con_pw}},com_old_pw:function(){var t="";return t=this.old_pw_value?this.old_pw_value:this.pw_form.old_pw,t}},model:{prop:"modal2",event:"on-close"},props:{modal2:{type:Boolean,default:function(){return!1}},modal_loading:{type:Boolean,default:function(){return!1}},old_pw_value:{type:String,default:function(){return""}},old_pw:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"},a["r"]]}},new_pw:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"},a["r"]]}}},methods:{handlevisiblechange:function(t){this.pw_form=this.$options.data().pw_form,this.$emit("on-close",t)}}}),i=r,c=o("2877"),p=Object(c["a"])(i,s,n,!1,null,null,null);e["a"]=p.exports},"96ab":function(t,e,o){"use strict";var s=o("5e38"),n=o.n(s);n.a},c6a4:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Card",{staticClass:"wapper"},[o("div",{staticClass:"lay-header",on:{click:t.handleClose}},[o("h3",[t._v("设置")]),o("Icon",{attrs:{size:"20",type:"md-close"}})],1),o("br"),o("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("i-col",{attrs:{span:"6"}},[o("strong",[t._v("声音开关")])]),o("i-col",{attrs:{span:"18"}},[o("i-switch",{on:{"on-change":t.handleSwitch},model:{value:t.$store.state.list.tips_switch,callback:function(e){t.$set(t.$store.state.list,"tips_switch",e)},expression:"$store.state.list.tips_switch"}},[o("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),o("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1),o("br"),o("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("i-col",{attrs:{span:"6"}},[o("strong",[t._v("声音大小")])]),o("i-col",{attrs:{span:"18"}},[o("Slider",{attrs:{"tip-format":function(){return null},min:1},on:{"on-change":t.handleChangeVolume},model:{value:t.$store.state.list.volume,callback:function(e){t.$set(t.$store.state.list,"volume",e)},expression:"$store.state.list.volume"}})],1)],1),o("br"),o("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("i-col",{attrs:{span:"6"}},[o("strong",[t._v("行情提示")])]),o("i-col",{attrs:{span:"18"}},[o("RadioGroup",{staticClass:"radio",attrs:{size:"large"},on:{"on-change":t.handleChangeListk},model:{value:t.listk,callback:function(e){t.listk=e},expression:"listk"}},t._l(t.listk_arr,function(t){return o("div",{key:t.value},[o("Radio",{staticStyle:{height:"34px"},attrs:{label:t.label}})],1)}),0)],1)],1),o("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("i-col",{attrs:{span:"6"}},[o("strong",[t._v("显示k线")])]),o("i-col",{attrs:{span:"18"}},[o("i-switch",{model:{value:t.$store.state.list.show_kstate1,callback:function(e){t.$set(t.$store.state.list,"show_kstate1",e)},expression:"$store.state.list.show_kstate1"}},[o("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),o("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1),o("br"),o("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("i-col",{attrs:{span:"6"}},[o("strong",[t._v("显示波段")])]),o("i-col",{attrs:{span:"18"}},[o("i-switch",{model:{value:t.$store.state.list.show_kstate2,callback:function(e){t.$set(t.$store.state.list,"show_kstate2",e)},expression:"$store.state.list.show_kstate2"}},[o("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),o("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1),o("br"),o("br")],1)],1)},n=[],l=o("9ab4"),a=o("2b0e"),r=o("7aea"),i=o("65d9"),c=o.n(i),p=o("f129"),u=o("b1f3"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.o_audio=u["l"],e.listk_arr=[{value:"5m",label:"5分钟"},{value:"15m",label:"15分钟"},{value:"30m",label:"30分钟"},{value:"1h",label:"1小时"},{value:"4h",label:"4小时"},{value:"1d",label:"1日"}],e.listk="4小时",e}return l["d"](e,t),e.prototype.handleChangeListk=function(t){return l["b"](this,void 0,void 0,function(){var e,o,s;return l["e"](this,function(n){switch(n.label){case 0:return e=function(e){return e.label===t},o=this.listk_arr.find(e),[4,Object(p["D"])({scale:o.value})];case 1:return s=n.sent(),s.error_num,s.scale,Object(p["W"])("kstate_scale",o.value),[2]}})})},e.prototype.created=function(){this.handlelistk()},e.prototype.handlelistk=function(){return l["b"](this,void 0,void 0,function(){var t,e,o;return l["e"](this,function(s){switch(s.label){case 0:return[4,Object(p["A"])()];case 1:return s.sent(),t=Object(u["c"])("setting").kstate_scale,e=function(e){return e.value===t},o=this.listk_arr.find(e),this.listk=o.label,[2]}})})},e.prototype.handleClose=function(){this.$router.go(-1)},e.prototype.handleExit=function(){Object(p["M"])()},e.prototype.handleChangeVolume=function(t){Object(p["W"])("audio_volume",t)},e.prototype.handleSwitch=function(t){t?this.o_audio.open():this.o_audio.close()},e=l["c"]([c()({components:{ChangePwd:r["a"]}})],e),e}(a["default"]),m=d,f=m,w=(o("96ab"),o("2877")),_=Object(w["a"])(f,s,n,!1,null,"62714716",null);e["default"]=_.exports}}]);