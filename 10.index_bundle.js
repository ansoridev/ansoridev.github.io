(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,active:r.a.bool,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,i=e.tag,r=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(d.f)(u()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(i,Object(n.a)({},r,{className:o,"aria-current":c?"page":void 0}))};p.propTypes=m,p.defaultProps={tag:"li"},a.a=p},18:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,inverse:r.a.bool,color:r.a.string,block:Object(d.d)(r.a.bool,'Please use the props "body"'),body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},p=function(e){var a=e.className,t=e.cssModule,c=e.color,i=e.block,r=e.body,o=e.inverse,m=e.outline,p=e.tag,b=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(d.f)(u()(a,"card",!!o&&"text-white",!(!i&&!r)&&"card-body",!!c&&(m?"border":"bg")+"-"+c),t);return l.a.createElement(p,Object(n.a)({},f,{className:h,ref:b}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},20:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,listTag:d.i,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},p=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,i=e.children,r=e.tag,o=e.listTag,m=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.f)(u()(a),c),f=Object(d.f)(u()("breadcrumb",t),c);return l.a.createElement(r,Object(n.a)({},p,{className:b,"aria-label":m}),l.a.createElement(o,{className:f},i))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},292:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t.n(n),c=t(0),l=t.n(c),i=t(9),r=t(6),o=t(20),u=t(12),d=t(18),m=t(15),p=t(30),b=t(78),f=t(33),h=t(34),v=t(52),g=t(31),E=t(40),y=t(7),N=t.n(y),j=t(5),w=t.n(j),O=t(4),k=t(13),T=t.n(k);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,a,t,n,s,c,l){try{var i=e[c](l),r=i.value}catch(e){return void t(e)}i.done?a(r):Promise.resolve(r).then(n,s)}function M(e){return function(){var a=this,t=arguments;return new Promise((function(n,s){var c=e.apply(a,t);function l(e){P(c,n,s,l,i,"next",e)}function i(e){P(c,n,s,l,i,"throw",e)}l(void 0)}))}}function x(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,a){return(S=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function I(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=B(e);if(a){var s=B(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return R(this,t)}}function R(e,a){return!a||"object"!==C(a)&&"function"!=typeof a?_(e):a}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&S(e,a)}(y,e);var a,t,n,c=I(y);function y(e){var a;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,y),(a=c.call(this,e)).tabround=a.tabround.bind(_(a)),a.oninput=a.oninput.bind(_(a)),a.state={tabround:"1",cloud:{},password:""},a}return a=y,(t=[{key:"tabround",value:function(e){this.state.tabround!==e&&this.setState({tabround:e})}},{key:"oninput",value:function(e){var a,t,n;this.setState((a={},t=e.target.name,n=e.target.value,t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a))}},{key:"componentDidMount",value:function(){var e=this;function a(){return(a=M(s.a.mark((function a(t,c){var l,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w.a.fire({title:"Please wait...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){w.a.showLoading()}}),a.next=3,fetch("".concat(O.apiurl,"/hosting/plesk/detail"),{headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(n,"&id=").concat(c),method:"POST"});case 3:return l=a.sent,a.next=6,l.json();case 6:return i=a.sent,a.next=9,l.status;case 9:200===a.sent&&(i.status?(e.setState({cloud:i.data,password:i.data.password}),w.a.hideLoading(),w.a.close()):e.props.history.push("/"));case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var t=sessionStorage.getItem("cloudAction"),n=localStorage.getItem("session_key");!function(e,t){a.apply(this,arguments)}(n,t)}},{key:"render",value:function(){var e=this,a=this;"active"===this.state.cloud.status||"suspended"===this.state.cloud.status||this.state.cloud.status;var t="https://".concat(this.state.cloud.hostname,"/login_up.php"),n=function(){document.getElementById("showpw").innerHTML=e.state.password},c="Unlimited"===this.state.cloud.plantraffic?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plantraffic,y="Unlimited"===this.state.cloud.plansubdomain?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plansubdomain,j=this.state.cloud.plandb>=999?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plandb,k=this.state.cloud.planwebsite>=999?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.planwebsite;return l.a.createElement("div",null,l.a.createElement("div",{className:"page-title"},l.a.createElement(i.a,null,l.a.createElement(r.a,{sm:6},l.a.createElement("h4",{className:"mb-0"}," Kelola Web Hosting")),l.a.createElement(r.a,{sm:6},l.a.createElement(o.a,{className:"pt-0 pr-0 float-left float-sm-right"},l.a.createElement(u.a,null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement(u.a,{active:!0},"Kelola Web Hosting "))))),l.a.createElement(i.a,null,l.a.createElement(r.a,{md:6,className:"mb-30 pull-center"},l.a.createElement(d.a,{className:"card-statistics h-100"},l.a.createElement(m.a,null,l.a.createElement(p.a,null,"MANAGE WEB HOSTING"),l.a.createElement("div",{className:"tab round"},l.a.createElement(b.a,{tabs:!0},l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"1"===this.state.tabround}),onClick:function(){e.tabround("1")}},l.a.createElement("i",{className:"ti-info-alt"}),"Detail Service")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"2"===this.state.tabround}),onClick:function(){e.tabround("2")}},l.a.createElement("i",{className:"ti-receipt"})," Billing")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"3"===this.state.tabround}),onClick:function(){e.tabround("3")}},l.a.createElement("i",{className:"ti-pulse"})," Usage")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"4"===this.state.tabround}),onClick:function(){e.tabround("4")}},l.a.createElement("i",{className:"fa fa-check-square"}),"Hosting Access"))),l.a.createElement(v.a,{activeTab:this.state.tabround},l.a.createElement(g.a,{tabId:"1"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},this.state.cloud.domain)),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"ti-wallet"})," Plan: ",this.state.cloud.plan," - ",this.state.cloud.planspace),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-cloud"})," IP Public: ",this.state.cloud.ip),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrives"})," NS1: ",this.state.cloud.nameserver1),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrives"})," NS2: ",this.state.cloud.nameserver2)))))),l.a.createElement(g.a,{tabId:"2"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Billing Overview")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-calendar-plus-o"})," Reg on: ",this.state.cloud.registred),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-calendar-times-o"})," Exp on: ",this.state.cloud.expired),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-calendar"})," Billing Cycle: ",this.state.cloud.duration),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-money"})," Recurring: ",l.a.createElement(T.a,{value:this.state.cloud.totalpayment,displayType:"text",thousandSeparator:!0,prefix:"Rp "}))))))),l.a.createElement(g.a,{tabId:"3"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Usage Overview")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrive"})," Disk: ",this.state.cloud.diskusage," / ",this.state.cloud.planspace),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-stats-up"})," Traffic: ",this.state.cloud.trafficusage," / ",c),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-server"})," Database: ",this.state.cloud.dbusage," / ",j),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-world"})," Website: ",this.state.cloud.websiteusage," / ",k),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-cloud"})," Sub Domain: ",this.state.cloud.subdomainuse," / ",y)))))),l.a.createElement(g.a,{tabId:"4"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Hosting Access")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2 text-center"},l.a.createElement("li",null,l.a.createElement("form",{method:"POST",action:t,target:"_blank"},l.a.createElement("input",{type:"hidden",name:"login_name",value:this.state.cloud.username}),l.a.createElement("input",{type:"hidden",name:"passwd",value:this.state.password}),l.a.createElement("button",{type:"submit",className:"button button-border black btn-block"},l.a.createElement("i",{className:"fa fa-external-link"}),"Hosting Panel"))),l.a.createElement("li",{className:"mt-10"},l.a.createElement("i",{className:"ti-user"}),"Username: ",this.state.cloud.username),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-key"}),"Password: ",l.a.createElement("a",{id:"showpw",onClick:n},"View Password")),l.a.createElement("li",null,l.a.createElement(E.a,{className:"btn btn-info mt-10",onClick:function(){function e(){return(e=M(s.a.mark((function e(t,c){var l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.a.fire({title:"Please wait...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){w.a.showLoading()}}),e.next=3,fetch("".concat(O.apiurl,"/hosting/reset/password"),{headers:{"content-type":"application/json"},body:JSON.stringify({session:t,id:c}),method:"PUT"});case 3:return l=e.sent,e.next=6,l.json();case 6:return i=e.sent,e.next=9,l.status;case 9:200===e.sent&&(i.status?(a.setState({password:i.newPassword}),n(),w.a.hideLoading(),w.a.fire({title:"Successfully!",text:i.message,type:"success",animation:!0,showConfirmButton:!0}),document.getElementById("showpw").innerHTML="View Password"):a.props.history.push("/"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=sessionStorage.getItem("cloudAction");!function(a,t){e.apply(this,arguments)}(localStorage.getItem("session_key"),t)}},"Reset Password"))))))))))))))}}])&&x(a.prototype,t),n&&x(a,n),y}(l.a.Component);a.default=D},30:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),r=Object(d.f)(u()(a,"card-title"),t);return l.a.createElement(c,Object(n.a)({},i,{className:r}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},31:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,className:r.a.string,cssModule:r.a.object,tabId:r.a.any},p={activeTabId:r.a.any};function b(e,a){var t=e.className,c=e.cssModule,i=e.tabId,r=e.tag,o=Object(s.a)(e,["className","cssModule","tabId","tag"]),m=Object(d.f)(u()("tab-pane",t,{active:i===a.activeTabId}),c);return l.a.createElement(r,Object(n.a)({},o,{className:m}))}b.propTypes=m,b.defaultProps={tag:"div"},b.contextTypes=p},33:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tag:d.i,active:r.a.bool,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,i=e.tag,r=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(d.f)(u()(a,"nav-item",!!c&&"active"),t);return l.a.createElement(i,Object(n.a)({},r,{className:o}))};p.propTypes=m,p.defaultProps={tag:"li"},a.a=p},34:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(21),l=t(11),i=t(0),r=t.n(i),o=t(1),u=t.n(o),d=t(7),m=t.n(d),p=t(2),b={tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.active,l=e.tag,i=e.innerRef,o=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(p.f)(m()(a,"nav-link",{disabled:o.disabled,active:c}),t);return r.a.createElement(l,Object(n.a)({},o,{ref:i,onClick:this.onClick,className:u}))},a}(r.a.Component);f.propTypes=b,f.defaultProps={tag:"a"},a.a=f},40:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(21),l=t(11),i=t(0),r=t.n(i),o=t(1),u=t.n(o),d=t(7),m=t.n(d),p=t(2),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,l=e.className,i=e.close,o=e.cssModule,u=e.color,d=e.outline,b=e.size,f=e.tag,h=e.innerRef,v=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&void 0===v.children&&(v.children=r.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(d?"-outline":"")+"-"+u,E=Object(p.f)(m()(l,{close:i},i||"btn",i||g,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),o);v.href&&"button"===f&&(f="a");var y=i?"Close":null;return r.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:E,ref:h,onClick:this.onClick,"aria-label":t||y}))},a}(r.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},52:function(e,a,t){"use strict";var n=t(8),s=t(21),c=t(0),l=t.n(c),i=t(54),r=t(1),o=t.n(r),u=t(7),d=t.n(u),m=t(2),p={tag:m.i,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b={activeTabId:o.a.any},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null};var t=a.prototype;return t.getChildContext=function(){return{activeTabId:this.state.activeTab}},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,c=Object(m.g)(this.props,Object.keys(p)),i=Object(m.f)(d()("tab-content",a),t);return l.a.createElement(s,Object(n.a)({},c,{className:i}))},a}(c.Component);Object(i.polyfill)(f),a.a=f,f.propTypes=p,f.defaultProps={tag:"div"},f.childContextTypes=b},78:function(e,a,t){"use strict";var n=t(8),s=t(10),c=t(0),l=t.n(c),i=t(1),r=t.n(i),o=t(7),u=t.n(o),d=t(2),m={tabs:r.a.bool,pills:r.a.bool,vertical:r.a.oneOfType([r.a.bool,r.a.string]),horizontal:r.a.string,justified:r.a.bool,fill:r.a.bool,navbar:r.a.bool,card:r.a.bool,tag:d.i,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tabs,i=e.pills,r=e.vertical,o=e.horizontal,m=e.justified,p=e.fill,b=e.navbar,f=e.card,h=e.tag,v=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(d.f)(u()(a,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":c,"card-header-tabs":f&&c,"nav-pills":i,"card-header-pills":f&&i,"nav-justified":m,"nav-fill":p}),t);return l.a.createElement(h,Object(n.a)({},v,{className:g}))};p.propTypes=m,p.defaultProps={tag:"ul",vertical:!1},a.a=p}}]);