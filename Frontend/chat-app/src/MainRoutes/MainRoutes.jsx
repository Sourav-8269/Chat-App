import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Chat from '../Components/Chat'
import Register from '../Components/Register'
import Login from '../Components/Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/chats' element={<Chat/>} ></Route>
    </Routes>
  )
}

export default MainRoutes