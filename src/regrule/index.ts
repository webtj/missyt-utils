//基于开源项目any-rule 二次封装
//https://any86.github.io/any-rule/

/**
 * @function isRailwayNumber
 * @description 是否为铁路班次
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isRailwayNumber('G1234')
 */
const isRailwayNumber = (value: string): boolean => /^[GCDZTSPKXLY1-9]\d{1,4}$/.test(value);

/**
 * @function isIMEI
 * @description 手机IMEI码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIMEI('123456789012345')
 */
const isIMEI = (value: string): boolean => /^\d{15,17}$/.test(value);

/**
 * @function isURL
 * @description 是否为URL
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isURL('https://www.baidu.com')
 */
const isURL = (value: string): boolean =>
  /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(value);

/**
 * @function isSubnetMask
 * @description 是否为子网掩码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isSubnetMask('255.255.255.255')
 */
const isSubnetMask = (value: string): boolean => /^((255\.){3}(255|254|252|248|240|224|192|128|0))$/.test(value);

/**
 * @function isVersion
 * @description 是否为版本号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVersion('1.0.1')
 */
const isVersion = (value: string): boolean => /^\d+(?:\.\d+){2}$/.test(value);

/**
 * @function isVideoUrl
 * @description 是否为视频链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVideoUrl('https://www.baidu.mp4')
 */
const isVideoUrl = (value: string): boolean =>
  /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);

/**
 * @function isImageUrl
 * @description 是否为图片链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isImageUrl('https://www.baidu.jpg')
 */
const isImageUrl = (value: string): boolean =>
  /^https?:\/\/(.+\/)+.+(\.(gif|jpg|jpeg|png|svg|webp|psd|bmp|tif))$/i.test(value);

/**
 * @function isIdCard
 * @description 是否为身份证号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345')
 */
const isBankCard = (value: string): boolean => /^[1-9]\d{9,29}$/.test(value);

/**
 * @function isNewEnergyCar
 * @description 是否为新能源车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNewEnergyCar('粤Z12345')
 */
const isNewEnergyCar = (value: string): boolean =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/.test(
    value,
  );

/**
 * @function isPetrolCar
 * @description 是否为油车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isPetrolCar('粤Z12345')
 */
const isPetrolCar = (value: string): boolean =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/.test(
    value,
  );

/**
 * @function isCarNumber
 * @description 是否为车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isCarNumber('粤Z12345')
 */
const isCarNumber = (value: string): boolean =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(
    value,
  );

/**
 * @function isMobileNumer
 * @description 是否为手机号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isMobileNumer('12345678901')
 */
const isMobileNumer = (value: string): boolean =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(
    value,
  );

/**
 * @function isDateString
 * @description 是否为日期,严谨，已考虑平闰年
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isDateString('2020-01-01')
 */
const isDateString = (value: string): boolean =>
  /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(
    value,
  );

/**
 * @function isChineseProvince
 * @description 是否为中国省份
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChineseProvince('广东')
 */
const isChineseProvince = (value: string): boolean =>
  /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/.test(
    value,
  );

/**
 * @function isEmail
 * @description 是否为邮箱地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isEmail('12323144@qq.com')
 */
const isEmail = (value: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  );

/**
 * @function isTelPhone
 * @description 是否为国内座机
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isTelPhone('0755-12345678')
 */
const isTelPhone = (value: string): boolean => /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);

/**
 * @function isIdCard
 * @description 是否为身份证号,支持1/2代(15位/18位数字)
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345678')
 */
const isIdCard = (value: string): boolean =>
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
    value,
  );

/**
 * @function isChinese
 * @description 是否为中文
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChinese('你好')
 */
const isChinese = (value: string): boolean =>
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(
    value,
  );

/**
 * @function isDecimal
 * @description 是否为小数
 * @param {String|Number} value
 * @returns {Boolean} true/false
 * @example isDecimal('1.1')
 * @example isDecimal('1')
 */
const isDecimal = (value: number | string): boolean => /^\d+\.\d+$/.test(value + '');

/**
 * @function isOnlyNumber
 * @description 是否只包含数字
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyNumber('123')
 */
const isOnlyNumber = (value: string): boolean => /^\d+$/.test(value);

/**
 * @function isOnlyLetter
 * @description 是否只包含字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyLetter('abc')
 */
const isOnlyLetter = (value: string): boolean => /^[a-zA-Z]+$/.test(value);

/**
 * @function isNumberOrLetter
 * @description 是否只包含数字和字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNumberOrLetter('123abc')
 */
const isNumberOrLetter = (value: string): boolean => /^[a-zA-Z0-9]+$/.test(value);

/**
 * @function isHtml
 * @description 是否为html标签
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isHtml('<div>123</div>')
 */
const isHtml = (value: string): boolean => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);

//是否为ipv4地址
/**
 * @function isIpv4
 * @description 是否为ipv4地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv4('192.168.3.3')
 */
const isIpv4 = (value: string): boolean =>
  /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(
    value,
  );

/**
 * @function isIpv6
 * @description 是否为ipv6地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
 */
const isIpv6 = (value: string): boolean =>
  /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i.test(
    value,
  );

/**
 * @function isPostalCode
 * @description 是否为邮政编码
 * @param {string} value 邮政编码
 * @returns {boolean} 是否为邮政编码
 * @example isPostalCode('100000')
 */
const isPostalCode = (value: string): boolean =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(value);

/**
 * @function isMacAddress
 * @description 是否为mac地址
 * @param {string} value mac地址
 * @returns {boolean} 是否为mac地址
 * @example isMacAddress('00:00:00:00:00:00')
 */
const isMacAddress = (value: string): boolean => /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(value);

/**
 * @function isPositiveInteger
 * @description 是否为正整数,不包括0
 * @param {string} value 正整数
 * @returns {boolean} 是否为正整数
 * @example isPositiveInteger('1')
 */
const isPositiveInteger = (value: number): boolean => /^\+?[1-9]\d*$/.test(value + '');

/**
 * @function isNegativeInteger
 * @description 是否为负整数,不包括0
 * @param {string} value 负整数
 * @returns {boolean} 是否为负整数
 * @example isNegativeInteger('-1')
 */
const isNegativeInteger = (value: number): boolean => /^\-[1-9]\d*$/.test(value + '');

/**
 * @function isInteger
 * @description 是否为整数
 * @param {Number} value 整数
 * @returns {boolean} 是否为整数
 * @example isInteger(1)
 */
const isInteger = (value: number): boolean => /^(?:0|(?:-?[1-9]\d*))$/.test(value + '');

/**
 * @function isFloat
 * @description 是否为浮点数
 * @param {Number} value 浮点数
 * @returns {boolean} 是否为浮点数
 * @example isFloat(1.1)
 */
const isFloat = (value: number): boolean => /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/.test(value + '');

export {
  isRailwayNumber,
  isIMEI,
  isURL,
  isSubnetMask,
  isVersion,
  isVideoUrl,
  isImageUrl,
  isBankCard,
  isNewEnergyCar,
  isPetrolCar,
  isCarNumber,
  isMobileNumer,
  isDateString,
  isChineseProvince,
  isEmail,
  isTelPhone,
  isIdCard,
  isChinese,
  isDecimal,
  isOnlyNumber,
  isOnlyLetter,
  isNumberOrLetter,
  isHtml,
  isIpv4,
  isIpv6,
  isPostalCode,
  isMacAddress,
  isPositiveInteger,
  isNegativeInteger,
  isInteger,
  isFloat,
};
