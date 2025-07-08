import type { DirectiveBinding } from 'vue'

const handlerMap = new WeakMap<HTMLElement, (e: MouseEvent) => void>()

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const handler = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }

    handlerMap.set(el, handler)
    document.addEventListener('mousedown', handler)
  },

  unmounted(el: HTMLElement) {
    const handler = handlerMap.get(el)
    if (handler) {
      document.removeEventListener('mousedown', handler)
      handlerMap.delete(el)
    }
  },
}
