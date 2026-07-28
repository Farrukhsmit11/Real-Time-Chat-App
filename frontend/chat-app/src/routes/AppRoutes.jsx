import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Dashboard } from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='*' element={<Dashboard />}></Route>
        </Routes>
    )
}

export default AppRoutes