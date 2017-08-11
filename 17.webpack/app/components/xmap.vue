<template>
	<div>
		<div id="l-map"></div>
		<input v-model="start" />
		<input v-model="end" />
		<div id="driving_way">
			<select v-model="select">
				<option value="0">最少时间</option>
				<option value="1">最少换乘</option>
				<option value="2">最少步行</option>
				<option value="3">不乘地铁</option>
			</select>
			<input type="button" id="result" @click="search" value="查询" />
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					map: null,
					start:"百度大厦",
					end : "北京邮电大学西门",
					transit:null,
					select:"",
					routePolicy:null
				}
			},
			methods: {
				search() {
					this.map.clearOverlays();
					var i = this.select;
					//search(this.start, this.end, this.routePolicy[i]);
					
					this.transit.setPolicy(this.routePolicy[i]);
					this.transit.search(this.start, this.end);
					
					/*var self = this
					function search(start, end, route) {
						console.log(this)
					}*/
				}
			},
			mounted() {
				this.map = new BMap.Map("l-map")
				// 百度地图API功能
				this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
				this.routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
				this.transit = new BMap.TransitRoute(this.map, {
					renderOptions: {
						map: this.map
					},
					policy: 0
				});
			}
	}
</script>
<style scoped>
	body,
	html {
		width: 100%;
		height: 100%;
		margin: 0;
		font-family: "微软雅黑";
	}
	
	#l-map {
		height: 500px;
		width: 100%;
	}
</style>