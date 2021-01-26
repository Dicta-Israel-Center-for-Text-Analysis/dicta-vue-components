<template>
    <div class="mobile-menu">
      <a id="mobile-toolbar-button" @click="dictaToolsMode.showDictaToolsPopup = true" class="text-white" ref="openTools">
        <i class="fas fa-bars"></i>
      </a>
      <dicta-tools-popup :dicta-tools-mode="dictaToolsMode" :englishSupported="englishSupported" :howDialog="howDialog"/>
    </div>
</template>
<script>

import DictaToolsPopup from './dictaToolsPopup'

export default {
  name: 'mobile-menu',
  components: { DictaToolsPopup },
  props: {
    englishSupported: {
      default: true
    },
    howDialog: {
      default: false
    }
  },
  data () {
    return {
      dictaToolsMode: {
        showDictaToolsPopup: false
      }
    }
  },
  mounted () {
  },
  computed: {
    computedHebrew () {
      return this.$settings.hebrew
    }
  }
}
</script>
