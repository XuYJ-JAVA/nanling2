(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3076b886"],{"05ed":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1}},[e("div",{staticClass:"chart-card-header"},[e("div",{staticClass:"meta"},[e("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),e("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),e("div",{staticClass:"total"},[e("span",[t._v(t._s(t.total))])])]),e("div",{staticClass:"chart-card-content"},[e("div",{staticClass:"content-fix"},[t._t("default")],2)]),e("div",{staticClass:"chart-card-footer"},[e("div",{staticClass:"field"},[t._t("footer")],2)])])},n=[],i={name:"ChartCard",props:{title:{type:String,default:""},total:{type:String,default:""},loading:{type:Boolean,default:!1}}},s=i,o=(e("698a"),e("2877")),l=Object(o["a"])(s,r,n,!1,null,"0715823f",null);a["default"]=l.exports},"0923":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank"},[e("h4",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(a,r){return e("li",{key:r},[e("span",{class:r<3?"active":null},[t._v(t._s(r+1))]),e("span",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.total))])])})),0)])},n=[],i={name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}},s=i,o=(e("9a69"),e("2877")),l=Object(o["a"])(s,r,n,!1,null,"8ec947b4",null);a["default"]=l.exports},"0a02":function(t,a,e){"use strict";var r=e("d83b"),n=e.n(r);n.a},"1d43":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"antv-chart-mini"},[e("div",{staticClass:"chart-wrapper",style:{height:46}},[e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,padding:[36,0,18,0]}},[e("v-tooltip"),e("v-smooth-area",{attrs:{position:"x*y"}})],1)],1)])},n=[],i=e("5a0c"),s=e.n(i),o=[],l=(new Date).getTime(),c=0;c<10;c++)o.push({x:s()(new Date(l+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var d={name:"MiniArea",props:{dataSource:{type:Array,default:function(){return[]}},x:{type:String,default:"x"},y:{type:String,default:"y"}},data:function(){return{data:[],height:100}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){0===this.dataSource.length?this.data=o:this.data=this.dataSource}},u=d,f=(e("9203"),e("2877")),p=Object(f["a"])(u,r,n,!1,null,"6145ce76",null);a["default"]=p.exports},"34c4":function(t,a,e){"use strict";var r=e("8264"),n=e.n(r);n.a},"3ee3":function(t,a,e){"use strict";var r=e("c09e"),n=e.n(r);n.a},"4ec6":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[e("v-tooltip"),e("v-axis"),e("v-legend"),e("v-line",{attrs:{position:"type*y",color:"x"}}),e("v-point",{attrs:{position:"type*y",color:"x",size:4,"v-style":t.style,shape:"circle"}})],1)],1)},n=[],i=e("7104"),s=e("c917");function o(t,a){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=l(t))||a&&t&&"number"===typeof t.length){e&&(t=e);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==e.return||e.return()}finally{if(o)throw i}}}}function l(t,a){if(t){if("string"===typeof t)return c(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,a):void 0}}function c(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=t[e];return r}var d={name:"LineChartMultid",mixins:[s["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jan",jeecg:7,jeebt:3.9},{type:"Feb",jeecg:6.9,jeebt:4.2},{type:"Mar",jeecg:9.5,jeebt:5.7},{type:"Apr",jeecg:14.5,jeebt:8.5},{type:"May",jeecg:18.4,jeebt:11.9},{type:"Jun",jeecg:21.5,jeebt:15.2},{type:"Jul",jeecg:25.2,jeebt:17},{type:"Aug",jeecg:26.5,jeebt:16.6},{type:"Sep",jeecg:23.3,jeebt:14.2},{type:"Oct",jeecg:18.3,jeebt:10.3},{type:"Nov",jeecg:13.9,jeebt:6.6},{type:"Dec",jeecg:9.6,jeebt:4.8}]}},fields:{type:Array,default:function(){return["jeecg","jeebt"]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{scale:[{type:"cat",dataKey:"x",min:0,max:1}],style:{stroke:"#fff",lineWidth:1}}},computed:{data:function(){var t=this,a=(new i["DataSet"].View).source(this.dataSource);a.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var e=a.rows;return e.forEach((function(a){var e,r=o(t.aliases);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n.field===a.x){a.x=n.alias;break}}}catch(i){r.e(i)}finally{r.f()}})),e}}},u=d,f=e("2877"),p=Object(f["a"])(u,r,n,!1,null,"cb14ba92",null);a["default"]=p.exports},"4fa4":function(t,a,e){},"698a":function(t,a,e){"use strict";var r=e("727f"),n=e.n(r);n.a},"6b55":function(t,a,e){},"727f":function(t,a,e){},"81d1":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head-info",class:t.center&&"center"},[e("span",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.content))]),t.bordered?e("em"):t._e()])},n=[],i={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},s=i,o=(e("3ee3"),e("2877")),l=Object(o["a"])(s,r,n,!1,null,"61b1bcfd",null);a["default"]=l.exports},8264:function(t,a,e){},9203:function(t,a,e){"use strict";var r=e("d054"),n=e.n(r);n.a},"942d":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{width:null==t.width?"auto":t.width+"px"}},[e("v-chart",{attrs:{forceFit:null==t.width,height:t.height,data:t.data,padding:"0"}},[e("v-tooltip"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},n=[],i=e("5a0c"),s=e.n(i),o=[],l=(new Date).getTime(),c=0;c<10;c++)o.push({x:s()(new Date(l+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var d=["x*y",function(t,a){return{name:t,value:a}}],u=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],f={name:"MiniBar",props:{dataSource:{type:Array,default:function(){return[]}},width:{type:Number,default:null},height:{type:Number,default:200}},created:function(){0===this.dataSource.length?this.data=o:this.data=this.dataSource},data:function(){return{tooltip:d,data:[],scale:u}}},p=f,h=(e("34c4"),e("2877")),y=Object(h["a"])(p,r,n,!1,null,"dda27cb2",null);a["default"]=y.exports},"94bb":function(t,a,e){"use strict";e.r(a);for(var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总销售额",total:"￥126,560"}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n            12%\n          ")]),e("trend",{attrs:{flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            11%\n          ")])],1),e("template",{slot:"footer"},[t._v("日均销售额"),e("span",[t._v("￥ 234.56")])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"订单量",total:t._f("NumberFormat")(8846)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-area")],1),e("template",{slot:"footer"},[t._v("日订单量"),e("span",[t._v(" "+t._s(t._f("NumberFormat")("1234")))])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"支付笔数",total:t._f("NumberFormat")(6560)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-bar",{attrs:{height:40}})],1),e("template",{slot:"footer"},[t._v("转化率 "),e("span",[t._v("60%")])])],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"运营活动效果",total:"78%"}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:8}})],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("同周比")]),t._v("\n            12%\n          ")]),e("trend",{attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日环比")]),t._v("\n            80%\n          ")])],1)],2)],1)],1),e("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("div",{staticClass:"extra-item"},[e("a",[t._v("今日")]),e("a",[t._v("本周")]),e("a",[t._v("本月")]),e("a",[t._v("本年")])]),e("a-range-picker",{style:{width:"256px"}})],1),e("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"销售额"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额排行",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1),e("a-tab-pane",{key:"2",attrs:{tab:"销售趋势"}},[e("a-row",[e("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{title:"销售额趋势",dataSource:t.barData}})],1),e("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"门店销售排行榜",list:t.rankList}})],1)],1)],1)],1)],1)]),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"最近一周访问量统计"}},[e("a-row",[e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日IP",content:t.loginfo.todayIp}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"environment"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"今日访问",content:t.loginfo.todayVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"team"},slot:"indicator"})],1)],1),e("a-col",{attrs:{span:6}},[e("head-info",{attrs:{title:"总访问量",content:t.loginfo.totalVisitCount}})],1),e("a-col",{attrs:{span:2}},[e("a-spin",{staticClass:"circle-cust"},[e("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"rise"},slot:"indicator"})],1)],1)],1),e("line-chart-multid",{attrs:{fields:t.visitFields,dataSource:t.visitInfo}})],1)],1)],1)],1)},n=[],i=e("05ed"),s=e("da05"),o=e("3896"),l=e("1d43"),c=e("942d"),d=e("bf13"),u=e("0923"),f=e("edd9"),p=e("4ec6"),h=e("81d1"),y=e("611e"),g=e("4ec3"),v=[],m=0;m<7;m++)v.push({name:"白鹭岛 "+(m+1)+" 号店",total:1234.56-100*m});for(var b=[],x=0;x<12;x+=1)b.push({x:"".concat(x+1,"月"),y:Math.floor(1e3*Math.random())+200});var _={name:"IndexChart",components:{ATooltip:o["a"],ACol:s["b"],ChartCard:i["default"],MiniArea:l["default"],MiniBar:c["default"],MiniProgress:d["default"],RankList:u["default"],Bar:f["default"],Trend:y["a"],LineChartMultid:p["default"],HeadInfo:h["default"]},data:function(){var t=this.$createElement;return{loading:!0,center:null,rankList:v,barData:b,loginfo:{},visitFields:["ip","visit"],visitInfo:[],indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px"})}},created:function(){var t=this;setTimeout((function(){t.loading=!t.loading}),1e3),this.initLogInfo()},methods:{initLogInfo:function(){var t=this;Object(g["u"])(null).then((function(a){a.success&&(Object.keys(a.result).forEach((function(t){a.result[t]=a.result[t]+""})),t.loginfo=a.result)})),Object(g["B"])().then((function(a){a.success&&(t.visitInfo=a.result)}))}}},C=_,j=(e("0a02"),e("2877")),w=Object(j["a"])(C,r,n,!1,null,"602a0832",null);a["default"]=w.exports},"9a69":function(t,a,e){"use strict";var r=e("6b55"),n=e.n(r);n.a},bf13:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-mini-progress"},[e("div",{staticClass:"target",style:{left:t.target+"%"}},[e("span",{style:{backgroundColor:t.color}}),e("span",{style:{backgroundColor:t.color}})]),e("div",{staticClass:"progress-wrapper"},[e("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},n=[],i={name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}},s=i,o=(e("fca0"),e("2877")),l=Object(o["a"])(s,r,n,!1,null,"51cc711b",null);a["default"]=l.exports},c09e:function(t,a,e){},c917:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var r={methods:{handleClick:function(t,a){this.handleEvent("click",t,a)},handleEvent:function(t,a,e){this.$emit(t,a,e)}}}},d054:function(t,a,e){},d83b:function(t,a,e){},edd9:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),e("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[e("v-tooltip"),e("v-axis"),e("v-bar",{attrs:{position:"x*y"}})],1)],1)},n=[],i=e("ca00"),s={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(i["p"])()}},o=s,l=e("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null);a["default"]=c.exports},fca0:function(t,a,e){"use strict";var r=e("4fa4"),n=e.n(r);n.a}}]);