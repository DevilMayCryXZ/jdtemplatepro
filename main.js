import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue' // 标题栏
Vue.component('cu-custom',cuCustom)

import store from './store'
import {
	router,
	RouterMount
} from './router.js'
Vue.use(router)

// 过滤器
import formatDate from 'assets/js/date.js'
import formatRichText from 'assets/js/image.js'
import formatNum from 'assets/js/number.js'
Vue.filter('formatDate', formatDate.formatDate); // 格式化时间
Vue.filter('formatRichText', formatRichText.formatRichText); // 格式化图片大小
Vue.filter('formatNum', formatNum.formatNum); // 格式化数字

// 加载页面
import requestLoading from './pages/common/requestLoading.vue';
//组件挂载到全局，方便每个页面使用
Vue.component('request-loading', requestLoading);
//挂载全局显示/隐藏请求加载动画
function showLoading(){
	store.commit('request_show_loading');
}
function hideLoading(){
	store.commit('request_hide_loading');
}
Vue.prototype.$showLoading = showLoading; //全局显示动画可以 this.$showLoading();
Vue.prototype.$hideLoading = hideLoading; //全局隐藏动画可以 this.$hideLoading();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



