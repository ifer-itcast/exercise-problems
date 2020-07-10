const bcrypt = require('bcryptjs');
const db = require('../db');


module.exports = (req, res) => {
    let { username, password } = req.body;
    // 1. 用户名或密码校验
    
    // 2. 检测用户名是否被占用
    const sql = `SELECT * FROM ev_users where username=?`;
    db.query(sql, username, function(err, results) {
        if (err) {
            // return res.send({ status: 1, message: err.message });
            return res.cc(err);
        }
        if (results.length > 0) {
            return res.cc('用户名被占用');
        }
        // 3. 对密码进行加密处理
        password = bcrypt.hashSync(password, 10);
        // 4. 插入
        const sql = `INSERT into ev_users set ?`;
        db.query(sql, {
            username,
            password: password
        }, function(err, results) {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('注册用户失败，请稍后重试');
            // 注册成功
            res.cc('注册成功', 0);
        });
    });
}