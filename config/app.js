var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var productRouter = require('../app/routes/productRoutes');
var homerouter= require('../app/routes/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',homerouter);
app.use('/api', productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);

  // Send the error response
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });

});

module.exports = app;
