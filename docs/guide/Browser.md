# 🥕  Browser

## isBrowser
> 判断是否为浏览器环境
```javascript
/**
 * @var isBrowser
 * @params null
 * @return {Boolean} true/false
 */
  if(isBrowser) {
    console.log('哎呀，是浏览器啊！！');
  }
```


## getBrowserInfo
> 获取当前浏览器信息
```javascript
/**
 * @funcs getBrowserInfo
 * @param null
 * @return {Object} 
 */
  const browserInfo = getBrowserInfo();
  //return {"type": "Chrome","version": 107,"onLine": true,"platform": "MacIntel","cookieEnabled": true,"language": "zh-CN"}
```


## isFullScreen
> 判断是否为全屏,[参考API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)
```javascript
/**
 * @var isFullScreen
 * @param null
 * @return {Boolean} true/false
 */
  if(isFullScreen) {
    console.log('当前为全屏模式，嗨起来！');
  }
```

## fullScreen
> 设置某个元素全屏
```javascript
/**
 * @funcs getBrowserInfo
 * @param {Element} dom 需要设置全屏的dom元素 
 * @return null
 */
  //页面全屏
  fullScreen(document.body);
```

## exitFullScreen
> 退出全屏模式
```javascript
/**
 * @funcs exitFullScreen
 * @return null
 */
  exitFullScreen();
```



