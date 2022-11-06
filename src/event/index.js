/**
 * 事件总线
 */
const EventBus = {
  callbacks: {},
  on: function (type, callback) {//绑定注册事件
    if (this.callbacks[type]) this.callbacks[type].push(callback)
    else this.callbacks[type] = [callback]
    return this.callbacks[type];
  },
  emit: function (type, data) {//触发事件
    if (this.callbacks[type] && this.callbacks[type].length > 0) {
      this.callbacks[type].forEach(callback => {
        callback(data)
      })
    }
  },
  off: function (type) {//注销事件
    if (!type) this.callbacks = {}
    else delete this.callbacks[type]
  }
}

/**
 * callbacks :{
 *  login:{
 *    token_1:function,
 *    token_2:function
 *  }
 * }
 * 
 * let pid = Pubsub.subscribe('login',data=>{})
 */
const Pubsub = {
  id: 1328,//订阅的唯一编号
  callbacks: {},
  subscribe: function (channel, callback) {
    let token = `token_${this.id++}`
    if (this.callbacks[channel]) this.callbacks[channel][token] = callback
    else this.callbacks[channel] = { [token]: callback }
    return token
  },
  publish: function (channel, data) {
    if (this.callbacks[channel]) {
      Object.values(this.callbacks[channel]).forEach(callback => {
        callback(data)
      })
    }
  },
  unscribe: function (flag) {
    //channel 或 pid 或undefind
    if (!flag) this.callbacks = {}
    else if (typeof flag === 'string') {
      //判断是否为token开头的
      if (flag.startsWith('token')) {
        //先要找channel
        let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
        if (callbackObj) delete callbackObj[flag]
      } else {
        delete this.callbacks[flag]
      }
    }
  }
}

export { EventBus, Pubsub }