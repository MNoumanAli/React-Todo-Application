import express from "express";
import {login, signup,getTodo, createTodo, deleteTodo, updateTodo} from "../controllers/controllers.js";
import authorization from "../middlewares/authorization.js"

const router = express.Router()

router.get('/getTodos' , authorization, getTodo)
router.post('/signup' , signup)
router.post('/login' , login)
router.post('/create' , authorization, createTodo)
router.put('/update', authorization, updateTodo)
router.post('/del' , authorization, deleteTodo)

export default router