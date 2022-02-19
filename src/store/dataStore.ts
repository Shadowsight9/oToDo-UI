import { defineStore } from 'pinia'
import { IUser, IUserDTO, userDTO2VO } from '@/types/IUser'
import { INavItemDTO, menuDTO2VO, INavItem } from '@/types/INavItem'

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
    setUser(data: IUserDTO) {
      this.userData = userDTO2VO(data)
    },
    setMenuTree(data: INavItemDTO[]) {
      this.menuData = menuDTO2VO(data)
    },
  },
})
