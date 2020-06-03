(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{327:function(e,t,n){},328:function(e,t,n){"use strict";var r={name:"ActiveCard",props:{person:{type:Object,required:!0}},watch:{}},a=n(94),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"active-person__name"},[e._v(e._s(e.person.name))]),e._v(" "),n("img",{staticClass:"active-person__image",attrs:{src:e.person.image}}),e._v(" "),n("p",[e._v("Status: "+e._s(e.person.status))]),e._v(" "),n("p",[e._v("Species: "+e._s(e.person.species))]),e._v(" "),""!=e.person.type?n("p",[e._v("Type: "+e._s(e.person.type))]):e._e(),e._v(" "),n("p",[e._v("Gender: "+e._s(e.person.gender))]),e._v(" "),n("p",[e._v("Location: "+e._s(e.person.location.name))])])}),[],!1,null,null,null);t.a=s.exports},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(330),a=n.n(r);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.http=t}var t,n,r;return t=e,(n=[{key:"getPersonsAtPage",value:function(e){return a.a.get(this.http+"?page="+e).then((function(e){return e.data.results})).catch((function(e){throw new Error(e)}))}},{key:"getPersonsById",value:function(e){return a.a.get(this.http+e).then((function(e){return e.data})).catch((function(e){throw new Error(e)}))}},{key:"search",value:function(e){return a.a.get(this.http+"?name="+e).then((function(e){return e.data.results})).catch((function(e){throw new Error(e)}))}}])&&s(t.prototype,n),r&&s(t,r),e}())("https://rickandmortyapi.com/api/character/")},331:function(e,t,n){"use strict";var r=n(327);n.n(r).a},333:function(e,t,n){"use strict";var r={name:"PersonCard",props:{person:{type:Object,required:!0}}},a=(n(331),n(94)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"person-card",on:{click:function(t){return e.$emit("newActive",e.person)}}},[n("b-card",{attrs:{"img-src":e.person.image,"img-top":"",tag:"article"}},[n("b-card-text",{staticClass:"d-none d-sm-block  person-card__name m-0 text-center "},[e._v("\n            "+e._s(e.person.name)+"\n        ")])],1)],1)}),[],!1,null,null,null);t.a=s.exports},359:function(e,t,n){"use strict";n.r(t);var r=n(329),a=n(333),s=n(328);function o(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var i={name:"MainPage",components:{PersonCard:a.a,ActiveCard:s.a},data:function(){return{personsAtPage:[],activePerson:{},pageNumber:1}},props:{title:String},methods:{changePage:function(e){"next"===e?30===this.pageNumber?this.pageNumber=1:this.pageNumber++:1===this.pageNumber?this.pageNumber=30:this.pageNumber--},getInfo:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.getPersonsAtPage(t.pageNumber);case 2:t.personsAtPage=e.sent,t.activePerson=t.personsAtPage[0];case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,c,"next",e)}function c(e){o(s,r,a,i,c,"throw",e)}i(void 0)}))})()}},beforeMount:function(){this.getInfo()},watch:{pageNumber:function(){this.getInfo()}}},c=n(94),u=Object(c.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"header"},[e._v("\n        Rick and Morty DB\n    ")]),e._v(" "),n("button",{on:{click:function(t){return e.changePage("prev")}}},[e._v("Prev")]),e._v(" "),n("button",{on:{click:function(t){return e.changePage("next")}}},[e._v("Next")]),e._v(" "),e.personsAtPage.length?n("div",{staticClass:"list"},e._l(e.personsAtPage,(function(t){return n("PersonCard",{key:t.id,staticClass:"list__card",attrs:{person:t},on:{newActive:function(t){e.activePerson=t}}})})),1):e._e(),e._v(" "),e.activePerson.name?n("div",{staticClass:"active-person"},[n("ActiveCard",{attrs:{person:e.activePerson}})],1):e._e()])}),[],!1,null,null,null);t.default=u.exports}}]);