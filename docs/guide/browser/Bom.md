# 🥕  Browser

## isBrowser
> 判断是否为浏览器环境
```js
/**
 * @var isBrowser
 * @description 判断是否为浏览器环境
 * @returns {boolean} 返回判断结果
 * @example if(isBrowser){...}
 */
```


## getBrowserInfo
> 获取当前浏览器信息
```js
/**
 * @function getBrowserInfo
 * @description 获取浏览器信息
 * @returns {object} 返回浏览器信息
 * @example getBrowserInfo()
 */
// {"type": "Chrome","version": 107,"onLine": true,"platform": "MacIntel","cookieEnabled": true,"language": "zh-CN"}
```


## isFullScreen
> 判断是否为全屏
```js
/**
 * @function isFullScreen
 * @description 判断是否全屏
 * @returns {boolean} 返回判断结果
 * @example isFullScreen() // => true
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
```

## fullScreen
> 设置某个元素全屏
```js
/**
 * @function fullScreen
 * @description 使某个元素全屏
 * @param {HTMLElement} element 需要全屏的元素
 * @return {void} 无返回值
 * @example fullScreen(document.documentElement)
 */
```

## exitFullScreen
> 退出全屏模式
```js
/**
 * @function exitFullScreen
 * @description 退出全屏
 * @return {void} 无返回值
 * @example exitFullScreen()
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API
 */
```

## getWindowSize
> 获取窗口size
```js
/**
 * @function getWindowSize
 * @description 获取窗口宽高
 * @returns {object} 返回窗口宽高
 * @example getWindowSize() // => {width: 1920, height: 1080}
 * /
```

## getScrollPosition
> 获取滚动条位置
```js
/**
 * @function getScrollPosition
 * @description 获取滚动条位置
 * @returns {object} 返回滚动条位置
 * @example getScrollPosition() // => {x: 0, y: 0}
 */
```

## copyText
> 复制文本
```js
/**
 * @function copyText
 * @description 复制文本
 * @param {string} text 需要复制的文本
 * @example copyText('hello world')
 */
```

## readClipboard
> 读取粘贴板
```js
/**
 * @function readClipboard
 * @description 读取剪贴板，需要用户触发事件
 * @param {Function} callback 回调函数
 * @example readClipboard((text) => console.log(text))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/readText
 */
```


## selectText
> 选中节点文本
```js
/**
 * @function selectText
 * @description 选中文本
 * @param {HTMLElement} element 需要选中的元素
 * @example selectText(document.getElementById('test'))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Selectionå
 */
```


## getSelectedText
> 获取选中的数据
```js
/**
 * @function getSelectionText
 * @description 获取选中的文本
 * @returns {string} 返回选中的文本
 * @example getSelectionText() // => 'hello world'
 */
```

## getBrowserLanguage
> 获取浏览器语言
```js
/**
 * @function getBrowserLanguage
 * @description 获取浏览器语言
 * @returns {string} 返回浏览器语言
 * @example getBrowserLanguage() // => 'zh-CN'
 */
```

## printPage
> 打印当前页面
```js
/**
 * @function printPage
 * @description 浏览器打印
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/print
 * @example printPage()
 */
```

