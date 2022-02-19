import token from '@/utils/token'
import { http } from '@/apis/http'
import { AxiosResponse } from 'axios'
import { IUserDTO } from '@/types/IUser'

export const isLoggedIn = () => {
  if (typeof token.getAccessToken() === 'string') {
    return true
  } else {
    return false
  }
}

export const register = (
  userName: string,
  nickname: string,
  password: string
) => {
  return http.post('/users', {
    userName,
    password,
    nickname,
  })
}

export const getCurrentUser = async () => {
  const response: AxiosResponse<IUserDTO> = await http.get('/users/current')
  return response.data
}
