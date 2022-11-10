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

export { fileToBase64, base64ToFile, base64ToBlob };
