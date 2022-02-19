import { http } from '@/apis/http'
import token from '@/utils/token'
import { useUserStore } from '@/store/userStore'
import { ILoginResponse } from '@/types/ISession'
import { AxiosResponse } from 'axios'

enum Api {
  SessionURL = '/sessions',
  sessionTokenURL = '/sessions/current/tokens',
}

export const loginSession = async (userName: string, password: string) => {
  const resopnse: AxiosResponse<ILoginResponse> = await http.post(
    Api.SessionURL,
    {
      userName,
      password,
    },
    {
      headers: {
        needToken: false,
      },
    }
  )
  const { accessToken, expiresIn, refreshToken } = resopnse.data

  token.setAccessToken(accessToken, expiresIn)
  useUserStore().setuserName(userName)
  if (typeof refreshToken == 'string') {
    token.setRefreshToken(refreshToken)
  }
}

export const refreshSession = async () => {
  const resopnse: AxiosResponse<ILoginResponse> = await http.post(
    Api.sessionTokenURL
  )
  const { accessToken, expiresIn } = resopnse.data
  token.setAccessToken(accessToken, expiresIn)
}

export const testSession = () => {
  return http.get(Api.SessionURL)
}

export const deleteSession = async () => {
  await http.delete(Api.SessionURL)
  token.removeAllToken()
}
