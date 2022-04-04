/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:46:25
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 22:00:05
 * @Description:
 */

const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
    const method = req.method; // GET POST
  
    
    // 新建一篇博客
    if (method === "POST" && req.path === "/api/user/login") {
      const { username, password} = req.body
      const result = loginCheck(username, password)
     return result.then(data => {
       if(data.username) {
         return new SuccessModel('登录成功')
       }
       return new ErrorModel('登录失败')
     })
    }
  };
  
  module.exports = handleUserRouter;