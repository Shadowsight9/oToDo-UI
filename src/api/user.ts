import {
  loginSession,
  refreshSession,
  testSession,
  deleteSession,
} from './session'
import token from '@/utils/token'
import { useUserStore } from '@/store/userStore'
import { TLoginResponse } from '@/types/session'

export const login = async (
  userName: string,
  password: string
): Promise<boolean> => {
  try {
    const responseBody: TLoginResponse = await loginSession({
      data: {
        user_name: userName,
        password: password,
      },
    })
    const { access_token, expires_in, refresh_token } = responseBody
    token.setAccessToken(access_token, expires_in)
    useUserStore().setuserName(userName)
    if (typeof refresh_token == 'string') {
      token.setRefreshToken(refresh_token)
    }

    return true
  } catch (error) {
    // debugger
    return false
  }
}

export const refreshState = async (): Promise<boolean> => {
  const refreshToken = token.getRefreshToken()
  if (typeof refreshToken == 'string') {
    try {
      const responseBody: TLoginResponse = await refreshSession({
        data: {
          refresh_token: refreshToken,
        },
      })
      const { access_token, expires_in } = responseBody
      token.setAccessToken(access_token, expires_in)
      return true
    } catch (err) {
      return false
    }
  }
  return false
}

export const testState = async (): Promise<boolean> => {
  try {
    await testSession()
    return true
  } catch (err) {
    return false
  }
}

export const logout = async (): Promise<boolean> => {
  const refreshToken = token.getRefreshToken()
  try {
    await deleteSession({
      data: { refresh_token: refreshToken },
    })
    token.removeAllToken()
    return true
  } catch (err) {
    return false
  }
}
