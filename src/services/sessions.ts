import { loginSession, deleteSession, testSession } from '@/apis'
import token from '@/utils/token'

export async function login(userName: string, password: string) {
  const { accessToken, expiresIn, refreshToken } = await loginSession(
    userName,
    password
  )
  token.setAccessToken(accessToken, expiresIn)
  if (typeof refreshToken == 'string') {
    token.setRefreshToken(refreshToken)
  }
}

export async function refresh() {
  await testSession()
}

export async function logout() {
  await deleteSession()
  token.removeAllToken()
}

export function isLoggedIn() {
  if (typeof token.getAccessToken() === 'string') {
    return true
  } else {
    return false
  }
}
