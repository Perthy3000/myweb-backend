const route = require("express")["Router"]();
const { validate } = require("../../functions/validate");
const userController = require("./userController");

route.post("/add-user", userController.addUser);
route.post("/login", userController.login);
route.post("/logout", validate, userController.logout);
route.get("/:username", userController.getUser);

module.exports = route;
