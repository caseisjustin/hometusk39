import { Router } from "express";
import { getAllbooks } from "../controller/books.controller.js";
const router = Router()

router.get("/", getAllbooks)

export default router;