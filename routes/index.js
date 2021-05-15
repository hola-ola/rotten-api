const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ user: "ola" });
});

const moviesRouter = require("./movies");

router.use("/movies", moviesRouter);

module.exports = router;
