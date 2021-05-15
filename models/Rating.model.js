const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
