/**
 * 取消请求
 * 1. 添加请求
 * 2. 移除请求
 * 3，移除全部请求
 * 4. 重置
 */
export declare const pendingURlStringily: (config: any) => string;
export default class AxiosCancel {
    addPending(config: any): void;
    removePending(config: any): void;
    /**
     * 移除全部请求
     */
    removeAllPending(): void;
    /**
    * 重置
    */
    reset(): void;
}
