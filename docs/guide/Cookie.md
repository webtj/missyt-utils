# 🥕 Cookie操作

:::tip
Cookie相关方法调用前会检测[isBrowser](),需在浏览器环境中使用!
:::

## getCookie
> 根据cookie名称获取对应的值
```javascript
/**
 * @funcs getCookie
 * @param {String} name cookie的key
 * @return {String} 返回对应的cookie值
 */
  const user = getCookie('user');
```

## setCookie
> 设置cookie信息
```javascript
/**
 * @funcs setCookie
 * @param {String} name cookie的key
 * @param {String} value cookie的value
 * @param {Number} expires 失效时间(可选) 单位：天
 * @param {String} path cookie的路径(可选)
 * @param {String} value cookie的有效域名(可选)
 * @return null
 */
  //设置该域名根路径下token的值，失效时间为1天
  setCookie('token','dadw123dd2131414',1,'/','');
```

## removeCookie
> 清除指定key的cookie
```javascript
/**
 * @funcs removeCookie
 * @param {String} name cookie的key
 * @param {String} path cookie的路径(可选)
 * @param {String} value cookie的有效域名(可选)
 * @return null
 */
  //清除指定name cookie两种方法: 直接删除 or 过期时间设置为负数
  removeCookie('token');
  setCookie('token','',-1);
```