import { http } from '@/apis/http'

import { ITodoListResponse } from '@/types/ITodoList'
import { AxiosResponse } from 'axios'

export const getCurrentTodoList = async () => {
  const resopnse: AxiosResponse<ITodoListResponse[]> = await http.get(
    '/users/current/todo-lists'
  )
  return resopnse.data
}

export const getCurrentBasicTodoList = async () => {
  const resopnse: AxiosResponse<ITodoListResponse[]> = await http.get(
    '/users/current/todo-lists/basic'
  )
  return resopnse.data
}

export const getTodoListById = async (id: string) => {
  const resopnse: AxiosResponse<ITodoListResponse> = await http.get(
    '/todo-lists/' + id
  )
  return resopnse.data
}

export const deleteTodoListById = (id: string) => {
  return http.delete('/todo-lists/' + id)
}
