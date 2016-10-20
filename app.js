'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g')
var config = require('./config')
var weixin = require('./weixin')
var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')



var app = new Koa()

app.use(wechat(config.wechat,weixin.reply))


app.listen(3000)
console.log(`listening 3000`)
