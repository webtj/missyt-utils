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

export { isBrowser, getBrowserInfo, fullScreen, isFullScreen, exitFullScreen };
