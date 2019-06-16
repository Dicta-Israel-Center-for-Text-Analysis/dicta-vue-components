<template>
  <div :dir="computedHebrew ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="top-bar">
      <span class="top-bar-left">
        <a href="http://dicta.org.il/index.html">
          <span class="dicta">DICTA</span>
          <span class="dicta-tagline">
            {{
            computedHebrew ?
            'כלים דיגיטליים לעיבוד טקסטים בעברית' :
            '&nbsp;Analytical tools for Hebrew texts'
            }}
          </span>
        </a>
      </span>
        <span class="top-bar-right">
        <slot name="endContent"></slot>
        <span v-if="hebrewSupported && englishSupported">
          <a class="a-hover" @click="changeLanguage">{{ computedHebrew ? 'English' : 'עברית' }}</a>
          <span class="spacer">|</span>
        </span>
        <a class="a-hover" v-b-modal.contact-us>{{ computedHebrew ? 'צרו קשר' : 'Contact Us' }}</a>
        <span class="spacer">|</span>
        <a class="a-hover" @click="toggleDropDown" @keyup.esc="toggleDropDown">
          {{ computedHebrew ? 'הכלים של DICTA' : 'DICTA Tools'}} &nbsp;<i class="fas fa-caret-down"></i>
        </a>
      </span>
      </div>
      <contact-us :hebrew="computedHebrew"></contact-us>
    </div>
    <div>
      <div v-if="menuOpen" class="popup">
        <div class="popup-back" @click="toggleDropDown"></div>
        <div class="tool-bar" @keyup.esc="toggleDropDown">
          <ul class="tool-list">
            <li class="tool" v-for="(tool, index) in tools" :key="index">
              <a :href="tool.hasOwnProperty('href') ? tool.href : (computedHebrew ? tool.hebHref : tool.engHref)" class="tool-link" target="_blank">
                <img class="logo" alt="logo" :src="tool.logo">
                <div class="description">
                  <div><span class="title">{{computedHebrew ? tool.hebTitle : tool.engTitle}}</span></div>
                  <div class="subtitle">{{computedHebrew ? tool.hebSubtitle : tool.engSubtitle}}</div>
                </div>
              </a>
            </li>
          </ul>
          <tool-footer :hebrew="computedHebrew"></tool-footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { tools } from './toolList'
import ContactUs from './contactUs'
import ToolFooter from './toolFooter'

export default {
  name: 'dicta-header',
  components: { ToolFooter, ContactUs },
  props: {
    hebrew: { },
    hebrewSupported: {
      default: true
    },
    englishSupported: {
      default: true
    }
  },
  data () {
    return {
      menuOpen: false,
      tools
    }
  },
  computed: {
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
  methods: {
    changeLanguage: function () {
      if (this.hebrew !== undefined) {
        this.$emit('lang-changed', this.hebrew ? 'en' : 'he')
      } else {
        this.$settings.hebrew = !this.$settings.hebrew
      }
    },
    toggleDropDown: function () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
<style scoped>
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .top-bar {
    font-size: 13px;
    line-height: 1.5;
    font-family: Roboto, Arimo, sans-serif;
    margin: 5px auto;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
  }

  .dicta {
    font-size: 14px;
  }

  .spacer {
    padding: 0 8px;
  }

  a {
    color: black;
    cursor: pointer;
  }
  .a-hover {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;
    margin: -2px -3px 0 -3px;
  }
  .a-hover:hover {
    background-color: #e3e3e3;
  }

  a:hover {
    color: black;
  }

  .popup {
    position: relative;
  }

  .popup-back {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .11;
    background-color: black;
    z-index: 1000;
  }

  .tool-bar {
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.14);
    border: solid 1px #d8d8d8;
    box-sizing: border-box;
    background-color: white;
    z-index: 1999;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .tool-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 1170px;
    margin: 18px auto;
  }

  .tool {
    flex: 0 1 360px;
    list-style: none;
    margin: 10px 0;
    text-align: start;
  }

  /* holds both the logo and text */
  .tool-link {
    display: flex;
    color: black;
    text-decoration: none;
  }

  .logo {
    display: inline-block;
    margin: 2px 2px;
    height: 25px;
    width: 25px;
    background-color: white;
    align-self: flex-start;
  }

  .description {
    display: inline-block;
  }

  a:hover .title {
    background-color: #d8d8d8;
    border-radius: 3px;
  }

  .title {
    font-size: 18px;
    padding: 2px 5px;
  }

  .subtitle {
    padding: 1px 5px;
    font-size: 13px;
  }
</style>
