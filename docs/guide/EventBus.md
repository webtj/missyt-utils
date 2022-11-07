# 🥕 EventBus

:::tip
不同于发布订阅，事件总线允许一个事件key，销毁时会清除key下所有的事件回调
:::
> 全局事件注册、触发、注销
```javascript
import { EventBus } from 'missyt-utils';
```

## on
> 事件注册
```javascript
/**
 * @funcs on
 * @param {String} type 事件key
 * @param {Function} callback 事件触发时的执行回调
 * @return {Array<callback>} 当前key下所有待执行的回调函数
 */
  let callbackList = EventBus.on('refresh', (data) => {
    console.log('refresh method 1', data);
  })

  callbackList = EventBus.on('refresh', (data) => {
    console.log('refresh method 2', data);
  })

  console.log(callbackList);  //[fn,fn]
```

## emit
> 事件触发
```javascript
/**
 * @funcs emit
 * @param {String} type 事件key
 * @param {any} data 事件触发回调所需的参数
 * @return null
 */
  //依次执行on 注册的两个refresh方法
  EventBus.emit('refresh','this is data');
```

## off
> 事件注销
```javascript
/**
 * @funcs off
 * @param {String} type 需要注销的事件key,为空则清除所有时间
 * @return null
 */
  EventBus.off('refresh'); //注销refresh方法
  EventBus.off(); //注销所有的事件
```

