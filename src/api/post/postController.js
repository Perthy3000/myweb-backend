const { fail, success } = require("../../config/response");
const postModel = require("./postModel");

class PostController {
  async createPost(req, res) {
    const { content } = req.body;
    const user = req.user;
    if (!content) {
      fail(res, "Missing info");
    }
    try {
      const newPost = await postModel.createPost({ post_owner: user, content });
      success(res, "Create post successful", newPost);
    } catch (error) {
      fail(res, error);
    }
  }

  async getAllPosts(req, res) {
    // TODO: check input
    const { username } = req.query;
    const posts = await postModel.getAllPosts(username);
    success(res, "Get post successful", posts);
  }
}

module.exports = new PostController();
