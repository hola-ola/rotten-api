const router = require("express").Router();
const User = require("../models/User.model");
const Session = require("../models/Session.model");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
  // First validate the req.body
  const { username, email, password } = req.body;
  console.log("req.body:", req.body);

  if (!username || !email || !password) {
    // WE SHOULD DISPLAY AN ERROR
  }

  if (username.length < 4) {
    // WE SHOULD DISPLAY AN ERROR
  }

  if (email.length < 8) {
    // we should display an error
  }

  if (password.length < 8) {
    // we should display an error
  }

  // Checking if has minimum amount of characters
  // Checking if its a strong password (perhaps)
  // IF IT REACHES HERE: WE VALIDATED THE REQ.BODY

  User.findOne({ $or: [{ username }, { email }] })
    .then((singleUser) => {
      // Check if user already exists with either username or email
      if (singleUser) {
        // WE SHOULD DISPLAY AN ERROR
      }

      const salt = bcrypt.genSaltSync();

      const newPassword = bcrypt.hashSync(password, salt);

      User.create({
        username,
        email,
        password: newPassword,
      }).then((createdUser) => {
        Session.create({ user: createdUser._id })
          .then((createdSession) => {
            res.json({ user: createdUser, accessToken: createdSession._id });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
      });
    })
    .catch((err) => {
      console.log("err:", err);
      // DISPLAY ANOTHER KIND OF ERROR
      res.status(500).json({ message: err.message });
    });
  // Hash a password
  // IF SO: ERROR
  // Create a user with that data + hashed password
  // LogIn the user immediately
  // IF ALLES GUT: send the user back to the frontend
});

module.exports = router;
