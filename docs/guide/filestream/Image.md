# 🥕 image

## getImageSizeByUrl
> 根据图片url获取图片尺寸
```js
/**
 * @function getImageSizeByUrl
 * @description 根据url获取图片的宽高
 * @param {string} url 图片url
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByUrl('https://www.baidu.com/img/bd_logo1.png').then(({width,height})=>{console.log(width,height)})
 */
```

## getImageSizeByFile
> 根据file获取图片的宽高
```js
/**
 * @function getImageSizeByFile
 * @description 根据file获取图片的宽高
 * @param {file} file 文件file流
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByFile(file).then(({width,height})=>{console.log(width,height)})
 */
```

## downloadImage
> 下载图片至本地
:::tip
下载涉及流文件的读写，实际为http get请求，需保持图片地址同源、或图片服务器设置可任意访问，否则会跨域！
:::
```js
/**
 * @function downloadImage
 * @description 下载图片,
 * @param {string} url 图片url
 * @param {string} name 图片名称
 * @returns {void}
 * @example downloadImage('https://www.baidu.com/img/bd_logo1.png','baidu')
 */
```
