const express = require("express");
const User = require("../schemas/user");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render("mongoose", { users });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
