/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:27:59
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 21:34:55
 * @Description: 
 */
const http = require('http')

const PORT = 8000
const serverHandle = require('../app')
console.log(serverHandle)
const server = http.createServer(serverHandle)

server.listen(PORT)