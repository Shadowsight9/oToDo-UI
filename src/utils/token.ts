import cookie from './cookie'
import { jwtToExpireTime } from '@/utils/jwt'

const setAccessToken = (token: string, maxAge?: number): void => {
  if (maxAge) {
    cookie.setCookie('ACCESS_TOKEN', '', maxAge)
  } else {
    cookie.setCookie('ACCESS_TOKEN', '', jwtToExpireTime(token))
  }
  localStorage.setItem('ACCESS_TOKEN', token)
}

const setRefreshToken = (token: string): void => {
  localStorage.setItem('REFRESH_TOKEN', token)
}

const getAccessToken = (): string | null => {
  if (cookie.getCookie('ACCESS_TOKEN') !== null) {
    return localStorage.getItem('ACCESS_TOKEN')
  } else {
    return null
  }
}

const getRefreshToken = (): string | null => {
  return localStorage.getItem('REFRESH_TOKEN')
}

const removeAllToken = () => {
  cookie.clearCookie('ACCESS_TOKEN')
  localStorage.removeItem('ACCESS_TOKEN')
  localStorage.removeItem('REFRESH_TOKEN')
}

export default {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  removeAllToken,
}
