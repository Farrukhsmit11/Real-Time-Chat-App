import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login } from './pages/auth'
import { Dashboard } from "./pages"
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <Loader />
  }

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
