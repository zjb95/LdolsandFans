// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import qs from "qs"
import store from "./store"


// swiper   start
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// swiper   end



// element  start
import {
	Cascader,Button,MessageBox,Message,Switch,Upload
} from 'element-ui'

Vue.use(Cascader)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Upload)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
// element  end



// 跨域路径
Vue.prototype.HOST = "/api"
Vue.prototype.URL = "/url"
Vue.prototype.REG = '/reg'


Vue.prototype.$axios = Axios

Vue.config.productionTip = false


// 拦截器
Axios.interceptors.request.use(function(config) {
	if (config.method == "post") {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

Axios.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
   