import { AxiosRequestConfig, AxiosHeaders } from 'axios';
/**
 * @requestInterceptor 拦截
 * @requestInterceptorCatch 错误的拦截
 * @responseInterceptor 响应成功的拦截
 * @responseInterceptorCatch 响应失败错误的拦截
 */
export interface LHRequestInterceptors {
    requestInterceptor?: (request: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (requestError: any, options?: any) => any;
    responseInterceptor?: (response: any) => any;
    responseInterceptorCatch?: (responseError: any, options?: any) => any;
}
/**
* @interceptors axios实例
* @kl_token 用户token
* @kl_t 请求时间戳，毫秒
* @kl_os_type 操作系统类型：0、空缺（默认：客户端未填，当做0）1、Android 2、IOS 3、PC
* @kl_platform 平台：0、空缺（默认：客户端未填，当做0）1、APP 2、微信小程序XCX 3、浏览器Browser
* @kl_display_type 展示类型：0、空缺(默认：客户端未填，当作0) 1、Native 2、H5
* @kl_device_id 设备UUID
* @kl_trace_id 字符串，链路跟踪ID，使用UUID 算法生成
* @kl_server_url 联调使用
* @baseURL 昆仑地址 url
*/
export interface LHRequestConfig extends AxiosRequestConfig {
    interceptors?: LHRequestInterceptors;
    headers?: AxiosRequestConfig["headers"];
    [key: string]: any;
}
export type Method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK";
export type MethodsHeaders = Partial<{
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
} & {
    common: AxiosHeaders;
}>;
