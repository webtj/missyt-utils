# 🥕 Number数据处理

## toFixed
> 保留小数位数，四舍五入
```js
/**
 * @function toFixed
 * @description 保留小数位数，四舍五入
 * @param {number} num 数字
 * @param {number} fixed 保留小数位数,默认2位
 * @returns {number} 返回处理后的数字
 * @example
 * toFixed(1.23756,2) //1.23
 */
```

## toThousands
> 数字转千分位
```js
/**
 * @function toThousands
 * @description 数字转千分位
 * @param {number} num 数字
 * @returns {string} 返回千分位数字
 * @example
 * toThousands(123456789) //123,456,789
 * toThousands(123456789.123) //123,456,789.123
 */
```

## numberToPercent
> 数字转百分比
```js
/**
 * @function numberToPercent
 * @description 数字转百分比
 * @param {number} num 数字
 * @param {number} fixed 保留小数位数,默认2位
 * @returns {string} 返回百分比
 * @example
 * numberToPercent(0.123456,2) //12.35%
 */
```

## percentToNumber
> 百分比转数字
```js
/**
 * @function percentToNumber
 * @description 百分比转数字
 * @param {string} percent 百分比
 * @returns {number} 返回数字或者原值
 * @example
 * percentToNumber('12.35%') //0.1235
 */
```

## scientificToNumber
> 科学计数法转数字
```js
/**
 * @function scientificToNumber
 * @description 科学计数法转数字
 * @param {string} num 科学计数法
 * @returns {number} 返回数字或者原值
 * @example
 * scientificToNumber('1.23456e+7') //12345600
 * scientificToNumber('1.23456e-7') //0.000000123456
 */
```