/**
 * @function getQueryString
 * @description 获取url参数
 * @param {String} name params name
 * @param {String} url url 默认为当前页面url
 * @returns {String} params value
 * @example getQueryString('id', 'https://www.baidu.com?id=1') // => '1'
 */
const getQueryString = (name: string, url = window.location.href): string => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = url.split('?')[1].match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return '';
};

/**
 * @function getUrlParams
 * @description 获取url所有参数对象
 * @param {String} url url 默认为当前页面url
 * @returns {Object} params object
 * @example getUrlParams('https://www.baidu.com?id=1&name=xx') // => { id: '1', name: 'xx' }
 */
const getUrlParams = (url = window.location.href): object => {
  const params = {};
  if (url.indexOf('?') > -1 && url.indexOf('=') > -1) {
    const str = url.split('?')[1];
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
    }
  }
  return params;
};

/**
 * @function url2Obj
 * @description url转对象
 * @param {String} url 默认为当前页面url
 * @returns {Object} object
 * @example url2Obj('https://www.baidu.com?id=1') // => { id: '1' }
 */
const url2Obj = (url = window.location.href): object => {
  const obj = {};
  if (url.indexOf('?') > -1 && url.indexOf('=') > -1) {
    const arr = url.split('?')[1].split('&');
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i].split('=');
      obj[arr2[0]] = decodeURIComponent(arr2[1]);
    }
  }
  return obj;
};

/**
 * @function obj2Url
 * @description 对象转url
 * @param {Object} obj object
 * @returns {String} url
 * @example obj2Url({ id: '1',name: 'xx' }) // => 'id=1&name=xx'
 */
const obj2Url = (obj: object): string => {
  let str = '';
  for (const key in obj) {
    str += `${key}=${obj[key]}&`;
  }
  return str.slice(0, -1);
};

export { getQueryString, getUrlParams, url2Obj, obj2Url };
