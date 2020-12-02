



import VueRouter from 'vue-router'



import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopContainer from './components/tabbars/ShopContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import NewsLis from './components/news/NewsList.vue'
import Newconter from './components/news/Newconter.vue'
import PhotoList from './components/photos/PhotoList.vue'

const router= new  VueRouter({
    routes:    [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shop', component: ShopContainer},
        { path: '/search', component: SearchContainer},
        { path: '/home/newslist', component: NewsLis},
        { path: '/home/newconter/:id', component: Newconter, props: true},
        {   path: '/home/photolist', component: PhotoList}
    ],
    linkActiveClass: 'mui-active'
})

export default router