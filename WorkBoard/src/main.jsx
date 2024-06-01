import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter , createRoutesFromElements , Route} from "react-router-dom"
import './index.css'

import MainTodoContainer from './components/MainTodoContainer.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  [
    <Route path='/' element={<App/>}>
      <Route path='' element={<MainTodoContainer/>}></Route>
      <Route path='activeTodos' element={<MainTodoContainer/>}></Route>
      <Route path='completedTodos' element={<MainTodoContainer/>}></Route>
    </Route>
  ]
))
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
