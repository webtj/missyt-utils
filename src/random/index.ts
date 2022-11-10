/**
 * @function getRandomColor
 * @description 获取随机颜色
 * @returns {string} 随机颜色 #3e3e3e
 * @example getRandomColor() // #3e3e3e
 */
const getRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;
};

/**
 * @function getRandomNumber
 * @description 获取[min~max]范围内的随机数，包含min和max
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机数
 * @example getRandomNumber(1,10) // 5
 */
const getRandomInt = (min: number, max: number): number => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
};

/**
 * @function getRandomString
 * @description 获取指定长度的随机字符串
 * @param {number} len 长度
 * @returns {string} 随机字符串
 * @example getRandomString(10) // 'wdsdwdq2d3'
 */
const getRandomString = (len = 16): string => {
  let str = Math.random().toString(36).substr(2);
  if (str.length >= len) {
    return str.substr(0, len);
  }
  str += getRandomString(len - str.length);
  return str;
};

export { getRandomColor, getRandomInt, getRandomString };
