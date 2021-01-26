import dHeader from '@/components/commonHeader'
import mFooter from '@/components/mobileFooter'
import mMenu from '@/components/mobileMenu'
import dBootstrap from '@/css/custom.scss'
import dIcons from '@/components/icons'
import dDropdown from '@/components/DDropdown'
import state from '@/state'
function install (Vue, options) {
  dIcons.install(Vue)
  state.options = options || {}
  Vue.prototype.$settings = Vue.observable({ hebrew: !!state.options.hebrew })
  Vue.component('dicta-header', dHeader)
  Vue.component('mobile-menu', mMenu)
  Vue.component('mobile-footer', mFooter)
  Vue.component('dicta-dropdown', dDropdown)
}

export default {
  install,
  dHeader,
  mFooter,
  mMenu,
  dBootstrap,
  dDropdown
}
