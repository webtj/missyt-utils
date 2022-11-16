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
 * @var domUtils
 * @description dom相关操作
 * @property {function} $ 获取dom元素
 * @property {function} $$ 获取dom元素列表
 * @property {function} setStyle 设置dom元素的样式
 * @property {function} getStyle 获取dom元素的样式
 * @property {function} hasClass 判断dom元素是否有某个class
 * @property {function} removeClass 移除dom元素的class
 * @property {function} addClass 添加dom元素的class
 * @property {function} getClass 获取dom元素的class
 * @property {function} setAttr 设置dom元素的属性
 * @property {function} removeAttr 移除dom元素的属性
 * @property {function} getAttr 获取dom元素的属性
 * @property {function} getAttrList 获取dom元素的属性列表
 * @property {function} getAttrKV 获取dom元素的属性键值对
 * @property {function} elShow 显示dom元素时执行某个操作
 * @property {function} isShow 判断dom元素是否在可视区域
 * @property {function} removeTag 移除text文本中的标签
 */
declare const domUtils: {
    $: (el: string) => HTMLElement | null;
    $$: (el: string) => NodeListOf<HTMLElement>;
    setStyle: (el: HTMLElement, style: object) => void;
    getStyle: (el: HTMLElement, style: string) => string;
    getClass: (el: HTMLElement) => string;
    hasClass: (el: HTMLElement, className: string) => boolean;
    removeClass: (el: HTMLElement, className: string) => void;
    addClass: (el: HTMLElement, className: string) => void;
    setAttr: (el: HTMLElement, attr: object) => void;
    removeAttr: (el: HTMLElement, attr: string) => void;
    getAttr: (el: HTMLElement, attr: string) => string | null;
    getAttrList: (el: HTMLElement) => Array<string>;
    getAttrKV: (el: HTMLElement) => Array<AttrKV>;
    elShow: (el: HTMLElement, callback: () => unknown) => void;
    isShow: (el: HTMLElement) => boolean;
    removeTag: (text: string) => string;
};
export { $, $$, setStyle, getStyle, getClass, hasClass, removeClass, addClass, setAttr, removeAttr, getAttr, getAttrList, getAttrKV, elShow, isShow, removeTag, domUtils, };
