exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};
/*jwt.verify(token, secretOrPublicKey, [options, callback])*/
//token:검증할 JWT 토큰
//secretOrPublicKey:토큰의 서명을 확인하는 데 사용되는 비밀 키 또는 공개 키
//options:옵션 객체로, 알고리즘, 토큰의 발급자 등을 지정
//callback:콜백 함수로, 비동기적으로 검증을 수행

exports.verifyToken = (req, res, next) => {
  try {
    req.locals.decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    return next();
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      //유효기간초과
      return res.status(419).json({ code: 419, message: "토큰만료" });
    }
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰",
    });
  }
};
