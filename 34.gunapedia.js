(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{156:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(0),i=a.n(o),s=a(32),l=a(54),c=a(9),u=a(6),f=(a(79),a(3)),m=a.n(f),d=a(5),p=a(43),h=a.n(p);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,a,n,r,o,i){try{var s=e[o](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){y(o,n,r,i,s,"next",e)}function s(e){y(o,n,r,i,s,"throw",e)}i(void 0)}))}}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=N(e);if(t){var r=N(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k(this,a)}}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(p,e);var t,a,n,f=E(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this,e)).props=e,t.state={email:"",password:"",token:"",error:null,isVerify:!1,googleToken:""},t.validators=s.a,t.onchange=t.onchange.bind(x(t)),t.login=t.login.bind(x(t)),t.displayValidationErrors=t.displayValidationErrors.bind(x(t)),t.updateValidators=t.updateValidators.bind(x(t)),t}return t=p,(a=[{key:"onchange",value:function(e){var t,a,n;this.setState((t={},a=e.target.name,n=e.target.value,a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t)),this.updateValidators([e.target.name],e.target.value)}},{key:"updateValidators",value:function(e,t){var a=this;this.validators[e].errors=[],this.validators[e].state=t,this.validators[e].valid=!0,this.validators[e].rules.forEach((function(n){n.test instanceof RegExp?n.test.test(t)||(a.validators[e].errors.push(n.message),a.validators[e].valid=!1):"function"==typeof n.test&&(n.test(t)||(a.validators[e].errors.push(n.message),a.validators[e].valid=!1))}))}},{key:"isFormValid",value:function(){var e=this,t=!0;return Object.keys(this.validators).forEach((function(a){"email"!=a&&"password"!=a||e.validators[a].valid||(t=!1)})),t}},{key:"displayValidationErrors",value:function(e){var t=this.validators[e];if(t&&!t.valid){var a=t.errors.map((function(e,t){return i.a.createElement("span",{className:"error",key:t},"* ",e,i.a.createElement("br",null))}));return i.a.createElement("div",{className:"col s12 row"},a)}return""}},{key:"login",value:function(e){var t=this.state,a=t.email,n=t.password;function o(e){return i.apply(this,arguments)}function i(){return(i=g(r.a.mark((function e(t){var a,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return(n=g(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a;case 2:return n=e.sent,e.next=5,t;case 5:o=e.sent,200===n?(m.a.hideLoading(),localStorage.setItem("session_key",o.session),m.a.fire({title:"Autentikasi Berhasil",text:"Anda akan diarahkan kehalaman dashboard pengguna.",type:"success",showConfirmButton:!1,timer:1500}).then((function(e){e.dismiss===m.a.DismissReason.timer&&window.location.reload()}))):(localStorage.setItem("session_key","false"),m.a.fire({title:"Autentikasi Gagal",text:"Email atau Password anda salah. Harap periksa detail masuk anda dengan benar!",type:"error",showConfirmButton:!1,timer:3e3}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(e,t){return n.apply(this,arguments)},e.next=4,t;case 4:return e.sent,e.next=7,fetch("".concat(d.apiurl,"/pengguna/validation/auth"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"token=".concat(t)});case 7:o=e.sent,a(o.json(),o.status);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.fire({title:"Authentication checking",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){m.a.showLoading()}}),fetch("".concat(d.apiurl,"/pengguna/validation/encrypt"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"decrypt=".concat(btoa("".concat(a,":").concat(n)))}).then((function(e){return e.json()})).then((function(e){o(e.key)}),(function(e){o(result.key)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"height-100vh d-flex align-items-center page-section-ptb login",style:{backgroundImage:"url(assets/images/auth.svg)"}},i.a.createElement(l.a,null,i.a.createElement(c.a,{className:"justify-content-center no-gutters vertical-align"},i.a.createElement(o.Suspense,{fallback:i.a.createElement("div",null,"Please waiting....")},i.a.createElement(u.a,{lg:4,md:6,className:"login-fancy-bg bg",style:{backgroundImage:"url(assets/images/login.svg)"}},i.a.createElement("div",{className:"login-fancy"},i.a.createElement("h2",{className:"text-white mb-20"},"Hello world!"),i.a.createElement("p",{className:"mb-20 text-white"},"Just so you know, ",d.website," is a website that provides hosting, domain and PPOB services that offer affordable prices with amazing quality."),i.a.createElement("br",{className:"mt-10"}),i.a.createElement("ul",{className:"list-unstyled  pos-bot pb-30"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Terms of Use")," "),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Privacy Policy")))))),i.a.createElement(o.Suspense,{fallback:i.a.createElement("div",null,"Please waiting...")},i.a.createElement(u.a,{lg:4,md:6,className:"bg-white"},i.a.createElement("div",{className:"login-fancy pb-40 clearfix"},i.a.createElement("h3",{className:"mb-30"},"Domain Access"),i.a.createElement("div",{className:"section-field mb-20"},i.a.createElement("label",{className:"mb-10",htmlFor:"Password"},"EPP Code* "),i.a.createElement("input",{id:"password",className:"Password form-control",type:"password",placeholder:"EPP Code",value:this.state.password,name:"password",onChange:this.onchange}),this.displayValidationErrors("password")),i.a.createElement("div",{className:"mb-20 sm-10"},i.a.createElement(h.a,{sitekey:"6LefFaoZAAAAAKtlMagZ7iNPgE8l9M9prRSm1z6M",render:"explicit",callback:function(t){e.setState({isVerify:!0,googleToken:t})}})),i.a.createElement("div",{className:"section-field"},i.a.createElement("div",{className:"remember-checkbox mb-30"},i.a.createElement("input",{type:"checkbox",className:"form-control",name:"two",id:"two"}),i.a.createElement("label",{htmlFor:"two"}," Remember me"))),i.a.createElement("a",{onClick:this.login,className:"button button-border black pull-right ".concat(this.isFormValid()?"":"disabled")},i.a.createElement("span",{className:"text"},"Log in "),i.a.createElement("i",{className:"fa fa-check text"}))))))))}}])&&b(t.prototype,a),n&&b(t,n),p}(i.a.Component);t.default=P},32:function(e,t,a){"use strict";t.a={email:{rules:[{test:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,message:"Please Enter Valid Email"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return e.length>=6},message:"Password must not be shorter than 6 characters"}],errors:[],valid:!1,state:""},firstname:{rules:[{test:/^[a-z A-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""},lastname:{rules:[{test:/^[a-zA-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""}}},79:function(e,t,a){!function(e){var t,a,n,r=String.fromCharCode;function o(e){for(var t,a,n=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(a=e.charCodeAt(r++)))?n.push(((1023&t)<<10)+(1023&a)+65536):(n.push(t),r--):n.push(t);return n}function i(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function s(e,t){return r(e>>t&63|128)}function l(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(i(e),t=r(e>>12&15|224),t+=s(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=s(e,12),t+=s(e,6)),t+=r(63&e|128)}function c(){if(n>=a)throw Error("Invalid byte index");var e=255&t[n];if(n++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(n>a)throw Error("Invalid byte index");if(n==a)return!1;if(e=255&t[n],n++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|c())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|c()<<6|c())>=2048)return i(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|c()<<12|c()<<6|c())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),a=t.length,n=-1,r="";++n<a;)r+=l(t[n]);return r},e.decode=function(e){t=o(e),a=t.length,n=0;for(var i,s=[];!1!==(i=u());)s.push(i);return function(e){for(var t,a=e.length,n=-1,o="";++n<a;)(t=e[n])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(s)}}(t)}}]);