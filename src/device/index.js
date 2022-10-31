/**
 * 获取操作系统类型
 * @returns {string}
 */
const getOS = () => {
  let userAgent = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(userAgent),
    isSymbian = /(?:SymbianOS)/.test(userAgent),
    isAndroid = /(?:Android)/.test(userAgent),
    isFireFox = /(?:Firefox)/.test(userAgent),
    isChrome = /(?:Chrome|CriOS)/.test(userAgent),
    isTablet = /(?:iPad|PlayBook)/.test(userAgent) || (isAndroid && !/(?:Mobile)/.test(userAgent)) || (isFireFox && /(?:Tablet)/.test(userAgent)),
    isPhone = /(?:iPhone)/.test(userAgent) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  if (isWindowsPhone) return 'Windows Phone'
  if (isSymbian) return 'Symbian'
  if (isTablet) return 'Tablet'
  if (isPhone) return 'Ios'
  if (isAndroid) return 'Android'
  if (isFireFox) return 'FireFox'
  if (isChrome) return 'Chrome'
  if (isPc) return 'Pc'
  return 'Unkonwn'
}

/**
 * 判断是否为微信环境
 * @returns {boolean} 是否为微信
 */
const isWeiXin = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == "micromessenger";
}

/**
  * 判断是否为移动端
 * @returns {boolean} 是否为移动端
 */
const isMobile = () => {
  return /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent)
}


export {
  getOS,
  isWeiXin,
  isMobile
}