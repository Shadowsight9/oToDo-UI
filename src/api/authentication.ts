import { Request } from './request'
import { AxiosRequestConfig } from 'axios'
export default {
  loginAuthentication: (options?: AxiosRequestConfig): Promise<any> =>
    Request.axiosInstance({
      url: '/session',
      method: 'post',
      ...options,
    }),

  refreshAuthentication: (options?: AxiosRequestConfig): Promise<any> =>
    Request.axiosInstance({
      url: '/session',
      method: 'post',
      ...options,
    }),

  testAuthentication: (options?: AxiosRequestConfig): Promise<any> =>
    Request.axiosInstance({
      url: '/session',
      method: 'get',
      ...options,
    }),
}
