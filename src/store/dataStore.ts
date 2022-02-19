import { defineStore } from 'pinia'
import { IUser, IUserDTO, userDTO2VO } from '@/types/IUser'
import { INavItemDTO, menuDTO2VO, INavItem } from '@/types/INavItem'

export interface dataStore {
  userData: IUser | null
  navData: INavItem[]
}

export const useDataStore = defineStore('useData', {
  state: (): dataStore => ({
    userData: null,
    navData: [],
  }),
  actions: {
    setUser(data: IUserDTO) {
      this.userData = userDTO2VO(data)
    },
    setNavTree(data: INavItemDTO[]) {
      this.navData = menuDTO2VO(data)
    },
  },
})
