# 🥕 发布订阅

:::tip
不同于事件总线，发布订阅模式支持`整个channel` 和 `单个pid`注销，而事件总线注销则会将事件下的所有回调全部清除，类似于发布订阅模式的channel。
发布订阅模式，channel订阅每个事件都有单独pid，可单独注销
:::
> 全局事件注册、触发、注销
```js
/**
 * @var Pubsub
 * @description 发布订阅模式
 * @property {object} callbacks 事件回调函数集合
 * @property {function} subscribe 订阅事件
 * @property {function} publish 发布事件
 * @property {function} unsubscribe 取消订阅事件
 * @example
 * let pid = Pubsub.subscribe('login',data=>{})
 * Pubsub.publish('login',{name:'张三'})
 * Pubsub.unsubscribe(pid)
 * Pubsub.unsubscribe()
 */
import { Pubsub } from 'missyt-utils';
```

## Pubsub.subscribe
> 事件订阅
```js
  /**
   * @function subscribe
   * @description 订阅事件
   * @param {string} channel 事件名称
   * @param {function} callback 回调函数
   * @returns {string} 返回订阅的唯一编号
   * @example
   * Pubsub.subscribe('login',data=>{})
   */
```
```js
  // console.log(Pubsub.callbacks);
  {
    "login":{
      "token_1328": data => console.log('subscribe 1', data),
      "token_1329": data => console.log('subscribe 2', data)
    },
    "refresh":{
      "token_1330": data => console.log('refresh 1', data)
    }
  }
```

## Pubsub.publish
> 事件发布
```js
/**
 * @function publish
 * @description 发布事件
 * @param {string} channel 事件名称
 * @param {any} data 发布事件需要的参数
 * @example
 * Pubsub.publish('login',{name:'张三'})
 */
```

## Pubsub.unsubscribe
> 取消订阅
```js
/**
 * @function unsubscribe
 * @description 取消订阅事件
 * @param {string|undefined} flag 订阅的channel pid undefined取消所有
 * @example
 * Pubsub.unsubscribe('login') //指定channel
 * Pubsub.unsubscribe('token_101')  //指定pid
 * Pubsub.unsubscribe() //取消所有
 */
```