<template>
  <b-modal id="contact-us"
           ref="contact-modal"
           centered
           :ok-title="hebrew ? 'שלח' : 'Send'"
           :cancel-title="hebrew ? 'ביטול' : 'Cancel'"
           @ok="submit"
  >
    <template slot="modal-header"><div><i-envelope></i-envelope> {{ hebrew ? 'צור קשר' : 'Contact Us' }}</div></template>
    <form ref="contact-form" id="contact-form" class='form' action="https://localhost/formspree.io/dicta@dicta.org.il" method="POST">
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'שם' : 'Name'"
            label-for="name"
          >
            <b-form-input required name="name"/>
          </b-form-group>
        </div>
      </div>
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'דואר אלקטרוני' : 'Email'"
            label-for="_replyto"
          >
            <b-form-input required name="_replyto" type='email'/>
          </b-form-group>
        </div>
      </div>
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'תואר' : 'Description'"
            label-for="message"
          >
            <b-textarea name="message" required></b-textarea>
          </b-form-group>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: 'contactUs',
  props: ['hebrew'],
  data () {
    return {}
  },
  methods: {
    submit (bvModalEvt) {
      bvModalEvt.preventDefault()
      if (this.$refs['contact-form'].checkValidity()) {
        this.$refs['contact-form'].submit()
        this.$nextTick(() => {
          this.$refs['contact-modal'].hide()
        })
      }
    }
  }
}
</script>
<style scoped>
</style>
