(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{176:function(e,t,a){var r=a(177);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(30)(r,n);r.locals&&(e.exports=r.locals)},177:function(e,t,a){(e.exports=a(29)(!1)).push([e.i,'.panelPhoto{\r\n    max-width:100%;\r\n    height: auto;\r\n }\r\n /*\r\n * react-circular-progressbar styles\r\n * All of the styles in this file are configurable!\r\n */\r\n\r\n.CircularProgressbar {\r\n    /*\r\n     * This fixes an issue where the CircularProgressbar svg has\r\n     * 0 width inside a "display: flex" container, and thus not visible.\r\n     */\r\n    width: 100%;\r\n    /*\r\n     * This fixes a centering issue with CircularProgressbarWithChildren:\r\n     * https://github.com/kevinsqi/react-circular-progressbar/issues/94\r\n     */\r\n    vertical-align: middle;\r\n    max-width: 170px;\r\n  }\r\n  \r\n  .CircularProgressbar .CircularProgressbar-path {\r\n    stroke: #84ba3f;\r\n    stroke-linecap: round;\r\n    transition: stroke-dashoffset 0.5s ease 0s;\r\n  }\r\n  \r\n  .CircularProgressbar .CircularProgressbar-trail {\r\n    stroke: #eeeeee;\r\n    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\r\n    stroke-linecap: round;\r\n  }\r\n  \r\n  .CircularProgressbar .CircularProgressbar-text {\r\n    fill: #84ba3f;\r\n    font-size: 20px;\r\n    dominant-baseline: middle;\r\n    text-anchor: middle;\r\n  }\r\n  \r\n  .CircularProgressbar .CircularProgressbar-background {\r\n    fill: #d6d6d6;\r\n  }\r\n  \r\n  /*\r\n   * Sample background styles. Use these with e.g.:\r\n   *\r\n   *   <CircularProgressbar\r\n   *     className="CircularProgressbar-inverted"\r\n   *     background\r\n   *     percentage={50}\r\n   *   />\r\n   */\r\n  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\r\n    fill: #3e98c7;\r\n  }\r\n  \r\n  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\r\n    stroke: #fff;\r\n  }\r\n  \r\n  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\r\n    stroke: transparent;\r\n  }\r\n  .CircularProgressbar .CircularProgressbar-trail, .CircularProgressbar .CircularProgressbar-path {\r\n    stroke-width: 4px;\r\n  }\r\n\r\n  .border-warning .CircularProgressbar .CircularProgressbar-path,\r\n   .border-warning .CircularProgressbar .CircularProgressbar-text{\r\n      stroke: #ffc107;\r\n      fill: #ffc107;\r\n  }\r\n  .border-info .CircularProgressbar .CircularProgressbar-path,\r\n  .border-info .CircularProgressbar .CircularProgressbar-text {\r\n      stroke: #17a2b8;\r\n      fill:  #17a2b8;\r\n  }\r\n  .border-success .CircularProgressbar .CircularProgressbar-path,\r\n  .border-success .CircularProgressbar .CircularProgressbar-text{\r\n      stroke: #28a745;\r\n      fill: #28a745;\r\n  }\r\n  .border-danger .CircularProgressbar .CircularProgressbar-path,\r\n  .border-danger .CircularProgressbar .CircularProgressbar-text{\r\n      stroke: #dc3545;\r\n      fill: #dc3545;\r\n  }\r\n\r\n',""])},183:function(e,t,a){var r={"./index.js":184};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=183},304:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(0),l=a.n(s),o=a(39),i=a.n(o),c=a(27),u=a(9),m=a(6),d=a(18),p=a(13),f=a(306),b=a(28),h=a(114),g=a(116),v=a(115),E=a(319),y=a(320),w=a(321),x=a(322),N=(a(176),a(53),a(178),a(179),a(113));function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=j(e);if(t){var n=j(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return T(this,a)}}function T(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(s,e);var t,a,r,n=S(s);function s(){var e;C(this,s);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return A(R(e=n.call.apply(n,[this].concat(a))),"interval",void 0),A(R(e),"state",{isAnimated:!1}),e}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this;this.props.repeat?this.interval=window.setInterval((function(){e.setState({isAnimated:!e.state.isAnimated})}),1e3*this.props.duration):this.setState({isAnimated:!this.state.isAnimated})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{start:function(){return{value:e.props.valueStart}},update:function(){return{value:[e.state.isAnimated?e.props.valueEnd:e.props.valueStart],timing:{duration:1e3*e.props.duration,ease:e.props.easingFunction}}}},(function(t){var a=t.value;return e.props.children(a)}))}}])&&k(t.prototype,a),r&&k(t,r),s}(l.a.Component);A(_,"defaultProps",{valueStart:0});var D=a(111),I=a(14),L=a.n(I),U=a(5);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,a,r,n,s,l){try{var o=e[s](l),i=o.value}catch(e){return void a(e)}o.done?t(i):Promise.resolve(i).then(r,n)}function B(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function l(e){W(s,r,n,l,o,"next",e)}function o(e){W(s,r,n,l,o,"throw",e)}l(void 0)}))}}function M(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=H(e);if(t){var n=H(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return J(this,a)}}function J(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?V(e):t}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=null,K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(o,e);var t,a,r,s=q(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s.call(this,e)).dropdownbarOpen=t.dropdownbarOpen.bind(V(t)),t.dropdownlineOpen=t.dropdownlineOpen.bind(V(t)),t.state={dropdownbarOpen:!1,dropdownlineOpen:!1,activeTab:"1",widths:150,detail:{},transaction:[],topUser:[],chartTrx:{},isAvailable:2,domainPrice:0,domainOrder:"",isLoaded:0},t.onchange=t.onchange.bind(V(t)),t.validationWhois=t.validationWhois.bind(V(t)),t.invoicedetail=t.invoicedetail.bind(V(t)),t}return t=o,(a=[{key:"onchange",value:function(e){this.validationWhois(e.target.value)}},{key:"invoicedetail",value:function(e){sessionStorage.setItem("invoicedetail",e),this.props.history.push("/invoiceDetail")}},{key:"validationWhois",value:function(e){var t=this;function a(){var e=t;console.log(e.state.isAvailable);var a=l.a.createElement("span",null);3===e.state.isAvailable?(a=l.a.createElement("div",{className:"ml-20 mr-20"},l.a.createElement("span",{className:"form"},"Checking domain availability ",l.a.createElement("i",{class:"fa fa-spin fa-circle-o-notch"}))),document.getElementById("domainform").className="form-control"):1===e.state.isAvailable?(e.state.detail.saldo<e.state.domainPrice?a=l.a.createElement("div",{className:"ml-20 mr-20"},l.a.createElement("span",{className:"form"},"Domain ",e.state.domainOrder," is available! you can order it for  ",l.a.createElement(L.a,{value:e.state.domainPrice,displayType:"text",thousandSeparator:!0,prefix:"Rp "}),", before someone order it."),l.a.createElement(c.a,{href:"#/addFunds",className:"button button-border pull-right mt-10",size:"xsmall"},"Isi Saldo")):(a=l.a.createElement("div",{className:"ml-20 mr-20"},l.a.createElement("span",{className:"form"},"Domain ",e.state.domainOrder," is available! you can order it for  ",l.a.createElement(L.a,{value:e.state.domainPrice,displayType:"text",thousandSeparator:!0,prefix:"Rp "}),", before someone order it."),l.a.createElement(c.a,{href:"#/searchDomain",className:"button button-border pull-right mt-10",size:"xsmall"},"Beli Domain")),sessionStorage.setItem("domainOrder",e.state.domainOrder)),document.getElementById("domainform").className="form-control is-valid"):0===e.state.isAvailable&&(a=l.a.createElement("div",{className:"ml-20 mr-20"},l.a.createElement("span",{className:"form"},"Checking domain availability ",l.a.createElement("i",{class:"fa fa-spin fa-circle-o-notch"})),l.a.createElement("br",null),l.a.createElement("span",{className:"form"},"Domain ",e.state.domainOrder," isn't available! sorry domain have been register to someone, check other domain name.")),document.getElementById("domainform").className="form-control is-invalid"),document.getElementById("validating").innerHTML=i.a.renderToString(a)}function r(){return(r=B(n.a.mark((function e(r){var s,l,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G&&G.abort(),G=new AbortController,s=G.signal,t.setState({isAvailable:3}),e.next=6,fetch("".concat(U.apiurl,"/domain/query/whois"),{headers:{"content-type":"application/x-www-form-urlencoded"},method:"POST",body:"domain=".concat(r,"&session=").concat(localStorage.getItem("session_key")),signal:s});case 6:return l=e.sent,e.next=9,l;case 9:return o=e.sent,e.next=12,l.json();case 12:i=e.sent,200===o.status&&("Available"===i.data.status?t.setState({isAvailable:1,domainPrice:i.data.price,domainOrder:r}):t.setState({isAvailable:0,domainOrder:r})),a();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){r.apply(this,arguments)}(e)}},{key:"dropdownbarOpen",value:function(){this.setState((function(e){return{dropdownbarOpen:!e.dropdownbarOpen}}))}},{key:"dropdownlineOpen",value:function(){this.setState((function(e){return{dropdownlineOpen:!e.dropdownlineOpen}}))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("session_key"),t=this;function a(){return(a=B(n.a.mark((function e(a){var r,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U.apiurl,"/pengguna/query/info"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a)});case 2:return r=e.sent,e.next=5,r.status;case 5:return s=e.sent,e.next=8,r.json();case 8:return l=e.sent,200===s?t.setState({isLoaded:s,detail:l.data}):t.setState({isLoaded:s,detail:{result:"error"}}),e.next=12,s;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=B(n.a.mark((function e(a){var r,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U.apiurl,"/pengguna/data/topTransaction"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a)});case 2:return r=e.sent,e.next=5,r.status;case 5:return s=e.sent,e.next=8,r.json();case 8:return l=e.sent,200===s&&t.setState({isLoaded:s,transaction:l.data}),e.next=12,s;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=B(n.a.mark((function e(a){var r,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U.apiurl,"/pengguna/data/topUser"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a)});case 2:return r=e.sent,e.next=5,r.status;case 5:return s=e.sent,e.next=8,r.json();case 8:return l=e.sent,200===s&&t.setState({isLoaded:s,topUser:l.data}),e.next=12,s;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=B(n.a.mark((function e(a){var r,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U.apiurl,"/pengguna/data/topLastWeek"),{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:"session=".concat(a)});case 2:return r=e.sent,e.next=5,r.status;case 5:return s=e.sent,e.next=8,r.json();case 8:return l=e.sent,200===s&&t.setState({isLoaded:s,chartTrx:l.data}),e.next=12,s;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){a.apply(this,arguments)}(e),function(e){r.apply(this,arguments)}(e),function(e){s.apply(this,arguments)}(e),function(e){l.apply(this,arguments)}(e)}},{key:"render",value:function(){var e={labels:this.state.chartTrx.date,datasets:[{label:"Paid Transaction",backgroundColor:"rgb(56, 182, 202)",borderColor:"rgb(56, 182, 202)",pointBorderColor:"#fff",data:this.state.chartTrx.transaction}]},t=this;return l.a.createElement("div",{className:"header-info"},l.a.createElement("div",{className:"page-title",style:{backgroundImage:"url(assets/images/login.svg)"}},l.a.createElement(u.a,null,l.a.createElement(m.a,{md:6},l.a.createElement("h3",{className:"mb-15 text-white"}," Welcome back, ",this.state.detail.name," "),l.a.createElement("span",{className:"mb-10 mb-md-30 text-white d-block"},"View a summary of your account navigate to the most important account activities.")))),l.a.createElement(u.a,{className:"account-overview mb-30"},l.a.createElement("div",{className:"col-12"},l.a.createElement(d.a,{className:"card-statistics h-100"},l.a.createElement(p.a,{className:"bg-white"},l.a.createElement("h5",{className:"card-title"},"Account overview"),l.a.createElement(u.a,null,l.a.createElement(m.a,{xl:3,sm:6,className:"mb-4 mb-xl-0"},l.a.createElement(u.a,{className:"no-gutters"},l.a.createElement(m.a,{lg:8,md:7,sm:7,className:"col-7 align-self-center"},l.a.createElement("span",null,"Balance"),l.a.createElement("h4",{className:"text-danger fw-6 mt-10"},l.a.createElement(L.a,{value:this.state.detail.saldo,displayType:"text",thousandSeparator:!0,prefix:"Rp "}),l.a.createElement(c.a,{href:"#/addFunds",className:"button button-border ml-10 mt-10",size:"xsmall"},"Recharge"))))),l.a.createElement(m.a,{xl:3,sm:6,className:"mb-4 mb-xl-0"},l.a.createElement(u.a,{className:"no-gutters"},l.a.createElement(m.a,{lg:8,md:7,sm:7,className:"col-7 align-self-center"},l.a.createElement("span",null,"Total Domain"),l.a.createElement("h4",{className:"text-success fw-6 mt-10"},this.state.detail.totaldomain," Domain")))),l.a.createElement(m.a,{xl:3,sm:6,className:"mb-4 mb-xl-0"},l.a.createElement(u.a,{className:"no-gutters"},l.a.createElement(m.a,{lg:8,md:7,sm:7,className:"col-7 align-self-center"},l.a.createElement("span",null,"Total Transaction"),l.a.createElement("h4",{className:"text-info fw-6 mt-10"},l.a.createElement(L.a,{value:this.state.detail.totaltransaction,displayType:"text",thousandSeparator:!0,prefix:"Rp "}))))),l.a.createElement(m.a,{xl:3,sm:6,className:"mb-4 mb-xl-0"},l.a.createElement(u.a,{className:"no-gutters"},l.a.createElement(m.a,{lg:8,md:7,sm:7,className:"col-7 align-self-center"},l.a.createElement("span",null,"Join Date"),l.a.createElement("h4",{className:"text-warning fw-6 mt-10"},this.state.detail.join))))))))),l.a.createElement(u.a,null,l.a.createElement(m.a,{md:12},l.a.createElement(d.a,{className:"card-statistics mb-30"},l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,null,"Find your dream domain..."),l.a.createElement(h.a,null,l.a.createElement(g.a,{addonType:"prepend"},"www."),l.a.createElement(v.a,{placeholder:"domainimpian.com",type:"text",id:"domainform",onInput:this.onchange}))),l.a.createElement("div",{id:"validating"})))),l.a.createElement(m.a,{md:12,className:"mb-30"},l.a.createElement(d.a,{className:"h-100"},l.a.createElement(p.a,null,l.a.createElement(b.a,null,"Transaction in last one week"),l.a.createElement("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350}},l.a.createElement(D.a,{data:e,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Poppins"}},scales:{yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Poppins"}}],xAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Poppins"}}]}}})))))),l.a.createElement(u.a,null,l.a.createElement(m.a,{xl:8,className:"mb-30"},l.a.createElement(d.a,{className:"card-statistics h-100"},l.a.createElement(p.a,null,l.a.createElement("h5",{className:"mb-15 pb-0 border-0 card-title"},"Last Transaction "),l.a.createElement("div",{className:"btn-group info-drop"},l.a.createElement(E.a,{isOpen:this.state.dropdownlineOpen,toggle:this.dropdownlineOpen},l.a.createElement(y.a,{className:"dropdown-toggle-split text-muted",id:"dropdown-no-caret"},l.a.createElement("i",{className:"ti-more"})),l.a.createElement(w.a,null,l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-success ti-files"}),"Approved"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-warning ti-pencil-alt"}),"Pending"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-danger ti-user"}),"Rejected"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-secondary ti-reload"}),"Refresh")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table center-aligned-table mb-10"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-dark"},l.a.createElement("th",null,"Order No"),l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Purchased On"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Payment Method"),l.a.createElement("th",null,"Status"),l.a.createElement("th",{className:"text-right"},"Action"))),l.a.createElement("tbody",null,this.state.transaction.map((function(e){var a=e.paid;return a=!0===e.paid?l.a.createElement("label",{className:"badge badge-success"},"Paid"):l.a.createElement("label",{className:"badge badge-danger"},"Unpaid"),[l.a.createElement("tr",null,l.a.createElement("td",null,"#",e.invoice),l.a.createElement("td",null,e.item,"  ",e.description),l.a.createElement("td",null,e.created),l.a.createElement("td",null,l.a.createElement(L.a,{value:e.total,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),l.a.createElement("td",null,e.method),l.a.createElement("td",null,a),l.a.createElement("td",{className:"edit"},l.a.createElement("a",{to:"",onClick:function(){t.invoicedetail(e.invoice)}},l.a.createElement("label",{className:"badge badge-primary"},"View Invoice"))))]})))))))),l.a.createElement(m.a,{xl:4,className:"mb-30"},l.a.createElement(d.a,{className:"card-statistics h-100"},l.a.createElement(p.a,null,l.a.createElement("h5",{className:"mb-15 pb-0 border-0 card-title"},"Top User Transaction "),l.a.createElement("div",{className:"btn-group info-drop"},l.a.createElement(E.a,{isOpen:this.state.dropdownlineOpen,toggle:this.dropdownlineOpen},l.a.createElement(y.a,{className:"dropdown-toggle-split text-muted",id:"dropdown-no-caret"},l.a.createElement("i",{className:"ti-more"})),l.a.createElement(w.a,null,l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-success ti-files"}),"Approved"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-warning ti-pencil-alt"}),"Pending"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-danger ti-user"}),"Rejected"),l.a.createElement(x.a,null,l.a.createElement("i",{className:"text-secondary ti-reload"}),"Refresh")))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table center-aligned-table mb-10"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"text-dark"},l.a.createElement("th",null,"Rank"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,this.state.topUser.map((function(e){return[l.a.createElement("tr",null,l.a.createElement("td",null,e.rank),l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement(L.a,{value:e.total,displayType:"text",thousandSeparator:!0,prefix:"Rp "})," (",e.per,")"))]}))))))))))}}])&&M(t.prototype,a),r&&M(t,r),o}(l.a.Component);t.default=K}}]);