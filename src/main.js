

import Vue from '../node_modules/vue/dist/vue'

import './globalConfig.js'

//配置路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'




import App from './components/App.vue'

const vm= new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    render: c =>   c(App),
    router
})