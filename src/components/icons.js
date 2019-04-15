// by default, we use icons from the font awesome solid set
// exceptions below
const icons = [
  'info-circle', 'download', 'upload',
  'pencil-alt', 'share-square',
  'search-plus', 'search-minus',
  'reply', 'share', 'star',
  'clone', 'keyboard', 'envelope',
  'user', 'user-circle', 'cog',
  'arrow-left', 'arrow-right', 'arrow-up', 'times', 'check', 'angle-down', 'arrow-alt-circle-left',
  'angle-left', 'angle-right', 'caret-down', 'caret-up', 'caret-left', 'caret-right'
]

// these are the exceptions, and they come from the font awesome regular set
const regular = ['clone', 'keyboard', 'envelope', 'arrow-alt-circle-left', 'star']

function install (Vue) {
  for (const icon of icons) {
    Vue.component('i-' + icon, {
      functional: true,
      render (createElement, context) {
        const solid = (context.props && context.props.solid) || !regular.includes(icon)
        let classes = [(solid ? 'fas' : 'far') + ' fa-' + icon, context.data.class, context.data.staticClass]
        if (context.props && context.props.size) {
          classes.push('icon-size-' + context.props.size)
        }
        return createElement('i', {
          class: classes,
          style: context.data.style,
          attrs: context.data.attrs,
          directives: context.data.directives,
          on: context.listeners
        })
      }
    })
  }
}

export default {
  install
}
