//日期相关的api

const addZero = num => {
  return num < 10 ? '0' + num : num
}

/**
 * 解析date
 * @param {*} date 需要解析的时间
 * @returns 时间年月日时分秒
 */
const parseDate = date => {
  if (typeof date === 'string') date = new Date(date)
  if (typeof date === 'number') date = new Date(date)
  if (!(date instanceof Date)) date = new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

//格式化时间
const formatDate = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
  const { year, month, day, hour, minute, second } = parseDate(date);
  return format.replace(/YYYY|yyyy/g, year)
    .replace(/YY|yy/g, addZero(year).toString().substr(2, 2))
    .replace(/MM/g, addZero(month))
    .replace(/DD|dd/g, addZero(day))
    .replace(/HH|hh/g, addZero(hour))
    .replace(/mm/g, addZero(minute))
    .replace(/ss/g, addZero(second))
}

/**
 * 比较两个日期相差天数
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns {Number} 相差天数
 */
const diffDays = (date1, date2) => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  const diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}


export {
  parseDate,
  formatDate,
  diffDays
}