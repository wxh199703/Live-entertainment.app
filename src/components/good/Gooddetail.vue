<template>
 <div>
     <h1 class="title">{{detail.title}}</h1>
     <hr>
     <div class="content" v-html="detail.content"></div>
 </div>
</template>

<script>
export default {
    data () {
        return {
            detail: {}
        }
    },

    methods: {


        async getGoodetail () {
            const {data} = await this.$http.get('/api/goods/getdesc/' + this.id)
            if (data.status === 0 ) return (this.detail=data.message[0])
        }
    },

    created () {
        this. getGoodetail ()
    },

    props: ['id']
}
</script>

<style lang="scss" scoped>



    .title {
        font-size: 20px;
        margin: 10px 0;
        color: blue;
        text-align: center;
    }

    .content {


        img {
            width: 100%;
        }
    }
</style>