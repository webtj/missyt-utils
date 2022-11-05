/**
 * 判断是否为浏览器环境
 * @returns {boolean}
 */
const isBrowser = typeof window === 'object' && typeof document === 'object';

/**
 * 获取浏览器信息
 * @returns {object} 浏览器信息
 */
const getBrowserInfo = () => {
  const { userAgent, onLine, platform, cookieEnabled, language } = navigator;
  const t = userAgent.toLowerCase();
  let result = 0 <= t.indexOf("msie") ? { //ie < 11
    type: "IE",
    version: Number(t.match(/msie ([\d]+)/)[1])
  } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
    type: "IE",
    version: 11
  } : 0 <= t.indexOf("edge") ? {
    type: "Edge",
    version: Number(t.match(/edge\/([\d]+)/)[1])
  } : 0 <= t.indexOf("firefox") ? {
    type: "Firefox",
    version: Number(t.match(/firefox\/([\d]+)/)[1])
  } : 0 <= t.indexOf("chrome") ? {
    type: "Chrome",
    version: Number(t.match(/chrome\/([\d]+)/)[1])
  } : 0 <= t.indexOf("opera") ? {
    type: "Opera",
    version: Number(t.match(/opera.([\d]+)/)[1])
  } : 0 <= t.indexOf("safari") ? {
    type: "Safari",
    version: Number(t.match(/version\/([\d]+)/)[1])
  } : {
    type: t,
    version: -1
  }

  return {
    ...result, onLine, platform, cookieEnabled, language
  }

};



//https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
//判断是否全屏
const isFullScreen = !!(
  document.fullscreenElement ||
  document.mozFullScreenElement ||
  document.webkitFullscreenElement ||
  document.msFullscreenElement
)

/**
 * 某个容器全屏
 * @param {需要全屏的dom} dom 
 */
const fullScreen = (dom = document.documentElement) => {
  if (dom.requestFullscreen) {
    dom.requestFullscreen();
  } else if (dom.mozRequestFullScreen) {
    dom.mozRequestFullScreen();
  } else if (dom.webkitRequestFullscreen) {
    dom.webkitRequestFullscreen();
  } else if (dom.msRequestFullscreen) {
    dom.msRequestFullscreen();
  }
}

/**
 * 退出全屏
 */
const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}


export {
  isBrowser,
  getBrowserInfo,
  isFullScreen,
  fullScreen,
  exitFullScreen
}