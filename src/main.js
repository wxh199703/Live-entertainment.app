

import Vue from '../node_modules/vue/dist/vue'

//全局配置MintUI
import MintUI from 'mint-ui'


import 'mint-ui/lib/style.css'


Vue.use(MintUI)



//配置Mui
import './lib/mui-ui/css/mui.css'

import './lib/mui-ui/css/icons-extra.css'


//配置axios
import axios from 'axios'





Vue.prototype.$http=axios.create ({
    baseURL: 'http://api.cms.liulongbin.top/'
})

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