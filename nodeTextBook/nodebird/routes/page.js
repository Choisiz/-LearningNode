const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

//프로필
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "내정보-NodeBird", user: req.user });
});

//회원가입
router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", {
    title: "회원가입 --NodeBird",
    user: req.user,
    joinError: req.flash("joinError"),
  });
});

//메인
router.get("/", (req, res) => {
  res.render("main", {
    title: "NodeBird",
    twits: [],
    user: req.user,
    joinError: req.flash("loginError"),
  });
});

module.exports = router;
