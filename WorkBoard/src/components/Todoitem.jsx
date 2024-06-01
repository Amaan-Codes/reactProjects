import React, { useEffect } from 'react'
import "../styles/TodoItem.css"
import { useTodo } from '../context/TodoContext'


function Todoitem(props) {
    const {removeTodo , updateTodo , setTodoEditable,setTodoComplete , setTodoUncomplete , setTodoUneditable} = useTodo()
  return (
    <div>
        <div className="todo-container">
            <div>
                {
                    props.isCompleted===true?<i className="ri-checkbox-circle-fill check-icon"
                    onClick={(e)=>{
                      setTodoUncomplete(props.todo_id)
                    }}></i>:<i className="check-icon ri-checkbox-blank-circle-line"onClick={(e)=>{
                        setTodoComplete(props.todo_id)
                    }}>
                    </i>
                }
            </div>
            <input className="todo-input"type="text" value={props.value} readOnly={!props.isEditable} onChange={(e)=>{
               updateTodo(e.target.value , props.todo_id)
               
            }}/> 
            <div className="icons">
              <i className="ri-delete-bin-line delete-icon" onClick={(e)=>{
                removeTodo(props.todo_id)
              }}></i>

              {
                props.isEditable===true?<i className=" save-icon ri-save-3-line" onClick={(e)=>{
                    setTodoUneditable(props.todo_id)
                }}></i>:<i className="edit-icon ri-pencil-line" onClick={(e)=>{
                   setTodoEditable(props.todo_id)
                }}></i> 
              } 
              
            </div>
          </div>
              <div className="line">

              </div>
    </div>
  )
}

export default Todoitem
