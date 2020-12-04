<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span :class="['mui-control-item', item.id === 0 ? 'mui-active' : ''] " v-for="item in category" :key="item.id" @click="getPoto (item.id)">
							{{item.title}}
						</span>
					</div>
				</div>

		</div>

        <ul>
            <router-link  tag="li" v-for="item in photo " :key="item.id" :to="'/home/photoinfo' + item.id">
                <img v-lazy="item.img_url">
                <div class="duction">
                    <h1>{{item.title}}</h1>
                    <span>{{item.zhaiyao}}</span>
                </div>

            </router-link>
        </ul>
    </div>
</template>

<script>

import mui from '../../lib/mui-ui/js/mui.js'



export default {
    data () {
        return {
            category: [],
            photo: []
        }
    },

    created () {



        this.getPotoCate()
        



        this.getPoto(0)
    },

    methods: {

        async getPotoCate () {
            const {data} = await this.$http.get('/api/getimgcategory');
            if (data.status === 0 ) {

                data.message.unshift({    title: '全部', id: 0})
                this.category=data.message
            }
        },

        async getPoto (id) {
            const {data} = await this.$http.get('/api/getimages/' + id);
            if (data.status === 0 ) {

                // data.message.unshift({    title: '全部', id: 0})
                this.photo=data.message
                // console.log (data)
            }
        }
    },

    mounted () {
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="scss" scoped>
    
    .mui-slider {
        touch-action: pan-x;
    }

    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    .duction {
        position: absolute;
        bottom: 0;
        max-height: 86px;
        background-color: rgba(0,0,0, 0.5);

        h1 {
            color: #fff;
            font-size: 12px;
        }

        span {
            color: #fff;
            font-size: 12px;
            text-align: left;
            text-indent: 2em;
            display: inline-block;
        }
    }

    ul {

        // background: #000;
        margin: 0;
        padding: 10px;
        li {

            background: #ccc;
            text-align: center;
            margin-top: 10px;
            box-shadow: 0 0 7px gray;
            position: relative;
            img {
                vertical-align: middle;
                width: 100%;
            }
        }
    }
</style>