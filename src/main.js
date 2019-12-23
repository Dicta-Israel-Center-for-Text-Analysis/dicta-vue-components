import Vue from 'vue'
import './plugins/bootstrap-vue'
import exported from './export'
import App from './App.vue'
import VueCookies from 'vue-cookies'

Vue.use(exported)
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
