(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd42f"],{8144:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"itemText",label:"名称"}},[l("a-input",{attrs:{placeholder:"请输入名称"},model:{value:e.model.itemText,callback:function(t){e.$set(e.model,"itemText",t)},expression:"model.itemText"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"itemValue",label:"数据值"}},[l("a-input",{attrs:{placeholder:"请输入数据值"},model:{value:e.model.itemValue,callback:function(t){e.$set(e.model,"itemValue",t)},expression:"model.itemValue"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[l("a-input",{model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序值"}},[l("a-input-number",{attrs:{min:1},model:{value:e.model.sortOrder,callback:function(t){e.$set(e.model,"sortOrder",t)},expression:"model.sortOrder"}}),e._v("\n        值越小越靠前\n      ")],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否启用",hasFeedback:""}},[l("a-switch",{attrs:{checkedChildren:"启用",unCheckedChildren:"禁用"},on:{change:e.onChose},model:{value:e.visibleCheck,callback:function(t){e.visibleCheck=t},expression:"visibleCheck"}})],1)],1)],1)],1)},s=[],a=(l("88bc"),l("4ec3")),o=l("0fea"),d={name:"DictItemModal",data:function(){return{title:"操作",visible:!1,visibleCheck:!0,model:{},dictId:"",status:1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{itemText:[{required:!0,message:"请输入名称!"}],itemValue:[{required:!0,message:"请输入数据值!"},{validator:this.validateItemValue}]}}},created:function(){},methods:{add:function(e){this.dictId=e,this.edit({sortOrder:1,status:1})},edit:function(e){e.id&&(this.dictId=e.dictId),this.status=e.status,this.visibleCheck=1==e.status,this.model=Object.assign({},e),this.model.dictId=this.dictId,this.model.status=this.status,this.visible=!0},onChose:function(e){e?(this.status=1,this.visibleCheck=!0):(this.status=0,this.visibleCheck=!1)},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(l){if(!l)return!1;var i;t.confirmLoading=!0,e.model.itemText=(e.model.itemText||"").trim(),e.model.itemValue=(e.model.itemValue||"").trim(),e.model.description=(e.model.description||"").trim(),e.model.status=e.status,i=e.model.id?Object(a["o"])(e.model):Object(a["b"])(e.model),i.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},validateItemValue:function(e,t,l){var i={itemValue:t,dictId:this.dictId};if(this.model.id&&(i.id=this.model.id),t){var s=new RegExp("[`_~!@#$^&*()=|{}'.<>《》/?！￥（）—【】‘；：”“。，、？]");s.test(t)?l("数据值不能包含特殊字符！"):Object(o["c"])("/sys/dictItem/dictItemCheck",i).then((function(e){e.success?l():l(e.message)}))}else l()}}},n=d,r=l("2877"),m=Object(r["a"])(n,i,s,!1,null,null,null);t["default"]=m.exports}}]);