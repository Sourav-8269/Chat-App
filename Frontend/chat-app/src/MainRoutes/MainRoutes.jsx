import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Chat from '../Components/Chat'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/chats' element={<Chat/>} ></Route>
    </Routes>
  )
}

export default MainRoutes