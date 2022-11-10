/**
 * @function deepClone
 * @description 深克隆
 * @param {any} obj 要克隆的对象
 * @returns {any} 克隆后的对象
 * @example deepClone({a:1,b:2}) // {a:1,b:2}
 */
declare const deepClone: (obj: object, cache?: WeakMap<object, any>) => any;
export { deepClone };
