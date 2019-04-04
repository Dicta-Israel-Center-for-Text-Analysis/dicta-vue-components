<template>
  <div class="custom-control custom-radio">
    <input type="radio" :id="id"
           class="custom-control-input"
           :value="value"
           :checked="internalChecked"
           :disabled="disabled"
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
    prop: 'radioValue',
    event: 'change'
  },
  data () {
    return {
      internalChecked: this.value === this.radioValue
    }
  },
  watch: {
    radioValue () {
      this.internalChecked = this.value === this.radioValue
    }
  },
  props: ['radioValue', 'partial', 'value', 'disabled']
}
</script>

<style scoped>
</style>
