/**
 * @function $
 * @description 获取dom元素，只返回一个元素
 * @param {string} el 节点选择器
 * @returns {HTMLElement|null}
 * @example $('body') // => HTMLElement
 */
const $ = (el: string): HTMLElement | null => document.querySelector(el);

/**
 * @function $$
 * @description 获取dom元素，返回一个数组
 * @param {string} el 节点选择器
 * @returns {NodeListOf<HTMLElement>}
 * @example $$('.col') // => NodeListOf<HTMLElement>
 */
const $$ = (el: string): NodeListOf<HTMLElement> => document.querySelectorAll(el);

/**
 * @function setStyle
 * @description 设置dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {object} style 样式对象
 * @returns {void} 无返回值
 * @example setStyle(document.body, { color: 'red' }) // => void
 */
const setStyle = (el: HTMLElement, style: object): void => {
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
const getStyle = (el: HTMLElement, style: string): string => getComputedStyle(el)[style];

/**
 * @function getClass
 * @description 获取dom元素的class
 * @param {HTMLElement} el dom元素
 * @returns {string} class属性值
 * @example getClass(document.querySelector('.col')) // => 'span-12'
 */
const getClass = (el: HTMLElement) => el.className;

/**
 * @function hasClass
 * @description 判断dom元素是否有某个class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {boolean} 是否有class
 * @example hasClass(document.querySelector('.col'), 'span-12') // => true
 */
const hasClass = (el: HTMLElement, className: string): boolean => el.classList.contains(className);

/**
 * @function removeClass
 * @description 移除dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example removeClass(document.querySelector('.col'), 'span-12') // => void
 */
const removeClass = (el: HTMLElement, className: string): void => el.classList.remove(className);

/**
 * @function addClass
 * @description 添加dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example addClass(document.querySelector('.col'), 'span-12') // => void
 */
const addClass = (el: HTMLElement, className: string): void => {
  if (!hasClass(el, className)) el.classList.add(className);
};

/**
 * @function setAttr
 * @description 设置dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {object} attr 属性对象
 * @returns {void} 无返回值
 * @example setAttr(document.querySelector('.col'), { id: 'col' }) // => void
 */
const setAttr = (el: HTMLElement, attr: object): void => {
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
const removeAttr = (el: HTMLElement, attr: string): void => el.removeAttribute(attr);

/**
 * @function getAttr
 * @description 获取dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {string} 属性值
 * @example getAttr(document.querySelector('.col'), 'id') // => 'col'
 */
const getAttr = (el: HTMLElement, attr: string): string | null => el.getAttribute(attr);

/**
 * @function getAttrList
 * @description 获取dom元素的属性列表
 * @param {HTMLElement} el dom元素
 * @returns {Array<string>} 属性列表
 * @example getAttrList(document.querySelector('.col')) // => ['id', 'class']
 */
const getAttrList = (el: HTMLElement): Array<string> => {
  return Object.keys(el.attributes).map((key) => el.attributes[key].name);
};

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
const getAttrKV = (el: HTMLElement): Array<AttrKV> => {
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
const elShow = (el: HTMLElement, callback: () => unknown): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) callback && callback();
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
const isShow = (el: HTMLElement): boolean => {
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
const removeTag = (text: string): string => text.replace(/<[^>]+>/g, '');

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
const domUtils = {
  $,
  $$,
  setStyle,
  getStyle,
  getClass,
  hasClass,
  removeClass,
  addClass,
  setAttr,
  removeAttr,
  getAttr,
  getAttrList,
  getAttrKV,
  elShow,
  isShow,
  removeTag,
};

export {
  $,
  $$,
  setStyle,
  getStyle,
  getClass,
  hasClass,
  removeClass,
  addClass,
  setAttr,
  removeAttr,
  getAttr,
  getAttrList,
  getAttrKV,
  elShow,
  isShow,
  removeTag,
  domUtils,
};
