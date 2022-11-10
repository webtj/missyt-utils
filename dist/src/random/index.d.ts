/**
 * @function getRandomColor
 * @description 获取随机颜色
 * @returns {string} 随机颜色 #3e3e3e
 * @example getRandomColor() // #3e3e3e
 */
declare const getRandomColor: () => string;
/**
 * @function getRandomNumber
 * @description 获取[min~max]范围内的随机数，包含min和max
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机数
 * @example getRandomNumber(1,10) // 5
 */
declare const getRandomInt: (min: number, max: number) => number;
/**
 * @function getRandomString
 * @description 获取指定长度的随机字符串
 * @param {number} len 长度
 * @returns {string} 随机字符串
 * @example getRandomString(10) // 'wdsdwdq2d3'
 */
declare const getRandomString: (len?: number) => string;
export { getRandomColor, getRandomInt, getRandomString };
