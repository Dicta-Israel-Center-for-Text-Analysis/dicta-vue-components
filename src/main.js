import Vue from 'vue'
import './plugins/bootstrap-vue'
import exported from './export'
import App from './App.vue'

Vue.use(exported)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
