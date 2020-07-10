const express = require('express');
const user = express.Router();
const expressJoi = require('@escook/express-joi');
const {
    reg_login_schema
} = require('../schema/user');

// 注册
user.post('/reguser', expressJoi(reg_login_schema), require('../router-handler/reguser'));
// 登录
user.post('/login', expressJoi(reg_login_schema), require('../router-handler/login'));

// 增
user.post('/add', require('../router-handler/add'));
// 删
user.post('/del', require('../router-handler/del'));
// 改
user.post('/edit', require('../router-handler/edit'));
// 查
user.get('/find', require('../router-handler/find'));

module.exports = user;