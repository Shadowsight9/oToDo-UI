import { http } from '@/apis/http'

import { ITodoList } from '@/types/ITodoList'
import { AxiosResponse } from 'axios'

export const getCurrentTodoList = async () => {
  const resopnse: AxiosResponse<ITodoList[]> = await http.get(
    '/users/current/todo-lists'
  )
  return resopnse.data
}

export const getCurrentBasicTodoList = async () => {
  const resopnse: AxiosResponse<ITodoList> = await http.get(
    '/users/current/todo-lists/basic'
  )
  return resopnse.data
}

export const getTodoListById = async (id: number) => {
  const resopnse: AxiosResponse<ITodoList> = await http.get('/todo-lists/' + id)
  return resopnse.data
}

export const deleteTodoListById = (id: number) => {
  return http.delete('/todo-lists/' + id)
}
