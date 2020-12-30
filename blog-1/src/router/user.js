const { login } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if(method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
  }
}

module.exports = handleUserRouter