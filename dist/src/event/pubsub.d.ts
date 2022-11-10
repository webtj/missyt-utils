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
declare const Pubsub: {
    id: number;
    callbacks: {};
    /**
     * @function subscribe
     * @description 订阅事件
     * @param {string} channel 事件名称
     * @param {function} callback 回调函数
     * @returns {string} 返回订阅的唯一编号
     * @example
     * Pubsub.subscribe('login',data=>{})
     */
    subscribe: (channel: string, callback: (arg?: unknown) => void) => string;
    /**
     * @function publish
     * @description 发布事件
     * @param {string} channel 事件名称
     * @param {any} data 发布事件需要的参数
     * @example
     * Pubsub.publish('login',{name:'张三'})
     */
    publish: (channel: string, data: unknown) => void;
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
    unscribe: (flag: string) => void;
};
export { Pubsub };
