/*
 * @Author: yanweida
 * @Date: 2020-08-24 21:24:03
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-28 15:13:38
 * @Description:
 */
const { mainModule } = require("process");
const querystring = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");


// 获取 cookie的 过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.toGMTString()', d.toGMTString())
  return d.toGMTString()
}

// 用于处理 post data
const SESSION_DATA = {}

const serverHandle = (req, res) => {
  // 设置返回格式JSON
  res.setHeader("Content-type", "application/json");

  // 获取path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析query
  req.query = querystring.parse(url.split("?")[1]);

  // 解析cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || '' // k1=v11;k2=v2;k3=v3
  cookieStr.split(";").forEach(item => {
    if(!item) {
      return
    }
    const arr = item.split("=")
    const key = arr[0]
    const val = arr[1]
    req.cookie[key] = val
  })
  console.log('req.cookie is', req.cookie)

  // 解析 seesion
  let needSetCookie = false
  let userId = req.cookie.userid
  if(userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {}
    }
  }
  else {
    needSetCookie = true
    userId = `${Date.now()}_${Math.random()}`
    SESSION_DATA[userId] = {}
  }
  req.session = SESSION_DATA[userId]

  

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
          if(needSetCookie) {
          // 后端操作cookie httpOnly只能后端改 前端不能改
            res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)

          }
          res.end(JSON.stringify(blogData));
        })
        return
    }
    
    // 处理user路由
    // const userData = handleUserRouter(req, res);
    // if (userData) {
    //   res.end(JSON.stringify(userData));
    //   return;
    // }
    const userResult = handleUserRouter(req, res);
    if(userResult) {
      userResult.then(userData => {
        if(needSetCookie) {
          // 后端操作cookie httpOnly只能后端改 前端不能改
          res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)

        }
        res.end(JSON.stringify(userData))
      })
      return
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
