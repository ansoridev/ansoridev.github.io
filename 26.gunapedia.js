(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{12:function(e,t,a){"use strict";var n=a(8),r=a(10),c=a(0),l=a.n(c),o=a(1),s=a.n(o),i=a(7),u=a.n(i),f=a(2),m={tag:f.i,active:s.a.bool,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.active,o=e.tag,s=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(f.f)(u()(t,!!c&&"active","breadcrumb-item"),a);return l.a.createElement(o,Object(n.a)({},s,{className:i,"aria-current":c?"page":void 0}))};p.propTypes=m,p.defaultProps={tag:"li"},t.a=p},18:function(e,t,a){"use strict";var n=a(8),r=a(10),c=a(0),l=a.n(c),o=a(1),s=a.n(o),i=a(7),u=a.n(i),f=a(2),m={tag:f.i,inverse:s.a.bool,color:s.a.string,block:Object(f.d)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.color,o=e.block,s=e.body,i=e.inverse,m=e.outline,p=e.tag,b=e.innerRef,d=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(f.f)(u()(t,"card",!!i&&"text-white",!(!o&&!s)&&"card-body",!!c&&(m?"border":"bg")+"-"+c),a);return l.a.createElement(p,Object(n.a)({},d,{className:h,ref:b}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},20:function(e,t,a){"use strict";var n=a(8),r=a(10),c=a(0),l=a.n(c),o=a(1),s=a.n(o),i=a(7),u=a.n(i),f=a(2),m={tag:f.i,listTag:f.i,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},p=function(e){var t=e.className,a=e.listClassName,c=e.cssModule,o=e.children,s=e.tag,i=e.listTag,m=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(f.f)(u()(t),c),d=Object(f.f)(u()("breadcrumb",a),c);return l.a.createElement(s,Object(n.a)({},p,{className:b,"aria-label":m}),l.a.createElement(i,{className:d},o))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},25:function(e,t,a){"use strict";var n=a(8),r=a(10),c=a(21),l=a(11),o=a(0),s=a.n(o),i=a(1),u=a.n(i),f=a(7),m=a.n(f),p=a(2),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(Object(l.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,l=e.className,o=e.close,i=e.cssModule,u=e.color,f=e.outline,b=e.size,d=e.tag,h=e.innerRef,y=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===y.children&&(y.children=s.a.createElement("span",{"aria-hidden":!0},"×"));var v="btn"+(f?"-outline":"")+"-"+u,g=Object(p.f)(m()(l,{close:o},o||"btn",o||v,!!b&&"btn-"+b,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),i);y.href&&"button"===d&&(d="a");var E=o?"Close":null;return s.a.createElement(d,Object(n.a)({type:"button"===d&&y.onClick?"button":void 0},y,{className:g,ref:h,onClick:this.onClick,"aria-label":a||E}))},t}(s.a.Component);d.propTypes=b,d.defaultProps={color:"secondary",tag:"button"},t.a=d},284:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(0),l=a.n(c),o=a(9),s=a(6),i=a(20),u=a(12),f=a(18),m=a(14),p=a(25),b=a(13),d=a.n(b),h=a(5);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,a,n,r,c,l){try{var o=e[c](l),s=o.value}catch(e){return void a(e)}o.done?t(s):Promise.resolve(s).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function l(e){v(c,n,r,l,o,"next",e)}function o(e){v(c,n,r,l,o,"throw",e)}l(void 0)}))}}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=w(e);if(t){var r=w(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(b,e);var t,a,n,c=k(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=c.call(this,e)).state={plan:[]},t.purchase=t.purchase.bind(O(t)),t}return t=b,(a=[{key:"purchase",value:function(e){sessionStorage.setItem("planOrder",e),this.props.history.push("/configCloud")}},{key:"componentDidMount",value:function(){var e=this;function t(){return(t=g(r.a.mark((function t(a){var n,c,l,o,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={"content-type":"application/x-www-form-urlencoded"},c="session=".concat(a),l="".concat(h.apiurl,"/hosting/plesk/retrivepkg"),t.next=5,fetch(l=l,{headers:n,body:c,method:"POST"});case 5:return o=t.sent,t.next=8,o.status;case 8:return s=t.sent,t.next=11,o.json();case 11:i=t.sent,200===s&&i.status?e.setState({plan:i.data}):e.props.history.push("/dashboard");case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(localStorage.getItem("session_key"))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"page-title"},l.a.createElement(o.a,null,l.a.createElement(s.a,{sm:6},l.a.createElement("h4",{className:"mb-0"}," Buy Cloud Hosting")),l.a.createElement(s.a,{sm:6},l.a.createElement(i.a,{className:"float-left float-sm-right"},l.a.createElement(u.a,null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement(u.a,{active:!0},"Cloud Hosting"))))),l.a.createElement(o.a,null,this.state.plan.map((function(t){return[l.a.createElement(s.a,{xl:4,sm:6,className:"mb-30"},l.a.createElement(f.a,{className:"card-statistics pricing-card pricing-card-style-1 h-100 card card"},l.a.createElement(m.a,null,l.a.createElement("h5",{className:"card-title"},t.plan," PLAN"),l.a.createElement("div",{className:"pricing-content"},l.a.createElement("div",{className:"price"},l.a.createElement("h2",null,l.a.createElement(d.a,{value:t.permonth,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),l.a.createElement("br",null),l.a.createElement("p",null,"Bulan")),l.a.createElement("center",null,l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," ",t.disk," Space"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," ",t.traffic," Traffic"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," ",t.domain," Domain Limit"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," ",t.database," Database"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," Tersedia fitur pengembangan untuk: Node.JS, PHP Composer, Docker, Ruby on Rails, Python 3, Wordpress, Website Builder, dll"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," SSH Access"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," Gratis Domain TLD untuk pembelian minimal 6 bulan"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-check"})," Datacenter di Asia Tenggara")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"pt-2 btn-wrap"},l.a.createElement(p.a,{onClick:function(){return e.purchase(t.plan)},className:"button btn btn-secondary btn-md"},"BELI SEKARANG")))))]}))))}}])&&E(t.prototype,a),n&&E(t,n),b}(l.a.Component);t.default=C}}]);