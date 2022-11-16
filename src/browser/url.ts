/**
 * @function getQueryString
 * @description 获取url参数
 * @param name params name
 * @param url url 默认为当前页面url
 * @returns params value
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
 * @function url2Obj
 * @description url转对象
 * @param url url 默认为当前页面url
 * @returns object
 * @example url2Obj('https://www.baidu.com?id=1') // => { id: '1' }
 */
const url2Obj = (url: string): object => {
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
 * @param obj object
 * @returns url
 * @example obj2Url({ id: '1',name: 'xx' }) // => 'id=1&name=xx'
 */
const obj2Url = (obj: object): string => {
  let str = '';
  for (const key in obj) {
    str += `${key}=${obj[key]}&`;
  }
  return str.slice(0, -1);
};

/**
 * @var urlUtils
 * @description url工具方法
 * @property {function} getQueryString 获取url参数
 * @property {function} url2Obj url转对象
 * @property {function} obj2Url 对象转url
 */
const urlUtils = {
  getQueryString,
  url2Obj,
  obj2Url,
};

export { getQueryString, url2Obj, obj2Url, urlUtils };
