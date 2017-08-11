import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
const app = new Vue({
	el: "#app",
	data: {
		name: "laoyao"
	},
	template: `
		<div>
			<p>{{name}}</p>
		</div>
	`,
	mounted() {
		this.$http.get("http://www.tuling123.com/openapi/api", {
			params: {
				key: "c75ba576f50ddaa5fd2a87615d144ecf",
				info: "先有鸡还是先有蛋"
			}
		}).then((data) => {
			console.log(data);
			//success callback
		}, (err) => {
			//error callback
		})
	}
})