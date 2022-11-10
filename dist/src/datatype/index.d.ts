/**
 * @function isNumber
 * @description 判断是否为数字
 * @param {any} value 需要判断的数据
 * @param {boolean} isFinite  是否为有限数字 检测NaN,Infinity,-Infinity
 * @returns {boolean} 返回判断结果
 * @example
 * isNumber('1') => false
 * isNumber(1) => true
 * isNumber(1, true) => true
 * isNumber(NaN) => true
 * isNumber(new Number(2)) => true
 * isNumber(NaN, true) => false
 * isNumber(Infinity, true) => false
 * isNumber(-Infinity, true) => false
 */
declare const isNumber: (value: unknown, isFinite?: boolean) => boolean;
/**
 * @function isString
 * @description 判断是否为字符串
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isString('1') => true
 * isString(new String('1')) => true
 */
declare const isString: (value: unknown) => boolean;
/**
 * @function isBoolean
 * @description 判断是否为布尔值,没有隐式转换
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isBoolean(true) => true
 * isBoolean(false) => true
 * isBoolean(new Boolean(false)) => true
 * isBoolean(1) => false
 * isBoolean('1') => false
 */
declare const isBoolean: (value: unknown) => boolean;
/**
 * @function isNull
 * @description 判断是否为null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isNull(null) => true
 * isNull(undefined) => false
 * isNull('') => false
 */
declare const isNull: (value: unknown) => boolean;
/**
 * @function isUndefined
 * @description 判断是否为undefined
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isUndefined(undefined) => true
 * isUndefined(null) => false
 * isUndefined('') => false
 */
declare const isUndefined: (value: unknown) => boolean;
/**
 * @function isSymbol
 * @description 判断是否为Symbol
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSymbol(Symbol('1')) => true
 */
declare const isSymbol: (value: unknown) => boolean;
/**
 * @function isObject
 * @description 判断是否为对象,不包括null
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isObject({}) => true
 * isObject([]) => true
 * isObject(new Object()) => true
 * isObject(new Array()) => true
 * isObject(null) => false
 */
declare const isObject: (value: unknown) => boolean;
/**
 * @function isFunction
 * @description 判断是否为函数
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isFunction(() => {}) => true
 * isFunction(function() {}) => true
 * isFunction(new Function()) => true
 * isFunction(class {}) => true
 */
declare const isFunction: (value: unknown) => boolean;
/**
 * @function isArray
 * @description 判断是否为数组
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isArray([]) => true
 * isArray(new Array()) => true
 * isArray({}) => false
 */
declare const isArray: (value: unknown) => boolean;
/**
 * @function isDate
 * @description 判断是否为日期
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isDate(new Date()) => true
 * isDate(new Date('2020-01-01')) => true
 * isDate('2020-01-01') => false
 */
declare const isDate: (value: unknown) => boolean;
/**
 * @function isRegExp
 * @description 判断是否为正则
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isRegExp(/1/) => true
 * isRegExp(new RegExp('1')) => true
 * isRegExp('1') => false
 */
declare const isRegExp: (value: unknown) => boolean;
/**
 * @function isError
 * @description 判断是否为错误对象
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isError(new Error()) => true
 * isError(new TypeError()) => true
 * isError('1') => false
 */
declare const isError: (value: unknown) => boolean;
/**
 * @function isMap
 * @description 判断是否为Map
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isMap(new Map()) => true
 * isMap(new WeakMap()) => false
 * isMap('1') => false
 */
declare const isMap: (value: unknown) => boolean;
/**
 * @function isWeakMap
 * @description 判断是否为WeakMap
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakMap(new WeakMap()) => true
 * isWeakMap(new Map()) => false
 * isWeakMap('1') => false
 */
declare const isWeakMap: (value: unknown) => boolean;
/**
 * @function isSet
 * @description 判断是否为Set
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isSet(new Set()) => true
 * isSet(new WeakSet()) => false
 * isSet('1') => false
 */
declare const isSet: (value: unknown) => boolean;
/**
 * @function isWeakSet
 * @description 判断是否为WeakSet
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isWeakSet(new WeakSet()) => true
 * isWeakSet(new Set()) => false
 * isWeakSet('1') => false
 */
declare const isWeakSet: (value: unknown) => boolean;
/**
 * @function isPromise
 * @description 判断是否为Promise
 * @param {any} value 需要判断的数据
 * @returns {boolean} 返回判断结果
 * @example
 * isPromise(new Promise(() => {})) => true
 * isPromise(Promise.resolve()) => true
 * isPromise(() => {}) => false
 */
declare const isPromise: (value: unknown) => boolean;
export { isNumber, isString, isBoolean, isNull, isUndefined, isSymbol, isObject, isFunction, isArray, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet, isPromise, };
