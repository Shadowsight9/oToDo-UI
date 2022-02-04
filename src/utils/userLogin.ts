import request from '@/api/index'
import { useUserStore } from '@/store/userStore'

/**
 * 是否为登录状态
 */
export const isLogin = (): boolean => {
  if (useUserStore().token) return true

  const token = localStorage.getItem('ACCESS_TOKEN')
  useUserStore().setToken(token || '')
  return !!token
}

/**
 * 登录
 * @param userName
 * @param password
 */
export const login = (userName: string, password: string) => {
  return request.user
    .userAuthority({
      data: {
        user_name: userName,
        password: password,
      },
    })
    .then((responseBody) => {
      const {
        access_token: accessToken,
        token_type: tokenType,
        expires_in: expiresIn,
        refresh_token: refreshToken,
      } = responseBody
      localStorage.setItem('ACCESS_TOKEN', accessToken)
      localStorage.setItem('REFRESH_TOKEN', refreshToken)
      useUserStore().setToken(accessToken)
    })
}
