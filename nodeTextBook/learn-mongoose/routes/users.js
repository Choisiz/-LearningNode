var express = require("express");
const User = require("../schemas/user");
var router = express.Router();

/* GET users listing. */
//? router.route('/').get(()=>{}).post(()=>{})로 줄일수도 있다.
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    const result = user.save();
    console.log(result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
