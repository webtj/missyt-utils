# 🥕 Storage操作

:::tip
Storage相关方法调用前会检测[isBrowser](),需在浏览器环境中使用!

:::

# local
> 返回localStorage实例化对象
```javascript
import { local } from 'missyt-utils';
```

# session
> 返回sessionStorage实例化对象
```javascript
import { session } from 'missyt-utils';
```

# Storage
> 返回Storage class类，可设置前缀等
```javascript
import { Storage } from 'missyt-utils';

//需自己手动实例化，设置每个key的前缀为：custom-prefix-
const local = new Storage('local','custom-prefix-');
const session = new Storage('session','custom-prefix-');
```

## set
> 设置localStorage或sessionStorage值
```javascript
/**
 * @funcs set
 * @param {String} key storage的key
 * @param {String} value storage的value
 * @param {Number} expires 失效时间(可选) 单位：天
 * @return null
 */
  local.set('token',123425,1); //
  session.set('token',123425,1);
```


## get
> 获取storage的值
```javascript
/**
 * @funcs getCookie
 * @param {String} key storage的key
 * @return {String} 返回对应的值
 */
  local.get('token');
  session.get('token');
```

## remove
> 删除指定key的storage
```javascript
/**
 * @funcs remove
 * @param {String} key 待移除的storage的key
 * @return null
 */
  local.remove('token');
  session.remove('token');
```

## clear
> 清除所有的storage存储
```javascript
/**
 * @funcs clear
 * @return null
 */
  local.clear();
  session.clear();
```

## watch
> 监听storage某个值，并执行回调函数。类似于vue中的watch
```javascript
/**
 * @funcs watch
 * @param {String} 待监听的storage中的key
 * @param {Function} 监听变化时的回调函数
 * @return null
 */
  //监听token的值，发生变化时打印日志
  local.watch('token',(newValue,oldValue)=>{
    console.log(`token变化了，新值为:${newValue}，旧值为:${oldValue}`);
  })
```