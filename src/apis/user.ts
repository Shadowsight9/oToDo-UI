import token from '@/utils/token'
import { http } from '@/apis/http'

export const isLoggedIn = () => {
  if (typeof token.getAccessToken() === 'string') {
    return true
  } else {
    return false
  }
}

export const register = (
  userName: string,
  nickName: string,
  password: string
) => {
  return http.post('/users/', {
    user_name: userName,
    password: password,
    nickname: nickName,
  })
}
