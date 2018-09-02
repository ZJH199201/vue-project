import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js'
import store from './store/store.js'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
