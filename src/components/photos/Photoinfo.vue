<template>
    <div class="duction">
        <h1>{{photoinfo.title}}</h1>
        <p>
            <span>发表时间： {{photoinfo.add_time | dateFormat}}</span>
            <span>点击: {{photoinfo.click}}次</span>
        </p>

        <hr>
        

        <div class="thumbs">
            <!-- <img class="preview-img" v-for="(item, index) in photolist" height="100" :src="item.src" @click="$preview.open(index, photolist)"> -->
            <!-- <img class="preview-img" v-for="(item, index) in photolist" :src="item.src" height="100" @click="$preview.open(index, photolist)" :key="index"> -->
            <vue-preview :slides="photolist"></vue-preview>
        </div>
        


        <div class="conten" v-html="photoinfo.content"></div>


        <comment :newid="id"></comment>
    </div>
</template>

<script>





import comment from '../sub-components/Comment.vue'
export default {
    data () {
        return {
            photoinfo: {},
            photolist: []
        }
    },

    created () {


        


        this.getPhotoinfo()

        this.getphotolist()
    },

    methods: {

        async getPhotoinfo () {
            const { data } = await this.$http.get('/api/getimageinfo/' + this.id)

            if (data.status === 0   ) return (this.photoinfo = data.message[0])
            
        },

        async getphotolist () {
            const { data } = await this.$http.get('/api/getthumimages/' + this.id)

            if (data.status === 0   ) {

                data.message.forEach(item => {
                    item.msrc = item.src;
                    item.src = item.src
                    item.w = 600;
                    item.h = 400;
                })

                this.photolist = data.message
            }

        },
    },

    props: ["id"],



    components: {
        comment
    }
}
</script>

<style lang="scss" scoped>
    



    .duction {



        padding: 3px;

        h1 {
            font-size: 12px;
            color: blue;
            text-align: center;
        }
        p {
            display: flex;
            font-size: 12px;
            justify-content: space-between;
            padding: 0;
            margin: 0;
        }

        .conten {
            font-size: 12px;
        }
    }


    .thumbs {
        /deep/ .my-gallery {
            display: flex;
            flex-wrap: wrap;
            figure {
                width: 30%;
                margin: 5px;
                img {
                    width: 100%;
                    box-shadow: 0 0 8px #ddd;
                    border-radius: 5px;
                }
            }
        }
    }
</style>