var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { engine } = require('express-handlebars');

var loginRouter = require('./routes/login');
var customerRouter = require('./components/customers/customer');
var orderRouter = require('./components/orders/order');
var revenueRouter = require('./components/revenue/revenue');
var manageProductsRouter = require('./components/products/manageProducts');
var resetPasswordRouter = require('./routes/resetPassword');

var app = express();

// view engine setup
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/customer', customerRouter);
app.use('/order', orderRouter);
app.use('/revenue', revenueRouter);
app.use('/manageProducts', manageProductsRouter);
app.use('/resetPassword', resetPasswordRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {layout: false});
});

module.exports = app;
