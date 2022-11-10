/**
 * @function getTag
 * @description 获取数据类型
 * @param {any} object 需要判断的数据
 * @returns {string} 返回数据类型
 * @example getTag(1) => 'Number'
 */
const getTag = (object: any): string => {
  return (<Array<string>>Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/))[1];
};
export default getTag;
