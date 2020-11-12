const express = require('express')

const userHandler=require('../router_handler/user')

const router = express.Router()
//注册接口
router.post('/reguser',userHandler.regUser )
//登录接口
router.post('/login',userHandler.login )
//导出模块
module.exports=router