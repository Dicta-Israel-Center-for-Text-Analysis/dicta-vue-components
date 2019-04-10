<template>
  <b-dropdown no-caret
              menu-class="w-100"
              variant="outline-dropdown">
    <template slot="button-content">
      <div class="row justify-content-between">
        <div class="col-auto">{{value}}</div>
        <div class="col-auto">
          <i-angle-down></i-angle-down>
        </div>
      </div>
    </template>
    <b-dropdown-item v-for="option in options"
                     :key="option"
                     @click="$emit('change', option)"
    >
                <span class="dropdown-check">
                  <small v-if="value === option">
                    <i-check></i-check>
                  </small>
                </span>{{option}}
    </b-dropdown-item>
  </b-dropdown>
</template>
<script>
export default {
  name: 'd-dropdown',
  props: {
    value: {},
    options: {}
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>
<style lang="scss">
  .dropdown-check {
    display: inline-block;
    margin-left: -5px;
    width: 20px;
  }
</style>
