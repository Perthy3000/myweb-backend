const route = require("express")["Router"]();
const { validate } = require("../../functions/validate");
const postController = require("./postController");

route.post("/create-post", validate, postController.createPost);
route.get("/get-post", postController.getAllPosts);

module.exports = route;
