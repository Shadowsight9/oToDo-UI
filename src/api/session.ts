/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from './request'
import { AxiosRequestConfig } from 'axios'
export const loginSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/session',
    method: 'post',
    ...options,
  })

export const refreshSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/session/token',
    method: 'post',
    ...options,
  })

export const testSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/session',
    method: 'get',
    ...options,
  })

export const deleteSession = (options?: AxiosRequestConfig): Promise<any> =>
  Request.axiosInstance({
    url: '/session',
    method: 'delete',
    ...options,
  })
