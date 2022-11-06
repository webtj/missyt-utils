# 🥕 发布订阅

:::tip
不同于事件总线，发布订阅模式支持`整个channel` 和 `单个pid`注销，而事件总线注销则会将事件下的所有回调全部清除，类似于发布订阅模式的channel。
发布订阅模式，channel订阅每个事件都有单独pid，可单独注销
:::
> 全局事件注册、触发、注销
```javascript
import { Pubsub } from 'missyt-utils';
```

## subscribe
> 事件订阅
```javascript
/**
 * @funcs subscribe
 * @param {String} channel 订阅channel
 * @param {Function} callback 事件触发时的执行回调
 * @return {String} 订阅的唯一标识pid
 */
  Pubsub.subscribe('login', data => console.log('subscribe 1', data));
  Pubsub.subscribe('login', data => console.log('subscribe 2', data));
  Pubsub.subscribe('refresh', data => console.log('refresh 1', data));s
```
```json
  // console.log(Pubsub.callbacks);
  {
    "login":{
      "token_1328": data => data => console.log('subscribe 1', data),
      "token_1329": data => data => console.log('subscribe 2', data)
    },
    "refresh":{
      "token_1330": data => data => console.log('refresh 1', data)
    }
  }
```

## publish
> 事件发布
```javascript
/**
 * @funcs publish
 * @param {String} channel 订阅channel
 * @param {any} data 事件触发参数
 * @return null
 */
  Pubsub.publish('login', { user: 'web developer' });
  Pubsub.publish('refresh', { user: 'web developer' });
```

## unscribe
> 取消订阅
```javascript
/**
 * @funcs unscribe
 * @param {String} flag 取消订阅的key，可以是channel or pid
 * @return null
 */
  Pubsub.unscribe(); //取消所有的订阅任务

  Pubsub.unscribe('refresh');  //直接删除整个channel
  Pubsub.unscribe('token_1329'); //删除单个pid
```
```json
  // console.log(Pubsub.callbacks);
  {
    "login":{
      "token_1328": data => data => console.log('subscribe 1', data)
    }
  }
```