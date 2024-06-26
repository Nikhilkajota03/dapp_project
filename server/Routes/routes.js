import express from "express";
const router = express.Router();
import { addMessage, getMessage } from "../controller/controller.js";

router.post("/message", addMessage);

router.get("/getMessage", getMessage);

export default router;
