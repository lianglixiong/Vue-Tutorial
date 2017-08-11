//引入vue框架
import Vue from "vue";
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//axios的ajax封装库
import axios from "axios";
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
//导入JS
import MuseUI from 'muse-ui';
//导入样式
import 'muse-ui/dist/muse-ui.css';
//import "mui";
import "mui/dist/css/mui.css";
import mui from "mui/dist/js/mui.js";
window.mui = mui;
Vue.use(MuseUI)
Vue.use(Vuex);
//通过 Vue.use()明确地安装路由功能
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
	//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
//拥入weui样式库
import "weui"
//引入组件
import home from "./components/routes/home.vue";
//选项卡
import nav1 from "./components/navs/nav1.vue";
import nav2 from "./components/navs/nav2.vue";
import nav3 from "./components/navs/nav3.vue";
//列表
import list1 from "./components/list/list1.vue";
import list2 from "./components/list/list2.vue";

import app from "./components/routes/app.vue";
import muicp from "./components/routes/mui.vue";

var router = new VueRouter({
	routes: [{
		path: '/index',
		component: home,
		children: [{
			path: 'tab1',
			component: nav1,
			children: [{
				path: 'list1',
				component: list1,
			}, {
				path: 'list2',
				component: list2,
			}]
		}, {
			path: 'tab2',
			component: nav2
		}, {
			path: 'tab3',
			component: nav3
		}]
	}, {
		path: '/app',
		component: app,
	}, {
		path: '/mui',
		component: muicp,
	}, {
		path: '/',
		redirect: '/index/tab1/list1'
	}]
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
		count: 1,
		title: "标题",
		search: "",
		news: null,
		imgUrl: null,
		isShowGallery: false,
		direction: "left"
	},
	getters: {
		getCount(state) {
			//处理数据
			return state.count + "ed"
		}
	},
	//分发状态
	mutations: {
		setCount(state, data) {
			state.count = data

		},
		settitle(state, data) {
			state.title = data
		},
		setNews(state) {
			axios.get('https://cnodejs.org/api/v1//topics')
				.then((response) => {
					state.news = response.data.data
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	//action就是触发mutations
	actions: {
		setChange(context, data) {
			context.commit('setCount', data)
			context.commit('settitle', data)
		},
		setNews(context, data) {
			context.commit('setNews')
		}
	}
})

new Vue({
	el: "#demo",
	template: `
		<router-view></router-view>
	`,
	router,
	store,
})