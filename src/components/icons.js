import Vue from 'vue'

// by default, we use icons from the font awesome solid set
// exceptions below
const icons = [
  'info-circle', 'download', 'upload',
  'pencil-alt', 'share-square',
  'search-plus', 'search-minus',
  'reply', 'share',
  'clone', 'keyboard', 'envelope',
  'arrow-left', 'arrow-right', 'arrow-up', 'times', 'check',
  'angle-left', 'angle-right', 'caret-down', 'caret-up', 'caret-left', 'caret-right'
]

// these are the exceptions, and they come from the font awesome regular set
const regular = ['clone', 'keyboard', 'envelope']

for (const icon of icons) {
  Vue.component('i-' + icon, {
    functional: true,
    render (createElement, context) {
      return createElement('i', {
        class: [(regular.includes(icon) ? 'far' : 'fas') + ' fa-' + icon, context.data.class],
        style: context.data.style,
        on: context.listeners
      })
    }
  })
}
