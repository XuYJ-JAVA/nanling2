(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-285ba9c0"],{3335:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-card",{staticClass:"card",attrs:{bordered:!1}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"任务名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.name",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}],expression:"[ 'task.name', {rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务名称"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"任务描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.description",{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}],expression:"['task.description', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务描述"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"执行人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.executor",{rules:[{required:!0,message:"请选择执行人"}]}],expression:"['task.executor',{rules: [{ required: true, message: '请选择执行人'}]}  ]"}],attrs:{placeholder:"请选择执行人"}},[a("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),a("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"责任人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.manager",{rules:[{required:!0,message:"请选择责任人"}]}],expression:"['task.manager',  {rules: [{ required: true, message: '请选择责任人'}]} ]"}],attrs:{placeholder:"请选择责任人"}},[a("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),a("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"提醒时间"}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.time",{rules:[{required:!0,message:"请选择提醒时间"}]}],expression:"['task.time', {rules: [{ required: true, message: '请选择提醒时间'}]} ]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{label:"任务类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.type",{rules:[{required:!0,message:"请选择任务类型"}]}],expression:"['task.type', {rules: [{ required: true, message: '请选择任务类型'}]} ]"}],attrs:{placeholder:"请选择任务类型"}},[a("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),a("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1)],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[a("a-table",{attrs:{columns:e.columns,dataSource:e.data,pagination:!1,size:"middle"},scopedSlots:e._u([e._l(["name","workId","department"],(function(t,r){return{key:t,fn:function(n,i,o){return[a("a-tooltip",{attrs:{title:"必填项",defaultVisible:!1,overlayStyle:{color:"red"}}},[i.editable?a("a-input",{key:t,staticStyle:{margin:"-5px 0"},attrs:{value:n,placeholder:e.columns[r].title},on:{change:function(a){return e.handlerRowChange(a.target.value,i.key,t)}}}):[e._v(e._s(n))]],2)]}}})),{key:"operation",fn:function(t,r,n){return[r.editable?[r.isNew?a("span",[a("a",{on:{click:function(t){return e.saveRow(r.key)}}},[e._v("添加")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.removeRow(r.key)}}},[a("a",[e._v("删除")])])],1):a("span",[a("a",{on:{click:function(t){return e.saveRow(r.key)}}},[e._v("保存")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.cancelEditRow(r.key)}}},[e._v("取消")])],1)]:a("span",[a("a",{on:{click:function(t){return e.editRow(r.key)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.removeRow(r.key)}}},[a("a",[e._v("删除")])])],1)]}}],null,!0)}),a("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newRow}},[e._v("新增成员")])],1),a("a-tab-pane",{key:"2",attrs:{tab:"Tab 2",forceRender:""}},[e._v("\n          Content of Tab Pane 2\n        ")]),a("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[e._v("Content of Tab Pane 3")])],1)],1)],1)],1)},n=[],i=a("0fea"),o=a("88bc"),s=a.n(o),l=a("c1df"),c=a.n(l);function d(e){return p(e)||f(e)||m(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return v(e)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var h={name:"JeecgDemoTabsModal",data:function(){return{title:"操作",visible:!1,model:{},columns:[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],data:[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}],confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/jeecgDemo/add",edit:"/test/jeecgDemo/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(s()(t.model,"name","keyWord","sex","age","email","content")),t.form.setFieldsValue({punchTime:t.model.punchTime?c()(t.model.punchTime,"YYYY-MM-DD HH:mm:ss"):null}),t.form.setFieldsValue({birthday:t.model.birthday?c()(t.model.birthday):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var n="",o="";e.model.id?(n+=e.url.edit,o="put"):(n+=e.url.add,o="post");var s=Object.assign(e.model,r);s.punchTime=s.punchTime?s.punchTime.format("YYYY-MM-DD HH:mm:ss"):null,s.birthday=s.birthday?s.birthday.format():null,Object(i["h"])(n,s,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},newRow:function(){var e=Math.round((new Date).getTime()).toString();this.data.push({key:e,name:"",workId:"",department:"",editable:!0,isNew:!0})},removeRow:function(e){var t=this.data.filter((function(t){return t.key!==e}));this.data=t},saveRow:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!1,t.isNew=!1},handlerRowChange:function(e,t,a){var r=d(this.data),n=r.filter((function(e){return t===e.key}))[0];n&&(n[a]=e,this.data=r)},editRow:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!t.editable},cancelEditRow:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!1}}},b=h,k=(a("bd84"),a("2877")),y=Object(k["a"])(b,r,n,!1,null,"44500566",null);t["default"]=y.exports},a5ad:function(e,t,a){},bd84:function(e,t,a){"use strict";var r=a("a5ad"),n=a.n(r);n.a}}]);