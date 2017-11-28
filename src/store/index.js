import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		movies:[]
		// created(){
		// 	// console.log(this.HOST)
		// 	var currentUrl = this.HOST+"/top/list.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&topType=1&categoryId=2";
		// 	// console.log(currentUrl)
		// 	this.$axios.get(currentUrl)

		// 	.then(res => {
		// 		console.log(res.data.data)
		// 		this.movies = res.data.data;
		// 		// console.log(this.movies);

		// 	})
		// 	.catch(error =>{
		// 		// console.log(error);
		// 	})
		// }
	},
	mutations: {
		getMovies(state,movies){
			state.movies = movies;
			console.log(1,state.movies)
		}
	},
	actions: {
		
	},
	getters: {
		getMoviesInfo(state){
			return state.movies ? state.movies:0;
		}
	}
})