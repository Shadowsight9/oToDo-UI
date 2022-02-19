import { http } from '@/apis/http'

import { ITodoListFolderResponse } from '@/types/ITodoListFolder'
import { AxiosResponse } from 'axios'

export const getCurrentTodoListFolder = async () => {
  const resopnse: AxiosResponse<ITodoListFolderResponse[]> = await http.get(
    '/users/current/todo-list-folders'
  )
  return resopnse.data
}

export const deleteTodoListFolderById = (id: number) => {
  return http.delete('/todo-list-folders/' + id)
}
