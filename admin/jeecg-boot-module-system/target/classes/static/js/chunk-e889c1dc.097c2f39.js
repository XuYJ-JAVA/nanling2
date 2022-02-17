(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e889c1dc"],{2977:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-tabs",{attrs:{defaultActiveKey:"1"},on:{change:e.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"登录日志"}}),a("a-tab-pane",{key:"2",attrs:{tab:"操作日志"}})],1)],1),a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"搜索日志"}},[a("a-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:e.queryParam.keyWord,callback:function(t){e.$set(e.queryParam,"keyWord",t)},expression:"queryParam.keyWord"}})],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"创建时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-range-picker",{staticStyle:{width:"210px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onDateChange,ok:e.onDateOk},model:{value:e.queryParam.createTimeRange,callback:function(t){e.$set(e.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),"2"===e.tabKey?a("a-col",{attrs:{md:5,sm:8}},[a("a-form-item",{staticStyle:{left:"10px"},attrs:{label:"操作类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择操作类型",dictCode:"operate_type"},model:{value:e.queryParam.operateType,callback:function(t){e.$set(e.queryParam,"operateType",t)},expression:"queryParam.operateType"}})],1)],1):e._e(),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",left:"10px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.queryParam.logType,expression:"queryParam.logType==2"}],staticStyle:{margin:"0"}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[a("a-badge",{staticStyle:{"vertical-align":"middle"},attrs:{status:"success"}}),a("span",{staticStyle:{"vertical-align":"middle"}},[e._v("请求方法:"+e._s(t.method))])],1),a("div",[a("a-badge",{staticStyle:{"vertical-align":"middle"},attrs:{status:"processing"}}),a("span",{staticStyle:{"vertical-align":"middle"}},[e._v("请求参数:"+e._s(t.requestParam))])],1)])}},{key:"logContent",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:40}})],1)}}])})],1)},n=[],i=a("ca00"),s=a("b65a"),l=a("d579"),o={name:"LogList",mixins:[s["a"]],components:{JEllipsis:l["default"]},data:function(){return{description:"这是日志管理页面",queryParam:{ipInfo:"",createTimeRange:[],logType:"1",keyWord:""},tabKey:"1",columns:[{title:"#",dataIndex:"",key:"rowIndex",align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"日志内容",align:"left",dataIndex:"logContent",scopedSlots:{customRender:"logContent"},sorter:!0},{title:"操作人ID",dataIndex:"userid",align:"center",sorter:!0},{title:"操作人名称",dataIndex:"username",align:"center",sorter:!0},{title:"IP",dataIndex:"ip",align:"center",sorter:!0},{title:"耗时(毫秒)",dataIndex:"costTime",align:"center",sorter:!0},{title:"日志类型",dataIndex:"logType_dictText",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center",sorter:!0}],operateColumn:{title:"操作类型",dataIndex:"operateType_dictText",align:"center"},labelCol:{xs:{span:1},sm:{span:2}},wrapperCol:{xs:{span:10},sm:{span:16}},url:{list:"/sys/log/list"}}},methods:{getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,delete e.createTimeRange,this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType),Object(i["d"])(e)},searchReset:function(){var e=this,t=e.queryParam.logType;e.queryParam={},e.queryParam.logType=t,e.loadData(this.ipagination.current)},callback:function(e){2==e?(this.tabKey="2",this.columns.splice(7,0,this.operateColumn)):9==this.columns.length&&(this.tabKey="1",this.columns.splice(7,1));var t=this;t.queryParam.logType=e,t.loadData()},onDateChange:function(e,t){this.queryParam.createTime_begin=t[0],this.queryParam.createTime_end=t[1]},onDateOk:function(e){}}},c=o,u=(a("317f"),a("2877")),d=Object(u["a"])(c,r,n,!1,null,"7255fb63",null);t["default"]=d.exports},"317f":function(e,t,a){"use strict";var r=a("71ca"),n=a.n(r);n.a},"71ca":function(e,t,a){}}]);