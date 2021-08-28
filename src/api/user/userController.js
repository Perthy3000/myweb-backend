const jwt = require("jsonwebtoken");
const userModel = require("./userModel");
const { success, fail } = require("./../../config/response");

const SECRET = process.env.SECRET || "";

class userController {
  async addUser(req, res) {
    try {
      // TODO: check data
      const { email, username, password } = req.body;
      if (!email || !username || !password) {
        fail(res, "Missing info");
      } else {
        const newUser = await userModel.addUser({ email, username, password });
        success(res, "User created", newUser);
      }
    } catch (error) {
      fail(res, error, 400);
    }
  }

  async login(req, res) {
    try {
      // TODO: check data
      const { email, password } = req.body;
      if (!email || !password) {
        fail(res, "Missing info");
      } else {
        const user = await userModel.findUser({ email: email });
        if (user) {
          const { username, password: user_password } = user;
          if (password === user_password) {
            const token = jwt.sign(username, SECRET);
            res.cookie("token", token, {
              maxAge: 24 * 60 * 60 * 1000,
              httpOnly: true,
            });
            success(res, "Login successful", { token: token });
            return;
          }
        }
        fail(res, "Wrong email or password");
      }
    } catch (error) {
      fail(res, error, 400);
    }
  }

  async logout(req, res) {
    res.clearCookie("token");
    success(res, "Logout successful");
  }

  async getUser(req, res) {
    try {
      // TODO: check data
      const { username } = req.params;
      if (!username) {
        fail(res, "Missing info");
      } else {
        const user = await userModel.findUser({ username: username });
        success(res, "User found", user);
      }
    } catch (error) {
      fail(res, error, 400);
    }
  }
}

module.exports = new userController();
