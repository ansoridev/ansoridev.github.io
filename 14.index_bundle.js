(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{22:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),s=a.n(o),i=a(34),l=a.n(i),c=a(75),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,r;f(this,t);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},p(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,s="string"==typeof t?Object(c.b)(t,null,null,o.location):t,i=o.createHref(s);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:i,ref:a}))},t}(n.a.Component);d.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired},t.a=d},239:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),s=a(40),i=a(61),l=a(9),c=a(5);a(240);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y(e);if(t){var n=y(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return d(this,a)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,a,r,u=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=u.call(this,e)).state={email:"",error:null},t.validators=s.a,t.onchange=t.onchange.bind(h(t)),t.displayValidationErrors=t.displayValidationErrors.bind(h(t)),t.updateValidators=t.updateValidators.bind(h(t)),t}return t=d,(a=[{key:"onchange",value:function(e){var t,a,r;this.setState((t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)),this.updateValidators([e.target.name],e.target.value)}},{key:"updateValidators",value:function(e,t){var a=this;this.validators[e].errors=[],this.validators[e].state=t,this.validators[e].valid=!0,this.validators[e].rules.forEach((function(r){r.test instanceof RegExp?r.test.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1):"function"==typeof r.test&&(r.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1))}))}},{key:"isFormValid",value:function(){var e=this,t=!0;return Object.keys(this.validators).forEach((function(a){"email"==a&&(e.validators[a].valid||(t=!1))})),t}},{key:"displayValidationErrors",value:function(e){var t=this.validators[e];if(t&&!t.valid){var a=t.errors.map((function(e,t){return n.a.createElement("span",{className:"error",key:t},"* ",e,n.a.createElement("br",null))}));return n.a.createElement("div",{className:"col s12 row"},a)}return""}},{key:"render",value:function(){return n.a.createElement("section",{className:"height-100vh d-flex align-items-center page-section-ptb forgot",style:{backgroundImage:"url(assets/images/login-bg.jpg)"}},n.a.createElement(i.a,null,n.a.createElement(l.a,{className:"justify-content-center no-gutters vertical-align"},n.a.createElement(c.a,{lg:4,md:6,className:"login-fancy-bg bg",style:{backgroundImage:"url(assets/images/login-inner-bg.jpg)"}},n.a.createElement("div",{className:"forgot-fancy"},n.a.createElement("h2",{className:"text-white mb-20"},"Hello world!"),n.a.createElement("p",{className:"mb-20 text-white"},"Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features."),n.a.createElement("ul",{className:"list-unstyled  pos-bot pb-30"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{className:"text-white",href:"#"}," Terms of Use")," "),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{className:"text-white",href:"#"}," Privacy Policy"))))),n.a.createElement(c.a,{lg:4,md:6,className:"bg-white"},n.a.createElement("div",{className:"forgot-fancy pb-40 clearfix"},n.a.createElement("h3",{className:"mb-30"},"Forgot Your Password?"),n.a.createElement("p",{className:"pb-30"},"Please enter the email address for get email link."),n.a.createElement("div",{className:"section-field mb-20"},n.a.createElement("label",{className:"mb-10",htmlFor:"name"},"Email Address"),n.a.createElement("input",{id:"email",className:"web form-control",type:"text",placeholder:"Email",value:this.state.email,name:"email",onChange:this.onchange}),this.displayValidationErrors("email")),n.a.createElement("a",{className:"button   ".concat(this.isFormValid()?"":"disabled")},n.a.createElement("span",{className:"text-white"},"Forgot Password")),n.a.createElement("p",{className:"mt-20 mb-0 remember-checkbox"},n.a.createElement(o.a,{to:"/login"}," Go back to login page")))))))}}])&&f(t.prototype,a),r&&f(t,r),d}(n.a.Component);t.default=b},240:function(e,t,a){var r=a(241);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(30)(r,n);r.locals&&(e.exports=r.locals)},241:function(e,t,a){(e.exports=a(29)(!1)).push([e.i,".error\r\n{\r\n  color:red;\r\n}\r\n .disabled{\r\n  pointer-events: none;\r\n} ",""])},40:function(e,t,a){"use strict";t.a={email:{rules:[{test:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,message:"Please Enter Valid Email"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return e.length>=6},message:"Password must not be shorter than 6 characters"}],errors:[],valid:!1,state:""},firstname:{rules:[{test:/^[a-z A-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""},lastname:{rules:[{test:/^[a-zA-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""}}},61:function(e,t,a){"use strict";var r=a(8),n=a(10),o=a(0),s=a.n(o),i=a(1),l=a.n(i),c=a(7),u=a.n(c),f=a(2),p={tag:f.i,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.fluid,i=e.tag,l=Object(n.a)(e,["className","cssModule","fluid","tag"]),c=Object(f.f)(u()(t,o?"container-fluid":"container"),a);return s.a.createElement(i,Object(r.a)({},l,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m}}]);