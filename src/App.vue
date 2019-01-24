<template>
  <div id="app">
    <Header></Header>
    <div class="spacer"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/commonHeader'
import Footer from './components/commonFooter'
export default {
  name: 'App',
  components: {
    Footer,
    Header
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
