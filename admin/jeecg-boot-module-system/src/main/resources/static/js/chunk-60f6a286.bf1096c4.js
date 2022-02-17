(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60f6a286"],{"35a4":function(e,t,a){},"8a45":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.orderMainModel,rules:e.validatorRules}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单号",required:"",prop:"orderCode"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.orderMainModel.orderCode,callback:function(t){e.$set(e.orderMainModel,"orderCode",t)},expression:"orderMainModel.orderCode"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单类型",prop:"ctype"}},[a("a-select",{attrs:{placeholder:"请选择订单类型"},model:{value:e.orderMainModel.ctype,callback:function(t){e.$set(e.orderMainModel,"ctype",t)},expression:"orderMainModel.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单日期",prop:"orderDate"}},[a("a-date-picker",{attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.orderMainModel.orderDate,callback:function(t){e.$set(e.orderMainModel,"orderDate",t)},expression:"orderMainModel.orderDate"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单金额",prop:"orderMoney"}},[a("a-input-number",{staticStyle:{width:"200px"},model:{value:e.orderMainModel.orderMoney,callback:function(t){e.$set(e.orderMainModel,"orderMoney",t)},expression:"orderMainModel.orderMoney"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单备注",prop:"content"}},[a("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.orderMainModel.content,callback:function(t){e.$set(e.orderMainModel,"content",t)},expression:"orderMainModel.content"}})],1)],1)],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:5}},[e._v("客户名")]),a("a-col",{attrs:{span:5}},[e._v("性别")]),a("a-col",{attrs:{span:6}},[e._v("身份证号码")]),a("a-col",{attrs:{span:6}},[e._v("手机号")]),a("a-col",{attrs:{span:2}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"id"},model:{value:t.id,callback:function(a){e.$set(t,"id",a)},expression:"item.id"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"客户名"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-model-item",[a("a-select",{attrs:{placeholder:"性别"},model:{value:t.sex,callback:function(a){e.$set(t,"sex",a)},expression:"item.sex"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderCustomerList."+r+".idcard",rules:[{required:!0,message:"请输入身份证号",trigger:"blur"},{pattern:e.rules.IDCard,message:"身份证号格式不对!"}]}},[a("a-input",{attrs:{placeholder:"身份证号"},model:{value:t.idcard,callback:function(a){e.$set(t,"idcard",a)},expression:"item.idcard"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderCustomerList."+r+".telphone",rules:e.rules.mobile}},[a("a-input",{attrs:{placeholder:"手机号"},model:{value:t.telphone,callback:function(a){e.$set(t,"telphone",a)},expression:"item.telphone"}})],1)],1),a("a-col",{attrs:{span:2}},[a("a-form-model-item",[a("a-icon",{staticStyle:{fontSize:"20px"},attrs:{type:"minus-circle"},on:{click:function(t){return e.delRowCustom(r)}}})],1)],1)],1)})),a("a-button",{staticStyle:{width:"98%","margin-top":"10px"},attrs:{type:"dashed"},on:{click:e.addRowCustom}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加客户信息\n            ")],1)],2)]),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:6}},[e._v("航班号")]),a("a-col",{attrs:{span:6}},[e._v("航班时间")]),a("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"id"},model:{value:t.id,callback:function(a){e.$set(t,"id",a)},expression:"item.id"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderTicketList."+r+".ticketCode",rules:{required:!0,message:"请输入航班号",trigger:"blur"}}},[a("a-input",{attrs:{placeholder:"航班号"},model:{value:t.ticketCode,callback:function(a){e.$set(t,"ticketCode",a)},expression:"item.ticketCode"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",[a("a-date-picker",{attrs:{placeholder:"航班时间",valueFormat:"YYYY-MM-DD"},model:{value:t.tickectDate,callback:function(a){e.$set(t,"tickectDate",a)},expression:"item.tickectDate"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",[a("a-icon",{staticStyle:{fontSize:"20px"},attrs:{type:"minus-circle"},on:{click:function(t){return e.delRowTicket(r)}}})],1)],1)],1)})),a("a-button",{staticStyle:{width:"98%","margin-top":"10px"},attrs:{type:"dashed"},on:{click:e.addRowTicket}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加机票信息\n            ")],1)],2)])],1)],1)],1)],1)},o=[],i=a("0fea"),s=a("2dab"),l={name:"JeecgOrderMainModal",components:{JDate:s["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{orderCode:[{required:!0,message:"订单号不能为空",trigger:"blur"}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.orderMainModel=Object.assign({jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},e),this.orderMainModel.id){var a={id:this.orderMainModel.id};Object(i["c"])(this.url.orderCustomerList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(i["c"])(this.url.orderTicketList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var r="",o="";e.orderMainModel.id?(r+=e.url.edit,o="put"):(r+=e.url.add,o="post"),Object(i["h"])(r,e.orderMainModel,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){var t=this.orderMainModel;t["jeecgOrderCustomerList"].splice(e,1),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),this.$forceUpdate()},delRowTicket:function(e){var t=this.orderMainModel;t["jeecgOrderTicketList"].splice(e,1),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},n=l,d=(a("a340"),a("2877")),c=Object(d["a"])(n,r,o,!1,null,"f5211f06",null);t["default"]=c.exports},a340:function(e,t,a){"use strict";var r=a("35a4"),o=a.n(r);o.a}}]);