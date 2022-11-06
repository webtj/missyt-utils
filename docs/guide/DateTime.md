# 🥕 事件日期

## parseDate
> 解析日期时间，返回年月日时分秒对象
```javascript
/**
 * @funcs parseDate
 * @param {String|Number|Date} date 需要解析的date
 * @return {Object} 年月日时分秒
 */
  parseDate('2019-03-28 12:23:49');
  parseDate(1667718301480);
  parseDate(new Date());
  // return {year:2022,month:3,day:25,hour:13,minute:22,second:30}
```

## formatDate
> 时期格式化，格式化成指定格式
```javascript
/**
 * @funcs parseDate
 * @param {String|Number|Date} date 需要解析的date
 * @param {String} format 默认：yyyy-MM-dd HH:mm:ss
 * @return {String} 指定的时间格式
 */
  formatDate(new Date()); //2022-11-06 15:28:39
  formatDate('2019-12-29 23:35:17', 'dd-MM-yy hh:mm'); //29-12-19 23:35
```

## diffDays
> 两个日期直接相差的天数
```javascript
/**
 * @funcs diffDays
 * @param {Date} date1 startDate
 * @param {Date} date2 ENDdATE
 * @return {Number} 两个时间相差的天数
 */
  diffDays(new Date('2022-10-25 13:34:10'),new Date('2022-10-26 13:34:10'))
```