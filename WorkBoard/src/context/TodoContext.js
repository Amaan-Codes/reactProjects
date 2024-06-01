import { createContext , useContext, useState } from "react";


const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"",
            completed:false,
            isEditable:false
        }
    ], 
    createTodo:()=>{},
    updateTodo:()=>{},
    removeTodo:()=>{},
    setTodoComplete:()=>{},
    setTodoUncomplete:()=>{},
    setTodoEditable:()=>{},
    setTodoUneditable:()=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
