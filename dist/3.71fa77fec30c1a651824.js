(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{327:function(e,t,n){},328:function(e,t,n){"use strict";var r={name:"ActiveCard",props:{person:{type:Object,required:!0}},watch:{}},a=n(94),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"active-person__name"},[e._v(e._s(e.person.name))]),e._v(" "),n("img",{staticClass:"active-person__image",attrs:{src:e.person.image}}),e._v(" "),n("p",[e._v("Status: "+e._s(e.person.status))]),e._v(" "),n("p",[e._v("Species: "+e._s(e.person.species))]),e._v(" "),""!=e.person.type?n("p",[e._v("Type: "+e._s(e.person.type))]):e._e(),e._v(" "),n("p",[e._v("Gender: "+e._s(e.person.gender))]),e._v(" "),n("p",[e._v("Location: "+e._s(e.person.location.name))])])}),[],!1,null,null,null);t.a=s.exports},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(330),a=n.n(r);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.http=t}var t,n,r;return t=e,(n=[{key:"getPersonsAtPage",value:function(e){return a.a.get(this.http+"?page="+e).then((function(e){return e.data.results})).catch((function(e){throw new Error(e)}))}},{key:"getPersonsById",value:function(e){return a.a.get(this.http+e).then((function(e){return e.data})).catch((function(e){throw new Error(e)}))}},{key:"search",value:function(e){return a.a.get(this.http+"?name="+e).then((function(e){return e.data.results})).catch((function(e){throw new Error(e)}))}}])&&s(t.prototype,n),r&&s(t,r),e}())("https://rickandmortyapi.com/api/character/")},331:function(e,t,n){"use strict";var r=n(327);n.n(r).a},332:function(e,t,n){},333:function(e,t,n){"use strict";var r={name:"PersonCard",props:{person:{type:Object,required:!0}}},a=(n(331),n(94)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"person-card",on:{click:function(t){return e.$emit("newActive",e.person)}}},[n("b-card",{attrs:{"img-src":e.person.image,"img-top":"",tag:"article"}},[n("b-card-text",{staticClass:"d-none d-sm-block  person-card__name m-0 text-center "},[e._v("\n            "+e._s(e.person.name)+"\n        ")])],1)],1)}),[],!1,null,null,null);t.a=s.exports},358:function(e,t,n){"use strict";var r=n(332);n.n(r).a},361:function(e,t,n){"use strict";n.r(t);var r=n(329),a=n(333),s=n(328);function c(e,t,n,r,a,s,c){try{var o=e[s](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}var o={name:"SearchPage",components:{PersonCard:a.a,ActiveCard:s.a},data:function(){return{selected:{status:null,gender:null},characterName:"",foundPeople:[],activePerson:{},statusOptions:[{value:null,text:"none"},{value:"alive",text:"Alive"},{value:"dead",text:"Dead"},{value:"unknown",text:"Unknown"}],genderOptions:[{value:null,text:"none"},{value:"female",text:"Female"},{value:"male",text:"Male"},{value:"genderless",text:"Genderless"},{value:"unknown",text:"Unknown"}]}},computed:{filter:function(){var e=[this.characterName];return this.selected.status&&e.push("status="+this.selected.status),this.selected.gender&&e.push("gender="+this.selected.gender),e.join("&")},searchParameters:function(){return{characterName:this.characterName,selected:this.selected}}},methods:{search:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.search(e);case 2:n.foundPeople=t.sent,n.activePerson=n.foundPeople[0];case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(e){c(s,r,a,o,i,"next",e)}function i(e){c(s,r,a,o,i,"throw",e)}o(void 0)}))})()}},beforeMount:function(){this.search(this.filter)},watch:{searchParameters:{deep:!0,handler:function(){this.search(this.filter)}}}},i=(n(358),n(94)),u=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"header"},[e._v("\n        Search\n    ")]),e._v(" "),n("b-form",{staticClass:"search-form"},[n("b-form-input",{attrs:{state:!!e.characterName.length&&null,trim:"",lazy:"",size:"sm",placeholder:"Enter name character"},model:{value:e.characterName,callback:function(t){e.characterName=t},expression:"characterName"}}),e._v(" "),n("b-form-select",{attrs:{options:e.statusOptions,size:"sm"},model:{value:e.selected.status,callback:function(t){e.$set(e.selected,"status",t)},expression:"selected.status"}}),e._v(" "),n("b-form-select",{attrs:{options:e.genderOptions,size:"sm"},model:{value:e.selected.gender,callback:function(t){e.$set(e.selected,"gender",t)},expression:"selected.gender"}})],1),e._v(" "),e.foundPeople.length?n("div",{staticClass:"list"},e._l(e.foundPeople,(function(t){return n("person-card",{key:t.id,staticClass:"list__card",attrs:{person:t},on:{newActive:function(t){e.activePerson=t}}})})),1):n("div",[e._v(e._s(e.foundPeople))]),e._v(" "),e.activePerson.name?n("div",{staticClass:"active-person"},[n("active-card",{attrs:{person:e.activePerson}})],1):e._e()],1)}),[],!1,null,null,null);t.default=u.exports}}]);