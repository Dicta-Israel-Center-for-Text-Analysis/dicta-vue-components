<template>
  <div class="modal fade in commom-modal contactus" id="contactus" tabindex="-1" role="dialog" aria-hidden="false" @click.self="hide()">
    <div class="modal-dialog modal-lg contactus-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class='popup-header-dev row no-gutters'>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div class='wrap-txt'>
              <h1 class='f black header-title'>Contact Us</h1>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <button type="button" data-dismiss="modal" class="common-close-btn"><i class="close-btn-icon fa fa-times"></i>Close</button>
            <button type="button" data-dismiss="modal" class="mobile-close-button"><i class="close-btn-icon fa fa-times"></i></button>
          </div>
        </div>
        <form id="contact-form" class='form contactus-form' action="https://formspree.io/dicta@dicta.org.il" method="POST">
          <div class='field-holder form-group error'>
            <div class='row'>
              <div class='col-xs-6'>
                <label>Name</label>
              </div>
              <div class='col-xs-6 text-right'>
                <label style="display: none" class='error-txt'>Required field</label>
              </div>
            </div>
            <input class='form-control contact-form-control' required name="name" type='text'/>
          </div>
          <div class='field-holder form-group'>
            <div class='row'>
              <div class='col-xs-6'>
                <label>Email</label>
              </div>
              <div class='col-xs-6 text-right'>
                <label style="display: none" class='error-txt'>Required field</label>
              </div>
            </div>
            <input class='form-control contact-form-control' required name="_replyto" type='email'/>
          </div>
          <div class='field-holder form-group'>
            <div class='row'>
              <div class='col-xs-6'>
                <label>Description</label>
              </div>
              <div class='col-xs-6 text-right'>
                <label style="display: none" class='error-txt'>Required field</label>
              </div>
            </div>
            <textarea name="message" required class='form-control contact-form-control'></textarea>
          </div>
          <div class='field-holder bottom-btn-div'>
            <button type="submit" class="bt bt-sm submit-btn"><p class="mb-0">Send</p></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'contactUs',
  data () {
    return {
    }
  },
  methods: {
    hide () {
      $('#contactus').modal('hide')
    }
  }
}
</script>
<style scoped src="./styles/common-modal.css"></style>
<style scoped src="./styles/common-contact-us.css"></style>
<style scoped>
</style>
