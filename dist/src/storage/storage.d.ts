/**
 * @function Storage
 * @description Storage类
 * @param {string} type 类型，local | session
 * @param {string} prefix 前缀，可选
 * @returns {void}
 * @example
 * let s = new Storage('local | session','prefix-'); //实例化
 * s.set('key','zhangsan'); //设置
 * s.set('key2','lisi',2); expries=2 days //设置过期时间
 * s.get('key'); //获取storage值
 * s.remove('key'); //删除storage值
 * s.clear() //清空storage
 * s.watch('key',function(newVal,oldVal){}); //监听storage值变化
 */
declare class Storage {
    prefix: string;
    _watcher: {};
    storage: globalThis.Storage;
    constructor(storage?: string, prefix?: string);
    /**
     * @function get
     * @description 获取storage值
     * @param {string} key 键
     * @returns {any} 值
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.get('key'); //获取storage值
     */
    get(key: string): string | null;
    /**
     * @function set
     * @description 设置storage值
     * @param {string} key 键
     * @param {any} value 值
     * @param {number} expires 过期时间，可选，单位：天
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.set('key','zhangsan'); //设置
     * s.set('key2','lisi',2); expries=2 days //设置过期时间
     */
    set(key: string, value: unknown, expires?: number): void;
    /**
     * @function remove
     * @description 删除storage值
     * @param {string} key 键
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.remove('key'); //删除storage值
     */
    remove(key: string): void;
    /**
     * @function clear
     * @description 清空storage
     * @returns {void}
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.clear() //清空storage
     */
    clear(): void;
    /**
     * @function watch
     * @description 监听storage值变化
     * @param {string} key 键
     * @param {function} callback 回调函数
     * @returns {any} timer 监听的定时器
     * @example
     * let s = new Storage('local | session','prefix-'); //实例化
     * s.watch('key',function(newVal,oldVal){}); //监听storage值变化
     */
    watch(key: string, callback: (newVal: string | null, oldVal: string | null) => void): unknown;
}
/**
 * @var _loaclStorage as local
 * @description localstorage 实例化对象
 * @example
 * _loaclStorage.set('key','zhangsan'); //设置
 */
declare const _loaclStorage: Storage;
/**
 * @var _sessionStorage as session
 * @description sessionstorage 实例化对象
 * @example
 * _sessionStorage.set('key','zhangsan'); //设置
 */
declare const _sessionStorage: Storage;
export { _loaclStorage as local, _sessionStorage as session, Storage };
