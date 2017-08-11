<template>
	<div class="leftContent" @click="changeDirection()" :class="{'silde-right':direction=='right','silde-left':direction=='left'}"></div>
</template>
<script>
	export default {
		computed: {
			direction() {
				return this.$store.state.direction;
			}
		},
		methods: {
			changeDirection() {
				this.$store.state.direction = "left"
			}
		},
	}
</script>
<style scoped>
	@keyframes scalee {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	
	.leftContent {
		width: 200px;
		height: 100%;
		position: fixed;
		background-color: gold;
		z-index: 99;
		top: 0;
		left: 0;
	}
	
	.silde-left {
		animation: moveLeft;
		animation-duration: 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	
	.silde-right {
		animation: moveRight;
		animation-duration: 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	
	@keyframes moveLeft {
		from {}
		to {
			transform: translateX(-200px);
		}
	}
	
	@keyframes moveRight {
		from {
			transform: translateX(-200px);
		}
		to {}
	}
</style>