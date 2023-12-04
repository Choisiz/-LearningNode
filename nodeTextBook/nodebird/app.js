const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan"); //http로깅지원
const path = require("path"); //파일 및 디렉토리 경로조작
const session = require("express-session"); //사용자세션처리
const nunjucks = require("nunjucks");
const flash = require("connect-flash"); //플래시메세지: 일회성메세지 저장,표시
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();
const pageRouter = require("./routes/page");
const { sequelize } = require("./models");
const passportConfig = require("./passport");

const app = express();
sequelize.sync();
passportConfig(passport);
//app.set(): 설정을 위한 메세드
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

//app.use():미들웨이 사용위한 메서드
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOOKIE_SECRET));
app.use(
  session({
    resave: false, //세션변경안되도 세션저장소에 다시 저장할지여부
    saveUninitialized: false, //초기화되지않은 세션을 저장할지 여부
    secret: process.env.COOOKIE_SECRET, //세션비밀키
    cookie: {
      httpOnly: true, //브라우저 js에서 접근x
      secure: false, //https연결에만여부, 개발은false, 배포는 true 권장
    },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", pageRouter);
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
