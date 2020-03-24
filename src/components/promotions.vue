<template>
  <div v-if="showPromotions" class="promotion text-white position-relative">
    <div v-if="promotionsData.desktop" class="container d-flex justify-content-between">
      <div class=" d-none d-sm-block py-1 ">
          {{hebrew ? currentPromotion.hebrew : currentPromotion.english}}
          <a class="text-white" :href="currentPromotion.link" target="_blank">{{hebrew ? currentPromotion.hebrewAction : currentPromotion.englishAction}}</a>
      </div>
      <div @click="closePromotion" class="d-none d-sm-block py-1 ">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div v-bind:class="{'text-right' : hebrew}" class="py-1 d-block d-sm-none container" v-if="promotionsData.mobile">
        <div>{{hebrew ? currentPromotion.hebrewMobile : currentPromotion.englishMobile}}</div>
        <div>{{hebrew ? currentPromotion.hebrewAction : currentPromotion.englishAction}}</div>
        <a class="rounded btn border my-2" @click="closePromotion">{{hebrew ? "סגור" : "Close"}}</a>
        <a class="rounded btn bg-white promotion-btn mx-2 my-2" :href="currentPromotion.link" target="_blank">{{hebrew ? currentPromotion.hebrewMobileAction : currentPromotion.englishMobileAction}}</a>
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
  computed: {
  },
  watch: {
    promotionsData () {
      if (this.promotionsData) {
        this.filterHiddenPromotions()
      }
    }
  },
  methods: {
    getPromotion () {
      this.showPromotions = this.promotionsData.ads.length > 0
      if (this.showPromotions) {
        this.randomIndex = Math.floor(Math.random() * this.promotionsData.ads.length)
        this.currentPromotion = this.promotionsData.ads[this.randomIndex]
      }
    },
    getData () {
    // Performing a GET request
      const requestUrl = 'https://dicta-israel-center-for-text-analysis.github.io/Promotions/list.json'

      axios.defaults.headers = {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
      let self = this
      axios.get(requestUrl)
        .then(function (response) {
          var obj = JSON.parse((JSON.stringify(response.data)))
          if (obj && typeof obj === 'object') {
            self.promotionsData = response.data.promotions.find(item => item.name === self.tool)
          }
        })
    },
    filterHiddenPromotions () {
      this.promotionsData.ads = this.promotionsData.ads.filter(ad => this.$cookies.get(ad.cookieName) !== 'true')
      this.getPromotion()
    },
    removePromotion () {
      this.promotionsData.ads = this.promotionsData.ads.filter(ad => ad.show)
      this.getPromotion()
    },
    closePromotion () {
      this.$cookies.set(this.currentPromotion.cookieName, 'true', -1, '/', 'dicta.org.il')
      this.promotionsData.ads[this.randomIndex].show = false
      this.removePromotion()
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
