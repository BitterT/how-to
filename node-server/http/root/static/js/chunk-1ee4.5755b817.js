(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ee4"],{"14Xm":function(e,t,n){e.exports=n("u938")},"1Xwi":function(e,t,n){},D3Ub:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("4d7F"));t.default=function(e){return function(){var t=e.apply(this,arguments);return new r.default(function(e,n){return function i(o,a){try{var l=t[o](a),c=l.value}catch(e){return void n(e)}if(!l.done)return r.default.resolve(c).then(function(e){i("next",e)},function(e){i("throw",e)});e(c)}("next")})}}},QgP5:function(e,t,n){"use strict";n.r(t);var r=n("14Xm"),i=n.n(r),o=n("D3Ub"),a=n.n(o),l=n("P2sY"),c=n.n(l),s=[{name:"1",timeLine:100,children:[{name:"1-1",timeLine:20},{name:"1-2",timeLine:60,children:[{name:"1-2-1",timeLine:35},{name:"1-2-2",timeLine:25}]}]},{name:"2",timeLine:80,children:[{name:"2-1",timeLine:30},{name:"2-2",timeLine:50},{name:"2-3",timeLine:60}]},{name:"3",timeLine:40}],u={components:{TreeTable:n("itRl").a},data:function(){return{tableData:[],tempItem:{},dialogFormVisible:!1,columns:[{label:"Name",key:"name",expand:!0},{label:"Timeline",key:"timeline"},{label:"Append",key:"append",width:300},{label:"Operation",key:"operation",width:160}]}},created:function(){this.getData()},methods:{getData:function(){this.tableData=s},editItem:function(e){this.tempItem=c()({},e),this.dialogFormVisible=!0},updateItem:function(){var e=this;return a()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.TreeTable.updateTreeNode(e.tempItem);case 2:e.dialogFormVisible=!1;case 3:case"end":return t.stop()}},t,e)}))()},addMenuItem:function(e,t){"children"===t&&this.$refs.TreeTable.addChild(e,{name:"child",timeLine:this.randomNum()}),"brother"===t&&this.$refs.TreeTable.addBrother(e,{name:"brother",timeLine:this.randomNum()})},deleteItem:function(e){this.$refs.TreeTable.delete(e)},selectChange:function(e){console.log(e)},randomNum:function(){return Math.floor(100*Math.random()+1)}}},d=n("KHd+"),h=Object(d.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{margin:"0 0 20px 0"},attrs:{type:"primary",size:"small"}},[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/TreeTable",target:"_blank"}},[e._v("Documentation")])]),e._v(" "),n("tree-table",{ref:"TreeTable",attrs:{data:e.tableData,"default-expand-all":!0,columns:e.columns,border:"","default-children":"children"},on:{"selection-change":e.selectChange},scopedSlots:e._u([{key:"timeline",fn:function(e){var t=e.scope;return[n("el-tooltip",{attrs:{content:t.row.timeLine+"ms",effect:"dark",placement:"left"}},[n("div",{staticClass:"processContainer"},[n("div",{staticClass:"process",style:{width:3*(t.row.timeLine||0)+"px",background:t.row.timeLine>50?"rgba(233,0,0,.5)":"rgba(0,0,233,0.5)",marginLeft:50*t.row._level+"px"}},[n("span",{staticStyle:{display:"inline-block"}})])])])]}},{key:"append",fn:function(t){var r=t.scope;return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.addMenuItem(r.row,"brother")}}},[e._v("Append Brother\n        ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.addMenuItem(r.row,"children")}}},[e._v("Append Child\n        ")])]}},{key:"operation",fn:function(t){var r=t.scope;return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){e.editItem(r.row)}}},[e._v("Edit")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.deleteItem(r.row)}}},[e._v("Delete")])]}}])},[n("template",{slot:"selection"},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}})],1),e._v(" "),n("template",{slot:"pre-column"},[n("el-table-column",{attrs:{type:"expand",width:"55"}},[[n("el-tag",{attrs:{type:"info"}},[e._v("\n              Here is just a placeholder slot, you can display anything.\n            ")])]],2)],1)],2)],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"Edit"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticStyle:{width:"600px"},attrs:{model:e.tempItem,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:"Name"},model:{value:e.tempItem.name,callback:function(t){e.$set(e.tempItem,"name","string"==typeof t?t.trim():t)},expression:"tempItem.name"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("Cancel")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.updateItem}},[e._v("Confirm")])],1)],1)],1)},[],!1,null,null,null);h.options.__file="index.vue";t.default=h.exports},itRl:function(e,t,n){"use strict";var r=n("4d7F"),i=n.n(r),o=n("Kw5r");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.parent,r=void 0===n?null:n,i=t.preIndex,l=void 0!==i&&i,c=t.level,s=void 0===c?0:c,u=t.expand,d=void 0!==u&&u,h=t.children,f=void 0===h?"children":h,p=t.show,m=void 0===p||p,v=t.select,y=void 0!==v&&v;e.forEach(function(e,t){var n=(l?l+"-"+t:t)+"";o.default.set(e,"_id",n),o.default.set(e,"_level",s),o.default.set(e,"_expand",d),o.default.set(e,"_parent",r),o.default.set(e,"_show",m),o.default.set(e,"_select",y),e[f]&&e[f].length>0&&a(e[f],{parent:e,level:s+1,expand:d,preIndex:n,children:f,status:status,select:y})})}var l={name:"TreeTable",props:{data:{type:Array,required:!0,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},defaultExpandAll:{type:Boolean,default:!1},defaultChildren:{type:String,default:"children"},indent:{type:Number,default:50}},data:function(){return{guard:1}},computed:{children:function(){return this.defaultChildren},tableData:function(){var e=this.data;return 0===this.data.length?[]:(a(e,{expand:this.defaultExpandAll,children:this.defaultChildren}),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",r=[];return t.forEach(function(t,i){if(o.default.set(t,"_index",i),r.push(t),t[n]&&t[n].length>0){var a=e(t[n],n);r=r.concat(a)}}),r}(e,this.defaultChildren))}},methods:{addBrother:function(e,t){e._parent?e._parent.children.push(t):this.data.push(t)},addChild:function(e,t){e.children||this.$set(e,"children",[]),e.children.push(t)},delete:function(e){var t=e._index,n=e._parent;n?n.children.splice(t,1):this.data.splice(t,1)},getData:function(){return this.tableData},showRow:function(e){var t=e.row,n=t._parent,r=!n||n._expand&&n._show;return t._show=r,r?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},showSperadIcon:function(e){return e[this.children]&&e[this.children].length>0},toggleExpanded:function(e){var t=this.tableData[e],n=!t._expand;t._expand=n},handleCheckAllChange:function(e){this.selcetRecursion(e,e._select,this.defaultChildren),this.isIndeterminate=e._select},selcetRecursion:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";t&&(this.$set(e,"_expand",!0),this.$set(e,"_show",!0));var i=e[r];i&&i.length>0&&i.map(function(e){e._select=t,n.selcetRecursion(e,t,r)})},updateTreeNode:function(e){var t=this;return new i.a(function(n){var r=e._id,i=e._parent,o=r.split("-").slice(-1)[0];i?(i.children.splice(o,1,e),n(t.data)):(t.data.splice(o,1,e),n(t.data))})}}},c=(n("x7Y3"),n("KHd+")),s=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",e._g(e._b({attrs:{data:e.tableData,"row-style":e.showRow}},"el-table",e.$attrs,!1),e.$listeners),[e._t("selection"),e._v(" "),e._t("pre-column"),e._v(" "),e._l(e.columns,function(t){return n("el-table-column",{key:t.key,attrs:{label:t.label,width:t.width,align:t.align||"center","header-align":t.headerAlign},scopedSlots:e._u([{key:"default",fn:function(r){return[e._t(t.key,[t.expand?[n("span",{style:{"padding-left":+r.row._level*e.indent+"px"}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.showSperadIcon(r.row),expression:"showSperadIcon(scope.row)"}],staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(r.$index)}}},[r.row._expand?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})])]:e._e(),e._v(" "),t.checkbox?[r.row[e.defaultChildren]&&r.row[e.defaultChildren].length>0?n("el-checkbox",{style:{"padding-left":+r.row._level*e.indent+"px"},attrs:{indeterminate:r.row._select},on:{change:function(t){e.handleCheckAllChange(r.row)}},model:{value:r.row._select,callback:function(t){e.$set(r.row,"_select",t)},expression:"scope.row._select"}}):n("el-checkbox",{style:{"padding-left":+r.row._level*e.indent+"px"},on:{change:function(t){e.handleCheckAllChange(r.row)}},model:{value:r.row._select,callback:function(t){e.$set(r.row,"_select",t)},expression:"scope.row._select"}})]:e._e(),e._v("\n        "+e._s(r.row[t.key])+"\n      ")],{scope:r})]}}])})})],2)},[],!1,null,null,null);s.options.__file="index.vue";t.a=s.exports},ls82:function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=_;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==r&&i.call(g,a)&&(v=g);var w=L.prototype=x.prototype=Object.create(v);k.prototype=w.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(w),e},u.awrap=function(e){return{__await:e}},E(C.prototype),C.prototype[l]=function(){return this},u.AsyncIterator=C,u.async=function(e,t,n,r){var i=new C(_(e,t,n,r));return u.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return l.type="throw",l.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=T(a,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=b(e,t,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function b(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function x(){}function k(){}function L(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function C(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,a){var l=b(e[n],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(s).then(function(e){c.value=e,o(c)},a)}a(l.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function T(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,T(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=b(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,m;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},u938:function(e,t,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("ls82"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},x7Y3:function(e,t,n){"use strict";var r=n("1Xwi");n.n(r).a}}]);