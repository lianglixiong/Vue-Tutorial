Vue.component("xsilde",{
	template:`
		<div class="leftContent" @click="changeDirection()" :class="{'silde-right':direction=='right','silde-left':direction=='left'}"></div>
	`,
	computed:{
		direction(){
			return this.$store.state.direction;
		}
	},
	methods: {
		changeDirection(){
			this.$store.state.direction = "left"
		}
	},
})