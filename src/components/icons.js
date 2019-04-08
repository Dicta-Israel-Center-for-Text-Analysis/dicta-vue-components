import Vue from 'vue'

// by default, we use icons from the font awesome solid set
// exceptions below
const icons = [
  'info-circle', 'download', 'upload',
  'pencil-alt', 'share-square',
  'search-plus', 'search-minus',
  'reply', 'share',
  'clone', 'keyboard', 'envelope',
  'arrow-left', 'arrow-right', 'arrow-up', 'times', 'check', 'angle-down', 'arrow-alt-circle-left',
  'angle-left', 'angle-right', 'caret-down', 'caret-up', 'caret-left', 'caret-right'
]

// these are the exceptions, and they come from the font awesome regular set
const regular = ['clone', 'keyboard', 'envelope', 'arrow-alt-circle-left']

for (const icon of icons) {
  Vue.component('i-' + icon, {
    functional: true,
    render (createElement, context) {
      let classes = [(regular.includes(icon) ? 'far' : 'fas') + ' fa-' + icon, context.data.class]
      if (context.props && context.props.size) {
        classes.push('icon-size-' + context.props.size)
      }
      return createElement('i', {
        class: classes,
        style: context.data.style,
        on: context.listeners
      })
    }
  })
}
