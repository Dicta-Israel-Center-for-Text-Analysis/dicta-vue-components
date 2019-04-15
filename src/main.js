import Vue from 'vue'
import './plugins/bootstrap-vue'
import icons from './components/icons'
import App from './App.vue'

Vue.use(icons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
