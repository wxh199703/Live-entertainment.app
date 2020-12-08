<template>
  <div class="goodinfo">


      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="after">
            <div class="animation" v-show="flag"></div>
      </transition>
      
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
                    
                        <p style="display: flex;">
                            <span style="line-height: 35px; height: 35px;">购买数量：</span>
                            <nobox :max="goodlist.stock_quantity" @func="getSelectedCount"></nobox>
                        </p>

                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
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
                    <mt-button type="danger" size="large" plain @click="detail">图文介绍</mt-button>
                    <mt-button type="primary" size="large" plain @click="getcomment">商品评论</mt-button>
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
            flag:false,
            photo: [],
            goodlist: {},
            selectedCount: 1
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
        },

        detail () {
            // console.log ('err')
            this.$router.push("/home/goodsdesc/" + this.goodlist.id)
        },

        getcomment () {
            this.$router.push("/home/goodscomment/" + this.goodlist.id)
        },

        add () {
            this.flag=!this.flag;

            this.$store.commit('add', { id: this.id, count: this.selectedCount, selected: true, price: this.goodlist.sell_price})
        },

        getSelectedCount(c) {
      // 获取选择的商品的数量
      // console.log("父组件中拿到了传递过来的count值为：" + c);
      // 把 用户选择的最新的数量值，保存到 data 中，方便用户点击加入购物车按钮时候，把数量值同步到 徽标中
            this.selectedCount = c;
        },

        beforeEnter (el) {
            el.style.transform= "translate(0, 0)"
        },

        enter (el, done) {


            

            el.offsetWidth;

            const ballPos=el.getBoundingClientRect()
            
            const badge=document.getElementById("badge").getBoundingClientRect()

            const left=badge.left-ballPos.left;

            const top=badge.top-ballPos.top

            el.style.transform= "translate("+left+"px,"+top+"px)";
            el.style.transition= "all 2s cubic-bezier(.46,-0.46,1,.53)";
            



            done ()
        },

        after (el) {
            this.flag=!this.flag
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


    .animation {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        background: #000;
        z-index: 50;
        left: 152px;
        top: 370px;
        // transform: translate(87px, 250px);
    }
</style>