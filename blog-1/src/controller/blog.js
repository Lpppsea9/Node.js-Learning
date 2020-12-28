const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id:1,
      title:'标题A',
      content: '内容A',
      createTime: 1609136868752,
      author: 'liupeng'
    },
    {
      id:2,
      title:'标题B',
      content: '内容B',
      createTime: 1609136959905,
      author: 'liupeng2'
    }
  ]
}

module.exports = { //为什么是对象？ 因为有多个函数
  getList,
}