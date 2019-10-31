<template>
  <b-dropdown no-caret
              class="dicta-dropdown"
              menu-class="w-100"
              :right="$settings.hebrew"
              toggle-class="dicta-dropdown-toggle"
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
                <span class="dicta-dropdown-check">
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
  .dicta-dropdown-check {
    display: inline-block;
    margin-inline-start: -14px;
    margin-inline-end: 2px;
    width: 20px;
  }
  .dicta-dropdown {
    .btn:not(:disabled):not(.disabled).dropdown-toggle {
      box-shadow: none;
    }
    .col-auto {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .dicta-dropdown-toggle.dropdown-toggle {
    background-color: white;
    &:hover {
      background-color: #e3e3e3;
    }
  }
</style>
