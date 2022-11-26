# 🥕 文件流

## fileToBase64
> file转base64
```js
/**
 * @function fileToBase64
 * @description file转base64
 * @param {file} file 文件
 * @returns {string} 返回base64
 * @example fileToBase64(file).then(base64 => console.log(base64))
 */
```

## base64ToFile
> base64转file
```js
/**
 * @function base64ToFile
 * @description base64转file
 * @param {string} dataurl base64
 * @param {string} filename 文件名
 * @returns {file} 返回file
 */
```

## base64ToBlob
> base64转blob
```js
/**
 * @function base64ToBlob
 * @description base64转blob
 * @param {string} dataurl base64
 * @returns {blob} 返回blob
 */
```

## getFileSuffix
> 获取文件后缀
```js
/**
 * @function getFileSuffix
 * @description 获取文件后缀
 * @param {string} filename 文件名
 * @returns {string} 返回文件后缀
 * @example getFileSuffix('test.png') // => 'png'
 */
```

## formatFileSize
> 格式化文件大小，转换成带单位的字符串
```js
/**
 * @function formatFileSize
 * @description 格式化文件大小，转换成带单位的字符串
 * @param {number} size 文件大小，单位字节
 * @param {number} precision 保留的小数点长度 默认保留2位小数
 * @returns {string} 返回带单位的文件大小
 * @example formatFileSize(1024) // => '1.00KB'
 * @example formatFileSize(1024, 3) // => '1.000KB'
 * @example formatFileSize(1024 * 1024) // => '1.00MB'
 */
```