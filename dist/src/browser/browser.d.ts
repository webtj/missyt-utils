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
declare type WindowSize = {
    width: number;
    height: number;
};
/**
 * @function getWindowSize
 * @description 获取窗口宽高
 * @returns {object} 返回窗口宽高
 * @example getWindowSize() // => {width: 1920, height: 1080}
 **/
declare const getWindowSize: (includeScrollbar?: boolean) => WindowSize;
/**
 *
 */
declare type ScrollPosition = {
    x: number;
    y: number;
};
/**
 * @function getScrollPosition
 * @description 获取滚动条位置
 * @returns {object} 返回滚动条位置
 * @example getScrollPosition() // => {x: 0, y: 0}
 */
declare const getScrollPosition: () => ScrollPosition;
/**
 * @function copyText
 * @description 复制文本
 * @param {string} text 需要复制的文本
 * @example copyText('hello world')
 */
declare const copyText: (text: string, callback: () => unknown) => void;
/**
 * @function readClipboard
 * @description 读取剪贴板，需要用户触发事件
 * @param {Function} callback 回调函数
 * @example readClipboard((text) => console.log(text))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/readText
 */
declare const readClipboard: (callback: (text: string) => unknown) => void;
/**
 * @function selectText
 * @description 选中文本
 * @param {HTMLElement} element 需要选中的元素
 * @example selectText(document.getElementById('test'))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Selectionå
 */
declare const selectText: (element: HTMLElement) => void;
/**
 * @function getSelectionText
 * @description 获取选中的文本
 * @returns {string} 返回选中的文本
 * @example getSelectionText() // => 'hello world'
 */
declare const getSelectedText: () => string;
/**
 * @var browserUtils
 * @description 浏览器相关方法
 * @property {boolean} isBrowser 判断是否在浏览器环境
 * @property {function} getBrowserInfo 获取浏览器信息
 * @property {function} isFullScreen 判断是否全屏
 * @property {function} exitFullScreen 退出全屏
 * @property {function} fullScreen 使某个元素全屏
 * @property {function} getWindowSize 获取窗口宽高
 * @property {function} getScrollPosition 获取滚动条位置
 * @property {function} copyText 复制文本
 * @property {function} readClipboard 读取粘贴板内容
 */
declare const browserUtils: {
    isBrowser: boolean;
    getBrowserInfo: () => object;
    isFullScreen: () => boolean;
    exitFullScreen: () => void;
    fullScreen: (element: HTMLElement) => void;
    getWindowSize: (includeScrollbar?: boolean) => WindowSize;
    getScrollPosition: () => ScrollPosition;
    copyText: (text: string, callback: () => unknown) => void;
    readClipboard: (callback: (text: string) => unknown) => void;
    selectText: (element: HTMLElement) => void;
    getSelectedText: () => string;
};
export { isBrowser, getBrowserInfo, fullScreen, isFullScreen, exitFullScreen, getWindowSize, getScrollPosition, copyText, readClipboard, browserUtils, selectText, getSelectedText, };
