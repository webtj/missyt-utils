/**
 * @function getOS
 * @description 获取设备的操作系统
 * @returns {string} 返回操作系统
 * @example getOS() // => 'MacOS'
 */
const getOS = (): string => {
  const userAgent = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(userAgent),
    isSymbian = /(?:SymbianOS)/.test(userAgent),
    isAndroid = /(?:Android)/.test(userAgent),
    isFireFox = /(?:Firefox)/.test(userAgent),
    isChrome = /(?:Chrome|CriOS)/.test(userAgent),
    isTablet =
      /(?:iPad|PlayBook)/.test(userAgent) ||
      (isAndroid && !/(?:Mobile)/.test(userAgent)) ||
      (isFireFox && /(?:Tablet)/.test(userAgent)),
    isPhone = /(?:iPhone)/.test(userAgent) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  if (isWindowsPhone) return 'Windows Phone';
  if (isSymbian) return 'Symbian';
  if (isTablet) return 'Tablet';
  if (isPhone) return 'Ios';
  if (isAndroid) return 'Android';
  if (isFireFox) return 'FireFox';
  if (isChrome) return 'Chrome';
  if (isPc) return 'Pc';
  return 'Unkonwn';
};

/**
 * @function isWeiXin
 * @description 判断是否为微信浏览器
 * @returns {boolean} true or false
 * @example isWeiXin() // => true
 */
const isWeiXin = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return /Micromessenger/i.test(ua);
};

/**
 * @function isMobile
 * @description 判断是否为移动端
 * @returns {boolean} 返回判断结果
 * @example isMobile() // => true
 */
const isMobile = (): boolean => {
  return /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent);
};

export { getOS, isWeiXin, isMobile };
