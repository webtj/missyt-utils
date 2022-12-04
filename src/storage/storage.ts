import { isBrowser } from '../browser';
import { isNumber } from '../datatype';
/**
 * @class Storage
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
class Storage {
  prefix = '';
  _watcher = {};
  storage;
  constructor(storage = 'local', prefix = '') {
    if (!isBrowser()) throw new Error('get is only available in browser');
    this.storage = storage === 'local' ? window.localStorage : window.sessionStorage;
    this.prefix = prefix;
  }
  /**
   * @function get
   * @description 获取storage值
   * @param {string} key 键
   * @returns {any} 值
   * @example
   * let s = new Storage('local | session','prefix-'); //实例化
   * s.get('key'); //获取storage值
   */
  get(key: string): string | null {
    let result = null;
    const _key = this.prefix + key;
    const valueObj = this.storage.getItem(_key);
    try {
      if (valueObj) {
        const jsonObj = JSON.parse(valueObj);
        if (jsonObj.expires && isNumber(jsonObj.expires) && jsonObj.expires < new Date().getTime()) {
          this.storage.removeItem(_key);
          result = null;
        }
        result = jsonObj.value;
      }
    } catch (e) {
      result = valueObj;
    }
    return result;
  }

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
  set(key: string, value: unknown, expires = 0): void {
    if (!key) return;
    const _key = this.prefix + key;
    if (isNumber(expires) && expires > 0) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
      this.storage.setItem(_key, JSON.stringify({ value, expires: date.getTime() }));
    } else {
      this.storage.setItem(_key, JSON.stringify({ value }));
    }
  }

  /**
   * @function remove
   * @description 删除storage值
   * @param {string} key 键
   * @returns {void}
   * @example
   * let s = new Storage('local | session','prefix-'); //实例化
   * s.remove('key'); //删除storage值
   */
  remove(key: string): void {
    const _key = this.prefix + key;
    this.storage.removeItem(_key);
    if (this._watcher[_key]) {
      clearInterval(this._watcher[_key]);
      delete this._watcher[_key];
    }
  }

  /**
   * @function clear
   * @description 清空storage
   * @returns {void}
   * @example
   * let s = new Storage('local | session','prefix-'); //实例化
   * s.clear() //清空storage
   */
  clear(): void {
    this.storage.clear();
    Object.keys(this._watcher).forEach((key) => {
      clearInterval(this._watcher[key]);
    });
    this._watcher = {};
  }

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
  watch(key: string, callback: (newVal: string | null, oldVal: string | null) => void): unknown {
    const _key = this.prefix + key;
    let oldValue = this.get(_key);
    let newValue = oldValue;
    if (this._watcher[_key]) clearInterval(this._watcher[_key]);
    const timer = setInterval(() => {
      newValue = this.get(key);
      if (newValue !== oldValue) {
        callback(newValue, oldValue);
        oldValue = newValue;
      }
    }, 100);
    this._watcher[_key] = timer;
    return timer;
  }
}

/**
 * @var _loaclStorage as local
 * @description localstorage 实例化对象
 * @example
 * _loaclStorage.set('key','zhangsan'); //设置
 */
const _loaclStorage = isBrowser() ? new Storage('local') : null;

/**
 * @var _sessionStorage as session
 * @description sessionstorage 实例化对象
 * @example
 * _sessionStorage.set('key','zhangsan'); //设置
 */
const _sessionStorage = isBrowser() ? new Storage('session') : null;

export { _loaclStorage as local, _sessionStorage as session, Storage };
