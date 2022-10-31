/**
 * 根据url获取图片的宽高
 * @param {string} url 图片url
 * @returns 返回图片宽高
 */
const getImageSizeByUrl = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (e) => {
      reject(e);
    };
    img.src = url;
  });
}

/**
 * 根据file获取图片的宽高
 * @param {file} file 文件file流
 * @returns 返回图片宽高
 */
const getImageSizeByFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      getImageSizeByUrl(src).then((size) => {
        resolve(size);
      }).catch((e) => {
        reject(e);
      });
    };
    reader.readAsDataURL(file);
  });
};

/**
 * 下载图片，域名要保持一致
 * @param {string} url 图片url
 * @param {下载名称} name 下载图片名称
 */
const downloadImage = (url, name) => {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const event = new MouseEvent('click');
    a.download = (name || 'photo') + '.png';
    a.href = url;
    a.dispatchEvent(event);
  }
  //当img先加载src后，会出现浏览器缓存跨域，所以设置img时间戳
  img.src = url + '?t=' + new Date().getTime();
};

export {
  getImageSizeByUrl,
  getImageSizeByFile,
  downloadImage
}