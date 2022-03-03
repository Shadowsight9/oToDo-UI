import { http } from '@/apis/http'
import { AxiosResponse } from 'axios'
import { IUserDTO } from '@/types/IUser'

export function register(userName: string, nickname: string, password: string) {
  return http.post('/users', {
    userName,
    password,
    nickname,
  })
}

export async function getCurrentUser() {
  const response: AxiosResponse<IUserDTO> = await http.get('/users/current')
  return response.data
}
