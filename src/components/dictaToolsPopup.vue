<template>
  <div id="dicta-tools-popup" class="bg-background position-fixed h-100 w-100" v-show="showDictaToolsPopup">
    <span id="close-menu" @click="closeMenu()" style="visibility: hidden"></span>
    <div class="dicta-tools-popup-header bg-secondary position-fixed w-100">
      <div class="container" :dir="computedHebrew ? 'rtl' : 'ltr'">
        <div class="row">
          <div class="col-9" :class="[ computedHebrew ? 'text-right' : 'text-left']">
            <h2 class="mb-0">{{ computedHebrew ? 'הכלים של דיקטה' : 'DICTA Tools' }}</h2>
          </div>
          <div class="col-3 left-items">
            <span @click="goBack()" style="cursor: pointer">
              <i-times />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="dicta-tools-popup-items-container" :dir="computedHebrew ? 'rtl' : 'ltr'">
      <div class="dicta-tools" >
        <ul class="tool-list list-unstyled p-0 m-0">
          <li
            class="tool dicta-tools-item contact-link border-top border-bottom border-primary"
            @click="contactUsMode.showMobileContactUs = true"
            >
            <a
              id="mobile-contact-us"
              class="text-primary title"
            >
              {{ computedHebrew ? 'משוב' : 'Feedback' }}
            </a>
            <i class="far fa-envelope px-3 text-primary"></i>
          </li>
          <li class="tool dicta-tools-item" v-for="(tool, index) in dictatools" :key="index">
            <a
              :href="tool.hasOwnProperty('href') ? tool.href : (computedHebrew ? tool.hebHref : tool.engHref)"
              class="tool-link"
              target="_blank"
            >
              <img class="logo" alt="logo" :src="tool.logo" />
              <div class="description">
                <div>
                  <span v-bind:title="tool.hebSubtitle" class="title">{{computedHebrew ? tool.hebTitle : tool.engTitle}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="dicta-other-buttons">
        <ul class="list-unstyled p-0 m-0" :class="computedHebrew ? 'text-right' : 'text-left'">
          <li class="dicta-tools-item">
            <a
              class="text-body title"
              :href="'https://dicta.org.il/about' + (!computedHebrew ? '?lang=en' : '')"
              target="_blank"
            >{{ computedHebrew ? 'אודות דיקטה' : 'About Us' }}</a>
          </li>
          <li class="dicta-tools-item">
            <a class="text-body title" href="https://dicta.org.il/tos" target="_blank">{{computedHebrew ? 'תנאים ושרותים' : 'Terms of service'}}</a>
          </li>
          <li class="dicta-tools-item" v-if="hebrewSupported && englishSupported">
            <a class="text-body title" @click="changeLanguage">{{ computedHebrew ? 'English' : 'עברית' }}</a>
          </li>
        </ul>
      </div>
      <div class="dicta-tools-popup-footer mt-5">
        <a href="https://www.facebook.com/dictatools" target="_blank" class="footer-item footer-icon rounded-circle">
          <i class="social-icon fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/DictaTools"
          target="_blank"
          class="footer-item footer-icon rounded-circle"
        >
          <i class="social-icon fab fa-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw"
          target="_blank"
          class="footer-item footer-icon rounded-circle"
        >
          <i class="social-icon fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <mobile-contact-us :hebrew="computedHebrew" :contact-us-mode="contactUsMode"></mobile-contact-us>
  </div>
</template>

<script>
import state from '@/state'
import { tools } from './toolList'
import MobileContactUs from './mobileContactUs'
export default {
  name: 'DictaToolsPopup',
  components: { MobileContactUs },
  data () {
    return {
      tools,
      contactUsMode: {
        showMobileContactUs: false
      }
    }
  },
  props: {
    dictaToolsMode: {},
    hebrew: { },
    hebrewSupported: {
      default: true
    },
    englishSupported: {
      default: true
    },
    customLinks: {
      type: Array,
      default: () =>
        []
    }
  },
  computed: {
    dictatools () {
      return this.customLinks.concat(this.tools)
    },
    showDictaToolsPopup () {
      return this.dictaToolsMode.showDictaToolsPopup
    },
    computedHebrew () {
      if (!this.englishSupported) {
        return true
      }
      if (!this.hebrewSupported) {
        return false
      }
      if (this.hebrew !== undefined) {
        return this.hebrew
      }
      return this.$settings.hebrew
    }
  },
  watch: {
    showDictaToolsPopup: function (val) {
      if (val) {
        history.pushState(null, null, location.href)
        window.onpopstate = function (e) {
          document.getElementById('close-menu').click()
          document.getElementById('close-contact').click()
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    closeMenu () {
      this.dictaToolsMode.showDictaToolsPopup = false
    },
    goBack () {
      window.history.go(-1)
      this.closeMenu()
    },
    changeLanguage () {
      if (this.hebrew !== undefined) {
        this.$emit('lang-changed', this.hebrew ? 'en' : 'he')
      } else {
        this.$settings.hebrew = !this.$settings.hebrew
        if (this.$cookies) {
          this.$cookies.set('DICTA_USE_HEBREW', this.$settings.hebrew, -1, '/', 'dicta.org.il')
        }
        if (state.options.useBodyClass) {
          if (this.$settings.hebrew) {
            document.body.classList.add('he')
          } else {
            document.body.classList.remove('he')
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* DocumentSettingsGenre-specific CSS goes here */

#dicta-tools-popup {
  z-index: 999;
  left: 0;
  top: 0;
}

.tool-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tool {
  flex: 0 1 100%;
  list-style: none;
  text-align: start;
  background-color: white;
}

/* holds both the logo and text */
.tool-link {
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
}
.logo {
  display: inline-block;
  margin: 2px 2px;
  height: 40px;
  width: auto;
  background-color: white;
  align-self: flex-start;
}
.description {
  display: inline-block;
}
.title {
  font-size: 18px;
  padding: 2px 5px;
}
[dir="rtl"]{
  .dicta-tools-item {
    text-align: right;
    &::after {
      left: 15px;
      content: "\f104";
    }
  }
}
[dir="ltr"]{
  .dicta-tools-item {
    &::after {
      right: 15px;
      content: "\f105";
    }
  }
}
.dicta-tools-item {
  min-height: 59px;
  border-bottom: solid 1px #d8d8d8;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  &::after {
    top: 14px;
    font-size: 20px;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  &.contact-link {
    background-color: #d6ecff;
    i {
      font-size: 24px;
    }
    &::after {
      content: '';
    }
  }
  span{
    display: block;
  }
  a{
    padding: 7px 10px;
    width: 100%;
   }
}

.dicta-tools-popup-header {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
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

.dicta-tools-popup-items-container {
  height: calc(100% - 50px);
  overflow-y: auto;
  margin-top: 50px;
}

.dicta-tools-popup-footer {
  height: 50px;
  display: flex;
  align-items: center;
}
.footer-item {
  margin: 0 0 0 11px;
  font-weight: 500;
}
[dir="rtl"]{
 .footer-item {
    margin: 0 11px 0 0;
 }
}
.footer-icon {
  color: #f6f6f6;
  height: 40px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 16px;
}
.footer-icon:hover {
  text-decoration: none;
  background-color: #4a5057;
}
</style>
