import { EmptyFunction } from '../.internal/types';
/**
 * @var EventBus
 * @description 事件总线
 */
declare const EventBus: {
    callbacks: {};
    /**
     * @function on
     * @description 订阅事件
     * @param {string} type 事件名称
     * @param {function} callback 回调函数
     * @returns {Function} 返回刚绑定的回调函数
     * @example
     * EventBus.on('login',data=>{})
     */
    on: (type: string, callback: EmptyFunction) => EmptyFunction;
    /**
     * @function off
     * @description 触发事件
     * @param {string} type 事件名称
     * @param {any} data 触发事件需要的参数
     * @example
     * EventBus.emit('login',{name:'张三'})
     */
    emit: (type: string, data: unknown) => void;
    /**
     * @function off
     * @description 取消订阅事件
     * @param {string} type 事件名称，可不传，不传取消所有
     * @param {function} callback 回调函数，可不传，不传取消所有
     * @example
     * EventBus.off('login')
     * EventBus.off()
     */
    off: (type?: string) => void;
};
export { EventBus };
