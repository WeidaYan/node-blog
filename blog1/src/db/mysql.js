/*
 * @Author: yanweida 
 * @Date: 2022-04-04 16:04:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-01-08 21:07:42
 */
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建链接对象

const con = mysql.createConnection(MYSQL_CONF)

// 开始链接

con.connect()

// 统一执行sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}




module.exports = {
    exec,
    escape: mysql.escape
} 