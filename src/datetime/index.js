//日期相关的api

const addZero = num => {
  return num < 10 ? '0' + num : num
}

const parseDate = date => {
  if (typeof date === 'string') date = new Date(date)
  if (typeof date === 'number') date = new Date(date)
  if (!(date instanceof Date)) date = new Date()
  return {
    year: date.getFullYear(),
    month: addZero(date.getMonth() + 1),
    day: addZero(date.getDate()),
    hour: addZero(date.getHours()),
    minute: addZero(date.getMinutes()),
    second: addZero(date.getSeconds())
  }
}

//格式化时间
const formatDate = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
  const { year, month, day, hour, minute, second } = parseDate(date);
  return format.replace(/YYYY|yyyy/g, year)
    .replace(/YY|yy/g, year.toString().substr(2, 2))
    .replace(/MM/g, month)
    .replace(/DD|dd/g, day)
    .replace(/HH|hh/g, hour)
    .replace(/mm/g, minute)
    .replace(/ss/g, second)
}



export {
  parseDate,
  formatDate
}