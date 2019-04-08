import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import icons from './components/icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
