//字符串相关方法

import { isBrowser } from 'src/browser';

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

/**
 * @function str2Unicode
 * @description 字符串转unicode
 * @param {String} str
 * @returns {String}
 * @example str2Unicode('hello') // => '\\u0068\\u0065\\u006c\\u006c\\u006f'
 */
const str2Unicode = (str: string): string => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return '\\u' + res.join('\\u');
};

/**
 * @function unicode2Str
 * @description unicode转字符串
 * @param {String} str
 * @returns {String}
 * @example unicode2Str('\\u0068\\u0065\\u006c\\u006c\\u006f') // => 'hello'
 */
const unicode2Str = (unicodeStr: string): string => {
  return unescape(unicodeStr.replace(/\\/g, '%'));
};

//去除字符串空格
/**
 * @function trim
 * @description 去除字符串空格
 * @param {String} str
 * @param {String} type all-所有空格 before-前后空格 after-后空格 default-前后空格
 * @returns {String} 新的字符串
 * @example
 * trim(' hello world ', 'all') // => 'helloworld'
 * trim(' hello world ', 'before') // => 'hello world '
 * trim(' hello world ', 'after') // => ' hello world'
 * trim(' hello world ') // => 'hello world'
 */
const trim = (str: string, type = 'default'): string => {
  switch (type) {
    case 'all':
      return str.replace(/\s+/g, '');
    case 'before':
      return str.replace(/(^\s*)/g, '');
    case 'after':
      return str.replace(/(\s*$)/g, '');
    default:
      return str.replace(/(^\s*)|(\s*$)/g, '');
  }
};

/**
 * @function str2Base64
 * @description 字符串转base64
 * @param {String} str 原字符串
 * @returns {String}
 * @example
 * str2Base64('hello world') // => 'aGVsbG8gd29ybGQ='
 */
const str2Base64 = (str: string): string => {
  if (isBrowser()) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  return Buffer.from(str, 'utf-8').toString('base64');
};

/**
 * @function base642Str
 * @description base64转字符串
 * @param {String} str 原字符串
 * @returns {String}
 * @example
 * base642Str('aGVsbG8gd29ybGQ=') // => 'hello world'
 */
const base642Str = (str: string): string => {
  if (isBrowser()) {
    return decodeURIComponent(escape(atob(str)));
  }
  return Buffer.from(str, 'base64').toString('utf-8');
};

export { capitalize, camelize, insertStr, str2Unicode, unicode2Str, trim, str2Base64, base642Str };
