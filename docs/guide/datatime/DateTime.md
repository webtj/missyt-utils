# 🥕 事件日期

## parseDate
> 解析日期时间，返回年月日时分秒对象
```js
/**
 * @function parseDate
 * @description 解析时间
 * @param {Datetype} date 需要解析的时间,不传默认new Date()
 * @returns {Object} 返回解析后的时间对象
 * @example
 * parseDate('2020-01-01 12:12:12')
 * parseDate(new Date())
 * parseDate(1577836800000)
 * return {year:2022,month:3,day:25,hour:13,minute:22,second:30}
 */
```

## formatDate
> 时期格式化，格式化成指定格式
```js
/**
 * @function formatDate
 * @description 格式化时间
 * @param {Datetype} date 需要格式化的时间,不传默认new Date()
 * @param {string} format 格式化的格式,不传默认yyyy-MM-dd HH:mm:ss
 * @returns {string} 返回格式化后的时间字符串
 * @example
 * formatDate('2020-01-01 12:12:12','yyyy-MM-dd HH:mm:ss')
 * formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')
 * formatDate(1577836800000,'yyyy-MM-dd HH:mm:ss')
 * formatDate('2020-01-01 12:12:12','yyyy年MM月dd日 HH时mm分ss秒')
 */
```

## diffDays
> 两个日期直接相差的天数
```js
/**
 * @function diffDays
 * @description 计算两个时间相差的天数
 * @param {Datetype} date1 需要计算的时间1
 * @param {Datetype} date2 需要计算的时间2
 * @returns {number} 返回相差的天数
 * @example
 * diffDays('2020-01-01 12:12:12','2020-01-02 12:12:12')
 */
```

## formatPassTime
> 格式化过去的时间
```js
/**
 * @function formatPassTime
 * @description 格式化过去的时间
 * @param {Datetype} startTime 需要格式化的时间
 * @returns {string} 返回格式化后的时间字符串
 * @example
 * formatPassTime('2020-01-01 12:12:12') // 1个月前
 * formatPassTime(new Date()) // 刚刚
 * formatPassTime(1577836800000) // 1小时前
 */
```