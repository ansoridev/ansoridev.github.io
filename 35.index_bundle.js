(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{22:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),c=n.n(r),s=n(28),i=n.n(s),l=n(53),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,a;p(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=a=f(this,e.call.apply(e,[this].concat(r))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,n=a.props,o=n.replace,r=n.to;o?t.replace(r):t.push(r)}},f(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,c="string"==typeof t?Object(l.b)(t,null,null,r.location):t,s=r.createHref(c);return o.a.createElement("a",u({},a,{onClick:this.handleClick,href:s,ref:n}))},t}(o.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m},297:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(0),c=n.n(r),s=n(9),i=n(6),l=n(20),u=n(12),p=n(18),f=n(15),d=n(30),m=n(22),h=n(4),y=n(43),v=n.n(y),b=n(5),g=n.n(b);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,n,a,o,r,c){try{var s=e[r](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(a,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function c(e){E(r,a,o,c,s,"next",e)}function s(e){E(r,a,o,c,s,"throw",e)}c(void 0)}))}}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(y,e);var t,n,a,r=k(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=r.call(this,e)).state={method:[],getSaldo:0,totalDepo:0,discount:0,idmethod:0},t.ontype=t.ontype.bind(P(t)),t.onamount=t.onamount.bind(P(t)),t.onmethod=t.onmethod.bind(P(t)),t.onclick=t.onclick.bind(P(t)),t}return t=y,(n=[{key:"componentDidMount",value:function(){var e=this;!function(){var t=O(o.a.mark((function t(n){var a,r,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(h.apiurl,"/pengguna/payment/method"),t.next=3,fetch(a=a,{headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(n,"&type=Otomatis"),method:"POST"});case 3:return r=t.sent,t.next=6,r.status;case 6:return c=t.sent,t.next=9,r.json();case 9:s=t.sent,c?s.status&&(e.setState({method:s.data,idmethod:s.data[0].id,discount:s.data[0].discount}),console.log(s.data.id)):e.props.history.push("/");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(localStorage.getItem("session_key"))}},{key:"onclick",value:function(){var e=this,t=function(){var t=O(o.a.mark((function t(n,a,r){var c,s,i,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={"Content-Type":"application/x-www-form-urlencoded"},s="".concat(h.apiurl,"/pengguna/payment/create"),t.next=4,fetch(s=s,{headers:c,method:"POST",body:"session=".concat(n,"&amount=").concat(r,"&id=").concat(a)});case 4:return i=t.sent,t.next=7,i.status;case 7:return l=t.sent,t.next=10,i.json();case 10:u=t.sent,200===l?u.status&&g.a.fire({title:"#".concat(u.data.record," created!"),text:u.message,type:"success",showCancelButton:!1,animation:!0}).then((function(t){t.value&&(sessionStorage.clear(),sessionStorage.setItem("addfundsAction",u.data.id),e.props.history.push("/detailAddFunds"))})):g.a.fire({title:"Transaction Failed!",text:u.message,type:"error",showCancelButton:!1,animation:!0});case 12:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();0===e.state.totalDepo&&0===e.state.discount&&0===e.state.idmethod||(parseInt(e.state.totalDepo)<5e4?g.a.fire({title:"Minimum Add Funds!",text:"Minimum add funds is Rp. 50,000",type:"error",showCancelButton:!1}):g.a.fire({title:"Are you sure?",text:'By clicking "OK" then we will make a transaction add funds.',type:"question",showCancelButton:!0}).then((function(n){n.value&&t(localStorage.getItem("session_key"),e.state.idmethod,e.state.totalDepo)})))}},{key:"onmethod",value:function(e){var t=e.target.selectedIndex,n=e.target.childNodes[t],a=n.getAttribute("discount"),o=n.getAttribute("id");this.setState({discount:a,idmethod:o});var r=parseInt(a)/100*parseInt(this.state.totalDepo);r=parseInt(this.state.totalDepo)+r,console.log(r),console.log(this.state.totalDepo),this.setState({getSaldo:r})}},{key:"onamount",value:function(e){var t,n,a,o=parseInt(this.state.discount)/100*parseInt(e.target.value);o=parseInt(e.target.value)+o,console.log(o),this.setState((t={getSaldo:o},n=e.target.name,a=e.target.value,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))}},{key:"ontype",value:function(e){var t=this,n=this,a=function(){var e=O(o.a.mark((function e(a,r){var c,s,i,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h.apiurl,"/pengguna/payment/method"),e.next=3,fetch(c=c,{headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a,"&type=").concat(r),method:"POST"});case 3:return s=e.sent,e.next=6,s.status;case 6:return i=e.sent,e.next=9,s.json();case 9:l=e.sent,i?l.status&&(n.setState({method:l.data}),u=parseInt(t.state.discount)/100*parseInt(t.state.totalDepo),u=parseInt(t.state.totalDepo)+u,console.log(u),console.log(t.state.totalDepo),t.setState({getSaldo:u})):n.props.history.push("/");case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),r=e.target.value;a(localStorage.getItem("session_key"),r)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"page-title"},c.a.createElement(s.a,null,c.a.createElement(i.a,{sm:6},c.a.createElement("h4",{className:"mb-0"},"Add Funds")),c.a.createElement(i.a,{sm:6},c.a.createElement(l.a,{className:"float-left float-sm-right"},c.a.createElement(u.a,null,c.a.createElement(m.a,{to:"#"},"Home")),c.a.createElement(u.a,{active:!0},"Billing"))),c.a.createElement(i.a,{sm:12},c.a.createElement(p.a,{className:" card-statistics mb-30"},c.a.createElement(f.a,null,c.a.createElement(d.a,null,"Add Funds"),c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"paymentType"},"Payment Type"),c.a.createElement("select",{className:"form-control",id:"paymentType",onChange:this.ontype,name:"paymentType"},c.a.createElement("option",{value:"Otomatis"},"Otomatis"),c.a.createElement("option",{value:"Manual"},"Manual")))),c.a.createElement(i.a,null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"paymentMethod"},"Payment Method"),c.a.createElement("select",{className:"form-control",id:"paymentMethod",onChange:this.onmethod,name:"paymentMethod",value:this.state.selectexample},this.state.method.map((function(e){return[c.a.createElement("option",{id:e.id,discount:e.discount},e.name," (",e.discount,"%)")]})))))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"totalDepo"},"Amount"),c.a.createElement("input",{type:"number",className:"form-control",id:"totalDepo",name:"totalDepo",placeholder:"Enter your add funds amount",onInput:this.onamount})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"getSaldo"},"Total Funds"),c.a.createElement("input",{type:"text",className:"form-control",id:"getSaldo",name:"getSaldo",value:v.a.format(this.state.getSaldo,{locale:"id-ID",symbol:"Rp "})})),c.a.createElement("button",{type:"submit",className:"button button-border black btn btn-secondary btn-small pull-right",onClick:this.onclick},"  SUBMIT  "))))))),c.a.createElement("div",null))}}])&&x(t.prototype,n),a&&x(t,a),y}(c.a.Component);t.default=T}}]);