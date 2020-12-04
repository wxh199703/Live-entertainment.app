<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
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

    },

    mounted () {
        mui(".mui-numbox").numbox()
    },

}
</script>

<style>

</style>