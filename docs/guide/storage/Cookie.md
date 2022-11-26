# 🥕 Cookie操作

## getCookie
> 根据cookie名称获取对应的值
```js
/**
 * @function getCookie
 * @description 获取cookie
 * @param {string} name cookie名称
 * @returns {string} cookie值
 * @example getCookie('name')
 */
```

## setCookie
> 设置cookie信息
```js
/**
 * @function setCookie
 * @description 设置cookie
 * @param {string} name cookie名称
 * @param {string} value cookie值
 * @param {number} expires 过期时间，单位：天
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * setCookie('name','zhangsan',1)
 * setCookie('name','zhangsan',1,'/','www.baidu.com')
 */
```

## removeCookie
> 清除指定key的cookie
```js
/**
 * @function removeCookie
 * @description 清除cookie，或调用setCookie expires设置为负数
 * @param {string} name cookie名称
 * @param {string} path 路径,可选
 * @param {string} domain 域名,可选
 * @returns {void}
 * @example
 * removeCookie('name')
 * removeCookie('name','/','www.baidu.com')
 */
  //清除指定name cookie两种方法: 直接删除 or 过期时间设置为负数
  removeCookie('token');
  setCookie('token','',-1);
```