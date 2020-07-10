const db = require('../db');

module.exports = (req, res) => {
    const sql = `insert into ev_msg set ?`;
    db.query(sql, req.body, (err, results) => {
        // SQL 语句执行失败
        if (err) return res.cc(err);
        // SQL 语句执行成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('新增留言失败！');
        // 新增文章分类成功
        res.cc('新增留言成功！', 0);
    });
};