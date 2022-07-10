// routes/todo.route.js

import express from "express";
import { readAllTodoData } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req,res) => readAllTodoData(req,res));
//GETで既に登録しているTodoの全てを返す↑