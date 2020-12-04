<template>
    <div>

        <!-- 轮播图区域 -->
        <swiper :lunbotu="lunbotu" :imgname="'img'" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../image/1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../image/2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
		                    <img src="../../image/3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>



<script>

import swiper from '../sub-components/Swiper.vue'
export default {
    data () {
        return {
            lunbotu: []
        }
    },
    
    components: {
        swiper
    },

    created () {
        this.getlunboto()
    },
    methods: {
        async getlunboto () {
           const {data} = await this.$http.get('/api/getlunbo');
        //    console.log(data)
        
        if(data.status ===0 ) {
            this.lunbotu=data.message
        }
        }
    }
}
</script>







<style lang="scss" scope="">
    
    






   .mui-grid-view {
       li {
           img {
               width: 60px;
               height: 60px;
           }
       }
   }

    .mui-grid-view.mui-grid-9 {
       background-color: #fff;
   }

   .mui-grid-view.mui-grid-9 .mui-table-view-cell {
       border: none;
   }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 12px;
    }
</style>


