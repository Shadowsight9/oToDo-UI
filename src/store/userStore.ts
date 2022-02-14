import { defineStore } from 'pinia'
import { IUser } from '@/types/IUser'

export const useUserStore = defineStore('useUser', {
  state: (): IUser => ({
    token: '',
    userName: '',
  }),
  actions: {
    setItem(data: IUser) {
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
