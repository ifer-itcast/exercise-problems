const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');

module.exports = (req, res) => {
    // 1. 根据用户名查询数据
    const {
        username,
        password
    } = req.body;
    const sql = `SELECT * FROM ev_users WHERE username=?`;

    db.query(sql, username, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('登录失败');

        // 2. 判断用户输入的密码是否正确
        const compareResult = bcrypt.compareSync(password, results[0].password);
        if (!compareResult) {
            return res.cc('登录失败');
        }

        // 3. 对用户信息加密生成生成 token，剔除密码和头像等
        const user = {
            username
        };
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn
        });
        res.send({
            status: 0,
            message: '登录成功',
            token: `Bearer ${tokenStr}`
        });
    });
};