<template>
  <div class="goodinfo">
      <div class="mui-card">
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotu="photo" :imgname="'src'"></swiper>
					</div>
				</div>
				
		</div>

        <div class="mui-card">
				<div class="mui-card-header">{{goodlist.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            <span style="margin-right: 10px;"><del>市场价：￥{{goodlist.market_price}}</del></span>
                            <span>销售价：￥{{goodlist.sell_price}}</span>
                        </p>
                        
                        <p>
                            购买数量：<nobox :max="goodlist.stock_quantity"></nobox>
                        </p>

                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
					</div>
				</div>
				
		</div>

        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodlist.goods_no}}</p>
                        <p>库存数量：{{goodlist.stock_quantity}}</p>
                        <p>上架时间：{{goodlist.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer comment">
                    <mt-button type="danger" size="large" plain>图文介绍</mt-button>
                    <mt-button type="primary" size="large" plain>商品评论</mt-button>
                </div>
			</div>
  </div>
</template>

<script>


import nobox from '../sub-components/good_nobox.vue'

import swiper from '../sub-components/Swiper.vue'
export default {
    data () {
        return {
            photo: [],
            goodlist: {}
        }
    },






    methods: {

        async getlunbotu () {

            const { data } = await this.$http.get('/api/getthumimages/' + this.id)

            if (data.status === 0) return (this.photo=data.message)
        },

        async getGoodlist () {
            const {data} = await this.$http.get('/api/goods/getinfo/' + this.id)
            if (data.status === 0 )  return (this.goodlist=data.message[0])
        }
    },


    components: {
        swiper,
        nobox
    },




    created () {

        this.getlunbotu()
        this.getGoodlist()
    },


    props: ['id']
}
</script>

<style lang="scss" scoped>



    .goodinfo {
        background: #ddd;
        overflow: hidden;
    }

    .comment {
        flex-direction: column;
        


        button + button {
            margin-top: 15px;
        }
    }
</style>