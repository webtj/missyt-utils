# 🥕  Url相关操作

## getQueryString
> 获取url指定key参数
```js
/**
 * @function getQueryString
 * @description 获取url参数
 * @param name params name
 * @param url url 默认为当前页面url
 * @returns params value
 * @example getQueryString('id', 'https://www.baidu.com?id=1') // => '1'
 */
```

## getUrlParams
> 获取url所有参数
```js
/**
 * @function getUrlParams
 * @description 获取url所有参数对象
 * @param {String} url url 默认为当前页面url
 * @returns {Object} params object
 * @example 
 * getUrlParams('https://www.baidu.com?id=1&name=xx') // => { id: '1', name: 'xx' }
 */
```

## url2Obj
> url参数转object
```js
/**
 * @function url2Obj
 * @description url转对象
 * @param url url 默认为当前页面url
 * @returns object
 * @example url2Obj('https://www.baidu.com?id=1') // => { id: '1' }
 */
```

## obj2Url
> 对象拼接成url参数 ?x=1&x-123
```js
/**
 * @function obj2Url
 * @description 对象转url
 * @param obj object
 * @returns url
 * @example obj2Url({ id: '1',name: 'xx' }) // => 'id=1&name=xx'
 */
```