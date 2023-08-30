

/**
 * 取消请求
 * 1. 添加请求
 * 2. 移除请求
 * 3，移除全部请求
 * 4. 重置
 */

import qs from 'qs';
import axios from 'axios';


let pending = new Map(); // 存储每个请求的标识 和 请求函数

// 序列化参数
export const pendingURlStringily = (config) => {
  return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");
}

export default class AxiosCancel {

  // 添加请求
  addPending(config: any) {
    this.removePending(config);
    const url = pendingURlStringily(config)
    config.cancelToken = config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pending.has(url)) {
          pending.set(url, cancel)
        }
      })
  }

  // 移除请求
  removePending(config) {
    const url = pendingURlStringily(config);
    if (pending.has(url)) {
      // 如果pending 中存在请求标识，需要取消当前请求，并且移除
      const cancel = pending.get(url);
      cancel && cancel();
      pending.delete(cancel);
    }
  }

  /**
   * 移除全部请求
   */
  removeAllPending() {
    pending.forEach(cancel => {
      cancel && isFunction(cancel) && cancel();
    });
    pending.clear();
  }

  /**
  * 重置
  */
  reset() {
    pending = new Map();
  }

}