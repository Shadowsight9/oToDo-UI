import { http } from '@/apis/http'
import { AxiosResponse } from 'axios'
import { INavItemDTO } from '@/types/INavItem'

export const getCurrentMenu = async () => {
  const response: AxiosResponse<INavItemDTO[]> = await http.get(
    '/users/current/menu'
  )
  return response.data
}
