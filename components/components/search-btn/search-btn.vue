<template>
	<view class="searchBox">
		<view class="searchBody">
			<input :placeholder="placeholder" v-model="val" />
			<view>
				<FontAwesome stackIndex="1" fw type="fas fa-search" @click="sendKey"></FontAwesome>
			</view>
		</view>
	</view>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		components:{
			FontAwesome
		},
		props: {  
			placeholder: {
				type: String,
				default: "请输入关键字"
			}
		},
		data() {
			return {
				val: ""
			};
		},
		methods: {
			sendKey () {
				this.$emit("myEve", {keyWord: this.val});
			}
		}
	}
</script>

<style lang="scss">
	.searchBox {
		background-color: #f5f5f5;
		padding: 22rpx 0;
		.searchBody {
			display: flex;
			width: 540rpx;
			margin: 0 auto;
			height: 70rpx;
			overflow: hidden;
			box-sizing: border-box;
			input {
				width: 456rpx;
				line-height: 70rpx;
				height: 70rpx;
				text-indent: 10px;
				border-right: 1px solid #ddd;
				border: 1px solid #ddd;
				box-sizing: border-box;
				border-radius: 35rpx 0 0 35rpx;
				padding-left: 5px;
				background-color: #fff;
				font-size: 28rpx;
			}
			view {
				flex: 1 0 auto;
				position: relative;
				background-color: $theme-color;
				color: #fff;
				height: 100%;
				line-height: 68rpx;
				border-radius: 0 35rpx 35rpx 0;
			}
		}
	}
	
</style>
