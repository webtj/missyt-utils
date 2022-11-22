//数组相关方法

/**
 * @function isEmptyArray
 * @description 判断是否是空数组
 * @param {Array} arr
 * @returns {boolean}
 * @example
 * isEmptyArray([]) // true
 * isEmptyArray([1]) // false
 */
const isEmptyArray = (arr: any[]) => {
  return arr.length === 0;
};

export { isEmptyArray };
