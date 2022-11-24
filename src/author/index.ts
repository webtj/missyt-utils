import pk from '../../package.json';

/**
 * @function getAuthor
 * @description 获取作者信息
 * @returns {string} 返回作者信息
 * @example getAuthor() // => 'author'
 */
const getAuthor = (): string => pk.author;

/**
 * @function getVersion
 * @description 获取版本号
 * @returns {string} 返回版本号
 * @example getVersion() // => '1.0.0'
 */
const getVersion = (): string => pk.version;

export { getAuthor, getVersion };
