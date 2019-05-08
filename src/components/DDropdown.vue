<template>
  <b-dropdown no-caret
              class="d-dropdown"
              menu-class="w-100"
              variant="outline-dropdown">
    <template slot="button-content">
      <div class="row justify-content-between">
        <div class="col-auto">{{display(value)}}</div>
        <div class="col-auto">
          <i-angle-down></i-angle-down>
        </div>
      </div>
    </template>
    <b-dropdown-item v-for="option in options"
                     :key="display(option)"
                     @click="$emit('change', option)"
    >
                <span class="dropdown-check">
                  <small v-if="display(value) === display(option)">
                    <i-check></i-check>
                  </small>
                </span>{{display(option)}}
    </b-dropdown-item>
  </b-dropdown>
</template>
<script>
export default {
  name: 'dicta-dropdown',
  props: {
    value: {},
    options: {},
    displayField: {}
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    display (item) {
      return this.displayField ? item[this.displayField] : item
    }
  }
}
</script>
<style lang="scss">
  .dropdown-check {
    display: inline-block;
    margin-inline-start: -14px;
    margin-inline-end: 2px;
    width: 20px;
  }
  .d-dropdown /deep/ {
    .btn:not(:disabled):not(.disabled).dropdown-toggle {
      box-shadow: none;
    }
  }
</style>
