(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,active:r.a.bool,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.active,i=e.tag,r=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(d.f)(u()(t,!!c&&"active","breadcrumb-item"),a);return l.a.createElement(i,Object(n.a)({},r,{className:o,"aria-current":c?"page":void 0}))};p.propTypes=m,p.defaultProps={tag:"li"},t.a=p},18:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,inverse:r.a.bool,color:r.a.string,block:Object(d.d)(r.a.bool,'Please use the props "body"'),body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.color,i=e.block,r=e.body,o=e.inverse,m=e.outline,p=e.tag,b=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(d.f)(u()(t,"card",!!o&&"text-white",!(!i&&!r)&&"card-body",!!c&&(m?"border":"bg")+"-"+c),a);return l.a.createElement(p,Object(n.a)({},f,{className:h,ref:b}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},20:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,listTag:d.i,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},p=function(e){var t=e.className,a=e.listClassName,c=e.cssModule,i=e.children,r=e.tag,o=e.listTag,m=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.f)(u()(t),c),f=Object(d.f)(u()("breadcrumb",a),c);return l.a.createElement(r,Object(n.a)({},p,{className:b,"aria-label":m}),l.a.createElement(o,{className:f},i))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},24:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,className:r.a.string,cssModule:r.a.object,tabId:r.a.any},p={activeTabId:r.a.any};function b(e,t){var a=e.className,c=e.cssModule,i=e.tabId,r=e.tag,o=Object(s.a)(e,["className","cssModule","tabId","tag"]),m=Object(d.f)(u()("tab-pane",a,{active:i===t.activeTabId}),c);return l.a.createElement(r,Object(n.a)({},o,{className:m}))}b.propTypes=m,b.defaultProps={tag:"div"},b.contextTypes=p},25:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(21),l=a(11),i=a(0),r=a.n(i),o=a(1),u=a.n(o),d=a(7),m=a.n(d),p=a(2),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(Object(l.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,l=e.className,i=e.close,o=e.cssModule,u=e.color,d=e.outline,b=e.size,f=e.tag,h=e.innerRef,v=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&void 0===v.children&&(v.children=r.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(d?"-outline":"")+"-"+u,E=Object(p.f)(m()(l,{close:i},i||"btn",i||g,!!b&&"btn-"+b,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),o);v.href&&"button"===f&&(f="a");var y=i?"Close":null;return r.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:E,ref:h,onClick:this.onClick,"aria-label":a||y}))},t}(r.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},t.a=f},26:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,active:r.a.bool,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.active,i=e.tag,r=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(d.f)(u()(t,"nav-item",!!c&&"active"),a);return l.a.createElement(i,Object(n.a)({},r,{className:o}))};p.propTypes=m,p.defaultProps={tag:"li"},t.a=p},27:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(21),l=a(11),i=a(0),r=a.n(i),o=a(1),u=a.n(o),d=a(7),m=a.n(d),p=a(2),b={tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(Object(l.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.active,l=e.tag,i=e.innerRef,o=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(p.f)(m()(t,"nav-link",{disabled:o.disabled,active:c}),a);return r.a.createElement(l,Object(n.a)({},o,{ref:i,onClick:this.onClick,className:u}))},t}(r.a.Component);f.propTypes=b,f.defaultProps={tag:"a"},t.a=f},28:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tag:d.i,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),r=Object(d.f)(u()(t,"card-title"),a);return l.a.createElement(c,Object(n.a)({},i,{className:r}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},292:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(0),l=a.n(c),i=a(9),r=a(6),o=a(20),u=a(12),d=a(18),m=a(14),p=a(28),b=a(78),f=a(26),h=a(27),v=a(52),g=a(24),E=a(25),y=a(7),N=a.n(y),j=a(4),w=a.n(j),O=a(5),k=a(13),T=a.n(k);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,a,n,s,c,l){try{var i=e[c](l),r=i.value}catch(e){return void a(e)}i.done?t(r):Promise.resolve(r).then(n,s)}function M(e){return function(){var t=this,a=arguments;return new Promise((function(n,s){var c=e.apply(t,a);function l(e){P(c,n,s,l,i,"next",e)}function i(e){P(c,n,s,l,i,"throw",e)}l(void 0)}))}}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=B(e);if(t){var s=B(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return R(this,a)}}function R(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(y,e);var t,a,n,c=I(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=c.call(this,e)).tabround=t.tabround.bind(_(t)),t.oninput=t.oninput.bind(_(t)),t.state={tabround:"1",cloud:{},password:""},t}return t=y,(a=[{key:"tabround",value:function(e){this.state.tabround!==e&&this.setState({tabround:e})}},{key:"oninput",value:function(e){var t,a,n;this.setState((t={},a=e.target.name,n=e.target.value,a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t))}},{key:"componentDidMount",value:function(){var e=this;function t(){return(t=M(s.a.mark((function t(a,c){var l,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w.a.fire({title:"Please wait...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){w.a.showLoading()}}),t.next=3,fetch("".concat(O.apiurl,"/hosting/plesk/detail"),{headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(n,"&id=").concat(c),method:"POST"});case 3:return l=t.sent,t.next=6,l.json();case 6:return i=t.sent,t.next=9,l.status;case 9:200===t.sent&&(i.status?(e.setState({cloud:i.data,password:i.data.password}),w.a.hideLoading(),w.a.close()):e.props.history.push("/"));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=sessionStorage.getItem("cloudAction"),n=localStorage.getItem("session_key");!function(e,a){t.apply(this,arguments)}(n,a)}},{key:"render",value:function(){var e=this,t=this;"active"===this.state.cloud.status||"suspended"===this.state.cloud.status||this.state.cloud.status;var a="https://".concat(this.state.cloud.hostname,"/login_up.php"),n=function(){document.getElementById("showpw").innerHTML=e.state.password},c="Unlimited"===this.state.cloud.plantraffic?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plantraffic,y="Unlimited"===this.state.cloud.plansubdomain?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plansubdomain,j=this.state.cloud.plandb>=999?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.plandb,k=this.state.cloud.planwebsite>=999?l.a.createElement("i",{class:"ti-infinite"}):this.state.cloud.planwebsite;return l.a.createElement("div",null,l.a.createElement("div",{className:"page-title"},l.a.createElement(i.a,null,l.a.createElement(r.a,{sm:6},l.a.createElement("h4",{className:"mb-0"}," Kelola Web Hosting")),l.a.createElement(r.a,{sm:6},l.a.createElement(o.a,{className:"pt-0 pr-0 float-left float-sm-right"},l.a.createElement(u.a,null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement(u.a,{active:!0},"Kelola Web Hosting "))))),l.a.createElement(i.a,null,l.a.createElement(r.a,{md:6,className:"mb-30 pull-center"},l.a.createElement(d.a,{className:"card-statistics h-100"},l.a.createElement(m.a,null,l.a.createElement(p.a,null,"MANAGE WEB HOSTING"),l.a.createElement("div",{className:"tab round"},l.a.createElement(b.a,{tabs:!0},l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"1"===this.state.tabround})+" mt-10",onClick:function(){e.tabround("1")}},l.a.createElement("i",{className:"ti-info-alt"}),"Detail Service")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"2"===this.state.tabround})+" mt-10",onClick:function(){e.tabround("2")}},l.a.createElement("i",{className:"ti-receipt"})," Billing")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"3"===this.state.tabround})+" mt-10",onClick:function(){e.tabround("3")}},l.a.createElement("i",{className:"ti-pulse"})," Usage")),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:N()({active:"4"===this.state.tabround})+" mt-10",onClick:function(){e.tabround("4")}},l.a.createElement("i",{className:"fa fa-check-square"}),"Hosting Access"))),l.a.createElement(v.a,{activeTab:this.state.tabround},l.a.createElement(g.a,{tabId:"1"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},this.state.cloud.domain)),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"ti-wallet"})," Plan: ",this.state.cloud.plan," - ",this.state.cloud.planspace),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-cloud"})," IP Public: ",this.state.cloud.ip),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrives"})," NS1: ",this.state.cloud.nameserver1),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrives"})," NS2: ",this.state.cloud.nameserver2)))))),l.a.createElement(g.a,{tabId:"2"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Billing Overview")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-calendar-plus-o"})," Reg on: ",this.state.cloud.registred),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-calendar-times-o"})," Exp on: ",this.state.cloud.expired),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-calendar"})," Billing Cycle: ",this.state.cloud.duration),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-money"})," Recurring: ",l.a.createElement(T.a,{value:this.state.cloud.totalpayment,displayType:"text",thousandSeparator:!0,prefix:"Rp "}))))))),l.a.createElement(g.a,{tabId:"3"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Usage Overview")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"ti-harddrive"})," Disk: ",this.state.cloud.diskusage," / ",this.state.cloud.planspace),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-stats-up"})," Traffic: ",this.state.cloud.trafficusage," / ",c),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-server"})," Database: ",this.state.cloud.dbusage," / ",j),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-world"})," Website: ",this.state.cloud.websiteusage," / ",k),l.a.createElement("li",null,l.a.createElement("i",{className:"ti-cloud"})," Sub Domain: ",this.state.cloud.subdomainuse," / ",y)))))),l.a.createElement(g.a,{tabId:"4"},l.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"card-title"},"Hosting Access")),l.a.createElement(m.a,null,l.a.createElement("div",{className:"pricing-content"},l.a.createElement("ul",{className:"py-2 text-center"},l.a.createElement("li",null,l.a.createElement("form",{method:"POST",action:a,target:"_blank"},l.a.createElement("input",{type:"hidden",name:"login_name",value:this.state.cloud.username}),l.a.createElement("input",{type:"hidden",name:"passwd",value:this.state.password}),l.a.createElement("button",{type:"submit",className:"button button-border black btn-block"},l.a.createElement("i",{className:"fa fa-external-link"}),"Hosting Panel"))),l.a.createElement("li",{className:"mt-10"},l.a.createElement("i",{className:"ti-user"}),"Username: ",this.state.cloud.username),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-key"}),"Password: ",l.a.createElement("a",{id:"showpw",onClick:n},"View Password")),l.a.createElement("li",null,l.a.createElement(E.a,{className:"btn btn-info mt-10",onClick:function(){function e(){return(e=M(s.a.mark((function e(a,c){var l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.a.fire({title:"Please wait...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){w.a.showLoading()}}),e.next=3,fetch("".concat(O.apiurl,"/hosting/reset/password"),{headers:{"content-type":"application/json"},body:JSON.stringify({session:a,id:c}),method:"PUT"});case 3:return l=e.sent,e.next=6,l.json();case 6:return i=e.sent,e.next=9,l.status;case 9:200===e.sent&&(i.status?(t.setState({password:i.newPassword}),n(),w.a.hideLoading(),w.a.fire({title:"Successfully!",text:i.message,type:"success",animation:!0,showConfirmButton:!0}),document.getElementById("showpw").innerHTML="View Password"):t.props.history.push("/"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a=sessionStorage.getItem("cloudAction");!function(t,a){e.apply(this,arguments)}(localStorage.getItem("session_key"),a)}},"Reset Password"))))))))))))))}}])&&x(t.prototype,a),n&&x(t,n),y}(l.a.Component);t.default=D},52:function(e,t,a){"use strict";var n=a(8),s=a(21),c=a(0),l=a.n(c),i=a(54),r=a(1),o=a.n(r),u=a(7),d=a.n(u),m=a(2),p={tag:m.i,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b={activeTabId:o.a.any},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null};var a=t.prototype;return a.getChildContext=function(){return{activeTabId:this.state.activeTab}},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.tag,c=Object(m.g)(this.props,Object.keys(p)),i=Object(m.f)(d()("tab-content",t),a);return l.a.createElement(s,Object(n.a)({},c,{className:i}))},t}(c.Component);Object(i.polyfill)(f),t.a=f,f.propTypes=p,f.defaultProps={tag:"div"},f.childContextTypes=b},78:function(e,t,a){"use strict";var n=a(8),s=a(10),c=a(0),l=a.n(c),i=a(1),r=a.n(i),o=a(7),u=a.n(o),d=a(2),m={tabs:r.a.bool,pills:r.a.bool,vertical:r.a.oneOfType([r.a.bool,r.a.string]),horizontal:r.a.string,justified:r.a.bool,fill:r.a.bool,navbar:r.a.bool,card:r.a.bool,tag:d.i,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tabs,i=e.pills,r=e.vertical,o=e.horizontal,m=e.justified,p=e.fill,b=e.navbar,f=e.card,h=e.tag,v=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(d.f)(u()(t,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":c,"card-header-tabs":f&&c,"nav-pills":i,"card-header-pills":f&&i,"nav-justified":m,"nav-fill":p}),a);return l.a.createElement(h,Object(n.a)({},v,{className:g}))};p.propTypes=m,p.defaultProps={tag:"ul",vertical:!1},t.a=p}}]);