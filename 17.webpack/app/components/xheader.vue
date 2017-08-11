<template>
	<div>
		<header v-scroll-top>
			{{title}}
		</header>
	</div>
</template>
<script>
	export default {
		computed: {
			title() {
				//暴力获取状态
				//this.$store.state.title
				return this.$store.getters.getCount
			}
		},
		directives: {
			scrollTop: {
				bind: function(el) {
					el.addEventListener("click", function() {
						console.log("置顶")
						var timer = setInterval(function() {
							document.body.scrollTop = document.body.scrollTop - 50;
							if(document.body.scrollTop == 0) {
								clearInterval(timer)
							}
						}, 1)
					})
				}
			}
		}
	}
</script>
<style scoped>
	header {
		background-color: red;
		color: white;
		height: 50px;
		line-height: 50px;
		text-align: center;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>