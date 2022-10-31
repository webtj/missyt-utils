/**
 * 检测数据为何种类型
 * @param {待校验参数} object 
 * @returns 数据类型字符串
 */
function getTag(object) {
  return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};
export default getTag;