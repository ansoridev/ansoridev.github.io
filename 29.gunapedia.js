(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{12:function(e,t,a){"use strict";var r=a(8),n=a(10),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(7),u=a.n(i),p=a(4),f={tag:p.i,active:l.a.bool,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,o=e.active,s=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(p.f)(u()(t,!!o&&"active","breadcrumb-item"),a);return c.a.createElement(s,Object(r.a)({},l,{className:i,"aria-current":o?"page":void 0}))};d.propTypes=f,d.defaultProps={tag:"li"},t.a=d},20:function(e,t,a){"use strict";var r=a(8),n=a(10),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(7),u=a.n(i),p=a(4),f={tag:p.i,listTag:p.i,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},d=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,s=e.children,l=e.tag,i=e.listTag,f=e["aria-label"],d=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(p.f)(u()(t),o),b=Object(p.f)(u()("breadcrumb",a),o);return c.a.createElement(l,Object(r.a)({},d,{className:m,"aria-label":f}),c.a.createElement(i,{className:b},s))};d.propTypes=f,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=d},22:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a.n(o),s=a(35),l=a.n(s),i=a(55),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,r;p(this,t);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return a=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!d(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},f(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"==typeof t?Object(i.b)(t,null,null,o.location):t,s=o.createHref(c);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:s,ref:a}))},t}(n.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m},29:function(e,t,a){"use strict";var r=a(8),n=a(10),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(7),u=a.n(i),p=a(4),f={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,inverse:Object(p.d)(l.a.bool,'Please use the prop "dark"'),dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:p.i,responsiveTag:p.i,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},d=function(e){var t=e.className,a=e.cssModule,o=e.size,s=e.bordered,l=e.borderless,i=e.striped,f=e.inverse,d=e.dark,m=e.hover,b=e.responsive,y=e.tag,v=e.responsiveTag,h=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(p.f)(u()(t,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!l&&"table-borderless",!!i&&"table-striped",!(!d&&!f)&&"table-dark",!!m&&"table-hover"),a),O=c.a.createElement(y,Object(r.a)({},g,{ref:h,className:E}));if(b){var j=!0===b?"table-responsive":"table-responsive-"+b;return c.a.createElement(v,{className:j},O)}return O};d.propTypes=f,d.defaultProps={tag:"table",responsiveTag:"div"},t.a=d},297:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(0),c=a.n(o),s=a(9),l=a(6),i=a(20),u=a(12),p=a(13),f=a(29),d=a(22),m=a(5),b=a(14),y=a.n(b);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,a,r,n,o,c){try{var s=e[o](c),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,n)}function g(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function c(e){h(o,r,n,c,s,"next",e)}function s(e){h(o,r,n,c,s,"throw",e)}c(void 0)}))}}function E(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=T(e);if(t){var n=T(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return w(this,a)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(b,e);var t,a,r,o=j(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=o.call(this,e)).state={listpricing:[]},t}return t=b,(a=[{key:"componentDidMount",value:function(){var e=this;function t(){return(t=g(n.a.mark((function t(r){var o,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.apiurl,"/pengguna/pricing/domain"),{headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a),method:"POST"});case 2:return o=t.sent,t.next=5,o.json();case 5:return c=t.sent,t.next=8,o.status;case 8:200===t.sent&&c.status&&e.setState({listpricing:c.data});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=localStorage.getItem("session_key");!function(e){t.apply(this,arguments)}(a)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"page-title"},c.a.createElement(s.a,null,c.a.createElement(l.a,{sm:6},c.a.createElement("h4",{className:"mb-0"}," Domain Service Pricing")),c.a.createElement(l.a,{sm:6},c.a.createElement(i.a,{className:"float-left float-sm-right"},c.a.createElement(u.a,null,c.a.createElement(d.a,{to:"#"},"Home")),c.a.createElement(u.a,{active:!0},"Pricing"))))),c.a.createElement(s.a,null,c.a.createElement(l.a,{xl:12,className:"mb-30"},c.a.createElement("div",{className:"card-statistics h-100 card order"},c.a.createElement(p.a,null,c.a.createElement(s.a,null,c.a.createElement("h5",{class:"mb-20 ml-20"}," Domain Pricing")),c.a.createElement("div",{className:"table-responsive"},c.a.createElement(f.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Extension"),c.a.createElement("th",null,"Standart"),c.a.createElement("th",null,"Agent"),c.a.createElement("th",null,"Reseller"))),c.a.createElement("tbody",null,this.state.listpricing.map((function(e){return[c.a.createElement("tr",null,c.a.createElement("td",null,".",e.ext),c.a.createElement("td",null,c.a.createElement(y.a,{value:e.standar,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),c.a.createElement("td",null,c.a.createElement(y.a,{value:e.agent,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),c.a.createElement("td",null,c.a.createElement(y.a,{value:e.reseller,displayType:"text",thousandSeparator:!0,prefix:"Rp "})))]}))))))))))}}])&&E(t.prototype,a),r&&E(t,r),b}(c.a.Component);t.default=R}}]);