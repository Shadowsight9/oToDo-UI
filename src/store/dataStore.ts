import { defineStore } from 'pinia'
import { IUser } from '@/types/IUser'
import { INavItemDTO, dto2vo, INavItem } from '@/types/INavItem'

export interface dataStore {
  userData: IUser | null
  menuData: INavItem[]
}

export const useDataStore = defineStore('useData', {
  state: (): dataStore => ({
    userData: null,
    menuData: [],
  }),
  actions: {
    setUser(data: IUser) {
      this.userData = data
    },
    setMenuTree(data: INavItemDTO[]) {
      this.menuData = dto2vo(data)
    },
  },
})
