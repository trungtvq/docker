(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t);var l=a(30),n=a(31),r=a(33),c=a(32),m=a(34),u=a(36),o=a(3),i=a.n(o),E=a(129),d=a.n(E),s=a(130),h=a.n(s),p=a(124),g=a.n(p),b=a(131),f=a.n(b),y=a(125),v=a.n(y),k=a(123),M=a.n(k),O=a(121),j=a.n(O),w=a(106),C=a(133),N=a(128),S=a.n(N),x=a(126),P=a.n(x),A=a(127),I=a.n(A),T=a(132),L=a.n(T),z=a(119),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,m=new Array(n),u=0;u<n;u++)m[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(m)))).state={anchorEl:null,mobileMoreAnchorEl:null},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,l=this.props.classes,n=Boolean(t),r=Boolean(a),c=i.a.createElement(j.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleMenuClose},i.a.createElement(M.a,{onClick:this.handleMenuClose},i.a.createElement(z.a,{to:"/Profile/Detail"},"Profile")),i.a.createElement(M.a,{onClick:this.handleMenuClose},i.a.createElement(z.a,{to:"/AllProject"},"Project")),i.a.createElement(M.a,{onClick:this.handleMenuClose},i.a.createElement(z.a,{to:"/login"},"Log out"))),m=i.a.createElement(j.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},i.a.createElement(M.a,{onClick:this.handleMobileMenuClose},i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.a,{badgeContent:4,color:"secondary"},i.a.createElement(P.a,null))),i.a.createElement("p",null,"Messages")),i.a.createElement(M.a,{onClick:this.handleMobileMenuClose},i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.a,{badgeContent:11,color:"secondary"},i.a.createElement(I.a,null))),i.a.createElement("p",null,"Notifications")),i.a.createElement(M.a,{onClick:this.handleProfileMenuOpen},i.a.createElement(g.a,{color:"inherit"},i.a.createElement(S.a,null)),i.a.createElement("p",null,"Profile")));return i.a.createElement("div",{className:l.root},i.a.createElement(d.a,{position:"static"},i.a.createElement(h.a,null,i.a.createElement(f.a,{className:l.title,variant:"h6",color:"inherit",noWrap:!0},i.a.createElement(z.a,{to:"/Home/Main"},"Overlead")),i.a.createElement(f.a,{className:l.title,variant:"h6",color:"inherit",noWrap:!0}),i.a.createElement("div",{className:l.grow}),i.a.createElement("div",{className:l.sectionDesktop},i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.a,{badgeContent:4,color:"secondary"},i.a.createElement(P.a,null))),i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.a,{badgeContent:17,color:"secondary"},i.a.createElement(I.a,null))),i.a.createElement(g.a,{"aria-owns":n?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.a.createElement(S.a,null))),i.a.createElement("div",{className:l.sectionMobile},i.a.createElement(g.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},i.a.createElement(L.a,null))))),c,m)}}]),t}(i.a.Component);t.default=Object(C.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(u.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(R)},110:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),m=a(2),u=a.n(m),o=a(76),i=a.n(o),E=a(77),d={tag:E.m,fluid:u.a.bool,className:u.a.string,cssModule:u.a.object},s=function(e){var t=e.className,a=e.cssModule,r=e.fluid,m=e.tag,u=Object(n.a)(e,["className","cssModule","fluid","tag"]),o=Object(E.i)(i()(t,r?"container-fluid":"container"),a);return c.a.createElement(m,Object(l.a)({},u,{className:o}))};s.propTypes=d,s.defaultProps={tag:"div"},t.a=s},114:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),m=a(2),u=a.n(m),o=a(76),i=a.n(o),E=a(77),d={tag:E.m,className:u.a.string,cssModule:u.a.object},s=function(e){var t=e.className,a=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),u=Object(E.i)(i()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},m,{className:u}))};s.propTypes=d,s.defaultProps={tag:"div"},t.a=s},320:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),m=a(2),u=a.n(m),o=a(76),i=a.n(o),E=a(77),d={color:u.a.string,pill:u.a.bool,tag:E.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),children:u.a.node,className:u.a.string,cssModule:u.a.object},s=function(e){var t=e.className,a=e.cssModule,r=e.color,m=e.innerRef,u=e.pill,o=e.tag,d=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),s=Object(E.i)(i()(t,"badge","badge-"+r,!!u&&"badge-pill"),a);return d.href&&"span"===o&&(o="a"),c.a.createElement(o,Object(l.a)({},d,{className:s,ref:m}))};s.propTypes=d,s.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=s},665:function(e,t,a){"use strict";a.r(t);var l=a(30),n=a(31),r=a(33),c=a(32),m=a(34),u=a(3),o=a.n(u),i=a(110),E=a(94),d=a(89),s=a(99),h=a(114),p=a(102),g=a(103),b=a(98),f=a(167),y=a(666),v=a(667),k=a(668),M=a(320),O=a(100),j=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(O.default,null)),o.a.createElement(i.a,null,o.a.createElement(E.a,null,o.a.createElement(d.a,null,o.a.createElement(s.a,null,o.a.createElement(h.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Product Backlog")),o.a.createElement(p.a,null,o.a.createElement(E.a,null,o.a.createElement(d.a,{xs:"2",md:"2"},o.a.createElement(g.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),o.a.createElement(d.a,{xs:"2",md:"2"},o.a.createElement(g.a,{type:"select",name:"select",id:"select"},o.a.createElement("option",{value:"0"},"Sort by ID"),o.a.createElement("option",{value:"1"},"Sort by Sprint"),o.a.createElement("option",{value:"2"},"Sort by Status"))),o.a.createElement(d.a,{xs:"0",md:"0"},o.a.createElement(b.a,{type:"submit",size:"sm",color:"success"},o.a.createElement("i",{class:"fa fa-search"})))),o.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"As a..."),o.a.createElement("th",null,"I want to be able to..."),o.a.createElement("th",null,"So that..."),o.a.createElement("th",null,"Priority"),o.a.createElement("th",null,"Estimation"),o.a.createElement("th",null,"Sprint "))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"1"),o.a.createElement("td",null,"Admin"),o.a.createElement("td",null,"See a list of all members and visitors"),o.a.createElement("td",null,"I can monitor site visits"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"1")),o.a.createElement("tr",null,o.a.createElement("td",null,"2"),o.a.createElement("td",null,"Admin"),o.a.createElement("td",null,"Add new categories"),o.a.createElement("td",null,"I can allow members to create engaging content"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"1")),o.a.createElement("tr",null,o.a.createElement("td",null,"3"),o.a.createElement("td",null,"Admin"),o.a.createElement("td",null,"Add new security groups"),o.a.createElement("td",null,"Security levels are approriate"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"1")),o.a.createElement("tr",null,o.a.createElement("td",null,"4"),o.a.createElement("td",null,"Admin"),o.a.createElement("td",null,"Add new key words"),o.a.createElement("td",null,"Content is easy to groups and search for"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"1")),o.a.createElement("tr",null,o.a.createElement("td",null,"5"),o.a.createElement("td",null,"Admin"),o.a.createElement("td",null,"Delete comment"),o.a.createElement("td",null,"Offensive content is removed"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"1")),o.a.createElement("tr",null,o.a.createElement("td",null,"6"),o.a.createElement("td",null,"Member"),o.a.createElement("td",null,"Update my account detail"),o.a.createElement("td",null,"I can be contacted by admin"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"2")),o.a.createElement("tr",null,o.a.createElement("td",null,"7"),o.a.createElement("td",null,"Member"),o.a.createElement("td",null,"Change my password "),o.a.createElement("td",null,"I can keep secure"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"2")),o.a.createElement("tr",null,o.a.createElement("td",null,"8"),o.a.createElement("td",null,"Member"),o.a.createElement("td",null,"Update my email preferences "),o.a.createElement("td",null,"I am not bombarded junk mail"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"2")),o.a.createElement("tr",null,o.a.createElement("td",null,"9"),o.a.createElement("td",null,"Visitor"),o.a.createElement("td",null,"Create an account "),o.a.createElement("td",null,"I can benifit from member discounts"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"3")),o.a.createElement("tr",null,o.a.createElement("td",null,"10"),o.a.createElement("td",null,"Visitor"),o.a.createElement("td",null,"Suggest improvements"),o.a.createElement("td",null,"I can contribute to the site usability "),o.a.createElement("td",null,"8"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"3")),o.a.createElement("tr",null,o.a.createElement("td",null,"11"),o.a.createElement("td",null,"Visitor"),o.a.createElement("td",null,"View member profile "),o.a.createElement("td",null,"I can know more about member "),o.a.createElement("td",null,"9"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"3")))),o.a.createElement("nav",null,o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(k.a,{previous:!0,tag:"button"},"Prev")),o.a.createElement(v.a,{active:!0},o.a.createElement(k.a,{tag:"button"},"1")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"2")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"3")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"4")),o.a.createElement(v.a,null,o.a.createElement(k.a,{next:!0,tag:"button"},"Next")))))),o.a.createElement(s.a,null,o.a.createElement(h.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Task")),o.a.createElement(p.a,null,o.a.createElement(E.a,null,o.a.createElement(d.a,{xs:"2",md:"2"},o.a.createElement(g.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),o.a.createElement(d.a,{xs:"2",md:"2"},o.a.createElement(g.a,{type:"select",name:"select",id:"select"},o.a.createElement("option",{value:"0"},"Sort by Title"),o.a.createElement("option",{value:"1"},"Sort by Sprint"),o.a.createElement("option",{value:"2"},"Sort by IdBacklog"))),o.a.createElement(d.a,{xs:"0",md:"0"},o.a.createElement(b.a,{type:"submit",size:"sm",color:"success"},o.a.createElement("i",{class:"fa fa-search"})))),o.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Sprint"),o.a.createElement("th",null,"IdBacklog"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Priority"),o.a.createElement("th",null,"Start day"),o.a.createElement("th",null,"Deadline"),o.a.createElement("th",null,"Assignee"),o.a.createElement("th",null,"Comment"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Login b\u1eb1ng Fb"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"danger"},"High")),o.a.createElement("td",null,"20/4/2019"),o.a.createElement("td",null,"24/4/2019"),o.a.createElement("td",null,"H\xf9ng"),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("td",null,"Login b\u1eb1ng email"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n email \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"danger"},"High")),o.a.createElement("td",null,"20/4/2019"),o.a.createElement("td",null,"23/4/2019"),o.a.createElement("td",null,"Nh\xe2n"),o.a.createElement("td",null,"C\xf3 c\u1ea7n x\xe1c th\u1ef1c email kh\xf4ng?")),o.a.createElement("tr",null,o.a.createElement("td",null,"Login b\u1eb1ng t\xe0i kho\u1ea3n"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng t\u1ea1o t\xe0i kho\u1ea3n v\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n n\xe0y \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"warning"},"Medium")),o.a.createElement("td",null,"21/4/2019"),o.a.createElement("td",null,"25/4/2019"),o.a.createElement("td",null,"T\xe2m"),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("td",null,"\u0110\u1ed5i m\u1eadt kh\u1ea9u"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"primary"},"Low")),o.a.createElement("td",null,"20/4/2019"),o.a.createElement("td",null,"24/4/2019"),o.a.createElement("td",null),o.a.createElement("td",null,"C\xf3 c\u1ea7n g\u1eedi m\xe0 t\u1edbi email li\xean k\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn kh\xf4ng?")),o.a.createElement("tr",null,o.a.createElement("td",null,"Thay \u0111\u1ed5i avatar"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"8"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"primary"},"Low")),o.a.createElement("td",null,"20/4/2019"),o.a.createElement("td",null,"24/4/2019"),o.a.createElement("td",null),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("td",null,"Thanh to\xe1n b\u1eb1ng paypal"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"8"),o.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng paypal \u0111\u1ec3 tr\u1ea3 ph\xed"),o.a.createElement("td",null,o.a.createElement(M.a,{color:"primary"},"Low")),o.a.createElement("td",null,"20/4/2019"),o.a.createElement("td",null,"24/4/2019"),o.a.createElement("td",null),o.a.createElement("td",null)))),o.a.createElement("nav",null,o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(k.a,{previous:!0,tag:"button"},"Prev")),o.a.createElement(v.a,{active:!0},o.a.createElement(k.a,{tag:"button"},"1")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"2")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"3")),o.a.createElement(v.a,null,o.a.createElement(k.a,{tag:"button"},"4")),o.a.createElement(v.a,null,o.a.createElement(k.a,{next:!0,tag:"button"},"Next")))))),o.a.createElement(s.a,null,o.a.createElement(h.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Member"),o.a.createElement("h6",null,"Porduct owner: Nguy\u1ec5n V\u0103n A"),o.a.createElement("h6",null,"Scrum master: Nguy\u1ec5n V\u0103n B")),o.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Task completed ontime"),o.a.createElement("th",null,"Task completed late"),o.a.createElement("th",null,"Issue"),o.a.createElement("th",null,"Point"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"H\xf9ng"),o.a.createElement("td",null,"10"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"6")),o.a.createElement("tr",null,o.a.createElement("td",null,"T\xe2m"),o.a.createElement("td",null,"10"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"6")),o.a.createElement("tr",null,o.a.createElement("td",null,"Trung"),o.a.createElement("td",null,"10"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"6")),o.a.createElement("tr",null,o.a.createElement("td",null,"Nh\xe2n"),o.a.createElement("td",null,"10"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"6")))))))))}}]),t}(u.Component);t.default=j}}]);
//# sourceMappingURL=31.1961c62a.chunk.js.map