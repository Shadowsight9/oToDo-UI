import { http } from '@/apis/http'
import token from '@/utils/token'
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

  const { accessToken, expiresIn, refreshToken } =
    response.data as ILoginResponse

  // TODO[refactor]: do not handle biz logical here, this should only be related to api
  token.setAccessToken(accessToken, expiresIn)
  if (typeof refreshToken == 'string') {
    token.setRefreshToken(refreshToken)
  }
}
