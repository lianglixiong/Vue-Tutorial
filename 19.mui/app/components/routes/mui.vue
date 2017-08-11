<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">折叠面板</h1>
		</header>
		<div class="mui-content">
			<div class="mui-card">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#">表单</a>
						<div class="mui-collapse-content">
							<form class="mui-input-group">
								<div class="mui-input-row">
									<label>Input</label>
									<input type="text" placeholder="普通输入框">
								</div>
								<div class="mui-input-row">
									<label>Input</label>
									<input type="text" class="mui-input-clear" placeholder="带清除按钮的输入框">
								</div>

								<div class="mui-input-row mui-plus-visible">
									<label>Input</label>
									<input type="text" class="mui-input-speech mui-input-clear" placeholder="语音输入">
								</div>
								<div class="mui-button-row">
									<button class="mui-btn mui-btn-primary" type="button" onclick="return false;">确认</button>&nbsp;&nbsp;
									<button class="mui-btn mui-btn-primary" type="button" onclick="return false;">取消</button>
								</div>
							</form>
						</div>
					</li>
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#">图片轮播</a>
						<div class="mui-collapse-content">
							<div id="slider" class="mui-slider">
								<div class="mui-slider-group mui-slider-loop">
									<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
									<div class="mui-slider-item mui-slider-item-duplicate">
										<a href="#">
											<img :src="src">
										</a>
									</div>
									<!-- 第一张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img :src="src">
										</a>
									</div>
									<!-- 第二张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img :src="src">
										</a>
									</div>
									<!-- 第三张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img :src="src">
										</a>
									</div>
									<!-- 第四张 -->
									<div class="mui-slider-item">
										<a href="#">
											<img :src="src">
										</a>
									</div>
									<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
									<div class="mui-slider-item mui-slider-item-duplicate">
										<a href="#">
											<img :src="src">
										</a>
									</div>
								</div>
								<div class="mui-slider-indicator">
									<div class="mui-indicator mui-active"></div>
									<div class="mui-indicator"></div>
									<div class="mui-indicator"></div>
									<div class="mui-indicator"></div>
								</div>
							</div>
						</div>
					</li>
					<li class="mui-table-view-cell mui-collapse">
						<a class="mui-navigate-right" href="#">文字排版</a>
						<div class="mui-collapse-content">
							<h1>h1. Heading</h1>
							<h2>h2. Heading</h2>
							<h3>h3. Heading</h3>
							<h4>h4. Heading</h4>
							<h5>h5. Heading</h5>
							<h6>h6. Heading</h6>
							<p>
								p. 目前最接近原生App效果的框架。
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="#delete">
				<span class="mui-icon mui-icon-trash"></span>
			</a>
			<a class="mui-tab-item" href="#">
			</a>
			<a class="mui-tab-item" href="#">
			</a>
			<a class="mui-tab-item" href="#forward">
				<span class="mui-icon mui-icon-undo"></span>
			</a>
		</nav>
		<div class="mui-content">
			<div class="mui-content-padded">
				<p>actionsheet一般从底部弹出，显示一系列可选择的操作按钮，供用户选择； actionSheet可从任意位置触发， 点击本页面左下角
					<span class="mui-icon mui-icon-trash"></span>会弹出删除信息确认框； 点击本页面右下角
					<span class="mui-icon mui-icon-undo"></span>会弹出转发确认框； 你也可点击如下按钮，打开照片选择框：
				</p>
				<p>
					<a href="#picture" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined" style="padding: 5px 20px;">打开actionsheet</a>
				</p>
				<p>本页面为H5模式的actionsheet演示示例，该模式具有如下优点：</p>
				<ul class="des">
					<li>可通过css自由定制展现样式</li>
				</ul>

				<p>另一方面，H5模式的actionsheet也具备如下缺点：</p>
				<ul class="hm-description">
					<li>不支持覆盖顶部状态栏</li>
					<li>不支持跨webview的遮罩</li>
					<li>在有map等原生组件时，容易被遮挡</li>
				</ul>
				<p id="info"></p>
			</div>
		</div>

		<div id="delete" class="mui-popover mui-popover-action mui-popover-bottom">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#" style="color: #FF3B30;">删除信息</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#delete"><b>取消</b></a>
				</li>
			</ul>
		</div>
		<div id="forward" class="mui-popover mui-popover-action mui-popover-bottom">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#">回复</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">转发</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">打印</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#forward"><b>取消</b></a>
				</li>
			</ul>
		</div>
		<div id="picture" class="mui-popover mui-popover-action mui-popover-bottom">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#">拍照或录像</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">选取现有的</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#picture"><b>取消</b></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					src: require("../../images/1.jpg")
				}
			},
			mounted() {

				mui.init({
					swipeBack: true //启用右滑关闭功能
				});
				mui('body').on('shown', '.mui-popover', function(e) {
					//console.log('shown', e.detail.id);//detail为当前popover元素
				});
				mui('body').on('hidden', '.mui-popover', function(e) {
					//console.log('hidden', e.detail.id);//detail为当前popover元素
				});
				var info = document.getElementById("info");
				mui('body').on('tap', '.mui-popover-action li>a', function() {
					var a = this,
						parent;
					//根据点击按钮，反推当前是哪个actionsheet
					for(parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
						if(parent.classList.contains('mui-popover-action')) {
							break;
						}
					}
					//关闭actionsheet
					mui('#' + parent.id).popover('toggle');
					info.innerHTML = "你刚点击了\"" + a.innerHTML + "\"按钮";
				})
			}
	}
</script>
<style scoped>
	p {
		text-indent: 22px;
	}
	
	span.mui-icon {
		font-size: 14px;
		color: #007aff;
		margin-left: -15px;
		padding-right: 10px;
	}
	
	#info {
		padding: 20px 10px;
	}
	/*.des {
				margin: .5em 0;
			}
			.des>li {
				
				
				font-size: 14px;
				color: #8f8f94;
			}*/
</style>