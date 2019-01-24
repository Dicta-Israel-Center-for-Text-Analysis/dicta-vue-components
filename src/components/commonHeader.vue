<template>
  <div class="container">
  <header class="navbar navbar-default top-header d-none d-lg-flex">
        <div class="navbar-nav mr-auto">
          <a href="http://dicta.org.il/index.html">
            <em class="f black title">DICTA</em>
            <span class="txt add f black">Analytical tools for Jewish texts</span>
          </a>
        </div>
        <ul class="nav navbar-nav nav-mega">
          <li><a class="eng" @click="changeLanguage" href="#">עברית</a></li>
          <li class="dropdown header-dropdown">
            <a @click="openDropDown" href="#" class="link mega-dropdown f black" id="dropdownMenu2">
              DICTA Tools<img class="link-icon" src="../assets/Triangle-down.png">
            </a>
            <ul class="dropdown-menu mega-menu"
                :class="{show: menuOpen}">
                <div class="container">
                  <div class="row mega-menu-row">
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://nakdan.dicta.org.il/" target="_blank" class="media">
                        <div class="media-left">
                          <img src="../assets/Logo_Nakdan_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">Nakdan</h4>
                          <p class="sub-heading">Add nikud to Modern / Rabbinic / Poetry text</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://classify.dicta.org.il" target="_blank" class="media">
                        <div class="media-left">
                          <img src="../assets/Logo_Classify_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">Bible Classification</h4>
                          <p class="sub-heading">Categorization, based on key styles markers</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://classify.dicta.org.il/#/" target="_blank" class="media">
                        <div class="media-left">
                          <img src="../assets/Logo_Synoptic_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">Synopsis Builder</h4>
                          <p class="sub-heading">Aligns versions of the same text</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://search.dicta.org.il/" target="_blank" class="media">
                        <div class="media-left">
                          <img src="../assets/Logo_Search_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">Search the Bible</h4>
                          <p class="sub-heading">Easily search in the Bible</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://pasuk.dicta.org.il/" target="_blank" class="media">
                        <div class="media-left">
                          <img src="../assets/Logo_PasukFinder_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">Pasuk Finder</h4>
                          <p class="sub-heading">Find biblical references in texts</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="close-btn-div">
                    <a class="common-close-btn"><i class="close-btn-icon fa fa-times"></i>Close</a>
                  </div>
                </div>
            </ul>
          </li>
        </ul>
    <div class="mobile-header d-lg-none">
      <div class="container p-x-10">
        <div class="row no-gutters mobile-header-row">
          <div class="col-xs-8">
            <div class="logo-header">
              <!--<router-link to="/">-->
              <!--<img src="../assets/header-logo.png">-->
              <!--</router-link>-->
              <a class="logo-holder" href="/">
                <img src="../assets/blue-logo.png" class="logo-img">
                <span class="logo-text">Bible search</span>
              </a>
            </div>
            <a class="dicta-link" href="#">DICTA</a>
          </div>
          <div class="col-xs-4">
            <a class="mobile-link" @click="changeLanguage">עברית </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
</template>
<script>
// import $ from 'jquery'

export default {
  name: 'Header',
  props: {
    hebrew: {
      default: false
    }
  },
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    changeLanguage: function () {
      this.$emit('lang', this.hebrew ? 'en' : 'he')
    },
    openDropDown: function () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles/common-header.css"></style>
<style scoped>
  .eng{
    margin: 3px 15px 0 0;
  }
  .eng:before{
    right: -9px;
  }
  .nav-mega {
    float: right;
  }
  .link-icon{
    margin: 0 0 0 4px;
  }
   .close-btn-icon {
    margin: -1px 4px 0 0;
  }
   .close-btn-div {
    right: 5px;
  }
  .container {
    max-width: 1400px;
  }
</style>
