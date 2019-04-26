(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),o=a.n(c),l=a(15),i=a(16),s=a(18),m=a(17),u=a(19),p=a(115),E=a(116),d=a(117),h=a(118),g=a(119),b=a(120),f=a(121),O=a(122),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{color:"success",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(E.a,null,r.a.createElement(d.a,{href:"/"},r.a.createElement("img",{src:"./logo.png",alt:"logo-img",className:"my-logo"})),r.a.createElement(h.a,{onClick:this.toggle}),r.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(f.a,null,r.a.createElement(O.a,{href:"https://github.com/jflores353/smart-shop-app"},"Github")))))))}}]),t}(n.Component),y=a(31),v=a(123),w=a(124),I=a(125),k=a(126),N=a(127),_=a(51),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{className:"login-form"},r.a.createElement("h1",null,r.a.createElement("span",{className:"font-weight-bold"},"Sign in to Your Smart Shop")),r.a.createElement(w.a,null,r.a.createElement(I.a,null,"Email"),r.a.createElement(k.a,{type:"email",placeholder:"Email"})),r.a.createElement(w.a,null,r.a.createElement(I.a,null,"Password"),r.a.createElement(k.a,{type:"password",placeholder:"Password"})),r.a.createElement(N.a,{color:"success",className:"btn-lg btn-block login-btn"},r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(y.b,{className:"login-btn nav-link",to:"./ShoppingList"},"Log In")))),r.a.createElement("div",{className:"text-centered pt-3"},"Login with your Google account instead"),r.a.createElement(_.GoogleLoginButton,{className:"mt-3 mb-3"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"/sign-up"},"Sign up"),r.a.createElement("span",{className:"p-2"},"|"),r.a.createElement("a",{href:"/forgot-password"},"Forgot Password")))}}]),t}(n.Component),T=a(130),D=a(131),C=a(132),A=a(134),L=a(135),M=a(25),G=a(32),x=a.n(G),B=function(){return{type:"ITEMS_LOADING"}},X=a(30),P=a(133),R=a(128),J=a(129),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(X.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name};a.props.addItem(t),a.toggle()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{className:"modal-btn",color:"success",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),r.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(R.a,{toggle:this.toggle},"Add to Shopping Cart"),r.a.createElement(J.a,null,r.a.createElement(v.a,{onSubmit:this.onSubmit},r.a.createElement(w.a,null,r.a.createElement(I.a,{for:"item"},"Item"),r.a.createElement(k.a,{type:"text",name:"name",id:"item",placeholder:"Add Item",onChange:this.onChange}),r.a.createElement(N.a,{color:"success",style:{marginTop:"2rem"},block:!0},"Add Item"))))))}}]),t}(n.Component),V=Object(M.b)(function(e){return{item:e.item}},{addItem:function(e){return function(t){x.a.post("".concat("https://smart-shop-app.herokuapp.com","/api/items"),e).then(function(e){return t({type:"ADD_ITEM",payload:e.data})})}}})(U),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){a.props.deleteItem(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(E.a,null,r.a.createElement(V,null),r.a.createElement(T.a,null,r.a.createElement(A.a,{className:"shopping-list",style:{marginLeft:"1rem",marginRight:"1rem"}},r.a.createElement(D.a,{className:"row-content"},t.map(function(t){var a=t._id,n=t.name;return r.a.createElement(L.a,{key:a,timeout:500,classNames:"fade"},r.a.createElement(C.a,null,r.a.createElement(N.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"\xd7"),n))})))))}}]),t}(n.Component),z=Object(M.b)(function(e){return{item:e.item}},{getItems:function(){return function(e){e(B()),x.a.get("".concat("https://smart-shop-app.herokuapp.com","/api/items")).then(function(t){return e({type:"GET_ITEMS",payload:t.data})})}},deleteItem:function(e){return function(t){x.a.delete("".concat("https://smart-shop-app.herokuapp.com","/").concat(e)).then(function(a){return t({type:"DELETE_ITEM",payload:e})})}}})(W),F=a(22),Y=a(20),$=a(55),q=a(56),H=a(8),K={items:[],loading:!1},Q=Object(Y.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(H.a)({},e,{items:t.payload,loading:!1});case"ADD_ITEM":return Object(H.a)({},e,{items:[t.payload].concat(Object(q.a)(e.items))});case"DELETE_ITEM":return Object(H.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ITEMS_LOADING":return Object(H.a)({},e,{loading:!0});default:return e}}}),Z=[$.a],ee=Object(Y.e)(Q,{},Object(Y.d)(Y.a.apply(void 0,Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),te=(a(111),a(112),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{basename:"/".concat("smart-shop-app")},r.a.createElement(M.a,{store:ee},r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(F.a,{path:"/",exact:!0,component:S}),r.a.createElement(F.a,{path:"/ShoppingList/",component:z}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a(113)}},[[58,1,2]]]);
//# sourceMappingURL=main.1248dc84.chunk.js.map