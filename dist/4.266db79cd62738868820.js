(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{345:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o}));var n=/(<([^>]+)>)/gi,a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(n,"")},o=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}},346:function(t,e,r){"use strict";var n={name:"ActiveCard",props:{person:{type:Object,required:!0}},methods:{pickStatusColor:function(){this.$refs.statusIcon.style.backgroundColor="Alive"==this.person.status?"rgb(85, 204, 68)":"Dead"==this.person.status?"rgb(214, 61, 46)":"rgb(158, 158, 158)"}},mounted:function(){this.pickStatusColor()},watch:{person:function(){this.pickStatusColor()}}},a=r(64),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{staticClass:"active-person p-2 text-white bg-dark"},[r("img",{staticClass:"active-person__image",attrs:{src:t.person.image}}),t._v(" "),r("div",{staticClass:"active-person__info"},[r("p",{staticClass:"active-person__name bold mt-0 mt-md-2 mb-2"},[t._v("\n                "+t._s(t.person.name)+"\n            ")]),t._v(" "),r("p",{staticClass:"active-person__text active-person__status"},[r("span",{ref:"statusIcon",staticClass:"active-person__status-icon"}),t._v("\n                "+t._s(t.person.status)+" — "+t._s(t.person.species)+"\n            ")]),t._v(" "),""!=t.person.type?r("p",{staticClass:"active-person__text"},[r("span",[t._v("Type : ")]),t._v(t._s(t.person.type)+"\n            ")]):t._e(),t._v(" "),r("p",{staticClass:"active-person__text"},[r("span",[t._v("Gender : ")]),t._v(t._s(t.person.gender)+"\n            ")]),t._v(" "),r("p",{staticClass:"active-person__text"},[r("span",[t._v("Location : ")]),t._v(t._s(t.person.location.name)+"\n            ")])])])])}),[],!1,null,null,null);e.a=o.exports},347:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(348),a=r.n(n);function o(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}var i=new(function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.http=e}return function(t,e,r){e&&o(t.prototype,e),r&&o(t,r)}(t,[{key:"getPersonsAtPage",value:function(t){return a.a.get(this.http+"?page="+t).then((function(t){return t.data.results})).catch((function(t){throw new Error(t)}))}},{key:"getPersonsById",value:function(t){return a.a.get(this.http+t).then((function(t){return t.data})).catch((function(t){throw new Error(t)}))}},{key:"search",value:function(t){return a.a.get(this.http+"?name="+t).then((function(t){return t.data.results})).catch((function(t){throw new Error(t)}))}}]),t}())("https://rickandmortyapi.com/api/character/")},349:function(t,e,r){"use strict";var n={name:"PersonCard",components:{BCard:r(378).a},props:{person:{type:Object,required:!0}}},a=r(64),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"person-card  text-white",attrs:{"img-src":t.person.image,"img-top":""},on:{click:function(e){return t.$emit("newActive",t.person)}}},[r("p",{staticClass:"d-none d-sm-block  person-card__name m-0 text-center "},[t._v("\n        "+t._s(t.person.name)+"\n    ")])])}),[],!1,null,null,null);e.a=o.exports},378:function(t,e,r){"use strict";r.d(e,"a",(function(){return M}));var n=r(33),a=r(14),o=r(345),i=r(107),c=r(48),s={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}},u=r(22),p={title:{type:String},titleTag:{type:String,default:"h4"}},l=a.a.extend({name:"BCardTitle",functional:!0,props:p,render:function(t,e){var r=e.props,a=e.data,o=e.children;return t(r.titleTag,Object(n.a)(a,{staticClass:"card-title"}),o||Object(u.b)(r.title))}}),b=r(47),f="BCardSubTitle",d={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(b.b)(f,"subTitleTextVariant")}}},g=a.a.extend({name:f,functional:!0,props:d,render:function(t,e){var r=e.props,a=e.data,o=e.children;return t(r.subTitleTag,Object(n.a)(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(u.b)(r.subTitle))}});function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=h(h(h(h({},Object(c.a)(s.props,c.c.bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},p),d),{},{overlay:{type:Boolean,default:!1}}),w=a.a.extend({name:"BCardBody",functional:!0,props:j,render:function(t,e){var r,a=e.props,o=e.data,i=e.children,s=t(),u=t(),b=i||[t()];return a.title&&(s=t(l,{props:Object(c.b)(p,a)})),a.subTitle&&(u=t(g,{props:Object(c.b)(d,a),class:["mb-2"]})),t(a.bodyTag,Object(n.a)(o,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},O(r,"bg-".concat(a.bodyBgVariant),a.bodyBgVariant),O(r,"border-".concat(a.bodyBorderVariant),a.bodyBorderVariant),O(r,"text-".concat(a.bodyTextVariant),a.bodyTextVariant),r),a.bodyClass||{}]}),[s,u].concat(m(b)))}});function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C=_(_({},Object(c.a)(s.props,c.c.bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),S=a.a.extend({name:"BCardHeader",functional:!0,props:C,render:function(t,e){var r,a=e.props,i=e.data,c=e.children,s=a.headerBgVariant,u=a.headerBorderVariant,p=a.headerTextVariant;return t(a.headerTag,Object(n.a)(i,{staticClass:"card-header",class:[a.headerClass,(r={},x(r,"bg-".concat(s),s),x(r,"border-".concat(u),u),x(r,"text-".concat(p),p),r)],domProps:c?{}:Object(o.a)(a.headerHtml,a.header)}),c)}});function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A=B(B({},Object(c.a)(s.props,c.c.bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),V=a.a.extend({name:"BCardFooter",functional:!0,props:A,render:function(t,e){var r,a=e.props,i=e.data,c=e.children,s=a.footerBgVariant,u=a.footerBorderVariant,p=a.footerTextVariant;return t(a.footerTag,Object(n.a)(i,{staticClass:"card-footer",class:[a.footerClass,(r={},k(r,"bg-".concat(s),s),k(r,"border-".concat(u),u),k(r,"text-".concat(p),p),r)],domProps:c?{}:Object(o.a)(a.footerHtml,a.footer)}),c)}}),N={src:{type:String,required:!0},alt:{type:String},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},D=a.a.extend({name:"BCardImg",functional:!0,props:N,render:function(t,e){var r=e.props,a=e.data,o="card-img";return r.top?o+="-top":r.right||r.end?o+="-right":r.bottom?o+="-bottom":(r.left||r.start)&&(o+="-left"),t("img",Object(n.a)(a,{class:[o],attrs:{src:r.src||null,alt:r.alt||null,height:r.height||null,width:r.width||null}}))}});function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var $=Object(c.a)(N,c.c.bind(null,"img"));$.imgSrc.required=!1;var q=I(I(I(I(I(I({},j),C),A),$),Object(c.a)(s.props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),M=a.a.extend({name:"BCard",functional:!0,props:q,render:function(t,e){var r,a=e.props,s=e.data,u=e.slots,p=e.scopedSlots,l=a.imgLeft,b=a.imgRight,f=a.imgStart,d=a.imgEnd,g=a.header,m=a.headerHtml,y=a.footer,v=a.footerHtml,h=a.align,O=a.textVariant,P=a.bgVariant,_=a.borderVariant,x=p||{},T=u(),B={},k=t(),N=t();if(a.imgSrc){var E=t(D,{props:Object(c.b)($,a,c.d.bind(null,"img"))});a.imgBottom?N=E:k=E}var I=t(),q=Object(i.a)("header",x,T);(q||g||m)&&(I=t(S,{props:Object(c.b)(C,a),domProps:q?{}:Object(o.a)(m,g)},Object(i.b)("header",B,x,T)));var M=Object(i.b)("default",B,x,T);a.noBody||(M=t(w,{props:Object(c.b)(j,a)},M));var L=t();return(Object(i.a)("footer",x,T)||y||v)&&(L=t(V,{props:Object(c.b)(A,a),domProps:q?{}:Object(o.a)(v,y)},Object(i.b)("footer",B,x,T))),t(a.tag,Object(n.a)(s,{staticClass:"card",class:(r={"flex-row":l||f,"flex-row-reverse":(b||d)&&!(l||f)},H(r,"text-".concat(h),h),H(r,"bg-".concat(P),P),H(r,"border-".concat(_),_),H(r,"text-".concat(O),O),r)}),[k,I,M,L,N])}})},381:function(t,e,r){"use strict";r.r(e);var n=r(347),a=r(349),o=r(346);function i(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}var c={name:"MainPage",components:{PersonCard:a.a,ActiveCard:o.a},data:function(){return{personsAtPage:[],activePerson:{},pageNumber:1}},props:{title:String},methods:{getInfo:function(){var t=this;return function(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){function o(t){i(s,n,a,o,c,"next",t)}function c(t){i(s,n,a,o,c,"throw",t)}var s=t.apply(e,r);o(void 0)}))}}(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.getPersonsAtPage(t.pageNumber);case 2:t.personsAtPage=e.sent,t.activePerson=t.personsAtPage[0];case 4:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.getInfo()},watch:{pageNumber:function(){""===this.pageNumber&&(this.pageNumber=1),30<this.pageNumber&&(this.pageNumber=1),1>this.pageNumber&&(this.pageNumber=30),this.getInfo()}}},s=r(64),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"control-wrapper mt-3 mb-2"},[r("button",{staticClass:"button button-half",on:{click:function(e){t.pageNumber--}}},[t._v("\n            Prev\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pageNumber,expression:"pageNumber"}],staticClass:"page-number text-center mx-2 bg-dark text-light",attrs:{type:"number"},domProps:{value:t.pageNumber},on:{input:function(e){e.target.composing||(t.pageNumber=e.target.value)}}}),t._v(" "),r("button",{staticClass:"button button-half",on:{click:function(e){t.pageNumber++}}},[t._v("\n            Next\n        ")])]),t._v(" "),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{key:t.pageNumber,staticClass:"d-block d-md-flex align-items-start flex-column flex-md-row"},[t.activePerson.name?r("active-card",{staticClass:"d-flex flex-row flex-md-column m-0 mb-2 mr-md-2",attrs:{person:t.activePerson}}):t._e(),t._v(" "),t.personsAtPage.length?r("div",{staticClass:"grid"},t._l(t.personsAtPage,(function(e){return r("person-card",{key:e.id,attrs:{person:e},on:{newActive:function(e){t.activePerson=e}}})})),1):t._e()],1)])],1)}),[],!1,null,null,null);e.default=u.exports}}]);