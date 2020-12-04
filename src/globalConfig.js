import Vue from '../node_modules/vue/dist/vue'

//全局配置MintUI
import MintUI from 'mint-ui'


import 'mint-ui/lib/style.css'


Vue.use(MintUI)

//全局配置vue-preview
import VuePreview from 'vue-preview'
 

Vue.use(VuePreview)


//配置Mui
import './lib/mui-ui/css/mui.css'

import './lib/mui-ui/css/icons-extra.css'

//定义全局的时间过滤器

import './filters.js'


//配置axios
import axios from 'axios'





Vue.prototype.$http=axios.create ({
    baseURL: 'http://api.cms.liulongbin.top/'
})