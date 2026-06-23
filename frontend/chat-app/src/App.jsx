import './App.css'
import { Routes, Route } from "react-router-dom"
import Signup from './pages/auth/signUp/Signup'
import Login from "./pages/auth/login/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
