# 🥕 浏览器事件

> 浏览器事件注册、注销
```js
/**
 * @var {object} event
 * @description 事件对象
 * @property {function} on 绑定事件
 * @property {function} off 解绑事件
 * @example
 * import { Event } from 'missyt-utils';
 * Event.on(document.querySelector('.col'), 'click', () => {
 *  console.log('click');
 * });
 * eveEventnt.off(document.querySelector('.col'), 'click', () => {
 * console.log('click');
 * });
 */
import { Event } from 'missyt-utils';
```

## Event.on
> 事件注册
```js
/**
 * @function on
 * @description 事件监听
 * @param {Element} el
 * @param {string} type 事件类型
 * @param {EventListenerOrEventListenerObject} listener 事件监听函数
 * @param {boolean | AddEventListenerOptions} options
 * @returns {void}
 * @example
 * Event.on(document, 'click', () => {
 *  console.log('click');
 * });
 */
```

## Event.off
> 事件注销
```js
/**
 * @function off
 * @description 事件移除
 * @param {Element} el
 * @param {string} type 事件类型
 * @param {EventListenerOrEventListenerObject} listener 事件监听函数
 * @param {boolean | EventListenerOptions} options
 * @returns {void}
 * @example
 * Event.off(document, 'click', () => {
 * console.log('click');
 * });
 */
```