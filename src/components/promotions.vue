<template>
  <div v-if="showPromotions" class="promotion text-white py-1 d-none d-md-block position-relative">
    <div class="container d-flex justify-content-between">
      <div>
          {{hebrew ? currentPromotion.hebrew : currentPromotion.english}}
          <a class="text-white" href="" target="_blank">{{hebrew ? currentPromotion.hebrewAction : currentPromotion.englishAction}}</a>
      </div>
      <div @click="closePromotion">
        <i class="fas fa-times"></i>
      </div>
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
      this.filterHiddenPromotions()
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
          self.promotionsData = response.data.promotions.find(item => item.name === self.tool)
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
    text-decoration: underline;
  }
  i {
      cursor: pointer;
  }
}
</style>
