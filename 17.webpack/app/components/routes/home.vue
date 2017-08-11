<template>
	<div>
		<xheader></xheader>
		<xsearch></xsearch>
		<xswiper></xswiper>
		<xlist></xlist>
		<xsilde></xsilde>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xsearch from "../xsearch.vue";
	import xswiper from "../xswiper.vue";
	import xlist from "../xlist.vue";
	import xsilde from "../xsilde.vue";
	export default {
		components: {
			xheader,
			xsearch,
			xswiper,
			xlist,
			xsilde
		}
	}
</script>