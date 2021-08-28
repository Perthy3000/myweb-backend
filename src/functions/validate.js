const jwt = require("jsonwebtoken");
const { fail } = require("../config/response");

const SECRET = process.env.SECRET || "";

exports.validate = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } else {
    fail(res, "Token is not found", 400);
  }
};
