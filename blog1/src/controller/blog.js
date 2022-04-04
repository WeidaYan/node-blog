/*
 * @Author: yanweida
 * @Date: 2020-08-28 10:19:23
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-28 10:24:30
 * @Description: 
 */
const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    // 1=1用来占位 防止后面变量为空 语法报错
    let sql = `select * from blogs where 1=1 `
    if(author) {
        sql += `and author='${author}' `
    }
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    // 返回 promise
    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title content author属性
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()
    console.log('blogData', blogData)

    const sql = `insert into blogs (title, content, author, createtime) values ('${title}', '${content}', '${author}', '${createtime}');`
    return exec(sql).then(insertData => {
        console.log('insertData is' , insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData={}) => {
    // id就是要更新博客的id
    // blogData 是一个博客对象， 包含title content属性
    const title = blogData.title
    const content = blogData.content

    const sql = `update blogs set title='${title}', content='${content}' where id=${id};`

    return exec(sql).then(updateData => {
        console.log('updateData is' , updateData)
        if(updateData.affectedRows > 0) {
            return true
        }
        return false
    })
   
}

const delBlog = (id, author) => {
    // id就是要删除博客的id
    const sql = `delete from blogs where id='${id}' and author='${author}';`
    
    return exec(sql).then(deleteData => {
        console.log('deleteData is' , deleteData)
        if(deleteData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}