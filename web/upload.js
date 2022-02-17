'use strict'
// 引入scp2
let client = require('scp2')
client.scp('./dist/', { // 本地打包文件的位置
  'host': '101.43.111.126', // 服务器的IP地址
  'port': '3000', // 服务器端口
  'username': 'root', // 用户名
  'password': 'lcl@2019070270', // 密码
  'path': '/root/projects/jeecg/' // 项目部署的服务器目标位置
}, err => {
  if (!err) {
    console.log('项目发布完毕!')
  } else {
    console.log('err', err)
  }
})
