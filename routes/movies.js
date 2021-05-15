const { Router } = require("express");
const Movie = require("../models/Movie.model");

const router = Router();

router.get("/", (req, res) => {
  Movie.find({}).then((allMovies) => {
    res.json(allMovies);
  });
});

router.get("/:allTheSingleMovies", (req, res) => {
  Movie.findById(req.params.allTheSingleMovies).then((movie) => {
    res.json(movie);
  });
});

module.exports = router;
