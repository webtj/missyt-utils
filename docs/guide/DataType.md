# 🥕 数据类型检测

## isObject
> 是否为object
:::warning
  虽然typeof null 为object，但此处为严格检测，排除了null
:::
```javascript
/**
 * @funcs isObject
 * @param {any} value
 * @return {Boolean} true or false
 */
  isObject({name:'taojian'}); //true
  isObject(function(){}); //false
  isObject(null); //false
```

## isNumber
> 是否为数值类型
```javascript
/**
 * @funcs isNumber
 * @param {any} value
 * @param {Boolean} isFinite(可选) 是否检测NaN,Infinity,-Infinity
 * @return {Boolean} true or false
 */
  isNumber(3); //true
  isNumber('3'); //false
  isNumber(new Number(3)); //true
  isNumber(NaN); //true
  isNumber(NaN,true); //false
```

## isString
> 是否为string类型
```javascript
/**
 * @funcs isString
 * @param {any} value
 * @return {Boolean} true or false
 */
  isString(3); //false
  isString('3'); //true
```

## isBoolean
> 是否为boolean类型
:::tip
  不允许隐式类型转换，即无法得出类似结果: 1==true
:::
```javascript
/**
 * @funcs isBoolean
 * @param {any} value
 * @return {Boolean} true or false
 */
  isBoolean(3); //false
  isBoolean(true); //true
```

## isNull
> 是否为null
```javascript
/**
 * @funcs isNull
 * @param {any} value
 * @return {Boolean} true or false
 */
  isNull(3); //false
  isNull(null); //true
```

## isUndefined
> 是否为undefined
```javascript
/**
 * @funcs isUndefined
 * @param {any} value
 * @return {Boolean} true or false
 */
  isUndefined(3); //false
  isUndefined(undefined); //true
  var name;
  isUndefined(name); //true
```

## isSymbol
> 是否为symbol
```javascript
/**
 * @funcs isSymbol
 * @param {any} value
 * @return {Boolean} true or false
 */
  const id = Symbol('id');
  console.log(isSymbol(id), id);  //true Symbol(id)
```

## isFunction
> 是否为function
```javascript
/**
 * @funcs isFunction
 * @param {any} value
 * @return {Boolean} true or false
 */
  isFunction(new Function()); //true
  isFunction(function (){});  //true
  isFunction(() => {}); //true
```

## isArray
> 是否为array
```javascript
/**
 * @funcs isArray
 * @param {any} value
 * @return {Boolean} true or false
 */
  isArray([]); //true
  isArray({}); //false
  isArray(new Array(5)); //true
```

## isDate
> 是否为日期
```javascript
/**
 * @funcs isDate
 * @param {any} value
 * @return {Boolean} true or false
 */
  isDate('2022-09-13 13:58:00'); //false
  isDate(new Date('2022-09-13 13:58:00')); //true
  isDate(new Date()); //true
```

## isRegExp
> 是否为正则
```javascript
/**
 * @funcs isRegExp
 * @param {any} value
 * @return {Boolean} true or false
 */
  isRegExp(/^[a-z0-9]/); //true
  isRegExp(new RegExp('/^[a-z0-9]/')); //true
```

## isError
> 是否为错误类型（有点鸡肋）
```javascript
/**
 * @funcs isError
 * @param {any} value
 * @return {Boolean} true or false
 */
  isError(new Error()); //true
```

## isMap
> 是否为Map类型
```javascript
/**
 * @funcs isMap
 * @param {any} value
 * @return {Boolean} true or false
 */
  isMap({name:'taojian'}); //false
  let _map = new Map();
  _map.set('name','taojian');
  isMap(_map); //true
```

## isWeakMap
> 是否为weakMap类型
```javascript
/**
 * @funcs isWeakMap
 * @param {any} value
 * @return {Boolean} true or false
 */
  isWeakMap({name:'taojian'}); //false
  let _map = new WeakMap();
  _map.set({ name: 'taojian' }, 'developer');
  isWeakMap(_map); //true
```

## isSet
> 是否为set集合
```javascript
/**
 * @funcs isSet
 * @param {any} value
 * @return {Boolean} true or false
 */
  isSet({name:'taojian'}); //false
  let _set = new Set();
  _set.add('name','taojian');
  isSet(_set); //true
```

## isWeakSet
> 是否为weakSet类型
```javascript
/**
 * @funcs isWeakSet
 * @param {any} value
 * @return {Boolean} true or false
 */
  isWeakSet({name:'taojian'}); //false
  let _set = new WeakSet();
  _set.add({ name: 'taojian' }, 'developer');
  isWeakSet(_map); //true
```
  
## isPromise
> 是否为Promise类型
```javascript
/**
 * @funcs isPromise
 * @param {any} value
 * @return {Boolean} true or false
 */
  isPromise(new Promise((resolve, reject) => {
    resolve(1)
  }).then(res => { })); //true

  isPromise(Promise.resolve()); //true
  isPromise(Promise.reject()); //true
```
  
