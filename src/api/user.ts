import { Request } from './request'
import { IRequestParams } from '@/types/request'
import { TUser } from '@/types/user'

export default {
  userAuthority: (options?: IRequestParams): Promise<any> =>
    Request.axiosInstance({
      url: '/session',
      method: 'post',
      desc: '获取Token',
      isJSON: true,
      ...options,
    }),

  userInfo: (options?: IRequestParams): Promise<TUser> =>
    Request.axiosInstance({
      url: '/userInfo',
      method: 'post',
      desc: '获取用户信息',
      isJSON: true,
      ...options,
    }),
}
