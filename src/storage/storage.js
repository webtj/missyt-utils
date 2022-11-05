import { isBrowser } from '../browser';
import { isNumber } from '../datatype'

/**
 * Storage类
 * let s = new Storage('local | session','prefix-');
 * s.set('key','zhangsan');
 * s.set('key2','lisi',2); expries=2 days
 * s.get('key');
 * s.remove('key');
 * s.clear()
 * s.watch('key',function(newVal,oldVal){});
 */
class Storage {
  prefix = '';
  _watcher = {};
  constructor(storage = 'local', prefix = '') {
    if (!isBrowser) throw new Error('get is only available in browser');
    this.storage = storage === 'local' ? window.localStorage : window.sessionStorage;
    this.prefix = prefix;
  }
  get(key) {
    let result = null;
    let _key = this.prefix + key;
    let valueObj = this.storage.getItem(_key);
    try {
      //一些异常输入导致value不是json 会报错
      valueObj = JSON.parse(valueObj);
      if (valueObj.expires && valueObj.expires < new Date().getTime()) {
        this.storage.removeItem(_key);
        result = null;
      }
      result = valueObj.value;
    } catch (e) {
      result = valueObj;
    }
    return result;
  }

  set(key, value, expires = 0) {
    if (!key) return;
    let _key = this.prefix + key;
    if (isNumber(expires) && expires > 0) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
      this.storage.setItem(_key, JSON.stringify({ value, expires: date.getTime() }));
    } else {
      this.storage.setItem(_key, JSON.stringify({ value }));
    }
  }

  remove(key) {
    let _key = this.prefix + key;
    this.storage.removeItem(_key);
    if (this._watcher[_key]) {
      clearInterval(this._watcher[_key]);
      delete this._watcher[_key];
    }
  }

  clear() {
    this.storage.clear();
    Object.keys(this._watcher).forEach(key => {
      clearInterval(this._watcher[key]);
    });
    this._watcher = {};
  }

  watch(key, callback) {
    let _key = this.prefix + key;
    let oldValue = this.get(_key);
    let newValue = oldValue;
    if (this._watcher[_key]) clearInterval(this._watcher[_key]);
    let timer = setInterval(() => {
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

const _loaclStorage = new Storage('local');
const _sessionStorage = new Storage('session');
export { _loaclStorage as local, _sessionStorage as session, Storage };

