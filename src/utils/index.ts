
/**
 * 是否是函数
 * @param val 
 * @returns 
 */
function isFunction(val) {
    return String.call(val) === '[object Function]'
}