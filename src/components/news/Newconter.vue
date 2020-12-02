<template>
    <div class="main">
       <h3>{{newconter.title}}</h3>
       <p>
           <span>发表时间：{{ newconter.time}}</span>
           <span>点击次数：{{ newconter.click}}</span>
       </p>
       <hr>
       <div class="conten" v-html="newconter.content"></div>

        <comment :newid="id"></comment>
    </div>
</template>






<script>

import comment from '../sub-components/Comment.vue'



export default {
    data () {
        return {
            newconter: {}
        }
    },

    


    methods: {

        async getNewconter () {
            const {data} = await this.$http.get("/api/getnew/"+ this.id);
            if (data.status ===0 ) return ( this.newconter = data.message[0])
        }
    },

    created () {
        this.getNewconter()
    },

    props: ['id'],

    components: {
        comment
    }
}
</script>




<style lang="scss" scoped>
    
   




   .main {
       



       padding: 5px;
       h3 {
           font-size: 16px;
           text-align: center;
           color: #000;
       }

       p {
           display: flex;
           color: #26a2ff;
           justify-content: space-between;
       }
   }


</style>