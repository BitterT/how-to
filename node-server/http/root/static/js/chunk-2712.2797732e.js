(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2712"],{JCNI:function(t,i,e){"use strict";e.d(i,"c",function(){return n}),e.d(i,"b",function(){return l}),e.d(i,"d",function(){return a}),e.d(i,"a",function(){return r}),e.d(i,"e",function(){return c});var s=e("t3Un");function n(t){return Object(s.a)({url:"/article/list",method:"get",params:t})}function l(t){return Object(s.a)({url:"/article/detail",method:"get",params:{id:t}})}function a(t){return Object(s.a)({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(s.a)({url:"/article/create",method:"post",data:t})}function c(t){return Object(s.a)({url:"/article/update",method:"post",data:t})}},Qm0S:function(t,i,e){"use strict";var s=e("XIFZ");e.n(s).a},XIFZ:function(t,i,e){},nhSP:function(t,i,e){"use strict";e.r(i);var s=e("FyfS"),n=e.n(s),l=e("GYAN"),a={name:"DndList",components:{draggable:e.n(l).a},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(i){return t.id!==i.id})},isNotInList2:function(t){return this.list2.every(function(i){return t.id!==i.id})},deleteEle:function(t){var i=!0,e=!1,s=void 0;try{for(var l,a=n()(this.list1);!(i=(l=a.next()).done);i=!0){var r=l.value;if(r.id===t.id){var c=this.list1.indexOf(r);this.list1.splice(c,1);break}}}catch(t){e=!0,s=t}finally{try{!i&&a.return&&a.return()}finally{if(e)throw s}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){var i=!0,e=!1,s=void 0;try{for(var l,a=n()(this.list2);!(i=(l=a.next()).done);i=!0){var r=l.value;if(r.id===t.id){var c=this.list2.indexOf(r);this.list2.splice(c,1);break}}}catch(t){e=!0,s=t}finally{try{!i&&a.return&&a.return()}finally{if(e)throw s}}this.isNotInList1(t)&&this.list1.push(t)}}},r=(e("Qm0S"),e("KHd+")),c=Object(r.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dndList"},[e("div",{staticClass:"dndList-list",style:{width:t.width1}},[e("h3",[t._v(t._s(t.list1Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle"},[t._v(t._s(i.id)+"["+t._s(i.author)+"] "+t._s(i.title))]),t._v(" "),e("div",{staticStyle:{position:"absolute",right:"0px"}},[e("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(e){t.deleteEle(i)}}},[e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),e("div",{staticClass:"dndList-list",style:{width:t.width2}},[e("h3",[t._v(t._s(t.list2Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{list:t.list2,options:{group:"article"}}},t._l(t.list2,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle2",on:{click:function(e){t.pushEle(i)}}},[t._v(t._s(i.id)+" ["+t._s(i.author)+"] "+t._s(i.title))])])}))],1)])},[],!1,null,"19cba435",null);c.options.__file="index.vue";var o=c.exports,u=e("JCNI"),d={name:"DndListDemo",components:{DndList:o},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(u.c)().then(function(i){t.list1=i.data.items.splice(0,5),t.list2=i.data.items})}}},f=Object(r.a)(d,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"components-container"},[this._m(0),this._v(" "),i("div",{staticClass:"editor-container"},[i("dnd-list",{attrs:{list1:this.list1,list2:this.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},[function(){var t=this.$createElement,i=this._self._c||t;return i("code",[this._v("drag-list base on\n    "),i("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[this._v("Vue.Draggable")])])}],!1,null,null,null);f.options.__file="dndList.vue";i.default=f.exports}}]);