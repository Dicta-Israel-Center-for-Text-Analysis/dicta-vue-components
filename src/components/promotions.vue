<template>
  <div v-if="showPromotions" id="promotions" class="promotion text-white position-relative">
    <div v-if="promotionsData.desktop" class="container d-flex justify-content-between">
      <div class=" d-none d-sm-block py-1 ">
          {{hebrew ? currentPromotion.hebrew : currentPromotion.english}}
          <a id="promotion-link" class="text-white" :href="currentPromotion.link" target="_blank">{{hebrew ? currentPromotion.hebrewAction : currentPromotion.englishAction}}</a>
      </div>
      <div @click="closePromotion" id="close-promotion" class="d-none d-sm-block py-1">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div v-bind:class="{'text-right' : hebrew}" class="py-1 d-block d-sm-none container" v-if="promotionsData.mobile">
        <div>{{hebrew ? currentPromotion.hebrewMobile : currentPromotion.englishMobile}}</div>
        <a id="mobile-promotion-close" class="rounded btn border my-2" @click="closePromotion">{{hebrew ? "סגור" : "Close"}}</a>
        <a id="mobile-promotion-link" class="rounded btn bg-white promotion-btn mx-2 my-2" :href="currentPromotion.link" target="_blank">{{hebrew ? currentPromotion.hebrewMobileAction : currentPromotion.englishMobileAction}}</a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'promotions',
  props: ['tool', 'hebrew'],
  data () {
    return {
      randomIndex: 0,
      promotionsData: [],
      showPromotions: false,
      currentPromotion: {}
    }
  },
  methods: {
    getData () {
    // Performing a GET request
      const requestUrl = 'https://dicta-israel-center-for-text-analysis.github.io/Promotions/list.json'
      axios.get(requestUrl)
        .then((response) => {
          var obj = response.data
          if (obj && typeof obj === 'object') {
            this.promotionsData = response.data.promotions.find(item => item.name === this.tool)
          }
          if (this.promotionsData && this.promotionsData.ads) {
            this.promotionsData.ads = this.promotionsData.ads.filter(ad => this.$cookies.get(ad.cookieName) !== 'true').filter(ad => ad.show)
            this.getPromotion()
          }
        })
    },
    getPromotion () {
      this.updateBodyClass()
      this.showPromotions = this.promotionsData.ads.length > 0
      if (this.showPromotions) {
        this.randomIndex = Math.floor(Math.random() * this.promotionsData.ads.length)
        this.currentPromotion = this.promotionsData.ads[this.randomIndex]
      }
    },
    updateBodyClass () {
      if (this.promotionsData.ads.length > 0) {
        document.body.classList.add('promotions-displayed')
      } else {
        document.body.classList.remove('promotions-displayed')
      }
    },
    closePromotion () {
      if (this.currentPromotion.cookieName) {
        this.$cookies.set(this.currentPromotion.cookieName, 'true', '30d', '/', 'dicta.org.il')
      }
      this.showPromotions = false
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped lang="scss">
.promotion {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background: #005999;
  z-index: 1;
  a {
    font-size: 16px;
    text-decoration: underline;
    &.promotion-btn {
        text-decoration: none;
        color: #005999;
    }
  }
  i {
      cursor: pointer;
  }
}
</style>
