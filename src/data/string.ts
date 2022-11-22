//字符串相关方法

/**
 * @function capitalize
 * @description 首字母大写
 * @param {String} str
 * @returns {String}
 * @example capitalize('hello') // => 'Hello'
 */
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * @function camelize
 * @description 字符串改驼峰
 * @param {String} str
 * @returns {String}
 * @example camelize('hello-world') // => 'helloWorld'
 * camelize('hello_world') // => 'helloWorld'
 * camelize('hello world') // => 'helloWorld'
 * camelize('helloWorld') // => 'helloWorld'
 */
const camelize = (str: string): string => {
  return str.replace(/[-_\s]+(.)?/g, (match, c) => (c ? c.toUpperCase() : ''));
};

/**
 * @function insertStr
 * @description 指定下标插入字符串
 * @param {String} str 原字符串
 * @param {Number} index 下标
 * @param {Number} index 插入字符串
 * @returns {String}
 * @example insertStr('hello', 5, ' world') // => 'hello world'
 */
const insertStr = (str: string, index: number, value: string): string => {
  return str.slice(0, index) + value + str.slice(index);
};

export { capitalize, camelize, insertStr };
