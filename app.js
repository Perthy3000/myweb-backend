const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
dotenv.config({ path: path.join(__dirname, ".env") });
const { connectDb } = require("./src/db/connect");

const userRouter = require("./src/api/user/userRouter");
const postRouter = require("./src/api/post/postRouter");

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ reply: "It is working!" });
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(PORT, () => {
  console.log(
    `Server started at \x1b[36m%s\x1b[0m`,
    `http://localhost:${PORT}`
  );
});
