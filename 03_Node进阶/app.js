const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/user');

const joi = require('@hapi/joi');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.cc = (err, status=1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    };
    next();
});

const expressJWT = require('express-jwt');
const config = require('./config');

app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }));

app.use('/api', userRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err); // 数据验证失败
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败');
    res.cc(err); // 未知错误
});

app.listen(3000);