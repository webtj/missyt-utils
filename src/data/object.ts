/**
 * @function getObjKeys
 * @description 获取对象的所有键
 * @param {object} obj
 * @returns {string[]}
 * @example
 * getObjKeys({a: 1, b: 2}) // ['a', 'b']
 */
const getObjKeys = (obj: object): string[] => Object.keys(obj);

/**
 * @function isEmptyObject
 * @description 判断对象是否为空
 * @param {object} obj
 * @returns {boolean}
 * @example
 * isEmptyObject({}) // true
 * isEmptyObject({a: 1}) // false
 */
const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export { getObjKeys, isEmptyObject };
