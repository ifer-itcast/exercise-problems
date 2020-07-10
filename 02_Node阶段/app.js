const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

const datas = [{
        id: 0,
        msg: '吃饭'
    },
    {
        id: 1,
        msg: '睡觉'
    },
    {
        id: 2,
        msg: '打豆豆'
    }
];

// 增
app.post('/add', (req, res) => {
    const {
        msg
    } = req.body;
    datas.unshift({
        id: datas.length,
        msg
    });
    res.send(datas);
});

// 删
app.post('/delete', (req, res) => {

    const {
        id
    } = req.body;
    let idx = datas.findIndex(item => item.id == id);
    datas.splice(idx, 1);
    res.send(datas);
});

// 改
app.post('/edit', (req, res) => {
    const { id, msg } = req.body;
    datas.find(item =>item.id == id).msg = msg;
    res.send(datas);
});

// 查
app.get('/list', (req, res) => {
    res.send(datas);
});


app.listen(3000);