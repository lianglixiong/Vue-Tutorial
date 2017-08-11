<template>
	<div id="main" style="width: 600px;height:400px;"></div>
</template>
<script>
	//echarts图标插件
	import echarts from 'echarts';
	export default {
		data(){
			return {
				goods:["老谢", "老蓝", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			}
		},
		mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));

			// 指定图表的配置项和数据
			var self = this;
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption({
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data: ['销量']
				},
				xAxis: {
					data: self.goods
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		}
	}
</script>