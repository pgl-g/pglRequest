import axios, { AxiosInstance, RawAxiosRequestHeaders, AxiosHeaders } from 'axios';

import { LHRequestInterceptors, MethodsHeaders, LHRequestConfig } from './types'


const config = {
  timeout: 10000,
}

class PglAxios {
  instance: AxiosInstance;
  interceptors?: LHRequestInterceptors;
  constructor(config) {
    this.instance = axios.create(config);
    this.interceptors = config?.interceptors;
    /** 
     * @内部
     * 优先处理内部
     * 请求拦截
    */
    this.instance.interceptors.request.use((config: any) => {
      return {
        ...config,
        headers: {
          ...config.headers
        }
      }
    })
    /**
     * @外部
     * 处理自定义请求拦截
     */
    this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorCatch)

    /**
     * @外部处理响应拦截
     * response响应数据一般外面用户自定义处理
     */
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

  }


  /**
   * 统一接口处理
   * @param config 
   * @returns 
   */
  request<T>(config: LHRequestConfig): Promise<T> {
    return this.instance.request<any, T>(config);
  }

  get<T>(
    url: string,
    params?: any,
    headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
  ): Promise<T> {
    return this.request<T>({ url, params, headers, method: "GET" });
  }
  post<T>(
    url: string,
    data?: any,
    headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
  ): Promise<T> {
    return this.request<T>({ url, data, headers, method: "POST" });
  }
  delete<T>(
    url: string,
    params?: any,
    headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
  ): Promise<T> {
    return this.request<T>({ url, params, headers, method: "DELETE" });
  }
  patch<T>(
    url: string,
    data?: any,
    headers?: (RawAxiosRequestHeaders & MethodsHeaders) | LHRequestConfig
  ): Promise<T> {
    return this.request<T>({ url, data, headers, method: "PATCH" });
  }


}

export default new PglAxios(config)


