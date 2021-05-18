const router = require("express").Router();
const User = require("../models/User.model");

router.post("/signup", (req, res) => {
  // First validate the req.body
  // Checking if has minimum amount of characters
  // Checking if its a strong password (perhaps)
  // Hash a password
  // Check if user already exists with either username or email
  // IF SO: ERROR
  // Create a user with that data + hashed password
  // LogIn the user immediately
  // IF ALLES GUT: send the user back to the frontend
});

module.exports = router;
