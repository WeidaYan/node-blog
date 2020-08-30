/*
 * @Author: yanweida
 * @Date: 2020-08-28 10:19:23
 * @LastEditors: yanweida
 * @LastEditTime: 2020-08-28 10:24:30
 * @Description: 
 */
const getList = (author, keyword) => {
    // 先返回假数据 (格式是正确的) 
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1598545437216,
            author: 'xiaoP'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1598545437216,
            author: 'ada'
        },
    ]
}

const getDetail = (id) => {
    // 先返回假数据 (格式是正确的) 
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1598545437216,
            author: 'xiaoP'
        }
    ]
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title content属性

    return {
        id: 3 //表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id, blogData={}) => {
    // id就是要更新博客的id
    // blogData 是一个博客对象， 包含title content属性
    return true
}

const delBlog = (id) => {
    // id就是要删除博客的id
    
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}