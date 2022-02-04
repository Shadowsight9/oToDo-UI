import request from '@/api/index'
import appStore from '@/store'

const user = appStore.useUserStore

/**
 * 是否为登录状态
 */
export const isLogin = (): boolean => {
  if (user.token) return true

  const token = localStorage.getItem('ACCESS_TOKEN')
  user.setToken(token || '')
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
    .then((data) => {
      const { token } = data
      if (token) {
        localStorage.setItem('ACCESS_TOKEN', token)
        user.setToken(token)
      }
      return data
    })
}
