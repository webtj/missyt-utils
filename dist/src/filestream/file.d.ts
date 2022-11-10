declare const fileToBase64: (file: Blob) => Promise<unknown>;
/**
 * @function base64ToFile
 * @description base64转file
 * @param {string} dataurl base64
 * @param {string} filename 文件名
 * @returns {file} 返回file
 */
declare const base64ToFile: (dataurl: string, filename: string) => File;
/**
 * @function base64ToBlob
 * @description base64转blob
 * @param {string} dataurl base64
 * @returns {blob} 返回blob
 */
declare const base64ToBlob: (dataurl: string) => Blob;
export { fileToBase64, base64ToFile, base64ToBlob };
