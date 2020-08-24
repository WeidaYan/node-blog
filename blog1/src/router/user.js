/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:46:25
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-24 22:00:05
 * @Description:
 */
const handleUserRouter = (req, res) => {
    const method = req.method; // GET POST
    const url = req.url;
    const path = url.split("?")[0];
  
    
    // 新建一篇博客
    if (method === "POST" && path === "/api/user/login") {
      return {
        msg: "这是登录的接口",
      };
    }
  };
  
  module.exports = handleUserRouter;