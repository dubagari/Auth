import User from "../model/User.model.js";
import bcypt from "bcryptjs";
export const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("uers created successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
