/**
 * @function deepClone
 * @description 深克隆
 * @param {any} obj 要克隆的对象
 * @returns {any} 克隆后的对象
 * @example deepClone({a:1,b:2}) // {a:1,b:2}
 */
const deepClone = (obj: object, cache = new WeakMap()) => {
  if (obj === null) return null;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  if (cache.has(obj)) return cache.get(obj);
  const result = Array.isArray(obj) ? [] : {};
  cache.set(obj, result);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], cache);
    }
  }
  return result;
};

export { deepClone };
