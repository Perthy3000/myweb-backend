const User = require("../../db/model/User");

class userModel {
  createUser(obj) {
    return User.create(obj);
  }

  findUserByEmail(email) {
    return User.findOne(email);
  }
}

module.exports = new userModel();
