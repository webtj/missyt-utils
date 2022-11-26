# 🥕 数据类型检测

## isObject
> 是否为object
:::warning
  虽然typeof null 为object，但此处为严格检测，排除了null
:::
```js
/**
 * @function isObject
 * @description 判断是否为对象,不包括null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isObject({}) => true
 * isObject([]) => true
 * isObject(new Object()) => true
 * isObject(new Array()) => true
 * isObject(null) => false
 */
```

## isNumber
> 是否为数值类型
```js
/**
 * @function isNumber
 * @description 判断是否为数字
 * @param {any} value 需要判断的数据
 * @param {boolean} isFinite  是否为有限数字 检测NaN,Infinity,-Infinity
 * @returns {boolean} 返回判断结果
 * @example
 * isNumber('1') => false
 * isNumber(1) => true
 * isNumber(1, true) => true
 * isNumber(NaN) => true
 * isNumber(new Number(2)) => true
 * isNumber(NaN, true) => false
 * isNumber(Infinity, true) => false
 * isNumber(-Infinity, true) => false
 */
```

## isString
> 是否为string类型
```js
/**
 * @function isString
 * @description 判断是否为字符串
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isString('1') => true
 * isString(new String('1')) => true
 */
```

## isBoolean
> 是否为boolean类型
:::tip
  不允许隐式类型转换，即无法得出类似结果: 1==true
:::
```js
/**
 * @function isBoolean
 * @description 判断是否为布尔值,没有隐式转换
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isBoolean(true) => true
 * isBoolean(false) => true
 * isBoolean(new Boolean(false)) => true
 * isBoolean(1) => false
 * isBoolean('1') => false
 */
```

## isNull
> 是否为null
```js
/**
 * @function isNull
 * @description 判断是否为null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isNull(null) => true
 * isNull(undefined) => false
 * isNull('') => false
 */
```

## isUndefined
> 是否为undefined
```js
/**
 * @function isUndefined
 * @description 判断是否为undefined
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isUndefined(undefined) => true
 * isUndefined(null) => false
 * isUndefined('') => false
 */
```

## isSymbol
> 是否为symbol
```js
/**
 * @function isSymbol
 * @description 判断是否为Symbol
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSymbol(Symbol('1')) => true
 */
```

## isFunction
> 是否为function
```js
/**
 * @function isFunction
 * @description 判断是否为函数
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isFunction(() => {}) => true
 * isFunction(function() {}) => true
 * isFunction(new Function()) => true
 * isFunction(class {}) => true
 */
```

## isArray
> 是否为array
```js
/**
 * @function isArray
 * @description 判断是否为数组
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isArray([]) => true
 * isArray(new Array()) => true
 * isArray({}) => false
 */
```

## isDate
> 是否为日期
```js
/**
 * @function isDate
 * @description 判断是否为日期
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isDate(new Date()) => true
 * isDate(new Date('2020-01-01')) => true
 * isDate('2020-01-01') => false
 */
```

## isRegExp
> 是否为正则
```js
/**
 * @function isRegExp
 * @description 判断是否为正则
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isRegExp(/1/) => true
 * isRegExp(new RegExp('1')) => true
 * isRegExp('1') => false
 */
```

## isError
> 是否为错误类型（有点鸡肋）
```js
/**
 * @function isError
 * @description 判断是否为错误对象
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isError(new Error()) => true
 * isError(new TypeError()) => true
 * isError('1') => false
 */
```

## isMap
> 是否为Map类型
```js
/**
 * @function isMap
 * @description 判断是否为Map
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isMap(new Map()) => true
 * isMap(new WeakMap()) => false
 * isMap('1') => false
 */
```

## isWeakMap
> 是否为weakMap类型
```js
/**
 * @function isWeakMap
 * @description 判断是否为WeakMap
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakMap(new WeakMap()) => true
 * isWeakMap(new Map()) => false
 * isWeakMap('1') => false
 */
```

## isSet
> 是否为set集合
```js
/**
 * @function isSet
 * @description 判断是否为Set
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSet(new Set()) => true
 * isSet(new WeakSet()) => false
 * isSet('1') => false
 */
```

## isWeakSet
> 是否为weakSet类型
```js
/**
 * @function isWeakSet
 * @description 判断是否为WeakSet
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakSet(new WeakSet()) => true
 * isWeakSet(new Set()) => false
 * isWeakSet('1') => false
 */
```
  
## isPromise
> 是否为Promise类型
```js
/**
 * @function isPromise
 * @description 判断是否为Promise
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.resolve()) => true
 * isPromise(() => {}) => false
 */
```
  
