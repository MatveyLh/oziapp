(this.webpackJsonpozitag=this.webpackJsonpozitag||[]).push([[0],{109:function(e,a,t){e.exports=t(141)},114:function(e,a,t){},132:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),s=t.n(o),l=(t(114),t(57)),c=t(4),i=t(61),m=t(62),d=t(105),u=t(103),p=t(40),b=t(80),f=t.n(b),w="https://tager.dev.ozitag.com",E=function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,[{key:"post",value:function(e,a){return f.a.post("https://cors-anywhere.herokuapp.com/".concat(w,"/").concat(e),a,{headers:{"Access-Control-Allow-Origin":"*",crossdomain:!0,Authorization:localStorage.getItem("token")}})}},{key:"get",value:function(e){return f.a.get("".concat(w,"/").concat(e),{headers:{Authorization:localStorage.getItem("token")}})}}]),e}(),h=(t(132),t(16)),g=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={isAuth:!1,isError:!1},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.isAuth||localStorage.getItem("token")?r.a.createElement(c.a,{to:"/profile"}):r.a.createElement(h.d,{initialValues:{email:"",password:""},validationSchema:p.a().shape({email:p.b().email("Email is invalid").required("Email is required"),password:p.b().min(4,"Password must be at least 4 characters").required("Password is required")}),onSubmit:function(a){e.setState({isError:!1});var t=new E,n={email:a.email,password:a.password,clientId:1};t.post("api/auth/user",n).then((function(e){localStorage.setItem("token",e.data.data.tokenType+" "+e.data.data.accessToken)})).then((function(){e.setState({isAuth:!0})})).catch((function(){e.setState({isError:!0})}))},render:function(a){var t=a.errors,n=a.touched;return r.a.createElement(h.c,{className:"form-login"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(h.b,{name:"email",type:"text",className:"form-control"+(t.email&&n.email?" is-invalid":"")}),r.a.createElement(h.a,{name:"email",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(h.b,{name:"password",type:"password",className:"form-control"+(t.password&&n.password?" is-invalid":"")}),r.a.createElement(h.a,{name:"password",component:"div",className:"invalid-feedback"})),e.state.isError?r.a.createElement("p",{className:"error-message"},"Data is invalid!"):"",r.a.createElement("div",{className:"form-group form-group_button"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}})}}]),t}(r.a.Component),v=t(78),k=(t(138),t(165)),N=t(167),O=t(143),y=t(166),S=function(){var e=Object(n.useState)({email:"",name:""}),a=Object(v.a)(e,2),t=a[0],o=a[1],s=Object(n.useState)(!0),l=Object(v.a)(s,2),i=l[0],m=l[1],d=Object(n.useState)(!1),u=Object(v.a)(d,2),b=u[0],f=u[1];Object(n.useEffect)((function(){(new E).get("/api/tager/user/profile").then((function(e){o(e.data.data)}))}),[]);return i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("p",null,"Email: ",t.email),r.a.createElement("p",null,"Name: ",t.name)),r.a.createElement("div",{className:"profile-buttons"},r.a.createElement("button",{className:"profile-buttons_btn",onClick:function(){f(!0)}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("button",{onClick:function(){(new E).post("api/tager/user/profile/logout").then((function(){localStorage.removeItem("token"),m(!1)}))},className:"profile-buttons_btn exit-btn"},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement(N.a,{onClose:function(){f(!1)},"aria-labelledby":"customized-dialog-title",open:b},r.a.createElement(k.a,{id:"customized-dialog-title"},"Modal title"),r.a.createElement(y.a,{style:{width:"600px"},dividers:!0},r.a.createElement(O.a,null,r.a.createElement(h.d,{initialValues:{oldPassword:"",password:""},validationSchema:p.a().shape({oldPassword:p.b().min(4,"Password must be at least 4 characters").required("Old password is required"),password:p.b().min(4,"Password must be at least 4 characters").required("New password is required")}),onSubmit:function(e){var a={oldPassword:e.oldPassword,password:e.password,clientId:1};console.log(a)},render:function(e){var a=e.errors,t=e.touched;return r.a.createElement(h.c,null,r.a.createElement("label",{htmlFor:"oldPassword"},"Old password"),r.a.createElement(h.b,{name:"oldPassword",type:"password",className:"form-control"+(a.password&&t.password?" is-invalid":"")}),r.a.createElement(h.a,{name:"oldPassword",component:"div",className:"invalid-feedback"}),r.a.createElement("label",{htmlFor:"password"},"New Password"),r.a.createElement(h.b,{name:"password",type:"password",className:"form-control"+(a.password&&t.password?" is-invalid":"")}),r.a.createElement(h.a,{name:"password",component:"div",className:"invalid-feedback"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary changePassword-btn"},"Login"))}}))))):r.a.createElement(c.a,{to:"/"})},j=t(104),P=function(e){var a=e.component,t=Object(j.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},t,{render:function(e){return localStorage.getItem("token")?r.a.createElement(a,e):r.a.createElement(c.a,{to:"/login"})}}))},I=(t(139),function(){return r.a.createElement(l.a,null,r.a.createElement(c.b,{path:"/",component:function(e){return r.a.createElement(g,e)}}),r.a.createElement(P,{component:function(){return r.a.createElement(S,null)},path:"/profile"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(140);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.2b3730b1.chunk.js.map