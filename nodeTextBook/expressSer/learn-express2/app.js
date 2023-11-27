var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//var bodyParser = require("body-parser"); //익스프레스 3.16.0 버전내장
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const session = require("express-session");
var flash = require("connect-flash");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  console.log(req.url, "im meddleware");
  next();
});

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //body-parser
app.use(express.urlencoded({ extended: false })); //body-parser, false:노드쿼리스트링사용, true: qs
//app.use(bodyParser.raw()) :본문이 버퍼데이터
//app.use(bodyParser.text()): 본문이 텍스트데이터
app.use(cookieParser("secret code"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret code",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(flash());

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
  res.render("error");
});

module.exports = app;
