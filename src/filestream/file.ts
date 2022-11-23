//file转base64
const fileToBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result || '';
      resolve(src);
    };
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
};

/**
 * @function base64ToFile
 * @description base64转file
 * @param {string} dataurl base64
 * @param {string} filename 文件名
 * @returns {file} 返回file
 */
const base64ToFile = (dataurl: string, filename: string): File => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || '';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

/**
 * @function base64ToBlob
 * @description base64转blob
 * @param {string} dataurl base64
 * @returns {blob} 返回blob
 */
const base64ToBlob = (dataurl: string): Blob => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

/**
 * @function getFileSuffix
 * @description 获取文件后缀
 * @param {string} filename 文件名
 * @returns {string} 返回文件后缀
 * @example getFileSuffix('test.png') // => 'png'
 */
const getFileSuffix = (filename: string): string => {
  const index = filename.lastIndexOf('.');
  return filename.substring(index + 1);
};

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
const formatFileSize = (size: number, precision = 2): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unit = 0;
  while (size >= 1024) {
    size /= 1024;
    unit++;
  }
  return size.toFixed(precision) + units[unit];
};

export { fileToBase64, base64ToFile, base64ToBlob, getFileSuffix, formatFileSize };
