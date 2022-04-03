const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'choubuyaolian@@2',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行 sql 语句
const sql = 'select * from users;'
// const sql = 'select password from users;'
// const sql = `update users set realname='李四2' where username='lisi';`
con.query(sql, (err, result) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭连接
con.end()