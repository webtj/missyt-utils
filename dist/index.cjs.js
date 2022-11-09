'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @function getAuthor
 * @description 获取作者信息
 * @returns {string} 返回作者信息
 * @example getAuthor() // => 'author'
 */
const getAuthor = () => 'taojian';

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/**
 * @var isBrowser
 * @description 判断是否为浏览器环境
 * @returns {boolean} 返回判断结果
 * @example if(isBrowser){...}
 */
const isBrowser = typeof window === 'object' && typeof document === 'object';
/**
 * @function getBrowserInfo
 * @description 获取浏览器信息
 * @returns {object} 返回浏览器信息
 * @example getBrowserInfo() // => {"type": "Chrome","version": 107,"onLine": true,"platform": "MacIntel","cookieEnabled": true,"language": "zh-CN"}
 */
const getBrowserInfo = () => {
    var _a, _b, _c, _d, _e, _f;
    const { userAgent, onLine, platform, cookieEnabled, language } = navigator;
    const t = userAgent.toLowerCase();
    const result = 0 <= t.indexOf('msie')
        ? {
            //ie < 11
            type: 'IE',
            version: Number((_a = t.match(/msie ([\d]+)/)) === null || _a === void 0 ? void 0 : _a[1]),
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
                    version: Number((_b = t.match(/edge\/([\d]+)/)) === null || _b === void 0 ? void 0 : _b[1]),
                }
                : 0 <= t.indexOf('firefox')
                    ? {
                        type: 'Firefox',
                        version: Number((_c = t.match(/firefox\/([\d]+)/)) === null || _c === void 0 ? void 0 : _c[1]),
                    }
                    : 0 <= t.indexOf('chrome')
                        ? {
                            type: 'Chrome',
                            version: Number((_d = t.match(/chrome\/([\d]+)/)) === null || _d === void 0 ? void 0 : _d[1]),
                        }
                        : 0 <= t.indexOf('opera')
                            ? {
                                type: 'Opera',
                                version: Number((_e = t.match(/opera.([\d]+)/)) === null || _e === void 0 ? void 0 : _e[1]),
                            }
                            : 0 <= t.indexOf('safari')
                                ? {
                                    type: 'Safari',
                                    version: Number((_f = t.match(/version\/([\d]+)/)) === null || _f === void 0 ? void 0 : _f[1]),
                                }
                                : {
                                    type: t,
                                    version: -1,
                                };
    return Object.assign(Object.assign({}, result), { onLine,
        platform,
        cookieEnabled,
        language });
};
/**
 * @function isFullScreen
 * @description 判断是否全屏
 * @returns {boolean} 返回判断结果
 * @example isFullScreen() // => true
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
const isFullScreen = () => {
    return (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement);
};
/**
 * @function exitFullScreen
 * @description 退出全屏
 * @return {void} 无返回值
 * @example exitFullScreen()
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
const exitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen) {
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
const fullScreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

/**
 * @function getOS
 * @description 获取设备的操作系统
 * @returns {string} 返回操作系统
 * @example getOS() // => 'MacOS'
 */
const getOS = () => {
    const userAgent = navigator.userAgent, isWindowsPhone = /(?:Windows Phone)/.test(userAgent), isSymbian = /(?:SymbianOS)/.test(userAgent), isAndroid = /(?:Android)/.test(userAgent), isFireFox = /(?:Firefox)/.test(userAgent), isChrome = /(?:Chrome|CriOS)/.test(userAgent), isTablet = /(?:iPad|PlayBook)/.test(userAgent) ||
        (isAndroid && !/(?:Mobile)/.test(userAgent)) ||
        (isFireFox && /(?:Tablet)/.test(userAgent)), isPhone = /(?:iPhone)/.test(userAgent) && !isTablet, isPc = !isPhone && !isAndroid && !isSymbian;
    if (isWindowsPhone)
        return 'Windows Phone';
    if (isSymbian)
        return 'Symbian';
    if (isTablet)
        return 'Tablet';
    if (isPhone)
        return 'Ios';
    if (isAndroid)
        return 'Android';
    if (isFireFox)
        return 'FireFox';
    if (isChrome)
        return 'Chrome';
    if (isPc)
        return 'Pc';
    return 'Unkonwn';
};
/**
 * @function isWeiXin
 * @description 判断是否为微信浏览器
 * @returns {boolean} true or false
 * @example isWeiXin() // => true
 */
const isWeiXin = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /Micromessenger/i.test(ua);
};
/**
 * @function isMobile
 * @description 判断是否为移动端
 * @returns {boolean} 返回判断结果
 * @example isMobile() // => true
 */
const isMobile = () => {
    return /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent);
};

/**
 * @function $
 * @description 获取dom元素，只返回一个元素
 * @param {string} el 节点选择器
 * @returns {HTMLElement|null}
 * @example $('body') // => HTMLElement
 */
const $ = (el) => document.querySelector(el);
/**
 * @function $$
 * @description 获取dom元素，返回一个数组
 * @param {string} el 节点选择器
 * @returns {NodeListOf<HTMLElement>}
 * @example $$('.col') // => NodeListOf<HTMLElement>
 */
const $$ = (el) => document.querySelectorAll(el);
/**
 * @function setStyle
 * @description 设置dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {object} style 样式对象
 * @returns {void} 无返回值
 * @example setStyle(document.body, { color: 'red' }) // => void
 */
const setStyle = (el, style) => {
    for (const key in style) {
        el.style[key] = style[key];
    }
};
/**
 * @function getStyle
 * @description 获取dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {string} style 样式名称
 * @returns {string} 样式属性值
 * @example getStyle(document.body, 'color') // => 'red'
 */
const getStyle = (el, style) => getComputedStyle(el)[style];
/**
 * @function getClass
 * @description 获取dom元素的class
 * @param {HTMLElement} el dom元素
 * @returns {string} class属性值
 * @example getClass(document.querySelector('.col')) // => 'span-12'
 */
const getClass = (el) => el.className;
/**
 * @function hasClass
 * @description 判断dom元素是否有某个class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {boolean} 是否有class
 * @example hasClass(document.querySelector('.col'), 'span-12') // => true
 */
const hasClass = (el, className) => el.classList.contains(className);
/**
 * @function removeClass
 * @description 移除dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example removeClass(document.querySelector('.col'), 'span-12') // => void
 */
const removeClass = (el, className) => el.classList.remove(className);
/**
 * @function addClass
 * @description 添加dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example addClass(document.querySelector('.col'), 'span-12') // => void
 */
const addClass = (el, className) => {
    if (!hasClass(el, className))
        el.classList.add(className);
};
/**
 * @function setAttr
 * @description 设置dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {object} attr 属性对象
 * @returns {void} 无返回值
 * @example setAttr(document.querySelector('.col'), { id: 'col' }) // => void
 */
const setAttr = (el, attr) => {
    for (const key in attr) {
        el.setAttribute(key, attr[key]);
    }
};
/**
 * @function removeAttr
 * @description 移除dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {void} 无返回值
 * @example removeAttr(document.querySelector('.col'), 'id') // => void
 */
const removeAttr = (el, attr) => el.removeAttribute(attr);
/**
 * @function getAttr
 * @description 获取dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {string} 属性值
 * @example getAttr(document.querySelector('.col'), 'id') // => 'col'
 */
const getAttr = (el, attr) => el.getAttribute(attr);
/**
 * @function getAttrList
 * @description 获取dom元素的属性列表
 * @param {HTMLElement} el dom元素
 * @returns {Array<string>} 属性列表
 * @example getAttrList(document.querySelector('.col')) // => ['id', 'class']
 */
const getAttrList = (el) => {
    return Object.keys(el.attributes).map((key) => el.attributes[key].name);
};
const getAttrKV = (el) => {
    return Object.keys(el.attributes).map((attr) => {
        const key = el.attributes[attr].name;
        const value = el.attributes[attr].value;
        return { key, value };
    });
};
/**
 * @function elShow
 * @description 显示dom元素时执行某个操作
 * @param {HTMLElement} el dom元素
 * @param {Function} callback 回调函数
 * @returns {void} 无返回值
 * @example elShow(document.querySelector('.col'),()=>{ ... }) // => void
 */
const elShow = (el, callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
                callback && callback();
        });
    });
    observer.observe(el);
};
/**
 * @function isShow
 * @description 判断dom元素是否在可视区域
 * @param {HTMLElement} el dom元素
 * @returns {boolean} 是否在可视区域
 * @example isShow(document.querySelector('.col')) // => true
 */
const isShow = (el) => {
    const rect = el.getBoundingClientRect();
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= clientHeight;
};
/**
 * @function removeTag
 * @description 移除text文本中的标签
 * @param {string} text 文本
 * @returns {string} 移除标签后的文本
 * @example removeTag('<p>hello world</p>') // => 'hello world'
 */
const removeTag = (text) => text.replace(/<[^>]+>/g, '');

exports.$ = $;
exports.$$ = $$;
exports.addClass = addClass;
exports.elShow = elShow;
exports.exitFullScreen = exitFullScreen;
exports.fullScreen = fullScreen;
exports.getAttr = getAttr;
exports.getAttrKV = getAttrKV;
exports.getAttrList = getAttrList;
exports.getAuthor = getAuthor;
exports.getBrowserInfo = getBrowserInfo;
exports.getClass = getClass;
exports.getOS = getOS;
exports.getStyle = getStyle;
exports.hasClass = hasClass;
exports.isBrowser = isBrowser;
exports.isFullScreen = isFullScreen;
exports.isMobile = isMobile;
exports.isShow = isShow;
exports.isWeiXin = isWeiXin;
exports.removeAttr = removeAttr;
exports.removeClass = removeClass;
exports.removeTag = removeTag;
exports.setAttr = setAttr;
exports.setStyle = setStyle;
