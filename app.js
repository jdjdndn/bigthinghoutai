const express = require('express')
const app = express()
//导入跨域模块
const cors = require('cors')
//跨域中间件
app.use(cors())
//解析表单提交格式
app.use(express.urlencoded({ extended: false }))
//导入自定义模块
const userRouter = require('./router/user')
//注册全局中间件
app.use('/api', userRouter)
//监听8080端口
app.listen(8080, () => console.log('127.0.0.1:8080'))