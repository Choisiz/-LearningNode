const express = require("express");

const router = express.Router();

//프로필
router.get("/profile", (req, res) => {
  res.render("profile", { title: "내정보 __Nodebird", user: null });
});

//회원가입
router.get("/join", (req, res) => {
  res.render("join", {
    title: "회원가입 __Nodebird",
    user: null,
    joinError: req.flash("joinError"),
  });
});

//메인
router.get("/", (req, res) => {
  res.render("main", {
    title: "Nodebird",
    twits: [],
    user: null,
    joinError: req.flash("loginError"),
  });
});

module.exports = router;
