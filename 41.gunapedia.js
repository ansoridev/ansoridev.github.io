(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{299:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),l=a(0),r=a.n(l),c=a(9),o=a(6),i=a(20),u=a(12),m=a(18),d=a(13),p=a(32),f=a(22),y=a(14),h=a.n(y),E=a(5),b=a(3),g=a.n(b);a(39);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,a,n,s,l,r){try{var c=e[l](r),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(n,s)}function w(e){return function(){var t=this,a=arguments;return new Promise((function(n,s){var l=e.apply(t,a);function r(e){v(l,n,s,r,c,"next",e)}function c(e){v(l,n,s,r,c,"throw",e)}r(void 0)}))}}function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=P(e);if(t){var s=P(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return S(this,a)}}function S(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(y,e);var t,a,n,l=C(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=l.call(this,e)).state={detail:{}},t.onconfirm=t.onconfirm.bind(T(t)),t.oncancel=t.oncancel.bind(T(t)),t}return t=y,(a=[{key:"onconfirm",value:function(){var e=this;function t(){return(t=w(s.a.mark((function t(a,n){var l,r,c,o,i,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g.a.fire({title:"Please wait...",text:"Please wait for a moment. The process is being carried out",type:"info",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,onOpen:function(){g.a.showLoading()}}),t.next=3,fetch("".concat(E.apiurl,"/pengguna/payment/confirm"),{body:"session=".concat(a,"&id=").concat(n),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 3:return l=t.sent,t.next=6,l;case 6:return r=t.sent,t.next=9,l.json();case 9:if(c=t.sent,200!==r.status){t.next=25;break}if(!c.status){t.next=23;break}return g.a.fire({title:"Payment Successfully.",text:"Payment Successfully completed, We've been added balance to your account.",type:"success",animation:!0,showCancelButton:!1}),t.next=15,fetch("".concat(E.apiurl,"/pengguna/payment/detail"),{body:"session=".concat(a,"&id=").concat(n),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 15:return o=t.sent,t.next=18,o;case 18:return i=t.sent,t.next=21,o.json();case 21:u=t.sent,200===i.status?u.status&&(g.a.hideLoading(),e.setState({detail:u.data}),"SUCCESS"!==u.data.status&&"CANCELED"!==u.data.status||(document.getElementById("buttonConfirm").style.display="none",document.getElementById("buttonCancel").style.display="none")):e.props.history.push("/dashboard");case 23:t.next=26;break;case 25:g.a.fire({title:"Payment Failed",text:"We haven't received your payment yet. Please check back and try again",type:"error",showCancelButton:!1,animation:!0});case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=localStorage.getItem("session_key"),n=sessionStorage.getItem("addfundsAction");console.log(this.state.detail.type),"OTOMATIS"===this.state.detail.type?"PENDING"===e.state.detail.status&&g.a.fire({title:"Are you sure?",text:'By clicking "OK" then we check your add funds transaction.',type:"question",showCancelButton:!0}).then((function(e){e.value&&function(e,a){t.apply(this,arguments)}(a,n)})):this.props.history.push("/openTicket")}},{key:"oncancel",value:function(){var e=this;function t(){return(t=w(s.a.mark((function t(a,n){var l,r,c,o,i,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(E.apiurl,"/pengguna/payment/cancel"),{body:"session=".concat(a,"&id=").concat(n),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 2:return l=t.sent,t.next=5,l;case 5:return r=t.sent,t.next=8,l.json();case 8:if(c=t.sent,200!==r.status){t.next=24;break}if(!c.status){t.next=22;break}return g.a.fire({title:"Transaction Canceled",text:"The transaction has been canceled, you can make new transaction again.",type:"success",animation:!0,showCancelButton:!1}),t.next=14,fetch("".concat(E.apiurl,"/pengguna/payment/detail"),{body:"session=".concat(a,"&id=").concat(n),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 14:return o=t.sent,t.next=17,o;case 17:return i=t.sent,t.next=20,o.json();case 20:u=t.sent,200===i.status?u.status&&(e.setState({detail:u.data}),"SUCCESS"!==u.data.status&&"CANCELED"!==u.data.status||(document.getElementById("buttonConfirm").style.display="none",document.getElementById("buttonCancel").style.display="none")):e.props.history.push("/dashboard");case 22:t.next=25;break;case 24:e.props.history.push("/dashboard");case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=localStorage.getItem("session_key"),n=sessionStorage.getItem("addfundsAction");"PENDING"===e.state.detail.status&&g.a.fire({title:"Are you sure?",text:'By clicking "OK" then we will cancel your add funds transaction.',type:"question",showCancelButton:!0}).then((function(e){e.value&&function(e,a){t.apply(this,arguments)}(a,n)}))}},{key:"componentDidMount",value:function(){var e=this;function t(){return(t=w(s.a.mark((function t(a,n){var l,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(E.apiurl,"/pengguna/payment/detail"),{body:"session=".concat(a,"&id=").concat(n),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 2:return l=t.sent,t.next=5,l;case 5:return r=t.sent,t.next=8,l.json();case 8:c=t.sent,200===r.status?c.status&&(e.setState({detail:c.data}),"SUCCESS"!==c.data.status&&"CANCELED"!==c.data.status||(document.getElementById("buttonConfirm").style.display="none",document.getElementById("buttonCancel").style.display="none")):e.props.history.push("/dashboard");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e,a){t.apply(this,arguments)}(localStorage.getItem("session_key"),sessionStorage.getItem("addfundsAction"))}},{key:"render",value:function(){var e,t,a=r.a.createElement(r.a.Fragment,null);return"SUCCESS"===this.state.detail.status?a=r.a.createElement("span",{className:"badge badge-success"},"Success"):"PENDING"===this.state.detail.status?a=r.a.createElement("span",{className:"badge badge-warning"},"Pending"):"CANCELED"===this.state.detail.status&&(a=r.a.createElement("span",{className:"badge badge-danger"},"Canceled")),"MANUAL"===this.state.detail.type?(e=this.state.detail.amount,t=this.state.detail.total,document.getElementById("msgmuted").innerHTML="*Kode unik tidak digunakan! (Khusus Manual)",document.getElementById("msgmuted2").innerHTML="*Kode unik tidak digunakan! (Khusus Manual)"):(e=parseInt(this.state.detail.amount)+parseInt(this.state.detail.codeunik),t=parseInt(this.state.detail.total)+parseInt(this.state.detail.codeunik)),r.a.createElement("div",null,r.a.createElement("div",{className:"page-title"},r.a.createElement(c.a,null,r.a.createElement(o.a,{sm:6},r.a.createElement("h4",{className:"mb-0"}," Detail Add Funds")),r.a.createElement(o.a,{sm:6},r.a.createElement(i.a,{className:"float-left float-sm-right"},r.a.createElement(u.a,null,r.a.createElement(f.a,{to:"#"},"Home")),r.a.createElement(u.a,{active:!0},"Add Funds"))))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xl:12},r.a.createElement("div",{className:"order-detail"},r.a.createElement(m.a,{className:"card-statistics h-100 mb-30"},r.a.createElement(d.a,null,r.a.createElement("div",{className:"d-md-flex justify-content-md-between mb-30"},r.a.createElement("div",{className:""},r.a.createElement("img",{className:"logo-small mt-0",src:E.logo,alt:"logo"}))),r.a.createElement("div",{className:"card-title d-sm-flex justify-content-between mb-15 "},r.a.createElement("h4",{className:"mb-10 mb-sm-0"},"Record : #",this.state.detail.record),r.a.createElement("h6",null,"Date Time : ",this.state.detail.datecreated)),r.a.createElement(c.a,{className:"no-gutters"},r.a.createElement(o.a,{md:6,xl:6,className:"mb-30"},r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title"},"Payment to:"),r.a.createElement("ul",{className:"invoice-info"},r.a.createElement("li",null,r.a.createElement("span",null,"Status"),a),r.a.createElement("li",null,r.a.createElement("span",null,"Payment Method"),r.a.createElement("span",null,this.state.detail.method)),r.a.createElement("li",null,r.a.createElement("span",null,"No.Rek / No.Kirim"),r.a.createElement("span",null,this.state.detail.numberto)),r.a.createElement("li",null,r.a.createElement("span",null,"A/N"),r.a.createElement("span",null,this.state.detail.an)),r.a.createElement("li",null,r.a.createElement("span",null,"Total Pembayaran"),r.a.createElement(h.a,{value:e,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),r.a.createElement("li",null,r.a.createElement("small",{className:"form-text text-muted",id:"msgmuted"},"*Total Pembayaran Termasuk kode unik")),r.a.createElement("li",{id:"buttonConfirm"},r.a.createElement("button",{class:"button button-border black btn btn-secondary btn-small pull-right",onClick:this.onconfirm},"Konfirmasi Pembayaran"))))),r.a.createElement(o.a,{md:6,xl:6,className:"mb-30"},r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title"},"Detail Transaksi"),r.a.createElement("ul",{className:"invoice-info"},r.a.createElement("li",null,r.a.createElement("span",null,"Tipe"),r.a.createElement("span",null,this.state.detail.type)),r.a.createElement("li",null,r.a.createElement("span",null,"Kode Unik"),r.a.createElement("span",null,this.state.detail.codeunik)),r.a.createElement("li",null,r.a.createElement("span",null,"Jumlah Top Up"),r.a.createElement(h.a,{value:this.state.detail.amount,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),r.a.createElement("li",null,r.a.createElement("span",null,"Saldo Diterima"),r.a.createElement(h.a,{value:t,displayType:"text",thousandSeparator:!0,prefix:"Rp "})),r.a.createElement("li",null,r.a.createElement("small",{className:"form-text text-muted",id:"msgmuted2"},"*Total Saldo Diterima sudah termasuk penjumlahan kode unik")),r.a.createElement("li",{id:"buttonCancel"},r.a.createElement("button",{class:"button button-border black btn btn-secondary btn-small pull-right",onClick:this.oncancel},"Batalkan Pembayaran")))))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement(p.a,{className:"table table-hover text-right",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"Referensi"),r.a.createElement("th",{className:"text-left"},"Pengirim"),r.a.createElement("th",{className:"text-center"},"Tanggal Terbayar"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},this.state.detail.ref),r.a.createElement("td",{className:"text-left"},this.state.detail.frompaid),r.a.createElement("td",{className:"text-center"},this.state.detail.datepaid)))))))))))}}])&&k(t.prototype,a),n&&k(t,n),y}(r.a.Component);t.default=I}}]);