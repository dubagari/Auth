import express from "express";
import { Signup } from "../controller/user.signup.js";

const router = express.Router();

router.post("/signup", Signup);

export default router;
