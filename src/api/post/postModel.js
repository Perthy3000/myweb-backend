const Post = require("../../db/model/Post");

class PostModel {
  createPost(obj) {
    return Post.create(obj);
  }

  getAllPosts(user) {
    if (user) {
      return Post.find({ post_owner: user });
    } else {
      return Post.find({}, null, { limit: 20 });
    }
  }
}

module.exports = new PostModel();
