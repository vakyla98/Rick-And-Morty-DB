(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n="undefined"!=typeof window,o="undefined"!=typeof document,i="undefined"!=typeof navigator,a=n&&o&&i,l=a?window.navigator.userAgent.toLowerCase():"";l.indexOf("jsdom"),/msie|trident/.test(l),function(){var e=!1;if(a)try{var t={get passive(){e=!0}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}}(),a&&("ontouchstart"in document.documentElement||navigator.maxTouchPoints),a&&Boolean(window.PointerEvent||window.MSPointerEvent),a&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&window.IntersectionObserverEntry.prototype}).call(this,r(125))},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return tt}));var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=/-(\w)/g,i=/:(.*)/,a=/;(?![^(]*\))/g;function l(e,t){return t?t.toUpperCase():""}function u(e){for(var t,r={},n=0,u=e.split(a);n<u.length;n++){var c=u[n].split(i),s=c[0],f=c[1];(s=s.trim())&&("string"==typeof f&&(f=f.trim()),r[(t=s,t.replace(o,l))]=f)}return r}var c=r(60).a,s=function(e){return Array.isArray(e)},f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.prototype.concat.apply([],t)};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e){return Object.freeze(e)},h=function(e){return Object.keys(e)},m=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},g=function(e){return null!==e&&"object"===v(e)},O=function(e){return"[object Object]"===Object.prototype.toString.call(e)},S=y({SPACE:32,ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35,TAB:9,SHIFT:16,CTRL:17,BACKSPACE:8,ALT:18,PAUSE:19,BREAK:19,INSERT:45,INS:45,DELETE:46});function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return s(t)?t.reduce((function(t,r){return[].concat(B(t),[e(r,r)])}),[]):O(t)?h(t).reduce((function(r,n){return j(j({},r),{},P({},n,e(t[n],t[n])))}),{}):r},A=function(e){return e},k=r(329);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function N(e){var t=M();return function(){var r,n=$(e);if(t){var o=$(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return L(this,r)}}function L(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){var t="function"==typeof Map?new Map:void 0;return(R=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return V(e,arguments,$(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),I(n,e)})(e)}function V(e,t,r){return(V=M()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&I(o,r.prototype),o}).apply(null,arguments)}function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=k.b?window:{},_=k.b?F.Element:function(e){D(r,e);var t=N(r);function r(){return x(this,r),t.apply(this,arguments)}return r}(R(Object));k.b&&F.HTMLElement,k.b&&F.SVGElement,k.b&&F.File;function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var H=function(e){return z(e)},q=function(e){return void 0===e},U=function(e){return null===e},G=function(e){return q(e)||U(e)},J=function(e){return"function"===H(e)},K=function(e){return"boolean"===H(e)},Y=function(e){return"string"===H(e)},W=function(e){return e instanceof Event},Q=/\[(\d+)]/g,X=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!(t=s(t)?t.join("."):t)||!g(e))return r;if(t in e)return e[t];var n=(t=String(t).replace(Q,".$1")).split(".").filter(A);return 0===n.length?r:n.every((function(t){return g(e)&&t in e&&!G(e=e[t])}))?e:U(e)?null:r},Z=function(e){var t,r,n=(t=null,Object.create(t,r));return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=JSON.stringify(r);return n[i]=n[i]||e.apply(null,r)}},ee=function e(t){return h(t).forEach((function(r){var n=t[r];t[r]=n&&(O(n)||s(n))?e(n):n})),y(t)}({breakpoints:["xs","sm","md","lg","xl"],formControls:{size:void 0},BAlert:{dismissLabel:"Close",variant:"info"},BAvatar:{variant:"secondary",badgeVariant:"primary"},BBadge:{variant:"secondary"},BButton:{size:void 0,variant:"secondary"},BButtonClose:{content:"&times;",textVariant:void 0,ariaLabel:"Close"},BCalendar:{labelPrevDecade:"Previous decade",labelPrevYear:"Previous year",labelPrevMonth:"Previous month",labelCurrentMonth:"Current month",labelNextMonth:"Next month",labelNextYear:"Next year",labelNextDecade:"Next decade",labelToday:"Today",labelSelected:"Selected date",labelNoDateSelected:"No date selected",labelCalendar:"Calendar",labelNav:"Calendar navigation",labelHelp:"Use cursor keys to navigate calendar dates"},BCardSubTitle:{subTitleTextVariant:"muted"},BCarousel:{labelPrev:"Previous Slide",labelNext:"Next Slide",labelGotoSlide:"Goto Slide",labelIndicators:"Select a slide to display"},BDropdown:{toggleText:"Toggle Dropdown",size:void 0,variant:"secondary",splitVariant:void 0},BFormDatepicker:{labelPrevDecade:void 0,labelPrevYear:void 0,labelPrevMonth:void 0,labelCurrentMonth:void 0,labelNextMonth:void 0,labelNextYear:void 0,labelNextDecade:void 0,labelToday:void 0,labelSelected:void 0,labelNoDateSelected:void 0,labelCalendar:void 0,labelNav:void 0,labelHelp:void 0,labelTodayButton:"Select today",labelResetButton:"Reset",labelCloseButton:"Close"},BFormFile:{browseText:"Browse",placeholder:"No file chosen",dropPlaceholder:"Drop files here"},BFormRating:{variant:null,color:null},BFormTag:{removeLabel:"Remove tag",variant:"secondary"},BFormTags:{addButtonText:"Add",addButtonVariant:"outline-secondary",duplicateTagText:"Duplicate tag(s)",invalidTagText:"Invalid tag(s)",placeholder:"Add tag...",tagRemoveLabel:"Remove tag",tagRemovedLabel:"Tag removed",tagVariant:"secondary"},BFormText:{textVariant:"muted"},BFormTimepicker:{labelNoTimeSelected:void 0,labelSelected:void 0,labelHours:void 0,labelMinutes:void 0,labelSeconds:void 0,labelAmpm:void 0,labelAm:void 0,labelPm:void 0,labelDecrement:void 0,labelIncrement:void 0,labelNowButton:"Select now",labelResetButton:"Reset",labelCloseButton:"Close"},BFormSpinbutton:{labelDecrement:"Decrement",labelIncrement:"Increment"},BImg:{blankColor:"transparent"},BImgLazy:{blankColor:"transparent"},BInputGroup:{size:void 0},BJumbotron:{bgVariant:void 0,borderVariant:void 0,textVariant:void 0},BLink:{routerComponentName:void 0},BListGroupItem:{variant:void 0},BModal:{titleTag:"h5",size:"md",headerBgVariant:void 0,headerBorderVariant:void 0,headerTextVariant:void 0,headerCloseVariant:void 0,bodyBgVariant:void 0,bodyTextVariant:void 0,footerBgVariant:void 0,footerBorderVariant:void 0,footerTextVariant:void 0,cancelTitle:"Cancel",cancelVariant:"secondary",okTitle:"OK",okVariant:"primary",headerCloseContent:"&times;",headerCloseLabel:"Close"},BNavbar:{variant:null},BNavbarToggle:{label:"Toggle navigation"},BPagination:{size:void 0},BPaginationNav:{size:void 0},BPopover:{boundary:"scrollParent",boundaryPadding:5,customClass:void 0,delay:50,variant:void 0},BProgress:{variant:void 0},BProgressBar:{variant:void 0},BSpinner:{variant:void 0},BSidebar:{bgVariant:"light",textVariant:"dark",shadow:!1,width:void 0,tag:"div",backdropVariant:"dark"},BTable:{selectedVariant:"active",headVariant:void 0,footVariant:void 0},BTime:{labelNoTimeSelected:"No time selected",labelSelected:"Selected time",labelHours:"Hours",labelMinutes:"Minutes",labelSeconds:"Seconds",labelAmpm:"AM/PM",labelAm:"AM",labelPm:"PM",labelIncrement:void 0,labelDecrement:void 0},BToast:{toaster:"b-toaster-top-right",autoHideDelay:5e3,variant:void 0,toastClass:void 0,headerClass:void 0,bodyClass:void 0},BToaster:{ariaLive:void 0,ariaAtomic:void 0,role:void 0},BTooltip:{boundary:"scrollParent",boundaryPadding:5,customClass:void 0,delay:50,variant:void 0}}),te=c.prototype,re=function(e){return te.$bvConfig?te.$bvConfig.getConfigValue(e):C(X(ee,e))},ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?re("".concat(e,".").concat(t)):re(e)||{}},oe=function(){return re("breakpoints")},ie=Z((function(){return oe()})),ae=function(){return C(ie())},le=(Z((function(){var e=ae();return e[0]="",e})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return G(e)?"":s(e)||O(e)&&e.toString===Object.prototype.toString?JSON.stringify(e,null,t):String(e)}),ue=(["button","[href]:not(.disabled)","input","select","textarea","[tabindex]","[contenteditable]"].map((function(e){return"".concat(e,":not(:disabled):not([disabled])")})).join(", "),k.b?window:{}),ce=k.a?document:{},se="undefined"!=typeof Element?Element.prototype:{},fe=se.matches||se.msMatchesSelector||se.webkitMatchesSelector,de=(se.closest,ue.requestAnimationFrame||ue.webkitRequestAnimationFrame||ue.mozRequestAnimationFrame||ue.msRequestAnimationFrame||ue.oRequestAnimationFrame,ue.MutationObserver||ue.WebKitMutationObserver||ue.MozMutationObserver,function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)}),pe=function(e,t){return le(e).toLowerCase()===le(t).toLowerCase()},be=function(e){return de(e)&&e===function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=ce.activeElement;return t&&!e.some((function(e){return e===t}))?t:null}()},ve=function(e,t){return!!de(e)&&fe.call(e,t)},ye=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A;return(s(e)?e.slice():h(e)).reduce((function(e,n){return e[r(n)]=t[n],e}),{})},he=/%2C/g,me=/[!'()*]/g,ge=function(e){return"%"+e.charCodeAt(0).toString(16)},Oe=function(e){return encodeURIComponent(le(e)).replace(me,ge).replace(he,",")},Se=(decodeURIComponent,function(e){if(!O(e))return"";var t=h(e).map((function(t){var r=e[t];return q(r)?"":U(r)?Oe(t):s(r)?r.reduce((function(e,r){return U(r)?e.push(Oe(t)):q(r)||e.push(Oe(t)+"="+Oe(r)),e}),[]).join("&"):Oe(t)+"="+Oe(r)})).filter((function(e){return e.length>0})).join("&");return t?"?".concat(t):""}),we=function(e){return!pe(e,"a")};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Be=function(e){return{handler:function(t,r){for(var n in r)m(t,n)||this.$delete(this.$data[e],n);for(var o in t)this.$set(this.$data[e],o,t[o])}}},Te=function(e,t){return{data:function(){return Pe({},t,{})},watch:Pe({},e,Be(t)),created:function(){this[t]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Pe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this[e])}}},Ce=Te("$attrs","bvAttrs"),Ae=Te("$listeners","bvListeners"),ke=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e=f(e).filter(A);for(var i=0;i<e.length&&!t;i++){var a=e[i];t=n[a]||o[a]}return J(t)?t(r):t},Ee={methods:{hasNormalizedSlot:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(e=f(e).filter(A)).some((function(e){return t[e]||r[e]}))}(e,this.$scopedSlots,this.$slots)},normalizeSlot:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=ke(e,t,this.$scopedSlots,this.$slots);return r?f(r):r}}};function xe(e){return function(e){if(Array.isArray(e))return De(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return De(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return De(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(r),!0).forEach((function(t){Re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ve={to:{type:[String,Object],default:null},append:{type:Boolean,default:!1},replace:{type:Boolean,default:!1},event:{type:[String,Array],default:"click"},activeClass:{type:String},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},routerTag:{type:String,default:"a"}},Me={prefetch:{type:Boolean,default:null},noPrefetch:{type:Boolean,default:!1}},Ie=Le(Le(Le({href:{type:String,default:null},rel:{type:String,default:null},target:{type:String,default:"_self"},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},Ve),Me),{},{routerComponentName:{type:String,default:function(){return ne("BLink","routerComponentName")}}}),$e=c.extend({name:"BLink",mixins:[Ce,Ae,Ee],inheritAttrs:!1,props:Ie,computed:{computedTag:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.to,r=e.disabled,n=e.routerComponentName,o=arguments.length>1?arguments[1]:void 0,i=o.$router;return!i||i&&r||i&&!t?"a":n||(o.$nuxt?"nuxt-link":"router-link")}({to:this.to,disabled:this.disabled,routerComponentName:this.routerComponentName},this)},isRouterLink:function(){return we(this.computedTag)},computedRel:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,r=e.rel;return"_blank"===t&&U(r)?"noopener":r||null}({target:this.target,rel:this.rel})},computedHref:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.href,r=e.to,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"a",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/";if(we(n))return null;if(t)return t;if(r){if(Y(r))return r||i;if(O(r)&&(r.path||r.query||r.hash)){var a=le(r.path),l=Se(r.query),u=le(r.hash);return u=u&&"#"!==u.charAt(0)?"#".concat(u):u,"".concat(a).concat(l).concat(u)||i}}return o}({to:this.to,href:this.href},this.computedTag)},computedProps:function(){var e=this.prefetch;return this.isRouterLink?Le(Le({},ye(Le(Le({},Ve),Me),this)),{},{prefetch:K(e)?e:void 0,tag:this.routerTag}):{}},computedAttrs:function(){var e=this.bvAttrs,t=this.computedHref,r=this.computedRel,n=this.disabled,o=this.target,i=this.routerTag,a=this.isRouterLink;return Le(Le(Le(Le({},e),t?{href:t}:{}),a&&"a"!==i&&"area"!==i?{}:{rel:r,target:o}),{},{tabindex:n?"-1":q(e.tabindex)?null:e.tabindex,"aria-disabled":n?"true":null})},computedListeners:function(){return Le(Le({},this.bvListeners),{},{click:this.onClick})}},methods:{onClick:function(e){var t=arguments,r=W(e),n=this.isRouterLink,o=this.bvListeners.click;r&&this.disabled?(e.stopPropagation(),e.stopImmediatePropagation()):(n&&e.currentTarget.__vue__&&e.currentTarget.__vue__.$emit("click",e),f(o).filter((function(e){return J(e)})).forEach((function(e){e.apply(void 0,xe(t))})),this.$root.$emit("clicked::link",e)),r&&(this.disabled||!n&&"#"===this.computedHref)&&e.preventDefault()},focus:function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{e.focus(t)}catch(e){}be(e)}(this.$el)},blur:function(){!function(e){try{e.blur()}catch(e){}be(e)}(this.$el)}},render:function(e){var t=this.active,r=this.disabled;return e(this.computedTag,Re({class:{active:t,disabled:r},attrs:this.computedAttrs,props:this.computedProps},this.isRouterLink?"nativeOn":"on",this.computedListeners),this.normalizeSlot("default"))}});function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){ze(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var He,qe,Ue=(qe=["event","routerTag"],h(He=Ie).filter((function(e){return-1===qe.indexOf(e)})).reduce((function(e,t){return p(p({},e),{},b({},t,He[t]))}),{}));delete Ue.href.default,delete Ue.to.default;var Ge=_e(_e({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return ne("BButton","size")}},variant:{type:String,default:function(){return ne("BButton","variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),Ue),Je=function(e){var t,r;"focusin"===e.type?(t=e.target,(r="focus")&&de(t)&&t.classList&&t.classList.add(r)):"focusout"===e.type&&function(e,t){t&&de(e)&&e.classList&&e.classList.remove(t)}(e.target,"focus")},Ke=function(e){return function(e){return!(!e.href&&!e.to)}(e)||pe(e.tag,"a")},Ye=function(e){return K(e.pressed)},We=function(e){return!(Ke(e)||e.tag&&!pe(e.tag,"button"))},Qe=function(e){return!Ke(e)&&!We(e)},Xe=function(e){var t;return["btn-".concat(e.variant||ne("BButton","variant")),(t={},ze(t,"btn-".concat(e.size),e.size),ze(t,"btn-block",e.block),ze(t,"rounded-pill",e.pill),ze(t,"rounded-0",e.squared&&!e.pill),ze(t,"disabled",e.disabled),ze(t,"active",e.pressed),t)]},Ze=function(e){return Ke(e)?ye(Ue,e):{}},et=function(e,t){var r=We(e),n=Ke(e),o=Ye(e),i=Qe(e),a=n&&"#"===e.href,l=t.attrs&&t.attrs.role?t.attrs.role:null,u=t.attrs?t.attrs.tabindex:null;return(i||a)&&(u="0"),{type:r&&!n?e.type:null,disabled:r?e.disabled:null,role:i||a?"button":l,"aria-disabled":i?String(e.disabled):null,"aria-pressed":o?String(e.pressed):null,autocomplete:o?"off":null,tabindex:e.disabled&&!r?"-1":u}},tt=c.extend({name:"BButton",functional:!0,props:Ge,render:function(e,t){var r=t.props,o=t.data,i=t.listeners,a=t.children,l=Ye(r),c=Ke(r),s=Qe(r),d=c&&"#"===r.href,p={keydown:function(e){if(!r.disabled&&(s||d)){var t=e.keyCode;if(t===S.SPACE||t===S.ENTER&&s){var n=e.currentTarget||e.target;e.preventDefault(),n.click()}}},click:function(e){r.disabled&&W(e)?(e.stopPropagation(),e.preventDefault()):l&&i&&i["update:pressed"]&&f(i["update:pressed"]).forEach((function(e){J(e)&&e(!r.pressed)}))}};l&&(p.focusin=Je,p.focusout=Je);var b={staticClass:"btn",class:Xe(r),props:Ze(r),attrs:et(r,o),on:p};return e(c?$e:r.tag,function(){for(var e,t,r={},o=arguments.length;o--;)for(var i=0,a=Object.keys(arguments[o]);i<a.length;i++)switch(e=a[i]){case"class":case"style":case"directives":if(Array.isArray(r[e])||(r[e]=[]),"style"===e){var l=void 0;l=Array.isArray(arguments[o].style)?arguments[o].style:[arguments[o].style];for(var c=0;c<l.length;c++){var s=l[c];"string"==typeof s&&(l[c]=u(s))}arguments[o].style=l}r[e]=r[e].concat(arguments[o][e]);break;case"staticClass":if(!arguments[o][e])break;void 0===r[e]&&(r[e]=""),r[e]&&(r[e]+=" "),r[e]+=arguments[o][e].trim();break;case"on":case"nativeOn":r[e]||(r[e]={});for(var f=0,d=Object.keys(arguments[o][e]||{});f<d.length;f++)t=d[f],r[e][t]?r[e][t]=[].concat(r[e][t],arguments[o][e][t]):r[e][t]=arguments[o][e][t];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":r[e]||(r[e]={}),r[e]=n({},arguments[o][e],r[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:r[e]||(r[e]=arguments[o][e])}return r}(o,b),a)}})}}]);