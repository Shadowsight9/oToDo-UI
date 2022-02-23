import { http } from '@/apis/http'

import { IFixedTodo, ITodo, ITodoSubmit } from '@/types/ITodo'
import { AxiosResponse } from 'axios'

export const getCurrentDailyTodos = async () => {
  // const resopnse: AxiosResponse<ITodo[]> = await http.get(
  //   '/users/current/todos/daily'
  // )
  // TODO: 未实现
  return []
}

export const getCurrentBasicTodos = async () => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/users/current/todos/basic'
  )
  return resopnse.data
}

export const getCurrentImportantTodos = async () => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/users/current/todos/important'
  )
  return resopnse.data
}

export const getCurrentInPlanTodos = async () => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/users/current/todos/planned'
  )
  return resopnse.data
}

export const getCurrentUnnotifiedTodos = async () => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/users/current/todos/not-notified'
  )
  return resopnse.data
}

export const getCurrentFixedTodos = async (): Promise<IFixedTodo> => {
  return {
    basicListData: await getCurrentBasicTodos(),
    dailyListData: await getCurrentDailyTodos(),
    plannedListData: await getCurrentInPlanTodos(),
    importantListData: await getCurrentImportantTodos(),
    unnotifiedListData: await getCurrentUnnotifiedTodos(),
  }
}

export const addTodo = async (data: ITodoSubmit) => {
  return http.post('/todos', data)
}

export const getTodoById = async (id: number) => {
  const resopnse: AxiosResponse<ITodo> = await http.get('/todos/' + id)
  return resopnse.data
}

export const getTodoByListId = async (id: BigInt) => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/todo-lists/' + id + '/todos'
  )
  return resopnse.data
}

// TODO 请传递完整字段
export const putTodoById = (id: number) => {
  return http.put('/todos/' + id, {})
}

// TODO 请传递完整字段
export const patchTodoById = (id: number) => {
  return http.patch('/todos/' + id, {})
}

export const deleleTodoById = async (id: number) => {
  return http.delete('/todos/' + id)
}
