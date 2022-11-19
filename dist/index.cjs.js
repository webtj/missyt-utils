'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @function getAuthor
 * @description 获取作者信息
 * @returns {string} 返回作者信息
 * @example getAuthor() // => 'author'
 */
const getAuthor = () => 'taojian';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
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
 * @function getWindowSize
 * @description 获取窗口宽高
 * @returns {object} 返回窗口宽高
 * @example getWindowSize() // => {width: 1920, height: 1080}
 **/
const getWindowSize = (includeScrollbar = true) => {
    const width = includeScrollbar ? window.innerWidth : window.document.documentElement.clientWidth;
    const height = includeScrollbar ? window.innerHeight : window.document.documentElement.clientHeight;
    return { width, height };
};
/**
 * @function getScrollPosition
 * @description 获取滚动条位置
 * @returns {object} 返回滚动条位置
 * @example getScrollPosition() // => {x: 0, y: 0}
 */
const getScrollPosition = () => {
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
const copyText = (text, callback) => {
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
const readClipboard = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    navigator.clipboard
        .readText()
        .then((text) => callback && callback(text))
        .catch((error) => console.log(error));
});
/**
 * @function selectText
 * @description 选中文本
 * @param {HTMLElement} element 需要选中的元素
 * @example selectText(document.getElementById('test'))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Selectionå
 */
const selectText = (element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
    selection === null || selection === void 0 ? void 0 : selection.addRange(range);
};
/**
 * @function getSelectionText
 * @description 获取选中的文本
 * @returns {string} 返回选中的文本
 * @example getSelectionText() // => 'hello world'
 */
const getSelectedText = () => {
    var _a;
    return ((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) || '';
};
/**
 * @function getBrowserLanguage
 * @description 获取浏览器语言
 * @returns {string} 返回浏览器语言
 * @example getBrowserLanguage() // => 'zh-CN'
 */
const getBrowserLanguage = () => {
    return navigator.language;
};
/**
 * @function printPage
 * @description 浏览器打印
 * @example print()
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/print
 */
const printPage = () => {
    if (document.execCommand) {
        document.execCommand('print');
    }
    else {
        window.print();
    }
};

/**
 * @function isBrowser
 * @description 判断是否为浏览器环境
 * @returns {boolean} 返回判断结果
 * @example if(isBrowser()){...}
 */
const isBrowser = () => {
    return typeof window === 'object' && typeof document === 'object';
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

/**
 * @function getQueryString
 * @description 获取url参数
 * @param {String} name params name
 * @param {String} url url 默认为当前页面url
 * @returns {String} params value
 * @example getQueryString('id', 'https://www.baidu.com?id=1') // => '1'
 */
const getQueryString = (name, url = window.location.href) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = url.split('?')[1].match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return '';
};
/**
 * @function getUrlParams
 * @description 获取url所有参数对象
 * @param {String} url url 默认为当前页面url
 * @returns {Object} params object
 * @example getUrlParams('https://www.baidu.com?id=1&name=xx') // => { id: '1', name: 'xx' }
 */
const getUrlParams = (url = window.location.href) => {
    const params = {};
    if (url.indexOf('?') > -1 && url.indexOf('=') > -1) {
        const str = url.split('?')[1];
        const strs = str.split('&');
        for (let i = 0; i < strs.length; i++) {
            params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
        }
    }
    return params;
};
/**
 * @function url2Obj
 * @description url转对象
 * @param {String} url 默认为当前页面url
 * @returns {Object} object
 * @example url2Obj('https://www.baidu.com?id=1') // => { id: '1' }
 */
const url2Obj = (url = window.location.href) => {
    const obj = {};
    if (url.indexOf('?') > -1 && url.indexOf('=') > -1) {
        const arr = url.split('?')[1].split('&');
        for (let i = 0; i < arr.length; i++) {
            const arr2 = arr[i].split('=');
            obj[arr2[0]] = decodeURIComponent(arr2[1]);
        }
    }
    return obj;
};
/**
 * @function obj2Url
 * @description 对象转url
 * @param {Object} obj object
 * @returns {String} url
 * @example obj2Url({ id: '1',name: 'xx' }) // => 'id=1&name=xx'
 */
const obj2Url = (obj) => {
    let str = '';
    for (const key in obj) {
        str += `${key}=${obj[key]}&`;
    }
    return str.slice(0, -1);
};

const on = (el, type, listener, options) => {
    if (el.addEventListener) {
        el.addEventListener(type, listener, options);
    }
    else if (el.attachEvent) {
        el.attachEvent(`on${type}`, listener);
    }
    else {
        throw new Error('Your browser does not support addEventListener');
    }
};
const off = (el, type, listener, options) => {
    if (el.removeEventListener) {
        el.removeEventListener(type, listener, options);
    }
    else if (el.detachEvent) {
        el.detachEvent(`on${type}`, listener);
    }
    else {
        throw new Error('Your browser does not support removeEventListener');
    }
};
/**
 * @var {object} event
 * @description 事件对象
 * @property {function} on 绑定事件
 * @property {function} off 解绑事件
 * @example
 * import { event } from 'missyt-utils';
 * event.on(document.querySelector('.col'), 'click', () => {
 *  console.log('click');
 * });
 * event.off(document.querySelector('.col'), 'click', () => {
 * console.log('click');
 * });
 */
const event = { on, off };

//browser notification
/**
 * @function notice
 * @description 浏览器通知
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Notification
 * @param {string} title 通知标题
 * @param {object} options 通知配置
 * @param {string} options.body 通知内容
 * @param {string} options.icon 通知图标
 * @param {string} options.tag 通知标签
 * @param {string} options.image 通知图片
 * @param {string} options.lang 通知语言
 * @param {boolean} options.renotify 通知是否需要重新提醒
 * @param {boolean} options.silent 通知是否静音
 * @param {boolean} options.requireInteraction 通知是否需要用户交互
 * @param {boolean} options.sticky 通知是否需要粘性
 * @param {string} options.dir 通知方向
 * @param {string} options.vibrate 通知振动
 * @param {string} options.badge 通知徽章
 * @param {string} options.timestamp 通知时间戳
 * @param {string} options.actions 通知操作
 * @param {string} options.data 通知数据
 * @return {Promise} 返回通知结果
 * @example notice.send('通知标题', { body: '通知内容' }) // => void
 * @example notice.send('通知标题', { body: '通知内容', icon: '通知图标' }) // => void
 */
const send = (title, options) => {
    return new Promise((resolve, reject) => {
        if (!('Notification' in window)) {
            reject(new Error('This browser does not support desktop notification'));
        }
        else if (Notification.permission === 'granted') {
            //用户已经同意
            resolve(new Notification(title, options));
        }
        else if (Notification.permission !== 'denied') {
            //用户已拒绝
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    resolve(new Notification(title, options));
                }
                else {
                    reject(new Error('User denied'));
                }
            });
        }
        else {
            reject(new Error('notification denied'));
        }
    });
};
/**
 * @function confirm
 * @description 浏览器通知确认
 * @param {string} message 弹窗确认内容
 * @param {Function} sure 确认回调
 * @param {Function} cancel 取消回调
 * @example notice.confirm('确认删除吗？', () => { console.log('确认') }, () => { console.log('取消') }) // => void
 */
const confirm = (message, sure, cancel) => {
    if (window.confirm(message))
        sure && sure();
    else
        cancel && cancel();
};
const notice = { send, confirm };

/**
 * @function getTag
 * @description 获取数据类型
 * @param {any} object 需要判断的数据
 * @returns {string} 返回数据类型
 * @example getTag(1) => 'Number'
 */
const getTag = (object) => {
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};

/**
 * @function isNumber
 * @description 判断是否为数字
 * @param {any} value 需要判断的数据
 * @param {boolean} isFinite  是否为有限数字 检测NaN,Infinity,-Infinity
 * @returns {boolean} 返回判断结果
 * @example
 * isNumber('1') => false
 * isNumber(1) => true
 * isNumber(1, true) => true
 * isNumber(NaN) => true
 * isNumber(new Number(2)) => true
 * isNumber(NaN, true) => false
 * isNumber(Infinity, true) => false
 * isNumber(-Infinity, true) => false
 */
const isNumber = (value, isFinite = false) => {
    return getTag(value) === 'Number' && (isFinite ? Number.isFinite(value) : true);
};
/**
 * @function isString
 * @description 判断是否为字符串
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isString('1') => true
 * isString(new String('1')) => true
 */
const isString = (value) => getTag(value) === 'String';
/**
 * @function isBoolean
 * @description 判断是否为布尔值,没有隐式转换
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isBoolean(true) => true
 * isBoolean(false) => true
 * isBoolean(new Boolean(false)) => true
 * isBoolean(1) => false
 * isBoolean('1') => false
 */
const isBoolean = (value) => getTag(value) === 'Boolean';
/**
 * @function isNull
 * @description 判断是否为null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isNull(null) => true
 * isNull(undefined) => false
 * isNull('') => false
 */
const isNull = (value) => getTag(value) === 'Null';
/**
 * @function isUndefined
 * @description 判断是否为undefined
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isUndefined(undefined) => true
 * isUndefined(null) => false
 * isUndefined('') => false
 */
const isUndefined = (value) => getTag(value) === 'Undefined';
/**
 * @function isSymbol
 * @description 判断是否为Symbol
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSymbol(Symbol('1')) => true
 */
const isSymbol = (value) => getTag(value) === 'Symbol';
/**
 * @function isObject
 * @description 判断是否为对象,不包括null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isObject({}) => true
 * isObject([]) => true
 * isObject(new Object()) => true
 * isObject(new Array()) => true
 * isObject(null) => false
 */
const isObject = (value) => getTag(value) === 'Object';
/**
 * @function isFunction
 * @description 判断是否为函数
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isFunction(() => {}) => true
 * isFunction(function() {}) => true
 * isFunction(new Function()) => true
 * isFunction(class {}) => true
 */
const isFunction = (value) => getTag(value) === 'Function';
/**
 * @function isArray
 * @description 判断是否为数组
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isArray([]) => true
 * isArray(new Array()) => true
 * isArray({}) => false
 */
const isArray = (value) => getTag(value) === 'Array';
/**
 * @function isDate
 * @description 判断是否为日期
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isDate(new Date()) => true
 * isDate(new Date('2020-01-01')) => true
 * isDate('2020-01-01') => false
 */
const isDate = (value) => getTag(value) === 'Date';
/**
 * @function isRegExp
 * @description 判断是否为正则
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isRegExp(/1/) => true
 * isRegExp(new RegExp('1')) => true
 * isRegExp('1') => false
 */
const isRegExp = (value) => getTag(value) === 'RegExp';
/**
 * @function isError
 * @description 判断是否为错误对象
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isError(new Error()) => true
 * isError(new TypeError()) => true
 * isError('1') => false
 */
const isError = (value) => getTag(value) === 'Error';
/**
 * @function isMap
 * @description 判断是否为Map
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isMap(new Map()) => true
 * isMap(new WeakMap()) => false
 * isMap('1') => false
 */
const isMap = (value) => getTag(value) === 'Map';
/**
 * @function isWeakMap
 * @description 判断是否为WeakMap
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakMap(new WeakMap()) => true
 * isWeakMap(new Map()) => false
 * isWeakMap('1') => false
 */
const isWeakMap = (value) => getTag(value) === 'WeakMap';
/**
 * @function isSet
 * @description 判断是否为Set
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSet(new Set()) => true
 * isSet(new WeakSet()) => false
 * isSet('1') => false
 */
const isSet = (value) => getTag(value) === 'Set';
/**
 * @function isWeakSet
 * @description 判断是否为WeakSet
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakSet(new WeakSet()) => true
 * isWeakSet(new Set()) => false
 * isWeakSet('1') => false
 */
const isWeakSet = (value) => getTag(value) === 'WeakSet';
/**
 * @function isPromise
 * @description 判断是否为Promise
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.resolve()) => true
 * isPromise(() => {}) => false
 */
const isPromise = (value) => getTag(value) === 'Promise';
/**
 * @var datatypes
 * @description 数据类型检查集合
 * @property isNumber 判断是否为数字
 * @property isString 判断是否为字符串
 * @property isBoolean 判断是否为布尔值
 * @property isNull 判断是否为null
 * @property isUndefined 判断是否为undefined
 * @property isSymbol 判断是否为Symbol
 * @property isObject 判断是否为对象
 * @property isFunction 判断是否为函数
 * @property isArray 判断是否为数组
 * @property isDate 判断是否为日期
 * @property isRegExp 判断是否为正则
 * @property isError 判断是否为错误对象
 * @property isMap 判断是否为Map
 * @property isWeakMap 判断是否为WeakMap
 * @property isSet 判断是否为Set
 * @property isWeakSet 判断是否为WeakSet
 * @property isPromise 判断是否为Promise
 */
const datatypes = {
    isNumber,
    isString,
    isBoolean,
    isNull,
    isUndefined,
    isSymbol,
    isObject,
    isFunction,
    isArray,
    isDate,
    isRegExp,
    isError,
    isMap,
    isWeakMap,
    isSet,
    isWeakSet,
    isPromise,
};

/**
 * @var EventBus
 * @description 事件总线
 */
const EventBus = {
    callbacks: {},
    /**
     * @function on
     * @description 订阅事件
     * @param {string} type 事件名称
     * @param {function} callback 回调函数
     * @returns {Function} 返回刚绑定的回调函数
     * @example
     * EventBus.on('login',data=>{})
     */
    on: function (type, callback) {
        //绑定注册事件
        if (this.callbacks[type])
            this.callbacks[type].push(callback);
        else
            this.callbacks[type] = [callback];
        return this.callbacks[type];
    },
    /**
     * @function off
     * @description 触发事件
     * @param {string} type 事件名称
     * @param {any} data 触发事件需要的参数
     * @example
     * EventBus.emit('login',{name:'张三'})
     */
    emit: function (type, data) {
        //触发事件
        if (this.callbacks[type] && this.callbacks[type].length > 0) {
            this.callbacks[type].forEach((callback) => {
                callback(data);
            });
        }
    },
    /**
     * @function off
     * @description 取消订阅事件
     * @param {string} type 事件名称，可不传，不传取消所有
     * @param {function} callback 回调函数，可不传，不传取消所有
     * @example
     * EventBus.off('login')
     * EventBus.off()
     */
    off: function (type) {
        if (!type)
            this.callbacks = {};
        else
            delete this.callbacks[type];
    },
};

/**
 * callbacks :{
 *  login:{
 *    token_1:function,
 *    token_2:function
 *  }
 * }
 *
 * let pid = Pubsub.subscribe('login',data=>{})
 */
/**
 * @var Pubsub
 * @description 发布订阅模式
 */
const Pubsub = {
    id: 100,
    callbacks: {},
    /**
     * @function subscribe
     * @description 订阅事件
     * @param {string} channel 事件名称
     * @param {function} callback 回调函数
     * @returns {string} 返回订阅的唯一编号
     * @example
     * Pubsub.subscribe('login',data=>{})
     */
    subscribe: function (channel, callback) {
        const token = `token_${this.id++}`;
        if (this.callbacks[channel])
            this.callbacks[channel][token] = callback;
        else
            this.callbacks[channel] = { [token]: callback };
        return token;
    },
    /**
     * @function publish
     * @description 发布事件
     * @param {string} channel 事件名称
     * @param {any} data 发布事件需要的参数
     * @example
     * Pubsub.publish('login',{name:'张三'})
     */
    publish: function (channel, data) {
        if (this.callbacks[channel]) {
            Object.values(this.callbacks[channel]).forEach((callback) => {
                if (callback instanceof Function)
                    callback(data);
            });
        }
    },
    /**
     * @function unsubscribe
     * @description 取消订阅事件
     * @param {string|undefined} flag 订阅的channel pid undefined取消所有
     * @example
     * Pubsub.unsubscribe('login') //指定channel
     * Pubsub.unsubscribe('token_101')  //指定pid
     * Pubsub.unsubscribe() //取消所有
     * @param flag
     */
    unscribe: function (flag) {
        //channel 或 pid 或undefind
        if (!flag)
            this.callbacks = {};
        else if (typeof flag === 'string') {
            //判断是否为token开头的
            if (flag.startsWith('token')) {
                //先要找channel
                const callbackObj = Object.values(this.callbacks).find((obj) => (obj === null || obj === void 0 ? void 0 : obj.hasOwnProperty(flag)) || false);
                if (callbackObj)
                    delete callbackObj[flag];
            }
            else {
                delete this.callbacks[flag];
            }
        }
    },
};

/**
 * @function addZero
 * @description 数字补零
 * @param {number} num 需要补零的数字
 * @returns {string} 返回补零后的字符串
 */
const addZero = (num) => {
    return num < 10 ? '0' + num : '' + num;
};
/**
 * @function parseDate
 * @description 解析时间
 * @param {Datetype} date 需要解析的时间,不传默认new Date()
 * @returns {Object} 返回解析后的时间对象
 * @example
 * parseDate('2020-01-01 12:12:12')
 * parseDate(new Date())
 * parseDate(1577836800000)
 */
const parseDate = (date) => {
    if (typeof date === 'string')
        date = new Date(date);
    if (typeof date === 'number')
        date = new Date(date);
    if (!(date instanceof Date))
        date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
};
/**
 * @function formatDate
 * @description 格式化时间
 * @param {Datetype} date 需要格式化的时间,不传默认new Date()
 * @param {string} format 格式化的格式,不传默认yyyy-MM-dd HH:mm:ss
 * @returns {string} 返回格式化后的时间字符串
 * @example
 * formatDate('2020-01-01 12:12:12','yyyy-MM-dd HH:mm:ss')
 * formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')
 * formatDate(1577836800000,'yyyy-MM-dd HH:mm:ss')
 * formatDate('2020-01-01 12:12:12','yyyy年MM月dd日 HH时mm分ss秒')
 */
const formatDate = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
    const { year, month, day, hour, minute, second } = parseDate(date);
    return format
        .replace(/YYYY|yyyy/g, addZero(year))
        .replace(/YY|yy/g, addZero(year).toString().substr(2, 2))
        .replace(/MM/g, addZero(month))
        .replace(/DD|dd/g, addZero(day))
        .replace(/HH|hh/g, addZero(hour))
        .replace(/mm/g, addZero(minute))
        .replace(/ss/g, addZero(second));
};
/**
 * @function diffDays
 * @description 计算两个时间相差的天数
 * @param {Datetype} date1 需要计算的时间1
 * @param {Datetype} date2 需要计算的时间2
 * @returns {number} 返回相差的天数
 * @example
 * diffDays('2020-01-01 12:12:12','2020-01-02 12:12:12')
 */
const diffDays = (date1, date2) => {
    const time1 = date1.getTime();
    const time2 = date2.getTime();
    const diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
};
/**
 * @function formatPassTime
 * @description 格式化过去的时间
 * @param {Datetype} startTime 需要格式化的时间
 * @returns {string} 返回格式化后的时间字符串
 * @example
 * formatPassTime('2020-01-01 12:12:12') // 1个月前
 * formatPassTime(new Date()) // 刚刚
 * formatPassTime(1577836800000) // 1小时前
 */
const formatPassTime = (startTime) => {
    const currentTime = Date.parse(new Date().toString()), starT = startTime ? Date.parse(new Date(startTime).toString()) : currentTime, time = currentTime - starT, day = parseInt(String(time / (1000 * 60 * 60 * 24))), hour = parseInt(String(time / (1000 * 60 * 60))), min = parseInt(String(time / (1000 * 60))), sec = parseInt(String(time / 1000)), month = parseInt(String(day / 30)), year = parseInt(String(month / 12));
    if (year)
        return year + '年前';
    if (month)
        return month + '个月前';
    if (day)
        return day + '天前';
    if (hour)
        return hour + '小时前';
    if (min)
        return min + '分钟前';
    if (sec)
        return sec + '秒前';
    else
        return '刚刚';
};

//cookie相关的方法
/**
 * @function getCookie
 * @description 获取cookie
 * @param {string} name cookie名称
 * @returns {string} cookie值
 * @example getCookie('name')
 */
const getCookie = (name) => {
    if (!isBrowser)
        throw new Error('getCookie is only available in browser');
    if (!name || !document.cookie)
        return null;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    if (arr)
        return arr[2];
    else
        return null;
};
/**
 * @function setCookie
 * @description 设置cookie
 * @param {string} name cookie名称
 * @param {string} value cookie值
 * @param {number} expires 过期时间，单位：天
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * setCookie('name','zhangsan',1)
 * setCookie('name','zhangsan',1,'/','www.baidu.com')
 */
const setCookie = (name, value, expires = 0, path = '/', domain = '') => {
    if (!isBrowser)
        throw new Error('setCookie is only available in browser');
    if (!name || !document.cookie)
        return;
    let cookieText = `${name}=${value}`;
    if (isNumber(expires)) {
        const date = new Date();
        date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
        cookieText += `; expires=${date.toUTCString()}`;
    }
    if (path)
        cookieText += `; path=${path}`;
    if (domain)
        cookieText += `; domain=${domain}`;
    document.cookie = cookieText;
};
/**
 * @function removeCookie
 * @description 清除cookie，或调用setCookie expires设置为负数
 * @param {string} name cookie名称
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * removeCookie('name')
 * removeCookie('name','/','www.baidu.com')
 */
const removeCookie = (name, path = '/', domain = '') => {
    if (!isBrowser)
        throw new Error('removeCookie is only available in browser');
    if (!name || !document.cookie)
        return;
    setCookie(name, '', -1, path, domain);
};

/**
 * @function Storage
 * @description Storage类
 * @param {string} type 类型，local | session
 * @param {string} prefix 前缀，可选
 * @returns {void}
 * @example
 * let s = new Storage('local | session','prefix-'); //实例化
 * s.set('key','zhangsan'); //设置
 * s.set('key2','lisi',2); expries=2 days //设置过期时间
 * s.get('key'); //获取storage值
 * s.remove('key'); //删除storage值
 * s.clear() //清空storage
 * s.watch('key',function(newVal,oldVal){}); //监听storage值变化
 */
class Storage {
    constructor(storage = 'local', prefix = '') {
        this.prefix = '';
        this._watcher = {};
        if (!isBrowser)
            throw new Error('get is only available in browser');
        this.storage = storage === 'local' ? window.localStorage : window.sessionStorage;
        this.prefix = prefix;
    }
    /**
     * @function get
     * @description 获取storage值
     * @param {string} key 键
     * @returns {any} 值
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.get('key'); //获取storage值
     */
    get(key) {
        let result = null;
        const _key = this.prefix + key;
        const valueObj = this.storage.getItem(_key);
        try {
            if (valueObj) {
                const jsonObj = JSON.parse(valueObj);
                if (jsonObj.expires && isNumber(jsonObj.expires) && jsonObj.expires < new Date().getTime()) {
                    this.storage.removeItem(_key);
                    result = null;
                }
                result = jsonObj.value;
            }
        }
        catch (e) {
            result = valueObj;
        }
        return result;
    }
    /**
     * @function set
     * @description 设置storage值
     * @param {string} key 键
     * @param {any} value 值
     * @param {number} expires 过期时间，可选，单位：天
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.set('key','zhangsan'); //设置
     * s.set('key2','lisi',2); expries=2 days //设置过期时间
     */
    set(key, value, expires = 0) {
        if (!key)
            return;
        const _key = this.prefix + key;
        if (isNumber(expires) && expires > 0) {
            const date = new Date();
            date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
            this.storage.setItem(_key, JSON.stringify({ value, expires: date.getTime() }));
        }
        else {
            this.storage.setItem(_key, JSON.stringify({ value }));
        }
    }
    /**
     * @function remove
     * @description 删除storage值
     * @param {string} key 键
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.remove('key'); //删除storage值
     */
    remove(key) {
        const _key = this.prefix + key;
        this.storage.removeItem(_key);
        if (this._watcher[_key]) {
            clearInterval(this._watcher[_key]);
            delete this._watcher[_key];
        }
    }
    /**
     * @function clear
     * @description 清空storage
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.clear() //清空storage
     */
    clear() {
        this.storage.clear();
        Object.keys(this._watcher).forEach((key) => {
            clearInterval(this._watcher[key]);
        });
        this._watcher = {};
    }
    /**
     * @function watch
     * @description 监听storage值变化
     * @param {string} key 键
     * @param {function} callback 回调函数
     * @returns {any} timer 监听的定时器
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.watch('key',function(newVal,oldVal){}); //监听storage值变化
     */
    watch(key, callback) {
        const _key = this.prefix + key;
        let oldValue = this.get(_key);
        let newValue = oldValue;
        if (this._watcher[_key])
            clearInterval(this._watcher[_key]);
        const timer = setInterval(() => {
            newValue = this.get(key);
            if (newValue !== oldValue) {
                callback(newValue, oldValue);
                oldValue = newValue;
            }
        }, 100);
        this._watcher[_key] = timer;
        return timer;
    }
}
/**
 * @var _loaclStorage as local
 * @description localstorage 实例化对象
 * @example
 * _loaclStorage.set('key','zhangsan'); //设置
 */
const _loaclStorage = new Storage('local');
/**
 * @var _sessionStorage as session
 * @description sessionstorage 实例化对象
 * @example
 * _sessionStorage.set('key','zhangsan'); //设置
 */
const _sessionStorage = new Storage('session');

/**
 * @function getRandomColor
 * @description 获取随机颜色
 * @returns {string} 随机颜色 #3e3e3e
 * @example getRandomColor() // #3e3e3e
 */
const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')}`;
};
/**
 * @function getRandomNumber
 * @description 获取[min~max]范围内的随机数，包含min和max
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机数
 * @example getRandomNumber(1,10) // 5
 */
const getRandomInt = (min, max) => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
};
/**
 * @function getRandomString
 * @description 获取指定长度的随机字符串
 * @param {number} len 长度
 * @returns {string} 随机字符串
 * @example getRandomString(10) // 'wdsdwdq2d3'
 */
const getRandomString = (len = 16) => {
    let str = Math.random().toString(36).substr(2);
    if (str.length >= len) {
        return str.substr(0, len);
    }
    str += getRandomString(len - str.length);
    return str;
};

//基于开源项目any-rule 二次封装
//https://any86.github.io/any-rule/
/**
 * @function isRailwayNumber
 * @description 是否为铁路班次
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isRailwayNumber('G1234')
 */
const isRailwayNumber = (value) => /^[GCDZTSPKXLY1-9]\d{1,4}$/.test(value);
/**
 * @function isIMEI
 * @description 手机IMEI码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIMEI('123456789012345')
 */
const isIMEI = (value) => /^\d{15,17}$/.test(value);
/**
 * @function isURL
 * @description 是否为URL
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isURL('https://www.baidu.com')
 */
const isURL = (value) => /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(value);
/**
 * @function isSubnetMask
 * @description 是否为子网掩码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isSubnetMask('255.255.255.255')
 */
const isSubnetMask = (value) => /^((255\.){3}(255|254|252|248|240|224|192|128|0))$/.test(value);
/**
 * @function isVersion
 * @description 是否为版本号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVersion('1.0.1')
 */
const isVersion = (value) => /^\d+(?:\.\d+){2}$/.test(value);
/**
 * @function isVideoUrl
 * @description 是否为视频链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVideoUrl('https://www.baidu.mp4')
 */
const isVideoUrl = (value) => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);
/**
 * @function isImageUrl
 * @description 是否为图片链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isImageUrl('https://www.baidu.jpg')
 */
const isImageUrl = (value) => /^https?:\/\/(.+\/)+.+(\.(gif|jpg|jpeg|png|svg|webp|psd|bmp|tif))$/i.test(value);
/**
 * @function isIdCard
 * @description 是否为身份证号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345')
 */
const isBankCard = (value) => /^[1-9]\d{9,29}$/.test(value);
/**
 * @function isNewEnergyCar
 * @description 是否为新能源车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNewEnergyCar('粤Z12345')
 */
const isNewEnergyCar = (value) => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/.test(value);
/**
 * @function isPetrolCar
 * @description 是否为油车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isPetrolCar('粤Z12345')
 */
const isPetrolCar = (value) => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/.test(value);
/**
 * @function isCarNumber
 * @description 是否为车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isCarNumber('粤Z12345')
 */
const isCarNumber = (value) => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(value);
/**
 * @function isMobileNumer
 * @description 是否为手机号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isMobileNumer('12345678901')
 */
const isMobileNumer = (value) => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(value);
/**
 * @function isDateString
 * @description 是否为日期,严谨，已考虑平闰年
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isDateString('2020-01-01')
 */
const isDateString = (value) => /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(value);
/**
 * @function isChineseProvince
 * @description 是否为中国省份
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChineseProvince('广东')
 */
const isChineseProvince = (value) => /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/.test(value);
/**
 * @function isEmail
 * @description 是否为邮箱地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isEmail('12323144@qq.com')
 */
const isEmail = (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
/**
 * @function isTelPhone
 * @description 是否为国内座机
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isTelPhone('0755-12345678')
 */
const isTelPhone = (value) => /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);
/**
 * @function isIdCard
 * @description 是否为身份证号,支持1/2代(15位/18位数字)
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345678')
 */
const isIdCard = (value) => /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(value);
/**
 * @function isChinese
 * @description 是否为中文
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChinese('你好')
 */
const isChinese = (value) => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(value);
/**
 * @function isDecimal
 * @description 是否为小数
 * @param {String|Number} value
 * @returns {Boolean} true/false
 * @example isDecimal('1.1')
 * @example isDecimal('1')
 */
const isDecimal = (value) => /^\d+\.\d+$/.test(value + '');
/**
 * @function isOnlyNumber
 * @description 是否只包含数字
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyNumber('123')
 */
const isOnlyNumber = (value) => /^\d+$/.test(value);
/**
 * @function isOnlyLetter
 * @description 是否只包含字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyLetter('abc')
 */
const isOnlyLetter = (value) => /^[a-zA-Z]+$/.test(value);
/**
 * @function isNumberOrLetter
 * @description 是否只包含数字和字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNumberOrLetter('123abc')
 */
const isNumberOrLetter = (value) => /^[a-zA-Z0-9]+$/.test(value);
/**
 * @function isHtml
 * @description 是否为html标签
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isHtml('<div>123</div>')
 */
const isHtml = (value) => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);
//是否为ipv4地址
/**
 * @function isIpv4
 * @description 是否为ipv4地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv4('192.168.3.3')
 */
const isIpv4 = (value) => /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
/**
 * @function isIpv6
 * @description 是否为ipv6地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
 */
const isIpv6 = (value) => /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i.test(value);
/**
 * @function isPostalCode
 * @description 是否为邮政编码
 * @param {string} value 邮政编码
 * @returns {boolean} 是否为邮政编码
 * @example isPostalCode('100000')
 */
const isPostalCode = (value) => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(value);
/**
 * @function isMacAddress
 * @description 是否为mac地址
 * @param {string} value mac地址
 * @returns {boolean} 是否为mac地址
 * @example isMacAddress('00:00:00:00:00:00')
 */
const isMacAddress = (value) => /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(value);
/**
 * @function isPositiveInteger
 * @description 是否为正整数,不包括0
 * @param {string} value 正整数
 * @returns {boolean} 是否为正整数
 * @example isPositiveInteger('1')
 */
const isPositiveInteger = (value) => /^\+?[1-9]\d*$/.test(value + '');
/**
 * @function isNegativeInteger
 * @description 是否为负整数,不包括0
 * @param {string} value 负整数
 * @returns {boolean} 是否为负整数
 * @example isNegativeInteger('-1')
 */
const isNegativeInteger = (value) => /^\-[1-9]\d*$/.test(value + '');
/**
 * @function isInteger
 * @description 是否为整数
 * @param {Number} value 整数
 * @returns {boolean} 是否为整数
 * @example isInteger(1)
 */
const isInteger = (value) => /^(?:0|(?:-?[1-9]\d*))$/.test(value + '');
/**
 * @function isFloat
 * @description 是否为浮点数
 * @param {Number} value 浮点数
 * @returns {boolean} 是否为浮点数
 * @example isFloat(1.1)
 */
const isFloat = (value) => /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/.test(value + '');

/**
 * @function deepClone
 * @description 深克隆
 * @param {any} obj 要克隆的对象
 * @returns {any} 克隆后的对象
 * @example deepClone({a:1,b:2}) // {a:1,b:2}
 */
const deepClone = (obj, cache = new WeakMap()) => {
    if (obj === null)
        return null;
    if (obj instanceof Date)
        return new Date(obj);
    if (obj instanceof RegExp)
        return new RegExp(obj);
    if (typeof obj !== 'object')
        return obj;
    if (cache.has(obj))
        return cache.get(obj);
    const result = Array.isArray(obj) ? [] : {};
    cache.set(obj, result);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key], cache);
        }
    }
    return result;
};

/**
 * @function getImageSizeByUrl
 * @description 根据url获取图片的宽高
 * @param {string} url 图片url
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByUrl('https://www.baidu.com/img/bd_logo1.png').then(({width,height})=>{console.log(width,height)})
 */
const getImageSizeByUrl = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = (e) => {
            reject(e);
        };
        img.src = url;
    });
};
/**
 * @function getImageSizeByFile
 * @description 根据file获取图片的宽高
 * @param {file} file 文件file流
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByFile(file).then(({width,height})=>{console.log(width,height)})
 */
const getImageSizeByFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            getImageSizeByUrl(src)
                .then((size) => {
                resolve(size);
            })
                .catch((e) => {
                reject(e);
            });
        };
        reader.readAsDataURL(file);
    });
};
/**
 * @function downloadImage
 * @description 下载图片,
 * @param {string} url 图片url
 * @param {string} name 图片名称
 * @returns {void}
 * @example downloadImage('https://www.baidu.com/img/bd_logo1.png','baidu')
 */
const downloadImage = (url, name) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const context = canvas.getContext('2d');
        if (context) {
            context.drawImage(img, 0, 0, img.width, img.height);
            const url = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            const event = new MouseEvent('click');
            a.download = (name || 'photo') + '.png';
            a.href = url;
            a.dispatchEvent(event);
        }
    };
    //当img先加载src后，会出现浏览器缓存跨域，所以设置img时间戳
    img.src = url + '?t=' + new Date().getTime();
};

//file转base64
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const src = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) || '';
            resolve(src);
        };
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
    });
};
/**
 * @function base64ToFile
 * @description base64转file
 * @param {string} dataurl base64
 * @param {string} filename 文件名
 * @returns {file} 返回file
 */
const base64ToFile = (dataurl, filename) => {
    var _a;
    const arr = dataurl.split(',');
    const mime = ((_a = arr[0].match(/:(.*?);/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};
/**
 * @function base64ToBlob
 * @description base64转blob
 * @param {string} dataurl base64
 * @returns {blob} 返回blob
 */
const base64ToBlob = (dataurl) => {
    var _a;
    const arr = dataurl.split(',');
    const mime = (_a = arr[0].match(/:(.*?);/)) === null || _a === void 0 ? void 0 : _a[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

exports.$ = $;
exports.$$ = $$;
exports.EventBus = EventBus;
exports.Pubsub = Pubsub;
exports.Storage = Storage;
exports.addClass = addClass;
exports.base64ToBlob = base64ToBlob;
exports.base64ToFile = base64ToFile;
exports.copyText = copyText;
exports.datatypes = datatypes;
exports.deepClone = deepClone;
exports.diffDays = diffDays;
exports.downloadImage = downloadImage;
exports.elShow = elShow;
exports.event = event;
exports.exitFullScreen = exitFullScreen;
exports.fileToBase64 = fileToBase64;
exports.formatDate = formatDate;
exports.formatPassTime = formatPassTime;
exports.fullScreen = fullScreen;
exports.getAttr = getAttr;
exports.getAttrKV = getAttrKV;
exports.getAttrList = getAttrList;
exports.getAuthor = getAuthor;
exports.getBrowserInfo = getBrowserInfo;
exports.getBrowserLanguage = getBrowserLanguage;
exports.getClass = getClass;
exports.getCookie = getCookie;
exports.getImageSizeByFile = getImageSizeByFile;
exports.getImageSizeByUrl = getImageSizeByUrl;
exports.getOS = getOS;
exports.getQueryString = getQueryString;
exports.getRandomColor = getRandomColor;
exports.getRandomInt = getRandomInt;
exports.getRandomString = getRandomString;
exports.getScrollPosition = getScrollPosition;
exports.getSelectedText = getSelectedText;
exports.getStyle = getStyle;
exports.getUrlParams = getUrlParams;
exports.getWindowSize = getWindowSize;
exports.hasClass = hasClass;
exports.isArray = isArray;
exports.isBankCard = isBankCard;
exports.isBoolean = isBoolean;
exports.isBrowser = isBrowser;
exports.isCarNumber = isCarNumber;
exports.isChinese = isChinese;
exports.isChineseProvince = isChineseProvince;
exports.isDate = isDate;
exports.isDateString = isDateString;
exports.isDecimal = isDecimal;
exports.isEmail = isEmail;
exports.isError = isError;
exports.isFloat = isFloat;
exports.isFullScreen = isFullScreen;
exports.isFunction = isFunction;
exports.isHtml = isHtml;
exports.isIMEI = isIMEI;
exports.isIdCard = isIdCard;
exports.isImageUrl = isImageUrl;
exports.isInteger = isInteger;
exports.isIpv4 = isIpv4;
exports.isIpv6 = isIpv6;
exports.isMacAddress = isMacAddress;
exports.isMap = isMap;
exports.isMobile = isMobile;
exports.isMobileNumer = isMobileNumer;
exports.isNegativeInteger = isNegativeInteger;
exports.isNewEnergyCar = isNewEnergyCar;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isNumberOrLetter = isNumberOrLetter;
exports.isObject = isObject;
exports.isOnlyLetter = isOnlyLetter;
exports.isOnlyNumber = isOnlyNumber;
exports.isPetrolCar = isPetrolCar;
exports.isPositiveInteger = isPositiveInteger;
exports.isPostalCode = isPostalCode;
exports.isPromise = isPromise;
exports.isRailwayNumber = isRailwayNumber;
exports.isRegExp = isRegExp;
exports.isSet = isSet;
exports.isShow = isShow;
exports.isString = isString;
exports.isSubnetMask = isSubnetMask;
exports.isSymbol = isSymbol;
exports.isTelPhone = isTelPhone;
exports.isURL = isURL;
exports.isUndefined = isUndefined;
exports.isVersion = isVersion;
exports.isVideoUrl = isVideoUrl;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
exports.isWeiXin = isWeiXin;
exports.local = _loaclStorage;
exports.notice = notice;
exports.obj2Url = obj2Url;
exports.parseDate = parseDate;
exports.printPage = printPage;
exports.readClipboard = readClipboard;
exports.removeAttr = removeAttr;
exports.removeClass = removeClass;
exports.removeCookie = removeCookie;
exports.removeTag = removeTag;
exports.selectText = selectText;
exports.session = _sessionStorage;
exports.setAttr = setAttr;
exports.setCookie = setCookie;
exports.setStyle = setStyle;
exports.url2Obj = url2Obj;
