(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{687:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(31),o=n(33),l=n(32),c=n(34),i=n(3),u=n.n(i),s=n(75),p=n(73),m=n(2),h=n.n(m),f=n(11),d=n.n(f),y=n(8),b=n.n(y),E=n(37),v=n(41),g=n.n(v),k={},x=0,T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,n=k[t]||(k[t]={});if(n[e])return n[e];var a=g.a.compile(e);return x<1e4&&(n[e]=a,x++),a}(e)(t,{pretty:!0})},M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){b()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(E.b)(e.to),n=Object(E.b)(this.props.to);Object(E.c)(t,n)?d()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?T(n,t.params):M({},n,{pathname:T(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(u.a.Component);O.propTypes={computedMatch:h.a.object,push:h.a.bool,from:h.a.string,to:h.a.oneOfType([h.a.string,h.a.object]).isRequired},O.defaultProps={push:!1},O.contextTypes={router:h.a.shape({history:h.a.shape({push:h.a.func.isRequired,replace:h.a.func.isRequired}).isRequired,staticContext:h.a.object}).isRequired};var S=O,j=n(110),w=n(118),z={items:[{name:"Dashboard",url:"/DashBoard",icon:"icon-speedometer"},{title:!0,name:"Product Owner",wrapper:{element:"",attributes:{}},class:""},{name:"User Story",url:"/UserStory/Detail",icon:"icon-pencil"},{name:"Covert",url:"/Cover",icon:"icon-directions"},{name:"Product backlog",url:"/ProductBacklog/Detail",icon:"icon-pencil"},{name:"Evaluate",url:"/Evaluate",icon:"icon-layers"},{title:!0,name:"Team member",wrapper:{element:"",attributes:{}},class:""},{name:"Team",url:"/Member/Team",icon:"icon-people"},{name:"Velocity",url:"/Member/Velocity",icon:"icon-rocket"},{name:"SprintBacklog",url:"/Member/SprintBacklog",icon:"icon-book-open"},{name:"Evaluate",url:"/Member/Evaluate",icon:"icon-layers"},{name:"Team Task",url:"/Member/TeamTask",icon:"icon-docs"},{name:"My Task",url:"/Member/Task/MyTask",icon:"icon-doc"},{title:!0,name:"Extras"},{name:"Daily Schedule",url:"/DailySchedule",icon:"icon-calendar"},{name:"Pages",url:"/pages",icon:"icon-star",children:[{name:"Login",url:"/login",icon:"icon-star"},{name:"Register",url:"/register",icon:"icon-star"},{name:"Error 404",url:"/404",icon:"icon-star"},{name:"Error 500",url:"/500",icon:"icon-star"}]}]},P=u.a.lazy(function(){return Promise.all([n.e(34),n.e(43)]).then(n.bind(null,674))}),D=(u.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(41)]).then(n.bind(null,650))}),[{path:"/",exact:!0,name:"Home",component:q},{path:"/theme/colors",exact:!0,name:"Colors",component:P},{path:"/DailySchedule",exact:!0,name:"DailySchedule",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(37)]).then(n.bind(null,675))})},{path:"/DashBoard",exact:!0,name:"DashBoard",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(8),n.e(47)]).then(n.bind(null,676))})},{path:"/ProductBacklog/Detail",exact:!0,name:"Detail",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(51)]).then(n.bind(null,677))})},{path:"/UserStory/Detail",exact:!0,name:"UserStory_Detail",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(52)]).then(n.bind(null,678))})},{path:"/Cover",exact:!0,name:"Cover",component:u.a.lazy(function(){return n.e(18).then(n.bind(null,679))})},{path:"/Evaluate",exact:!0,name:"Evaluate",component:u.a.lazy(function(){return n.e(32).then(n.bind(null,680))})},{path:"/testapollo",name:"Typography",component:u.a.lazy(function(){return n.e(40).then(n.bind(null,693))})},{path:"/Member/Task/MyTask",exact:!0,name:"MyTask",component:u.a.lazy(function(){return Promise.all([n.e(21),n.e(48)]).then(n.bind(null,681))})},{path:"/Member/SprintBacklog",exact:!0,name:"SprintBacklog",component:u.a.lazy(function(){return n.e(29).then(n.bind(null,682))})},{path:"/Member/Evaluate",exact:!0,name:"Evaluate",component:u.a.lazy(function(){return n.e(25).then(n.bind(null,683))})},{path:"/Member/TeamTask",exact:!0,name:"TeamTask",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(49)]).then(n.bind(null,684))})},{path:"/Member/Velocity",exact:!0,name:"Velocity_Member",component:u.a.lazy(function(){return n.e(50).then(n.bind(null,685))})},{path:"/Member/Team",exact:!0,name:"Team_Member",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,686))})}]),C=u.a.lazy(function(){return n.e(30).then(n.bind(null,689))}),R=u.a.lazy(function(){return n.e(38).then(n.bind(null,673))}),B=u.a.lazy(function(){return n.e(26).then(n.bind(null,688))}),_=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app"},u.a.createElement(w.e,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(B,{onLogout:function(t){return e.signOut(t)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(w.h,{fixed:!0,display:"lg"},u.a.createElement(w.k,null),u.a.createElement(w.j,null),u.a.createElement(i.Suspense,null,u.a.createElement(w.m,Object.assign({navConfig:z},this.props))),u.a.createElement(w.i,null),u.a.createElement(w.l,null)),u.a.createElement("main",{className:"main"},u.a.createElement(w.c,{appRoutes:D}),u.a.createElement(j.a,{fluid:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(s.a,null,D.map(function(e,t){return e.component?u.a.createElement(p.a,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return u.a.createElement(e.component,t)}}):null}),u.a.createElement(S,{from:"/",to:"/dashboard"}))))),u.a.createElement(w.a,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(C,null)))),u.a.createElement(w.d,null,u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(R,null))))}}]),t}(i.Component),q=t.default=_}}]);
//# sourceMappingURL=44.5d273706.chunk.js.map