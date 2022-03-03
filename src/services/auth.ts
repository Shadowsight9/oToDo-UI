import {
  loginSession,
  deleteSession,
  testSession,
  loginByGithubOAuth,
} from '@/apis'

import type { ILoginResponse } from '@/types/ISession'

import token from '@/utils/token'

export async function login(userName: string, password: string) {
  setToken(await loginSession(userName, password))
}

export async function loginViaGithub(code: string, state: string) {
  setToken(await loginByGithubOAuth(code, state))
}

export { getGithubOAuthRedirector } from '@/apis'

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

function setToken(response: ILoginResponse) {
  token.setAccessToken(response.accessToken, response.expiresIn)
  if (response.refreshToken) {
    token.setRefreshToken(response.refreshToken)
  }
}
