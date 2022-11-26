# 🥕 字符串处理

## capitalize
> 首字母大写
```js
/**
 * @function capitalize
 * @description 首字母大写
 * @param {String} str
 * @returns {String}
 * @example capitalize('hello') // => 'Hello'
 */
```

## camelize
> 字符串改驼峰
```js
/**
 * @function camelize
 * @description 字符串改驼峰
 * @param {String} str
 * @returns {String}
 * @example camelize('hello-world') // => 'helloWorld'
 * camelize('hello_world') // => 'helloWorld'
 * camelize('hello world') // => 'helloWorld'
 * camelize('helloWorld') // => 'helloWorld'
 */
```

## insertStr
> 指定下标插入字符串
```js
/**
 * @function insertStr
 * @description 指定下标插入字符串
 * @param {String} str 原字符串
 * @param {Number} index 下标
 * @param {Number} index 插入字符串
 * @returns {String}
 * @example insertStr('hello', 5, ' world') // => 'hello world'
 */
```

## str2Unicode
> 指定下标插入字符串
```js
/**
 * @function str2Unicode
 * @description str2Unicode
 * @param {String} str
 * @returns {String}
 * @example str2Unicode('hello') // => '\\u0068\\u0065\\u006c\\u006c\\u006f'
 */
```

## unicode2Str
> 指定下标插入字符串
```js
/**
 * @function unicode2Str
 * @description unicode转字符串
 * @param {String} str
 * @returns {String}
 * @example unicode2Str('\\u0068\\u0065\\u006c\\u006c\\u006f') // => 'hello'
 */
```

## trim
> 去除字符串空格
```js
/**
 * @function trim
 * @description 去除字符串空格
 * @param {String} str
 * @param {String} type all-所有空格 before-前后空格 after-后空格 default-前后空格
 * @returns {String} 新的字符串
 * @example
 * trim(' hello world ', 'all') // => 'helloworld'
 * trim(' hello world ', 'before') // => 'hello world '
 * trim(' hello world ', 'after') // => ' hello world'
 * trim(' hello world ') // => 'hello world'
 */
```

## str2Base64
> 字符串转base64
```js
/**
 * @function str2Base64
 * @description 字符串转base64
 * @param {String} str 原字符串
 * @returns {String}
 * @example
 * str2Base64('hello world') // => 'aGVsbG8gd29ybGQ='
 */
```

## base642Str
> base64转字符串
```js
/**
 * @function base642Str
 * @description base64转字符串
 * @param {String} str 原字符串
 * @returns {String}
 * @example
 * base642Str('aGVsbG8gd29ybGQ=') // => 'hello world'
 */
```