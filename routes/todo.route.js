// routes/todo.route.js

import express from "express";
import { 
    readAllTodoData,
    readTodayTodoData,
    createTodoData,
 } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req,res) => readAllTodoData(req,res));
//GETで既に登録しているTodoの全てを返す↑
todoRouter.get("/today", (req,res) => readTodayTodoData(req,res));
//GETで既に登録しているTodoのうち今日が締切のものを返す↑

todoRouter.post("/", (req,res) => createTodoData(req,res));