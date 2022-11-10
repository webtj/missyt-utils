/**
 * @function getAuthor
 * @description 获取作者信息
 * @returns {string} 返回作者信息
 * @example getAuthor() // => 'author'
 */
declare const getAuthor: () => string;

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
 * @function $
 * @description 获取dom元素，只返回一个元素
 * @param {string} el 节点选择器
 * @returns {HTMLElement|null}
 * @example $('body') // => HTMLElement
 */
declare const $: (el: string) => HTMLElement | null;
/**
 * @function $$
 * @description 获取dom元素，返回一个数组
 * @param {string} el 节点选择器
 * @returns {NodeListOf<HTMLElement>}
 * @example $$('.col') // => NodeListOf<HTMLElement>
 */
declare const $$: (el: string) => NodeListOf<HTMLElement>;
/**
 * @function setStyle
 * @description 设置dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {object} style 样式对象
 * @returns {void} 无返回值
 * @example setStyle(document.body, { color: 'red' }) // => void
 */
declare const setStyle: (el: HTMLElement, style: object) => void;
/**
 * @function getStyle
 * @description 获取dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {string} style 样式名称
 * @returns {string} 样式属性值
 * @example getStyle(document.body, 'color') // => 'red'
 */
declare const getStyle: (el: HTMLElement, style: string) => string;
/**
 * @function getClass
 * @description 获取dom元素的class
 * @param {HTMLElement} el dom元素
 * @returns {string} class属性值
 * @example getClass(document.querySelector('.col')) // => 'span-12'
 */
declare const getClass: (el: HTMLElement) => string;
/**
 * @function hasClass
 * @description 判断dom元素是否有某个class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {boolean} 是否有class
 * @example hasClass(document.querySelector('.col'), 'span-12') // => true
 */
declare const hasClass: (el: HTMLElement, className: string) => boolean;
/**
 * @function removeClass
 * @description 移除dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example removeClass(document.querySelector('.col'), 'span-12') // => void
 */
declare const removeClass: (el: HTMLElement, className: string) => void;
/**
 * @function addClass
 * @description 添加dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example addClass(document.querySelector('.col'), 'span-12') // => void
 */
declare const addClass: (el: HTMLElement, className: string) => void;
/**
 * @function setAttr
 * @description 设置dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {object} attr 属性对象
 * @returns {void} 无返回值
 * @example setAttr(document.querySelector('.col'), { id: 'col' }) // => void
 */
declare const setAttr: (el: HTMLElement, attr: object) => void;
/**
 * @function removeAttr
 * @description 移除dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {void} 无返回值
 * @example removeAttr(document.querySelector('.col'), 'id') // => void
 */
declare const removeAttr: (el: HTMLElement, attr: string) => void;
/**
 * @function getAttr
 * @description 获取dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {string} 属性值
 * @example getAttr(document.querySelector('.col'), 'id') // => 'col'
 */
declare const getAttr: (el: HTMLElement, attr: string) => string | null;
/**
 * @function getAttrList
 * @description 获取dom元素的属性列表
 * @param {HTMLElement} el dom元素
 * @returns {Array<string>} 属性列表
 * @example getAttrList(document.querySelector('.col')) // => ['id', 'class']
 */
declare const getAttrList: (el: HTMLElement) => Array<string>;
/**
 * @function getAttrKV
 * @description 获取dom元素的属性键值对
 * @param {HTMLElement} el dom元素
 * @returns {object} 属性键值对
 * @example getAttrKV(document.querySelector('.col')) // => { id: 'col', class: 'span-12' }
 */
interface AttrKV {
    key: string;
    value: string | number;
}
declare const getAttrKV: (el: HTMLElement) => Array<AttrKV>;
/**
 * @function elShow
 * @description 显示dom元素时执行某个操作
 * @param {HTMLElement} el dom元素
 * @param {Function} callback 回调函数
 * @returns {void} 无返回值
 * @example elShow(document.querySelector('.col'),()=>{ ... }) // => void
 */
declare const elShow: (el: HTMLElement, callback: () => unknown) => void;
/**
 * @function isShow
 * @description 判断dom元素是否在可视区域
 * @param {HTMLElement} el dom元素
 * @returns {boolean} 是否在可视区域
 * @example isShow(document.querySelector('.col')) // => true
 */
declare const isShow: (el: HTMLElement) => boolean;
/**
 * @function removeTag
 * @description 移除text文本中的标签
 * @param {string} text 文本
 * @returns {string} 移除标签后的文本
 * @example removeTag('<p>hello world</p>') // => 'hello world'
 */
declare const removeTag: (text: string) => string;

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
declare const isNumber: (value: unknown, isFinite?: boolean) => boolean;
/**
 * @function isString
 * @description 判断是否为字符串
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isString('1') => true
 * isString(new String('1')) => true
 */
declare const isString: (value: unknown) => boolean;
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
declare const isBoolean: (value: unknown) => boolean;
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
declare const isNull: (value: unknown) => boolean;
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
declare const isUndefined: (value: unknown) => boolean;
/**
 * @function isSymbol
 * @description 判断是否为Symbol
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSymbol(Symbol('1')) => true
 */
declare const isSymbol: (value: unknown) => boolean;
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
declare const isObject: (value: unknown) => boolean;
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
declare const isFunction: (value: unknown) => boolean;
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
declare const isArray: (value: unknown) => boolean;
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
declare const isDate: (value: unknown) => boolean;
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
declare const isRegExp: (value: unknown) => boolean;
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
declare const isError: (value: unknown) => boolean;
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
declare const isMap: (value: unknown) => boolean;
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
declare const isWeakMap: (value: unknown) => boolean;
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
declare const isSet: (value: unknown) => boolean;
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
declare const isWeakSet: (value: unknown) => boolean;
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
declare const isPromise: (value: unknown) => boolean;

declare type EmptyFunction = () => void;

/**
 * @var EventBus
 * @description 事件总线
 */
declare const EventBus: {
    callbacks: {};
    /**
     * @function on
     * @description 订阅事件
     * @param {string} type 事件名称
     * @param {function} callback 回调函数
     * @returns {Function} 返回刚绑定的回调函数
     * @example
     * EventBus.on('login',data=>{})
     */
    on: (type: string, callback: EmptyFunction) => EmptyFunction;
    /**
     * @function off
     * @description 触发事件
     * @param {string} type 事件名称
     * @param {any} data 触发事件需要的参数
     * @example
     * EventBus.emit('login',{name:'张三'})
     */
    emit: (type: string, data: unknown) => void;
    /**
     * @function off
     * @description 取消订阅事件
     * @param {string} type 事件名称，可不传，不传取消所有
     * @param {function} callback 回调函数，可不传，不传取消所有
     * @example
     * EventBus.off('login')
     * EventBus.off()
     */
    off: (type?: string) => void;
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
declare const Pubsub: {
    id: number;
    callbacks: {};
    /**
     * @function subscribe
     * @description 订阅事件
     * @param {string} channel 事件名称
     * @param {function} callback 回调函数
     * @returns {string} 返回订阅的唯一编号
     * @example
     * Pubsub.subscribe('login',data=>{})
     */
    subscribe: (channel: string, callback: (arg?: unknown) => void) => string;
    /**
     * @function publish
     * @description 发布事件
     * @param {string} channel 事件名称
     * @param {any} data 发布事件需要的参数
     * @example
     * Pubsub.publish('login',{name:'张三'})
     */
    publish: (channel: string, data: unknown) => void;
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
    unscribe: (flag: string) => void;
};

declare type Datetype = string | number | Date;
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
declare const parseDate: (date?: Datetype) => object;
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
declare const formatDate: (date?: Datetype, format?: string) => string;
/**
 * @function diffDays
 * @description 计算两个时间相差的天数
 * @param {Datetype} date1 需要计算的时间1
 * @param {Datetype} date2 需要计算的时间2
 * @returns {number} 返回相差的天数
 * @example
 * diffDays('2020-01-01 12:12:12','2020-01-02 12:12:12')
 */
declare const diffDays: (date1: Date, date2: Date) => number;
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
declare const formatPassTime: (startTime?: Datetype) => string;

/**
 * @function getCookie
 * @description 获取cookie
 * @param {string} name cookie名称
 * @returns {string} cookie值
 * @example getCookie('name')
 */
declare const getCookie: (name: string) => string | null;
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
declare const setCookie: (name: string, value: string, expires?: number, path?: string, domain?: string) => void;
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
declare const removeCookie: (name: string, path?: string, domain?: string) => void;

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
declare class Storage {
    prefix: string;
    _watcher: {};
    storage: globalThis.Storage;
    constructor(storage?: string, prefix?: string);
    /**
     * @function get
     * @description 获取storage值
     * @param {string} key 键
     * @returns {any} 值
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.get('key'); //获取storage值
     */
    get(key: string): string | null;
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
    set(key: string, value: unknown, expires?: number): void;
    /**
     * @function remove
     * @description 删除storage值
     * @param {string} key 键
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.remove('key'); //删除storage值
     */
    remove(key: string): void;
    /**
     * @function clear
     * @description 清空storage
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.clear() //清空storage
     */
    clear(): void;
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
    watch(key: string, callback: (newVal: string | null, oldVal: string | null) => void): unknown;
}
/**
 * @var _loaclStorage as local
 * @description localstorage 实例化对象
 * @example
 * _loaclStorage.set('key','zhangsan'); //设置
 */
declare const _loaclStorage: Storage;
/**
 * @var _sessionStorage as session
 * @description sessionstorage 实例化对象
 * @example
 * _sessionStorage.set('key','zhangsan'); //设置
 */
declare const _sessionStorage: Storage;

/**
 * @function getRandomColor
 * @description 获取随机颜色
 * @returns {string} 随机颜色 #3e3e3e
 * @example getRandomColor() // #3e3e3e
 */
declare const getRandomColor: () => string;
/**
 * @function getRandomNumber
 * @description 获取[min~max]范围内的随机数，包含min和max
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机数
 * @example getRandomNumber(1,10) // 5
 */
declare const getRandomInt: (min: number, max: number) => number;
/**
 * @function getRandomString
 * @description 获取指定长度的随机字符串
 * @param {number} len 长度
 * @returns {string} 随机字符串
 * @example getRandomString(10) // 'wdsdwdq2d3'
 */
declare const getRandomString: (len?: number) => string;

/**
 * @function isRailwayNumber
 * @description 是否为铁路班次
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isRailwayNumber('G1234')
 */
declare const isRailwayNumber: (value: string) => boolean;
/**
 * @function isIMEI
 * @description 手机IMEI码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIMEI('123456789012345')
 */
declare const isIMEI: (value: string) => boolean;
/**
 * @function isURL
 * @description 是否为URL
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isURL('https://www.baidu.com')
 */
declare const isURL: (value: string) => boolean;
/**
 * @function isSubnetMask
 * @description 是否为子网掩码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isSubnetMask('255.255.255.255')
 */
declare const isSubnetMask: (value: string) => boolean;
/**
 * @function isVersion
 * @description 是否为版本号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVersion('1.0.1')
 */
declare const isVersion: (value: string) => boolean;
/**
 * @function isVideoUrl
 * @description 是否为视频链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVideoUrl('https://www.baidu.mp4')
 */
declare const isVideoUrl: (value: string) => boolean;
/**
 * @function isImageUrl
 * @description 是否为图片链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isImageUrl('https://www.baidu.jpg')
 */
declare const isImageUrl: (value: string) => boolean;
/**
 * @function isIdCard
 * @description 是否为身份证号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345')
 */
declare const isBankCard: (value: string) => boolean;
/**
 * @function isNewEnergyCar
 * @description 是否为新能源车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNewEnergyCar('粤Z12345')
 */
declare const isNewEnergyCar: (value: string) => boolean;
/**
 * @function isPetrolCar
 * @description 是否为油车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isPetrolCar('粤Z12345')
 */
declare const isPetrolCar: (value: string) => boolean;
/**
 * @function isCarNumber
 * @description 是否为车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isCarNumber('粤Z12345')
 */
declare const isCarNumber: (value: string) => boolean;
/**
 * @function isMobileNumer
 * @description 是否为手机号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isMobileNumer('12345678901')
 */
declare const isMobileNumer: (value: string) => boolean;
/**
 * @function isDateString
 * @description 是否为日期,严谨，已考虑平闰年
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isDateString('2020-01-01')
 */
declare const isDateString: (value: string) => boolean;
/**
 * @function isChineseProvince
 * @description 是否为中国省份
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChineseProvince('广东')
 */
declare const isChineseProvince: (value: string) => boolean;
/**
 * @function isEmail
 * @description 是否为邮箱地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isEmail('12323144@qq.com')
 */
declare const isEmail: (value: string) => boolean;
/**
 * @function isTelPhone
 * @description 是否为国内座机
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isTelPhone('0755-12345678')
 */
declare const isTelPhone: (value: string) => boolean;
/**
 * @function isIdCard
 * @description 是否为身份证号,支持1/2代(15位/18位数字)
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345678')
 */
declare const isIdCard: (value: string) => boolean;
/**
 * @function isChinese
 * @description 是否为中文
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChinese('你好')
 */
declare const isChinese: (value: string) => boolean;
/**
 * @function isDecimal
 * @description 是否为小数
 * @param {String|Number} value
 * @returns {Boolean} true/false
 * @example isDecimal('1.1')
 * @example isDecimal('1')
 */
declare const isDecimal: (value: number | string) => boolean;
/**
 * @function isOnlyNumber
 * @description 是否只包含数字
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyNumber('123')
 */
declare const isOnlyNumber: (value: string) => boolean;
/**
 * @function isOnlyLetter
 * @description 是否只包含字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyLetter('abc')
 */
declare const isOnlyLetter: (value: string) => boolean;
/**
 * @function isNumberOrLetter
 * @description 是否只包含数字和字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNumberOrLetter('123abc')
 */
declare const isNumberOrLetter: (value: string) => boolean;
/**
 * @function isHtml
 * @description 是否为html标签
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isHtml('<div>123</div>')
 */
declare const isHtml: (value: string) => boolean;
/**
 * @function isIpv4
 * @description 是否为ipv4地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv4('192.168.3.3')
 */
declare const isIpv4: (value: string) => boolean;
/**
 * @function isIpv6
 * @description 是否为ipv6地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
 */
declare const isIpv6: (value: string) => boolean;
/**
 * @function isPostalCode
 * @description 是否为邮政编码
 * @param {string} value 邮政编码
 * @returns {boolean} 是否为邮政编码
 * @example isPostalCode('100000')
 */
declare const isPostalCode: (value: string) => boolean;
/**
 * @function isMacAddress
 * @description 是否为mac地址
 * @param {string} value mac地址
 * @returns {boolean} 是否为mac地址
 * @example isMacAddress('00:00:00:00:00:00')
 */
declare const isMacAddress: (value: string) => boolean;
/**
 * @function isPositiveInteger
 * @description 是否为正整数,不包括0
 * @param {string} value 正整数
 * @returns {boolean} 是否为正整数
 * @example isPositiveInteger('1')
 */
declare const isPositiveInteger: (value: number) => boolean;
/**
 * @function isNegativeInteger
 * @description 是否为负整数,不包括0
 * @param {string} value 负整数
 * @returns {boolean} 是否为负整数
 * @example isNegativeInteger('-1')
 */
declare const isNegativeInteger: (value: number) => boolean;
/**
 * @function isInteger
 * @description 是否为整数
 * @param {Number} value 整数
 * @returns {boolean} 是否为整数
 * @example isInteger(1)
 */
declare const isInteger: (value: number) => boolean;
/**
 * @function isFloat
 * @description 是否为浮点数
 * @param {Number} value 浮点数
 * @returns {boolean} 是否为浮点数
 * @example isFloat(1.1)
 */
declare const isFloat: (value: number) => boolean;

/**
 * @function deepClone
 * @description 深克隆
 * @param {any} obj 要克隆的对象
 * @returns {any} 克隆后的对象
 * @example deepClone({a:1,b:2}) // {a:1,b:2}
 */
declare const deepClone: (obj: object, cache?: WeakMap<object, any>) => any;

/**
 * @function getImageSizeByUrl
 * @description 根据url获取图片的宽高
 * @param {string} url 图片url
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByUrl('https://www.baidu.com/img/bd_logo1.png').then(({width,height})=>{console.log(width,height)})
 */
declare const getImageSizeByUrl: (url: string) => Promise<unknown>;
/**
 * @function getImageSizeByFile
 * @description 根据file获取图片的宽高
 * @param {file} file 文件file流
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByFile(file).then(({width,height})=>{console.log(width,height)})
 */
declare const getImageSizeByFile: (file: Blob) => Promise<unknown>;
/**
 * @function downloadImage
 * @description 下载图片,
 * @param {string} url 图片url
 * @param {string} name 图片名称
 * @returns {void}
 * @example downloadImage('https://www.baidu.com/img/bd_logo1.png','baidu')
 */
declare const downloadImage: (url: string, name: string) => void;

declare const fileToBase64: (file: Blob) => Promise<unknown>;
/**
 * @function base64ToFile
 * @description base64转file
 * @param {string} dataurl base64
 * @param {string} filename 文件名
 * @returns {file} 返回file
 */
declare const base64ToFile: (dataurl: string, filename: string) => File;
/**
 * @function base64ToBlob
 * @description base64转blob
 * @param {string} dataurl base64
 * @returns {blob} 返回blob
 */
declare const base64ToBlob: (dataurl: string) => Blob;

export { $, $$, EventBus, Pubsub, Storage, addClass, base64ToBlob, base64ToFile, deepClone, diffDays, downloadImage, elShow, exitFullScreen, fileToBase64, formatDate, formatPassTime, fullScreen, getAttr, getAttrKV, getAttrList, getAuthor, getBrowserInfo, getClass, getCookie, getImageSizeByFile, getImageSizeByUrl, getOS, getRandomColor, getRandomInt, getRandomString, getStyle, hasClass, isArray, isBankCard, isBoolean, isBrowser, isCarNumber, isChinese, isChineseProvince, isDate, isDateString, isDecimal, isEmail, isError, isFloat, isFullScreen, isFunction, isHtml, isIMEI, isIdCard, isImageUrl, isInteger, isIpv4, isIpv6, isMacAddress, isMap, isMobile, isMobileNumer, isNegativeInteger, isNewEnergyCar, isNull, isNumber, isNumberOrLetter, isObject, isOnlyLetter, isOnlyNumber, isPetrolCar, isPositiveInteger, isPostalCode, isPromise, isRailwayNumber, isRegExp, isSet, isShow, isString, isSubnetMask, isSymbol, isTelPhone, isURL, isUndefined, isVersion, isVideoUrl, isWeakMap, isWeakSet, isWeiXin, _loaclStorage as local, parseDate, removeAttr, removeClass, removeCookie, removeTag, _sessionStorage as session, setAttr, setCookie, setStyle };
