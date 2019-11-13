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
                      <a class="a-hover" @click="toggleTools" ref="openTools">
                        <span @click="dictaToolsMode.showDictaToolsPopup = true"><span class="mx-1">{{ computedHebrew ? 'הכלים של DICTA' : 'DICTA Tools'}}</span><i class="fas fa-bars"></i></span>
                      </a>
                    </div>
                </div>
            </div>
        </div>
        <dicta-tools-popup :dicta-tools-mode="dictaToolsMode" />
    </footer>
</template>
<script>

import DictaToolsPopup from './dictaToolsPopup'

export default {
  name: 'mobile-footer',
  components: { DictaToolsPopup },
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
    toggleTools () {
      this.showDictaToolsPopup = !(this.showDictaToolsPopup)
    }
  }
}
</script>
<style scoped>
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
