/*
 * @Author: yanweida
 * @Date: 2020-08-28 10:37:39
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-28 11:27:28
 * @Description:
 */
const fs = require("fs");
const path = require("path");
console.log(__dirname);
// const fullFileName = path.resolve(__dirname, "files", "a.json");
// fs.readFile(fullFileName, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });

// callback方式获取一个文件的内容
function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, "files", fileName);
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data.toString())
  });
}


//Ceshi 
getFileContent('a.json', (aData) =>{
    console.log('a data', aData)
})
