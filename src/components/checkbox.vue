<template>
  <div class="custom-control custom-checkbox">
    <input type="checkbox"
           class="custom-control-input"
           :id="id"
           :checked="checked"
           :indeterminate.prop="indeterminate"
           @change="$emit('change', $event.target.checked)">
    <label class="custom-control-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
let id = 0
export default {
  name: 'checkbox',
  beforeCreate () {
    this.id = 'checkbox' + id
    id += 1
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['checked', 'indeterminate']
}
</script>

<style scoped>
.he .custom-control-label::before {
  right: -1.5rem;
  left: initial;
}
.he .custom-control-label::after {
  right: -1.5rem;
  left: initial;
}
</style>
