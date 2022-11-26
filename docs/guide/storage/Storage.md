# 🥕 Storage操作

:::tip
Storage相关方法调用前会检测[isBrowser](),需在浏览器环境中使用!

:::

# local
> 返回localStorage实例化对象
```js
import { local } from 'missyt-utils';
```

# session
> 返回sessionStorage实例化对象
```js
import { session } from 'missyt-utils';
```

# Storage
> 返回Storage class类，可设置前缀等
```js
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
import { Storage } from 'missyt-utils';

//需自己手动实例化，设置每个key的前缀为：custom-prefix-
const local = new Storage('local','custom-prefix-');
const session = new Storage('session','custom-prefix-');
```

## set
> 设置localStorage或sessionStorage值
```js
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
```


## get
> 获取storage的值
```js
/**
 * @function get
 * @description 获取storage值
 * @param {string} key 键
 * @returns {any} 值
 * @example
 * let s = new Storage('local | session','prefix-'); //实例化
 * s.get('key'); //获取storage值
 */
```

## remove
> 删除指定key的storage
```js
/**
  * @function remove
  * @description 删除storage值
  * @param {string} key 键
  * @returns {void}
  * @example
  * let s = new Storage('local | session','prefix-'); //实例化
  * s.remove('key'); //删除storage值
  */
```

## clear
> 清除所有的storage存储
```js
/**
  * @function clear
  * @description 清空storage
  * @returns {void}
  * @example
  * let s = new Storage('local | session','prefix-'); //实例化
  * s.clear() //清空storage
  */
```

## watch
> 监听storage某个值，并执行回调函数。类似于vue中的watch
```js
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
  //监听token的值，发生变化时打印日志
  local.watch('token',(newValue,oldValue)=>{
    console.log(`token变化了，新值为:${newValue}，旧值为:${oldValue}`);
  })
```