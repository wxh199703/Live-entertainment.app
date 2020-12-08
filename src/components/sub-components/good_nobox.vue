<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox" @change="countChanged" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
    </div>
</template>

<script>







import mui from "../../lib/mui-ui/js/mui.js"
export default {
    data () {
        return {

        }
    },

    props: ['max'],

    watch: {
        max: function (newval, oldval) {
            mui(".mui-numbox").numbox().setOption('max', newval)
        }
    },

    methods: {
        countChanged() {
      // 获取选择的商品数量
        const val = this.$refs.nobox.value;
        console.log(val)
        // 每当 nobox 子组件中的 count 变化之后，要立即把 最新的数量值，传递给goodsinfo父组件， 这样，每当我们点击 【加入购物车】按钮时候，就能立即把 最新的 count 值，同步到 购物车的徽标中
        // 这样就涉及到了父子组件传值，子组件向父组件传递数据
        this.$emit("func", parseInt(val));
    }
    },

    mounted () {
        mui(".mui-numbox").numbox()
    },

}
</script>

<style>

</style>