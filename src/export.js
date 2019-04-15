import dHeader from '@/components/commonHeader'
import dFooter from '@/components/commonFooter'
import dBootstrap from '@/css/custom.scss'
import dCheckbox from '@/components/checkbox'
import dRadio from '@/components/radio'
import dIcons from '@/components/icons'

function install (Vue) {
  dIcons.install(Vue)
  Vue.component('dicta-header', dHeader)
  Vue.component('dicta-footer', dFooter)
}

export default {
  install,
  dHeader,
  dFooter,
  dBootstrap,
  dCheckbox,
  dRadio
}
