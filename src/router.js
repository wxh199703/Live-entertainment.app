



import VueRouter from 'vue-router'



import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopContainer from './components/tabbars/ShopContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import NewsLis from './components/news/NewsList.vue'
import Newconter from './components/news/Newconter.vue'
import PhotoList from './components/photos/PhotoLi.vue'
import Photoinfo from './components/photos/Photoinfo.vue'
import GoodList   from './components/good/GoodList.vue'
import Goodinfo from './components/good/Goodinfo.vue'
import Gooddetail from './components/good/Gooddetail.vue'
import Goodimage from './components/good/Goodimage.vue'

const router= new  VueRouter({
    routes:    [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shop', component: ShopContainer},
        { path: '/search', component: SearchContainer},
        { path: '/home/newslist', component: NewsLis},
        { path: '/home/newconter/:id', component: Newconter, props: true},
        {   path: '/home/photolist', component: PhotoList},
        { path: '/home/photoinfo/:id', component: Photoinfo, props: true},
        {     path: '/home/goodlist', component: GoodList},
        { path: '/home/goodinfo/:id', component: Goodinfo, props: true},
        { path: '/home/goodsdesc/:id', component: Gooddetail, props: true},
        { path: '/home/goodscomment/:id', component: Goodimage, props: true}
    ],
    linkActiveClass: 'mui-active'
})

export default router