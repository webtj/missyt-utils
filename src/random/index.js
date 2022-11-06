
/**
 * 获取随机颜色
 * @returns 返回随机颜色
 */
const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
}

/**
 * 返回min~max之间的数值，包括min和max
 * @param {number} min 最小值
 * @param {number} max 最大值   
 * @returns 返回范围内的整数值
 */
const getRandomInt = (min, max) => {
  let _min = Math.ceil(min)
  let _max = Math.floor(max)
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}

/**
 * 获取长度为len的随机字符串
 * @param {number} len 
 * @returns 随机len的字符串
 */
const getRandomString = (len = 16) => {
  let str = Math.random().toString(36).substr(2);
  if (str.length >= len) {
    return str.substr(0, len);
  }
  str += getRandomString(len - str.length);
  return str;
}

export {
  getRandomColor,
  getRandomInt,
  getRandomString
}
