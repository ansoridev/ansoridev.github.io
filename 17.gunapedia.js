(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{23:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(8),r=a(10),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(7),u=a.n(i),d=a(4),m={tag:d.i,className:l.a.string,cssModule:l.a.object,tabId:l.a.any},f={activeTabId:l.a.any};function p(e,t){var a=e.className,s=e.cssModule,c=e.tabId,l=e.tag,i=Object(r.a)(e,["className","cssModule","tabId","tag"]),m=Object(d.f)(u()("tab-pane",a,{active:c===t.activeTabId}),s);return o.a.createElement(l,Object(n.a)({},i,{className:m}))}p.propTypes=m,p.defaultProps={tag:"div"},p.contextTypes=f},25:function(e,t,a){"use strict";var n=a(8),r=a(10),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(7),u=a.n(i),d=a(4),m={tag:d.i,active:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.active,c=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.f)(u()(t,"nav-item",!!s&&"active"),a);return o.a.createElement(c,Object(n.a)({},l,{className:i}))};f.propTypes=m,f.defaultProps={tag:"li"},t.a=f},26:function(e,t,a){"use strict";var n=a(8),r=a(10),s=a(21),o=a(11),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(7),m=a.n(d),f=a(4),p={tag:f.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(Object(o.a)(a))),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.active,o=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(f.f)(m()(t,"nav-link",{disabled:i.disabled,active:s}),a);return l.a.createElement(o,Object(n.a)({},i,{ref:c,onClick:this.onClick,className:u}))},t}(l.a.Component);b.propTypes=p,b.defaultProps={tag:"a"},t.a=b},301:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(0),o=a.n(s),c=a(9),l=a(6),i=a(20),u=a(12),d=a(18),m=a(13),f=a(28),p=a(65),b=a(25),h=a(26),v=a(48),w=a(23),y=a(7),g=a.n(y),E=a(3),P=a.n(E),N=a(5),j=a(44),k=a.n(j);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,a,n,r,s,o){try{var c=e[s](o),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function T(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function o(e){O(s,n,r,o,c,"next",e)}function c(e){O(s,n,r,o,c,"throw",e)}o(void 0)}))}}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=W(e);if(t){var r=W(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return M(this,a)}}function M(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(y,e);var t,a,n,s=I(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=s.call(this,e)).tabround=t.tabround.bind(R(t)),t.onchange=t.onchange.bind(R(t)),t.onsubmit=t.onsubmit.bind(R(t)),t.validation=t.validation.bind(R(t)),t.state={info:{},tabround:"1",newPassword:"",newPassword1:"",oldPassword:"",oldPW:!1,newPW:!1,newPW1:!1},t}return t=y,(a=[{key:"validation",value:function(e){if("newPassword"===e){if(this.state.newPW)return this.state.newPassword.length<8?"*Password must not be shorter than 8 characters":""}else if("newPassword1"===e){if(this.state.newPW1)return this.state.newPassword!=this.state.newPassword1?"*Confirm Password must match with new password":""}else if("oldPassword"===e&&this.state.oldPW)return this.state.oldPassword.length<8?"*Password must not be shorter than 8 characters":""}},{key:"tabround",value:function(e){this.state.tabround!==e&&this.setState({tabround:e})}},{key:"onchange",value:function(e){var t,a,n;"oldPassword"===e.target.name?this.setState({oldPW:!0}):"newPassword"===e.target.name?this.setState({newPW:!0}):"newPassword1"===e.target.name&&this.setState({newPW1:!0}),this.setState((t={},a=e.target.name,n=e.target.value,a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t))}},{key:"onsubmit",value:function(){var e=this,t=function(){var t=T(r.a.mark((function t(){var a,n,s,o,c,l,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(N.apiurl,"/pengguna/validation/encrypt"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"decrypt=".concat(btoa("".concat(e.state.info.email,":").concat(e.state.newPassword)))});case 2:return a=t.sent,t.next=5,a.json();case 5:return n=(n=t.sent).key,t.next=9,fetch("".concat(N.apiurl,"/pengguna/validation/encrypt"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"decrypt=".concat(btoa("".concat(e.state.info.email,":").concat(e.state.oldPassword)))});case 9:return s=t.sent,t.next=12,s.json();case 12:return o=(o=t.sent).key,t.next=16,fetch("".concat(N.apiurl,"/pengguna/validation/auth"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"token=".concat(o)});case 16:return c=t.sent,t.next=19,c.status;case 19:return l=t.sent,t.next=22,c.json();case 22:return c=t.sent,t.next=25,c.session;case 25:if(c=t.sent,200!==l){t.next=39;break}return t.next=29,fetch("".concat(N.apiurl,"/pengguna/update/password"),{headers:{"content-type":"application/json"},body:JSON.stringify({session:c,additionalToken:n}),method:"PUT"});case 29:return i=t.sent,t.next=32,i.json();case 32:return u=t.sent,t.next=35,i;case 35:200===t.sent.status&&"success, data has been updated! now using second token as your new token."===u.status&&P.a.fire({title:"Successfully updated!",text:u.status,showCancelButton:!1,type:"success"}).then((function(e){e.value&&(localStorage.clear(),sessionStorage.clear(),window.location.reload())})),t.next=40;break;case 39:P.a.fire({title:"Error!",text:"Harap periksa kembali password lama anda!",showCancelButton:!1,type:"error"});case 40:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();this.state.newPassword===this.state.newPassword1&&P.a.fire({title:"Are you sure?",text:'By clicking "OK" then we change your password.',type:"question",showCancelButton:!0}).then((function(e){e.value&&t()}))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("session_key"),t=this;function a(){return(a=T(r.a.mark((function e(a){var n,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N.apiurl,"/pengguna/query/info"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a)});case 2:return n=e.sent,e.next=5,n.status;case 5:return s=e.sent,e.next=8,n.json();case 8:return o=e.sent,200===s?t.setState({info:o.data}):t.setState({info:{result:"error"}}),e.next=12,s;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){a.apply(this,arguments)}(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"page-title"},o.a.createElement(c.a,null,o.a.createElement(l.a,{sm:6},o.a.createElement("h4",{className:"mb-0"}," Settings")),o.a.createElement(l.a,{sm:6},o.a.createElement(i.a,{className:"pt-0 pr-0 float-left float-sm-right"},o.a.createElement(u.a,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(u.a,{active:!0},"Settings "))))),o.a.createElement(c.a,null,o.a.createElement(l.a,{md:6,className:"mb-30 pull-center"},o.a.createElement(d.a,{className:"card-statistics h-100"},o.a.createElement(m.a,null,o.a.createElement(f.a,null,"Settings Management"),o.a.createElement("div",{className:"tab round"},o.a.createElement(p.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(h.a,{className:g()({active:"1"===this.state.tabround}),onClick:function(){e.tabround("1")}},o.a.createElement("i",{className:"fa fa-globe"}),"Information")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:g()({active:"2"===this.state.tabround}),onClick:function(){e.tabround("2")}},o.a.createElement("i",{className:"fa fa-edit"})," Change Password"))),o.a.createElement(v.a,{activeTab:this.state.tabround},o.a.createElement(w.a,{tabId:"1"},o.a.createElement(d.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card",id:"infodomainku"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h5",{className:"card-title"},this.state.info.name)),o.a.createElement(m.a,null,o.a.createElement("div",{className:"pricing-content"},o.a.createElement("ul",{className:"py-2"},o.a.createElement("li",null,o.a.createElement("i",{className:"fa fa-at"}),"Email: ",this.state.info.email),o.a.createElement("li",null,o.a.createElement("i",{className:"fa fa-money"}),"Balance: ",k.a.format(this.state.info.saldo,{locale:"id-ID",symbol:"Rp. "})),o.a.createElement("li",null,o.a.createElement("i",{className:"fa fa-calendar-o"}),"Join: ",this.state.info.join),o.a.createElement("li",null,o.a.createElement("i",{className:"fa fa-check-circle-o"}),"Level: ",this.state.info.level)))))),o.a.createElement(w.a,{tabId:"2"},o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",value:this.state.info.email,"aria-describedby":"emailHelp",placeholder:"Enter email"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"This is automatically filled by your email address.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"oldPassword"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"oldPassword",onInput:this.onchange,name:"oldPassword",placeholder:"Password"}),o.a.createElement("span",{className:"error"},this.validation("oldPassword"),o.a.createElement("br",null))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"newPassword"},"New Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"newPassword",onInput:this.onchange,name:"newPassword",placeholder:"New Password"}),o.a.createElement("span",{className:"error"},this.validation("newPassword"),o.a.createElement("br",null)))),o.a.createElement(l.a,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"newPassword1"},"Re-Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"newPassword1",onInput:this.onchange,name:"newPassword1",placeholder:"Confirm New Password"}),o.a.createElement("span",{className:"error"},this.validation("newPassword1"),o.a.createElement("br",null))))),o.a.createElement("button",{type:"submit",className:"button button-border black btn btn-secondary btn-small pull-right",onClick:this.onsubmit},"Change Password")))))))))))}}])&&C(t.prototype,a),n&&C(t,n),y}(o.a.Component);t.default=_},48:function(e,t,a){"use strict";var n=a(8),r=a(21),s=a(0),o=a.n(s),c=a(56),l=a(1),i=a.n(l),u=a(7),d=a.n(u),m=a(4),f={tag:m.i,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},p={activeTabId:i.a.any},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null};var a=t.prototype;return a.getChildContext=function(){return{activeTabId:this.state.activeTab}},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,s=Object(m.g)(this.props,Object.keys(f)),c=Object(m.f)(d()("tab-content",t),a);return o.a.createElement(r,Object(n.a)({},s,{className:c}))},t}(s.Component);Object(c.polyfill)(b),t.a=b,b.propTypes=f,b.defaultProps={tag:"div"},b.childContextTypes=p},65:function(e,t,a){"use strict";var n=a(8),r=a(10),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(7),u=a.n(i),d=a(4),m={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:d.i,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tabs,c=e.pills,l=e.vertical,i=e.horizontal,m=e.justified,f=e.fill,p=e.navbar,b=e.card,h=e.tag,v=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),w=Object(d.f)(u()(t,p?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":s,"card-header-tabs":b&&s,"nav-pills":c,"card-header-pills":b&&c,"nav-justified":m,"nav-fill":f}),a);return o.a.createElement(h,Object(n.a)({},v,{className:w}))};f.propTypes=m,f.defaultProps={tag:"ul",vertical:!1},t.a=f}}]);