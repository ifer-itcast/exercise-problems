const db = require('../db');

module.exports = (req, res) => {
    const sql = `delete from ev_msg where id=${req.body.id}`;
    db.query(sql, req.body, (err, results) => {
        // SQL 语句执行失败
        if (err) return res.cc(err);
        // SQL 语句执行成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('删除留言失败！');
        // 新增文章分类成功
        res.cc('删除留言成功！', 0);
    });
};