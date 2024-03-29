//services/todo.service.js

import{ findAll, findToday, store } from "../repositories/todo.repository.js";

export const getAllTodoData = async () => {
    try{
        return await findAll();
    } catch(e) {
        throw Error ("Error while getting All Todo Data");
    };
};

export const getTodayTodoData = async () => {
    try{
        return await findToday();
    } catch(e) {
        throw Error ("Error while getting Today Todo Data");
    };
};

export const insertTodoData = async ({ params })  => {
    try {
        return await store ({ params });  
    } catch (e) {
        throw Error ("Error while posting Todo Data");
        }
 };   
    
