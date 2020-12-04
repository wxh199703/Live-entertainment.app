<template>
    <div class="app-container">
        <mt-header fixed title="生活娱乐">
            <p slot="left">
                <mt-button icon="back">返回</mt-button>
            </p>
        </mt-header>

		<transition>
		
        <router-view></router-view>

		</transition>
        
        <!-- 底部选项卡 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>



<script>
export default {
    
}
</script>

<style lang="scss" scope>
    .app-container {
        padding: 40px 0 50px 0;

		overflow: hidden;
    }

	.v-enter {
		opacity: 0;

		transform: translateX(100%);
	}

	.mint-header {
		z-index: 2;
	}

	.mui-bar-tab .item.mui-active {
    	color: #007aff;
	}

	.mui-bar-tab .item {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
    }

	.mui-bar-tab .item .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.mui-bar-tab .item .mui-icon ~ .mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.v-leave {
		opacity: 0;

		transform: translateX( -100% );

		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.4s ease;
	}
</style>