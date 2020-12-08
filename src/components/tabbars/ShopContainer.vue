<template>
    <div class="shopcontion"> 
        <div class="goodlist">
            <div class="mui-card" v-for="item in goodlist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner good-item">
						<mt-switch v-model="select[item.id]" @change="changeselsct(item.id, select[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                            <div class="info">
                                <h1>{{item.title}}</h1>
                                <div class="good-info">
                                    <span class="price">￥ {{item.sell_price}}</span>
                                    <nobox :init="counted[item.id]" :id="item.id"></nobox>
                                    <a href="#" @click.prevent="del(item.id)">删除</a>
                                </div>
                                
                            </div>
					</div>
				</div>
			</div>




            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计 (不含运费)</p>
                            <p>已勾选商品<span>{{selectcount}}</span>件, 总价<span>￥ {{amount}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>



<script>


import { mapGetters, mapMutations } from 'vuex'
import nobox from '../sub-components/shop_nobox.vue'
export default {
    data () {
        return {
            goodlist: []
        }
    },

    computed: {
        ...mapGetters(['idstr', 'counted', 'select', 'selectcount', 'amount'])
    },

    created () {
        this.getGoodList()
    },

    methods: {

        ...mapMutations(['delFrom', 'change']),


        async getGoodList () {

            if (this.idstr.length<=0) {
                return 
            }
            const { data } = await this.$http.get('/api/goods/getshopcarlist/'+ this.idstr)
            if ( data.status === 0 ) return (this.goodlist=data.message)
        },

        del (id) {
            this.goodlist.some((item, i) => {
                if (item.id == id) {
                    this.goodlist.splice(i, 1)
                    return true
                }
            });

            this.delFrom(id)
        },

        changeselsct (id, select) {

            this.change({ id, selected: select})
        }
    },



    components: {
        nobox
    }
}
</script>







<style lang="scss" scoped>
    .shopcontion {
        background: #ddd;
        overflow: hidden;

        .good-item {
            display: flex;

            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 12px;
            }


            .info {

                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .good-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
            }
        }
    }
    





    .jiesuan {
        display: flex;
        justify-content: space-between;
    }

    
    
</style>


