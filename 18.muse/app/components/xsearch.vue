<template>
	<div :class="{'weui-search-bar_focusing':isShowSearchBar}" class="weui-search-bar" id="search_bar">
		<form class="weui-search-bar__form">
			<div class="weui-search-bar__box">
				<i class="weui-icon-search"></i>
				<input v-model="searchTitle" @keyup="doSearch" type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
				<a v-focuss="{fn:clearSearchTitle}" href="javascript:" class="weui-icon-clear" id="search_clear"></a>
			</div>
			<label @click="changeSearchBar()" for="search_input" class="weui-search-bar__label" id="search_text">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
		</form>
		<a href="javascript:" @click="isShowSearchBar=false" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				searchTitle: "",
				isShowSearchBar: "true",
				arg: "wscats"
			}
		},
		directives: {
			focuss: {
				bind: function(el, binding, vnode) {
					console.log("绑定时");
					el.addEventListener("click", function() {
						//获取传入v-focuss:wscats来的wscats值
						console.log(binding.arg);
						//传入指令的值
						console.log(binding.value.params);
						//执行传给指令的clear函数
						binding.value.fn();
						//让输入框聚焦
						document.getElementById("search_input").focus();
					})
				}
			}

		},
		methods: {
			//封装清空输入框的方法
			clearSearchTitle() {
				this.searchTitle = "";
			},
			changeSearchBar() {
				this.isShowSearchBar = true
			},
			doSearch() {
				//暴力修改状态
				//this.$store.state.search = this.searchTitle;
				//提交修改触发mutations
				//this.$store.commit("setCount",this.searchTitle)
				//提交修改触发actions
				this.$store.dispatch('setChange', this.searchTitle)
			}
		},
		mounted() {
			console.log(this.$store.state.count)
		}
	}
</script>
<style scoped>
	.weui-search-bar {
		margin-top: 50px;
	}
</style>