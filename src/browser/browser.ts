/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/**
 * @var isBrowser
 * @description 判断是否为浏览器环境
 * @returns {boolean} 返回判断结果
 * @example if(isBrowser){...}
 */
const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';

/**
 * @function getBrowserInfo
 * @description 获取浏览器信息
 * @returns {object} 返回浏览器信息
 * @example getBrowserInfo() // => {"type": "Chrome","version": 107,"onLine": true,"platform": "MacIntel","cookieEnabled": true,"language": "zh-CN"}
 */
const getBrowserInfo = (): object => {
  const { userAgent, onLine, platform, cookieEnabled, language } = navigator;
  const t = userAgent.toLowerCase();
  const result =
    0 <= t.indexOf('msie')
      ? {
          //ie < 11
          type: 'IE',
          version: Number(t.match(/msie ([\d]+)/)?.[1]),
        }
      : !!t.match(/trident\/.+?rv:(([\d.]+))/)
      ? {
          // ie 11
          type: 'IE',
          version: 11,
        }
      : 0 <= t.indexOf('edge')
      ? {
          type: 'Edge',
          version: Number(t.match(/edge\/([\d]+)/)?.[1]),
        }
      : 0 <= t.indexOf('firefox')
      ? {
          type: 'Firefox',
          version: Number(t.match(/firefox\/([\d]+)/)?.[1]),
        }
      : 0 <= t.indexOf('chrome')
      ? {
          type: 'Chrome',
          version: Number(t.match(/chrome\/([\d]+)/)?.[1]),
        }
      : 0 <= t.indexOf('opera')
      ? {
          type: 'Opera',
          version: Number(t.match(/opera.([\d]+)/)?.[1]),
        }
      : 0 <= t.indexOf('safari')
      ? {
          type: 'Safari',
          version: Number(t.match(/version\/([\d]+)/)?.[1]),
        }
      : {
          type: t,
          version: -1,
        };

  return {
    ...result,
    onLine,
    platform,
    cookieEnabled,
    language,
  };
};

/**
 * @function isFullScreen
 * @description 判断是否全屏
 * @returns {boolean} 返回判断结果
 * @example isFullScreen() // => true
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
const isFullScreen = (): boolean => {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
};

/**
 * @function exitFullScreen
 * @description 退出全屏
 * @return {void} 无返回值
 * @example exitFullScreen()
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
const exitFullScreen = (): void => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

/**
 * @function fullScreen
 * @description 使某个元素全屏
 * @param {HTMLElement} element 需要全屏的元素
 * @return {void} 无返回值
 * @example fullScreen(document.documentElement)
 */
const fullScreen = (element: HTMLElement): void => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

type WindowSize = {
  width: number;
  height: number;
};
/**
 * @function getWindowSize
 * @description 获取窗口宽高
 * @returns {object} 返回窗口宽高
 * @example getWindowSize() // => {width: 1920, height: 1080}
 **/
const getWindowSize = (includeScrollbar = true): WindowSize => {
  const width = includeScrollbar ? window.innerWidth : window.document.documentElement.clientWidth;
  const height = includeScrollbar ? window.innerHeight : window.document.documentElement.clientHeight;
  return { width, height };
};

/**
 *
 */
type ScrollPosition = {
  x: number;
  y: number;
};
/**
 * @function getScrollPosition
 * @description 获取滚动条位置
 * @returns {object} 返回滚动条位置
 * @example getScrollPosition() // => {x: 0, y: 0}
 */
const getScrollPosition = (): ScrollPosition => {
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'; //标准盒子模型
  const x = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
  const y = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  return { x, y };
};

/**
 * @function copyText
 * @description 复制文本
 * @param {string} text 需要复制的文本
 * @example copyText('hello world')
 */
const copyText = (text: string, callback: () => unknown): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => callback && callback())
    .catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'position';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      document.body.removeChild(ta);
    });
};

/**
 * @function readClipboard
 * @description 读取剪贴板，需要用户触发事件
 * @param {Function} callback 回调函数
 * @example readClipboard((text) => console.log(text))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/readText
 */
const readClipboard = async (callback: (text: string) => unknown): void => {
  navigator.clipboard
    .readText()
    .then((text) => callback && callback(text))
    .catch((error) => console.log(error));
};

/**
 * @function selectText
 * @description 选中文本
 * @param {HTMLElement} element 需要选中的元素
 * @example selectText(document.getElementById('test'))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Selectionå
 */
const selectText = (element: HTMLElement): void => {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

/**
 * @function getSelectionText
 * @description 获取选中的文本
 * @returns {string} 返回选中的文本
 * @example getSelectionText() // => 'hello world'
 */
const getSelectedText = (): string => {
  return window.getSelection()?.toString() || '';
};

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
const browserUtils = {
  isBrowser,
  getBrowserInfo,
  isFullScreen,
  exitFullScreen,
  fullScreen,
  getWindowSize,
  getScrollPosition,
  copyText,
  readClipboard,
  selectText,
  getSelectedText,
};

export {
  isBrowser,
  getBrowserInfo,
  fullScreen,
  isFullScreen,
  exitFullScreen,
  getWindowSize,
  getScrollPosition,
  copyText,
  readClipboard,
  browserUtils,
  selectText,
  getSelectedText,
};
