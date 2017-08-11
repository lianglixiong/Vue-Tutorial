Vue.component("xgallery",{
	template:`
		<div class="weui-gallery" v-show="isShowGallery">
			<span class="weui-gallery__img" :style="{backgroundImage: 'url('+imgUrl+')'}"></span>
			<div class="weui-gallery__opr">
				<a @click="hideGallery" href="javascript:" class="weui-gallery__del">
					<i class="weui-icon-delete weui-icon_gallery-delete"></i>
				</a>
			</div>
		</div>
	`,
	computed:{
		isShowGallery(){
			console.log("1")
			return this.$store.state.isShowGallery;
		},
		imgUrl(){
			console.log("2")
			return this.$store.state.imgUrl;
		}
	},
	methods:{
		hideGallery(){
			this.$store.state.isShowGallery = false
		}
	}
})
