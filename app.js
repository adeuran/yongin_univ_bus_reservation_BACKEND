const createError = require('http-errors');
const express = require('express');
//const cors = require('cors'); // CORS 미들웨어 객체 선언
const path = require('path');
const logger = require('morgan');
const routes = require('./routes/routes');
const app = express();
const errorHandler = require('./middleware/error-handler');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors());  // CORS 미들웨어 등록

routes.register(app);  // 라우팅 목록 등록

// 404도 오류로 인식하고 처리
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(errorHandler);

module.exports = app;
