const User = require("../../db/model/User");

class userModel {
  addUser(obj) {
    return User.create(obj);
  }

  findUser(filter) {
    return User.findOne(filter);
  }
}

module.exports = new userModel();
