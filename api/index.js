import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(() => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running at the port 3000!");
});
