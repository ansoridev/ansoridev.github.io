(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{22:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),i=a.n(o),s=a(35),l=a.n(s),c=a(55),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,r;f(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return a=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},p(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"==typeof t?Object(c.b)(t,null,null,o.location):t,s=o.createHref(i);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:s,ref:a}))},t}(n.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=d},276:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(0),i=a.n(o),s=a(22),l=a(31),c=a(54),u=a(9),f=a(6),p=a(43),m=a.n(p),d=a(3),h=a.n(d),y=a(5);a(277);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,n)}function b(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function i(e){g(o,r,n,i,s,"next",e)}function s(e){g(o,r,n,i,s,"throw",e)}i(void 0)}))}}function w(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=P(e);if(t){var n=P(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return k(this,a)}}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(p,e);var t,a,r,o=x(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=o.call(this,e)).state={email:"",error:null,isVerify:!1,googleToken:""},t.validators=l.a,t.onchange=t.onchange.bind(O(t)),t.displayValidationErrors=t.displayValidationErrors.bind(O(t)),t.updateValidators=t.updateValidators.bind(O(t)),t.forgotpw=t.forgotpw.bind(O(t)),t.isFormValid=t.isFormValid.bind(O(t)),t}return t=p,(a=[{key:"onchange",value:function(e){var t,a,r;this.setState((t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)),this.updateValidators([e.target.name],e.target.value)}},{key:"updateValidators",value:function(e,t){var a=this;this.validators[e].errors=[],this.validators[e].state=t,this.validators[e].valid=!0,this.validators[e].rules.forEach((function(r){r.test instanceof RegExp?r.test.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1):"function"==typeof r.test&&(r.test(t)||(a.validators[e].errors.push(r.message),a.validators[e].valid=!1))}))}},{key:"displayValidationErrors",value:function(e){var t=this.validators[e];if(t&&!t.valid){var a=t.errors.map((function(e,t){return i.a.createElement("span",{className:"error",key:t},"* ",e,i.a.createElement("br",null))}));return i.a.createElement("div",{className:"col s12 row"},a)}return""}},{key:"isFormValid",value:function(){var e=this,t=!0;return Object.keys(this.validators).forEach((function(a){"email"==a&&(e.validators[a].valid||(t=!1))})),t}},{key:"forgotpw",value:function(){var e=this.state,t=e.email,a=e.isVerify,r=e.googleToken,o=this,i=function(){var e=b(n.a.mark((function e(){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.apiurl,"/pengguna/password/reset"),{headers:{"content-type":"application/x-www-form-urlencoded"},method:"POST",body:"email=".concat(t,"&googleToken=").concat(r)});case 2:return a=e.sent,e.next=5,a.json();case 5:(i=e.sent).status?h.a.fire({title:"Successfully!",text:i.message,type:"success",showCancelButton:!1,confirmButtonText:"Next",allowEscapeKey:!1,allowOutsideClick:!1}).then((function(e){e.value&&function(){var e=b(n.a.mark((function e(){var a,r,i,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.fire({title:"Code Sent!",text:"Check the code in your email, then write it here",input:"text",inputAttributes:{autocapitalize:"on"},inputValidator:function(e){if(!e)return"Please enter your verification code!"},allowEscapeKey:!1,allowOutsideClick:!1,animation:"slide-from-top",inputPlaceholder:"Code verification"});case 2:if(a=e.sent,!(r=a.value)){e.next=13;break}return h.a.fire({title:"Proccessing...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){h.a.showLoading()}}),e.next=8,fetch("".concat(y.apiurl,"/pengguna/password/reseted"),{headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,code:r}),method:"PUT"});case 8:return i=e.sent,e.next=11,i.json();case 11:(s=e.sent).status?(h.a.hideLoading(),h.a.fire({title:"Successfully!",text:s.message,type:"success",confirmButtonText:"Reset Password",showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1}).then((function(e){e.value&&(sessionStorage.setItem("code",r),sessionStorage.setItem("email",t),o.props.history.push("/reset-password"))}))):h.a.fire({title:"Reset Failed!",text:"The code you entered is incorrect, to prevent fraud you must verify ReCaptcha again.",type:"error",showCancelButton:!1});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()})):h.a.fire({title:"Error!",text:i.message,type:"error",showCancelButton:!1});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a?h.a.fire({title:"Proccessing...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){h.a.showLoading(),i()}}):h.a.fire({title:"Captcha Error",text:"Please verify Google ReCaptcha before submitting registration.",type:"warning",showCancelButton:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"height-100vh d-flex align-items-center page-section-ptb forgot",style:{backgroundImage:"url(assets/images/login.svg)"}},i.a.createElement(c.a,null,i.a.createElement(u.a,{className:"justify-content-center no-gutters vertical-align"},i.a.createElement(f.a,{lg:4,md:6,className:"login-fancy-bg bg",style:{backgroundImage:"url(assets/images/auth.svg)"}},i.a.createElement("div",{className:"forgot-fancy"},i.a.createElement("h2",{className:"text-white mb-20"},"Hello world!"),i.a.createElement("p",{className:"mb-20 text-white"},"Just so you know, ",y.website," is a website that provides hosting, domain and PPOB services that offer affordable prices with amazing quality."),i.a.createElement("ul",{className:"list-unstyled  pos-bot pb-30"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Terms of Use")," "),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{className:"text-white",href:"#"}," Privacy Policy"))))),i.a.createElement(f.a,{lg:4,md:6,className:"bg-white"},i.a.createElement("div",{className:"forgot-fancy pb-40 clearfix"},i.a.createElement("h3",{className:"mb-30"},"Forgot Your Password?"),i.a.createElement("p",{className:"pb-30"},"Please enter the email address for get email link."),i.a.createElement("div",{className:"section-field mb-20"},i.a.createElement("label",{className:"mb-10",htmlFor:"name"},"Email Address"),i.a.createElement("input",{id:"email",className:"web form-control",type:"text",placeholder:"Email",value:this.state.email,name:"email",onChange:this.onchange}),this.displayValidationErrors("email")),i.a.createElement("div",{className:"mb-20 sm-10"},i.a.createElement(m.a,{sitekey:"6LefFaoZAAAAAKtlMagZ7iNPgE8l9M9prRSm1z6M",render:"explicit",callback:function(t){e.setState({isVerify:!0,googleToken:t})}})),i.a.createElement("a",{className:"button   ".concat(this.isFormValid()?"":"disabled")},i.a.createElement("span",{className:"text-white",onClick:this.forgotpw},"Forgot Password")),i.a.createElement("p",{className:"mt-20 mb-0 remember-checkbox"},i.a.createElement(s.a,{to:"/login"}," Go back to login page")))))))}}])&&w(t.prototype,a),r&&w(t,r),p}(i.a.Component);t.default=C},277:function(e,t,a){var r=a(278);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(30)(r,n);r.locals&&(e.exports=r.locals)},278:function(e,t,a){(e.exports=a(29)(!1)).push([e.i,".error\r\n{\r\n  color:red;\r\n}\r\n .disabled{\r\n  pointer-events: none;\r\n} ",""])},31:function(e,t,a){"use strict";t.a={email:{rules:[{test:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,message:"Please Enter Valid Email"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return e.length>=6},message:"Password must not be shorter than 6 characters"}],errors:[],valid:!1,state:""},firstname:{rules:[{test:/^[a-z A-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""},lastname:{rules:[{test:/^[a-zA-Z_]+$/i,message:"number not allowed"}],errors:[],valid:!1,state:""}}}}]);