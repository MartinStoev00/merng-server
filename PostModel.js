const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    require: true,
  },
  comments: {
    type: [
      {
        body: String,
        username: String,
        createdAt: Date,
      },
    ],
    required: true,
  },
  likes: {
    type: [
      {
        username: String,
        createdAt: String,
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("Post", PostSchema);
