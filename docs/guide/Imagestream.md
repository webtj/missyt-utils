# 🥕 image

## getImageSizeByUrl
> 根据图片url获取图片尺寸
```javascript
/**
 * @funcs getImageSizeByUrl
 * @param {String} url 图片url
 * @return {Promise} 
 */
  getImageSizeByUrl('https://sponsors.vuejs.org/images/xitujuejinjishushequ.avif').then(size => {
    console.log('图片的width:',size.width);
    console.log('图片的height',size.height);
  })
```

## getImageSizeByFile
> 根据file获取图片的宽高
```javascript
/**
 * @funcs getImageSizeByFile
 * @param {File} file 图片文件二进制流
 * @return {Promise} 
 */
  //file input上传
  getImageSizeByFile(file).then(size => {
    console.log('图片的width:',size.width);
    console.log('图片的height',size.height);
  })
```

## downloadImage
> 下载图片至本地
:::tip
下载涉及流文件的读写，实际为http get请求，需保持图片地址同源、或图片服务器设置可任意访问，否则会跨域！
:::
```javascript
/**
 * @funcs downloadImage
 * @param {String} url 图片下载url
 * @param {String} name 下载的图片名称(可选) 
 * @return {File} 
 */
downloadImage('https://sponsors.vuejs.org/images/xitujuejinjishushequ.avif','vue.avif');
```
