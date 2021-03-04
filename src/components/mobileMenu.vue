<template>
    <div class="mobile-menu" :dir="computedHebrew ? 'ltr' : 'rtl'">
      <a
        id="mobile-about-button"
        v-if="howDialog"
        class="text-white"
        @click="openHowItWorks"
        >
        <i class="fa fa-info-circle mx-3"></i>
      </a>
      <a
        id="mobile-toolbar-button"
        @click="dictaToolsMode.showDictaToolsPopup = true"
        class="text-white"
        >
        <i class="fas fa-bars"></i>
      </a>
      <dicta-tools-popup :dicta-tools-mode="dictaToolsMode" :englishSupported="englishSupported"/>
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
  methods: {
    openHowItWorks () {
      this.$emit('showHowDialog')
    }
  },
  computed: {
    computedHebrew () {
      return this.$settings.hebrew
    }
  }
}
</script>
