/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from './request'
import { AxiosRequestConfig } from 'axios'
export const loginSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/sessions',
    headers: {
      needToken: false,
    },
    method: 'post',
    ...options,
  })

export const refreshSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/sessions/token',
    method: 'post',
    ...options,
  })

export const testSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/sessions',
    method: 'get',
    ...options,
  })

export const deleteSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/sessions',
    method: 'delete',
    ...options,
  })
