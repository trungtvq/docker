(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{684:function(e,a,t){"use strict";t.r(a);var l=t(30),n=t(31),r=t(33),c=t(32),i=t(34),m=t(21),o=t(3),s=t.n(o),d=t(94),E=t(89),u=t(103),p=t(98),h=t(99),g=t(690),k=t(662),y=t(663),f=t(112),b=t(134),v=t(115),x=t(664),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).toggleAdd=t.toggleAdd.bind(Object(m.a)(Object(m.a)(t))),t.toggleEdit=t.toggleEdit.bind(Object(m.a)(Object(m.a)(t))),t.toggle=t.toggle.bind(Object(m.a)(Object(m.a)(t))),t.state={collapse:!0,fadeIn:!0,data:[{Title:"Login b\u1eb1ng Fb",Description:"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp",Priority:"High",Start:"20/4/2019",Deadline:"24/4/2019",Assignee:"H\xf9ng",Comment:"",status:"done",review:""},{Title:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",Description:"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o",Priority:"Low",Start:"20/4/2019",Deadline:"24/4/2019",Assignee:"T\xe2m",Comment:"C\xf3 c\u1ea7n g\u1eedi m\xe0 t\u1edbi email li\xean k\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn kh\xf4ng?",status:"done",review:""},{Title:"Thay \u0111\u1ed5i avatar",Description:"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh",Priority:"Low",Start:"20/4/2019",Deadline:"24/4/2019",Assignee:"Trung",Comment:"",status:"done",review:""},{Title:"Thanh to\xe1n b\u1eb1ng paypal",Description:"Ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng paypal \u0111\u1ec3 tr\u1ea3 ph\xed",Priority:"Low",Start:"20/4/2019",Deadline:"24/4/2019",Assignee:"",Comment:"",status:"done",review:""}],modalAdd:!1,modalEdit:!1},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleAdd",value:function(){this.setState(function(e){return{modalAdd:!e.modalAdd}})}},{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"render",value:function(){this.state.data;var e=this;return s.a.createElement(d.a,null,s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(E.a,{xs:"2",md:"2"},s.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),s.a.createElement(E.a,{xs:"0",md:"0"},s.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{class:"fa fa-search"})))),s.a.createElement(h.a,null,s.a.createElement("div",{class:"table-responsive"},s.a.createElement("table",{class:"table table-lg"},s.a.createElement("thead",{class:"thead"},s.a.createElement("tr",{class:"bg-primary"},s.a.createElement("th",null,"Title ",s.a.createElement("i",{class:"fa fa-sort"})),s.a.createElement("th",null,"Description ",s.a.createElement("i",{class:"fa fa-sort"})),s.a.createElement("th",null,"Priority ",s.a.createElement("i",{class:"fa fa-sort"})),s.a.createElement("th",null,"Start day ",s.a.createElement("i",{class:"fa fa-sort"})),s.a.createElement("th",null,"Deadline ",s.a.createElement("i",{class:"fa fa-sort"})),s.a.createElement("th",null,"Assignee"),s.a.createElement("th",null,"Comment"),s.a.createElement("th",null,"Status"),s.a.createElement("th",null,"Review"),s.a.createElement("th",null,s.a.createElement("div",null,s.a.createElement(p.a,{color:"primary",size:"sm",className:"mt-3",onClick:e.toggleAdd},s.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),s.a.createElement(g.a,{size:"lg",isOpen:e.state.modalAdd,toggle:e.toggleAdd,className:e.props.className},s.a.createElement(k.a,{toggle:e.toggleAdd},"Team Task"),s.a.createElement(y.a,null,s.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"text-input"},"Title")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"textarea-input"},"Description")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,null,"Priority")),s.a.createElement(E.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"High")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"Medium")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio3",name:"inline-radios",value:"option3"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio3"},"Low")))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"date-input"},"Start day ")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"date-input"},"Deadline ")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"date",id:"date-input",name:"date-input",placeholder:"date"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"text-input"},"Assignee")),s.a.createElement(E.a,{xs:"12",md:"3"},s.a.createElement(u.a,{type:"select",name:"select",id:"select"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"H\xf9ng"),s.a.createElement("option",{value:"2"},"Nh\xe2n"),s.a.createElement("option",{value:"3"},"T\xe2m")))))),s.a.createElement(x.a,null,s.a.createElement(p.a,{color:"primary",onClick:e.toggleAdd},"Submit")," ",s.a.createElement(p.a,{color:"secondary",onClick:e.toggleAdd},"Cancel"))))))),s.a.createElement("tbody",null,this.state.data.map(function(a,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,a.Title),s.a.createElement("td",null,a.Description),s.a.createElement("td",null,a.Priority),s.a.createElement("td",null,a.Start),s.a.createElement("td",null,a.Deadline),s.a.createElement("td",null,a.Assignee),s.a.createElement("td",null,a.Comment),s.a.createElement("td",null,a.status),s.a.createElement("td",null,a.review),s.a.createElement("td",null,s.a.createElement(p.a,{color:"warning",size:"sm",className:"mt-3",onClick:e.toggleEdit},s.a.createElement("i",{class:"fa fa-edit"}),e.props.buttonLabel),s.a.createElement(g.a,{size:"lg",isOpen:e.state.modalEdit,toggle:e.toggleEdit,className:e.props.className},s.a.createElement(k.a,{toggle:e.toggleEdit},"Team task"),s.a.createElement(y.a,null,s.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"text-input"},"Title")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title",value:"Login b\u1eb1ng Fb"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"textarea-input"},"Description")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content...",value:"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,null,"Priority")),s.a.createElement(E.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"High")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"Medium")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(u.a,{className:"form-check-input",type:"radio",id:"inline-radio3",name:"inline-radios",value:"option3"}),s.a.createElement(v.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio3"},"Low")))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"date-input"},"Start day ")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"date",id:"date-input",name:"date-input",placeholder:"date",value:"20/4/2019"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"date-input"},"Deadline ")),s.a.createElement(E.a,{xs:"12",md:"9"},s.a.createElement(u.a,{type:"date",id:"date-input",name:"date-input",placeholder:"date",value:"24/4/2019"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"text-input"},"Assignee")),s.a.createElement(E.a,{xs:"12",md:"2"},s.a.createElement(u.a,{type:"select",name:"select",id:"select"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"H\xf9ng"),s.a.createElement("option",{value:"2"},"Nh\xe2n"),s.a.createElement("option",{value:"3"},"T\xe2m")))),s.a.createElement(b.a,{row:!0},s.a.createElement(E.a,{md:"3"},s.a.createElement(v.a,{htmlFor:"text-input"},"Status")),s.a.createElement(E.a,{xs:"12",md:"2"},s.a.createElement(u.a,{type:"select",name:"select",id:"select"},s.a.createElement("option",{value:"0"},"Please select"),s.a.createElement("option",{value:"1"},"done"),s.a.createElement("option",{value:"2"},"inprogress"),s.a.createElement("option",{value:"3"},"to do")))))),s.a.createElement(x.a,null,s.a.createElement(p.a,{color:"primary",onClick:e.toggleEdit},"Submit")," ",s.a.createElement(p.a,{color:"secondary",onClick:e.toggleEdit},"Cancel"))),s.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{class:"fa fa-plus"}))))})))))))}}]),a}(o.Component);a.default=w}}]);
//# sourceMappingURL=49.620bbcee.chunk.js.map