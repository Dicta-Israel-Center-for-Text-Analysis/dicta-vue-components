<template>
  <div id="header">
    <nav class="navbar navbar-default top-header">
      <div class="container">
        <div class="navbar-header">
          <a href="http://dicta.org.il/index.html">
            <em class="f black title">DICTA</em>
            <span class="txt add f black">כלים דיגיטליים לעיבוד טקסטים בעברית</span>
          </a>
        </div>
        <ul class="nav navbar-nav nav-mega">

          <li  class="dropdown header-dropdown">
            <a @click="openDropDown" href="#" class="link mega-dropdown f black" id="dropdownMenu2">
              DICTA הכלים של <img src="../assets/Triangle-down.png" class="link-icon">
            </a>
            <ul class="dropdown-menu mega-menu">
                <div class="container">
                  <div class="row mega-menu-row">
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://nakdan.dicta.org.il/" target="_blank" class="media">
                        <div class="media-right">
                          <img src="../assets/Logo_Nakdan_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <p class="media-heading">נקדן אוטומטי</p>
                          <p class="sub-heading">ניקוד טקסט מודרני / רבני / שירה</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://classify.dicta.org.il" target="_blank" class="media">
                        <div class="media-right">
                          <img src="../assets/Logo_Classify_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <p class="media-heading">סיווג טקסטים</p>
                          <p class="sub-heading">השוואת טקסטים בהתבסס על מאפיינים סיגונוניים</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://classify.dicta.org.il/#/" target="_blank" class="media">
                        <div class="media-right">
                          <img src="../assets/Logo_Synoptic_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <p class="media-heading">השוואת גרסאות</p>
                          <p class="sub-heading">השוואה בין גרסאות של אותו טקסט</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://search.dicta.org.il/" target="_blank" class="media">
                        <div class="media-right">
                          <img src="../assets/Logo_Search_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">חיפוש בתנ״ך</h4>
                          <p class="sub-heading">מנוע חיפוש אינטואיטיבי לתנ״ך</p>
                        </div>
                      </a>
                    </div>
                    <div class="mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <a href="http://pasuk.dicta.org.il/" target="_blank" class="media">
                        <div class="media-right">
                          <img src="../assets/Logo_PasukFinder_Black_Circle.png" class="img media-object">
                        </div>
                        <div class="media-body">
                          <h4 class="media-heading">איזכורים תנ״כיים</h4>
                          <p class="sub-heading">איתור איזכורים תנ״כיים בכל טקסט נתון</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="close-btn-div">
                    <a class="common-close-btn"><i class="close-btn-icon fa fa-times"></i>סגור</a>
                  </div>
                </div>
            </ul>
          </li>
          <li><a class="eng" @click="changeLanguage" href="#" >English</a></li>
        </ul>
      </div>
    </nav>
    <div class="mobile-header">
      <div class="container p-x-10">
        <div class="row no-gutters mobile-header-row">

          <div class="col-xs-8">
            <div class="logo-header">
              <!--<router-link to="/">-->
              <!--<img src="../assets/header-logo.png">-->
              <!--</router-link>-->
              <a class="logo-holder" href="/">
                <img src="../assets/blue-logo.png" class="logo-img">
                <span class="logo-text">חיפוש בתנך</span>
              </a>
            </div>
            <a class="dicta-link" href="#">DICTA</a>
          </div>
          <div class="col-xs-4">
            <a class="mobile-link" @click="changeLanguage">English</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from 'jquery'
export default {
  name: 'hebrewHeader',
  methods: {
    changeLanguage: function () {
      if (document.URL.toString().includes('/he')) {
        this.$router.push(this.$route.fullPath.replace('/he', ''))
      } else {
        this.$router.push('/he' + this.$route.fullPath)
      }
    },
    openDropDown: function () {
      $('.header-dropdown').toggleClass('open')
      // $('.header-dropdown .mega-menu').slideDown()

      $('.close-btn-div').on('click', function (event) {
        $('.header-dropdown').removeClass('open')
        // $('.header-dropdown .mega-menu').slideUp()
      })
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles/common-header.css"></style>
<style scoped>
  .eng{
    margin: 3px 0 0 15px;
  }
  .eng:before{
    left: -9px;
  }
  .top-header{
    direction: rtl;
  }
   .navbar-header{
    float: right;
  }
  .nav-mega {
    float: left;
  }
  /*.mega-menu-row > [class^="col-"],*/
  /*.mega-menu-row > [class*=" col-"] {*/
    /*float: right;*/
  /*}*/
  .mega-menu-col{
    float: right;
  }
   .media-body{
    text-align: right;
  }
    .media-right{
    padding-right: 0;
  }
   .close-btn-icon{
    margin: -1px 0 0 4px;
  }
  .link{
    direction: ltr;
  }
   .link-icon{
    float: left;
    margin: 4px 4px 0 0;
  }
  .close-btn-div {
    left: 5px;
  }

  @media screen and ( max-width: 1199px ) {
    .sub-heading {
      font-size: 12px;
    }
  }
  /* media query */
  @media screen and ( max-width: 991px ){
      .logo-img{margin: 0 0 0 5px;}
      .logo-header-for-result{
        float: right;
      }
      /*.rest .mobile-link {*/
        /*float: left;*/
      /*}*/
  }
</style>
