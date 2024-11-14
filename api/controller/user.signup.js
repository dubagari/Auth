import User from "../model/User.model.js";
import bcypt from "bcryptjs";
import { errorHandler } from "../util/errorhandler.js";
export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};
