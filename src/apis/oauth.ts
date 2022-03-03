import { http } from '@/apis/http'
import type { OAuthRedirector } from '@/types/IOAuth'
import type { ILoginResponse } from '@/types/ISession'

export const getGithubOAuthRedirector = async () => {
  const response = await http.get('/sessions/oauth/github')
  return response.data as OAuthRedirector
}

export const loginByGithubOAuth = async (code: string, state: string) => {
  const response = await http.post(
    '/sessions/oauth/github',
    { code, state },
    { headers: { needToken: false } }
  )
  return response.data as ILoginResponse
}
