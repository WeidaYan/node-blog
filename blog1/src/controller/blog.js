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

module.exports = {
    getList
}