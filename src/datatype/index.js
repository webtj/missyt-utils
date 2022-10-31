/**判断数据类型 */
import getTag from '../.internal/getTag';
const isNumber = (value, isFinite = false) => getTag(value) === 'Number' && (isFinite ? Number.isFinite(value) : true);
const isString = (value) => getTag(value) === 'String';
const isBoolean = (value) => getTag(value) === 'Boolean';
const isNull = (value) => getTag(value) === 'Null';
const isUndefined = (value) => getTag(value) === 'Undefined';
const isSymbol = (value) => getTag(value) === 'Symbol';
const isObject = (value) => getTag(value) === 'Object';
const isFunction = (value) => getTag(value) === 'Function';
const isArray = (value) => getTag(value) === 'Array';
const isDate = (value) => getTag(value) === 'Date';
const isRegExp = (value) => getTag(value) === 'RegExp';
const isError = (value) => getTag(value) === 'Error';
const isMap = (value) => getTag(value) === 'Map';
const isWeakMap = (value) => getTag(value) === 'WeakMap';
const isSet = (value) => getTag(value) === 'Set';
const isWeakSet = (value) => getTag(value) === 'WeakSet';
const isPromise = (value) => getTag(value) === 'Promise';
const isGenerator = (value) => getTag(value) === 'Generator';


export {
  isNumber,
  isString,
  isBoolean,
  isNull,
  isUndefined,
  isSymbol,
  isObject,
  isFunction,
  isArray,
  isDate,
  isRegExp,
  isError,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isPromise,
  isGenerator
};