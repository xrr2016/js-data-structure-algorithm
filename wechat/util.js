'use strict'

var xml2js = require('xml2js'),
    Promise = require('bluebird'),
    tpl = require('./tpl')


exports.parseXMLAsync = function(xml) {
    return new Promise(function(resolve, reject) {
        xml2js.parseString(xml, {
            trim: true
        }, function(err, content) {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}


function formatMsg(res) {
    var msg = {}
    if (typeof res === 'object') {
        var keys = Object.keys(res)

        for (var i = 0; i < keys.length; i++) {
          var item = res[keys[i]]
            var key = keys[i]
            if (!(item instanceof Array) || item.length === 0) {
                continue
            }
            if (item.length === 1) {
                var val = item[0]
                if (typeof val === 'object') {
                    msg[key] = formatMsg(val)
                } else {
                    msg[key] = (val || '').trim()
                }
            } else {
                msg[key] = []
                for (var j = 0,k = item.length; j < k; j++) {
                    msg[key].push(formatMsg(item[j]))
                }
            }
        }
    }
    return msg
}

exports.formatMsg = formatMsg

exports.tpl = function(content,msg){
  var info = {}
  var type = 'text'
  var fromUserName = msg.FromUserName
  var toUserName   = msg.ToUserName

  if(Array.isArray(content)){
    type = 'news'
  }

  type = content.type || type

  info.content = content
  info.createTime = new Date().getTime()
  info.msgType = type
  info.toUserName = fromUserName
  info.fromUserName = toUserName

  return tpl.compiled(info)
}
