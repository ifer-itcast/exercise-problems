const express = require('express');
const router = express.Router();

// 增
router.post('/add', require('./add'));

// 删
router.get('/del', require('./del'));

// 改
router.post('/modify', require('./modify'));

// 查
router.get('/list', require('./list'));

module.exports = router;