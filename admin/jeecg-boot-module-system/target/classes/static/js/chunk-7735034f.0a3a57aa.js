(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7735034f"],{f19a8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.tags,(function(e){return[n("a-checkable-tag",{key:e,staticStyle:{"font-size":"14px"},attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(n){return t.handleChange(e,n)}}},[t._v("\n      "+t._s(e)+"\n    ")])]}))],2)},a=[];function o(t){return u(t)||s(t)||i(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=["财损","人伤","亡人","其他"],d={name:"AccDegreeTags",data:function(){return{tags:l,selectedTags:[]}},methods:{handleChange:function(t,e){var n=this.selectedTags,r=e?[].concat(o(n),[t]):n.filter((function(e){return e!==t}));this.selectedTags=r}},setup:function(){}},h=d,g=n("2877"),p=Object(g["a"])(h,r,a,!1,null,"d2031726",null);e["default"]=p.exports}}]);