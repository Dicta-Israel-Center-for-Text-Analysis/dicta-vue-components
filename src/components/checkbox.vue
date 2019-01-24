<template>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" :id="id">
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
  props: ['checked', 'partial']
}
</script>

<style scoped>

</style>
