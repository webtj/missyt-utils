/**
 * callbacks :{
 *  login:{
 *    token_1:function,
 *    token_2:function
 *  }
 * }
 *
 * let pid = Pubsub.subscribe('login',data=>{})
 */

/**
 * @var Pubsub
 * @description 发布订阅模式
 */
const Pubsub = {
  id: 100, //订阅的唯一编号
  callbacks: {}, //订阅的事件
  /**
   * @function subscribe
   * @description 订阅事件
   * @param {string} channel 事件名称
   * @param {function} callback 回调函数
   * @returns {string} 返回订阅的唯一编号
   * @example
   * Pubsub.subscribe('login',data=>{})
   */
  subscribe: function (channel: string, callback: (arg?: unknown) => void) {
    const token = `token_${this.id++}`;
    if (this.callbacks[channel]) this.callbacks[channel][token] = callback;
    else this.callbacks[channel] = { [token]: callback };
    return token;
  },
  /**
   * @function publish
   * @description 发布事件
   * @param {string} channel 事件名称
   * @param {any} data 发布事件需要的参数
   * @example
   * Pubsub.publish('login',{name:'张三'})
   */
  publish: function (channel: string, data: unknown) {
    if (this.callbacks[channel]) {
      Object.values(this.callbacks[channel]).forEach((callback) => {
        if (callback instanceof Function) callback(data);
      });
    }
  },
  /**
   * @function unsubscribe
   * @description 取消订阅事件
   * @param {string|undefined} flag 订阅的channel pid undefined取消所有
   * @example
   * Pubsub.unsubscribe('login') //指定channel
   * Pubsub.unsubscribe('token_101')  //指定pid
   * Pubsub.unsubscribe() //取消所有
   * @param flag
   */
  unscribe: function (flag: string) {
    //channel 或 pid 或undefind
    if (!flag) this.callbacks = {};
    else if (typeof flag === 'string') {
      //判断是否为token开头的
      if (flag.startsWith('token')) {
        //先要找channel
        const callbackObj = Object.values(this.callbacks).find((obj) => obj?.hasOwnProperty(flag) || false);
        if (callbackObj) delete callbackObj[flag];
      } else {
        delete this.callbacks[flag];
      }
    }
  },
};

export { Pubsub };
