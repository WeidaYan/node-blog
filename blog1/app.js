/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:24:03
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 21:27:39
 * @Description: 
 */
const serverHandle = (req , res) => {
    // 设置返回格式JSON
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: 'ywd',
        site: 'home',
        env: process.env.NODE_ENV
    }

    res.end(
        JSON.stringify(resData)
    )
}

// common.js模块规范
module.exports = serverHandle