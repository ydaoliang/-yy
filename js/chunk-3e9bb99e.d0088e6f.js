(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e9bb99e"],{8058:function(t,s,e){},deb8:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"a",staticClass:"enter"},[t._m(0),t._m(1),t._m(2),e("dir",{staticClass:"dl"},[e("button",{on:{click:t.updata}},[t._v("登录")])]),e("div",{staticClass:"zc"},[e("router-link",{attrs:{tag:"span",to:"./enroll"}},[t._v("注册?")])],1)],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"imgs"},[e("img",{attrs:{src:"https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sjh"},[e("input",{attrs:{type:"text",placeholder:"手机号",id:"phone",maxlength:"11"}}),e("span",[t._v("获取验证码")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"yzm"},[e("input",{attrs:{type:"text",placeholder:"验证码",id:"password"}})])}],r=(e("dc37"),e("7d0f")),i=e.n(r),o={data:function(){return{users:[],phone:null,password:null,tos:"###",login:"立即登录"}},created:function(){var t=this;this.$http.get("/api/mz/users").then((function(s){t.users=s.data.data.object_list}))},computed:{},methods:{updata:function(){var t=document.getElementById("phone").value,s=document.getElementById("password").value;console.log(this.users[0].password);for(var e=0;e<this.users.length;e++){if(this.users[e].phone==t&&this.users[e].password==s){this.phone=t,this.password=s;var a={phone:this.phone,password:this.password};a=JSON.stringify(a),localStorage.setItem("user",a),i()("提示","登陆成功"),this.$router.push("/mine");break}i()("提示","登录失败")}}}},u=o,l=(e("e491"),e("6691")),c=Object(l["a"])(u,a,n,!1,null,null,null);s["default"]=c.exports},e491:function(t,s,e){"use strict";var a=e("8058"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-3e9bb99e.d0088e6f.js.map