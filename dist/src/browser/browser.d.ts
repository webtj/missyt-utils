/**
 * @var isBrowser
 * @description 判断是否为浏览器环境
 * @returns {boolean} 返回判断结果
 * @example if(isBrowser){...}
 */
declare const isBrowser: boolean;
/**
 * @function getBrowserInfo
 * @description 获取浏览器信息
 * @returns {object} 返回浏览器信息
 * @example getBrowserInfo() // => {"type": "Chrome","version": 107,"onLine": true,"platform": "MacIntel","cookieEnabled": true,"language": "zh-CN"}
 */
declare const getBrowserInfo: () => object;
/**
 * @function isFullScreen
 * @description 判断是否全屏
 * @returns {boolean} 返回判断结果
 * @example isFullScreen() // => true
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
declare const isFullScreen: () => boolean;
/**
 * @function exitFullScreen
 * @description 退出全屏
 * @return {void} 无返回值
 * @example exitFullScreen()
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
declare const exitFullScreen: () => void;
/**
 * @function fullScreen
 * @description 使某个元素全屏
 * @param {HTMLElement} element 需要全屏的元素
 * @return {void} 无返回值
 * @example fullScreen(document.documentElement)
 */
declare const fullScreen: (element: HTMLElement) => void;
export { isBrowser, getBrowserInfo, fullScreen, isFullScreen, exitFullScreen };
