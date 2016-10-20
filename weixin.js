'use strict'

exports.reply = function*(next) {
    var message = this.weixin
    if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            if (message.EventKey) {
                console.log(`扫描二维码进来: ${message.EventKey} ${message.Ticket}`)
            }
            this.body = `哈哈,你订阅了`
        } else if (message.Event === 'unsubscribe') {
            console.log(`取消订阅`)
            this.body = `取消订阅`
        } else if (message.Event === 'LOCATION') {
            this.body = `你的位置是: ${message.Latitude} / ${message.longitute}  - ${message.Precision}`
        } else if (message.Event === 'CLICK') {
            this.body = `你点击了菜单:${message.EventKey}`
        } else if (message.Event === 'SCAN') {
            console.log(`关注后扫二维码:${message.EventKey} : ${message.Ticket}`)
            this.body = '扫二维码吧!'
        }else if (message.Event === 'VIEW') {
          this.body = `你点击了菜单中的链接 : ${message.EventKey}`
        }
    } else if(message.MsgType === 'text'){
      var content = message.Content
      var reply = `你说的'${content}'太复杂了`
      if (content === '1') {
        reply = '第一'
      }else if (content === '2') {
        reply = '第二'
      }else if(content === '3'){
        reply = '第三'
      }
      this.body = reply
    }

    yield next()

}
