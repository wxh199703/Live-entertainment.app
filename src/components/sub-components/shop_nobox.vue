<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="init" ref="nobox" @change="countChanged" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
    </div>
</template>

<script>






import { mapMutations } from 'vuex'
import mui from "../../lib/mui-ui/js/mui.js"
export default {
    data () {
        return {

        }
    },


   

    methods: {
        countChanged() {
      // 获取选择的商品数量
            const val = parseInt(this.$refs.nobox.value)


            this.updateGoodCount({id: this.id, count: val})
        },

        ...mapMutations(['updateGoodCount']),
    },


    props: ['init', 'id'],

    mounted () {
        mui(".mui-numbox").numbox()
    },

}
</script>

<style>

</style>