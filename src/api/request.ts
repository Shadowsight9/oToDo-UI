/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import token from '@/utils/token'

interface MyAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>
  (url: string, config?: AxiosRequestConfig): Promise<any>
}

export class Request {
  public static axiosInstance: MyAxiosInstance

  public static init() {
    this.axiosInstance = axios.create({
      baseURL: '/api',
      timeout: 10000,
    })
    this.initInterceptors()
  }

  // 初始化拦截器
  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (config.headers && config.headers.needToken !== false) {
          config.headers.Authorization = 'Bearer ' + token.getAccessToken()
        }
        return config
      },
      (error) => {
        console.log('请求失败', error)
      }
    )

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      // 请求成功
      (response: AxiosResponse) => {
        // 检查响应头中是否含有Authorization字段
        if (response.headers && response.headers.authorization) {
          const jwtString = response.headers.authorization.split(' ')[1]
          token.setAccessToken(jwtString)
        }
        return Promise.resolve(response.data)
      },
      // 请求失败
      (error: AxiosError): Promise<any> => {
        const { response, message } = error
        // if (response) {
        //   // 请求已发出，但是不在2xx的范围
        //   Request.errorHandle(response)
        // } else {
        //   //Toast.fail('网络连接异常,请稍后再试!')
        // }
        return Promise.reject(message)
      }
    )
  }

  private static errorHandle(res: any, message?: string) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break
      case 403:
        break
      case 404:
        break
      default:
      // 错误信息判断
    }
  }
}
