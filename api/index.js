import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./router/user.router.js";
import signupRouter from "./router/user.signup.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
app.use("/api/user", signupRouter);

app.listen(3000, () => {
  console.log("server is running at the port 3000!");
});
