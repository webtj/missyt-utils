# ð¥ Numberæ°æ®å¤ç

## toFixed
> ä¿çå°æ°ä½æ°ï¼åèäºå¥
```js
/**
 * @function toFixed
 * @description ä¿çå°æ°ä½æ°ï¼åèäºå¥
 * @param {number} num æ°å­
 * @param {number} fixed ä¿çå°æ°ä½æ°,é»è®¤2ä½
 * @returns {number} è¿åå¤çåçæ°å­
 * @example
 * toFixed(1.23756,2) //1.23
 */
```

## toThousands
> æ°å­è½¬ååä½
```js
/**
 * @function toThousands
 * @description æ°å­è½¬ååä½
 * @param {number} num æ°å­
 * @returns {string} è¿åååä½æ°å­
 * @example
 * toThousands(123456789) //123,456,789
 * toThousands(123456789.123) //123,456,789.123
 */
```

## numberToPercent
> æ°å­è½¬ç¾åæ¯
```js
/**
 * @function numberToPercent
 * @description æ°å­è½¬ç¾åæ¯
 * @param {number} num æ°å­
 * @param {number} fixed ä¿çå°æ°ä½æ°,é»è®¤2ä½
 * @returns {string} è¿åç¾åæ¯
 * @example
 * numberToPercent(0.123456,2) //12.35%
 */
```

## percentToNumber
> ç¾åæ¯è½¬æ°å­
```js
/**
 * @function percentToNumber
 * @description ç¾åæ¯è½¬æ°å­
 * @param {string} percent ç¾åæ¯
 * @returns {number} è¿åæ°å­æèåå¼
 * @example
 * percentToNumber('12.35%') //0.1235
 */
```

## scientificToNumber
> ç§å­¦è®¡æ°æ³è½¬æ°å­
```js
/**
 * @function scientificToNumber
 * @description ç§å­¦è®¡æ°æ³è½¬æ°å­
 * @param {string} num ç§å­¦è®¡æ°æ³
 * @returns {number} è¿åæ°å­æèåå¼
 * @example
 * scientificToNumber('1.23456e+7') //12345600
 * scientificToNumber('1.23456e-7') //0.000000123456
 */
```