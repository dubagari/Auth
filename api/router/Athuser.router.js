import express from "express";
import { Signup, Singin } from "../controller/Auth.user.js";

const router = express.Router();

router.post("/signup", Signup);

router.post("/signin", Singin);

export default router;
