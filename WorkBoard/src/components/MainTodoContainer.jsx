
import { NavLink  , useNavigate} from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import "../styles/MainTodoContainer.css"
import Todoitem from './Todoitem'


function MainTodoContainer() {
    const navigate = useNavigate()
    const [todos , completedTodos, uncompletedTodos, onClearCompleted,showCompletedTodos, showRemainingTodos ,showAllTodos , setShowAllTodos , setShowCompletedTodos , setShowRemainingTodos] = useOutletContext()
    return (
 <>

    {
        todos.length!=0?
    <div className='main-todo-container'>
    { 
    showAllTodos?
    todos.map((todo)=>(
        <Todoitem key={todo.id} value={todo.todo} todo_id={todo.id} isEditable={todo.isEditable} isCompleted={todo.completed} />
    )):
    showCompletedTodos?
    completedTodos.length===0&&todos.length>0?
    <h1 style={{padding:"20px"}}>Nothing is completed!</h1>:
    completedTodos.map((todo)=>(
        <Todoitem key={todo.id} value={todo.todo} todo_id={todo.id} isEditable={todo.isEditable} isCompleted={todo.completed} />
    )):
    showRemainingTodos?
    uncompletedTodos.length===0?
    <h1 style={{padding:"20px"}}>All Tasks are completed!</h1>:
    uncompletedTodos.map((todo)=>(
        <Todoitem key={todo.id} value={todo.todo} todo_id={todo.id} isEditable={todo.isEditable} isCompleted={todo.completed} />
    )):""
    }

    {
    
    }

    </div>:""
}

    {
        todos.length!=0?
        <div className="footer">

            <p className='ml-4'>{uncompletedTodos.length} todo's left
            </p>
         <div className="navigate">
            <NavLink to="/"
            className={({isActive})=>
            `
            ${isActive?"blue":"gray"}
         `
            }
            onClick={()=>{
            setShowAllTodos(true)
            setShowCompletedTodos(false)
            setShowRemainingTodos(false)
            }}><p>All</p></NavLink>
            <NavLink to="/activeTodos" className={({isActive})=>
            `
            ${isActive?"blue":"gray"}
            `
             }
         onClick={(e)=>{
         setShowCompletedTodos(false)
         setShowAllTodos(false)
         setShowRemainingTodos(true)
            }}><p>Active</p></NavLink>
         <NavLink to="/completedTodos" 
         className={({isActive})=>
         `
            ${isActive?"blue":"gray"}
         `
         }
            onClick={(e)=>{
            setShowAllTodos(false)
            setShowRemainingTodos(false)
            setShowCompletedTodos(true)
            }}><p>completed</p></NavLink>
            </div>
            <a className='clear-completed mr-4'onClick={()=>{
            onClearCompleted()
            navigate("/")
             }}>Clear completed</a>
         </div>:""
    }
</>
    )
    }

export default MainTodoContainer
