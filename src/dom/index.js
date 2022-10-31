/**
 * 获取单个dom
 * @param {string} el选择器 
 * @returns dom节点
 */
const $ = el => document.querySelector(el);

/**
 * 获取多个dom
 * @param {string} el选择器
 * @returns 多个dom节点
 */
const $$ = el => document.querySelectorAll(el);

/**
 * 设置节点样式
 * @param {Element} el节点 
 * @param {object} style 
 */
const setStyle = (el, style) => {
  for (let key in style) {
    el.style[key] = style[key];
  }
};

/**
 * 返回元素的制定样式
 * @param {Element} el 
 * @param {string} style 
 * @returns 返回元素的制定样式
 */
const getStyle = (el, style) => {
  return el.currentStyle ? el.currentStyle[style] : getComputedStyle(el)[style];
};

//获取元素class
const getClass = el => el.className;

/**
 * 元素是否存在某个class
 * @param {Element} el 
 * @param {string} className 
 * @returns {Boolean} 返回元素是否存在class
 */
const hasClass = (el, className) => el.classList.contains(className);

/**
 * 移除某个className
 * @param {Element} el 
 * @param {string} className 
 * @returns {Boolean} 移除某个class
 */
const removeClass = (el, className) => el.classList.remove(className);

/**
 * 判断元素是否存在class，不存在则添加
 * @param {Element} el 
 * @param {string} className 
 */
const addClass = (el, className) => {
  if (!hasClass(el, className)) {
    el.classList.add(className);
  }
};

/**
 * 设置元素属性
 * @param {Element} el 
 * @param {object} attr 
 */
const setAttr = (el, attr) => {
  for (let key in attr) {
    el.setAttribute(key, attr[key]);
  }
};

//移除元素某个属性
const removeAttr = (el, attr) => el.removeAttribute(attr);

/**
 * 获取元素属性
 * @param {Element} el 
 * @param {string} attr 
 * @returns 返回元素属性
 */
const getAttr = (el, attr) => el.getAttribute(attr)

/**
 * 获取元素所有属性
 * @param {Element} el 
 * @returns 返回元素的所有属性
 */
const getAttrList = el => {
  return Object.keys(el.attributes).map(key => el.attributes[key].name);
};

/**
 * 获取元素所有属性值
 * @param {Element} el 
 * @returns 返回元素的所有属性值
 */
const getAttrKV = el => {
  return Object.keys(el.attributes).map(attr => {
    let key = el.attributes[attr].name;
    let value = el.attributes[attr].value;
    return { key, value };
  })
};

/**
 * 元素进入可见区域
 * @param {Element} el 元素
 * @param {Function} callback 进入可见区域回调
 */
const elShow = (el, callback) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) callback && callback();
    });
  });
  observer.observe(el);
};

/**
 * 获取元素是否在可见区域
 * @param {Elemengt} el 
 * @returns {Boolean} 元素是否在可视区域
 */
const isShow = el => {
  let rect = el.getBoundingClientRect();
  let clientHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= clientHeight;
};

/**
 * 去除文本内容的标签
 * @param {string} text
 * @returns 返回去除标签的文本
 */
const removeTag = text => text.replace(/<[^>]+>/g, "");

export {
  $,
  $$,
  setStyle,
  getStyle,
  getClass,
  hasClass,
  removeClass,
  addClass,
  getAttr,
  setAttr,
  removeAttr,
  getAttrList,
  getAttrKV,
  elShow,
  isShow,
  removeTag
}