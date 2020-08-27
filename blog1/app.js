/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:24:03
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 21:27:39
 * @Description: 
 */
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req , res) => {
    // 设置返回格式JSON
    res.setHeader('Content-type', 'application/json')

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if(blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // 处理user路由
    const userData = handleUserRouter(req, res)
    if(userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    // 未命中路由 返回404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 not Ffffound\n")
    res.end()
}

// common.js模块规范
module.exports = serverHandle