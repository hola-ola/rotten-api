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
  profilePic: {
    type: String,
    default:
      "https://i.pinimg.com/originals/77/d1/89/77d1894aa66cef65c31b875bd03a6b9a.jpg",
  },
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  role: {
    type: String,
    enum: ["admin", "regular"],
    default: "regular",
  },
});

const User = model("User", userSchema);

module.exports = User;
