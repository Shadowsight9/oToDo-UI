import { defineStore } from 'pinia'

export const boardFooterStore = defineStore('boardFooterStore', {
  state: () => ({
    listIndex: -1,
  }),
  actions: {
    setlistIndex(data: number) {
      this.listIndex = data
    },
  },
})
