import dHeader from '@/components/commonHeader'
import dBootstrap from '@/css/custom.scss'
import dIcons from '@/components/icons'
import dDropdown from '@/components/DDropdown'

function install (Vue) {
  dIcons.install(Vue)
  Vue.prototype.$settings = Vue.observable({ hebrew: false })
  Vue.component('dicta-header', dHeader)
  Vue.component('dicta-dropdown', dDropdown)
}

export default {
  install,
  dHeader,
  dBootstrap,
  dDropdown
}
