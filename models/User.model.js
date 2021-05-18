const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profilePic: String,
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  role: {
    type: String,
    enum: ["admin", "regular"],
  },
});

const User = model("User", userSchema);

module.exports = User;
