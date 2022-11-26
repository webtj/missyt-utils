type ElementTypes = {
  addEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) => void;
  removeEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ) => void;
  attachEvent: (type: string, listener: EventListenerOrEventListenerObject) => void;
  detachEvent: (type: string, listener: EventListenerOrEventListenerObject) => void;
};

/**
 * @function on
 * @description 事件监听
 * @param {Element} el
 * @param {string} type 事件类型
 * @param {EventListenerOrEventListenerObject} listener 事件监听函数
 * @param {boolean | AddEventListenerOptions} options
 * @returns {void}
 * @example
 * on(document, 'click', () => {
 *  console.log('click');
 * });
 */
const on = <T extends ElementTypes>(
  el: T,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) => {
  if (el.addEventListener) {
    el.addEventListener(type, listener, options);
  } else if (el.attachEvent) {
    el.attachEvent(`on${type}`, listener);
  } else {
    throw new Error('Your browser does not support addEventListener');
  }
};

/**
 * @function off
 * @description 事件移除
 * @param {Element} el
 * @param {string} type 事件类型
 * @param {EventListenerOrEventListenerObject} listener 事件监听函数
 * @param {boolean | EventListenerOptions} options
 * @returns {void}
 * @example
 * off(document, 'click', () => {
 * console.log('click');
 * });
 */
const off = <T extends ElementTypes>(
  el: T,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
) => {
  if (el.removeEventListener) {
    el.removeEventListener(type, listener, options);
  } else if (el.detachEvent) {
    el.detachEvent(`on${type}`, listener);
  } else {
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
const Event = { on, off };

export { Event };
