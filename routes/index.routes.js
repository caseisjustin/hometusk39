import { Router } from "express";
import usersRouter from "./users.routes.js"
import booksRouter from "./books.routes.js"

const router = Router()
router.use("/users", usersRouter)
router.use("/books", booksRouter)


export default router;