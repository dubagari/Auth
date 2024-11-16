import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../util/errorhandler.js";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const Singin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const valiidateUser = await User.findOne({ email });
    if (!valiidateUser) return next(errorHandler(404, "user not found!"));

    const validatePassword = bcryptjs.compareSync(
      password,
      valiidateUser.password
    );

    if (!validatePassword) return next(errorHandler(401, "wrong Credentails!"));

    const token = jwt.sign({ id: valiidateUser }, process.env.scret_key);
    const { password: pass, ...rest } = valiidateUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {}
};
