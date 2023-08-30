import { AxiosInstance, RawAxiosRequestHeaders, AxiosHeaders } from 'axios';
import { LHRequestInterceptors, MethodsHeaders, LHRequestConfig } from './types';
declare class PglAxios {
    instance: AxiosInstance;
    interceptors?: LHRequestInterceptors;
    constructor(config: any);
    /**
     * 统一接口处理
     * @param config
     * @returns
     */
    request<T>(config: LHRequestConfig): Promise<T>;
    get<T>(url: string, params?: any, headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders): Promise<T>;
    post<T>(url: string, data?: any, headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders): Promise<T>;
    delete<T>(url: string, params?: any, headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders): Promise<T>;
    patch<T>(url: string, data?: any, headers?: (RawAxiosRequestHeaders & MethodsHeaders) | LHRequestConfig): Promise<T>;
}
declare const _default: PglAxios;
export default _default;
