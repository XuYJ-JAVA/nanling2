(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22069b95","chunk-32605240","chunk-674f552c","chunk-da133950"],{1847:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{staticStyle:{width:"100%"},attrs:{"tab-list":e.tabList,"active-tab-key":e.key},on:{tabChange:function(t){return e.onTabChange(t,"key")}}},["accNum"===e.key?a("p",{staticStyle:{width:"100%"}},[a("search-view",{ref:"searchView"}),a("a-divider"),a("a-button",{attrs:{type:"primary"},on:{click:e.generateChart}},[e._v("生成图表")]),a("vertical-bar",{ref:"verticalBar",attrs:{xAxisData:e.xAxisData,seriesData:e.seriesData}})],1):"app"===e.key?a("p",[e._v("\n      饼图\n    ")]):a("p",[e._v("\n      折线图\n    ")])])],1)},n=[],s=a("0fea"),i=a("9de5"),o=a("e778"),c=a("59d7"),l={name:"Analysis",components:{VerticalBar:i["default"],LevelBar:o["default"],SearchView:c["default"]},data:function(){return{tabList:[{key:"accNum",tab:"高级分析"},{key:"app",tab:"饼图"},{key:"project",tab:"折线图"}],key:"accNum",url:{getChartData:"/acc/info/getChartData"},xAxisData:[],seriesData:[]}},methods:{onTabChange:function(e,t){this[t]=e},generateChart:function(){var e=this,t=this.$refs.searchView.queryParam,a={};a["startTime"]=t["startTime"],a["endTime"]=t["endTime"],a["routes"]=t["routes"].toString(),a["accidents"]=t["accidents"].toString(),a["results"]=t["results"].toString(),a["relatedRoute"]=t["relatedRoute"],a["belong"]=t["belong"].toString(),a["unit"]=t["unit"].toString(),Object(s["c"])(this.url.getChartData,a).then((function(t){if(t.success){var a=t.result;e.xAxisData=Object.keys(a),e.seriesData=Object.values(a)}else e.$message.warning(t.message)}))}},mounted:function(){}},u=l,d=a("2877"),h=Object(d["a"])(u,r,n,!1,null,"22c3de16",null);t["default"]=h.exports},"1fae":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("0fea"),n={methods:{setQueryParam:function(){var e=this.$refs.timeRadio.dateStrings;void 0!==e[0]&&(this.queryParam["startTime"]=e[0].replace("-",".")),void 0!==e[1]&&(this.queryParam["endTime"]=e[1].replace("-",".")),this.queryParam["routes"]=this.$refs.roadTypeTags.selectedTags.toString(),this.queryParam["accidents"]=this.$refs.accTypeTags.selectedTags.toString(),this.queryParam["results"]=this.$refs.accDegreeTags.selectedTags.toString(),this.queryParam["relatedRoute"]=this.$refs.roadConditionRadio.selectedRadio,this.queryParam["belong"]=this.$refs.squadronTags.selectedTags.toString()},searchAccInfo:function(){var e=this;this.setQueryParam(),Object(r["c"])(this.url.queryBySimpleConditions,this.queryParam).then((function(t){t.success?(e.data=t.result,e.showAccInfo()):e.$message.warning(t.message),e.onClose()}))},searchAccNumForRoads:function(){var e=this;Object(r["c"])(this.url.queryByRoads,this.queryParam).then((function(t){t.success?e.data=t.result:e.$message.warning(t.message),e.createBar()}))}}}},"2e59":function(e,t,a){"use strict";var r=a("64a6"),n=a.n(r);n.a},"40a7":function(e,t,a){"use strict";var r=a("41b2"),n=a.n(r),s={today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},i={placeholder:"请选择时间"},o=i,c={lang:n()({placeholder:"请选择日期",rangePlaceholder:["开始日期","结束日期"]},s),timePickerLocale:n()({},o)};c.lang.ok="确 定";t["a"]=c},"4b80":function(e,t,a){},"59d7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[a("a-radio-group",{staticStyle:{border:"0",width:"100%"},attrs:{"button-style":"solid",size:"small"},on:{change:e.onChange}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n          时间\n        ")]),e._l(e.Time,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-radio-button",{staticStyle:{border:"0"},attrs:{value:t}},[e._v("\n              "+e._s(t)+"\n            ")])],1)]})),a("a-col",{attrs:{span:2}},[e.visible?a("a-range-picker",{attrs:{ranges:{"今天":[e.moment(),e.moment()],"本月":[e.moment(),e.moment().endOf("month")]},locale:e.locale},on:{change:e.handlePickerChange}}):e._e()],1)],2)],1)],1),a("p",[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n        道路情况\n      ")]),e._l(e.Routes,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam["routes"].indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"routes")}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)]}))],2)],1),a("p",[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n        事故形态\n      ")]),e._l(e.Accidents,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam.accidents.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"accidents")}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)]}))],2)],1),a("p",[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n        事故后果\n      ")]),e._l(e.Results,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam.results.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"results")}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)]}))],2)],1),a("p",[a("a-radio-group",{staticStyle:{border:"0",width:"100%"},attrs:{"button-style":"solid",size:"small"},on:{change:e.handleRelatedRouteChange}},[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n          是否涉路施工\n        ")]),e._l(e.RelatedRoute,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-radio-button",{staticStyle:{border:"0"},attrs:{value:t}},[e._v("\n              "+e._s(t)+"\n            ")])],1)]}))],2)],1)],1),a("p",[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n        所属中队\n      ")]),e._l(e.Belong,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam.belong.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"belong")}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)]}))],2)],1),a("p",[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n        参考单位\n      ")]),e._l(e.Units,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam.unit.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"unit")}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)]})),a("a-col",{attrs:{span:3}},[e._l(e.TimeUnits,(function(t){return[a("a-checkable-tag",{key:t,staticStyle:{"font-size":"14px"},attrs:{checked:e.queryParam.unit.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a,"unit")}}},[e._v("\n            "+e._s(t)+"\n          ")])]}))],2),a("a-col",{attrs:{span:5}},[e._l(e.queryParam.unit,(function(t){return[a("span",{key:t,staticStyle:{color:"skyblue"}},[e._v(e._s(t)+"->")])]}))],2)],2)],1),a("p",[a("a-radio-group",{staticStyle:{border:"0",width:"100%"},attrs:{"button-style":"solid",size:"small"},on:{change:e.handleChartChange}},[a("a-row",[a("a-col",{staticClass:"title",attrs:{span:2}},[e._v("\n          图表类型\n        ")]),e._l(e.Chart,(function(t){return[a("a-col",{key:t,attrs:{span:2}},[a("a-radio-button",{staticStyle:{border:"0"},attrs:{value:t}},[e._v("\n              "+e._s(t)+"\n            ")])],1)]}))],2)],1)],1)])},n=[],s=a("c1df"),i=a.n(s),o=a("40a7");function c(e){return h(e)||d(e)||u(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function h(e){if(Array.isArray(e))return f(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var y=new Date,m=y.getFullYear(),g=["年","半年","季度","月","天"],p=["道路情况","事故形态","事故后果","涉路施工","所属中队"],b=["时间不限",m+"年以来",m-1+"年以来",m-4+"年以来","自定义范围..."],v=["国道","省道","县乡","城市","其他"],x=["机机","机非","非非","多车","其他"],k=["财损","人伤","亡人","其他"],_=["不限","是","否"],w=["中队一","中队二","中队三","中队四","中队五"],C=["饼图","直方图","折线图"],S={name:"SearchView",data:function(){return{Chart:C,TimeUnits:g,Units:p,Routes:v,Accidents:x,Results:k,RelatedRoute:_,Belong:w,Time:b,queryParam:{startTime:"",endTime:"",time:"",routes:[],accidents:[],results:[],relatedRoute:"",belong:[],unit:[],chart:""},visible:!1,locale:o["a"]}},methods:{moment:i.a,handleChange:function(e,t,a){var r=this.queryParam,n=r.routes,s=r.accidents,i=r.results,o=r.belong,l=r.unit;if("routes"===a){var u=t?[].concat(c(n),[e]):n.filter((function(t){return t!==e}));this.queryParam["routes"]=u}else if("accidents"===a){var d=t?[].concat(c(s),[e]):s.filter((function(t){return t!==e}));this.queryParam["accidents"]=d}else if("results"===a){var h=t?[].concat(c(i),[e]):i.filter((function(t){return t!==e}));this.queryParam["results"]=h}else if("belong"===a){var f=t?[].concat(c(o),[e]):o.filter((function(t){return t!==e}));this.queryParam["belong"]=f}else if("unit"===a){var y=t?[].concat(c(l),[e]):l.filter((function(t){return t!==e}));this.queryParam["unit"]=y}},onChange:function(e){this.visible=!1,e.target.value===b[4]?this.visible=!0:e.target.value===b[0]?(this.queryParam["startTime"]="",this.queryParam["endTime"]=""):e.target.value===b[1]?this.queryParam["startTime"]=m+".01.01_00.00.00":e.target.value===b[2]?this.queryParam["startTime"]=m-1+".01.01_00.00.00":e.target.value===b[3]&&(this.queryParam["startTime"]=m-4+".01.01_00.00.00")},handlePickerChange:function(e,t){this.queryParam["startTime"]=e[0].format("yyyy.MM.DD")+"_00.00.00",this.queryParam["endTime"]=e[1].format("yyyy.MM.DD")+"_00.00.00"},handleRelatedRouteChange:function(e){e.target.value===_[0]?this.queryParam["relatedRoute"]="":this.queryParam["relatedRoute"]=e.target.value},handleChartChange:function(e){this.queryParam["chart"]=e.target.value}}},P=S,q=(a("d787"),a("2877")),T=Object(q["a"])(P,r,n,!1,null,"1ee0c154",null);t["default"]=T.exports},"64a6":function(e,t,a){},"97ec":function(e,t,a){"use strict";var r=a("4b80"),n=a.n(r);n.a},"9de5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"container",attrs:{id:"container"}})},n=[],s=a("313e"),i={name:"VerticalBar",props:["xAxisData","seriesData"],data:function(){return{}},watch:{seriesData:function(){this.createBar()},xAxisData:function(){this.createBar()}},methods:{createBar:function(){if(this.xAxisData!==[]){var e=this.$refs.container,t=s["a"](e,null,{renderer:"svg"}),a={color:["#2f89cf"],toolbox:{show:!0,feature:{saveAsImage:{show:!0},magicType:{type:["line","bar"]}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"0%",bottom:"4%",containLabel:!0},xAxis:[{type:"category",data:this.xAxisData,axisTick:{alignWithLabel:!0},axisLabel:{color:"gray",fontSize:"12"},axisLine:{show:!1}}],yAxis:[{type:"value",axisLabel:{color:"gray",fontSize:"12"},axisLine:{show:!0,lineStyle:{color:"grid",width:1}}}],series:[{name:"Direct",type:"bar",barWidth:"35%",itemStyle:{barBorderRadius:5},data:this.seriesData}]};a&&t.setOption(a),window.addEventListener("resize",(function(){t.resize()}))}}},mounted:function(){this.createBar()}},o=i,c=(a("97ec"),a("2877")),l=Object(c["a"])(o,r,n,!1,null,"2b406eae",null);t["default"]=l.exports},d787:function(e,t,a){"use strict";var r=a("f75e"),n=a.n(r);n.a},e778:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"container",attrs:{id:"container"}})},n=[],s=a("313e"),i=a("1fae"),o={name:"LevelBar",mixins:[i["a"]],data:function(){return{data:{},url:{queryByRoads:"/acc/info/queryByRoads"},queryParam:{}}},methods:{createBar:function(){var e=this.$refs.container,t=s["a"](e,null,{renderer:"svg"}),a=["#1089E7","F57474","#56D0E3","#F8B448","#8B78F6","skyblue"],r={title:{},toolbox:{show:!0,feature:{saveAsImage:{show:!0},magicType:{type:["line","bar"]}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"22%",bottom:"10%"},xAxis:{show:!1},yAxis:[{type:"category",inverse:!0,data:["国道","省道","县乡","城市","其他"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"gray"}},{data:this.data,inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"gray"}}],series:[{name:"条",type:"bar",data:[19,0,2,60,19],yAxisIndex:0,itemStyle:{normal:{barBorderRadius:20,color:function(e){return a[e.dataIndex]}}},barCategoryGap:50,barWidth:20,label:{show:!0,position:"inside",formatter:"{c}%"}},{name:"框",type:"bar",data:[100,100,100,100,100],barCategoryGap:50,barWidth:20,yAxisIndex:1,itemStyle:{color:"none",borderColor:"#00c1de",borderWidth:3,barBorderRadius:15}}]};r&&t.setOption(r),window.addEventListener("resize",(function(){t.resize()}))}},mounted:function(){this.data=this.searchAccNumForRoads()}},c=o,l=(a("2e59"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,"4f9531bd",null);t["default"]=u.exports},f75e:function(e,t,a){}}]);