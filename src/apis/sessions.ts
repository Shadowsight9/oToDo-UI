import { http } from '@/apis/http'

import { ILoginResponse } from '@/types/ISession'
import { AxiosResponse } from 'axios'

enum Api {
  SessionURL = '/sessions',
  sessionTokenURL = '/sessions/current/tokens',
}

export async function loginSession(userName: string, password: string) {
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
  return resopnse.data
}

export async function refreshSession() {
  const resopnse: AxiosResponse<ILoginResponse> = await http.post(
    Api.sessionTokenURL
  )
  return resopnse.data
}

export async function testSession() {
  return http.get(Api.SessionURL)
}

export async function deleteSession() {
  await http.delete(Api.SessionURL)
}
