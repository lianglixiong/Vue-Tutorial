<template>
	<div class="weui-panel weui-panel_access">
		<div @click="changeDirection()" class="weui-panel__hd">图文组合列表{{search}}</div>
		<div class="weui-panel__bd">
			<a :href="'#/detail/'+index" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg">
				<xcontentheader :imgurl="n.author.avatar_url"></xcontentheader>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title">{{n.title}}</h4>
					<xcontent :message="n.content"></xcontent>
					<p class="weui-media-box__desc"><span>来自于：{{n.author.loginname}}</span> <span>发布于：{{n.create_at|time}}</span></p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft" v-show="isLoadMore">
			<a href="javascript:void(0);" @click="loadMore()" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
		<div class="weui-loadmore" v-show="isLoadMore">
			<i class="weui-loading"></i>
			<span class="weui-loadmore__tips">正在加载</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					//news: null,
					isLoadMore: true
				}
			},
			computed: {
				search() {
					return this.$store.state.count
				},
				news() {
					return this.$store.state.news
				}
			},
			methods: {
				loadMore() {
					this.$store.dispatch("setNews")
				},
				changeDirection() {
					this.$store.state.direction = "right"
				}
			},
			mounted() {
				this.loadMore();
				console.log(this.$http)

			},
			filters: {
				time(input) {
					console.log(input)
					return input
				}
			},
			components: {
				xcontentheader: {
					props: ["imgurl"],
					template: `
				<div class="weui-media-box__hd">
					<img @click="showGallery(imgurl)" class="weui-media-box__thumb" :src="imgurl" alt="">
				</div>
			`,
					methods: {
						showGallery(imgurl) {
							console.log(this.$store.state);
							this.$store.state.imgUrl = imgurl;
							this.$store.state.isShowGallery = true;
						}
					}
				},
				xcontent: {
					props: ["message"],
					template: `
				<p class="weui-media-box__desc" v-html="newMessage"></p>
			`,
					computed: {
						newMessage() {
							return this.message
						}
					}
				}
			}
	}
</script>
<style scoped>
	.weui-panel__ft {
		margin-bottom: 50px;
	}
	
	.weui-loadmore {
		margin-bottom: 70px;
	}
</style>