<!--HTML-->
<template>
	<div>
		<p>123
			<span>456</span>
		</p>
	</div>
</template>
<!--JS-->
<script>
	export default {
		mounted() {
			//detail/1
			console.log(this.$route.params.id)
				//detail/?id=1
			console.log(this.$route.query.id)
		}
	}
</script>
<!--CSS-->
<style scoped lang="scss">
	$size: 20px;
	p{
		color: red;
		font-size: $size;
		span{
			color: green;
		}
	}
</style>