// import { createPinia } from 'pinia'

// const Store = createPinia()

// export default Store

/**
 * 把状态注册操作加入到事件总线中，提前生成状态库
 */

import { useUserStore } from './userStore'

const appStore: any = {}

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useUserStore = useUserStore()
}

export default appStore
