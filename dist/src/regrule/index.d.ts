/**
 * @function isRailwayNumber
 * @description 是否为铁路班次
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isRailwayNumber('G1234')
 */
declare const isRailwayNumber: (value: string) => boolean;
/**
 * @function isIMEI
 * @description 手机IMEI码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIMEI('123456789012345')
 */
declare const isIMEI: (value: string) => boolean;
/**
 * @function isURL
 * @description 是否为URL
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isURL('https://www.baidu.com')
 */
declare const isURL: (value: string) => boolean;
/**
 * @function isSubnetMask
 * @description 是否为子网掩码
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isSubnetMask('255.255.255.255')
 */
declare const isSubnetMask: (value: string) => boolean;
/**
 * @function isVersion
 * @description 是否为版本号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVersion('1.0.1')
 */
declare const isVersion: (value: string) => boolean;
/**
 * @function isVideoUrl
 * @description 是否为视频链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isVideoUrl('https://www.baidu.mp4')
 */
declare const isVideoUrl: (value: string) => boolean;
/**
 * @function isImageUrl
 * @description 是否为图片链接
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isImageUrl('https://www.baidu.jpg')
 */
declare const isImageUrl: (value: string) => boolean;
/**
 * @function isIdCard
 * @description 是否为身份证号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345')
 */
declare const isBankCard: (value: string) => boolean;
/**
 * @function isNewEnergyCar
 * @description 是否为新能源车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNewEnergyCar('粤Z12345')
 */
declare const isNewEnergyCar: (value: string) => boolean;
/**
 * @function isPetrolCar
 * @description 是否为油车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isPetrolCar('粤Z12345')
 */
declare const isPetrolCar: (value: string) => boolean;
/**
 * @function isCarNumber
 * @description 是否为车牌
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isCarNumber('粤Z12345')
 */
declare const isCarNumber: (value: string) => boolean;
/**
 * @function isMobileNumer
 * @description 是否为手机号
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isMobileNumer('12345678901')
 */
declare const isMobileNumer: (value: string) => boolean;
/**
 * @function isDateString
 * @description 是否为日期,严谨，已考虑平闰年
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isDateString('2020-01-01')
 */
declare const isDateString: (value: string) => boolean;
/**
 * @function isChineseProvince
 * @description 是否为中国省份
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChineseProvince('广东')
 */
declare const isChineseProvince: (value: string) => boolean;
/**
 * @function isEmail
 * @description 是否为邮箱地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isEmail('12323144@qq.com')
 */
declare const isEmail: (value: string) => boolean;
/**
 * @function isTelPhone
 * @description 是否为国内座机
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isTelPhone('0755-12345678')
 */
declare const isTelPhone: (value: string) => boolean;
/**
 * @function isIdCard
 * @description 是否为身份证号,支持1/2代(15位/18位数字)
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIdCard('123456789012345678')
 */
declare const isIdCard: (value: string) => boolean;
/**
 * @function isChinese
 * @description 是否为中文
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isChinese('你好')
 */
declare const isChinese: (value: string) => boolean;
/**
 * @function isDecimal
 * @description 是否为小数
 * @param {String|Number} value
 * @returns {Boolean} true/false
 * @example isDecimal('1.1')
 * @example isDecimal('1')
 */
declare const isDecimal: (value: number | string) => boolean;
/**
 * @function isOnlyNumber
 * @description 是否只包含数字
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyNumber('123')
 */
declare const isOnlyNumber: (value: string) => boolean;
/**
 * @function isOnlyLetter
 * @description 是否只包含字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isOnlyLetter('abc')
 */
declare const isOnlyLetter: (value: string) => boolean;
/**
 * @function isNumberOrLetter
 * @description 是否只包含数字和字母
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isNumberOrLetter('123abc')
 */
declare const isNumberOrLetter: (value: string) => boolean;
/**
 * @function isHtml
 * @description 是否为html标签
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isHtml('<div>123</div>')
 */
declare const isHtml: (value: string) => boolean;
/**
 * @function isIpv4
 * @description 是否为ipv4地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv4('192.168.3.3')
 */
declare const isIpv4: (value: string) => boolean;
/**
 * @function isIpv6
 * @description 是否为ipv6地址
 * @param {String} value
 * @returns {Boolean} true/false
 * @example isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
 */
declare const isIpv6: (value: string) => boolean;
/**
 * @function isPostalCode
 * @description 是否为邮政编码
 * @param {string} value 邮政编码
 * @returns {boolean} 是否为邮政编码
 * @example isPostalCode('100000')
 */
declare const isPostalCode: (value: string) => boolean;
/**
 * @function isMacAddress
 * @description 是否为mac地址
 * @param {string} value mac地址
 * @returns {boolean} 是否为mac地址
 * @example isMacAddress('00:00:00:00:00:00')
 */
declare const isMacAddress: (value: string) => boolean;
/**
 * @function isPositiveInteger
 * @description 是否为正整数,不包括0
 * @param {string} value 正整数
 * @returns {boolean} 是否为正整数
 * @example isPositiveInteger('1')
 */
declare const isPositiveInteger: (value: number) => boolean;
/**
 * @function isNegativeInteger
 * @description 是否为负整数,不包括0
 * @param {string} value 负整数
 * @returns {boolean} 是否为负整数
 * @example isNegativeInteger('-1')
 */
declare const isNegativeInteger: (value: number) => boolean;
/**
 * @function isInteger
 * @description 是否为整数
 * @param {Number} value 整数
 * @returns {boolean} 是否为整数
 * @example isInteger(1)
 */
declare const isInteger: (value: number) => boolean;
/**
 * @function isFloat
 * @description 是否为浮点数
 * @param {Number} value 浮点数
 * @returns {boolean} 是否为浮点数
 * @example isFloat(1.1)
 */
declare const isFloat: (value: number) => boolean;
export { isRailwayNumber, isIMEI, isURL, isSubnetMask, isVersion, isVideoUrl, isImageUrl, isBankCard, isNewEnergyCar, isPetrolCar, isCarNumber, isMobileNumer, isDateString, isChineseProvince, isEmail, isTelPhone, isIdCard, isChinese, isDecimal, isOnlyNumber, isOnlyLetter, isNumberOrLetter, isHtml, isIpv4, isIpv6, isPostalCode, isMacAddress, isPositiveInteger, isNegativeInteger, isInteger, isFloat, };
