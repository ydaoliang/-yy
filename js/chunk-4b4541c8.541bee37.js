(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4541c8","chunk-ce3e8674","chunk-779782b5"],{"18f8":function(t,i,a){},2670:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"details"},[a("mt-header",[a("router-link",{attrs:{slot:"left",to:"/movie/movie"},slot:"left"},[a("mt-button",{attrs:{icon:"back"}})],1)],1),a("div",{staticClass:"header-title",class:{fixs:t.fix}},[t._v("\n      "+t._s(t.moves.name)+"\n    ")]),a("div",{staticClass:"cinema-wrap"},[a("div",{staticClass:"cinema-info"},[a("div",{staticClass:"tags"},t._l(t.tag,(function(i){return a("router-link",{key:i.id,staticClass:"tag",attrs:{to:{name:i.path}}},[t._v(" "+t._s(i.title))])})),1),a("div",{staticClass:"address"},[a("i",{staticClass:"fa fa-car"}),a("div",{staticClass:"address_es"},[t._v("\n                       "+t._s(t.moves.address)+"\n                 ")]),a("i",{staticClass:"fa fa-phone"})])]),a("div",{staticClass:"schedule-wrap"},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.tadymovie,(function(t){return a("div",{key:t._id,staticClass:"swiper-slide"},[a("img",{attrs:{src:t.poster,alt:""}})])})),0),a("div",{staticClass:"swiper-pagination"})])])]),a("div",{staticClass:"timelist"},t._l(t.time,(function(i){return a("router-link",{key:i.id,class:{active:t.show===i.show},attrs:{to:{name:i.name}},nativeOn:{click:function(a){t.oneshow=!1,t.show=i.show}}},[t._v("\n                "+t._s(i.times)+"\n              ")])})),1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.oneshow,expression:"oneshow"}]},[a("today")],1),a("router-view")],1)},e=[],n=a("bb45"),o=a("30f6"),r={data:function(){return{fix:!1,show:"ls",oneshow:!0,moves:0,tadymovie:0,tag:[{id:1,title:"前台兑换",path:""},{id:2,title:"儿童票",path:""},{id:3,title:"停车",path:""},{id:4,title:"3D眼镜",path:""}],time:[{id:1,times:"今日",name:"moviedetails",show:"ls"},{id:2,times:"明日",name:"tomorrow",show:"ts"}]}},components:{today:n["default"],tomorrow:o["default"]},methods:{topfixed:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>=40&&!this.fix?this.fix=!0:t<=40&&this.fix&&(this.fix=!1)}},created:function(){var t=this;window.addEventListener("scroll",this.topfixed);var i=this.$route.params.id;this.$http.get("/api/mz/list").then((function(a){for(var s=a.data.data.object_list,e=0;e<s.length;e++)s[e]._id==i&&(t.moves=s[e])})),this.$http.get("/api/mz/list/active").then((function(i){t.tadymovie=i.data.data.object_list,t.$nextTick((function(){new Swiper(".swiper-container",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}))}))},beforeDestroy:function(){window.removeEventListener("scroll",this.topfixed)}},l=r,c=(a("9611"),a("6691")),d=Object(c["a"])(l,s,e,!1,null,"61b8ea6a",null);i["default"]=d.exports},"2ed5":function(t,i,a){},"30f6":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"tomorrow",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},t._l(t.tolis,(function(i){return a("div",{key:i._id,staticClass:"item"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(i.name))]),a("span",[t._v(t._s(i.category))])]),a("div",{staticClass:"mid"},[a("span",[t._v(t._s(i.director))])]),a("div",{staticClass:"right"},[a("mt-button",{attrs:{type:"primary"}},[t._v("预约观看")])],1)])})),0)},e=[],n={watch:{type:function(t){this.tolis=[],this.page=1,this.hasMore=!0,this.tomorromovie()}},data:function(){return{tolis:[],page:1,limit:8,loading:!1,hasMore:!0}},methods:{loadMore:function(){if(!this.hasMore)return this.loading=!0,!1;this.tomorromovie()},tomorromovie:function(){var t=this,i=this.limit,a=this.page;this.loading=!0,this.$http.get("/api/mz/movie/specials",{params:{limit:i,page:a}}).then((function(i){if(t.tolis=t.tolis.concat(i.data.data.object_list),t.loading=!1,t.limit*t.page>=i.data.data.total)return t.hasMore=!1,!1;t.page++}))},activated:function(){this.loading=!1},deactivated:function(){this.loading=!0}}},o=n,r=(a("55a7"),a("6691")),l=Object(r["a"])(o,s,e,!1,null,"48e980d4",null);i["default"]=l.exports},"55a7":function(t,i,a){"use strict";var s=a("ab51"),e=a.n(s);e.a},9110:function(t,i,a){"use strict";var s=a("18f8"),e=a.n(s);e.a},9611:function(t,i,a){"use strict";var s=a("2ed5"),e=a.n(s);e.a},ab51:function(t,i,a){},bb45:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"today",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},t._l(t.list,(function(i){return a("div",{key:i._id,staticClass:"item"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(i.name))]),a("span",[t._v(t._s(i.category))])]),a("div",{staticClass:"mid"}),a("div",{staticClass:"right"},[a("mt-button",[t._v("立即观看")])],1)])})),0)},e=[],n={watch:{type:function(t){this.list=[],this.hasMore=!0,this.today()}},data:function(){return{list:[],loading:!1,hasMore:!0}},methods:{loadMore:function(){if(!this.hasMore)return this.loading=!0,!1;this.today()},today:function(){var t=this;this.$http.get("/api/mz/list/active").then((function(i){if(t.list=i.data.data.object_list,9===i.data.data.total)return t.hasMore=!1,!1}))},activated:function(){this.loading=!1},deactivated:function(){this.loading=!0}}},o=n,r=(a("9110"),a("6691")),l=Object(r["a"])(o,s,e,!1,null,"ffa0c37c",null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4b4541c8.541bee37.js.map