import { defineStore } from 'pinia'
import { TUser } from '@/types/user'

export const useUserStore = defineStore('useUser', {
  state: (): TUser => ({
    token: '',
    userName: '',
  }),
  actions: {
    setItem(data: TUser) {
      if (data) {
        this.token = data.token
        this.userName = data.userName
      }
    },
    setToken(token: string) {
      this.token = token
    },
    setuserName(userName: string) {
      this.userName = userName
    },
  },
})
