(this.webpackJsonpguidr=this.webpackJsonpguidr||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(76),s=t.n(o),i=(t(85),t(86),t(30)),l=t(57),c=t.n(l),m=(t(75),t(19)),u=Object(m.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:i.a().shape({username:i.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:i.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;c.a.post("https://guidr-2.herokuapp.com/api/auth/login",e).then((function(e){console.log("Data",e)})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),t(!1)}),1e3),n()}})((function(e){var a=e.values,t=e.errors,n=e.touched;return r.a.createElement(m.b,{className:"formBody"},r.a.createElement("h1",null," Login With User and Password "),r.a.createElement(m.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&t.username&&r.a.createElement("p",{className:"errors"},t.username),r.a.createElement(m.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&t.password&&r.a.createElement("p",{className:"errors"},t.password),r.a.createElement("button",{className:"button",type:"submit",disabled:a.isSubmitting},a.isSubmitting?"Submitting":"Login"))}));var p=Object(m.c)({mapPropsToValues:function(e){return{username:"",password:""}},validationSchema:i.a().shape({username:i.b().min(2,"Too Short!").max(70,"Too Long!").required("UserName is Required!"),password:i.b().min(6,"Too Short!").max(70,"Too Long!").required("Password is Required")}),handleSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;c.a.post("https://guidr-2.herokuapp.com/api/auth/register",e).then((function(e){console.log("Data",e)})).catch((function(e){return console.log(e.response)})),setTimeout((function(){console.log("Entered Value",e),t(!1)}),1e3),n()}})((function(e){var a=e.values,t=e.errors,n=e.touched;return r.a.createElement(m.b,{className:"formBody"},r.a.createElement("h1",null," Sign Up to Procceed "),r.a.createElement(m.a,{className:"input",type:"text",name:"username",placeholder:"UserName"}),n.username&&t.username&&r.a.createElement("p",{className:"errors"},t.username),r.a.createElement(m.a,{className:"input",type:"password",name:"password",placeholder:"Password"}),n.password&&t.password&&r.a.createElement("p",{className:"errors"},t.password),r.a.createElement("button",{className:"button",type:"submit",disabled:a.isSubmitting},a.isSubmitting?"SigningUp":"Sign Up"))})),d=t(45),h=t(29);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,r.a.createElement(d.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/Login"},"Login")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/SignUp"},"Sign Up")),r.a.createElement(h.a,{path:"/login"},r.a.createElement(u,null)),r.a.createElement(h.a,{path:"/SignUp"},r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,a,t){},81:function(e,a,t){e.exports=t(111)},85:function(e,a,t){},86:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.6f3785ef.chunk.js.map