<template>
  <div id="mobile-contact-us" v-show="showMobileContactUs" class="h-100">
    <div class="mobile-contact-us-header bg-secondary d-flex justify-content-between px-3 align-items-center" :dir="hebrew ? 'rtl' : 'ltr'">
      <h3 class="m-0">{{ hebrew ? 'משוב' : 'Feedback' }}</h3>
      <div>
        <span id="close-contact" @click="closeContact" style="cursor: pointer"><i-times /></span>
      </div>
    </div>
    <div class="px-3" v-if="showMobileContactUs">
      <iframe  :src="iframeSrc"></iframe>
    </div>
    <div class="px-3">
      <b-btn size="lg" variant="primary" class="d-block w-100 py-2" @click="submit">{{ hebrew ? 'שליחה' : 'Send' }}</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileContactUs',
  props: ['contactUsMode', 'hebrew'],
  data () {
    return {
      iframeWindow: null,
      iframeSrc: 'https://dicta.org.il/contact'
    }
  },
  mounted () {
    window.addEventListener('message', this.handleMessage)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.handleMessage)
  },
  computed: {
    showMobileContactUs () {
      return this.contactUsMode.showMobileContactUs
    }
  },
  methods: {
    handleMessage (event) {
      if (event.data.message === 'PAGE_REDIRECTED') {
        this.iframeSrc = 'https://dicta.org.il/form-submitted'
      }
      if (event.data.message === 'PAGE_LOADED' || event.data.message === 'PAGE_REDIRECTED') {
        const iframe = document.querySelector('iframe')
        if (iframe) {
          iframe.contentWindow.postMessage({
            message: 'FORM_EMBEDDED',
            data: {
              hebrew: this.hebrew,
              url: window.location.href
            }
          }, this.iframeSrc)
        }
      }
    },
    submit (bvModalEvt) {
      bvModalEvt.preventDefault()
      const iframe = document.querySelector('iframe')
      iframe.contentWindow.postMessage('SUBMIT_FORM', this.iframeSrc)
    },
    closeContact () {
      this.contactUsMode.showMobileContactUs = false
      this.iframeSrc = 'https://dicta.org.il/contact'
    }
  }
}
</script>
<style scoped>
#mobile-contact-us {
  font-size: 1rem;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: white;
}
iframe {
  width: 100%;
  border: none;
  height: 80vh;
}
.mobile-contact-us-header {
  height: 50px;
  margin-bottom: 5px;
}
</style>
