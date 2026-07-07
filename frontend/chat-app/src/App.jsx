import './App.css'
import { Login } from './pages/auth'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import Auth from "./routes/Auth"
import AppRoutes from  "./routes/AppRoutes"

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
      <Auth />
      <AppRoutes />
    </>
  )
}

export default App
