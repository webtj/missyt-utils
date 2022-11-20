//处理数字
import { isNumber } from 'src/datatype';
/**
 * @function toFixed
 * @description 保留小数位数，四舍五入
 * @param {number} num 数字
 * @param {number} fixed 保留小数位数,默认2位
 * @returns {number} 返回处理后的数字
 * @example
 * toFixed(1.23756,2) //1.23
 */
const toFixed = (num: number, fixed = 2): number => {
  if (!isNumber(num)) return num;
  else return Number(num.toFixed(fixed));
};

/**
 * @function toThousands
 * @description 数字转千分位
 * @param {number} num 数字
 * @returns {string} 返回千分位数字
 * @example
 * toThousands(123456789) //123,456,789
 * toThousands(123456789.123) //123,456,789.123
 */
type StringOrother<T> = T extends number ? string : T;
const toThousands = (num: number): StringOrother<unknown> => {
  if (!isNumber(num)) return num;
  else {
    const str = num.toString();
    const arr = str.split('.');
    const int = arr[0];
    const dec = arr[1];
    const reg = /(?=(?!\b)(\d{3})+$)/g;
    return int.replace(reg, ',') + (dec ? '.' + dec : '');
  }
};

/**
 * @function numberToPercent
 * @description 数字转百分比
 * @param {number} num 数字
 * @param {number} fixed 保留小数位数,默认2位
 * @returns {string} 返回百分比
 * @example
 * numberToPercent(0.123456,2) //12.35%
 */
const numberToPercent = (num: number, fixed = 2): StringOrother<unknown> => {
  if (!isNumber(num)) return num;
  else return (num * 100).toFixed(fixed) + '%';
};

/**
 * @function percentToNumber
 * @description 百分比转数字
 * @param {string} percent 百分比
 * @returns {number} 返回数字或者原值
 * @example
 * percentToNumber('12.35%') //0.1235
 */
type NumberOrother<T> = T extends string ? number : T;
const percentToNumber = (percent: string): NumberOrother<unknown> => {
  if (isNumber(parseFloat(percent)) && percent.indexOf('%') > -1) {
    return parseFloat(percent) / 100;
  } else return percent;
};

/**
 * @function scientificToNumber
 * @description 科学计数法转数字
 * @param {string} num 科学计数法
 * @returns {number} 返回数字或者原值
 * @example
 * scientificToNumber('1.23456e+7') //12345600
 * scientificToNumber('1.23456e-7') //0.000000123456
 */
const scientificToNumber = (num: number): number => {
  const str = num.toString();
  const reg = /^(\d+)(e)([\-]?\d+)$/;
  const arr = reg.exec(str);
  if (arr == null) return num;
  else {
    const len = Math.abs(Number(arr[3]));
    const zero = new Array(len).join('0');
    const dec = arr[1] + zero;
    return Number(dec);
  }
};

export { toFixed, toThousands, numberToPercent, percentToNumber, scientificToNumber };
