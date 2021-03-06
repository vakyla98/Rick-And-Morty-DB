import Vue from 'vue'
import router from './router'

import App from './App.vue'

import '@/styles/style.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
