# 🥕 文件流

## fileToBase64
> file转base64
```javascript
/**
 * @funcs fileToBase64
 * @param {File} file file文件
 * @return {Promise}
 */
  fileToBase64(file).then(res => {
    console.log('base64',res);
  })
```

## base64ToFile
> base64转file
```javascript
/**
 * @funcs base64ToFile
 * @param {String} dataurl base64
 * @param {String} filename file名称
 * @return {File} 文件file
 */
  const file = base64ToFile('base64','filename');
```

## base64ToBlob
> base64转blob
```javascript
/**
 * @funcs base64ToBlob
 * @param {String} dataurl base64
 * @return {Blob}
 */
  const blob = base64ToBlob('base64');
```