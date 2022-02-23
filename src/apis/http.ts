import token from '@/utils/token'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import jsonBigInt from 'json-bigint'

const JSONBig = jsonBigInt({ useNativeBigInt: true })

export class Http {
  private static instance: Http
  public axiosInstance: AxiosInstance

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/api',
      timeout: 10000,
      transformResponse: [(data) => JSONBig.parse(data)],
    })

    this.initInterceptors()
  }

  public static getInstance() {
    if (!Http.instance) {
      Http.instance = new Http()
    }
    return Http.instance
  }

  private requestSuccess(config: AxiosRequestConfig<any>) {
    if (config.headers && config.headers.needToken !== false) {
      config.headers['Authorization'] = 'Bearer ' + token.getAccessToken()
    }
    return config
  }

  private requestFail(error: any) {
    Promise.reject(error.toJSON())
  }

  private responseSuccess(response: AxiosResponse<any, any>) {
    // 检查响应头中是否含有Authorization字段
    if (response.headers && response.headers.authorization) {
      const jwtString = response.headers.authorization.split(' ')[1]
      token.setAccessToken(jwtString)
    }
    return Promise.resolve(response)
  }

  private responseFail(error: AxiosError) {
    const res = error.response
    if (res) {
      switch (res.status) {
        case 400:
          error.message = '用户名或密码错误，请重试'
          break
        case 412:
          error.message = '客户端请求信息的先决条件错误'
          break
        case 401: // unauthorized
          error.message = '登录失效，请重新登录'
          break
        case 500: // 服务器内部错误
        case 502: // Bad Gateway
        case 504: // Gateway Time-out
        case 505: // HTTP Version not supported
          error.message = '服务器未响应，请联系管理员'
          break
        case 503: // 服务器繁忙
          error.message = '服务器繁忙，请重试'
          break
        case 501: // 请求方法不支持
          error.message = '服务器不支持请求的功能，无法完成请求'
          break
        default:
          error.message = '系统异常，请联系管理员'
          break
      }
    } else if (error.message === 'Network Error') {
      error.message = '请检查网络连接是否正常'
    }
    return Promise.reject(error)
  }

  private initInterceptors() {
    this.axiosInstance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'

    this.axiosInstance.interceptors.request.use(
      this.requestSuccess,
      this.requestFail
    )

    this.axiosInstance.interceptors.response.use(
      this.responseSuccess,
      this.responseFail
    )
  }
}

export const http = Http.getInstance().axiosInstance
