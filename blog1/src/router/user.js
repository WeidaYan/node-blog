/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:46:25
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 22:00:05
 * @Description:
 */

const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require("../model/resModel");



const handleUserRouter = (req, res) => {
    const method = req.method; // GET POST
  
    
    // 登录 测试
    if (method === "POST" && req.path === "/api/user/login") {
      const { username, password} = req.body
      // const { username, password} = req.query
      const result = login(username, password)
     return result.then(data => {
       if(data.username) {
         
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname

        console.log('req.session is', req.session)

        return new SuccessModel('登录成功')
       }
       return new ErrorModel('登录失败')
     })
    }

    // // 登录验证的测试
    // if (method === "GET" && req.path === "/api/user/login-test") {
    //   console.log('req.session', req.session)
    //   if(req.session.username) {
    //     return Promise.resolve(new SuccessModel({
    //       session: req.session
    //     })) 
    //   }
    //   return Promise.resolve(new ErrorModel('尚未登录'))
    // }
  };
  
  module.exports = handleUserRouter;