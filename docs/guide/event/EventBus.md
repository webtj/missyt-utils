# 🥕 EventBus

:::tip
不同于发布订阅，事件总线允许一个事件key，销毁时会清除key下所有的事件回调
:::
> 全局事件注册、触发、注销
```js
/**
 * @var EventBus
 * @description 事件总线
 * @property {Object} callbacks - 事件回调函数
 * @property {Function} on - 注册事件
 * @property {Function} off - 注销事件
 * @property {Function} emit - 触发事件
 * @example
 * EventBus.on('login',data=>{})
 * EventBus.emit('login',{name:'张三'})
 * EventBus.off('login')
 */
import { EventBus } from 'missyt-utils';
```

## EventBus.on
> 事件注册
```js
/**
 * @function on
 * @description 订阅事件
 * @param {string} type 事件名称
 * @param {function} callback 回调函数
 * @returns {Function} 返回刚绑定的回调函数
 * @example
 */
  let callbackList = EventBus.on('refresh', (data) => {
    console.log('refresh method 1', data);
  })

  callbackList = EventBus.on('refresh', (data) => {
    console.log('refresh method 2', data);
  })

  console.log(callbackList);  //[fn,fn]
```

## EventBus.emit
> 事件触发
```js
/**
 * @function off
 * @description 触发事件
 * @param {string} type 事件名称
 * @param {any} data 触发事件需要的参数
 * @example
 * EventBus.emit('login',{name:'张三'})
 */
```

## EventBus.off
> 事件注销
```js
/**
  * @function off
  * @description 取消订阅事件
  * @param {string} type 事件名称，可不传，不传取消所有
  * @example
  * EventBus.off('login')
  * EventBus.off()
  */
```

