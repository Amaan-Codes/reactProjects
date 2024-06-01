import React from 'react'
import { TodoProvider } from './context/TodoContext'
import { useState , useEffect} from 'react'
import "./styles/App.css"
import TodoInput from './components/TodoInput'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [newTodo , setNewTodo] = useState("")
  const [todos , setTodos] = useState([])
  const [showAllTodos , setShowAllTodos] = useState(true)
  const [showRemainingTodos , setShowRemainingTodos] = useState(false)
  const [showCompletedTodos , setShowCompletedTodos] = useState(false)
  const [completedTodos , setCompletedTodos] = useState([])
  const [uncompletedTodos , setUncompletedTodos] = useState([])
  const onClearCompleted = ()=>{
    setTodos(uncompletedTodos)
  }
  
  const createTodo = (todo)=>{
    setTodos(prev => [ {id:Date.now(),todo,completed:false}, ...prev])
    setNewTodo("")
  }

  const updateTodo = (todoMsg,todoId)=>{
    setTodos(prev=> prev.map((todo)=>todo.id===todoId?{...todo,todo:todoMsg}:todo))
  }


  const removeTodo = (todoId)=>{
    setTodos(prev=>prev.filter((todo)=>todo.id!=todoId))
  }

  const setTodoComplete = (todoId)=>{
    setTodos(prev=>prev.map((todo)=>(todo.id===todoId?{...todo,completed:true}:todo)))
  }

  const setTodoUncomplete = (todoId)=>{
    setTodos(prev=>prev.map((todo)=>(todo.id===todoId?{...todo,completed:false}:todo)))
  }

  const setTodoEditable = (todoId)=>{
    setTodos(prev=>prev.map((todo)=>todo.id===todoId?{...todo , isEditable:true}:todo))
  }

  const setTodoUneditable = (todoId)=>{
    setTodos(prev=>prev.map((todo)=>todo.id===todoId?{...todo , isEditable:false}:todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(!todos || todos.length <=0) return
    setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    setShowAllTodos(true)
    navigate("/")
    setShowCompletedTodos(false)
    setShowRemainingTodos(false)
    setCompletedTodos(todos.filter((todo)=>todo.completed===true))
    setUncompletedTodos(todos.filter((todo)=>todo.completed===false))
  },[todos])



  


  return (
    <TodoProvider value={{todos , createTodo , updateTodo , removeTodo , setTodoComplete , setTodoUncomplete , newTodo , setNewTodo , setTodoEditable , setTodoUneditable }}>
      <div className='main'>
        <div className='bg-container'>
          <TodoInput />
        </div>
        <Outlet context={[todos, completedTodos, uncompletedTodos, onClearCompleted,showCompletedTodos, showRemainingTodos ,showAllTodos , setShowAllTodos , setShowCompletedTodos , setShowRemainingTodos]}/> 
      </div>
    </TodoProvider>
  )
}

export default App
