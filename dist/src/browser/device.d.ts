/**
 * @function getOS
 * @description 获取设备的操作系统
 * @returns {string} 返回操作系统
 * @example getOS() // => 'MacOS'
 */
declare const getOS: () => string;
/**
 * @function isWeiXin
 * @description 判断是否为微信浏览器
 * @returns {boolean} true or false
 * @example isWeiXin() // => true
 */
declare const isWeiXin: () => boolean;
/**
 * @function isMobile
 * @description 判断是否为移动端
 * @returns {boolean} 返回判断结果
 * @example isMobile() // => true
 */
declare const isMobile: () => boolean;
/**
 * @var deviceUtils
 * @description 设备类方法
 * @property {function} getOS - 获取设备的操作系统
 * @property {function} isWeiXin - 判断是否为微信浏览器
 * @property {function} isMobile - 判断是否为移动端
 */
declare const deviceUtils: {
    getOS: () => string;
    isWeiXin: () => boolean;
    isMobile: () => boolean;
};
export { getOS, isWeiXin, isMobile, deviceUtils };
