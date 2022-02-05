import authentication from './authentication'
import { useUserStore } from '@/store/userStore'
import { TLoginResponse } from '@/types/session'

export const login = async (
  userName: string,
  password: string
): Promise<boolean> => {
  try {
    const responseBody: TLoginResponse =
      await authentication.loginAuthentication({
        data: {
          user_name: userName,
          password: password,
        },
      })
    localStorage.setItem('ACCESS_TOKEN', responseBody.access_token)
    localStorage.setItem('REFRESH_TOKEN', responseBody.refresh_token)
    return true
  } catch (error) {
    // debugger
    return false
  }
}
