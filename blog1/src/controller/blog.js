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

module.exports = {
    getList,
    getDetail
}