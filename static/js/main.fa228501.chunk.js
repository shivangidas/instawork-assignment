(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e){e.exports=[{id:1,first_name:"Shivangi",last_name:"Das",phone:"4567891234",email:"abc@example.com",role:"admin"},{id:2,first_name:"Shivi",last_name:"",phone:"5456879121",email:"abc@example.com",role:"regular"}]},52:function(e,t,a){e.exports=a.p+"static/media/placeholder.4788048f.png"},59:function(e,t,a){e.exports=a(88)},64:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),i=(a(64),a(11)),s=a(12),c=a(15),d=a(13),u=a(14),m=a(8),p="FETCH_USERS",h="NEW_USER",E="EDIT_USER",f="DELETE_USER",b="SHOW_MODAL",v="HIDE_MODAL",w="SHOW_EDIT_MODAL",y="HIDE_EDIT_MODAL",O=a(29);function g(){return function(e){e({type:p,payload:O})}}function j(){return function(e){e({type:b,payload:!0})}}function _(e){return function(t){t({type:w,payload:!0,editedUser:e})}}function C(){return function(e){e({type:y,payload:!1})}}var k=a(89),U=a(90),L=a(53),S=a(94),M=a(93),D=a(52),T=a.n(D),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleEditClick=function(e){a.props.showEditModal(a.props.user)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{xs:12,md:6,lg:4,style:{marginBottom:"2%"}},r.a.createElement(M.a,null,r.a.createElement(M.a.Img,{variant:"top",src:T.a,height:"100px"}),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,e.first_name," ",e.last_name," ",r.a.createElement("span",{className:"muted"},"admin"===e.role?"("+e.role+")":"")),r.a.createElement(M.a.Text,null,r.a.createElement("span",null,e.phone),r.a.createElement("br",null),r.a.createElement("span",null,e.email)),r.a.createElement(S.a,{variant:"outline-primary",onClick:this.handleEditClick},"Edit")))))}}]),t}(n.Component),x=Object(m.b)(function(e){return{showEdit:e.show.showEdit}},{hideEditModal:C,showEditModal:_})(A),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement(U.a,null,this.props.users.map(function(t,a){return r.a.createElement(x,Object.assign({},e.props,{key:a,i:a,user:t}))})))}}]),t}(r.a.Component),N=Object(m.b)(function(e){return{users:e.users.userList}},{fetchUsers:g})(I),H=a(91),R=a(92),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmitClick=function(e){e.preventDefault();var t=a.refs.addUserForm.role,n={id:a.props.users.userList.length+1,first_name:a.refs.first_name.value,last_name:a.refs.last_name.value,phone:a.refs.phone.value,email:a.refs.email.value,role:t.value};a.props.addUser(n),a.props.hideModal()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(H.a,{show:this.props.show,onHide:this.props.hideModal},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,"Add a Team Member",r.a.createElement("br",null),r.a.createElement("label",{className:"text-muted",style:{fontSize:"60%"}},"Set email, location and role"))),r.a.createElement(H.a.Body,null,r.a.createElement(R.a,{ref:"addUserForm"},r.a.createElement(R.a.Group,{controlId:"first_name"},r.a.createElement(R.a.Label,null,"First name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"John",ref:"first_name",required:!0})),r.a.createElement(R.a.Group,{controlId:"last_name"},r.a.createElement(R.a.Label,null,"Last name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"Doe",ref:"last_name"})),r.a.createElement(R.a.Group,{controlId:"email"},r.a.createElement(R.a.Label,null,"Email address"),r.a.createElement(R.a.Control,{type:"email",placeholder:"sample@example.com",ref:"email",required:!0})),r.a.createElement(R.a.Group,{controlId:"phone"},r.a.createElement(R.a.Label,null,"Phone"),r.a.createElement(R.a.Control,{type:"number",placeholder:"+1234567890",ref:"phone"})),r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Check,{type:"radio",label:"Regular - Can't delete members",name:"role",defaultChecked:!0,value:"regular"}),r.a.createElement(R.a.Check,{type:"radio",label:"Admin - Can delete members",name:"role",value:"admin"})))),r.a.createElement(H.a.Footer,null,r.a.createElement(S.a,{variant:"secondary",onClick:this.props.hideModal},"Cancel"),r.a.createElement(S.a,{type:"submit",variant:"primary",onClick:this.handleSubmitClick},"Save")))}}]),t}(n.Component),F=Object(m.b)(function(e){return{show:e.show.show,users:e.users}},{showModal:j,hideModal:function(){return function(e){e({type:v,payload:!1})}},addUser:function(e){return function(t){t({type:h,payload:e})}}})(W),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmitClick=function(e){e.preventDefault(),console.log(a.props.editedUser.id);var t=a.refs.editUserForm.role,n={id:a.props.editedUser.id,first_name:a.refs.first_name.value,last_name:a.refs.last_name.value,phone:a.refs.phone.value,email:a.refs.email.value,role:t.value};a.props.editUser(n,n.id),a.props.hideEditModal()},a.handleDeleteClick=function(e){e.preventDefault(),console.log("in delete click"),a.props.deleteUser(a.props.editedUser.id),a.props.hideEditModal()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.editedUser;return console.log(e.id),r.a.createElement(H.a,{show:this.props.showEdit,onHide:this.props.hideEditModal},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,"Edit ",e.first_name,"'s Details",r.a.createElement("br",null),r.a.createElement("label",{className:"text-muted",style:{fontSize:"60%"}},"Set email, location and role"))),r.a.createElement(H.a.Body,null,r.a.createElement(R.a,{ref:"editUserForm"},r.a.createElement(R.a.Group,{controlId:"first_name"},r.a.createElement(R.a.Label,null,"First name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"John",ref:"first_name",required:!0})),r.a.createElement(R.a.Group,{controlId:"last_name"},r.a.createElement(R.a.Label,null,"Last name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"Doe",ref:"last_name"})),r.a.createElement(R.a.Group,{controlId:"email"},r.a.createElement(R.a.Label,null,"Email address"),r.a.createElement(R.a.Control,{type:"email",placeholder:"sample@example.com",ref:"email",required:!0})),r.a.createElement(R.a.Group,{controlId:"phone"},r.a.createElement(R.a.Label,null,"Phone"),r.a.createElement(R.a.Control,{type:"number",placeholder:"+1234567890",ref:"phone"})),r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Check,{type:"radio",label:"Regular - Can't delete members",name:"role",value:"regular"}),r.a.createElement(R.a.Check,{type:"radio",label:"Admin - Can delete members",name:"role",value:"admin"})))),r.a.createElement(H.a.Footer,null,"admin"===this.props.editedUser.role?r.a.createElement(S.a,{variant:"outline-danger",onClick:this.handleDeleteClick},"Delete"):"",r.a.createElement(S.a,{type:"submit",variant:"primary",onClick:this.handleSubmitClick},"Save")))}}]),t}(n.Component),B=Object(m.b)(function(e){return{showEdit:e.show.showEdit,users:e.users,editedUser:e.show.editedUser}},{showEditModal:_,hideEditModal:C,editUser:function(e,t){return function(a){a({type:E,payload:e,id:t})}},deleteUser:function(e){return function(t){t({type:f,id:e})}}})(G),q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){return r.a.createElement(k.a,{className:"App"},r.a.createElement(U.a,{className:"justify-content-md-center"},r.a.createElement(L.a,{xs:{span:2,offset:10},style:{marginTop:"2%"}},r.a.createElement(S.a,{variant:"primary",onClick:this.props.showModal},"Add")),r.a.createElement("header",null,r.a.createElement("h1",null,"Team List"),r.a.createElement("span",{className:"mute"},"You have ",this.props.users.length," team members"))),r.a.createElement(N,null),r.a.createElement(F,{show:this.props.show,onHide:this.props.hideModal,userId:this.props.users.length}),r.a.createElement(B,{show:this.props.showEdit,onHide:this.props.hideEditModal,editedUser:this.props.editedUser}))}}]),t}(n.Component),J=Object(m.b)(function(e){return{users:e.users.userList,show:e.show.show,showEdit:e.show.showEdit,editedUser:e.show.editedUser}},{fetchUsers:g,showModal:j,showEditModal:_,hideEditModal:C})(q),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var z=a(19),V=a(58),Y=a(16),$={userList:[]},K={show:!1,showEdit:!1,editedUser:{}},Q=Object(z.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(Y.a)({},e,{userList:t.payload});case h:return Object(Y.a)({},e,{userList:[].concat(Object(V.a)(e.userList),[t.payload])});case E:var a=e.userList.map(function(e){return e.id===t.id?Object.assign({},e,t.payload):e});return Object(Y.a)({},e,{userList:a});case f:var n=e.userList.filter(function(e){return e.id!==t.id});return console.log(n),Object(Y.a)({},e,{userList:n});default:return e}},show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case v:return Object(Y.a)({},e,{show:t.payload});case w:return Object(Y.a)({},e,{showEdit:t.payload,editedUser:t.editedUser});case y:return Object(Y.a)({},e,{showEdit:t.payload});default:return e}}}),Z=[a(57).a],ee={userList:O},te=Object(z.e)(Q,ee,Object(z.d)(z.a.apply(void 0,Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(m.a,{store:te},r.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/buildATeam",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/buildATeam","/service-worker.js");P?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):X(t,e)})}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.fa228501.chunk.js.map