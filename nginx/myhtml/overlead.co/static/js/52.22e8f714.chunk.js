(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{678:function(e,t,a){"use strict";a.r(t);var l=a(30),n=a(31),r=a(33),c=a(32),m=a(34),o=a(21),s=a(3),i=a.n(s),d=a(94),E=a(89),u=a(103),p=a(98),g=a(99),b=a(690),h=a(662),f=a(663),x=a(112),w=a(134),y=a(115),A=a(664),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).toggleAdd=a.toggleAdd.bind(Object(o.a)(Object(o.a)(a))),a.toggleEdit=a.toggleEdit.bind(Object(o.a)(Object(o.a)(a))),a.state={data:[{id:1,as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{id:2,as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{id:3,as:"admin",want:"Add new security groups",so:"Security levels are approriate"},{id:4,as:"admin",want:"Delete comment",so:"Offensive content is removed"},{id:5,as:"admin",want:"Add new key words",so:"Content is easy to groups and search for"},{id:6,as:"member",want:"Update my account detail",so:"I can be contacted by admin"}],modalAdd:!1,modalEdit:!1},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"toggleAdd",value:function(){this.setState(function(e){return{modalAdd:!e.modalAdd}})}},{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"render",value:function(){this.state.data;var e=this;return i.a.createElement(d.a,null,i.a.createElement(E.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(E.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(g.a,null,i.a.createElement("div",{class:"table-responsive"},i.a.createElement("table",{class:"table table-lg"},i.a.createElement("thead",{class:"thead"},i.a.createElement("tr",{class:"bg-primary"},i.a.createElement("th",null,"ID ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"As a...",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"I want to be able to... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"So that... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,i.a.createElement("div",null,i.a.createElement(p.a,{color:"primary",size:"sm",className:"mt-3",onClick:e.toggleAdd},i.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),i.a.createElement(b.a,{size:"lg",isOpen:e.state.modalAdd,toggle:e.toggleAdd,className:e.props.className},i.a.createElement(h.a,{toggle:e.toggleAdd},"UserStory"),i.a.createElement(f.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a..."}))),i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to..."}))),i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))))),i.a.createElement(A.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleAdd},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleAdd},"Cancel"))))))),i.a.createElement("tbody",null,this.state.data.map(function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,t.id),i.a.createElement("td",null,t.as),i.a.createElement("td",null,t.want),i.a.createElement("td",null,t.so),i.a.createElement("td",null,i.a.createElement(p.a,{color:"warning",size:"sm",onClick:e.toggleEdit},i.a.createElement("i",{class:"fa fa-edit"}),e.props.buttonLabel),i.a.createElement(b.a,{size:"lg",isOpen:e.state.modalEdit,toggle:e.toggleEdit,className:e.props.className},i.a.createElement(h.a,{toggle:e.toggleEdit},"UserStory"),i.a.createElement(f.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a...",value:"admin"}))),i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to...",value:"See a list of all members and visitors"}))),i.a.createElement(w.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(y.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content...",value:"I can monitor site visits"}))))),i.a.createElement(A.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleEdit},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleEdit},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"danger"},i.a.createElement("i",{class:"fa fa-trash"}))))})))))))}}]),t}(s.Component);t.default=v}}]);
//# sourceMappingURL=52.22e8f714.chunk.js.map