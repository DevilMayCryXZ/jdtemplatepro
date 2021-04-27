<template>
	<view class="phone-main" :style="{height: winHeight + 'px'}">
		<view class="phone-main-search">
			<navigator :url="'phone-search?phones=' + phonesEscape" hover-class="none">
				<input class="phone-main-input" type="text" :placeholder="placeholder" @input="handleInput" />
			</navigator>
		</view>
		<view class="phoneDirectory">
			<phone-list 
			:phones="list" 
			:letter="letter"
			:scrollAnimationOFF="scrollAnimationOFF" 
			@change="handlePhoneListIndex"
			@reset="handleReset"
			@handleClick="handleClick"
			>
			</phone-list>
			<phone-alphabet 
			:phones="list"
			:phoneListIndex="phoneListIndex"
			@change="handleDatasetKey" 
			@scrollAnimationOFF="handleScrollAnimationOFF"
			@reset="handleReset"
			>
			</phone-alphabet>
		</view>
	</view>
</template>

<script>
	import phoneList from './phone-list.vue'
	import phoneAlphabet from './phone-alphabet.vue'
	
	export default {
		name:"phone-directory",
		components:{
			phoneList,
			phoneAlphabet
		},
		props:{
			phones:Object,
			default:false,
			disabled: String,
			placeholder: {
				type: String,
				default: "请输入要搜索的关键字",
			}
		},
		data () {
			return {
				keyword:'',
				list:{},
				timer:null,
				winHeight:0,
				letter : 'A',
				scrollAnimationOFF:true,
				phoneListIndex:'A',
				reset:true
			}
		},
		computed:{
			phonesEscape () {
				return escape(JSON.stringify(this.phones))
			}
		},
		watch:{
			keyword () {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = this.phones;
					return
				}
				const list = {};
				this.timer = setTimeout(()=>{
					for (let i in this.phones){
						this.phones[i].forEach((item)=>{
							if(item.spell.indexOf(this.keyword) > -1||item.name.indexOf(this.keyword) > -1){
								if (!list[i]) {
									list[i] = [];
								}
								list[i].push(item);
							}
						})
					}
					this.list = list;
				},100)
			}
		},
		mounted () {
			let windowHeight = uni.getSystemInfoSync().windowHeight
			
			// #ifndef APP-PLUS
			this.winHeight = windowHeight
			//#endif
			
			//#ifdef APP-PLUS
			this.winHeight = windowHeight - 56
			//#endif
			
 			if(!this.phones){
				uni.showToast({
					title: '没有数据',
					icon:"none",
					mask: false,
					duration: 1500
				})
			}else {
				this.list = this.phones;
			}
		},
		methods:{
			handleInput (e) {
				this.keyword = e.detail.value
			},
			handleClick (e) {
				this.$emit('paramClick',e)
			},
			handleDatasetKey (val) {
				this.letter = val
			},
			handleScrollAnimationOFF (val) {
				this.scrollAnimationOFF = val
			},
			handlePhoneListIndex(val){
				if(this.reset){
					this.phoneListIndex = val
				}
			},
			handleReset (val){
				if(val){
					this.letter = ''
				}
				this.reset = val
			}
			
		}
	}
</script>

<style>
.phone-main{
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.phoneDirectory{
	display: flex;
	flex-direction: row;
}
phone-list {
	width: 690rpx;
}
.phone-main-search{
	background-color: #fff;
	padding: 10rpx 20rpx;
	border-bottom: 1px solid #e5e5e5;
}

.phone-main-input{
	font-size:28rpx;
	border: 1px solid #e5e5e5;
	border-radius: 3px;
	padding: 10rpx 20rpx 10rpx 20rpx;
}
</style>
