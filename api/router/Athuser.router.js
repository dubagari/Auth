import express from "express";
import { Signup, Singin, google } from "../controller/Auth.user.js";

const router = express.Router();

router.post("/signup", Signup);

router.post("/signin", Singin);

router.post("/google", google);

export default router;
