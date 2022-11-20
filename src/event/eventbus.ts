import { EmptyFunction } from '../.internal/types';
/**
 * @var EventBus
 * @description 事件总线
 */
const EventBus = {
  callbacks: {},
  /**
   * @function on
   * @description 订阅事件
   * @param {string} type 事件名称
   * @param {function} callback 回调函数
   * @returns {Function} 返回刚绑定的回调函数
   * @example
   * EventBus.on('login',data=>{})
   */
  on: function (type: string, callback: EmptyFunction): EmptyFunction {
    //绑定注册事件
    if (this.callbacks[type]) this.callbacks[type].push(callback);
    else this.callbacks[type] = [callback];
    return this.callbacks[type];
  },
  /**
   * @function off
   * @description 触发事件
   * @param {string} type 事件名称
   * @param {any} data 触发事件需要的参数
   * @example
   * EventBus.emit('login',{name:'张三'})
   */
  emit: function (type: string, data: unknown) {
    //触发事件
    if (this.callbacks[type] && this.callbacks[type].length > 0) {
      this.callbacks[type].forEach((callback: (arg?: unknown) => void) => {
        callback(data);
      });
    }
  },
  /**
   * @function off
   * @description 取消订阅事件
   * @param {string} type 事件名称，可不传，不传取消所有
   * @example
   * EventBus.off('login')
   * EventBus.off()
   */
  off: function (type?: string) {
    if (!type) this.callbacks = {};
    else delete this.callbacks[type];
  },
};

export { EventBus };
