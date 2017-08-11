<template>
	<div>
		<div class="content-left">
			<mu-list @change="handleListChange" :value="activeList">
				<mu-list-item title="Sent mail" value="list1">
					<mu-icon slot="left" value="send" />
				</mu-list-item>
				<mu-list-item title="Drafts" value="list2">
					<mu-icon slot="left" value="drafts" />
				</mu-list-item>
				<mu-list-item title="Inbox" toggleNested value="list3">
					<mu-icon slot="left" value="inbox" />
					<mu-list-item slot="nested" title="Starred" value="list4">
						<mu-icon slot="left" value="grade" />
					</mu-list-item>
					<mu-list-item slot="nested" disabled title="Sent mail" toggleNested value="list5">
						<mu-icon slot="left" value="send" />
						<mu-list-item title="Drafts" slot="nested" value="list6">
							<mu-icon slot="left" value="drafts" />
						</mu-list-item>
					</mu-list-item>
					<mu-list-item slot="nested" title="Inbox" toggleNested value="list7">
						<mu-icon slot="left" value="inbox" />
						<mu-list-item title="Drafts" slot="nested" value="list8">
							<mu-icon slot="left" value="drafts" />
						</mu-list-item>
					</mu-list-item>
				</mu-list-item>
			</mu-list>
		</div>
		<div class="content-right">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					activeList: 'list1'
				}
			},
			methods: {
				handleListChange(val) {
					console.log(val)
					this.activeList = val
					window.location.href = "#/index/tab1/" + val
				}
			}
	}
</script>
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