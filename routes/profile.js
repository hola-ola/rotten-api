const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.put(`/update`, isLoggedIn, (req, res) => {
  const { username, email } = req.body;

  if (username.length < 8) {
    // deal with it
  }

  if (email.length < 8) {
    //deal with it
  }

  User.find({ $or: [{ username }, { email }] }).then((allUsers) => {
    const allNotMe = allUsers.filter(
      (eachUser) => eachUser._id.toString() !== req.user._id.toString()
    );
    if (allNotMe.length) {
      // We can't update
    }
    User.findByIdAndUpdate(
      req.user._id,
      { email, username },
      { new: true }
    ).then((newUser) => {
      res.json({ user: newUser });
    });
  });
});

module.exports = router;
