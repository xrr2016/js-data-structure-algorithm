'use strict'

var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')

var config = {
    wechat: {
        appID: 'wxf397a39d716ec933',
        appSecret: '82639ae911d6eda210f031b8c32b14ef',
        token: 'tangram',
        getAccessToken:function(){
          return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function(data){
          data = JSON.stringify(data)
          return util.writeFileAsync(wechat_file,data)
        }
    }
}

module.exports = config