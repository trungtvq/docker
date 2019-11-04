(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{102:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(3),o=t.n(r),l=t(2),c=t.n(l),i=t(76),u=t.n(i),d=t(77),m={tag:d.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.i)(u()(a,"card-body"),t);return o.a.createElement(l,Object(n.a)({},c,{className:i,ref:r}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},103:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(22),o=t(21),l=t(3),c=t.n(l),i=t(2),u=t.n(i),d=t(76),m=t.n(d),p=t(77),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(p.e)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(p.e)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(Object(o.a)(t))),t.focus=t.focus.bind(Object(o.a)(Object(o.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,l=e.state,i=e.valid,u=e.invalid,d=e.tag,f=e.addon,b=e.static,g=e.plaintext,h=e.innerRef,v=Object(s.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),y=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),j=d||("select"===r||"textarea"===r?r:"input"),O="form-control";g||b?(O+="-plaintext",j=d||"input"):"file"===r?O+="-file":y&&(O=f?null:"form-check-input"),l&&"undefined"===typeof i&&"undefined"===typeof u&&("danger"===l?u=!0:"success"===l&&(i=!0)),v.size&&E.test(v.size)&&(Object(p.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=v.size,delete v.size);var w=Object(p.i)(m()(a,u&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,O),t);return("input"===j||d&&"function"===typeof d)&&(v.type=r),!v.children||g||b||"select"===r||"string"!==typeof j||"select"===j||(Object(p.n)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(j,Object(n.a)({},v,{ref:h,className:w}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},114:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(3),o=t.n(r),l=t(2),c=t.n(l),i=t(76),u=t.n(i),d=t(77),m={tag:d.m,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},l,{className:c}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},115:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(3),o=t.n(r),l=t(2),c=t.n(l),i=t(76),u=t.n(i),d=t(79),m=t.n(d),p=t(77),f=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:f,push:Object(p.e)(f,'Please use the prop "order"'),pull:Object(p.e)(f,'Please use the prop "order"'),order:f,offset:f})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.m,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,i=e.check,d=e.size,f=e.for,b=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];l.forEach(function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,o=!n;if(m()(s)){var l,c=o?"-":"-"+a+"-";r=v(o,a,s.size),g.push(Object(p.i)(u()(((l={})[r]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l))),t)}else r=v(o,a,s),g.push(r)}});var h=Object(p.i)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:h}))};y.propTypes=g,y.defaultProps=h,a.a=y},679:function(e,a,t){"use strict";t.r(a);var n=t(30),s=t(31),r=t(33),o=t(32),l=t(34),c=t(3),i=t.n(c),u=t(94),d=t(89),m=t(99),p=t(114),f=t(102),b=t(115),g=t(103),h=t(98),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).state={dataUserStory:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{as:"admin",want:"Add new security groups",so:"Security levels are approriate"}],dataProductBacklog:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits",priority:1,estimation:3,sprint:1},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content",priority:2,estimation:1,sprint:1},{as:"admin",want:"Add new security groups",so:"Security levels are approriate",priority:3,estimation:4,sprint:1}]},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement("div",{class:"card border-primary mb-3"},i.a.createElement("div",{class:"card-header bg-primary"},"USER STORY"),i.a.createElement("div",{class:"card-body"},this.state.dataUserStory.map(function(e,a){return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:""}),i.a.createElement("strong",null,"As: ",e.as)),i.a.createElement(f.a,null,i.a.createElement("h6",null,"I want: ",e.want),i.a.createElement("h6",null,"So that:  ",e.so),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Priority")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Estimation")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement("div",{class:"col col-lg-1 col-md-1 col-sm-1"},i.a.createElement(b.a,{htmlFor:"text-input"},"Sprint")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"}))),i.a.createElement(h.a,{type:"submit",size:"sm",color:"success",align:"center"},i.a.createElement("i",{class:"fa fa-arrow-right"}))))})))),i.a.createElement(d.a,null,i.a.createElement("div",{class:"card border-primary mb-3"},i.a.createElement("div",{class:"card-header bg-primary"},"PRODUCT BACKLOG"),i.a.createElement("div",{class:"card-body"},this.state.dataProductBacklog.map(function(e,a){return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:""}),i.a.createElement("strong",null,"As ",e.as)),i.a.createElement(f.a,null,i.a.createElement("h6",null,"I want :  ",e.want),i.a.createElement("h6",null," So that:   ",e.so),i.a.createElement(u.a,null,i.a.createElement(d.a,{md:"3"},i.a.createElement("h6",null,"Priority:  ",e.priority)),i.a.createElement(d.a,{md:"1"}),i.a.createElement(d.a,{md:"3"},i.a.createElement("h6",null,"Estimation:  ",e.estimation)),i.a.createElement(d.a,{md:"1"}),i.a.createElement(d.a,{md:"3"},i.a.createElement("h6",null,"Sprint:  ",e.sprint))),i.a.createElement(h.a,{type:"submit",size:"sm",color:"success",align:"center"},i.a.createElement("i",{class:"fa fa-arrow-left"}))))})))))))}}]),a}(c.Component);a.default=v},79:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},89:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(79),o=t.n(r),l=t(3),c=t.n(l),i=t(2),u=t.n(i),d=t(76),m=t.n(d),p=t(77),f=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(p.e)(f,'Please use the prop "order"'),pull:Object(p.e)(f,'Please use the prop "order"'),order:f,offset:f})]),g={tag:p.m,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(a,n){var s=e[a];if(delete i[a],s||""===s){var r=!n;if(o()(s)){var l,c=r?"-":"-"+a+"-",d=v(r,a,s.size);u.push(Object(p.i)(m()(((l={})[d]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l)),t))}else{var f=v(r,a,s);u.push(f)}}}),u.length||u.push("col");var d=Object(p.i)(m()(a,u),t);return c.a.createElement(l,Object(n.a)({},i,{className:d}))};y.propTypes=g,y.defaultProps=h,a.a=y},94:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(3),o=t.n(r),l=t(2),c=t.n(l),i=t(76),u=t.n(i),d=t(77),m={tag:d.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.i)(u()(a,r?"no-gutters":null,c?"form-row":"row"),t);return o.a.createElement(l,Object(n.a)({},i,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},98:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(22),o=t(21),l=t(3),c=t.n(l),i=t(2),u=t.n(i),d=t(76),m=t.n(d),p=t(77),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(Object(o.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,o=e.className,l=e.close,i=e.cssModule,u=e.color,d=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.i)(m()(o,{close:l},l||"btn",l||v,!!f&&"btn-"+f,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var E=l?"Close":null;return c.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":t||E}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},a.a=b},99:function(e,a,t){"use strict";var n=t(15),s=t(17),r=t(3),o=t.n(r),l=t(2),c=t.n(l),i=t(76),u=t.n(i),d=t(77),m={tag:d.m,inverse:c.a.bool,color:c.a.string,block:Object(d.e)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.block,c=e.body,i=e.inverse,m=e.outline,p=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.i)(u()(a,"card",!!i&&"text-white",!(!l&&!c)&&"card-body",!!r&&(m?"border":"bg")+"-"+r),t);return o.a.createElement(p,Object(n.a)({},b,{className:g,ref:f}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=18.be3598e9.chunk.js.map