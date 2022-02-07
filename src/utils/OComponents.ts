import { h, render } from 'vue'

import ODialog from '@/components/ODialog/ODialog.vue'
import OMessage from '@/components/OMessage/OMessage.vue'

interface callBackFunc {
  (): void
}

export const OpenDialog = (
  title: string,
  content: string,
  displayOk = true,
  displayCancel = true,
  okHandler?: callBackFunc,
  cancelHandler?: callBackFunc
) => {
  const div = document.createElement('div')
  div.setAttribute('class', 'o-dialog')
  document.body.appendChild(div)
  const VNode = h(ODialog, {
    title,
    content,
    mountDom: div,
    displayOk,
    displayCancel,
    onClickOk: okHandler,
    onClickCancel: cancelHandler,
  })
  render(VNode, div)
}

export const OpenMessage = (content: string, time = 1) => {
  const div = document.createElement('div')
  div.setAttribute('class', 'o-message')
  document.body.appendChild(div)
  const VNode = h(OMessage, {
    mountDom: div,
    content,
  })
  render(VNode, div)
  setTimeout(() => div.remove(), time * 1000)
}
