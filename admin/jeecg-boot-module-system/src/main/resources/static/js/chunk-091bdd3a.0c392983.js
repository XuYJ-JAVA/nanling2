(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-091bdd3a","chunk-c029ab7c"],{4123:function(e,a,n){},"60f4":function(e,a,n){"use strict";var t=n("4123"),o=n.n(t);o.a},"862d":function(e,a,n){"use strict";(function(a,n){e.exports=n()})(0,(function(){function e(e){var t=[];return e.AMapUI&&t.push(a(e.AMapUI)),e.Loca&&t.push(n(e.Loca)),Promise.all(t)}function a(e){return new Promise((function(a,n){var s=[];if(e.plugins)for(var l=0;l<e.plugins.length;l+=1)-1==o.AMapUI.plugins.indexOf(e.plugins[l])&&s.push(e.plugins[l]);if(i.AMapUI===t.failed)n("前次请求 AMapUI 失败");else if(i.AMapUI===t.notload){i.AMapUI=t.loading,o.AMapUI.version=e.version||o.AMapUI.version,l=o.AMapUI.version;var p=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+l+"/main.js",c.onerror=function(e){i.AMapUI=t.failed,n("请求 AMapUI 失败")},c.onload=function(){if(i.AMapUI=t.loaded,s.length)window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()}));else for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},p.appendChild(c)}else i.AMapUI===t.loaded?e.version&&e.version!==o.AMapUI.version?n("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a():e.version&&e.version!==o.AMapUI.version?n("不允许多个版本 AMapUI 混用"):r.AMapUI.push((function(e){e?n(e):s.length?window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a()}))}))}function n(e){return new Promise((function(a,n){if(i.Loca===t.failed)n("前次请求 Loca 失败");else if(i.Loca===t.notload){i.Loca=t.loading,o.Loca.version=e.version||o.Loca.version;var s=o.Loca.version,l=o.AMap.version.startsWith("2"),p=s.startsWith("2");if(l&&!p||!l&&p)n("JSAPI 与 Loca 版本不对应！！");else{l=o.key,p=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+s+"&key="+l,c.onerror=function(e){i.Loca=t.failed,n("请求 AMapUI 失败")},c.onload=function(){for(i.Loca=t.loaded,a();r.Loca.length;)r.Loca.splice(0,1)[0]()},p.appendChild(c)}}else i.Loca===t.loaded?e.version&&e.version!==o.Loca.version?n("不允许多个版本 Loca 混用"):a():e.version&&e.version!==o.Loca.version?n("不允许多个版本 Loca 混用"):r.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var t;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(t||(t={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},r={AMap:[],AMapUI:[],Loca:[]},s=[],l=function(e){"function"==typeof e&&(i.AMap===t.loaded?e(window.AMap):s.push(e))};return{load:function(a){return new Promise((function(n,r){if(i.AMap==t.failed)r("");else if(i.AMap==t.notload){var p=a.key,c=a.version,u=a.plugins;p?(window.AMap&&"lbs.amap.com"!==location.host&&r("禁止多种API加载方式混用"),o.key=p,o.AMap.version=c||o.AMap.version,o.AMap.plugins=u||o.AMap.plugins,i.AMap=t.loading,c=document.body||document.head,window.___onAPILoaded=function(o){if(delete window.___onAPILoaded,o)i.AMap=t.failed,r(o);else for(i.AMap=t.loaded,e(a).then((function(){n(window.AMap)}))["catch"](r);s.length;)s.splice(0,1)[0]()},u=document.createElement("script"),u.type="text/javascript",u.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+p+"&plugin="+o.AMap.plugins.join(","),u.onerror=function(e){i.AMap=t.failed,r(e)},c.appendChild(u)):r("请填写key")}else if(i.AMap==t.loaded)if(a.key&&a.key!==o.key)r("多个不一致的 key");else if(a.version&&a.version!==o.AMap.version)r("不允许多个版本 JSAPI 混用");else{if(p=[],a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==o.AMap.plugins.indexOf(a.plugins[c])&&p.push(a.plugins[c]);p.length?window.AMap.plugin(p,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}else if(a.key&&a.key!==o.key)r("多个不一致的 key");else if(a.version&&a.version!==o.AMap.version)r("不允许多个版本 JSAPI 混用");else{var d=[];if(a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==o.AMap.plugins.indexOf(a.plugins[c])&&d.push(a.plugins[c]);l((function(){d.length?window.AMap.plugin(d,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},r={AMap:[],AMapUI:[],Loca:[]}}}}))},9333:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"container"}})},o=[],i=n("862d"),r=n.n(i);function s(e){for(var a=e.geometry.coordinates,n=[],t=0,o=a.length;t<o;t++)n.push(a[t][0]);return n}var l={name:"GetPoint",data:function(){return{map:null,AMap:null,AMapUI:null,zoom:11,longitude:0,latitude:0}},methods:{initMap:function(){var e=this;r.a.load({key:"a60a54a59267d67bb4600f02ce6e636c",version:"2.0",plugins:["AMap.Scale","AMap.ToolBar","AMap.Driving","AMap.AutoComplete"],AMapUI:{version:"1.1",plugins:["misc/PointSimplifier","geo/DistrictExplorer"]},Loca:{version:"2.0.0"}}).then((function(a){e.map=new a.Map("container",{zoom:e.zoom,center:[118.326339,30.90522],resizeEnable:!0}),e.AMap=a,e.AMapUI=AMapUI,e.initP();var n=e;e.map.on("click",(function(e){if(n.map.getZoom()<20)n.$message.warning("请将地图放大至最大后点击选点！");else{for(var t=n.map.getAllOverlays("marker"),o=0;o<t.length;o++)t[o].remove();var i=new a.Marker({clickable:!1,position:e.lnglat,icon:"./poi-marker-default.png",offset:new a.Pixel(-25,-57)});n.longitude=e.pos[0],n.latitude=e.pos[1],i.setMap(n.map)}}))}))},initP:function(){var e=new this.AMapUI.DistrictExplorer({map:this.map}),a=[340223],n=this;e.loadMultiAreaNodes([a].concat(a),(function(e,a){var t=[new n.AMap.LngLat(-180,90),new n.AMap.LngLat(-180,-90),new n.AMap.LngLat(180,-90),new n.AMap.LngLat(180,90)],o=a.slice(1),i=[];i.push(t),i.push.apply(i,s(o[0].getParentFeature()));new n.AMap.Polygon({strokeStyle:"dashed",strokeColor:"red",strokeOpacity:1,strokeWeight:1,fillColor:"white",fillOpacity:1,map:n.map,path:i})}))}},mounted:function(){this.initMap()}},p=l,c=(n("b3f3"),n("2877")),u=Object(c["a"])(p,t,o,!1,null,"9f9ffb88",null);a["default"]=u.exports},b3f3:function(e,a,n){"use strict";var t=n("b6cc"),o=n.n(t);o.a},b6cc:function(e,a,n){},cc1c:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("a-card",{staticStyle:{width:"60%",margin:"auto"},attrs:{title:"信息录入"}},[n("p",[e._v("道路类型")]),n("a-checkbox-group",{attrs:{options:e.RoadPlainOptions},model:{value:e.storeParam["routes"],callback:function(a){e.$set(e.storeParam,"routes",a)},expression:"storeParam['routes']"}}),n("a-divider"),n("p",[e._v("事故类型")]),n("a-checkbox-group",{attrs:{options:e.AccTypePlainOptions},model:{value:e.storeParam["accidents"],callback:function(a){e.$set(e.storeParam,"accidents",a)},expression:"storeParam['accidents']"}}),n("a-divider"),n("p",[e._v("事故程度")]),n("a-checkbox-group",{attrs:{options:e.AccDegreePlainOptions},model:{value:e.storeParam["results"],callback:function(a){e.$set(e.storeParam,"results",a)},expression:"storeParam['results']"}}),n("a-divider"),n("p",[e._v("所属大队")]),n("a-radio-group",{model:{value:e.storeParam["belong"],callback:function(a){e.$set(e.storeParam,"belong",a)},expression:"storeParam['belong']"}},[n("a-radio",{attrs:{value:e.Squadron[0]}},[e._v(e._s(e.Squadron[0]))]),n("a-radio",{attrs:{value:e.Squadron[1]}},[e._v(e._s(e.Squadron[1]))]),n("a-radio",{attrs:{value:e.Squadron[2]}},[e._v(e._s(e.Squadron[2]))]),n("a-radio",{attrs:{value:e.Squadron[3]}},[e._v(e._s(e.Squadron[3]))]),n("a-radio",{attrs:{value:e.Squadron[4]}},[e._v(e._s(e.Squadron[4]))])],1),n("a-divider"),n("P",[e._v("路段是否施工")]),n("a-radio-group",{model:{value:e.storeParam["relatedRoute"],callback:function(a){e.$set(e.storeParam,"relatedRoute",a)},expression:"storeParam['relatedRoute']"}},[n("a-radio",{attrs:{value:"是"}},[e._v("是")]),n("a-radio",{attrs:{value:"否"}},[e._v("否")])],1),n("a-divider"),n("p",[e._v("地图选点")]),n("div",{attrs:{id:"container"}}),n("a-divider"),n("p",[e._v("事故地点")]),n("a-space",{attrs:{size:"middle"}},[n("a-input",{attrs:{placeholder:"经度"},model:{value:e.longitude,callback:function(a){e.longitude=a},expression:"longitude"}}),n("a-input",{attrs:{placeholder:"纬度"},model:{value:e.latitude,callback:function(a){e.latitude=a},expression:"latitude"}})],1),n("a-divider"),n("p",[e._v("具体地点")]),n("a-input",{attrs:{placeholder:"请输入具体地点"},model:{value:e.storeParam["realpath"],callback:function(a){e.$set(e.storeParam,"realpath",a)},expression:"storeParam['realpath']"}}),n("a-divider"),n("p",[e._v("事故发生时间")]),n("a-date-picker",{model:{value:e.storeParam["time"],callback:function(a){e.$set(e.storeParam,"time",a)},expression:"storeParam['time']"}}),n("a-divider"),n("p",[e._v("现场照片")]),n("a-upload",{attrs:{method:"post","list-type":"picture-card",action:e.url.upload},on:{change:e.handleFileChange,preview:e.handlePreview}},[n("a-icon",{attrs:{type:"plus"}}),n("div",{staticClass:"ant-upload-text"},[e._v("\n      上传图片\n    ")])],1),n("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})]),n("a-divider"),n("p",[e._v("备注")]),n("a-textarea",{attrs:{placeholder:"请输入其他需求信息","auto-size":""},model:{value:e.storeParam["remark"],callback:function(a){e.$set(e.storeParam,"remark",a)},expression:"storeParam['remark']"}}),n("a-divider"),n("a-space",{staticStyle:{"margin-left":"40%"},attrs:{size:"large"}},[n("a-popconfirm",{attrs:{title:"确认提交？","ok-text":"确认","cancel-text":"取消"},on:{confirm:e.confirmSubmit}},[n("a-button",{attrs:{type:"primary"}},[e._v("提交")])],1),n("a-popconfirm",{attrs:{title:"确认重置？","ok-text":"确认","cancel-text":"取消"},on:{confirm:e.confirmReset}},[n("a-button",[e._v("重置")])],1)],1)],1)},o=[],i=n("a34a"),r=n.n(i),s=n("0fea"),l=n("9333"),p=n("862d"),c=n.n(p);function u(e,a,n,t,o,i,r){try{var s=e[i](r),l=s.value}catch(error){return void n(error)}s.done?a(l):Promise.resolve(l).then(t,o)}function d(e){return function(){var a=this,n=arguments;return new Promise((function(t,o){var i=e.apply(a,n);function r(e){u(i,t,o,r,s,"next",e)}function s(e){u(i,t,o,r,s,"throw",e)}r(void 0)}))}}var f=["国道","城市道路","县乡道路","其他"],v=["机机事故","机非事故","非非事故","多车混合","其他"],m=["财损事故","人伤事故","亡人事故","其他"],h=["中队一","中队二","中队三","中队四","中队五"];function g(e){for(var a=e.geometry.coordinates,n=[],t=0,o=a.length;t<o;t++)n.push(a[t][0]);return n}function A(e){return new Promise((function(a,n){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return a(t.result)},t.onerror=function(){return n(error)}}))}var M={name:"InfoInput",components:{GetPoint:l["default"]},data:function(){return{map:null,AMap:null,AMapUI:null,zoom:11,storeParam:{},longitude:0,latitude:0,RoadPlainOptions:f,AccTypePlainOptions:v,AccDegreePlainOptions:m,Squadron:h,previewVisible:!1,previewImage:"",url:{upload:window._CONFIG["domianURL"]+"/acc/info/upload",submit:"/acc/info/submit"}}},methods:{confirmSubmit:function(e){var a=this;this.storeParam["longitude"]=this.longitude,this.storeParam["latitude"]=this.latitude,this.storeParam["time"]=this.storeParam["time"].format("yyyy.MM.DD_HH.mm.ss"),Object(s["i"])(this.url.submit,this.storeParam).then((function(e){e.success?a.$message.success("录入成功！"):a.$message.warning(e.message),a.storeParam["time"]=null}))},confirmReset:function(){this.storeParam={},this.$message.success("重置成功")},handleFileChange:function(e){},handleCancel:function(){this.previewVisible=!1},handlePreview:function(){var e=d(r.a.mark((function e(a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.url||a.preview){e.next=4;break}return e.next=3,A(a.originFileObj);case 3:a.preview=e.sent;case 4:this.previewImage=a.url||a.preview,this.previewVisible=!0;case 6:case"end":return e.stop()}}),e,this)})));function a(a){return e.apply(this,arguments)}return a}(),initMap:function(){var e=this;c.a.load({key:"a60a54a59267d67bb4600f02ce6e636c",version:"2.0",plugins:["AMap.Scale","AMap.ToolBar","AMap.Driving","AMap.AutoComplete"],AMapUI:{version:"1.1",plugins:["misc/PointSimplifier","geo/DistrictExplorer"]},Loca:{version:"2.0.0"}}).then((function(a){e.map=new a.Map("container",{zoom:e.zoom,center:[118.326339,30.90522],resizeEnable:!0}),e.AMap=a,e.AMapUI=AMapUI,e.initP();var n=e;e.map.on("click",(function(e){if(n.map.getZoom()<20)n.$message.warning("请将地图放大至最大后点击选点！");else{for(var t=n.map.getAllOverlays("marker"),o=0;o<t.length;o++)t[o].remove();var i=new a.Marker({clickable:!1,position:e.lnglat,icon:"./poi-marker-default.png",offset:new a.Pixel(-25,-57)});n.longitude=e.lnglat.getLng(),n.latitude=e.lnglat.getLat(),i.setMap(n.map)}}))}))},initP:function(){var e=new this.AMapUI.DistrictExplorer({map:this.map}),a=[340223],n=this;e.loadMultiAreaNodes([a].concat(a),(function(e,a){var t=[new n.AMap.LngLat(-180,90),new n.AMap.LngLat(-180,-90),new n.AMap.LngLat(180,-90),new n.AMap.LngLat(180,90)],o=a.slice(1),i=[];i.push(t),i.push.apply(i,g(o[0].getParentFeature()));new n.AMap.Polygon({strokeStyle:"dashed",strokeColor:"red",strokeOpacity:1,strokeWeight:1,fillColor:"white",fillOpacity:1,map:n.map,path:i})}))}},mounted:function(){this.initMap()}},w=M,P=(n("60f4"),n("2877")),I=Object(P["a"])(w,t,o,!1,null,"bd43061a",null);a["default"]=I.exports}}]);