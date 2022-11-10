//cookie相关的方法
import { isBrowser } from '../browser';
import { isNumber } from '../datatype';

/**
 * @function getCookie
 * @description 获取cookie
 * @param {string} name cookie名称
 * @returns {string} cookie值
 * @example getCookie('name')
 */
const getCookie = (name: string): string | null => {
  if (!isBrowser) throw new Error('getCookie is only available in browser');
  if (!name || !document.cookie) return null;
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return arr[2];
  else return null;
};

/**
 * @function setCookie
 * @description 设置cookie
 * @param {string} name cookie名称
 * @param {string} value cookie值
 * @param {number} expires 过期时间，单位：天
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * setCookie('name','zhangsan',1)
 * setCookie('name','zhangsan',1,'/','www.baidu.com')
 */
const setCookie = (name: string, value: string, expires = 0, path = '/', domain = ''): void => {
  if (!isBrowser) throw new Error('setCookie is only available in browser');
  if (!name || !document.cookie) return;
  let cookieText = `${name}=${value}`;
  if (isNumber(expires)) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
    cookieText += `; expires=${date.toUTCString()}`;
  }
  if (path) cookieText += `; path=${path}`;
  if (domain) cookieText += `; domain=${domain}`;
  document.cookie = cookieText;
};

/**
 * @function removeCookie
 * @description 清除cookie，或调用setCookie expires设置为负数
 * @param {string} name cookie名称
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * removeCookie('name')
 * removeCookie('name','/','www.baidu.com')
 */
const removeCookie = (name: string, path = '/', domain = '') => {
  if (!isBrowser) throw new Error('removeCookie is only available in browser');
  if (!name || !document.cookie) return;
  setCookie(name, '', -1, path, domain);
};

export { getCookie, setCookie, removeCookie };
