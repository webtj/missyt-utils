/* eslint-disable @typescript-eslint/no-empty-function */
import { paramsFunction } from '../.internal/types';

type WebSocketOptions = {
  url: string;
  onOpen?: paramsFunction;
  onMessage?: paramsFunction;
  onError?: paramsFunction;
  onClose?: paramsFunction;
  reconnectable?: boolean;
  reconnectInterval?: number;
  reconnectTimes?: number;
  heartbeatable?: boolean;
  heartbeatsInterval?: number;
  heartbeatsMsg?: string;
};

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
class Socket {
  private ws: WebSocket | undefined;
  private options: WebSocketOptions;
  private reconnectTimer: NodeJS.Timeout | undefined;
  private heartbeatTimer: NodeJS.Timeout | undefined;

  constructor(options: WebSocketOptions) {
    this.options = options;
    this.init();
    this.registerEvent();
  }

  private init() {
    const { url } = this.options;
    if (!url) throw new Error('url is required');
    this.ws = new WebSocket(url);
  }

  private registerEvent() {
    const { onOpen, onMessage, onError, onClose, heartbeatable, reconnectable } = this.options;
    this.ws?.addEventListener('open', (event) => {
      if (this.reconnectTimer) clearInterval(this.reconnectTimer);
      onOpen && onOpen(event);
      heartbeatable && this.heartbeat();
    });

    this.ws?.addEventListener('message', (event) => {
      onMessage && onMessage(event);
    });

    this.ws?.addEventListener('error', (event) => {
      onError && onError(event);
    });

    this.ws?.addEventListener('close', (event) => {
      onClose && onClose(event);
      reconnectable && this.reconnect();
    });
  }

  private heartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    const heartbeatsInterval = this.options.heartbeatsInterval || 1000;
    const heartbeatsMsg = this.options.heartbeatsMsg || 'heartbeat';
    this.heartbeatTimer = setInterval(() => {
      this.send(heartbeatsMsg);
    }, heartbeatsInterval);
  }

  private reconnect() {
    this.reconnectTimer && clearInterval(this.reconnectTimer);
    const reconnectInterval = this.options.reconnectInterval || 1000;
    const reconnectTimes = this.options.reconnectTimes || 10;
    let reconnectCount = 0;
    this.reconnectTimer = setInterval(() => {
      if (reconnectCount >= reconnectTimes) {
        this.destroy();
        return;
      }
      this.init();
      reconnectCount++;
    }, reconnectInterval);
  }

  public send(data: any) {
    this.ws && this.ws.send(data);
  }

  public close() {
    this.ws && this.ws.close();
  }

  public destroy() {
    this.close();
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.reconnectTimer && clearInterval(this.reconnectTimer);
  }
}

export { Socket };
