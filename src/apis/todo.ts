import { http } from '@/apis/http'

import { ITodoResponse } from '@/types/ITodo'
import { AxiosResponse } from 'axios'

export const getCurrentImportantTodos = async () => {
  const resopnse: AxiosResponse<ITodoResponse[]> = await http.get(
    '/users/current/todos/important'
  )
  return resopnse.data
}

export const getCurrentInPlanTodos = async () => {
  const resopnse: AxiosResponse<ITodoResponse[]> = await http.get(
    '/users/current/todos/planned'
  )
  return resopnse.data
}

export const getCurrentUnnotifiedTodos = async () => {
  const resopnse: AxiosResponse<ITodoResponse[]> = await http.get(
    '/users/current/todos/not-notify'
  )
  return resopnse.data
}

// TODO
export const addTodo = async () => {
  return http.post('/todos', {})
}

export const getTodoById = async (id: string) => {
  const resopnse: AxiosResponse<ITodoResponse> = await http.get('/todos/' + id)
  return resopnse.data
}

// TODO 请传递完整字段
export const putTodoById = (id: string) => {
  return http.put('/todos/' + id, {})
}

// TODO 请传递完整字段
export const patchTodoById = (id: string) => {
  return http.patch('/todos/' + id, {})
}

export const deleleTodoById = async (id: string) => {
  return http.delete('/todos/' + id)
}
