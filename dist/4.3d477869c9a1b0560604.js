(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(n,e,t){"use strict";var r={name:"ActiveCard",props:{person:{type:Object,required:!0}}},a=t(91),o=Object(a.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("p",{staticClass:"active-person__name"},[n._v(n._s(n.person.name))]),n._v(" "),t("img",{staticClass:"active-person__image",attrs:{src:n.person.image}}),n._v(" "),t("p",[n._v("Status: "+n._s(n.person.status))]),n._v(" "),t("p",[n._v("Species: "+n._s(n.person.species))]),n._v(" "),n.person.type.length?t("p",[n._v(n._s(n.person.type))]):n._e(),n._v(" "),t("p",[n._v("Gender: "+n._s(n.person.gender))]),n._v(" "),t("p",[n._v("Location"+n._s(n.person.location.name))])])}),[],!1,null,null,null);e.a=o.exports},319:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r=t(320),a=t.n(r);function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=new(function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.http=e}var e,t,r;return e=n,(t=[{key:"getPersonsAtPage",value:function(n){return a.a.get(this.http+"api/character/?page="+n).then((function(n){return n.data.results})).catch((function(n){throw new Error(n)}))}},{key:"getPersonsById",value:function(n){return a.a.get(this.http+"api/character/"+n).then((function(n){return n.data})).catch((function(n){throw new Error(n)}))}}])&&o(e.prototype,t),r&&o(e,r),n}())("https://rickandmortyapi.com/")},346:function(n,e,t){"use strict";t.r(e);var r=t(319);function a(n,e,t,r,a,o,s){try{var i=n[o](s),c=i.value}catch(n){return void t(n)}i.done?e(c):Promise.resolve(c).then(r,a)}var o={name:"RandomPerson",components:{ActiveCard:t(318).a},data:function(){return{randomPerson:{}}},props:{title:String},methods:{getRandomPerson:function(){var n,e=this;return(n=regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.round(590*Math.random()+1),n.next=3,r.a.getPersonsById(t);case 3:e.randomPerson=n.sent;case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var s=n.apply(e,t);function i(n){a(s,r,o,i,c,"next",n)}function c(n){a(s,r,o,i,c,"throw",n)}i(void 0)}))})()}},beforeMount:function(){this.getRandomPerson()}},s=t(91),i=Object(s.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"main"},[t("h1",{staticClass:"header"},[n._v("\n        Random Person\n    ")]),n._v(" "),t("button",{on:{click:function(e){return n.getRandomPerson()}}},[n._v("Random")]),n._v(" "),t("ActiveCard",{attrs:{person:n.randomPerson}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);