<template>
  <div :dir="hebrew? 'rtl' : 'ltr'">
    <div class="top-bar">
      <span class="top-bar-left">
        <a href="http://dicta.org.il/index.html">
          <span class="dicta">DICTA</span>
          &nbsp;
          <span class="dicta-tagline">Analytical tools for Hebrew texts</span>
        </a>
      </span>
      <span class="top-bar-right">
        <a @click="changeLanguage" href="#">עברית</a>
        |
        <a @click="toggleDropDown">
          DICTA Tools <img src="../assets/Triangle-down.png">
        </a>
      </span>
    </div>
    <div v-if="menuOpen" class="popup">
      <div class="popup-back" @click="toggleDropDown"></div>
      <div class="tool-bar">
        <ul class="tool-list">
          <li class="tool" v-for="tool in tools" :key="tool.logo">
            <a :href="tool.href" class="tool-link" target="_blank">
              <img class="logo" alt="logo" :src="tool.logo">
              <div class="description">
                <div class="title">{{hebrew ? tool.hebTitle : tool.engTitle}}</div>
                <div class="subtitle">{{hebrew ? tool.hebSubtitle : tool.engSubtitle}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { tools } from './toolList'

export default {
  name: 'Header',
  props: {
    hebrew: {
      default: false
    }
  },
  data () {
    return {
      menuOpen: true,
      tools
    }
  },
  methods: {
    changeLanguage: function () {
      this.hebrew = !this.hebrew
      this.$emit('lang', this.hebrew ? 'en' : 'he')
    },
    toggleDropDown: function () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
<style scoped>
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
  a {
    color: black;
    cursor: pointer;
  }
  a:hover {
    color: black;
  }
  .popup {
    position: relative;
  }
  .popup-back {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .tool-bar {
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.14);
    border: solid 1px #d8d8d8;
    box-sizing: border-box;
    background-color: white;
    z-index: 100000;
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
    max-width: 1140px;
    margin: auto;
  }
  .tool {
    flex: 0 1 300px;
    list-style: none;
    margin: 20px 20px;
    text-align: start;
  }
  .logo {
    display: inline-block;
    margin: 10px 7px;
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
  }
  .tool-link {
    display: flex;
    color: black;
    text-decoration: none;
  }
  .title {
    font-size: 18px;
  }
  .subtitle {
    font-size: 13px;
  }
</style>
