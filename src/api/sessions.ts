/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from './request'
import token from '@/utils/token'
import { useUserStore } from '@/store/userStore'
import { TLoginResponse } from '@/types/session'

const request = Request.getInstance()

export const loginSession = async (name: string, pwd: string) => {
  try {
    const resopnse: unknown = await request.axiosInstance({
      method: 'post',
      url: '/sessions',
      headers: {
        needToken: false,
      },
      data: {
        user_name: name,
        password: pwd,
      },
    })
    const { access_token, expires_in, refresh_token } =
      resopnse as TLoginResponse

    token.setAccessToken(access_token, expires_in)
    useUserStore().setuserName(name)
    if (typeof refresh_token == 'string') {
      token.setRefreshToken(refresh_token)
    }

    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const refreshSession = async () => {
  try {
    const resopnse: unknown = await request.axiosInstance({
      url: '/sessions/token',
      method: 'post',
    })

    const { access_token, expires_in } = resopnse as TLoginResponse
    token.setAccessToken(access_token, expires_in)

    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}

export const testSession = async () => {
  return await request.axiosInstance({
    url: '/sessions',
    method: 'get',
  })
}

export const deleteSession = async () => {
  const refreshToken = token.getRefreshToken()
  try {
    await request.axiosInstance({
      url: '/sessions',
      method: 'delete',
      data: { refresh_token: refreshToken },
    })
    token.removeAllToken()
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
