import { h, render } from 'vue'

import ODialog from '@/components/ModalDialog/ODialog.vue'
import OMessage from '@/components/MessageBox/OMessage.vue'

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

export const OpenMessage = (content: string | Error, time = 1) => {
  const div = document.createElement('div')
  div.setAttribute('class', 'o-message')
  document.body.appendChild(div)
  if (typeof content !== 'string') {
    content = content.message
  }
  const VNode = h(OMessage, {
    mountDom: div,
    content,
  })
  render(VNode, div)
  setTimeout(() => div.remove(), time * 1000)
}
