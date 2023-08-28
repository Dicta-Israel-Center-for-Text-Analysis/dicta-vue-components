<template>
  <b-modal :dir="hebrew ? 'rtl' : 'ltr'" id="contact-us" ref="contact-modal" class="contact-us"
  centered :ok-title="hebrew ? 'שלח' : 'Send'" @show="onShow"
    :cancel-title="hebrew ? 'ביטול' : 'Cancel'" @ok="submit" :hide-footer="iframeSrc.includes('form-submitted')">
    <template slot="modal-header">
      <div><i-envelope></i-envelope> {{ hebrew ? 'צרו קשר' : 'Contact Us' }}</div>
    </template>
      <div>
        <iframe
          scrolling="no"
          style="border: none;"
          height="320"
          width="470"
          :src="iframeSrc"
        ></iframe>
      </div>
  </b-modal>
</template>

<script>
export default {
  name: 'contactUs',
  props: ['hebrew'],
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
  methods: {
    onShow () {
      this.iframeSrc = 'https://dicta.org.il/contact'
    },
    handleMessage (event) {
      // eslint-disable-next-line no-console
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
    }
  }
}
</script>
