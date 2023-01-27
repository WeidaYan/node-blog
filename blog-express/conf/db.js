const env = process.env.NODE_ENV // 环境变量参数


// 配置
let MYSQL_CONF
let REDIS_CONF

if(env === 'dev') {
    // mysql
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'choubuyaolian@@2',
        port: '3306',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
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

    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
} 