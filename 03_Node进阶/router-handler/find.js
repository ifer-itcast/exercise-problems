const db = require('../db');

module.exports = (req, res) => {
    const sql = `select * from ev_msg`;
    db.query(sql, (err, results) => {
        // SQL 语句执行失败
        if (err) return res.cc(err);
        // 新增文章分类成功
        res.send({
            status: 0,
            message: '查询留言成功！',
            data: results
        });
    });
};