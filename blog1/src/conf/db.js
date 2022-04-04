const env = process.env.NODE_ENV // 环境变量参数


// 配置
let MYSQL_CONF

if(env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'choubuyaolian@@2',
        port: '3306',
        database: 'myblog'
    }
}

if(env === 'production') {
    // 生产环境 应该是真实服务器配置
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'choubuyaolian@@2',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
} 