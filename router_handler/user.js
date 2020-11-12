//用户注册处理函数
const regUser = (req, res) => {
  res.send('reguser ok')
}
//用户登录处理函数
const login=(req, res) => {
  res.send('login ok')
}


exports.regUser = regUser
exports.login=login