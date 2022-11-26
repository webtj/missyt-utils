# 🥕 浏览器通知 

> 浏览器通知发送消息、弹窗消息
```js
/**
 * @var {object} notice
 * @description 浏览器通知
 * @property {Function} send 发送通知
 * @property {Function} confirm 弹窗确认
 * @example Notice.send('通知标题', { body: '通知内容' }) // => void
 * @example Notice.confirm('确认删除吗？', () => { console.log('确认') }, () => { console.log('取消') }) // => void
 */
import { Notice } from  'missyt-utils';
```

## Notice.send
> 发送通知消息
```js
/**
 * @function notice
 * @description 浏览器通知
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Notification
 * @param {string} title 通知标题
 * @param {object} options 通知配置
 * @param {string} options.body 通知内容
 * @param {string} options.icon 通知图标
 * @param {string} options.tag 通知标签
 * @param {string} options.image 通知图片
 * @param {string} options.lang 通知语言
 * @param {boolean} options.renotify 通知是否需要重新提醒
 * @param {boolean} options.silent 通知是否静音
 * @param {boolean} options.requireInteraction 通知是否需要用户交互
 * @param {boolean} options.sticky 通知是否需要粘性
 * @param {string} options.dir 通知方向
 * @param {string} options.vibrate 通知振动
 * @param {string} options.badge 通知徽章
 * @param {string} options.timestamp 通知时间戳
 * @param {string} options.actions 通知操作
 * @param {string} options.data 通知数据
 * @return {Promise} 返回通知结果
 * @example Notice.send('通知标题', { body: '通知内容' }) // => void
 * @example Notice.send('通知标题', { body: '通知内容', icon: '通知图标' }) // => void
 */
```

## Notice.confirm
> 浏览器确认弹窗
```js
/**
 * @function confirm
 * @description 浏览器通知确认
 * @param {string} message 弹窗确认内容
 * @param {Function} sure 确认回调
 * @param {Function} cancel 取消回调
 * @example Notice.confirm('确认删除吗？', () => { console.log('确认') }, () => { console.log('取消') }) // => void
 */
```