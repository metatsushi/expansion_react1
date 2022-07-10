//services/todo.service.js

import{ findAll } from "../repositories/todo.repository.js";

export const getAllTodoData = async () => {
    try{
        return await findAll();
    } catch(e) {
        throw Error ("Error while getting All Todo Data");
    }
    
};