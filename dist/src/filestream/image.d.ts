/**
 * @function getImageSizeByUrl
 * @description 根据url获取图片的宽高
 * @param {string} url 图片url
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByUrl('https://www.baidu.com/img/bd_logo1.png').then(({width,height})=>{console.log(width,height)})
 */
declare const getImageSizeByUrl: (url: string) => Promise<unknown>;
/**
 * @function getImageSizeByFile
 * @description 根据file获取图片的宽高
 * @param {file} file 文件file流
 * @returns {Promise} 返回图片宽高
 * @example getImageSizeByFile(file).then(({width,height})=>{console.log(width,height)})
 */
declare const getImageSizeByFile: (file: Blob) => Promise<unknown>;
/**
 * @function downloadImage
 * @description 下载图片,
 * @param {string} url 图片url
 * @param {string} name 图片名称
 * @returns {void}
 * @example downloadImage('https://www.baidu.com/img/bd_logo1.png','baidu')
 */
declare const downloadImage: (url: string, name: string) => void;
export { getImageSizeByUrl, getImageSizeByFile, downloadImage };
