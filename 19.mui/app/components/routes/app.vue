<template>
	<div>
		<mu-appbar title="Title">
			<mu-icon-button @click="changeMenu" :icon="status" slot="left" />
			<mu-icon-menu icon="more_vert" slot="right">
				<mu-menu-item title="菜单 1" />
				<mu-menu-item title="菜单 2" />
				<mu-menu-item title="菜单 3" />
				<mu-menu-item title="菜单 4" />
				<mu-menu-item title="菜单 5" />
			</mu-icon-menu>
			<mu-flat-button label="expand_more" slot="right" />
			<mu-icon-button icon="expand_more" slot="right" />
		</mu-appbar>
		<xpopup></xpopup>
	</div>
</template>
<script>
	import xpopup from "../xpopup.vue"
	export default {
		data() {
				return {
					status: "menu",
				}
			},
			methods: {
				changeMenu() {
					if(this.status == "menu") {
						this.status = "close"
					} else {
						this.status = "menu"
					}
				}
			},
			components: {
				xpopup
			}
	}
</script>