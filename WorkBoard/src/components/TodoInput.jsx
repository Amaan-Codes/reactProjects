import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/TodoInput.css"
import { useTodo } from '../context/TodoContext'
function TodoInput() {
  const navigate = useNavigate()
  const {createTodo , newTodo , setNewTodo } = useTodo()
  return (
    <>
      <div className='Heading'>
        <h1>TODO</h1>
      </div>
    <div className='input-container'>
      <input type="text" placeholder='Start typing...' value={newTodo} onChange={(e)=>{
        setNewTodo(e.target.value)
      }}
      
      />
      <button type="submit"className='btn' onClick={(e)=>{
        e.preventDefault()
        navigate("/")
        if(newTodo!=""&&newTodo!=" ")
        createTodo(newTodo)
    }} >create</button>
    </div>
    </>
  )
}

export default TodoInput
