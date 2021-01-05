// 获取博客列表
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

// 博客详情
const getDetail = (id) => {
  // 先返回假数据
  return {
    id:1,
    title:'标题A',
    content: '内容A',
    createTime: 1609136868752,
    author: 'liupeng'
  }
}

// 新建博客
const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象, 包含 title content 属性
    console.log('newBlog blogData...', blogData);

    return {
        id: 3 // 表示新建博客，插入到数据表里面的 id
    }
}

// 更新一篇博客
const updateBlog = (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一个博客对象，包含 title content 属性
    // console.log('update blog', id, blogData);

    return true
}

// 删除一篇博客
const delBlog = (id) => {
    // id就是要删除博客的 id
    return true
}

module.exports = { //为什么是对象？ 因为有多个函数
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}



/* 
路由 和 API

API:
    前端和后端、不同端（子系统）之间对接的一个术语
    url(路由) `/api/blog/list` get,输入，输出

路由：
    API的一部分
    后端系统内部的一个模块
 
 */
