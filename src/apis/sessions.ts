import { http } from '@/apis/http'
import token from '@/utils/token'
import { useUserStore } from '@/store/userStore'
import { ILoginResponse } from '@/types/ISession'
import { AxiosResponse } from 'axios'

enum Api {
  SessionURL = '/sessions',
  sessionTokenURL = '/sessions/current/tokens',
}

export const loginSession = async (name: string, pwd: string) => {
  const resopnse: AxiosResponse<ILoginResponse> = await http.post(
    Api.SessionURL,
    {
      user_name: name,
      password: pwd,
    },
    {
      headers: {
        needToken: false,
      },
    }
  )
  const { access_token, expires_in, refresh_token } = resopnse.data

  token.setAccessToken(access_token, expires_in)
  useUserStore().setuserName(name)
  if (typeof refresh_token == 'string') {
    token.setRefreshToken(refresh_token)
  }
}

export const refreshSession = async () => {
  const resopnse: AxiosResponse<ILoginResponse> = await http.post(
    Api.sessionTokenURL
  )
  const { access_token, expires_in } = resopnse.data
  token.setAccessToken(access_token, expires_in)
}

export const testSession = () => {
  return http.get(Api.SessionURL)
}

export const deleteSession = async () => {
  await http.delete(Api.SessionURL)
  token.removeAllToken()
}
