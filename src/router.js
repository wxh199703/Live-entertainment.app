



import VueRouter from 'vue-router'



import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopContainer from './components/tabbars/ShopContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'

const router= new  VueRouter({
    routes:    [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shop', component: ShopContainer},
        { path: '/search', component: SearchContainer},
    ],
    linkActiveClass: 'mui-active'
})

export default router