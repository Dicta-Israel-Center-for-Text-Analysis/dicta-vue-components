<template>
  <div class="custom-control custom-radio">
    <input type="radio" :id="id"
           class="custom-control-input"
           :name="name"
           :value="value"
           :checked="checked"
           @change="$emit('change', $event.target.value)">
    <label class="custom-control-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
let id = 0
export default {
  name: 'radio',
  beforeCreate () {
    this.id = 'radio' + id
    id += 1
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['checked', 'partial', 'name', 'value']
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
