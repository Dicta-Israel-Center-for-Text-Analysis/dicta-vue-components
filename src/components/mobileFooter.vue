<template>
    <footer :dir="computedHebrew ? 'rtl' : 'ltr'" class="d-block d-sm-none">
        <div class="footer-wrap bg-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-4 text-right">
                        <div class="v-center">
                          <a target="_blank" :href="'http://dicta.org.il/index' + (computedHebrew ? '-he.html' : '.html')">
                            <span class="dicta text-body">DICTA</span>
                          </a>
                        </div>
                    </div>
                    <div class="col-8 left-items">
                      <a @click="dictaToolsMode.showDictaToolsPopup = true" class="a-hover" ref="openTools">
                        <span class="mx-1">{{ computedHebrew ? 'הכלים של DICTA' : 'DICTA Tools'}}</span><i class="fas fa-bars"></i>
                      </a>
                    </div>
                </div>
            </div>
        </div>
        <dicta-tools-popup :dicta-tools-mode="dictaToolsMode" :englishSupported="englishSupported" :howDialog="howDialog"/>
    </footer>
</template>
<script>

import DictaToolsPopup from './dictaToolsPopup'

export default {
  name: 'mobile-footer',
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
  },
  methods: {
  }
}
</script>
<style scoped>
  footer{
    margin-top:40px;
  }
 .footer-wrap {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .v-center {
    display: flex;
    align-items: center;
  }

  .left-items {
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
</style>
