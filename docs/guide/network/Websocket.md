# 🥕 websocket请求

## Socket
> Socket类，实例化执行websocket相关操作
```js
/**
 * @class Socket
 * @description websocket封装
 * @param {object} options 配置项
 * @param {string} options.url websocket地址
 * @param {function} options.onOpen 连接成功回调
 * @param {function} options.onMessage 接收消息回调
 * @param {function} options.onError 连接错误回调
 * @param {function} options.onClose 连接关闭回调
 * @param {boolean} options.reconnectable 是否重连
 * @param {number} options.reconnectInterval 重连间隔
 * @param {number} options.reconnectTimes 重连次数
 * @param {boolean} options.heartbeatable 是否心跳
 * @param {number} options.heartbeatsInterval 心跳间隔
 * @param {string} options.heartbeatsMsg 心跳消息
 * @returns {void}
 * @example
 * const socket = new Socket({
 *  url: 'ws://localhost:8080',
 *  onOpen: () => {
 *    console.log('连接成功');
 *  },
 *  onMessage: (e) => {
 *    console.log('接收消息', e);
 *  },
 *  onError: (e) => {
 *   console.log('连接错误', e);
 *  },
 *  onClose: (e) => {
 *   console.log('连接关闭', e);
 *  },
 *  reconnectable: true,
 *  reconnectInterval: 1000,
 *  reconnectTimes: 10,
 *  heartbeatable: true,
 *  heartbeatsInterval: 1000,
 *  heartbeatsMsg: 'ping',
 *  });
 */
import { Socket } from 'missyt-utils';
```