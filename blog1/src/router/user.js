/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:46:25
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 22:00:05
 * @Description:
 */
const handleUserRouter = (req, res) => {
    const method = req.method; // GET POST
  
    
    // 新建一篇博客
    if (method === "POST" && req.path === "/api/user/login") {
      return {
        msg: "这是登录的接口",
      };
    }
  };
  
  module.exports = handleUserRouter;