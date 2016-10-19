'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g')

var config = {
    wechat: {
        appID: 'wxf397a39d716ec933',
        appSecret: '82639ae911d6eda210f031b8c32b14ef',
        token: 'tangram'
    }
}

var app = new Koa()

app.use(wechat(config.wechat))


app.listen(8080)
console.log(`listening 8080`)
