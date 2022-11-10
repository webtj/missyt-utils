type Datetype = string | number | Date;
type Dateobject = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};
/**
 * @function addZero
 * @description 数字补零
 * @param {number} num 需要补零的数字
 * @returns {string} 返回补零后的字符串
 */
const addZero = (num: number): string => {
  return num < 10 ? '0' + num : '' + num;
};

/**
 * @function parseDate
 * @description 解析时间
 * @param {Datetype} date 需要解析的时间,不传默认new Date()
 * @returns {Object} 返回解析后的时间对象
 * @example
 * parseDate('2020-01-01 12:12:12')
 * parseDate(new Date())
 * parseDate(1577836800000)
 */
const parseDate = (date?: Datetype): object => {
  if (typeof date === 'string') date = new Date(date);
  if (typeof date === 'number') date = new Date(date);
  if (!(date instanceof Date)) date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};

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
const formatDate = (date?: Datetype, format = 'yyyy-MM-dd HH:mm:ss') => {
  const { year, month, day, hour, minute, second } = <Dateobject>parseDate(date);
  return format
    .replace(/YYYY|yyyy/g, addZero(year))
    .replace(/YY|yy/g, addZero(year).toString().substr(2, 2))
    .replace(/MM/g, addZero(month))
    .replace(/DD|dd/g, addZero(day))
    .replace(/HH|hh/g, addZero(hour))
    .replace(/mm/g, addZero(minute))
    .replace(/ss/g, addZero(second));
};

/**
 * @function diffDays
 * @description 计算两个时间相差的天数
 * @param {Datetype} date1 需要计算的时间1
 * @param {Datetype} date2 需要计算的时间2
 * @returns {number} 返回相差的天数
 * @example
 * diffDays('2020-01-01 12:12:12','2020-01-02 12:12:12')
 */
const diffDays = (date1: Date, date2: Date): number => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  const diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

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
const formatPassTime = (startTime?: Datetype): string => {
  const currentTime = Date.parse(new Date().toString()),
    starT = startTime ? Date.parse(new Date(startTime).toString()) : currentTime,
    time = currentTime - starT,
    day = parseInt(String(time / (1000 * 60 * 60 * 24))),
    hour = parseInt(String(time / (1000 * 60 * 60))),
    min = parseInt(String(time / (1000 * 60))),
    sec = parseInt(String(time / 1000)),
    month = parseInt(String(day / 30)),
    year = parseInt(String(month / 12));
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';
  if (sec) return sec + '秒前';
  else return '刚刚';
};
export { parseDate, formatDate, diffDays, formatPassTime };
