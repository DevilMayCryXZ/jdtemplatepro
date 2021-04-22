<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="backText">返回</block>
			<block slot="content">测试页面</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		name: "router1",
		data() {
			return {

			}
		},
		onLoad(opt) {
			
		},
		methods: {

		}
	}
</script>

<style>

</style>
