//browser notification

/**
 * @function notice
 * @description 浏览器通知
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Notification
 * @param {string} title 通知标题
 * @param {object} options 通知配置
 * @param {string} options.body 通知内容
 * @param {string} options.icon 通知图标
 * @param {string} options.tag 通知标签
 * @param {string} options.image 通知图片
 * @param {string} options.lang 通知语言
 * @param {boolean} options.renotify 通知是否需要重新提醒
 * @param {boolean} options.silent 通知是否静音
 * @param {boolean} options.requireInteraction 通知是否需要用户交互
 * @param {boolean} options.sticky 通知是否需要粘性
 * @param {string} options.dir 通知方向
 * @param {string} options.vibrate 通知振动
 * @param {string} options.badge 通知徽章
 * @param {string} options.timestamp 通知时间戳
 * @param {string} options.actions 通知操作
 * @param {string} options.data 通知数据
 * @return {Promise} 返回通知结果
 * @example notice.send('通知标题', { body: '通知内容' }) // => void
 * @example notice.send('通知标题', { body: '通知内容', icon: '通知图标' }) // => void
 */
const send = (title: string, options?: NotificationOptions): Promise<Notification> => {
  return new Promise((resolve, reject) => {
    if (!('Notification' in window)) {
      reject(new Error('This browser does not support desktop notification'));
    } else if (Notification.permission === 'granted') {
      //用户已经同意
      resolve(new Notification(title, options));
    } else if (Notification.permission !== 'denied') {
      //用户已拒绝
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          resolve(new Notification(title, options));
        } else {
          reject(new Error('User denied'));
        }
      });
    } else {
      reject(new Error('notification denied'));
    }
  });
};

/**
 * @function confirm
 * @description 浏览器通知确认
 * @param {string} message 弹窗确认内容
 * @param {Function} sure 确认回调
 * @param {Function} cancel 取消回调
 * @example notice.confirm('确认删除吗？', () => { console.log('确认') }, () => { console.log('取消') }) // => void
 */
const confirm = (message: string, sure: () => void, cancel: () => void) => {
  if (window.confirm(message)) sure && sure();
  else cancel && cancel();
};

const Notice = { send, confirm };

export { Notice };
