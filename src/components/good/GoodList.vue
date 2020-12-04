<template>
  <div>
      
      <div class="good-list">
          <router-link  
            tag="div" class="good-item" v-for="item in goodlist" :key="item.id" :to="'/home/goodinfo/' + item.id">
              <img :src="item.img_url" alt="">
              <h1 class="title">
                  {{item.title}}
              </h1>
              <div class="info">
                  <p class="price">
                    <span class="new">￥ {{item.sell_price}}</span>
                    <span class="old">￥ {{ item.market_price}}</span>
                  </p>
                  <p class="sell">
                      <span>热卖中</span>
                      <span>剩{{item.stock_quantity}}台</span>
                  </p>
              </div>
          </router-link>




          <mt-button type="danger" size="large" @click="getGoodlist">加载更多</mt-button>




          



      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            page: [],
            goodlist: []
        }
    },











    created () {
        this.getGoodListpage()
    },

    methods: {

        async getGoodListpage () {
            const {data} = await this.$http.get('/api/getgoods?pageindex=' + this.page);

            if (data.status === 0    ) return (this.goodlist=this.goodlist.concat(data.message))
            // if (data.status === 0    ) {
            //     console.log(data.message)
            // } 
            
        },

        getGoodlist () {
            this.page++;
            this.getGoodListpage()
        }
    }
}
</script>

<style lang="scss" scoped>
    







    .good-list {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        .good-item {
            flex-direction: column;
            justify-content: space-between;
            display: flex;
            border: 1px solid #ccc;
            width: 49%;
            box-shadow: 0 0 7px #ccc;

            padding: 2px;
            margin-bottom: 7px;
            img {
                min-height: 170px;
                width: 100%;
            }



            


            .title {
                font-size: 12px;
            }




            .info {
                background: #ddd;

                overflow: hidden;
                
                p {
                    margin: 3px;
                }


                .price {


                    .new {
                        font-size: 16px;
                        font-weight: bold;
                        color: rgb(0, 0, 0);
                        margin-right: 10px;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                    }
                }



                .sell {
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        
    }
</style>