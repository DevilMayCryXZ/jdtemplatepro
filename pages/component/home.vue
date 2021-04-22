<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/componentBg.png" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<view hover-class='none' :url="'/pages/component/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index" @click="aa">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [
					{
						title: '操作条',
						name: 'router1',
						color: 'purple',
						cuIcon: 'vipcard'
					}
				]
			};
		},
		methods: {
			aa () {
				this.$Router.push(
					{ 
						path: '/pages/component/router1', 
						query: { 
							userId: '123'
						}
					}
				)
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
