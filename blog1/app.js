/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:24:03
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-28 15:13:38
 * @Description:
 */
const querystring = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");


const serverHandle = (req, res) => {
  // 设置返回格式JSON
  res.setHeader("Content-type", "application/json");

  // 获取path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析query
  req.query = querystring.parse(url.split("?")[1]);
  // 路由业务逻辑拆分出去，分层

  getPostData(req).then((postData) => {
    req.body = postData;

    // 处理blog路由
    // const blogData = handleBlogRouter(req, res);
    // if (blogData) {
    //   res.end(JSON.stringify(blogData));
    //   return;
    // }

    const blogResult = handleBlogRouter(req, res)
    if(blogResult) {
        blogResult.then(blogData => {
          res.end(JSON.stringify(blogData));
        })
        return
    }
    
    // 处理user路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    // 未命中路由 返回404
    res.writeHead(404, { "Content-type": "text/plain" }); // text/plain默认纯文本
    res.write("404 not Ffffound\n");
    res.end();
  });
};

// 用于处理postdata
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["Content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

// common.js模块规范
module.exports = serverHandle;
