var createError = require("http-errors");
var express = require("express");
const db = require("./db/mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { engine } = require("express-handlebars");
const passport = require("./auth/passport");
const session = require('express-session');

var loginRouter = require("./components/auth/login");
var logoutRouter = require("./components/auth/logout");
const registerRouter = require("./components/auth/register");
const profileRouter = require("./components/profile/profile");
var customerRouter = require("./components/customers/customer");
var orderRouter = require("./components/orders/order");
var revenueRouter = require("./components/revenue/revenue");
var manageProductsRouter = require("./components/products/manageProducts");
var resetPasswordRouter = require("./routes/resetPassword");
var adminRouter = require("./components/admins/admin");

const itemRouter = require("./routes/item");

var app = express();

// view engine setup
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//connect DB
db.connect();

//session config
app.use(session({ secret: "golddogs" }));
app.use(passport.initialize());
app.use(passport.session());

//Truyền req.user
app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
})


app.use("/", loginRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/register", registerRouter);
app.use("/profile", profileRouter);
app.use("/customer", customerRouter);
app.use("/admins", adminRouter);
app.use("/order", orderRouter);
app.use("/revenue", revenueRouter);
app.use("/manageProducts", manageProductsRouter);
app.use("/resetPassword", resetPasswordRouter);

app.use(itemRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { layout: false });
});

module.exports = app;
