<template>
  <div id="app">
    <Header></Header>
    <div class="spacer">
      <div>
        <checkbox>Checkbox test</checkbox>
        <radio name="bob">Radio test</radio>
        <radio name="bob">Radio test</radio>
      </div>
      <div class="he" dir="rtl">
        <p>Hebrew</p>
        <checkbox>Checkbox test</checkbox>
        <radio v-model="radio2" :value="'a'">Radio test</radio>
        <radio v-model="radio2" :value="'b'">Radio test</radio>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/commonHeader'
import Footer from './components/commonFooter'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
export default {
  name: 'App',
  components: {
    Radio,
    Checkbox,
    Footer,
    Header
  },
  data () {
    return {
      radio2: null
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.spacer {
  height: calc(100vh - 200px);
}
@import './css/custom.scss';

</style>
