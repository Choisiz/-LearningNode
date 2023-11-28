var express = require("express");
var { User, Comment } = require("../models");

var router = express.Router();

/* GET users listing. */
router.get("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findAll({
      include: {
        model: User,
        where: { id: req.params.id },
      },
    });
    console.log(comment);
    res.json(comment);
  } catch (e) {
    console.error(e);
    next(error);
  }
  res.send("respond with a resource");
});

router.post("/", async (req, res, next) => {
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    res.status(201).json(comment);
  } catch (e) {
    console.error(e);
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.update({
      comment: req.body.comment,
      where: { id: req.params.id },
    });
    console.log(comment);
    res.status(201).json(comment);
  } catch (e) {
    console.error(e);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.destroy({
      where: { id: req.params.id },
    });
    console.log(comment);
    res.status(201).json(comment);
  } catch (e) {
    console.error(e);
    next(error);
  }
});

module.exports = router;
