/**
 * 
 * @param {object} obj 待复制的对象
 * @param {WeakMap} cache  循环引用内存溢出，使用WeakMap缓存
 * @returns 靠背后的对象
 */
const deepClone = (obj, cache = new WeakMap()) => {
  if (obj === null) return null
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== 'object') return obj
  if (cache.has(obj)) return cache.get(obj)
  let result = new obj.constructor
  cache.set(obj, result)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], cache)
    }
  }
  return result
}


export {
  deepClone
}