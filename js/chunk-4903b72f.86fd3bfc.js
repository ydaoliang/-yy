(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4903b72f"],{"3d1a":function(t,e,a){},5370:function(t,e,a){"use strict";var n=a("3d1a"),s=a.n(n);s.a},e379:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},t._l(t.seemove,(function(e){return a("router-link",{key:e.id,attrs:{to:{path:"#",params:{id:e._id}}}},[a("mt-cell",{attrs:{title:e.name,label:e.address}},[a("span",[t._v("位置："+t._s(e.districtName))])])],1)})),1)},s=[],i={data:function(){return{seemove:[]}},methods:{getall:function(){var t=this;this.$http.get("/api/mz/list").then((function(e){t.seemove=e.data.data.object_list}))}},created:function(){this.getall()}},l=i,r=(a("5370"),a("6691")),c=Object(r["a"])(l,n,s,!1,null,"45764291",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4903b72f.86fd3bfc.js.map