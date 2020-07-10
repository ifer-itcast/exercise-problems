const db = require('../db');

module.exports = (req, res) => {
    const { id, msg } = req.body;
    const sql = `update ev_msg set msg='${msg}' where id=${id}`;
    db.query(sql, (err, results) => {
        // SQL 语句执行失败
        if (err) return res.cc(err);
        // SQL 语句执行成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('编辑留言失败！');
        // 新增文章分类成功
        res.cc('编辑留言成功！', 0);
    });
};