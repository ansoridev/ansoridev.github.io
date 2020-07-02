(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{160:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),o=a(0),i=a.n(o),s=a(23),c=a(41),l=a(63),u=a(9),f=a(5),p=(a(161),a(6)),d=a.n(p),m=a(4);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,a,r,n,o,i){try{var s=e[o](i),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(r,n)}function v(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function i(e){y(o,r,n,i,s,"next",e)}function s(e){y(o,r,n,i,s,"throw",e)}i(void 0)}))}}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=x(e);if(t){var n=x(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return E(this,a)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(p,e);var t,a,r,o=w(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=o.call(this,e)).props=e,t.state={email:"",password:"",token:"",error:null},t.validators=c.a,t.onchange=t.onchange.bind(k(t)),t.login=t.login.bind(k(t)),t.displayValidationErrors=t.displayValidationErrors.bind(k(t)),t.updateValidators=t.updateValidators.bind(k(t)),t}return t=p,(a=[{key:"onchange",value:function(e){var t,a,r;this.setState((t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)),this.updateValidators([e.target.name],e.target.value)}},{key:"updateValidators",value:function(e,t){var a=this;this.validators[e].errors=[],this.validators[e].state=t,this.validators[e].valid=!0,this.validators[e].rules.forEach((function(r){r.test instanceof RegExp?r.test.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1):"function"==typeof r.test&&(r.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1))}))}},{key:"isFormValid",value:function(){var e=this,t=!0;return Object.keys(this.validators).forEach((function(a){"email"!=a&&"password"!=a||e.validators[a].valid||(t=!1)})),t}},{key:"displayValidationErrors",value:function(e){var t=this.validators[e];if(t&&!t.valid){var a=t.errors.map((function(e,t){return i.a.createElement("span",{className:"error",key:t},"* ",e,i.a.createElement("br",null))}));return i.a.createElement("div",{className:"col s12 row"},a)}return""}},{key:"login",value:function(e){var t=this.state,a=t.email,r=t.password;function o(e){return i.apply(this,arguments)}function i(){return(i=v(n.a.mark((function e(t){var a,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return(r=v(n.a.mark((function e(t,a){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a;case 2:return r=e.sent,e.next=5,t;case 5:o=e.sent,200===r?(d.a.hideLoading(),localStorage.setItem("session_key",o.session),d.a.fire({title:"Autentikasi Berhasil",text:"Anda akan diarahkan kehalaman dashboard pengguna.",type:"success",showConfirmButton:!1,timer:1500}).then((function(e){e.dismiss===d.a.DismissReason.timer&&window.location.reload()}))):(localStorage.setItem("session_key","false"),d.a.fire({title:"Autentikasi Gagal",text:"Email atau Password anda salah. Harap periksa detail masuk anda dengan benar!",type:"error",showConfirmButton:!1,timer:3e3}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(e,t){return r.apply(this,arguments)},e.next=4,t;case 4:return e.sent,e.next=7,fetch("".concat(m.apiurl,"/pengguna/validation/auth"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"token=".concat(t)});case 7:o=e.sent,a(o.json(),o.status);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.a.fire({title:"Authentication checking",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){d.a.showLoading()}}),fetch("".concat(m.apiurl,"/pengguna/validation/encrypt"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"decrypt=".concat(btoa("".concat(a,":").concat(r)))}).then((function(e){return e.json()})).then((function(e){o(e.key)}),(function(e){o(result.key)})),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("section",{className:"height-100vh d-flex align-items-center page-section-ptb login",style:{backgroundImage:"url(assets/images/auth.svg)"}},i.a.createElement(l.a,null,i.a.createElement(u.a,{className:"justify-content-center no-gutters vertical-align"},i.a.createElement(f.a,{lg:4,md:6,className:"login-fancy-bg bg",style:{backgroundImage:"url(assets/images/login.svg)"}},i.a.createElement("div",{className:"login-fancy"},i.a.createElement("h2",{className:"text-white mb-20"},"Hello world!"),i.a.createElement("p",{className:"mb-20 text-white"},"Just so you know, ",m.website," is a website that provides hosting, domain and PPOB services that offer affordable prices with amazing quality."),i.a.createElement("br",{className:"mt-10"}),i.a.createElement("ul",{className:"list-unstyled  pos-bot pb-30"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Terms of Use")," "),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Privacy Policy"))))),i.a.createElement(f.a,{lg:4,md:6,className:"bg-white"},i.a.createElement("div",{className:"login-fancy pb-40 clearfix"},i.a.createElement("h3",{className:"mb-30"},"Sign In to Dashboard"),i.a.createElement("div",{className:"section-field mb-20"},i.a.createElement("label",{className:"mb-10",htmlFor:"name"},"Email "),i.a.createElement("input",{id:"email",className:"web form-control",type:"text",placeholder:"Email",value:this.state.email,name:"email",onChange:this.onchange}),this.displayValidationErrors("email")),i.a.createElement("div",{className:"section-field mb-20"},i.a.createElement("label",{className:"mb-10",htmlFor:"Password"},"Password* "),i.a.createElement("input",{id:"password",className:"Password form-control",type:"password",placeholder:"Password",value:this.state.password,name:"password",onChange:this.onchange}),this.displayValidationErrors("password")),i.a.createElement("div",{className:"section-field"},i.a.createElement("div",{className:"remember-checkbox mb-30"},i.a.createElement("input",{type:"checkbox",className:"form-control",name:"two",id:"two"}),i.a.createElement("label",{htmlFor:"two"}," Remember me"))),i.a.createElement("a",{onClick:this.login,className:"button button-border black pull-right ".concat(this.isFormValid()?"":"disabled")},i.a.createElement("span",{className:"text"},"Log in "),i.a.createElement("i",{className:"fa fa-check text"})),i.a.createElement("p",{className:"mt-20 mb-0 remember-checkbox"},"Don't have an account? ",i.a.createElement("br",null)," ",i.a.createElement(s.a,{to:"/register"}," Create one here ")))))))}}])&&b(t.prototype,a),r&&b(t,r),p}(i.a.Component);t.default=N},161:function(e,t,a){!function(e){var t,a,r,n=String.fromCharCode;function o(e){for(var t,a,r=[],n=0,o=e.length;n<o;)(t=e.charCodeAt(n++))>=55296&&t<=56319&&n<o?56320==(64512&(a=e.charCodeAt(n++)))?r.push(((1023&t)<<10)+(1023&a)+65536):(r.push(t),n--):r.push(t);return r}function i(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function s(e,t){return n(e>>t&63|128)}function c(e){if(0==(4294967168&e))return n(e);var t="";return 0==(4294965248&e)?t=n(e>>6&31|192):0==(4294901760&e)?(i(e),t=n(e>>12&15|224),t+=s(e,6)):0==(4292870144&e)&&(t=n(e>>18&7|240),t+=s(e,12),t+=s(e,6)),t+=n(63&e|128)}function l(){if(r>=a)throw Error("Invalid byte index");var e=255&t[r];if(r++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,n;if(r>a)throw Error("Invalid byte index");if(r==a)return!1;if(e=255&t[r],r++,0==(128&e))return e;if(192==(224&e)){if((n=(31&e)<<6|l())>=128)return n;throw Error("Invalid continuation byte")}if(224==(240&e)){if((n=(15&e)<<12|l()<<6|l())>=2048)return i(n),n;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&n<=1114111)return n;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),a=t.length,r=-1,n="";++r<a;)n+=c(t[r]);return n},e.decode=function(e){t=o(e),a=t.length,r=0;for(var i,s=[];!1!==(i=u());)s.push(i);return function(e){for(var t,a=e.length,r=-1,o="";++r<a;)(t=e[r])>65535&&(o+=n((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=n(t);return o}(s)}}(t)},23:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),i=a.n(o),s=a(28),c=a.n(s),l=a(53),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,r;f(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return a=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!d(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},p(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"==typeof t?Object(l.b)(t,null,null,o.location):t,s=o.createHref(i);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:s,ref:a}))},t}(n.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},41:function(e,t,a){"use strict";t.a={email:{rules:[{test:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,message:"Please Enter Valid Email"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return e.length>=6},message:"Password must not be shorter than 6 characters"}],errors:[],valid:!1,state:""},firstname:{rules:[{test:/^[a-z A-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""},lastname:{rules:[{test:/^[a-zA-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""}}},63:function(e,t,a){"use strict";var r=a(8),n=a(10),o=a(0),i=a.n(o),s=a(1),c=a.n(s),l=a(7),u=a.n(l),f=a(2),p={tag:f.i,fluid:c.a.bool,className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,a=e.cssModule,o=e.fluid,s=e.tag,c=Object(n.a)(e,["className","cssModule","fluid","tag"]),l=Object(f.f)(u()(t,o?"container-fluid":"container"),a);return i.a.createElement(s,Object(r.a)({},c,{className:l}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d}}]);