let interval
let defaultColor

const mouseover = event => {
  event.target.style.color = 'red'
}

const mouseout = event => {
  event.target.style.color = defaultColor
}

export default {
  mounted (el, binding) {
    el.style[binding.arg] = binding.value
    defaultColor = binding.value

    if (binding.modifiers.blink) {
      let flag = true
      interval = setInterval(() => {
        el.style.color = flag ? '#fff' : binding.value
        flag = !flag
      }, 1000)
    }

    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },

  updated (el, binding) {
    el.style[binding.arg] = binding.value
  },

  unmounted (el) {
    if (interval) {
      clearInterval(interval)
    }

    el.removeEventListener('mouseover', mouseout)
    el.removeEventListener('mouseout', mouseover)
  }
}
