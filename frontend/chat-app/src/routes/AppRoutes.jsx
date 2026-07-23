import { Route, Routes } from 'react-router-dom'
import React from 'react'
import ChatApp from '../pages/chatApp/ChatApp'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/chatApp' element={<ChatApp />}></Route> 
            <Route path='*' element={<ChatApp />}></Route>
        </Routes>
    )
}

export default AppRoutes