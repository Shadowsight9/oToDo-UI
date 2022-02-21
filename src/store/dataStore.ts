import { defineStore } from 'pinia'
import { IUser, IUserDTO, userDTO2VO } from '@/types/IUser'
import { INavItemDTO, menuDTO2VO, INavItem } from '@/types/INavItem'
import { IFixedTodo } from '@/types/ITodo'
import { ITodoList } from '@/types/ITodoList'

export interface dataStore {
  userData: IUser | null
  navData: INavItem[]
  fixedTodoData: IFixedTodo | null
  todoListData: ITodoList[]
}

export const useDataStore = defineStore('useData', {
  state: (): dataStore => ({
    userData: null,
    navData: [],
    fixedTodoData: null,
    todoListData: [],
  }),
  actions: {
    setUser(data: IUserDTO) {
      this.userData = userDTO2VO(data)
    },
    setNavTree(data: INavItemDTO[]) {
      this.navData = menuDTO2VO(data)
    },
    setFixedTodo(data: IFixedTodo) {
      this.fixedTodoData = data
    },
    setTodoList(data: ITodoList[]) {
      this.todoListData = data
    },
  },
})
