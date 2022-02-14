import { IMenuProps } from '@/types/IMouseMenu'

import { h, render, DirectiveBinding } from 'vue'
import MbMenu from '@/components/MouseMenu/MbMenu.vue'

// type ItemPos = 'top' | 'bottom'
const menuPosition = (position: string | undefined) => {
  switch (position) {
    case 'top':
      return 'bottom: 100% ;'
    case 'bottom':
      return 'top: 100% ;'
    default:
      return 'bottom: 100%;'
  }
}

let div: HTMLElement | null = null

const removeElememt = (ele: HTMLElement | null) => {
  if (ele !== null) {
    ele.remove()
    ele = null
  }
}

export const lmbDirective = (
  el: HTMLElement,
  binding: DirectiveBinding<IMenuProps>
) => {
  document.body.addEventListener('click', () => {
    removeElememt(div)
  })
  el.addEventListener('click', (e) => {
    e.stopPropagation()

    removeElememt(div)

    div = document.createElement('div')
    div.style.cssText = 'position: absolute;' + menuPosition(binding.arg)
    el.appendChild(div)

    const VNode = h(MbMenu, {
      data: binding.value.data,
      onOclick: (index: number) => {
        removeElememt(div)
        binding.value.handler(index)
      },
    })

    render(VNode, div)
  })
}
