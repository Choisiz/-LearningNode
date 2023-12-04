const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const { user } = require("../models");

module.exports = (passport) => {
  //사용자식별정보 세션저장
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //세션에서 사용자식별정보 db에서 찾아 복원
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  local(passport);
  kakao(passport);
};
