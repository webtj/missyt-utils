/**
 * @function getQueryString
 * @description 获取url参数
 * @param name params name
 * @param url url 默认为当前页面url
 * @returns params value
 * @example getQueryString('id', 'https://www.baidu.com?id=1') // => '1'
 */
declare const getQueryString: (name: string, url?: string) => string;
/**
 * @function url2Obj
 * @description url转对象
 * @param url url 默认为当前页面url
 * @returns object
 * @example url2Obj('https://www.baidu.com?id=1') // => { id: '1' }
 */
declare const url2Obj: (url: string) => object;
/**
 * @function obj2Url
 * @description 对象转url
 * @param obj object
 * @returns url
 * @example obj2Url({ id: '1',name: 'xx' }) // => 'id=1&name=xx'
 */
declare const obj2Url: (obj: object) => string;
/**
 * @var urlUtils
 * @description url工具方法
 * @property {function} getQueryString 获取url参数
 * @property {function} url2Obj url转对象
 * @property {function} obj2Url 对象转url
 */
declare const urlUtils: {
    getQueryString: (name: string, url?: string) => string;
    url2Obj: (url: string) => object;
    obj2Url: (obj: object) => string;
};
export { getQueryString, url2Obj, obj2Url, urlUtils };
