import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login/Login"
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
