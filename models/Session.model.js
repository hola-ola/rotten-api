const { Schema, model } = require("mongoose");

const oneMonth = 1000 * 60 * 60 * 24 * 30;

const sessionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    index: { expires: oneMonth },
  },
});

const Session = model("Session", sessionSchema);

module.exports = Session;
