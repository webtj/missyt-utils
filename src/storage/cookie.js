//cookie相关的方法
import { isBrowser } from '../browser';
import { isNumber } from '../datatype'

/**
 * 获取指定key的cookie值
 * @param {string} name cookie名称
 * @returns cookie值
 */
const getCookie = (name) => {
  if (!isBrowser) throw new Error('getCookie is only available in browser');
  if (!name || !document.cookie) return null;
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return arr[2];
  else return null;
}

/**
 * 设置cookie
 * @param {string} name cookie名称
 * @param {string} value cookie值
 * @param {number} expires 过期时间，单位：天
 * @param {string} path 路径
 * @param {string} domain 域名
 * @returns 无
 */
const setCookie = (name, value, expires = 0, path = '/', domain = '') => {
  if (!isBrowser) throw new Error('setCookie is only available in browser');
  if (!name || !document.cookie) return;
  let cookieText = `${name}=${value}`;
  if (isNumber(expires)) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
    cookieText += `; expires=${date.toGMTString()}`;
  }
  if (path) cookieText += `; path=${path}`;
  if (domain) cookieText += `; domain=${domain}`;
  document.cookie = cookieText;
}

/**
 * 清除指定key的cookie
 * @param {string} name cookie名称
 * @param {string} path 路径
 * @param {string} domain 域名
 * @returns 无
 */
const removeCookie = (name, path = '/', domain = '') => {
  if (!isBrowser) throw new Error('removeCookie is only available in browser');
  if (!name || !document.cookie) return;
  setCookie(name, '', -1, path, domain);
}

export {
  getCookie,
  setCookie,
  removeCookie
}

