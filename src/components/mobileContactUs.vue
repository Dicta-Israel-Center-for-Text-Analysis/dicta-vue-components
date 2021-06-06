<template>
  <div id="mobile-contact-us" v-show="showMobileContactUs" class="h-100">
    <div class="mobile-contact-us-header bg-secondary" :dir="hebrew ? 'rtl' : 'ltr'">
      <div class="container">
        <div class="row">
          <div :class="[ hebrew ? 'text-right' : 'text-left', 'col-6']">
            <div class="v-center"><h3 class="m-0">{{ hebrew ? 'משוב' : 'Feedback' }}</h3></div>
          </div>
          <div class="col-6 left-items">
            <span id="close-contact" @click="contactUsMode.showMobileContactUs = false" style="cursor: pointer"><i-times /></span>
          </div>
        </div>
      </div>
    </div>
    <div :class="[{'he': hebrew}, 'contact-us-content']" >
      <form ref="contact-form" id="contact-form" class='form' :class="[{'was-validated': submitted}, 'h-100']" action="https://formspree.io/f/xvovdkvj" method="POST">
        <div class='row'>
          <div class='col-12'>
            <b-form-group
              :label="hebrew ? 'שם' : 'Name'"
              label-for="name"
              label-class="mb-1"
            >
              <b-form-input required name="name" class="form-control-lg"/>
              <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <div class='row'>
          <div class='col-12'>
            <b-form-group
              :label="hebrew ? 'דואר אלקטרוני' : 'Email'"
              label-for="_replyto"
              label-class="mb-1"
            >
              <b-form-input required name="_replyto" type='email' class="form-control-lg"/>
              <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <div class='row'>
          <div class='col-12'>
            <b-form-group
              :label="hebrew ? 'תאור' : 'Description'"
              label-for="message"
              label-class="mb-1"
            >
              <b-textarea name="message" rows="4" required></b-textarea>
              <b-form-invalid-feedback>{{ hebrew ? 'שדה חובה' : 'Required field'}}</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <input type="hidden" name="_subject" :value="'New submission from' +siteUrl" />
      </form>
      <b-button class="align-bottom" variant="primary" @click="submit" block>{{ hebrew ? 'שלח' : 'Send'}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileContactUs',
  props: ['contactUsMode', 'hebrew'],
  data () {
    return {
      submitted: false,
      siteUrl: window.location.href
    }
  },
  computed: {
    showMobileContactUs () {
      return this.contactUsMode.showMobileContactUs
    }
  },
  methods: {
    submit (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.submitted = true
      if (this.$refs['contact-form'].checkValidity()) {
        this.$refs['contact-form'].submit()
        this.$nextTick(() => {
          this.contactUsMode.showMobileContactUs = false
        })
      }
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
  .contact-us-content {
    padding: 10px 5%;
    height: calc(100% - 105px);
  }
  .mobile-contact-us-header{
    height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .left-items {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    font-size: 18px;
    height: 42px;
  }

</style>
