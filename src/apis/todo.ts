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

export const getTodoById = async (id: BigInt) => {
  const resopnse: AxiosResponse<ITodo> = await http.get('/todos/' + id)
  return resopnse.data
}

export const getTodoByListId = async (id: BigInt) => {
  const resopnse: AxiosResponse<ITodo[]> = await http.get(
    '/todo-lists/' + id + '/todos'
  )
  return resopnse.data
}

export const putTodoById = (id: BigInt, data: ITodo) => {
  return http.put('/todos/' + id, data)
}

export const patchTodoById = (id: BigInt, data: ITodoSubmit) => {
  return http.patch('/todos/' + id, data)
}

export const deleleTodoById = async (id: BigInt) => {
  return http.delete('/todos/' + id)
}
