const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    post_owner: String,
    content: String,
    created_at: { type: Date, default: Date.now() },
  },
  { collection: "Post" }
);

module.exports = mongoose.model("post", postSchema);
