<template>
	<div>
		<div class="breadcrumb">
			<mu-breadcrumb>
				<mu-breadcrumb-item href="/">Home</mu-breadcrumb-item>
				<mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item>
				<mu-breadcrumb-item>Download</mu-breadcrumb-item>
			</mu-breadcrumb>
		</div>
		<div class="body">
			<mu-sub-header>阳光</mu-sub-header>
			<mu-content-block>
				散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
			</mu-content-block>
		</div>
	</div>
</template>
<style scoped>
	.layout {
		background-color: rgb(236, 236, 236);
	}
	
	.header {
		background-color: #7e57c2;
	}
	
	.logo {
		font-size: 24px;
		color: white;
		display: inline-block;
		padding: 10px 20px;
	}
	
	.nav {
		display: inline-block;
		width: calc(100% - 150px);
		margin: 0 auto;
	}
	
	.tab {
		margin: 0 auto;
		width: 400px;
		background-color: rgba(0, 0, 0, 0);
	}
	
	.content {
		overflow: hidden;
	}
	
	.content-left {
		width: 30%;
		float: left;
		background-color: white;
		margin-bottom: -4000px;
		padding-bottom: 4000px;
	}
	
	.content-right {
		width: 70%;
		display: inline-block;
		float: right;
		padding: 10px 20px;
		background-color: rgba(0, 0, 0, 0)
	}
	
	.breadcrumb {
		margin: 10px 0;
	}
	
	.body {
		background-color: white;
		border-radius: 5px;
		min-height: 500px;
	}
	
	.footer {
		padding: 20px 0;
		text-align: center;
	}
</style>