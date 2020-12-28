const { getList, getDetail } = require('../controller/blog') //导入方法
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method //GET POST

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const data = getDetail(id)
  }

  // 新建一篇博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  // 更新一篇博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }

  // 删除一篇博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter