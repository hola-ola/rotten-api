const { Router } = require("express");
const Movie = require("../models/Movie.model");

const router = Router();

router.get("/", (req, res) => {
  Movie.find({}).then((allMovies) => {
    res.json(allMovies);
  });
});

module.exports = router;
