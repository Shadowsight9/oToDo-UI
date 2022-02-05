import cookie from './cookie'

const setAccessToken = (token: string, maxAge: number): void => {
  cookie.clearCookie('ACCESS_TOKEN')
  cookie.setCookie('ACCESS_TOKEN', '', maxAge)
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

export default {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
}
