import token from '@/utils/token'

export const isLoggedIn = () => {
  if (typeof token.getAccessToken() === 'string') {
    return true
  } else {
    return false
  }
}
