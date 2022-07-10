// controllers/todo.controller.js

import { getAllTodoData } from "../services/todo.service.js";


export const readAllTodoData = async (req, res, next) => {
   try {
    const result = await getAllTodoData({});
    return res.status(200).json({
        status:200,
        result: result,
        message: "Successfully get All Todo Data!",
    });
   } catch (e) {
    return res.status(500).json({ status:500, message: e.message});
   }

};