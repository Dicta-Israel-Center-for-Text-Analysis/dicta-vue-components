<template>
  <div class="bootstrap4">
    <div class="footer" id="footer">
      <div class="container desktop-footer">
        <div class="row no-gutters">
          <div class="col-lg-12 col-md-12 text-right">
            <ul class="list-inline pages-links">
              <li><a class="page-link" href="http://dicta.org.il/aboutus-en.html" target="_blank">About</a></li>
              <li><a class="page-link" data-toggle="modal" href="#contactus" data-backdrop="false">Contact Us</a></li>
              <li><a class="page-link" href="http://dicta.org.il/tos.html" target="_blank">Terms of service</a></li>
            </ul>
            <ul class="list-inline social-linkes">
              <li class="page-link-li"><a href="https://www.facebook.com/dictatools" target="_blank"
                                          class="social-link"><i class="social-icon fab fa-facebook-f"
                                                                 aria-hidden="true"></i></a></li>
              <li class="page-link-li"><a href="https://twitter.com/DictaTools?lang=he" target="_blank"
                                          class="social-link"><i class="social-icon fab fa-twitter"
                                                                 aria-hidden="true"></i></a></li>
              <li class="page-link-li"><a href="https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw"
                                          target="_blank" class="social-link"><i class="social-icon fab fa-youtube"
                                                                                 aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container mobile-footer">
        <div class="row no-gutters">
          <div class="col-xs-12">
            <a class="btn-top" href="#">
              <h3 class="heading-h3 m-0"><img src="../assets/ic_forward.png" class="go-to-top-img">GO TO TOP</h3>
            </a>
          </div>
        </div>
        <div class="row top-row">
          <div class="col-sm-12 p-0">
            <a class="page-link" href="http://dicta.org.il/aboutus-en.html" data-toggle="modal" data-target="#about">How
              to use</a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <ul class="list-inline pages-links">
              <li class="page-link-li"><a class="page-link" href="http://dicta.org.il/aboutus-en.html" target="_blank">About</a>
              </li>
              <li class="page-link-li"><a class="page-link" data-toggle="modal" href="#contactus" data-backdrop="false">Contact
                Us</a></li>
              <li class="page-link-li"><a class="page-link" href="http://dicta.org.il/tos.html" target="_blank">Terms of
                service</a></li>
            </ul>
          </div>
          <div class="col-sm-12">
            <ul class="list-inline social-linkes">
              <li class="page-link-li"><a href="https://www.facebook.com/dictatools" target="_blank"
                                          class="social-link"><i class="social-icon fab fa-facebook"
                                                                 aria-hidden="true"></i></a></li>
              <li class="page-link-li"><a href="https://www.facebook.com/dictatools" target="_blank"
                                          class="social-link"><i class="social-icon fab fa-twitter"
                                                                 aria-hidden="true"></i></a></li>
              <li class="page-link-li"><a href="https://www.facebook.com/dictatools" target="_blank"
                                          class="social-link"><i class="social-icon fab fa-youtube-play"
                                                                 aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="row bottom-row">
          <div class="col-xs-6">
            <h1 class="heading-h1">
              <a href="http://dicta.org.il" target="_blank">DICTA</a>
            </h1>
          </div>
          <div class="col-xs-6 text-right">
            <div class="btn-group dropdown pull-right">
              <a href="#" class="footer-dropdown-link dropdown-toggle f black" id="dropdownMenu2" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                DICTA Tools <i class="footer-dropdown-icon fa fa-bars" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div class="row mobile-dropdown-header">
                  <div class="col-sm-8 col-xs-8">
                    <h2>Dicta Tools</h2>
                  </div>
                  <div class="col-sm-4 col-xs-4 text-right">
                    <i class="fa fa-times"></i>
                    <!--<img src="../assets/ic_cancel-big.png"/>-->
                  </div>
                </div>
                <li>
                  <a href="http://search.dicta.org.il/" target="_blank" class="media">
                    <div class="media-left">
                      <img src="../assets/Logo_Search_Black_Circle.png" class="img media-object">
                    </div>
                    <div class="media-body">
                      <i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>
                      <h3 class="media-heading">Search the Bible</h3>
                      <p class="sub-heading">Easily search in the Bible</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://nakdan.dicta.org.il/" target="_blank" class="media">
                    <div class="media-left">
                      <img src="../assets/Logo_Nakdan_Black_Circle.png" class="img media-object">
                    </div>
                    <div class="media-body">
                      <i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>
                      <h3 class="media-heading">Nakdan</h3>
                      <p class="sub-heading">Add nikud to Modern / Rabbinic / Poetry text</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://classify.dicta.org.il" target="_blank" class="media">
                    <div class="media-left">
                      <img src="../assets/Logo_Classify_Black_Circle.png" class="img media-object">
                    </div>
                    <div class="media-body">
                      <i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>
                      <h3 class="media-heading">Bible Classification</h3>
                      <p class="sub-heading">Categorization, based on key styles markers</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://pasuk.dicta.org.il/" target="_blank" class="media">
                    <div class="media-left">
                      <img src="../assets/Logo_PasukFinder_Black_Circle.png" class="img media-object">
                    </div>
                    <div class="media-body">
                      <i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>
                      <h3 class="media-heading">Pasuk Finder</h3>
                      <p class="sub-heading">Find biblical references in texts</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://classify.dicta.org.il/#/" target="_blank" class="media">
                    <div class="media-left">
                      <img src="../assets/Logo_Synoptic_Black_Circle.png" class="img media-object">
                    </div>
                    <div class="media-body">
                      <i class="fa fa-angle-right fa-lg pull-right media-icon" aria-hidden="true"></i>
                      <h3 class="media-heading">Synopsis Builder</h3>
                      <p class="sub-heading">Aligns versions of the same text</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      mobile: this.detectmob()
    }
  },
  methods: {
    detectmob () {
      if (navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped src="./styles/common-footer.css"></style>
<style scoped>
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
