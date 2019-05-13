<template>
  <div class="footer" :class="{he: computedHebrew}" :dir="computedHebrew ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="footer-content">
        <a v-if="computedHebrew" class="footer-item" href="http://dicta.org.il/aboutus-he.html" target="_blank">אודות</a>
        <a v-else class="footer-item" href="http://dicta.org.il/aboutus-en.html" target="_blank">About</a>
        <a class="footer-item" v-b-modal.contact-us href="#contactus">{{ computedHebrew ? 'צור קשר' : 'Contact Us' }}</a>
        <contact-us :hebrew="computedHebrew"></contact-us>
        <a class="footer-item" href="http://dicta.org.il/tos.html" target="_blank">{{computedHebrew ? 'תנאים ושרותים' : 'Terms of service'}}</a>
        <a href="https://www.facebook.com/dictatools" target="_blank"
                                    class="footer-item footer-icon"><i class="social-icon fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/DictaTools?lang=he" target="_blank"
                                    class="footer-item footer-icon"><i class="social-icon fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw"
                                    target="_blank" class="footer-item footer-icon"><i class="social-icon fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

  <!--<div class="container mobile-footer">-->
  <!--<div class="row no-gutters">-->
  <!--<div class="col-xs-12">-->
  <!--<a class="btn-top" href="#">-->
  <!--<h3 class="heading-h3 m-0"><img src="../assets/ic_forward.png" class="go-to-top-img">GO TO TOP</h3>-->
  <!--</a>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="row top-row">-->
  <!--<div class="col-sm-12 p-0">-->
  <!--<a class="" href="http://dicta.org.il/aboutus-en.html" data-toggle="modal" data-target="#about">How-->
  <!--to use</a>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="row">-->
  <!--<div class="col-sm-12">-->
  <!--<ul class="list-inline pages-links">-->
  <!--<li class="-li"><a class="" href="http://dicta.org.il/aboutus-en.html" target="_blank">About</a>-->
  <!--</li>-->
  <!--<li class="-li"><a class="" data-toggle="modal" href="#contactus" data-backdrop="false">Contact-->
  <!--Us</a></li>-->
  <!--<li class="-li"><a class="" href="http://dicta.org.il/tos.html" target="_blank">Terms of-->
  <!--service</a></li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--<div class="col-sm-12">-->
  <!--<ul class="list-inline social-linkes">-->
  <!--<li class="-li"><a href="https://www.facebook.com/dictatools" target="_blank"-->
  <!--class="social-link"><i class="social-icon fab fa-facebook"-->
  <!--aria-hidden="true"></i></a></li>-->
  <!--<li class="-li"><a href="https://www.facebook.com/dictatools" target="_blank"-->
  <!--class="social-link"><i class="social-icon fab fa-twitter"-->
  <!--aria-hidden="true"></i></a></li>-->
  <!--<li class="-li"><a href="https://www.facebook.com/dictatools" target="_blank"-->
  <!--class="social-link"><i class="social-icon fab fa-youtube-play"-->
  <!--aria-hidden="true"></i></a></li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="row bottom-row">-->
  <!--<div class="col-xs-6">-->
  <!--<h1 class="heading-h1">-->
  <!--<a href="http://dicta.org.il" target="_blank">DICTA</a>-->
  <!--</h1>-->
  <!--</div>-->
  <!--<div class="col-xs-6 text-right">-->
  <!--<div class="btn-group dropdown pull-right">-->
  <!--<a href="#" class="footer-dropdown-link dropdown-toggle f black" id="dropdownMenu2" data-toggle="dropdown"-->
  <!--aria-haspopup="true" aria-expanded="false">-->
  <!--DICTA Tools <i class="footer-dropdown-icon fa fa-bars" aria-hidden="true"></i>-->
  <!--</a>-->
  <!--<ul class="dropdown-menu" aria-labelledby="dropdownMenu2">-->
  <!--<div class="row mobile-dropdown-header">-->
  <!--<div class="col-sm-8 col-xs-8">-->
  <!--<h2>Dicta Tools</h2>-->
  <!--</div>-->
  <!--<div class="col-sm-4 col-xs-4 text-right">-->
  <!--<i class="fa fa-times"></i>-->
  <!--&lt;!&ndash;<img src="../assets/ic_cancel-big.png"/>&ndash;&gt;-->
  <!--</div>-->
  <!--</div>-->
  <!--<li>-->
  <!--<a href="http://search.dicta.org.il/" target="_blank" class="media">-->
  <!--<div class="media-left">-->
  <!--<img src="../assets/Logo_Search_Black_Circle.png" class="img media-object">-->
  <!--</div>-->
  <!--<div class="media-body">-->
  <!--<i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>-->
  <!--<h3 class="media-heading">Search the Bible</h3>-->
  <!--<p class="sub-heading">Easily search in the Bible</p>-->
  <!--</div>-->
  <!--</a>-->
  <!--</li>-->
  <!--<li>-->
  <!--<a href="http://nakdan.dicta.org.il/" target="_blank" class="media">-->
  <!--<div class="media-left">-->
  <!--<img src="../assets/Logo_Nakdan_Black_Circle.png" class="img media-object">-->
  <!--</div>-->
  <!--<div class="media-body">-->
  <!--<i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>-->
  <!--<h3 class="media-heading">Nakdan</h3>-->
  <!--<p class="sub-heading">Add nikud to Modern / Rabbinic / Poetry text</p>-->
  <!--</div>-->
  <!--</a>-->
  <!--</li>-->
  <!--<li>-->
  <!--<a href="http://classify.dicta.org.il" target="_blank" class="media">-->
  <!--<div class="media-left">-->
  <!--<img src="../assets/Logo_Classify_Black_Circle.png" class="img media-object">-->
  <!--</div>-->
  <!--<div class="media-body">-->
  <!--<i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>-->
  <!--<h3 class="media-heading">Bible Classification</h3>-->
  <!--<p class="sub-heading">Categorization, based on key styles markers</p>-->
  <!--</div>-->
  <!--</a>-->
  <!--</li>-->
  <!--<li>-->
  <!--<a href="http://pasuk.dicta.org.il/" target="_blank" class="media">-->
  <!--<div class="media-left">-->
  <!--<img src="../assets/Logo_PasukFinder_Black_Circle.png" class="img media-object">-->
  <!--</div>-->
  <!--<div class="media-body">-->
  <!--<i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>-->
  <!--<h3 class="media-heading">Pasuk Finder</h3>-->
  <!--<p class="sub-heading">Find biblical references in texts</p>-->
  <!--</div>-->
  <!--</a>-->
  <!--</li>-->
  <!--<li>-->
  <!--<a href="http://classify.dicta.org.il/#/" target="_blank" class="media">-->
  <!--<div class="media-left">-->
  <!--<img src="../assets/Logo_Synoptic_Black_Circle.png" class="img media-object">-->
  <!--</div>-->
  <!--<div class="media-body">-->
  <!--<i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>-->
  <!--<h3 class="media-heading">Synopsis Builder</h3>-->
  <!--<p class="sub-heading">Aligns versions of the same text</p>-->
  <!--</div>-->
  <!--</a>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>

<script>
import ContactUs from './contactUs'
export default {
  name: 'dicta-footer',
  components: { ContactUs },
  props: ['hebrew'],
  data () {
    return {}
  },
  computed: {
    computedHebrew () {
      if (this.hebrew !== undefined) {
        return this.hebrew
      }
      return this.$settings.hebrew
    }
  }
}
</script>
<style scoped>
  .footer {
    background-color: #fbfbfb;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #d8d8d8;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
  .footer-content {
    flex-grow: 1;
    max-width: 1140px;
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
    line-height: 23px;
  }
  .footer-item {
    margin: 0 11px 0 0;
    font-weight: 500;
  }
  .footer-icon {
    color: #fff;
    height: 23px;
    width: 23px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    background-color: black;
  }
  a {
    color: black;
  }
  @media screen and ( max-width: 991px ) {
    .mobile-dropdown-header {
      flex-direction: row;
    }

    .media-left {
      margin-left: 5px;
    }

    .bottom-row {
      flex-direction: row;
    }
  }
</style>
