import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import loca from '@/utils/storage/loca'
export const BASE_URL = {
  baseURL: 'http://120.48.48.64:8096/api',
  timeout: 50000,
  interceptors: {
    requests(config: InternalAxiosRequestConfig<any>) {
      // 请求拦截器
      const token = loca.getItem('token')
      if (token) config.headers.token = token
      return config
    },
    requesterr(err: any) {
      // 请求错误拦截器
      return err
    },
    responses(config: AxiosResponse<any>) {
      // 响应拦截器
      return config
    },
    responseserr(err: any) {
      // 响应错误拦截器
      return err
    }
  }
}
