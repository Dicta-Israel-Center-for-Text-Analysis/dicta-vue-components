<template>
  <b-modal id="contact-us"
           ref="contact-modal"
           class="contact-us"
           centered
           :ok-title="hebrew ? 'שלח' : 'Send'"
           :cancel-title="hebrew ? 'ביטול' : 'Cancel'"
           @ok="submit"
           @cancel="resetData"
  >
    <template slot="modal-header"><div><i-envelope></i-envelope> {{ hebrew ? 'צרו קשר' : 'Contact Us' }}</div></template>
    <form ref="contact-form" id="contact-form" class='form' :class="{'was-validated': submitted}" target="_blank" action="https://formspree.io/dicta@dicta.org.il" method="POST">
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'שם' : 'Name'"
            label-for="name"
          >
            <b-form-input v-model="name" required name="name"/>
            <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'דואר אלקטרוני' : 'Email'"
            label-for="_replyto"
          >
            <b-form-input v-model="email" required name="_replyto" type='email'/>
            <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>
      <div class='row'>
        <div class='col-12'>
          <b-form-group
            :label="hebrew ? 'תואר' : 'Description'"
            label-for="message"
          >
            <b-textarea v-model="description" name="message" rows="4" required></b-textarea>
            <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
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
    return {
      name: '',
      email: '',
      description: '',
      submitted: false
    }
  },
  methods: {
    resetData () {
      this.name = ''
      this.email = ''
      this.description = ''
      this.submitted = false
    },
    submit (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.submitted = true
      if (this.$refs['contact-form'].checkValidity()) {
        this.$refs['contact-form'].submit()
        this.$nextTick(() => {
          this.$refs['contact-modal'].hide()
          this.resetData()
        })
      }
    }
  }
}
</script>
<style scoped>
  .contact-us {
    font-size: 1rem;
  }
</style>
